---
report_schema: qulrica/program-prerequisite-qa@1
program_name: "Civilingenjör i AI och maskininlärning"
program_code: DVAAM
program_start: HT27
program_hp: 300
program_url: https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617
harness: claude-code
model: claude-sonnet-5-5
report_date: 2026-10-21
courses_reviewed: 53
courses_in_program: 53
verdicts: { OK: 38, CONDITIONAL: 5, GAP: 1, UNCLEAR: 9 }
findings: { high: 3, medium: 11, low: 4 }
---

# Prerequisite QA: Civilingenjör i AI och maskininlärning (DVAAM, HT27)

| | |
|---|---|
| Program | Civilingenjör i AI och maskininlärning, 300 hp |
| Program code / start | DVAAM / HT27 |
| Source | https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617 |
| Reviewed by | harness `claude-code`, model `claude-sonnet-5-5` |
| Date | 2026-10-21 (course plans fetched 2026-10-21) |
| Course occurrences | 53 (35 mandatory, 18 elective) |

## 1. Summary

Question asked of every course: *Can a student with the skills, knowledge and dispositions obtained in the program so far (guaranteed = mandatory courses) plus upper-secondary education complete this course, judging from its course plan?*

| Verdict | Courses | Meaning |
|----|---|-------------------------------|
| OK | 38 | Everything the course assumes is guaranteed by earlier mandatory courses or upper-secondary education |
| CONDITIONAL | 5 | Only works if the student chose a particular elective, or a prerequisite is concurrent |
| GAP | 1 | Something the course requires/assumes is provided nowhere before it |
| UNCLEAR | 9 | The plan is missing, ambiguous or too thin to judge |

| # | Semester | Course | Type | Verdict | Confidence | Headline |
|--|----|-------|-----|------|-----|------------------------|
| 12 | HT28 | [PA1484 Programvaruutveckling](#12-pa1484) | mandatory | **UNCLEAR** | medium | The prerequisite 'introduktion till ingenjörsarbete/-rollen' (6 hp) does not match any course in the program by name or learning outcomes; DV1683 and PA1481 only partly touch the topic. |
| 16 | VT29 | [DV1697 Operativsystem](#16-dv1697) | mandatory | **GAP** | medium | DV1697 labs are done mainly in C/C++ and students are expected to know the language, but the mandatory programming courses before VT29 (DV1574, DV1582) use Python and DV1730 uses assembly. No mandatory course introduces C/C++. |
| 23 | HT29 | [PA1485 Mjukvaruutvecklingsprojekt i team](#23-pa1485) | mandatory | **UNCLEAR** | medium | Team-based development needs collaborative tooling (version control), but none of the program's course plans mentions it, and PA1485's plan does not state that it is taught. |
| 25 | HT29 | [DV2606 Multiprocessorprogrammering](#25-dv2606) | elective | **CONDITIONAL** | medium | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. |
| 28 | VT30 | [DV1688 Digital undersökningsteknik](#28-dv1688) | elective | **UNCLEAR** | medium | The prerequisite 'datorsäkerhet och ingenjörsarbete, 5 hp' does not correspond to any course in the program; DV1684 Säkerhetsteknik is only a partial match. |
| 35 | HT30 | [SL2564 Förståelse för marknader, företagande och design inom hållbarhetsomställningar](#35-sl2564) | elective | **UNCLEAR** | high | No published course plan for SL2564 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. |
| 37 | HT30 | [DV2606 Multiprocessorprogrammering](#37-dv2606) | elective | **CONDITIONAL** | medium | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. |
| 38 | HT30 | [SL2565 Bedöma och designa inom omställningar till hållbarhet](#38-sl2565) | elective | **UNCLEAR** | high | No published course plan for SL2565 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. |
| 41 | HT30 | [IY2650 Technology venture 2: kommersialisering av innovationer](#41-iy2650) | elective | **CONDITIONAL** | high | IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses. |
| 42 | VT31 | [IY2658 ICT start-ups och högteknologiskt entreprenörskap](#42-iy2658) | mandatory | **UNCLEAR** | high | No published course plan for IY2658 (VT31, mandatory, 6 hp, Avancerad nivå); the fetch found no link on the program page. |
| 46 | VT31 | [MA2517 Kvantinformation och algoritmer för kvantdatorer](#46-ma2517) | elective | **UNCLEAR** | high | No published course plan for MA2517 (VT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. |
| 50 | HT31 | [DV2606 Multiprocessorprogrammering](#50-dv2606) | elective | **CONDITIONAL** | medium | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. |
| 51 | HT31 | [IY2650 Technology venture 2: kommersialisering av innovationer](#51-iy2650) | elective | **CONDITIONAL** | high | This is a repeated offering of IY2650 (see seq 41). IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses. |
| 52 | HT31 | [SL2565 Bedöma och designa inom omställningar till hållbarhet](#52-sl2565) | elective | **UNCLEAR** | high | No published course plan for SL2565 (HT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. |
| 53 | VT32 | [DV2649 Masterarbete i datavetenskap](#53-dv2649) | mandatory | **UNCLEAR** | high | No published course plan for DV2649 (VT32, mandatory, 30 hp, Avancerad nivå, degree project); the fetch found no link on the program page. |

## 2. Findings

| ID | Severity | Course | Semester | Type | Description | Recommendation |
|---|----|----|----|------|--------------------|--------------------|
| F-004 | high | DV1697 | VT29 | competence-gap | DV1697 labs are done mainly in C/C++ and students are expected to know the language, but the mandatory programming courses before VT29 (DV1574, DV1582) use Python and DV1730 uses assembly. No mandatory course introduces C/C++. | Add a C/C++ introduction to an earlier mandatory course (e.g. DV1730 or DV1682), or state C/C++ as an explicit prerequisite and include a language primer at the start of DV1697. |
| F-013 | high | IY2658 | VT31 | missing-course-plan | No published course plan for IY2658 (VT31, mandatory, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| F-018 | high | DV2649 | VT32 | missing-course-plan | No published course plan for DV2649 (VT32, mandatory, 30 hp, Avancerad nivå, degree project); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| F-003 | medium | PA1484 | HT28 | ambiguous-requirement | The prerequisite 'introduktion till ingenjörsarbete/-rollen' (6 hp) does not match any course in the program by name or learning outcomes; DV1683 and PA1481 only partly touch the topic. | Name the intended course code(s) in the prerequisite, or reword it (e.g. to state 'DV1683') so that satisfaction can be verified; alternatively add an explicit engineering-role outcome to the intended course. |
| F-006 | medium | DV2606 | HT29 | competence-gap | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. | Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here. |
| F-007 | medium | DV1688 | VT30 | ambiguous-requirement | The prerequisite 'datorsäkerhet och ingenjörsarbete, 5 hp' does not correspond to any course in the program; DV1684 Säkerhetsteknik is only a partial match. | Replace the generic wording with the actual course code(s) (probably DV1684) in the course plan, or add DV1684 to an explicit equivalence list. |
| F-008 | medium | SL2564 | HT30 | missing-course-plan | No published course plan for SL2564 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| F-009 | medium | DV2606 | HT30 | competence-gap | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. | Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here. |
| F-010 | medium | SL2565 | HT30 | missing-course-plan | No published course plan for SL2565 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| F-012 | medium | IY2650 | HT30 | elective-dependency | IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses. | State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers. |
| F-014 | medium | MA2517 | VT31 | missing-course-plan | No published course plan for MA2517 (VT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| F-015 | medium | DV2606 | HT31 | competence-gap | The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it. | Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here. |
| F-016 | medium | IY2650 | HT31 | elective-dependency | This is a repeated offering of IY2650 (see seq 41). IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses. | State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers. |
| F-017 | medium | SL2565 | HT31 | missing-course-plan | No published course plan for SL2565 (HT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page. | Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program. |
| F-001 | low | PA1481 | VT28 | ambiguous-requirement | The plan requires Fysik 2 and Kemi 1, which have no visible connection to the content and are stricter than other first-term courses (MA1498 requires Fysik 1 only). It is unclear whether the program's admission requirements guarantee Fysik 2 and Kemi 1. | Verify that the program admission requirements include Fysik 2 and Kemi 1, or remove these requirements from the course plan if they are inherited from a template. |
| F-002 | low | DV1582 | VT28 | ambiguous-requirement | The requirement says 'genomgången kurs ... 6 hp, varav minst 2 hp ska vara avklarade', which is self-contradictory (a completed course versus at least 2 of 6 hp completed). | State precisely whether the whole of DV1574 or only a part (e.g. specific examination moments totalling 2 hp) is required. |
| F-005 | low | PA1485 | HT29 | competence-gap | Team-based development needs collaborative tooling (version control), but none of the program's course plans mentions it, and PA1485's plan does not state that it is taught. | Add version control and basic CI/tooling explicitly to the content of PA1484 or PA1485 so that later projects (PA2611, TE1429) can rely on it. |
| F-011 | low | DV2658 | HT30 | ordering | DV2658 fine-tunes and develops neural generative models, but the dedicated deep learning course DV2646 Djup maskininlärning is placed in VT31, after DV2658 (HT30). Students rely on only introductory deep learning from DV2659/DV1683. | Consider moving DV2646 before HT30, or state in the DV2658 plan that neural network basics are taught within the course. |

## 3. Review by semester

### HT27

#### 1. MA1498 Linjär algebra - OK
<a id="1-ma1498"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 34 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGW6Q&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the plan requires only upper-secondary Fysik 1 and Matematik 4/E, which admission verifies.

MA1498 is a G1N course and its Förkunskapskrav is 'Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E', all upper-secondary. The content (Gauss elimination, matrices, vectors, eigenvalues of order 2-3) builds on gymnasium mathematics. No earlier program course exists or is needed.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E | upper-secondary | MET | Plan section 2 lists only upper-secondary requirements, verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Upper-secondary algebra and basic mathematical reasoning | UPPER_SECONDARY | - | Plan states 'Fördjupning: G1N - Grundnivå, har endast gymnasiala förkunskapskrav'; Matematik 4/E suffices. |

#### 2. DV1574 Programmering och problemlösning med Python - OK
<a id="2-dv1574"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BX4FM&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the plan requires only Grundläggande behörighet and is an introductory programming course.

DV1574 states 'Grundläggande behörighet.' as its only prerequisite and teaches Python from the basics (data types, selection, iteration, functions). No earlier program knowledge is assumed.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | Plan section 2: 'Grundläggande behörighet.' verified at admission. |

#### 3. DV1683 Artificiell intelligens och ingenjörsmässighet - OK
<a id="3-dv1683"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGAHF&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the plan requires only Grundläggande behörighet and is an introductory AI course.

DV1683 states 'Grundläggande behörighet' only and introduces AI and machine learning conceptually. Using 'enklare AI-modeller' is not stated to require prior programming, and DV1574 runs concurrently in the same period anyway.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | Plan section 2: 'Grundläggande behörighet'. |

#### 4. MA1499 Envariabelanalys 1: funktioner och differentialkalkyl - OK
<a id="4-ma1499"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BWAQ7&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the plan requires only upper-secondary Fysik 1 and Matematik 4/E.

MA1499 requires 'Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E', all upper-secondary. The content (limits, derivatives, Taylor series) builds on gymnasium calculus; MA1498 gives mathematical notation but is not needed.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E | upper-secondary | MET | Plan section 2 lists only upper-secondary requirements. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Upper-secondary functions, algebra and basic calculus | UPPER_SECONDARY | - | Course is introductory (G1N-level) and starts with standard function concepts; Matematik 4/E suffices. |

#### 5. IY1458 Industriell ekonomi, översiktskurs - OK
<a id="5-iy1458"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BG3FL&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the plan requires only Grundläggande behörighet and upper-secondary Matematik 3b/3c.

IY1458 requires 'Grundläggande behörighet samt Matematik 3b alt 3c', which is upper-secondary. The content (basic economics, costing, budgeting, investment appraisal) is introductory and uses simple calculations only.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Matematik 3b alt 3c | upper-secondary | MET | Upper-secondary mathematics verified at admission (the program requires Matematik 4/E in other courses, which exceeds this). |

### VT28

#### 6. MA1500 Envariabelanalys 2: differentialekvationer och integralkalkyl - OK
<a id="6-ma1500"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYKD9&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MA1499 (6 hp, finished in HT27) is a completed single-variable analysis course.

MA1500 requires 'genomgången kurs i envariabelanalys, 6 hp'. MA1499 Envariabelanalys 1 (6 hp, mandatory, HT27 period 2) finishes before VT28 and covers limits, derivatives and Taylor series, which the integration and ODE content builds on. The title 'Envariabelanalys 2' confirms MA1499 is the intended predecessor.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| genomgången kurs i envariabelanalys, 6 hp | course | MET | MA1499 (6 hp, HT27, mandatory, Matematik) covers single-variable analysis and is finished before MA1500. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Differentiation, limits and continuity | COVERED | MA1499 | Integration, FTC and ODEs presuppose derivatives and limits, taught in MA1499. |
| Basic matrix/vector notation and mathematical language | COVERED | MA1498 | Plan lists 'Matematiskt språk och notation', introduced in MA1498. |

#### 7. PA1481 Digital etik och hållbar utveckling - OK
<a id="7-pa1481"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BTL6M&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence medium)

**Answer:** Yes, because the only requirements are upper-secondary and the course is introductory.

PA1481 requires 'Grundläggande behörighet samt Fysik 2, Kemi 1 och Matematik 4', all upper-secondary. The content (ethical theory, SDGs, sustainable software) needs no university-level prerequisite. The Fysik 2/Kemi 1 requirement seems unrelated to the content, but is treated as met via admission.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Fysik 2, Kemi 1 och Matematik 4 | upper-secondary | MET | Upper-secondary requirements are verified at admission; the program's own courses (e.g. MA1498) require at least Fysik 1 and Matematik 4/E. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic understanding of software systems and AI as context for ethical analysis | COVERED | DV1574, DV1683 | Course analyses ethics of software and AI-based systems; DV1574 (programming, software development process) and DV1683 (AI, ethical and safety aspects) are completed earlier. |

Findings: F-001

#### 8. DV1582 Programmering i Python, fortsättningskurs - OK
<a id="8-dv1582"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BQ9T9&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1574, the named predecessor, is completed earlier, although the wording of the requirement is contradictory.

DV1582 requires 'genomgången kurs, Programmering och problemlösning med Python, 6 hp, varav minst 2 hp ska vara avklarade'. DV1574 (6 hp, mandatory, HT27) is fully completed before VT28, so both readings are satisfied. OOP, packages and generators build directly on DV1574's functions, data structures and modules; NumPy/SciPy use is supported by MA1498 matrix concepts.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs Programmering och problemlösning med Python, 6 hp (varav minst 2 hp avklarade) | course | MET | DV1574 Programmering och problemlösning med Python, 6 hp, HT27, mandatory, finished before DV1582 starts. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic Python: functions, modules, data structures, exceptions, simple testing | COVERED | DV1574 | DV1574 learning outcomes: construct well-structured Python programs, use lists/tuples/dictionaries, exceptions and modules. |
| Matrix concepts for using NumPy/SciPy | COVERED | MA1498 | Learning outcome 'Använda Python standardbibliotek, ex NumPy, SciPy' presupposes matrices/vectors from MA1498. |

Findings: F-002

#### 9. MA1504 Diskret matematik - OK
<a id="9-ma1504"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B3Q9L&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MA1498 Linjär algebra (6 hp) is completed in HT27.

MA1504 requires 'genomgången kurs i Linjär algebra om 6 hp'; MA1498 Linjär algebra (6 hp, mandatory, HT27) is finished before VT28 period 4. The discrete mathematics content (number theory, combinatorics, graphs, proofs) is otherwise self-contained at this level.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i Linjär algebra om 6 hp | course | MET | MA1498 Linjär algebra, 6 hp, HT27, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Mathematical language, notation and elementary proof reading | COVERED | MA1498 | MA1498 content includes 'Matematiskt språk och notation: definition, sats, bevis'; MA1504 content includes induction and contradiction proofs. |

#### 10. DV1682 Datastrukturer och algoritmer - OK
<a id="10-dv1682"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BEMLM&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1574 (basic programming) and DV1582 (object-oriented programming) are both completed before it starts.

DV1682 requires 'grundläggande programmering motsvarande 5 hp samt objektorienterad programmering, 5 hp'. DV1574 (6 hp, HT27) gives basic programming and DV1582 (6 hp, VT28 period 3) gives OOP and implementing abstract data types, finishing before period 4. Complexity analysis relies on functions, sums and logarithms from MA1499 and upper-secondary mathematics; MA1504 (induction) runs concurrently but is not formally required.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande programmering motsvarande 5 hp | course | MET | DV1574 Programmering och problemlösning med Python, 6 hp, HT27, mandatory. |
| Objektorienterad programmering, 5 hp | course | MET | DV1582 Programmering i Python, fortsättningskurs, 6 hp, VT28 period 3, mandatory; period 3 ends before period 4. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Implementing programs with classes and basic data structures | COVERED | DV1574, DV1582 | DV1582 outcome: 'Implementera fundamentala abstrakta datatyper och algoritmer i ett objektorienterat språk'. |
| Mathematical basis for complexity analysis (functions, logarithms, sums) | COVERED | MA1499 | Complexity theory introduction needs function growth, limits; MA1499 covers functions and limits. |

### HT28

#### 11. MA1514 Flervariabelanalys - OK
<a id="11-ma1514"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B4WNF&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because linear algebra (MA1498) and single-variable analysis (MA1499, MA1500) are completed earlier.

MA1514 requires 'genomgångna kurser i linjär algebra och envariabelanalys'. MA1498 (linear algebra), MA1499 and MA1500 (single-variable analysis, 12 hp) are all mandatory and finished before HT28. Content such as gradients, quadratic forms, Lagrange multipliers and Jacobians uses exactly these.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i linjär algebra | course | MET | MA1498 Linjär algebra, 6 hp, HT27, mandatory. |
| Genomgången kurs i envariabelanalys | course | MET | MA1499 and MA1500 Envariabelanalys 1 and 2, 12 hp, HT27-VT28, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Integration, differentiation and eigenvalues/definiteness for quadratic forms | COVERED | MA1498, MA1499, MA1500 | Classification of quadratic forms uses eigenvalues (MA1498); multiple integrals use integration techniques (MA1500). |

#### 12. PA1484 Programvaruutveckling - UNCLEAR
<a id="12-pa1484"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BQ7KW&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **UNCLEAR** (confidence medium)

**Answer:** Probably yes, but it is unclear which earlier course counts as 'introduktion till ingenjörsarbete/-rollen', so the requirement cannot be verified.

PA1484 requires '6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen och minst 6 avklarade hp i programmering'. Programming is clearly met by DV1574 and DV1582 (12 hp). No earlier course is titled or scoped as an introduction to the engineering role: DV1683 only 'introducerar begreppet ingenjörsmässighet' and PA1481 covers 'Professionella praxis och riktlinjer för etik för ingenjörer', neither with learning outcomes about the engineering role as such. The competences needed for the course itself (process knowledge, group work) are introductory.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen | course | UNVERIFIABLE | Closest candidates are DV1683 (AI och ingenjörsmässighet, 6 hp, HT27) and PA1481 (professional ethics for engineers, 6 hp, VT28), but neither has the engineering role as its main content or learning outcome. |
| Minst 6 avklarade hp i programmering | credits | MET | DV1574 (6 hp, HT27) and DV1582 (6 hp, VT28) = 12 hp programming, both mandatory and finished before HT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic programming and testing to relate development stages to real code | COVERED | DV1574, DV1582 | DV1574 includes basic testing methodology and the development process; DV1582 gives OOP. |
| Professional and ethical reasoning about software | COVERED | PA1481, DV1683 | PA1484 outcome on ethical positions builds on PA1481 digital ethics and professional guidelines. |

Findings: F-003

#### 13. FY1436 Kraft och energi - OK
<a id="13-fy1436"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPDX7&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MA1498 Linjär algebra is completed earlier and the physics content builds on vectors and single-variable calculus given by the program.

FY1436 requires 'genomgången kurs i Linjär algebra, 6 hp', met by MA1498 (HT27, mandatory). The mechanics, waves and electromagnetism content needs vectors, derivatives and integrals, provided by MA1498, MA1499 and MA1500. Computer-assisted analysis of measurements and regression is supported by DV1574 (Python) and least squares in MA1498.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i Linjär algebra, 6 hp | course | MET | MA1498 Linjär algebra, 6 hp, HT27, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Vector algebra and single-variable calculus for kinematics, work and energy | COVERED | MA1498, MA1499, MA1500 | Content 'Rörelse i två och tre dimensioner ... vektorer', work and energy as integrals. |
| Computer-supported analysis of measurement data and regression | COVERED | DV1574, MA1498 | Outcome 'analysera mätresultat med datorstöd'; Python programming (DV1574) and least squares (MA1498). |

#### 14. DV1730 Datorteknik - OK
<a id="14-dv1730"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BJH3K&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because 12 hp of programming and the data structures and algorithms course DV1682 are completed earlier.

DV1730 requires '6 avklarade hp från programmeringskurser samt genomgången kurs i datastrukturer och algoritmer'. DV1574 and DV1582 (12 hp programming) and DV1682 (data structures and algorithms) are mandatory and finished before HT28 period 2. DV1574 also introduced computer structure and function, which this course deepens to machine level.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 avklarade hp från programmeringskurser | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory, VT28 or earlier. |
| Genomgången kurs i datastrukturer och algoritmer | course | MET | DV1682 Datastrukturer och algoritmer, 6 hp, VT28 period 4, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic understanding of computer structure and Boolean logic | COVERED | DV1574, MA1504 | DV1574 includes 'Introduktion till datorns funktion och uppbyggnad' and Boolean algebra; MA1504 covers Boolean algebra and number bases. |

#### 15. MS1419 Matematisk statistik - OK
<a id="15-ms1419"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BKXKM&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MA1498, MA1499/MA1500 and MA1514 are all completed before period 2 of HT28.

MS1419 requires 1.5 hp of linear algebra, 1.5 hp of single-variable analysis and the course Flervariabelanalys, 6 hp. MA1498 and MA1499/MA1500 are completed in HT27-VT28, and MA1514 Flervariabelanalys (6 hp) runs in HT28 period 1, ending before period 2. Continuous random variables in two dimensions use double integrals from MA1514.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 1,5 avklarade hp i linjär algebra | credits | MET | MA1498 Linjär algebra, 6 hp, HT27, mandatory. |
| 1,5 avklarade hp i envariabelanalys | credits | MET | MA1499 and MA1500, 12 hp, mandatory, before HT28. |
| Genomgången kurs i Flervariabelanalys, 6 hp | course | MET | MA1514 Flervariabelanalys, 6 hp, HT28 period 1, mandatory; finishes before MS1419 starts in period 2. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Combinatorics and counting | COVERED | MA1504 | Content starts with 'Kombinationer och permutationer'; MA1504 covers combinatorics. |
| Double integrals for two-dimensional continuous random variables | COVERED | MA1514 | MA1514 teaches double and triple integrals. |
| Computer-supported data analysis (datorlaborationer) | COVERED | DV1574, DV1582 | Python programming and NumPy/SciPy in DV1582. |

### VT29

#### 16. DV1697 Operativsystem - GAP
<a id="16-dv1697"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BFNWH&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **GAP** (confidence medium)

**Answer:** Formally yes, but the labs are done mainly in C/C++, which no earlier course teaches, so students lack a competence the course presupposes.

The formal requirement '12 avklarade hp i programmering samt 1,5 avklarade hp från algoritmer och datastrukturer' is met by DV1574 + DV1582 and DV1682. However, section 5 says 'Uppgifterna för laborationerna skall genomföras huvudsakligen i programmeringsspråket C / C++. Studenten ska ha tillräcklig förståelse för språken för att självständigt klara av att omvandla teori till praktik'. All earlier programming courses use Python (DV1574, DV1582) or assembly (DV1730); a search of the course plans before VT29 finds no C/C++ teaching. Systems-level concepts (memory, processes) are partly prepared by DV1730 and DV1682.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 12 avklarade hp i programmering | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory, finished before VT29. |
| 1,5 avklarade hp från algoritmer och datastrukturer | credits | MET | DV1682 Datastrukturer och algoritmer, 6 hp, VT28, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C/C++ (language knowledge sufficient to implement OS functionality in labs) | NOT_COVERED | - | Plan section 5 requires sufficient understanding of C/C++; earlier courses use Python (DV1574, DV1582) and assembly (DV1730), none teaches C or C++. |
| Computer architecture and low-level hardware interaction | COVERED | DV1730, DV1574 | DV1730 teaches machine language, interrupt handlers and the hardware/software relationship. |
| Choosing and implementing algorithms and data structures | COVERED | DV1682 | Learning outcome 'välja lämpliga algoritmer och datastrukturer' builds on DV1682. |

Findings: F-004

#### 17. DV1663 Databasteknik - OK
<a id="17-dv1663"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 12 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BA6U9&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because 12 hp of programming including 6 hp of object-oriented programming (DV1582) are completed earlier.

DV1663 requires '12 hp i programmering, varav 6 hp måste vara i objektorienterad programmering'. DV1574 (6 hp) plus DV1582 (6 hp, OOP) give exactly 12 hp, both mandatory and finished before VT29. Relational algebra and normalisation build on relations and Boolean algebra from MA1504; client applications use Python from DV1574/DV1582.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 12 hp i programmering | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory, finished before VT29. |
| Varav 6 hp i objektorienterad programmering | course | MET | DV1582 Programmering i Python, fortsättningskurs, 6 hp, covers classes, inheritance and polymorphism. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming of client applications | COVERED | DV1574, DV1582 | Outcome 'designa och implementera ... tillhörande klientapplikation' requires programming skills. |
| Set and relation theory for relational model | COVERED | MA1504 | MA1504 covers binary relations, equivalence relations and Boolean algebra. |

#### 18. DV1685 Datakommunikation och nätverksteknik - OK
<a id="18-dv1685"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 12 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B3NTH&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because 12 hp of programming are completed earlier and the course is introductory in networking.

DV1685 requires '5 avklarade hp i programmering'; DV1574 and DV1582 give 12 hp. The content (protocol stack, addressing, switch/router configuration) is introductory; socket programming builds on Python from DV1574/DV1582, and number systems on MA1504 (number bases) and DV1574.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 avklarade hp i programmering | credits | MET | DV1574 (6 hp) and DV1582 (6 hp), mandatory, finished before VT29. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic programming for socket programming | COVERED | DV1574, DV1582 | Outcome 'implementera enkel socket-programmering i applikationer'. |
| Number systems (binary/hex) for addressing and subnetting | COVERED | MA1504, DV1574 | MA1504 covers 'Talbaser'; DV1574 introduces computer structure. |

#### 19. DV1684 Säkerhetsteknik - OK
<a id="19-dv1684"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPJF4&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because 12 hp of programming are completed earlier and the course is an introduction to security.

DV1684 requires 'avklarade kurser i programmering, motsvarande 12 hp', met by DV1574 + DV1582. The content is introductory (CIA triad, threats, basic cryptography); basic cryptography is supported by MA1504 (modular arithmetic, RSA), and ethical reasoning by PA1481. Network knowledge from DV1685 (period 3, finished) supports threat discussions.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser i programmering, motsvarande 12 hp | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory, finished before VT29. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic cryptography concepts (modular arithmetic, RSA) | COVERED | MA1504 | Content 'Grundläggande kryptografi och autentisering'; MA1504 includes modular arithmetic, Fermat's little theorem and RSA. |
| Networking basics for understanding threats and access control | COVERED | DV1685 | DV1685 (period 3) covers protocols and basic network device security and ends before period 4. |
| Ethical and professional reflection | COVERED | PA1481, DV1683 | Plan outcomes on ethical and legal consequences build on PA1481. |

#### 20. DV1597 Intelligent dataanalys - OK
<a id="20-dv1597"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BNNEW&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MS1419 Matematisk statistik (6 hp) and 12 hp of programming are completed earlier.

DV1597 requires 'avklarad kurs Matematisk statistik, 6 hp samt 12 hp avklarade från moment i programmeringskurser'. MS1419 Matematisk statistik (6 hp, HT28, mandatory) and DV1574 + DV1582 (12 hp) are finished before VT29 period 4. Descriptive statistics, regression and hypothesis tests build directly on MS1419; data pipelines use Python and NumPy/SciPy from DV1582.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarad kurs Matematisk statistik, 6 hp | course | MET | MS1419 Matematisk statistik, 6 hp, HT28, mandatory (probability, estimation, hypothesis testing, linear regression). |
| 12 hp avklarade från moment i programmeringskurser | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Python programming for data processing pipelines and visualisation | COVERED | DV1574, DV1582 | DV1582 outcome: use NumPy, SciPy from Python's ecosystem. |
| Probability distributions, regression and hypothesis testing | COVERED | MS1419 | MS1419 content lists distributions, estimation, hypothesis testing and simple linear regression. |

### HT29

#### 21. ET1558 Dynamiska system och återkoppling - OK
<a id="21-et1558"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 36 (2029) - Vecka 44 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BDWH4&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because 120 hp at first-cycle level including linear algebra and single-variable analysis are completed earlier.

ET1558 requires '60 avklarade hp på grundnivå varav 6 hp i linjär algebra och 6 hp i envariabelanalys'. The ledger shows 120 guaranteed hp at grundnivå, including MA1498 (6 hp linear algebra) and MA1499/MA1500 (12 hp analysis). Modelling with ODEs, linearisation and stability uses MA1500 (differential equations), MA1514 (partial derivatives, Jacobian) and MA1498 (eigenvalues); physical modelling is supported by FY1436.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 avklarade hp på grundnivå | credits | MET | 120 hp mandatory grundnivå guaranteed before HT29. |
| Varav 6 hp i linjär algebra | course | MET | MA1498 Linjär algebra, 6 hp (Matematik), HT27. |
| Varav 6 hp i envariabelanalys | course | MET | MA1499 and MA1500, 12 hp (Matematik), HT27-VT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Ordinary differential equations and eigenvalues for stability analysis | COVERED | MA1500, MA1498 | MA1500 covers first- and second-order linear ODEs; MA1498 covers eigenvalues and diagonalisation. |
| Linearisation of nonlinear models (partial derivatives) | COVERED | MA1514 | Outcome 'linjärisera olinjära dynamiska modeller' uses gradients and tangent planes from MA1514. |
| Programming for simulation | COVERED | DV1574, DV1582 | Outcome 'modellera och simulera' needs scripting; Python with NumPy/SciPy from DV1582. |

#### 22. DV2659 Tillämpad artificiell intelligens - OK
<a id="22-dv2659"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2029) - Vecka 44 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6ELN&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the programming, data structures and algorithms and statistics prerequisites are all completed earlier.

DV2659 requires '5 avklarade hp från programmeringskurser, 5 avklarade hp i datastrukturer och algoritmer samt genomgången kurs i matematisk statistik'. DV1574 + DV1582, DV1682 and MS1419 satisfy these before HT29. DV1683 and DV1597 already introduced AI/ML concepts and data analysis; the plan is an A1N course with only first-cycle prerequisites.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 avklarade hp från programmeringskurser | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory. |
| 5 avklarade hp i datastrukturer och algoritmer | course | MET | DV1682 Datastrukturer och algoritmer, 6 hp, VT28. |
| Genomgången kurs i matematisk statistik | course | MET | MS1419 Matematisk statistik, 6 hp, HT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Introductory AI and machine learning concepts | COVERED | DV1683, DV1597 | DV1683 explains ML paradigms and applies simple AI models; DV1597 covers data analysis. |
| Graph search and heuristics | COVERED | DV1682, MA1504 | Content 'grafer, sökning och heuristik' builds on graphs and search algorithms in DV1682 and graph theory in MA1504. |
| Python programming for implementing AI solutions | COVERED | DV1574, DV1582 | Outcome 'designa, utveckla och implementera AI-lösningar ... med hjälp av ett programmeringsspråk'. |

#### 23. PA1485 Mjukvaruutvecklingsprojekt i team - UNCLEAR
<a id="23-pa1485"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 36 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGRP9&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **UNCLEAR** (confidence medium)

**Answer:** Yes for the formal requirements; the use of development tools such as version control in the team project is not taught anywhere earlier but is only vaguely stated.

PA1485 requires '12 avklarade hp i programmering och 6 avklarade hp i programvaruutveckling': DV1574 + DV1582 give 12 hp programming and PA1484 Programvaruutveckling gives 6 hp software development, all finished before HT29. The course expects students to 'Utveckla och testa en lösning ... med hjälp av lämpliga utvecklingsmetoder och verktyg' in a team; no course plan in the program mentions version control (git) and the plan does not say whether the course teaches it, so that cannot be verified.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 12 avklarade hp i programmering | credits | MET | DV1574 (6 hp) + DV1582 (6 hp), mandatory. |
| 6 avklarade hp i programvaruutveckling | course | MET | PA1484 Programvaruutveckling, 6 hp, HT28, mandatory (development processes, agile, planning). |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Software development processes and agile methods | COVERED | PA1484 | PA1484 outcomes: describe development processes and plan, run and follow up a project. |
| Testing a software solution | COVERED | DV1574, DV1582 | DV1574 includes basic testing methodology and verification; PA1484 covers testing as a development stage. |
| Collaborative development tooling (version control such as git) | UNVERIFIABLE | - | Plan says 'lämpliga utvecklingsmetoder och verktyg' for team work; no course in the program mentions version control and PA1485 does not say it teaches it. |

Findings: F-005

#### 24. PA1486 Testning av mjukvara - OK
<a id="24-pa1486"></a>

- 6 hp, elective, Grundnivå, läsperiod 2 (Vecka 45 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6L47&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because OOP (DV1582) and software development (PA1484) are mandatory courses completed earlier.

PA1486 (elective) requires '5 hp avklarade kurser inom objektorienterad programmering och 5 hp avklarad kurs inom programvaruutveckling, introduktion inom programvaruteknik, eller projektkurs'. DV1582 (6 hp OOP, VT28) and PA1484 (6 hp software development, HT28) are both mandatory and finished before HT29; PA1485 is concurrent and not needed. Test generation with combinatorial designs is supported by combinatorics in MA1504.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 hp avklarade kurser inom objektorienterad programmering | course | MET | DV1582 Programmering i Python, fortsättningskurs, 6 hp, mandatory. |
| 5 hp avklarad kurs inom programvaruutveckling, introduktion inom programvaruteknik, eller projektkurs | course | MET | PA1484 Programvaruutveckling, 6 hp, HT28, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Software development process knowledge to place testing in the lifecycle | COVERED | PA1484 | Content 'Planering och ledning av testaktiviteter inom mjukvaruutvecklingsprocesser'; PA1484 covers processes and planning. |
| Combinatorics for combinatorial test design | COVERED | MA1504 | MA1504 covers counting principles and combinatorics. |

#### 25. DV2606 Multiprocessorprogrammering - CONDITIONAL
<a id="25-dv2606"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B7FEX&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **CONDITIONAL** (confidence medium)

**Answer:** Yes for the formal requirements, but the C/C++ language knowledge expected in the labs is not taught earlier, so the result is conditional on self-study.

DV2606 (elective) requires '60 hp i huvudområdet datavetenskap eller programvaruteknik inklusive 12 hp programmering, 6 hp algoritmer och datastrukturer, operativsystem samt datorteknik 6 hp'. The ledger shows 72 hp Datavetenskap and 36 hp Programvaruteknik guaranteed; DV1574 + DV1582, DV1682, DV1697 and DV1730 are all mandatory and finished before HT29 period 2. Labs are 'huvudsakligen i programmeringsspråken C / C++' and students must have sufficient understanding of the languages; DV1697 uses C/C++ in labs, but no earlier course actually teaches them (see DV1697 finding).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Ledger: Datavetenskap 72 hp and Programvaruteknik 36 hp guaranteed (mandatory) before HT29. |
| Kurser i programmering 12 hp | credits | MET | DV1574 (6 hp) + DV1582 (6 hp). |
| Algoritmer och datastrukturer 6 hp | course | MET | DV1682, 6 hp, VT28. |
| Operativsystem samt datorteknik 6 hp | course | MET | DV1697 Operativsystem (6 hp) and DV1730 Datorteknik (6 hp), both mandatory and earlier; this exceeds 6 hp however the wording is read. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C/C++ (labs with pthreads and CUDA) | COVERED_CONDITIONALLY | DV1697 | Plan section 5: labs 'huvudsakligen i programmeringsspråken C / C++'. DV1697 labs use C/C++ but presuppose the language rather than teach it; no mandatory course introduces it. |
| Computer architecture and operating system threads/synchronisation | COVERED | DV1730, DV1697 | DV1730 covers machine level and hardware; DV1697 covers threads, synchronisation primitives and deadlocks. |

Findings: F-006

#### 26. DV2638 Maskininlärning - OK
<a id="26-dv2638"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 2 (Vecka 45 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BM3UR&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because programming, data structures and algorithms, statistics and ML introductions (DV1683, DV1597, DV2659) are completed earlier.

DV2638 requires 5 hp programming, 5 hp data structures and algorithms, 5 hp mathematical statistics or probability, and Engelska 6. DV1574 + DV1582, DV1682 and MS1419 satisfy the course requirements; Engelska 6 is upper-secondary. Preprocessing, evaluation and ML foundations were introduced in DV1683, DV1597 and DV2659 (finished in HT29 period 1). Gradient-based learning uses linear algebra (MA1498) and multivariable calculus (MA1514).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 hp programmering | credits | MET | DV1574 + DV1582, 12 hp, mandatory. |
| Datastrukturer och algoritmer, 5 hp | course | MET | DV1682, 6 hp. |
| Matematisk statistik eller sannolikhetsteori, 5 hp | course | MET | MS1419 Matematisk statistik, 6 hp, mandatory. |
| Engelska 6 | upper-secondary | MET | Upper-secondary course verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Linear algebra and multivariable calculus for learning algorithms | COVERED | MA1498, MA1514 | ML methods use matrices, gradients and optimisation. |
| Data preprocessing and statistical evaluation | COVERED | DV1597, MS1419 | DV1597 teaches data cleaning/transformation and statistical tests; MS1419 estimation and hypothesis testing. |
| Introductory ML and applied AI | COVERED | DV1683, DV2659 | Both courses introduce ML paradigms and algorithms. |

### VT30

#### 27. DV1601 Användbarhet och interaktionsdesign - OK
<a id="27-dv1601"></a>

- 6 hp, elective, Grundnivå, läsperiod 3 (Vecka 4 (2030) - Vecka 13 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BHLGL&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the only requirement is 6 hp in computer science or software engineering, which the program has long since provided.

DV1601 (elective, G1F) requires '6 hp inom huvudområdet datavetenskap eller programvaruteknik'. The ledger shows well over 60 hp in these areas guaranteed from mandatory courses (e.g. DV1574, DV1582, DV1682). The content introduces HCI from the basics, so no further assumed competence is needed.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 hp inom huvudområdet datavetenskap eller programvaruteknik | credits | MET | Mandatory courses such as DV1574 (Datavetenskap/Teknik) and PA1484 (Programvaruteknik) give far more than 6 hp before VT30. |

#### 28. DV1688 Digital undersökningsteknik - UNCLEAR
<a id="28-dv1688"></a>

- 6 hp, elective, Grundnivå, läsperiod 3 (Vecka 4 (2030) - Vecka 13 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BQGHM&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **UNCLEAR** (confidence medium)

**Answer:** Probably, but the required course 'datorsäkerhet och ingenjörsarbete, 5 hp' matches no course in the program exactly, so the requirement cannot be verified.

DV1688 (elective) requires '60 hp ... i huvudområdet datavetenskap eller programvaruteknik inklusive datorsäkerhet och ingenjörsarbete, 5 hp, programmering, 5 hp, samt operativsystem, 5 hp'. The 60 hp, programming (DV1574, DV1582) and operating systems (DV1697) parts are met by mandatory courses. 'Datorsäkerhet och ingenjörsarbete' is not the name of any course in the program; DV1684 Säkerhetsteknik (6 hp) covers computer security and ethics but not engineering practice as such, and the title looks like a legacy course name. Whether DV1684 satisfies it is a judgment the plan does not settle. Digital forensics uses file systems, OS and network knowledge from DV1697 and DV1685, which are covered.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Ledger: 144 hp guaranteed mandatory, well above 60 hp in Datavetenskap/Programvaruteknik. |
| Datorsäkerhet och ingenjörsarbete, 5 hp | course | UNVERIFIABLE | No course with this title or scope in the program; DV1684 Säkerhetsteknik (6 hp, VT29) covers security (CIA, threats, ethics) and is the closest match, PA1481 covers professional ethics. |
| Programmering, 5 hp | credits | MET | DV1574 and DV1582, 12 hp. |
| Operativsystem, 5 hp | course | MET | DV1697 Operativsystem, 6 hp, VT29, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| File systems, operating systems and memory handling | COVERED | DV1697 | Outcome 'hur digitala spår uppstår, lagras ... i operativsystem, filsystem'; DV1697 covers file systems and memory. |
| Network protocols and traffic analysis | COVERED | DV1685 | Outcome 'analysera ... nätverkstrafik'; DV1685 includes analysis of network traffic. |
| Security concepts and ethical/legal reflection | COVERED | DV1684, PA1481 | Outcomes require legal and ethical assessment of evidence. |

Findings: F-007

#### 29. TE1429 Kandidatarbete i teknik för AI och maskininlärning - OK
<a id="29-te1429"></a>

- 18 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 4 (2030) - Vecka 23 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYKMH&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the credit requirements are met by mandatory courses and the AI/ML and teamwork foundations are taught earlier.

TE1429 requires '60 hp i huvudområdet teknik, 15 hp i matematik och 3 hp i etik eller hållbar utveckling'. The ledger shows Teknik 96 hp and Matematik 30 hp guaranteed from mandatory courses; PA1481 (6 hp digital ethics and sustainable development) covers the ethics/sustainability requirement. The thesis needs AI/ML knowledge (DV1683, DV1597, DV2659, DV2638), teamwork (PA1485) and ethical reflection (PA1481); scientific method and academic writing are explicitly taught within the course ('Introduktion till vetenskapsteori', 'Akademiskt skrivande').

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Minst 60 avklarade hp i huvudområdet teknik | credits | MET | Ledger: Teknik 96 hp guaranteed (mandatory) before VT30. |
| Minst 15 avklarade hp i matematik | credits | MET | Ledger: Matematik 30 hp (MA1498, MA1499, MA1500, MA1504, MA1514). |
| Minst 3 avklarade hp i etik eller hållbar utveckling | credits | MET | PA1481 Digital etik och hållbar utveckling, 6 hp, VT28, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Knowledge in AI and machine learning to deepen in a chosen subarea | COVERED | DV1683, DV1597, DV2659, DV2638 | Outcome 'Visa fördjupad kunskap ... inom någon del av området AI och maskininlärning'. |
| Teamwork and project planning | COVERED | PA1485, PA1484 | Thesis is done as a group project with a project plan; PA1485 trained team-based project work. |
| Ethical and societal assessment | COVERED | PA1481, DV2659 | Outcome on assessing work with respect to scientific, societal and ethical aspects builds on PA1481. |
| Scientific method and academic writing | COVERED | DV1597 | Taught within TE1429 (lectures on vetenskapsteori and akademiskt skrivande); DV1597 gave earlier reporting experience with statistical analysis. |

#### 30. DV2647 Penetrationstestning och etisk hackning - OK
<a id="30-dv2647"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2030) - Vecka 23 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B4CTR&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because all four listed course requirements are met by mandatory courses and Engelska 6 is upper-secondary.

DV2647 (elective) requires 30 hp in datavetenskap/programvaruteknik or equivalent comprising basic programming 5 hp, OOP 5 hp, algorithms and data structures 5 hp and data communication/networks 5 hp, plus Engelska 6. DV1574, DV1582, DV1682 and DV1685 satisfy these before VT30; credit totals are well above 30 hp. Prior courses DV1684 (security), DV1697 (OS) and DV1685 (networks) underpin scanning, exploitation and privilege escalation.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 30 hp inom datavetenskap, programvaruteknik eller motsvarande | credits | MET | Ledger: Datavetenskap 78 hp and Programvaruteknik 48 hp guaranteed. |
| Grundläggande programmering, 5 hp | course | MET | DV1574, 6 hp. |
| Objektorienterad programmering, 5 hp | course | MET | DV1582, 6 hp. |
| Algoritmer och datastrukturer, 5 hp | course | MET | DV1682, 6 hp. |
| Datakommunikation eller datornätverk, 5 hp | course | MET | DV1685 Datakommunikation och nätverksteknik, 6 hp. |
| Engelska 6 | upper-secondary | MET | Upper-secondary course verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Network protocols, scanning and traffic analysis | COVERED | DV1685 | DV1685 includes protocols, subnetting, traffic analysis and network device security. |
| Security fundamentals, threats and legal/ethical framing | COVERED | DV1684, PA1481 | DV1684 covers threats, risk and ethical/legal aspects. |
| Operating system internals for exploitation and privilege escalation | COVERED | DV1697 | DV1697 covers processes, memory, file systems and security aspects of OS. |
| Scripting to adapt tools | COVERED | DV1574, DV1582 | Outcome 'använda och anpassa relevanta verktyg och skript'. |

#### 31. PA2601 DevSecOps - Utveckling, säkerhet och drift - OK
<a id="31-pa2601"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2030) - Vecka 23 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPLCX&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the credit requirement and all named subject requirements (OOP, algorithms, databases, software development) are met by mandatory courses.

PA2601 (elective) requires 180 hp degree or 60 hp in technology/computer science/software engineering, of which at least 20 hp in datavetenskap/programvaruteknik comprising OOP 5 hp, algorithms and data structures 5 hp, databases 5 hp and a project or software development course 5 hp, plus Engelska 6. The ledger shows Teknik 96 hp, Datavetenskap 78 hp and Programvaruteknik 48 hp; DV1582, DV1682, DV1663 and PA1484/PA1485 are mandatory and finished before VT30 period 4. DV1684 provides the security base and PA1484/PA1485 the process base.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 180 hp tekniskt examen eller minst 60 avklarade hp inom teknik, datavetenskap eller programvaruteknik | credits | MET | Ledger: Teknik 96 hp guaranteed before VT30 (alternative 60 hp route). |
| Minst 20 hp inom datavetenskap, programvaruteknik eller motsvarande | credits | MET | Ledger: Datavetenskap 78 hp, Programvaruteknik 48 hp. |
| Objektorienterad programmering, 5 hp | course | MET | DV1582, 6 hp. |
| Algoritmer och datastrukturer, 5 hp | course | MET | DV1682, 6 hp. |
| Databasteknik, 5 hp | course | MET | DV1663 Databasteknik, 6 hp, VT29. |
| Projektkurs eller kurs i programvaruutveckling, 5 hp | course | MET | PA1484 Programvaruutveckling (6 hp) and PA1485 Mjukvaruutvecklingsprojekt i team (6 hp). |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Software development processes (agile, planning, delivery) | COVERED | PA1484, PA1485 | The course integrates security into agile development processes. |
| Security threats, vulnerabilities and risk handling | COVERED | DV1684 | DV1684 covers threats, risk management and threat modelling. |

### HT30

#### 32. DV2583 Digital etik - OK
<a id="32-dv2583"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B9A7W&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV2659 Tillämpad artificiell intelligens (the course named 'Tillämpad AI') is completed in HT29.

DV2583 requires 'avklarad kurs Tillämpad AI, 6 hp'; DV2659 Tillämpad artificiell intelligens (6 hp, HT29, mandatory) is finished before HT30. Ethical theory is introduced in PA1481 and DV1683/DV2659 (AI ethics), so DV2583 deepens at advanced level.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarad kurs Tillämpad AI, 6 hp | course | MET | DV2659 Tillämpad artificiell intelligens, 6 hp, HT29, mandatory; the short name in the plan clearly refers to it. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Introductory ethical theory and AI ethics | COVERED | PA1481, DV2659, DV1683 | PA1481 introduces ethical theory and professional codes; DV2659 and DV1683 treat AI ethics, so DV2583 progresses from introduction to deeper reflection. |
| Writing reports and presenting at seminars | COVERED | TE1429, PA1481 | Seminar presentation and reflective report; PA1481 uses seminars and a report, TE1429 trained academic writing. |

#### 33. IY2649 Technology venture 1: Innovation och affärsutveckling - OK
<a id="33-iy2649"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BEXJN&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because well over 90 hp in a technical area plus Engelska 6 are guaranteed.

IY2649 (elective) requires 'avklarade kurser om minst 90 hp inom ett tekniskt område. Engelska 6.' The ledger shows 162 hp of mandatory courses before HT30, with Teknik >= 96 hp. The course introduces entrepreneurship from the basics, with IY1458 giving some business grounding.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser om minst 90 hp inom ett tekniskt område | credits | MET | Ledger: Teknik 96+ hp and 162 hp total guaranteed from mandatory courses. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic business and economic concepts | COVERED | IY1458 | Business models with revenue and operations models build on IY1458 (companies, financing, budgeting). |
| Group project work | COVERED | PA1485, TE1429 | Group-based entrepreneurial project. |

#### 34. DV2607 Säkerhet i AI-system - OK
<a id="34-dv2607"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BG6JY&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV2638 Maskininlärning (6 hp) is completed in HT29.

DV2607 requires 'avklarad kurs Maskininlärning, 6 hp' (or the alternative Signalbehandling course, which is not in the program). DV2638 Maskininlärning (6 hp, mandatory, HT29 period 2) is finished before HT30. Security concepts are introduced briefly in the course itself and also covered by DV1684.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarad kurs Maskininlärning, 6 hp (alternativt Signalbehandling med introduktion till maskininlärning, 6 hp) | course | MET | DV2638 Maskininlärning, 6 hp, HT29, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Machine learning algorithms, training and evaluation | COVERED | DV2638, DV2659 | Attacks such as data poisoning presuppose understanding of how learning systems are trained; DV2638 covers supervised/unsupervised learning and evaluation. |
| Reading and presenting research articles | COVERED | TE1429, DV2583 | Outcome 'summera och muntligt presentera ... forskningsartiklar'; TE1429 and DV2583 (seminars on current articles) train this, with DV2583 concurrent in period 1, TE1429 completed. |

#### 35. SL2564 Förståelse för marknader, företagande och design inom hållbarhetsomställningar - UNCLEAR
<a id="35-sl2564"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: **not published**
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Cannot be determined, because no course plan is published for SL2564 in HT30.

The program page links no course plan for SL2564 (HT30, elective, 6 hp, Avancerad nivå), so prerequisites, content and learning outcomes cannot be assessed and no verdict can be derived from the files.

Findings: F-008

#### 36. MA1513 Kryptologins grunder - OK
<a id="36-ma1513"></a>

- 6 hp, elective, Grundnivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPCQQ&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MA1498 Linjär algebra and MA1504 Diskret matematik (both 6 hp) are completed earlier.

MA1513 (elective) requires '6 avklarade högskolepoäng i linjär algebra och genomgången kurs i diskret matematik om 6 hp'. MA1498 (HT27) and MA1504 (VT28), both mandatory, give this. MA1504 already covers modular arithmetic, Fermat's little theorem, RSA and error-correcting codes, which this course extends to finite fields and more cryptosystems; implementation in labs uses Python from DV1574/DV1582.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 avklarade hp i linjär algebra | course | MET | MA1498 Linjär algebra, 6 hp, HT27, mandatory. |
| Genomgången kurs i diskret matematik om 6 hp | course | MET | MA1504 Diskret matematik, 6 hp, VT28, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Modular arithmetic, number theory and RSA basics | COVERED | MA1504 | MA1504 content: modular arithmetic, Chinese remainder theorem, Fermat's little theorem, RSA. |
| Programming to implement cryptosystems | COVERED | DV1574, DV1582 | Outcome 'implementera, använda och exemplifiera de kryptosystem och protokoll'. |

#### 37. DV2606 Multiprocessorprogrammering - CONDITIONAL
<a id="37-dv2606"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BF6H9&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **CONDITIONAL** (confidence medium)

**Answer:** Yes for the formal requirements, but the C/C++ language knowledge expected in the labs is not taught earlier, so the result is conditional on self-study.

This is a repeated offering of DV2606 (the student takes it only once; see the first occurrence, seq 25). DV2606 (elective) requires '60 hp i huvudområdet datavetenskap eller programvaruteknik inklusive 12 hp programmering, 6 hp algoritmer och datastrukturer, operativsystem samt datorteknik 6 hp'. The ledger shows 84 hp Datavetenskap and 48 hp Programvaruteknik guaranteed; DV1574 + DV1582, DV1682, DV1697 and DV1730 are all mandatory and finished before this occurrence. Labs are 'huvudsakligen i programmeringsspråken C / C++' and students must have sufficient understanding of the languages; DV1697 uses C/C++ in labs, but no earlier course actually teaches them (see DV1697 finding).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Ledger: Datavetenskap 72 hp and Programvaruteknik 36 hp guaranteed (mandatory) before this occurrence. |
| Kurser i programmering 12 hp | credits | MET | DV1574 (6 hp) + DV1582 (6 hp). |
| Algoritmer och datastrukturer 6 hp | course | MET | DV1682, 6 hp, VT28. |
| Operativsystem samt datorteknik 6 hp | course | MET | DV1697 Operativsystem (6 hp) and DV1730 Datorteknik (6 hp), both mandatory and earlier; this exceeds 6 hp however the wording is read. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C/C++ (labs with pthreads and CUDA) | COVERED_CONDITIONALLY | DV1697 | Plan section 5: labs 'huvudsakligen i programmeringsspråken C / C++'. DV1697 labs use C/C++ but presuppose the language rather than teach it; no mandatory course introduces it. |
| Computer architecture and operating system threads/synchronisation | COVERED | DV1730, DV1697 | DV1730 covers machine level and hardware; DV1697 covers threads, synchronisation primitives and deadlocks. |

Findings: F-009

#### 38. SL2565 Bedöma och designa inom omställningar till hållbarhet - UNCLEAR
<a id="38-sl2565"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: **not published**
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Cannot be determined, because no course plan is published for SL2565 in HT30.

The program page links no course plan for SL2565 (HT30, elective, 6 hp, Avancerad nivå), so prerequisites, content and learning outcomes cannot be assessed and no verdict can be derived from the files.

Findings: F-010

#### 39. DV2658 Generativ artificiell intelligens - OK
<a id="39-dv2658"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B7MWL&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence medium)

**Answer:** Yes formally, since an AI course (DV2659) and the ML course (DV2638) are completed; neural-network depth is only introductory before this course.

DV2658 (elective) requires 'avklarad kurs i artificiell intelligens, 6 hp, samt genomgången kurs i maskininlärning, 6 hp'. DV2659 Tillämpad artificiell intelligens (HT29) and DV2638 Maskininlärning (HT29) are mandatory and finished before HT30. The course develops and fine-tunes neural generative models; DV2659 and DV1683 only introduce deep learning, and the dedicated DV2646 Djup maskininlärning is scheduled later (VT31), but the plan does not require it.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarad kurs i artificiell intelligens, 6 hp | course | MET | DV2659 Tillämpad artificiell intelligens, 6 hp, HT29, mandatory (also DV1683). |
| Genomgången kurs i maskininlärning, 6 hp | course | MET | DV2638 Maskininlärning, 6 hp, HT29, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Neural network architectures and training (deep learning basics) | COVERED | DV2659, DV1683 | DV2659 content includes 'maskininlärning, inklusive ... djupinlärning'; DV1683 explains neural networks. Depth is introductory because DV2646 comes only in VT31. |
| Python ML tooling and frameworks | COVERED | DV2638, DV1582 | DV2638 labs introduce 'plattformar, verktyg och programmeringsgränssnitt för maskininlärning'. |
| Evaluation of learning systems and ethical assessment of bias | COVERED | DV2638, DV2583 | DV2638 covers evaluation and ethics of learning systems; DV2583 concurrent/earlier ethics. |

Findings: F-011

#### 40. MS2506 Bayesiansk statistik - OK
<a id="40-ms2506"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BFM9X&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MS1419 Matematisk statistik (6 hp) is completed in HT28 and Engelska 6 is upper-secondary.

MS2506 requires '5 avklarade hp i matematisk statistik. Engelska 6.' MS1419 Matematisk statistik (6 hp, mandatory, HT28) covers conditional probability and Bayes' theorem, distributions, estimation and hypothesis testing, the foundation for Bayesian inference. Sampling methods (MCMC, Gibbs) need programming from DV1574/DV1582 and are taught in the course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 avklarade hp i matematisk statistik | course | MET | MS1419 Matematisk statistik, 6 hp, HT28, mandatory. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Probability distributions, Bayes' theorem and maximum likelihood | COVERED | MS1419 | MS1419 content: 'Betingad sannolikhet och Bayes sats', distributions, ML estimation. |
| Programming for simulation-based inference (MCMC) | COVERED | DV1574, DV1582 | MCMC and Gibbs sampling are implemented computationally; Python with NumPy/SciPy. |

#### 41. IY2650 Technology venture 2: kommersialisering av innovationer - CONDITIONAL
<a id="41-iy2650"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BT3QX&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **CONDITIONAL** (confidence high)

**Answer:** Only if the student has chosen the elective IY2649 Technology venture 1, which is not guaranteed.

IY2650 requires 'minst 90 hp inom ett tekniskt område', 'genomgången kurs i Technology venture 1: Innovation och affärsutveckling eller motsvarande' and Engelska 6. The hp requirement is met by mandatory courses (162 hp guaranteed), but Technology venture 1 (IY2649, HT30 period 1) is an elective, so it is met only for students who chose it; no mandatory course is equivalent (IY1458 is a basic economics overview). Both elective courses are offered in HT30 and again in HT31.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser om minst 90 hp inom ett tekniskt område | credits | MET | 162 hp guaranteed from mandatory courses, Teknik >= 96 hp. |
| Genomgången kurs i Technology venture 1: Innovation och affärsutveckling eller motsvarande | course | MET_ONLY_VIA_ELECTIVES | IY2649 Technology venture 1 (6 hp, HT30 period 1) is elective; IY1458 (mandatory) covers only basic business concepts and is not an equivalent. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Business model and entrepreneurship fundamentals (concept and business development) | COVERED_CONDITIONALLY | IY2649 | IY2650 builds on 'de senare faserna i en kommersialiseringsprocess' after IY2649 (business models, market/operations/revenue models); basic business grounding from IY1458 is mandatory but thin. |
| Team leadership and group work | COVERED | PA1485, TE1429 | Outcome 'leda entreprenöriella team' builds on team project experience. |

Findings: F-012

### VT31

#### 42. IY2658 ICT start-ups och högteknologiskt entreprenörskap - UNCLEAR
<a id="42-iy2658"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 3 (Vecka 4 (2031) - Vecka 23 (2031))
- Course plan: **not published**
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Cannot be determined, because no course plan is published for IY2658 in VT31.

The program page links no course plan for IY2658 (VT31, mandatory, 6 hp, Avancerad nivå), so prerequisites, content and learning outcomes cannot be assessed and no verdict can be derived from the files.

Findings: F-013

#### 43. MS1415 Robusta metoder - OK
<a id="43-ms1415"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 4 (2031) - Vecka 13 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BUQQL&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MS1419 Matematisk statistik (6 hp) is completed in HT28 and related modelling courses precede it.

MS1415 requires 'avklarad kurs i Matematisk statistik, 6 hp', met by MS1419 (6 hp, mandatory, HT28). Estimation, regression and linear systems are supported by MS1419, ET1558 (dynamic systems, HT29), MA1498 (linear algebra) and DV1597 (time series project); Bayesian methods from MS2506 are not required.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarad kurs i Matematisk statistik, 6 hp | course | MET | MS1419 Matematisk statistik, 6 hp, HT28, mandatory. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Estimation, maximum likelihood, regression and hypothesis testing | COVERED | MS1419 | Content 'Skattning av modellparametrar', 'MK- och ML-metoder'; MS1419 covers point estimation incl. ML and linear regression. |
| Linear (dynamic) systems and matrix methods | COVERED | ET1558, MA1498 | Content on 'tidsdiskreta dynamiska stokastiska system, i huvudsak linjära system'; ET1558 covers modelling and stability of dynamic systems. |
| Time-series basics and programming for implementing methods | COVERED | DV1597, DV1582 | DV1597 includes a time-series project; outcome 'designa, implementera och testa olika robusta metoder'. |

#### 44. DV2640 Avancerad maskininlärning - OK
<a id="44-dv2640"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 3 (Vecka 4 (2031) - Vecka 13 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BCLQ9&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV2659 Tillämpad artificiell intelligens and DV2638 Maskininlärning are completed in HT29.

DV2640 requires 'genomgångna kurser i Tillämpad artificiell intelligens, 6 hp samt Maskininlärning, 6 hp. Engelska 6.' DV2659 and DV2638 (both mandatory, HT29) are finished before VT31, and DV1597 (data preprocessing) plus DV2607 (attacks on AI) supply related background for preprocessing and bias topics. Content on bias and fairness continues from DV2583 and DV2638.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i Tillämpad artificiell intelligens, 6 hp | course | MET | DV2659 Tillämpad artificiell intelligens, 6 hp, HT29, mandatory. |
| Genomgången kurs i Maskininlärning, 6 hp | course | MET | DV2638 Maskininlärning, 6 hp, HT29, mandatory. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Core ML and data-mining methods, preprocessing and evaluation | COVERED | DV2638, DV1597, DV2659 | Course deepens preprocessing, dimensionality reduction and evaluation already taught in DV1597 and DV2638. |
| Ethics and bias in AI | COVERED | DV2583, DV2638 | Outcome 'identifiera bias i ML-modeller' builds on ethics courses and DV2638 ethical evaluation. |
| Planning and presenting a project | COVERED | TE1429, PA1485 | Project plan, seminar presentations and written results. |

#### 45. ET2627 Robotik - OK
<a id="45-et2627"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2031) - Vecka 23 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BX9RL&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because 30 hp mathematics, well over 20 hp computer science and the mechanics, control and linear algebra foundations are completed earlier.

ET2627 (elective) requires '15 avklarade hp i matematik och 20 avklarade hp i datavetenskap, programvaruteknik eller motsvarande. Engelska 6.' Mandatory courses give 30 hp Matematik and >100 hp Datavetenskap/Programvaruteknik. Kinematics uses matrices and rotations (MA1498), mechanics (FY1436) and feedback/modelling (ET1558); ROS programming builds on Python (DV1574, DV1582).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 15 avklarade hp i matematik | credits | MET | Ledger: Matematik 30 hp (MA1498, MA1499, MA1500, MA1504, MA1514). |
| 20 avklarade hp i huvudområdet datavetenskap, programvaruteknik eller motsvarande | credits | MET | Ledger: Datavetenskap and Programvaruteknik far above 20 hp from mandatory courses. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Linear algebra for kinematics (rotation matrices, coordinate transformations) | COVERED | MA1498 | MA1498: matrices as rotations/projections, basis changes. |
| Mechanics and dynamic system modelling with feedback | COVERED | FY1436, ET1558 | Outcome 'modellering av enkla mekaniska system'; FY1436 covers mechanics, ET1558 modelling, stability and controllers. |
| Filtering and sensor data processing | COVERED | ET1558, MS1415, MS1419 | ET1558 includes filtering; MS1415 estimation; MS1419 statistics. |
| Programming for ROS | COVERED | DV1574, DV1582 | Outcome 'använda ROS för robotprogrammering'. |

#### 46. MA2517 Kvantinformation och algoritmer för kvantdatorer - UNCLEAR
<a id="46-ma2517"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2031) - Vecka 23 (2031))
- Course plan: **not published**
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Cannot be determined, because no course plan is published for MA2517 in VT31.

The program page links no course plan for MA2517 (VT31, elective, 6 hp, Avancerad nivå), so prerequisites, content and learning outcomes cannot be assessed and no verdict can be derived from the files.

Findings: F-014

#### 47. DV2646 Djup maskininlärning - OK
<a id="47-dv2646"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 4 (Vecka 14 (2031) - Vecka 23 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BKRTL&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV2638 Maskininlärning is completed in HT29 and the mathematical background (linear algebra, multivariable calculus) is in place.

DV2646 requires 'avklarad kurs Maskininlärning 6 hp. Engelska 6.' DV2638 (mandatory, HT29) satisfies this. The 'matematiska grunder' of neural networks (gradients, matrix algebra, optimisation) come from MA1514 and MA1498, and neural networks were introduced in DV1683 and DV2659, so the course can build on them.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarad kurs Maskininlärning 6 hp | course | MET | DV2638 Maskininlärning, 6 hp, HT29, mandatory. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Linear algebra and multivariable calculus for backpropagation and optimisation | COVERED | MA1498, MA1514 | Training of neural networks uses gradients and matrix operations. |
| Python implementation of ML solutions | COVERED | DV2638, DV1582 | DV2638 labs introduce ML platforms, tools and programming interfaces. |
| Evaluation of learning systems (validation, testing) | COVERED | DV2638, MS1415 | Outcome 'träna, validera, testa och finjustera hyperparametrar'. |
| Neural network introduction | COVERED | DV1683, DV2659 | Both courses mention neural networks and deep learning at an overview level. |

### HT31

#### 48. PA2611 Avancerat mjukvaruutvecklingsprojekt i team - OK
<a id="48-pa2611"></a>

- 18 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2031) - Vecka 3 (2032))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6NLN&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the credit and subject requirements (OOP, algorithms, databases, software development/project course) are met by mandatory courses, including the earlier team project PA1485.

PA2611 requires a 180 hp technical degree or 60 hp in technology/computer science/software engineering, at least 20 hp in datavetenskap/programvaruteknik including OOP 5 hp, algorithms and data structures 5 hp, databases 5 hp and a project or software development course 5 hp, plus Engelska 6. DV1582, DV1682, DV1663, PA1484 and PA1485 are mandatory and finished long before VT31 ends; the 204 guaranteed hp include Teknik > 100 hp. The course continues team-based development from PA1485 at advanced level (Scrum, scaling frameworks, risk management); tooling is used in PA1485 though its documentation is thin (see PA1485 finding).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 180 hp tekniskt examen eller minst 60 avklarade hp inom teknik, datavetenskap eller programvaruteknik | credits | MET | Ledger: 204 hp guaranteed, Teknik well above 60 hp. |
| Minst 20 hp inom datavetenskap, programvaruteknik eller motsvarande | credits | MET | Ledger: Datavetenskap and Programvaruteknik far above 20 hp. |
| Objektorienterad programmering, 5 hp | course | MET | DV1582, 6 hp. |
| Algoritmer och datastrukturer, 5 hp | course | MET | DV1682, 6 hp. |
| Databasteknik, 5 hp | course | MET | DV1663, 6 hp. |
| Projektkurs eller kurs i programvaruutveckling, 5 hp | course | MET | PA1484 (6 hp) and PA1485 (6 hp). |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Team-based software development and agile methods (Scrum) | COVERED | PA1484, PA1485 | PA1485 trains agile team project work; PA2611 deepens it with large-scale agile frameworks. |
| Sustainable and inclusive development | COVERED | PA1481 | Content 'Hållbar och inkluderande programvaruutveckling' builds on PA1481. |
| Customer interaction, requirements and testing | COVERED | PA1485, PA1486, DV1601 | PA1485 covers requirements analysis and testing; PA1486 and DV1601 are electives and only add depth. |

#### 49. DV2654 Forskningsmetodik i datavetenskap - OK
<a id="49-dv2654"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2031) - Vecka 44 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BKF67&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the 120 hp requirement including 12 hp mathematics is met by mandatory courses and research methodology is introduced from scratch in the course.

DV2654 requires '120 hp inom relevanta områden ... varav minst 12 hp ska vara inom matematik'. The ledger shows 204 hp guaranteed and Matematik 30 hp (MA1498, MA1499, MA1500, MA1504, MA1514), plus MS1419/MS1415/MS2506 in statistics. The course introduces research methodology, literature search and scientific writing; earlier exposure comes from TE1429 (bachelor thesis) and seminar work in DV2583/DV2607, which gives the progression from introduction to application.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Kurser motsvarande 120 hp inom relevanta områden (teknik, datavetenskap, programvaruteknik, telekommunikationssystem eller matematik) | credits | MET | Ledger: 204 hp guaranteed from mandatory courses, essentially all in technology/computer science/mathematics. |
| Varav minst 12 hp inom matematik | credits | MET | Ledger: Matematik 30 hp from MA1498, MA1499, MA1500, MA1504, MA1514. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic scientific method, academic writing and source handling | COVERED | TE1429 | TE1429 teaches vetenskapsteori, undersökningsmetodik and akademiskt skrivande, which DV2654 revisits at master level. |
| Reading and presenting research articles | COVERED | DV2607, DV2583 | DV2607 outcome: summarise and present current research articles; DV2583 uses current articles. |
| Research ethics and societal responsibility | COVERED | DV2583, PA1481 | Outcome on ethical and societal aspects of research builds on ethics courses. |

#### 50. DV2606 Multiprocessorprogrammering - CONDITIONAL
<a id="50-dv2606"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2031) - Vecka 3 (2032))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BA49R&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **CONDITIONAL** (confidence medium)

**Answer:** Yes for the formal requirements, but the C/C++ language knowledge expected in the labs is not taught earlier, so the result is conditional on self-study.

This is a repeated offering of DV2606 (the student takes it only once; see the first occurrence, seq 25). DV2606 (elective) requires '60 hp i huvudområdet datavetenskap eller programvaruteknik inklusive 12 hp programmering, 6 hp algoritmer och datastrukturer, operativsystem samt datorteknik 6 hp'. The ledger shows 108 hp Datavetenskap and 48 hp Programvaruteknik guaranteed; DV1574 + DV1582, DV1682, DV1697 and DV1730 are all mandatory and finished before this occurrence. Labs are 'huvudsakligen i programmeringsspråken C / C++' and students must have sufficient understanding of the languages; DV1697 uses C/C++ in labs, but no earlier course actually teaches them (see DV1697 finding).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Ledger: Datavetenskap 72 hp and Programvaruteknik 36 hp guaranteed (mandatory) before this occurrence. |
| Kurser i programmering 12 hp | credits | MET | DV1574 (6 hp) + DV1582 (6 hp). |
| Algoritmer och datastrukturer 6 hp | course | MET | DV1682, 6 hp, VT28. |
| Operativsystem samt datorteknik 6 hp | course | MET | DV1697 Operativsystem (6 hp) and DV1730 Datorteknik (6 hp), both mandatory and earlier; this exceeds 6 hp however the wording is read. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C/C++ (labs with pthreads and CUDA) | COVERED_CONDITIONALLY | DV1697 | Plan section 5: labs 'huvudsakligen i programmeringsspråken C / C++'. DV1697 labs use C/C++ but presuppose the language rather than teach it; no mandatory course introduces it. |
| Computer architecture and operating system threads/synchronisation | COVERED | DV1730, DV1697 | DV1730 covers machine level and hardware; DV1697 covers threads, synchronisation primitives and deadlocks. |

Findings: F-015

#### 51. IY2650 Technology venture 2: kommersialisering av innovationer - CONDITIONAL
<a id="51-iy2650"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2031) - Vecka 3 (2032))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B47EQ&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **CONDITIONAL** (confidence high)

**Answer:** Only if the student has chosen the elective IY2649 Technology venture 1, which is not guaranteed.

This is a repeated offering of IY2650 (see seq 41). IY2650 requires 'minst 90 hp inom ett tekniskt område', 'genomgången kurs i Technology venture 1: Innovation och affärsutveckling eller motsvarande' and Engelska 6. The hp requirement is met by mandatory courses (210 hp guaranteed), but Technology venture 1 (IY2649, HT30 period 1) is an elective, so it is met only for students who chose it; no mandatory course is equivalent (IY1458 is a basic economics overview). Both elective courses are offered in HT30 and again in HT31.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser om minst 90 hp inom ett tekniskt område | credits | MET | 210 hp guaranteed from mandatory courses, Teknik >= 96 hp. |
| Genomgången kurs i Technology venture 1: Innovation och affärsutveckling eller motsvarande | course | MET_ONLY_VIA_ELECTIVES | IY2649 Technology venture 1 (6 hp, HT30 period 1) is elective; IY1458 (mandatory) covers only basic business concepts and is not an equivalent. |
| Engelska 6 | upper-secondary | MET | Verified at admission. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Business model and entrepreneurship fundamentals (concept and business development) | COVERED_CONDITIONALLY | IY2649 | IY2650 builds on 'de senare faserna i en kommersialiseringsprocess' after IY2649 (business models, market/operations/revenue models); basic business grounding from IY1458 is mandatory but thin. |
| Team leadership and group work | COVERED | PA1485, TE1429 | Outcome 'leda entreprenöriella team' builds on team project experience. |

Findings: F-016

#### 52. SL2565 Bedöma och designa inom omställningar till hållbarhet - UNCLEAR
<a id="52-sl2565"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2031) - Vecka 3 (2032))
- Course plan: **not published**
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Cannot be determined, because no course plan is published for SL2565 in HT31.

The program page links no course plan for SL2565 (HT31, elective, 6 hp, Avancerad nivå), so prerequisites, content and learning outcomes cannot be assessed and no verdict can be derived from the files.

Findings: F-017

### VT32

#### 53. DV2649 Masterarbete i datavetenskap - UNCLEAR
<a id="53-dv2649"></a>

- 30 hp, mandatory, Avancerad nivå, läsperiod 3 (Vecka 4 (2032) - Vecka 23 (2032))
- Course plan: **not published**
- Guaranteed hp before start: 228 (max 336 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Cannot be determined, because no course plan is published for DV2649 in VT32.

The program page links no course plan for DV2649 (VT32, mandatory, 30 hp, Avancerad nivå, degree project), so prerequisites, content and learning outcomes cannot be assessed and no verdict can be derived from the files.

Findings: F-018

## 4. Method and limits

- Course plans were fetched from plan.bth.se for the exact semester each course is scheduled in; the course order is by semester, then by study period.
- A course counts as prior knowledge only if it finishes before the reviewed course starts. Electives are never treated as guaranteed.
- Verdicts are an LLM judgment of the text of the course plans (prerequisites, content, learning outcomes, examination). They flag candidates for human review; they are not decisions. Compare reports from different models via the `harness`/`model` fields.
- Competence coverage is judged from learning outcomes and content, not from what is actually taught or examined in practice.

## 5. Machine-readable appendix

```json
{
  "schema": "qulrica/program-prerequisite-qa@1",
  "program": {
    "code": "DVAAM",
    "name": "Civilingenjör i AI och maskininlärning",
    "start": "HT27",
    "url": "https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617"
  },
  "harness": "claude-code",
  "model": "claude-sonnet-5-5",
  "date": "2026-10-21",
  "verdicts": {
    "OK": 38,
    "CONDITIONAL": 5,
    "GAP": 1,
    "UNCLEAR": 9
  },
  "courses": [
    {
      "seq": 1,
      "code": "MA1498",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 2,
      "code": "DV1574",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 3,
      "code": "DV1683",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 4,
      "code": "MA1499",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 5,
      "code": "IY1458",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 6,
      "code": "MA1500",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 7,
      "code": "PA1481",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "medium"
    },
    {
      "seq": 8,
      "code": "DV1582",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 9,
      "code": "MA1504",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 10,
      "code": "DV1682",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 11,
      "code": "MA1514",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 12,
      "code": "PA1484",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "UNCLEAR",
      "confidence": "medium"
    },
    {
      "seq": 13,
      "code": "FY1436",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 14,
      "code": "DV1730",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 15,
      "code": "MS1419",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 16,
      "code": "DV1697",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "GAP",
      "confidence": "medium"
    },
    {
      "seq": 17,
      "code": "DV1663",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 18,
      "code": "DV1685",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 19,
      "code": "DV1684",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 20,
      "code": "DV1597",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 21,
      "code": "ET1558",
      "semester": "HT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 22,
      "code": "DV2659",
      "semester": "HT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 23,
      "code": "PA1485",
      "semester": "HT29",
      "type": "mandatory",
      "verdict": "UNCLEAR",
      "confidence": "medium"
    },
    {
      "seq": 24,
      "code": "PA1486",
      "semester": "HT29",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 25,
      "code": "DV2606",
      "semester": "HT29",
      "type": "elective",
      "verdict": "CONDITIONAL",
      "confidence": "medium"
    },
    {
      "seq": 26,
      "code": "DV2638",
      "semester": "HT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 27,
      "code": "DV1601",
      "semester": "VT30",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 28,
      "code": "DV1688",
      "semester": "VT30",
      "type": "elective",
      "verdict": "UNCLEAR",
      "confidence": "medium"
    },
    {
      "seq": 29,
      "code": "TE1429",
      "semester": "VT30",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 30,
      "code": "DV2647",
      "semester": "VT30",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 31,
      "code": "PA2601",
      "semester": "VT30",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 32,
      "code": "DV2583",
      "semester": "HT30",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 33,
      "code": "IY2649",
      "semester": "HT30",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 34,
      "code": "DV2607",
      "semester": "HT30",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 35,
      "code": "SL2564",
      "semester": "HT30",
      "type": "elective",
      "verdict": "UNCLEAR",
      "confidence": "high"
    },
    {
      "seq": 36,
      "code": "MA1513",
      "semester": "HT30",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 37,
      "code": "DV2606",
      "semester": "HT30",
      "type": "elective",
      "verdict": "CONDITIONAL",
      "confidence": "medium"
    },
    {
      "seq": 38,
      "code": "SL2565",
      "semester": "HT30",
      "type": "elective",
      "verdict": "UNCLEAR",
      "confidence": "high"
    },
    {
      "seq": 39,
      "code": "DV2658",
      "semester": "HT30",
      "type": "elective",
      "verdict": "OK",
      "confidence": "medium"
    },
    {
      "seq": 40,
      "code": "MS2506",
      "semester": "HT30",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 41,
      "code": "IY2650",
      "semester": "HT30",
      "type": "elective",
      "verdict": "CONDITIONAL",
      "confidence": "high"
    },
    {
      "seq": 42,
      "code": "IY2658",
      "semester": "VT31",
      "type": "mandatory",
      "verdict": "UNCLEAR",
      "confidence": "high"
    },
    {
      "seq": 43,
      "code": "MS1415",
      "semester": "VT31",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 44,
      "code": "DV2640",
      "semester": "VT31",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 45,
      "code": "ET2627",
      "semester": "VT31",
      "type": "elective",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 46,
      "code": "MA2517",
      "semester": "VT31",
      "type": "elective",
      "verdict": "UNCLEAR",
      "confidence": "high"
    },
    {
      "seq": 47,
      "code": "DV2646",
      "semester": "VT31",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 48,
      "code": "PA2611",
      "semester": "HT31",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 49,
      "code": "DV2654",
      "semester": "HT31",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 50,
      "code": "DV2606",
      "semester": "HT31",
      "type": "elective",
      "verdict": "CONDITIONAL",
      "confidence": "medium"
    },
    {
      "seq": 51,
      "code": "IY2650",
      "semester": "HT31",
      "type": "elective",
      "verdict": "CONDITIONAL",
      "confidence": "high"
    },
    {
      "seq": 52,
      "code": "SL2565",
      "semester": "HT31",
      "type": "elective",
      "verdict": "UNCLEAR",
      "confidence": "high"
    },
    {
      "seq": 53,
      "code": "DV2649",
      "semester": "VT32",
      "type": "mandatory",
      "verdict": "UNCLEAR",
      "confidence": "high"
    }
  ],
  "findings": [
    {
      "id": "F-004",
      "seq": 16,
      "course": "DV1697",
      "semester": "VT29",
      "type": "competence-gap",
      "severity": "high",
      "description": "DV1697 labs are done mainly in C/C++ and students are expected to know the language, but the mandatory programming courses before VT29 (DV1574, DV1582) use Python and DV1730 uses assembly. No mandatory course introduces C/C++.",
      "recommendation": "Add a C/C++ introduction to an earlier mandatory course (e.g. DV1730 or DV1682), or state C/C++ as an explicit prerequisite and include a language primer at the start of DV1697."
    },
    {
      "id": "F-013",
      "seq": 42,
      "course": "IY2658",
      "semester": "VT31",
      "type": "missing-course-plan",
      "severity": "high",
      "description": "No published course plan for IY2658 (VT31, mandatory, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
      "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
    },
    {
      "id": "F-018",
      "seq": 53,
      "course": "DV2649",
      "semester": "VT32",
      "type": "missing-course-plan",
      "severity": "high",
      "description": "No published course plan for DV2649 (VT32, mandatory, 30 hp, Avancerad nivå, degree project); the fetch found no link on the program page.",
      "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
    },
    {
      "id": "F-003",
      "seq": 12,
      "course": "PA1484",
      "semester": "HT28",
      "type": "ambiguous-requirement",
      "severity": "medium",
      "description": "The prerequisite 'introduktion till ingenjörsarbete/-rollen' (6 hp) does not match any course in the program by name or learning outcomes; DV1683 and PA1481 only partly touch the topic.",
      "recommendation": "Name the intended course code(s) in the prerequisite, or reword it (e.g. to state 'DV1683') so that satisfaction can be verified; alternatively add an explicit engineering-role outcome to the intended course."
    },
    {
      "id": "F-006",
      "seq": 25,
      "course": "DV2606",
      "semester": "HT29",
      "type": "competence-gap",
      "severity": "medium",
      "description": "The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it.",
      "recommendation": "Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here."
    },
    {
      "id": "F-007",
      "seq": 28,
      "course": "DV1688",
      "semester": "VT30",
      "type": "ambiguous-requirement",
      "severity": "medium",
      "description": "The prerequisite 'datorsäkerhet och ingenjörsarbete, 5 hp' does not correspond to any course in the program; DV1684 Säkerhetsteknik is only a partial match.",
      "recommendation": "Replace the generic wording with the actual course code(s) (probably DV1684) in the course plan, or add DV1684 to an explicit equivalence list."
    },
    {
      "id": "F-008",
      "seq": 35,
      "course": "SL2564",
      "semester": "HT30",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan for SL2564 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
      "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
    },
    {
      "id": "F-009",
      "seq": 37,
      "course": "DV2606",
      "semester": "HT30",
      "type": "competence-gap",
      "severity": "medium",
      "description": "The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it.",
      "recommendation": "Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here."
    },
    {
      "id": "F-010",
      "seq": 38,
      "course": "SL2565",
      "semester": "HT30",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan for SL2565 (HT30, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
      "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
    },
    {
      "id": "F-012",
      "seq": 41,
      "course": "IY2650",
      "semester": "HT30",
      "type": "elective-dependency",
      "severity": "medium",
      "description": "IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses.",
      "recommendation": "State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers."
    },
    {
      "id": "F-014",
      "seq": 46,
      "course": "MA2517",
      "semester": "VT31",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan for MA2517 (VT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
      "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
    },
    {
      "id": "F-015",
      "seq": 50,
      "course": "DV2606",
      "semester": "HT31",
      "type": "competence-gap",
      "severity": "medium",
      "description": "The labs require C/C++, but no earlier course teaches C or C++; DV1697 only uses it in labs while presupposing it.",
      "recommendation": "Introduce C/C++ explicitly in a mandatory earlier course (see DV1697) or state C/C++ as a prerequisite and offer a primer here."
    },
    {
      "id": "F-016",
      "seq": 51,
      "course": "IY2650",
      "semester": "HT31",
      "type": "elective-dependency",
      "severity": "medium",
      "description": "This is a repeated offering of IY2650 (see seq 41). IY2650 requires the elective IY2649 (or 'motsvarande'); a student who has not chosen IY2649 does not meet the prerequisite through mandatory courses.",
      "recommendation": "State in the program plan that IY2649 and IY2650 must be chosen together (in this order), or clarify what 'motsvarande' covers."
    },
    {
      "id": "F-017",
      "seq": 52,
      "course": "SL2565",
      "semester": "HT31",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan for SL2565 (HT31, elective, 6 hp, Avancerad nivå); the fetch found no link on the program page.",
      "recommendation": "Publish the course plan (with prerequisites, content and learning outcomes) before the program is offered, or remove the course from the program."
    },
    {
      "id": "F-001",
      "seq": 7,
      "course": "PA1481",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "The plan requires Fysik 2 and Kemi 1, which have no visible connection to the content and are stricter than other first-term courses (MA1498 requires Fysik 1 only). It is unclear whether the program's admission requirements guarantee Fysik 2 and Kemi 1.",
      "recommendation": "Verify that the program admission requirements include Fysik 2 and Kemi 1, or remove these requirements from the course plan if they are inherited from a template."
    },
    {
      "id": "F-002",
      "seq": 8,
      "course": "DV1582",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "The requirement says 'genomgången kurs ... 6 hp, varav minst 2 hp ska vara avklarade', which is self-contradictory (a completed course versus at least 2 of 6 hp completed).",
      "recommendation": "State precisely whether the whole of DV1574 or only a part (e.g. specific examination moments totalling 2 hp) is required."
    },
    {
      "id": "F-005",
      "seq": 23,
      "course": "PA1485",
      "semester": "HT29",
      "type": "competence-gap",
      "severity": "low",
      "description": "Team-based development needs collaborative tooling (version control), but none of the program's course plans mentions it, and PA1485's plan does not state that it is taught.",
      "recommendation": "Add version control and basic CI/tooling explicitly to the content of PA1484 or PA1485 so that later projects (PA2611, TE1429) can rely on it."
    },
    {
      "id": "F-011",
      "seq": 39,
      "course": "DV2658",
      "semester": "HT30",
      "type": "ordering",
      "severity": "low",
      "description": "DV2658 fine-tunes and develops neural generative models, but the dedicated deep learning course DV2646 Djup maskininlärning is placed in VT31, after DV2658 (HT30). Students rely on only introductory deep learning from DV2659/DV1683.",
      "recommendation": "Consider moving DV2646 before HT30, or state in the DV2658 plan that neural network basics are taught within the course."
    }
  ]
}
```
