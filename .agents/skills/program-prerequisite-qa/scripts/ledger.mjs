#!/usr/bin/env node
// Print the briefing for one course occurrence: what a student has accumulated before it starts.
//
//   node ledger.mjs <workdir> <seq>
//
// "Guaranteed" = mandatory courses that finished before this course starts (a student cannot skip them).
// Electives are listed separately: a student may not have taken them, so they never count as guaranteed.
// Competences ("provides") come from the analysis files of already-reviewed courses, so review in seq order.
import fs from 'node:fs';
import path from 'node:path';
import { readJson, isPrior, loadAnalyses } from './lib.mjs';

const [workdir, seqArg] = process.argv.slice(2);
if (!workdir || !seqArg) { console.error('usage: ledger.mjs <workdir> <seq>'); process.exit(2); }
const program = readJson(path.join(workdir, 'program.json'));
const analyses = loadAnalyses(workdir, program);
const cur = program.courses.find(c => c.seq === Number(seqArg));
if (!cur) { console.error(`No course with seq ${seqArg} (1..${program.courses.length})`); process.exit(2); }

const sum = (cs, f = () => true) => cs.filter(f).reduce((a, c) => a + (c.hp ?? 0), 0);
// An elective listed twice (several offerings) can only be passed once.
const dedupe = cs => [...new Map(cs.map(c => [c.code, c])).values()];
const prior = program.courses.filter(c => isPrior(c, cur) && c.seq !== cur.seq);
const guaranteed = dedupe(prior.filter(c => c.type === 'mandatory'));
const electives = dedupe(prior.filter(c => c.type !== 'mandatory'));
const concurrent = program.courses.filter(c => !isPrior(c, cur) && c.semester_key === cur.semester_key && c.seq !== cur.seq);
const later = program.courses.filter(c => c.semester_key > cur.semester_key);

const byArea = cs => { const m = {}; for (const c of cs) for (const a of c.main_areas) m[a] = (m[a] ?? 0) + (c.hp ?? 0); return m; };
const fmtAreas = m => Object.entries(m).sort().map(([a, hp]) => `${a} ${hp}`).join('; ') || '-';
const row = c => {
  const a = analyses.get(c.seq);
  const prov = a ? (a.provides?.length ? a.provides.join('; ') : '(no provides recorded)') : '(NOT ANALYSED YET - read ' + (c.plan_file ?? 'no plan') + ')';
  return `- ${c.code} ${c.name} [${c.semester}, ${c.hp} hp, ${c.level ?? '?'}, ${c.main_areas.join('/') || 'no main area'}]: ${prov}`;
};
// "Fördjupning: G1N - Grundnivå, ..." from the plan header (progression level within the cycle)
const fordjupning = c => c.plan_file && /^Fördjupning:\s*(.+)$/m.exec(fs.readFileSync(path.join(workdir, c.plan_file), 'utf8'))?.[1];

const L = [];
L.push(`# Briefing: #${cur.seq} ${cur.code} ${cur.name} (${cur.semester}, läsperiod ${cur.study_period ?? '?'}, ${cur.hp} hp, ${cur.type}, ${cur.level ?? '?'})`);
L.push(`Fördjupning (level): ${fordjupning(cur) ?? 'n/a'}`);
L.push(`Course plan: ${cur.plan_file ? path.join(workdir, cur.plan_file) : 'NONE PUBLISHED'}`);
if (cur.duplicate_of_earlier_occurrence) L.push('Note: this course already appears earlier in the program (another offering); judge this occurrence on its own position.');
L.push('', '## Credit accounting before this course starts',
  `- Guaranteed (mandatory, finished before start): ${sum(guaranteed)} hp; of which grundnivå ${sum(guaranteed, c => /Grund/.test(c.level ?? ''))}, avancerad nivå ${sum(guaranteed, c => /Avancerad/.test(c.level ?? ''))}`,
  `- Guaranteed hp by main subject area: ${fmtAreas(byArea(guaranteed))}`,
  `- Upper bound if the student also took every earlier elective: ${sum(guaranteed) + sum(electives)} hp; by area: ${fmtAreas(byArea([...guaranteed, ...electives]))}`,
  `- Courses with main area "-" (e.g. statistics, physics) count toward no subject area; judge such credit requirements by content, not by the area sums.`,
  `- Courses count only if finished before this course's period starts (semester order; same semester only if the earlier period has ended).`);
L.push('', `## Guaranteed prior courses (mandatory) - ${guaranteed.length}`, ...(guaranteed.length ? guaranteed.map(row) : ['- (none: only upper-secondary knowledge can be assumed)']));
L.push('', `## Earlier ELECTIVES (NOT guaranteed; a student may not have taken them) - ${electives.length}`, ...(electives.length ? electives.map(row) : ['- (none)']));
L.push('', '## Same semester, not finished before start (concurrent - cannot be relied on)', ...(concurrent.length ? concurrent.map(c => `- ${c.code} ${c.name} [${c.type}, läsperiod ${c.study_period}]`) : ['- (none)']));
L.push('', '## Placed LATER in the program (only relevant if a prerequisite names one of these)', later.length ? [...new Set(later.map(c => c.code))].join(', ') : '(none)');
console.log(L.join('\n'));
