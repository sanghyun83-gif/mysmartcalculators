// ============================================
// WELDING INJURY CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/AWS/BLS
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Welding Injury Calculator",
    tagline: "Free Welding Accident Settlement Calculator",
    description: "Calculate welding injury settlement value instantly. Free 2026 calculator for welder burns, eye injuries, toxic fume exposure, and electric shock.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/welding",
};

export const WELDING_2026 = {
    injuryTypes: [
        { type: "Arc Flash/Burn", avgSettlement: 850000, minSettlement: 250000, maxSettlement: 5000000, description: "Severe burns from welding arc" },
        { type: "Welder's Flash (Eye)", avgSettlement: 450000, minSettlement: 100000, maxSettlement: 2500000, description: "UV radiation eye damage" },
        { type: "Metal Fume Fever/Lung", avgSettlement: 650000, minSettlement: 200000, maxSettlement: 3500000, description: "Toxic fume inhalation" },
        { type: "Electric Shock", avgSettlement: 950000, minSettlement: 300000, maxSettlement: 5500000, description: "Electrocution from equipment" },
        { type: "Explosion/Fire", avgSettlement: 1200000, minSettlement: 400000, maxSettlement: 7000000, description: "Gas cylinder explosion" },
        { type: "Crush/Struck By", avgSettlement: 750000, minSettlement: 220000, maxSettlement: 4000000, description: "Heavy object, falling debris" },
    ],
    oshaViolations: [
        { violation: "No Eye Protection (1910.252)", multiplier: 1.5, description: "Missing welding helmet/goggles" },
        { violation: "Inadequate Ventilation", multiplier: 1.4, description: "Fume exposure without exhaust" },
        { violation: "Fire Watch Failure", multiplier: 1.4, description: "No fire watch during hot work" },
        { violation: "Defective Equipment", multiplier: 1.3, description: "Damaged cables, holders" },
        { violation: "No Training", multiplier: 1.3, description: "Untrained workers" },
        { violation: "No Violation Documented", multiplier: 1.0, description: "Standard liability" },
    ],
    statistics: {
        annualWeldingInjuries: 2800,
        annualDeaths: 45,
        eyeInjuryPercent: 25,
        avgSettlement: 720000,
        fumeExposure: 560000,
    },
    citation: "Based on OSHA Welding Standards 1910.252, AWS Safety Guidelines 2026, BLS Occupational Injury Data",
} as const;

export const CALCULATORS = [
    { id: "welding/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate welding injury settlement", icon: Calculator, keywords: ["welding injury calculator"], featured: true },
    { id: "welding/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding welding claims", icon: FileText, keywords: ["welding lawsuit guide"], featured: true },
] as const;

export interface WeldingResult { injuryType: string; baseDamages: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateWeldingSettlement(typeIndex: number, medicalBills: number): WeldingResult {
    const injury = WELDING_2026.injuryTypes[typeIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const total = baseDamages + medicalCosts;
    return { injuryType: injury.type, baseDamages: Math.round(baseDamages), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
