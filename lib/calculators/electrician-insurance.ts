// ============================================
// ELECTRICIAN INSURANCE CALCULATOR - STANDARD v3.0
// $115 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Electrician Insurance Calculator",
    tagline: "Free 2026 Electrical Contractor Insurance Estimator",
    description: "Calculate electrician insurance costs. GL, workers comp, and fire liability coverage for electrical contractors. Based on 2026 NCCI data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/electrician-insurance",
};

// ============================================
// ELECTRICAL SERVICE TYPES
// ============================================
export const SERVICE_TYPES = [
    { id: "residential", name: "Residential Electrical", factor: 1.0, description: "Homes, apartments" },
    { id: "commercial", name: "Commercial Electrical", factor: 1.35, description: "Offices, retail" },
    { id: "industrial", name: "Industrial/High Voltage", factor: 1.60, description: "Factories, heavy equipment" },
    { id: "new-construction", name: "New Construction", factor: 1.15, description: "Building from ground up" },
    { id: "service-repair", name: "Service & Repairs Only", factor: 0.85, description: "No new installations" },
    { id: "solar-ev", name: "Solar/EV Charging", factor: 1.25, description: "Green energy specialty" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 4500, description: "Fire, shock, property damage" },
    { id: "wc", name: "Workers Compensation", baseCost: 5500, description: "Employee injury, electrocution" },
    { id: "tools", name: "Tools & Equipment", baseCost: 550, description: "Meters, wire cutters" },
    { id: "auto", name: "Commercial Auto", baseCost: 2100, description: "Service vans" },
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
    { label: "Avg GL Premium", value: "$3,500-$7,000", description: "Per year" },
    { label: "Workers Comp Rate", value: "$10-$18", description: "Per $100 payroll" },
    { label: "Fire/Shock Claims", value: "30%", description: "Of all electrical claims" },
    { label: "License Required", value: "47 States", description: "State licensing" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does electrician insurance cost in 2026?",
        answer: "Electrician insurance typically costs $5,000-$12,000 per year including GL and workers comp. General liability alone ranges from $3,500-$7,000. Rates are higher than plumbers due to fire and electrocution risks but lower than roofers."
    },
    {
        question: "What insurance does an electrician need?",
        answer: "Electricians need: General Liability (covers fire damage, property damage), Workers Compensation (required with employees, covers electrocution), Commercial Auto for service vehicles, and Tools & Equipment coverage. Most states also require a license and surety bond."
    },
    {
        question: "Does electrician insurance cover fire damage?",
        answer: "Yes. General liability insurance covers property damage caused by your work, including fires started by faulty wiring. Fire claims are among the most common and expensive claims for electricians. Make sure you have adequate limits."
    },
    {
        question: "Why is electrician insurance more expensive than plumber insurance?",
        answer: "Electricians face higher fire and electrocution risks, leading to more severe injury and property damage claims. Workers comp rates for electricians ($10-$18 per $100) are higher than plumbers ($8-$15) but lower than roofers ($25-$45)."
    },
    {
        question: "Do I need a license to get electrician insurance?",
        answer: "47 states require electrical licensing. Insurers typically require proof of licensure before issuing a policy. Operating without a license can void your insurance and result in fines. Check your state's specific requirements."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NCCI",
        title: "Electrical Classification Code Rates",
        url: "https://www.ncci.com/",
        year: "2026"
    },
    {
        source: "OSHA",
        title: "Electrical Safety Standards",
        url: "https://www.osha.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Contractor Insurance", url: "/contractor-insurance", description: "General contractor coverage" },
    { name: "Plumber Insurance", url: "/plumber-insurance", description: "Plumbing trade" },
    { name: "Roofing Insurance", url: "/roofing-insurance", description: "High-risk trade" },
];
