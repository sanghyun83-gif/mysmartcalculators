// ============================================
// MEDICAID ELIGIBILITY CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Medicaid Eligibility Calculator",
    tagline: "Free 2026 Medicaid Income Eligibility Calculator",
    description: "Check if you qualify for Medicaid based on income and household size. Includes 2026 Federal Poverty Level guidelines for all states.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/medicaid",
};

// ============================================
// FPL GUIDELINES 2026
// ============================================
export const FPL_GUIDELINES = [
    { householdSize: 1, fpl100: 15650, fpl138: 21597 },
    { householdSize: 2, fpl100: 21150, fpl138: 29187 },
    { householdSize: 3, fpl100: 26650, fpl138: 36777 },
    { householdSize: 4, fpl100: 32150, fpl138: 44367 },
    { householdSize: 5, fpl100: 37650, fpl138: 51957 },
    { householdSize: 6, fpl100: 43150, fpl138: 59547 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Expansion States", value: "40", description: "138% FPL limit" },
    { label: "Adults Limit", value: "138%", description: "Of FPL" },
    { label: "Enrolled", value: "92M", description: "Americans" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the income limit for Medicaid in 2026?",
        answer: "In the 40 Medicaid expansion states, adults qualify with income up to 138% of the Federal Poverty Level ($21,597 for a single person). Non-expansion states have stricter limits, often requiring very low income or being in specific categories (pregnant, disabled, elderly)."
    },
    {
        question: "Does Medicaid have an asset test?",
        answer: "For most adults under 65, Medicaid uses Modified Adjusted Gross Income (MAGI) with no asset test. However, elderly and disabled applicants may face asset limits (typically $2,000 for individuals). Long-term care Medicaid has strict asset limits requiring spend-down."
    },
    {
        question: "What's the difference between expansion and non-expansion states?",
        answer: "Expansion states accepted federal funding to extend Medicaid to all adults under 138% FPL. Non-expansion states (10 remaining) have a 'coverage gap' where adults above traditional limits but below ACA marketplace subsidies may have no affordable coverage options."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Centers for Medicare & Medicaid Services",
        title: "Medicaid Eligibility",
        url: "https://www.medicaid.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Health Insurance", url: "/health-insurance", description: "Coverage costs" },
    { name: "Medicare Premium", url: "/medicare-premium", description: "Medicare costs" },
    { name: "ACA Subsidy", url: "/aca-subsidy", description: "Marketplace help" },
];
