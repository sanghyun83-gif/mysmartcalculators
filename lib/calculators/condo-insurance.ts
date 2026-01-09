// ============================================
// CONDO INSURANCE CALCULATOR - QUICK v3.0
// $85 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Condo Insurance Calculator",
    tagline: "Free 2026 HO-6 Condo Insurance Estimator",
    description: "Calculate condo insurance (HO-6) costs. Interior coverage for walls-in protection, personal property, and liability. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/condo-insurance",
};

// ============================================
// UNIT VALUE TIERS
// ============================================
export const UNIT_VALUES = [
    { id: "under100k", name: "Under $100,000", factor: 0.70 },
    { id: "100k-200k", name: "$100,000 - $200,000", factor: 0.85 },
    { id: "200k-400k", name: "$200,000 - $400,000", factor: 1.0 },
    { id: "400k-700k", name: "$400,000 - $700,000", factor: 1.25 },
    { id: "over700k", name: "Over $700,000", factor: 1.55 },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling/Walls-In", baseCost: 180, description: "Interior finishes" },
    { id: "personal-property", name: "Personal Property", baseCost: 120, description: "Belongings" },
    { id: "liability", name: "Liability", baseCost: 60, description: "Guest injuries" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$300-$700", description: "Per year" },
    { label: "HO-6 Coverage", value: "Walls-In", description: "Interior only" },
    { label: "HOA Master Policy", value: "Exterior", description: "Building structure" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What does condo insurance (HO-6) cover?",
        answer: "HO-6 covers your unit's interior (walls-in), personal belongings, and liability. Your HOA's master policy covers the building exterior and common areas. You're responsible for interior finishes, fixtures, and your possessions."
    },
    {
        question: "How much does condo insurance cost in 2026?",
        answer: "Condo insurance costs $300-$700 per year on average. Costs depend on unit value, location, and coverage limits. It's cheaper than homeowners insurance because your HOA covers the building structure."
    },
    {
        question: "Do I need condo insurance if my HOA has a master policy?",
        answer: "Yes. The HOA master policy covers the building structure and common areas only. You need HO-6 coverage for your unit's interior, personal property, and personal liability. Mortgage lenders also require it."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Condo Insurance Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Renters Insurance", url: "/renters-insurance", description: "Tenant coverage" },
    { name: "Flood Insurance", url: "/flood-insurance", description: "Flood protection" },
];
