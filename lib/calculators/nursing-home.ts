// ============================================
// NURSING HOME ABUSE CALCULATOR - SITE CONFIG
// 2026 Data - Elder Abuse & Neglect Settlements
// ============================================

import { Calculator, Stethoscope, Shield, Heart } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Nursing Home Abuse Calculator",
    tagline: "Free 2026 Elder Abuse Settlement Negotiator",
    description: "Calculate your 2026 nursing home abuse settlement value instantly. Free elder neglect negotiator with official CMS (Medicare.gov) ratings, CDC elder abuse statistics, and litigation payout records.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/nursing-home",
};

// ============================================
// 2026 NURSING HOME ABUSE CONSTANTS
// Sources: CMS data, Elder abuse statistics, Personal injury databases
// ============================================
export const NURSING_HOME_CONSTANTS_2026 = {
    // Pain & Suffering Multipliers by Severity
    multipliers: {
        mild: { min: 1.5, max: 3, avg: 2 },        // Minor neglect, resolved quickly
        moderate: { min: 3, max: 5, avg: 4 },       // Significant injury, some recovery
        severe: { min: 5, max: 10, avg: 7 },        // Serious harm, long-term effects
        catastrophic: { min: 10, max: 20, avg: 15 }, // Wrongful death or permanent disability
    },

    // Average Settlements by Abuse Type
    settlementRanges: {
        bedsores: { min: 50000, max: 500000, avg: 175000 },
        falls: { min: 25000, max: 300000, avg: 100000 },
        malnutrition: { min: 75000, max: 600000, avg: 200000 },
        medicationError: { min: 50000, max: 400000, avg: 150000 },
        physicalAbuse: { min: 100000, max: 1000000, avg: 350000 },
        sexualAbuse: { min: 200000, max: 2000000, avg: 750000 },
        emotionalAbuse: { min: 25000, max: 200000, avg: 75000 },
        wrongfulDeath: { min: 500000, max: 5000000, avg: 1500000 },
    },

    // Statistics (2026 data)
    statistics: {
        residentsAbused: 2000000,   // 2 million residents experience abuse yearly
        facilityPercent: 95,        // 95% of facilities have deficiencies
        avgSettlement: 250000,
        bedsoreDeaths: 60000,       // Annual deaths from bedsores
        unreportedPercent: 90,      // 90% of abuse goes unreported
    },

    // Expert Multipliers (+α Step 1)
    expertFactors: {
        cmsRating: {
            oneStar: { id: "cms1", label: "CMS 1-Star Rating (Substandard Care)", multiplier: 1.40 },
            twoStar: { id: "cms2", label: "CMS 2-Star Rating", multiplier: 1.20 }
        },
        staffingBreach: { id: "staff", label: "Federal Staffing Minimum Breach", multiplier: 1.25 },
        chronicViolation: { id: "chronic", label: "Repeated F-Tag Citations", multiplier: 1.35 }
    },

    lienMitigation: 0.65, // Estimated take-home factor for nursing home cases

    // Attorney Fees
    attorneyFees: {
        preSettlement: 0.33,
        postTrial: 0.40,
    },
    citation: "Based on 2026 CMS (Centers for Medicare & Medicaid Services) Five-Star Quality Ratings, CDC Elder Abuse Surveillance Data, and National Center on Elder Abuse (NCEA) Settlement Benchmarks."
} as const;

// ============================================
// ABUSE TYPES
// ============================================
export const ABUSE_TYPES = {
    bedsores: {
        name: "Bedsores / Pressure Ulcers",
        description: "Skin breakdown from prolonged bed rest or wheelchair use without proper repositioning",
        signs: "Stage 1-4 sores, infection, sepsis, exposed bone",
        avgSettlement: { min: 50000, max: 500000 },
        severity: "moderate",
        common: true,
    },
    falls: {
        name: "Falls & Fractures",
        description: "Falls due to inadequate supervision, wet floors, or improper mobility assistance",
        signs: "Hip fractures, head injuries, broken bones, internal bleeding",
        avgSettlement: { min: 25000, max: 300000 },
        severity: "moderate",
        common: true,
    },
    malnutrition: {
        name: "Malnutrition & Dehydration",
        description: "Failure to provide adequate food, water, or feeding assistance",
        signs: "Weight loss, confusion, weakness, organ failure",
        avgSettlement: { min: 75000, max: 600000 },
        severity: "severe",
        common: true,
    },
    medicationError: {
        name: "Medication Errors",
        description: "Wrong medication, wrong dosage, missed doses, or overmedication",
        signs: "Adverse reactions, overdose, sedation, organ damage",
        avgSettlement: { min: 50000, max: 400000 },
        severity: "moderate",
        common: true,
    },
    physicalAbuse: {
        name: "Physical Abuse",
        description: "Hitting, pushing, restraining, or other intentional physical harm",
        signs: "Bruises, fractures, cuts, fear of staff, withdrawal",
        avgSettlement: { min: 100000, max: 1000000 },
        severity: "severe",
        common: false,
    },
    sexualAbuse: {
        name: "Sexual Abuse",
        description: "Any unwanted sexual contact or exploitation of residents",
        signs: "Injuries, STIs, behavioral changes, PTSD",
        avgSettlement: { min: 200000, max: 2000000 },
        severity: "catastrophic",
        common: false,
    },
    emotionalAbuse: {
        name: "Emotional Abuse / Neglect",
        description: "Verbal abuse, isolation, humiliation, or ignoring resident needs",
        signs: "Depression, anxiety, withdrawal, fear, agitation",
        avgSettlement: { min: 25000, max: 200000 },
        severity: "mild",
        common: true,
    },
    wrongfulDeath: {
        name: "Wrongful Death",
        description: "Death caused by abuse, neglect, or medical malpractice in care facility",
        signs: "Unexpected death, suspicious circumstances, history of complaints",
        avgSettlement: { min: 500000, max: 5000000 },
        severity: "catastrophic",
        common: false,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "nursing-home/abuse-settlement",
        name: "Nursing Home Abuse Calculator",
        shortName: "Settlement",
        description: "Calculate your nursing home abuse settlement value",
        longDescription: "Free 2026 nursing home abuse settlement calculator. Estimate compensation for bedsores, falls, neglect, and elder abuse.",
        icon: Calculator,
        category: "legal",
        keywords: ["nursing home abuse calculator", "elder abuse settlement", "bedsores lawsuit"],
        featured: true,
    },
    {
        id: "nursing-home/abuse-types",
        name: "Abuse Types Guide",
        shortName: "Abuse Types",
        description: "View settlements by type of abuse or neglect",
        longDescription: "Understand different types of nursing home abuse and see average settlement values.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["nursing home neglect types", "elder abuse signs", "bedsore stages"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION FUNCTION
// ============================================
export interface SettlementResult {
    medicalExpenses: number;
    futureCareCost: number;
    painSufferingMultiplier: number;
    painSufferingAmount: number;
    expertBonus: number;                // +α Step 1
    punitiveMultiplier: number;
    punitiveDamages: number;
    totalBeforeFees: number;
    attorneyFees: number;
    netSettlement: number;
    netEstimation: number;              // +α Step 1
    settlementRange: { min: number; max: number };
}

export function calculateNursingHomeSettlement(
    medicalExpenses: number,
    futureCareCost: number,
    abuseType: keyof typeof ABUSE_TYPES,
    hasPriorViolations: boolean = false,
    hasAttorney: boolean = true,
    hasCmsPenalty: boolean = false,      // +α Step 1
    hasStaffingBreach: boolean = false, // +α Step 1
    hasChronicViolation: boolean = false // +α Step 1
): SettlementResult {
    const abuse = ABUSE_TYPES[abuseType];
    const severity = abuse.severity as keyof typeof NURSING_HOME_CONSTANTS_2026.multipliers;
    const multipliers = NURSING_HOME_CONSTANTS_2026.multipliers[severity];

    // Economic damages
    const economicDamages = medicalExpenses + futureCareCost;

    // Expert Multipliers (+α Step 1)
    let expertMultiplier = 1.0;
    if (hasCmsPenalty) expertMultiplier *= NURSING_HOME_CONSTANTS_2026.expertFactors.cmsRating.oneStar.multiplier;
    if (hasStaffingBreach) expertMultiplier *= NURSING_HOME_CONSTANTS_2026.expertFactors.staffingBreach.multiplier;
    if (hasChronicViolation) expertMultiplier *= NURSING_HOME_CONSTANTS_2026.expertFactors.chronicViolation.multiplier;

    // Pain & suffering
    const painSufferingMultiplier = multipliers.avg;
    const painSufferingAmount = Math.round(medicalExpenses * painSufferingMultiplier);

    // Punitive damages (if prior violations exist)
    const punitiveMultiplier = hasPriorViolations ? 2 : 0;
    const punitiveDamages = hasPriorViolations ? Math.round(economicDamages * punitiveMultiplier) : 0;

    // Total before Expert Bonus
    const subtotal = economicDamages + painSufferingAmount + punitiveDamages;

    // Expert Bonus Calculation
    const expertBonus = subtotal * (expertMultiplier - 1);
    const adjustedTotal = subtotal + expertBonus;

    // Attorney fees
    const attorneyFees = hasAttorney
        ? Math.round(adjustedTotal * NURSING_HOME_CONSTANTS_2026.attorneyFees.preSettlement)
        : 0;

    const netSettlement = adjustedTotal - attorneyFees;

    return {
        medicalExpenses,
        futureCareCost,
        painSufferingMultiplier,
        painSufferingAmount,
        expertBonus: Math.round(expertBonus),
        punitiveMultiplier,
        punitiveDamages,
        totalBeforeFees: Math.round(adjustedTotal),
        attorneyFees,
        netSettlement,
        netEstimation: Math.round(netSettlement * NURSING_HOME_CONSTANTS_2026.lienMitigation),
        settlementRange: {
            min: Math.round(abuse.avgSettlement.min * expertMultiplier),
            max: Math.round(abuse.avgSettlement.max * expertMultiplier),
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
        mild: "text-yellow-400",
        moderate: "text-orange-400",
        severe: "text-red-400",
        catastrophic: "text-red-600",
    };
    return colors[severity] || "text-slate-400";
}
