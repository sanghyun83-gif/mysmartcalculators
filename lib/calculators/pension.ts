// ============================================
// PENSION CALCULATOR - SITE CONFIG
// 2026 Data - Defined Benefit, Lump Sum, Annuity
// ============================================

import { Calculator, DollarSign, FileText, Briefcase } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Pension Calculator",
    tagline: "Free Retirement Pension Estimator",
    description: "Calculate pension benefits. Free 2026 calculator for defined benefit, lump sum, and annuity options.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pension",
};

// ============================================
// 2026 PENSION CONSTANTS
// ============================================
export const PENSION_2026 = {
    // Common pension formulas
    benefitMultipliers: {
        low: 1.0,      // 1% per year
        average: 1.5,  // 1.5% per year
        generous: 2.0, // 2% per year
    },

    // Lump sum discount rates (for conversion)
    lumpSumRates: {
        segment1: 5.00,  // First 5 years
        segment2: 5.40,  // Years 6-20
        segment3: 5.60,  // 20+ years
    },

    // Early retirement reduction
    earlyRetirementPenalty: 6,  // 6% per year before normal retirement age

    // COLA (Cost of Living Adjustment) - varies by plan
    colaRates: {
        none: 0,
        low: 2,      // 2% annual
        moderate: 3, // 3% annual
    },

    // Normal retirement ages
    retirementAges: {
        private: 65,
        federal: 62,
        military: 60,
        state: 65,
    },

    // Statistics
    statistics: {
        avgPrivatePension: 2250,    // Monthly
        avgPublicPension: 3100,     // Monthly
        percentWithPension: 15,     // % of workers with DB pension
        avgYearsOfService: 25,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "pension/calculator",
        name: "Pension Calculator",
        shortName: "Calculator",
        description: "Estimate your pension benefits",
        longDescription: "Free 2026 pension calculator. Calculate monthly benefit, lump sum, and early retirement options.",
        icon: Calculator,
        category: "finance",
        keywords: ["pension calculator", "retirement pension calculator", "pension benefit calculator"],
        featured: true,
    },
    {
        id: "pension/payout-guide",
        name: "Payout Options Guide",
        shortName: "Guide",
        description: "Annuity vs lump sum comparison",
        longDescription: "Learn about pension payout options, survivor benefits, and early retirement.",
        icon: FileText,
        category: "finance",
        keywords: ["pension payout options", "lump sum vs annuity", "pension survivor benefits"],
        featured: true,
    },
] as const;

// ============================================
// PENSION CALCULATION
// ============================================
export interface PensionResult {
    finalAverageSalary: number;
    yearsOfService: number;
    multiplier: number;
    monthlyBenefit: number;
    annualBenefit: number;
    estimatedLumpSum: number;
    earlyReduction: number;
}

export function calculatePension(
    finalAverageSalary: number,
    yearsOfService: number,
    multiplier: number = 1.5,
    currentAge: number = 65,
    retirementAge: number = 65
): PensionResult {
    // Basic formula: FAS × Years × Multiplier %
    const annualBenefit = finalAverageSalary * yearsOfService * (multiplier / 100);

    // Early retirement reduction
    let earlyReduction = 0;
    if (currentAge < retirementAge) {
        const yearsEarly = retirementAge - currentAge;
        earlyReduction = yearsEarly * PENSION_2026.earlyRetirementPenalty;
    }

    const adjustedAnnual = annualBenefit * (1 - earlyReduction / 100);
    const monthlyBenefit = adjustedAnnual / 12;

    // Rough lump sum estimate (present value of 20 years of payments)
    const avgDiscountRate = 5.3 / 100;
    const years = 20;
    const pvFactor = (1 - Math.pow(1 + avgDiscountRate, -years)) / avgDiscountRate;
    const estimatedLumpSum = adjustedAnnual * pvFactor;

    return {
        finalAverageSalary,
        yearsOfService,
        multiplier,
        monthlyBenefit: Math.round(monthlyBenefit),
        annualBenefit: Math.round(adjustedAnnual),
        estimatedLumpSum: Math.round(estimatedLumpSum),
        earlyReduction: Math.round(earlyReduction * 10) / 10,
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
