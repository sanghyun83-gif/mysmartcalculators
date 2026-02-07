// ============================================
// RSU CALCULATOR - QUICK v3.0
// $80 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "RSU Calculator",
    tagline: "Free 2026 RSU Payout Negotiator",
    description: "Calculate your 2026 RSU value and taxes instantly. Free tech negotiator with official IRS Section 83(i) deferral benchmarks, Section 83(b) election benchmarks, and 2026 vesting data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/rsu",
};

// ============================================
// VESTING SCHEDULES
// ============================================
export const VESTING_SCHEDULES = [
    { id: "4year-cliff", name: "4-Year with 1-Year Cliff", description: "25% after year 1, monthly thereafter" },
    { id: "4year-monthly", name: "4-Year Monthly", description: "Equal monthly vesting" },
    { id: "3year-monthly", name: "3-Year Monthly", description: "33% annual vesting" },
    { id: "immediate", name: "Immediate Vest", description: "100% at grant" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg RSU Grant", value: "$50K-$200K", description: "Tech companies" },
    { label: "Tax Rate", value: "22-37%", description: "Federal + State" },
    { label: "Typical Vesting", value: "4 years", description: "With cliff" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How are RSUs taxed?",
        answer: "RSUs are taxed as ordinary income when they vest, not when granted. The value at vesting is added to your W-2 income. Companies typically withhold 22-37% for taxes. When you sell, any additional gain is taxed as capital gains (short or long-term based on holding period)."
    },
    {
        question: "What is a typical RSU vesting schedule?",
        answer: "The most common vesting schedule is 4 years with a 1-year cliff: 25% vests after year 1, then monthly or quarterly thereafter. Some companies use 3-year schedules or annual vesting. Check your grant agreement for specific terms."
    },
    {
        question: "How do I calculate my RSU value?",
        answer: "RSU Value = Number of RSUs × Current Stock Price. Unlike stock options, RSUs have no strike price - you receive the full share value. For example, 1,000 RSUs at $100/share = $100,000 gross value (before ~30% tax withholding)."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "IRS Section 83(i)",
        title: "Qualified Equity Grants and Tax Deferral",
        url: "https://www.irs.gov/",
        year: "2026"
    },
    {
        source: "IRS Section 83(b)",
        title: "Election to Include in Gross Income in Year of Transfer",
        url: "https://www.irs.gov/",
        year: "2026"
    },
    {
        source: "SEC Rule 144",
        title: "Selling Restricted and Control Securities",
        url: "https://www.sec.gov/",
        year: "2026"
    },
];

export const CITATION_NOTE = "Based on official IRS Section 83(i) tech equity guidelines, SEC Rule 144 sale restrictions, and 2026 federal withholding requirements for supplemental wages.";

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Stock Option", url: "/stock-option", description: "ISO/NSO options" },
    { name: "ESPP Calculator", url: "/espp", description: "Stock purchase" },
    { name: "Capital Gains", url: "/capital-gains", description: "Tax on gains" },
];
