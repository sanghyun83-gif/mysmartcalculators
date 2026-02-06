// ============================================
// MEDICARE PREMIUM CALCULATOR - QUICK v3.0
// $70 CPC | Competition: High | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Medicare Premium Calculator",
    tagline: "Free 2026 Medicare Part B Premium Calculator",
    description: "Calculate your Medicare Part B premium including IRMAA surcharges. Based on 2026 CMS guidelines for income-related adjustments.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/medicare-premium",
};

// ============================================
// IRMAA BRACKETS (2026)
// ============================================
export const IRMAA_BRACKETS = [
    { income: "$106,000 or less", single: "$106,000", married: "$212,000", partB: "$185.00", partD: "$0.00" },
    { income: "$106,001 - $133,500", single: "??133,500", married: "??267,000", partB: "$259.00", partD: "$13.70" },
    { income: "$133,501 - $167,000", single: "??167,000", married: "??334,000", partB: "$370.00", partD: "$35.30" },
    { income: "$167,001 - $200,000", single: "??200,000", married: "??400,000", partB: "$480.90", partD: "$57.00" },
    { income: "$200,001 - $500,000", single: "??500,000", married: "??750,000", partB: "$591.90", partD: "$78.60" },
    { income: "Over $500,000", single: ">$500,000", married: ">$750,000", partB: "$628.90", partD: "$85.80" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Standard Part B", value: "$185", description: "Monthly 2026" },
    { label: "Max IRMAA", value: "$628.90", description: "Over $500K income" },
    { label: "Part A", value: "$0", description: "Most people" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is IRMAA and how does it affect my premium?",
        answer: "IRMAA (Income-Related Monthly Adjustment Amount) is a surcharge added to Medicare Part B and Part D premiums for higher-income beneficiaries. It's based on your modified adjusted gross income (MAGI) from 2 years ago. For 2026, IRMAA applies to individuals with MAGI over $106,000 or couples over $212,000."
    },
    {
        question: "What is the 2026 Medicare Part B premium?",
        answer: "The standard 2026 Medicare Part B premium is $185.00 per month for individuals with income at or below $106,000 ($212,000 for married couples). Higher earners pay more due to IRMAA surcharges, ranging from $259.00 to $628.90 per month depending on income level."
    },
    {
        question: "Can I reduce my Medicare premium?",
        answer: "You can appeal IRMAA if you've had a life-changing event (retirement, divorce, death of spouse) that significantly reduced your income. File Form SSA-44 with Social Security. You can also reduce future premiums by managing MAGI through Roth conversions timing, charitable giving, and tax-efficient retirement withdrawals."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Centers for Medicare & Medicaid Services",
        title: "Medicare Premiums",
        url: "https://www.medicare.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Social Security", url: "/social-security", description: "SS benefits" },
    { name: "RMD Calculator", url: "/rmd", description: "Required distributions" },
    { name: "Health Insurance", url: "/health-insurance", description: "Coverage costs" },
];
