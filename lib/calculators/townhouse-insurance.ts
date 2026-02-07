// ============================================
// TOWNHOUSE INSURANCE CALCULATOR - QUICK v3.0
// $80 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Townhouse Insurance Calculator",
    tagline: "Free 2026 Townhome Insurance Estimator",
    description: "Calculate townhouse insurance costs. Coverage for attached homes with shared walls, personal property, and liability. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/townhouse-insurance",
};

// ============================================
// HOME VALUE TIERS
// ============================================
export const HOME_VALUES = [
    { id: "under200k", name: "Under $200,000", factor: 0.70 },
    { id: "200k-350k", name: "$200,000 - $350,000", factor: 0.85 },
    { id: "350k-500k", name: "$350,000 - $500,000", factor: 1.0 },
    { id: "500k-750k", name: "$500,000 - $750,000", factor: 1.25 },
    { id: "over750k", name: "Over $750,000", factor: 1.55 },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling Coverage", baseCost: 800, description: "Structure protection" },
    { id: "personal-property", name: "Personal Property", baseCost: 200, description: "Belongings" },
    { id: "liability", name: "Liability", baseCost: 100, description: "Guest injuries" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$800-$1,500", description: "Per year" },
    { label: "Coverage Type", value: "HO-3", description: "Standard policy" },
    { label: "HOA May Cover", value: "Exterior", description: "Check master policy" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "Is townhouse insurance the same as condo insurance?",
        answer: "No. Townhouse owners typically use HO-3 policies (same as single-family homes) because you own the entire structure including exterior walls. Condos use HO-6 which covers interior only. Check your HOA master policy to see what's covered."
    },
    {
        question: "How much does townhouse insurance cost in 2026?",
        answer: "Townhouse insurance costs $800-$1,500 per year on average. Costs depend on home value, location, age, and construction. Shared walls may reduce fire risk, potentially lowering premiums compared to detached homes."
    },
    {
        question: "Does my townhouse HOA insurance cover me?",
        answer: "The HOA master policy may cover exterior walls and common areas, but rarely covers your unit's interior or belongings. You still need your own HO-3 or HO-6 policy. Always review your HOA's declarations page."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Townhouse and Row Home Coverage",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Condo Insurance", url: "/condo-insurance", description: "HO-6 coverage" },
    { name: "Flood Insurance", url: "/flood-insurance", description: "Flood protection" },
];
