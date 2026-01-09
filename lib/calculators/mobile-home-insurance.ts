// ============================================
// MOBILE HOME INSURANCE CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Mobile Home Insurance Calculator",
    tagline: "Free 2026 Manufactured Home Insurance Estimator",
    description: "Calculate mobile home insurance costs. HO-7 coverage for manufactured homes, modular homes, and trailers. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/mobile-home-insurance",
};

// ============================================
// HOME VALUE TIERS
// ============================================
export const HOME_VALUES = [
    { id: "under50k", name: "Under $50,000", factor: 0.70 },
    { id: "50k-100k", name: "$50,000 - $100,000", factor: 0.85 },
    { id: "100k-150k", name: "$100,000 - $150,000", factor: 1.0 },
    { id: "150k-250k", name: "$150,000 - $250,000", factor: 1.30 },
    { id: "over250k", name: "Over $250,000", factor: 1.60 },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling Coverage", baseCost: 500, description: "Structure protection" },
    { id: "personal-property", name: "Personal Property", baseCost: 150, description: "Belongings" },
    { id: "liability", name: "Liability", baseCost: 80, description: "Guest injuries" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$700-$1,500", description: "Per year" },
    { label: "Policy Type", value: "HO-7", description: "Mobile home specific" },
    { label: "Wind/Hail Risk", value: "Higher", description: "Than site-built" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What does mobile home insurance (HO-7) cover?",
        answer: "HO-7 covers your manufactured home structure, personal belongings, liability, and additional living expenses if displaced. It's specifically designed for mobile/manufactured homes which have different risk profiles than site-built homes."
    },
    {
        question: "Why is mobile home insurance different from regular homeowners?",
        answer: "Mobile homes face higher wind/hail risks and different construction standards. HO-7 policies are tailored to manufactured housing construction methods. Some traditional insurers won't cover mobile homes at all."
    },
    {
        question: "How much does mobile home insurance cost in 2026?",
        answer: "Mobile home insurance costs $700-$1,500 per year on average. Costs depend on home value, age, location, and whether it's permanently anchored. Homes in hurricane or tornado zones pay significantly more."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Manufactured Housing Insurance",
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
