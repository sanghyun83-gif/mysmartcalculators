// ============================================
// UMBRELLA INSURANCE CALCULATOR - SITE CONFIG
// 2026 Data - Excess Liability, Coverage Limits
// ============================================

import { Calculator, DollarSign, FileText, Shield } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Umbrella Insurance Calculator",
    tagline: "Free Umbrella Insurance Cost Calculator",
    description: "Calculate umbrella insurance costs and coverage needs. Free 2026 calculator for excess liability protection.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/umbrella-insurance",
};

// ============================================
// 2026 UMBRELLA INSURANCE CONSTANTS
// ============================================
export const UMBRELLA_2026 = {
    // Average premiums (annual)
    avgPremiums: {
        oneMillion: 200,
        twoMillion: 300,
        threeMillion: 375,
        fiveMillion: 450,
    },

    // Coverage increments
    coverageOptions: [1000000, 2000000, 3000000, 5000000, 10000000],

    // Requirements (underlying coverage)
    underlyingRequirements: {
        autoLiability: 250000,   // per person
        homeownersLiability: 300000,
    },

    // Risk factors
    riskFactors: {
        pool: 1.15,
        trampoline: 1.2,
        teenDriver: 1.3,
        multipleProperties: 1.25,
        dog: 1.1,
    },

    // Statistics
    statistics: {
        avgPolicyLimit: 1500000,
        avgAnnualCost: 250,
        claimsExceeding: 1,  // % of claims exceed underlying
        avgLawsuitCost: 75000,
    },

    // What's covered
    coveredEvents: [
        "Auto accident liability beyond limits",
        "Homeowners liability claims",
        "Libel and slander lawsuits",
        "Landlord liability (rental properties)",
        "Dog bite claims",
        "Personal injury lawsuits",
        "False arrest or imprisonment claims",
        "Worldwide coverage",
    ],

    // Data source citation
    citation: "Data from NAIC, Insurance Information Institute (III) 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "umbrella-insurance/umbrella-calculator",
        name: "Umbrella Insurance Calculator",
        shortName: "Calculator",
        description: "Calculate umbrella coverage needs and cost",
        longDescription: "Free 2026 calculator. Estimate umbrella insurance costs based on assets and risk factors.",
        icon: Calculator,
        category: "insurance",
        keywords: ["umbrella insurance calculator", "umbrella insurance cost", "excess liability calculator"],
        featured: true,
    },
    {
        id: "umbrella-insurance/coverage-guide",
        name: "Coverage Guide",
        shortName: "Guide",
        description: "Learn about umbrella insurance coverage",
        longDescription: "Understand what umbrella insurance covers and why you need it.",
        icon: FileText,
        category: "insurance",
        keywords: ["umbrella insurance coverage", "what umbrella insurance covers", "umbrella policy guide"],
        featured: true,
    },
] as const;

// ============================================
// UMBRELLA INSURANCE CALCULATION
// ============================================
export interface UmbrellaResult {
    coverage: number;
    netWorth: number;
    riskLevel: string;
    annualPremium: number;
    monthlyPremium: number;
    pricePerMillion: number;
    recommended: boolean;
}

export function calculateUmbrella(
    netWorth: number,
    coverageAmount: number = 1000000,
    hasPool: boolean = false,
    hasTeenDriver: boolean = false,
    hasRentalProperty: boolean = false
): UmbrellaResult {
    // Base premium from coverage tier
    let basePremium = coverageAmount <= 1000000 ? UMBRELLA_2026.avgPremiums.oneMillion :
        coverageAmount <= 2000000 ? UMBRELLA_2026.avgPremiums.twoMillion :
            coverageAmount <= 3000000 ? UMBRELLA_2026.avgPremiums.threeMillion :
                UMBRELLA_2026.avgPremiums.fiveMillion;

    // Add for coverage above $5M
    if (coverageAmount > 5000000) {
        basePremium += ((coverageAmount - 5000000) / 1000000) * 75;
    }

    // Apply risk factors
    if (hasPool) basePremium *= UMBRELLA_2026.riskFactors.pool;
    if (hasTeenDriver) basePremium *= UMBRELLA_2026.riskFactors.teenDriver;
    if (hasRentalProperty) basePremium *= UMBRELLA_2026.riskFactors.multipleProperties;

    // Risk level based on assets
    const riskLevel = netWorth >= 2000000 ? "High" :
        netWorth >= 1000000 ? "Medium-High" :
            netWorth >= 500000 ? "Medium" :
                "Standard";

    // Recommended coverage check
    const recommendedCoverage = netWorth > 0 ? Math.min(netWorth, 5000000) : 1000000;
    const recommended = coverageAmount >= recommendedCoverage * 0.8;

    const annualPremium = Math.round(basePremium);

    return {
        coverage: coverageAmount,
        netWorth,
        riskLevel,
        annualPremium,
        monthlyPremium: Math.round(basePremium / 12),
        pricePerMillion: Math.round(basePremium / (coverageAmount / 1000000)),
        recommended,
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

export function formatMillions(amount: number): string {
    return `$${amount / 1000000}M`;
}
