// ============================================
// STOCK OPTION CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Stock Option Calculator",
    tagline: "Free 2026 Stock Option Value Calculator",
    description: "Calculate stock option gains, exercise costs, and tax implications. Based on 2026 IRS guidelines for ISOs and NSOs.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/stock-option",
};

// ============================================
// OPTION TYPES
// ============================================
export const OPTION_TYPES = [
    { id: "iso", name: "ISO (Incentive Stock Option)", taxType: "AMT possible", description: "Qualified, tax-advantaged" },
    { id: "nso", name: "NSO (Non-Qualified)", taxType: "Ordinary income", description: "Taxed at exercise" },
    { id: "rsu", name: "RSU (Restricted Stock Unit)", taxType: "Ordinary income", description: "No exercise cost" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Option Grant", value: "5,000", description: "Shares" },
    { label: "ISO Tax Advantage", value: "Up to 20%", description: "LTCG rate" },
    { label: "Typical Vesting", value: "4 years", description: "With 1-year cliff" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the difference between ISO and NSO stock options?",
        answer: "ISOs (Incentive Stock Options) offer tax advantages - you pay capital gains tax instead of ordinary income tax if you hold for 1+ year after exercise and 2+ years after grant. NSOs (Non-Qualified) are taxed as ordinary income at exercise. Most employees receive NSOs."
    },
    {
        question: "How do I calculate my stock option value?",
        answer: "Stock option value = (Current Price - Strike Price) × Number of Options. For example, if you have 1,000 options with a $10 strike price and the stock is at $50, your options are worth (50-10) × 1,000 = $40,000 before taxes."
    },
    {
        question: "When should I exercise my stock options?",
        answer: "Consider exercising when: the spread is significant, you can afford the exercise cost, you believe in future growth, or you're leaving the company (typically 90 days to exercise). For ISOs, consider AMT implications. Consult a tax advisor."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Stock Option Tax Treatment",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "ESPP Calculator", url: "/espp", description: "Stock purchase" },
    { name: "401k Calculator", url: "/401k", description: "Retirement" },
    { name: "Capital Gains", url: "/capital-gains", description: "Tax on gains" },
];
