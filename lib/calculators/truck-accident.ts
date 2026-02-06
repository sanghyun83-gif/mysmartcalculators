// ============================================
// TRUCK-ACCIDENT-CALC SITE CONFIGURATION
// 2026 Truck Accident Settlement Calculator
// 18-Wheeler, Semi-Truck, Commercial Truck Claims
// ============================================

import { Calculator, Scale, FileText, DollarSign, Car, AlertTriangle, Gavel, Truck } from 'lucide-react';
import { STATE_ACCIDENT_DATA } from './car-accident/state-data';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Truck Accident Settlement Calculator",
    tagline: "Free 2026 Settlement Estimator",
    description: "Calculate your truck accident settlement value for free. Estimate 18-wheeler, semi-truck, and commercial vehicle accident compensation. Average settlements $500K-$3M.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/truck-accident",
};

// ============================================
// SETTLEMENT CALCULATION CONSTANTS
// ============================================
export const SETTLEMENT_CONSTANTS = {
    // Pain & Suffering Multipliers by injury severity
    painMultipliers: {
        minor: { min: 1.5, max: 3, label: "Minor (Soft tissue, bruises)" },
        moderate: { min: 3, max: 5, label: "Moderate (Fractures, sprains)" },
        severe: { min: 5, max: 10, label: "Severe (Surgery required)" },
        permanent: { min: 10, max: 20, label: "Permanent (Disability, TBI)" },
        catastrophic: { min: 20, max: 50, label: "Catastrophic (Paralysis, death)" },
    },

    // Injury types with typical multipliers
    injuryTypes: {
        whiplash: { multiplier: 2, weeks: 6, label: "Whiplash" },
        backInjury: { multiplier: 4, weeks: 16, label: "Back/Spine Injury" },
        brokenBone: { multiplier: 3, weeks: 12, label: "Broken Bone" },
        headInjury: { multiplier: 8, weeks: 24, label: "Head/TBI" },
        kneeInjury: { multiplier: 3.5, weeks: 12, label: "Knee Injury" },
        shoulderInjury: { multiplier: 3, weeks: 10, label: "Shoulder Injury" },
        neckInjury: { multiplier: 4, weeks: 14, label: "Neck Injury" },
        softTissue: { multiplier: 1.5, weeks: 4, label: "Soft Tissue" },
        concussion: { multiplier: 5, weeks: 8, label: "Concussion" },
        internalInjury: { multiplier: 7, weeks: 20, label: "Internal Injuries" },
    },

    // Attorney impact on settlement
    attorneyBonus: 0.30, // 30% higher with attorney
    attorneyFee: 0.33, // 33% contingency fee

    // Average settlements for truck accidents (higher than car accidents)
    averageSettlements: {
        minor: { low: 25000, high: 100000 },
        moderate: { low: 100000, high: 500000 },
        severe: { low: 500000, high: 1500000 },
        permanent: { low: 1500000, high: 5000000 },
    },
};

// ============================================
// 50 STATE FAULT LAWS
// ============================================
export type FaultSystem = 'at-fault' | 'no-fault' | 'choice';
export type ComparativeType = 'pure' | 'modified-50' | 'modified-51' | 'contributory';

export const STATE_FAULT_LAWS: Record<string, {
    name: string;
    faultSystem: FaultSystem;
    comparativeType: ComparativeType;
    threshold: string;
    notes: string;
    biSOL: number;
    pdSOL: number;
}> = {
    AL: { name: "Alabama", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery", biSOL: 2, pdSOL: 2 },
    AK: { name: "Alaska", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 2, pdSOL: 2 },
    AZ: { name: "Arizona", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 2, pdSOL: 2 },
    AR: { name: "Arkansas", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 3, pdSOL: 3 },
    CA: { name: "California", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 2, pdSOL: 3 },
    CO: { name: "Colorado", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 3, pdSOL: 3 },
    CT: { name: "Connecticut", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 2 },
    DE: { name: "Delaware", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 2 },
    FL: { name: "Florida", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Changed from no-fault in 2023", biSOL: 2, pdSOL: 2 },
    GA: { name: "Georgia", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 2, pdSOL: 4 },
    HI: { name: "Hawaii", faultSystem: "no-fault", comparativeType: "modified-51", threshold: "Serious injury", notes: "No-fault with threshold", biSOL: 2, pdSOL: 2 },
    ID: { name: "Idaho", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 2, pdSOL: 3 },
    IL: { name: "Illinois", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 5 },
    IN: { name: "Indiana", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 2 },
    IA: { name: "Iowa", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 5 },
    KS: { name: "Kansas", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "$2,000 med", notes: "No-fault with threshold", biSOL: 2, pdSOL: 2 },
    KY: { name: "Kentucky", faultSystem: "choice", comparativeType: "pure", threshold: "Choice", notes: "Choice no-fault state", biSOL: 1, pdSOL: 2 },
    LA: { name: "Louisiana", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 1, pdSOL: 1 },
    ME: { name: "Maine", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 6, pdSOL: 6 },
    MD: { name: "Maryland", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery", biSOL: 3, pdSOL: 3 },
    MA: { name: "Massachusetts", faultSystem: "no-fault", comparativeType: "modified-51", threshold: "$2,000 med", notes: "No-fault with threshold", biSOL: 3, pdSOL: 3 },
    MI: { name: "Michigan", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "Serious injury", notes: "Strong no-fault state", biSOL: 3, pdSOL: 3 },
    MN: { name: "Minnesota", faultSystem: "no-fault", comparativeType: "modified-51", threshold: "$4,000 med", notes: "No-fault with threshold", biSOL: 2, pdSOL: 6 },
    MS: { name: "Mississippi", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 3, pdSOL: 3 },
    MO: { name: "Missouri", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 5, pdSOL: 5 },
    MT: { name: "Montana", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 3, pdSOL: 2 },
    NE: { name: "Nebraska", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 4, pdSOL: 4 },
    NV: { name: "Nevada", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 3 },
    NH: { name: "New Hampshire", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 3, pdSOL: 3 },
    NJ: { name: "New Jersey", faultSystem: "choice", comparativeType: "modified-51", threshold: "Choice", notes: "Choice no-fault state", biSOL: 2, pdSOL: 6 },
    NM: { name: "New Mexico", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 3, pdSOL: 4 },
    NY: { name: "New York", faultSystem: "no-fault", comparativeType: "pure", threshold: "Serious injury", notes: "No-fault with serious injury threshold", biSOL: 3, pdSOL: 3 },
    NC: { name: "North Carolina", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery", biSOL: 3, pdSOL: 3 },
    ND: { name: "North Dakota", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "$2,500 med", notes: "No-fault with threshold", biSOL: 6, pdSOL: 6 },
    OH: { name: "Ohio", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 2 },
    OK: { name: "Oklahoma", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 2 },
    OR: { name: "Oregon", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 6 },
    PA: { name: "Pennsylvania", faultSystem: "choice", comparativeType: "modified-51", threshold: "Choice", notes: "Choice no-fault state", biSOL: 2, pdSOL: 2 },
    RI: { name: "Rhode Island", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 3, pdSOL: 10 },
    SC: { name: "South Carolina", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 3, pdSOL: 3 },
    SD: { name: "South Dakota", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 3, pdSOL: 6 },
    TN: { name: "Tennessee", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 1, pdSOL: 3 },
    TX: { name: "Texas", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 2, pdSOL: 2 },
    UT: { name: "Utah", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "$3,000 med", notes: "No-fault with threshold", biSOL: 4, pdSOL: 3 },
    VT: { name: "Vermont", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 3, pdSOL: 3 },
    VA: { name: "Virginia", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery", biSOL: 2, pdSOL: 5 },
    WA: { name: "Washington", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault", biSOL: 3, pdSOL: 3 },
    WV: { name: "West Virginia", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)", biSOL: 2, pdSOL: 2 },
    WI: { name: "Wisconsin", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 3, pdSOL: 6 },
    WY: { name: "Wyoming", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)", biSOL: 4, pdSOL: 4 },
    DC: { name: "Washington DC", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery", biSOL: 3, pdSOL: 3 },
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "truck-accident/settlement-calculator",
        name: "Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate your truck accident settlement",
        longDescription: "Free 2026 truck accident settlement calculator. Estimate your 18-wheeler, semi-truck, or commercial vehicle accident compensation.",
        icon: Calculator,
        category: "legal",
        keywords: ["truck accident settlement calculator", "18 wheeler accident", "semi truck accident"],
        featured: true,
    },
    {
        id: "truck-accident/pain-suffering",
        name: "Pain & Suffering Calculator",
        shortName: "Pain & Suffering",
        description: "Calculate truck accident pain and suffering",
        longDescription: "Calculate non-economic damages for truck accident injuries using the multiplier method.",
        icon: Scale,
        category: "legal",
        keywords: ["truck accident pain suffering", "non-economic damages", "trucking injury compensation"],
        featured: true,
    },
    {
        id: "truck-accident/state-laws",
        name: "State Trucking Laws",
        shortName: "State Laws",
        description: "Truck accident laws by state",
        longDescription: "Compare trucking accident laws, FMCSA regulations, and liability rules across all 50 states.",
        icon: Gavel,
        category: "legal",
        keywords: ["truck accident laws by state", "FMCSA regulations", "trucking liability"],
        featured: false,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION FUNCTION
// ============================================
export interface SettlementResult {
    state: string;
    stateName: string;
    faultSystem: FaultSystem;
    medicalBills: number;
    lostWages: number;
    propertyDamage: number;
    economicDamages: number;
    painMultiplier: number;
    painSufferingLow: number;
    painSufferingHigh: number;
    faultPercentage: number;
    faultReduction: number;
    settlementLow: number;
    settlementHigh: number;
    withAttorneyLow: number;
    withAttorneyHigh: number;
    afterAttorneyFeeLow: number;
    afterAttorneyFeeHigh: number;
    injurySeverity: string;
}

export function calculateSettlement(
    stateCode: string,
    medicalBills: number,
    lostWages: number,
    propertyDamage: number,
    injurySeverity: 'minor' | 'moderate' | 'severe' | 'permanent' | 'catastrophic',
    faultPercentage: number = 0 // Your fault percentage (0-100)
): SettlementResult {
    const state = STATE_FAULT_LAWS[stateCode] || STATE_FAULT_LAWS['CA'];
    const constants = SETTLEMENT_CONSTANTS;
    const multiplierData = constants.painMultipliers[injurySeverity];

    // Calculate economic damages
    const economicDamages = medicalBills + lostWages + propertyDamage;

    // Calculate pain & suffering using multiplier method
    const avgMultiplier = (multiplierData.min + multiplierData.max) / 2;
    const painSufferingLow = Math.round(medicalBills * multiplierData.min);
    const painSufferingHigh = Math.round(medicalBills * multiplierData.max);

    // Calculate total before fault reduction
    let totalLow = economicDamages + painSufferingLow;
    let totalHigh = economicDamages + painSufferingHigh;

    // Apply fault reduction based on state law
    let faultReduction = 0;
    const yourFault = faultPercentage / 100;

    if (state.comparativeType === 'contributory') {
        // Contributory: Any fault = $0
        if (faultPercentage > 0) {
            faultReduction = 1; // 100% reduction
        }
    } else if (state.comparativeType === 'modified-50') {
        // Modified 50%: More than 50% fault = $0
        if (faultPercentage > 50) {
            faultReduction = 1;
        } else {
            faultReduction = yourFault;
        }
    } else if (state.comparativeType === 'modified-51') {
        // Modified 51%: 51% or more fault = $0
        if (faultPercentage >= 51) {
            faultReduction = 1;
        } else {
            faultReduction = yourFault;
        }
    } else {
        // Pure comparative: Reduce by fault percentage
        faultReduction = yourFault;
    }

    // Apply fault reduction
    const settlementLow = Math.round(totalLow * (1 - faultReduction));
    const settlementHigh = Math.round(totalHigh * (1 - faultReduction));

    // Calculate with attorney bonus
    const withAttorneyLow = Math.round(settlementLow * (1 + constants.attorneyBonus));
    const withAttorneyHigh = Math.round(settlementHigh * (1 + constants.attorneyBonus));

    // Calculate after attorney fees
    const afterAttorneyFeeLow = Math.round(withAttorneyLow * (1 - constants.attorneyFee));
    const afterAttorneyFeeHigh = Math.round(withAttorneyHigh * (1 - constants.attorneyFee));

    return {
        state: stateCode,
        stateName: state.name,
        faultSystem: state.faultSystem,
        medicalBills,
        lostWages,
        propertyDamage,
        economicDamages,
        painMultiplier: avgMultiplier,
        painSufferingLow,
        painSufferingHigh,
        faultPercentage,
        faultReduction: faultReduction * 100,
        settlementLow,
        settlementHigh,
        withAttorneyLow,
        withAttorneyHigh,
        afterAttorneyFeeLow,
        afterAttorneyFeeHigh,
        injurySeverity: multiplierData.label,
    };
}

// ============================================
// PAIN & SUFFERING CALCULATION FUNCTION
// ============================================
export interface PainSufferingResult {
    medicalBills: number;
    injuryType: string;
    multiplier: number;
    painSufferingAmount: number;
    recoveryWeeks: number;
    dailyRate: number;
}

export function calculatePainSuffering(
    medicalBills: number,
    injuryType: keyof typeof SETTLEMENT_CONSTANTS.injuryTypes
): PainSufferingResult {
    const injury = SETTLEMENT_CONSTANTS.injuryTypes[injuryType];
    const painSufferingAmount = Math.round(medicalBills * injury.multiplier);
    const dailyRate = Math.round(painSufferingAmount / (injury.weeks * 7));

    return {
        medicalBills,
        injuryType: injury.label,
        multiplier: injury.multiplier,
        painSufferingAmount,
        recoveryWeeks: injury.weeks,
        dailyRate,
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

export function getStatesList(): { code: string; name: string; faultSystem: FaultSystem; biSOL: number; negligence: string }[] {
    return Object.entries(STATE_FAULT_LAWS).map(([code, data]) => ({
        code,
        name: data.name,
        faultSystem: data.faultSystem,
        biSOL: data.biSOL,
        negligence: data.notes
    })).sort((a, b) => a.name.localeCompare(b.name));
}

export function getInjuryTypes(): { id: string; label: string; multiplier: number }[] {
    return Object.entries(SETTLEMENT_CONSTANTS.injuryTypes).map(([id, data]) => ({
        id,
        label: data.label,
        multiplier: data.multiplier,
    }));
}

export function getSeverityLevels(): { id: string; label: string; range: string }[] {
    return Object.entries(SETTLEMENT_CONSTANTS.painMultipliers).map(([id, data]) => ({
        id,
        label: data.label,
        range: `${data.min}x - ${data.max}x`,
    }));
}
