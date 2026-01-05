// ============================================
// TBI SETTLEMENT CALCULATOR - SITE CONFIG
// 2026 Data - Based on CDC TBI Center, NIH, BIAA
// ============================================

import { Calculator, FileText, Brain, AlertTriangle } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "TBI Settlement Calculator",
    tagline: "Free Traumatic Brain Injury Calculator",
    description: "Calculate traumatic brain injury settlement value instantly. Free 2026 calculator with severity levels and lifetime care costs based on CDC and NIH data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/tbi",
};

// ============================================
// 2026 TBI CONSTANTS
// ============================================
export const TBI_2026 = {
    // Injury severity levels and average settlements
    severityLevels: [
        {
            level: "Mild TBI / Concussion",
            avgSettlement: 150000,
            minSettlement: 50000,
            maxSettlement: 500000,
            lifetimeCost: 85000,
            gcsScore: "13-15",
            description: "Brief loss of consciousness, headaches, confusion"
        },
        {
            level: "Moderate TBI",
            avgSettlement: 500000,
            minSettlement: 200000,
            maxSettlement: 1500000,
            lifetimeCost: 400000,
            gcsScore: "9-12",
            description: "Extended unconsciousness, cognitive difficulties"
        },
        {
            level: "Severe TBI",
            avgSettlement: 1500000,
            minSettlement: 500000,
            maxSettlement: 5000000,
            lifetimeCost: 1500000,
            gcsScore: "3-8",
            description: "Coma, significant brain damage, long-term care needed"
        },
        {
            level: "Penetrating TBI",
            avgSettlement: 2500000,
            minSettlement: 1000000,
            maxSettlement: 10000000,
            lifetimeCost: 3000000,
            gcsScore: "Varies",
            description: "Object penetrates skull, high mortality/disability"
        },
        {
            level: "Diffuse Axonal Injury",
            avgSettlement: 2000000,
            minSettlement: 750000,
            maxSettlement: 8000000,
            lifetimeCost: 2500000,
            gcsScore: "Varies",
            description: "Widespread brain damage from rotational forces"
        },
    ],

    // Damage multipliers
    multipliers: {
        negligence: 1.5,
        grossNegligence: 2.5,
        permanentDisability: 2.0,
        youngVictim: 1.4,
        highEarner: 1.3,
    },

    // Symptoms/Effects categories
    symptoms: [
        "Cognitive impairment",
        "Memory problems",
        "Personality changes",
        "Motor function issues",
        "Speech difficulties",
        "Chronic headaches",
        "Depression/Anxiety",
        "Sleep disorders",
    ],

    // Statistics
    statistics: {
        annualCases: 2800000,
        annualDeaths: 64000,
        fallsPercent: 48,
        vehiclePercent: 20,
        assaultPercent: 12,
        sportsPercent: 10,
        avgAge: 35,
        malePercent: 69,
    },

    // Citation
    citation: "Based on CDC Traumatic Brain Injury Center, NIH, and Brain Injury Association of America (BIAA) 2026 data",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "tbi/calculator",
        name: "TBI Settlement Calculator",
        shortName: "Calculator",
        description: "Calculate traumatic brain injury settlement",
        longDescription: "Free TBI calculator. Estimate your settlement based on injury severity and lifetime care costs.",
        icon: Calculator,
        category: "legal",
        keywords: ["tbi settlement calculator", "brain injury calculator", "head injury settlement"],
        featured: true,
    },
    {
        id: "tbi/guide",
        name: "TBI Guide",
        shortName: "Guide",
        description: "Understanding traumatic brain injuries",
        longDescription: "Learn about TBI severity levels, GCS scores, symptoms, and the legal process.",
        icon: FileText,
        category: "legal",
        keywords: ["tbi guide", "brain injury guide", "head injury information"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION
// ============================================
export interface TBIResult {
    severityLevel: string;
    gcsScore: string;
    baseSettlement: number;
    medicalCosts: number;
    lifetimeCare: number;
    lostWages: number;
    painSuffering: number;
    totalLow: number;
    totalMid: number;
    totalHigh: number;
}

export function calculateTBISettlement(
    severityIndex: number,
    age: number,
    annualIncome: number,
    medicalBills: number,
    hasPermanentDisability: boolean = false
): TBIResult {
    const severity = TBI_2026.severityLevels[severityIndex];

    // Calculate remaining work years
    const remainingYears = Math.max(0, 65 - age);

    // Base medical costs
    const medicalCosts = medicalBills * 3; // Future medical/rehab estimated

    // Lifetime care costs
    const lifetimeCare = severity.lifetimeCost;

    // Lost wages calculation
    const lostWages = annualIncome * remainingYears * (severityIndex >= 2 ? 0.9 : 0.5);

    // Pain and suffering (multiplier based on severity)
    const severityMultiplier = 2 + severityIndex * 1.5;
    const painSuffering = medicalBills * severityMultiplier;

    // Apply permanent disability multiplier if applicable
    const disabilityMultiplier = hasPermanentDisability ? TBI_2026.multipliers.permanentDisability : 1.0;

    // Calculate totals
    const baseTotal = medicalCosts + lifetimeCare + lostWages + painSuffering;
    const totalMid = baseTotal * disabilityMultiplier;
    const totalLow = totalMid * 0.6;
    const totalHigh = totalMid * 1.6;

    return {
        severityLevel: severity.level,
        gcsScore: severity.gcsScore,
        baseSettlement: severity.avgSettlement,
        medicalCosts: Math.round(medicalCosts),
        lifetimeCare: Math.round(lifetimeCare),
        lostWages: Math.round(lostWages),
        painSuffering: Math.round(painSuffering),
        totalLow: Math.round(totalLow),
        totalMid: Math.round(totalMid),
        totalHigh: Math.round(totalHigh),
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
