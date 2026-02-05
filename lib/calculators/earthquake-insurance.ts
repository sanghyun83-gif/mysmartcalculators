// ============================================
// EARTHQUAKE INSURANCE CALCULATOR - QUICK v3.0
// $85 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Earthquake Insurance Calculator",
    tagline: "Free 2026 Earthquake Insurance Estimator",
    description: "Calculate earthquake insurance costs. Coverage for seismic damage with high deductibles, building replacement, and personal property. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/earthquake-insurance",
};

// ============================================
// RISK ZONES
// ============================================
export const RISK_ZONES = [
    { id: "very-high", name: "Very High Risk (Near Fault)", factor: 3.0, description: "Within 10 miles of fault" },
    { id: "high", name: "High Risk Zone", factor: 2.2, description: "Active seismic area" },
    { id: "moderate", name: "Moderate Risk", factor: 1.0, description: "Some seismic history" },
    { id: "low", name: "Low Risk", factor: 0.5, description: "Minimal seismic activity" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling Coverage", baseCost: 500, description: "Structure repair/rebuild" },
    { id: "contents", name: "Personal Property", baseCost: 200, description: "Belongings" },
    { id: "loss-of-use", name: "Loss of Use", baseCost: 100, description: "Living expenses" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$800-$5,000", description: "Per year" },
    { label: "Typical Deductible", value: "10-25%", description: "Of coverage" },
    { label: "CA Homes w/ Coverage", value: "~13%", description: "Despite high risk" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does earthquake insurance cost in 2026?",
        answer: "Earthquake insurance costs $800-$5,000+ per year depending on location, home value, and construction type. California homeowners pay the highest rates due to fault line proximity. Deductibles are typically 10-25% of coverage limits."
    },
    {
        question: "Why are earthquake insurance deductibles so high?",
        answer: "Earthquake deductibles of 10-25% are common because earthquakes can cause catastrophic, widespread damage. On a $300,000 home, a 15% deductible means you pay the first $45,000. This keeps premiums affordable while covering major losses."
    },
    {
        question: "Does homeowners insurance cover earthquakes?",
        answer: "No. Standard homeowners policies exclude earthquake damage. You need a separate earthquake policy or endorsement. In California, the CEA (California Earthquake Authority) is a major provider with regulated rates."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "California Earthquake Authority (CEA)",
        title: "Earthquake Insurance Coverage",
        url: "https://www.earthquakeauthority.com/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Flood Insurance", url: "/flood-insurance", description: "NFIP coverage" },
    { name: "Mobile Home Insurance", url: "/mobile-home-insurance", description: "HO-7 coverage" },
];
