// ============================================
// TRIP CANCELLATION CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Trip Cancellation Calculator",
    tagline: "Free 2026 Trip Cancellation Estimator",
    description: "Calculate trip cancellation insurance costs and refund estimates. Coverage for flight, hotel, and tour cancellations. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/trip-cancellation",
};

// ============================================
// CANCELLATION REASONS
// ============================================
export const CANCELLATION_REASONS = [
    { id: "illness", name: "Illness/Injury", factor: 1.0, description: "Covered reason" },
    { id: "weather", name: "Severe Weather", factor: 1.0, description: "Covered reason" },
    { id: "workjury", name: "Work/Jury Duty", factor: 0.9, description: "Usually covered" },
    { id: "cfar", name: "Cancel for Any Reason", factor: 1.5, description: "Premium coverage" },
    { id: "preexisting", name: "Pre-existing Condition", factor: 1.3, description: "May require waiver" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "basic", name: "Basic Cancellation", description: "Named perils only" },
    { id: "cfar", name: "Cancel Any Reason (CFAR)", description: "75% refund for any reason" },
    { id: "interruption", name: "Trip Interruption", description: "Mid-trip cancellation" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Policy Cost", value: "3-5%", description: "Of trip cost" },
    { label: "CFAR Premium", value: "+40-50%", description: "Additional cost" },
    { label: "Avg Claim", value: "$2,000", description: "Per cancellation" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does trip cancellation insurance cost in 2026?",
        answer: "Trip cancellation insurance costs 3-5% of your total trip cost. A $5,000 trip would cost $150-$250 for basic coverage. Cancel for Any Reason (CFAR) adds 40-50% to the premium but provides more flexibility."
    },
    {
        question: "What reasons are covered for trip cancellation?",
        answer: "Standard policies cover illness, injury, death in family, severe weather, jury duty, job loss, and natural disasters. CFAR policies cover any reason but typically refund only 75% of non-refundable costs."
    },
    {
        question: "How do I file a trip cancellation claim?",
        answer: "Contact your insurer immediately upon cancellation. Provide documentation including booking confirmations, cancellation notices, and proof of reason (doctor's note, weather reports). Most claims are processed within 2-4 weeks."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "US Travel Insurance Association",
        title: "Trip Cancellation Coverage",
        url: "https://www.ustia.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Travel Insurance", url: "/travel-insurance", description: "Full travel coverage" },
    { name: "Event Insurance", url: "/event-insurance", description: "Event coverage" },
    { name: "Wedding Insurance", url: "/wedding-insurance", description: "Wedding coverage" },
];
