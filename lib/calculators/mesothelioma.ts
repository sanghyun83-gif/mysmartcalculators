// ============================================
// MESOTHELIOMA-CALC SITE CONFIGURATION
// Mesothelioma & Asbestos Settlement Calculator
// 2026 data - Updated with latest laws
// ============================================

import { Scale, FileText, Shield, Calculator, Stethoscope, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Mesothelioma Settlement Calculator",
    tagline: "Free Asbestos Compensation Estimator",
    description: "Calculate your mesothelioma settlement value. Free 2026 calculator for asbestos lawsuits, trust funds, VA benefits, and workers' comp. Average settlements $1M-$2.4M.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/mesothelioma",
};

// ============================================
// 2026 MESOTHELIOMA SETTLEMENT CONSTANTS
// Sources: Meso.org, RAND Institute, Legal databases
// ============================================
export const INJURY_CONSTANTS_2026 = {
    // Mesothelioma Stage Multipliers
    multipliers: {
        minor: { min: 0.7, max: 1.0, avg: 0.85 },      // Stage 1
        moderate: { min: 0.9, max: 1.2, avg: 1.0 },    // Stage 2
        severe: { min: 1.0, max: 1.5, avg: 1.2 },      // Stage 3
        catastrophic: { min: 1.3, max: 2.0, avg: 1.5 }, // Stage 4
    },

    // Average Medical Costs by Treatment (2026)
    avgMedicalCosts: {
        whiplash: { min: 10000, max: 30000 },           // Diagnosis
        brokenBone: { min: 50000, max: 200000 },        // Surgery
        backInjury: { min: 100000, max: 300000 },       // Chemotherapy
        tbi: { min: 40000, max: 80000 },                // Radiation
        spinalCord: { min: 75000, max: 150000 },        // Palliative
        softTissue: { min: 400000, max: 600000 },       // Total Average
    },

    // Average Settlements by Compensation Type (2026)
    avgSettlements: {
        carAccident: { min: 1000000, max: 2400000, avg: 1400000 },  // Lawsuit
        slipAndFall: { min: 50000, max: 400000, avg: 180000 },      // Trust Fund
        medicalMalpractice: { min: 200000, max: 800000, avg: 400000 }, // Workers Comp
        workplaceInjury: { min: 200000, max: 800000, avg: 400000 },
        productLiability: { min: 3700, max: 4400, avg: 4100 },      // VA Monthly
        dogBite: { min: 50000, max: 400000, avg: 180000 },
    },

    // Attorney Fees (Contingency)
    attorneyFees: {
        preSettlement: 0.33,  // 33% standard
        postTrial: 0.40,      // 40% complex litigation
    },

    // Average Daily Wage (US)
    avgDailyWage: 220,

    // Medical Lien (typical percentage)
    medicalLienPercent: 0.25,  // 25% for trust fund claims
} as const;

// ============================================
// MESOTHELIOMA TYPES DATA
// ============================================
export const INJURY_TYPES = {
    whiplash: {
        name: "Pleural Mesothelioma",
        severity: "severe",
        avgSettlement: { min: 1000000, max: 2500000 },
        recoveryTime: "12-21 months prognosis",
        description: "Most common type (75%), affects lung lining (pleura). Symptoms: chest pain, shortness of breath, persistent cough.",
    },
    brokenBone: {
        name: "Peritoneal Mesothelioma",
        severity: "severe",
        avgSettlement: { min: 800000, max: 2000000 },
        recoveryTime: "12-24 months prognosis",
        description: "Second most common (20%), affects abdominal lining. Symptoms: abdominal pain, swelling, nausea.",
    },
    backInjury: {
        name: "Pericardial Mesothelioma",
        severity: "catastrophic",
        avgSettlement: { min: 1200000, max: 3000000 },
        recoveryTime: "6-12 months prognosis",
        description: "Rare type (1%), affects heart lining. Symptoms: chest pain, heart palpitations, difficulty breathing.",
    },
    tbi: {
        name: "Testicular Mesothelioma",
        severity: "catastrophic",
        avgSettlement: { min: 1500000, max: 3500000 },
        recoveryTime: "Better prognosis",
        description: "Rarest form (<1%), affects testis lining. Symptoms: testicular mass, swelling.",
    },
    spinalCord: {
        name: "Asbestos Trust Fund Claim",
        severity: "moderate",
        avgSettlement: { min: 50000, max: 400000 },
        recoveryTime: "3-6 months processing",
        description: "60+ bankruptcy trusts with $30B+ available. Average claim: $50K-$400K per trust.",
    },
    softTissue: {
        name: "VA Disability Benefits",
        severity: "moderate",
        avgSettlement: { min: 49000, max: 53000 },
        recoveryTime: "Lifetime monthly benefit",
        description: "Veterans exposed to asbestos during service. 100% rating: $4,100/month ($49K+/year).",
    },
    burns: {
        name: "Workers' Compensation",
        severity: "moderate",
        avgSettlement: { min: 200000, max: 800000 },
        recoveryTime: "6-12 months processing",
        description: "Occupational asbestos exposure claims. Covers medical costs + lost wages + disability.",
    },
    internalInjury: {
        name: "Wrongful Death Claim",
        severity: "catastrophic",
        avgSettlement: { min: 1000000, max: 3000000 },
        recoveryTime: "Family compensation",
        description: "For families who lost loved ones to mesothelioma. Includes funeral costs + lost income + pain/suffering.",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "mesothelioma/injury-settlement",
        name: "Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate your total mesothelioma compensation",
        longDescription: "Free 2026 mesothelioma settlement calculator. Estimate total compensation from lawsuits, trust funds, VA benefits, and workers' comp.",
        icon: Calculator,
        category: "legal",
        keywords: ["mesothelioma calculator", "mesothelioma settlement", "asbestos compensation", "mesothelioma lawsuit"],
        featured: true,
    },
    {
        id: "mesothelioma/injury-types",
        name: "Compensation Guide",
        shortName: "Comp Guide",
        description: "Compensation by mesothelioma type",
        longDescription: "See average compensation for different mesothelioma types and claim sources including lawsuits, trust funds, and VA benefits.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["pleural mesothelioma", "peritoneal mesothelioma", "asbestos trust fund", "VA mesothelioma"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION FUNCTION
// ============================================
export interface SettlementResult {
    medicalExpenses: number;
    lostWages: number;
    painSufferingMultiplier: number;
    painSufferingAmount: number;
    totalBeforeFees: number;
    attorneyFees: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export function calculateSettlement(
    medicalExpenses: number,
    lostWages: number,
    severity: 'minor' | 'moderate' | 'severe' | 'catastrophic',
    hasAttorney: boolean = true
): SettlementResult {
    const multipliers = INJURY_CONSTANTS_2026.multipliers[severity];

    // Base lawsuit settlement (using mesothelioma averages)
    const baseLawsuit = INJURY_CONSTANTS_2026.avgSettlements.carAccident.avg;

    // Stage multiplier affects total
    const stageMultiplier = multipliers.avg;
    const totalBeforeFees = Math.round(baseLawsuit * stageMultiplier);

    // Pain & suffering component
    const painSufferingMultiplier = stageMultiplier;
    const painSufferingAmount = Math.round(totalBeforeFees * 0.4); // 40% of total

    // Attorney fees (if applicable)
    const attorneyFees = hasAttorney
        ? Math.round(totalBeforeFees * INJURY_CONSTANTS_2026.attorneyFees.preSettlement)
        : 0;

    // Net settlement
    const netSettlement = totalBeforeFees - attorneyFees;

    // Calculate range
    const minTotal = Math.round(baseLawsuit * multipliers.min);
    const maxTotal = Math.round(baseLawsuit * multipliers.max);

    return {
        medicalExpenses,
        lostWages,
        painSufferingMultiplier,
        painSufferingAmount,
        totalBeforeFees,
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
        minor: "Stage 1 (Localized)",
        moderate: "Stage 2 (Advanced Localized)",
        severe: "Stage 3 (Locally Advanced)",
        catastrophic: "Stage 4 (Metastatic)",
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
