// ============================================
// CHILD CARE SUBSIDY CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Med | Rose Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Child Care Subsidy Calculator",
    tagline: "Free 2026 Child Care Assistance Calculator",
    description: "Calculate your eligibility for child care subsidies and estimate your copay. Based on 2026 CCDF income limits (85% of State Median Income).",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/child-care-subsidy",
};

// ============================================
// INCOME LIMITS (85% SMI - National Average)
// ============================================
export const INCOME_LIMITS = [
    { familySize: 2, monthlyLimit: 4200, annualLimit: 50400 },
    { familySize: 3, monthlyLimit: 5100, annualLimit: 61200 },
    { familySize: 4, monthlyLimit: 6000, annualLimit: 72000 },
    { familySize: 5, monthlyLimit: 6900, annualLimit: 82800 },
    { familySize: 6, monthlyLimit: 7800, annualLimit: 93600 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Income Limit", value: "85%", description: "Of SMI" },
    { label: "Avg Subsidy", value: "$600", description: "Per month" },
    { label: "Children", value: "1.4M", description: "Receive help" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the income limit for child care subsidies?",
        answer: "Federal rules require states to set income eligibility at 85% of State Median Income (SMI). For a family of 4, this is typically $60,000-$75,000/year depending on state. Many states set initial eligibility lower (150-200% FPL) but must allow families to continue until 85% SMI under recent rules."
    },
    {
        question: "How much is my copay for child care subsidy?",
        answer: "Copays are based on income and typically range from $0-$200/month. Federal rules cap copays at no more than 7% of family income. Low-income families (under 150% FPL) may have $0 copay in many states. Subsidy covers the difference between your copay and the provider's rate."
    },
    {
        question: "Who qualifies for child care assistance?",
        answer: "To qualify, you typically need: children under 13, work or attend school/training at least 20-25 hours/week, meet income limits, and be a U.S. citizen or qualified non-citizen. Priority is given to TANF recipients, homeless families, and children in protective services."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "U.S. Department of Health and Human Services",
        title: "Child Care and Development Fund",
        url: "https://www.acf.hhs.gov/occ/ccdf-reauthorization",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Child Support", url: "/child-support", description: "Support payments" },
    { name: "TANF Benefits", url: "/tanf", description: "Cash assistance" },
    { name: "WIC Benefits", url: "/wic", description: "Nutrition help" },
];
