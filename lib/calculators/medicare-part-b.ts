// ============================================
// MEDICARE PART B CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Medicare Part B Calculator",
    tagline: "Free 2026 Medicare Part B Cost Calculator",
    description: "Calculate your Medicare Part B out-of-pocket costs. Includes deductible, coinsurance, and annual cost estimates. Based on 2026 CMS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/medicare-part-b",
};

// ============================================
// PART B COVERAGE
// ============================================
export const PART_B_COVERAGE = [
    { service: "Doctor Visits", coverage: "80%", yourCost: "20% after deductible" },
    { service: "Outpatient Care", coverage: "80%", yourCost: "20% after deductible" },
    { service: "Preventive Services", coverage: "100%", yourCost: "$0" },
    { service: "Lab Tests", coverage: "100%", yourCost: "$0" },
    { service: "Durable Medical Equipment", coverage: "80%", yourCost: "20% after deductible" },
    { service: "Mental Health", coverage: "80%", yourCost: "20% after deductible" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "2026 Premium", value: "$185", description: "Per month standard" },
    { label: "Deductible", value: "$257", description: "Annual 2026" },
    { label: "Coinsurance", value: "20%", description: "You pay" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What does Medicare Part B cover?",
        answer: "Part B covers medically necessary services: doctor visits, outpatient care, preventive services, lab tests, ambulance services, durable medical equipment, and mental health services. It does NOT cover prescription drugs (Part D), dental, vision, hearing aids, or long-term care."
    },
    {
        question: "What is the 2026 Medicare Part B deductible?",
        answer: "The 2026 Medicare Part B annual deductible is $257. Once you pay this amount out-of-pocket for Part B-covered services, Medicare covers 80% of the Medicare-approved amount for most services. You pay the remaining 20% coinsurance."
    },
    {
        question: "How does the 80/20 split work?",
        answer: "After meeting the $257 deductible, Medicare pays 80% of the Medicare-approved amount for covered services. You pay 20% coinsurance. For a $1,000 Medicare-approved service, Medicare pays $800 and you pay $200. A Medigap plan can cover this 20%."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Centers for Medicare & Medicaid Services",
        title: "Medicare Part B Coverage",
        url: "https://www.medicare.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Medicare Premium", url: "/medicare-premium", description: "IRMAA calculation" },
    { name: "Medicare Part D", url: "/medicare-part-d", description: "Drug coverage" },
    { name: "Medigap", url: "/medigap", description: "Supplement insurance" },
];
