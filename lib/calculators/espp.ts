// ============================================
// ESPP CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Low | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "ESPP Calculator",
    tagline: "Free 2026 ESPP Payout Negotiator",
    description: "Calculate your 2026 ESPP gains and taxes instantly. Free stock negotiator with official IRS Publication 525 guidelines, Section 423 benchmarks, and lookback provision analysis.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/espp",
};

// ============================================
// DISCOUNT TYPES
// ============================================
export const DISCOUNT_TYPES = [
    { id: "standard15", name: "15% Discount", rate: 0.15, description: "Standard qualified plan" },
    { id: "lookback15", name: "15% + Lookback", rate: 0.15, lookback: true, description: "Lower of start/end price" },
    { id: "reduced10", name: "10% Discount", rate: 0.10, description: "Reduced discount plan" },
    { id: "reduced5", name: "5% Discount", rate: 0.05, description: "Minimal discount plan" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Max Contribution", value: "$25,000/yr", description: "IRS limit" },
    { label: "Typical Discount", value: "15%", description: "Instant gain" },
    { label: "Max Paycheck %", value: "10-15%", description: "Common limit" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the ESPP contribution limit for 2026?",
        answer: "The IRS limits ESPP purchases to $25,000 worth of stock per year (based on stock price at grant date). Most employers also limit contributions to 10-15% of your paycheck. These are after-tax contributions, not pre-tax like 401k."
    },
    {
        question: "How does the ESPP discount work?",
        answer: "Most qualified ESPPs offer a 15% discount on company stock. With a 'lookback' provision, you get 15% off the lower of the price at the start or end of the offering period, potentially giving you 30-40%+ gains if the stock rises."
    },
    {
        question: "How is ESPP taxed?",
        answer: "At purchase, you owe no tax. When you sell: if held 2+ years from grant and 1+ year from purchase (qualifying disposition), the discount is taxed as income and additional gains as capital gains. Otherwise (disqualifying disposition), more is taxed as ordinary income."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "IRS Publication 525 (2026)",
        title: "Taxable and Nontaxable Income | Stock-Based Compensation",
        url: "https://www.irs.gov/publications/p525",
        year: "2026"
    },
    {
        source: "IRS Section 423",
        title: "Employee Stock Purchase Plans",
        url: "https://www.irs.gov/",
        year: "2026"
    },
    {
        source: "SEC Regulation S-K",
        title: "Stock Purchase Plan Disclosure Requirements",
        url: "https://www.sec.gov/",
        year: "2026"
    },
];

export const CITATION_NOTE = "Based on official IRS Publication 525 equity compensation guidelines, Section 423 qualifying disposition rules, and 2026 federal income tax withholding standards.";

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "401k Calculator", url: "/401k", description: "Retirement savings" },
    { name: "HSA Calculator", url: "/hsa", description: "Health savings" },
    { name: "RSU Calculator", url: "/rsu", description: "Stock units" },
];
