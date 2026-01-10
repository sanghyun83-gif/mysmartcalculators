// ============================================
// TANF BENEFITS CALCULATOR - QUICK v3.0
// $50 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "TANF Benefits Calculator",
    tagline: "Free 2026 Cash Assistance Calculator",
    description: "Calculate your eligibility for TANF (Temporary Assistance for Needy Families) cash benefits. Includes 2026 state benefit amounts and requirements.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/tanf",
};

// ============================================
// TANF BENEFITS BY STATE (Sample States)
// ============================================
export const TANF_BENEFITS = [
    { family: 1, lowState: 150, avgState: 350, highState: 700 },
    { family: 2, lowState: 225, avgState: 450, highState: 900 },
    { family: 3, lowState: 300, avgState: 550, highState: 1100 },
    { family: 4, lowState: 375, avgState: 650, highState: 1300 },
    { family: 5, lowState: 425, avgState: 750, highState: 1450 },
    { family: 6, lowState: 475, avgState: 850, highState: 1600 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Benefit", value: "$492", description: "Per family/month" },
    { label: "Time Limit", value: "60 mo", description: "Federal lifetime" },
    { label: "Families", value: "1.1M", description: "Receive TANF" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is TANF and who qualifies?",
        answer: "TANF (Temporary Assistance for Needy Families) provides cash assistance to families with children. To qualify, you typically need dependent children under 18, low income and assets, and must be a U.S. citizen or qualified non-citizen. Most states require work participation or job training."
    },
    {
        question: "How much can I receive from TANF?",
        answer: "TANF benefits vary dramatically by state. A family of 3 may receive $200-300/month in low-benefit states (Mississippi, Arkansas) or $900-1100/month in high-benefit states (New Hampshire, Alaska). The national average is around $492/month per family."
    },
    {
        question: "Is there a time limit for TANF benefits?",
        answer: "Yes, there's a 60-month (5-year) federal lifetime limit for receiving TANF-funded benefits. Some states have shorter limits (24-48 months). Once you hit the limit, adults can't receive benefits, though children may continue in some states. Extensions exist for hardship cases."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "U.S. Department of Health and Human Services",
        title: "TANF Program",
        url: "https://www.acf.hhs.gov/ofa/programs/tanf",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "SNAP/Food Stamps", url: "/snap", description: "Food benefits" },
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
    { name: "Section 8", url: "/section-8", description: "Housing help" },
];
