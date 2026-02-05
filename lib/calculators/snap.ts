// ============================================
// SNAP BENEFITS CALCULATOR - QUICK v3.0
// $50 CPC | Competition: High | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "SNAP Benefits Calculator",
    tagline: "Free 2026 Food Stamps Calculator",
    description: "Calculate your SNAP (food stamps) benefits. Includes 2026 income limits and maximum benefit amounts by household size.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/snap",
};

// ============================================
// SNAP MAX BENEFITS 2026
// ============================================
export const MAX_BENEFITS = [
    { householdSize: 1, grossLimit: 20340, netLimit: 15650, maxBenefit: 292 },
    { householdSize: 2, grossLimit: 27482, netLimit: 21150, maxBenefit: 536 },
    { householdSize: 3, grossLimit: 34624, netLimit: 26650, maxBenefit: 768 },
    { householdSize: 4, grossLimit: 41766, netLimit: 32150, maxBenefit: 975 },
    { householdSize: 5, grossLimit: 48908, netLimit: 37650, maxBenefit: 1158 },
    { householdSize: 6, grossLimit: 56050, netLimit: 43150, maxBenefit: 1390 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Max (1 person)", value: "$292", description: "Per month 2026" },
    { label: "Max (4 person)", value: "$975", description: "Per month 2026" },
    { label: "Enrolled", value: "42M", description: "Americans" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What are the income limits for SNAP in 2026?",
        answer: "SNAP uses two income tests: gross income must be at or below 130% of the Federal Poverty Level, and net income (after deductions) must be at or below 100% FPL. For a household of 1, this means gross income under $20,340/year and net under $15,650. Most states use broad-based categorical eligibility allowing higher gross limits."
    },
    {
        question: "How are SNAP benefits calculated?",
        answer: "SNAP benefits = Maximum benefit - 30% of net income. Net income is gross income minus allowed deductions (20% earned income, shelter costs over 50% of income, child care, medical for elderly/disabled). If your net income is $0, you receive the maximum benefit for your household size."
    },
    {
        question: "What can I buy with SNAP benefits?",
        answer: "SNAP benefits can be used to buy food for the household: fruits, vegetables, meat, dairy, bread, cereals, and seeds/plants to grow food. You cannot buy alcohol, tobacco, vitamins, hot prepared foods, or non-food items like pet food, cleaning supplies, or paper products."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "USDA Food and Nutrition Service",
        title: "SNAP Eligibility",
        url: "https://www.fns.usda.gov/snap/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
    { name: "Unemployment", url: "/unemployment", description: "UI benefits" },
    { name: "WIC Calculator", url: "/wic", description: "Women & children" },
];
