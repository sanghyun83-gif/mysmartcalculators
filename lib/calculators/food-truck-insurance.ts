// ============================================
// FOOD TRUCK INSURANCE CALCULATOR - STANDARD v3.0
// $100 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Food Truck Insurance Calculator",
    tagline: "Free 2026 Mobile Food Vendor Insurance Estimator",
    description: "Calculate food truck insurance costs. Commercial auto, GL, property, and food contamination coverage for mobile food vendors. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/food-truck-insurance",
};

// ============================================
// FOOD TRUCK TYPES
// ============================================
export const TRUCK_TYPES = [
    { id: "standard", name: "Standard Food Truck", factor: 1.0, description: "Full kitchen on wheels" },
    { id: "trailer", name: "Food Trailer", factor: 0.85, description: "Towed unit" },
    { id: "cart", name: "Food Cart/Stand", factor: 0.65, description: "Mobile cart" },
    { id: "gourmet", name: "Gourmet/High-End", factor: 1.20, description: "Premium food service" },
    { id: "catering-truck", name: "Catering Truck", factor: 1.15, description: "Events and private parties" },
    { id: "ice-cream", name: "Ice Cream Truck", factor: 0.90, description: "Frozen treats" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "auto", name: "Commercial Auto", baseCost: 3500, description: "Truck/vehicle coverage" },
    { id: "gl", name: "General Liability", baseCost: 2500, description: "Customer injury, food illness" },
    { id: "property", name: "Business Property", baseCost: 1200, description: "Equipment, inventory" },
    { id: "spoilage", name: "Food Spoilage", baseCost: 400, description: "Refrigeration breakdown" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under50k", name: "Under $50,000", factor: 0.70 },
    { id: "50k-100k", name: "$50,000 - $100,000", factor: 0.85 },
    { id: "100k-200k", name: "$100,000 - $200,000", factor: 1.0 },
    { id: "200k-350k", name: "$200,000 - $350,000", factor: 1.20 },
    { id: "over350k", name: "Over $350,000", factor: 1.45 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Total Premium", value: "$3,000-$7,000", description: "Per year" },
    { label: "Commercial Auto", value: "$2,000-$5,000", description: "Required" },
    { label: "GL Premium", value: "$1,500-$3,500", description: "Per year" },
    { label: "Industry Size", value: "$1.4B+", description: "US Food Truck 2026" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does food truck insurance cost in 2026?",
        answer: "Food truck insurance typically costs $3,000-$7,000 per year for full coverage including commercial auto, GL, and property. Commercial auto alone costs $2,000-$5,000 annually. Costs depend on truck value, revenue, menu (deep frying increases rates), and locations served."
    },
    {
        question: "What insurance does a food truck need?",
        answer: "Food trucks need: Commercial Auto (required - covers the vehicle), General Liability (customer injuries, food illness claims), Business Property (cooking equipment, inventory), and often Food Spoilage coverage. Many events and cities require proof of insurance."
    },
    {
        question: "Does food truck insurance cover food poisoning claims?",
        answer: "Yes. General liability covers foodborne illness claims from customers. Product liability within your GL policy covers food you serve. If someone gets sick from your food, insurance covers their medical costs, legal defense, and any settlement."
    },
    {
        question: "Do I need commercial auto insurance for a food truck?",
        answer: "Yes, absolutely. Personal auto insurance does NOT cover commercial vehicles or food service activities. Your truck is both a vehicle and a business, requiring commercial auto coverage. This is typically the most expensive part of food truck insurance."
    },
    {
        question: "Does deep frying affect food truck insurance rates?",
        answer: "Yes. Food trucks with deep fryers pay higher premiums due to increased fire risk. Some insurers may require fire suppression systems. Open flame cooking also increases rates. Trucks serving only cold items or pre-packaged food get lower rates."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Mobile Food Vendor Insurance Guide",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Food Business Coverage",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Restaurant Insurance", url: "/restaurant-insurance", description: "Full restaurant coverage" },
    { name: "Commercial Auto", url: "/commercial-auto", description: "Business vehicle insurance" },
    { name: "Business Insurance", url: "/business-insurance", description: "General business coverage" },
];
