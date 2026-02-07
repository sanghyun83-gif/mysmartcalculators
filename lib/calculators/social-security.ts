// ============================================
// SOCIAL SECURITY CALCULATOR - SITE CONFIG
// 2026 Data - Retirement Benefits, Claiming Ages
// ============================================

import { Calculator, DollarSign, FileText, Users } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Social Security Calculator",
    tagline: "Free Benefits Estimator",
    description: "Calculate Social Security retirement benefits. Free 2026 calculator with COLA adjustments.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/social-security",
};

// ============================================
// 2026 SOCIAL SECURITY CONSTANTS
// Source: SSA
// ============================================
export const SS_2026 = {
    // Full Retirement Age by birth year
    fullRetirementAge: {
        "1960+": { years: 67, months: 0 },
        "1959": { years: 66, months: 10 },
        "1958": { years: 66, months: 8 },
        "1957": { years: 66, months: 6 },
        "1956": { years: 66, months: 4 },
        "1955": { years: 66, months: 2 },
    },

    // Claiming ages
    earliestAge: 62,
    latestAge: 70,

    // Benefit adjustments
    earlyReduction: {
        perMonthFirst36: 0.556,   // 5/9 of 1% per month for first 36 months
        perMonthAfter36: 0.417,  // 5/12 of 1% per month after 36 months
    },
    delayedCredits: 8,  // 8% per year delay past FRA (until 70)

    // 2026 COLA (projected)
    cola2026: 2.5,

    // Maximum benefit at FRA (2026)
    maxBenefitFRA: 3822,
    maxBenefitAge70: 4873,
    avgBenefit: 1976,

    // Bend points for PIA calculation (2026 projected)
    bendPoints: {
        first: 1226,
        second: 7391,
    },

    // Earnings test (under FRA)
    earningsLimit: 23400,  // 2026 projected
    earningsLimitFRAYear: 62160,  // Year reaching FRA

    // Statistics
    statistics: {
        beneficiaries: 67000000,
        avgMonthly: 1976,
        maxAt70: 4873,
        trustFundYear: 2034,  // Depletion projection
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "social-security/ss-calculator",
        name: "SS Benefits Calculator",
        shortName: "Calculator",
        description: "Estimate your retirement benefits",
        longDescription: "Free 2026 Social Security calculator. Estimate benefits at 62, FRA, and 70.",
        icon: Calculator,
        category: "finance",
        keywords: ["social security calculator", "ss calculator", "retirement benefits calculator"],
        featured: true,
    },
    {
        id: "social-security/benefits-guide",
        name: "Benefits Guide",
        shortName: "Guide",
        description: "When to claim Social Security",
        longDescription: "Learn about claiming strategies, FRA, and spousal benefits.",
        icon: FileText,
        category: "finance",
        keywords: ["when to claim social security", "full retirement age", "social security benefits"],
        featured: true,
    },
] as const;

// ============================================
// SOCIAL SECURITY CALCULATION
// ============================================
export interface SSResult {
    monthlyPIA: number;
    claimAge: number;
    fullRetirementAge: number;
    monthlyBenefit: number;
    annualBenefit: number;
    lifetimeBenefits85: number;
    reductionPercent: number;
    increasePercent: number;
}

export function calculateSS(
    monthlyPIA: number,
    claimAge: number,
    birthYear: number = 1960
): SSResult {
    // Determine FRA
    const fra = 67; // Simplified for 1960+

    let monthlyBenefit = monthlyPIA;
    let reductionPercent = 0;
    let increasePercent = 0;

    if (claimAge < fra) {
        // Early claiming reduction
        const monthsEarly = (fra - claimAge) * 12;
        const first36Months = Math.min(monthsEarly, 36);
        const additionalMonths = Math.max(0, monthsEarly - 36);

        const reductionFirst36 = first36Months * SS_2026.earlyReduction.perMonthFirst36;
        const reductionAfter36 = additionalMonths * SS_2026.earlyReduction.perMonthAfter36;
        reductionPercent = reductionFirst36 + reductionAfter36;

        monthlyBenefit = monthlyPIA * (1 - reductionPercent / 100);
    } else if (claimAge > fra) {
        // Delayed retirement credits
        const monthsDelayed = Math.min((claimAge - fra) * 12, 36); // Max 3 years
        increasePercent = (monthsDelayed / 12) * SS_2026.delayedCredits;

        monthlyBenefit = monthlyPIA * (1 + increasePercent / 100);
    }

    const annualBenefit = monthlyBenefit * 12;

    // Lifetime benefits assuming live to 85
    const yearsCollecting = 85 - claimAge;
    const lifetimeBenefits85 = annualBenefit * yearsCollecting;

    return {
        monthlyPIA,
        claimAge,
        fullRetirementAge: fra,
        monthlyBenefit: Math.round(monthlyBenefit),
        annualBenefit: Math.round(annualBenefit),
        lifetimeBenefits85: Math.round(lifetimeBenefits85),
        reductionPercent: Math.round(reductionPercent * 10) / 10,
        increasePercent: Math.round(increasePercent * 10) / 10,
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
