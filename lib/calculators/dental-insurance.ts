// ============================================
// DENTAL INSURANCE CALCULATOR - QUICK v3.0
// $55 CPC | Competition: High | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Dental Insurance Calculator",
    tagline: "Free 2026 Dental Coverage Estimator",
    description: "Calculate dental insurance costs. Coverage for cleanings, fillings, crowns, and orthodontics. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/dental-insurance",
};

// ============================================
// PLAN TYPES
// ============================================
export const PLAN_TYPES = [
    { id: "dhmo", name: "DHMO", factor: 0.7, description: "Network dentists only" },
    { id: "ppo", name: "PPO", factor: 1.0, description: "In/out of network" },
    { id: "indemnity", name: "Indemnity", factor: 1.2, description: "Any dentist" },
    { id: "discount", name: "Discount Plan", factor: 0.5, description: "Not insurance" },
    { id: "family", name: "Family PPO", factor: 2.3, description: "Covers dependents" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "preventive", name: "Preventive", description: "Cleanings, x-rays (100%)" },
    { id: "basic", name: "Basic", description: "Fillings, extractions (80%)" },
    { id: "major", name: "Major", description: "Crowns, root canals (50%)" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Monthly Cost", value: "$20-$50", description: "Per person" },
    { label: "Annual Maximum", value: "$1,000-$2,000", description: "Per year" },
    { label: "Waiting Period", value: "6-12 months", description: "Major services" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does dental insurance cost in 2026?",
        answer: "Dental insurance costs $20-$50 per month for individual coverage and $50-$150 for family plans. Employer-sponsored plans average $15-$30/month. DHMO plans are cheaper but limit you to network dentists, while PPO plans offer more flexibility."
    },
    {
        question: "Is dental insurance worth it?",
        answer: "Dental insurance is worth it for preventive care (2 cleanings/year = $300+ value) and if you anticipate needing fillings or crowns. Annual maximums ($1,000-$2,000) may not cover major work, so calculate expected costs vs premiums."
    },
    {
        question: "What does dental insurance cover?",
        answer: "Dental insurance covers preventive care (cleanings, x-rays) at 100%, basic services (fillings, extractions) at 80%, and major services (crowns, root canals, dentures) at 50%. Orthodontics coverage varies and often has separate lifetime maximums."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Delta Dental",
        title: "Dental Insurance Benefits",
        url: "https://www.deltadental.com/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Vision Insurance", url: "/vision-insurance", description: "Eye coverage" },
    { name: "Health Insurance", url: "/health-insurance", description: "Medical coverage" },
    { name: "Student Insurance", url: "/student-insurance", description: "Student health" },
];
