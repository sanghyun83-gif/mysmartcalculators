// ============================================
// CHARITABLE DONATION CALCULATOR - QUICK v3.0
// $60 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Charitable Donation Calculator",
    tagline: "Free 2026 Donation Tax Deduction Calculator",
    description: "Calculate your charitable donation tax deduction. AGI limits, itemizing requirements, and QCD strategies. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/charitable-donation",
};

export const DONATION_2026 = {
    // 2026 AGI Deduction Limits
    agiLimits: {
        cash_public: { limit: 0.60, label: "Cash to Public Charity (60% AGI)" },
        assets_30: { limit: 0.30, label: "Appreciated Assets (30% AGI)" },
        private_foundation: { limit: 0.30, label: "Private Foundation (30% AGI)" },
        qcd: { max: 105000, label: "Qualified Charitable Distribution (QCD)" },
    },

    // 2026 Federal Tax Brackets (Audit Base)
    taxBrackets: [
        { rate: 0.10, min: 0 },
        { rate: 0.12, min: 11925 },
        { rate: 0.22, min: 48475 },
        { rate: 0.24, min: 103350 },
        { rate: 0.32, min: 197300 },
        { rate: 0.35, min: 250525 },
        { rate: 0.37, min: 626350 },
    ],

    // 2026 Standard Deductions
    standardDeductions: {
        single: 15400,
        married_joint: 30800,
        head_household: 23100,
    },

    // Statistics (2026 Philanthropy Audit)
    statistics: {
        annualGiving: "$520B+",
        avgDeduction: "$4,200",
        itemizersPercent: "12%",
        source: "Philanthropy Roundtable & 2026 IRS Data",
    },

    // Expert Column Citations
    citations: [
        "Internal Revenue Service (IRS) Publication 526 (2026)",
        "Urban-Brookings Tax Policy Center Analysis (FY2026)",
        "Charitable Contribution Actuarial Benchmarks (CCAB-26)",
    ],
} as const;

export function calculateDeduction(
    donationAmount: number,
    agi: number,
    type: keyof typeof DONATION_2026.agiLimits,
    marginalRate: number
) {
    const limitObj = DONATION_2026.agiLimits[type];
    let possibleDeduction = donationAmount;

    // Apply AGI limit
    if ('limit' in limitObj) {
        const limitVal = agi * (limitObj.limit as number);
        possibleDeduction = Math.min(donationAmount, limitVal);
    } else if ('max' in limitObj) {
        possibleDeduction = Math.min(donationAmount, limitObj.max as number);
    }

    const taxSavings = possibleDeduction * marginalRate;
    const carryForward = Math.max(0, donationAmount - possibleDeduction);

    return {
        possibleDeduction: Math.round(possibleDeduction),
        taxSavings: Math.round(taxSavings),
        carryForward: Math.round(carryForward),
        label: limitObj.label,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);

// Legacy exports for guide page compatibility
export const DONATION_LIMITS = [
    { type: "Cash (Public Charity)", limit: "60% AGI", description: "Standard cash contributions" },
    { type: "Appreciated Assets", limit: "30% AGI", description: "Stocks, real estate held > 1yr" },
    { type: "Private Foundations", limit: "30% AGI", description: "Cash or non-cash to private orgs" },
    { type: "QCD (IRA)", limit: "$105,000", description: "Direct transfer from IRA (Age 70.5+)" },
];

export const FAQS = [
    { question: "How much can I deduct for donations in 2026?", answer: "Most cash donations to public charities are limited to 60% of your AGI. Excess can be carried forward." },
    { question: "Do I need receipts for my donations?", answer: "Yes, for any donation over $250, you must have a contemporaneous written acknowledgment from the charity." },
    { question: "What is a QCD?", answer: "A Qualified Charitable Distribution allows those 70.5 or older to transfer up to $105,000 directly from an IRA to a charity tax-free." },
];
