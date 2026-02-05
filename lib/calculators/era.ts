// ============================================
// ERA CALCULATOR - QUICK v3.0
// 300th Milestone!
// CPC: $50 | Med Competition | Blue/Insurance Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Emergency Rental Assistance Calculator",
    tagline: "Free Rental Assistance Eligibility Checker 2026",
    description: "Check if you qualify for Emergency Rental Assistance (ERA) and estimate your potential support. Based on Treasury 2026 AMI guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/era",
};

// ============================================
// INCOME LIMITS (80% AMI - National Average)
// ============================================
export const AMI_LIMITS = [
    { size: 1, limit80: 48000, limit50: 30000 },
    { size: 2, limit80: 55000, limit50: 34000 },
    { size: 3, limit80: 62000, limit50: 38000 },
    { size: 4, limit80: 69000, limit50: 42000 },
    { size: 5, limit80: 74500, limit50: 45000 },
    { size: 6, limit80: 80000, limit50: 49000 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Income Limit", value: "80%", description: "Of Area Median" },
    { label: "Max Months", value: "18", description: "Of total rent help" },
    { label: "Funding", value: "$46B", description: "Allocated help" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is 80% AMI for rental assistance?",
        answer: "Area Median Income (AMI) is the midpoint of a region's income distribution. Most ERA programs require you to have a household income at or below 80% of your local AMI. Priority is often given to those below 50% AMI or those who have been unemployed for 90 days."
    },
    {
        question: "What can Emergency Rental Assistance pay for?",
        answer: "ERA funds can cover past-due rent (arrears), current rent, and future rent payments. Many programs also cover utility bills (electricity, gas, water, trash), home energy costs, and some relocation expenses or late fees."
    },
    {
        question: "Do I need an eviction notice to qualify?",
        answer: "No, you do not necessarily need an eviction notice. You must show that you are at risk of experiencing homelessness or housing instability, which can be demonstrated by past-due rent or utility notices. However, priority is often given to those facing active eviction."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "U.S. Department of the Treasury",
        title: "Emergency Rental Assistance Program Guidelines",
        url: "https://home.treasury.gov/policy-issues/coronavirus/assistance-for-state-local-and-tribal-governments/emergency-rental-assistance-program",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Section 8", url: "/section-8", description: "Housing vouchers" },
    { name: "HUD Housing", url: "/hud-housing", description: "Public housing help" },
    { name: "LIHEAP", url: "/liheap", description: "Energy assistance" },
];
