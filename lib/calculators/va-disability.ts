// ============================================
// VA DISABILITY CALCULATOR - SITE CONFIG
// 2026 Data - Veterans Affairs Benefits
// ============================================

import { Calculator, Shield, FileText, Award } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "VA Disability Calculator",
    tagline: "Free VA Benefits Estimator",
    description: "Calculate your VA disability compensation. Free 2026 calculator for veterans disability ratings and monthly payments.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/va-disability",
};

// ============================================
// 2026 VA DISABILITY RATES
// Source: VA.gov - updated annually Dec 1
// ============================================
export const VA_RATES_2026 = {
    // Monthly rates for veteran alone (no dependents)
    veteranOnly: {
        10: 175.51,
        20: 347.21,
        30: 537.82,
        40: 774.73,
        50: 1102.68,
        60: 1395.81,
        70: 1759.91,
        80: 2044.88,
        90: 2297.53,
        100: 3825.12,
    } as Record<number, number>,

    // Additional amounts for dependents at 30%+
    dependentAdditions: {
        spouse: { 30: 62, 40: 83, 50: 104, 60: 124, 70: 145, 80: 166, 90: 186, 100: 207 },
        child: { 30: 31, 40: 41, 50: 52, 60: 62, 70: 72, 80: 83, 90: 93, 100: 103 },
        parent: { 30: 48, 40: 63, 50: 79, 60: 95, 70: 111, 80: 126, 90: 142, 100: 158 },
    },

    // Special Monthly Compensation (SMC) - simplified
    smc: {
        k: 137.62,  // Loss of use of one hand, foot, eye, etc.
        s: 468.45,  // Housebound
    },

    // Statistics
    statistics: {
        totalVeteransWithDisability: 5200000,
        avgRating: 70,
        avgMonthlyPayment: 1850,
        claimsProcessingDays: 125,
    },
} as const;

// ============================================
// VA MATH - Combined Ratings
// ============================================
export function calculateCombinedRating(ratings: number[]): number {
    if (ratings.length === 0) return 0;
    if (ratings.length === 1) return ratings[0];

    // Sort descending
    const sorted = [...ratings].sort((a, b) => b - a);

    // VA combined rating formula: start with 100, apply each rating to remaining %
    let remaining = 100;
    for (const rating of sorted) {
        remaining = remaining - (remaining * (rating / 100));
    }

    const combined = 100 - remaining;

    // Round to nearest 10%
    return Math.round(combined / 10) * 10;
}

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "va-disability/va-calculator",
        name: "VA Disability Calculator",
        shortName: "Calculator",
        description: "Calculate your VA compensation",
        longDescription: "Free 2026 VA disability calculator. Estimate your monthly payment based on rating and dependents.",
        icon: Calculator,
        category: "government",
        keywords: ["va disability calculator", "va compensation calculator", "veterans benefits calculator"],
        featured: true,
    },
    {
        id: "va-disability/rating-guide",
        name: "VA Rating Guide",
        shortName: "Guide",
        description: "Understanding VA disability ratings",
        longDescription: "Learn how VA disability ratings work, combined ratings math, and how to maximize your claim.",
        icon: FileText,
        category: "government",
        keywords: ["va rating guide", "combined ratings", "va disability explained"],
        featured: true,
    },
] as const;

// ============================================
// VA CALCULATION
// ============================================
export interface VAResult {
    combinedRating: number;
    monthlyPayment: number;
    annualPayment: number;
    dependentAdditions: number;
    totalMonthly: number;
    totalAnnual: number;
    ratings: number[];
}

export function calculateVABenefits(
    ratings: number[],
    hasSpouse: boolean = false,
    numChildren: number = 0,
    numParents: number = 0
): VAResult {
    const combinedRating = calculateCombinedRating(ratings);

    // Get base rate
    const basePayment = VA_RATES_2026.veteranOnly[combinedRating] || 0;

    // Calculate dependent additions (only for 30%+)
    let dependentAdditions = 0;
    if (combinedRating >= 30) {
        const ratingKey = combinedRating as keyof typeof VA_RATES_2026.dependentAdditions.spouse;
        if (hasSpouse && VA_RATES_2026.dependentAdditions.spouse[ratingKey]) {
            dependentAdditions += VA_RATES_2026.dependentAdditions.spouse[ratingKey];
        }
        if (numChildren > 0 && VA_RATES_2026.dependentAdditions.child[ratingKey]) {
            dependentAdditions += VA_RATES_2026.dependentAdditions.child[ratingKey] * numChildren;
        }
        if (numParents > 0 && VA_RATES_2026.dependentAdditions.parent[ratingKey]) {
            dependentAdditions += VA_RATES_2026.dependentAdditions.parent[ratingKey] * Math.min(numParents, 2);
        }
    }

    const totalMonthly = basePayment + dependentAdditions;

    return {
        combinedRating,
        monthlyPayment: Math.round(basePayment * 100) / 100,
        annualPayment: Math.round(basePayment * 12 * 100) / 100,
        dependentAdditions: Math.round(dependentAdditions * 100) / 100,
        totalMonthly: Math.round(totalMonthly * 100) / 100,
        totalAnnual: Math.round(totalMonthly * 12 * 100) / 100,
        ratings,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}
