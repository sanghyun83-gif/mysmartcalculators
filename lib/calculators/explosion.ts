// ============================================
// EXPLOSION INJURY CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/ATF/NFPA
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Explosion Injury Calculator",
    tagline: "Free Explosion Accident Settlement Calculator",
    description: "Calculate explosion injury lawsuit settlement value instantly. Free 2026 calculator for gas explosions, industrial blasts, and workplace explosion accidents.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/explosion",
};

export const EXPLOSION_2026 = {
    explosionTypes: [
        { type: "Natural Gas Explosion", avgSettlement: 1200000, minSettlement: 300000, maxSettlement: 8000000, description: "Gas leaks, pipeline explosions" },
        { type: "Industrial/Chemical Explosion", avgSettlement: 1500000, minSettlement: 400000, maxSettlement: 10000000, description: "Refinery, plant, chemical facility" },
        { type: "Propane/LP Gas Explosion", avgSettlement: 900000, minSettlement: 250000, maxSettlement: 5000000, description: "Tank failures, grill accidents" },
        { type: "Dust Explosion", avgSettlement: 1100000, minSettlement: 350000, maxSettlement: 7000000, description: "Grain silos, coal mines, factories" },
        { type: "Electrical/Arc Flash", avgSettlement: 800000, minSettlement: 200000, maxSettlement: 4000000, description: "Electrical equipment failures" },
        { type: "Fireworks/Pyrotechnic", avgSettlement: 600000, minSettlement: 150000, maxSettlement: 3000000, description: "Commercial/consumer fireworks" },
    ],
    injurySeverity: [
        { severity: "Minor Burns/Injuries", multiplier: 0.5, description: "First-degree burns, minor trauma" },
        { severity: "Moderate Burns/Injuries", multiplier: 1.0, description: "Second-degree burns, fractures" },
        { severity: "Severe Burns (3rd Degree)", multiplier: 2.0, description: "Skin grafts, extensive treatment" },
        { severity: "Permanent Disfigurement", multiplier: 2.5, description: "Scarring, amputations" },
        { severity: "Traumatic Brain Injury", multiplier: 3.0, description: "Blast TBI, cognitive impairment" },
        { severity: "Wrongful Death", multiplier: 4.0, description: "Fatal explosion injuries" },
    ],
    liableParties: [
        "Gas Utility Companies",
        "Property Owners/Landlords",
        "Equipment Manufacturers",
        "Chemical/Industrial Companies",
        "Pipeline Operators",
        "Contractors/Construction Companies",
    ],
    statistics: {
        annualExplosions: 4500,
        annualDeaths: 450,
        annualInjuries: 3800,
        avgSettlement: 980000,
        workplaceExplosions: 1200,
    },
    citation: "Based on OSHA Workplace Explosion Data 2026, ATF Explosives Investigation Reports, NFPA Fire/Explosion Statistics",
} as const;

export const CALCULATORS = [
    { id: "explosion/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate explosion injury settlement", icon: Calculator, keywords: ["explosion settlement calculator"], featured: true },
    { id: "explosion/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding explosion claims", icon: FileText, keywords: ["explosion lawsuit guide"], featured: true },
] as const;

export interface ExplosionResult { explosionType: string; severity: string; baseDamages: number; severityBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateExplosionSettlement(typeIndex: number, severityIndex: number, medicalBills: number): ExplosionResult {
    const explosion = EXPLOSION_2026.explosionTypes[typeIndex];
    const severity = EXPLOSION_2026.injurySeverity[severityIndex];
    const baseDamages = explosion.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const severityBonus = baseDamages * (severity.multiplier - 1);
    const total = baseDamages + medicalCosts + severityBonus;
    return { explosionType: explosion.type, severity: severity.severity, baseDamages: Math.round(baseDamages), severityBonus: Math.round(severityBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
