// ============================================
// WIC BENEFITS CALCULATOR - QUICK v3.0
// $45 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "WIC Benefits Calculator",
    tagline: "Free 2026 WIC Eligibility Calculator",
    description: "Check if you qualify for WIC (Women, Infants, and Children) benefits. Includes 2026 income limits at 185% of the Federal Poverty Level.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/wic",
};

// ============================================
// WIC INCOME LIMITS 2026 (185% FPL)
// ============================================
export const WIC_LIMITS = [
    { householdSize: 1, annualLimit: 28953, monthlyLimit: 2413 },
    { householdSize: 2, annualLimit: 39128, monthlyLimit: 3261 },
    { householdSize: 3, annualLimit: 49303, monthlyLimit: 4109 },
    { householdSize: 4, annualLimit: 59478, monthlyLimit: 4957 },
    { householdSize: 5, annualLimit: 69653, monthlyLimit: 5805 },
    { householdSize: 6, annualLimit: 79828, monthlyLimit: 6653 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Income Limit", value: "185%", description: "Of FPL" },
    { label: "Participants", value: "6.3M", description: "Monthly 2024" },
    { label: "Avg Value", value: "$47", description: "Per month" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "Who qualifies for WIC benefits?",
        answer: "WIC serves pregnant women, breastfeeding mothers (up to 1 year), postpartum women (up to 6 months), infants, and children under age 5. You must meet income requirements (at or below 185% FPL) and be determined to have a nutritional risk by a health professional."
    },
    {
        question: "What does WIC provide?",
        answer: "WIC provides supplemental foods, nutrition education, and referrals to health and social services. Foods include milk, eggs, cheese, cereal, juice, peanut butter, beans, and baby formula/food. Benefits are loaded onto an EBT card monthly. WIC also provides breastfeeding support."
    },
    {
        question: "How do I apply for WIC?",
        answer: "Contact your local WIC office or apply online through your state's WIC website. You'll need proof of identity, residency, income, and a health screening. Many families receiving Medicaid, SNAP, or TANF are automatically income-eligible for WIC."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "USDA Food and Nutrition Service",
        title: "WIC Eligibility Requirements",
        url: "https://www.fns.usda.gov/wic/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "SNAP Benefits", url: "/snap", description: "Food stamps" },
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
    { name: "Child Support", url: "/child-support", description: "Support calculator" },
];
