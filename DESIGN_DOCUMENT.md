# Design Document – Keshvi Choksi Personal Homepage

**Course:** CS 5610 Web Development | **Student:** Keshvi Choksi | **Date:** 2026

---

## 1. Project Description

This project is a personal homepage for Keshvi Choksi, a Master of Science Computer Science student at Northeastern University with a background in AI/ML engineering and full-stack development. The site serves as a professional digital presence - an always-available, recruiter-friendly portfolio that communicates Keshvi's identity, skills, projects, and experience at a glance.

The homepage replaces a static resume with an interactive, scannable narrative. Visitors can learn who Keshvi is, what she has built, where she has worked, and how to contact her - all without leaving the site.

**Goals:**

- Present Keshvi's work and skills in a clean, professional manner
- Serve as a landing page link for job applications and LinkedIn
- Demonstrate technical competence through the quality of the site itself
- Meet all course requirements: 3 pages, ES6 modules, W3C-valid, deployed

**Constraints:**

- Vanilla HTML5, CSS3, ES6+ only (no frameworks or jQuery)
- Static frontend, no backend
- Must be W3C-compliant and ESLint/Prettier-formatted

---

## 2. User Personas

### Persona A – "The Recruiter" — Rachel , Technical Recruiter

- **Age:** 34
- **Role:** Senior Technical Recruiter at a mid-size tech company
- **Goals:** Quickly assess whether a candidate has the right skills, experience level, and communication for an open role. She reviews 40+ profiles a week.
- **Pain points:** Most portfolio sites are either too sparse (just a résumé) or too cluttered (endless scroll, slow load). She wants to find the essentials — skills, experience, contact — in under 2 minutes.
- **Behavior:** Clicks a LinkedIn profile link, scans the homepage, checks for relevant tech stack tags, looks for project descriptions with outcomes (not just tools used), then emails or moves on.
- **What she needs from this site:** Visible skills at a glance, project outcomes with concrete metrics, an easy contact button.

---

### Persona B – "The Peer Engineer" — Marcus , Software Engineer

- **Age:** 26
- **Role:** Full-stack engineer at a startup, former CS classmate
- **Goals:** Check out what Keshvi has been building. Potentially collaborate or refer her for a role at his company.
- **Pain points:** Vague project descriptions that don't say what was actually built or how. He wants specifics: the stack, the problem solved, a sense of scale.
- **Behavior:** Lands on the page, immediately scrolls to the projects section, reads the tech stack tags and descriptions, maybe navigates to the About page to see the full background.
- **What he needs from this site:** Specific, credible project write-ups with technical depth.

---

### Persona C – "The Professor / Advisor" — Dr. Ananya , CS Faculty

- **Age:** 48
- **Role:** Graduate advisor at Northeastern reviewing students for research assistant positions
- **Goals:** Understand a student's academic background, GPA, and areas of technical interest for potential research opportunities.
- **Pain points:** Wants to see evidence of independent technical work, not just coursework.
- **Behavior:** Looks for education section, checks what kinds of projects the student has done, reads the About page to understand interests and focus areas.
- **What she needs from this site:** Clear education timeline, defined technical interests, evidence of self-directed projects.

---

## 3. User Stories

### Story 1 – Rachel Discovers a Great Candidate

> Rachel receives Keshvi's application for an ML Engineer role. She clicks the portfolio link in the resume. The homepage loads instantly. She immediately sees Keshvi's name, title ("AI/ML + Full-Stack"), and current university. She scrolls to the Skills section and confirms she knows PyTorch, LangChain, FastAPI, and React - all required for the role. She reads the Bone Fracture Detection project and notes "91%+ mAP" - a concrete outcome. She clicks the email link in the Contact section and sends an interview invite. Total time: 90 seconds.

### Story 2 – Marcus Evaluates a Collaboration

> Marcus remembers Keshvi mentioning a financial AI project. He visits her homepage on his phone. It renders cleanly on mobile. He scrolls to Projects, finds "AI Financial Intelligence Assistant," and reads that it uses LangChain + FAISS + XGBoost - tools his team is evaluating. He clicks through to her LinkedIn to message her about possibly sharing notes. He also visits the Writing page out of curiosity and reads the RAG essay - which confirms she understands the underlying architecture deeply.

### Story 3 – Dr. Ananya Evaluates a Research Candidate

> Dr. Ananya opens three student portfolios side by side. She navigates to Keshvi's About page. She sees the education card: 4.0 GPA at SCET and current enrollment at Northeastern. She reads the interests list and notices "Real-time IoT and sensor data systems" and "Medical AI & computer vision" - both directly relevant to her lab. She makes a note to follow up. The skill bars give her a visual read of proficiency levels. She spends less than 3 minutes but comes away with a clear picture.

### Story 4 – Keshvi Shares the Site Before an Interview

> Keshvi has a technical phone screen tomorrow. She shares her homepage link with the interviewer in advance. The interviewer spends 5 minutes reading through the projects, noting the MLOps pipeline, Docker, and GitHub Actions usage. During the call, the interviewer says "I saw you used MLflow for experiment tracking - can you walk me through that?" Keshvi's homepage turned a cold screen into a warm, context-rich conversation.

---

## 4. Design Mockups


### Page 1 – index.html (Homepage)

```
┌─────────────────────────────────────────────────────┐
│  NAV: [KC logo]      [Home] [About] [Writing]       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  HERO (2 columns, 100vh):                           │
│  LEFT: "Hi, I'm / Keshvi / Choksi"                  │
│        tagline text                                 │
│        [About Me btn] [View Projects btn]           │
│                                                     │
│  RIGHT: Animated code card                          │
│         with typewriter role effect                 │
│                                                     │
├─────────────────────────────────────────────────────┤
│  SKILLS (4-column grid):                            │
│  [Languages] [AI/ML] [Web & APIs] [Cloud & DevOps]  │
│   tag pills   tag pills  tag pills   tag pills      │
├─────────────────────────────────────────────────────┤
│  PROJECTS (3-column grid, tinted bg):               │
│  [01 Financial AI]  [02 Bone Fracture*] [03 Grid]   │
│  * featured card                                    │
├─────────────────────────────────────────────────────┤
│  EXPERIENCE (timeline, left line):                  │
│  ● eInfochips 2024–2025                             │
│  ● Technokrit 2024                                  │
├─────────────────────────────────────────────────────┤
│  CONTACT (centered):                                │
│  [Email btn] [LinkedIn btn]                         │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

### Page 2 – about.html

```
┌─────────────────────────────────────────────────────┐
│  NAV                                                │
├─────────────────────────────────────────────────────┤
│  HERO TEXT: "About Me" + lead paragraph             │
├─────────────────────────────────────────────────────┤
│  2-COLUMN GRID:                                     │
│  LEFT: Education cards (bordered)                   │
│        Interests list (arrow bullets)               │
│                                                     │
│  RIGHT: Animated skill progress bars                │
│         (IntersectionObserver triggered)            │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

### Page 3 – ai-generated.html

```
┌─────────────────────────────────────────────────────┐
│  NAV                                                │
├─────────────────────────────────────────────────────┤
│  [AI-Generated Essay badge]                         │
│  Title: "Why RAG Is the Future of Enterprise AI"    │
│  Meta note (AI attribution, italic)                 │
├─────────────────────────────────────────────────────┤
│  ARTICLE (max-width 720px, readable column):        │
│  Intro paragraph                                    │
│  H2 sections                                        │
│  Pull quote (green left-border highlight)           │
├─────────────────────────────────────────────────────┤
│  FOOTER                                             │
└─────────────────────────────────────────────────────┘
```

### Color Palette

| Role            | Value                       |
| --------------- | --------------------------- |
| Background      | `#fafaf8` (warm off-white)  |
| Surface         | `#ffffff`                   |
| Surface 2       | `#f4f3ef` (tinted sections) |
| Border          | `#e8e6e0`                   |
| Ink             | `#1a1814`                   |
| Ink secondary   | `#4a4741`                   |
| Accent (green)  | `#1a6b4a`                   |
| Accent light    | `#e8f4ef`                   |
| Accent 2 (gold) | `#c6863a`                   |

### Typography

| Use                | Font                            |
| ------------------ | ------------------------------- |
| Display / headings | DM Serif Display (Google Fonts) |
| Body / UI          | DM Sans (Google Fonts)          |

---


