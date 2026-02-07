// ============================================
// ANTIQUE CAR INSURANCE CALCULATOR - QUICK v3.0
// $90 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Antique Car Insurance Calculator",
    tagline: "Free 2026 Antique Vehicle Coverage Estimator",
    description: "Calculate antique car insurance costs. Specialized coverage for pre-1948 vehicles and vintage automobiles. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/antique-car-insurance",
};

// ============================================
// VEHICLE ERAS
// ============================================
export const VEHICLE_ERAS = [
    { id: "brass-era", name: "Brass Era (Pre-1916)", factor: 1.5, description: "Earliest automobiles" },
    { id: "vintage", name: "Vintage (1916-1930)", factor: 1.3, description: "Model T era" },
    { id: "pre-war", name: "Pre-War (1931-1948)", factor: 1.1, description: "Depression & WWII era" },
    { id: "post-war", name: "Post-War Classic (1949-1959)", factor: 1.0, description: "Early chrome era" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout amount" },
    { id: "stated-value", name: "Stated Value", description: "Up to stated amount" },
    { id: "spare-parts", name: "Spare Parts Coverage", description: "Separate parts inventory" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$200-$600", description: "Per year" },
    { label: "Antique Definition", value: "25+ Years", description: "Most states" },
    { label: "Mileage Limit", value: "1,000-2,500", description: "Miles per year" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does antique car insurance cost in 2026?",
        answer: "Antique car insurance costs $200-$600 per year on average, significantly less than standard auto insurance. Low rates reflect limited usage (1,000-2,500 miles/year), secure storage requirements, and agreed-value coverage."
    },
    {
        question: "What qualifies as an antique vehicle for insurance?",
        answer: "Most states and insurers define antique vehicles as 25+ years old, though some require 30+ years. The vehicle must be maintained in original or restored condition, used primarily for shows/exhibitions, and not as a daily driver."
    },
    {
        question: "Do I need a separate policy for my antique car?",
        answer: "Yes, antique cars require specialized policies from carriers like Hagerty, Grundy, or American Collectors. Standard auto insurance doesn't provide agreed-value coverage or understand collector vehicle values."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Antique and Classic Car Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Classic Car Insurance", url: "/classic-car-insurance", description: "Collector vehicles" },
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard coverage" },
    { name: "Collectible Insurance", url: "/collectible-insurance", description: "Valuables coverage" },
];
