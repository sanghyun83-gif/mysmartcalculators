// ============================================
// BOAT INSURANCE CALCULATOR - SITE CONFIG
// 2026 Data - Watercraft, Hull, Liability Coverage
// ============================================

import { Calculator, DollarSign, FileText, Anchor } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Boat Insurance Calculator",
    tagline: "Free Boat Insurance Cost Calculator",
    description: "Calculate boat insurance costs and coverage needs. Free 2026 calculator for boats, yachts, and personal watercraft.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/boat-insurance",
};

// ============================================
// 2026 BOAT INSURANCE CONSTANTS
// ============================================
export const BOAT_2026 = {
    // Average premiums (annual)
    avgPremiums: {
        small: 300,       // < 26 ft
        medium: 500,      // 26-40 ft
        large: 1200,      // 40+ ft
        pwc: 200,         // Personal watercraft (jet ski)
    },

    // Boat value tiers
    valueTiers: [
        { maxValue: 25000, rate: 0.015 },
        { maxValue: 75000, rate: 0.012 },
        { maxValue: 150000, rate: 0.010 },
        { maxValue: 500000, rate: 0.008 },
    ],

    // Coverage types
    coverageTypes: {
        agreedValue: "Pays full insured value",
        actualCash: "Pays depreciated value",
        liability: 300000,  // Recommended minimum
    },

    // Factors
    factors: {
        newBoat: 0.9,       // 10% discount
        boatSafetyCourse: 0.85,  // 15% discount
        multiPolicy: 0.90,  // 10% discount
        pristineRecord: 0.85,  // 15% discount
        highRiskArea: 1.25,  // 25% increase
    },

    // Statistics
    statistics: {
        avgAnnualPremium: 450,
        avgBoatValue: 35000,
        registeredBoats: 12,  // million
        avgClaimAmount: 8500,
    },

    // What's covered
    coveredItems: [
        "Hull and machinery damage",
        "Liability for injuries",
        "Property damage to others",
        "Fuel spill liability",
        "Towing and assistance",
        "Theft and vandalism",
        "Storm and weather damage",
        "Trailer coverage",
    ],

    // Data source citation
    citation: "Data from NAIC, BoatUS, Insurance Information Institute (III) 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "boat-insurance/boat-calculator",
        name: "Boat Insurance Calculator",
        shortName: "Calculator",
        description: "Calculate boat insurance premium",
        longDescription: "Free 2026 calculator. Estimate boat insurance costs based on boat value and coverage needs.",
        icon: Calculator,
        category: "insurance",
        keywords: ["boat insurance calculator", "boat insurance cost", "watercraft insurance calculator"],
        featured: true,
    },
    {
        id: "boat-insurance/coverage-guide",
        name: "Coverage Guide",
        shortName: "Guide",
        description: "Learn about boat insurance coverage",
        longDescription: "Understand hull, liability, and comprehensive coverage for your watercraft.",
        icon: FileText,
        category: "insurance",
        keywords: ["boat insurance coverage", "what boat insurance covers", "watercraft insurance guide"],
        featured: true,
    },
] as const;

// ============================================
// BOAT INSURANCE CALCULATION
// ============================================
export interface BoatResult {
    boatValue: number;
    boatType: string;
    liabilityAmount: number;
    annualPremium: number;
    monthlyPremium: number;
    coverageType: string;
    discountsApplied: number;
}

export function calculateBoat(
    boatValue: number,
    boatType: string = "powerboat",
    liabilityAmount: number = 300000,
    hasNewBoat: boolean = false,
    hasSafetyCourse: boolean = false,
    hasMultiPolicy: boolean = false
): BoatResult {
    // Base rate from value tier
    let rate = 0.015;
    for (const tier of BOAT_2026.valueTiers) {
        if (boatValue <= tier.maxValue) {
            rate = tier.rate;
            break;
        }
    }

    // Base premium from boat value
    let basePremium = boatValue * rate;

    // Minimum premium
    if (boatType === "pwc") {
        basePremium = Math.max(basePremium, BOAT_2026.avgPremiums.pwc);
    } else if (boatValue < 15000) {
        basePremium = Math.max(basePremium, BOAT_2026.avgPremiums.small);
    }

    // Add liability (roughly $50-100 per $100K)
    basePremium += (liabilityAmount / 100000) * 75;

    // Apply discounts
    let discountMultiplier = 1;
    if (hasNewBoat) discountMultiplier *= BOAT_2026.factors.newBoat;
    if (hasSafetyCourse) discountMultiplier *= BOAT_2026.factors.boatSafetyCourse;
    if (hasMultiPolicy) discountMultiplier *= BOAT_2026.factors.multiPolicy;

    const discountsApplied = basePremium * (1 - discountMultiplier);
    const annualPremium = Math.round(basePremium * discountMultiplier);

    return {
        boatValue,
        boatType,
        liabilityAmount,
        annualPremium,
        monthlyPremium: Math.round(annualPremium / 12),
        coverageType: "Agreed Value",
        discountsApplied: Math.round(discountsApplied),
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
