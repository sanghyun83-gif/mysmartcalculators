// ============================================
// MANUFACTURED HOME INSURANCE CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Manufactured Home Insurance Calculator",
    tagline: "Free 2026 HUD Code Home Insurance Estimator",
    description: "Calculate manufactured home insurance costs. Coverage for HUD-code homes, modular homes, and factory-built housing. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/manufactured-home-insurance",
};

// ============================================
// HOME VALUE TIERS
// ============================================
export const HOME_VALUES = [
    { id: "under50k", name: "Under $50,000", factor: 0.65 },
    { id: "50k-100k", name: "$50,000 - $100,000", factor: 0.80 },
    { id: "100k-175k", name: "$100,000 - $175,000", factor: 1.0 },
    { id: "175k-300k", name: "$175,000 - $300,000", factor: 1.35 },
    { id: "over300k", name: "Over $300,000", factor: 1.70 },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling Coverage", baseCost: 550, description: "Structure protection" },
    { id: "personal-property", name: "Personal Property", baseCost: 175, description: "Belongings" },
    { id: "liability", name: "Liability", baseCost: 90, description: "Guest injuries" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$750-$1,400", description: "Per year" },
    { label: "HUD Code Homes", value: "22M+", description: "In the US" },
    { label: "Anchor Discount", value: "10-20%", description: "If permanently tied down" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is manufactured home insurance?",
        answer: "Manufactured home insurance covers homes built in factories to HUD (Department of Housing) standards. These differ from site-built homes and require specialized HO-7 policies. Coverage includes dwelling, personal property, liability, and additional living expenses."
    },
    {
        question: "Is manufactured home insurance different from mobile home insurance?",
        answer: "They're often used interchangeably, but 'manufactured home' specifically refers to homes built after 1976 under HUD code standards. Older 'mobile homes' pre-date these standards. Both use HO-7 policies, but newer HUD-code homes may get better rates."
    },
    {
        question: "How can I lower my manufactured home insurance costs?",
        answer: "Permanently anchor your home (10-20% discount), install storm straps, update plumbing/electrical, install security systems, and maintain good credit. Bundling with auto insurance can also save 10-15%."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Manufactured and Factory-Built Home Coverage",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Mobile Home Insurance", url: "/mobile-home-insurance", description: "HO-7 coverage" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Flood Insurance", url: "/flood-insurance", description: "Flood protection" },
];
