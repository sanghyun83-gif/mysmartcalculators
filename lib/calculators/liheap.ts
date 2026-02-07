// ============================================
// LIHEAP CALCULATOR - QUICK v3.0
// $45 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "LIHEAP Calculator",
    tagline: "Free 2026 Energy Assistance Calculator",
    description: "Check eligibility for LIHEAP (Low Income Home Energy Assistance Program). Includes 2026 income limits and estimated benefit amounts for heating and cooling assistance.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/liheap",
};

// ============================================
// INCOME LIMITS (150% FPL)
// ============================================
export const INCOME_LIMITS = [
    { householdSize: 1, annualLimit: 23475, monthlyLimit: 1956 },
    { householdSize: 2, annualLimit: 31725, monthlyLimit: 2644 },
    { householdSize: 3, annualLimit: 39975, monthlyLimit: 3331 },
    { householdSize: 4, annualLimit: 48225, monthlyLimit: 4019 },
    { householdSize: 5, annualLimit: 56475, monthlyLimit: 4706 },
    { householdSize: 6, annualLimit: 64725, monthlyLimit: 5394 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Income Limit", value: "150%", description: "Of FPL" },
    { label: "Avg Benefit", value: "$450", description: "Per year" },
    { label: "Households", value: "5.3M", description: "Receive LIHEAP" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is LIHEAP and what does it cover?",
        answer: "LIHEAP (Low Income Home Energy Assistance Program) helps low-income households pay for home heating and cooling costs. Benefits can be used for electricity, natural gas, propane, fuel oil, wood, and other heating/cooling fuels. Some states also offer weatherization assistance and crisis help for disconnection."
    },
    {
        question: "What is the income limit for LIHEAP?",
        answer: "LIHEAP income limits are typically 150% of the Federal Poverty Level, though states can set limits between 110% and 150% FPL. For a family of 4 in 2026, this is approximately $48,225/year. Some states allow up to 60% of state median income, which may be higher."
    },
    {
        question: "How much will I receive from LIHEAP?",
        answer: "LIHEAP benefits vary by state, income, household size, and energy costs. The national average is around $450/year, but benefits range from $200-$1,000+. Priority is given to households with elderly, disabled, or young children. Benefits are typically paid directly to utility companies."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "U.S. Department of Health and Human Services",
        title: "LIHEAP Program",
        url: "https://www.acf.hhs.gov/ocs/programs/liheap",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "SNAP Benefits", url: "/snap", description: "Food assistance" },
    { name: "Section 8", url: "/section-8", description: "Housing vouchers" },
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
];
