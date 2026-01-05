// ============================================
// ROTH IRA CALCULATOR - SITE CONFIG
// 2026 Data - Contribution Limits, Income Limits, Growth
// ============================================

import { Calculator, DollarSign, FileText, TrendingUp } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Roth IRA Calculator",
    tagline: "Free Roth IRA Growth Calculator",
    description: "Calculate Roth IRA growth and retirement value. Free 2026 calculator with income limits and contribution rules.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/roth-ira",
};

// ============================================
// 2026 ROTH IRA CONSTANTS
// ============================================
export const ROTH_2026 = {
    // Contribution limits
    contributionLimit: 7000,
    catchUpContribution: 1000,  // Age 50+
    catchUpAge: 50,

    // Income limits (MAGI) for full contribution
    incomeLimits: {
        singlePhaseOutStart: 150000,
        singlePhaseOutEnd: 165000,
        marriedPhaseOutStart: 236000,
        marriedPhaseOutEnd: 246000,
    },

    // Withdrawal rules
    withdrawalRules: {
        qualifiedAge: 59.5,
        fiveYearRule: true,
        earlyWithdrawalPenalty: 10,
    },

    // Benefits
    benefits: [
        "Tax-free growth",
        "Tax-free withdrawals in retirement",
        "No RMDs for original owner",
        "Contributions can be withdrawn anytime",
        "Pass tax-free to heirs",
    ],

    // Statistics
    statistics: {
        avgBalance: 42000,
        maxContributors: 32, // % of eligible who max out
        avgAnnualReturn: 7, // Historical average
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "roth-ira/roth-calculator",
        name: "Roth IRA Calculator",
        shortName: "Calculator",
        description: "Calculate your Roth IRA growth",
        longDescription: "Free 2026 Roth IRA calculator. Project tax-free growth and retirement value.",
        icon: Calculator,
        category: "finance",
        keywords: ["roth ira calculator", "roth ira growth calculator", "roth ira retirement calculator"],
        featured: true,
    },
    {
        id: "roth-ira/income-limits",
        name: "Income Limits Guide",
        shortName: "Limits",
        description: "Roth IRA eligibility by income",
        longDescription: "Learn about Roth IRA income limits and phase-out ranges.",
        icon: FileText,
        category: "finance",
        keywords: ["roth ira income limits", "roth ira eligibility", "roth ira phase out"],
        featured: true,
    },
] as const;

// ============================================
// ROTH IRA CALCULATION
// ============================================
export interface RothResult {
    currentAge: number;
    retirementAge: number;
    annualContribution: number;
    currentBalance: number;
    expectedReturn: number;
    futureValue: number;
    totalContributions: number;
    totalGrowth: number;
    taxSavings: number;
}

export function calculateRoth(
    currentAge: number,
    retirementAge: number,
    annualContribution: number,
    currentBalance: number = 0,
    expectedReturn: number = 7,
    taxRate: number = 22
): RothResult {
    const years = retirementAge - currentAge;
    const rate = expectedReturn / 100;

    // Future Value calculation
    // FV = PV(1+r)^n + PMT × [(1+r)^n - 1] / r
    const futureValue = currentBalance * Math.pow(1 + rate, years) +
        annualContribution * ((Math.pow(1 + rate, years) - 1) / rate);

    const totalContributions = currentBalance + (annualContribution * years);
    const totalGrowth = futureValue - totalContributions;

    // Tax savings (compared to taxable account)
    const taxSavings = totalGrowth * (taxRate / 100);

    return {
        currentAge,
        retirementAge,
        annualContribution,
        currentBalance,
        expectedReturn,
        futureValue: Math.round(futureValue),
        totalContributions: Math.round(totalContributions),
        totalGrowth: Math.round(totalGrowth),
        taxSavings: Math.round(taxSavings),
    };
}

// Check eligibility based on income
export function checkEligibility(
    magi: number,
    filingStatus: "single" | "married"
): { eligible: boolean; reducedLimit: number | null; message: string } {
    const limits = ROTH_2026.incomeLimits;

    if (filingStatus === "single") {
        if (magi < limits.singlePhaseOutStart) {
            return { eligible: true, reducedLimit: null, message: "Full contribution allowed" };
        } else if (magi >= limits.singlePhaseOutEnd) {
            return { eligible: false, reducedLimit: 0, message: "Not eligible - consider Backdoor Roth" };
        } else {
            const phaseOutRange = limits.singlePhaseOutEnd - limits.singlePhaseOutStart;
            const overStart = magi - limits.singlePhaseOutStart;
            const reduction = (overStart / phaseOutRange) * ROTH_2026.contributionLimit;
            const reduced = Math.round(ROTH_2026.contributionLimit - reduction);
            return { eligible: true, reducedLimit: reduced, message: `Reduced limit: $${reduced.toLocaleString()}` };
        }
    } else {
        if (magi < limits.marriedPhaseOutStart) {
            return { eligible: true, reducedLimit: null, message: "Full contribution allowed" };
        } else if (magi >= limits.marriedPhaseOutEnd) {
            return { eligible: false, reducedLimit: 0, message: "Not eligible - consider Backdoor Roth" };
        } else {
            const phaseOutRange = limits.marriedPhaseOutEnd - limits.marriedPhaseOutStart;
            const overStart = magi - limits.marriedPhaseOutStart;
            const reduction = (overStart / phaseOutRange) * ROTH_2026.contributionLimit;
            const reduced = Math.round(ROTH_2026.contributionLimit - reduction);
            return { eligible: true, reducedLimit: reduced, message: `Reduced limit: $${reduced.toLocaleString()}` };
        }
    }
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
