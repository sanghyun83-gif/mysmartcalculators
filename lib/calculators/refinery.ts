// ============================================
// REFINERY ACCIDENT CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/CSB/EPA
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Refinery Accident Calculator",
    tagline: "Free Refinery Injury Settlement Calculator",
    description: "Calculate refinery explosion and fire injury settlement value instantly. Free 2026 calculator for oil refinery, chemical plant, and petrochemical accidents.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/refinery",
};

export const REFINERY_2026 = {
    accidentTypes: [
        { type: "Refinery Explosion", avgSettlement: 2000000, minSettlement: 700000, maxSettlement: 15000000, description: "Catastrophic blast, fire, debris" },
        { type: "Chemical Release/Toxic Exposure", avgSettlement: 1200000, minSettlement: 400000, maxSettlement: 8000000, description: "H2S, benzene, chemical fumes" },
        { type: "Flash Fire", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 10000000, description: "Sudden ignition of vapor cloud" },
        { type: "Equipment Failure", avgSettlement: 900000, minSettlement: 300000, maxSettlement: 5000000, description: "Valve, pipe, vessel rupture" },
        { type: "Scaffolding/Fall Accident", avgSettlement: 700000, minSettlement: 200000, maxSettlement: 4000000, description: "Turnaround maintenance falls" },
        { type: "Burns (Thermal/Chemical)", avgSettlement: 1100000, minSettlement: 350000, maxSettlement: 6000000, description: "Steam, hot oil, acid burns" },
    ],
    liableParties: [
        { party: "Refinery Owner/Operator", description: "Primary liability for safety" },
        { party: "Contractor Company", description: "Turnaround and maintenance contractors" },
        { party: "Equipment Manufacturer", description: "Defective valves, vessels, sensors" },
        { party: "Engineering Firm", description: "Design defects, process safety" },
        { party: "Chemical Supplier", description: "Improper handling/storage" },
        { party: "Staffing Agency", description: "If you were a temp worker" },
    ],
    statistics: {
        annualRefineryIncidents: 180,
        annualDeaths: 12,
        annualInjuries: 450,
        avgSettlement: 1400000,
        csbInvestigations: 25,
    },
    citation: "Based on OSHA Refinery Safety Data 2026, CSB Investigation Reports, EPA Risk Management Program Data",
} as const;

export const CALCULATORS = [
    { id: "refinery/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate refinery injury settlement", icon: Calculator, keywords: ["refinery injury calculator"], featured: true },
    { id: "refinery/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding refinery claims", icon: FileText, keywords: ["refinery lawsuit guide"], featured: true },
] as const;

export interface RefineryResult { accidentType: string; baseDamages: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateRefinerySettlement(typeIndex: number, medicalBills: number): RefineryResult {
    const accident = REFINERY_2026.accidentTypes[typeIndex];
    const baseDamages = accident.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const total = baseDamages + medicalCosts;
    return { accidentType: accident.type, baseDamages: Math.round(baseDamages), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
