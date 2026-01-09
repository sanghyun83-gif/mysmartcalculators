// ============================================
// GYM INSURANCE CALCULATOR - STANDARD v3.0
// $105 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Gym Insurance Calculator",
    tagline: "Free 2026 Fitness Center Insurance Estimator",
    description: "Calculate gym insurance costs. GL, professional liability, and property coverage for gyms, fitness centers, and personal trainers. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/gym-insurance",
};

// ============================================
// GYM TYPES
// ============================================
export const GYM_TYPES = [
    { id: "traditional-gym", name: "Traditional Gym", factor: 1.0, description: "Standard fitness center" },
    { id: "crossfit", name: "CrossFit/HIIT Studio", factor: 1.35, description: "High-intensity training" },
    { id: "yoga-pilates", name: "Yoga/Pilates Studio", factor: 0.75, description: "Low-impact classes" },
    { id: "martial-arts", name: "Martial Arts/Boxing", factor: 1.50, description: "Combat sports" },
    { id: "personal-training", name: "Personal Training Studio", factor: 0.90, description: "One-on-one training" },
    { id: "24-hour", name: "24-Hour Access Gym", factor: 1.20, description: "Unsupervised access" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 2500, description: "Member injuries, slip/fall" },
    { id: "professional", name: "Professional Liability", baseCost: 1200, description: "Training advice, instruction" },
    { id: "property", name: "Business Property", baseCost: 2000, description: "Equipment, building" },
    { id: "abuse", name: "Abuse/Molestation", baseCost: 500, description: "Required for youth programs" },
];

// ============================================
// MEMBER COUNT TIERS
// ============================================
export const MEMBER_TIERS = [
    { id: "under200", name: "Under 200 members", factor: 0.70 },
    { id: "200-500", name: "200-500 members", factor: 0.85 },
    { id: "500-1000", name: "500-1,000 members", factor: 1.0 },
    { id: "1000-2500", name: "1,000-2,500 members", factor: 1.25 },
    { id: "over2500", name: "Over 2,500 members", factor: 1.55 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Total Premium", value: "$2,500-$8,000", description: "Per year" },
    { label: "GL Premium", value: "$1,500-$4,000", description: "Per year" },
    { label: "Equipment Injuries", value: "60%", description: "Of gym claims" },
    { label: "Waiver Enforceability", value: "Varies", description: "By state" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does gym insurance cost in 2026?",
        answer: "Gym insurance typically costs $2,500-$8,000 per year for a small to medium fitness center. Costs depend on facility type, member count, services offered, and equipment. CrossFit and martial arts studios pay 35-50% more due to higher injury rates."
    },
    {
        question: "What insurance does a gym need?",
        answer: "Gyms need: General Liability (member injuries, slip/fall), Professional Liability (training advice, instruction errors), Property coverage (equipment, building), and Workers Comp for employees. Youth programs may require abuse/molestation coverage."
    },
    {
        question: "Do liability waivers protect gyms from lawsuits?",
        answer: "Waivers provide some protection but are NOT foolproof. Enforceability varies by state - some states won't enforce waivers for gross negligence. Waivers may help reduce claims but insurance is still essential. Never rely on waivers alone."
    },
    {
        question: "Why is CrossFit insurance more expensive?",
        answer: "CrossFit and HIIT studios have higher injury rates due to high-intensity movements, Olympic lifts, and competitive elements. Studies show CrossFit has 2-3x higher injury rates than traditional gym workouts, resulting in 30-50% higher premiums."
    },
    {
        question: "Does gym insurance cover personal trainers?",
        answer: "Professional liability covers training advice and instruction errors. However, independent contractor trainers often need their own insurance. Employee trainers are typically covered under your policy, but the gym is still liable for their negligence."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Fitness and Recreation Insurance Report",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "Insurance Information Institute",
        title: "Recreation Business Coverage",
        url: "https://www.iii.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Business Insurance", url: "/business-insurance", description: "Small business coverage" },
    { name: "General Liability", url: "/general-liability", description: "GL coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
];
