// ============================================
// ATV INSURANCE CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "ATV Insurance Calculator",
    tagline: "Free 2026 ATV Coverage Estimator",
    description: "Calculate ATV insurance costs. Coverage for Polaris, Can-Am, Honda, and Yamaha ATVs. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/atv-insurance",
};

// ============================================
// ATV TYPES
// ============================================
export const ATV_TYPES = [
    { id: "sport", name: "Sport ATV", factor: 1.3, description: "High-performance racing" },
    { id: "utility", name: "Utility ATV", factor: 0.9, description: "Work/ranch/farm use" },
    { id: "youth", name: "Youth ATV", factor: 0.7, description: "Under 90cc, kids" },
    { id: "side-by-side", name: "Side-by-Side (UTV)", factor: 1.2, description: "2+ seats, roll cage" },
    { id: "touring", name: "Touring ATV", factor: 1.0, description: "Comfort, long-distance" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "comprehensive", name: "Comprehensive", description: "Theft, fire, weather" },
    { id: "collision", name: "Collision", description: "Accident damage" },
    { id: "accessories", name: "Accessories", description: "Aftermarket parts" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$100-$400", description: "Per year" },
    { label: "US ATVs Registered", value: "10M+", description: "Nationwide" },
    { label: "Utility ATV Avg", value: "$150-$250", description: "Per year" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does ATV insurance cost in 2026?",
        answer: "ATV insurance costs $100-$400 per year for recreational use. Utility ATVs average $150-$250/year, while sport ATVs and UTVs (side-by-sides) can cost $250-$500. Rates depend on ATV value, usage, and rider experience."
    },
    {
        question: "Is ATV insurance required by law?",
        answer: "Most states don't require ATV insurance for private land use, but it's required for riding on public trails in some states. Liability coverage is highly recommended since homeowner's policies typically exclude motorized recreational vehicles."
    },
    {
        question: "What does ATV insurance cover?",
        answer: "ATV insurance covers liability (bodily injury, property damage), collision damage, comprehensive (theft, fire, vandalism), uninsured motorist, medical payments, and aftermarket accessories. Some policies include roadside/trailside assistance."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "ATV and Off-Road Vehicle Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Snowmobile Insurance", url: "/snowmobile-insurance", description: "Winter sled coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Bike coverage" },
    { name: "Boat Insurance", url: "/boat-insurance", description: "Watercraft coverage" },
];
