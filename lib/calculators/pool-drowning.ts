// ============================================
// POOL DROWNING CALCULATOR - SITE CONFIG
// 2026 Data - Based on CDC & CPSC Statistics
// ============================================

import { Calculator, FileText, Waves, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Pool Drowning Calculator",
    tagline: "Free Pool Accident Settlement Calculator",
    description: "Calculate pool drowning accident settlement value instantly. Free 2026 calculator with premises liability and negligent supervision based on CDC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pool-drowning",
};

export const DROWNING_2026 = {
    liabilityTypes: [
        { type: "Residential Pool (Homeowner)", avgSettlement: 500000, minSettlement: 150000, maxSettlement: 2000000, description: "Private pool, homeowner liability" },
        { type: "Hotel/Resort Pool", avgSettlement: 1000000, minSettlement: 300000, maxSettlement: 5000000, description: "Commercial property, corporate liability" },
        { type: "Public Pool/Waterpark", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 10000000, description: "Municipal or commercial facility" },
        { type: "Apartment/HOA Pool", avgSettlement: 750000, minSettlement: 250000, maxSettlement: 3000000, description: "Multi-unit property liability" },
    ],
    outcomeTypes: [
        { type: "Near Drowning - Full Recovery", avgSettlement: 150000, description: "Rescued, no permanent injuries" },
        { type: "Near Drowning - Brain Damage", avgSettlement: 2500000, description: "Hypoxic brain injury, permanent" },
        { type: "Drowning - Wrongful Death (Child)", avgSettlement: 3000000, description: "Fatal drowning, minor victim" },
        { type: "Drowning - Wrongful Death (Adult)", avgSettlement: 2000000, description: "Fatal drowning, adult victim" },
    ],
    negligenceFactors: [
        { factor: "No Pool Fence/Gate", multiplier: 1.5, description: "Violation of pool barrier laws" },
        { factor: "No Lifeguard (Required)", multiplier: 1.4, description: "Commercial pool without supervision" },
        { factor: "Defective Drain/Equipment", multiplier: 1.6, description: "Pool equipment malfunction" },
        { factor: "Inadequate Warnings", multiplier: 1.3, description: "Missing depth markers or signs" },
    ],
    statistics: {
        annualDeaths: 4500,
        annualInjuries: 8000,
        childPercent: 75,
        residentialPercent: 67,
        underFourPercent: 50,
        summerPercent: 80,
    },
    citation: "Based on CDC (Centers for Disease Control) and CPSC (Consumer Product Safety Commission) Drowning Prevention 2026 data",
} as const;

export const CALCULATORS = [
    { id: "pool-drowning/drowning-calculator", name: "Drowning Settlement Calculator", shortName: "Calculator", description: "Calculate pool drowning settlement", longDescription: "Free pool accident calculator with premises liability factors.", icon: Calculator, category: "legal", keywords: ["pool drowning calculator", "drowning settlement"], featured: true },
    { id: "pool-drowning/drowning-guide", name: "Pool Safety Guide", shortName: "Guide", description: "Understanding pool liability", longDescription: "Learn about pool safety laws, premises liability, and negligent supervision.", icon: FileText, category: "legal", keywords: ["pool safety guide", "drowning liability"], featured: true },
] as const;

export interface DrowningResult { liabilityType: string; outcomeType: string; baseDamages: number; negligenceBonus: number; medicalCosts: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateDrowningSettlement(liabilityIndex: number, outcomeIndex: number, negligenceIndex: number, medicalBills: number): DrowningResult {
    const liability = DROWNING_2026.liabilityTypes[liabilityIndex];
    const outcome = DROWNING_2026.outcomeTypes[outcomeIndex];
    const negligence = DROWNING_2026.negligenceFactors[negligenceIndex];
    const baseDamages = outcome.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const painSuffering = baseDamages * 0.5;
    const negligenceBonus = baseDamages * (negligence.multiplier - 1);
    const baseTotal = (baseDamages + medicalCosts + painSuffering + negligenceBonus);
    return { liabilityType: liability.type, outcomeType: outcome.type, baseDamages: Math.round(baseDamages), negligenceBonus: Math.round(negligenceBonus), medicalCosts: Math.round(medicalCosts), painSuffering: Math.round(painSuffering), totalLow: Math.round(baseTotal * 0.5), totalMid: Math.round(baseTotal), totalHigh: Math.round(baseTotal * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
