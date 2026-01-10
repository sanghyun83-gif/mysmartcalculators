// ============================================
// CHARITABLE DONATION CALCULATOR - QUICK v3.0
// $60 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Charitable Donation Calculator",
    tagline: "Free 2026 Donation Tax Deduction Calculator",
    description: "Calculate your charitable donation tax deduction. AGI limits, itemizing requirements, and QCD strategies. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/charitable-donation",
};

// ============================================
// DONATION LIMITS
// ============================================
export const DONATION_LIMITS = [
    { type: "Cash to Public Charity", limit: "60%", description: "Of AGI" },
    { type: "Appreciated Assets", limit: "30%", description: "Of AGI" },
    { type: "Private Foundations", limit: "30%", description: "Of AGI" },
    { type: "QCD (Age 70.5+)", limit: "$105,000", description: "Per year" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Cash Limit", value: "60%", description: "Of AGI" },
    { label: "Standard Deduction", value: "$15,000", description: "Single 2026" },
    { label: "QCD Limit", value: "$105K", description: "Age 70.5+" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "When can I deduct charitable donations?",
        answer: "You can only deduct charitable donations if you itemize deductions on Schedule A. With the $15,000 standard deduction (single) or $30,000 (married), you need substantial deductions to make itemizing worthwhile. Include state taxes, mortgage interest, and donations to see if itemizing exceeds the standard deduction."
    },
    {
        question: "What are the AGI limits for charitable deductions?",
        answer: "Cash donations to public charities: 60% of AGI. Appreciated property (stocks, real estate): 30% of AGI. Donations to private foundations: 30% of AGI. Excess donations can be carried forward 5 years. These limits help prevent excessive use of deductions by high earners."
    },
    {
        question: "What is a Qualified Charitable Distribution (QCD)?",
        answer: "If you're 70.5+ years old, you can donate up to $105,000 directly from your IRA to charity. This counts toward your Required Minimum Distribution (RMD) but isn't included in taxable income. It's better than deducting because it reduces AGI, potentially lowering Medicare premiums and Social Security taxation."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Charitable Contributions",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "Itemized Deductions", url: "/itemized-deductions", description: "Schedule A" },
    { name: "RMD Calculator", url: "/rmd", description: "Required distributions" },
];
