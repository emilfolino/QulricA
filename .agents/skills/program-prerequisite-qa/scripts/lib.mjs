// Shared helpers. Node >= 20, no dependencies.
import fs from 'node:fs';
import path from 'node:path';

// "HT27" -> {term:'HT', year:2027, key:20272}; "VT28" -> key 20281 (matches the API's semester=20272 encoding)
export function parseSemester(s) {
  const m = /^(HT|VT)(\d{2})$/.exec(String(s).trim());
  if (!m) throw new Error(`Bad semester label: ${s}`);
  const year = 2000 + Number(m[2]);
  return { term: m[1], year, key: year * 10 + (m[1] === 'HT' ? 2 : 1) };
}

// "Vecka 34 (2027)" -> 202734 (sortable ordinal)
export function weekOrdinal(s) {
  const m = /Vecka\s+(\d+)\s+\((\d{4})\)/.exec(s || '');
  return m ? Number(m[2]) * 100 + Number(m[1]) : null;
}

// "Vecka 34 (2027) - Vecka 43 (2027)" -> {start, end}
export function parsePeriod(s) {
  const parts = String(s || '').split(/\s-\s/);
  return { start: weekOrdinal(parts[0]), end: weekOrdinal(parts[1]) };
}

// Was `other` finished before `course` starts? Semester is the primary unit; within the
// same semester a course only counts as prior if its period ended before this one starts.
export function isPrior(other, course) {
  if (other.semester_key < course.semester_key) return true;
  if (other.semester_key > course.semester_key) return false;
  return other.period_end != null && course.period_start != null && other.period_end < course.period_start;
}

export function readJson(file) { return JSON.parse(fs.readFileSync(file, 'utf8')); }
export function writeJson(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}
export function pad(n) { return String(n).padStart(3, '0'); }
export function analysisPath(workdir, c) { return path.join(workdir, 'analysis', `${pad(c.seq)}_${c.code}.json`); }

export function loadAnalyses(workdir, program) {
  const out = new Map();
  for (const c of program.courses) {
    const f = analysisPath(workdir, c);
    if (fs.existsSync(f)) out.set(c.seq, readJson(f));
  }
  return out;
}

export const VERDICTS = ['OK', 'CONDITIONAL', 'GAP', 'UNCLEAR'];
export const SEVERITY = { GAP: 3, UNCLEAR: 2, CONDITIONAL: 1, OK: 0 };
