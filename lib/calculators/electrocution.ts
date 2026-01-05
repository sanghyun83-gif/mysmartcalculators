// ============================================
// ELECTROCUTION INJURY CALCULATOR - SITE CONFIG
// 2026 Data - Based on OSHA & ESFI Statistics
// ============================================

import { Calculator, FileText, Zap, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Electrocution Injury Calculator",
    tagline: "Free Electrocution Settlement Calculator",
    description: "Calculate electrocution injury settlement value instantly. Free 2026 calculator with voltage levels, injury severity, and OSHA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/electrocution",
};

export const ELECTROCUTION_2026 = {
    voltageLevels: [
        { level: "Low Voltage (<50V)", multiplier: 1.0, description: "Minor shocks, rarely fatal" },
        { level: "Medium Voltage (50-600V)", multiplier: 1.5, description: "Common household/industrial, serious injuries" },
        { level: "High Voltage (600V-15kV)", multiplier: 2.5, description: "Industrial/utility lines, often fatal" },
        { level: "Extra High Voltage (>15kV)", multiplier: 4.0, description: "Power transmission, catastrophic" },
    ],
    injuryTypes: [
        { type: "Minor Burns/Shock", avgSettlement: 75000, minSettlement: 20000, maxSettlement: 200000, description: "Surface burns, temporary effects" },
        { type: "Severe Burns", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1000000, description: "Deep burns, tissue damage" },
        { type: "Cardiac Injuries", avgSettlement: 500000, minSettlement: 200000, maxSettlement: 1500000, description: "Heart arrhythmia, cardiac arrest" },
        { type: "Neurological Damage", avgSettlement: 750000, minSettlement: 300000, maxSettlement: 2500000, description: "Nerve damage, paralysis" },
        { type: "Wrongful Death", avgSettlement: 2000000, minSettlement: 750000, maxSettlement: 10000000, description: "Fatal electrocution" },
    ],
    liabilityTypes: [
        { type: "Workplace (Employer)", description: "OSHA violations, inadequate training" },
        { type: "Product Defect", description: "Defective appliances, wiring products" },
        { type: "Utility Company", description: "Downed power lines, negligent maintenance" },
        { type: "Property Owner", description: "Faulty wiring, code violations" },
    ],
    statistics: {
        annualDeaths: 1000,
        annualInjuries: 30000,
        workplacePercent: 60,
        constructionPercent: 52,
        utilitiesPercent: 18,
        homePercent: 25,
    },
    citation: "Based on OSHA (Occupational Safety and Health Administration) and ESFI (Electrical Safety Foundation International) 2026 data",
} as const;

export const CALCULATORS = [
    { id: "electrocution/calculator", name: "Electrocution Settlement Calculator", shortName: "Calculator", description: "Calculate electrocution injury settlement", longDescription: "Free electrocution calculator with voltage levels and injury types.", icon: Calculator, category: "legal", keywords: ["electrocution calculator", "electric shock settlement"], featured: true },
    { id: "electrocution/guide", name: "Electrical Injury Guide", shortName: "Guide", description: "Understanding electrocution claims", longDescription: "Learn about voltage levels, liability types, and OSHA regulations.", icon: FileText, category: "legal", keywords: ["electrocution guide", "electrical injury liability"], featured: true },
] as const;

export interface ElectrocutionResult { voltageLevel: string; injuryType: string; baseDamages: number; voltageMultiplier: number; medicalCosts: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateElectrocutionSettlement(voltageIndex: number, injuryIndex: number, medicalBills: number): ElectrocutionResult {
    const voltage = ELECTROCUTION_2026.voltageLevels[voltageIndex];
    const injury = ELECTROCUTION_2026.injuryTypes[injuryIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const painSuffering = baseDamages * 0.6;
    const voltageBonus = baseDamages * (voltage.multiplier - 1);
    const baseTotal = (baseDamages + medicalCosts + painSuffering + voltageBonus);
    return { voltageLevel: voltage.level, injuryType: injury.type, baseDamages: Math.round(baseDamages), voltageMultiplier: voltage.multiplier, medicalCosts: Math.round(medicalCosts), painSuffering: Math.round(painSuffering), totalLow: Math.round(baseTotal * 0.5), totalMid: Math.round(baseTotal), totalHigh: Math.round(baseTotal * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
