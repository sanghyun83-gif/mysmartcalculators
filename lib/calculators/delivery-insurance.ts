// ============================================
// DELIVERY DRIVER INSURANCE CALCULATOR - STANDARD v3.0
// $100 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Delivery Driver Insurance Calculator",
    tagline: "Free 2026 DoorDash & UberEats Insurance Estimator",
    description: "Calculate delivery driver insurance costs for DoorDash, UberEats, Instacart, and Amazon Flex. Gap coverage and commercial endorsements. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/delivery-insurance",
};

// ============================================
// DELIVERY PLATFORMS
// ============================================
export const PLATFORMS = [
    { id: "doordash", name: "DoorDash", factor: 1.0, description: "Food delivery" },
    { id: "ubereats", name: "UberEats", factor: 1.0, description: "Food delivery" },
    { id: "instacart", name: "Instacart", factor: 0.95, description: "Grocery delivery" },
    { id: "amazon", name: "Amazon Flex", factor: 1.10, description: "Package delivery" },
    { id: "grubhub", name: "Grubhub", factor: 1.0, description: "Food delivery" },
    { id: "multiple", name: "Multiple Platforms", factor: 1.15, description: "Multi-app driver" },
];

// ============================================
// DRIVING FREQUENCY
// ============================================
export const DRIVING_FREQUENCY = [
    { id: "occasional", name: "Occasional (Under 10 hrs/week)", factor: 0.80, avgMiles: 150 },
    { id: "parttime", name: "Part-Time (10-20 hrs/week)", factor: 1.0, avgMiles: 300 },
    { id: "fulltime", name: "Full-Time (20-40 hrs/week)", factor: 1.25, avgMiles: 600 },
    { id: "heavy", name: "Heavy (40+ hrs/week)", factor: 1.50, avgMiles: 1000 },
];

// ============================================
// INSURANCE OPTIONS
// ============================================
export const INSURANCE_OPTIONS = [
    {
        id: "delivery-endorsement",
        name: "Delivery Endorsement",
        avgCost: 15,
        description: "Add to personal policy - covers delivery gap",
    },
    {
        id: "commercial",
        name: "Commercial Auto Policy",
        avgCost: 200,
        description: "Full commercial coverage for delivery work",
    },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Endorsement", value: "$10-$25/mo", description: "Delivery add-on" },
    { label: "Commercial Policy", value: "$150-$300/mo", description: "Full coverage" },
    { label: "Gig Workers", value: "7.3M", description: "US delivery drivers" },
    { label: "Uninsured Rate", value: "42%", description: "Without proper coverage" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "Does my personal auto insurance cover DoorDash delivery?",
        answer: "No. Most personal auto policies exclude commercial delivery activities. Driving for DoorDash, UberEats, or other delivery apps without proper coverage can void your policy if you file a claim during a delivery."
    },
    {
        question: "How much does delivery driver insurance cost?",
        answer: "A delivery endorsement typically costs $10-$25 per month added to your personal policy. Full commercial auto insurance costs $150-$300 per month but provides complete coverage for all delivery activities."
    },
    {
        question: "What is a delivery endorsement?",
        answer: "A delivery endorsement is an add-on to your personal auto policy that covers the gap when you're making deliveries. It's much cheaper than commercial insurance and sufficient for most part-time gig workers."
    },
    {
        question: "Does DoorDash provide insurance for drivers?",
        answer: "DoorDash provides limited excess liability coverage while you're on an active delivery. However, this is secondary coverage and may not cover your own vehicle damage. You still need your own delivery insurance."
    },
    {
        question: "Is delivery insurance tax deductible?",
        answer: "Yes. Delivery insurance is a deductible business expense. You can deduct the full cost of a delivery endorsement or the business-use percentage of your commercial policy from your taxes."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Gig Economy Insurance Market Report",
        url: "https://content.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Delivery Driver Insurance Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Rideshare Insurance", url: "/rideshare-insurance", description: "Uber/Lyft coverage" },
    { name: "Auto Insurance", url: "/auto-insurance", description: "Personal auto coverage" },
    { name: "Commercial Auto", url: "/commercial-auto", description: "Business vehicle insurance" },
];
