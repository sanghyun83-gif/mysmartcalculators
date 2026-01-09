// ============================================
// RESTAURANT INSURANCE CALCULATOR - STANDARD v3.0
// $120 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Restaurant Insurance Calculator",
    tagline: "Free 2026 Restaurant Business Insurance Estimator",
    description: "Calculate restaurant insurance costs. GL, property, workers comp, and liquor liability for restaurants and food service. Based on 2026 NAIC data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/restaurant-insurance",
};

// ============================================
// RESTAURANT TYPES
// ============================================
export const RESTAURANT_TYPES = [
    { id: "fast-food", name: "Fast Food/QSR", factor: 0.85, description: "Limited service" },
    { id: "casual-dining", name: "Casual Dining", factor: 1.0, description: "Full service" },
    { id: "fine-dining", name: "Fine Dining", factor: 1.25, description: "Upscale service" },
    { id: "bar-grill", name: "Bar & Grill", factor: 1.35, description: "Alcohol focus" },
    { id: "food-truck", name: "Food Truck", factor: 0.75, description: "Mobile operation" },
    { id: "catering", name: "Catering Only", factor: 0.90, description: "Off-site events" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 3500, description: "Slip/fall, food illness" },
    { id: "property", name: "Property/BOP", baseCost: 4000, description: "Building, equipment, inventory" },
    { id: "wc", name: "Workers Compensation", baseCost: 4500, description: "Kitchen injuries, burns" },
    { id: "liquor", name: "Liquor Liability", baseCost: 2500, description: "Alcohol-related claims" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under250k", name: "Under $250,000", factor: 0.65 },
    { id: "250k-500k", name: "$250,000 - $500,000", factor: 0.85 },
    { id: "500k-1m", name: "$500,000 - $1 Million", factor: 1.0 },
    { id: "1m-2m", name: "$1 Million - $2 Million", factor: 1.25 },
    { id: "over2m", name: "Over $2 Million", factor: 1.55 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg GL Premium", value: "$2,500-$6,000", description: "Per year" },
    { label: "Workers Comp Rate", value: "$3-$8", description: "Per $100 payroll" },
    { label: "Slip/Fall Claims", value: "35%", description: "Of restaurant claims" },
    { label: "Industry Size", value: "$1T+", description: "US Food Service 2026" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does restaurant insurance cost in 2026?",
        answer: "Restaurant insurance typically costs $5,000-$15,000 per year for a full-service restaurant. This includes GL, property, and workers comp. Bars and establishments serving alcohol pay more due to liquor liability requirements averaging $2,000-$4,000 extra annually."
    },
    {
        question: "What insurance does a restaurant need?",
        answer: "Restaurants need: General Liability (slip/fall, foodborne illness), Property/BOP (equipment, inventory), Workers Compensation (kitchen burns, cuts), and Liquor Liability if serving alcohol. Many landlords require proof of insurance before signing a lease."
    },
    {
        question: "Does restaurant insurance cover food poisoning claims?",
        answer: "Yes. General liability insurance covers foodborne illness claims including medical costs, legal defense, and settlements. Product liability within your GL policy specifically covers claims from food you serve. Proper food handling training can reduce your premiums."
    },
    {
        question: "Why do restaurants need liquor liability insurance?",
        answer: "Liquor liability protects you when an intoxicated patron causes harm to themselves or others. In most states, 'dram shop' laws hold bars and restaurants liable for overserving. This coverage is typically required to obtain a liquor license."
    },
    {
        question: "Is workers comp required for restaurant employees?",
        answer: "Yes, in most states. Restaurant workers comp rates ($3-$8 per $100 payroll) are relatively low compared to construction, but kitchen injuries (burns, cuts, slips) are common. Workers comp is required if you have even one employee in most states."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Restaurant Insurance Market Report",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "National Restaurant Association",
        title: "Industry Operations Report",
        url: "https://www.restaurant.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Business Insurance", url: "/business-insurance", description: "Small business coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
    { name: "General Liability", url: "/general-liability", description: "GL coverage" },
];
