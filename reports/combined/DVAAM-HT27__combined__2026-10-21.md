---
report_schema: qulrica/program-prerequisite-qa-combined@1
program_name: "Civilingenjör i AI och maskininlärning"
program_code: DVAAM
program_start: HT27
program_url: https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617
report_date: 2026-10-21
runs: 2
run_list:
  - { harness: claude-code, model: claude-sonnet-5-5, date: 2026-10-21 }
  - { harness: codex, model: gpt-5.4, date: 2026-10-21 }
courses: 53
unanimous_verdicts: 49
verdict_disagreements: 4
issues: { consensus: 14, majority: 0, minority: 4 }
---

# Combined executive report: Civilingenjör i AI och maskininlärning (DVAAM, HT27)

Prerequisite QA of 53 course occurrences by 2 independent agent runs: `claude-code claude-sonnet-5-5`, `codex gpt-5.4`.

## 1. Executive summary

Two independent runs (Claude Code with `claude-sonnet-5-5`, Codex with `gpt-5.4`) agree on 49 of 53 verdicts, and all 14 priority issues were reported by both. The four high-severity issues are therefore well supported:

1. **C/C++ is assumed but never taught.** DV1697 Operativsystem (VT29) runs its labs mainly in C/C++, and DV2606 Multiprocessorprogrammering repeats the gap in all three offerings (HT29, HT30, HT31). The guaranteed programming path before them is Python (plus assembly in DV1730). Either add C/C++ to an earlier mandatory course or state it as a prerequisite.
2. **Two mandatory courses have no published course plan:** IY2658 (VT31) and DV2649, the 30 hp degree project (VT32). Their prerequisites cannot be checked. Four elective occurrences (SL2564, SL2565 twice, MA2517) are also missing plans.
3. **IY2650 (HT30 and HT31) depends on the elective IY2649.** A student who did not choose IY2649 does not meet the prerequisite.
4. **Imprecise prerequisite wording** in PA1484 and DV1688 (generic phrases that match no course code); both runs flagged it.

The runs disagree on four courses. For PA1484, PA1485 and DV1688 the Claude run gave UNCLEAR where Codex gave OK, so the difference is how strictly vague wording is judged, not whether a problem exists. For DV2606 (HT29) the Claude run gave CONDITIONAL and Codex gave GAP, so a human should decide it. Four low-severity findings come from the Claude run only (PA1481, DV1582, PA1485 version-control tooling, DV2658 placed before DV2646); verify these before acting. Agreement between two models is not proof; the findings are candidates for human review.

Key figures (computed):

- 2 runs agree on the verdict for 49 of 53 courses (92%); 4 courses have differing verdicts.
- 11 courses are flagged (not OK) by every run: DV1697 VT29, SL2564 HT30, DV2606 HT30, SL2565 HT30, IY2650 HT30, IY2658 VT31, MA2517 VT31, DV2606 HT31, IY2650 HT31, SL2565 HT31, DV2649 VT32.
- 14 issues were reported by more than half of the runs (14 by all); 4 by a minority of runs only and need verification.
- High-severity issues with majority or consensus support: 4.

## 2. Priority issues (reported by a majority of runs)

Agents describe the same problem in different words, so issues are grouped by course and finding type. *Support* = number of runs reporting it. *Severity* is the highest any run gave.

| ID | Severity | Support | Course | Semester | Type | What | Recommendation |
|-----|----|----|----|----|-----|---------------------|---------------------|
| C-001 | high | 2/2 | DV1697 | VT29 | competence-gap | DV1697 labs are done mainly in C/C++ and students are expected to know the language, but the mandatory programming courses before VT29 (DV1574, DV1582) use Python and DV1730 uses assembly. No mandatory course introduces C/C++. | Add a C/C++ introduction to an earlier mandatory course (e.g. DV1730 or DV1682), or state C/C++ as an explicit prerequisite and include a language primer at the start of DV1697. |
| C-002 | high | 2/2 | DV2606 | HT29 | competence-gap | DV2606 expects prior C/C++ competence for the practical laboratory work, but the guaranteed mandatory path provides programming mainly in Python and does not explicitly teach C/C++ before the course. | Add C/C++ earlier in the mandatory path, redesign the course labs to use already taught languages, or state C/C++ explicitly as a prerequisite and ensure the program supplies it before DV2606. |
| C-003 | high | 2/2 | IY2658 | VT31 | missing-course-plan | No published course plan for IY2658 (VT31, mandatory, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| C-004 | high | 2/2 | DV2649 | VT32 | missing-course-plan | No published course plan for DV2649 (VT32, mandatory, 30 hp, Avancerad nivå, degree project); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| C-005 | medium | 2/2 | PA1484 | HT28 | ambiguous-requirement | The prerequisite 'introduktion till ingenjörsarbete/-rollen' (6 hp) does not match any course in the program by name or learning outcomes; DV1683 and PA1481 only partly touch the topic. | Name the intended course code(s) in the prerequisite, or reword it (e.g. to state 'DV1683') so that satisfaction can be verified; alternatively add an explicit engineering-role outcome to the intended course. |
| C-006 | medium | 2/2 | DV1688 | VT30 | ambiguous-requirement | The prerequisite 'datorsäkerhet och ingenjörsarbete, 5 hp' does not correspond to any course in the program; DV1684 Säkerhetsteknik is only a partial match. | Replace the generic wording with the actual course code(s) (probably DV1684) in the course plan, or add DV1684 to an explicit equivalence list. |
| C-007 | medium | 2/2 | SL2564 | HT30 | missing-course-plan | No published course plan for SL2564 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| C-008 | medium | 2/2 | DV2606 | HT30 | competence-gap | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. | Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here. |
| C-009 | medium | 2/2 | SL2565 | HT30 | missing-course-plan | No published course plan for SL2565 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| C-010 | medium | 2/2 | IY2650 | HT30 | elective-dependency | IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses. | State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers. |
| C-011 | medium | 2/2 | MA2517 | VT31 | missing-course-plan | No published course plan for MA2517 (VT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| C-012 | medium | 2/2 | DV2606 | HT31 | competence-gap | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. | Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here. |
| C-013 | medium | 2/2 | IY2650 | HT31 | elective-dependency | This is a repeated offering of IY2650 (see seq 41). IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses. | State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers. |
| C-014 | medium | 2/2 | SL2565 | HT31 | missing-course-plan | No published course plan for SL2565 (HT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |

## 3. Disagreements to adjudicate

Courses where the runs reached different verdicts. A human (or a further run) should decide these; reasoning of each run is quoted.

| # | Semester | Course | Type | claude-code claude-sonnet-5-5 | codex gpt-5.4 |
|--|----|-------|-----|------|------|
| 12 | HT28 | PA1484 Programvaruutveckling | mandatory | UNCLEAR | OK |
| 23 | HT29 | PA1485 Mjukvaruutvecklingsprojekt i team | mandatory | UNCLEAR | OK |
| 25 | HT29 | DV2606 Multiprocessorprogrammering | elective | CONDITIONAL | GAP |
| 28 | VT30 | DV1688 Digital undersökningsteknik | elective | UNCLEAR | OK |

#### 12. PA1484 Programvaruutveckling (HT28)

- **claude-code claude-sonnet-5-5**: UNCLEAR (medium). PA1484 requires '6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen och minst 6 avklarade hp i programmering'. Programming is clearly met by DV1574 and DV1582 (12 hp). No earlier course is titled or scoped as an introduction to the engineering role: DV1683 only 'introducerar begreppet ingenjörsmässighet' and PA1481 covers 'Professionella praxis och riktlinjer för etik för ingenjörer', neither wit…
- **codex gpt-5.4**: OK (medium). The plan requires "6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen och minst 6 avklarade hp i programmering". Before seq 12 the ledger guarantees at least 12 hp of programming through DV1574 and DV1582, and it also guarantees earlier orientation courses about AI, engineering professionalism, ethics and sustainability through DV1683 and PA1481. The progression therefore works, but the first pre…

#### 23. PA1485 Mjukvaruutvecklingsprojekt i team (HT29)

- **claude-code claude-sonnet-5-5**: UNCLEAR (medium). PA1485 requires '12 avklarade hp i programmering och 6 avklarade hp i programvaruutveckling': DV1574 + DV1582 give 12 hp programming and PA1484 Programvaruutveckling gives 6 hp software development, all finished before HT29. The course expects students to 'Utveckla och testa en lösning ... med hjälp av lämpliga utvecklingsmetoder och verktyg' in a team; no course plan in the program mentions version control (git) an…
- **codex gpt-5.4**: OK (high). The formal prerequisites are "12 avklarade hp i programmering och 6 avklarade hp i programvaruutveckling". Before seq 23 the ledger guarantees DV1574 and DV1582 for 12 hp of programming and PA1484 Programvaruutveckling for 6 hp in software development. That earlier progression directly supports the course's team-based work on requirements, agile development, implementation and testing.

#### 25. DV2606 Multiprocessorprogrammering (HT29)

- **claude-code claude-sonnet-5-5**: CONDITIONAL (medium). DV2606 (elective) requires '60 hp i huvudområdet datavetenskap eller programvaruteknik inklusive 12 hp programmering, 6 hp algoritmer och datastrukturer, operativsystem samt datorteknik 6 hp'. The ledger shows 72 hp Datavetenskap and 36 hp Programvaruteknik guaranteed; DV1574 + DV1582, DV1682, DV1697 and DV1730 are all mandatory and finished before HT29 period 2. Labs are 'huvudsakligen i programmeringsspråken C / C…
- **codex gpt-5.4**: GAP (high). Formally, the student satisfies the requirement of 60 hp in datavetenskap/programvaruteknik plus earlier study in programming, algorithms, operating systems and computer engineering. The ledger before seq 25 guarantees 72 hp in Datavetenskap and 36 hp in Programvaruteknik, together with DV1574/DV1582, DV1682, DV1697 and DV1730. However, the learning activities state that the lab assignments are carried out mainly in…

#### 28. DV1688 Digital undersökningsteknik (VT30)

- **claude-code claude-sonnet-5-5**: UNCLEAR (medium). DV1688 (elective) requires '60 hp ... i huvudområdet datavetenskap eller programvaruteknik inklusive datorsäkerhet och ingenjörsarbete, 5 hp, programmering, 5 hp, samt operativsystem, 5 hp'. The 60 hp, programming (DV1574, DV1582) and operating systems (DV1697) parts are met by mandatory courses. 'Datorsäkerhet och ingenjörsarbete' is not the name of any course in the program; DV1684 Säkerhetsteknik (6 hp) covers co…
- **codex gpt-5.4**: OK (medium). The plan requires 60 hp in Datavetenskap/Programvaruteknik including "datorsäkerhet och ingenjörsarbete, 5 hp, programmering, 5 hp, samt operativsystem, 5 hp". Before seq 28 the ledger guarantees well over 60 hp in the relevant main areas, programming through DV1574/DV1582, operating systems through DV1697, and security through DV1684; the student also has networking through DV1685, which is useful for the stated le…

## 4. Findings reported by a minority of runs

Not corroborated by a majority; treat as hypotheses. If another run flagged the same course under a different finding type, it is noted.

| ID | Severity | Reported by | Course | Semester | Type | What | Other runs on this course |
|-----|----|-----|----|----|-----|---------------------|-----|
| C-015 | low | claude-code claude-sonnet-5-5 | PA1481 | VT28 | ambiguous-requirement | The plan requires Fysik 2 and Kemi 1, which have no visible connection to the content and are stricter than other first-term courses (MA1498 requires Fysik 1 only). It is unclear whether the program's admission requirements guarantee Fysik 2 and Kemi 1. | - |
| C-016 | low | claude-code claude-sonnet-5-5 | DV1582 | VT28 | ambiguous-requirement | The requirement says 'genomgången kurs ... 6 hp, varav minst 2 hp ska vara avklarade', which is self-contradictory (a completed course versus at least 2 of 6 hp completed). | - |
| C-017 | low | claude-code claude-sonnet-5-5 | PA1485 | HT29 | competence-gap | Team-based development needs collaborative tooling (version control), but none of the program's course plans mentions it, and PA1485's plan does not state that it is taught. | - |
| C-018 | low | claude-code claude-sonnet-5-5 | DV2658 | HT30 | ordering | DV2658 fine-tunes and develops neural generative models, but the dedicated deep learning course DV2646 Djup maskininlärning is placed in VT31, after DV2658 (HT30). Students rely on only introductory deep learning from DV2659/DV1683. | - |

## 5. Runs and agreement

| Harness | Model | Date | OK | CONDITIONAL | GAP | UNCLEAR | Findings (high/medium/low) |
|----|----|----|--|---|--|---|-----|
| claude-code | claude-sonnet-5-5 | 2026-10-21 | 38 | 5 | 1 | 9 | 3/11/4 |
| codex | gpt-5.4 | 2026-10-21 | 41 | 4 | 2 | 6 | 4/8/2 |

Pairwise agreement. *Exact* = same verdict; *flag* = both say OK or both say not OK.

| Run A | Run B | Courses | Exact verdict | Flag (OK vs not OK) |
|------|------|---|---|---|
| claude-code claude-sonnet-5-5 | codex gpt-5.4 | 53 | 49 (92%) | 50 (94%) |

## 6. Course matrix

| # | Semester | Course | Type | claude-code claude-sonnet-5-5 | codex gpt-5.4 | Consensus |
|--|----|--------|-----|-----|-----|-----|
| 1 | HT27 | MA1498 Linjär algebra | mandatory | OK | OK | **OK** |
| 2 | HT27 | DV1574 Programmering och problemlösning med Python | mandatory | OK | OK | **OK** |
| 3 | HT27 | DV1683 Artificiell intelligens och ingenjörsmässighet | mandatory | OK | OK | **OK** |
| 4 | HT27 | MA1499 Envariabelanalys 1: funktioner och differentialkalkyl | mandatory | OK | OK | **OK** |
| 5 | HT27 | IY1458 Industriell ekonomi, översiktskurs | mandatory | OK | OK | **OK** |
| 6 | VT28 | MA1500 Envariabelanalys 2: differentialekvationer och integralkalkyl | mandatory | OK | OK | **OK** |
| 7 | VT28 | PA1481 Digital etik och hållbar utveckling | mandatory | OK | OK | **OK** |
| 8 | VT28 | DV1582 Programmering i Python, fortsättningskurs | mandatory | OK | OK | **OK** |
| 9 | VT28 | MA1504 Diskret matematik | mandatory | OK | OK | **OK** |
| 10 | VT28 | DV1682 Datastrukturer och algoritmer | mandatory | OK | OK | **OK** |
| 11 | HT28 | MA1514 Flervariabelanalys | mandatory | OK | OK | **OK** |
| 12 | HT28 | PA1484 Programvaruutveckling | mandatory | UNCLEAR | OK | **SPLIT** (not unanimous) |
| 13 | HT28 | FY1436 Kraft och energi | mandatory | OK | OK | **OK** |
| 14 | HT28 | DV1730 Datorteknik | mandatory | OK | OK | **OK** |
| 15 | HT28 | MS1419 Matematisk statistik | mandatory | OK | OK | **OK** |
| 16 | VT29 | DV1697 Operativsystem | mandatory | GAP | GAP | **GAP** |
| 17 | VT29 | DV1663 Databasteknik | mandatory | OK | OK | **OK** |
| 18 | VT29 | DV1685 Datakommunikation och nätverksteknik | mandatory | OK | OK | **OK** |
| 19 | VT29 | DV1684 Säkerhetsteknik | mandatory | OK | OK | **OK** |
| 20 | VT29 | DV1597 Intelligent dataanalys | mandatory | OK | OK | **OK** |
| 21 | HT29 | ET1558 Dynamiska system och återkoppling | mandatory | OK | OK | **OK** |
| 22 | HT29 | DV2659 Tillämpad artificiell intelligens | mandatory | OK | OK | **OK** |
| 23 | HT29 | PA1485 Mjukvaruutvecklingsprojekt i team | mandatory | UNCLEAR | OK | **SPLIT** (not unanimous) |
| 24 | HT29 | PA1486 Testning av mjukvara | elective | OK | OK | **OK** |
| 25 | HT29 | DV2606 Multiprocessorprogrammering | elective | CONDITIONAL | GAP | **SPLIT** (not unanimous) |
| 26 | HT29 | DV2638 Maskininlärning | mandatory | OK | OK | **OK** |
| 27 | VT30 | DV1601 Användbarhet och interaktionsdesign | elective | OK | OK | **OK** |
| 28 | VT30 | DV1688 Digital undersökningsteknik | elective | UNCLEAR | OK | **SPLIT** (not unanimous) |
| 29 | VT30 | TE1429 Kandidatarbete i teknik för AI och maskininlärning | mandatory | OK | OK | **OK** |
| 30 | VT30 | DV2647 Penetrationstestning och etisk hackning | elective | OK | OK | **OK** |
| 31 | VT30 | PA2601 DevSecOps - Utveckling, säkerhet och drift | elective | OK | OK | **OK** |
| 32 | HT30 | DV2583 Digital etik | mandatory | OK | OK | **OK** |
| 33 | HT30 | IY2649 Technology venture 1: Innovation och affärsutveckling | elective | OK | OK | **OK** |
| 34 | HT30 | DV2607 Säkerhet i AI-system | mandatory | OK | OK | **OK** |
| 35 | HT30 | SL2564 Förståelse för marknader, företagande och design inom hållbarhetsomställningar | elective | UNCLEAR | UNCLEAR | **UNCLEAR** |
| 36 | HT30 | MA1513 Kryptologins grunder | elective | OK | OK | **OK** |
| 37 | HT30 | DV2606 Multiprocessorprogrammering | elective | CONDITIONAL | CONDITIONAL | **CONDITIONAL** |
| 38 | HT30 | SL2565 Bedöma och designa inom omställningar till hållbarhet | elective | UNCLEAR | UNCLEAR | **UNCLEAR** |
| 39 | HT30 | DV2658 Generativ artificiell intelligens | elective | OK | OK | **OK** |
| 40 | HT30 | MS2506 Bayesiansk statistik | mandatory | OK | OK | **OK** |
| 41 | HT30 | IY2650 Technology venture 2: kommersialisering av innovationer | elective | CONDITIONAL | CONDITIONAL | **CONDITIONAL** |
| 42 | VT31 | IY2658 ICT start-ups och högteknologiskt entreprenörskap | mandatory | UNCLEAR | UNCLEAR | **UNCLEAR** |
| 43 | VT31 | MS1415 Robusta metoder | mandatory | OK | OK | **OK** |
| 44 | VT31 | DV2640 Avancerad maskininlärning | mandatory | OK | OK | **OK** |
| 45 | VT31 | ET2627 Robotik | elective | OK | OK | **OK** |
| 46 | VT31 | MA2517 Kvantinformation och algoritmer för kvantdatorer | elective | UNCLEAR | UNCLEAR | **UNCLEAR** |
| 47 | VT31 | DV2646 Djup maskininlärning | mandatory | OK | OK | **OK** |
| 48 | HT31 | PA2611 Avancerat mjukvaruutvecklingsprojekt i team | mandatory | OK | OK | **OK** |
| 49 | HT31 | DV2654 Forskningsmetodik i datavetenskap | mandatory | OK | OK | **OK** |
| 50 | HT31 | DV2606 Multiprocessorprogrammering | elective | CONDITIONAL | CONDITIONAL | **CONDITIONAL** |
| 51 | HT31 | IY2650 Technology venture 2: kommersialisering av innovationer | elective | CONDITIONAL | CONDITIONAL | **CONDITIONAL** |
| 52 | HT31 | SL2565 Bedöma och designa inom omställningar till hållbarhet | elective | UNCLEAR | UNCLEAR | **UNCLEAR** |
| 53 | VT32 | DV2649 Masterarbete i datavetenskap | mandatory | UNCLEAR | UNCLEAR | **UNCLEAR** |

## 7. Method and limits

- Source: the validated per-run reports (`DVAAM-HT27__claude-code__claude-sonnet-5-5__2026-10-21.json`, `DVAAM-HT27__codex__gpt-5.4__2026-10-21.json`). Each run reviewed the same program independently; this report only compares them.
- Consensus verdict = the verdict given by more than half of the runs, otherwise SPLIT. Issues are matched by course and finding type, so one problem reported under two types counts as two minority issues; look at the "other runs" column before dismissing a minority finding.
- Agreement between runs is not correctness: models can share the same blind spot. Majority support raises confidence, it does not prove the finding. All verdicts are LLM judgments of course-plan text and flag candidates for human review.
- The narrative in section 1 was written by an agent from the figures in this report; everything else is computed.

## 8. Machine-readable appendix

```json
{
  "schema": "qulrica/program-prerequisite-qa-combined@1",
  "program": {
    "code": "DVAAM",
    "name": "Civilingenjör i AI och maskininlärning",
    "start": "HT27",
    "url": "https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617"
  },
  "date": "2026-10-21",
  "runs": [
    {
      "harness": "claude-code",
      "model": "claude-sonnet-5-5",
      "date": "2026-10-21",
      "verdicts": {
        "OK": 38,
        "CONDITIONAL": 5,
        "GAP": 1,
        "UNCLEAR": 9
      },
      "source": "reports/DVAAM-HT27__claude-code__claude-sonnet-5-5__2026-10-21.json"
    },
    {
      "harness": "codex",
      "model": "gpt-5.4",
      "date": "2026-10-21",
      "verdicts": {
        "OK": 41,
        "CONDITIONAL": 4,
        "GAP": 2,
        "UNCLEAR": 6
      },
      "source": "reports/DVAAM-HT27__codex__gpt-5.4__2026-10-21.json"
    }
  ],
  "unanimous_verdicts": 49,
  "pairwise": [
    {
      "a": "claude-code / claude-sonnet-5-5",
      "b": "codex / gpt-5.4",
      "courses": 53,
      "exact": 49,
      "flag": 50
    }
  ],
  "issues": [
    {
      "seq": 16,
      "course": "DV1697",
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
          "description": "DV1697 labs are done mainly in C/C++ and students are expected to know the language, but the mandatory programming courses before VT29 (DV1574, DV1582) use Python and DV1730 uses assembly. No mandatory course introduces C/C++.",
          "recommendation": "Add a C/C++ introduction to an earlier mandatory course (e.g. DV1730 or DV1682), or state C/C++ as an explicit prerequisite and include a language primer at the start of DV1697."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-002",
          "severity": "high",
          "description": "DV1697 explicitly expects students to already know C/C++ for the laboratory work, but the guaranteed earlier mandatory courses provide programming in Python rather than C/C++.",
          "recommendation": "Either introduce C/C++ earlier in the mandatory path, redesign the labs to use languages already taught, or state C/C++ explicitly as a prerequisite and ensure the program provides it before DV1697."
        }
      ]
    },
    {
      "seq": 25,
      "course": "DV2606",
      "semester": "HT29",
      "type": "competence-gap",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "high",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-002",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-006",
          "severity": "medium",
          "description": "The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it.",
          "recommendation": "Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-003",
          "severity": "high",
          "description": "DV2606 expects prior C/C++ competence for the practical laboratory work, but the guaranteed mandatory path provides programming mainly in Python and does not explicitly teach C/C++ before the course.",
          "recommendation": "Add C/C++ earlier in the mandatory path, redesign the course labs to use already taught languages, or state C/C++ explicitly as a prerequisite and ensure the program supplies it before DV2606."
        }
      ]
    },
    {
      "seq": 42,
      "course": "IY2658",
      "semester": "VT31",
      "type": "missing-course-plan",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "high",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-003",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-013",
          "severity": "high",
          "description": "No published course plan for IY2658 (VT31, mandatory, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
          "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-009",
          "severity": "high",
          "description": "No published course plan is available for IY2658 in VT31, so the progression and prerequisites for this mandatory course cannot be reviewed.",
          "recommendation": "Publish the course plan before the course is part of the mandatory study path, or replace the occurrence with a course that has a published plan."
        }
      ]
    },
    {
      "seq": 53,
      "course": "DV2649",
      "semester": "VT32",
      "type": "missing-course-plan",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "high",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-004",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-018",
          "severity": "high",
          "description": "No published course plan for DV2649 (VT32, mandatory, 30 hp, Avancerad nivå, degree project); the fetch found no link on the program page.",
          "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-014",
          "severity": "high",
          "description": "No published course plan is available for DV2649 in VT32, so the mandatory final course occurrence cannot be reviewed.",
          "recommendation": "Publish the course plan well before students reach the final semester, or replace the occurrence with a thesis course that has a published plan."
        }
      ]
    },
    {
      "seq": 12,
      "course": "PA1484",
      "semester": "HT28",
      "type": "ambiguous-requirement",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-005",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-003",
          "severity": "medium",
          "description": "The prerequisite 'introduktion till ingenjörsarbete/-rollen' (6 hp) does not match any course in the program by name or learning outcomes; DV1683 and PA1481 only partly touch the topic.",
          "recommendation": "Name the intended course code(s) in the prerequisite, or reword it (e.g. to state 'DV1683') so that satisfaction can be verified; alternatively add an explicit engineering-role outcome to the intended course."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-001",
          "severity": "low",
          "description": "The prerequisite \"6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen\" does not identify which earlier course or course code satisfies the requirement.",
          "recommendation": "Name the specific course code or codes, for example the intended earlier introductory engineering/professional-practice course, in the prerequisite text."
        }
      ]
    },
    {
      "seq": 28,
      "course": "DV1688",
      "semester": "VT30",
      "type": "ambiguous-requirement",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-006",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-007",
          "severity": "medium",
          "description": "The prerequisite 'datorsäkerhet och ingenjörsarbete, 5 hp' does not correspond to any course in the program; DV1684 Säkerhetsteknik is only a partial match.",
          "recommendation": "Replace the generic wording with the actual course code(s) (probably DV1684) in the course plan, or add DV1684 to an explicit equivalence list."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-004",
          "severity": "low",
          "description": "The prerequisite phrase \"datorsäkerhet och ingenjörsarbete, 5 hp\" does not identify which earlier course code is intended to satisfy it.",
          "recommendation": "Replace the generic phrase with the specific earlier course code or codes that supply the intended security and engineering-project background."
        }
      ]
    },
    {
      "seq": 35,
      "course": "SL2564",
      "semester": "HT30",
      "type": "missing-course-plan",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-007",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-008",
          "severity": "medium",
          "description": "No published course plan for SL2564 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
          "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-005",
          "severity": "medium",
          "description": "No published course plan is available for SL2564 in HT30, so the course's prerequisites and expected progression cannot be reviewed.",
          "recommendation": "Publish the course plan or replace the course occurrence with one that has a published plan before students are expected to choose it."
        }
      ]
    },
    {
      "seq": 37,
      "course": "DV2606",
      "semester": "HT30",
      "type": "competence-gap",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-008",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-009",
          "severity": "medium",
          "description": "The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it.",
          "recommendation": "Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-006",
          "severity": "medium",
          "description": "The course expects prior C/C++ competence for lab work, but that competence is still unavailable on the guaranteed mandatory path and can only be obtained conditionally through optional earlier study such as the HT29 offering of DV2606.",
          "recommendation": "Either make the required C/C++ preparation explicit and place it in the mandatory path, or adapt the labs so they rely only on guaranteed prior knowledge."
        }
      ]
    },
    {
      "seq": 38,
      "course": "SL2565",
      "semester": "HT30",
      "type": "missing-course-plan",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-009",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-010",
          "severity": "medium",
          "description": "No published course plan for SL2565 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
          "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-007",
          "severity": "medium",
          "description": "No published course plan is available for SL2565 in HT30, so the course occurrence cannot be reviewed.",
          "recommendation": "Publish the course plan before students are expected to choose the course, or replace the occurrence with a course that has a published plan."
        }
      ]
    },
    {
      "seq": 41,
      "course": "IY2650",
      "semester": "HT30",
      "type": "elective-dependency",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-010",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-012",
          "severity": "medium",
          "description": "IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses.",
          "recommendation": "State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-008",
          "severity": "medium",
          "description": "IY2650 depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure.",
          "recommendation": "Either make IY2649 mandatory for students expected to take IY2650, or state an explicit mandatory equivalent in the program and course plan."
        }
      ]
    },
    {
      "seq": 46,
      "course": "MA2517",
      "semester": "VT31",
      "type": "missing-course-plan",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-011",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-014",
          "severity": "medium",
          "description": "No published course plan for MA2517 (VT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
          "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-010",
          "severity": "medium",
          "description": "No published course plan is available for MA2517 in VT31, so the course occurrence cannot be reviewed.",
          "recommendation": "Publish the course plan or replace the occurrence with a course that has a published plan before students are expected to select it."
        }
      ]
    },
    {
      "seq": 50,
      "course": "DV2606",
      "semester": "HT31",
      "type": "competence-gap",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-012",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-015",
          "severity": "medium",
          "description": "The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it.",
          "recommendation": "Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-011",
          "severity": "medium",
          "description": "The course still depends on practical C/C++ competence that is available only conditionally through earlier elective study rather than through the guaranteed mandatory path.",
          "recommendation": "Provide guaranteed C/C++ preparation earlier in the program or redesign the labs so they rely only on mandatory prior knowledge."
        }
      ]
    },
    {
      "seq": 51,
      "course": "IY2650",
      "semester": "HT31",
      "type": "elective-dependency",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-013",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-016",
          "severity": "medium",
          "description": "This is a repeated offering of IY2650 (see seq 41). IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses.",
          "recommendation": "State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-012",
          "severity": "medium",
          "description": "IY2650 still depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure.",
          "recommendation": "Make the Venture 1 background mandatory for students expected to take IY2650, or specify a mandatory equivalent course in the course plan and program structure."
        }
      ]
    },
    {
      "seq": 52,
      "course": "SL2565",
      "semester": "HT31",
      "type": "missing-course-plan",
      "support": 2,
      "runs": [
        "claude-code / claude-sonnet-5-5",
        "codex / gpt-5.4"
      ],
      "severity": "medium",
      "tier": "consensus",
      "other_types_same_course": [],
      "id": "C-014",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-017",
          "severity": "medium",
          "description": "No published course plan for SL2565 (HT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
          "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
        },
        {
          "run": "codex / gpt-5.4",
          "id": "F-013",
          "severity": "medium",
          "description": "No published course plan is available for SL2565 in HT31, so the course occurrence cannot be reviewed.",
          "recommendation": "Publish the course plan or replace the occurrence with a course that has a published plan before students are expected to select it."
        }
      ]
    },
    {
      "seq": 7,
      "course": "PA1481",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "support": 1,
      "runs": [
        "claude-code / claude-sonnet-5-5"
      ],
      "severity": "low",
      "tier": "minority",
      "other_types_same_course": [],
      "id": "C-015",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-001",
          "severity": "low",
          "description": "The plan requires Fysik 2 and Kemi 1, which have no visible connection to the content and are stricter than other first-term courses (MA1498 requires Fysik 1 only). It is unclear whether the program's admission requirements guarantee Fysik 2 and Kemi 1.",
          "recommendation": "Verify that the program admission requirements include Fysik 2 and Kemi 1, or remove these requirements from the course plan if they are inherited from a template."
        }
      ]
    },
    {
      "seq": 8,
      "course": "DV1582",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "support": 1,
      "runs": [
        "claude-code / claude-sonnet-5-5"
      ],
      "severity": "low",
      "tier": "minority",
      "other_types_same_course": [],
      "id": "C-016",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-002",
          "severity": "low",
          "description": "The requirement says 'genomgången kurs ... 6 hp, varav minst 2 hp ska vara avklarade', which is self-contradictory (a completed course versus at least 2 of 6 hp completed).",
          "recommendation": "State precisely whether the whole of DV1574 or only a part (e.g. specific examination moments totalling 2 hp) is required."
        }
      ]
    },
    {
      "seq": 23,
      "course": "PA1485",
      "semester": "HT29",
      "type": "competence-gap",
      "support": 1,
      "runs": [
        "claude-code / claude-sonnet-5-5"
      ],
      "severity": "low",
      "tier": "minority",
      "other_types_same_course": [],
      "id": "C-017",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-005",
          "severity": "low",
          "description": "Team-based development needs collaborative tooling (version control), but none of the program's course plans mentions it, and PA1485's plan does not state that it is taught.",
          "recommendation": "Add version control and basic CI/tooling explicitly to the content of PA1484 or PA1485 so that later projects (PA2611, TE1429) can rely on it."
        }
      ]
    },
    {
      "seq": 39,
      "course": "DV2658",
      "semester": "HT30",
      "type": "ordering",
      "support": 1,
      "runs": [
        "claude-code / claude-sonnet-5-5"
      ],
      "severity": "low",
      "tier": "minority",
      "other_types_same_course": [],
      "id": "C-018",
      "items": [
        {
          "run": "claude-code / claude-sonnet-5-5",
          "id": "F-011",
          "severity": "low",
          "description": "DV2658 fine-tunes and develops neural generative models, but the dedicated deep learning course DV2646 Djup maskininlärning is placed in VT31, after DV2658 (HT30). Students rely on only introductory deep learning from DV2659/DV1683.",
          "recommendation": "Consider moving DV2646 before HT30, or state in the DV2658 plan that neural network basics are taught within the course."
        }
      ]
    }
  ],
  "matrix": [
    {
      "seq": 1,
      "code": "MA1498",
      "name": "Linjär algebra",
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
      "code": "DV1574",
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
      "seq": 3,
      "code": "DV1683",
      "name": "Artificiell intelligens och ingenjörsmässighet",
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
      "code": "MA1499",
      "name": "Envariabelanalys 1: funktioner och differentialkalkyl",
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
      "code": "IY1458",
      "name": "Industriell ekonomi, översiktskurs",
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
      "seq": 6,
      "code": "MA1500",
      "name": "Envariabelanalys 2: differentialekvationer och integralkalkyl",
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
      "code": "PA1481",
      "name": "Digital etik och hållbar utveckling",
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
      "code": "DV1582",
      "name": "Programmering i Python, fortsättningskurs",
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
      "code": "MA1504",
      "name": "Diskret matematik",
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
      "seq": 10,
      "code": "DV1682",
      "name": "Datastrukturer och algoritmer",
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
      "seq": 11,
      "code": "MA1514",
      "name": "Flervariabelanalys",
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
      "code": "PA1484",
      "name": "Programvaruutveckling",
      "semester": "HT28",
      "type": "mandatory",
      "answered": 2,
      "consensus": "SPLIT",
      "unanimous": false,
      "flagged_by": 1,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 13,
      "code": "FY1436",
      "name": "Kraft och energi",
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
      "seq": 14,
      "code": "DV1730",
      "name": "Datorteknik",
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
      "seq": 15,
      "code": "MS1419",
      "name": "Matematisk statistik",
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
      "seq": 16,
      "code": "DV1697",
      "name": "Operativsystem",
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
      "seq": 17,
      "code": "DV1663",
      "name": "Databasteknik",
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
    },
    {
      "seq": 18,
      "code": "DV1685",
      "name": "Datakommunikation och nätverksteknik",
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
    },
    {
      "seq": 19,
      "code": "DV1684",
      "name": "Säkerhetsteknik",
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
    },
    {
      "seq": 20,
      "code": "DV1597",
      "name": "Intelligent dataanalys",
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
    },
    {
      "seq": 21,
      "code": "ET1558",
      "name": "Dynamiska system och återkoppling",
      "semester": "HT29",
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
      "seq": 22,
      "code": "DV2659",
      "name": "Tillämpad artificiell intelligens",
      "semester": "HT29",
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
      "seq": 23,
      "code": "PA1485",
      "name": "Mjukvaruutvecklingsprojekt i team",
      "semester": "HT29",
      "type": "mandatory",
      "answered": 2,
      "consensus": "SPLIT",
      "unanimous": false,
      "flagged_by": 1,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 24,
      "code": "PA1486",
      "name": "Testning av mjukvara",
      "semester": "HT29",
      "type": "elective",
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
      "seq": 25,
      "code": "DV2606",
      "name": "Multiprocessorprogrammering",
      "semester": "HT29",
      "type": "elective",
      "answered": 2,
      "consensus": "SPLIT",
      "unanimous": false,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "CONDITIONAL",
        "codex / gpt-5.4": "GAP"
      }
    },
    {
      "seq": 26,
      "code": "DV2638",
      "name": "Maskininlärning",
      "semester": "HT29",
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
      "seq": 27,
      "code": "DV1601",
      "name": "Användbarhet och interaktionsdesign",
      "semester": "VT30",
      "type": "elective",
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
      "seq": 28,
      "code": "DV1688",
      "name": "Digital undersökningsteknik",
      "semester": "VT30",
      "type": "elective",
      "answered": 2,
      "consensus": "SPLIT",
      "unanimous": false,
      "flagged_by": 1,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "OK"
      }
    },
    {
      "seq": 29,
      "code": "TE1429",
      "name": "Kandidatarbete i teknik för AI och maskininlärning",
      "semester": "VT30",
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
      "seq": 30,
      "code": "DV2647",
      "name": "Penetrationstestning och etisk hackning",
      "semester": "VT30",
      "type": "elective",
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
      "seq": 31,
      "code": "PA2601",
      "name": "DevSecOps - Utveckling, säkerhet och drift",
      "semester": "VT30",
      "type": "elective",
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
      "seq": 32,
      "code": "DV2583",
      "name": "Digital etik",
      "semester": "HT30",
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
      "seq": 33,
      "code": "IY2649",
      "name": "Technology venture 1: Innovation och affärsutveckling",
      "semester": "HT30",
      "type": "elective",
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
      "seq": 34,
      "code": "DV2607",
      "name": "Säkerhet i AI-system",
      "semester": "HT30",
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
      "seq": 35,
      "code": "SL2564",
      "name": "Förståelse för marknader, företagande och design inom hållbarhetsomställningar",
      "semester": "HT30",
      "type": "elective",
      "answered": 2,
      "consensus": "UNCLEAR",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "UNCLEAR"
      }
    },
    {
      "seq": 36,
      "code": "MA1513",
      "name": "Kryptologins grunder",
      "semester": "HT30",
      "type": "elective",
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
      "seq": 37,
      "code": "DV2606",
      "name": "Multiprocessorprogrammering",
      "semester": "HT30",
      "type": "elective",
      "answered": 2,
      "consensus": "CONDITIONAL",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "CONDITIONAL",
        "codex / gpt-5.4": "CONDITIONAL"
      }
    },
    {
      "seq": 38,
      "code": "SL2565",
      "name": "Bedöma och designa inom omställningar till hållbarhet",
      "semester": "HT30",
      "type": "elective",
      "answered": 2,
      "consensus": "UNCLEAR",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "UNCLEAR"
      }
    },
    {
      "seq": 39,
      "code": "DV2658",
      "name": "Generativ artificiell intelligens",
      "semester": "HT30",
      "type": "elective",
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
      "seq": 40,
      "code": "MS2506",
      "name": "Bayesiansk statistik",
      "semester": "HT30",
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
      "seq": 41,
      "code": "IY2650",
      "name": "Technology venture 2: kommersialisering av innovationer",
      "semester": "HT30",
      "type": "elective",
      "answered": 2,
      "consensus": "CONDITIONAL",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "CONDITIONAL",
        "codex / gpt-5.4": "CONDITIONAL"
      }
    },
    {
      "seq": 42,
      "code": "IY2658",
      "name": "ICT start-ups och högteknologiskt entreprenörskap",
      "semester": "VT31",
      "type": "mandatory",
      "answered": 2,
      "consensus": "UNCLEAR",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "UNCLEAR"
      }
    },
    {
      "seq": 43,
      "code": "MS1415",
      "name": "Robusta metoder",
      "semester": "VT31",
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
      "seq": 44,
      "code": "DV2640",
      "name": "Avancerad maskininlärning",
      "semester": "VT31",
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
      "seq": 45,
      "code": "ET2627",
      "name": "Robotik",
      "semester": "VT31",
      "type": "elective",
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
      "seq": 46,
      "code": "MA2517",
      "name": "Kvantinformation och algoritmer för kvantdatorer",
      "semester": "VT31",
      "type": "elective",
      "answered": 2,
      "consensus": "UNCLEAR",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "UNCLEAR"
      }
    },
    {
      "seq": 47,
      "code": "DV2646",
      "name": "Djup maskininlärning",
      "semester": "VT31",
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
      "seq": 48,
      "code": "PA2611",
      "name": "Avancerat mjukvaruutvecklingsprojekt i team",
      "semester": "HT31",
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
      "seq": 49,
      "code": "DV2654",
      "name": "Forskningsmetodik i datavetenskap",
      "semester": "HT31",
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
      "seq": 50,
      "code": "DV2606",
      "name": "Multiprocessorprogrammering",
      "semester": "HT31",
      "type": "elective",
      "answered": 2,
      "consensus": "CONDITIONAL",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "CONDITIONAL",
        "codex / gpt-5.4": "CONDITIONAL"
      }
    },
    {
      "seq": 51,
      "code": "IY2650",
      "name": "Technology venture 2: kommersialisering av innovationer",
      "semester": "HT31",
      "type": "elective",
      "answered": 2,
      "consensus": "CONDITIONAL",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "CONDITIONAL",
        "codex / gpt-5.4": "CONDITIONAL"
      }
    },
    {
      "seq": 52,
      "code": "SL2565",
      "name": "Bedöma och designa inom omställningar till hållbarhet",
      "semester": "HT31",
      "type": "elective",
      "answered": 2,
      "consensus": "UNCLEAR",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "UNCLEAR"
      }
    },
    {
      "seq": 53,
      "code": "DV2649",
      "name": "Masterarbete i datavetenskap",
      "semester": "VT32",
      "type": "mandatory",
      "answered": 2,
      "consensus": "UNCLEAR",
      "unanimous": true,
      "flagged_by": 2,
      "any_flagged": true,
      "verdicts": {
        "claude-code / claude-sonnet-5-5": "UNCLEAR",
        "codex / gpt-5.4": "UNCLEAR"
      }
    }
  ]
}
```
