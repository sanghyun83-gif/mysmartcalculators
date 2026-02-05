// ============================================
// TRUST TAX CALCULATOR - QUICK v3.0
// $80 CPC | Competition: Low | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Trust Tax Calculator",
    tagline: "Free 2026 Trust Income Tax Calculator",
    description: "Calculate trust income tax with compressed brackets. Compare grantor vs non-grantor trust taxation. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/trust-tax",
};

// ============================================
// TRUST TAX BRACKETS (2026)
// ============================================
export const TRUST_BRACKETS = [
    { bracket: "10%", range: "$0 - $3,100", threshold: 3100 },
    { bracket: "24%", range: "$3,100 - $11,150", threshold: 11150 },
    { bracket: "35%", range: "$11,150 - $15,200", threshold: 15200 },
    { bracket: "37%", range: "Over $15,200", threshold: Infinity },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Top Bracket", value: "$15,200", description: "Reaches 37% fast" },
    { label: "Tax Rate", value: "37%", description: "On undistributed" },
    { label: "NIIT", value: "3.8%", description: "On investment income" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How are trusts taxed differently than individuals?",
        answer: "Trusts face compressed tax brackets. The 37% rate kicks in at just $15,200 of retained income (vs $609,350 for individuals). This makes distributing income to beneficiaries often tax-efficient. Distributed income is taxed to beneficiaries at their lower individual rates."
    },
    {
        question: "What is the difference between grantor and non-grantor trusts?",
        answer: "Grantor trusts are disregarded for tax purposes - all income is taxed to the grantor (creator). Non-grantor trusts are separate tax entities filing Form 1041. Irrevocable trusts are typically non-grantor, while revocable living trusts are grantor trusts."
    },
    {
        question: "What is the 3.8% Net Investment Income Tax on trusts?",
        answer: "Trusts pay the 3.8% NIIT on the lesser of undistributed net investment income or the excess of AGI over $15,200. This applies to interest, dividends, capital gains, royalties. Combined with the 37% bracket, trusts can face over 40% tax on retained investment income."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Estates and Trusts (Form 1041)",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Estate Tax", url: "/estate-tax", description: "Estate planning" },
    { name: "Gift Tax", url: "/gift-tax", description: "Lifetime gifts" },
    { name: "Inheritance", url: "/inheritance", description: "Inheritance tax" },
];
