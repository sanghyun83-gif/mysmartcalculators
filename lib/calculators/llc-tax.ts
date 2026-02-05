// ============================================
// LLC TAX CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "LLC Tax Calculator",
    tagline: "Free 2026 LLC Tax Calculator",
    description: "Calculate LLC taxes, self-employment tax, and pass-through income. Based on 2026 IRS guidelines for single-member and multi-member LLCs.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/llc-tax",
};

// ============================================
// LLC TAX ELECTIONS
// ============================================
export const LLC_ELECTIONS = [
    { id: "disregarded", name: "Disregarded Entity", description: "Single-member, Schedule C" },
    { id: "partnership", name: "Partnership", description: "Multi-member, Form 1065" },
    { id: "scorp", name: "S Corporation", description: "Form 2553 election" },
    { id: "ccorp", name: "C Corporation", description: "Form 8832 election" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "SE Tax", value: "15.3%", description: "On net earnings" },
    { label: "QBI Deduction", value: "20%", description: "Pass-through" },
    { label: "S-Corp Savings", value: "5-15%", description: "At higher income" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How is LLC income taxed?",
        answer: "LLCs are pass-through entities by default. Single-member LLCs report on Schedule C and pay self-employment tax (15.3%). Multi-member LLCs file Form 1065 and issue K-1s to members. All LLC income is taxed at the owner's individual rate plus SE tax on active income."
    },
    {
        question: "Should my LLC elect S-Corp status?",
        answer: "S-Corp election can save money when net profit exceeds ~$40-50K annually. You pay yourself a reasonable salary (subject to payroll taxes) and take remaining profit as distributions (no SE tax). However, S-Corps have additional compliance costs and payroll requirements."
    },
    {
        question: "What is the QBI deduction for LLCs?",
        answer: "The Qualified Business Income (QBI) deduction allows LLC owners to deduct up to 20% of qualified business income from taxable income. Income limits apply for specified service trades. This can significantly reduce your effective tax rate on LLC profits."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "LLC Filing and Payment",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Self-Employment", url: "/self-employment", description: "SE tax" },
    { name: "S-Corp Tax", url: "/s-corp-tax", description: "S-Corp savings" },
    { name: "Freelance Tax", url: "/freelance-tax", description: "Freelancer tax" },
];
