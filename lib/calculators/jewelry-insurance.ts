// ============================================
// JEWELRY INSURANCE CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Jewelry Insurance Calculator",
    tagline: "Free 2026 Jewelry Coverage Estimator",
    description: "Calculate jewelry insurance costs. Floater coverage for engagement rings, watches, and valuables. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/jewelry-insurance",
};

// ============================================
// JEWELRY TYPES
// ============================================
export const JEWELRY_TYPES = [
    { id: "engagement", name: "Engagement Ring", factor: 1.0, description: "Diamond rings" },
    { id: "watch-luxury", name: "Luxury Watch", factor: 1.3, description: "Rolex, Omega, etc." },
    { id: "necklace", name: "Necklace/Pendant", factor: 0.9, description: "Gold, diamond chains" },
    { id: "earrings", name: "Earrings", factor: 0.85, description: "Diamond studs, hoops" },
    { id: "bracelet", name: "Bracelet", factor: 0.9, description: "Tennis bracelets, bangles" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "replacement", name: "Replacement Value", description: "Full new replacement" },
    { id: "actual-value", name: "Actual Cash Value", description: "Depreciated value" },
    { id: "agreed-value", name: "Agreed Value", description: "Fixed payout amount" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Rate", value: "1-2%", description: "Of appraised value" },
    { label: "Engagement Ring Avg", value: "$5,500", description: "US average 2026" },
    { label: "Loss Rate", value: "~7%", description: "Rings lost annually" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does jewelry insurance cost in 2026?",
        answer: "Jewelry insurance typically costs 1-2% of the appraised value per year. A $5,000 engagement ring costs $50-$100/year to insure. Rates vary by location, security, and coverage type."
    },
    {
        question: "What does jewelry insurance cover?",
        answer: "Jewelry floater policies cover loss, theft, damage, and mysterious disappearance. Unlike homeowners insurance (which has low sub-limits for jewelry), floaters provide full replacement value without deductibles."
    },
    {
        question: "Do I need a separate jewelry insurance policy?",
        answer: "Standard homeowners policies limit jewelry claims to $1,000-$2,500. For valuable pieces, purchase a jewelry floater (scheduled personal property endorsement) or standalone policy from specialists like Jewelers Mutual."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Insuring Jewelry and Valuables",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Renters Insurance", url: "/renters-insurance", description: "Tenant coverage" },
    { name: "Condo Insurance", url: "/condo-insurance", description: "HO-6 coverage" },
];
