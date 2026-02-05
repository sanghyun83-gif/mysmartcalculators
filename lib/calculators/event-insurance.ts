// ============================================
// EVENT INSURANCE CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Event Insurance Calculator",
    tagline: "Free 2026 Event Coverage Estimator",
    description: "Calculate event insurance costs. Coverage for parties, festivals, corporate events, and reunions. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/event-insurance",
};

// ============================================
// EVENT TYPES
// ============================================
export const EVENT_TYPES = [
    { id: "party", name: "Private Party", factor: 0.8, description: "Birthday, anniversary" },
    { id: "corporate", name: "Corporate Event", factor: 1.2, description: "Conference, meeting" },
    { id: "festival", name: "Festival/Fair", factor: 1.5, description: "Public gathering" },
    { id: "reunion", name: "Reunion", factor: 0.9, description: "Family, school reunion" },
    { id: "sporting", name: "Sporting Event", factor: 1.4, description: "Athletic competition" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "liability", name: "General Liability", description: "Bodily injury, property damage" },
    { id: "cancellation", name: "Cancellation", description: "Weather, vendor no-show" },
    { id: "liquor", name: "Liquor Liability", description: "Host liquor coverage" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Policy Cost", value: "$75-$300", description: "One-day event" },
    { label: "Liability Limit", value: "$1M", description: "Standard coverage" },
    { label: "Multi-Day Avg", value: "$150-$500", description: "2-3 day events" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does event insurance cost in 2026?",
        answer: "Event insurance costs $75-$300 for a one-day event, depending on attendance, type, and coverage. Multi-day events run $150-$500+. Festivals and sporting events with higher risks cost more. Liquor liability adds $50-$150."
    },
    {
        question: "What does event insurance cover?",
        answer: "Event insurance typically covers general liability (guest injuries, property damage), event cancellation (weather, illness, venue issues), host liquor liability, vendor no-shows, and property/equipment damage. Some policies include medical payments."
    },
    {
        question: "Do I need event insurance for a private party?",
        answer: "While not legally required, event insurance is recommended for private parties, especially if serving alcohol, hosting at a rented venue, or having 50+ guests. Most venues require proof of liability insurance for rentals."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Insurance Information Institute",
        title: "Event Insurance",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Wedding Insurance", url: "/wedding-insurance", description: "Wedding coverage" },
    { name: "Liability Insurance", url: "/liability-insurance", description: "General liability" },
    { name: "Business Insurance", url: "/business-insurance", description: "Commercial coverage" },
];
