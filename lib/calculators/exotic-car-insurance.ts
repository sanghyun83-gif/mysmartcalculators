// ============================================
// EXOTIC CAR INSURANCE CALCULATOR - QUICK v3.0
// $95 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Exotic Car Insurance Calculator",
    tagline: "Free 2026 Exotic Car Coverage Estimator",
    description: "Calculate exotic car insurance costs. Specialized coverage for Lamborghini, Ferrari, McLaren, and supercars. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/exotic-car-insurance",
};

// ============================================
// EXOTIC CAR BRANDS
// ============================================
export const EXOTIC_BRANDS = [
    { id: "ferrari", name: "Ferrari", factor: 1.4, description: "Italian supercar" },
    { id: "lamborghini", name: "Lamborghini", factor: 1.5, description: "Italian supercar" },
    { id: "mclaren", name: "McLaren", factor: 1.3, description: "British supercar" },
    { id: "porsche", name: "Porsche (911 GT/Turbo)", factor: 1.1, description: "German performance" },
    { id: "bentley", name: "Bentley/Rolls-Royce", factor: 1.2, description: "Luxury grand tourer" },
    { id: "other", name: "Other Exotic", factor: 1.3, description: "Aston Martin, etc." },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout, no depreciation" },
    { id: "track-day", name: "Track Day Coverage", description: "Optional track use" },
    { id: "oem-parts", name: "OEM Parts Only", description: "Original manufacturer parts" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$2,500-$10,000+", description: "Per year" },
    { label: "Exotic Car Value", value: "$150K-$500K+", description: "Typical range" },
    { label: "Premium Rate", value: "2-5%", description: "Of vehicle value" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does exotic car insurance cost in 2026?",
        answer: "Exotic car insurance costs $2,500-$10,000+ per year, or roughly 2-5% of the vehicle's value. A $300,000 Lamborghini might cost $6,000-$15,000/year. Rates depend on driving record, storage, and annual mileage limits."
    },
    {
        question: "Why is exotic car insurance so expensive?",
        answer: "Exotic cars have high repair costs (OEM parts, specialized mechanics), high theft risk, and significant depreciation exposure. Insurers also factor in the higher likelihood of expensive claims from performance driving."
    },
    {
        question: "What insurers specialize in exotic cars?",
        answer: "Hagerty, Chubb, AIG Private Client, and Cincinnati Insurance specialize in exotic and high-value vehicles. They offer agreed-value coverage, track day options, and understand exotic car values better than standard carriers."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Insuring Luxury and Exotic Vehicles",
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
