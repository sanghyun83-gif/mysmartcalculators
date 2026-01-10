// ============================================
// HSA CALCULATOR - QUICK v3.0
// $60 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "HSA Calculator",
    tagline: "Free 2026 Health Savings Account Calculator",
    description: "Calculate HSA contributions, tax savings, and growth projections. Based on 2026 IRS contribution limits.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/hsa",
};

// ============================================
// COVERAGE TYPES
// ============================================
export const COVERAGE_TYPES = [
    { id: "self", name: "Self-Only", limit: 4300, description: "Individual HDHP" },
    { id: "family", name: "Family", limit: 8550, description: "Family HDHP" },
];

// ============================================
// AGE BRACKETS
// ============================================
export const AGE_BRACKETS = [
    { id: "under55", name: "Under 55", catchUp: 0, description: "Standard limit" },
    { id: "55plus", name: "55 or older", catchUp: 1000, description: "Catch-up contribution" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "2026 Self Limit", value: "$4,300", description: "Individual" },
    { label: "2026 Family Limit", value: "$8,550", description: "Family" },
    { label: "Catch-Up (55+)", value: "+$1,000", description: "Additional" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What are the 2026 HSA contribution limits?",
        answer: "For 2026, the HSA contribution limit is $4,300 for self-only coverage and $8,550 for family coverage. Individuals 55 and older can contribute an additional $1,000 catch-up contribution. These limits are set by the IRS annually."
    },
    {
        question: "What are the tax benefits of an HSA?",
        answer: "HSAs offer triple tax benefits: contributions are tax-deductible (or pre-tax through payroll), earnings grow tax-free, and withdrawals for qualified medical expenses are tax-free. At 65+, you can withdraw for non-medical expenses penalty-free (taxed as income)."
    },
    {
        question: "Who is eligible for an HSA in 2026?",
        answer: "To be HSA-eligible, you must be enrolled in a High Deductible Health Plan (HDHP) with a minimum deductible of $1,650 (self) or $3,300 (family) in 2026. You cannot be enrolled in Medicare, claimed as a dependent, or have other disqualifying coverage."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "HSA Contribution Limits",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "401k Calculator", url: "/401k", description: "Retirement savings" },
    { name: "Tax Calculator", url: "/tax-calculator", description: "Tax estimation" },
    { name: "Retirement Calculator", url: "/retirement", description: "Retirement planning" },
];
