// ============================================
// BONUS TAX CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Bonus Tax Calculator",
    tagline: "Free 2026 Bonus Tax Withholding Calculator",
    description: "Calculate taxes on your bonus. Flat rate vs aggregate method comparison. Based on 2026 IRS supplemental wage guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/bonus-tax",
};

// ============================================
// WITHHOLDING METHODS
// ============================================
export const WITHHOLDING_METHODS = [
    { id: "flat", name: "Flat Rate (22%)", rate: 0.22, description: "Standard for bonuses under $1M" },
    { id: "aggregate", name: "Aggregate Method", rate: null, description: "Combined with regular pay" },
    { id: "over1m", name: "Over $1 Million", rate: 0.37, description: "37% on amount over $1M" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Federal Flat Rate", value: "22%", description: "Under $1M" },
    { label: "Over $1M Rate", value: "37%", description: "On excess" },
    { label: "Social Security", value: "6.2%", description: "Up to $168,600" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How are bonuses taxed in 2026?",
        answer: "Bonuses are considered supplemental wages. Most employers use the flat 22% federal withholding rate. For bonuses over $1 million, the excess is withheld at 37%. State taxes, Social Security (6.2%), and Medicare (1.45%) also apply."
    },
    {
        question: "What is the aggregate method for bonus tax?",
        answer: "The aggregate method combines your bonus with your regular paycheck for that period, calculates total tax, then subtracts what was already withheld from regular pay. This can result in higher or lower withholding than the 22% flat rate depending on your tax bracket."
    },
    {
        question: "Will I get my bonus tax back?",
        answer: "Withholding is not your final tax. At year-end, your actual bonus tax depends on your total income and marginal bracket. If too much was withheld, you get a refund. If too little, you owe more. The 22% flat rate often over-withholds for lower earners."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Supplemental Wage Withholding",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "RSU Calculator", url: "/rsu", description: "Stock units" },
    { name: "Paycheck Calculator", url: "/paycheck", description: "Net pay" },
];
