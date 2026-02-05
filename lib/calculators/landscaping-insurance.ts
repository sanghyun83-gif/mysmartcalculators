// ============================================
// LANDSCAPING INSURANCE CALCULATOR - STANDARD v3.0
// $100 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Landscaping Insurance Calculator",
    tagline: "Free 2026 Landscaping Contractor Insurance Estimator",
    description: "Calculate landscaping insurance costs. GL, workers comp, and equipment coverage for lawn care and landscaping contractors. Based on 2026 NCCI data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/landscaping-insurance",
};

// ============================================
// LANDSCAPING SERVICE TYPES
// ============================================
export const SERVICE_TYPES = [
    { id: "lawn-care", name: "Lawn Care & Mowing", factor: 0.85, description: "Basic maintenance" },
    { id: "full-service", name: "Full Service Landscaping", factor: 1.0, description: "Complete services" },
    { id: "hardscape", name: "Hardscaping/Pavers", factor: 1.25, description: "Patios, retaining walls" },
    { id: "tree-service", name: "Tree Service/Removal", factor: 1.50, description: "High-risk work" },
    { id: "irrigation", name: "Irrigation Systems", factor: 1.10, description: "Sprinkler systems" },
    { id: "snow-removal", name: "Snow Removal", factor: 1.20, description: "Seasonal service" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 1800, description: "Property damage, injury" },
    { id: "wc", name: "Workers Compensation", baseCost: 3500, description: "Employee injury" },
    { id: "equipment", name: "Equipment/Inland Marine", baseCost: 600, description: "Mowers, trimmers, trailers" },
    { id: "auto", name: "Commercial Auto", baseCost: 1800, description: "Trucks, trailers" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under50k", name: "Under $50,000", factor: 0.60 },
    { id: "50k-100k", name: "$50,000 - $100,000", factor: 0.80 },
    { id: "100k-250k", name: "$100,000 - $250,000", factor: 1.0 },
    { id: "250k-500k", name: "$250,000 - $500,000", factor: 1.25 },
    { id: "over500k", name: "Over $500,000", factor: 1.55 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg GL Premium", value: "$1,200-$2,500", description: "Per year" },
    { label: "Workers Comp Rate", value: "$6-$12", description: "Per $100 payroll" },
    { label: "Property Damage", value: "40%", description: "Of landscaping claims" },
    { label: "Industry Growth", value: "4.5%", description: "Annual 2026" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does landscaping insurance cost in 2026?",
        answer: "Landscaping insurance typically costs $3,000-$8,000 per year including GL and workers comp. General liability alone ranges from $1,200-$2,500. Landscaping has relatively low workers comp rates ($6-$12 per $100 payroll), but equipment coverage adds to costs."
    },
    {
        question: "What insurance does a landscaper need?",
        answer: "Landscapers need: General Liability (covers property damage - sprinkler lines, windows), Workers Compensation (for employees), Equipment/Inland Marine (mowers, trimmers, trailers), and Commercial Auto. Many HOAs and commercial clients require proof of insurance."
    },
    {
        question: "Does landscaping insurance cover damaged property?",
        answer: "Yes. General liability covers third-party property damage like broken sprinkler lines, damaged plants, broken windows from flying debris, and vehicle damage in driveways. Property damage claims account for about 40% of all landscaping liability claims."
    },
    {
        question: "Do I need equipment insurance for landscaping?",
        answer: "Yes. Equipment/Inland Marine insurance covers your mowers, trimmers, blowers, trailers, and other equipment against theft, vandalism, and damage. It's crucial since landscaping equipment is expensive and often stored on trailers that can be stolen."
    },
    {
        question: "Is tree service more expensive to insure?",
        answer: "Yes. Tree service and removal has higher workers comp rates ($15-$25 per $100 payroll) due to chainsaw and falling hazard risks. Tree service specialists pay significantly more than basic lawn care operators for both GL and workers comp."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NCCI",
        title: "Landscaping Classification Code Rates",
        url: "https://www.ncci.com/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Small Business Insurance Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Contractor Insurance", url: "/contractor-insurance", description: "General contractor" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
    { name: "Commercial Auto", url: "/commercial-auto", description: "Business vehicles" },
];
