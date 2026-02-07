// ============================================
// FLOOD INSURANCE CALCULATOR - QUICK v3.0
// $90 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Flood Insurance Calculator",
    tagline: "Free 2026 NFIP Flood Insurance Estimator",
    description: "Calculate flood insurance costs. NFIP and private flood coverage by zone, elevation, and property type. Based on 2026 FEMA and insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/flood-insurance",
};

// ============================================
// FLOOD ZONES
// ============================================
export const FLOOD_ZONES = [
    { id: "zone-a", name: "Zone A (High Risk)", factor: 2.5, description: "1% annual flood risk" },
    { id: "zone-ae", name: "Zone AE (High Risk, Mapped)", factor: 2.2, description: "With base flood elevation" },
    { id: "zone-v", name: "Zone V (Coastal High Risk)", factor: 3.0, description: "Wave action" },
    { id: "zone-x", name: "Zone X (Moderate Risk)", factor: 0.7, description: "500-year floodplain" },
    { id: "zone-c", name: "Zone C/B (Low Risk)", factor: 0.4, description: "Minimal risk" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "building", name: "Building Coverage", baseCost: 600, maxLimit: 250000, description: "NFIP max $250K" },
    { id: "contents", name: "Contents Coverage", baseCost: 200, maxLimit: 100000, description: "NFIP max $100K" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg NFIP Premium", value: "$700-$2,000", description: "Per year" },
    { label: "30-Day Wait", value: "Required", description: "For new policies" },
    { label: "Flood Claims", value: "$4B+", description: "Paid annually" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does flood insurance cost in 2026?",
        answer: "NFIP flood insurance costs $700-$2,000+ per year depending on flood zone, elevation, and coverage. High-risk zones (A, V) pay significantly more. Risk Rating 2.0 now calculates rates based on individual property risk factors."
    },
    {
        question: "Do I need flood insurance if I'm not in a flood zone?",
        answer: "Over 25% of flood claims come from outside high-risk zones. If you have a federally-backed mortgage in a SFHA (Special Flood Hazard Area), it's required. Even in low-risk areas, coverage is recommended and often cheaper."
    },
    {
        question: "What's the difference between NFIP and private flood insurance?",
        answer: "NFIP is the federal program with $250K building/$100K contents limits. Private insurers can offer higher limits, additional coverages, and sometimes lower rates. However, private policies may have different terms and cancellation provisions."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "FEMA/NFIP",
        title: "National Flood Insurance Program",
        url: "https://www.fema.gov/flood-insurance",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Homeowners Insurance", url: "/homeowners-insurance", description: "Full home coverage" },
    { name: "Condo Insurance", url: "/condo-insurance", description: "HO-6 coverage" },
    { name: "Mobile Home Insurance", url: "/mobile-home-insurance", description: "HO-7 coverage" },
];
