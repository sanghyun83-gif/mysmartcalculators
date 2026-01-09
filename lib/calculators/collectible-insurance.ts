// ============================================
// COLLECTIBLE INSURANCE CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Collectible Insurance Calculator",
    tagline: "Free 2026 Collectibles Coverage Estimator",
    description: "Calculate collectible insurance costs. Coverage for sports cards, coins, stamps, and memorabilia. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/collectible-insurance",
};

// ============================================
// COLLECTIBLE TYPES
// ============================================
export const COLLECTIBLE_TYPES = [
    { id: "sports-cards", name: "Sports Cards", factor: 1.2, description: "Baseball, basketball, football" },
    { id: "coins", name: "Coins & Currency", factor: 1.0, description: "Rare coins, paper money" },
    { id: "stamps", name: "Stamps", factor: 0.9, description: "Philatelic collections" },
    { id: "comics", name: "Comic Books", factor: 1.1, description: "Vintage, graded comics" },
    { id: "memorabilia", name: "Sports Memorabilia", factor: 1.3, description: "Autographs, game-used items" },
    { id: "toys", name: "Vintage Toys", factor: 1.0, description: "Action figures, dolls" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout amount" },
    { id: "blanket", name: "Blanket Coverage", description: "Total collection value" },
    { id: "scheduled", name: "Scheduled Items", description: "Individual item listing" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Rate", value: "0.5-2%", description: "Of appraised value" },
    { label: "Sports Card Market", value: "$15B+", description: "Annual 2026" },
    { label: "Claims Rate", value: "~3%", description: "Collector claims" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does collectible insurance cost in 2026?",
        answer: "Collectible insurance typically costs 0.5-2% of the collection's appraised value per year. A $20,000 sports card collection costs $100-$400/year to insure. High-value graded cards may require individual scheduling."
    },
    {
        question: "What does collectible insurance cover?",
        answer: "Collectible insurance covers theft, accidental damage, fire, water damage, and shipping damage. Unlike homeowners policies with low collectibles limits ($1,000-$2,500), specialized policies provide full agreed-value coverage."
    },
    {
        question: "Do I need PSA/BGS grading for insurance?",
        answer: "While not required, professionally graded items (PSA, BGS, CGC for comics) are easier to insure and claim. Grading provides authentication and standardized condition assessment. Ungraded items require appraisals."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Insuring Collectibles",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Art Insurance", url: "/art-insurance", description: "Fine art coverage" },
    { name: "Jewelry Insurance", url: "/jewelry-insurance", description: "Valuables floater" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
];
