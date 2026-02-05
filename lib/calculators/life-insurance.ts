// ============================================
// LIFE-INSURANCE-CALC SITE CONFIGURATION
// 2025 Life Insurance Calculator
// Blue/Trust Theme
// ============================================

import { Calculator, Shield, DollarSign, Scale, Users } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Life Insurance Calculator",
    tagline: "Free 2025 Coverage Calculator",
    description: "Calculate how much life insurance you need for free. Estimate coverage, compare term vs whole life, and get premium quotes. Protect your family today.",
    year: 2025,
    baseUrl: "https://mysmartcalculators.com/life-insurance",
};

// ============================================
// 2025 LIFE INSURANCE CONSTANTS
// ============================================
export const INSURANCE_CONSTANTS = {
    // Coverage multipliers
    coverageMultiplier: {
        minimum: 10, // 10x annual income
        recommended: 12,
        maximum: 15,
    },

    // 2025 Average monthly premiums per $100,000 coverage (20-year term)
    // Based on health class and age
    premiumRates: {
        // Preferred Plus (best health)
        preferredPlus: {
            25: 8, 30: 9, 35: 11, 40: 14, 45: 21, 50: 32, 55: 48, 60: 75, 65: 120,
        },
        // Preferred
        preferred: {
            25: 10, 30: 11, 35: 14, 40: 18, 45: 27, 50: 42, 55: 63, 60: 98, 65: 156,
        },
        // Standard
        standard: {
            25: 13, 30: 15, 35: 19, 40: 25, 45: 38, 50: 58, 55: 88, 60: 135, 65: 215,
        },
        // Standard Plus (smoker or health issues)
        standardPlus: {
            25: 25, 30: 30, 35: 38, 40: 50, 45: 75, 50: 115, 55: 175, 60: 270, 65: 430,
        },
    },

    // Term lengths
    termLengths: [10, 15, 20, 25, 30],

    // Health classes for display
    healthClasses: [
        { id: "preferredPlus", name: "Preferred Plus", description: "Excellent health, non-smoker, no family history" },
        { id: "preferred", name: "Preferred", description: "Good health, non-smoker, minor issues OK" },
        { id: "standard", name: "Standard", description: "Average health, some conditions" },
        { id: "standardPlus", name: "Standard Plus", description: "Smoker or significant health issues" },
    ],

    // Financial obligations to consider
    obligations: {
        mortgageYears: 15, // Average remaining mortgage
        childCostPerYear: 15000, // Average cost per child per year
        collegePerChild: 100000, // Average 4-year college cost
        funeralCost: 15000, // Average funeral cost 2025
    },

    // Defaults
    defaults: {
        age: 35,
        income: 75000,
        coverage: 500000,
        termLength: 20,
        healthClass: "preferred",
    },
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "life-insurance/calculator",
        name: "Coverage Calculator",
        shortName: "Coverage",
        description: "How much life insurance do you need?",
        longDescription: "Calculate the right amount of coverage based on your income, debts, and family needs.",
        icon: Calculator,
        category: "insurance",
        keywords: ["life insurance calculator", "how much life insurance do I need", "coverage calculator"],
        featured: true,
    },
    {
        id: "life-insurance/term-vs-whole",
        name: "Term vs Whole Life",
        shortName: "Term vs Whole",
        description: "Which type of policy is right for you?",
        longDescription: "Compare term life and whole life insurance to find the best fit for your situation.",
        icon: Scale,
        category: "insurance",
        keywords: ["term vs whole life", "term life insurance", "whole life insurance"],
        featured: true,
    },
    {
        id: "life-insurance/premium",
        name: "Premium Estimator",
        shortName: "Premium",
        description: "Estimate your monthly premium",
        longDescription: "Get an estimate of what you'll pay based on your age, health, and coverage amount.",
        icon: DollarSign,
        category: "insurance",
        keywords: ["life insurance premium", "life insurance cost", "insurance quote"],
        featured: true,
    },
    {
        id: "life-insurance/family-needs",
        name: "Family Needs Calculator",
        shortName: "Family Needs",
        description: "Calculate coverage based on family obligations",
        longDescription: "Factor in mortgage, children, college costs, and other obligations to find your ideal coverage.",
        icon: Users,
        category: "insurance",
        keywords: ["family life insurance", "insurance for family", "coverage for kids"],
        featured: false,
    },
] as const;

// ============================================
// COVERAGE CALCULATION FUNCTIONS
// ============================================

export interface CoverageResult {
    annualIncome: number;
    incomeYears: number;
    incomeCoverage: number;
    outstandingDebts: number;
    childrenCoverage: number;
    collegeCoverage: number;
    funeralCost: number;
    existingSavings: number;
    existingInsurance: number;
    totalNeed: number;
    recommendedCoverage: number;
}

export function calculateCoverage(
    annualIncome: number,
    incomeYears: number = 10,
    outstandingDebts: number = 0,
    numberOfChildren: number = 0,
    yearsUntilCollege: number = 10,
    existingSavings: number = 0,
    existingInsurance: number = 0
): CoverageResult {
    const { obligations } = INSURANCE_CONSTANTS;

    // Income replacement
    const incomeCoverage = annualIncome * incomeYears;

    // Children costs (until age 18)
    const childrenCoverage = numberOfChildren * obligations.childCostPerYear * Math.max(0, 18 - Math.max(0, 18 - incomeYears));

    // College fund
    const collegeCoverage = numberOfChildren * obligations.collegePerChild;

    // Funeral costs
    const funeralCost = obligations.funeralCost;

    // Total need
    const grossNeed = incomeCoverage + outstandingDebts + childrenCoverage + collegeCoverage + funeralCost;

    // Subtract existing resources
    const totalNeed = Math.max(0, grossNeed - existingSavings - existingInsurance);

    // Round to nearest $50,000
    const recommendedCoverage = Math.ceil(totalNeed / 50000) * 50000;

    return {
        annualIncome,
        incomeYears,
        incomeCoverage,
        outstandingDebts,
        childrenCoverage,
        collegeCoverage,
        funeralCost,
        existingSavings,
        existingInsurance,
        totalNeed: Math.round(totalNeed),
        recommendedCoverage,
    };
}

// ============================================
// PREMIUM ESTIMATION
// ============================================

export interface PremiumResult {
    age: number;
    healthClass: string;
    healthClassName: string;
    coverageAmount: number;
    termLength: number;
    monthlyPremium: number;
    annualPremium: number;
    totalPremiumCost: number;
    costPer1000: number;
}

export function estimatePremium(
    age: number,
    healthClass: string,
    coverageAmount: number,
    termLength: number = 20
): PremiumResult {
    const { premiumRates, healthClasses } = INSURANCE_CONSTANTS;

    // Get rate table for health class
    const rateTable = premiumRates[healthClass as keyof typeof premiumRates] || premiumRates.standard;

    // Find closest age in table
    const ages = Object.keys(rateTable).map(Number).sort((a, b) => a - b);
    let closestAge = ages[0];
    for (const tableAge of ages) {
        if (tableAge <= age) closestAge = tableAge;
    }

    // Get base rate per $100,000
    const baseRate = rateTable[closestAge as keyof typeof rateTable] || 20;

    // Calculate monthly premium
    const units = coverageAmount / 100000;
    let monthlyPremium = baseRate * units;

    // Adjust for term length (shorter terms = slightly lower rates)
    if (termLength === 10) monthlyPremium *= 0.7;
    else if (termLength === 15) monthlyPremium *= 0.85;
    else if (termLength === 25) monthlyPremium *= 1.15;
    else if (termLength === 30) monthlyPremium *= 1.3;

    monthlyPremium = Math.round(monthlyPremium);
    const annualPremium = monthlyPremium * 12;
    const totalPremiumCost = annualPremium * termLength;
    const costPer1000 = Math.round((monthlyPremium / (coverageAmount / 1000)) * 100) / 100;

    const healthClassName = healthClasses.find(h => h.id === healthClass)?.name || "Standard";

    return {
        age,
        healthClass,
        healthClassName,
        coverageAmount,
        termLength,
        monthlyPremium,
        annualPremium,
        totalPremiumCost,
        costPer1000,
    };
}

// ============================================
// TERM VS WHOLE LIFE COMPARISON
// ============================================

export interface PolicyComparisonResult {
    coverageAmount: number;
    age: number;
    termMonthly: number;
    termTotal: number;
    wholeMonthly: number;
    wholeTotal20Years: number;
    cashValueEstimate: number;
    termSavings: number;
    recommendation: "term" | "whole" | "both";
    reasoning: string;
}

export function comparePolicies(
    coverageAmount: number,
    age: number,
    healthClass: string = "preferred"
): PolicyComparisonResult {
    // Get term premium
    const termResult = estimatePremium(age, healthClass, coverageAmount, 20);
    const termMonthly = termResult.monthlyPremium;
    const termTotal = termMonthly * 12 * 20;

    // Whole life is typically 5-15x more expensive
    const wholeMultiplier = 8;
    const wholeMonthly = termMonthly * wholeMultiplier;
    const wholeTotal20Years = wholeMonthly * 12 * 20;

    // Estimate cash value (roughly 30-40% of premiums paid after 20 years)
    const cashValueEstimate = Math.round(wholeTotal20Years * 0.35);

    const termSavings = wholeTotal20Years - termTotal;

    // Recommendation logic
    let recommendation: "term" | "whole" | "both" = "term";
    let reasoning = "";

    if (age > 50) {
        recommendation = "term";
        reasoning = "At your age, term life offers the best value. Whole life premiums would be very high relative to the benefit.";
    } else if (age < 35 && coverageAmount > 1000000) {
        recommendation = "both";
        reasoning = "Consider a combination: term for high coverage needs now, plus a smaller whole life policy for permanent coverage.";
    } else {
        recommendation = "term";
        reasoning = `Term life saves you ${formatCurrency(termSavings)} over 20 years. Invest the difference for potentially better returns.`;
    }

    return {
        coverageAmount,
        age,
        termMonthly,
        termTotal,
        wholeMonthly,
        wholeTotal20Years,
        cashValueEstimate,
        termSavings,
        recommendation,
        reasoning,
    };
}

// ============================================
// FAMILY NEEDS CALCULATOR
// ============================================

export interface FamilyNeedsResult {
    mortgageBalance: number;
    otherDebts: number;
    annualIncome: number;
    incomeReplacementYears: number;
    numberOfChildren: number;
    childAges: number[];
    collegeFund: number;
    emergencyFund: number;
    funeralCosts: number;
    totalNeed: number;
    existingCoverage: number;
    additionalNeeded: number;
    recommendedCoverage: number;
}

export function calculateFamilyNeeds(
    mortgageBalance: number,
    otherDebts: number,
    annualIncome: number,
    incomeReplacementYears: number,
    numberOfChildren: number,
    avgChildAge: number,
    existingCoverage: number
): FamilyNeedsResult {
    const { obligations } = INSURANCE_CONSTANTS;

    // Child-related costs
    const yearsToSupport = Math.max(0, 18 - avgChildAge);
    const childCosts = numberOfChildren * obligations.childCostPerYear * yearsToSupport;
    const collegeFund = numberOfChildren * obligations.collegePerChild;

    // Other needs
    const incomeReplacement = annualIncome * incomeReplacementYears;
    const emergencyFund = annualIncome * 0.5; // 6 months
    const funeralCosts = obligations.funeralCost;

    const totalNeed = mortgageBalance + otherDebts + incomeReplacement + childCosts + collegeFund + emergencyFund + funeralCosts;
    const additionalNeeded = Math.max(0, totalNeed - existingCoverage);
    const recommendedCoverage = Math.ceil(additionalNeeded / 50000) * 50000;

    return {
        mortgageBalance,
        otherDebts,
        annualIncome,
        incomeReplacementYears,
        numberOfChildren,
        childAges: [], // Simplified
        collegeFund,
        emergencyFund: Math.round(emergencyFund),
        funeralCosts,
        totalNeed: Math.round(totalNeed),
        existingCoverage,
        additionalNeeded: Math.round(additionalNeeded),
        recommendedCoverage,
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
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}
