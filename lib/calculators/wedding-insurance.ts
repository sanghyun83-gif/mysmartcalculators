// ============================================
// WEDDING INSURANCE CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Wedding Insurance Calculator",
    tagline: "Free 2026 Wedding Coverage Estimator",
    description: "Calculate wedding insurance costs. Coverage for cancellation, liability, and vendor no-shows. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/wedding-insurance",
};

// ============================================
// WEDDING BUDGET TIERS
// ============================================
export const WEDDING_TIERS = [
    { id: "budget", name: "Budget ($10K-$25K)", factor: 0.8, description: "Small/intimate" },
    { id: "average", name: "Average ($25K-$50K)", factor: 1.0, description: "Standard wedding" },
    { id: "premium", name: "Premium ($50K-$100K)", factor: 1.3, description: "Upscale event" },
    { id: "luxury", name: "Luxury ($100K+)", factor: 1.6, description: "Destination/lavish" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "cancellation", name: "Cancellation/Postponement", description: "Weather, illness, vendor no-show" },
    { id: "liability", name: "Liability", description: "Guest injury, property damage" },
    { id: "gifts", name: "Gift Coverage", description: "Loss or damage to gifts" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Policy Cost", value: "$150-$500", description: "One-time premium" },
    { label: "Avg Wedding Cost", value: "$35,000", description: "US average 2026" },
    { label: "Cancellation Rate", value: "4-6%", description: "Of all weddings" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does wedding insurance cost in 2026?",
        answer: "Wedding insurance costs $150-$500 for a one-time policy, depending on coverage limits and wedding budget. Basic cancellation coverage starts around $150, while comprehensive policies with liability can cost $300-$500+."
    },
    {
        question: "What does wedding insurance cover?",
        answer: "Wedding insurance typically covers cancellation/postponement (due to weather, illness, venue closure), liability (guest injuries, property damage), vendor no-shows, lost deposits, damaged attire, and gift protection. COVID-related cancellations may require specific add-ons."
    },
    {
        question: "When should I buy wedding insurance?",
        answer: "Purchase wedding insurance as soon as you start making deposits, ideally 12-18 months before the wedding. Most policies can be purchased up to 14 days before the event. Earlier purchase provides longer coverage for cancellation scenarios."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Wedding Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Event Insurance", url: "/event-insurance", description: "Party/event coverage" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Property coverage" },
    { name: "Liability Insurance", url: "/liability-insurance", description: "General liability" },
];
