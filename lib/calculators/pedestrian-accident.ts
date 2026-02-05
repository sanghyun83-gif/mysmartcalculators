// ============================================
// PEDESTRIAN ACCIDENT CALCULATOR - SITE CONFIG
// 2026 Data - Based on NHTSA & CDC Statistics
// ============================================

import { Calculator, FileText, Footprints, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Pedestrian Accident Calculator",
    tagline: "Free Pedestrian Injury Calculator",
    description: "Calculate pedestrian accident settlement value instantly. Free 2026 calculator with crosswalk laws, injury severity, and NHTSA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pedestrian-accident",
};

export const PEDESTRIAN_2026 = {
    injuryTypes: [
        { type: "Minor Injuries", avgSettlement: 50000, minSettlement: 10000, maxSettlement: 100000, description: "Bruises, minor fractures, soft tissue" },
        { type: "Moderate Injuries", avgSettlement: 150000, minSettlement: 50000, maxSettlement: 350000, description: "Broken bones, lacerations requiring surgery" },
        { type: "Severe Injuries", avgSettlement: 500000, minSettlement: 200000, maxSettlement: 1500000, description: "Multiple fractures, internal injuries" },
        { type: "Catastrophic Injuries", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, description: "TBI, spinal cord, permanent disability" },
        { type: "Wrongful Death", avgSettlement: 2500000, minSettlement: 1000000, maxSettlement: 10000000, description: "Fatal pedestrian accident" },
    ],
    faultScenarios: [
        { scenario: "Driver 100% at Fault", multiplier: 1.0, description: "Driver ran red light, speeding, DUI" },
        { scenario: "Driver 75% at Fault", multiplier: 0.75, description: "Pedestrian partially at fault" },
        { scenario: "Driver 50% at Fault", multiplier: 0.50, description: "Shared responsibility" },
        { scenario: "Pedestrian Jaywalking", multiplier: 0.35, description: "Pedestrian outside crosswalk" },
    ],
    statistics: {
        annualDeaths: 7500,
        annualInjuries: 137000,
        hitAndRunPercent: 20,
        nighttimePercent: 75,
        urbanPercent: 84,
        alcoholInvolvedPercent: 32,
    },
    citation: "Based on NHTSA (National Highway Traffic Safety Administration) and CDC Pedestrian Safety 2026 data",
} as const;

export const CALCULATORS = [
    { id: "pedestrian-accident/pedestrian-calculator", name: "Pedestrian Settlement Calculator", shortName: "Calculator", description: "Calculate pedestrian accident settlement", longDescription: "Free pedestrian injury calculator with fault scenarios.", icon: Calculator, category: "legal", keywords: ["pedestrian accident calculator", "crosswalk injury settlement"], featured: true },
    { id: "pedestrian-accident/pedestrian-guide", name: "Pedestrian Safety Guide", shortName: "Guide", description: "Understanding pedestrian accidents", longDescription: "Learn about pedestrian rights, crosswalk laws, and claims.", icon: FileText, category: "legal", keywords: ["pedestrian safety guide", "crosswalk laws"], featured: true },
] as const;

export interface PedestrianResult { injuryType: string; faultScenario: string; baseTreatmentCost: number; futureMedical: number; lostWages: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculatePedestrianSettlement(injuryIndex: number, faultIndex: number, age: number, annualIncome: number, medicalBills: number): PedestrianResult {
    const injury = PEDESTRIAN_2026.injuryTypes[injuryIndex];
    const fault = PEDESTRIAN_2026.faultScenarios[faultIndex];
    const baseTreatmentCost = medicalBills * 2;
    const futureMedical = baseTreatmentCost * (injuryIndex >= 3 ? 2 : 1.2);
    const remainingYears = Math.max(0, 65 - age);
    const lostWages = annualIncome * remainingYears * (injuryIndex >= 3 ? 0.8 : 0.3);
    const severityMultiplier = 2 + injuryIndex * 1.2;
    const painSuffering = medicalBills * severityMultiplier;
    const baseTotal = (baseTreatmentCost + futureMedical + lostWages + painSuffering) * fault.multiplier;
    return { injuryType: injury.type, faultScenario: fault.scenario, baseTreatmentCost: Math.round(baseTreatmentCost), futureMedical: Math.round(futureMedical), lostWages: Math.round(lostWages), painSuffering: Math.round(painSuffering), totalLow: Math.round(baseTotal * 0.6), totalMid: Math.round(baseTotal), totalHigh: Math.round(baseTotal * 1.6) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
