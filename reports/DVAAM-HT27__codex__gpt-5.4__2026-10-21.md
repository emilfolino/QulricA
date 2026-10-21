---
report_schema: qulrica/program-prerequisite-qa@1
program_name: "Civilingenjör i AI och maskininlärning"
program_code: DVAAM
program_start: HT27
program_hp: 300
program_url: https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617
harness: codex
model: gpt-5.4
report_date: 2026-10-21
courses_reviewed: 53
courses_in_program: 53
verdicts: { OK: 41, CONDITIONAL: 4, GAP: 2, UNCLEAR: 6 }
findings: { high: 4, medium: 8, low: 2 }
---

# Prerequisite QA: Civilingenjör i AI och maskininlärning (DVAAM, HT27)

| | |
|---|---|
| Program | Civilingenjör i AI och maskininlärning, 300 hp |
| Program code / start | DVAAM / HT27 |
| Source | https://plan.bth.se/programmes/428bdaeb-424e-11f1-a3d9-799c0ab34617 |
| Reviewed by | harness `codex`, model `gpt-5.4` |
| Date | 2026-10-21 (course plans fetched 2026-10-21) |
| Course occurrences | 53 (35 mandatory, 18 elective) |

## 1. Summary

Question asked of every course: *Can a student with the skills, knowledge and dispositions obtained in the program so far (guaranteed = mandatory courses) plus upper-secondary education complete this course, judging from its course plan?*

| Verdict | Courses | Meaning |
|----|---|-------------------------------|
| OK | 41 | Everything the course assumes is guaranteed by earlier mandatory courses or upper-secondary education |
| CONDITIONAL | 4 | Only works if the student chose a particular elective, or a prerequisite is concurrent |
| GAP | 2 | Something the course requires/assumes is provided nowhere before it |
| UNCLEAR | 6 | The plan is missing, ambiguous or too thin to judge |

| # | Semester | Course | Type | Verdict | Confidence | Headline |
|--|----|-------|-----|------|-----|------------------------|
| 16 | VT29 | [DV1697 Operativsystem](#16-dv1697) | mandatory | **GAP** | high | DV1697 explicitly expects students to already know C/C++ for the laboratory work, but the guaranteed earlier mandatory courses provide programming in Python rather than C/C++. |
| 25 | HT29 | [DV2606 Multiprocessorprogrammering](#25-dv2606) | elective | **GAP** | high | DV2606 expects prior C/C++ competence for the practical laboratory work, but the guaranteed mandatory path provides programming mainly in Python and does not explicitly teach C/C++ before the course. |
| 35 | HT30 | [SL2564 Förståelse för marknader, företagande och design inom hållbarhetsomställningar](#35-sl2564) | elective | **UNCLEAR** | high | No published course plan is available for SL2564 in HT30, so the course's prerequisites and expected progression cannot be reviewed. |
| 37 | HT30 | [DV2606 Multiprocessorprogrammering](#37-dv2606) | elective | **CONDITIONAL** | medium | The course expects prior C/C++ competence for lab work, but that competence is still unavailable on the guaranteed mandatory path and can only be obtained conditionally through optional earlier study such as the HT29 offering of DV2606. |
| 38 | HT30 | [SL2565 Bedöma och designa inom omställningar till hållbarhet](#38-sl2565) | elective | **UNCLEAR** | high | No published course plan is available for SL2565 in HT30, so the course occurrence cannot be reviewed. |
| 41 | HT30 | [IY2650 Technology venture 2: kommersialisering av innovationer](#41-iy2650) | elective | **CONDITIONAL** | high | IY2650 depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure. |
| 42 | VT31 | [IY2658 ICT start-ups och högteknologiskt entreprenörskap](#42-iy2658) | mandatory | **UNCLEAR** | high | No published course plan is available for IY2658 in VT31, so the progression and prerequisites for this mandatory course cannot be reviewed. |
| 46 | VT31 | [MA2517 Kvantinformation och algoritmer för kvantdatorer](#46-ma2517) | elective | **UNCLEAR** | high | No published course plan is available for MA2517 in VT31, so the course occurrence cannot be reviewed. |
| 50 | HT31 | [DV2606 Multiprocessorprogrammering](#50-dv2606) | elective | **CONDITIONAL** | medium | The course still depends on practical C/C++ competence that is available only conditionally through earlier elective study rather than through the guaranteed mandatory path. |
| 51 | HT31 | [IY2650 Technology venture 2: kommersialisering av innovationer](#51-iy2650) | elective | **CONDITIONAL** | high | IY2650 still depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure. |
| 52 | HT31 | [SL2565 Bedöma och designa inom omställningar till hållbarhet](#52-sl2565) | elective | **UNCLEAR** | high | No published course plan is available for SL2565 in HT31, so the course occurrence cannot be reviewed. |
| 53 | VT32 | [DV2649 Masterarbete i datavetenskap](#53-dv2649) | mandatory | **UNCLEAR** | high | No published course plan is available for DV2649 in VT32, so the mandatory final course occurrence cannot be reviewed. |

## 2. Findings

| ID | Severity | Course | Semester | Type | Description | Recommendation |
|---|----|----|----|------|--------------------|--------------------|
| F-002 | high | DV1697 | VT29 | competence-gap | DV1697 explicitly expects students to already know C/C++ for the laboratory work, but the guaranteed earlier mandatory courses provide programming in Python rather than C/C++. | Either introduce C/C++ earlier in the mandatory path, redesign the labs to use languages already taught, or state C/C++ explicitly as a prerequisite and ensure the program provides it before DV1697. |
| F-003 | high | DV2606 | HT29 | competence-gap | DV2606 expects prior C/C++ competence for the practical laboratory work, but the guaranteed mandatory path provides programming mainly in Python and does not explicitly teach C/C++ before the course. | Add C/C++ earlier in the mandatory path, redesign the course labs to use already taught languages, or state C/C++ explicitly as a prerequisite and ensure the program supplies it before DV2606. |
| F-009 | high | IY2658 | VT31 | missing-course-plan | No published course plan is available for IY2658 in VT31, so the progression and prerequisites for this mandatory course cannot be reviewed. | Publish the course plan before the course is part of the mandatory study path, or replace the occurrence with a course that has a published plan. |
| F-014 | high | DV2649 | VT32 | missing-course-plan | No published course plan is available for DV2649 in VT32, so the mandatory final course occurrence cannot be reviewed. | Publish the course plan well before students reach the final semester, or replace the occurrence with a thesis course that has a published plan. |
| F-005 | medium | SL2564 | HT30 | missing-course-plan | No published course plan is available for SL2564 in HT30, so the course's prerequisites and expected progression cannot be reviewed. | Publish the course plan or replace the course occurrence with one that has a published plan before students are expected to choose it. |
| F-006 | medium | DV2606 | HT30 | competence-gap | The course expects prior C/C++ competence for lab work, but that competence is still unavailable on the guaranteed mandatory path and can only be obtained conditionally through optional earlier study such as the HT29 offering of DV2606. | Either make the required C/C++ preparation explicit and place it in the mandatory path, or adapt the labs so they rely only on guaranteed prior knowledge. |
| F-007 | medium | SL2565 | HT30 | missing-course-plan | No published course plan is available for SL2565 in HT30, so the course occurrence cannot be reviewed. | Publish the course plan before students are expected to choose the course, or replace the occurrence with a course that has a published plan. |
| F-008 | medium | IY2650 | HT30 | elective-dependency | IY2650 depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure. | Either make IY2649 mandatory for students expected to take IY2650, or state an explicit mandatory equivalent in the program and course plan. |
| F-010 | medium | MA2517 | VT31 | missing-course-plan | No published course plan is available for MA2517 in VT31, so the course occurrence cannot be reviewed. | Publish the course plan or replace the occurrence with a course that has a published plan before students are expected to select it. |
| F-011 | medium | DV2606 | HT31 | competence-gap | The course still depends on practical C/C++ competence that is available only conditionally through earlier elective study rather than through the guaranteed mandatory path. | Provide guaranteed C/C++ preparation earlier in the program or redesign the labs so they rely only on mandatory prior knowledge. |
| F-012 | medium | IY2650 | HT31 | elective-dependency | IY2650 still depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure. | Make the Venture 1 background mandatory for students expected to take IY2650, or specify a mandatory equivalent course in the course plan and program structure. |
| F-013 | medium | SL2565 | HT31 | missing-course-plan | No published course plan is available for SL2565 in HT31, so the course occurrence cannot be reviewed. | Publish the course plan or replace the occurrence with a course that has a published plan before students are expected to select it. |
| F-001 | low | PA1484 | HT28 | ambiguous-requirement | The prerequisite "6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen" does not identify which earlier course or course code satisfies the requirement. | Name the specific course code or codes, for example the intended earlier introductory engineering/professional-practice course, in the prerequisite text. |
| F-004 | low | DV1688 | VT30 | ambiguous-requirement | The prerequisite phrase "datorsäkerhet och ingenjörsarbete, 5 hp" does not identify which earlier course code is intended to satisfy it. | Replace the generic phrase with the specific earlier course code or codes that supply the intended security and engineering-project background. |

## 3. Review by semester

### HT27

#### 1. MA1498 Linjär algebra - OK
<a id="1-ma1498"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 34 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGW6Q&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is introductory and its stated prerequisite is fully covered by upper-secondary education.

The plan states only "Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E". Before seq 1 the ledger contains no university courses, so upper-secondary preparation is the only relevant prior knowledge and it matches the formal requirement. The course content is an introduction to linear algebra and the plan does not presuppose any earlier university mathematics beyond that admission-level preparation.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E | upper-secondary | MET | The prerequisite section states "Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E"; the ledger shows no prior university courses before seq 1, so the requirement is met entirely through upper-secondary admission qualifications. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Upper-secondary algebra and equation solving | UPPER_SECONDARY | - | The course immediately starts with Gaussian elimination, matrices and analytic geometry, which presupposes gymnasium-level algebra rather than earlier university courses. |
| Basic mathematical notation and graph interpretation | UPPER_SECONDARY | - | The content lists mathematical language, coordinates, lines and planes, all of which are realistic to expect from admission-level mathematics. |

#### 2. DV1574 Programmering och problemlösning med Python - OK
<a id="2-dv1574"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BX4FM&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because this is an introductory programming course and it requires only general eligibility.

The prerequisite section says only "Grundläggande behörighet". The ledger shows no prior university courses before seq 2, but the plan is explicitly introductory: it teaches structured programming, problem solving, basic data structures, testing and debugging in Python. There is no stated or clearly implied need for earlier university-level programming.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | The plan states "Grundläggande behörighet" and the ledger shows no prior university studies are required before seq 2. |

#### 3. DV1683 Artificiell intelligens och ingenjörsmässighet - OK
<a id="3-dv1683"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGAHF&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is framed as an introduction to AI and requires only general eligibility.

The formal prerequisite is only "Grundläggande behörighet". The ledger shows no earlier university courses, but the purpose states that the course "introducera[r] studenterna till artificiell intelligens" and the content is an overview of AI, machine learning, ethics and engineering professionalism. The plan therefore presents the necessary foundations inside the course rather than relying on prior higher-education study.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | The prerequisite section states "Grundläggande behörighet" and the ledger shows no earlier university courses before seq 3. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General upper-secondary mathematical literacy | UPPER_SECONDARY | - | The course discusses AI methods such as neural networks and statistical methods at an introductory level, which can reasonably rest on gymnasium mathematics rather than prior university courses. |

#### 4. MA1499 Envariabelanalys 1: funktioner och differentialkalkyl - OK
<a id="4-ma1499"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BWAQ7&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is an introductory single-variable calculus course and its formal requirement is covered by upper-secondary education.

The plan requires "Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E". Before seq 4 the ledger offers no completed university courses, so the relevant prior knowledge must come from admission-level upper-secondary studies. The content introduces functions, limits, continuity and derivatives from the start, which fits that prerequisite profile.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Fysik 1 och Matematik 4/Matematik E | upper-secondary | MET | The prerequisite section explicitly names only upper-secondary qualifications, and the ledger shows no guaranteed prior university courses before seq 4. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Upper-secondary algebra and function handling | UPPER_SECONDARY | - | The course starts with functions, limits and derivatives and therefore assumes admission-level school mathematics rather than earlier university analysis. |

#### 5. IY1458 Industriell ekonomi, översiktskurs - OK
<a id="5-iy1458"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BG3FL&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is an overview course in industrial economics and only assumes upper-secondary mathematics.

The plan requires "Grundläggande behörighet samt Matematik 3b alt 3c". The ledger shows no completed university courses before seq 5, but the learning outcomes cover foundational concepts such as basic economic terms, simpler calculations, budgets and analysis of organisations. That scope matches admission-level preparation.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Matematik 3b alt 3c | upper-secondary | MET | The prerequisite section names only upper-secondary eligibility and mathematics 3b/3c, and the ledger shows no prior university courses before seq 5. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Upper-secondary quantitative literacy for simpler calculations | UPPER_SECONDARY | - | The learning outcomes include "utföra vissa enklare kalkyler" and budget work, which fits the stated Mathematics 3b/3c entry requirement. |

### VT28

#### 6. MA1500 Envariabelanalys 2: differentialekvationer och integralkalkyl - OK
<a id="6-ma1500"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYKD9&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the required prior course in single-variable calculus is guaranteed by MA1499 in HT27.

The prerequisite is "genomgången kurs i envariabelanalys, 6 hp". Before seq 6 the ledger guarantees MA1499 from HT27, a 6 hp course in single-variable calculus whose content covers functions, limits, continuity and derivatives. That is exactly the mathematical basis needed for MA1500's focus on integrals, differential equations and complex numbers.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| genomgången kurs i envariabelanalys, 6 hp | course | MET | The ledger guarantees MA1499 (6 hp, HT27, mandatory). MA1499 is "Envariabelanalys 1" and its learning outcomes require students to solve problems in the covered analysis content, which matches the stated prerequisite. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Foundations of single-variable calculus including limits and derivatives | COVERED | MA1499 | MA1500 builds on analysis and MA1499 covers functions, gränsvärden, kontinuerliga funktioner and derivata, providing the required foundation. |

#### 7. PA1481 Digital etik och hållbar utveckling - OK
<a id="7-pa1481"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BTL6M&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is introductory in digital ethics and sustainable development and its formal requirement is entirely upper-secondary.

The plan requires only "Grundläggande behörighet samt Fysik 2, Kemi 1 och Matematik 4". The course purpose explicitly says it gives "grundläggande förståelse" of digital ethics and sustainability in computing, and its content starts with introductions to ethical theory and sustainable development. No earlier university course is formally or clearly implicitly required beyond the admission qualifications.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet samt Fysik 2, Kemi 1 och Matematik 4 | upper-secondary | MET | The prerequisite section names only upper-secondary qualifications, which are covered by admission; the ledger's university courses are not needed to satisfy this requirement. |

#### 8. DV1582 Programmering i Python, fortsättningskurs - OK
<a id="8-dv1582"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BQ9T9&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1574 provides the required introductory Python programming before this continuation course starts.

The prerequisite says "Programmering och problemlösning med Python, 6 hp, varav minst 2 hp ska vara avklarade". Before seq 8 the ledger guarantees DV1574 from HT27, a 6 hp mandatory course in Python programming whose outcomes include constructing algorithms and writing well-structured Python programs. That directly supports DV1582's object-oriented continuation in Python.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Programmering och problemlösning med Python, 6 hp, varav minst 2 hp ska vara avklarade | course | MET | The ledger guarantees DV1574 (6 hp, HT27, mandatory). DV1574 teaches structured programming and Python syntax, so the required earlier Python course is present and fully completed before VT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic Python syntax and structured programming | COVERED | DV1574 | DV1574's learning outcomes include constructing algorithms and mastering Python syntax on a basic level, which DV1582 builds on for object-oriented work. |

#### 9. MA1504 Diskret matematik - OK
<a id="9-ma1504"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B3Q9L&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because MA1498 is guaranteed before seq 9 and satisfies the stated linear-algebra entry requirement.

The prerequisite is "genomgången kurs i Linjär algebra om 6 hp". Before seq 9 the ledger guarantees MA1498 from HT27, a 6 hp mandatory linear algebra course. MA1498 develops mathematical language, matrix methods and proof-oriented reasoning, which is sufficient preparation for the discrete-mathematics topics in MA1504.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| genomgången kurs i Linjär algebra om 6 hp | course | MET | The ledger guarantees MA1498 (6 hp, HT27, mandatory). Its title and learning outcomes clearly match a 6 hp course in linear algebra. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Mathematical notation and structured problem solving in university mathematics | COVERED | MA1498 | MA1498 introduces mathematical language and notation and requires students to solve problems in linear algebra, which supports MA1504's proof, logic and combinatorics work. |

#### 10. DV1682 Datastrukturer och algoritmer - OK
<a id="10-dv1682"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BEMLM&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1574 and DV1582 together provide the required basic and object-oriented programming before the course starts.

The prerequisite requires "grundläggande programmering motsvarande 5 hp samt objektorienterad programmering, 5 hp". Before seq 10 the ledger guarantees DV1574 from HT27 and DV1582 from VT28 läsperiod 3; DV1574 teaches basic Python programming and DV1582 teaches object-oriented programming with classes, inheritance and polymorphism. Those courses cover both formal requirements and the practical skills needed for implementing algorithms and data structures.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| grundläggande programmering motsvarande 5 hp | credits | MET | The ledger guarantees DV1574 (6 hp, HT27, mandatory). DV1574 teaches structured programming, algorithm construction and Python syntax, which clearly exceeds 5 hp of basic programming. |
| objektorienterad programmering, 5 hp | credits | MET | The ledger guarantees DV1582 (6 hp, VT28 läsperiod 3, mandatory before seq 10). DV1582's content and outcomes explicitly cover object-oriented programming with classes, inheritance, polymorphism and object-oriented design. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic programming and algorithm construction | COVERED | DV1574 | DV1574 requires students to construct and implement algorithms and write well-structured Python programs, which supports later work with search, sorting and data structures. |
| Object-oriented implementation skills | COVERED | DV1582 | DV1582 requires students to implement object-oriented solutions in Python and to use classes, inheritance and polymorphism, which aligns with the implementation parts of DV1682. |

### HT28

#### 11. MA1514 Flervariabelanalys - OK
<a id="11-ma1514"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B4WNF&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed earlier mathematics courses cover both linear algebra and single-variable analysis before MA1514 starts.

The prerequisite is "genomgångna kurser i linjär algebra och envariabelanalys". Before seq 11 the ledger guarantees MA1498 in linear algebra and both MA1499 and MA1500 in single-variable analysis. Those courses provide exactly the vector, coordinate and calculus background needed for multivariable analysis with gradients, multiple integrals and optimisation.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| genomgångna kurser i linjär algebra | course | MET | The ledger guarantees MA1498 (6 hp, HT27, mandatory), a course in linear algebra whose learning outcomes cover core concepts and problem solving in the area. |
| genomgångna kurser i envariabelanalys | course | MET | The ledger guarantees MA1499 and MA1500, both mandatory mathematics courses in single-variable analysis completed before HT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Vector and matrix reasoning for geometry in several dimensions | COVERED | MA1498 | MA1498 covers vectors, coordinates, matrices and geometric interpretation, which MA1514 uses for coordinate systems, parametrisation and normal vectors. |
| Single-variable differentiation and integration | COVERED | MA1499, MA1500 | MA1499 and MA1500 cover derivatives, integrals and optimisation, which underpin partial derivatives, chain rule, multiple integrals and constrained optimisation in MA1514. |

#### 12. PA1484 Programvaruutveckling - OK
<a id="12-pa1484"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BQ7KW&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence medium)

**Answer:** Yes, because the student has guaranteed programming study and earlier engineering-orientation courses, although the prerequisite wording should be made more precise.

The plan requires "6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen och minst 6 avklarade hp i programmering". Before seq 12 the ledger guarantees at least 12 hp of programming through DV1574 and DV1582, and it also guarantees earlier orientation courses about AI, engineering professionalism, ethics and sustainability through DV1683 and PA1481. The progression therefore works, but the first prerequisite is phrased without naming a course code, which makes the intended source course somewhat imprecise.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen | course | MET | The ledger guarantees DV1683 (6 hp, HT27, mandatory), whose title includes "ingenjörsmässighet" and whose content introduces AI together with ethics, safety and how the concept of engineering professionalism relates to the area. PA1481 also contributes professional and ethical orientation in computing. |
| minst 6 avklarade hp i programmering | credits | MET | The ledger guarantees DV1574 (6 hp) and DV1582 (6 hp) before seq 12, both mandatory programming courses. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic programming experience for participating in a small software project | COVERED | DV1574, DV1582 | DV1574 teaches structured Python programming and DV1582 teaches object-oriented programming, giving the student enough programming practice to participate in project planning and practical work. |
| Initial understanding of professional, ethical and engineering roles in computing | COVERED | DV1683, PA1481 | DV1683 introduces AI together with ethics, safety and engineering professionalism, while PA1481 covers digital ethics, sustainability and professional practice in software-related contexts. |

Findings: F-001

#### 13. FY1436 Kraft och energi - OK
<a id="13-fy1436"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPDX7&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the formal linear-algebra requirement is guaranteed and the student also has sufficient earlier calculus and upper-secondary physics for the course’s modelling work.

The prerequisite is "genomgången kurs i Linjär algebra, 6 hp". Before seq 13 the ledger guarantees MA1498, and the student also has earlier analysis courses MA1499 and MA1500 plus upper-secondary physics from admission. That combination is sufficient for the course's work with vectors, motion, forces, waves, electromagnetism and experimental analysis.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| genomgången kurs i Linjär algebra, 6 hp | course | MET | The ledger guarantees MA1498 (6 hp, HT27, mandatory), a linear algebra course covering vectors, matrices and geometric reasoning. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Vector algebra for mechanics and electromagnetism | COVERED | MA1498 | FY1436 covers motion in two and three dimensions, forces and fields; MA1498 provides vectors, scalar products and geometric interpretation needed for that work. |
| Basic calculus for physical modelling | COVERED | MA1499, MA1500 | The course models motion, waves and fields, and the student has already completed one-variable analysis courses covering derivatives and integrals. |

#### 14. DV1730 Datorteknik - OK
<a id="14-dv1730"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BJH3K&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because earlier programming study and the guaranteed data-structures course provide the stated foundation for this computer-architecture course.

The prerequisite is "6 avklarade hp från programmeringskurser samt genomgången kurs i datastrukturer och algoritmer". Before seq 14 the ledger guarantees DV1574 and DV1582 in programming, and DV1682 in data structures and algorithms. Those courses support both the formal requirements and the course's practical work with machine language, assembly and low-level system reasoning.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 avklarade hp från programmeringskurser | credits | MET | The ledger guarantees DV1574 (6 hp) before seq 14, and the student also has DV1582, so the stated programming amount is clearly satisfied. |
| genomgången kurs i datastrukturer och algoritmer | course | MET | The ledger guarantees DV1682 (6 hp, VT28, mandatory), which is explicitly a course in datastructures and algorithms. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming ability for implementing low-level exercises | COVERED | DV1574, DV1582 | The student already has both introductory and object-oriented programming courses, which is sufficient preparation for the practical programming parts of DV1730. |
| Algorithmic and data-structure reasoning | COVERED | DV1682 | DV1730 asks students to reason about hardware, machine language and implementation choices; DV1682 provides the design and analysis background needed for structured low-level problem solving. |

#### 15. MS1419 Matematisk statistik - OK
<a id="15-ms1419"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BKXKM&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed earlier mathematics sequence covers the stated linear-algebra, calculus and multivariable-analysis prerequisites.

The plan requires "1,5 avklarade hp i linjär algebra och 1,5 avklarade hp i envariabelanalys" plus a completed course in "Flervariabelanalys, 6 hp". Before seq 15 the ledger guarantees MA1498 in linear algebra, MA1499 and MA1500 in one-variable analysis, and MA1514 in multivariable analysis from HT28 läsperiod 1. That progression matches the probability, distributions, regression and inference work described in MS1419.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 1,5 avklarade hp i linjär algebra | credits | MET | The ledger guarantees MA1498 (6 hp, mandatory), which more than covers the stated amount of linear algebra. |
| 1,5 avklarade hp i envariabelanalys | credits | MET | The ledger guarantees MA1499 and MA1500, together 12 hp in one-variable analysis, far exceeding the stated 1.5 hp. |
| genomgången kurs i Flervariabelanalys, 6 hp | course | MET | The ledger guarantees MA1514 (6 hp, HT28 läsperiod 1, mandatory) before seq 15 in HT28 läsperiod 2. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Mathematical maturity in algebra and calculus | COVERED | MA1498, MA1499, MA1500, MA1514 | MS1419 covers probability theory, distributions, estimation, hypothesis testing and regression, and the full prior mathematics sequence provides the necessary symbolic and analytical foundation. |

### VT29

#### 16. DV1697 Operativsystem - GAP
<a id="16-dv1697"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BFNWH&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **GAP** (confidence high)

**Answer:** Not fully, because the formal prerequisites are met but the course explicitly expects students to already be able to work in C/C++, which the guaranteed earlier courses do not provide.

The formal requirement of 12 hp programming plus 1.5 hp from algorithms and data structures is satisfied by the guaranteed earlier programming sequence and DV1682. However, the learning activities state that lab tasks "skall genomföras huvudsakligen i programmeringsspråket C / C++" and that the student "ska ha tillräcklig förståelse för språken" to independently convert theory into practice. The guaranteed earlier programming courses are Python-based and do not provide documented C/C++ competence, so a student following the mandatory program path lacks an assumed competence that the course explicitly relies on.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 12 avklarade hp i programmering | credits | MET | Before seq 16 the ledger guarantees DV1574 (6 hp) and DV1582 (6 hp), together providing 12 hp of programming. |
| 1,5 avklarade hp från algoritmer och datastrukturer | credits | MET | The ledger guarantees DV1682 (6 hp, mandatory), which more than satisfies the 1.5 hp requirement in algorithms and data structures. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C or C++ for operating-system labs | NOT_COVERED | - | The learning activities state that lab assignments are carried out mainly in "programmeringsspråket C / C++" and that the student must already have enough understanding of those languages, but the guaranteed earlier courses DV1574 and DV1582 are both Python courses and no earlier mandatory course documents C/C++ competence. |
| Algorithm and data-structure knowledge for resource-management implementations | COVERED | DV1682 | DV1697 asks students to choose suitable algorithms and datastructures for operating-system functionality, and DV1682 explicitly teaches design and implementation of algorithms and data structures. |

Findings: F-002

#### 17. DV1663 Databasteknik - OK
<a id="17-dv1663"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 12 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BA6U9&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed earlier programming sequence includes both 12 hp of programming and 6 hp of object-oriented programming.

The formal prerequisite is "12 hp i programmering, varav 6 hp måste vara i objektorienterad programmering". Before seq 17 the ledger guarantees DV1574 and DV1582, which together provide 12 hp of programming, and DV1582 is explicitly an object-oriented programming course. That is sufficient preparation for database modelling, SQL and implementing a database application with a client application.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 12 hp i programmering | credits | MET | The ledger guarantees DV1574 (6 hp) and DV1582 (6 hp) before seq 17, together satisfying the 12 hp programming requirement. |
| 6 hp i objektorienterad programmering | credits | MET | DV1582 (6 hp, mandatory) is explicitly a course in object-oriented programming in Python, with outcomes on classes, inheritance and object-oriented design. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming for implementing a database application | COVERED | DV1574, DV1582 | The earlier programming courses give the student enough programming practice to build the client-side application and work with practical labs. |
| Object-oriented design and implementation | COVERED | DV1582 | DV1582 requires students to structure solutions with classes and implement object-oriented programs, which supports the application-development parts of DV1663. |

#### 18. DV1685 Datakommunikation och nätverksteknik - OK
<a id="18-dv1685"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 12 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B3NTH&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the formal 5 hp programming requirement is guaranteed and the course itself introduces the networking content it needs.

The prerequisite is only "5 avklarade hp i programmering". Before seq 18 the ledger guarantees more than that through DV1574 and DV1582, and the course purpose explicitly says it provides "grundläggande teoretiska kunskaper och praktiska färdigheter inom datakommunikation och nätverksteknik". The progression is therefore coherent for an introductory networking course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 avklarade hp i programmering | credits | MET | The ledger guarantees DV1574 (6 hp) before seq 18, and the student also has DV1582, so the required amount of programming is satisfied. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming ability for simple socket programming | COVERED | DV1574, DV1582 | The course includes basic socket programming, and earlier programming courses provide sufficient coding ability for that introductory practical work. |

#### 19. DV1684 Säkerhetsteknik - OK
<a id="19-dv1684"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPJF4&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the stated programming requirement is guaranteed and the course is introductory in information and cyber security.

The plan requires "avklarade kurser i programmering, motsvarande 12 hp". Before seq 19 the ledger guarantees at least 12 hp of programming from DV1574 and DV1582. The course purpose is to "introducera informations- och cybersäkerhet", so its conceptual content and basic practical exercises fit the program sequence once that programming background is present.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarade kurser i programmering, motsvarande 12 hp | credits | MET | The ledger guarantees DV1574 (6 hp) and DV1582 (6 hp) before seq 19, together giving 12 hp of programming. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming ability for simple practical security exercises | COVERED | DV1574, DV1582 | Earlier programming courses provide enough coding experience for the simple tools, analysis methods and project work described in the learning activities. |

#### 20. DV1597 Intelligent dataanalys - OK
<a id="20-dv1597"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BNNEW&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path provides both mathematical statistics and at least 12 hp of programming before the course starts.

The prerequisite is "avklarad kurs Matematisk statistik, 6 hp samt 12 hp avklarade från moment i programmeringskurser". Before seq 20 the ledger guarantees MS1419 in mathematical statistics and more than 12 hp of programming from DV1574 and DV1582. Those earlier courses supply the statistical reasoning and programming ability needed for data cleaning, visualisation and statistical data analysis in DV1597.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarad kurs Matematisk statistik, 6 hp | course | MET | The ledger guarantees MS1419 (6 hp, HT28, mandatory) before seq 20. |
| 12 hp avklarade från moment i programmeringskurser | credits | MET | The ledger guarantees DV1574 (6 hp) and DV1582 (6 hp), together providing 12 hp of programming before seq 20. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Statistical analysis and interpretation | COVERED | MS1419 | MS1419 covers probability, distributions, hypothesis testing and regression, which directly supports DV1597's statistical data-analysis methods. |
| Programming for data pipelines and visualisations | COVERED | DV1574, DV1582 | DV1574 and DV1582 provide programming practice in Python, which is suitable for the course's work with data cleaning, transformation and visualisation. |

### HT29

#### 21. ET1558 Dynamiska system och återkoppling - OK
<a id="21-et1558"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 36 (2029) - Vecka 44 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BDWH4&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path provides more than 60 first-cycle credits together with linear algebra and single-variable analysis before the course starts.

The plan requires "60 avklarade hp på grundnivå varav 6 hp i linjär algebra och 6 hp i envariabelanalys". Before seq 21 the ledger guarantees 120 hp at first-cycle level, including MA1498 in linear algebra and MA1499/MA1500 in analysis. Those earlier mathematics courses support the modelling, linearisation, stability analysis and control design in ET1558.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 avklarade hp på grundnivå | credits | MET | The ledger states 120 guaranteed hp before seq 21, all on grundnivå. |
| 6 hp i linjär algebra | credits | MET | The ledger guarantees MA1498 (6 hp, mandatory), a linear algebra course. |
| 6 hp i envariabelanalys | credits | MET | The ledger guarantees MA1499 and MA1500, together providing 12 hp of one-variable analysis before seq 21. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Mathematical modelling with differential equations and functions | COVERED | MA1500 | ET1558 covers dynamic-system models, simulation and feedback; MA1500 includes ordinary differential equations and related modelling applications. |
| Linear-algebra reasoning for state and stability analysis | COVERED | MA1498 | Linearisation and stability analysis in ET1558 build naturally on the vector and matrix reasoning from MA1498. |

#### 22. DV2659 Tillämpad artificiell intelligens - OK
<a id="22-dv2659"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2029) - Vecka 44 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6ELN&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the mandatory path already provides programming, algorithms, statistics and introductory AI before this applied AI course starts.

The formal prerequisites are 5 hp programming, 5 hp in data structures and algorithms, and a completed course in mathematical statistics. Before seq 22 the ledger guarantees DV1574/DV1582 for programming, DV1682 for algorithms and data structures, and MS1419 for mathematical statistics. The student also has earlier AI orientation from DV1683, which strengthens the progression into this applied AI course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 avklarade hp från programmeringskurser | credits | MET | The ledger guarantees programming courses DV1574 and DV1582 before seq 22, easily exceeding 5 hp. |
| 5 avklarade hp i datastrukturer och algoritmer | credits | MET | DV1682 is a guaranteed 6 hp course in data structures and algorithms before seq 22. |
| genomgången kurs i matematisk statistik | course | MET | The ledger guarantees MS1419 (6 hp, HT28, mandatory), which is Matematisk statistik. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming for implementing AI solutions | COVERED | DV1574, DV1582 | DV2659 requires students to design and implement AI solutions in a programming language, and earlier mandatory courses provide programming practice. |
| Search, graph and algorithmic reasoning | COVERED | DV1682 | The content of DV2659 includes graphs, search and heuristics, which are supported by DV1682's algorithms-and-data-structures background. |
| Statistical reasoning for evaluating AI applications | COVERED | MS1419 | MS1419 provides the statistical foundation needed to evaluate basic AI applications and reason about performance. |

#### 23. PA1485 Mjukvaruutvecklingsprojekt i team - OK
<a id="23-pa1485"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 36 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGRP9&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the program guarantees both 12 hp of programming and a prior software-development course before this team project starts.

The formal prerequisites are "12 avklarade hp i programmering och 6 avklarade hp i programvaruutveckling". Before seq 23 the ledger guarantees DV1574 and DV1582 for 12 hp of programming and PA1484 Programvaruutveckling for 6 hp in software development. That earlier progression directly supports the course's team-based work on requirements, agile development, implementation and testing.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 12 avklarade hp i programmering | credits | MET | The ledger guarantees DV1574 (6 hp) and DV1582 (6 hp) before seq 23, together giving 12 hp of programming. |
| 6 avklarade hp i programvaruutveckling | credits | MET | The ledger guarantees PA1484 Programvaruutveckling (6 hp, HT28, mandatory) before seq 23. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming for implementing and testing a team solution | COVERED | DV1574, DV1582 | The earlier programming sequence gives the student the coding experience needed for the project implementation and testing described in PA1485. |
| Basic software-process and project understanding | COVERED | PA1484 | PA1484 covers development processes, planning, requirements handling and testing, which PA1485 develops further in a team project. |

#### 24. PA1486 Testning av mjukvara - OK
<a id="24-pa1486"></a>

- 6 hp, elective, Grundnivå, läsperiod 2 (Vecka 45 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6L47&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has guaranteed prior object-oriented programming and software-development study before this testing course starts.

The plan requires 5 hp in object-oriented programming and 5 hp in either software development, introduction to software engineering or a project course. Before seq 24 the ledger guarantees DV1582 in object-oriented programming and PA1484 in software development. That is sufficient preparation for a course focused on software quality, test design, automated testing and test planning.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 hp avklarade kurser inom objektorienterad programmering | credits | MET | DV1582 is a guaranteed 6 hp object-oriented programming course before seq 24. |
| 5 hp avklarad kurs inom programvaruutveckling, introduktion inom programvaruteknik, eller projektkurs | credits | MET | The ledger guarantees PA1484 Programvaruutveckling (6 hp, mandatory), which satisfies the software-development alternative before seq 24. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Object-oriented programming for implementing tests | COVERED | DV1582 | DV1582 provides the object-oriented coding background needed for practical test-implementation work. |
| Software-development process understanding for placing testing activities | COVERED | PA1484 | PA1484 covers development processes, planning and testing, which supports PA1486's focus on integrating testing into software-development processes. |

#### 25. DV2606 Multiprocessorprogrammering - GAP
<a id="25-dv2606"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B7FEX&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **GAP** (confidence high)

**Answer:** Not fully, because the formal prerequisite chain is in place but the course explicitly expects prior C/C++ ability that the mandatory path still does not provide.

Formally, the student satisfies the requirement of 60 hp in datavetenskap/programvaruteknik plus earlier study in programming, algorithms, operating systems and computer engineering. The ledger before seq 25 guarantees 72 hp in Datavetenskap and 36 hp in Programvaruteknik, together with DV1574/DV1582, DV1682, DV1697 and DV1730. However, the learning activities state that the lab assignments are carried out mainly in "programmeringsspråken C / C++" and that the student is expected to already understand those languages. The guaranteed mandatory path still documents Python programming, not C/C++, so a concrete competence gap remains.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Before seq 25 the ledger shows 72 guaranteed hp in Datavetenskap, so the 60 hp main-area threshold is reached without relying on electives. |
| programmering 12 hp | credits | MET | The guaranteed earlier programming courses DV1574 and DV1582 provide 12 hp before seq 25. |
| algoritmer och datastrukturer 6 hp | credits | MET | DV1682 is a guaranteed 6 hp course in data structures and algorithms before seq 25. |
| operativsystem samt datorteknik 6 hp | course | MET | The mandatory path guarantees DV1697 Operativsystem and DV1730 Datorteknik before seq 25, covering the named systems background. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Operating-system and computer-architecture knowledge for parallel programming | COVERED | DV1697, DV1730 | The formal prerequisite chain includes operating systems and computer engineering, both of which are guaranteed earlier in the mandatory path. |
| Programming in C or C++ for the laboratory assignments | NOT_COVERED | - | The learning activities say lab tasks are carried out mainly in "programmeringsspråken C / C++" and that students are expected to already understand those languages, but the guaranteed earlier programming courses are Python-based and do not document C/C++ competence. |

Findings: F-003

#### 26. DV2638 Maskininlärning - OK
<a id="26-dv2638"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 2 (Vecka 45 (2029) - Vecka 3 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BM3UR&semester=20292&lang=sv
- Guaranteed hp before start: 120 (max 120 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path already provides programming, algorithms and mathematical statistics before this machine-learning course starts.

The prerequisite is 5 hp programming, 5 hp in data structures and algorithms, and 5 hp in mathematical statistics or probability theory, plus English 6. Before seq 26 the ledger guarantees programming through DV1574/DV1582, algorithms through DV1682, and statistics through MS1419. That is a coherent base for a first advanced-level course in machine learning.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 hp i programmering | credits | MET | The guaranteed earlier programming sequence exceeds the 5 hp threshold before seq 26. |
| 5 hp i datastrukturer och algoritmer | credits | MET | DV1682 provides 6 guaranteed hp in data structures and algorithms before seq 26. |
| 5 hp i matematisk statistik eller sannolikhetsteori | credits | MET | MS1419 is a guaranteed 6 hp course in mathematical statistics before seq 26. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is handled through admission-level upper-secondary qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming for implementing learning systems | COVERED | DV1574, DV1582 | The course requires students to produce and use machine learning for different learning problems, and earlier programming courses provide the coding foundation for that work. |
| Algorithmic reasoning for designing learning-system experiments | COVERED | DV1682 | Earlier training in algorithms and data structures supports the design and evaluation of machine-learning solutions and experiments. |
| Statistical reasoning for evaluating learning systems | COVERED | MS1419 | MS1419 gives the probability and statistics basis needed for evaluation and comparison of learning systems. |

### VT30

#### 27. DV1601 Användbarhet och interaktionsdesign - OK
<a id="27-dv1601"></a>

- 6 hp, elective, Grundnivå, läsperiod 3 (Vecka 4 (2030) - Vecka 13 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BHLGL&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student already has far more than the required 6 hp in the main areas datavetenskap/programvaruteknik before this HCI course starts.

The formal prerequisite is only "6 hp inom huvudområdet datavetenskap eller programvaruteknik". Before seq 27 the ledger guarantees extensive study in those main areas, well beyond the threshold. The course is itself introductory in usability, interaction design and HCI, so the program sequence is sufficient.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 hp inom huvudområdet datavetenskap eller programvaruteknik | credits | MET | Before seq 27 the ledger guarantees far more than 6 hp in both Datavetenskap and Programvaruteknik. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General computing background for discussing user interfaces and design methods | COVERED | DV1574, PA1484 | The student already has core computing and software-development study, which is enough for a foundational course in usability and interaction design. |

#### 28. DV1688 Digital undersökningsteknik - OK
<a id="28-dv1688"></a>

- 6 hp, elective, Grundnivå, läsperiod 3 (Vecka 4 (2030) - Vecka 13 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BQGHM&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence medium)

**Answer:** Yes, because the required systems background is available before the course starts, although one prerequisite phrase should be made more precise.

The plan requires 60 hp in Datavetenskap/Programvaruteknik including "datorsäkerhet och ingenjörsarbete, 5 hp, programmering, 5 hp, samt operativsystem, 5 hp". Before seq 28 the ledger guarantees well over 60 hp in the relevant main areas, programming through DV1574/DV1582, operating systems through DV1697, and security through DV1684; the student also has networking through DV1685, which is useful for the stated learning outcomes on network traces. The progression therefore works, but the phrase about "datorsäkerhet och ingenjörsarbete" does not name a concrete course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Before seq 28 the ledger shows 78 guaranteed hp in Datavetenskap and 48 hp in Programvaruteknik, so the 60 hp threshold is met without electives. |
| datorsäkerhet och ingenjörsarbete, 5 hp | course | MET | The guaranteed path includes DV1684 Säkerhetsteknik and earlier engineering/project-oriented software courses such as PA1484/PA1485, which together provide the intended security and engineering background. |
| programmering, 5 hp | credits | MET | The ledger guarantees more than 5 hp of programming before seq 28 through DV1574 and DV1582. |
| operativsystem, 5 hp | credits | MET | The guaranteed path includes DV1697 Operativsystem (6 hp) before seq 28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Operating-system knowledge for understanding how digital traces arise | COVERED | DV1697 | The learning outcomes require explaining digital traces in operating systems and filesystems, which is aligned with the earlier operating-systems course DV1697. |
| Security awareness and network understanding for forensic analysis | COVERED | DV1684, DV1685 | DV1688 requires securing and analysing data from systems and networks; earlier mandatory courses in security and networking provide that systems context. |

Findings: F-004

#### 29. TE1429 Kandidatarbete i teknik för AI och maskininlärning - OK
<a id="29-te1429"></a>

- 18 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 4 (2030) - Vecka 23 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYKMH&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path clearly exceeds the thesis course’s credit and background requirements in technology, mathematics, and ethics/sustainability.

The plan requires at least 60 completed hp in the main area Teknik, at least 15 completed hp in mathematics, and at least 3 completed hp in ethics or sustainable development. Before seq 29 the mandatory path already provides far more than 60 hp tagged Teknik, 30 hp in mathematics, and 6 hp in PA1481 on digital ethics and sustainable development. The student also has prior AI and machine-learning study through DV2659 and DV2638, which fits the thesis course's focus on AI and machine learning.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| minst 60 avklarade hp i huvudområdet teknik | credits | MET | Before seq 29 the ledger's guaranteed area accounting shows the student already exceeds 60 hp in Teknik. |
| minst 15 avklarade hp i matematik | credits | MET | The guaranteed earlier mathematics courses MA1498, MA1499, MA1500, MA1504 and MA1514 already provide 30 hp in mathematics before the thesis course. |
| minst 3 avklarade hp i etik eller hållbar utveckling | credits | MET | PA1481 Digital etik och hållbar utveckling is a guaranteed 6 hp mandatory course before seq 29. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Foundational AI and machine-learning knowledge for selecting a thesis topic | COVERED | DV2659, DV2638 | TE1429 expects students to work within AI and machine learning, and the mandatory path already includes both Applied AI and Machine Learning before the thesis starts. |
| Project work, reporting and communication | COVERED | PA1485, DV1597 | Earlier mandatory project and report-heavy courses train planning, written communication and presentation, which are relevant for the thesis work. |

#### 30. DV2647 Penetrationstestning och etisk hackning - OK
<a id="30-dv2647"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2030) - Vecka 23 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B4CTR&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed mandatory path already satisfies the required computing breadth in programming, object orientation, algorithms and networking.

The plan requires 30 hp in Datavetenskap/Programvaruteknik or equivalent, including 5 hp each in basic programming, object-oriented programming, algorithms and data structures, and data communication or computer networks, plus English 6. Before seq 30 the ledger guarantees more than 30 hp in the relevant main areas and includes DV1574, DV1582, DV1682 and DV1685. The student also has earlier security background through DV1684, which supports the course's penetration-testing focus.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 30 hp inom datavetenskap, programvaruteknik eller motsvarande | credits | MET | The guaranteed main-area credits before seq 30 substantially exceed 30 hp in Datavetenskap/Programvaruteknik. |
| grundläggande programmering, 5 hp | credits | MET | DV1574 provides 6 guaranteed hp in basic programming before seq 30. |
| objektorienterad programmering, 5 hp | credits | MET | DV1582 provides 6 guaranteed hp in object-oriented programming before seq 30. |
| algoritmer och datastrukturer, 5 hp | credits | MET | DV1682 provides 6 guaranteed hp in algorithms and data structures before seq 30. |
| datakommunikation eller datornätverk, 5 hp | credits | MET | DV1685 provides 6 guaranteed hp in data communication and networking before seq 30. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is handled through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General security background for understanding vulnerabilities and controls | COVERED | DV1684 | DV1684 introduces information and cyber security, threats, vulnerabilities and basic security measures, which supports the more specialised penetration-testing work in DV2647. |
| Network and systems understanding for reconnaissance and scanning tasks | COVERED | DV1685, DV1697 | DV2647 uses network scanning and verification in controlled environments, and earlier mandatory courses in networking and operating systems provide relevant systems context. |

#### 31. PA2601 DevSecOps - Utveckling, säkerhet och drift - OK
<a id="31-pa2601"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2030) - Vecka 23 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPLCX&semester=20301&lang=sv
- Guaranteed hp before start: 144 (max 156 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path meets the alternative 60 hp admission route and also provides the required software-development and database background.

The plan allows either a completed technical degree or at least 60 completed hp within Teknik/Datavetenskap/Programvaruteknik plus 20 hp in specified software subjects. Before seq 31 the ledger guarantees 144 hp overall and ample credits in the relevant main areas, together with object-oriented programming, algorithms, database technology and software-development/project courses through DV1582, DV1682, DV1663 and PA1484/PA1485. That is a coherent basis for an advanced DevSecOps course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| minst 60 avklarade hp inom teknik, datavetenskap eller programvaruteknik | credits | MET | Before seq 31 the ledger guarantees 144 hp overall and the main-area accounting shows well above 60 hp within the relevant technical areas. |
| minst 20 hp inom datavetenskap, programvaruteknik eller motsvarande med objektorienterad programmering, algoritmer och datastrukturer, databasteknik samt projektkurs eller kurs i programvaruutveckling | credits | MET | The guaranteed path includes DV1582 for object-oriented programming, DV1682 for algorithms and data structures, DV1663 for databasteknik, and PA1484/PA1485 for software-development/project background before seq 31. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Software-development process and project understanding | COVERED | PA1484, PA1485 | DevSecOps builds on development and delivery processes, and the student has earlier mandatory software-development and team-project courses. |
| Basic security background for integrating security practices | COVERED | DV1684 | DV1684 introduces core cyber-security concepts, threats and protection measures that support the security-integration perspective of PA2601. |

### HT30

#### 32. DV2583 Digital etik - OK
<a id="32-dv2583"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B9A7W&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the required Applied AI course is guaranteed before this advanced ethics course starts.

The plan requires only "avklarad kurs Tillämpad AI, 6 hp". Before seq 32 the ledger guarantees DV2659 Tillämpad artificiell intelligens from HT29. The student also has earlier ethics and sustainability study from PA1481, so the progression into a focused advanced course in digital ethics is coherent.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarad kurs Tillämpad AI, 6 hp | course | MET | The ledger guarantees DV2659 Tillämpad artificiell intelligens (6 hp, HT29, mandatory) before seq 32. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Understanding of AI applications and their societal effects | COVERED | DV2659 | DV2583 discusses ethical aspects of AI and digitalisation, and DV2659 gives the student prior AI application context. |
| Basic ethical reasoning in computing | COVERED | PA1481 | PA1481 introduces digital ethics and sustainability in computing, which prepares the student for the more focused ethical analysis in DV2583. |

#### 33. IY2649 Technology venture 1: Innovation och affärsutveckling - OK
<a id="33-iy2649"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BEXJN&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path already exceeds the required 90 hp in a technical area before this entrepreneurship course starts.

The plan requires "minst 90 hp inom ett tekniskt område" plus English 6. Before seq 33 the ledger guarantees well above 90 hp in the technical main areas, so the student has the intended technical maturity. The course itself introduces entrepreneurship and innovation concepts rather than assuming prior business-specialisation.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| minst 90 hp inom ett tekniskt område | credits | MET | Before seq 33 the ledger shows well over 90 guaranteed hp in the technical area accounting, including 114 hp in Teknik by the start of HT30. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through admission-level upper-secondary qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Technical domain understanding for evaluating technology-based value propositions | COVERED | TE1429, DV2659 | By this stage the student has substantial technical study and an AI/ML-oriented thesis/project background, which is enough context for the technology-based innovation work in IY2649. |

#### 34. DV2607 Säkerhet i AI-system - OK
<a id="34-dv2607"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BG6JY&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the mandatory machine-learning course is guaranteed before this security-in-AI course starts.

The prerequisite is "avklarad kurs Maskininlärning, 6 hp eller avklarad kurs Signalbehandling med introduktion till maskininlärning, 6 hp". Before seq 34 the ledger guarantees DV2638 Maskininlärning from HT29. The student also has earlier security background from DV1684, which supports the course's focus on attacks and protections in AI systems.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarad kurs Maskininlärning, 6 hp eller avklarad kurs Signalbehandling med introduktion till maskininlärning, 6 hp | course | MET | The ledger guarantees DV2638 Maskininlärning (6 hp, HT29, mandatory) before seq 34. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Machine-learning model understanding | COVERED | DV2638 | DV2607 analyses attacks and defenses against learning AI systems, and DV2638 provides the ML foundation. |
| Basic security concepts and threat thinking | COVERED | DV1684 | DV1684 introduces security concepts, threats and vulnerabilities, which supports the attack/defense perspective in DV2607. |

#### 35. SL2564 Förståelse för marknader, företagande och design inom hållbarhetsomställningar - UNCLEAR
<a id="35-sl2564"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: **not published**
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Unclear, because no published course plan is available for this elective course.

The fetch step reports that no course plan is published for SL2564 in HT30. Without a published plan, it is not possible to assess formal prerequisites, assumed competences, or whether the course fits the program progression.

Findings: F-005

#### 36. MA1513 Kryptologins grunder - OK
<a id="36-ma1513"></a>

- 6 hp, elective, Grundnivå, läsperiod 1 (Vecka 36 (2030) - Vecka 44 (2030))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BPCQQ&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student already has guaranteed earlier study in both linear algebra and discrete mathematics before this cryptology course starts.

The plan requires 6 hp in linear algebra and a completed course in discrete mathematics of 6 hp. Before seq 36 the ledger guarantees MA1498 in linear algebra and MA1504 in discrete mathematics. Those courses are the natural mathematical basis for the cryptographic methods and protocols covered in MA1513.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 6 avklarade högskolepoäng i linjär algebra | credits | MET | MA1498 is a guaranteed 6 hp course in linear algebra before seq 36. |
| genomgången kurs i diskret matematik om 6 hp | course | MET | MA1504 Diskret matematik (6 hp, mandatory) is guaranteed before seq 36. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Linear-algebra reasoning for cryptographic methods | COVERED | MA1498 | The course requires linear algebra formally and uses mathematical foundations for cryptographic methods and protocols. |
| Discrete-mathematics and number-theory foundations | COVERED | MA1504 | MA1504 covers number theory, modular arithmetic and RSA-related material, which directly supports MA1513. |

#### 37. DV2606 Multiprocessorprogrammering - CONDITIONAL
<a id="37-dv2606"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BF6H9&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **CONDITIONAL** (confidence medium)

**Answer:** Conditionally, because the formal prerequisite chain is satisfied but the practical C/C++ competence is only available if the student previously chose the earlier elective offering of the course or equivalent optional study.

By HT30 the formal requirements in main-area credits, programming, algorithms, operating systems and computer engineering are satisfied by the mandatory path. However, the learning activities still state that lab tasks are carried out mainly in C/C++ and expect prior understanding of those languages. That competence is still not supplied by the mandatory path, but unlike the first offering it could now have been acquired through the earlier elective occurrence DV2606 in HT29 or equivalent optional study, so the dependency is conditional rather than absolute.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | The program progression by HT30 guarantees well above 60 hp in the relevant main areas before seq 37. |
| programmering 12 hp, algoritmer och datastrukturer 6 hp, operativsystem samt datorteknik 6 hp | course | MET | The mandatory path before seq 37 guarantees DV1574/DV1582, DV1682, DV1697 and DV1730, covering the named background. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C or C++ for the laboratory assignments | COVERED_CONDITIONALLY | DV2606 | The course still expects prior C/C++ knowledge for labs, but by this later occurrence a student may have obtained it through the earlier elective offering DV2606 in HT29; that path is possible but not guaranteed because electives are optional. |
| Operating-system and architecture knowledge for parallel programming | COVERED | DV1697, DV1730 | The earlier mandatory courses in operating systems and computer engineering remain guaranteed before seq 37. |

Findings: F-006

#### 38. SL2565 Bedöma och designa inom omställningar till hållbarhet - UNCLEAR
<a id="38-sl2565"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: **not published**
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Unclear, because no published course plan is available for this elective course.

The fetch step reports that no course plan is published for SL2565 in HT30. Without a published plan, the prerequisites, expected competences and progression fit cannot be assessed.

Findings: F-007

#### 39. DV2658 Generativ artificiell intelligens - OK
<a id="39-dv2658"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B7MWL&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because both the required earlier AI course and the required machine-learning course are guaranteed before this generative-AI course starts.

The plan requires a completed AI course of 6 hp and a completed machine-learning course of 6 hp. Before seq 39 the mandatory path guarantees DV2659 Tillämpad artificiell intelligens and DV2638 Maskininlärning. That gives the student the stated conceptual and technical foundation for a course in generative AI.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarad kurs i artificiell intelligens, 6 hp | course | MET | The ledger guarantees DV2659 Tillämpad artificiell intelligens (6 hp) before seq 39. |
| genomgången kurs i maskininlärning, 6 hp | course | MET | The ledger guarantees DV2638 Maskininlärning (6 hp) before seq 39. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| AI foundations and application context | COVERED | DV2659 | DV2658 builds on prior understanding of AI concepts and applications, which DV2659 provides. |
| Machine-learning modelling and evaluation | COVERED | DV2638 | DV2638 provides machine-learning fundamentals and experimental evaluation skills that generative AI work builds on. |

#### 40. MS2506 Bayesiansk statistik - OK
<a id="40-ms2506"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BFM9X&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the required mathematical-statistics background is guaranteed before this Bayesian-statistics course starts.

The plan requires 5 completed hp in mathematical statistics and English 6. Before seq 40 the mandatory path guarantees MS1419 Matematisk statistik, which more than satisfies the stated statistics requirement. That prior statistics course is an appropriate basis for advanced Bayesian methods such as posterior distributions, MCMC and Bayesian networks.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 5 avklarade hp i matematisk statistik | credits | MET | MS1419 is a guaranteed 6 hp course in mathematical statistics before seq 40. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met via upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Core statistical reasoning and inference | COVERED | MS1419 | MS1419 provides probability, estimation, hypothesis testing and regression, which are natural prerequisites for Bayesian inference. |

#### 41. IY2650 Technology venture 2: kommersialisering av innovationer - CONDITIONAL
<a id="41-iy2650"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2030) - Vecka 3 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BT3QX&semester=20302&lang=sv
- Guaranteed hp before start: 162 (max 198 with all electives)
- Verdict: **CONDITIONAL** (confidence high)

**Answer:** Conditionally, because the technical-credit requirement is met but the required Venture 1 background is only available through an elective choice.

The plan requires at least 90 hp in a technical area plus a completed course in "Technology venture 1: Innovation och affärsutveckling eller motsvarande" and English 6. The ledger before seq 41 guarantees the technical-credit threshold, but the only clearly matching earlier course in the program is IY2649 Technology venture 1, which is an elective. Because electives are not guaranteed, a student on the mandatory path may lack the commercialisation background that IY2650 explicitly expects.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarade kurser om minst 90 hp inom ett tekniskt område | credits | MET | Before seq 41 the ledger guarantees well above 90 hp in the technical area accounting. |
| genomgången kurs i Technology venture 1: Innovation och affärsutveckling eller motsvarande | course | MET_ONLY_VIA_ELECTIVES | The program contains IY2649 Technology venture 1 earlier in HT30, but it is elective rather than mandatory. No mandatory course is clearly identified in the program as equivalent. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Foundations in technology venture creation and business-model development | COVERED_CONDITIONALLY | IY2649 | IY2650 develops later-stage commercialisation work and explicitly requires Technology venture 1 or equivalent, but that background is available only if the student chose the earlier elective IY2649. |

Findings: F-008

### VT31

#### 42. IY2658 ICT start-ups och högteknologiskt entreprenörskap - UNCLEAR
<a id="42-iy2658"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 3 (Vecka 4 (2031) - Vecka 23 (2031))
- Course plan: **not published**
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Unclear, because no published course plan is available for this mandatory course.

The fetch step reports that no course plan is published for IY2658 in VT31. Without a published course plan, it is not possible to verify formal prerequisites, assumed competences or whether the course fits the program's progression.

Findings: F-009

#### 43. MS1415 Robusta metoder - OK
<a id="43-ms1415"></a>

- 6 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 4 (2031) - Vecka 13 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BUQQL&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the required mathematical-statistics course is guaranteed earlier in the mandatory path.

The plan requires a completed course in Matematisk statistik of 6 hp. Before seq 43 the mandatory path guarantees MS1419 Matematisk statistik from HT28. That gives the statistical foundation needed for robust methods, time-series modelling and validation work in MS1415.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarad kurs i Matematisk statistik, 6 hp | course | MET | The ledger guarantees MS1419 Matematisk statistik (6 hp, HT28, mandatory) before seq 43. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Statistical modelling and inference | COVERED | MS1419 | MS1415 builds on statistical principles for estimation, validation and interpolation, which are covered by MS1419. |
| Programming and experimentation for method evaluation | COVERED | DV1574, DV1582 | MS1415 includes implementation, testing and experimental comparison of methods, and earlier programming courses give the student practical coding ability for that work. |

#### 44. DV2640 Avancerad maskininlärning - OK
<a id="44-dv2640"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 3 (Vecka 4 (2031) - Vecka 13 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BCLQ9&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the mandatory path guarantees both Applied AI and Machine Learning before this advanced ML course starts.

The prerequisite is completed courses in Applied AI and Machine Learning, both 6 hp, plus English 6. Before seq 44 the ledger guarantees DV2659 Tillämpad artificiell intelligens and DV2638 Maskininlärning. That combination matches the course's focus on advanced ML and data-mining methods such as semi-supervised learning, anomaly analysis and streaming data mining.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| genomgångna kurser i Tillämpad artificiell intelligens, 6 hp samt Maskininlärning, 6 hp | course | MET | The mandatory path guarantees DV2659 and DV2638 before seq 44. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Machine-learning foundations | COVERED | DV2638 | DV2640 directly builds on prior machine-learning theory, implementation and evaluation from DV2638. |
| AI application context and problem framing | COVERED | DV2659 | The earlier applied AI course supports the advanced problem framing and method selection expected in DV2640. |

#### 45. ET2627 Robotik - OK
<a id="45-et2627"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2031) - Vecka 23 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BX9RL&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path clearly satisfies the mathematics and computing-credit requirements before this robotics course starts.

The plan requires 15 hp in mathematics, 20 hp in Datavetenskap/Programvaruteknik or equivalent, and English 6. Before seq 45 the mandatory path guarantees 30 hp in mathematics and substantially more than 20 hp in the relevant computing main areas. The student also has prior systems and control background, which supports work with kinematics, control and ROS-based robot programming.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 15 avklarade hp i matematik | credits | MET | The guaranteed mathematics sequence before seq 45 totals 30 hp. |
| 20 avklarade hp i huvudområdet datavetenskap, programvaruteknik eller motsvarande | credits | MET | Before seq 45 the ledger's guaranteed main-area accounting shows far above 20 hp in Datavetenskap and Programvaruteknik. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Mathematical modelling for kinematics and planning | COVERED | MA1498, MA1499, MA1514 | The robotics content covers kinematics, inverse kinematics and planning, which build on the student's prior mathematics sequence. |
| Control and systems thinking | COVERED | ET1558 | ET1558 provides prior study in dynamic systems and feedback, which supports the control-oriented parts of ET2627. |

#### 46. MA2517 Kvantinformation och algoritmer för kvantdatorer - UNCLEAR
<a id="46-ma2517"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 4 (Vecka 14 (2031) - Vecka 23 (2031))
- Course plan: **not published**
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Unclear, because no published course plan is available for this elective course.

The fetch step reports that no course plan is published for MA2517 in VT31. Without a published plan, the prerequisites and progression fit cannot be assessed.

Findings: F-010

#### 47. DV2646 Djup maskininlärning - OK
<a id="47-dv2646"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 4 (Vecka 14 (2031) - Vecka 23 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BKRTL&semester=20311&lang=sv
- Guaranteed hp before start: 180 (max 258 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the required machine-learning course is guaranteed before this deep-learning course starts.

The plan requires a completed course in Machine Learning of 6 hp plus English 6. Before seq 47 the mandatory path guarantees DV2638 Maskininlärning from HT29. That gives the student the intended foundation for neural networks, training, validation and advanced deep-learning methods.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarad kurs Maskininlärning 6 hp | course | MET | The ledger guarantees DV2638 Maskininlärning (6 hp, HT29, mandatory) before seq 47. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Machine-learning foundations and evaluation methods | COVERED | DV2638 | DV2646 extends machine-learning work into neural networks and deep models, and DV2638 provides the necessary ML basis. |
| Programming for implementing and tuning learning models | COVERED | DV1574, DV1582 | Earlier programming courses provide the coding background needed to implement, train and evaluate deep-learning solutions. |

### HT31

#### 48. PA2611 Avancerat mjukvaruutvecklingsprojekt i team - OK
<a id="48-pa2611"></a>

- 18 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2031) - Vecka 3 (2032))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6NLN&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path satisfies the alternative 60 hp route and includes the required object-oriented, algorithmic, database and software-project background.

The plan allows either a technical bachelor's/engineering degree or at least 60 completed hp in technology/computing plus 20 hp of specific software subjects. Before seq 48 the mandatory path clearly satisfies the 60 hp alternative and provides object-oriented programming, algorithms and data structures, database technology and software-development/project experience through DV1582, DV1682, DV1663, PA1484 and PA1485. That is a coherent basis for an advanced team-based software-engineering project.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| minst 60 avklarade hp inom teknik, datavetenskap eller programvaruteknik | credits | MET | Before seq 48 the ledger guarantees far more than 60 hp within the relevant technical areas, so the alternative admission route is satisfied without needing a completed 180 hp degree. |
| minst 20 hp inom datavetenskap, programvaruteknik eller motsvarande med objektorienterad programmering, algoritmer och datastrukturer, databasteknik och en projektkurs eller kurs i programvaruutveckling | credits | MET | The guaranteed path includes DV1582, DV1682, DV1663 and PA1484/PA1485 before seq 48, covering all named knowledge areas. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Software-development teamwork and customer-oriented project practice | COVERED | PA1485, PA2601 | PA1485 provides earlier team-based software development, and PA2601 adds process and security integration in development contexts, supporting the advanced project setting in PA2611. |
| Core software-engineering methods and tools | COVERED | PA1484, DV1663 | The student already has mandatory software-development and database background needed for delivering a customer-oriented software solution. |

#### 49. DV2654 Forskningsmetodik i datavetenskap - OK
<a id="49-dv2654"></a>

- 6 hp, mandatory, Avancerad nivå, läsperiod 1 (Vecka 36 (2031) - Vecka 44 (2031))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BKF67&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the guaranteed path clearly exceeds the required 120 hp in relevant areas and 12 hp in mathematics.

The plan requires completed courses corresponding to 120 hp in relevant areas, of which at least 12 hp must be in mathematics. Before seq 49 the mandatory path already exceeds those thresholds comfortably. The student also has prior thesis and project experience, which fits the course's focus on literature search, scientific writing and conducting a smaller research study.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 120 hp inom relevanta områden | credits | MET | Before seq 49 the program progression guarantees well above 120 hp in the relevant technical and computing-related areas. |
| minst 12 hp inom matematik | credits | MET | The mandatory mathematics sequence totals 30 hp before seq 49, clearly exceeding the 12 hp threshold. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Academic writing, source handling and project planning | COVERED | TE1429, PA1485 | The earlier thesis course and project-oriented work give the student prior practice in planning, reporting and source use, which supports DV2654's research-methods tasks. |
| Technical background for evaluating research in the program area | COVERED | DV2659, DV2638, DV2640, DV2646 | By HT31 the student has broad advanced-level study in AI and related areas, which is an appropriate context for analysing research articles relevant to the program. |

#### 50. DV2606 Multiprocessorprogrammering - CONDITIONAL
<a id="50-dv2606"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2031) - Vecka 3 (2032))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BA49R&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **CONDITIONAL** (confidence medium)

**Answer:** Conditionally, because the formal background is present but the practical C/C++ competence is still only available through optional earlier study.

By HT31 the formal requirements in credits, programming, algorithms, operating systems and computer engineering are comfortably satisfied by the mandatory path. However, the course still explicitly expects prior understanding of C/C++ for the laboratory assignments. That competence can exist if the student chose an earlier elective offering of DV2606 or another optional C/C++ path, but it is not guaranteed by the mandatory structure, so the dependency remains conditional.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade i huvudområdet datavetenskap eller programvaruteknik | credits | MET | Before seq 50 the ledger shows guaranteed main-area credits in Datavetenskap/Programvaruteknik well above the 60 hp threshold. |
| programmering 12 hp, algoritmer och datastrukturer 6 hp, operativsystem samt datorteknik 6 hp | course | MET | The mandatory path before seq 50 guarantees the named background through DV1574/DV1582, DV1682, DV1697 and DV1730. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming in C or C++ for the laboratory assignments | COVERED_CONDITIONALLY | DV2606 | The course expects prior C/C++ knowledge for labs, and by HT31 that competence may have been acquired through an earlier elective occurrence of DV2606, but such elective study is not guaranteed. |
| Operating-system and architecture knowledge for parallel programming | COVERED | DV1697, DV1730 | The earlier mandatory operating-systems and computer-engineering courses remain guaranteed before seq 50. |

Findings: F-011

#### 51. IY2650 Technology venture 2: kommersialisering av innovationer - CONDITIONAL
<a id="51-iy2650"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2031) - Vecka 3 (2032))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B47EQ&semester=20312&lang=sv
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **CONDITIONAL** (confidence high)

**Answer:** Conditionally, because the technical-credit requirement is met but the required Venture 1 background is still only available through an elective choice.

The plan again requires at least 90 hp in a technical area, Technology venture 1 or equivalent, and English 6. By HT31 the technical-credit threshold is easily satisfied, but the only clearly matching earlier course in the program remains the elective IY2649. Since electives are not guaranteed, the commercialisation background that IY2650 expects is still only conditionally available.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| avklarade kurser om minst 90 hp inom ett tekniskt område | credits | MET | By HT31 the ledger guarantees well above 90 hp in the technical area accounting. |
| genomgången kurs i Technology venture 1: Innovation och affärsutveckling eller motsvarande | course | MET_ONLY_VIA_ELECTIVES | The earlier program contains IY2649 Technology venture 1 as an elective, but no mandatory course is clearly identified as equivalent. |
| Engelska 6 | upper-secondary | MET | The plan explicitly lists Engelska 6, which is met through upper-secondary admission qualification. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Foundations in technology venture creation and business-model development | COVERED_CONDITIONALLY | IY2649 | The course explicitly requires Venture 1 or equivalent, but that background is available only through the earlier elective IY2649, not through the guaranteed mandatory path. |

Findings: F-012

#### 52. SL2565 Bedöma och designa inom omställningar till hållbarhet - UNCLEAR
<a id="52-sl2565"></a>

- 6 hp, elective, Avancerad nivå, läsperiod 2 (Vecka 45 (2031) - Vecka 3 (2032))
- Course plan: **not published**
- Guaranteed hp before start: 204 (max 294 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Unclear, because no published course plan is available for this elective course.

The fetch step reports that no course plan is published for SL2565 in HT31. Without a published course plan, there is no basis for judging prerequisites or progression.

Findings: F-013

### VT32

#### 53. DV2649 Masterarbete i datavetenskap - UNCLEAR
<a id="53-dv2649"></a>

- 30 hp, mandatory, Avancerad nivå, läsperiod 3 (Vecka 4 (2032) - Vecka 23 (2032))
- Course plan: **not published**
- Guaranteed hp before start: 228 (max 336 with all electives)
- Verdict: **UNCLEAR** (confidence high)

**Answer:** Unclear, because no published course plan is available for this mandatory final thesis course.

The fetch step reports that no course plan is published for DV2649 in VT32. Without a published plan, it is impossible to verify the master's-thesis prerequisites, expected prior competences or the final progression of the mandatory study path.

Findings: F-014

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
  "harness": "codex",
  "model": "gpt-5.4",
  "date": "2026-10-21",
  "verdicts": {
    "OK": 41,
    "CONDITIONAL": 4,
    "GAP": 2,
    "UNCLEAR": 6
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
      "confidence": "high"
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
      "verdict": "OK",
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
      "confidence": "high"
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
      "verdict": "OK",
      "confidence": "high"
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
      "verdict": "GAP",
      "confidence": "high"
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
      "verdict": "OK",
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
      "confidence": "high"
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
      "id": "F-002",
      "seq": 16,
      "course": "DV1697",
      "semester": "VT29",
      "type": "competence-gap",
      "severity": "high",
      "description": "DV1697 explicitly expects students to already know C/C++ for the laboratory work, but the guaranteed earlier mandatory courses provide programming in Python rather than C/C++.",
      "recommendation": "Either introduce C/C++ earlier in the mandatory path, redesign the labs to use languages already taught, or state C/C++ explicitly as a prerequisite and ensure the program provides it before DV1697."
    },
    {
      "id": "F-003",
      "seq": 25,
      "course": "DV2606",
      "semester": "HT29",
      "type": "competence-gap",
      "severity": "high",
      "description": "DV2606 expects prior C/C++ competence for the practical laboratory work, but the guaranteed mandatory path provides programming mainly in Python and does not explicitly teach C/C++ before the course.",
      "recommendation": "Add C/C++ earlier in the mandatory path, redesign the course labs to use already taught languages, or state C/C++ explicitly as a prerequisite and ensure the program supplies it before DV2606."
    },
    {
      "id": "F-009",
      "seq": 42,
      "course": "IY2658",
      "semester": "VT31",
      "type": "missing-course-plan",
      "severity": "high",
      "description": "No published course plan is available for IY2658 in VT31, so the progression and prerequisites for this mandatory course cannot be reviewed.",
      "recommendation": "Publish the course plan before the course is part of the mandatory study path, or replace the occurrence with a course that has a published plan."
    },
    {
      "id": "F-014",
      "seq": 53,
      "course": "DV2649",
      "semester": "VT32",
      "type": "missing-course-plan",
      "severity": "high",
      "description": "No published course plan is available for DV2649 in VT32, so the mandatory final course occurrence cannot be reviewed.",
      "recommendation": "Publish the course plan well before students reach the final semester, or replace the occurrence with a thesis course that has a published plan."
    },
    {
      "id": "F-005",
      "seq": 35,
      "course": "SL2564",
      "semester": "HT30",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan is available for SL2564 in HT30, so the course's prerequisites and expected progression cannot be reviewed.",
      "recommendation": "Publish the course plan or replace the course occurrence with one that has a published plan before students are expected to choose it."
    },
    {
      "id": "F-006",
      "seq": 37,
      "course": "DV2606",
      "semester": "HT30",
      "type": "competence-gap",
      "severity": "medium",
      "description": "The course expects prior C/C++ competence for lab work, but that competence is still unavailable on the guaranteed mandatory path and can only be obtained conditionally through optional earlier study such as the HT29 offering of DV2606.",
      "recommendation": "Either make the required C/C++ preparation explicit and place it in the mandatory path, or adapt the labs so they rely only on guaranteed prior knowledge."
    },
    {
      "id": "F-007",
      "seq": 38,
      "course": "SL2565",
      "semester": "HT30",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan is available for SL2565 in HT30, so the course occurrence cannot be reviewed.",
      "recommendation": "Publish the course plan before students are expected to choose the course, or replace the occurrence with a course that has a published plan."
    },
    {
      "id": "F-008",
      "seq": 41,
      "course": "IY2650",
      "semester": "HT30",
      "type": "elective-dependency",
      "severity": "medium",
      "description": "IY2650 depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure.",
      "recommendation": "Either make IY2649 mandatory for students expected to take IY2650, or state an explicit mandatory equivalent in the program and course plan."
    },
    {
      "id": "F-010",
      "seq": 46,
      "course": "MA2517",
      "semester": "VT31",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan is available for MA2517 in VT31, so the course occurrence cannot be reviewed.",
      "recommendation": "Publish the course plan or replace the occurrence with a course that has a published plan before students are expected to select it."
    },
    {
      "id": "F-011",
      "seq": 50,
      "course": "DV2606",
      "semester": "HT31",
      "type": "competence-gap",
      "severity": "medium",
      "description": "The course still depends on practical C/C++ competence that is available only conditionally through earlier elective study rather than through the guaranteed mandatory path.",
      "recommendation": "Provide guaranteed C/C++ preparation earlier in the program or redesign the labs so they rely only on mandatory prior knowledge."
    },
    {
      "id": "F-012",
      "seq": 51,
      "course": "IY2650",
      "semester": "HT31",
      "type": "elective-dependency",
      "severity": "medium",
      "description": "IY2650 still depends on prior Venture 1 study that is only available through the elective course IY2649 in the program structure.",
      "recommendation": "Make the Venture 1 background mandatory for students expected to take IY2650, or specify a mandatory equivalent course in the course plan and program structure."
    },
    {
      "id": "F-013",
      "seq": 52,
      "course": "SL2565",
      "semester": "HT31",
      "type": "missing-course-plan",
      "severity": "medium",
      "description": "No published course plan is available for SL2565 in HT31, so the course occurrence cannot be reviewed.",
      "recommendation": "Publish the course plan or replace the occurrence with a course that has a published plan before students are expected to select it."
    },
    {
      "id": "F-001",
      "seq": 12,
      "course": "PA1484",
      "semester": "HT28",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "The prerequisite \"6 avklarade hp från kurser i introduktion till ingenjörsarbete/-rollen\" does not identify which earlier course or course code satisfies the requirement.",
      "recommendation": "Name the specific course code or codes, for example the intended earlier introductory engineering/professional-practice course, in the prerequisite text."
    },
    {
      "id": "F-004",
      "seq": 28,
      "course": "DV1688",
      "semester": "VT30",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "The prerequisite phrase \"datorsäkerhet och ingenjörsarbete, 5 hp\" does not identify which earlier course code is intended to satisfy it.",
      "recommendation": "Replace the generic phrase with the specific earlier course code or codes that supply the intended security and engineering-project background."
    }
  ]
}
```
