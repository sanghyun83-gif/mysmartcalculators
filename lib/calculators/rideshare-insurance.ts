// ============================================
// RIDESHARE INSURANCE CALCULATOR - ADVANCED v3.0
// $110 CPC | Competition: Medium | Blue Theme
// 4 Routes | 10 FAQs | 7 Inputs | 3 Citations
// ============================================

export const SITE = {
    name: "Rideshare Insurance Calculator",
    tagline: "Free 2026 Uber & Lyft Insurance Estimator",
    description: "Calculate rideshare insurance costs for Uber, Lyft drivers. Gap coverage, commercial endorsements, and personal auto rates. Based on 2026 insurance industry data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/rideshare-insurance",
};

// ============================================
// RIDESHARE PLATFORMS
// ============================================
export const PLATFORMS = [
    { id: "uber", name: "Uber Only", factor: 1.0, description: "Uber driver" },
    { id: "lyft", name: "Lyft Only", factor: 1.0, description: "Lyft driver" },
    { id: "both", name: "Both Uber & Lyft", factor: 1.15, description: "Multi-platform driver" },
    { id: "doordash", name: "Food Delivery (DoorDash, UberEats)", factor: 0.85, description: "Delivery only" },
    { id: "all", name: "All Platforms", factor: 1.25, description: "Rideshare + delivery" },
];

// ============================================
// COVERAGE PERIODS (TNC Phases)
// ============================================
export const COVERAGE_PERIODS = [
    {
        id: "period0",
        name: "Period 0 - App Off",
        coverage: "Personal Auto Only",
        description: "Your personal auto policy covers you when the app is off",
        uberCoverage: "None",
        liftCoverage: "None"
    },
    {
        id: "period1",
        name: "Period 1 - App On, No Ride",
        coverage: "Limited TNC Coverage",
        description: "Waiting for ride request - gap coverage critical",
        uberCoverage: "Liability only (limits vary by state)",
        liftCoverage: "Contingent liability"
    },
    {
        id: "period2",
        name: "Period 2 - En Route to Pickup",
        coverage: "TNC Insurance Active",
        description: "Accepted ride, driving to passenger",
        uberCoverage: "$1M liability, uninsured motorist",
        liftCoverage: "$1M liability coverage"
    },
    {
        id: "period3",
        name: "Period 3 - Passenger in Car",
        coverage: "Full TNC Coverage",
        description: "Passenger in vehicle until dropoff",
        uberCoverage: "$1M liability + collision",
        liftCoverage: "$1M liability + collision"
    },
];

// ============================================
// INSURANCE OPTIONS
// ============================================
export const INSURANCE_OPTIONS = [
    {
        id: "rideshare-endorsement",
        name: "Rideshare Endorsement",
        avgCost: 20,
        costType: "per month",
        description: "Add to personal policy - covers Period 1 gap",
        pros: ["Cheapest option", "Easy to add", "Covers gap period"],
        cons: ["May not cover all gaps", "Limited collision coverage"]
    },
    {
        id: "hybrid-policy",
        name: "Hybrid Personal/Commercial",
        avgCost: 180,
        costType: "per month",
        description: "Combined personal and rideshare coverage",
        pros: ["Comprehensive coverage", "No gaps", "One policy"],
        cons: ["More expensive", "Not all insurers offer"]
    },
    {
        id: "commercial",
        name: "Full Commercial Policy",
        avgCost: 350,
        costType: "per month",
        description: "Full commercial auto insurance",
        pros: ["Maximum coverage", "Covers all activities", "Professional grade"],
        cons: ["Most expensive", "May be overkill for part-time"]
    },
];

// ============================================
// DRIVING FREQUENCY
// ============================================
export const DRIVING_FREQUENCY = [
    { id: "parttime", name: "Part-Time (Under 15 hrs/week)", factor: 0.85, avgMiles: 300 },
    { id: "regular", name: "Regular (15-30 hrs/week)", factor: 1.0, avgMiles: 600 },
    { id: "fulltime", name: "Full-Time (30-45 hrs/week)", factor: 1.20, avgMiles: 1000 },
    { id: "heavy", name: "Heavy (45+ hrs/week)", factor: 1.40, avgMiles: 1500 },
];

// ============================================
// VEHICLE AGE FACTORS
// ============================================
export const VEHICLE_AGE = [
    { years: "0-2", factor: 1.15, description: "New vehicle - higher value" },
    { years: "3-5", factor: 1.0, description: "Standard depreciation" },
    { years: "6-8", factor: 0.90, description: "Older vehicle" },
    { years: "9+", factor: 0.80, description: "High mileage typical" },
];

// ============================================
// STATE REQUIREMENTS (Sample)
// ============================================
export const STATE_REQUIREMENTS = [
    { state: "California", period1Liability: "$50,000", notes: "TNC insurance required" },
    { state: "Texas", period1Liability: "$30,000", notes: "Basic requirements" },
    { state: "New York", period1Liability: "$75,000", notes: "Strict TNC laws" },
    { state: "Florida", period1Liability: "$50,000", notes: "PIP state" },
    { state: "Illinois", period1Liability: "$50,000", notes: "Chicago regulations" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Endorsement Cost", value: "$15-$30/mo", description: "Rideshare endorsement" },
    { label: "Gap Coverage Risk", value: "Period 1", description: "Most accidents occur" },
    { label: "Uber/Lyft Coverage", value: "$1 Million", description: "During active rides" },
    { label: "Drivers Underinsured", value: "48%", description: "Don't have gap coverage" },
];

// ============================================
// FAQS - 10 Questions
// ============================================
export const FAQS = [
    {
        question: "Does my personal auto insurance cover Uber/Lyft driving?",
        answer: "No. Most personal auto policies explicitly exclude commercial activities like rideshare driving. Using your car for Uber or Lyft without proper coverage can void your policy entirely if you file a claim during rideshare activities."
    },
    {
        question: "What is a rideshare endorsement?",
        answer: "A rideshare endorsement (also called TNC endorsement) is an add-on to your personal auto policy that covers the gap in Period 1 when the app is on but you haven't accepted a ride. It typically costs $15-$30 per month and is the most affordable way to close coverage gaps."
    },
    {
        question: "What are the coverage periods for rideshare insurance?",
        answer: "There are 4 periods: Period 0 (app off - personal insurance), Period 1 (app on, waiting - gap period), Period 2 (en route to pickup - TNC coverage), and Period 3 (passenger in car - full TNC coverage). Period 1 is the dangerous gap most drivers don't cover."
    },
    {
        question: "Does Uber provide insurance for drivers?",
        answer: "Uber provides $1 million liability coverage during Periods 2 and 3 (when you're en route or have a passenger). During Period 1, Uber only provides limited contingent liability. Period 0 (app off) has no Uber coverage - that's your responsibility."
    },
    {
        question: "How much does rideshare insurance cost in 2026?",
        answer: "A rideshare endorsement costs $15-$30/month. A hybrid policy runs $150-$250/month. Full commercial coverage costs $300-$500/month. Part-time drivers typically only need the endorsement; full-time drivers should consider hybrid policies."
    },
    {
        question: "What happens if I get in an accident during Period 1?",
        answer: "If you have no rideshare coverage and get in an accident while waiting for a ride request, your personal insurer may deny the claim AND cancel your policy. Uber/Lyft's Period 1 coverage is limited and may not cover your vehicle damage."
    },
    {
        question: "Do I need commercial insurance for DoorDash or UberEats?",
        answer: "Food delivery has different requirements than passenger rideshare. Many insurers offer delivery endorsements that are cheaper than rideshare endorsements. Some personal policies cover delivery with no endorsement - check your specific policy."
    },
    {
        question: "Can my insurance company drop me for driving Uber?",
        answer: "Yes. If your insurer discovers unreported rideshare activity, they can cancel your policy immediately. Always disclose rideshare driving to your insurer and add proper endorsements. Non-disclosure is considered fraud."
    },
    {
        question: "Is rideshare insurance tax deductible?",
        answer: "Yes. Rideshare insurance is a deductible business expense for taxes. You can deduct the full cost of a rideshare endorsement or the business-use percentage of a hybrid/commercial policy. Keep all receipts and documentation."
    },
    {
        question: "What's the difference between Uber and Lyft insurance coverage?",
        answer: "Both provide similar $1 million liability coverage during Periods 2-3. The main differences are in Period 1 contingent coverage limits and deductibles for collision coverage. Compare your state's specific TNC requirements for accurate comparison."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Transportation Network Company Insurance Study",
        url: "https://content.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Rideshare Insurance Guide",
        url: "https://www.iii.org/",
        year: "2026"
    },
    {
        source: "California DOI",
        title: "TNC Insurance Requirements",
        url: "https://www.insurance.ca.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Auto Insurance", url: "/auto-insurance", description: "Personal auto coverage" },
    { name: "Commercial Auto", url: "/commercial-auto", description: "Business vehicle insurance" },
    { name: "SR-22 Insurance", url: "/sr22", description: "High-risk driver coverage" },
    { name: "Rideshare Accident", url: "/rideshare-accident", description: "Accident settlements" },
];
