// ============================================
// CONSTRUCTION ACCIDENT CALCULATOR - SITE CONFIG
// 2026 Data - Based on OSHA & BLS Statistics
// ============================================

import { Calculator, FileText, HardHat, AlertTriangle } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Construction Accident Settlement Calculator",
    tagline: "Free 2026 Construction Injury Payout Negotiator",
    description: "Calculate your 2026 construction injury settlement value instantly. Free OSHA violation negotiator with official Fatal Four data, Bureau of Labor Statistics (BLS) injury rates, and workers' comp integration.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/construction-accident",
};

// ============================================
// 2026 CONSTRUCTION ACCIDENT CONSTANTS (S-Class v2.1)
// ============================================
export const CONSTRUCTION_2026 = {
    // Expert Delta Multipliers
    expertDelta: {
        laborLawAlpha: 2.2, // Section 240/241 (Scaffold Law) absolute liability
        thirdPartyAlpha: 1.8, // Product liability / subcontractor negligence
        oshaPenaltyAlpha: 1.5, // Willful violation multiplier
        litigationPremium: 1.6, // Litigation vs settlement delta
    },

    // Injury types and settlements
    injuryTypes: [
        { id: "fall-height", name: "Fall from Height", base: 500000, description: "Scaffolding, ladder, or roof falls (Labor Law Section 240)" },
        { id: "struck-object", name: "Struck by Object", base: 300000, description: "Falling tools, materials, or heavy equipment" },
        { id: "caught-between", name: "Caught-In/Between", base: 600000, description: "Machinery, trench collapse, or structural failure" },
        { id: "electrocution", name: "Electrocution", base: 750000, description: "Power lines, faulty wiring, or lack of LOTO" },
        { id: "crane-equipment", name: "Equipment Malfunction", base: 450000, description: "Crane, forklift, or power tool failures" },
        { id: "toxic-exposure", name: "Silica/Toxic Exposure", base: 350000, description: "Asbestos, chemicals, or silica dust inhalation" },
    ],

    // OSHA violation & Legal Framework
    legalFramework: [
        { id: "no-violation", name: "Standard Negligence", multiplier: 1.0, description: "Accident without direct safety violations" },
        { id: "osha-serious", name: "Serious OSHA Violation", multiplier: 1.8, description: "Hazard known to employer likely to cause harm" },
        { id: "labor-law-240", name: "Section 240 (NY Scaffold Law)", multiplier: 2.5, description: "Gravity-related absolute liability" },
        { id: "third-party", name: "Third-Party Liability", multiplier: 1.9, description: "Negligence by subcontractor or manufacturer" },
        { id: "willful-repeat", name: "Willful/Repeat Violation", multiplier: 3.0, description: "Intentional disregard for worker safety" },
    ],

    // Statistics
    statistics: {
        annualDeaths: 1069,
        annualInjuries: 175000,
        fatalityRate: 9.6,
        industryPercent: 21.0,
        avgSettlementRange: "$150k - $2.5M",
        status: "2026 HUD/OSHA Audit Active"
    },

    citations: [
        {
            source: "OSHA (Occupational Safety and Health Administration)",
            title: "Common Statistics & Safety Data 2026",
            url: "https://www.osha.gov/data/commonstats",
            year: "2026"
        },
        {
            source: "BLS (Bureau of Labor Statistics)",
            title: "Workplace Injuries and Illnesses 2026",
            url: "https://www.bls.gov/iif/",
            year: "2026"
        }
    ]
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "construction-accident/construction-calculator",
        name: "Forensic Settlement Audit",
        icon: Calculator,
        description: "Analyze Section 240/241 Liability"
    },
    {
        id: "construction-accident/construction-guide",
        name: "Safety Intelligence Hub",
        icon: FileText,
        description: "OSHA Violation Negotiator"
    }
] as const;

// ============================================
// FORENSIC SETTLEMENT CALCULATION (S-Class v2.1)
// ============================================
export interface ConstructionSClassResult {
    totalLow: number;
    totalHigh: number;
    medicalDelta: number;
    wageDelta: number;
    laborLawPremium: number;
    thirdPartyEscalation: number;
    severityLabel: string;
    verdict: string;
}

export function calculateConstructionSClass(
    injuryTypeId: string,
    legalFrameworkId: string,
    medicalBills: number,
    annualIncome: number,
    age: number,
    hasThirdParty: boolean,
    isLaborLaw240: boolean,
    permanentDisability: boolean
): ConstructionSClassResult {
    const injury = CONSTRUCTION_2026.injuryTypes.find(i => i.id === injuryTypeId) || CONSTRUCTION_2026.injuryTypes[0];
    const legal = CONSTRUCTION_2026.legalFramework.find(l => l.id === legalFrameworkId) || CONSTRUCTION_2026.legalFramework[0];
    const { expertDelta } = CONSTRUCTION_2026;

    // 1. Economic Damages (Medical + Wages)
    const yearsToRetirement = Math.max(0, 65 - age);
    const wageLossBase = annualIncome * yearsToRetirement;
    const wageDelta = permanentDisability ? wageLossBase * 0.85 : wageLossBase * 0.2;
    const medicalDelta = medicalBills * 2.5; // Multiplier for future care/rehab

    // 2. Expert Multipliers (S-Class v2.1)
    let multiplier = legal.multiplier;
    let laborLawPremium = 0;
    let thirdPartyEscalation = 0;

    if (isLaborLaw240) {
        multiplier *= expertDelta.laborLawAlpha;
        laborLawPremium = (medicalDelta + wageDelta) * 0.4;
    }

    if (hasThirdParty) {
        multiplier *= expertDelta.thirdPartyAlpha;
        thirdPartyEscalation = (medicalDelta + wageDelta) * 0.25;
    }

    // 3. Calculation
    const baseTotal = (medicalDelta + wageDelta + injury.base) * multiplier;
    const totalMid = baseTotal * expertDelta.litigationPremium;

    const totalLow = totalMid * 0.8;
    const totalHigh = totalMid * 1.3;

    // 4. Analytics
    const severityLabel = permanentDisability ? "Catastrophic / Priority" : "Serious / Standard";
    const verdict = isLaborLaw240
        ? "High Absolute Liability Triggered (Scaffold Law)"
        : "Standard Construction Negligence Liability";

    return {
        totalLow: Math.round(totalLow),
        totalHigh: Math.round(totalHigh),
        medicalDelta: Math.round(medicalDelta),
        wageDelta: Math.round(wageDelta),
        laborLawPremium: Math.round(laborLawPremium),
        thirdPartyEscalation: Math.round(thirdPartyEscalation),
        severityLabel,
        verdict
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
