// ============================================
// WHIPLASH CALCULATOR - SITE CONFIG
// 2026 Data - Neck Injury Settlements
// ============================================

import { Calculator, Stethoscope, Shield, Activity } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Whiplash Settlement Calculator",
    tagline: "Free Neck Injury Estimator",
    description: "Calculate your whiplash settlement value. Free 2026 calculator for neck injuries, cervical strain, and car accident soft tissue claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/whiplash",
};

// ============================================
// 2026 WHIPLASH CONSTANTS
// Sources: Insurance industry data, MIST claims, Soft tissue injury databases
// ============================================
export const WHIPLASH_CONSTANTS_2026 = {
    // Pain & Suffering Multipliers by Whiplash Grade
    multipliers: {
        grade0: { min: 1.0, max: 1.5, avg: 1.25 },  // No complaint, no signs
        grade1: { min: 1.5, max: 2.5, avg: 2 },     // Neck pain, stiffness
        grade2: { min: 2.5, max: 4, avg: 3 },       // Pain + reduced motion
        grade3: { min: 4, max: 6, avg: 5 },         // Pain + neurological signs
        grade4: { min: 6, max: 10, avg: 8 },        // Fracture or dislocation
    },

    // Average Settlement by Grade (2026)
    settlementRanges: {
        grade1: { min: 2500, max: 10000 },
        grade2: { min: 10000, max: 30000 },
        grade3: { min: 30000, max: 100000 },
        grade4: { min: 100000, max: 500000 },
    },

    // Common Treatment Costs
    treatmentCosts: {
        erVisit: 1500,
        xray: 300,
        mri: 2000,
        physicalTherapy: 150, // per session
        chiropractor: 75,     // per session
        painManagement: 500,  // injection
        neckBrace: 100,
    },

    // Recovery Time by Grade
    recoveryTime: {
        grade1: "2-4 weeks",
        grade2: "1-3 months",
        grade3: "3-6 months",
        grade4: "6-12+ months",
    },

    // Attorney Fees (Contingency)
    attorneyFees: {
        preSettlement: 0.33,
        postTrial: 0.40,
    },

    // Statistics
    statistics: {
        avgSettlement: 15000,
        avgMedicalCost: 8000,
        annualCases: 3000000,  // 3 million whiplash cases per year
        carAccidentPercent: 85, // 85% from car accidents
    },
} as const;

// ============================================
// WHIPLASH GRADES (Quebec Task Force Classification)
// ============================================
export const WHIPLASH_GRADES = {
    grade1: {
        name: "Grade 1 - Minor Whiplash",
        symptoms: "Neck pain, stiffness, or tenderness only",
        signs: "No physical signs",
        avgSettlement: { min: 2500, max: 10000 },
        recovery: "2-4 weeks",
        treatment: "Rest, OTC pain relief, gentle movement",
    },
    grade2: {
        name: "Grade 2 - Moderate Whiplash",
        symptoms: "Neck pain with reduced range of motion",
        signs: "Point tenderness, muscle spasm",
        avgSettlement: { min: 10000, max: 30000 },
        recovery: "1-3 months",
        treatment: "Physical therapy, prescription medication, possible imaging",
    },
    grade3: {
        name: "Grade 3 - Severe Whiplash",
        symptoms: "Neck pain with neurological symptoms",
        signs: "Numbness, weakness, reflex changes",
        avgSettlement: { min: 30000, max: 100000 },
        recovery: "3-6 months",
        treatment: "Specialist care, MRI, injections, extended therapy",
    },
    grade4: {
        name: "Grade 4 - Fracture/Dislocation",
        symptoms: "Neck pain with fracture or dislocation",
        signs: "Confirmed on X-ray/CT",
        avgSettlement: { min: 100000, max: 500000 },
        recovery: "6-12+ months",
        treatment: "Surgery, halo brace, long-term rehabilitation",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "whiplash/settlement",
        name: "Whiplash Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate your neck injury settlement value",
        longDescription: "Free 2026 whiplash settlement calculator. Estimate compensation based on injury grade, treatment, and recovery time.",
        icon: Calculator,
        category: "legal",
        keywords: ["whiplash calculator", "neck injury settlement", "car accident whiplash"],
        featured: true,
    },
    {
        id: "whiplash/injury-grades",
        name: "Whiplash Grades Guide",
        shortName: "Injury Grades",
        description: "View settlements by whiplash grade (1-4)",
        longDescription: "Understand whiplash grades and see average settlement values for each severity level.",
        icon: Stethoscope,
        category: "legal",
        keywords: ["whiplash grades", "neck injury types", "whiplash severity"],
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
    faultReduction: number;
    attorneyFees: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export function calculateWhiplashSettlement(
    medicalExpenses: number,
    lostWages: number,
    faultPercent: number,
    grade: 'grade1' | 'grade2' | 'grade3' | 'grade4',
    hasAttorney: boolean = true
): SettlementResult {
    const multipliers = WHIPLASH_CONSTANTS_2026.multipliers[grade];

    // Economic damages
    const economicDamages = medicalExpenses + lostWages;

    // Pain & suffering
    const painSufferingMultiplier = multipliers.avg;
    const painSufferingAmount = Math.round(medicalExpenses * painSufferingMultiplier);

    // Total before adjustments
    const subtotal = economicDamages + painSufferingAmount;

    // Comparative fault reduction
    const faultReduction = Math.round(subtotal * (faultPercent / 100));
    const afterFault = subtotal - faultReduction;

    // Attorney fees
    const attorneyFees = hasAttorney
        ? Math.round(afterFault * WHIPLASH_CONSTANTS_2026.attorneyFees.preSettlement)
        : 0;

    const netSettlement = afterFault - attorneyFees;

    // Calculate range
    const minTotal = (economicDamages + (medicalExpenses * multipliers.min)) * (1 - faultPercent / 100);
    const maxTotal = (economicDamages + (medicalExpenses * multipliers.max)) * (1 - faultPercent / 100);

    return {
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

export function getGradeLabel(grade: string): string {
    const labels: Record<string, string> = {
        grade1: "Grade 1 - Minor",
        grade2: "Grade 2 - Moderate",
        grade3: "Grade 3 - Severe",
        grade4: "Grade 4 - Fracture",
    };
    return labels[grade] || grade;
}

export function getGradeColor(grade: string): string {
    const colors: Record<string, string> = {
        grade1: "text-green-400",
        grade2: "text-yellow-400",
        grade3: "text-orange-400",
        grade4: "text-red-400",
    };
    return colors[grade] || "text-slate-400";
}
