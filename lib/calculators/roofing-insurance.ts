// ============================================
// ROOFING INSURANCE CALCULATOR - STANDARD v3.0
// $125 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Roofing Insurance Calculator",
    tagline: "Free 2026 Roofing Contractor Insurance Estimator",
    description: "Calculate roofing contractor insurance costs. High-risk specialty coverage for roofers including GL, workers comp, and equipment. Based on 2026 NCCI data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/roofing-insurance",
};

// ============================================
// ROOFING WORK TYPES
// ============================================
export const WORK_TYPES = [
    { id: "residential-1story", name: "Residential (1-2 Story)", factor: 1.0, description: "Standard homes" },
    { id: "residential-3story", name: "Residential (3+ Story)", factor: 1.35, description: "Taller structures" },
    { id: "commercial-flat", name: "Commercial (Flat Roof)", factor: 1.25, description: "Retail, warehouses" },
    { id: "commercial-steep", name: "Commercial (Steep Slope)", factor: 1.50, description: "High-rise, complex" },
    { id: "new-construction", name: "New Construction Only", factor: 0.90, description: "Less tear-off risk" },
    { id: "repairs-only", name: "Repairs Only", factor: 0.80, description: "Small jobs, less exposure" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 5500, description: "Third-party claims" },
    { id: "wc", name: "Workers Compensation", baseCost: 8500, description: "Employee injury" },
    { id: "tools", name: "Tools & Equipment", baseCost: 600, description: "Ladders, nail guns" },
    { id: "auto", name: "Commercial Auto", baseCost: 2200, description: "Work trucks" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under100k", name: "Under $100,000", factor: 0.6 },
    { id: "100k-250k", name: "$100,000 - $250,000", factor: 0.8 },
    { id: "250k-500k", name: "$250,000 - $500,000", factor: 1.0 },
    { id: "500k-1m", name: "$500,000 - $1 Million", factor: 1.3 },
    { id: "over1m", name: "Over $1 Million", factor: 1.7 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg GL Premium", value: "$4,000-$8,000", description: "Per year" },
    { label: "Workers Comp Rate", value: "$25-$45", description: "Per $100 payroll" },
    { label: "Industry Risk", value: "#1 Highest", description: "Construction trades" },
    { label: "Fall Claims", value: "35%", description: "Of all roofing claims" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does roofing insurance cost in 2026?",
        answer: "Roofing insurance typically costs $8,000-$20,000 per year including GL and workers comp. Roofing has the highest workers comp rates in construction - often $25-$45 per $100 of payroll compared to $5-$10 for general contractors."
    },
    {
        question: "Why is roofing insurance so expensive?",
        answer: "Roofing is the highest-risk construction trade due to falls, which account for 35% of all roofing claims. Working at heights with power tools increases injury severity. Insurers classify roofing in the highest-risk category."
    },
    {
        question: "What insurance does a roofer need?",
        answer: "Roofers need: General Liability ($1M-$2M limits), Workers Compensation (required by law in most states), Commercial Auto for work trucks, and Tools & Equipment coverage. Many clients require proof of all these before hiring."
    },
    {
        question: "Does roofing insurance cover subcontractors?",
        answer: "No. Your policy covers your employees, not subcontractors. Always require subs to provide their own Certificate of Insurance (COI). If an uninsured sub is injured or causes damage, you could be liable."
    },
    {
        question: "How can I reduce my roofing insurance costs?",
        answer: "Lower premiums by: maintaining a clean safety record, implementing fall protection programs, completing OSHA 10/30 training, avoiding workers comp claims for 3+ years to lower your EMR, and bundling policies with one insurer."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NCCI",
        title: "Roofing Classification Code Rates",
        url: "https://www.ncci.com/",
        year: "2026"
    },
    {
        source: "OSHA",
        title: "Fall Protection in Residential Construction",
        url: "https://www.osha.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Contractor Insurance", url: "/contractor-insurance", description: "General contractor coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
    { name: "Construction Accident", url: "/construction-accident", description: "Injury settlements" },
];
