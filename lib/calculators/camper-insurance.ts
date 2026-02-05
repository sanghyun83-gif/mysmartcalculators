// ============================================
// CAMPER INSURANCE CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Camper Insurance Calculator",
    tagline: "Free 2026 Camper Coverage Estimator",
    description: "Calculate camper insurance costs. Coverage for truck campers, pop-ups, and slide-in campers. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/camper-insurance",
};

// ============================================
// CAMPER TYPES
// ============================================
export const CAMPER_TYPES = [
    { id: "truck-camper", name: "Truck Camper", factor: 1.0, description: "Slides into truck bed" },
    { id: "pop-up", name: "Pop-Up Camper", factor: 0.7, description: "Folding trailer camper" },
    { id: "teardrop", name: "Teardrop Trailer", factor: 0.6, description: "Small, lightweight" },
    { id: "a-frame", name: "A-Frame Camper", factor: 0.8, description: "Folding hard-sided" },
    { id: "toy-hauler", name: "Toy Hauler", factor: 1.2, description: "Cargo + living space" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "comprehensive", name: "Comprehensive", description: "Theft, weather, vandalism" },
    { id: "collision", name: "Collision", description: "Accident damage" },
    { id: "personal-effects", name: "Personal Effects", description: "Contents coverage" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$200-$800", description: "Per year" },
    { label: "Pop-Up Average", value: "$150-$400", description: "Cheapest option" },
    { label: "Contents Coverage", value: "$3,000-$5,000", description: "Personal effects" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does camper insurance cost in 2026?",
        answer: "Camper insurance costs $200-$800 per year depending on type. Pop-up campers are cheapest ($150-$400), while truck campers and toy haulers cost more ($400-$800). Rates depend on value, usage frequency, and storage location."
    },
    {
        question: "Do I need separate insurance for my camper?",
        answer: "Yes, most auto policies don't fully cover campers. While some liability may extend from your auto policy when towing, comprehensive and collision coverage for the camper itself requires a separate policy or endorsement."
    },
    {
        question: "Can I add camper insurance to my auto policy?",
        answer: "Many insurers offer camper endorsements to existing auto policies, which is often cheaper than standalone policies. However, standalone camper insurance may offer better coverage limits and specialized options like personal effects coverage."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Camper and Trailer Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "RV Insurance", url: "/rv-insurance", description: "Motorhome coverage" },
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard coverage" },
    { name: "Boat Insurance", url: "/boat-insurance", description: "Watercraft coverage" },
];
