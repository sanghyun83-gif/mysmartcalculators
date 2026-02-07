// ============================================
// WINDSTORM INSURANCE CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Windstorm Insurance Calculator",
    tagline: "Free 2026 Wind Insurance Estimator",
    description: "Calculate windstorm insurance costs. Wind-only coverage for high-wind zones, tornadoes, and straight-line winds. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/windstorm-insurance",
};

// ============================================
// WIND ZONES
// ============================================
export const WIND_ZONES = [
    { id: "tier-1", name: "Tier 1 - Coastal Seaward", factor: 3.0, description: "Highest wind exposure" },
    { id: "tier-2", name: "Tier 2 - Coastal Inland", factor: 2.0, description: "High wind zone" },
    { id: "tornado-alley", name: "Tornado Alley", factor: 1.8, description: "Central plains" },
    { id: "moderate", name: "Moderate Wind Zone", factor: 1.0, description: "Standard rates" },
    { id: "low", name: "Low Wind Zone", factor: 0.6, description: "Minimal wind risk" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling Coverage", baseCost: 800, description: "Structure protection" },
    { id: "personal-property", name: "Personal Property", baseCost: 200, description: "Belongings" },
    { id: "other-structures", name: "Other Structures", baseCost: 100, description: "Detached buildings" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$600-$4,000", description: "Per year" },
    { label: "Wind Deductible", value: "1-5%", description: "Of coverage" },
    { label: "Annual Wind Claims", value: "$20B+", description: "US total" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is windstorm insurance?",
        answer: "Windstorm insurance covers damage from wind events including hurricanes, tornadoes, straight-line winds, and severe thunderstorms. In coastal areas like Texas and Florida, it's often a separate policy from homeowners insurance, purchased through state pools like TWIA."
    },
    {
        question: "How is windstorm insurance different from hurricane insurance?",
        answer: "You Windstorm covers all wind damage (tornadoes, severe storms, hurricanes), while hurricane insurance specifically covers named tropical storms. In Texas, TWIA provides windstorm coverage for coastal tier counties. Most inland areas include wind in standard homeowners policies."
    },
    {
        question: "How much does windstorm insurance cost in Texas (2026)?",
        answer: "Texas coastal windstorm insurance through TWIA costs $1,500-$5,000+ per year depending on tier (Tier 1 coastal pays most), home value, and WPI-8 certificate discounts. Building to windstorm standards can reduce premiums significantly."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Texas Windstorm Insurance Assoc (TWIA)",
        title: "Windstorm Coverage",
        url: "https://www.twia.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Hurricane Insurance", url: "/hurricane-insurance", description: "Coastal coverage" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Flood Insurance", url: "/flood-insurance", description: "NFIP coverage" },
];
