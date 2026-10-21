#!/usr/bin/env node
// Validate the per-course analyses and render the QA report (Markdown + JSON side by side).
//
//   node render_report.mjs <workdir> --harness <name> --model <id>   (or env QA_HARNESS / QA_MODEL) [--out reports] [--date YYYY-MM-DD] [--allow-partial]
//
// Exit code 1 = validation errors (nothing is written), so a weak model cannot silently ship a malformed report.
// The rules checked here are documented in references/analysis-schema.md.
import fs from 'node:fs';
import path from 'node:path';
import { readJson, writeJson, loadAnalyses, VERDICTS, SEVERITY } from './lib.mjs';

const argv = process.argv.slice(2);
const workdir = argv[0];
const opt = (n, d) => { const i = argv.indexOf(`--${n}`); return i >= 0 ? argv[i + 1] : d; };
const harness = opt('harness', process.env.QA_HARNESS), model = opt('model', process.env.QA_MODEL);
if (!workdir || !harness || !model) { console.error('usage: render_report.mjs <workdir> --harness <name> --model <id> [--out reports] [--date YYYY-MM-DD] [--allow-partial]'); process.exit(2); }
const date = opt('date', new Date().toISOString().slice(0, 10));
const program = readJson(path.join(workdir, 'program.json'));
const analyses = loadAnalyses(workdir, program);

const REQ_KINDS = ['credits', 'course', 'upper-secondary', 'language', 'other'];
const REQ_STATUS = ['MET', 'MET_ONLY_VIA_ELECTIVES', 'NOT_MET', 'UNVERIFIABLE'];
const COMP_STATUS = ['COVERED', 'COVERED_CONDITIONALLY', 'UPPER_SECONDARY', 'NOT_COVERED', 'UNVERIFIABLE'];
const FINDING_TYPES = ['missing-prerequisite', 'ordering', 'elective-dependency', 'credit-shortfall', 'missing-course-plan', 'ambiguous-requirement', 'competence-gap', 'other'];
const SEV = ['high', 'medium', 'low'];
const CONF = ['high', 'medium', 'low'];
// Minimum verdict implied by a requirement / competence status.
const REQ_IMPLIES = { NOT_MET: 'GAP', MET_ONLY_VIA_ELECTIVES: 'CONDITIONAL', UNVERIFIABLE: 'UNCLEAR', MET: 'OK' };
const COMP_IMPLIES = { NOT_COVERED: 'GAP', COVERED_CONDITIONALLY: 'CONDITIONAL', UNVERIFIABLE: 'UNCLEAR', COVERED: 'OK', UPPER_SECONDARY: 'OK' };

const errors = [], missing = [];
const isStr = v => typeof v === 'string' && v.trim().length > 0;
for (const c of program.courses) {
  const a = analyses.get(c.seq), at = `#${c.seq} ${c.code} ${c.semester}`;
  if (!a) { missing.push(at); continue; }
  const e = m => errors.push(`${at}: ${m}`);
  if (a.code !== c.code || a.seq !== c.seq) e(`seq/code in file (${a.seq}/${a.code}) do not match program.json`);
  if (!VERDICTS.includes(a.verdict)) e(`verdict must be one of ${VERDICTS}`);
  if (!CONF.includes(a.confidence)) e(`confidence must be one of ${CONF}`);
  if (!isStr(a.question)) e('question missing (use the verbatim question from SKILL.md)');
  if (!isStr(a.answer)) e('answer missing (one sentence answering the question)');
  if (!isStr(a.rationale)) e('rationale missing');
  if (!Array.isArray(a.requirements)) e('requirements must be an array (may be empty only if the plan states no prerequisites)');
  if (!Array.isArray(a.assumed_competences)) e('assumed_competences must be an array');
  if (!Array.isArray(a.provides)) e('provides must be an array of short strings');
  if (!Array.isArray(a.findings)) e('findings must be an array (empty if none)');
  for (const r of a.requirements ?? []) {
    if (!isStr(r.requirement) || !REQ_KINDS.includes(r.kind) || !REQ_STATUS.includes(r.status) || !isStr(r.evidence)) e(`bad requirement entry: ${JSON.stringify(r).slice(0, 120)} (needs requirement, kind in ${REQ_KINDS}, status in ${REQ_STATUS}, evidence)`);
  }
  for (const k of a.assumed_competences ?? []) {
    if (!isStr(k.competence) || !COMP_STATUS.includes(k.status) || !isStr(k.evidence) || !Array.isArray(k.provided_by)) e(`bad competence entry: ${JSON.stringify(k).slice(0, 120)} (needs competence, status in ${COMP_STATUS}, evidence, provided_by[])`);
    if (['COVERED', 'COVERED_CONDITIONALLY'].includes(k.status) && !(k.provided_by ?? []).length) e(`competence "${k.competence}" is ${k.status} but provided_by is empty`);
  }
  for (const f of a.findings ?? []) {
    if (!FINDING_TYPES.includes(f.type) || !SEV.includes(f.severity) || !isStr(f.description) || !isStr(f.recommendation)) e(`bad finding: ${JSON.stringify(f).slice(0, 120)} (needs type in ${FINDING_TYPES}, severity in ${SEV}, description, recommendation)`);
  }
  // Consistency: the verdict may not be milder than the worst status it rests on.
  if (VERDICTS.includes(a.verdict)) {
    const implied = [...(a.requirements ?? []).map(r => REQ_IMPLIES[r.status]), ...(a.assumed_competences ?? []).map(k => COMP_IMPLIES[k.status])].filter(Boolean);
    const worst = implied.sort((x, y) => SEVERITY[y] - SEVERITY[x])[0];
    if (worst && SEVERITY[a.verdict] < SEVERITY[worst]) e(`verdict ${a.verdict} is milder than the evidence (${worst}); fix the verdict or the statuses`);
    if (a.verdict !== 'OK' && !(a.findings ?? []).length) e(`verdict ${a.verdict} requires at least one finding`);
    if (c.plan_file === null && !['UNCLEAR'].includes(a.verdict)) e('no course plan is published, so the verdict must be UNCLEAR with a missing-course-plan finding');
  }
}
if (missing.length && !argv.includes('--allow-partial')) errors.push(`${missing.length} course occurrence(s) not analysed: ${missing.join(', ')} (use --allow-partial for a draft)`);
if (errors.length) { console.error(`REPORT NOT WRITTEN - ${errors.length} problem(s):\n- ` + errors.join('\n- ')); process.exit(1); }

// ---------- render ----------
const cell = s => String(s ?? '').replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ').trim() || '-';
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9.]+/g, '-').replace(/^-|-$/g, '');
const done = program.courses.filter(c => analyses.has(c.seq));
const counts = Object.fromEntries(VERDICTS.map(v => [v, done.filter(c => analyses.get(c.seq).verdict === v).length]));
let n = 0;
const findings = done.flatMap(c => analyses.get(c.seq).findings.map(f => ({ id: `F-${String(++n).padStart(3, '0')}`, seq: c.seq, course: c.code, semester: c.semester, course_name: c.name, ...f })));
findings.sort((x, y) => SEV.indexOf(x.severity) - SEV.indexOf(y.severity) || x.seq - y.seq);
const worstFirst = [...done].filter(c => analyses.get(c.seq).verdict !== 'OK');

const L = [];
L.push('---',
  'report_schema: qulrica/program-prerequisite-qa@1',
  `program_name: "${program.name}"`, `program_code: ${program.program_code}`, `program_start: ${program.start_semester}`,
  `program_hp: ${program.total_hp}`, `program_url: ${program.source_url}`,
  `harness: ${harness}`, `model: ${model}`, `report_date: ${date}`,
  `courses_reviewed: ${done.length}`, `courses_in_program: ${program.courses.length}`,
  `verdicts: { ${VERDICTS.map(v => `${v}: ${counts[v]}`).join(', ')} }`,
  `findings: { high: ${findings.filter(f => f.severity === 'high').length}, medium: ${findings.filter(f => f.severity === 'medium').length}, low: ${findings.filter(f => f.severity === 'low').length} }`,
  ...(missing.length ? [`partial: true`] : []), '---', '');
L.push(`# Prerequisite QA: ${program.name} (${program.program_code}, ${program.start_semester})`, '',
  `| | |`, `|---|---|`,
  `| Program | ${program.name}, ${program.total_hp} hp |`, `| Program code / start | ${program.program_code} / ${program.start_semester} |`,
  `| Source | ${program.source_url} |`, `| Reviewed by | harness \`${harness}\`, model \`${model}\` |`,
  `| Date | ${date} (course plans fetched ${program.fetched_at.slice(0, 10)}) |`,
  `| Course occurrences | ${program.courses.length} (${program.totals.mandatory} mandatory, ${program.totals.elective} elective) |`, '');
if (missing.length) L.push(`> **Partial report:** ${missing.length} course occurrence(s) not yet analysed: ${missing.join(', ')}`, '');
L.push('## 1. Summary', '', 'Question asked of every course: *Can a student with the skills, knowledge and dispositions obtained in the program so far (guaranteed = mandatory courses) plus upper-secondary education complete this course, judging from its course plan?*', '',
  '| Verdict | Courses | Meaning |', '|----|---|-------------------------------|',
  `| OK | ${counts.OK} | Everything the course assumes is guaranteed by earlier mandatory courses or upper-secondary education |`,
  `| CONDITIONAL | ${counts.CONDITIONAL} | Only works if the student chose a particular elective, or a prerequisite is concurrent |`,
  `| GAP | ${counts.GAP} | Something the course requires/assumes is provided nowhere before it |`,
  `| UNCLEAR | ${counts.UNCLEAR} | The plan is missing, ambiguous or too thin to judge |`, '');
if (!worstFirst.length) L.push('No inconsistencies found.', '');
else { L.push('| # | Semester | Course | Type | Verdict | Confidence | Headline |', '|--|----|-------|-----|------|-----|------------------------|');
  for (const c of worstFirst) { const a = analyses.get(c.seq); L.push(`| ${c.seq} | ${c.semester} | [${c.code} ${cell(c.name)}](#${slug(`${c.seq}-${c.code}`)}) | ${c.type} | **${a.verdict}** | ${a.confidence} | ${cell(a.findings[0]?.description)} |`); }
  L.push(''); }

L.push('## 2. Findings', '');
if (!findings.length) L.push('None.', '');
else { L.push('| ID | Severity | Course | Semester | Type | Description | Recommendation |', '|---|----|----|----|------|--------------------|--------------------|');
  for (const f of findings) L.push(`| ${f.id} | ${f.severity} | ${f.course} | ${f.semester} | ${f.type} | ${cell(f.description)} | ${cell(f.recommendation)} |`);
  L.push(''); }

L.push('## 3. Review by semester', '');
let sem = null;
for (const c of done) {
  const a = analyses.get(c.seq);
  if (c.semester !== sem) { sem = c.semester; L.push(`### ${sem}`, ''); }
  L.push(`#### ${c.seq}. ${c.code} ${c.name} - ${a.verdict}`, `<a id="${slug(`${c.seq}-${c.code}`)}"></a>`, '',
    `- ${c.hp} hp, ${c.type}, ${c.level ?? 'level n/a'}, läsperiod ${c.study_period ?? '?'} (${c.period_text ?? 'period n/a'})`,
    `- Course plan: ${c.plan_url ?? '**not published**'}`,
    `- Guaranteed hp before start: ${c.mandatory_hp_before_semester} (max ${c.max_hp_before_semester} with all electives)`,
    `- Verdict: **${a.verdict}** (confidence ${a.confidence})`, '', `**Answer:** ${a.answer.trim()}`, '', a.rationale.trim(), '');
  if (a.requirements.length) { L.push('Formal prerequisites:', '', '| Requirement | Kind | Status | Evidence |', '|-----------|-----|------|------------------------|');
    for (const r of a.requirements) L.push(`| ${cell(r.requirement)} | ${r.kind} | ${r.status} | ${cell(r.evidence)} |`); L.push(''); }
  if (a.assumed_competences.length) { L.push('Assumed competences:', '', '| Competence | Status | Provided by | Evidence |', '|-----------|------|------|------------------------|');
    for (const k of a.assumed_competences) L.push(`| ${cell(k.competence)} | ${k.status} | ${cell(k.provided_by.join(', '))} | ${cell(k.evidence)} |`); L.push(''); }
  const ids = findings.filter(f => f.seq === c.seq).map(f => f.id); if (ids.length) L.push(`Findings: ${ids.join(', ')}`, '');
}

L.push('## 4. Method and limits', '',
  '- Course plans were fetched from plan.bth.se for the exact semester each course is scheduled in; the course order is by semester, then by study period.',
  '- A course counts as prior knowledge only if it finishes before the reviewed course starts. Electives are never treated as guaranteed.',
  '- Verdicts are an LLM judgment of the text of the course plans (prerequisites, content, learning outcomes, examination). They flag candidates for human review; they are not decisions. Compare reports from different models via the `harness`/`model` fields.',
  '- Competence coverage is judged from learning outcomes and content, not from what is actually taught or examined in practice.', '');
L.push('## 5. Machine-readable appendix', '', '```json',
  JSON.stringify({ schema: 'qulrica/program-prerequisite-qa@1', program: { code: program.program_code, name: program.name, start: program.start_semester, url: program.source_url }, harness, model, date, verdicts: counts,
    courses: done.map(c => ({ seq: c.seq, code: c.code, semester: c.semester, type: c.type, verdict: analyses.get(c.seq).verdict, confidence: analyses.get(c.seq).confidence })), findings: findings.map(({ course_name, ...f }) => f) }, null, 2),
  '```', '');

fs.mkdirSync(opt('out', 'reports'), { recursive: true });
const base = path.join(opt('out', 'reports'), `${program.program_code}-${program.start_semester}__${slug(harness)}__${slug(model)}__${date}`);
fs.writeFileSync(`${base}.md`, L.join('\n'));
writeJson(`${base}.json`, { program, harness, model, date, verdicts: counts, analyses: done.map(c => analyses.get(c.seq)), findings });
console.log(`Wrote ${base}.md and ${base}.json\nVerdicts: ${JSON.stringify(counts)}; findings: ${findings.length}`);
