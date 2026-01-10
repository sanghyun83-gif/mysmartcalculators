// ============================================
// DIRT BIKE INSURANCE CALCULATOR - QUICK v3.0
// $60 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Dirt Bike Insurance Calculator",
    tagline: "Free 2026 Dirt Bike Coverage Estimator",
    description: "Calculate dirt bike insurance costs. Coverage for motocross, enduro, and trail bikes. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/dirt-bike-insurance",
};

// ============================================
// DIRT BIKE TYPES
// ============================================
export const DIRTBIKE_TYPES = [
    { id: "motocross", name: "Motocross (MX)", factor: 1.4, description: "Racing, high-performance" },
    { id: "enduro", name: "Enduro/Dual-Sport", factor: 1.1, description: "Street-legal off-road" },
    { id: "trail", name: "Trail Bike", factor: 0.9, description: "Recreational trail riding" },
    { id: "supermoto", name: "Supermoto", factor: 1.2, description: "Street/dirt hybrid" },
    { id: "youth", name: "Youth Dirt Bike", factor: 0.7, description: "Under 125cc, kids" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "comprehensive", name: "Comprehensive", description: "Theft, fire, vandalism" },
    { id: "collision", name: "Collision", description: "Crash damage" },
    { id: "competition", name: "Competition Coverage", description: "Race/event coverage" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$75-$300", description: "Per year" },
    { label: "Trail Bike Avg", value: "$100-$200", description: "Per year" },
    { label: "MX Race Premium", value: "+50-100%", description: "Competition rider" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does dirt bike insurance cost in 2026?",
        answer: "Dirt bike insurance costs $75-$300 per year for recreational use. Trail bikes average $100-$200/year, while motocross bikes cost $200-$400 due to higher risk. Competition/racing coverage adds 50-100% to premiums."
    },
    {
        question: "Do I need insurance for a dirt bike?",
        answer: "Insurance isn't required for dirt bikes used only on private property. However, dual-sport or street-legal bikes require at minimum liability coverage. Even for off-road-only bikes, theft and damage coverage is recommended."
    },
    {
        question: "Does homeowners insurance cover dirt bikes?",
        answer: "Homeowners policies typically exclude motorized vehicles like dirt bikes from liability and damage coverage. A separate dirt bike policy or specialty powersports policy is needed for proper protection."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Motorcycle and Off-Road Vehicle Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "ATV Insurance", url: "/atv-insurance", description: "ATV coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Street bike" },
    { name: "Snowmobile Insurance", url: "/snowmobile-insurance", description: "Winter sled" },
];
