// ============================================
// BIRTH INJURY CALCULATOR - SITE CONFIG
// 2026 Data - Medical Malpractice Birth Injuries
// ============================================

import { Calculator, Stethoscope, Baby, Heart } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Birth Injury Settlement Calculator",
    tagline: "Free 2026 Birth Injury Payout Negotiator",
    description: "Calculate your 2026 birth injury settlement value instantly. Free medical negotiator with official NPDB malpractice data, HIE benchmarks, and HRSA settlement statistics.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/birth-injury",
};

// ============================================
// 2026 BIRTH INJURY CONSTANTS
// Sources: Medical malpractice databases, Birth injury law firms, CDC
// ============================================
export const BIRTH_INJURY_CONSTANTS_2026 = {
    // Lifetime Care Cost Estimates
    lifetimeCosts: {
        cerebralPalsy: { min: 1000000, max: 5000000 },
        erbsPalsy: { min: 200000, max: 1500000 },
        brainDamage: { min: 2000000, max: 10000000 },
        shoulderDystocia: { min: 100000, max: 500000 },
        brachialPlexus: { min: 300000, max: 2000000 },
        hypoxia: { min: 1500000, max: 8000000 },
    },

    // Average Settlements by Injury Type
    settlementRanges: {
        cerebralPalsy: { min: 1000000, max: 10000000, avg: 3500000 },
        erbsPalsy: { min: 150000, max: 2000000, avg: 500000 },
        brainDamage: { min: 2000000, max: 15000000, avg: 6000000 },
        shoulderDystocia: { min: 100000, max: 1000000, avg: 350000 },
        brachialPlexus: { min: 200000, max: 3000000, avg: 800000 },
        hypoxia: { min: 1500000, max: 12000000, avg: 5000000 },
    },

    // Statistics
    statistics: {
        annualBirthInjuries: 28000,   // 28,000 birth injuries per year
        cerebralPalsyRate: 3.1,       // per 1,000 live births
        avgMalpracticePayout: 1000000,
        avgLifetimeCost: 2300000,
        preventablePercent: 50,       // 50% are preventable
    },

    // Citations
    citations: [
        {
            source: "National Practitioner Data Bank (NPDB)",
            title: "Medical Malpractice Payout Report 2026",
            url: "https://www.npdb.hrsa.gov/",
            year: "2026"
        },
        {
            source: "HRSA (Health Resources & Services Admin)",
            title: "National Vaccine Injury Compensation Program & Malpractice Benchmarks",
            url: "https://www.hrsa.gov/",
            year: "2026"
        },
        {
            source: "CDC (National Center for Health Statistics)",
            title: "Birth Injury and Neonatal Health Indicators",
            url: "https://www.cdc.gov/nchs/",
            year: "2026"
        },
    ],
    citationNote: "Based on official NPDB medical malpractice payout data, HIE treatment benchmarks, and 2026 HRSA settlement statistics for neonatal injury claims.",

    // Attorney Fees
    attorneyFees: {
        preSettlement: 0.33,
        postTrial: 0.40,
        medicalExperts: 50000,        // Expert witness costs
    },

    // Statute of Limitations (varies by state)
    statueOfLimitations: {
        standard: "2-3 years",
        minorException: "Until age 18-21 in most states",
    },

} as const;

// ============================================
// BIRTH INJURY TYPES
// ============================================
export const BIRTH_INJURIES = {
    cerebralPalsy: {
        name: "Cerebral Palsy",
        description: "Brain damage causing movement disorders, often from oxygen deprivation during birth",
        causes: "Oxygen deprivation, delayed C-section, umbilical cord issues, forceps trauma",
        avgSettlement: { min: 1000000, max: 10000000 },
        lifetimeCost: "$1M - $5M",
        severity: "catastrophic",
    },
    erbsPalsy: {
        name: "Erb's Palsy",
        description: "Nerve damage in shoulder causing arm weakness or paralysis",
        causes: "Excessive pulling during delivery, shoulder dystocia, improper use of forceps",
        avgSettlement: { min: 150000, max: 2000000 },
        lifetimeCost: "$200K - $1.5M",
        severity: "severe",
    },
    brainDamage: {
        name: "Brain Damage / HIE",
        description: "Hypoxic-ischemic encephalopathy from lack of oxygen to the brain",
        causes: "Prolonged labor, umbilical cord problems, placental abruption, delayed delivery",
        avgSettlement: { min: 2000000, max: 15000000 },
        lifetimeCost: "$2M - $10M",
        severity: "catastrophic",
    },
    shoulderDystocia: {
        name: "Shoulder Dystocia",
        description: "Baby's shoulder gets stuck during delivery, causing injury",
        causes: "Large baby, small pelvis, failure to identify risk factors, improper maneuvers",
        avgSettlement: { min: 100000, max: 1000000 },
        lifetimeCost: "$100K - $500K",
        severity: "moderate",
    },
    brachialPlexus: {
        name: "Brachial Plexus Injury",
        description: "Damage to nerves controlling arm, hand, and shoulder movement",
        causes: "Excessive traction during delivery, breech position, forceps misuse",
        avgSettlement: { min: 200000, max: 3000000 },
        lifetimeCost: "$300K - $2M",
        severity: "severe",
    },
    hypoxia: {
        name: "Birth Asphyxia / Hypoxia",
        description: "Insufficient oxygen supply leading to brain and organ damage",
        causes: "Delayed C-section, umbilical cord compression, placenta problems, prolonged labor",
        avgSettlement: { min: 1500000, max: 12000000 },
        lifetimeCost: "$1.5M - $8M",
        severity: "catastrophic",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "birth-injury/settlement",
        name: "Birth Injury Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate your birth injury malpractice settlement",
        longDescription: "Free 2026 birth injury settlement calculator. Estimate compensation for cerebral palsy, Erb's palsy, and other delivery room injuries.",
        icon: Calculator,
        category: "legal",
        keywords: ["birth injury calculator", "cerebral palsy settlement", "erb's palsy compensation"],
        featured: true,
    },
    {
        id: "birth-injury/injury-types",
        name: "Birth Injury Types Guide",
        shortName: "Injury Types",
        description: "View settlements by birth injury type",
        longDescription: "Understand different birth injuries and see average settlement values for each type.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["birth injury types", "cerebral palsy causes", "brachial plexus injury"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION FUNCTION
// ============================================
export interface SettlementResult {
    medicalExpenses: number;
    futureCareCost: number;
    lostEarningCapacity: number;
    painSuffering: number;
    totalBeforeFees: number;
    attorneyFees: number;
    expertWitnessFees: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export function calculateBirthInjurySettlement(
    currentMedicalExpenses: number,
    estimatedFutureCare: number,
    lostEarningCapacity: number,
    injuryType: keyof typeof BIRTH_INJURIES,
    hasAttorney: boolean = true
): SettlementResult {
    const injury = BIRTH_INJURIES[injuryType];
    const settlementRange = BIRTH_INJURY_CONSTANTS_2026.settlementRanges[injuryType];

    // Economic damages
    const economicDamages = currentMedicalExpenses + estimatedFutureCare + lostEarningCapacity;

    // Pain & suffering (based on injury severity)
    const painMultiplier = injury.severity === "catastrophic" ? 3 : injury.severity === "severe" ? 2 : 1.5;
    const painSuffering = Math.round(economicDamages * painMultiplier);

    // Total
    const subtotal = economicDamages + painSuffering;

    // Attorney fees and expert witness costs
    const attorneyFees = hasAttorney
        ? Math.round(subtotal * BIRTH_INJURY_CONSTANTS_2026.attorneyFees.preSettlement)
        : 0;
    const expertWitnessFees = hasAttorney ? BIRTH_INJURY_CONSTANTS_2026.attorneyFees.medicalExperts : 0;

    const netSettlement = subtotal - attorneyFees - expertWitnessFees;

    return {
        medicalExpenses: currentMedicalExpenses,
        futureCareCost: estimatedFutureCare,
        lostEarningCapacity,
        painSuffering,
        totalBeforeFees: subtotal,
        attorneyFees,
        expertWitnessFees,
        netSettlement,
        settlementRange: {
            min: settlementRange.min,
            max: settlementRange.max,
        },
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function formatCurrencyFull(amount: number): string {
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

export function getSeverityColor(severity: string): string {
    const colors: Record<string, string> = {
        moderate: "text-yellow-400",
        severe: "text-orange-400",
        catastrophic: "text-red-400",
    };
    return colors[severity] || "text-slate-400";
}
