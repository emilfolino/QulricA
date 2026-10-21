---
report_schema: qulrica/program-prerequisite-qa-combined@1
program_name: "Webbprogrammering"
program_code: PAGWG
program_start: HT27
program_url: https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5
report_date: 2026-10-21
runs: 2
run_list:
  - { harness: claude-code, model: claude-sonnet-5-5, date: 2026-10-21 }
  - { harness: codex, model: gpt-5.4, date: 2026-10-21 }
courses: 15
unanimous_verdicts: 14
verdict_disagreements: 1
issues: { consensus: 3, majority: 0, minority: 3 }
---

# Combined executive report: Webbprogrammering (PAGWG, HT27)

Prerequisite QA of 15 course occurrences by 2 independent agent runs: `claude-code claude-sonnet-5-5`, `codex gpt-5.4`.

## 1. Executive summary

Two independent runs (Claude Code with `claude-sonnet-5-5`, Codex with `gpt-5.4`) reviewed the 15 course occurrences of Webbprogrammering (120 hp) and agree on 14 verdicts. Both runs consider the program largely coherent, with one issue that needs action:

1. **DV1709 Driftsättning av webbtjänster på Linux server (VT29): GAP in both runs, high severity.** The plan assumes knowledge of Docker (and Git), but no earlier mandatory course teaches Docker, and Git appears only implicitly as "Versionshantering" in DV1707. The Claude run also notes that DV1709 lists Docker as its own content, so the plan contradicts itself. Either remove Docker from the assumed knowledge or teach it earlier.
2. **Prerequisite wording:** DV1705 and DV1706 require "webbprogrammering" (7.5 and 15 hp) without naming course codes. Both runs matched this to DV1704 (and DV1705) by content and recommend naming the codes. Both runs also raised a point on DV1707, but different ones (the Codex run the same generic wording, the Claude run that version control and CI are not introduced earlier).

**To adjudicate:** PA1438 Självständigt arbete (VT29). The Claude run says GAP (medium): the thesis outcomes assume scientific foundation, literature search and report writing, which no earlier course teaches. The Codex run says OK, since the 60 hp credit requirement is met (90 hp guaranteed) and the technical content is covered. Both agree on the credit requirement, so the question is whether a research-method element is missing. This is a candidate for a human decision. Agreement between two models is not proof; findings are candidates for human review.

Key figures (computed):

- 2 runs agree on the verdict for 14 of 15 courses (93%); 1 course has differing verdicts.
- 1 course is flagged (not OK) by every run: DV1709 VT29.
- 3 issues were reported by more than half of the runs (3 by all); 3 by a minority of runs only and need verification.
- High-severity issues with majority or consensus support: 1.

## 2. Priority issues (reported by a majority of runs)

Agents describe the same problem in different words, so issues are grouped by course and finding type. *Support* = number of runs reporting it. *Severity* is the highest any run gave.

| ID | Severity | Support | Course | Semester | Type | What | Recommendation |
|-----|----|----|----|----|-----|---------------------|---------------------|
| C-001 | high | 2/2 | DV1709 | VT29 | competence-gap | DV1709 'Förutsatta kunskaper' require knowledge of Docker (and Git), but no earlier mandatory course teaches Docker, and Git is only implicit in DV1707's 'Versionshantering'. DV1709 itself lists Docker/docker compose as course content, so the plan contradicts itself. | Either remove Docker from the assumed knowledge in DV1709 (since the course teaches it), or add Docker to an earlier course (e.g. DV1708 or DV1711); also name Git explicitly in DV1707 or an earlier course. |
| C-003 | low | 2/2 | DV1705 | HT27 | ambiguous-requirement | The prerequisite 'kurs i webbprogrammering, 7,5 hp' does not name a course; the matching course is DV1704 Webbteknologier. | State the prerequisite as course code DV1704 (or its equivalent) in the plan. |
| C-004 | low | 2/2 | DV1706 | VT28 | ambiguous-requirement | The prerequisite 'kurser i webbprogrammering, 15 hp' names no course codes; it is satisfied by DV1704 + DV1705 by content only. | Name DV1704 and DV1705 explicitly in the prerequisite. |

## 3. Disagreements to adjudicate

Courses where the runs reached different verdicts. A human (or a further run) should decide these; reasoning of each run is quoted.

| # | Semester | Course | Type | claude-code claude-sonnet-5-5 | codex gpt-5.4 |
|--|----|-------|-----|------|------|
| 14 | VT29 | PA1438 Självständigt arbete i Webbprogrammering | mandatory | GAP | OK |

#### 14. PA1438 Självständigt arbete i Webbprogrammering (VT29)

- **claude-code claude-sonnet-5-5**: GAP (medium). The credit requirement '60 hp avklarade på programmet Webbprogrammering' is met (90 hp guaranteed). The technical content is well covered by DV1704-DV1711 and PA1493 (customer project, agile, requirements, reflection). But outcomes such as 'kännedom om områdets vetenskapliga grund', 'söka, samla och kritiskt tolka relevant information' and 'dokumentera arbetet i form av en rapport' build on a scientific/academic fou…
- **codex gpt-5.4**: OK (medium). The formal prerequisite is "60 hp avklarade på programmet Webbprogrammering". Before VT29 period 3, the ledger guarantees 90 hp from earlier mandatory courses, so the credit threshold is met with margin. The course then asks the student to integrate and deepen earlier knowledge within web programming in an independent project and report. Earlier mandatory courses provide broad web-programming competence and project/…

## 4. Findings reported by a minority of runs

Not corroborated by a majority; treat as hypotheses. If another run flagged the same course under a different finding type, it is noted.

| ID | Severity | Reported by | Course | Semester | Type | What | Other runs on this course |
|-----|----|-----|----|----|-----|---------------------|-----|
| C-002 | medium | claude-code claude-sonnet-5-5 | PA1438 | VT29 | competence-gap | The thesis outcomes assume scientific foundation, literature search/critical source evaluation and report writing, but no mandatory course before PA1438 teaches research methodology or academic writing; only short reflections occur in DV1705 and PA1493. | - |
| C-005 | low | claude-code claude-sonnet-5-5 | DV1707 | VT28 | other | DV1707 lists 'Versionshantering, kontinuerlig integration och driftsättning' and group project methodology as content, but no earlier course in the program (HT27-VT28 period 3) introduces version control or CI; it is unclear whether the course teaches them or assumes them. | ambiguous-requirement |
| C-006 | low | codex gpt-5.4 | DV1707 | VT28 | ambiguous-requirement | DV1707 uses the generic prerequisite wording "kurser i webbprogrammering, 15 hp" instead of naming the actual earlier courses that satisfy it in the program. | other |

## 5. Runs and agreement

| Harness | Model | Date | OK | CONDITIONAL | GAP | UNCLEAR | Findings (high/medium/low) |
|----|----|----|--|---|--|---|-----|
| claude-code | claude-sonnet-5-5 | 2026-10-21 | 13 | 0 | 2 | 0 | 1/1/3 |
| codex | gpt-5.4 | 2026-10-21 | 14 | 0 | 1 | 0 | 1/0/3 |

Pairwise agreement. *Exact* = same verdict; *flag* = both say OK or both say not OK.

| Run A | Run B | Courses | Exact verdict | Flag (OK vs not OK) |
|------|------|---|---|---|
| claude-code claude-sonnet-5-5 | codex gpt-5.4 | 15 | 14 (93%) | 14 (93%) |

## 6. Course matrix

| # | Semester | Course | Type | claude-code claude-sonnet-5-5 | codex gpt-5.4 | Consensus |
|--|----|--------|-----|-----|-----|-----|
| 1 | HT27 | DV1670 Programmering och problemlösning med Python | mandatory | OK | OK | **OK** |
| 2 | HT27 | DV1704 Webbteknologier | mandatory | OK | OK | **OK** |
| 3 | HT27 | DV1701 Objektorienterad programmering i CSharp | mandatory | OK | OK | **OK** |
| 4 | HT27 | DV1705 UX-design med JavaScript | mandatory | OK | OK | **OK** |
| 5 | VT28 | DV1703 Databasteknik | mandatory | OK | OK | **OK** |
| 6 | VT28 | DV1706 Webbapplikationer för mobila enheter | mandatory | OK | OK | **OK** |
| 7 | VT28 | DV1702 Algoritmer och datastrukturer | mandatory | OK | OK | **OK** |
| 8 | VT28 | DV1707 Projekt webbprogrammering frontend | mandatory | OK | OK | **OK** |
| 9 | HT28 | PA1493 Mjukvaruutvecklingsprojekt | mandatory | OK | OK | **OK** |
| 10 | HT28 | DV1711 Programmering med JavaScript och Node | mandatory | OK | OK | **OK** |
| 11 | HT28 | MA1507 Diskret matematik och algoritmer | mandatory | OK | OK | **OK** |
| 12 | HT28 | DV1708 Webbprogrammering backend | mandatory | OK | OK | **OK** |
| 13 | VT29 | DV1709 Driftsättning av webbtjänster på Linux server | mandatory | GAP | GAP | **GAP** |
| 14 | VT29 | PA1438 Självständigt arbete i Webbprogrammering | mandatory | GAP | OK | **SPLIT** (not unanimous) |
| 15 | VT29 | DV1710 Projekt webbprogrammering fullstack | mandatory | OK | OK | **OK** |

## 7. Method and limits

- Source: the validated per-run reports (`PAGWG-HT27__claude-code__claude-sonnet-5-5__2026-10-21.json`, `PAGWG-HT27__codex__gpt-5.4__2026-10-21.json`). Each run reviewed the same program independently; this report only compares them.
- Consensus verdict = the verdict given by more than half of the runs, otherwise SPLIT. Issues are matched by course and finding type, so one problem reported under two types counts as two minority issues; look at the "other runs" column before dismissing a minority finding.
- Agreement between runs is not correctness: models can share the same blind spot. Majority support raises confidence, it does not prove the finding. All verdicts are LLM judgments of course-plan text and flag candidates for human review.
- The narrative in section 1 was written by an agent from the figures in this report; everything else is computed.

## 8. Machine-readable appendix

```json
{
  "schema": "qulrica/program-prerequisite-qa-combined@1",
  "program": {
    "code": "PAGWG",
    "name": "Webbprogrammering",
    "start": "HT27",
    "url": "https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5"
  },
  "date": "2026-10-21",
  "runs": [
    {
      "harness": "claude-code",
      "model": "claude-sonnet-5-5",
      "date": "2026-10-21",
      "verdicts": {
        "OK": 13,
        "CONDITIONAL": 0,
        "GAP": 2,
        "UNCLEAR": 0
      },
      "source": "reports/PAGWG-HT27__claude-code__claude-sonnet-5-5__2026-10-21.json"
    },
    {
      "harness": "codex",
      "model": "gpt-5.4",
      "date": "2026-10-21",
      "verdicts": {
        "OK": 14,
        "CONDITIONAL": 0,
        "GAP": 1,
        "UNCLEAR": 0
      },
      "source": "reports/PAGWG-HT27__codex__gpt-5.4__2026-10-21.json"
    }
  ],
  "unanimous_verdicts": 14,
  "pairwise": [
    {
      "a": "claude-code / claude-sonnet-5-5",
      "b": "codex / gpt-5.4",
      "courses": 15,
      "exact": 14,
      "flag": 14
    }
  ],
  "issues": [
    {
      "seq": 13,
      "course": "DV1709",
      "semester": "VT29",
      "type": "competence-gap",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "high",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-001",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-004",
          "severity": "high",
          "description": "DV1709 'Förutsatta kunskaper' require knowledge of Docker (and Git), but no earlier mandatory course teaches Docker, and Git is only implicit in DV1707's 'Versionshantering'. DV1709 itself lists Docker/docker compose as course content, so the plan contradicts itself.",
          "recommendation": "Either remove Docker from the assumed knowledge in DV1709 (since the course teaches it), or add Docker to an earlier course (e.g. DV1708 or DV1711); also name Git explicitly in DV1707 or an earlier course."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-004",
          "severity": "high",
          "description": "DV1709 assumes prior knowledge in Git and Docker in section 2.2, but earlier mandatory courses do not explicitly provide Git and provide no Docker competence at all before the course starts.",
          "recommendation": "Either introduce Git and Docker explicitly in earlier mandatory courses, or revise DV1709 so those tools are taught from scratch rather than assumed as prior knowledge."
        }
      ]
    },
    {
      "seq": 14,
      "course": "PA1438",
      "semester": "VT29",
      "type": "competence-gap",
      "support": 1,
      "runs": [
        "claude-code / claude-sonnet-5-5"
      ],
      "severity": "medium",
      "tier": "minority",
      "other_types_same_course": [],
      "id": "C-002",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-005",
          "severity": "medium",
          "description": "The thesis outcomes assume scientific foundation, literature search/critical source evaluation and report writing, but no mandatory course before PA1438 teaches research methodology or academic writing; only short reflections occur in DV1705 and PA1493.",
          "recommendation": "Add content on scientific method, source criticism and technical report writing to an earlier mandatory course (e.g. PA1493) or add a short module/course before the thesis."
        }
      ]
    },
    {
      "seq": 4,
      "course": "DV1705",
      "semester": "HT27",
      "type": "ambiguous-requirement",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "low",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-003",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-001",
          "severity": "low",
          "description": "The prerequisite 'kurs i webbprogrammering, 7,5 hp' does not name a course; the matching course is DV1704 Webbteknologier.",
          "recommendation": "State the prerequisite as course code DV1704 (or its equivalent) in the plan."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-001",
          "severity": "low",
          "description": "DV1705 requires \"genomgången kurs i webbprogrammering, 7,5 hp\" without naming the actual prior course code, even though DV1704 is the obvious intended match in the program.",
          "recommendation": "Replace the generic wording with the exact course code, or an explicitly defined subject/credit combination, in the prerequisite text."
        }
      ]
    },
    {
      "seq": 6,
      "course": "DV1706",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "low",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-004",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-002",
          "severity": "low",
          "description": "The prerequisite 'kurser i webbprogrammering, 15 hp' names no course codes; it is satisfied by DV1704 + DV1705 by content only.",
          "recommendation": "Name DV1704 and DV1705 explicitly in the prerequisite."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-002",
          "severity": "low",
          "description": "DV1706 requires \"kurser i webbprogrammering, 15 hp\" without naming the actual earlier courses, even though DV1704 and DV1705 are the clear intended matches in the program.",
          "recommendation": "State the exact course codes, or define the required prior web-programming content more explicitly, in the prerequisite text."
        }
      ]
    },
    {
      "seq": 8,
      "course": "DV1707",
      "semester": "VT28",
      "type": "other",
      "support": 1,
      "runs": [
        "claude-code / claude-sonnet-5-5"
      ],
      "severity": "low",
      "tier": "minority",
      "other_types_same_course": [
        "ambiguous-requirement"
      ],
      "id": "C-005",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-003",
          "severity": "low",
          "description": "DV1707 lists 'Versionshantering, kontinuerlig integration och driftsättning' and group project methodology as content, but no earlier course in the program (HT27-VT28 period 3) introduces version control or CI; it is unclear whether the course teaches them or assumes them.",
          "recommendation": "State in the DV1707 plan whether version control/CI are taught or assumed, and if assumed, add an introduction to git in an earlier course (e.g. DV1670 or DV1701)."
        }
      ]
    },
    {
      "seq": 8,
      "course": "DV1707",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "support": 1,
      "runs": [
        "codex / gpt-5.4"
      ],
      "severity": "low",
      "tier": "minority",
      "other_types_same_course": [
        "other"
      ],
      "id": "C-006",
      "items": [
        {
          "run": "codex / gpt-5.4",
          "id": "F-003",
          "severity": "low",
          "description": "DV1707 uses the generic prerequisite wording \"kurser i webbprogrammering, 15 hp\" instead of naming the actual earlier courses that satisfy it in the program.",
          "recommendation": "Name the relevant course codes or define the expected prior web-programming content explicitly in the prerequisite section."
        }
      ]
    }
  ],
  "matrix": [
    {
      "seq": 1,
      "code": "DV1670",
      "name": "Programmering och problemlösning med Python",
      "semester": "HT27",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 2,
      "code": "DV1704",
      "name": "Webbteknologier",
      "semester": "HT27",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 3,
      "code": "DV1701",
      "name": "Objektorienterad programmering i CSharp",
      "semester": "HT27",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 4,
      "code": "DV1705",
      "name": "UX-design med JavaScript",
      "semester": "HT27",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 5,
      "code": "DV1703",
      "name": "Databasteknik",
      "semester": "VT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 6,
      "code": "DV1706",
      "name": "Webbapplikationer för mobila enheter",
      "semester": "VT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 7,
      "code": "DV1702",
      "name": "Algoritmer och datastrukturer",
      "semester": "VT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 8,
      "code": "DV1707",
      "name": "Projekt webbprogrammering frontend",
      "semester": "VT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 9,
      "code": "PA1493",
      "name": "Mjukvaruutvecklingsprojekt",
      "semester": "HT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 10,
      "code": "DV1711",
      "name": "Programmering med JavaScript och Node",
      "semester": "HT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 11,
      "code": "MA1507",
      "name": "Diskret matematik och algoritmer",
      "semester": "HT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 12,
      "code": "DV1708",
      "name": "Webbprogrammering backend",
      "semester": "HT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 13,
      "code": "DV1709",
      "name": "Driftsättning av webbtjänster på Linux server",
      "semester": "VT29",
      "type": "mandatory",
      "answered": 2,
      "consensus": "GAP",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "GAP",
        "codex / gpt-5.4": "GAP"
      }
    },
    {
      "seq": 14,
      "code": "PA1438",
      "name": "Självständigt arbete i Webbprogrammering",
      "semester": "VT29",
      "type": "mandatory",
      "answered": 2,
      "consensus": "SPLIT",
      "unanimous": false,
      "flagged_by": 1,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "GAP",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 15,
      "code": "DV1710",
      "name": "Projekt webbprogrammering fullstack",
      "semester": "VT29",
      "type": "mandatory",
      "answered": 2,
      "consensus": "OK",
      "unanimous": true,
      "flagged_by": 0,
      "any_flagged": false,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "OK",
        "codex / gpt-5.4": "OK"
      }
    }
  ]
}
```
