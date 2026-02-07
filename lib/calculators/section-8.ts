// ============================================
// SECTION 8 CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Section 8 Calculator",
    tagline: "Free 2026 Housing Voucher Calculator",
    description: "Calculate your Section 8 Housing Choice Voucher eligibility and estimated rent payment. Based on 2026 HUD income limits.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/section-8",
};

// ============================================
// INCOME LIMITS (50% AMI - National Median)
// ============================================
export const INCOME_LIMITS = [
    { householdSize: 1, limit: 36550, veryLow: 36550, extremelyLow: 21960 },
    { householdSize: 2, limit: 41750, veryLow: 41750, extremelyLow: 25100 },
    { householdSize: 3, limit: 46950, veryLow: 46950, extremelyLow: 28240 },
    { householdSize: 4, limit: 52150, veryLow: 52150, extremelyLow: 31380 },
    { householdSize: 5, limit: 56350, veryLow: 56350, extremelyLow: 33900 },
    { householdSize: 6, limit: 60500, veryLow: 60500, extremelyLow: 36420 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Income Limit", value: "50%", description: "Of Area Median" },
    { label: "Your Share", value: "30%", description: "Of income for rent" },
    { label: "Voucher Holders", value: "2.3M", description: "Households" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the income limit for Section 8?",
        answer: "Section 8 income limits are based on Area Median Income (AMI). To qualify, your income must be at or below 50% of AMI (very low income). At least 75% of new admissions must be extremely low income (30% AMI). Limits vary significantly by location - high-cost areas have higher limits."
    },
    {
        question: "How much rent do I pay with Section 8?",
        answer: "You pay approximately 30% of your adjusted monthly income toward rent and utilities. The voucher covers the difference between your payment and the payment standard set by your local housing authority. If the rent exceeds the payment standard, you may pay the difference."
    },
    {
        question: "How long is the Section 8 waiting list?",
        answer: "Waiting lists vary by location from months to years. Many housing authorities have closed waiting lists due to high demand. When lists open, preferences may apply (homeless, veterans, disabled, working families). Check with your local Public Housing Authority for current wait times."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "U.S. Department of Housing and Urban Development",
        title: "Housing Choice Voucher Program",
        url: "https://www.hud.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Rent Calculator", url: "/rent", description: "Affordability" },
    { name: "SNAP Benefits", url: "/snap", description: "Food assistance" },
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
];
