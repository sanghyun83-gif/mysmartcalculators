// ============================================
// GIFT TAX CALCULATOR - QUICK v3.0
// $75 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Gift Tax Calculator",
    tagline: "Free 2026 Gift Tax Calculator",
    description: "Calculate gift tax liability and annual exclusion. Includes lifetime exemption tracking. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/gift-tax",
};

// ============================================
// GIFT TAX EXCLUSIONS
// ============================================
export const EXCLUSIONS = [
    { type: "Annual Exclusion", amount: "$18,000", description: "Per recipient per year" },
    { type: "Spouse Gift Split", amount: "$36,000", description: "With spouse consent" },
    { type: "Lifetime Exemption", amount: "$13.61M", description: "Combined with estate" },
    { type: "Tuition/Medical", amount: "Unlimited", description: "Direct to institution" },
    { type: "Spouse Gifts", amount: "Unlimited", description: "Marital deduction" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Annual Exclusion", value: "$18,000", description: "Per recipient 2026" },
    { label: "Lifetime Exemption", value: "$13.61M", description: "Shared with estate" },
    { label: "Tax Rate", value: "40%", description: "Above exemption" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much can I gift tax-free in 2026?",
        answer: "You can give up to $18,000 per recipient per year without using any lifetime exemption or filing a gift tax return. Married couples can gift $36,000 per recipient by splitting gifts. Gifts for tuition or medical expenses paid directly to institutions are unlimited."
    },
    {
        question: "What is the lifetime gift tax exemption?",
        answer: "The 2026 lifetime gift tax exemption is $13.61 million. This is shared with your estate tax exemption. Gifts above the annual exclusion ($18K) count against this lifetime limit. Gift tax (40%) only applies after exceeding the lifetime exemption."
    },
    {
        question: "Do I need to file a gift tax return?",
        answer: "File Form 709 if you give more than $18,000 to any one recipient in a year, split gifts with spouse, give future interests, or give to a skip person (grandchildren). You don't owe tax until you exceed the $13.61M lifetime exemption."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Gift Tax",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Estate Tax", url: "/estate-tax", description: "Estate planning" },
    { name: "Inheritance", url: "/inheritance", description: "Inheritance tax" },
    { name: "Trust Tax", url: "/trust-tax", description: "Trust taxation" },
];
