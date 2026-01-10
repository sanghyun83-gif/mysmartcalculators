// ============================================
// 1099 TAX CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "1099 Tax Calculator",
    tagline: "Free 2026 Independent Contractor Tax Calculator",
    description: "Calculate 1099 taxes, self-employment tax, and quarterly estimates. Based on 2026 IRS guidelines for contractors and freelancers.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/1099-tax",
};

// ============================================
// 1099 FORM TYPES
// ============================================
export const FORM_TYPES = [
    { id: "nec", name: "1099-NEC", description: "Freelance/contractor income" },
    { id: "misc", name: "1099-MISC", description: "Miscellaneous income" },
    { id: "k", name: "1099-K", description: "Payment apps (over $600)" },
    { id: "int", name: "1099-INT", description: "Interest income" },
    { id: "div", name: "1099-DIV", description: "Dividend income" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "SE Tax Rate", value: "15.3%", description: "SS + Medicare" },
    { label: "1099-K Threshold", value: "$600+", description: "2026 reporting" },
    { label: "Quarterly Due", value: "4x/year", description: "Estimated payments" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much tax do I pay on 1099 income?",
        answer: "1099 income is subject to self-employment tax (15.3%) plus regular income tax (10-37% based on bracket). Total tax on 1099 income typically ranges from 25-40%. You can deduct half of SE tax and business expenses to reduce taxable income."
    },
    {
        question: "What is the 1099-K threshold for 2026?",
        answer: "For 2026, payment apps like PayPal, Venmo, and Cash App must send 1099-K forms if you receive over $600 in payments for goods/services. This doesn't mean new taxes - just new reporting. You still only owe tax on net profit."
    },
    {
        question: "Do I need to pay quarterly taxes on 1099 income?",
        answer: "Yes, if you expect to owe $1,000+ in taxes. Quarterly estimated payments are due April 15, June 15, September 15, and January 15. Use Form 1040-ES. Underpayment may result in penalties even if you pay in full at filing."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Form 1099 Information",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Self-Employment", url: "/self-employment", description: "Full SE tax" },
    { name: "Side Hustle Tax", url: "/side-hustle-tax", description: "Gig income" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
];
