---
report_schema: qulrica/program-prerequisite-qa@1
program_name: "Webbprogrammering"
program_code: PAGWG
program_start: HT27
program_hp: 120
program_url: https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5
harness: codex
model: gpt-5.4
report_date: 2026-10-21
courses_reviewed: 15
courses_in_program: 15
verdicts: { OK: 14, CONDITIONAL: 0, GAP: 1, UNCLEAR: 0 }
findings: { high: 1, medium: 0, low: 3 }
---

# Prerequisite QA: Webbprogrammering (PAGWG, HT27)

| | |
|---|---|
| Program | Webbprogrammering, 120 hp |
| Program code / start | PAGWG / HT27 |
| Source | https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5 |
| Reviewed by | harness `codex`, model `gpt-5.4` |
| Date | 2026-10-21 (course plans fetched 2026-10-21) |
| Course occurrences | 15 (15 mandatory, 0 elective) |

## 1. Summary

Question asked of every course: *Can a student with the skills, knowledge and dispositions obtained in the program so far (guaranteed = mandatory courses) plus upper-secondary education complete this course, judging from its course plan?*

| Verdict | Courses | Meaning |
|----|---|-------------------------------|
| OK | 14 | Everything the course assumes is guaranteed by earlier mandatory courses or upper-secondary education |
| CONDITIONAL | 0 | Only works if the student chose a particular elective, or a prerequisite is concurrent |
| GAP | 1 | Something the course requires/assumes is provided nowhere before it |
| UNCLEAR | 0 | The plan is missing, ambiguous or too thin to judge |

| # | Semester | Course | Type | Verdict | Confidence | Headline |
|--|----|-------|-----|------|-----|------------------------|
| 13 | VT29 | [DV1709 Driftsättning av webbtjänster på Linux server](#13-dv1709) | mandatory | **GAP** | high | DV1709 assumes prior knowledge in Git and Docker in section 2.2, but earlier mandatory courses do not explicitly provide Git and provide no Docker competence at all before the course starts. |

## 2. Findings

| ID | Severity | Course | Semester | Type | Description | Recommendation |
|---|----|----|----|------|--------------------|--------------------|
| F-004 | high | DV1709 | VT29 | competence-gap | DV1709 assumes prior knowledge in Git and Docker in section 2.2, but earlier mandatory courses do not explicitly provide Git and provide no Docker competence at all before the course starts. | Either introduce Git and Docker explicitly in earlier mandatory courses, or revise DV1709 so those tools are taught from scratch rather than assumed as prior knowledge. |
| F-001 | low | DV1705 | HT27 | ambiguous-requirement | DV1705 requires "genomgången kurs i webbprogrammering, 7,5 hp" without naming the actual prior course code, even though DV1704 is the obvious intended match in the program. | Replace the generic wording with the exact course code, or an explicitly defined subject/credit combination, in the prerequisite text. |
| F-002 | low | DV1706 | VT28 | ambiguous-requirement | DV1706 requires "kurser i webbprogrammering, 15 hp" without naming the actual earlier courses, even though DV1704 and DV1705 are the clear intended matches in the program. | State the exact course codes, or define the required prior web-programming content more explicitly, in the prerequisite text. |
| F-003 | low | DV1707 | VT28 | ambiguous-requirement | DV1707 uses the generic prerequisite wording "kurser i webbprogrammering, 15 hp" instead of naming the actual earlier courses that satisfy it in the program. | Name the relevant course codes or define the expected prior web-programming content explicitly in the prerequisite section. |

## 3. Review by semester

### HT27

#### 1. DV1670 Programmering och problemlösning med Python - OK
<a id="1-dv1670"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 34 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6RTU&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is an introductory Python course with only general entry requirements and no assumed university-level prior knowledge beyond upper-secondary education.

The plan states only "Grundläggande behörighet". The content starts with "en grundkurs i programmering" and introduces variables, conditionals, loops, functions, debugging and the development environment, so the course itself teaches the relevant starting competences. No earlier university course is required before HT27 period 1.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | The prerequisite section states only "Grundläggande behörighet", which is verified through admission rather than prior program courses. |

#### 2. DV1704 Webbteknologier - OK
<a id="2-dv1704"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 34 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BHLKK&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is an introductory web-technology course with only general entry requirements and it introduces the HTML, CSS and JavaScript foundations it then examines.

The prerequisite section states only "Grundläggande behörighet". The course content itself introduces HTML, CSS, JavaScript in the browser, DOM, event-driven programming and development tools, and the learning outcomes ask for basic knowledge of web technologies and the ability to develop a website from a specification. No earlier university course is required before HT27 period 1.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | The prerequisite section states only "Grundläggande behörighet", which is verified through admission rather than prior program courses. |

#### 3. DV1701 Objektorienterad programmering i CSharp - OK
<a id="3-dv1701"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BP4UM&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1670 provides the required 7.5 hp of programming and the C#-specific object-oriented content is introduced within the course itself.

The formal prerequisite is "genomgången kurs i programmering om 7,5 hp". Before HT27 period 2, the student has completed DV1670 (7.5 hp, mandatory), whose plan says it teaches "strukturerad programmering och problemlösning" in Python and that the student can "utveckla en lösning i Python, utifrån en specifikation". DV1701 then introduces the new material it depends on, including C# syntax, object-oriented programming, UML and unit testing.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i programmering om 7,5 hp | course | MET | DV1670 is a guaranteed earlier mandatory course worth 7.5 hp. Its plan states that the student can "Påvisa grundläggande kunskaper i att lösa definierade problem via programmering i Python" and "Utveckla en lösning i Python, utifrån en specifikation". |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic programming and problem solving | COVERED | DV1670 | DV1701 builds on prior programming. DV1670 states that the student can solve defined problems through programming in Python and develop a solution from a specification. |
| Use of development and debugging tools | COVERED | DV1670 | DV1701 includes C# development tools, and DV1670 already requires that the student has "god praktisk förmåga att hantera de verktyg och utvecklingsmiljöer som används vid utveckling och felsökningar". |

#### 4. DV1705 UX-design med JavaScript - OK
<a id="4-dv1705"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGJW9&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1704 clearly provides the earlier 7.5 hp of web programming the plan intends, even though the prerequisite wording should be more precise.

The formal prerequisite is "genomgången kurs i webbprogrammering, 7,5 hp". Before HT27 period 2, the student has completed DV1704 (7.5 hp, mandatory), which covers HTML, CSS, JavaScript, DOM and development of web applications in the browser, and its learning outcomes include independently developing and deploying a website from a specification. That is a clear match for the intended prior web-programming competence. DV1705 then adds the new design and accessibility emphasis itself.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i webbprogrammering, 7,5 hp | course | MET | DV1704 is a guaranteed earlier mandatory course worth 7.5 hp. Its content includes HTML, CSS, JavaScript, DOM and web applications, and its learning outcomes say the student can "självständigt, utefter en specifikation, kunna utveckla och driftsätta en webbplats med givna webbteknologier". |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic HTML, CSS and JavaScript web development | COVERED | DV1704 | DV1705 assumes prior client-side web work. DV1704 covers HTML, CSS and JavaScript in the browser and states that the student can develop and deploy a website using given web technologies. |
| Use of browser-based development tools and environments | COVERED | DV1704 | DV1705 requires continued practical work with client-based web techniques, and DV1704 states that the student can handle the tools and environments used for developing websites and web applications. |

Findings: F-001

### VT28

#### 5. DV1703 Databasteknik - OK
<a id="5-dv1703"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYTCJ&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student already has more than the required 7.5 hp of programming and the database-specific theory and SQL work are introduced in this course.

The formal prerequisite is "7,5 genomgångna hp i programmering". Before VT28 period 3, the student has completed four mandatory courses including DV1670 and DV1701, which together provide substantially more than 7.5 hp of programming. The course then introduces the new material it depends on, such as relationsdatabaser, ER-modellering, SQL, transactions and database performance.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 7,5 genomgångna hp i programmering | credits | MET | Before this course starts, the ledger guarantees 30 hp from mandatory earlier courses. DV1670 and DV1701 are both programming courses and already exceed the stated 7.5 hp requirement. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming and problem solving | COVERED | DV1670 | DV1703 requires programming to build database applications. DV1670 says the student can solve defined problems by programming in Python and develop a solution from a specification. |
| Object-oriented programming for application development | COVERED | DV1701 | DV1703 includes "objektorienterade programmeringstekniker" for terminal-based database applications. DV1701 states that the student can develop an object-oriented C# program from a specification and analyze and design such a solution with UML. |

#### 6. DV1706 Webbapplikationer för mobila enheter - OK
<a id="6-dv1706"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BY4U4&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1704 and DV1705 together provide the intended 15 hp of prior web programming, even though the prerequisite wording should name them more precisely.

The formal prerequisite is "genomgångna kurser i webbprogrammering, 15 hp". Before VT28 period 3, the student has completed DV1704 and DV1705, two mandatory 7.5 hp courses that together cover client-side web development with HTML, CSS, JavaScript, DOM, accessibility and development environments. That clearly satisfies the intended 15 hp web-programming background for a more advanced mobile-web course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgångna kurser i webbprogrammering, 15 hp | credits | MET | DV1704 (7.5 hp) and DV1705 (7.5 hp) are guaranteed earlier mandatory courses. Their plans cover HTML, CSS, JavaScript, DOM, web applications, usability and accessibility, which together match 15 hp in prior web programming. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Client-side web development with HTML, CSS and JavaScript | COVERED | DV1704, DV1705 | DV1706 builds on mobile-focused HTML5, CSS3 and JavaScript. DV1704 teaches HTML, CSS and JavaScript in the browser, and DV1705 requires the student to apply JavaScript, HTML and CSS broadly and deeply. |
| Responsive and accessibility-aware web design | COVERED | DV1705 | DV1706 includes mobile responsiveness and accessibility. DV1705 covers "tillgänglighetsanpassning" and requires the student to develop a "användbar och tillgänglig webbapplikation". |
| Use of tools and environments for web development and debugging | COVERED | DV1704, DV1705 | DV1706 expects continued practical work with debugging and development tools. Both DV1704 and DV1705 include learning outcomes about handling tools and development environments for web applications. |

Findings: F-002

#### 7. DV1702 Algoritmer och datastrukturer - OK
<a id="7-dv1702"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYEGU&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the program already guarantees 15 hp of programming including 7.5 hp of object-oriented programming in CSharp before the course starts.

The formal prerequisite is "genomgångna kurser i programmering motsvarande 15 hp varav 7,5 hp ska vara i objektorienterad programmering med CSharp". Before VT28 period 4, the student has completed DV1670 (programming, 7.5 hp) and DV1701 (object-oriented programming in C#, 7.5 hp), which exactly match the stated requirement. The algorithm and data-structure material itself is introduced in DV1702.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Kurser i programmering motsvarande 15 hp | credits | MET | DV1670 and DV1701 are guaranteed earlier mandatory programming courses worth 7.5 hp each, giving 15 hp before DV1702 starts. |
| 7,5 hp i objektorienterad programmering med CSharp | course | MET | DV1701 is a guaranteed earlier mandatory course in object-oriented programming in C#. Its plan states that the student can develop an object-oriented C# program and analyze and design an object-oriented solution with UML. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming and problem solving | COVERED | DV1670 | DV1702 assumes prior programming ability. DV1670 says the student can solve defined problems through programming in Python and develop a solution from a specification. |
| Object-oriented programming in C# | COVERED | DV1701 | DV1702 explicitly requires object-oriented programming with C#. DV1701 covers classes, objects, inheritance, composition, polymorphism, interfaces and development of an object-oriented C# program. |

#### 8. DV1707 Projekt webbprogrammering frontend - OK
<a id="8-dv1707"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BXXUY&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has the intended 15 hp of prior web programming from DV1704 and DV1705, plus further mobile and API experience from DV1706 before the project course starts.

The formal prerequisite is "genomgångna kurser i webbprogrammering, 15 hp". Before VT28 period 4, the student has completed DV1704 and DV1705, which together supply 15 hp of web programming, and also DV1706, which adds RESTful APIs, mobile adaptation and web sockets. That is a strong fit for a frontend project course focused on modern web applications, API integration and collaboration in teams.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgångna kurser i webbprogrammering, 15 hp | credits | MET | DV1704 (7.5 hp) and DV1705 (7.5 hp) are guaranteed earlier mandatory courses in web development, together satisfying 15 hp of prior web programming before DV1707 starts. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Frontend web development with HTML, CSS and JavaScript | COVERED | DV1704, DV1705 | DV1707 requires development of a responsive web application. DV1704 teaches HTML, CSS and JavaScript, and DV1705 requires the student to develop a usable and accessible web application with these technologies. |
| Integration of REST APIs in web applications | COVERED | DV1706 | DV1707 includes "Datahantering och integration av REST API:er". DV1706 requires that the student can develop a mobile app based on "RESTful API:er" and web APIs. |
| Working from a requirements specification in a larger web-development assignment | COVERED | DV1705 | DV1707 is based on a given specification. DV1705 already requires the student to independently develop, document and present a web application "utifrån en kravspecifikation". |

Findings: F-003

### HT28

#### 9. PA1493 Mjukvaruutvecklingsprojekt - OK
<a id="9-pa1493"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BAQ7H&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence medium)

**Answer:** Yes, because the student already has far more than 15 hp of programming and also reaches the course with prior experience of project-based web development from DV1707.

The formal prerequisite is "15 avklarade hp i programmering". Before HT28 period 1, the ledger guarantees 60 hp from mandatory earlier courses, including several programming courses. For the practical project work, the student also comes from DV1707, where the plan requires designing, developing and delivering a complete web application in a team based on a specification. PA1493 introduces the new material on customer communication, agile methods and project planning in its own content.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 15 avklarade hp i programmering | credits | MET | Before this course starts, the ledger guarantees 60 hp from mandatory earlier courses. Programming is already covered by DV1670, DV1701, DV1703, DV1706 and DV1702, so the stated 15 hp threshold is clearly exceeded. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Programming proficiency sufficient to implement a smaller software solution | COVERED | DV1701, DV1702 | PA1493 requires implementing a software application. DV1701 requires development of an object-oriented C# program from a specification, and DV1702 requires choosing and implementing data structures and algorithms. |
| Working from requirements and delivering a project outcome | COVERED | DV1707 | PA1493 is a project course with customer-oriented requirements work. DV1707 already requires the student to develop and deliver a complete working web application based on a requirements specification. |
| Teamwork and critical reflection on technical solutions | COVERED | DV1707 | DV1707 states that the student can explain methods for effective teamwork and critically review another group's technical solution, which supports the collaborative project setting in PA1493. |

#### 10. DV1711 Programmering med JavaScript och Node - OK
<a id="10-dv1711"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BWM6J&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the program guarantees well over 15 hp of programming before HT28 period 1 and the course’s new Node.js-specific material is introduced within the course.

The formal prerequisite is "avklarade kurser motsvarande 15 hp i programmering". Before HT28 period 1, the student has 60 guaranteed hp from earlier mandatory courses, including several programming courses. The course content then introduces Node.js, client/server concepts, REST APIs with database connections, workers, HTTP and WebSocket programming, so the platform-specific knowledge is taught in the course itself.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser motsvarande 15 hp i programmering | credits | MET | The ledger guarantees 60 hp before the course starts. DV1670, DV1701, DV1703, DV1706 and DV1702 all contribute programming content, so the 15 hp programming threshold is clearly met. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming ability | COVERED | DV1670, DV1701 | DV1711 assumes prior programming practice. DV1670 and DV1701 together require the student to solve problems through programming and to develop an object-oriented C# program from a specification. |
| JavaScript-based web programming | COVERED | DV1704, DV1705, DV1706 | DV1711 teaches JavaScript with Node.js. DV1704 introduces JavaScript in the browser, DV1705 requires broad and deep use of JavaScript, HTML and CSS, and DV1706 extends JavaScript work to RESTful APIs and web sockets. |
| Database and API context for server-side work | COVERED | DV1703, DV1706 | DV1711 includes server programming with REST API and database connection. DV1703 provides relational database and SQL competence, while DV1706 requires work with RESTful APIs. |

#### 11. MA1507 Diskret matematik och algoritmer - OK
<a id="11-ma1507"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BE9XR&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the only stated prerequisite is upper-secondary mathematics and the course introduces the discrete-mathematics content it then examines.

The prerequisite is "Matematik 3b alt 3c eller Matematik C", which is upper-secondary knowledge verified in admission. The course content introduces discrete mathematics topics such as set theory, arithmetic, induction, combinatorics, logic, graphs and automata, so no earlier university mathematics course is required from the program itself.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Matematik 3b alt 3c eller Matematik C | upper-secondary | MET | The prerequisite is explicitly an upper-secondary mathematics qualification, which is verified in admission rather than through prior program courses. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Upper-secondary mathematics fluency | UPPER_SECONDARY | - | The plan explicitly bases entry on "Matematik 3b alt 3c eller Matematik C", so the relevant prior competence is expected from gymnasium rather than from the program. |

#### 12. DV1708 Webbprogrammering backend - OK
<a id="12-dv1708"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGLJX&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the formal 15 hp programming requirement is clearly met and the student also reaches the course with relevant prior web and database competence.

The formal prerequisite is "avklarade kurser motsvarande 15 hp i programmering". Before HT28 period 2, the ledger guarantees 75 hp from earlier mandatory courses, easily exceeding that threshold. The course content assumes backend web-development context such as RESTful APIs, server-side rendering, authentication and database connections, and the program already provides web programming through DV1704, DV1705, DV1706 and DV1707 plus database competence through DV1703.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser motsvarande 15 hp i programmering | credits | MET | The ledger guarantees 75 hp before the course starts. Earlier mandatory programming-heavy courses clearly exceed the required 15 hp in programming. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| General programming proficiency | COVERED | DV1701, DV1702 | DV1708 requires backend programming in frameworks. DV1701 requires development of an object-oriented C# program, and DV1702 requires implementation and use of abstract data types and algorithms. |
| Web-development fundamentals on the client side | COVERED | DV1704, DV1705, DV1706 | DV1708 builds web services and websites. DV1704 and DV1705 provide HTML/CSS/JavaScript and web-application development, and DV1706 adds RESTful APIs and web-socket-based web-app work. |
| Database fundamentals for backend systems | COVERED | DV1703 | DV1708 includes "Koppling till databaser". DV1703 requires that the student can understand and use relational databases, model a database with ER, and create and use a database with SQL. |

### VT29

#### 13. DV1709 Driftsättning av webbtjänster på Linux server - GAP
<a id="13-dv1709"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 12 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BEK4F&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **GAP** (confidence high)

**Answer:** No, because although the formal programming requirement is met, the course plan also assumes prior knowledge in Git and Docker and that prior Docker competence is not provided anywhere earlier in the mandatory program.

The formal eligibility requirement of at least 15 passed hp in programming is satisfied well before VT29 period 3. The separate section "2.2 Förutsatta kunskaper" then says that the student must be able to work with web applications and web services with REST APIs, JavaScript and databases, have a good understanding of design patterns, and have knowledge in Git and Docker. The earlier mandatory curriculum covers the web/API/database and design-pattern parts through courses such as DV1711, DV1708 and DV1703, but no earlier plan explicitly teaches Docker, and earlier plans mention only generic "Versionshantering" rather than Git specifically. That leaves a real competence gap for a mandatory course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Minst 15 avklarade hp i programmering | credits | MET | Before this course starts, the ledger guarantees 90 hp from earlier mandatory courses, including multiple programming courses, so the formal 15 hp programming threshold is comfortably met. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Web applications and web services with JavaScript, REST APIs and databases | COVERED | DV1703, DV1706, DV1711, DV1708 | DV1709 2.2 requires work with web applications and web services using JavaScript and databases. DV1703 gives relational databases and SQL, DV1706 requires use of RESTful APIs, DV1711 covers server programming with REST API and database connection, and DV1708 covers RESTful APIs and database connections in backend web development. |
| Design-pattern understanding for web services | COVERED | DV1708 | DV1709 2.2 requires "god förståelse för designmönster". DV1708 explicitly includes "Designmönster Model View Controller (MVC)" and states that the student can demonstrate good knowledge of techniques and design patterns related to web-service development. |
| Git knowledge | UNVERIFIABLE | - | DV1709 2.2 names "Git" specifically. Earlier mandatory plans mention only generic "Versionshantering" in DV1707 and do not explicitly state Git in learning outcomes or prerequisite text, so the specific Git competence cannot be verified from the prior plans. |
| Docker knowledge | NOT_COVERED | - | DV1709 2.2 requires "Docker", but no earlier mandatory course plan in the program mentions Docker at all. DV1709 itself introduces "docker och docker compose" in its content, which reinforces that the competence is not provided earlier. |

Findings: F-004

#### 14. PA1438 Självständigt arbete i Webbprogrammering - OK
<a id="14-pa1438"></a>

- 15 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B9CKH&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence medium)

**Answer:** Yes, because the formal 60 hp requirement is exceeded before the course starts and the student reaches the thesis with broad prior web-programming, project and reporting experience from the earlier mandatory courses.

The formal prerequisite is "60 hp avklarade på programmet Webbprogrammering". Before VT29 period 3, the ledger guarantees 90 hp from earlier mandatory courses, so the credit threshold is met with margin. The course then asks the student to integrate and deepen earlier knowledge within web programming in an independent project and report. Earlier mandatory courses provide broad web-programming competence and project/reporting practice, especially DV1707, PA1493, DV1708 and DV1711.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade på programmet Webbprogrammering | credits | MET | Before this course starts, the ledger guarantees 90 hp from earlier mandatory courses in the program, which exceeds the stated 60 hp requirement. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Broad technical competence in web programming | COVERED | DV1707, DV1708, DV1711 | PA1438 is an independent thesis within web programming. DV1707 requires delivery of a complete web application, DV1708 gives backend web-service competence, and DV1711 adds Node.js, client/server and REST/database work. |
| Project planning, documentation and professional reporting | COVERED | PA1493 | PA1438 requires project planning and a written report. PA1493 includes requirement handling, customer communication, documentation, project work and a separate report examination. |
| Critical reflection on technical solutions and collaborative project work | COVERED | DV1707, PA1493 | PA1438 requires independent judgment and discussion of results. DV1707 includes critical review of another group's technical solution and teamwork methods, and PA1493 requires reflection on project progress and professional decisions. |

#### 15. DV1710 Projekt webbprogrammering fullstack - OK
<a id="15-dv1710"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B9TTF&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the formal 15 hp programming requirement is easily met and the stated assumed knowledge in object-oriented principles and simpler web systems is covered by earlier frontend, backend and programming courses.

The formal eligibility requirement is "minst 15 avklarade hp i programmering", which is clearly satisfied before VT29 period 4. Section 2.2 also assumes the student can handle simpler program constructions including object-oriented concepts and simpler web-based services and systems in both UI and backend logic. Earlier mandatory courses cover those areas: DV1701 provides object-oriented programming, DV1704-DV1707 provide frontend web-development competence, DV1708 and DV1711 provide backend services, and DV1709 adds deployment-oriented teamwork tools immediately before this course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Minst 15 avklarade hp i programmering | credits | MET | Before this course starts, the ledger guarantees 97.5 hp from earlier mandatory courses, including several programming-heavy courses, so the 15 hp programming threshold is fully met. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Object-oriented programming principles and concepts | COVERED | DV1701 | DV1710 2.2 explicitly assumes object-oriented principles and concepts. DV1701 covers classes, objects, encapsulation, inheritance, composition, polymorphism and interfaces. |
| Frontend web development and user-interface logic | COVERED | DV1705, DV1707 | DV1710 2.2 assumes simpler web-based systems in the user interface. DV1705 requires the student to develop a usable and accessible web application, and DV1707 requires delivery of a complete frontend-focused web application from a specification. |
| Backend services and underlying application logic | COVERED | DV1708, DV1711 | DV1710 2.2 assumes simpler web services and backend logic. DV1708 covers backend web services, MVC, RESTful APIs and database connections, and DV1711 covers Node.js, client/server programming and REST API with database connection. |
| Team-based workflows with versioning, integration and deployment | COVERED | DV1707, DV1709 | DV1710 focuses on fullstack teamwork and modern workflows. DV1707 includes version control, continuous integration and deployment in its content and teamwork methods in its outcomes, and DV1709 then adds deployment and DevOps-oriented practice before DV1710 starts. |

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
    "code": "PAGWG",
    "name": "Webbprogrammering",
    "start": "HT27",
    "url": "https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5"
  },
  "harness": "codex",
  "model": "gpt-5.4",
  "date": "2026-10-21",
  "verdicts": {
    "OK": 14,
    "CONDITIONAL": 0,
    "GAP": 1,
    "UNCLEAR": 0
  },
  "courses": [
    {
      "seq": 1,
      "code": "DV1670",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 2,
      "code": "DV1704",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 3,
      "code": "DV1701",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 4,
      "code": "DV1705",
      "semester": "HT27",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 5,
      "code": "DV1703",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 6,
      "code": "DV1706",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 7,
      "code": "DV1702",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 8,
      "code": "DV1707",
      "semester": "VT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 9,
      "code": "PA1493",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "medium"
    },
    {
      "seq": 10,
      "code": "DV1711",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 11,
      "code": "MA1507",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 12,
      "code": "DV1708",
      "semester": "HT28",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    },
    {
      "seq": 13,
      "code": "DV1709",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "GAP",
      "confidence": "high"
    },
    {
      "seq": 14,
      "code": "PA1438",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "medium"
    },
    {
      "seq": 15,
      "code": "DV1710",
      "semester": "VT29",
      "type": "mandatory",
      "verdict": "OK",
      "confidence": "high"
    }
  ],
  "findings": [
    {
      "id": "F-004",
      "seq": 13,
      "course": "DV1709",
      "semester": "VT29",
      "type": "competence-gap",
      "severity": "high",
      "description": "DV1709 assumes prior knowledge in Git and Docker in section 2.2, but earlier mandatory courses do not explicitly provide Git and provide no Docker competence at all before the course starts.",
      "recommendation": "Either introduce Git and Docker explicitly in earlier mandatory courses, or revise DV1709 so those tools are taught from scratch rather than assumed as prior knowledge."
    },
    {
      "id": "F-001",
      "seq": 4,
      "course": "DV1705",
      "semester": "HT27",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "DV1705 requires \"genomgången kurs i webbprogrammering, 7,5 hp\" without naming the actual prior course code, even though DV1704 is the obvious intended match in the program.",
      "recommendation": "Replace the generic wording with the exact course code, or an explicitly defined subject/credit combination, in the prerequisite text."
    },
    {
      "id": "F-002",
      "seq": 6,
      "course": "DV1706",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "DV1706 requires \"kurser i webbprogrammering, 15 hp\" without naming the actual earlier courses, even though DV1704 and DV1705 are the clear intended matches in the program.",
      "recommendation": "State the exact course codes, or define the required prior web-programming content more explicitly, in the prerequisite text."
    },
    {
      "id": "F-003",
      "seq": 8,
      "course": "DV1707",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "DV1707 uses the generic prerequisite wording \"kurser i webbprogrammering, 15 hp\" instead of naming the actual earlier courses that satisfy it in the program.",
      "recommendation": "Name the relevant course codes or define the expected prior web-programming content explicitly in the prerequisite section."
    }
  ]
}
```
