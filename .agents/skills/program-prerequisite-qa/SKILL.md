---
name: program-prerequisite-qa
description: Quality-assure the prerequisite structure of a Swedish higher-education program (plan.bth.se program link). Reads every course plan in semester order and checks, course by course, whether a student with the knowledge from the program so far plus upper-secondary school can complete it. Writes a human- and machine-readable report with the inconsistencies. Use when asked to QA, audit, review or check prerequisites, progression or course order of a program/utbildningsplan/programöversikt.
---

# Program prerequisite QA

Input: a program URL such as `https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617`.
Output: `reports/<PROGRAM>-<START>__<harness>__<model>__<date>.md` (+ `.json`).

Semester labels: `HT27` = fall (höstterminen) 2027, `VT28` = spring (vårterminen) 2028. Order: VT27 < HT27 < VT28 < HT28.

**The question you ask for every course, verbatim:**

> Can a student with the skills, knowledge and dispositions obtained in the program so far (plus upper-secondary education) complete this course, based on its course plan?

Scripts do everything mechanical (fetching, ordering, credit sums, validation, rendering). You do only the judgment. Never compute order or hp in your head, and never write the report file by hand: `render_report.mjs` produces it from your analysis files.

## 0. Setup (once per checkout)

```bash
npm install            # installs playwright-core; needs Node >= 20 and a Chromium/Chrome (set CHROMIUM_PATH if not on PATH)
```

## 1. Identify yourself

Record which harness and model you are, because reports from different ones are compared.
- `harness`: `claude-code`, `opencode`, or `codex` (env `QA_HARNESS` overrides).
- `model`: your exact model id as given in your system prompt or the CLI (env `QA_MODEL` overrides). If you truly cannot tell, use `unknown`; do not guess.

## 2. Fetch the program

```bash
node .agents/skills/program-prerequisite-qa/scripts/fetch_program.mjs "<URL>" --out work/<PROGRAM>-<START>
```

`<PROGRAM>-<START>` e.g. `DVAAM-HT27` (the script prints program code and start semester; if you do not know them yet, run once with `--out work/tmp`, read the output line, then rename the directory). The fetch is slow (the course-plan API rate-limits and the script waits) and resumable: re-run it if interrupted.

It writes `work/<dir>/program.json` (courses sorted by semester then study period, each with `seq`, `code`, `type` mandatory|elective, `hp`, `level`, `main_areas`, `plan_file`, `prerequisites_text`) and `courses/*.txt` (full plans). Read the stderr WARNING lines: a course without a published plan is itself a finding.

## 3. Review every course in `seq` order (1, 2, 3, ...)

Order matters: each review feeds the knowledge ledger used by later ones. For each `seq`:

1. `node .agents/skills/program-prerequisite-qa/scripts/ledger.mjs work/<dir> <seq>`: prints credits accumulated, the guaranteed prior mandatory courses with the competences they provide, earlier electives (not guaranteed), concurrent courses, and courses placed later.
2. Read the course plan `work/<dir>/<plan_file>` fully (prerequisites, content, learning outcomes, learning activities, examination).
3. Apply the rules in `references/judgment-rules.md` and answer the question.
4. Write `work/<dir>/analysis/<NNN>_<CODE>.json` (NNN = seq zero-padded to 3 digits) exactly as specified in `references/analysis-schema.md`. Include `provides`: 3-10 short statements of what a student can do after passing this course (from its learning outcomes), because later reviews rely on them.

Do the reviews yourself, in order, one at a time. If your harness can run sub-agents, you may delegate, but only sequentially (never in parallel): each review needs the previous `provides`. Resumable: skip `seq` numbers whose analysis file already exists, unless asked to redo.

## 4. Render and check

```bash
node .agents/skills/program-prerequisite-qa/scripts/render_report.mjs work/<dir> --harness <harness> --model <model>
```

If it exits 1 it lists schema or consistency errors per course. Fix those analysis files and re-run. Do not edit the report file. If the user wants a PDF, run `scripts/render-pdf.sh <report.md> [--template file.docx]` (see AGENTS.md). On success tell the user the report path, the verdict counts and the high-severity findings.

## Rules that are easy to get wrong

- Report content in English (quote course-plan text in Swedish as written). Keep rationale and evidence concrete: quote the sentence in the course plan and name the course code that provides the competence.
- Do not invent prerequisites the plan does not state; only flag what the plan text, learning outcomes or content genuinely assume.
- Never report a verdict you did not derive from the files. If the plan is missing or too thin, the verdict is `UNCLEAR`.
- Do not modify `program.json` or the fetched course plans.
