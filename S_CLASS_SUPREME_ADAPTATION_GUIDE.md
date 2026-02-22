# S-CLASS SUPREME: General Standardization & Adaptation Prompt (v5.0 - Calculator.net Paradigm / Clinical Light Theme)

Use this prompt to generate or refactor ANY calculator to the 2026 "One-Page Supreme" standard. This standard abandons dark mode entirely. It is strictly modeled after Calculator.net's maximum utility, extreme information density, tight spacing, and clinical Light Theme, combined with elite E-E-A-T (Trust) signals and modern Tailwind aesthetics.

---

## 🎯 The Objective
Convert any existing calculator or create a new one using the **High-Intensity One-Page Architecture**. Zero subpages, 0ms LCP, perfect Google Authority Semantics, and an Above-the-Fold hyper-compact 2-column UI with a stark, highly readable Light Theme.

---

## 🛠️ Step 1: Mapping the Variables
Before writing code, identify these variables for your target calculator:

- **`[ID]`**: The registry ID (e.g., `mortgage`, `loan`, `dti`, `bmr`).
- **`[TITLE]`**: Functional name (e.g., "Mortgage Calculator", "BMR Engine").
- **`[ICON]`**: Lucide-react icon name (e.g., `Home`, `DollarSign`, `Activity`, `Flame`).
- **`[TAILWIND_COLOR]`**: The base Tailwind color name for primary UI actions (e.g., `blue`, `indigo`, `teal`).
- **`[SCHEMA_CATEGORY]`**: `InvestmentApplication`, `FinanceApplication`, or `HealthApplication`.
- **`[AUTHORITY_SOURCE]`**: The primary data source for E-E-A-T (e.g., "WHO 2026 Guidelines", "Federal Reserve Data").

---

## 🏗️ Step 2: The Four-File Architecture Generation

### 📁 File 1: `lib/calculators/[id].ts` (Core Logic & Data)
**TEMPLATE**:
1. Write the mathematical calculation logic.
2. Provide precise 2026 standardized data/constants.
3. Generate exactly 15 highly professional, intent-driven FAQs for the Schema.

### 📁 File 2: `app/(calculators)/[id]/page.tsx` (Server SEO)
**TEMPLATE**:
1. Swap `const id = "bmi"` with **`[ID]`**.
2. Dynamically import **`[ID]Client`** (or Static Import if preferred).
3. Map `jsonLd` fields to match the specific logic.

### 📁 File 3: `app/(calculators)/[id]/layout.tsx` (Wrapper)
**TEMPLATE**:
1. Swap `brandName` with **`[TITLE]`**.
2. Swap `brandIcon` with **`[ICON]`**.
3. **Base Background (CRITICAL)**: Ensure the main layout background uses strict Light Mode: `bg-slate-50` or `bg-white`. **DO NOT** use any dark mode classes (no `slate-900`, no `zinc-950`). Text must be `text-slate-900`.

### 📁 File 4: `app/(calculators)/[id]/[ID]Client.tsx` (Interactive Engine)
**TEMPLATE - CRITICAL UI/UX RULES (HYPER-DENSITY & CLINICAL LIGHT THEME)**:

1. **KILL THE GIANT HERO (Zero-Scroll Visibility)**: Remove massive header texts and huge paddings. The top `<header>` should only contain a compact title (`text-2xl font-bold text-slate-900`) and the Trust Badge. Use `pt-4` or `pt-6` max.
2. **E-E-A-T TRUST SIGNALS**: Right below the H1 title, insert a compact badge:
   - `<div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider"><ShieldCheck size={14} className="text-[TAILWIND_COLOR]-600"/> Verified by [AUTHORITY_SOURCE]</div>`
3. **2-COLUMN DESKTOP GRID (MANDATORY)**: Wrap the main calculator section in a strict 2-column grid to ensure "At a glance" utility:
   - `<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">`
   - **Left Column (Col span 5)**: The Input Form. Make it narrow and tight.
   - **Right Column (Col span 7)**: The Results, dynamic visuals (Gauge/Chart), and real-time summaries. Make this column sticky `top-8` if possible.
4. **HYPER-COMPACT DENSITY (CALCULATOR.NET STYLE)**:
   - **DO NOT** use airy padding. Use `p-3` or `p-4` max inside form cards.
   - Reduce form gaps to `gap-2` or `gap-3`.
   - **Font Sizes**: Base text should be `text-sm`. Labels should be `text-sm font-semibold text-slate-700`.
   - **Terminology (CRITICAL)**: Use professional, standard terminology. **AVOID** overly clinical or sci-fi labels.
      - **YES**: Height, Weight, Age, Activity, Goal, Gender, Result, Daily Target, Maintenance, Weight Loss, Diet Plan.
      - **NO**: Stature, Current Mass, Biological Age, Activity Tier, Target Transformation, Biological Audit, Thermodynamic Maintenance, Metabolic Audit, Hypertrophic Gain, Intake Flux, Energy Delta.
   - **Inputs**: Tightly packed `h-9` or `h-10` inputs. `bg-white border border-slate-300 text-slate-900 shadow-sm`.
4-1. **MICRO-LAYOUT FOR MULTI-PART INPUTS (CRITICAL FOR DENSITY)**:
   - For inputs that require multiple fields (e.g., "Feet" and "Inches", or "Years" and "Months"), **NEVER stack them vertically or use massive dropdowns.**
   - Place them horizontally in a single tight row: `<div className="flex flex-row items-center gap-2">`.
   - Use small, inline input fields: `<input className="w-full h-9 text-sm px-2...">`.
   - Append the unit directly inside or tightly next to the input to save space. Zero wasted vertical real estate.
5. **CLINICAL LIGHT MODE & SEMANTIC COLORS (MANDATORY)**:
   - **Base cards**: `bg-white border border-slate-200 shadow-sm rounded-md`.
   - **Semantic Results (High Contrast)**: **DO NOT** use dark mode opacities. Use highly legible solid colors for results to give instant feedback:
     - **Normal/Good/Healthy**: `text-emerald-800 bg-emerald-50 border border-emerald-200 font-bold`
     - **Warning/Overweight**: `text-amber-800 bg-amber-50 border border-amber-200 font-bold`
     - **Danger/Obese/Loss**: `text-rose-800 bg-rose-50 border border-rose-200 font-bold`
    - **Calculate button**: Use **Emerald-600** (`bg-emerald-600 hover:bg-emerald-700`) as the global S-Class action standard for maximum clinical trust.
6. **Derived State Engine**: **DO NOT** use `useEffect` to set results. Calculate inside a `const result = (() => { ... })();` closure.
7. **Mobile UX**: Stack columns (`grid-cols-1`). Use `inputMode="decimal"`.
8. **Dense Authority Encyclopedia**: Below the calculator, provide a tightly packed text section.
   - Use `text-sm leading-relaxed text-slate-700`.
    - **Tables**: Extremely compact (`text-xs` or `text-sm`, `py-1.5 px-2`), alternating row colors (`even:bg-slate-50`), with a solid gray header (`bg-slate-100 border-b border-slate-300`).
9. **ABSOLUTE FULL-PAGE LIGHT THEME (NO DARK SECTIONS ALLOWED)**:
    - **Top Mini-Bar**: Must be **Slate-100** or lighter. Zero dark headers.
    - The ENTIRE page from top to bottom (including the encyclopedia, FAQs, and Footer) MUST share the same light background.
    - **DO NOT under any circumstances use dark backgrounds (`bg-slate-900`, `bg-slate-800`, `bg-black`) for any section, including the lower half or the footer.**
    - The FAQ section must have a white or very light gray background (`bg-slate-50`).
    - **Footer**: The Footer must be a soft light gray (**bg-slate-100** or `bg-slate-50`) with `text-slate-900` or `text-slate-500` and a subtle `border-t border-slate-200`. **ZERO** dark contrast. Maintain a 100% cohesive clinical document feel.

10. **INPUT COMPACTION**:
   - For multi-part inputs like ft/in, use text inputs instead of bulky select dropdowns if possible, to make it even more compact. Example: `<input type="number" className="w-16 h-9..." /> ft`

---

## 📋 Step 3: Final Refactoring Checklist
Ensure the generated code passes these rigid tests:

- [ ] **Clinical Light Theme**: Is there absolutely ZERO black/dark mode background? Is the text stark black/dark gray (`text-slate-900`) on white backgrounds?
- [ ] **Hyper-Density**: Are the input fields, buttons, and tables tightly packed with minimal padding (`p-2`, `gap-2`, `text-sm`) like Calculator.net?
- [ ] **Zero-Scroll Visibility**: Can the user see the inputs AND the calculate button immediately upon page load without scrolling?
- [ ] **2-Column Verification**: Is the grid applied so inputs (left) and results (right) sit side-by-side perfectly on desktop?
- [ ] **Semantic Color Check**: Did you use pastel backgrounds (`emerald-50`) with dark text (`emerald-800`) for highly readable result states?
- [ ] **E-E-A-T Visibility**: Is the `[AUTHORITY_SOURCE]` badge clearly visible at the top, and are citations present at the bottom?
- [ ] **Inline Input Check**: Are multi-part inputs (like ft/in) placed perfectly side-by-side in a single row without wasting vertical space?
- [ ] **Footer Cohesion**: Did you remove the jarring pitch-black background from the footer and replace it with a cohesive `slate-800` or `slate-100`?

---

**REFERENCE ARCHITECTURE (BMI)**:
Use `S_CLASS_SUPREME_SOURCE_CODE_STANDARD.md` as the raw logic/schema baseline, but **COMPLETELY OVERRIDE** its layout, padding, and color scheme with the Hyper-Dense 2-Column Grid and Clinical Light Theme rules defined in Step 2. Generate the full, production-ready code for all 4 files.

---

## 🏆 S-Class Standardized Registry
The following units have been successfully evolved to the **One-Page Supreme (v5.0)** standard. **DO NOT** revert these to legacy architectures.

| Unit ID | Standardization Date | Paradigm | Key Features |
| :--- | :--- | :--- | :--- |
| `bmi` | 2026-02-23 | v5.0 | Clinical Light Theme, Hyper-Density (5:7 Grid), Emerald Sync |
| `calorie` | 2026-02-23 | v5.0 | Zero Dark Cohesion, Terminology Purge, Emerald Sync |
