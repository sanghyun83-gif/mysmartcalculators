// ============================================
// SNOWMOBILE INSURANCE CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Snowmobile Insurance Calculator",
    tagline: "Free 2026 Snowmobile Coverage Estimator",
    description: "Calculate snowmobile insurance costs. Coverage for Ski-Doo, Polaris, and Arctic Cat snowmobiles. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/snowmobile-insurance",
};

// ============================================
// SNOWMOBILE TYPES
// ============================================
export const SNOWMOBILE_TYPES = [
    { id: "trail", name: "Trail/Touring", factor: 0.9, description: "Standard trail riding" },
    { id: "sport", name: "Sport/Performance", factor: 1.2, description: "High-speed racing style" },
    { id: "mountain", name: "Mountain/Powder", factor: 1.3, description: "Deep snow, backcountry" },
    { id: "utility", name: "Utility/Work", factor: 0.8, description: "Work/ranch use" },
    { id: "crossover", name: "Crossover", factor: 1.0, description: "Trail + off-trail" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "comprehensive", name: "Comprehensive", description: "Theft, fire, weather" },
    { id: "collision", name: "Collision", description: "Accident damage" },
    { id: "uninsured", name: "Uninsured Motorist", description: "Hit-and-run protection" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$150-$500", description: "Per year" },
    { label: "US Snowmobiles", value: "1.2M+", description: "Registered" },
    { label: "Trail Sled Avg", value: "$200-$350", description: "Per year" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does snowmobile insurance cost in 2026?",
        answer: "Snowmobile insurance costs $150-$500 per year for recreational use. Trail sleds average $200-$350/year, while high-performance mountain sleds can cost $400-$600. Rates depend on sled value, riding experience, and coverage level."
    },
    {
        question: "Is snowmobile insurance required?",
        answer: "Liability insurance is required in some states (like Michigan, Minnesota, and Wisconsin) for registered snowmobiles. Even where not required, it's highly recommended as homeowner's policies typically exclude motorized vehicles."
    },
    {
        question: "What does snowmobile insurance cover?",
        answer: "Snowmobile insurance covers liability (bodily injury, property damage), collision damage, comprehensive (theft, fire, vandalism), uninsured motorist, medical payments, and accessories/custom equipment. Some policies include roadside/trailside assistance."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Snowmobile Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "ATV Insurance", url: "/atv-insurance", description: "ATV coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Bike coverage" },
    { name: "Boat Insurance", url: "/boat-insurance", description: "Watercraft coverage" },
];
