// ============================================
// CHEMICAL BURN CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/CDC/ABA
// ============================================

import { Calculator, FileText, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Chemical Burn Calculator",
    tagline: "Free Chemical Burn Settlement Calculator",
    description: "Calculate chemical burn lawsuit settlement value instantly. Free 2026 calculator for workplace chemical burns, acid burns, and industrial exposure claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/chemical-burn",
};

export const CHEMBURN_2026 = {
    burnTypes: [
        { type: "Acid Burns (Sulfuric, Hydrochloric)", avgSettlement: 450000, minSettlement: 100000, maxSettlement: 2000000, description: "Strong acid contact burns" },
        { type: "Alkali/Caustic Burns (Lye, Ammonia)", avgSettlement: 500000, minSettlement: 120000, maxSettlement: 2500000, description: "Alkaline chemical burns - deeper tissue damage" },
        { type: "Solvent Burns (Gasoline, Acetone)", avgSettlement: 350000, minSettlement: 80000, maxSettlement: 1500000, description: "Organic solvent burns" },
        { type: "Oxidizer Burns (Bleach, Peroxide)", avgSettlement: 300000, minSettlement: 70000, maxSettlement: 1200000, description: "Oxidizing agent burns" },
        { type: "Metal/Cement Burns", avgSettlement: 400000, minSettlement: 90000, maxSettlement: 1800000, description: "Wet cement, metal compounds" },
        { type: "Mixed Chemical Burns", avgSettlement: 550000, minSettlement: 150000, maxSettlement: 3000000, description: "Multiple chemical exposure" },
    ],
    burnSeverity: [
        { severity: "First Degree (Superficial)", multiplier: 0.5, description: "Epidermis only, redness" },
        { severity: "Second Degree (Partial)", multiplier: 1.0, description: "Dermis involved, blistering" },
        { severity: "Third Degree (Full Thickness)", multiplier: 2.0, description: "All skin layers, grafting needed" },
        { severity: "Fourth Degree (Deep)", multiplier: 3.0, description: "Muscle/bone involvement" },
    ],
    bodyArea: [
        { area: "Hands/Arms", multiplier: 1.3, description: "Upper extremity burns" },
        { area: "Face/Head", multiplier: 1.8, description: "Facial disfigurement" },
        { area: "Eyes", multiplier: 2.5, description: "Vision damage/blindness" },
        { area: "Torso/Back", multiplier: 1.0, description: "Body trunk burns" },
        { area: "Legs/Feet", multiplier: 1.1, description: "Lower extremity burns" },
        { area: "Respiratory/Internal", multiplier: 2.0, description: "Lung/airway damage" },
    ],
    statistics: {
        annualChemicalBurns: 50000,
        workplaceRelated: 35000,
        hospitalizations: 15000,
        avgSettlement: 380000,
        fatalCases: 200,
    },
    citation: "Based on OSHA Chemical Safety Standards 2026, CDC Burn Injury Data, American Burn Association Guidelines",
} as const;

export const CALCULATORS = [
    { id: "chemical-burn/burn-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate chemical burn settlement", icon: Calculator, keywords: ["chemical burn settlement"], featured: true },
    { id: "chemical-burn/burn-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding chemical burn claims", icon: FileText, keywords: ["chemical burn lawsuit"], featured: true },
] as const;

export interface BurnResult { burnType: string; severity: string; bodyArea: string; baseDamages: number; severityBonus: number; areaBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateBurnSettlement(typeIndex: number, severityIndex: number, areaIndex: number, medicalBills: number): BurnResult {
    const burn = CHEMBURN_2026.burnTypes[typeIndex];
    const severity = CHEMBURN_2026.burnSeverity[severityIndex];
    const area = CHEMBURN_2026.bodyArea[areaIndex];
    const baseDamages = burn.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const severityBonus = baseDamages * (severity.multiplier - 1);
    const areaBonus = baseDamages * (area.multiplier - 1);
    const total = baseDamages + medicalCosts + severityBonus + areaBonus;
    return { burnType: burn.type, severity: severity.severity, bodyArea: area.area, baseDamages: Math.round(baseDamages), severityBonus: Math.round(severityBonus), areaBonus: Math.round(areaBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
