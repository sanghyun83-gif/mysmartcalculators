// ============================================
// RENTERS INSURANCE CALCULATOR - SITE CONFIG
// 2026 Data - Coverage, Premiums, Liability
// ============================================

import { Calculator, DollarSign, FileText, Home } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Renters Insurance Calculator",
    tagline: "Free Renters Insurance Cost Calculator",
    description: "Calculate renters insurance costs and coverage needs. Free 2026 calculator with premium estimates for apartments and rentals.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/renters-insurance",
};

// ============================================
// 2026 RENTERS INSURANCE CONSTANTS
// ============================================
export const RENTERS_2026 = {
    // Average premiums (annual)
    avgPremiums: {
        national: 173,
        lowCost: 120,
        highCost: 300,
        perMonth: 15,
    },

    // Coverage recommendations
    coverage: {
        personalPropertyMin: 15000,
        personalPropertyAvg: 30000,
        personalPropertyMax: 100000,
        liabilityMin: 100000,
        liabilityStandard: 300000,
        medicalPayments: 5000,
    },

    // Deductible options
    deductibleOptions: [250, 500, 1000, 2000],

    // Factors affecting premium
    premiumFactors: {
        locationMultiplier: 1.0,  // varies by state
        claimsHistory: 1.2,       // with claims
        creditScore: 0.85,        // good credit discount
        bundleDiscount: 0.15,     // 15% if bundled
    },

    // Statistics
    statistics: {
        rentersWithInsurance: 41,  // % of renters
        avgClaimAmount: 3500,
        mostCommonClaim: "Theft",
        avgPolicyPrice: 173,
    },

    // Common covered items
    coveredItems: [
        "Furniture and appliances",
        "Electronics and computers",
        "Clothing and jewelry",
        "Personal belongings",
        "Liability protection",
        "Additional living expenses",
        "Medical payments to others",
        "Loss of use coverage",
    ],

    // What's NOT covered
    notCovered: [
        "Roommate's belongings",
        "Flood damage",
        "Earthquake damage",
        "Intentional damage",
        "Pest infestations",
        "Car theft (separate auto policy)",
    ],

    // Data source citation
    citation: "Data from NAIC, Insurance Information Institute (III) 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "renters-insurance/renters-calculator",
        name: "Renters Insurance Calculator",
        shortName: "Calculator",
        description: "Calculate your coverage needs and premium",
        longDescription: "Free 2026 calculator. Estimate renters insurance costs based on belongings value and coverage needs.",
        icon: Calculator,
        category: "insurance",
        keywords: ["renters insurance calculator", "renters insurance cost", "apartment insurance calculator"],
        featured: true,
    },
    {
        id: "renters-insurance/coverage-guide",
        name: "Coverage Guide",
        shortName: "Guide",
        description: "Learn what renters insurance covers",
        longDescription: "Understand personal property, liability, and additional living expense coverage.",
        icon: FileText,
        category: "insurance",
        keywords: ["renters insurance coverage", "what renters insurance covers", "renters insurance guide"],
        featured: true,
    },
] as const;

// ============================================
// RENTERS INSURANCE CALCULATION
// ============================================
export interface RentersResult {
    personalProperty: number;
    liability: number;
    deductible: number;
    monthlyPremium: number;
    annualPremium: number;
    coverageLevel: string;
    estimatedSavings: number;
}

export function calculateRenters(
    personalPropertyValue: number,
    liabilityAmount: number = 100000,
    deductible: number = 500,
    hasGoodCredit: boolean = true,
    bundlePolicy: boolean = false
): RentersResult {
    // Base premium calculation
    let basePremium = RENTERS_2026.avgPremiums.national;

    // Adjust for personal property value
    if (personalPropertyValue > 50000) {
        basePremium += (personalPropertyValue - 30000) * 0.003;
    } else if (personalPropertyValue > 30000) {
        basePremium += (personalPropertyValue - 30000) * 0.002;
    }

    // Adjust for liability
    if (liabilityAmount >= 300000) {
        basePremium += 30;
    } else if (liabilityAmount >= 200000) {
        basePremium += 15;
    }

    // Deductible discount
    const deductibleDiscount = deductible === 1000 ? 0.9 :
        deductible === 2000 ? 0.85 :
            deductible === 500 ? 1.0 :
                1.05;

    basePremium *= deductibleDiscount;

    // Credit discount
    if (hasGoodCredit) {
        basePremium *= RENTERS_2026.premiumFactors.creditScore;
    }

    // Bundle discount
    let estimatedSavings = 0;
    if (bundlePolicy) {
        estimatedSavings = basePremium * RENTERS_2026.premiumFactors.bundleDiscount;
        basePremium *= (1 - RENTERS_2026.premiumFactors.bundleDiscount);
    }

    const annualPremium = Math.round(basePremium);
    const monthlyPremium = Math.round(basePremium / 12);

    // Coverage level
    const coverageLevel = personalPropertyValue >= 50000 ? "Premium" :
        personalPropertyValue >= 30000 ? "Standard" :
            "Basic";

    return {
        personalProperty: personalPropertyValue,
        liability: liabilityAmount,
        deductible,
        monthlyPremium,
        annualPremium,
        coverageLevel,
        estimatedSavings: Math.round(estimatedSavings),
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
