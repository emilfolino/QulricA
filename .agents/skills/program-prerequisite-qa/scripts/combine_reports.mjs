#!/usr/bin/env node
// Combine the reports of several agents (harness/model runs) on the same program into one executive report.
//
//   node combine_reports.mjs <PROGRAM>-<START> [--reports reports] [--narrative file.md] [--date YYYY-MM-DD]
//   node combine_reports.mjs --inputs a.json b.json [...]      (explicit report JSON files)
//
// Reads <reports>/<PROGRAM>-<START>__*.json (written by render_report.mjs). If one harness+model has several
// reports, the latest is used. Writes <reports>/combined/<PROGRAM>-<START>__combined__<date>.{md,json}.
// All numbers and groupings are computed here; the optional narrative is the only model-written text.
import fs from 'node:fs';
import path from 'node:path';
import { readJson, writeJson, VERDICTS, SEVERITY } from './lib.mjs';

const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : d; };
const reportsDir = opt('reports', 'reports');
const date = opt('date', new Date().toISOString().slice(0, 10));
const iIn = argv.indexOf('--inputs');
let files;
if (iIn >= 0) files = argv.slice(iIn + 1).filter(a => !a.startsWith('--'));
else {
  const prefix = argv.find((a, i) => !a.startsWith('--') && !['--reports', '--narrative', '--date'].includes(argv[i - 1]));
  if (!prefix) { console.error('usage: combine_reports.mjs <PROGRAM>-<START> [--reports dir] [--narrative file.md]  |  --inputs a.json b.json'); process.exit(2); }
  files = fs.readdirSync(reportsDir).filter(f => f.startsWith(`${prefix}__`) && f.endsWith('.json') && !f.includes('__combined__')).map(f => path.join(reportsDir, f));
}
if (files.length < 2) { console.error(`Need at least 2 reports to combine, found ${files.length}. Run the skill with another harness/model first.`); process.exit(1); }

// ---- load runs, newest per harness+model ----
const byKey = new Map();
for (const f of files) {
  const r = readJson(f), key = `${r.harness} / ${r.model}`;
  if (!byKey.has(key) || r.date > byKey.get(key).date) byKey.set(key, { ...r, key, file: f });
}
const runs = [...byKey.values()].sort((a, b) => a.key.localeCompare(b.key));
if (runs.length < 2) { console.error('All reports are from the same harness+model; nothing to combine.'); process.exit(1); }
const N = runs.length;
const prog = runs[0].program;
const sig = r => r.program.courses.map(c => `${c.seq}:${c.code}:${c.semester}`).join(',');
for (const r of runs) {
  if (r.program.program_code !== prog.program_code || r.program.start_semester !== prog.start_semester) { console.error(`Reports are for different programs: ${r.file}`); process.exit(1); }
}
const warnings = runs.filter(r => sig(r) !== sig(runs[0])).map(r => `${r.key}: course list differs from ${runs[0].key} (plans fetched at different times?). Courses are matched by seq+code; mismatches are skipped.`);

// ---- per-course matrix ----
const rank = v => SEVERITY[v] ?? -1;
const matrix = prog.courses.map(c => {
  const per = {};
  for (const r of runs) {
    const rc = r.program.courses.find(x => x.seq === c.seq && x.code === c.code);
    const a = rc && r.analyses.find(x => x.seq === c.seq && x.code === c.code);
    if (a) per[r.key] = { verdict: a.verdict, confidence: a.confidence, answer: a.answer, rationale: a.rationale };
  }
  const vs = Object.values(per).map(p => p.verdict), n = vs.length;
  const cnt = Object.fromEntries(VERDICTS.map(v => [v, vs.filter(x => x === v).length]));
  const top = VERDICTS.reduce((a, b) => (cnt[b] > cnt[a] ? b : a));
  const consensus = n && cnt[top] > n / 2 ? top : 'SPLIT';
  const flagged = vs.filter(v => v !== 'OK').length;
  return { seq: c.seq, code: c.code, name: c.name, semester: c.semester, type: c.type, per, answered: n, consensus, unanimous: n > 0 && cnt[top] === n, flagged_by: flagged, any_flagged: flagged > 0 };
});

// ---- findings: cluster by course + type ----
const clusters = new Map();
for (const r of runs) for (const f of r.findings) {
  const k = `${f.seq}|${f.type}`;
  if (!clusters.has(k)) clusters.set(k, { seq: f.seq, course: f.course, semester: f.semester, type: f.type, items: [] });
  clusters.get(k).items.push({ run: r.key, id: f.id, severity: f.severity, description: f.description, recommendation: f.recommendation });
}
const SEVS = ['high', 'medium', 'low'];
const list = [...clusters.values()].map(c => {
  const support = new Set(c.items.map(i => i.run)).size;
  const sev = SEVS.find(s => c.items.some(i => i.severity === s));
  const otherTypes = [...new Set([...clusters.values()].filter(o => o.seq === c.seq && o.type !== c.type).map(o => o.type))];
  return { ...c, support, runs: [...new Set(c.items.map(i => i.run))], severity: sev, tier: support === N ? 'consensus' : support > N / 2 ? 'majority' : 'minority', other_types_same_course: otherTypes };
}).sort((a, b) => SEVS.indexOf(a.severity) - SEVS.indexOf(b.severity) || b.support - a.support || a.seq - b.seq);
list.forEach((c, i) => { c.id = `C-${String(i + 1).padStart(3, '0')}`; });
const priority = list.filter(c => c.tier !== 'minority');
const minority = list.filter(c => c.tier === 'minority');

// ---- statistics ----
const answered = matrix.filter(m => m.answered === N);
const unanimous = answered.filter(m => m.unanimous).length;
const pct = (a, b) => (b ? `${Math.round((100 * a) / b)}%` : 'n/a');
const pairs = [];
for (let i = 0; i < N; i++) for (let j = i + 1; j < N; j++) {
  const a = runs[i].key, b = runs[j].key, both = matrix.filter(m => m.per[a] && m.per[b]);
  pairs.push({ a, b, courses: both.length,
    exact: both.filter(m => m.per[a].verdict === m.per[b].verdict).length,
    flag: both.filter(m => (m.per[a].verdict === 'OK') === (m.per[b].verdict === 'OK')).length });
}
const sevCount = r => Object.fromEntries(SEVS.map(s => [s, r.findings.filter(f => f.severity === s).length]));
const narrativeFile = opt('narrative');
const narrative = narrativeFile ? fs.readFileSync(narrativeFile, 'utf8').trim() : null;

// ---- render ----
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ').trim() || '-';
const clip = (s, n) => (String(s).length > n ? String(s).slice(0, n - 1).trimEnd() + '…' : String(s));
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');
const short = k => k.replace(' / ', ' ');
const disagreements = matrix.filter(m => m.answered > 1 && !m.unanimous);
const consensusIssues = matrix.filter(m => m.unanimous && m.consensus !== 'OK');
const L = [];
L.push('---', 'report_schema: qulrica/program-prerequisite-qa-combined@1',
  `program_name: "${prog.name}"`, `program_code: ${prog.program_code}`, `program_start: ${prog.start_semester}`, `program_url: ${prog.source_url}`,
  `report_date: ${date}`, `runs: ${N}`, 'run_list:', ...runs.map(r => `  - { harness: ${r.harness}, model: ${r.model}, date: ${r.date} }`),
  `courses: ${prog.courses.length}`, `unanimous_verdicts: ${unanimous}`, `verdict_disagreements: ${disagreements.length}`,
  `issues: { consensus: ${list.filter(c => c.tier === 'consensus').length}, majority: ${list.filter(c => c.tier === 'majority').length}, minority: ${minority.length} }`, '---', '');
L.push(`# Combined executive report: ${prog.name} (${prog.program_code}, ${prog.start_semester})`, '',
  `Prerequisite QA of ${prog.courses.length} course occurrences by ${N} independent agent runs: ${runs.map(r => `\`${short(r.key)}\``).join(', ')}.`, '',
  '## 1. Executive summary', '');
if (narrative) L.push(narrative, '');
L.push('Key figures (computed):', '',
  `- ${N} runs agree on the verdict for ${unanimous} of ${answered.length} courses (${pct(unanimous, answered.length)}); ${disagreements.length} ${disagreements.length === 1 ? "course has" : "courses have"} differing verdicts.`,
  `- ${consensusIssues.length} ${consensusIssues.length === 1 ? 'course is' : 'courses are'} flagged (not OK) by every run: ${consensusIssues.map(m => `${m.code} ${m.semester}`).join(', ') || 'none'}.`,
  `- ${priority.length} issues were reported by more than half of the runs (${list.filter(c => c.tier === 'consensus').length} by all); ${minority.length} by a minority of runs only and need verification.`,
  `- High-severity issues with majority or consensus support: ${priority.filter(c => c.severity === 'high').length}.`, '');
if (warnings.length) L.push(...warnings.map(w => `> **Warning:** ${w}`), '');

L.push('## 2. Priority issues (reported by a majority of runs)', '',
  'Agents describe the same problem in different words, so issues are grouped by course and finding type. *Support* = number of runs reporting it. *Severity* is the highest any run gave.', '');
if (!priority.length) L.push('None.', '');
else { L.push('| ID | Severity | Support | Course | Semester | Type | What | Recommendation |', '|-----|----|----|----|----|-----|---------------------|---------------------|');
  for (const c of priority) { const best = c.items.slice().sort((a, b) => SEVS.indexOf(a.severity) - SEVS.indexOf(b.severity))[0];
    L.push(`| ${c.id} | ${c.severity} | ${c.support}/${N} | ${c.course} | ${c.semester} | ${c.type} | ${cell(best.description)} | ${cell(best.recommendation)} |`); }
  L.push(''); }

L.push('## 3. Disagreements to adjudicate', '', 'Courses where the runs reached different verdicts. A human (or a further run) should decide these; reasoning of each run is quoted.', '');
if (!disagreements.length) L.push('None: all runs agree on every verdict.', '');
else {
  L.push(`| # | Semester | Course | Type | ${runs.map(r => short(r.key)).join(' | ')} |`, `|--|----|-------|-----|${runs.map(() => '------').join('|')}|`);
  for (const m of disagreements) L.push(`| ${m.seq} | ${m.semester} | ${m.code} ${cell(m.name)} | ${m.type} | ${runs.map(r => m.per[r.key]?.verdict ?? '-').join(' | ')} |`);
  L.push('');
  for (const m of disagreements) { L.push(`#### ${m.seq}. ${m.code} ${m.name} (${m.semester})`, '');
    for (const r of runs) { const p = m.per[r.key]; if (p) L.push(`- **${short(r.key)}**: ${p.verdict} (${p.confidence}). ${cell(clip(p.rationale, 420))}`); }
    L.push(''); }
}

L.push('## 4. Findings reported by a minority of runs', '', 'Not corroborated by a majority; treat as hypotheses. If another run flagged the same course under a different finding type, it is noted.', '');
if (!minority.length) L.push('None.', '');
else { L.push('| ID | Severity | Reported by | Course | Semester | Type | What | Other runs on this course |', '|-----|----|-----|----|----|-----|---------------------|-----|');
  for (const c of minority) L.push(`| ${c.id} | ${c.severity} | ${c.runs.map(short).join(', ')} | ${c.course} | ${c.semester} | ${c.type} | ${cell(c.items[0].description)} | ${c.other_types_same_course.join(', ') || '-'} |`);
  L.push(''); }

L.push('## 5. Runs and agreement', '',
  '| Harness | Model | Date | OK | CONDITIONAL | GAP | UNCLEAR | Findings (high/medium/low) |', '|----|----|----|--|---|--|---|-----|',
  ...runs.map(r => { const s = sevCount(r); return `| ${r.harness} | ${r.model} | ${r.date} | ${r.verdicts.OK} | ${r.verdicts.CONDITIONAL} | ${r.verdicts.GAP} | ${r.verdicts.UNCLEAR} | ${s.high}/${s.medium}/${s.low} |`; }), '',
  'Pairwise agreement. *Exact* = same verdict; *flag* = both say OK or both say not OK.', '',
  '| Run A | Run B | Courses | Exact verdict | Flag (OK vs not OK) |', '|------|------|---|---|---|',
  ...pairs.map(p => `| ${short(p.a)} | ${short(p.b)} | ${p.courses} | ${p.exact} (${pct(p.exact, p.courses)}) | ${p.flag} (${pct(p.flag, p.courses)}) |`), '');

L.push('## 6. Course matrix', '', `| # | Semester | Course | Type | ${runs.map(r => short(r.key)).join(' | ')} | Consensus |`, `|--|----|--------|-----|${runs.map(() => '-----').join('|')}|-----|`,
  ...matrix.map(m => `| ${m.seq} | ${m.semester} | ${m.code} ${cell(m.name)} | ${m.type} | ${runs.map(r => m.per[r.key]?.verdict ?? '-').join(' | ')} | **${m.consensus}**${m.unanimous ? '' : ' (not unanimous)'} |`), '');

L.push('## 7. Method and limits', '',
  `- Source: the validated per-run reports (\`${runs.map(r => path.basename(r.file)).join('`, `')}\`). Each run reviewed the same program independently; this report only compares them.`,
  '- Consensus verdict = the verdict given by more than half of the runs, otherwise SPLIT. Issues are matched by course and finding type, so one problem reported under two types counts as two minority issues; look at the "other runs" column before dismissing a minority finding.',
  '- Agreement between runs is not correctness: models can share the same blind spot. Majority support raises confidence, it does not prove the finding. All verdicts are LLM judgments of course-plan text and flag candidates for human review.',
  ...(narrative ? ['- The narrative in section 1 was written by an agent from the figures in this report; everything else is computed.'] : []), '');
const out = { schema: 'qulrica/program-prerequisite-qa-combined@1', program: { code: prog.program_code, name: prog.name, start: prog.start_semester, url: prog.source_url }, date,
  runs: runs.map(r => ({ harness: r.harness, model: r.model, date: r.date, verdicts: r.verdicts, source: r.file })), unanimous_verdicts: unanimous, pairwise: pairs,
  issues: list.map(({ items, ...c }) => ({ ...c, items })), matrix: matrix.map(({ per, ...m }) => ({ ...m, verdicts: Object.fromEntries(Object.entries(per).map(([k, v]) => [k, v.verdict])) })) };
L.push('## 8. Machine-readable appendix', '', '```json', JSON.stringify(out, null, 2), '```', '');

const dir = path.join(reportsDir, 'combined'); fs.mkdirSync(dir, { recursive: true });
const base = path.join(dir, `${prog.program_code}-${prog.start_semester}__combined__${date}`);
const md = L.join('\n');
fs.writeFileSync(`${base}.md`, md); writeJson(`${base}.json`, out);
console.log(md.slice(0, md.indexOf('## 6. Course matrix')));
console.log(`\nWrote ${base}.md and ${base}.json`);
