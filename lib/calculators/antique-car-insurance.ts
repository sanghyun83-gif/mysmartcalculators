// ============================================
// ANTIQUE CAR INSURANCE CALCULATOR - QUICK v3.0
// $90 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Antique Car Insurance Calculator",
    tagline: "Free 2026 Antique Car Insurance Estimator",
    description: "Calculate antique car insurance costs for vehicles 25+ years old. Agreed-value coverage and specialized protection for pre-war and brass era classics. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/antique-car-insurance",
};

// ============================================
// VEHICLE ERAS
// ============================================
export const VEHICLE_ERAS = [
    { id: "brass", name: "Brass Era (Pre-1916)", factor: 1.4, description: "Early automotive history" },
    { id: "pre-war", name: "Pre-War (1916-1942)", factor: 1.2, description: "Classic vintage aesthetics" },
    { id: "post-war", name: "Post-War (1946-1960)", factor: 1.0, description: "Mid-century modern classics" },
];

// ============================================
// USAGE LEVELS
// ============================================
export const USAGE_LEVELS = [
    { id: "exhibition", name: "Exhibition Only", factor: 0.8, description: "Shows and parades only" },
    { id: "occasional", name: "Occasional ( < 2,500 mi)", factor: 1.0, description: "Weekend pleasure drives" },
    { id: "regular", name: "Regular (2,500 - 5,000 mi)", factor: 1.3, description: "Frequent club events" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$250 - $600", description: "Lower than standard auto" },
    { label: "Target Age", value: "25+ Years", description: "Minimum vehicle age" },
    { label: "Claims Response", value: "Agreed Value", description: "No depreciation on loss" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What makes a car an 'antique' for insurance purposes?",
        answer: "For insurance, an antique car is typically defined as a vehicle that is 25 years old or older. However, many specialized antique insurers focus on 'true' antiques from the Pre-War or Brass eras, which require moisture-controlled storage and limited usage strictly for exhibitions or pleasure."
    },
    {
        question: "How does Agreed Value differ from Standard Value?",
        answer: "Standard auto insurance pays the 'Actual Cash Value' (depreciated). Antique insurance uses 'Agreed Value,' where you and the insurer agree on the car's worth up front. In a total loss, you get the full agreed amount with no depreciation deductions."
    },
    {
        question: "Can I use my antique car for daily commuting?",
        answer: "No. Specialized antique car insurance policies require that the vehicle is NOT your primary mode of transportation. You must typically prove you have another daily-use vehicle insured, and the antique must be stored in a fully enclosed, locked garage."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Hagerty Insurance",
        title: "Understanding Classic & Antique Car Valuation 2026",
        url: "https://www.hagerty.com/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Classic Car Insurance", url: "/classic-car-insurance", description: "Collector vehicle rates" },
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard vehicle coverage" },
    { name: "Motorcycle Insurance", url: "/motorcycle-insurance", description: "Two-wheel coverage" },
];
