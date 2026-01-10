// ============================================
// RV INSURANCE CALCULATOR - QUICK v3.0
// $80 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "RV Insurance Calculator",
    tagline: "Free 2026 RV Coverage Estimator",
    description: "Calculate RV insurance costs. Coverage for motorhomes, travel trailers, and campers. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/rv-insurance",
};

// ============================================
// RV TYPES
// ============================================
export const RV_TYPES = [
    { id: "class-a", name: "Class A Motorhome", factor: 1.5, description: "Full-size, 26-45 ft" },
    { id: "class-b", name: "Class B Campervan", factor: 0.9, description: "Van conversion, 17-23 ft" },
    { id: "class-c", name: "Class C Motorhome", factor: 1.2, description: "Cab-over, 20-33 ft" },
    { id: "travel-trailer", name: "Travel Trailer", factor: 0.8, description: "Towable, 12-35 ft" },
    { id: "fifth-wheel", name: "Fifth Wheel", factor: 1.0, description: "Hitch in truck bed" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "full-timer", name: "Full-Timer Coverage", description: "Live in RV year-round" },
    { id: "vacation", name: "Vacation/Seasonal", description: "Occasional use" },
    { id: "storage", name: "Storage Coverage", description: "Parked/stored only" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$1,000-$3,000", description: "Per year" },
    { label: "RV Ownership", value: "11M+", description: "US households" },
    { label: "Full-Timer Rate", value: "+40-60%", description: "Higher premium" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does RV insurance cost in 2026?",
        answer: "RV insurance costs $1,000-$3,000 per year for vacation use, or $1,500-$5,000+ for full-timers. Class A motorhomes cost more ($2,000-$4,000+) while travel trailers are cheapest ($500-$1,500). Rates depend on RV value, usage, and driving record."
    },
    {
        question: "Do I need special insurance for living in an RV full-time?",
        answer: "Yes, full-timers need specialized coverage that includes personal liability, personal belongings (like homeowners), and medical payments. Standard RV policies assume vacation use only. Full-timer policies cost 40-60% more but provide essential coverage."
    },
    {
        question: "What's the difference between RV insurance and auto insurance?",
        answer: "RV insurance includes coverage for the living quarters (appliances, furniture, personal belongings), attached awnings, vacation liability, and emergency expenses. Auto insurance only covers the vehicle itself and doesn't protect personal property inside."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "RV and Recreational Vehicle Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard coverage" },
    { name: "Boat Insurance", url: "/boat-insurance", description: "Watercraft coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Bike coverage" },
];
