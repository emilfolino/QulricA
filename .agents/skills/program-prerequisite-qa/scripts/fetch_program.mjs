#!/usr/bin/env node
// Fetch an educational program from plan.bth.se and all its course plans into a work directory.
//
//   node fetch_program.mjs <program-url> [--out work/<name>] [--lang sv|en]
//
// Needs `npm install` (playwright-core) and a Chromium/Chrome binary. The program page is a
// Blazor Server app (content arrives over a websocket), so it must be rendered by a browser.
// Set CHROMIUM_PATH to override browser auto-detection.
//
// Output:
//   <out>/program.json              ordered course list (the contract used by every other script)
//   <out>/courses/<code>_<sem>.txt  full course-plan text (as rendered)
//   <out>/courses/<code>_<sem>.json the same, split into sections
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright-core';
import { parseSemester, parsePeriod, writeJson } from './lib.mjs';

const args = process.argv.slice(2);
const url = args.find(a => /^https?:/.test(a));
const opt = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
if (!url) { console.error('usage: fetch_program.mjs <program-url> [--out dir] [--lang sv|en]'); process.exit(2); }
const lang = opt('lang', 'sv');
const programId = url.split('/').filter(Boolean).pop();
const out = opt('out', path.join('work', programId.slice(0, 8)));

function findBrowser() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  for (const n of ['chromium', 'chromium-browser', 'google-chrome', 'google-chrome-stable', 'chrome']) {
    try { return execFileSync('which', [n], { encoding: 'utf8' }).trim(); } catch { /* next */ }
  }
  for (const p of ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe']) if (fs.existsSync(p)) return p;
  throw new Error('No Chromium/Chrome found. Install one or set CHROMIUM_PATH.');
}

const browser = await chromium.launch({ executablePath: findBrowser(), args: ['--no-sandbox'] });
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForSelector('.bth-list-dropdown', { timeout: 30000 }).catch(() => {
    throw new Error('Program page rendered no course list. Wrong URL, or plan.bth.se changed its markup.');
  });

  const raw = await page.evaluate(() => {
    const txt = e => e?.innerText?.trim() ?? '';
    const h2 = document.querySelector('h2');
    const header = [...document.querySelectorAll('.d-flex.justify-content-start > p')].slice(0, 2).map(txt);
    const courses = [...document.querySelectorAll('.bth-list-dropdown')].map(e => {
      const pairs = {};
      e.querySelectorAll('.bth-list-dropdown-hidden .d-flex.justify-content-start').forEach(d => {
        const ps = d.querySelectorAll(':scope > p');
        if (ps.length === 2) pairs[txt(ps[0])] = txt(ps[1]);
      });
      const bolds = [...e.querySelectorAll('.d-flex.justify-content-between > div:first-child b')].map(txt);
      return {
        head: txt(e.querySelector('.d-flex.justify-content-between > div > div p')),
        code: bolds[0], semester: bolds[1], pairs,
        planUrl: [...e.querySelectorAll('a')].map(a => a.href).find(h => h.includes('courseplanbycode')) ?? null,
      };
    });
    return { title: txt(h2.querySelector('b')), headline: txt(h2), header, courses };
  });

  const hpOf = s => { const m = /(\d+(?:[.,]\d+)?)\s*hp\s*$/.exec(s); return m ? Number(m[1].replace(',', '.')) : null; };
  const courses = raw.courses.map((c, i) => {
    const sem = parseSemester(c.semester);
    const per = parsePeriod(c.pairs['Period']);
    return {
      page_order: i, code: c.code, name: c.head.replace(/\s*\d+(?:[.,]\d+)?\s*hp\s*$/, ''), hp: hpOf(c.head),
      semester: c.semester, semester_key: sem.key,
      period_text: c.pairs['Period'] ?? null, period_start: per.start, period_end: per.end,
      study_period: c.pairs['Läsperiod'] ?? null,
      type: c.pairs['Typ'] === 'Obligatorisk' ? 'mandatory' : c.pairs['Typ'] === 'Valbar' ? 'elective' : 'unknown',
      type_text: c.pairs['Typ'] ?? null,
      level: c.pairs['Utbildningsnivå'] ?? null,
      main_areas: (c.pairs['Huvudområden'] ?? '').split(/,\s+/).map(x => x.trim()).filter(x => x && x !== '-'), language: c.pairs['Kursen ges på'] ?? null,
      department: c.pairs['Institution'] ?? null,
      plan_url: c.planUrl ? c.planUrl.replace(/lang=\w+/, `lang=${lang}`) : null,
    };
  });

  // Chronological order; ties keep the order of the program page.
  courses.sort((a, b) => a.semester_key - b.semester_key || (a.period_start ?? 0) - (b.period_start ?? 0) || a.page_order - b.page_order);
  const seen = new Set();
  let mand = 0, all = 0, prevKey = null, mandBefore = 0, allBefore = 0;
  courses.forEach((c, i) => {
    c.seq = i + 1;
    if (c.semester_key !== prevKey) { mandBefore = mand; allBefore = all; prevKey = c.semester_key; }
    c.mandatory_hp_before_semester = mandBefore;   // hp a student is guaranteed to have passed
    c.max_hp_before_semester = allBefore;          // hp if every earlier elective was also taken
    c.duplicate_of_earlier_occurrence = seen.has(c.code);
    seen.add(c.code);
    all += c.hp ?? 0; if (c.type === 'mandatory') mand += c.hp ?? 0;
  });

  // Course plans: plain HTML from a public, rate-limited API (HTTP 429 + Retry-After), rendered to text by the
  // browser. Resumable: plans already on disk are not fetched again.
  fs.mkdirSync(path.join(out, 'courses'), { recursive: true });
  const failures = [];
  const fetchHtml = async u => {
    for (let attempt = 0; attempt < 8; attempt++) {
      const res = await fetch(u);
      if (res.status !== 429) { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.text(); }
      const wait = Number(res.headers.get('retry-after') ?? 20) + 1;
      console.error(`  rate limited, waiting ${wait}s`);
      await new Promise(r => setTimeout(r, wait * 1000));
    }
    throw new Error('rate limit: gave up after 8 retries');
  };
  for (const c of courses) {
    c.plan_file = null;
    if (!c.plan_url) { failures.push(`${c.code} ${c.semester}: no course plan is published (no link on the program page)`); continue; }
    const base = `${c.code}_${c.semester}`;
    try {
      let sections;
      if (fs.existsSync(path.join(out, 'courses', `${base}.json`))) {
        sections = JSON.parse(fs.readFileSync(path.join(out, 'courses', `${base}.json`), 'utf8')).sections;
      } else {
        await page.setContent(await fetchHtml(c.plan_url));
        const plan = await page.evaluate(() => ({ text: document.body.innerText, heads: [...document.querySelectorAll('h2')].map(h => h.innerText.trim()) }));
        // Split into sections at the <h2> headings ("2. Förkunskapskrav", "3.2 Innehåll", ...).
        sections = {}; let pos = 0, last = null;
        for (const h of plan.heads) {
          const at = plan.text.indexOf(h, pos);
          if (at < 0) continue;
          if (last) sections[last] = plan.text.slice(pos, at).trim();
          last = h; pos = at + h.length;
        }
        if (last) sections[last] = plan.text.slice(pos).trim();
        fs.writeFileSync(path.join(out, 'courses', `${base}.txt`), plan.text);
        writeJson(path.join(out, 'courses', `${base}.json`), { code: c.code, semester: c.semester, url: c.plan_url, sections });
        await new Promise(r => setTimeout(r, 1500));
      }
      c.plan_file = `courses/${base}.txt`;
      // Section 2 comes in two templates: "2. Förkunskapskrav" or "2. Förkunskaper" + "2.1 Behörighetskrav", "2.2 ...".
      const pre = Object.entries(sections).filter(([k]) => /^2(\.\d+)?\.?\s/.test(k)).map(([k, v]) => (v ? `${k}\n${v}` : k));
      c.prerequisites_text = pre.map(t => t.split('\n').slice(1).join('\n').trim() ? t : '').filter(Boolean).join('\n\n') || null;
      if (c.prerequisites_text === null) failures.push(`${c.code} ${c.semester}: prerequisites section empty (read ${c.plan_file} manually)`);
    } catch (e) { failures.push(`${c.code} ${c.semester}: ${e.message}`); }
  }

  const program = {
    schema: 'qulrica/program@1', source_url: url, fetched_at: new Date().toISOString(),
    program_code: raw.header[0], start_semester: raw.header[1], name: raw.title, headline: raw.headline,
    total_hp: hpOf(raw.headline), plan_language: lang,
    totals: { courses: courses.length, mandatory: courses.filter(c => c.type === 'mandatory').length, elective: courses.filter(c => c.type === 'elective').length },
    fetch_failures: failures, courses,
  };
  writeJson(path.join(out, 'program.json'), program);
  console.log(`${program.name} (${program.program_code}, start ${program.start_semester}, ${program.total_hp} hp): ${courses.length} course occurrences -> ${out}/program.json`);
  if (failures.length) { console.error(`WARNING: ${failures.length} fetch problem(s):\n  ` + failures.join('\n  ')); process.exitCode = 1; }
} finally { await browser.close(); }
