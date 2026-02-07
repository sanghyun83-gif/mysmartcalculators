// ============================================
// GOLF CART INSURANCE CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Low | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Golf Cart Insurance Calculator",
    tagline: "Free 2026 Golf Cart Coverage Estimator",
    description: "Calculate golf cart insurance costs. Coverage for golf courses, retirement communities, and street-legal LSVs. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/golf-cart-insurance",
};

// ============================================
// GOLF CART TYPES
// ============================================
export const GOLFCART_TYPES = [
    { id: "standard", name: "Standard Golf Cart", factor: 0.8, description: "Course use only" },
    { id: "lsv", name: "LSV (Street-Legal)", factor: 1.2, description: "Low-speed vehicle" },
    { id: "utility", name: "Utility Cart", factor: 0.9, description: "Work/hauling" },
    { id: "luxury", name: "Luxury/Custom", factor: 1.4, description: "Lifted, upgraded" },
    { id: "neighborhood", name: "Neighborhood Cart", factor: 1.0, description: "Community use" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "liability", name: "Liability", description: "Bodily injury, property damage" },
    { id: "collision", name: "Collision", description: "Accident damage" },
    { id: "comprehensive", name: "Comprehensive", description: "Theft, fire, vandalism" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Premium", value: "$100-$300", description: "Per year" },
    { label: "US Golf Carts", value: "1.5M+", description: "In communities" },
    { label: "LSV Premium", value: "$150-$400", description: "Street-legal" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does golf cart insurance cost in 2026?",
        answer: "Golf cart insurance costs $100-$300 per year for standard carts. Street-legal LSVs (low-speed vehicles) require auto-style coverage at $150-$400/year. Luxury or custom carts may cost $200-$500+ depending on value and modifications."
    },
    {
        question: "Do I need insurance for a golf cart?",
        answer: "Insurance requirements depend on usage. Course-only carts may be covered by the club. Street-legal LSVs require liability insurance like automobiles. Even for private property use, liability coverage is recommended."
    },
    {
        question: "Does homeowners insurance cover golf carts?",
        answer: "Some homeowners policies cover golf carts used only on your property, but coverage is limited. Carts used on public roads, in communities, or at golf courses typically need a separate golf cart policy or endorsement."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Golf Cart Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "ATV Insurance", url: "/atv-insurance", description: "ATV coverage" },
    { name: "Auto Insurance", url: "/auto-insurance", description: "Standard auto" },
    { name: "E-Bike Insurance", url: "/e-bike-insurance", description: "Electric bike" },
];
