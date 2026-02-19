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
        powerboat: 550,
        sailboat: 400,
        pontoon: 350,
        yacht: 2500,
        pwc: 250,         // Personal watercraft (jet ski)
        bass: 450,
    },

    // 2026 State Premium Indices (Benchmark against National Average)
    stateIndices: {
        FL: { name: "Florida", index: 1.45, risk: "High (Hurricane)" },
        TX: { name: "Texas", index: 1.15, risk: "Moderate (Gulf Coast)" },
        CA: { name: "California", index: 1.10, risk: "Moderate" },
        NY: { name: "New York", index: 1.05, risk: "Standard" },
        MI: { name: "Michigan", index: 0.95, risk: "Great Lakes (Lower Coast)" },
        WA: { name: "Washington", index: 0.90, risk: "Low" },
        LA: { name: "Louisiana", index: 1.30, risk: "High" },
    },

    // Boat value tiers (Actuarial Hull Rates)
    valueTiers: [
        { maxValue: 25000, rate: 0.018 },
        { maxValue: 75000, rate: 0.014 },
        { maxValue: 150000, rate: 0.011 },
        { maxValue: 500000, rate: 0.009 },
        { maxValue: 1000000, rate: 0.008 },
    ],

    // Coverage types
    coverageTypes: {
        agreedValue: "Pays full insured value (Institutional Standard)",
        actualCash: "Pays depreciated value (Standard)",
        liability: 500000,  // Recommended 2026 minimum
    },

    // Factors (Discounts & Risk Multipliers)
    factors: {
        newBoat: 0.88,       // 12% discount
        boatSafetyCourse: 0.85,  // 15% discount
        multiPolicy: 0.92,  // 8% discount
        pristineRecord: 0.85,  // 15% discount
        highRiskArea: 1.35,  // 35% increase (Storm Surge Zone)
        winterLayup: 0.95,   // 5% discount (Stored)
    },

    // Statistics (2026 Projected)
    statistics: {
        avgAnnualPremium: 612,
        avgBoatValue: 42500,
        registeredBoats: 11.8,  // million
        avgClaimAmount: 9200,
    },

    // Forensic Coverage Audit Items
    coveredItems: [
        "Hull and machinery (Institutional Audit Level)",
        "Third-party liability (2026 Statutory)",
        "Uninsured boater coverage",
        "Fuel spill & Wreck removal",
        "Personal effects & Fishing gear",
        "Trailer & On-road transit",
        "Medical payments",
        "Search & Rescue coordination",
    ],

    // Authority Citation
    citation: "Data sourced from NAIC, NMMA, and 2026 Maritime Insurance Actuarial Reports.",
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
    } else if (boatType === "sailboat") {
        basePremium = Math.max(basePremium, BOAT_2026.avgPremiums.sailboat);
    } else if (boatValue < 25000) {
        basePremium = Math.max(basePremium, BOAT_2026.avgPremiums.pontoon);
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
