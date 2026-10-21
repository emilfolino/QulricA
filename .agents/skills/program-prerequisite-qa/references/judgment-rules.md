# Judgment rules

## What counts as prior knowledge for course X (the ledger script applies these)

1. **Guaranteed**: mandatory courses that *finish before X starts*. Order is by semester; inside the same semester a course only counts if its study period (läsperiod) ended before X starts.
2. **Not guaranteed**: elective courses (type `elective`, "Valbar"), even if they come earlier. A student may not have chosen them. A requirement that is only met through electives is `MET_ONLY_VIA_ELECTIVES`.
3. **Not usable**: concurrent courses (same period) and later courses. A prerequisite satisfied only by a later or concurrent course is `NOT_MET` (finding type `ordering`).
4. **Upper-secondary**: what the Swedish gymnasium gives. Treat a requirement like "Matematik 4 / Matematik E", "Fysik 1", "Engelska 6", "Grundläggande behörighet" as `UPPER_SECONDARY` / `MET` (the admission process verifies it, not the program). Do not assume knowledge beyond the stated course levels (e.g. no university-level calculus from gymnasium).
5. The same course code listed in several semesters (typically an elective offered several times) is one course the student passes once, but **every occurrence is reviewed in its own `seq` order and gets its own analysis file**. Judge each by its own position (ledger and hp differ). You may reuse the competence analysis of the earlier occurrence; re-check only what changes (credits, later electives now available).
6. Subject areas: a course whose main area is "-" counts toward no area (e.g. statistics, physics). "Teknik" counts as "ett tekniskt område". Compare "X hp i <ämne>" requirements by content and learning outcomes when the area sums can't decide, and say so in the evidence.

## Two things to check per course

**A. Formal prerequisites** (the plan's section "Förkunskapskrav" / "Förkunskaper"/"Behörighetskrav"). Split the text into individual requirements. For each, set `kind` and `status` with evidence:
- Named course or subject ("genomgången kurs i linjär algebra, 6 hp"): find a guaranteed prior course that matches by *content and learning outcomes*, not just by title; check the hp stated is reached (`6 hp` of programming may need more than one course: sum them).
- Credits ("60 hp i huvudområdet datavetenskap", "90 hp inom ett tekniskt område", "60 hp på grundnivå"): use the ledger's credit accounting, by level and by main subject area. Compare against *guaranteed* hp; if it is only reached with electives it is `MET_ONLY_VIA_ELECTIVES`.
- If the plan names a course that does not exist anywhere in the program: `NOT_MET`, type `missing-prerequisite`.
- Imprecise wording whose intent is clear (e.g. "introduktion till ingenjörsarbete" and exactly one earlier course obviously matches): status `MET`, evidence names the course, plus a `low` finding of type `ambiguous-requirement` recommending the plan name the course code. An OK verdict may carry low-severity findings.
- Vague or contradictory wording where you cannot tell which course is meant ("lämplig förkunskap", an unclear hp unit, a course code that doesn't exist): `UNVERIFIABLE`, type `ambiguous-requirement`.
- No prerequisite stated beyond "Grundläggande behörighet": a single `upper-secondary` requirement with status `MET`.

**B. Assumed competences** (what the course content, learning outcomes, learning activities and examination presuppose, even if the prerequisite section doesn't say). Typical: a Machine Learning course using linear algebra, statistics and Python; a project course expecting version control and testing; a thesis expecting research methods. List the 2-8 competences that matter most for succeeding, and for each decide where the student got it:
- `COVERED`: provided by guaranteed prior courses (list codes in `provided_by`; cite the learning outcome).
- `COVERED_CONDITIONALLY`: only via electives or a course finishing in a concurrent period.
- `UPPER_SECONDARY`: realistic from gymnasium.
- `NOT_COVERED`: nothing in the program before this course gives it (type `competence-gap`).
- `UNVERIFIABLE`: the plan is too vague to tell.
A tool or skill the plan does not mention at all (e.g. git in a course whose plan never names it) is not a prerequisite: do not invent it. Flag only what the plan text, outcomes, content or examination state or clearly imply. Be conservative about what is a gap: flag only competences the course really depends on, not generic study skills. Dispositions (e.g. ethical reflection, collaboration, scientific approach) count too: check that earlier courses at least introduce them when a course's outcomes build on them (progression from introduction to application).

## Verdict (one per course; must not be milder than the evidence)

- `OK`: every requirement `MET` and every competence `COVERED`/`UPPER_SECONDARY`.
- `CONDITIONAL`: worst status is `MET_ONLY_VIA_ELECTIVES` or `COVERED_CONDITIONALLY`.
- `GAP`: any `NOT_MET` or `NOT_COVERED`.
- `UNCLEAR`: any `UNVERIFIABLE`, or no published course plan (then add a `missing-course-plan` finding). If both a GAP and an UNVERIFIABLE exist, the verdict is `GAP`.

`render_report.mjs` rejects a verdict milder than the statuses it rests on, and a non-OK verdict without findings.

## Also look for (as findings, only when evidenced)

- A mandatory course whose stated prerequisite can only be met via an elective (type `elective-dependency`, severity high).
- Prerequisites satisfied only by a course scheduled later (type `ordering`).
- A thesis/degree-project course whose credit requirement exceeds the guaranteed hp (type `credit-shortfall`).
- Level mismatch: an advanced-level (Avancerad nivå) course requiring more hp on first-cycle level than guaranteed.

## Severity

- `high`: a student following the program cannot satisfy a formal requirement, or a mandatory course depends on missing competence.
- `medium`: depends on electives, or a significant competence is only thinly covered.
- A course with no published plan: `high` if mandatory, `medium` if elective.
- `low`: wording problems, minor or doubtful competence gaps.

Every finding needs a `recommendation` that a program director could act on (move course X earlier, add content Y to course Z, state the prerequisite more precisely, ...).
