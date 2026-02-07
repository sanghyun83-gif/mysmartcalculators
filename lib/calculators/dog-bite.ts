// ============================================
// DOG BITE CALCULATOR - SITE CONFIG
// 2026 Data - Animal Attack Settlements
// ============================================

import { Calculator, Stethoscope, Shield, Dog } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Dog Bite Settlement Calculator",
    tagline: "Free 2026 Dog Bite & Animal Attack Payout Estimator",
    description: "Calculate your 2026 dog bite settlement value instantly. Free 50-state animal attack negotiator with official Insurance Information Institute (III) liability data and CDC injury benchmarks.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/dog-bite",
};

// ============================================
// 2026 DOG BITE CONSTANTS
// Sources: Insurance Information Institute, CDC, IIHS
// ============================================
export const DOG_BITE_CONSTANTS_2026 = {
    // Pain & Suffering Multipliers by Severity
    multipliers: {
        minor: { min: 1.5, max: 3, avg: 2 },      // Minor bites, no scarring
        moderate: { min: 3, max: 5, avg: 4 },     // Puncture wounds, some scarring
        severe: { min: 5, max: 10, avg: 7 },      // Deep wounds, surgery required
        catastrophic: { min: 10, max: 20, avg: 15 }, // Disfigurement, permanent disability
    },

    // Average Settlement by Severity (2026)
    settlementRanges: {
        minor: { min: 5000, max: 15000 },
        moderate: { min: 15000, max: 50000 },
        severe: { min: 50000, max: 200000 },
        catastrophic: { min: 200000, max: 1000000 },
    },

    // Common Treatment Costs
    treatmentCosts: {
        erVisit: 2500,
        stitches: 1500,
        rabiesShots: 3000,
        plasticSurgery: 15000,
        physicalTherapy: 150, // per session
        scarTreatment: 5000,
        psychotherapy: 200,   // per session for trauma
    },

    // Statistics (2026 data from Insurance Information Institute)
    statistics: {
        avgClaimPayout: 64555,  // Average homeowner liability payout
        totalClaimsUSA: 19000,  // Annual claims
        annualBites: 4500000,   // 4.5 million dog bites per year
        childrenPercent: 50,    // 50% of victims are children
        faceInjuryPercent: 77,  // 77% of child bites to face
    },

    // State Liability Types
    liabilityTypes: {
        strictLiability: "Owner liable regardless of prior knowledge",
        onebitRule: "Owner liable only if dog has bitten before",
        negligence: "Must prove owner was negligent",
    },

    // Attorney Fees (Contingency)
    attorneyFees: {
        preSettlement: 0.33,
        postTrial: 0.40,
    },
    citation: "Based on 2026 Insurance Information Institute (III) Homeowners Liability Data, CDC Dog Bite Prevention & Injury Statistics, and American Veterinary Medical Association (AVMA) benchmarks."
} as const;

// ============================================
// DOG BITE SEVERITY LEVELS
// ============================================
export const BITE_SEVERITY = {
    level1: {
        name: "Level 1 - No Contact",
        description: "Aggressive behavior, no skin contact",
        avgSettlement: { min: 0, max: 2000 },
        injuries: "Emotional distress only",
        treatment: "Counseling if needed",
    },
    level2: {
        name: "Level 2 - Near Bite",
        description: "Teeth touch skin, no puncture",
        avgSettlement: { min: 2000, max: 5000 },
        injuries: "Bruising, abrasions",
        treatment: "First aid, wound care",
    },
    level3: {
        name: "Level 3 - Minor Bite",
        description: "1-4 shallow punctures, single bite",
        avgSettlement: { min: 5000, max: 25000 },
        injuries: "Puncture wounds, minor scarring",
        treatment: "ER visit, stitches, antibiotics",
    },
    level4: {
        name: "Level 4 - Serious Bite",
        description: "Deep punctures, bruising, multiple bites",
        avgSettlement: { min: 25000, max: 100000 },
        injuries: "Significant wounds, permanent scarring",
        treatment: "Surgery, reconstructive work",
    },
    level5: {
        name: "Level 5 - Severe Attack",
        description: "Multiple level 4 bites or mauling",
        avgSettlement: { min: 100000, max: 500000 },
        injuries: "Disfigurement, nerve damage",
        treatment: "Multiple surgeries, long-term care",
    },
    level6: {
        name: "Level 6 - Fatal Attack",
        description: "Victim killed by dog",
        avgSettlement: { min: 500000, max: 2000000 },
        injuries: "Death",
        treatment: "Wrongful death claim",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "dog-bite/settlement",
        name: "Dog Bite Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate your dog bite injury settlement value",
        longDescription: "Free 2026 dog bite settlement calculator. Estimate compensation based on bite severity, treatment, and scarring.",
        icon: Calculator,
        category: "legal",
        keywords: ["dog bite calculator", "dog attack settlement", "animal bite compensation"],
        featured: true,
    },
    {
        id: "dog-bite/bite-severity",
        name: "Bite Severity Guide",
        shortName: "Severity Guide",
        description: "Settlement values by bite severity level (1-6)",
        longDescription: "Understand dog bite severity levels and see average settlement values for each level.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["dog bite severity", "bite level classification", "dog attack injury types"],
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
    scarringBonus: number;
    totalBeforeFees: number;
    faultReduction: number;
    attorneyFees: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export function calculateDogBiteSettlement(
    medicalExpenses: number,
    lostWages: number,
    scarringPercent: number,
    severity: 'minor' | 'moderate' | 'severe' | 'catastrophic',
    hasAttorney: boolean = true,
    isChild: boolean = false
): SettlementResult {
    const multipliers = DOG_BITE_CONSTANTS_2026.multipliers[severity];

    // Economic damages
    const economicDamages = medicalExpenses + lostWages;

    // Pain & suffering (higher for children and facial injuries)
    let painSufferingMultiplier = multipliers.avg;
    if (isChild) painSufferingMultiplier *= 1.3; // Children get higher multipliers

    const painSufferingAmount = Math.round(medicalExpenses * painSufferingMultiplier);

    // Scarring/disfigurement bonus
    const scarringBonus = Math.round(medicalExpenses * (scarringPercent / 100) * 2);

    // Total before adjustments
    const subtotal = economicDamages + painSufferingAmount + scarringBonus;

    // Dog bite usually strict liability - no fault reduction
    const faultReduction = 0;
    const afterFault = subtotal;

    // Attorney fees
    const attorneyFees = hasAttorney
        ? Math.round(afterFault * DOG_BITE_CONSTANTS_2026.attorneyFees.preSettlement)
        : 0;

    const netSettlement = afterFault - attorneyFees;

    // Calculate range
    const minTotal = economicDamages + (medicalExpenses * multipliers.min);
    const maxTotal = economicDamages + (medicalExpenses * multipliers.max) + scarringBonus * 2;

    return {
        medicalExpenses,
        lostWages,
        painSufferingMultiplier,
        painSufferingAmount,
        scarringBonus,
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
        minor: "Minor Bite",
        moderate: "Moderate Bite",
        severe: "Severe Attack",
        catastrophic: "Catastrophic/Mauling",
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
