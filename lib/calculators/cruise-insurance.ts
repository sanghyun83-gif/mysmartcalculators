// ============================================
// CRUISE INSURANCE CALCULATOR - QUICK v3.0
// $50 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Cruise Insurance Calculator",
    tagline: "Free 2026 Cruise Coverage Estimator",
    description: "Calculate cruise insurance costs. Coverage for cruise cancellation, medical emergencies at sea, and trip interruption. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/cruise-insurance",
};

// ============================================
// CRUISE TYPES
// ============================================
export const CRUISE_TYPES = [
    { id: "caribbean", name: "Caribbean", factor: 1.0, description: "Standard route" },
    { id: "alaska", name: "Alaska", factor: 1.1, description: "Colder climate" },
    { id: "mediterranean", name: "Mediterranean", factor: 1.15, description: "Multiple ports" },
    { id: "world", name: "World Cruise", factor: 1.4, description: "Extended voyage" },
    { id: "river", name: "River Cruise", factor: 0.9, description: "Inland waterways" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "cancellation", name: "Trip Cancellation", description: "Cancel before departure" },
    { id: "medical", name: "Medical/Evacuation", description: "Emergency at sea" },
    { id: "interruption", name: "Trip Interruption", description: "Return home early" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Policy Cost", value: "5-8%", description: "Of cruise cost" },
    { label: "Medical Evacuation", value: "$50K+", description: "From sea" },
    { label: "Avg Cruise Cost", value: "$3,500", description: "Per person" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does cruise insurance cost in 2026?",
        answer: "Cruise insurance costs 5-8% of your total cruise cost. A $5,000 cruise would cost $250-$400 for comprehensive coverage. World cruises and expedition cruises cost more due to extended duration and remote locations."
    },
    {
        question: "Do I need cruise insurance if I have travel insurance?",
        answer: "Standard travel insurance may not cover cruise-specific needs like missed port departures, ship delays, or medical evacuation from sea. Cruise insurance includes coverage for getting you to the next port if you miss the ship."
    },
    {
        question: "What does cruise insurance cover?",
        answer: "Cruise insurance covers trip cancellation, medical emergencies at sea, emergency evacuation to shore, missed connections/ports, cruise line bankruptcy, cabin confinement, and itinerary changes. Some policies include cancel-for-any-reason options."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "US Travel Insurance Association",
        title: "Cruise Travel Insurance",
        url: "https://www.ustia.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Travel Insurance", url: "/travel-insurance", description: "General travel" },
    { name: "Trip Cancellation", url: "/trip-cancellation", description: "Cancellation coverage" },
    { name: "Health Insurance", url: "/health-insurance", description: "Medical coverage" },
];
