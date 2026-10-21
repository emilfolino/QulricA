---
report_schema: qulrica/program-prerequisite-qa@1
program_name: "Webbprogrammering"
program_code: PAGWG
program_start: HT27
program_hp: 120
program_url: https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5
harness: claude-code
model: claude-sonnet-5-5
report_date: 2026-10-21
courses_reviewed: 15
courses_in_program: 15
verdicts: { OK: 13, CONDITIONAL: 0, GAP: 2, UNCLEAR: 0 }
findings: { high: 1, medium: 1, low: 3 }
---

# Prerequisite QA: Webbprogrammering (PAGWG, HT27)

| | |
|---|---|
| Program | Webbprogrammering, 120 hp |
| Program code / start | PAGWG / HT27 |
| Source | https://plan.bth.se/programmes/918bd1a0-43bf-11f1-9bfb-c8fd9ca940c5 |
| Reviewed by | harness `claude-code`, model `claude-sonnet-5-5` |
| Date | 2026-10-21 (course plans fetched 2026-10-21) |
| Course occurrences | 15 (15 mandatory, 0 elective) |

## 1. Summary

Question asked of every course: *Can a student with the skills, knowledge and dispositions obtained in the program so far (guaranteed = mandatory courses) plus upper-secondary education complete this course, judging from its course plan?*

| Verdict | Courses | Meaning |
|----|---|-------------------------------|
| OK | 13 | Everything the course assumes is guaranteed by earlier mandatory courses or upper-secondary education |
| CONDITIONAL | 0 | Only works if the student chose a particular elective, or a prerequisite is concurrent |
| GAP | 2 | Something the course requires/assumes is provided nowhere before it |
| UNCLEAR | 0 | The plan is missing, ambiguous or too thin to judge |

| # | Semester | Course | Type | Verdict | Confidence | Headline |
|--|----|-------|-----|------|-----|------------------------|
| 13 | VT29 | [DV1709 Driftsättning av webbtjänster på Linux server](#13-dv1709) | mandatory | **GAP** | high | DV1709 'Förutsatta kunskaper' require knowledge of Docker (and Git), but no earlier mandatory course teaches Docker, and Git is only implicit in DV1707's 'Versionshantering'. DV1709 itself lists Docker/docker compose as course content, so the plan contradicts itself. |
| 14 | VT29 | [PA1438 Självständigt arbete i Webbprogrammering](#14-pa1438) | mandatory | **GAP** | medium | The thesis outcomes assume scientific foundation, literature search/critical source evaluation and report writing, but no mandatory course before PA1438 teaches research methodology or academic writing; only short reflections occur in DV1705 and PA1493. |

## 2. Findings

| ID | Severity | Course | Semester | Type | Description | Recommendation |
|---|----|----|----|------|--------------------|--------------------|
| F-004 | high | DV1709 | VT29 | competence-gap | DV1709 'Förutsatta kunskaper' require knowledge of Docker (and Git), but no earlier mandatory course teaches Docker, and Git is only implicit in DV1707's 'Versionshantering'. DV1709 itself lists Docker/docker compose as course content, so the plan contradicts itself. | Either remove Docker from the assumed knowledge in DV1709 (since the course teaches it), or add Docker to an earlier course (e.g. DV1708 or DV1711); also name Git explicitly in DV1707 or an earlier course. |
| F-005 | medium | PA1438 | VT29 | competence-gap | The thesis outcomes assume scientific foundation, literature search/critical source evaluation and report writing, but no mandatory course before PA1438 teaches research methodology or academic writing; only short reflections occur in DV1705 and PA1493. | Add content on scientific method, source criticism and technical report writing to an earlier mandatory course (e.g. PA1493) or add a short module/course before the thesis. |
| F-001 | low | DV1705 | HT27 | ambiguous-requirement | The prerequisite 'kurs i webbprogrammering, 7,5 hp' does not name a course; the matching course is DV1704 Webbteknologier. | State the prerequisite as course code DV1704 (or its equivalent) in the plan. |
| F-002 | low | DV1706 | VT28 | ambiguous-requirement | The prerequisite 'kurser i webbprogrammering, 15 hp' names no course codes; it is satisfied by DV1704 + DV1705 by content only. | Name DV1704 and DV1705 explicitly in the prerequisite. |
| F-003 | low | DV1707 | VT28 | other | DV1707 lists 'Versionshantering, kontinuerlig integration och driftsättning' and group project methodology as content, but no earlier course in the program (HT27-VT28 period 3) introduces version control or CI; it is unclear whether the course teaches them or assumes them. | State in the DV1707 plan whether version control/CI are taught or assumed, and if assumed, add an introduction to git in an earlier course (e.g. DV1670 or DV1701). |

## 3. Review by semester

### HT27

#### 1. DV1670 Programmering och problemlösning med Python - OK
<a id="1-dv1670"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 34 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B6RTU&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the course is an introductory programming course that only requires grundläggande behörighet.

The plan states 'Grundläggande behörighet' and describes 'en grundkurs i programmering' starting from simple constructs. Nothing in the content or outcomes presupposes prior university-level knowledge.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | Section 2 of DV1670 states only 'Grundläggande behörighet'; verified by admission. |

#### 2. DV1704 Webbteknologier - OK
<a id="2-dv1704"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 34 (2027) - Vecka 43 (2027))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BHLKK&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because it is an introductory web technology course that requires only grundläggande behörighet and teaches JavaScript basics itself.

The plan states 'Grundläggande behörighet'. The content starts from HTML/CSS and introduces JavaScript 'med variabler, villkor, loopar och funktioner', so no prior programming is presupposed even though DV1670 runs concurrently.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Grundläggande behörighet | upper-secondary | MET | Section 2 of DV1704 states only 'Grundläggande behörighet'. |

#### 3. DV1701 Objektorienterad programmering i CSharp - OK
<a id="3-dv1701"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BP4UM&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1670 (7.5 hp programming) finishes before DV1701 starts and the content builds on basic programming.

The plan requires 'genomgången kurs i programmering om 7,5 hp'. DV1670 (mandatory, HT27 period 1, 7.5 hp) is a programming course finishing before DV1701 in period 2. UML and unit testing are introduced within DV1701 itself.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i programmering om 7,5 hp | course | MET | DV1670 Programmering och problemlösning med Python (7.5 hp, HT27 period 1, mandatory) is a programming course of exactly 7.5 hp and is finished before DV1701 starts. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Basic programming constructs (variables, conditionals, loops, functions, file handling, error handling) | COVERED | DV1670 | DV1701 content 'variabler, metoder, datatyper... villkor, loopar... felhantering' is moved to C# syntax; DV1670 teaches these concepts in Python. |

#### 4. DV1705 UX-design med JavaScript - OK
<a id="4-dv1705"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2027) - Vecka 2 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGJW9&semester=20272&lang=sv
- Guaranteed hp before start: 0 (max 0 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1704 (7.5 hp web technologies with HTML, CSS and JavaScript) finishes before DV1705 starts.

The plan requires 'genomgången kurs i webbprogrammering, 7,5 hp'. No course is titled that, but DV1704 Webbteknologier (7.5 hp, period 1) is the only course matching by content. DV1705 builds on HTML/CSS/DOM with deeper JavaScript, which DV1704 provides. The wording is imprecise only in naming.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgången kurs i webbprogrammering, 7,5 hp | course | MET | DV1704 Webbteknologier (7.5 hp, HT27 period 1, mandatory) covers HTML, CSS and JavaScript in the browser incl. DOM; it finishes before DV1705 in period 2. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| HTML, CSS and basic JavaScript/DOM | COVERED | DV1704 | DV1705 outcome 'visa breda och djupa kunskaper i att använda JavaScript, HTML och CSS' builds on the basics taught in DV1704. |

Findings: F-001

### VT28

#### 5. DV1703 Databasteknik - OK
<a id="5-dv1703"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYTCJ&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has 30 hp of programming from HT27 including object-oriented C# programming.

The plan requires '7,5 genomgångna hp i programmering'; DV1670 and DV1701 (each 7.5 hp, programming) are guaranteed. The course uses 'objektorienterade programmeringstekniker' for terminal database applications, which DV1701 provides. Database theory, ER modelling and SQL are introduced in the course itself.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 7,5 genomgångna hp i programmering | credits | MET | DV1670 (7.5 hp, Python) and DV1701 (7.5 hp, C# OOP), both mandatory HT27, are programming courses and count toward Datavetenskap/Programvaruteknik: 30 hp guaranteed in total. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Object-oriented programming for a terminal-based database application | COVERED | DV1701 | Content 'Programmering av terminalbaserade applikationer för databaser, med objektorienterade programmeringstekniker'; DV1701 teaches classes, inheritance, terminal I/O in C#. |

#### 6. DV1706 Webbapplikationer för mobila enheter - OK
<a id="6-dv1706"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2028) - Vecka 12 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BY4U4&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1704 and DV1705 together give 15 hp of web programming before this course starts.

The plan requires 'genomgångna kurser i webbprogrammering, 15 hp'. DV1704 (7.5 hp) and DV1705 (7.5 hp), both mandatory in HT27, are the web programming courses and sum to 15 hp. The mobile/REST/web-socket content builds on HTML/CSS/JavaScript/DOM from those courses.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgångna kurser i webbprogrammering, 15 hp | credits | MET | DV1704 Webbteknologier (7.5 hp) + DV1705 UX-design med JavaScript (7.5 hp), both mandatory HT27, = 15 hp of web programming. Matched by content (HTML, CSS, JavaScript, DOM), as no course is literally titled 'webbprogrammering'. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| HTML5, CSS and JavaScript for web applications incl. DOM and responsive layout | COVERED | DV1704, DV1705 | DV1706 content 'HTML5, CSS3, JavaScript med mobilt fokus' and 'Responsiv design' extends DV1704 (media queries, DOM) and DV1705. |
| Accessibility awareness | COVERED | DV1705 | DV1706 covers 'Mobil prestanda och tillgänglighet'; DV1705 teaches accessibility adaptation. |

Findings: F-002

#### 7. DV1702 Algoritmer och datastrukturer - OK
<a id="7-dv1702"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BYEGU&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1670 and DV1701 give 15 hp of programming including 7.5 hp object-oriented C#.

The plan requires 'programmering motsvarande 15 hp varav 7,5 hp ska vara i objektorienterad programmering med CSharp'. DV1701 is exactly the C# OOP course (7.5 hp) and DV1670 adds 7.5 hp Python programming; both are mandatory and finished in HT27. Implementing ADTs 'genom gränssnitt' and building structures 'av klasser' relies on DV1701 outcomes (interfaces, classes).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgångna kurser i programmering motsvarande 15 hp | credits | MET | DV1670 (7.5 hp) + DV1701 (7.5 hp) = 15 hp programming, both mandatory HT27 (DV1704/DV1705/DV1703 add more). |
| Varav 7,5 hp i objektorienterad programmering med CSharp | course | MET | DV1701 Objektorienterad programmering i CSharp (7.5 hp, HT27, mandatory). |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Object-oriented programming with classes and interfaces | COVERED | DV1701 | Outcome 'implementera och använda abstrakta datatyper genom gränssnitt samt konstruera datastrukturer av klasser' builds on DV1701 classes, abstract classes and interfaces. |
| Basic mathematical reasoning for complexity analysis (growth of functions) | UPPER_SECONDARY | - | 'Grundläggande komplexitetsanalys' is introduced in the course; the mathematics needed is at gymnasium level. |
| Arrays/lists, loops and basic algorithmic problem solving | COVERED | DV1670, DV1701 | Search/sort and array-based structures use loops, arrays and lists taught in DV1670 and DV1701. |

#### 8. DV1707 Projekt webbprogrammering frontend - OK
<a id="8-dv1707"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2028) - Vecka 22 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BXXUY&semester=20281&lang=sv
- Guaranteed hp before start: 30 (max 30 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because DV1704, DV1705 and DV1706 provide the web programming, REST and mobile web skills the project builds on.

The plan requires 'genomgångna kurser i webbprogrammering, 15 hp', met by DV1704+DV1705 (and DV1706, finished in period 3). The project content (responsive apps, REST integration, mobile adaptation/PWA) follows DV1706. Version control and CI are listed as course content, so they are treated as taught in the course, but no earlier course introduces them.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Genomgångna kurser i webbprogrammering, 15 hp | credits | MET | DV1704 (7.5 hp) + DV1705 (7.5 hp), mandatory HT27, = 15 hp; DV1706 (7.5 hp, VT28 period 3) adds a further 7.5 hp web programming before DV1707 starts in period 4. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Frontend development with HTML/CSS/JavaScript, responsive design | COVERED | DV1704, DV1705, DV1706 | Content 'Implementation av responsiva webbapplikationer med moderna frontend-tekniker' builds on DV1704/DV1705/DV1706 outcomes. |
| Consuming REST APIs and data handling | COVERED | DV1706 | Content 'Datahantering och integration av REST API:er'; DV1706 teaches RESTful APIs and JSON. |
| Mobile adaptation of web apps (progressive web applications) | COVERED | DV1706 | Content 'Mobilanpassning med tekniker för progressiva webbapplikationer'; DV1706 teaches mobile web apps. |
| Accessibility and usability in web design | COVERED | DV1705 | A complete web application delivered from a specification should be usable and accessible as practised in DV1705. |

Findings: F-003

### HT28

#### 9. PA1493 Mjukvaruutvecklingsprojekt - OK
<a id="9-pa1493"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BAQ7H&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has 60 hp, of which well over 15 hp programming, and prior project and design experience.

The plan requires '15 avklarade hp i programmering'; DV1670, DV1701 and others give far more guaranteed. The customer project builds on teamwork and specification-driven development from DV1707, OO design/testing from DV1701 and web development from DV1704-DV1706. Agile methods and requirements handling are introduced in the course itself.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 15 avklarade hp i programmering | credits | MET | DV1670 + DV1701 = 15 hp programming; with DV1704, DV1705, DV1706, DV1703, DV1702, DV1707 the student has 60 guaranteed hp in Datavetenskap/Programvaruteknik by HT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Implementing and testing a small application from a specification | COVERED | DV1701, DV1707 | Outcome 'Designa och implementera en mindre programvaruapplikation iterativt' builds on DV1701 (OOP, UML, unit tests) and DV1707 (project from specification). |
| Working in a team and reflecting on group work | COVERED | DV1707 | Professional approach to time, tasks and commitments in a project; DV1707 outcomes cover team collaboration and sustainable group work. |
| Reflecting on technical decisions and own code | COVERED | DV1701, DV1705 | DV1701 and DV1705 include critical review of code and written reflection. |

#### 10. DV1711 Programmering med JavaScript och Node - OK
<a id="10-dv1711"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 1 (Vecka 35 (2028) - Vecka 43 (2028))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BWM6J&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has 15 hp or more of programming and the JavaScript, database, REST and testing basics the course uses.

The plan requires 'avklarade kurser motsvarande 15 hp i programmering', met by DV1670 + DV1701 and more. Node.js server programming with REST, database connection, websockets and unit tests builds on JavaScript (DV1704, DV1705), SQL (DV1703), REST/websockets (DV1706) and unit testing (DV1701).

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser motsvarande 15 hp i programmering | credits | MET | DV1670 (7.5 hp) + DV1701 (7.5 hp) = 15 hp; 60 hp guaranteed in Datavetenskap/Programvaruteknik by HT28. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| JavaScript programming | COVERED | DV1704, DV1705 | 'Programmering med JavaScript och Node' presumes JavaScript syntax and DOM-free language use, taught in DV1704 and DV1705. |
| Database access (SQL) for REST API with database connection | COVERED | DV1703 | Content 'Serverprogrammering med REST API med databaskoppling'; DV1703 teaches relational databases and SQL. |
| REST, JSON and websockets | COVERED | DV1706 | Content 'HTTP-protokollet', 'Websocket och realtidsprogrammering'; DV1706 covers RESTful APIs, JSON and web sockets from the client side. |
| Unit testing | COVERED | DV1701 | Content 'Enhetstester med JavaScript'; DV1701 introduces unit testing. |

#### 11. MA1507 Diskret matematik och algoritmer - OK
<a id="11-ma1507"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BE9XR&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the only requirement is upper-secondary mathematics, which the admission process verifies.

The plan requires 'Matematik 3b alt 3c eller Matematik C', an upper-secondary requirement. The course is an introduction to discrete mathematics; recursion and algorithms are met from DV1702 but are introduced here from scratch.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Matematik 3b alt 3c eller Matematik C | upper-secondary | MET | Upper-secondary mathematics requirement verified in admission; not a program course. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Algorithmic thinking and recursion (for the outcome on usefulness and limits of the treated algorithms) | COVERED | DV1702 | Content 'Rekursion och induktion', 'Euklides algoritm'; DV1702 (VT28) teaches algorithms and recursion, though the course does not depend on it. |

#### 12. DV1708 Webbprogrammering backend - OK
<a id="12-dv1708"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 2 (Vecka 44 (2028) - Vecka 2 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BGLJX&semester=20282&lang=sv
- Guaranteed hp before start: 60 (max 60 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has the programming credits and the server-side JavaScript, database and REST background from DV1711, DV1703 and DV1706.

The plan requires 'avklarade kurser motsvarande 15 hp i programmering', met by DV1670 + DV1701 and more. Backend frameworks, REST APIs, realtime web and database connection build on DV1711 (Node, REST, databases, websockets, finished in period 1), DV1703 (SQL) and DV1706. MVC and security are introduced within the course.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Avklarade kurser motsvarande 15 hp i programmering | credits | MET | DV1670 + DV1701 = 15 hp; 75 hp guaranteed (Programvaruteknik 75) by this point. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Server-side programming with REST APIs and database connection in JavaScript/Node | COVERED | DV1711 | DV1711 (HT28 period 1) teaches 'Serverprogrammering med REST API med databaskoppling' and HTTP; DV1708 uses frameworks for the same. |
| SQL and relational databases | COVERED | DV1703 | Content 'Koppling till databaser'; DV1703 teaches relational databases and SQL. |
| Realtime web with websockets | COVERED | DV1706, DV1711 | Content 'Realtidswebb'; websockets taught in DV1706 and DV1711. |
| HTML/CSS and client-side JavaScript for server-rendered views | COVERED | DV1704, DV1705 | Server-side rendering with views and templates produces HTML/CSS as taught in DV1704/DV1705. |

### VT29

#### 13. DV1709 Driftsättning av webbtjänster på Linux server - GAP
<a id="13-dv1709"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 12 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=BEK4F&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **GAP** (confidence high)

**Answer:** Not fully, because the plan assumes Docker knowledge that no earlier course in the program provides, and Git is only thinly covered.

The formal requirement of 15 hp programming is met. However section 2.2 'Förutsatta kunskaper' states the student must have 'kunskap i Git samt Docker', and no course plan before DV1709 mentions Docker or containers (the word appears only in DV1709). Git is not named anywhere either; only DV1707 lists 'Versionshantering'. Web/REST/JavaScript/database/design-pattern knowledge is well covered by DV1706, DV1711, DV1708, DV1703. The plan is also internally inconsistent, since Docker is also listed as course content ('Driftsättning och övervakning med docker och docker compose').

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Minst 15 avklarade hp i programmering | credits | MET | DV1670 + DV1701 = 15 hp programming; 90 hp guaranteed by VT29. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Understand, write and debug web applications and web services with REST APIs, JavaScript and databases | COVERED | DV1711, DV1708, DV1706, DV1703 | 2.2 'förstå, skriva och felsöka webbapplikationer och webbtjänster med REST API:er med JavaScript och databaser': DV1711 (Node REST + DB), DV1708 (RESTful APIs, backend), DV1706 (REST/JSON), DV1703 (SQL). |
| Good understanding of design patterns | COVERED | DV1708 | DV1708 teaches 'Designmönster Model View Controller (MVC)' and design patterns for web services; DV1701 introduces object-oriented design with UML. |
| Knowledge of Git | COVERED | DV1707 | 2.2 requires 'kunskap i Git'. Only DV1707 lists 'Versionshantering, kontinuerlig integration och driftsättning' as content; Git is never named in any earlier plan, so coverage is thin. |
| Knowledge of Docker (containers) | NOT_COVERED | - | 2.2 requires 'kunskap i ... Docker'. No earlier plan (DV1670-DV1708, MA1507, PA1493) mentions Docker or containers; the term first appears in DV1709's own content. |

Findings: F-004

#### 14. PA1438 Självständigt arbete i Webbprogrammering - GAP
<a id="14-pa1438"></a>

- 15 hp, mandatory, Grundnivå, läsperiod 3 (Vecka 3 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B9CKH&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **GAP** (confidence medium)

**Answer:** Formally yes, but the program gives no instruction in scientific method, literature search or report writing that the thesis outcomes rely on.

The credit requirement '60 hp avklarade på programmet Webbprogrammering' is met (90 hp guaranteed). The technical content is well covered by DV1704-DV1711 and PA1493 (customer project, agile, requirements, reflection). But outcomes such as 'kännedom om områdets vetenskapliga grund', 'söka, samla och kritiskt tolka relevant information' and 'dokumentera arbetet i form av en rapport' build on a scientific/academic foundation that no earlier course plan states; only short written reflections appear in DV1705 and PA1493. The thesis plan offers only introductory lessons on planning.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| 60 hp avklarade på programmet Webbprogrammering | credits | MET | 90 hp of mandatory courses (all grundnivå) are completed before VT29 period 3 per the ledger; this exceeds 60 hp. The same program's concurrent DV1709/DV1710 are not needed. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Technical competence in web programming (frontend, backend, database, REST) to apply in an independent project | COVERED | DV1704, DV1705, DV1706, DV1707, DV1708, DV1711, DV1703 | Outcome 'tillämpa förvärvade kunskaper och färdigheter för att lösa problemställningar' within Webbprogrammering; covered by the web and backend courses. |
| Project planning and working method incl. time planning | COVERED | PA1493, DV1707 | Outcome 'utforma en projektplan inkluderande arbetsmetod och tidsplanering'; PA1493 teaches planning and management of software projects, DV1707 team project method. |
| Scientific foundation, systematic literature search, critical source evaluation and academic report writing | NOT_COVERED | - | Outcomes 'kännedom om områdets vetenskapliga grund', 'söka, samla och kritiskt tolka relevant information', 'dokumentera arbetet i form av en rapport'. No earlier course plan names research method, source criticism or report writing; DV1705 and PA1493 only have short written reflection. |
| Independent knowledge acquisition | COVERED | DV1670, DV1704 | Outcome 'självständigt inhämta de kunskaper som krävs'; earlier courses include literature study and independent assignments, though this is a general study skill. |

Findings: F-005

#### 15. DV1710 Projekt webbprogrammering fullstack - OK
<a id="15-dv1710"></a>

- 7.5 hp, mandatory, Grundnivå, läsperiod 4 (Vecka 13 (2029) - Vecka 22 (2029))
- Course plan: https://bth.azure-api.net/lindplan/courseplanbycode?code=B9TTF&semester=20291&lang=sv
- Guaranteed hp before start: 90 (max 90 with all electives)
- Verdict: **OK** (confidence high)

**Answer:** Yes, because the student has all the OOP, frontend, backend, database and deployment courses the fullstack project builds on.

The formal requirement 'minst 15 avklarade hp i programmering' is met by DV1670 + DV1701 and more. The assumed knowledge (object-oriented principles, simple web services with user interface and backend logic) is provided by DV1701, DV1705, DV1706, DV1708 and DV1711. DV1709 (period 3) finishes before DV1710 (period 4) and supplies deployment/CI context. Team project method is a repeat of DV1707.

Formal prerequisites:

| Requirement | Kind | Status | Evidence |
|-----------|-----|------|------------------------|
| Minst 15 avklarade hp i programmering | credits | MET | DV1670 + DV1701 = 15 hp programming; 97.5 hp guaranteed by VT29 period 4. |

Assumed competences:

| Competence | Status | Provided by | Evidence |
|-----------|------|------|------------------------|
| Object-oriented principles and concepts in simple programs | COVERED | DV1701 | 2.2 'enklare programkonstruktioner, innefattande objektorienterade principer'; DV1701 teaches OOP. |
| Simple web services and systems incl. user interface and backend logic | COVERED | DV1705, DV1706, DV1708, DV1711 | 2.2 'webbaserade tjänster och system avseende användargränssnitt och bakomliggande logik'; frontend in DV1705/DV1706/DV1707, backend in DV1708/DV1711. |
| Team project work, requirement analysis and sustainable group work | COVERED | DV1707, PA1493 | Content 'Tolkning och analys av en given kravspecifikation' and 'Projektmetodik för hållbart och effektivt samarbete i team' repeat DV1707 outcomes; PA1493 adds agile practice. |
| Version control, continuous integration and deployment | COVERED | DV1707, DV1709 | Content 'Versionshantering, kontinuerlig integration och driftsättning'; DV1707 lists versionshantering/CI, DV1709 teaches CI/CD and deployment (finishes in period 3 before DV1710). |

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
  "harness": "claude-code",
  "model": "claude-sonnet-5-5",
  "date": "2026-10-21",
  "verdicts": {
    "OK": 13,
    "CONDITIONAL": 0,
    "GAP": 2,
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
      "confidence": "high"
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
      "verdict": "GAP",
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
      "description": "DV1709 'Förutsatta kunskaper' require knowledge of Docker (and Git), but no earlier mandatory course teaches Docker, and Git is only implicit in DV1707's 'Versionshantering'. DV1709 itself lists Docker/docker compose as course content, so the plan contradicts itself.",
      "recommendation": "Either remove Docker from the assumed knowledge in DV1709 (since the course teaches it), or add Docker to an earlier course (e.g. DV1708 or DV1711); also name Git explicitly in DV1707 or an earlier course."
    },
    {
      "id": "F-005",
      "seq": 14,
      "course": "PA1438",
      "semester": "VT29",
      "type": "competence-gap",
      "severity": "medium",
      "description": "The thesis outcomes assume scientific foundation, literature search/critical source evaluation and report writing, but no mandatory course before PA1438 teaches research methodology or academic writing; only short reflections occur in DV1705 and PA1493.",
      "recommendation": "Add content on scientific method, source criticism and technical report writing to an earlier mandatory course (e.g. PA1493) or add a short module/course before the thesis."
    },
    {
      "id": "F-001",
      "seq": 4,
      "course": "DV1705",
      "semester": "HT27",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "The prerequisite 'kurs i webbprogrammering, 7,5 hp' does not name a course; the matching course is DV1704 Webbteknologier.",
      "recommendation": "State the prerequisite as course code DV1704 (or its equivalent) in the plan."
    },
    {
      "id": "F-002",
      "seq": 6,
      "course": "DV1706",
      "semester": "VT28",
      "type": "ambiguous-requirement",
      "severity": "low",
      "description": "The prerequisite 'kurser i webbprogrammering, 15 hp' names no course codes; it is satisfied by DV1704 + DV1705 by content only.",
      "recommendation": "Name DV1704 and DV1705 explicitly in the prerequisite."
    },
    {
      "id": "F-003",
      "seq": 8,
      "course": "DV1707",
      "semester": "VT28",
      "type": "other",
      "severity": "low",
      "description": "DV1707 lists 'Versionshantering, kontinuerlig integration och driftsättning' and group project methodology as content, but no earlier course in the program (HT27-VT28 period 3) introduces version control or CI; it is unclear whether the course teaches them or assumes them.",
      "recommendation": "State in the DV1707 plan whether version control/CI are taught or assumed, and if assumed, add an introduction to git in an earlier course (e.g. DV1670 or DV1701)."
    }
  ]
}
```
