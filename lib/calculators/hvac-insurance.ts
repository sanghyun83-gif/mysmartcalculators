// ============================================
// HVAC INSURANCE CALCULATOR - STANDARD v3.0
// $110 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "HVAC Insurance Calculator",
    tagline: "Free 2026 HVAC Contractor Insurance Estimator",
    description: "Calculate HVAC contractor insurance costs. GL, workers comp, and EPA refrigerant coverage for heating and cooling contractors. Based on 2026 NCCI data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/hvac-insurance",
};

// ============================================
// HVAC SERVICE TYPES
// ============================================
export const SERVICE_TYPES = [
    { id: "residential", name: "Residential HVAC", factor: 1.0, description: "Homes, apartments" },
    { id: "commercial", name: "Commercial HVAC", factor: 1.30, description: "Offices, retail, restaurants" },
    { id: "industrial", name: "Industrial/Refrigeration", factor: 1.45, description: "Large systems, cold storage" },
    { id: "install-only", name: "Installation Only", factor: 1.10, description: "New equipment only" },
    { id: "service-repair", name: "Service & Repairs Only", factor: 0.85, description: "Maintenance, repairs" },
    { id: "duct-work", name: "Duct Work Specialist", factor: 0.90, description: "Sheet metal, ductwork" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 3200, description: "Property damage, injury" },
    { id: "wc", name: "Workers Compensation", baseCost: 4000, description: "Employee injury, falls" },
    { id: "tools", name: "Tools & Equipment", baseCost: 500, description: "Gauges, recovery units" },
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
    { label: "Workers Comp Rate", value: "$8-$14", description: "Per $100 payroll" },
    { label: "EPA Certification", value: "Required", description: "Section 608" },
    { label: "Industry Growth", value: "5.1%", description: "Annual 2026" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does HVAC insurance cost in 2026?",
        answer: "HVAC insurance typically costs $4,500-$10,000 per year including GL and workers comp. General liability alone ranges from $2,500-$5,000. HVAC contractors have moderate risk levels, similar to plumbers, with workers comp rates of $8-$14 per $100 payroll."
    },
    {
        question: "What insurance does an HVAC contractor need?",
        answer: "HVAC contractors need: General Liability (covers property damage, refrigerant leaks), Workers Compensation (required with employees), Commercial Auto for service vehicles, and Tools & Equipment coverage. EPA Section 608 certification is also required for refrigerant handling."
    },
    {
        question: "Does HVAC insurance cover refrigerant leaks?",
        answer: "Yes. General liability typically covers property damage from refrigerant leaks or spills. However, EPA fines for improper refrigerant handling are not covered by insurance. Proper EPA 608 certification and recovery procedures are required."
    },
    {
        question: "Why do HVAC contractors need EPA certification?",
        answer: "EPA Section 608 certification is required by law to purchase, handle, and dispose of refrigerants. Operating without certification can result in fines up to $44,539 per day per violation. Insurers require proof of certification."
    },
    {
        question: "Is HVAC insurance the same as plumber insurance?",
        answer: "They're similar but have different risks. HVAC involves refrigerants, electrical work, and sometimes rooftop units. Plumbers deal with water damage risks. HVAC workers comp rates ($8-$14) are similar to plumbers ($8-$15), both lower than electricians ($10-$18)."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NCCI",
        title: "HVAC Classification Code Rates",
        url: "https://www.ncci.com/",
        year: "2026"
    },
    {
        source: "EPA",
        title: "Section 608 Refrigerant Regulations",
        url: "https://www.epa.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Electrician Insurance", url: "/electrician-insurance", description: "Electrical trade" },
    { name: "Plumber Insurance", url: "/plumber-insurance", description: "Plumbing trade" },
    { name: "Contractor Insurance", url: "/contractor-insurance", description: "General contractor" },
];
