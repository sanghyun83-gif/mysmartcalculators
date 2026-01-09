// ============================================
// PLUMBER INSURANCE CALCULATOR - STANDARD v3.0
// $115 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Plumber Insurance Calculator",
    tagline: "Free 2026 Plumbing Contractor Insurance Estimator",
    description: "Calculate plumber insurance costs. GL, workers comp, and water damage coverage for plumbing contractors. Based on 2026 NCCI data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/plumber-insurance",
};

// ============================================
// PLUMBING SERVICE TYPES
// ============================================
export const SERVICE_TYPES = [
    { id: "residential", name: "Residential Plumbing", factor: 1.0, description: "Homes, apartments" },
    { id: "commercial", name: "Commercial Plumbing", factor: 1.30, description: "Offices, retail" },
    { id: "new-construction", name: "New Construction", factor: 1.15, description: "Building from ground up" },
    { id: "repairs-service", name: "Repairs & Service Only", factor: 0.85, description: "No new installations" },
    { id: "sewer-drain", name: "Sewer & Drain Specialist", factor: 1.20, description: "Excavation work" },
    { id: "hvac-plumbing", name: "Combined HVAC/Plumbing", factor: 1.25, description: "Dual trade" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 3800, description: "Third-party claims, water damage" },
    { id: "wc", name: "Workers Compensation", baseCost: 4500, description: "Employee injury" },
    { id: "tools", name: "Tools & Equipment", baseCost: 450, description: "Pipe cutters, torches" },
    { id: "auto", name: "Commercial Auto", baseCost: 2000, description: "Service vans" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under100k", name: "Under $100,000", factor: 0.65 },
    { id: "100k-250k", name: "$100,000 - $250,000", factor: 0.85 },
    { id: "250k-500k", name: "$250,000 - $500,000", factor: 1.0 },
    { id: "500k-1m", name: "$500,000 - $1 Million", factor: 1.25 },
    { id: "over1m", name: "Over $1 Million", factor: 1.6 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg GL Premium", value: "$2,500-$5,000", description: "Per year" },
    { label: "Workers Comp Rate", value: "$8-$15", description: "Per $100 payroll" },
    { label: "Water Damage Claims", value: "45%", description: "Of all plumber claims" },
    { label: "Industry Growth", value: "4.2%", description: "Annual 2026" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does plumber insurance cost in 2026?",
        answer: "Plumber insurance typically costs $4,000-$10,000 per year including GL and workers comp. General liability alone ranges from $2,500-$5,000. Rates are moderate compared to other construction trades due to lower fall risk, but water damage claims can increase premiums."
    },
    {
        question: "What insurance does a plumber need?",
        answer: "Plumbers need: General Liability (covers water damage claims), Workers Compensation (required by law with employees), Commercial Auto for service vehicles, and Tools & Equipment coverage. Many customers and GCs require proof of GL before hiring."
    },
    {
        question: "Does plumber insurance cover water damage to customer property?",
        answer: "Yes. General liability insurance covers third-party property damage, including water damage caused by your work. This is one of the most common plumber claims. Your policy will pay for repairs to the customer's property up to your coverage limits."
    },
    {
        question: "Why is plumber insurance cheaper than roofing insurance?",
        answer: "Plumbers have lower injury rates than roofers because they work on the ground or at low heights. Workers comp rates for plumbers are $8-$15 per $100 payroll, while roofers pay $25-$45. However, water damage claims can still be costly."
    },
    {
        question: "Do I need a plumbing license to get insurance?",
        answer: "Most states require a plumbing license to operate legally, and insurers typically require proof of licensure. Operating without a license can void your insurance coverage and result in fines. Check your state's requirements."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NCCI",
        title: "Plumbing Classification Code Rates",
        url: "https://www.ncci.com/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Contractor Insurance Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Contractor Insurance", url: "/contractor-insurance", description: "General contractor coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
    { name: "Roofing Insurance", url: "/roofing-insurance", description: "High-risk trade" },
];
