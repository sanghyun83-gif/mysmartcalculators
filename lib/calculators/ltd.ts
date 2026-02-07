// ============================================
// LONG TERM DISABILITY CALCULATOR - SITE CONFIG
// 2026 Data - LTD Insurance Benefits
// ============================================

import { Calculator, Shield, FileText, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Long Term Disability Calculator",
    tagline: "Free LTD Benefits Estimator",
    description: "Calculate your long term disability benefits. Free 2026 calculator for LTD insurance payouts and coverage.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ltd",
};

// ============================================
// 2026 LTD CONSTANTS
// Source: Insurance industry data, BLS
// ============================================
export const LTD_CONSTANTS_2026 = {
    // Common Benefit Percentages
    benefitPercentages: {
        standard: 60,  // 60% of pre-disability income
        high: 70,      // Some policies offer 70%
        maximum: 80,   // Rare policies up to 80%
    },

    // Maximum Monthly Benefits
    maxMonthlyBenefits: {
        typical: 10000,    // $10,000/month cap
        executive: 25000,  // Executive plans
        basic: 5000,       // Basic employer plans
    },

    // Elimination Periods (waiting period before benefits start)
    eliminationPeriods: [
        { days: 90, name: "90 Days", description: "Most common for group LTD" },
        { days: 180, name: "180 Days", description: "Lower premium option" },
        { days: 365, name: "1 Year", description: "Lowest premium" },
    ],

    // Benefit Duration
    benefitDurations: [
        { years: 2, name: "2 Years", description: "Basic coverage" },
        { years: 5, name: "5 Years", description: "Standard coverage" },
        { toAge: 65, name: "To Age 65", description: "Most comprehensive" },
        { toAge: 67, name: "To Age 67", description: "Extended coverage" },
    ],

    // Statistics
    statistics: {
        disabilityChance: 25,  // 25% chance of disability before 65
        avgDisabilityLength: 34.6,  // months
        workersWithLTD: 35,  // % of private workers with LTD
        avgBenefitPaid: 2400,  // $/month average
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "ltd/calculator",
        name: "LTD Benefits Calculator",
        shortName: "Calculator",
        description: "Calculate your LTD insurance payout",
        longDescription: "Free 2026 long term disability calculator. Estimate your monthly benefits based on income and policy terms.",
        icon: Calculator,
        category: "insurance",
        keywords: ["ltd calculator", "long term disability benefits", "disability insurance payout"],
        featured: true,
    },
    {
        id: "ltd/benefits-guide",
        name: "LTD Benefits Guide",
        shortName: "Guide",
        description: "Understanding LTD insurance",
        longDescription: "Learn how long term disability insurance works, what it covers, and how to file a claim.",
        icon: FileText,
        category: "insurance",
        keywords: ["ltd insurance guide", "disability benefits explained", "how ltd works"],
        featured: true,
    },
] as const;

// ============================================
// LTD CALCULATION
// ============================================
export interface LTDResult {
    monthlyBenefit: number;
    annualBenefit: number;
    benefitPercentage: number;
    maxBenefitApplied: boolean;
    eliminationPeriod: number;
    totalBenefitPotential: number;
    incomeReplacement: number;
}

export function calculateLTD(
    monthlyIncome: number,
    benefitPercentage: number = 60,
    maxMonthlyBenefit: number = 10000,
    eliminationDays: number = 90,
    benefitYears: number = 10
): LTDResult {
    // Calculate raw benefit
    const rawBenefit = monthlyIncome * (benefitPercentage / 100);

    // Apply maximum cap
    const monthlyBenefit = Math.min(rawBenefit, maxMonthlyBenefit);
    const maxBenefitApplied = rawBenefit > maxMonthlyBenefit;

    // Annual and total
    const annualBenefit = monthlyBenefit * 12;
    const totalBenefitPotential = annualBenefit * benefitYears;

    // Actual income replacement after cap
    const incomeReplacement = monthlyIncome > 0 ? (monthlyBenefit / monthlyIncome) * 100 : 0;

    return {
        monthlyBenefit: Math.round(monthlyBenefit),
        annualBenefit: Math.round(annualBenefit),
        benefitPercentage,
        maxBenefitApplied,
        eliminationPeriod: eliminationDays,
        totalBenefitPotential: Math.round(totalBenefitPotential),
        incomeReplacement: Math.round(incomeReplacement),
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

export function parseFormattedNumber(value: string): number {
    return parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
}
