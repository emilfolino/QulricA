# Analysis file schema (`work/<dir>/analysis/<NNN>_<CODE>.json`)

One file per course occurrence; `render_report.mjs` validates it. All strings are non-empty. Enums are exact, upper/lower case as shown.

```json
{
  "seq": 12,
  "code": "PA1484",
  "semester": "HT28",
  "question": "Can a student with the skills, knowledge and dispositions obtained in the program so far (plus upper-secondary education) complete this course, based on its course plan?",
  "answer": "Yes, because ... (one sentence)",
  "verdict": "OK | CONDITIONAL | GAP | UNCLEAR",
  "confidence": "high | medium | low",
  "rationale": "2-5 sentences that justify the verdict, citing course codes and plan wording.",
  "requirements": [
    {
      "requirement": "6 avklarade hp i programmering",
      "kind": "credits | course | upper-secondary | language | other",
      "status": "MET | MET_ONLY_VIA_ELECTIVES | NOT_MET | UNVERIFIABLE",
      "evidence": "DV1574 (6 hp, HT27, mandatory) gives programming; quote or paraphrase of the plan."
    }
  ],
  "assumed_competences": [
    {
      "competence": "Version control with git",
      "status": "COVERED | COVERED_CONDITIONALLY | UPPER_SECONDARY | NOT_COVERED | UNVERIFIABLE",
      "provided_by": ["DV1574"],
      "evidence": "Why you think the course assumes it, and where the student got it (or why not)."
    }
  ],
  "findings": [
    {
      "type": "missing-prerequisite | ordering | elective-dependency | credit-shortfall | missing-course-plan | ambiguous-requirement | competence-gap | other",
      "severity": "high | medium | low",
      "description": "What is inconsistent, concretely.",
      "recommendation": "What to change."
    }
  ],
  "provides": [
    "Can solve systems of linear equations with Gaussian elimination",
    "Can write and test Python programs of ~200 lines"
  ]
}
```

Rules enforced by the renderer:
- `seq`, `code` must match `program.json`.
- `requirements` empty only if the plan states no prerequisite at all; `assumed_competences` may be empty for introductory courses.
- `provided_by` must be non-empty when status is `COVERED` or `COVERED_CONDITIONALLY`; it holds course codes.
- Verdict not milder than the worst requirement/competence status (see judgment-rules.md); non-OK verdict needs >= 1 finding.
- A course with no published plan (`plan_file` null): verdict `UNCLEAR`, one `missing-course-plan` finding (severity high if mandatory, medium if elective), `requirements` and `assumed_competences` empty arrays, `provides` empty array.
- A verdict of `OK` may carry `low` findings (wording issues); `provided_by` names the course whose outcomes best provide the competence (for a competence the course itself introduces, use the closest earlier course or choose `UPPER_SECONDARY`).
- `provides` is the ledger input for every later course: concrete, short, in English, taken from the learning outcomes of *this* course. Use `[]` only when the plan is missing.
