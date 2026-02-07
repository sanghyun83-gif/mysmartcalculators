// ============================================
// SALON INSURANCE CALCULATOR - STANDARD v3.0
// $100 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Salon Insurance Calculator",
    tagline: "Free 2026 Beauty Salon Insurance Estimator",
    description: "Calculate salon insurance costs. GL, professional liability, and property coverage for hair salons, nail salons, spas, and barber shops. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/salon-insurance",
};

// ============================================
// SALON TYPES
// ============================================
export const SALON_TYPES = [
    { id: "hair-salon", name: "Hair Salon", factor: 1.0, description: "Cutting, coloring, styling" },
    { id: "barber-shop", name: "Barber Shop", factor: 0.90, description: "Men's grooming" },
    { id: "nail-salon", name: "Nail Salon", factor: 1.10, description: "Manicures, pedicures" },
    { id: "day-spa", name: "Day Spa", factor: 1.25, description: "Full spa services" },
    { id: "med-spa", name: "Med Spa", factor: 1.55, description: "Medical aesthetics" },
    { id: "tanning-salon", name: "Tanning Salon", factor: 1.35, description: "UV exposure risk" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 1500, description: "Slip/fall, allergic reactions" },
    { id: "professional", name: "Professional Liability", baseCost: 800, description: "Service errors, burns" },
    { id: "property", name: "Business Property", baseCost: 1200, description: "Equipment, inventory" },
    { id: "wc", name: "Workers Compensation", baseCost: 2000, description: "Employee injuries" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under75k", name: "Under $75,000", factor: 0.70 },
    { id: "75k-150k", name: "$75,000 - $150,000", factor: 0.85 },
    { id: "150k-300k", name: "$150,000 - $300,000", factor: 1.0 },
    { id: "300k-500k", name: "$300,000 - $500,000", factor: 1.20 },
    { id: "over500k", name: "Over $500,000", factor: 1.50 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Total Premium", value: "$2,000-$5,000", description: "Per year" },
    { label: "GL Premium", value: "$700-$2,000", description: "Per year" },
    { label: "Professional Liability", value: "$400-$1,200", description: "Per year" },
    { label: "Allergic Reaction Claims", value: "25%", description: "Of salon claims" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does salon insurance cost in 2026?",
        answer: "Salon insurance typically costs $2,000-$5,000 per year for a small to medium-sized salon. This includes GL, professional liability, and property coverage. Med spas pay significantly more (50%+ higher) due to medical procedure risks."
    },
    {
        question: "What insurance does a hair salon need?",
        answer: "Hair salons need: General Liability (slip/fall, allergic reactions), Professional Liability (bad haircuts, chemical burns), Property coverage (chairs, equipment), and Workers Comp if you have employees. Many landlords require proof of insurance."
    },
    {
        question: "What is professional liability for salons?",
        answer: "Professional liability (also called malpractice or errors & omissions) covers claims from services you provide - chemical burns from hair color, allergic reactions to products, bad haircuts, or skin damage. It's different from GL which covers premises-based injuries."
    },
    {
        question: "Does salon insurance cover allergic reactions?",
        answer: "Yes. Both GL and professional liability typically cover allergic reaction claims. About 25% of salon liability claims involve allergic reactions to hair dye, nail products, or skincare. Proper patch testing can reduce your risk and premiums."
    },
    {
        question: "Why is med spa insurance more expensive?",
        answer: "Med spas perform medical procedures like Botox, fillers, laser treatments, and chemical peels. These carry higher injury risks and require a licensed medical professional. Professional liability for med spas can be 3-5x higher than traditional salons."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Beauty and Personal Care Business Insurance",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Service Business Coverage Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Business Insurance", url: "/business-insurance", description: "Small business coverage" },
    { name: "General Liability", url: "/general-liability", description: "GL coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
];
