// ============================================
// ART INSURANCE CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Art Insurance Calculator",
    tagline: "Free 2026 Fine Art Insurance Estimator",
    description: "Calculate art insurance costs. Coverage for paintings, sculptures, and collectibles. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/art-insurance",
};

// ============================================
// ART TYPES
// ============================================
export const ART_TYPES = [
    { id: "painting", name: "Paintings", factor: 1.0, description: "Oil, acrylic, watercolor" },
    { id: "sculpture", name: "Sculptures", factor: 1.2, description: "Bronze, marble, mixed media" },
    { id: "photography", name: "Fine Photography", factor: 0.9, description: "Limited editions" },
    { id: "prints", name: "Prints & Lithographs", factor: 0.8, description: "Signed limited editions" },
    { id: "antiques", name: "Antiques", factor: 1.3, description: "Pre-1900 works" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout amount" },
    { id: "replacement", name: "Replacement Cost", description: "Current market value" },
    { id: "actual-value", name: "Actual Cash Value", description: "Depreciated value" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Rate", value: "0.5-1.5%", description: "Of appraised value" },
    { label: "US Art Market", value: "$30B+", description: "Annual 2026" },
    { label: "Claims Covered", value: "95%+", description: "All-risk policies" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does art insurance cost in 2026?",
        answer: "Art insurance typically costs 0.5-1.5% of the collection's appraised value per year. A $50,000 collection costs $250-$750/year to insure. Specialized insurers like Chubb or AXA Art offer competitive rates for fine art."
    },
    {
        question: "What does fine art insurance cover?",
        answer: "Fine art insurance covers theft, accidental damage, fire, water damage, and transit (during moves or exhibitions). Unlike homeowners policies with low limits, art floaters provide full agreed-value coverage with no deductible."
    },
    {
        question: "Do I need an appraisal for art insurance?",
        answer: "Yes, insurers require professional appraisals for pieces valued over $5,000-$10,000. Appraisals should be updated every 3-5 years to reflect current market values. Some insurers accept auction records or dealer invoices for recent purchases."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Insuring Fine Art and Collectibles",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Jewelry Insurance", url: "/jewelry-insurance", description: "Valuables coverage" },
    { name: "Watch Insurance", url: "/watch-insurance", description: "Luxury watch floater" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
];
