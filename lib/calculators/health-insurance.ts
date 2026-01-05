// ============================================
// HEALTH INSURANCE CALCULATOR - SITE CONFIG
// 2026 Data - ACA, Premiums, Coverage Types
// ============================================

import { Calculator, DollarSign, FileText, Heart } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Health Insurance Calculator",
    tagline: "Free Health Insurance Cost Calculator",
    description: "Calculate health insurance costs and compare plans. Free 2026 calculator with ACA subsidies and premium estimates.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/health-insurance",
};

// ============================================
// 2026 HEALTH INSURANCE CONSTANTS
// ============================================
export const HEALTH_2026 = {
    // Average premiums (monthly)
    avgPremiums: {
        individual: 477,
        family: 1355,
        employerIndividual: 142,  // Employee contribution
        employerFamily: 509,     // Employee contribution
    },

    // Deductibles
    avgDeductibles: {
        bronze: 7500,
        silver: 5000,
        gold: 1500,
        platinum: 500,
        hdhp: 3200,  // HDHP minimum for HSA
    },

    // ACA subsidy income limits (% of FPL)
    subsidyLimits: {
        maxIncome: 400,  // 400% FPL
        enhancedSubsidy: true,  // Extended through 2025
    },

    // Federal Poverty Level 2026
    fpl: {
        individual: 15060,
        perPerson: 5380,  // Add per additional person
    },

    // Plan metal tiers
    metalTiers: [
        { name: "Bronze", actuarialValue: 60, avgPremium: 350 },
        { name: "Silver", actuarialValue: 70, avgPremium: 450 },
        { name: "Gold", actuarialValue: 80, avgPremium: 550 },
        { name: "Platinum", actuarialValue: 90, avgPremium: 700 },
    ],

    // Statistics
    statistics: {
        uninsuredRate: 8.0,
        avgAnnualCost: 8435,
        employerCoverage: 54,  // % of population
        marketplaceCoverage: 14,  // million
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "health-insurance/health-calculator",
        name: "Health Insurance Calculator",
        shortName: "Calculator",
        description: "Calculate monthly premium costs",
        longDescription: "Free 2026 calculator. Estimate health insurance costs based on age, income, and family size.",
        icon: Calculator,
        category: "insurance",
        keywords: ["health insurance calculator", "health insurance cost calculator", "aca subsidy calculator"],
        featured: true,
    },
    {
        id: "health-insurance/coverage-guide",
        name: "Coverage Guide",
        shortName: "Guide",
        description: "Compare plan types and coverage",
        longDescription: "Learn about Bronze, Silver, Gold, and Platinum plans and their coverage levels.",
        icon: FileText,
        category: "insurance",
        keywords: ["health insurance plans", "bronze vs silver health insurance", "health insurance coverage"],
        featured: true,
    },
] as const;

// ============================================
// HEALTH INSURANCE CALCULATION
// ============================================
export interface HealthResult {
    age: number;
    income: number;
    familySize: number;
    tier: string;
    basePremium: number;
    subsidyAmount: number;
    monthlyPremium: number;
    annualPremium: number;
    deductible: number;
    subsidyEligible: boolean;
}

export function calculateHealth(
    age: number,
    income: number,
    familySize: number = 1,
    tier: string = "silver"
): HealthResult {
    // Calculate FPL percentage
    const fplForFamily = HEALTH_2026.fpl.individual + (familySize - 1) * HEALTH_2026.fpl.perPerson;
    const fplPercent = (income / fplForFamily) * 100;

    // Base premium by age and tier
    const tierData = HEALTH_2026.metalTiers.find(t => t.name.toLowerCase() === tier)
        || HEALTH_2026.metalTiers[1];

    // Age adjustment factor (3:1 ratio max under ACA)
    const ageFactor = age < 21 ? 0.765 :
        age < 30 ? 0.9 :
            age < 40 ? 1.0 :
                age < 50 ? 1.2 :
                    age < 60 ? 1.5 :
                        1.8;

    const basePremium = tierData.avgPremium * ageFactor * familySize;

    // Subsidy calculation (simplified)
    let subsidyAmount = 0;
    const subsidyEligible = fplPercent <= 400 && fplPercent >= 100;

    if (subsidyEligible) {
        // Premium cap as % of income based on FPL
        let premiumCap = 0;
        if (fplPercent <= 150) premiumCap = 0.02;
        else if (fplPercent <= 200) premiumCap = 0.04;
        else if (fplPercent <= 250) premiumCap = 0.06;
        else if (fplPercent <= 300) premiumCap = 0.075;
        else premiumCap = 0.085;

        const maxMonthlyPayment = (income * premiumCap) / 12;
        subsidyAmount = Math.max(0, basePremium - maxMonthlyPayment);
    }

    const monthlyPremium = Math.round(basePremium - subsidyAmount);

    // Get deductible
    const deductible = tier === "bronze" ? HEALTH_2026.avgDeductibles.bronze :
        tier === "silver" ? HEALTH_2026.avgDeductibles.silver :
            tier === "gold" ? HEALTH_2026.avgDeductibles.gold :
                HEALTH_2026.avgDeductibles.platinum;

    return {
        age,
        income,
        familySize,
        tier: tierData.name,
        basePremium: Math.round(basePremium),
        subsidyAmount: Math.round(subsidyAmount),
        monthlyPremium,
        annualPremium: monthlyPremium * 12,
        deductible,
        subsidyEligible,
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
