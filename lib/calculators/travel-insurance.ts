// ============================================
// TRAVEL INSURANCE CALCULATOR - QUICK v3.0
// $60 CPC | Competition: High | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Travel Insurance Calculator",
    tagline: "Free 2026 Travel Coverage Estimator",
    description: "Calculate travel insurance costs. Coverage for trip cancellation, medical emergencies, and lost luggage. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/travel-insurance",
};

// ============================================
// TRIP TYPES
// ============================================
export const TRIP_TYPES = [
    { id: "domestic", name: "Domestic Trip", factor: 0.7, description: "Within US" },
    { id: "international", name: "International", factor: 1.2, description: "Abroad travel" },
    { id: "cruise", name: "Cruise", factor: 1.3, description: "Ocean cruise" },
    { id: "adventure", name: "Adventure Travel", factor: 1.5, description: "Skiing, diving, etc." },
    { id: "business", name: "Business Trip", factor: 1.0, description: "Work travel" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "cancellation", name: "Trip Cancellation", description: "Cancel for any reason" },
    { id: "medical", name: "Medical Emergency", description: "Illness, injury abroad" },
    { id: "baggage", name: "Lost Baggage", description: "Luggage protection" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Policy Cost", value: "4-8%", description: "Of trip cost" },
    { label: "Claims Approved", value: "85%+", description: "Legitimate claims" },
    { label: "Avg Payout", value: "$2,500", description: "Per claim" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does travel insurance cost in 2026?",
        answer: "Travel insurance typically costs 4-8% of your total trip cost. A $5,000 trip would have premiums of $200-$400. Factors include traveler age, destination, trip length, and coverage level. Adventure travel and cruise policies cost more."
    },
    {
        question: "What does travel insurance cover?",
        answer: "Travel insurance covers trip cancellation/interruption, medical emergencies abroad, emergency evacuation, lost/delayed baggage, travel delays, and 24/7 assistance. Some policies include cancel-for-any-reason (CFAR) coverage for higher premiums."
    },
    {
        question: "When should I buy travel insurance?",
        answer: "Buy travel insurance as soon as you book your trip, ideally within 14-21 days. Early purchase gives access to pre-existing condition waivers and cancel-for-any-reason upgrades. Most policies can be purchased up to the day before departure."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "US Travel Insurance Association",
        title: "Travel Insurance Facts",
        url: "https://www.ustia.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Health Insurance", url: "/health-insurance", description: "Medical coverage" },
    { name: "Event Insurance", url: "/event-insurance", description: "Event coverage" },
    { name: "Life Insurance", url: "/life-insurance", description: "Life coverage" },
];
