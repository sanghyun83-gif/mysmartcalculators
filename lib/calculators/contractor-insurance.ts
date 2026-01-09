// ============================================
// CONTRACTOR INSURANCE CALCULATOR - ADVANCED v3.0
// $130 CPC | Competition: Medium | Blue Theme
// 4 Routes | 10 FAQs | 7 Inputs | 3 Citations
// ============================================

export const SITE = {
    name: "Contractor Insurance Calculator",
    tagline: "Free 2026 General Contractor Insurance Estimator",
    description: "Calculate contractor insurance costs for general contractors, subcontractors, and specialty trades. GL, workers comp, and builder's risk coverage. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/contractor-insurance",
};

// ============================================
// CONTRACTOR TYPES
// ============================================
export const CONTRACTOR_TYPES = [
    { id: "general", name: "General Contractor (GC)", basePremium: 3500, description: "Oversees entire projects" },
    { id: "electrical", name: "Electrical Contractor", basePremium: 4500, description: "Higher liability risk" },
    { id: "plumbing", name: "Plumbing Contractor", basePremium: 3800, description: "Water damage risk" },
    { id: "hvac", name: "HVAC Contractor", basePremium: 3200, description: "Mechanical systems" },
    { id: "roofing", name: "Roofing Contractor", basePremium: 6500, description: "High-risk work at heights" },
    { id: "painting", name: "Painting Contractor", basePremium: 1800, description: "Lower risk trade" },
    { id: "carpentry", name: "Carpentry/Framing", basePremium: 2500, description: "Structural work" },
    { id: "concrete", name: "Concrete/Masonry", basePremium: 3000, description: "Heavy materials" },
];

// ============================================
// COVERAGE TYPES
// ============================================
export const COVERAGE_TYPES = [
    { id: "gl", name: "General Liability (GL)", required: true, avgCost: 1500, description: "Third-party injury/property damage" },
    { id: "wc", name: "Workers Compensation", required: true, avgCost: 3500, description: "Employee injury coverage" },
    { id: "commercial-auto", name: "Commercial Auto", required: false, avgCost: 2000, description: "Work vehicles" },
    { id: "tools", name: "Tools & Equipment", required: false, avgCost: 500, description: "Protects tools/machinery" },
    { id: "builders-risk", name: "Builder's Risk", required: false, avgCost: 1200, description: "Project under construction" },
    { id: "umbrella", name: "Umbrella/Excess", required: false, avgCost: 800, description: "Additional liability limits" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under100k", name: "Under $100,000", factor: 0.7, description: "Small contractor" },
    { id: "100k-250k", name: "$100,000 - $250,000", factor: 0.85, description: "Growing business" },
    { id: "250k-500k", name: "$250,000 - $500,000", factor: 1.0, description: "Established contractor" },
    { id: "500k-1m", name: "$500,000 - $1 Million", factor: 1.2, description: "Mid-size operation" },
    { id: "1m-5m", name: "$1 Million - $5 Million", factor: 1.5, description: "Large contractor" },
    { id: "over5m", name: "Over $5 Million", factor: 2.0, description: "Major contractor" },
];

// ============================================
// NUMBER OF EMPLOYEES
// ============================================
export const EMPLOYEE_COUNTS = [
    { id: "solo", name: "Solo (Owner Only)", wcFactor: 0.5, description: "No employees" },
    { id: "1-3", name: "1-3 Employees", wcFactor: 1.0, description: "Small team" },
    { id: "4-10", name: "4-10 Employees", wcFactor: 2.5, description: "Growing team" },
    { id: "11-25", name: "11-25 Employees", wcFactor: 5.0, description: "Medium crew" },
    { id: "26-50", name: "26-50 Employees", wcFactor: 10.0, description: "Large crew" },
    { id: "over50", name: "Over 50 Employees", wcFactor: 20.0, description: "Major operation" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg GL Premium", value: "$1,200-$3,000", description: "Per year" },
    { label: "Workers Comp", value: "$2,500-$10,000", description: "Varies by trade" },
    { label: "Roofing Rate", value: "$25-$45", description: "Per $100 payroll" },
    { label: "BOP Savings", value: "10-15%", description: "Bundle discount" },
];

// ============================================
// FAQS - 10 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does contractor insurance cost in 2026?",
        answer: "General contractor insurance costs $2,500-$10,000 per year depending on trade, revenue, and coverage. General liability alone ranges from $1,200-$3,000. Roofing and electrical contractors pay the most due to higher risk, while painters pay the least."
    },
    {
        question: "What insurance does a contractor need?",
        answer: "Most contractors need: General Liability (required by most clients), Workers Compensation (required by law in most states), Commercial Auto (for work vehicles), and Tools & Equipment coverage. Large projects may require Builder's Risk and an Umbrella policy."
    },
    {
        question: "Is contractor insurance required by law?",
        answer: "Workers Compensation is required by law in almost all states if you have employees. General Liability isn't legally required but is practically mandatory - most clients, HOAs, and general contractors require proof of GL insurance before you can work."
    },
    {
        question: "What is a Certificate of Insurance (COI)?",
        answer: "A COI is proof of your insurance coverage that you provide to clients. It shows your policy limits, coverage types, and effective dates. Most GCs require subcontractors to provide a COI before starting work. Your insurer can issue COIs for free."
    },
    {
        question: "How is workers comp calculated for contractors?",
        answer: "Workers comp premiums are based on: classification code (trade type), payroll amount, and experience modification rate (EMR). High-risk trades like roofing pay $15-$45 per $100 of payroll, while office workers pay under $1 per $100."
    },
    {
        question: "What is a contractor's BOP?",
        answer: "A Business Owner's Policy (BOP) bundles General Liability, Commercial Property, and Business Interruption insurance at a 10-15% discount. It's ideal for small to mid-size contractors with an office or shop location."
    },
    {
        question: "Does contractor insurance cover subcontractors?",
        answer: "Generally no. Your GL policy covers your company's liability, not your subcontractors'. Always require subcontractors to carry their own insurance and provide a COI. You can be held liable if an uninsured sub causes damage."
    },
    {
        question: "What is Builder's Risk insurance?",
        answer: "Builder's Risk covers structures under construction against damage from fire, weather, theft, and vandalism. It's typically required for new construction and major renovations. Coverage ends when construction is complete or the building is occupied."
    },
    {
        question: "How does claims history affect contractor insurance?",
        answer: "Your claims history affects your Experience Modification Rate (EMR). An EMR above 1.0 increases premiums; below 1.0 decreases them. Too many claims can make you uninsurable with standard carriers, forcing you into high-risk pools."
    },
    {
        question: "Can I get contractor insurance with no experience?",
        answer: "Yes, but expect higher premiums. New contractors typically pay 20-40% more than established ones. Some insurers require 2-3 years of experience. Building a claims-free history gradually lowers your rates over time."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Commercial Insurance Market Report",
        url: "https://content.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Contractor Insurance Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
    {
        source: "NCCI",
        title: "Workers Compensation Classification Codes",
        url: "https://www.ncci.com/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "General Liability", url: "/general-liability", description: "GL coverage estimator" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
    { name: "Business Insurance", url: "/business-insurance", description: "Commercial coverage" },
    { name: "Construction Accident", url: "/construction-accident", description: "Injury settlements" },
];
