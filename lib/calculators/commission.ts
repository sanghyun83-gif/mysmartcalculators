// ============================================
// COMMISSION CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Low | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Commission Calculator",
    tagline: "Free 2026 Sales Commission Calculator",
    description: "Calculate sales commissions, tiered rates, and earnings projections. Based on standard commission structures.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/commission",
};

// ============================================
// COMMISSION STRUCTURES
// ============================================
export const COMMISSION_STRUCTURES = [
    { id: "flat", name: "Flat Rate", description: "Same % on all sales" },
    { id: "tiered", name: "Tiered Rate", description: "Higher % at higher volumes" },
    { id: "draw", name: "Draw Against Commission", description: "Base salary + commission" },
];

// ============================================
// COMMON RATES BY INDUSTRY
// ============================================
export const INDUSTRY_RATES = [
    { industry: "Real Estate", rate: "2.5-3%", description: "Per side" },
    { industry: "SaaS Sales", rate: "8-12%", description: "Of contract value" },
    { industry: "Retail", rate: "1-5%", description: "Of sale" },
    { industry: "Insurance", rate: "5-20%", description: "First year premium" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Commission", value: "5-10%", description: "Most industries" },
    { label: "SaaS OTE", value: "$150K+", description: "On-target earnings" },
    { label: "Real Estate", value: "2.5-3%", description: "Per transaction" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How do I calculate my commission?",
        answer: "Commission = Sales Amount × Commission Rate. For example, if you sell $100,000 at a 10% commission rate, you earn $10,000. Tiered structures may offer higher rates once you exceed quota (e.g., 10% on first $100K, 15% on anything above)."
    },
    {
        question: "What is OTE (On-Target Earnings)?",
        answer: "OTE is your total expected compensation if you hit 100% of quota. It typically includes base salary plus commission. For example, $80K base + $80K commission at 100% quota = $160K OTE. Accelerators may increase earnings above quota."
    },
    {
        question: "How is commission taxed?",
        answer: "Commission is taxed as regular income. Employers typically withhold at the supplemental wage rate (22% federal flat rate) plus state taxes and FICA. Your actual tax rate depends on your total annual income and tax bracket."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Bureau of Labor Statistics",
        title: "Sales Compensation Data",
        url: "https://www.bls.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Bonus Tax", url: "/bonus-tax", description: "Bonus withholding" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "Tip Calculator", url: "/tip", description: "Service tips" },
];
