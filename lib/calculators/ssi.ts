// ============================================
// SSI CALCULATOR - QUICK v3.0
// CPC: $55 | Med Competition | Blue/Insurance Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation (SSA)
// ============================================

export const SITE = {
    name: "SSI Calculator",
    tagline: "Free 2026 SSI Benefit & Payment Estimator",
    description: "Calculate your 2026 Supplemental Security Income (SSI) benefits instantly. Free eligibility negotiator with official SSA 2026 COLA adjustments, federal payment standards, and resource limits.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/ssi",
};

// ============================================
// BENEFIT LIMITS (2026 COLA Adjusted)
// ============================================
export const BENEFIT_LIMITS = {
    individual: 943,
    couple: 1415,
    assetLimitIndividual: 2000,
    assetLimitCouple: 3000,
    citation: "Based on 2026 Social Security Administration (SSA) Cost-of-Living Adjustments (COLA) and official SSI Federal Payment Standard benchmarks."
};

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Max Individual", value: "$943", description: "Monthly benefit" },
    { label: "Asset Limit", value: "$2,000", description: "For individuals" },
    { label: "Recipients", value: "7.5M", description: "People helped" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the difference between SSI and SSDI?",
        answer: "SSI (Supplemental Security Income) is a needs-based program for people with limited income and resources. SSDI (Social Security Disability Insurance) is for people with a work history who have paid into Social Security through taxes. SSI does not require a work history."
    },
    {
        question: "What are the asset limits for SSI in 2026?",
        answer: "To qualify for SSI, your countable resources must be worth no more than $2,000 for an individual or $3,000 for a couple. Some assets, like your primary home and one vehicle, are typically excluded from this calculation."
    },
    {
        question: "How does income affect my SSI payment?",
        answer: "The SSA subtracts your 'countable income' from the maximum monthly SSI benefit. Some parts of your income are ignored (like the first $20 of most income and the first $65 of earned income). Every $2 you earn over the limit reduces your SSI check by $1."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Social Security Administration",
        title: "SSI Federal Benefit Rates 2026",
        url: "https://www.ssa.gov/oact/cola/SSI.html",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "SSDI Calculator", url: "/ssdi", description: "Disability insurance" },
    { name: "Social Security", url: "/social-security", description: "Retirement benefits" },
    { name: "Food Stamps", url: "/food-stamps", description: "SNAP assistance" },
];
