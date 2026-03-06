# S-CLASS SUPREME ADAPTATION GUIDE (v6.1)
## Google-Compliant Thick Content Framework for 2026

Last Updated: 2026-03-06
Status: Active Standard

---

## 0) Scope and Positioning
This document is an internal production standard.
It is NOT a search landing page itself.

- Purpose: define how to build calculator pages that are useful, trustworthy, and policy-safe.
- Non-purpose: mass-produce templated pages for index inflation.

If this document is publicly reachable, keep it out of search index (`noindex`) or move it to internal docs.

---

## 0.5) Strategic Lock (Mandatory)
This strategy is locked and non-optional:

1. Keep single-page architecture by default.
2. Intensify E-E-A-T and thick content inside that page.
3. Treat rich result as a bonus, not the product goal.

Why this is the safest path:
- Single page reduces duplication and maintenance drift.
- Thick content improves trust and practical usefulness.
- Rich result depends on policy and eligibility, so it cannot be the core KPI.

---

## 1) Hard Truth (Policy Baseline)
Do not treat "rich results" as the primary goal.

Primary goal:
- People-first, useful, accurate calculator pages.

Secondary goal:
- Structured data hygiene for eligibility (not guaranteed visibility).

Google policy-aligned facts:
1. Structured data does not guarantee rich result display.
2. Markup must match visible on-page content.
3. FAQ rich results are heavily limited and should not be your main strategy.
4. Scaled/templated low-value production is a ranking and spam risk.

References:
- SD policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- FAQPage: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- FAQ/HowTo changes: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- GenAI content guidance: https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- Spam/auto-generated abuse context: https://developers.google.com/search/docs/advanced/guidelines/auto-gen-content

---

## 2) Strategy Shift (Thin -> Thick)
Do not ship 100 thin calculators.
Ship fewer pages with deeper utility and stronger trust signals.

### Thick Content Definition (Required)
A calculator page is "thick" only when ALL are true:
1. Strong primary intent match (user can complete a real decision).
2. Correct and testable formula logic.
3. Practical interpretation section ("what this number means").
4. Scenario examples (at least 3 realistic cases).
5. Clear assumptions and limits.
6. Source-backed references (official/legal/medical/standards where relevant).
7. Update/freshness metadata (last reviewed date and basis).
8. Clean readability (no encoding corruption, no jargon clutter, no template noise).

If any item is missing, page is not thick yet.

---

## 3) Rich Result Reality for Calculator Sites
For this project, rich result should be treated as a bonus layer.

### Use structured data for correctness, not gimmicks
Recommended baseline:
- `WebPage`
- `BreadcrumbList`
- `SoftwareApplication` (calculator as tool)
- `FAQPage` only when genuinely useful and policy-safe (do not depend on it)

Do not:
- Stuff FAQ only for SERP decoration.
- Add markup not reflected in visible content.
- Generate near-duplicate Q&A blocks across many pages.

### Conservative schema stack (default)
Use this by default on calculator pages:
1. `WebPage`
2. `SoftwareApplication`
3. `BreadcrumbList`

Use conditionally:
- `FAQPage` only when the FAQ is truly user-facing, non-duplicative, and fully visible on page.

---

## 4) Production Architecture Standard
Maintain one-page utility-first architecture by default.

### Core files
1. `lib/calculators/[id].ts`
2. `app/(calculators)/[id]/page.tsx`
3. `app/(calculators)/[id]/layout.tsx`
4. `app/(calculators)/[id]/[ID]Client.tsx`

### UI baseline
- Clinical light theme only.
- Compact and readable form layout.
- Immediate above-the-fold utility.
- Mobile-first interaction quality.

### Subpage policy (locked)
- New calculators: zero subpages by default.
- Existing legacy subpages: temporary allowance only for backward compatibility.
- Any new subpage requires explicit policy override in `FOUNDATION_FIRST_IMPLEMENTATION_PLAN.md`.

### Single-page reinforcement
- One calculator = one primary intent.
- Absorb secondary content into the same page using anchored sections/toggles before creating new URLs.
- If a subpage is unavoidable, document intent separation and canonical strategy first.

---

## 5) Priority Model (What to build next)
Use weighted prioritization, not random expansion.

### Scoring
Score each candidate 1-5 on:
1. User demand intent
2. Decision value (money/health/legal impact)
3. Differentiation potential (not commodity copy)
4. Data reliability and citation strength
5. Production cost vs quality payoff

Priority score = (1+2+3+4+5)

### Current top thick-upgrade priority (from standardized set)
1. `mortgage`
2. `loan`
3. `salary`
4. `age`
5. `due-date`

Why:
- High recurring demand and practical decision context.
- Clear room for scenario depth and trustworthy interpretation.
- Strong potential to improve user satisfaction signals.

---

## 6) Quality Gate Before Publish (Mandatory)
A page cannot ship unless all checks pass.

### Content gate
- No encoding corruption characters.
- No placeholder/template residue.
- No contradictory claims.
- No pseudo-authority wording without evidence.

### Utility gate
- User can complete core calculation in under 30 seconds.
- Result includes actionable explanation.
- At least 3 scenario examples provided.

### Trust gate
- Formula or logic explained at user level.
- Citations present where claims depend on external standards.
- Last reviewed date present.
- "Who/How/Why" block present:
  - Who reviewed this page.
  - How the model computes and rounds values.
  - Why this page exists and what decision it helps.

### Markup gate
- Structured data matches visible content.
- No unsupported/deceptive schema usage.

### Thick depth gate
- Interpretation section included ("what the result means in practice").
- Scenario set included (3 or more realistic user cases).
- Assumptions and limits clearly listed.
- Sources section and freshness timestamp included.

---

## 7) Anti-Patterns (Do Not Do)
1. Mass cloning with only keyword swaps.
2. Overloaded jargon pretending expertise.
3. FAQ inflation for rich result bait.
4. Hidden or mismatched structured data.
5. Shipping pages with broken text/encoding artifacts.

---

## 8) Execution Rhythm
- Weekly: 3-5 pages max for true thick upgrade.
- Each page gets: logic QA + content QA + schema QA.
- Monthly: prune or merge low-value pages.

Success metric set:
1. Reduced thin/duplicate footprint.
2. Improved engagement on upgraded pages.
3. Stable indexing quality (fewer low-value URLs crawled).
4. Higher trust and usability indicators.

---

## 9) Registry of Standardized Units (Current)
Already standardized units:
- bmi
- calorie
- body-fat
- mortgage
- percentage
- gpa
- scientific
- age
- loan
- pregnancy
- grade
- tip
- compound-interest
- due-date
- salary
- binary
- date
- conversion
- square-footage
- ovulation
- time-calculator

Note:
"Standardized" means architecture baseline is applied.
It does NOT automatically mean "thick content complete."

---

## 10) Next Batch Candidate Pool (Traffic-First)
1. dice-roller
2. sales-tax
3. margin
4. p-value
5. confidence-interval
6. scientific-notation
7. sig-fig
8. square-root
9. slope
10. circumference
11. exponent
12. pythagorean-theorem
13. day-counter
14. time-zone
15. hours-calculator
16. concrete
17. sleep
18. pace
19. height-calculator

Rule:
Do not execute this list as mass generation.
Pull only the highest thick-potential items per sprint.

---

## 11) Definition of Done (Page-Level)
A calculator page is done only when:
1. Functional correctness verified.
2. Thick content criteria all satisfied.
3. Structured data policy-safe and content-matched.
4. Readability and UX pass on desktop/mobile.
5. No critical quality debt left open.
6. Single-page intent integrity is preserved (or approved exception documented).

---

## 12) v6.2 Universal Addendum (All Calculator Topics)
This addendum applies to every calculator domain: finance, health, legal, tax, and general.
Use it as a universal quality layer, not a topic-specific option.

### 12.1 Universal Required Blocks
Every production calculator page must include:
1. Intent and Decision Block
2. Result Interpretation Block
3. Scenario Comparison Block (3 or more)
4. Assumptions and Limits Block
5. Sources and Last Reviewed Block
6. Who / How / Why Block

### 12.2 Universal Input Depth Standard
Input design must follow 3 levels:
1. Core inputs (mandatory)
2. Context inputs (recommended)
3. Advanced inputs (topic-conditional)

If advanced inputs are excluded, explain why and list impact on accuracy.

### 12.3 Universal Output Depth Standard
Output must provide:
1. Primary result
2. Secondary result(s)
3. Sensitivity insight (how key variable changes affect output)
4. Action statement ("what to do next")

Use both:
- Quick summary cards
- Detailed table or breakdown

### 12.4 Universal Scenario Rules
Minimum 3 scenarios are mandatory.
- Baseline
- Conservative
- Aggressive (or equivalent low/mid/high set)

Each scenario must include:
1. Inputs
2. Result
3. Interpretation
4. Delta vs baseline

### 12.5 Universal E-E-A-T Evidence Rules
1. Prefer primary sources (official standards, government, institution, peer-reviewed where applicable).
2. Do not make authority claims without source mapping.
3. Show review freshness:
   - Last reviewed date
   - Review basis
   - Update cadence target
4. Ban pseudo-authority copy and unverifiable superlatives.

### 12.6 Universal Structured Data Policy
Default stack:
1. `WebPage`
2. `SoftwareApplication`
3. `BreadcrumbList`

Conditional stack:
- `FAQPage` only when questions are genuinely user-facing, fully visible, and non-duplicative.

Rules:
1. Structured data must match visible content exactly.
2. No unsupported/deceptive markup.
3. Rich result is treated as a bonus KPI, never the primary KPI.

### 12.7 Universal Single-Page Intent Rule
Default:
- One calculator page for one primary intent.

Exception:
- Multi-page separation is allowed only with documented intent separation, canonical plan, and internal link rationale.

### 12.8 Universal Anti-Thin Controls
Do not ship:
1. Keyword-swap clones
2. Near-duplicate FAQ blocks at scale
3. Placeholder/template residue
4. Broken encoding or unreadable copy
5. High-volume pages with no unique decision value

### 12.9 Universal Pre-Publish Quality Gates
All pages must pass:
1. Content gate
2. Utility gate
3. Trust gate
4. Markup gate
5. Thin-risk gate

Failing any gate blocks release.

### 12.10 Universal Done Definition Update
"Standardized" and "Thick-complete" are different states.

- Standardized: architecture and baseline UI rules applied.
- Thick-complete: universal required blocks + evidence + interpretation depth all satisfied.

### 12.11 Universal Metrics
Track per page:
1. Thick score (0-100)
2. Scenario completeness
3. Source quality coverage
4. Freshness status
5. Thin-risk status

Use these metrics for merge, prune, merge-into-hub, or redirect decisions.

---

## 13) v6.3 Universal Gap Patch (Depth + Decision + Delta)
This section patches the remaining top-tier gaps found in production audits.
Apply to all calculator topics.

### 13.1 Calculation Depth Upgrade (Universal)
Each calculator must support:
1. Core mode (simple inputs)
2. Advanced mode (decision-critical variables)

Advanced mode requirements:
- At least 2 additional variables that materially change outcomes
- Sensitivity output for those variables
- Clear note when advanced mode is unavailable and why

Examples of advanced variables (topic-adapted):
- Finance: payment frequency, start date, recurring/one-time extra payments, fee/tax assumptions
- Health: activity level variants, threshold model version, edge-case flags
- Legal: state/jurisdiction modifier, liability ratio, fee/cost assumptions
- Tax: filing status variants, deduction mode, state/local overlays
- General: unit system, precision mode, rounding standard

### 13.2 Decision Completeness Upgrade (Universal)
Each page must include a conditional action guide:
1. If result is low / mid / high, what action is preferred
2. If key variable changes beyond threshold, what to re-check
3. What external document or expert check is needed before final decision

Mandatory output sentence format:
- "If [condition], do [action], because [impact]."

### 13.3 Delta Comparison Upgrade (Universal)
Scenario output must be visible as a first-class block, not buried.

Minimum comparison table columns:
1. Scenario name
2. Inputs summary
3. Primary result
4. Delta vs baseline
5. Decision note

Minimum rows:
- Baseline
- Conservative
- Aggressive (or equivalent low/mid/high)

### 13.4 Release Gate Additions
Add these release blockers:
1. No advanced-mode effect: fail
2. No conditional action guide: fail
3. No scenario delta table: fail

### 13.5 Universal Implementation Rule
Do not inflate content length for appearance.
Only add sections that improve decision quality, variable transparency, and scenario comparability.
