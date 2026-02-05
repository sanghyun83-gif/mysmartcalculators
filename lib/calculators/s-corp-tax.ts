// ============================================
// S CORP TAX CALCULATOR - QUICK v3.0
// $80 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "S Corp Tax Calculator",
    tagline: "Free 2026 S Corporation Tax Savings Calculator",
    description: "Calculate S-Corp tax savings, reasonable salary, and distribution strategy. Based on 2026 IRS guidelines for S Corporation owners.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/s-corp-tax",
};

// ============================================
// S CORP REQUIREMENTS
// ============================================
export const SCORP_REQUIREMENTS = [
    { id: "domestic", name: "Domestic Corporation", description: "US-based only" },
    { id: "shareholders", name: "100 Shareholders Max", description: "Individuals, trusts, estates" },
    { id: "class", name: "One Class of Stock", description: "Common stock only" },
    { id: "calendar", name: "Calendar Year", description: "Or IRS approval" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "SE Tax Saved", value: "15.3%", description: "On distributions" },
    { label: "Threshold", value: "$40-50K+", description: "When worthwhile" },
    { label: "Salary Rule", value: "Reasonable", description: "IRS requirement" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How does S-Corp save on taxes?",
        answer: "S-Corp owners pay themselves a reasonable salary (subject to 15.3% payroll tax) and take remaining profits as distributions (no SE tax). For example, on $150K profit: $75K salary pays ~$11,500 payroll tax, while $75K distribution has zero SE tax, saving ~$11,500 vs. sole proprietor."
    },
    {
        question: "What is a reasonable salary for S-Corp?",
        answer: "The IRS requires S-Corp owners to pay themselves a 'reasonable salary' comparable to what similar businesses pay for similar services. Factors include duties, time, training, and industry norms. Generally, 40-60% of net profit is a safe range, but this varies by situation."
    },
    {
        question: "When should I elect S-Corp status?",
        answer: "S-Corp election typically makes sense when net profit exceeds $40-50K annually. Below this threshold, the payroll costs, compliance burden, and accounting fees often outweigh the tax savings. Consult a CPA to analyze your specific situation."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "S Corporations",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "LLC Tax", url: "/llc-tax", description: "LLC taxation" },
    { name: "Self-Employment", url: "/self-employment", description: "SE tax" },
    { name: "Payroll Tax", url: "/payroll-tax", description: "Employer taxes" },
];
