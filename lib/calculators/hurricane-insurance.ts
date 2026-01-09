// ============================================
// HURRICANE INSURANCE CALCULATOR - QUICK v3.0
// $80 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Hurricane Insurance Calculator",
    tagline: "Free 2026 Windstorm Insurance Estimator",
    description: "Calculate hurricane insurance costs. Windstorm coverage, coastal deductibles, and storm damage protection for Florida and Gulf Coast homes. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/hurricane-insurance",
};

// ============================================
// COASTAL ZONES
// ============================================
export const COASTAL_ZONES = [
    { id: "beachfront", name: "Beachfront (< 1 mile)", factor: 3.5, description: "Direct ocean exposure" },
    { id: "coastal", name: "Coastal (1-5 miles)", factor: 2.2, description: "High wind zone" },
    { id: "inland-coastal", name: "Inland Coastal (5-15 miles)", factor: 1.5, description: "Moderate risk" },
    { id: "inland", name: "Inland (15+ miles)", factor: 0.8, description: "Lower wind exposure" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "dwelling", name: "Dwelling Coverage", baseCost: 1200, description: "Structure protection" },
    { id: "personal-property", name: "Personal Property", baseCost: 300, description: "Belongings" },
    { id: "loss-of-use", name: "Loss of Use", baseCost: 150, description: "Living expenses" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg FL Premium", value: "$4,000+", description: "Per year" },
    { label: "Windstorm Deductible", value: "2-10%", description: "Of dwelling coverage" },
    { label: "Category 5 Claims", value: "$50B+", description: "Annual damage" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does hurricane insurance cost in Florida (2026)?",
        answer: "Florida hurricane insurance costs $4,000-$10,000+ per year depending on location, home value, and proximity to coast. Beachfront homes pay the highest rates. Many Floridians use Citizens Insurance as a 'last resort' insurer."
    },
    {
        question: "What is a hurricane/windstorm deductible?",
        answer: "Hurricane deductibles are typically 2-10% of your dwelling coverage, NOT a flat dollar amount. On a $400,000 home with a 5% deductible, you pay the first $20,000 of hurricane damage before insurance pays."
    },
    {
        question: "Does homeowners insurance cover hurricane damage?",
        answer: "Standard homeowners covers some wind damage, but in coastal states you often need separate windstorm/hurricane coverage or a policy from state plans like Citizens (FL) or TWIA (TX). Flood damage requires separate NFIP flood insurance."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Hurricane and Windstorm Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Flood Insurance", url: "/flood-insurance", description: "NFIP coverage" },
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Earthquake Insurance", url: "/earthquake-insurance", description: "Seismic coverage" },
];
