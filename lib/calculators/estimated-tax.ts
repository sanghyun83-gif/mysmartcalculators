// ============================================
// ESTIMATED TAX CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Estimated Tax Calculator",
    tagline: "Free 2026 Estimated Tax Calculator",
    description: "Calculate your estimated tax liability for the year. Includes federal, state, and self-employment taxes. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/estimated-tax",
};

// ============================================
// TAX COMPONENTS
// ============================================
export const TAX_COMPONENTS = [
    { id: "federal", name: "Federal Income Tax", rate: "10-37%" },
    { id: "state", name: "State Income Tax", rate: "0-13.3%" },
    { id: "se", name: "Self-Employment Tax", rate: "15.3%" },
    { id: "medicare", name: "Additional Medicare", rate: "0.9%" },
    { id: "niit", name: "Net Investment Income", rate: "3.8%" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Top Federal Rate", value: "37%", description: "Over $609,350" },
    { label: "SE Tax Rate", value: "15.3%", description: "SS + Medicare" },
    { label: "Standard Deduction", value: "$15,000", description: "Single 2026" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How do I calculate my estimated tax?",
        answer: "Add up all expected income sources. Subtract the standard deduction ($15,000 single, $30,000 married). Apply federal tax brackets (10-37%). Add self-employment tax (15.3% of 92.35% of SE income) if applicable. Add state income tax based on your state's rates."
    },
    {
        question: "What is the 2026 standard deduction?",
        answer: "For 2026, the standard deduction is $15,000 for single filers, $30,000 for married filing jointly, $22,500 for head of household. These amounts are adjusted annually for inflation. Most taxpayers take the standard deduction rather than itemizing."
    },
    {
        question: "When do I need to pay estimated taxes?",
        answer: "If you expect to owe $1,000+ in taxes and your withholding won't cover at least 90% of your tax liability (or 100% of prior year tax), you must make quarterly estimated payments. Due dates are April 15, June 15, September 15, and January 15."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Tax Tables and Rates",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Quarterly Tax", url: "/quarterly-tax", description: "Payment schedule" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "Self-Employment", url: "/self-employment", description: "SE tax" },
];
