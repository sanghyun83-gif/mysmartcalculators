// ============================================
// FORKLIFT ACCIDENT CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/BLS/NIOSH
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Forklift Accident Calculator",
    tagline: "Free Forklift Injury Settlement Calculator",
    description: "Calculate forklift accident settlement value instantly. Free 2026 calculator for forklift tip-overs, pedestrian strikes, and warehouse injuries.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/forklift",
};

export const FORKLIFT_2026 = {
    accidentTypes: [
        { type: "Tip-Over/Rollover", avgSettlement: 950000, minSettlement: 300000, maxSettlement: 4000000, description: "Forklift capsizes, crushing operator" },
        { type: "Pedestrian Strike", avgSettlement: 750000, minSettlement: 200000, maxSettlement: 3500000, description: "Worker struck by moving forklift" },
        { type: "Falling Load", avgSettlement: 650000, minSettlement: 150000, maxSettlement: 3000000, description: "Improperly secured load falls" },
        { type: "Crush Between", avgSettlement: 1100000, minSettlement: 350000, maxSettlement: 5000000, description: "Crushed between forklift and object" },
        { type: "Fall from Forklift", avgSettlement: 500000, minSettlement: 120000, maxSettlement: 2000000, description: "Operator falls from elevated position" },
        { type: "Fork Impalement", avgSettlement: 800000, minSettlement: 250000, maxSettlement: 3500000, description: "Struck or impaled by forks" },
    ],
    oshaViolations: [
        { violation: "No Operator Training (1910.178)", multiplier: 1.6, description: "Missing required certification/training" },
        { violation: "Speed Violations", multiplier: 1.3, description: "Unsafe speeds, no pedestrian awareness" },
        { violation: "Overloading", multiplier: 1.4, description: "Exceeding weight capacity" },
        { violation: "No Seatbelt/Restraint", multiplier: 1.3, description: "Missing operator restraint system" },
        { violation: "Poor Maintenance", multiplier: 1.4, description: "Brake, steering, or lift failures" },
        { violation: "No Violation Documented", multiplier: 1.0, description: "Standard liability" },
    ],
    statistics: {
        annualForkliftDeaths: 85,
        annualForkliftInjuries: 34900,
        tipOverDeaths: 42,
        avgSettlement: 720000,
        workplaceForklift: 855000,
    },
    citation: "Based on OSHA Powered Industrial Truck Standard 2026, BLS Warehouse Injury Data, NIOSH Forklift Fatality Reports",
} as const;

export const CALCULATORS = [
    { id: "forklift/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate forklift accident settlement", icon: Calculator, keywords: ["forklift injury calculator"], featured: true },
    { id: "forklift/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding forklift injury claims", icon: FileText, keywords: ["forklift accident guide"], featured: true },
] as const;

export interface ForkliftResult { accidentType: string; oshaViolation: string; baseDamages: number; oshaBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateForkliftSettlement(typeIndex: number, oshaIndex: number, medicalBills: number): ForkliftResult {
    const accident = FORKLIFT_2026.accidentTypes[typeIndex];
    const osha = FORKLIFT_2026.oshaViolations[oshaIndex];
    const baseDamages = accident.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const oshaBonus = baseDamages * (osha.multiplier - 1);
    const total = baseDamages + medicalCosts + oshaBonus;
    return { accidentType: accident.type, oshaViolation: osha.violation, baseDamages: Math.round(baseDamages), oshaBonus: Math.round(oshaBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
