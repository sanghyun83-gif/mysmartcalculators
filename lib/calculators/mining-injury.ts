// ============================================
// MINING INJURY CALCULATOR - Advanced Version
// 2026 Data - Based on MSHA/BLS/CDC NIOSH
// ============================================

import { Calculator, FileText, AlertTriangle, Shield } from 'lucide-react';

export const SITE = {
    name: "Mining Injury Calculator",
    tagline: "Free Mining Accident Settlement Calculator",
    description: "Calculate mining injury lawsuit settlement value instantly. Free 2026 calculator for coal mine accidents, cave-ins, explosions, and black lung claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/mining-injury",
};

export const MINING_2026 = {
    injuryTypes: [
        { type: "Cave-In/Roof Collapse", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 8000000, description: "Roof falls, ground collapses" },
        { type: "Explosion/Fire", avgSettlement: 1800000, minSettlement: 600000, maxSettlement: 10000000, description: "Methane explosions, coal dust fires" },
        { type: "Equipment Accident", avgSettlement: 950000, minSettlement: 300000, maxSettlement: 5000000, description: "Conveyor, hauler, drill injuries" },
        { type: "Black Lung Disease", avgSettlement: 750000, minSettlement: 250000, maxSettlement: 3000000, description: "Coal workers' pneumoconiosis" },
        { type: "Toxic Exposure", avgSettlement: 850000, minSettlement: 280000, maxSettlement: 4000000, description: "Silica, asbestos, chemical fumes" },
        { type: "Electrocution", avgSettlement: 1200000, minSettlement: 400000, maxSettlement: 6000000, description: "High voltage equipment contact" },
    ],
    mshaViolations: [
        { violation: "Roof Control (30 CFR 75.200)", multiplier: 1.6, description: "Inadequate roof support/bolting" },
        { violation: "Ventilation (30 CFR 75.300)", multiplier: 1.5, description: "Methane accumulation, dust control" },
        { violation: "Electrical Standards", multiplier: 1.4, description: "Unguarded equipment, improper wiring" },
        { violation: "Training Requirements", multiplier: 1.3, description: "Untrained workers, no safety training" },
        { violation: "Equipment Safety", multiplier: 1.4, description: "Defective brakes, guards, warning systems" },
        { violation: "No Violation Documented", multiplier: 1.0, description: "Standard liability" },
    ],
    liableParties: [
        "Mining Company/Operator",
        "Equipment Manufacturer",
        "Contractor Companies",
        "Property Owners",
        "Safety Equipment Suppliers",
        "Maintenance Companies",
    ],
    statistics: {
        annualMiningDeaths: 28,
        annualMiningInjuries: 4200,
        blackLungCases: 2500,
        avgSettlement: 1100000,
        mshaInspections: 42000,
    },
    citation: "Based on MSHA Mine Safety Data 2026, CDC NIOSH Mining Surveillance Reports, BLS Occupational Injury Statistics",
} as const;

export const CALCULATORS = [
    { id: "mining-injury/mining-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate mining injury settlement", icon: Calculator, keywords: ["mining injury calculator"], featured: true },
    { id: "mining-injury/mining-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding mining injury claims", icon: FileText, keywords: ["mining lawsuit guide"], featured: true },
    { id: "mining-injury/injury-types", name: "Injury Types", shortName: "Injuries", description: "Cave-ins, explosions, black lung", icon: AlertTriangle, keywords: ["mining injury types"], featured: true },
    { id: "mining-injury/mine-safety", name: "Mine Safety", shortName: "Safety", description: "MSHA violations and settlements", icon: Shield, keywords: ["mine safety violations"], featured: true },
] as const;

export interface MiningResult { injuryType: string; mshaViolation: string; baseDamages: number; mshaBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateMiningSettlement(typeIndex: number, mshaIndex: number, medicalBills: number): MiningResult {
    const injury = MINING_2026.injuryTypes[typeIndex];
    const msha = MINING_2026.mshaViolations[mshaIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const mshaBonus = baseDamages * (msha.multiplier - 1);
    const total = baseDamages + medicalCosts + mshaBonus;
    return { injuryType: injury.type, mshaViolation: msha.violation, baseDamages: Math.round(baseDamages), mshaBonus: Math.round(mshaBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
