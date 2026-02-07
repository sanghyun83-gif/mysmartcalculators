// ============================================
// EBT CALCULATOR - QUICK v3.0
// $45 CPC | Competition: High | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "EBT Calculator",
    tagline: "Free 2026 EBT Benefits Calculator",
    description: "Calculate your EBT (Electronic Benefits Transfer) eligibility and monthly benefits. Includes 2026 SNAP income limits and benefit amounts.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/ebt",
};

// ============================================
// EBT/SNAP BENEFITS 2026
// ============================================
export const EBT_BENEFITS = [
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
    { label: "EBT Users", value: "42M", description: "Americans" },
    { label: "Reload Date", value: "1st-28th", description: "By state" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is EBT and how does it work?",
        answer: "EBT (Electronic Benefits Transfer) is the card used to receive SNAP (food stamps), TANF (cash assistance), and other benefits. Your EBT card works like a debit card at authorized grocery stores. Benefits are automatically loaded each month based on your state's schedule."
    },
    {
        question: "When do EBT benefits reload each month?",
        answer: "EBT reload dates vary by state and are typically based on your case number or last name. Benefits load between the 1st and 28th of each month. Check with your state SNAP office for your specific reload date. Benefits don't roll over indefinitely - use them within the certification period."
    },
    {
        question: "Where can I use my EBT card?",
        answer: "EBT cards are accepted at most grocery stores, supermarkets, farmers markets, and some convenience stores. Look for the 'SNAP Accepted' sign. You can buy groceries but not alcohol, tobacco, hot prepared foods, or non-food items. Some states allow online grocery purchases with EBT."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "USDA Food and Nutrition Service",
        title: "EBT/SNAP Program",
        url: "https://www.fns.usda.gov/snap/ebt",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Food Stamps", url: "/food-stamps", description: "SNAP benefits" },
    { name: "WIC Benefits", url: "/wic", description: "Women & children" },
    { name: "SNAP Calculator", url: "/snap", description: "Full SNAP calc" },
];
