// ============================================
// TEPEZZA HEARING LOSS CALCULATOR - SITE CONFIG
// 2026 Data - Based on FDA Safety Communications
// ============================================

import { Calculator, FileText, Ear, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Tepezza Hearing Loss Calculator",
    tagline: "Free Tepezza Lawsuit Settlement Calculator",
    description: "Calculate Tepezza hearing loss lawsuit settlement value instantly. Free 2026 calculator for teprotumumab-related hearing damage, tinnitus, and deafness claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/tepezza",
};

export const TEPEZZA_2026 = {
    hearingInjuries: [
        { type: "Permanent Hearing Loss", avgSettlement: 800000, minSettlement: 300000, maxSettlement: 2500000, description: "Complete or severe hearing damage" },
        { type: "Partial Hearing Loss", avgSettlement: 400000, minSettlement: 150000, maxSettlement: 1200000, description: "Moderate hearing impairment" },
        { type: "Severe Tinnitus", avgSettlement: 300000, minSettlement: 100000, maxSettlement: 800000, description: "Constant ringing in ears" },
        { type: "Hyperacusis", avgSettlement: 250000, minSettlement: 80000, maxSettlement: 600000, description: "Painful sound sensitivity" },
        { type: "Mild Hearing Impairment", avgSettlement: 150000, minSettlement: 50000, maxSettlement: 400000, description: "Slight hearing reduction" },
        { type: "Combined Hearing/Tinnitus", avgSettlement: 600000, minSettlement: 200000, maxSettlement: 1800000, description: "Multiple hearing symptoms" },
    ],
    infusionFactors: [
        { infusions: "1-4 infusions", multiplier: 0.7 },
        { infusions: "5-8 infusions (full course)", multiplier: 1.0 },
        { infusions: "8+ infusions", multiplier: 1.3 },
        { infusions: "Multiple treatment courses", multiplier: 1.5 },
    ],
    diagnosisFactors: [
        { diagnosis: "Thyroid Eye Disease (TED)", primary: true },
        { diagnosis: "Graves' Disease", primary: true },
        { diagnosis: "Graves' Ophthalmopathy", primary: true },
    ],
    statistics: {
        patientsAffected: 20000,
        lawsuitsFiled: 1500,
        hearingLossRate: 65,
        avgSettlement: 450000,
        fdaWarning: "2023 FDA Updated Label Warning",
    },
    citation: "Based on FDA Safety Communication 2023, Tepezza Prescribing Information, and MDL Litigation Data 2026",
} as const;

export const CALCULATORS = [
    { id: "tepezza/calculator", name: "Tepezza Settlement Calculator", shortName: "Calculator", description: "Calculate Tepezza hearing loss settlement", longDescription: "Free Tepezza lawsuit calculator with infusion and injury factors.", icon: Calculator, category: "legal", keywords: ["tepezza calculator", "hearing loss settlement"], featured: true },
    { id: "tepezza/guide", name: "Tepezza Lawsuit Guide", shortName: "Guide", description: "Understanding Tepezza claims", longDescription: "Learn about Tepezza hearing damage, FDA warnings, and lawsuits.", icon: FileText, category: "legal", keywords: ["tepezza lawsuit guide", "teprotumumab claims"], featured: true },
] as const;

export interface TepezzaResult { injuryType: string; infusionFactor: string; baseDamages: number; infusionBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateTepezzaSettlement(injuryIndex: number, infusionIndex: number, medicalBills: number): TepezzaResult {
    const injury = TEPEZZA_2026.hearingInjuries[injuryIndex];
    const infusion = TEPEZZA_2026.infusionFactors[infusionIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const infusionBonus = baseDamages * (infusion.multiplier - 1);
    const total = baseDamages + medicalCosts + infusionBonus;
    return { injuryType: injury.type, infusionFactor: infusion.infusions, baseDamages: Math.round(baseDamages), infusionBonus: Math.round(infusionBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
