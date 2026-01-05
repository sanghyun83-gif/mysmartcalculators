// ============================================
// CONSTRUCTION ACCIDENT CALCULATOR - SITE CONFIG
// 2026 Data - Based on OSHA & BLS Statistics
// ============================================

import { Calculator, FileText, HardHat, AlertTriangle } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Construction Accident Calculator",
    tagline: "Free Construction Injury Calculator",
    description: "Calculate construction accident settlement value instantly. Free 2026 calculator with OSHA violation data and injury severity levels.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/construction-accident",
};

// ============================================
// 2026 CONSTRUCTION ACCIDENT CONSTANTS
// ============================================
export const CONSTRUCTION_2026 = {
    // Injury types and settlements
    injuryTypes: [
        { type: "Fall from Height", avgSettlement: 500000, minSettlement: 100000, maxSettlement: 2000000, description: "Scaffolding, ladder, roof falls" },
        { type: "Struck by Object", avgSettlement: 300000, minSettlement: 75000, maxSettlement: 1000000, description: "Falling tools, materials, equipment" },
        { type: "Caught-In/Between", avgSettlement: 600000, minSettlement: 150000, maxSettlement: 2500000, description: "Machinery, trenches, collapsing structures" },
        { type: "Electrocution", avgSettlement: 750000, minSettlement: 200000, maxSettlement: 3000000, description: "Power lines, faulty wiring, equipment" },
        { type: "Equipment Malfunction", avgSettlement: 400000, minSettlement: 100000, maxSettlement: 1500000, description: "Crane, forklift, power tool failures" },
        { type: "Toxic Exposure", avgSettlement: 350000, minSettlement: 80000, maxSettlement: 1200000, description: "Asbestos, chemicals, silica dust" },
    ],

    // OSHA violation multipliers
    oshaViolations: [
        { type: "No Violation", multiplier: 1.0, description: "Accident without safety violations" },
        { type: "Other-than-Serious", multiplier: 1.3, description: "Violation unlikely to cause death" },
        { type: "Serious Violation", multiplier: 1.8, description: "Known hazard likely to cause harm" },
        { type: "Willful Violation", multiplier: 3.0, description: "Intentional disregard for safety" },
        { type: "Repeat Violation", multiplier: 2.5, description: "Previously cited for same hazard" },
    ],

    // OSHA Fatal Four (leading causes of death)
    fatalFour: [
        { cause: "Falls", percent: 33.5 },
        { cause: "Struck by Object", percent: 11.1 },
        { cause: "Electrocution", percent: 8.5 },
        { cause: "Caught-In/Between", percent: 5.5 },
    ],

    // Statistics
    statistics: {
        annualDeaths: 1069,
        annualInjuries: 175000,
        fatalityRate: 9.6, // per 100,000 workers
        avgDaysAway: 12,
        industryPercent: 21, // of all workplace fatalities
    },

    // Citation
    citation: "Based on OSHA (Occupational Safety and Health Administration) and BLS (Bureau of Labor Statistics) 2026 data",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "construction-accident/construction-calculator",
        name: "Construction Settlement Calculator",
        shortName: "Calculator",
        description: "Calculate construction accident settlement",
        longDescription: "Free construction injury calculator. Estimate your settlement based on injury type and OSHA violations.",
        icon: Calculator,
        category: "legal",
        keywords: ["construction accident calculator", "construction injury settlement", "OSHA violation"],
        featured: true,
    },
    {
        id: "construction-accident/construction-guide",
        name: "Construction Safety Guide",
        shortName: "Guide",
        description: "Understanding construction accidents",
        longDescription: "Learn about OSHA Fatal Four, construction hazards, and the legal process.",
        icon: FileText,
        category: "legal",
        keywords: ["construction safety guide", "OSHA regulations", "construction injury"],
        featured: true,
    },
] as const;

// ============================================
// SETTLEMENT CALCULATION
// ============================================
export interface ConstructionResult {
    injuryType: string;
    oshaViolation: string;
    baseTreatmentCost: number;
    futureMedical: number;
    lostWages: number;
    painSuffering: number;
    totalLow: number;
    totalMid: number;
    totalHigh: number;
}

export function calculateConstructionSettlement(
    injuryIndex: number,
    oshaIndex: number,
    age: number,
    annualIncome: number,
    medicalBills: number
): ConstructionResult {
    const injury = CONSTRUCTION_2026.injuryTypes[injuryIndex];
    const osha = CONSTRUCTION_2026.oshaViolations[oshaIndex];

    const baseTreatmentCost = medicalBills * 2;
    const futureMedical = baseTreatmentCost * 1.5;
    const remainingYears = Math.max(0, 65 - age);
    const lostWages = annualIncome * remainingYears * 0.4;
    const severityMultiplier = 2 + injuryIndex * 0.8;
    const painSuffering = medicalBills * severityMultiplier;

    const baseTotal = (baseTreatmentCost + futureMedical + lostWages + painSuffering) * osha.multiplier;
    const totalMid = baseTotal;
    const totalLow = totalMid * 0.6;
    const totalHigh = totalMid * 1.6;

    return {
        injuryType: injury.type,
        oshaViolation: osha.type,
        baseTreatmentCost: Math.round(baseTreatmentCost),
        futureMedical: Math.round(futureMedical),
        lostWages: Math.round(lostWages),
        painSuffering: Math.round(painSuffering),
        totalLow: Math.round(totalLow),
        totalMid: Math.round(totalMid),
        totalHigh: Math.round(totalHigh),
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}
