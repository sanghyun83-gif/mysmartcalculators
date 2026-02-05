// ============================================
// MOTORCYCLE ACCIDENT CALCULATOR - SITE CONFIG
// 2026 Data - Motorcycle-specific settlements
// ============================================

import { Scale, Bike, Shield, Calculator, Stethoscope, AlertTriangle, HardHat } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Motorcycle Accident Calculator",
    tagline: "Free Settlement Estimator",
    description: "Calculate your motorcycle accident settlement value. Free 2026 calculator for bike crash injuries, road rash, helmet damage, and pain & suffering.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/motorcycle-accident",
};

// ============================================
// 2026 MOTORCYCLE ACCIDENT CONSTANTS
// Sources: NHTSA, Insurance Institute, Legal settlement databases
// ============================================
export const MOTORCYCLE_CONSTANTS_2026 = {
    // Pain & Suffering Multipliers (Higher than car accidents due to severity)
    multipliers: {
        minor: { min: 2, max: 4, avg: 3 },        // Road rash, bruises
        moderate: { min: 4, max: 7, avg: 5.5 },   // Fractures, surgery required
        severe: { min: 7, max: 15, avg: 10 },     // TBI, spinal injury
        catastrophic: { min: 15, max: 30, avg: 20 }, // Paralysis, amputation
    },

    // Motorcycle-Specific Injury Costs (2026)
    injuryCosts: {
        roadRash: { min: 2000, max: 25000 },
        brokenBone: { min: 10000, max: 75000 },
        headInjury: { min: 25000, max: 250000 },
        spinalInjury: { min: 75000, max: 1500000 },
        amputation: { min: 200000, max: 2000000 },
        internalInjury: { min: 50000, max: 300000 },
    },

    // Helmet Impact on Settlement
    helmetFactor: {
        wearing: 1.0,
        notWearing: 0.70, // 30% reduction in some states
    },

    // Attorney Impact
    attorneyFees: {
        preSettlement: 0.33,
        postTrial: 0.40,
    },

    // Statistics
    statistics: {
        avgSettlement: 73000,
        avgMedicalCost: 45000,
        fatalityRate: 29, // 29x higher than car occupants
        avgBikeDamage: 8500,
    },

    // Average Daily Wage
    avgDailyWage: 235,
} as const;

// ============================================
// MOTORCYCLE INJURY TYPES
// ============================================
export const MOTORCYCLE_INJURIES = {
    roadRash: {
        name: "Road Rash",
        severity: "minor",
        avgSettlement: { min: 5000, max: 25000 },
        recoveryTime: "2-6 weeks",
        description: "Skin abrasion from sliding on pavement. Severity ranges from mild to deep tissue damage.",
    },
    brokenBone: {
        name: "Broken Bone / Fracture",
        severity: "moderate",
        avgSettlement: { min: 25000, max: 150000 },
        recoveryTime: "6-16 weeks",
        description: "Leg, arm, rib, or pelvis fractures common in motorcycle crashes.",
    },
    tbi: {
        name: "Traumatic Brain Injury (TBI)",
        severity: "severe",
        avgSettlement: { min: 50000, max: 500000 },
        recoveryTime: "Months to permanent",
        description: "Concussion to severe brain damage. Even with helmet, TBI risk is significant.",
    },
    spinalCord: {
        name: "Spinal Cord Injury",
        severity: "catastrophic",
        avgSettlement: { min: 100000, max: 2000000 },
        recoveryTime: "Permanent",
        description: "Paralysis, loss of motor function. Lifetime care often required.",
    },
    amputation: {
        name: "Amputation / Limb Loss",
        severity: "catastrophic",
        avgSettlement: { min: 250000, max: 3000000 },
        recoveryTime: "Permanent",
        description: "Loss of leg, arm, or digits due to crush injuries or severe trauma.",
    },
    internalInjury: {
        name: "Internal Injuries",
        severity: "severe",
        avgSettlement: { min: 75000, max: 400000 },
        recoveryTime: "1-6 months",
        description: "Organ damage, internal bleeding from blunt force trauma.",
    },
    legInjury: {
        name: "Leg / Knee Injury",
        severity: "moderate",
        avgSettlement: { min: 20000, max: 100000 },
        recoveryTime: "2-6 months",
        description: "ACL tears, crushed legs, knee damage common in motorcycle crashes.",
    },
    shoulderInjury: {
        name: "Shoulder / Arm Injury",
        severity: "moderate",
        avgSettlement: { min: 15000, max: 80000 },
        recoveryTime: "1-4 months",
        description: "Rotator cuff tears, dislocations, collarbone fractures.",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "motorcycle-accident/motorcycle-settlement",
        name: "Motorcycle Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate your motorcycle crash settlement value",
        longDescription: "Free 2026 motorcycle accident settlement calculator. Factors in injuries, bike damage, helmet use, and pain & suffering.",
        icon: Calculator,
        category: "legal",
        keywords: ["motorcycle accident calculator", "bike crash settlement", "motorcycle injury compensation"],
        featured: true,
    },
    {
        id: "motorcycle-accident/injury-types",
        name: "Motorcycle Injury Value Guide",
        shortName: "Injury Guide",
        description: "Average settlements by motorcycle injury type",
        longDescription: "See average settlement values for road rash, broken bones, TBI, spinal injuries, and more.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["motorcycle injury settlement", "road rash settlement", "TBI motorcycle accident"],
        featured: true,
    },
    {
        id: "motorcycle-accident/bike-damage",
        name: "Motorcycle Damage Calculator",
        shortName: "Bike Damage",
        description: "Calculate your motorcycle property damage claim",
        longDescription: "Estimate repair costs, total loss value, diminished value, and gear damage claims.",
        icon: Bike,
        category: "insurance",
        keywords: ["motorcycle damage calculator", "bike total loss", "motorcycle repair estimate"],
        featured: true,
    },
    {
        id: "motorcycle-accident/insurance-claim",
        name: "Insurance Claim Calculator",
        shortName: "Insurance Claim",
        description: "See how much insurance will pay",
        longDescription: "Calculate your insurance payout based on liability limits, UM/UIM coverage, and deductibles.",
        icon: Shield,
        category: "insurance",
        keywords: ["motorcycle insurance claim", "bike accident insurance", "UM UIM coverage"],
        featured: false,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION FUNCTION
// ============================================
export interface SettlementResult {
    bikeDamage: number;
    medicalExpenses: number;
    lostWages: number;
    painSufferingMultiplier: number;
    painSufferingAmount: number;
    totalBeforeFees: number;
    faultReduction: number;
    attorneyFees: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export function calculateMotorcycleSettlement(
    bikeDamage: number,
    medicalExpenses: number,
    lostWages: number,
    faultPercent: number,
    severity: 'minor' | 'moderate' | 'severe' | 'catastrophic',
    hasAttorney: boolean = true,
    woreHelmet: boolean = true
): SettlementResult {
    const multipliers = MOTORCYCLE_CONSTANTS_2026.multipliers[severity];
    const helmetFactor = woreHelmet ? 1.0 : MOTORCYCLE_CONSTANTS_2026.helmetFactor.notWearing;

    // Economic damages
    const economicDamages = bikeDamage + medicalExpenses + lostWages;

    // Pain & suffering (higher for motorcycle due to severity)
    const painSufferingMultiplier = multipliers.avg;
    const painSufferingAmount = Math.round(medicalExpenses * painSufferingMultiplier);

    // Total before adjustments
    const subtotal = economicDamages + painSufferingAmount;

    // Apply helmet factor
    const afterHelmet = Math.round(subtotal * helmetFactor);

    // Comparative fault reduction
    const faultReduction = Math.round(afterHelmet * (faultPercent / 100));
    const afterFault = afterHelmet - faultReduction;

    // Attorney fees
    const attorneyFees = hasAttorney
        ? Math.round(afterFault * MOTORCYCLE_CONSTANTS_2026.attorneyFees.preSettlement)
        : 0;

    const netSettlement = afterFault - attorneyFees;

    // Calculate range
    const minTotal = (economicDamages + (medicalExpenses * multipliers.min)) * helmetFactor * (1 - faultPercent / 100);
    const maxTotal = (economicDamages + (medicalExpenses * multipliers.max)) * helmetFactor * (1 - faultPercent / 100);

    return {
        bikeDamage,
        medicalExpenses,
        lostWages,
        painSufferingMultiplier,
        painSufferingAmount,
        totalBeforeFees: afterFault,
        faultReduction,
        attorneyFees,
        netSettlement,
        settlementRange: {
            min: Math.round(hasAttorney ? minTotal * 0.67 : minTotal),
            max: Math.round(hasAttorney ? maxTotal * 0.67 : maxTotal),
        },
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

export function getSeverityLabel(severity: string): string {
    const labels: Record<string, string> = {
        minor: "Minor Injury",
        moderate: "Moderate Injury",
        severe: "Severe Injury",
        catastrophic: "Catastrophic Injury",
    };
    return labels[severity] || severity;
}

export function getSeverityColor(severity: string): string {
    const colors: Record<string, string> = {
        minor: "text-green-400",
        moderate: "text-yellow-400",
        severe: "text-orange-400",
        catastrophic: "text-red-400",
    };
    return colors[severity] || "text-slate-400";
}
