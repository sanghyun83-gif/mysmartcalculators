// ============================================
// FOOD STAMPS CALCULATOR - QUICK v3.0
// $50 CPC | Competition: High | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Food Stamps Calculator",
    tagline: "Free 2026 Food Stamps Eligibility Calculator",
    description: "Check if you qualify for food stamps (SNAP) and estimate your monthly benefit. Based on 2026 USDA income limits and benefit amounts.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/food-stamps",
};

// ============================================
// BENEFIT AMOUNTS 2026
// ============================================
export const BENEFIT_AMOUNTS = [
    { householdSize: 1, maxBenefit: 292, grossLimit: 1695, netLimit: 1305 },
    { householdSize: 2, maxBenefit: 536, grossLimit: 2290, netLimit: 1763 },
    { householdSize: 3, maxBenefit: 768, grossLimit: 2885, netLimit: 2221 },
    { householdSize: 4, maxBenefit: 975, grossLimit: 3480, netLimit: 2679 },
    { householdSize: 5, maxBenefit: 1158, grossLimit: 4076, netLimit: 3138 },
    { householdSize: 6, maxBenefit: 1390, grossLimit: 4671, netLimit: 3596 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Max (1 person)", value: "$292", description: "Per month" },
    { label: "Max (4 person)", value: "$975", description: "Per month" },
    { label: "Participants", value: "42M", description: "Americans" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the income limit for food stamps in 2026?",
        answer: "Food stamps (SNAP) uses two income tests: gross income at or below 130% FPL and net income at or below 100% FPL. For a family of 4, this means gross monthly income under $3,480 and net income under $2,679. Many states use 'broad-based categorical eligibility' allowing higher gross limits."
    },
    {
        question: "How much will I get in food stamps?",
        answer: "Your food stamp benefit = Maximum benefit minus 30% of net income. Net income is calculated after deductions for earned income (20%), housing costs over 50% of income, child care, and medical expenses for elderly/disabled. With zero income, you receive the maximum benefit for your household size."
    },
    {
        question: "What can I buy with food stamps?",
        answer: "Food stamps can buy groceries: fruits, vegetables, meat, fish, dairy, bread, cereals, and seeds/plants for food. You CANNOT buy alcohol, tobacco, vitamins, medicine, hot prepared foods, household supplies, pet food, or non-food items. Benefits are loaded monthly onto an EBT card."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "USDA Food and Nutrition Service",
        title: "SNAP Eligibility",
        url: "https://www.fns.usda.gov/snap/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "WIC Benefits", url: "/wic", description: "Women & children" },
    { name: "Medicaid", url: "/medicaid", description: "Health coverage" },
    { name: "Section 8", url: "/section-8", description: "Housing help" },
];
