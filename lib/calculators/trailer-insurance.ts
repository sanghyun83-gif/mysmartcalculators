// ============================================
// TRAILER INSURANCE CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Trailer Insurance Calculator",
    tagline: "Free 2026 Trailer Coverage Estimator",
    description: "Calculate trailer insurance costs. Coverage for utility, cargo, and enclosed trailers. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/trailer-insurance",
};

// ============================================
// TRAILER TYPES
// ============================================
export const TRAILER_TYPES = [
    { id: "utility", name: "Utility Trailer", factor: 0.7, description: "Open flatbed, multi-purpose" },
    { id: "cargo", name: "Cargo Trailer", factor: 0.9, description: "Enclosed, general cargo" },
    { id: "car-hauler", name: "Car Hauler", factor: 1.2, description: "Vehicle transport" },
    { id: "equipment", name: "Equipment Trailer", factor: 1.1, description: "Heavy equipment hauling" },
    { id: "horse", name: "Horse Trailer", factor: 1.3, description: "Livestock transport" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "comprehensive", name: "Comprehensive", description: "Theft, weather, vandalism" },
    { id: "collision", name: "Collision", description: "Accident damage" },
    { id: "cargo", name: "Cargo Coverage", description: "Contents protection" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$75-$400", description: "Per year" },
    { label: "Utility Trailer", value: "$50-$150", description: "Cheapest option" },
    { label: "Cargo Coverage", value: "$5,000-$25,000", description: "Optional add-on" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does trailer insurance cost in 2026?",
        answer: "Trailer insurance costs $75-$400 per year depending on type and value. Basic utility trailers are cheapest ($50-$150/year), while enclosed cargo and horse trailers cost more ($200-$500). Commercial use increases rates significantly."
    },
    {
        question: "Does my auto insurance cover my trailer?",
        answer: "Your auto liability may extend to the trailer when towing, but comprehensive and collision coverage typically don't. A standalone trailer policy or endorsement is needed for physical damage coverage to the trailer itself."
    },
    {
        question: "What factors affect trailer insurance rates?",
        answer: "Key factors include trailer type, value, usage (personal vs commercial), what you haul (cargo value), and storage location. Enclosed trailers cost more to insure than open utility trailers. Adding cargo coverage increases premiums."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Trailer Insurance Coverage",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Camper Insurance", url: "/camper-insurance", description: "Travel trailers" },
    { name: "RV Insurance", url: "/rv-insurance", description: "Motorhome coverage" },
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard coverage" },
];
