// ============================================
// SPINAL CORD INJURY CALCULATOR - SITE CONFIG
// 2026 Data - Based on NSCISC & CDC statistics
// ============================================

import { Calculator, FileText, Activity, AlertTriangle } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Spinal Cord Injury Calculator",
    tagline: "Free 2026 SCI Payout Negotiator",
    description: "Calculate your 2026 spinal cord injury settlement value instantly. Free SCI negotiator with official NSCISC statistical data, ASIA impairment scale benchmarks, and lifetime care cost projections.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/spinal-cord",
};

// ============================================
// 2026 SCI CONSTANTS
// ============================================
export const SCI_2026 = {
    // Injury severity levels and average settlements
    severityLevels: [
        {
            level: "Incomplete Injury - Cervical",
            avgSettlement: 1500000,
            minSettlement: 750000,
            maxSettlement: 3000000,
            lifetimeCost: 2500000,
            description: "Partial function below injury level"
        },
        {
            level: "Complete Quadriplegia (C1-C4)",
            avgSettlement: 5000000,
            minSettlement: 2500000,
            maxSettlement: 15000000,
            lifetimeCost: 5100000,
            description: "Highest level, requires 24/7 care"
        },
        {
            level: "Complete Quadriplegia (C5-C8)",
            avgSettlement: 3500000,
            minSettlement: 1500000,
            maxSettlement: 10000000,
            lifetimeCost: 3700000,
            description: "Some arm function preserved"
        },
        {
            level: "Complete Paraplegia",
            avgSettlement: 1500000,
            minSettlement: 500000,
            maxSettlement: 5000000,
            lifetimeCost: 1800000,
            description: "Lower body paralysis"
        },
        {
            level: "Incomplete Paraplegia",
            avgSettlement: 800000,
            minSettlement: 250000,
            maxSettlement: 2500000,
            lifetimeCost: 1100000,
            description: "Partial lower body function"
        },
    ],

    // Damage multipliers
    multipliers: {
        negligence: 1.5,
        grossNegligence: 2.5,
        punitiveEligible: 3.0,
        youngVictim: 1.4,
        highEarner: 1.3,
    },

    // Cost breakdown categories
    costCategories: {
        medicalFirstYear: 0.25,
        medicalAnnual: 0.10,
        homeModification: 50000,
        equipment: 75000,
        lostWagesPreInjury: 0.15,
        futureEarningsLoss: 0.20,
    },

    // Statistics
    statistics: {
        annualNewCases: 17900,
        vehicleAccidentPercent: 38,
        fallsPercent: 30,
        violencePercent: 13,
        sportsPercent: 8,
        avgAge: 43,
        malePercent: 78,
    },

    // Citations
    citations: [
        {
            source: "National Spinal Cord Injury Statistical Center (NSCISC)",
            title: "Spinal Cord Injury Facts and Figures at a Glance (2026)",
            url: "https://www.nscisc.uab.edu/",
            year: "2026"
        },
        {
            source: "American Spinal Injury Association (ASIA)",
            title: "International Standards for Neurological Classification of Spinal Cord Injury (ISNCSCI)",
            url: "https://asia-spinalinjury.org/",
            year: "2026"
        },
        {
            source: "United Spinal Association",
            title: "Resource Center for SCI/D Payouts and Care Costs",
            url: "https://unitedspinal.org/",
            year: "2026"
        },
    ],
    citationNote: "Based on official NSCISC longitudinal data, ASIA impairment scale ISNCSCI standards, and 2026 healthcare cost indices for catastrophic injury management.",
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "spinal-cord/calculator",
        name: "SCI Settlement Calculator",
        shortName: "Calculator",
        description: "Calculate spinal cord injury settlement",
        longDescription: "Free spinal cord injury calculator. Estimate your settlement based on injury severity and lifetime care costs.",
        icon: Calculator,
        category: "legal",
        keywords: ["spinal cord injury calculator", "SCI settlement calculator", "paralysis settlement"],
        featured: true,
    },
    {
        id: "spinal-cord/recovery-guide",
        name: "SCI Recovery Guide",
        shortName: "Guide",
        description: "Understanding spinal cord injuries",
        longDescription: "Learn about spinal cord injury levels, treatment costs, and the legal process.",
        icon: FileText,
        category: "legal",
        keywords: ["spinal cord injury guide", "paralysis recovery", "SCI treatment"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION
// ============================================
export interface SCIResult {
    severityLevel: string;
    baseSettlement: number;
    medicalCosts: number;
    lifetimeCare: number;
    lostWages: number;
    painSuffering: number;
    totalLow: number;
    totalMid: number;
    totalHigh: number;
}

export function calculateSCISettlement(
    severityIndex: number,
    age: number,
    annualIncome: number,
    medicalBills: number,
    isGrossNegligence: boolean = false
): SCIResult {
    const severity = SCI_2026.severityLevels[severityIndex];

    // Calculate remaining work years
    const remainingYears = Math.max(0, 65 - age);

    // Base medical costs
    const medicalCosts = medicalBills * 2.5; // Future medical estimated

    // Lifetime care costs
    const lifetimeCare = severity.lifetimeCost;

    // Lost wages calculation
    const lostWages = annualIncome * remainingYears * 0.8;

    // Pain and suffering (multiplier based on severity)
    const severityMultiplier = 3 + severityIndex * 0.5;
    const painSuffering = medicalBills * severityMultiplier;

    // Apply gross negligence if applicable
    const negligenceMultiplier = isGrossNegligence ? SCI_2026.multipliers.grossNegligence : 1.0;

    // Calculate totals
    const baseTotal = medicalCosts + lifetimeCare + lostWages + painSuffering;
    const totalMid = baseTotal * negligenceMultiplier;
    const totalLow = totalMid * 0.6;
    const totalHigh = totalMid * 1.5;

    return {
        severityLevel: severity.level,
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
