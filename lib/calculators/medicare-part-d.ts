// ============================================
// MEDICARE PART D CALCULATOR - QUICK v3.0
// $60 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Medicare Part D Calculator",
    tagline: "Free 2026 Medicare Part D Cost Calculator",
    description: "Calculate your Medicare Part D prescription drug costs. Includes coverage phases, donut hole, and catastrophic coverage. Based on 2026 CMS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/medicare-part-d",
};

// ============================================
// COVERAGE PHASES (2026)
// ============================================
export const COVERAGE_PHASES = [
    { phase: "Deductible", yourCosts: "100%", limit: "First $590" },
    { phase: "Initial Coverage", yourCosts: "25%", limit: "$590 - $5,030" },
    { phase: "Coverage Gap (Donut Hole)", yourCosts: "25%", limit: "$5,030 - $8,000" },
    { phase: "Catastrophic", yourCosts: "$0", limit: "After $8,000 OOP" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "2026 Deductible", value: "$590", description: "Max annual" },
    { label: "OOP Cap", value: "$2,000", description: "New 2026 law" },
    { label: "Catastrophic", value: "$0", description: "After cap" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the Medicare Part D donut hole?",
        answer: "The donut hole (coverage gap) was a phase where you paid more for drugs. Starting 2026, it's effectively eliminated. The new $2,000 annual out-of-pocket cap means you pay nothing after reaching this limit. Before, you could pay thousands in the gap."
    },
    {
        question: "What is the 2026 Part D out-of-pocket cap?",
        answer: "The Inflation Reduction Act introduced a $2,000 annual out-of-pocket cap for Part D starting 2026. Once you reach $2,000 in true out-of-pocket costs (deductible + copays), you pay $0 for covered drugs the rest of the year. This is a major improvement."
    },
    {
        question: "How much is the Part D premium?",
        answer: "Part D premiums vary by plan, averaging around $35-50/month in 2026. High-income earners pay IRMAA surcharges from $13.70 to $85.80/month on top of the plan premium. Choose plans based on your specific medications, not just premium."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Centers for Medicare & Medicaid Services",
        title: "Medicare Part D Coverage",
        url: "https://www.medicare.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Medicare Premium", url: "/medicare-premium", description: "IRMAA calculation" },
    { name: "Medicare Part B", url: "/medicare-part-b", description: "Medical coverage" },
    { name: "Health Insurance", url: "/health-insurance", description: "Coverage costs" },
];
