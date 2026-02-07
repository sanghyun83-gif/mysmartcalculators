// ============================================
// FSA CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "FSA Calculator",
    tagline: "Free 2026 Flexible Spending Account Calculator",
    description: "Calculate FSA contributions and tax savings. Based on 2026 IRS contribution limits for healthcare and dependent care FSAs.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/fsa",
};

// ============================================
// FSA TYPES
// ============================================
export const FSA_TYPES = [
    { id: "healthcare", name: "Healthcare FSA", limit: 3300, description: "Medical expenses" },
    { id: "dependent", name: "Dependent Care FSA", limit: 5000, description: "Childcare expenses" },
    { id: "limited", name: "Limited Purpose FSA", limit: 3300, description: "Dental/vision only" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "2026 Healthcare Limit", value: "$3,300", description: "Per employee" },
    { label: "Dependent Care Limit", value: "$5,000", description: "Per household" },
    { label: "Carryover Max", value: "$660", description: "Into next year" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the 2026 FSA contribution limit?",
        answer: "For 2026, the healthcare FSA limit is $3,300 per employee. Dependent care FSA limit remains $5,000 per household ($2,500 if married filing separately). These are pre-tax dollars that reduce your taxable income."
    },
    {
        question: "What happens to unused FSA funds?",
        answer: "FSAs have 'use-it-or-lose-it' rules, but employers may offer a grace period (2.5 months into next year) or carryover (up to $660 for 2026). Check your plan details. Dependent care FSAs have no carryover option."
    },
    {
        question: "What expenses are FSA-eligible?",
        answer: "Healthcare FSAs cover deductibles, copays, prescriptions, glasses, contacts, and many OTC items. Dependent care FSAs cover daycare, preschool, summer camps, and elder care. Keep receipts for all purchases."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "FSA Contribution Limits",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "HSA Calculator", url: "/hsa", description: "Health savings" },
    { name: "401k Calculator", url: "/401k", description: "Retirement savings" },
    { name: "Tax Calculator", url: "/tax-calculator", description: "Tax estimation" },
];
