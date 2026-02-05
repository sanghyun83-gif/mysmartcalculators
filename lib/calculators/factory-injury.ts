// ============================================
// FACTORY INJURY CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/BLS/NIOSH
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Factory Injury Calculator",
    tagline: "Free Factory Accident Settlement Calculator",
    description: "Calculate factory injury lawsuit settlement value instantly. Free 2026 calculator for manufacturing accidents, machine injuries, and industrial workplace claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/factory-injury",
};

export const FACTORY_2026 = {
    injuryTypes: [
        { type: "Machine Amputation", avgSettlement: 1200000, minSettlement: 400000, maxSettlement: 5000000, description: "Loss of limb from machinery" },
        { type: "Crushing Injury", avgSettlement: 800000, minSettlement: 250000, maxSettlement: 3500000, description: "Press, roller, conveyor crush" },
        { type: "Burns (Chemical/Thermal)", avgSettlement: 600000, minSettlement: 150000, maxSettlement: 2500000, description: "Hot surfaces, chemicals, steam" },
        { type: "Fall from Height", avgSettlement: 700000, minSettlement: 200000, maxSettlement: 3000000, description: "Scaffolds, platforms, ladders" },
        { type: "Repetitive Strain Injury", avgSettlement: 250000, minSettlement: 75000, maxSettlement: 800000, description: "Carpal tunnel, back injuries" },
        { type: "Toxic Exposure", avgSettlement: 500000, minSettlement: 150000, maxSettlement: 2000000, description: "Chemical fumes, asbestos, dust" },
    ],
    oshaViolations: [
        { violation: "Machine Guarding (1910.212)", multiplier: 1.5, description: "Missing/inadequate machine guards" },
        { violation: "Lockout/Tagout (1910.147)", multiplier: 1.6, description: "Energy control violations" },
        { violation: "PPE Requirements (1910.132)", multiplier: 1.3, description: "Missing safety equipment" },
        { violation: "Fall Protection (1910.28)", multiplier: 1.4, description: "Inadequate fall prevention" },
        { violation: "Hazard Communication (1910.1200)", multiplier: 1.3, description: "Chemical labeling/training" },
        { violation: "No Violation Documented", multiplier: 1.0, description: "Standard liability" },
    ],
    statistics: {
        annualFactoryInjuries: 380000,
        annualDeaths: 5200,
        avgSettlement: 650000,
        amputationCases: 4500,
        oshaInspections: 32000,
    },
    citation: "Based on OSHA Manufacturing Injury Data 2026, BLS Occupational Injuries Statistics, NIOSH Factory Safety Reports",
} as const;

export const CALCULATORS = [
    { id: "factory-injury/factory-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate factory injury settlement", icon: Calculator, keywords: ["factory injury calculator"], featured: true },
    { id: "factory-injury/factory-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding factory injury claims", icon: FileText, keywords: ["factory injury guide"], featured: true },
] as const;

export interface FactoryResult { injuryType: string; oshaViolation: string; baseDamages: number; oshaBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateFactorySettlement(typeIndex: number, oshaIndex: number, medicalBills: number): FactoryResult {
    const injury = FACTORY_2026.injuryTypes[typeIndex];
    const osha = FACTORY_2026.oshaViolations[oshaIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const oshaBonus = baseDamages * (osha.multiplier - 1);
    const total = baseDamages + medicalCosts + oshaBonus;
    return { injuryType: injury.type, oshaViolation: osha.violation, baseDamages: Math.round(baseDamages), oshaBonus: Math.round(oshaBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
