// ============================================
// HUD HOUSING CALCULATOR - QUICK v3.0
// $50 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "HUD Housing Calculator",
    tagline: "Free 2026 Public Housing Eligibility Calculator",
    description: "Calculate your eligibility for HUD public housing programs. Includes 2026 income limits and rent calculation based on the 80% Area Median Income standard.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/hud-housing",
};

// ============================================
// HUD INCOME LIMITS (80% AMI - Low Income)
// ============================================
export const INCOME_LIMITS = [
    { householdSize: 1, lowIncome: 58500, veryLow: 36550, extremelyLow: 21960 },
    { householdSize: 2, lowIncome: 66850, veryLow: 41750, extremelyLow: 25100 },
    { householdSize: 3, lowIncome: 75200, veryLow: 46950, extremelyLow: 28240 },
    { householdSize: 4, lowIncome: 83550, veryLow: 52150, extremelyLow: 31380 },
    { householdSize: 5, lowIncome: 90250, veryLow: 56350, extremelyLow: 33900 },
    { householdSize: 6, lowIncome: 96950, veryLow: 60500, extremelyLow: 36420 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Low Income", value: "80%", description: "AMI limit" },
    { label: "Public Housing", value: "1M+", description: "Units nationwide" },
    { label: "Your Rent", value: "30%", description: "Of adjusted income" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the difference between public housing and Section 8?",
        answer: "Public housing is government-owned and operated housing for low-income families. Section 8 (Housing Choice Vouchers) allows you to rent privately-owned housing with a subsidy. Public housing has set units; Section 8 lets you choose where to live within certain rent limits."
    },
    {
        question: "What is the income limit for HUD public housing?",
        answer: "HUD public housing uses the 80% of Area Median Income (AMI) as the upper limit for 'low income' eligibility. Priority is given to 'very low income' (50% AMI) and 'extremely low income' (30% AMI) applicants. Actual limits vary significantly by location."
    },
    {
        question: "How is public housing rent calculated?",
        answer: "Public housing rent is generally 30% of your adjusted monthly income. Adjusted income is gross income minus deductions for dependents ($480/child), elderly/disabled ($400), medical expenses, and disability assistance expenses. Minimum rent is typically $25-50/month."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "U.S. Department of Housing and Urban Development",
        title: "Public Housing Program",
        url: "https://www.hud.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Section 8", url: "/section-8", description: "Housing vouchers" },
    { name: "SNAP Benefits", url: "/snap", description: "Food assistance" },
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
];
