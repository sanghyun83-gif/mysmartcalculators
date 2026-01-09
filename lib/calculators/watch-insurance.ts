// ============================================
// WATCH INSURANCE CALCULATOR - QUICK v3.0
// $60 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Watch Insurance Calculator",
    tagline: "Free 2026 Luxury Watch Insurance Estimator",
    description: "Calculate watch insurance costs. Coverage for Rolex, Omega, Patek Philippe, and luxury timepieces. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/watch-insurance",
};

// ============================================
// WATCH BRANDS
// ============================================
export const WATCH_BRANDS = [
    { id: "rolex", name: "Rolex", factor: 1.2, description: "Submariner, Daytona, etc." },
    { id: "patek", name: "Patek Philippe", factor: 1.5, description: "Nautilus, Calatrava" },
    { id: "omega", name: "Omega", factor: 1.0, description: "Speedmaster, Seamaster" },
    { id: "audemars", name: "Audemars Piguet", factor: 1.4, description: "Royal Oak" },
    { id: "other-luxury", name: "Other Luxury", factor: 1.1, description: "TAG Heuer, Breitling, etc." },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "replacement", name: "Full Replacement", description: "New watch same model" },
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout amount" },
    { id: "actual-value", name: "Actual Cash Value", description: "Depreciated value" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Rate", value: "1-3%", description: "Of appraised value" },
    { label: "Rolex Avg Value", value: "$12,000+", description: "New 2026" },
    { label: "Theft Rate", value: "~5%", description: "Luxury watches stolen" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does watch insurance cost in 2026?",
        answer: "Watch insurance typically costs 1-3% of the watch's appraised value per year. A $15,000 Rolex costs $150-$450/year to insure. High-end pieces like Patek Philippe may have higher rates due to theft risk."
    },
    {
        question: "What does watch insurance cover?",
        answer: "Watch insurance covers theft, loss, accidental damage, and mysterious disappearance. Unlike homeowners policies (limited to $1,500 for jewelry), floaters provide full replacement value worldwide with no deductible."
    },
    {
        question: "Do I need a professional appraisal for watch insurance?",
        answer: "Yes, most insurers require a recent appraisal (within 2-3 years) for watches valued over $5,000. Some accept purchase receipts for newer watches. Specialist insurers like HODINKEE or Jewelers Mutual offer watch-specific coverage."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Insuring Valuables and Collectibles",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Jewelry Insurance", url: "/jewelry-insurance", description: "Ring & necklace coverage" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Renters Insurance", url: "/renters-insurance", description: "Tenant coverage" },
];
