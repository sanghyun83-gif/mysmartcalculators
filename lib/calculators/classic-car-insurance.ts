// ============================================
// CLASSIC CAR INSURANCE CALCULATOR - QUICK v3.0
// $95 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Classic Car Insurance Calculator",
    tagline: "Free 2026 Classic Car Coverage Estimator",
    description: "Calculate classic car insurance costs. Agreed-value coverage for antique, vintage, and muscle cars. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/classic-car-insurance",
};

// ============================================
// VEHICLE TYPES
// ============================================
export const VEHICLE_TYPES = [
    { id: "antique", name: "Antique (Pre-1948)", factor: 1.2, description: "25+ years, original" },
    { id: "classic", name: "Classic (1948-1979)", factor: 1.0, description: "Collector quality" },
    { id: "muscle", name: "Muscle Car (1964-1973)", factor: 1.3, description: "High-performance" },
    { id: "exotic", name: "Exotic/Sports Car", factor: 1.5, description: "Limited production" },
    { id: "custom", name: "Custom/Modified", factor: 1.4, description: "Restored or modified" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout amount" },
    { id: "stated-value", name: "Stated Value", description: "Up to stated amount" },
    { id: "replacement", name: "Guaranteed Replacement", description: "Replace with equivalent" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$300-$700", description: "Per year" },
    { label: "Classic Car Value", value: "$30K+", description: "Average collector" },
    { label: "Market Size", value: "$8B+", description: "Classic car insurance" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does classic car insurance cost in 2026?",
        answer: "Classic car insurance costs $300-$900 per year on average, which is typically 40-60% less than standard auto insurance. Rates depend on vehicle value, usage limits, and storage. Hagerty, Grundy, and American Collectors offer specialized coverage."
    },
    {
        question: "What is agreed value vs stated value coverage?",
        answer: "Agreed Value guarantees a fixed payout if the car is totaled, with no depreciation. Stated Value pays up to your stated amount OR actual cash value, whichever is less. For valuable classics, always choose Agreed Value."
    },
    {
        question: "What are the requirements for classic car insurance?",
        answer: "Requirements typically include: vehicle age (15-25+ years), limited annual mileage (2,500-7,500 miles), secure storage (garage), a primary daily driver vehicle, and a clean driving record. Some insurers require photos or inspections."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Classic Car Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Bike coverage" },
    { name: "Collectible Insurance", url: "/collectible-insurance", description: "Valuables coverage" },
];
