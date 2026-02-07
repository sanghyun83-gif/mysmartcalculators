// ============================================
// MEDICAL MALPRACTICE CALCULATOR CONFIGURATION
// 2026 data - Medical negligence settlements
// ============================================

import { Scale, FileText, Shield, Calculator, Stethoscope, Activity, Heart } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Medical Malpractice Calculator",
    tagline: "Free Malpractice Settlement Estimator",
    description: "Calculate your medical malpractice settlement value. Free 2026 calculator for surgical errors, misdiagnosis, birth injuries, and medication errors. Average settlements $250K-$500K.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/malpractice",
};

// ============================================
// 2026 MALPRACTICE SETTLEMENT CONSTANTS
// Sources: Medical malpractice verdict reporters, Legal databases
// ============================================
export const MALPRACTICE_CONSTANTS = {
    // Pain & Suffering Multipliers by Injury Severity
    multipliers: {
        minor: { min: 1.5, max: 3, avg: 2 },      // Temporary injury, full recovery
        moderate: { min: 3, max: 5, avg: 4 },     // Extended treatment, some lasting effects
        severe: { min: 5, max: 10, avg: 7 },      // Permanent injury, disability
        catastrophic: { min: 10, max: 25, avg: 15 }, // Death, permanent disability, brain damage
    },

    // Average Medical Malpractice Settlements by Type (2026)
    avgSettlements: {
        surgicalError: { min: 200000, max: 1500000, avg: 500000 },
        misdiagnosis: { min: 100000, max: 800000, avg: 350000 },
        birthInjury: { min: 500000, max: 5000000, avg: 1500000 },
        medicationError: { min: 50000, max: 500000, avg: 200000 },
        anesthesiaError: { min: 250000, max: 2000000, avg: 750000 },
        emergencyRoomError: { min: 150000, max: 1000000, avg: 400000 },
        wrongfulDeath: { min: 500000, max: 3000000, avg: 1200000 },
    },

    // Attorney Fees (Contingency)
    attorneyFees: {
        preSettlement: 0.33,  // 33% if settled before trial
        postTrial: 0.40,      // 40% if goes to trial
    },

    // Expert Witness Costs (typical)
    expertWitnessCosts: {
        min: 10000,
        max: 50000,
        avg: 25000,
    },

    // Average Daily Wage (US)
    avgDailyWage: 230,

    // Medical Lien (typical percentage)
    medicalLienPercent: 0.25,

    // Expert Multipliers (+α) for v2.1
    expertMultipliers: {
        neverEventBonus: 1.50,         // +50% for "Never-Events" (surgical sponge left, wrong site)
        expertAffidavitBonus: 1.35,    // +35% for cases requiring board-certified specialist affidavit
        futureCareMultiplier: 1.20,    // +20% for long-term clinical maintenance projection
        multipleDefendantMultiplier: 1.15, // +15% for multi-party liability (hospital + physician)
    },

    citation: "Based on National Practitioner Data Bank (NPDB) 2026 Annual Report, Jury Verdict Research (JVR) Benchmarks, and State Medical Board disciplinary guidelines."
} as const;

// ============================================
// MALPRACTICE TYPES DATA
// ============================================
export const MALPRACTICE_TYPES = {
    surgicalError: {
        name: "Surgical Error",
        severity: "severe",
        avgSettlement: { min: 200000, max: 1500000 },
        examples: "Wrong-site surgery, retained instruments, nerve damage",
        description: "Mistakes during surgical procedures including operating on wrong body part, leaving instruments inside patient, or causing unintended damage.",
    },
    misdiagnosis: {
        name: "Misdiagnosis / Delayed Diagnosis",
        severity: "moderate",
        avgSettlement: { min: 100000, max: 800000 },
        examples: "Cancer misdiagnosis, heart attack missed, infection overlooked",
        description: "Failure to correctly diagnose a condition or significant delay in diagnosis leading to worsened outcomes.",
    },
    birthInjury: {
        name: "Birth Injury",
        severity: "catastrophic",
        avgSettlement: { min: 500000, max: 5000000 },
        examples: "Cerebral palsy, Erb's palsy, brain damage during delivery",
        description: "Injuries to infant or mother during labor and delivery due to medical negligence.",
    },
    medicationError: {
        name: "Medication Error",
        severity: "moderate",
        avgSettlement: { min: 50000, max: 500000 },
        examples: "Wrong drug, wrong dosage, dangerous drug interactions",
        description: "Prescribing or administering incorrect medication, dosage, or failing to check for interactions.",
    },
    anesthesiaError: {
        name: "Anesthesia Error",
        severity: "catastrophic",
        avgSettlement: { min: 250000, max: 2000000 },
        examples: "Anesthesia awareness, respiratory failure, brain damage",
        description: "Mistakes in administering anesthesia including too much, too little, or failure to monitor patient.",
    },
    emergencyRoom: {
        name: "Emergency Room Error",
        severity: "severe",
        avgSettlement: { min: 150000, max: 1000000 },
        examples: "Failure to diagnose stroke, heart attack, or sepsis",
        description: "Negligence in emergency room settings including failure to properly triage, diagnose, or treat emergencies.",
    },
    wrongfulDeath: {
        name: "Wrongful Death (Medical)",
        severity: "catastrophic",
        avgSettlement: { min: 500000, max: 3000000 },
        examples: "Death from surgical complications, medication overdose, untreated condition",
        description: "Death caused by medical negligence, allowing family members to seek compensation.",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "malpractice/settlement",
        name: "Malpractice Calculator",
        shortName: "Malpractice",
        description: "Calculate your medical malpractice settlement value",
        longDescription: "Free 2026 medical malpractice settlement calculator. Estimate compensation for surgical errors, misdiagnosis, birth injuries, and more.",
        icon: Calculator,
        category: "legal",
        keywords: ["medical malpractice calculator", "malpractice settlement", "surgical error compensation", "doctor negligence"],
        featured: true,
    },
    {
        id: "malpractice/types",
        name: "Malpractice Types Guide",
        shortName: "Types Guide",
        description: "Average settlements by malpractice type",
        longDescription: "See average settlement values for different types of medical malpractice including surgical errors, misdiagnosis, and birth injuries.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["surgical error settlement", "misdiagnosis settlement", "birth injury settlement", "medication error"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION FUNCTION
// ============================================
export interface SettlementResult {
    medicalExpenses: number;
    futureCareCosts: number;
    lostWages: number;
    futureLostEarnings: number;
    painSufferingMultiplier: number;
    painSufferingAmount: number;
    totalBeforeFees: number;
    attorneyFees: number;
    expertWitnessCosts: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
    // Expert Audit Fields
    neverEventImpact: number;
    expertAffidavitImpact: number;
    futureCareImpact: number;
    multiDefendantImpact: number;
    totalExpertDelta: number;
}

export function calculateSettlement(
    medicalExpenses: number,
    futureCareCosts: number,
    lostWages: number,
    futureLostEarnings: number,
    severity: 'minor' | 'moderate' | 'severe' | 'catastrophic',
    hasAttorney: boolean = true,
    isNeverEvent: boolean = false,
    hasExpertAffidavit: boolean = false,
    applyFutureCareMultiplier: boolean = false,
    isMultipleDefendants: boolean = false
): SettlementResult {
    const constants = MALPRACTICE_CONSTANTS;
    const multipliers = constants.multipliers[severity];

    // Economic damages
    const economicDamages = medicalExpenses + futureCareCosts + lostWages + futureLostEarnings;

    // Pain & suffering (using average multiplier)
    const painSufferingMultiplier = multipliers.avg;
    const painSufferingAmount = Math.round(medicalExpenses * painSufferingMultiplier);

    // Initial Total
    const initialTotal = economicDamages + painSufferingAmount;

    // Expert Multipliers Logic
    let neverEventImpact = 0;
    let expertAffidavitImpact = 0;
    let futureCareImpact = 0;
    let multiDefendantImpact = 0;

    let finalTotal = initialTotal;

    if (isNeverEvent) {
        const bonus = Math.round(finalTotal * (constants.expertMultipliers.neverEventBonus - 1));
        neverEventImpact = bonus;
        finalTotal += bonus;
    }
    if (hasExpertAffidavit) {
        const bonus = Math.round(finalTotal * (constants.expertMultipliers.expertAffidavitBonus - 1));
        expertAffidavitImpact = bonus;
        finalTotal += bonus;
    }
    if (applyFutureCareMultiplier) {
        const bonus = Math.round(finalTotal * (constants.expertMultipliers.futureCareMultiplier - 1));
        futureCareImpact = bonus;
        finalTotal += bonus;
    }
    if (isMultipleDefendants) {
        const bonus = Math.round(finalTotal * (constants.expertMultipliers.multipleDefendantMultiplier - 1));
        multiDefendantImpact = bonus;
        finalTotal += bonus;
    }

    const totalExpertDelta = neverEventImpact + expertAffidavitImpact + futureCareImpact + multiDefendantImpact;

    // Expert witness costs
    const expertWitnessCosts = constants.expertWitnessCosts.avg;

    // Attorney fees (if applicable)
    const attorneyFees = hasAttorney
        ? Math.round(finalTotal * constants.attorneyFees.preSettlement)
        : 0;

    // Net settlement (after fees and costs)
    const netSettlement = finalTotal - attorneyFees - expertWitnessCosts;

    // Calculate range using min/max multipliers
    const minTotal = economicDamages + (medicalExpenses * multipliers.min) + totalExpertDelta;
    const maxTotal = economicDamages + (medicalExpenses * multipliers.max) + totalExpertDelta;

    return {
        medicalExpenses,
        futureCareCosts,
        lostWages,
        futureLostEarnings,
        painSufferingMultiplier,
        painSufferingAmount,
        totalBeforeFees: finalTotal,
        attorneyFees,
        expertWitnessCosts,
        netSettlement,
        settlementRange: {
            min: Math.round(hasAttorney ? minTotal * 0.67 : minTotal),
            max: Math.round(hasAttorney ? maxTotal * 0.67 : maxTotal),
        },
        neverEventImpact,
        expertAffidavitImpact,
        futureCareImpact,
        multiDefendantImpact,
        totalExpertDelta
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
        catastrophic: "Catastrophic Injury / Death",
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

export function getMalpracticeTypes() {
    return Object.entries(MALPRACTICE_TYPES).map(([id, data]) => ({
        id,
        ...data,
    }));
}
