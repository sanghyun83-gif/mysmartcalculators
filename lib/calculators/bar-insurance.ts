// ============================================
// BAR INSURANCE CALCULATOR - STANDARD v3.0
// $115 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Bar Insurance Calculator",
    tagline: "Free 2026 Bar & Tavern Insurance Estimator",
    description: "Calculate bar insurance costs. Liquor liability, GL, property, and assault coverage for bars, nightclubs, and taverns. Based on 2026 NAIC data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/bar-insurance",
};

// ============================================
// BAR TYPES
// ============================================
export const BAR_TYPES = [
    { id: "neighborhood-bar", name: "Neighborhood Bar/Pub", factor: 1.0, description: "Local tavern" },
    { id: "sports-bar", name: "Sports Bar", factor: 1.15, description: "TV screens, events" },
    { id: "nightclub", name: "Nightclub/Dance Club", factor: 1.65, description: "Late night, dancing" },
    { id: "brewery-taproom", name: "Brewery/Taproom", factor: 0.90, description: "Craft beer focus" },
    { id: "wine-bar", name: "Wine Bar", factor: 0.85, description: "Lower risk profile" },
    { id: "cocktail-lounge", name: "Cocktail Lounge", factor: 1.10, description: "Upscale setting" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 4000, description: "Slip/fall, injury" },
    { id: "liquor", name: "Liquor Liability", baseCost: 4500, description: "Dram shop claims" },
    { id: "property", name: "Property/BOP", baseCost: 3500, description: "Building, equipment, inventory" },
    { id: "assault", name: "Assault & Battery", baseCost: 2000, description: "Bouncer/patron incidents" },
];

// ============================================
// ANNUAL REVENUE TIERS
// ============================================
export const REVENUE_TIERS = [
    { id: "under250k", name: "Under $250,000", factor: 0.70 },
    { id: "250k-500k", name: "$250,000 - $500,000", factor: 0.90 },
    { id: "500k-1m", name: "$500,000 - $1 Million", factor: 1.0 },
    { id: "1m-2m", name: "$1 Million - $2 Million", factor: 1.30 },
    { id: "over2m", name: "Over $2 Million", factor: 1.60 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Liquor Liability", value: "$3,000-$8,000", description: "Per year" },
    { label: "Dram Shop Claims", value: "$150K+", description: "Avg settlement" },
    { label: "Assault Coverage", value: "Often Excluded", description: "Separate policy" },
    { label: "Nightclub Premium", value: "+65%", description: "Higher risk" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does bar insurance cost in 2026?",
        answer: "Bar insurance typically costs $8,000-$20,000 per year including GL, liquor liability, and property coverage. Nightclubs and late-night venues pay significantly more (up to 65% higher premiums) due to increased assault and intoxication risks."
    },
    {
        question: "What is liquor liability insurance?",
        answer: "Liquor liability (also called dram shop insurance) protects you when an intoxicated patron causes harm to themselves or others. Dram shop laws in most states hold bars legally responsible for overserving. This coverage is typically required for a liquor license."
    },
    {
        question: "Does bar insurance cover fights and assaults?",
        answer: "Standard GL often EXCLUDES assault and battery claims. You need separate Assault & Battery coverage, which costs $1,500-$3,000+ per year. Nightclubs and bars with bouncers especially need this coverage as patron fights are common claims."
    },
    {
        question: "Why are nightclubs more expensive to insure than bars?",
        answer: "Nightclubs have higher assault risk, late-night hours leading to more intoxicated patrons, dancing/crowd density issues, and often younger clientele. These factors can increase premiums 50-65% compared to a neighborhood pub."
    },
    {
        question: "Is liquor liability required to get a liquor license?",
        answer: "In most states, yes. The liquor license application typically requires proof of liquor liability insurance with minimum limits (often $300,000-$1,000,000). Some states allow cash bonds instead, but insurance is the standard approach."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Alcohol-Related Business Insurance Report",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Liquor Liability Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Restaurant Insurance", url: "/restaurant-insurance", description: "Food service coverage" },
    { name: "Business Insurance", url: "/business-insurance", description: "Small business coverage" },
    { name: "General Liability", url: "/general-liability", description: "GL coverage" },
];
