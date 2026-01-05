// ============================================
// GAS EXPLOSION CALCULATOR - Standard Version
// 2026 Data - Based on NFPA/PHMSA/NTSB
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Gas Explosion Calculator",
    tagline: "Free Gas Explosion Settlement Calculator",
    description: "Calculate gas explosion lawsuit settlement value instantly. Free 2026 calculator for natural gas leaks, propane explosions, and pipeline accidents.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/gas-explosion",
};

export const GAS_2026 = {
    explosionTypes: [
        { type: "Natural Gas Leak (Indoor)", avgSettlement: 1100000, minSettlement: 300000, maxSettlement: 6000000, description: "Home/building gas leak explosion" },
        { type: "Pipeline Explosion", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 10000000, description: "Transmission line rupture" },
        { type: "Propane Tank Explosion", avgSettlement: 850000, minSettlement: 200000, maxSettlement: 4000000, description: "LP gas tank failure" },
        { type: "Gas Appliance Malfunction", avgSettlement: 750000, minSettlement: 180000, maxSettlement: 3500000, description: "Water heater, furnace, stove" },
        { type: "Gas Station Explosion", avgSettlement: 950000, minSettlement: 250000, maxSettlement: 5000000, description: "Fuel pump/storage tank" },
        { type: "Industrial Gas Explosion", avgSettlement: 1300000, minSettlement: 400000, maxSettlement: 7000000, description: "Refinery, chemical plant gas" },
    ],
    liableParties: [
        { party: "Gas Utility Company", description: "Maintenance failures, leak detection" },
        { party: "Property Owner/Landlord", description: "Ignored gas smell complaints" },
        { party: "Appliance Manufacturer", description: "Defective gas appliances" },
        { party: "Pipeline Operator", description: "Pipeline maintenance failure" },
        { party: "Contractor/Plumber", description: "Improper gas line installation" },
        { party: "Propane Supplier", description: "Tank maintenance, overfilling" },
    ],
    statistics: {
        annualGasExplosions: 2800,
        annualDeaths: 320,
        annualInjuries: 2100,
        avgSettlement: 980000,
        pipelineIncidents: 650,
    },
    citation: "Based on NFPA Gas Explosion Statistics 2026, PHMSA Pipeline Incident Reports, NTSB Investigation Data",
} as const;

export const CALCULATORS = [
    { id: "gas-explosion/gas-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate gas explosion settlement", icon: Calculator, keywords: ["gas explosion calculator"], featured: true },
    { id: "gas-explosion/gas-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding gas explosion claims", icon: FileText, keywords: ["gas explosion guide"], featured: true },
] as const;

export interface GasResult { explosionType: string; baseDamages: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateGasSettlement(typeIndex: number, medicalBills: number): GasResult {
    const explosion = GAS_2026.explosionTypes[typeIndex];
    const baseDamages = explosion.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const total = baseDamages + medicalCosts;
    return { explosionType: explosion.type, baseDamages: Math.round(baseDamages), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
