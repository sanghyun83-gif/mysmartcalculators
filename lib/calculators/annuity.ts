// ============================================
// ANNUITY CALCULATOR - SITE CONFIG
// 2026 Data - Fixed, Variable, Immediate Annuities
// ============================================

import { Calculator, DollarSign, FileText, Wallet } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Annuity Calculator",
    tagline: "Free Retirement Income Estimator",
    description: "Calculate annuity payouts and compare fixed, variable, and immediate annuities. Free 2026 annuity calculator.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/annuity",
};

// ============================================
// 2026 ANNUITY CONSTANTS
// ============================================
export const ANNUITY_2026 = {
    // Average annuity rates (approximate)
    fixedRates: {
        year3: 5.2,
        year5: 5.5,
        year7: 5.7,
        year10: 5.9,
    },

    // Immediate annuity payout rates (per $100K, age 65)
    immediatePayoutRates: {
        male65: 6.8,    // ~$567/month per $100K
        female65: 6.3,  // ~$525/month per $100K
        joint65: 5.8,   // ~$483/month per $100K
    },

    // SPIA (Single Premium Immediate Annuity) factors
    spiaFactors: {
        lifeOnly: 1.0,
        life10Year: 0.92,
        life20Year: 0.85,
        joint100: 0.85,
        joint50: 0.90,
    },

    // Types of annuities
    annuityTypes: [
        { name: "Fixed Annuity", desc: "Guaranteed rate, predictable growth", risk: "Low" },
        { name: "Variable Annuity", desc: "Market-linked returns, higher potential", risk: "Medium-High" },
        { name: "Indexed Annuity", desc: "Index-linked with downside protection", risk: "Medium" },
        { name: "Immediate Annuity", desc: "Start payments immediately", risk: "Low" },
        { name: "Deferred Annuity", desc: "Grow tax-deferred, payments later", risk: "Varies" },
    ],

    // Statistics
    statistics: {
        totalAnnuitySales: 385, // $385 billion in 2025
        avgPurchaseAge: 62,
        avgPremium: 150000,
        percentGuaranteedIncome: 68, // % wanting guaranteed income
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "annuity/calculator",
        name: "Annuity Calculator",
        shortName: "Calculator",
        description: "Estimate annuity payouts and growth",
        longDescription: "Free 2026 annuity calculator. Calculate monthly income from fixed, variable, and immediate annuities.",
        icon: Calculator,
        category: "finance",
        keywords: ["annuity calculator", "annuity payout calculator", "retirement income calculator"],
        featured: true,
    },
    {
        id: "annuity/payout-guide",
        name: "Payout Options Guide",
        shortName: "Guide",
        description: "Understanding annuity payout options",
        longDescription: "Learn about life-only, period certain, and joint survivor annuity options.",
        icon: FileText,
        category: "finance",
        keywords: ["annuity payout options", "annuity income options", "life annuity"],
        featured: true,
    },
] as const;

// ============================================
// ANNUITY CALCULATION
// ============================================
export interface AnnuityResult {
    principal: number;
    annualRate: number;
    years: number;
    payoutType: string;
    futureValue: number;
    monthlyPayout: number;
    annualPayout: number;
    totalPayouts: number;
    breakEvenYears: number;
}

export function calculateAnnuity(
    principal: number,
    annualRate: number = 5.5,
    years: number = 10,
    payoutType: string = "lifeOnly",
    age: number = 65,
    gender: string = "male"
): AnnuityResult {
    // Growth phase (deferred annuity)
    const futureValue = principal * Math.pow(1 + annualRate / 100, years);

    // Payout calculation (simplified SPIA)
    const payoutFactor = ANNUITY_2026.spiaFactors[payoutType as keyof typeof ANNUITY_2026.spiaFactors] || 1;
    const baseRate = gender === "male"
        ? ANNUITY_2026.immediatePayoutRates.male65
        : ANNUITY_2026.immediatePayoutRates.female65;

    // Age adjustment (rough estimate)
    const ageAdjustment = 1 + ((age - 65) * 0.005);
    const effectiveRate = (baseRate / 100) * payoutFactor * ageAdjustment;

    const annualPayout = futureValue * effectiveRate;
    const monthlyPayout = annualPayout / 12;

    // Estimate life expectancy payouts (assume 20 years payout period)
    const payoutYears = 20;
    const totalPayouts = annualPayout * payoutYears;
    const breakEvenYears = principal / annualPayout;

    return {
        principal,
        annualRate,
        years,
        payoutType,
        futureValue: Math.round(futureValue),
        monthlyPayout: Math.round(monthlyPayout),
        annualPayout: Math.round(annualPayout),
        totalPayouts: Math.round(totalPayouts),
        breakEvenYears: Math.round(breakEvenYears * 10) / 10,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
