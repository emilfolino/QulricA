# AGENTS.md

Quality-assurance skills for educational programs at Swedish higher education institutions (first target: BTH, plan.bth.se). This file is the canonical, harness-neutral instruction file; it is read by Codex and opencode directly and imported by `CLAUDE.md`.

## Cross-harness layout (single source of truth)

- Skills live in `.agents/skills/<name>/` (SKILL.md + `scripts/` + `references/`). This is the path Codex and opencode both discover.
- `.claude/skills/<name>` is a relative symlink to the same directory, for Claude Code. Never edit through two copies; edit under `.agents/skills/`. Add a new skill by creating it under `.agents/skills/` and a matching symlink in `.claude/skills/` (`ln -s ../../.agents/skills/<name> .claude/skills/<name>`).
- `scripts/run-headless.sh <harness> "<program-url>"` runs the skill non-interactively with `claude`, `opencode` or `codex` and sets `QA_HARNESS`/`QA_MODEL`, for comparing models.
- Skill frontmatter is limited to `name` + `description` (the common subset all three harnesses accept). Do not use harness-specific frontmatter or tools in SKILL.md; skills must work with only a shell and file read/write.

## Skills

- `program-prerequisite-qa`: given a plan.bth.se program URL, reviews every course plan in semester order and reports prerequisite inconsistencies. Invoke by asking e.g. "Run the program-prerequisite-qa skill on <url>" (Claude Code: `/program-prerequisite-qa <url>`).

## Commands

```bash
npm install                                   # playwright-core; also needs Chromium/Chrome (CHROMIUM_PATH overrides detection)
npm test                                      # unit tests for the shared helpers
node .agents/skills/program-prerequisite-qa/scripts/fetch_program.mjs <url> --out work/<PROGRAM>-<START>
node .agents/skills/program-prerequisite-qa/scripts/ledger.mjs work/<dir> <seq>
node .agents/skills/program-prerequisite-qa/scripts/render_report.mjs work/<dir> --harness <h> --model <m>
scripts/render-pdf.sh reports/<report>.md [--template my.docx]   # PDF + DOCX; needs pandoc (or mise) and LibreOffice
```

## Architecture

Mechanical work is in deterministic Node scripts; the model only judges. This is what makes results comparable across harnesses and models.

1. `fetch_program.mjs` renders the program page with a headless browser (plan.bth.se is a Blazor Server app: plain HTTP returns an empty shell), then downloads each course plan from the public API `bth.azure-api.net/lindplan/courseplanbycode?...` (rate-limited: HTTP 429 + Retry-After; resumable). Output `work/<dir>/program.json` is the contract between all scripts: courses ordered by semester then study period, hp accounting, mandatory/elective.
2. `ledger.mjs` briefs the reviewer for one course: guaranteed prior knowledge = mandatory courses finished before the course starts; electives are never guaranteed.
3. The model writes one `analysis/<seq>_<code>.json` per course (schema in `references/analysis-schema.md`), including `provides` that feed later ledgers, so reviews must run in `seq` order.
4. `render_report.mjs` validates the analyses (schema + verdict-not-milder-than-evidence) and writes `reports/<PROGRAM>-<START>__<harness>__<model>__<date>.{md,json}`. Never hand-write reports.

Semester labels: `HT27` = fall 2027, `VT28` = spring 2028; API semester code `20272` = HT27 (…1 = VT).

PDF styling comes from a Word template: `render-pdf.sh` runs pandoc (md -> docx, using `templates/report-reference.docx` or `--template`) and then LibreOffice (docx -> pdf). Pandoc takes only *styles* and page setup (headings, Normal, Table, margins, orientation, header/footer) from a template, never its content. Table column widths come from the dash counts in the separator rows emitted by `render_report.mjs`; keep them if you change the tables. The JSON appendix is left out of the PDF unless `--keep-appendix`.

`work/` (fetched data, analyses) is git-ignored; `reports/` is committed.
