// ============================================
// DRUNK DRIVING ACCIDENT CALCULATOR - SITE CONFIG
// 2026 Data - Based on NHTSA & MADD Statistics
// ============================================

import { Calculator, FileText, Car, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Drunk Driving Accident Calculator",
    tagline: "Free DUI Accident Settlement Calculator",
    description: "Calculate drunk driving accident settlement value instantly. Free 2026 calculator with punitive damages and BAC levels based on NHTSA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/drunk-driving",
};

export const DUI_2026 = {
    bacLevels: [
        { level: "0.08-0.10%", multiplier: 1.5, description: "Legally impaired (per se DUI)" },
        { level: "0.11-0.15%", multiplier: 2.0, description: "High BAC, aggravated factors" },
        { level: "0.16-0.20%", multiplier: 2.5, description: "Extreme DUI, felony possible" },
        { level: "0.20%+", multiplier: 3.5, description: "Super extreme DUI, major felony" },
    ],
    injuryTypes: [
        { type: "Minor Injuries", avgSettlement: 50000, minSettlement: 15000, maxSettlement: 150000, description: "Soft tissue, minor whiplash" },
        { type: "Moderate Injuries", avgSettlement: 200000, minSettlement: 75000, maxSettlement: 500000, description: "Fractures, concussions" },
        { type: "Severe Injuries", avgSettlement: 750000, minSettlement: 300000, maxSettlement: 2000000, description: "Multiple fractures, TBI" },
        { type: "Catastrophic Injuries", avgSettlement: 2500000, minSettlement: 1000000, maxSettlement: 10000000, description: "Permanent disability, paralysis" },
        { type: "Wrongful Death", avgSettlement: 5000000, minSettlement: 2000000, maxSettlement: 20000000, description: "Fatal DUI accident" },
    ],
    damageTypes: [
        { type: "Compensatory Damages", description: "Medical bills, lost wages, pain & suffering" },
        { type: "Punitive Damages", description: "Additional damages to punish drunk driver" },
        { type: "Loss of Consortium", description: "Impact on family relationships" },
        { type: "Dram Shop Liability", description: "Bar/restaurant that over-served driver" },
    ],
    statistics: {
        annualDeaths: 13384,
        annualInjuries: 290000,
        avgDeathEveryMin: 39,
        costPerYear: 68700000000,
        repeatOffenderPercent: 33,
        nighttimePercent: 67,
    },
    citation: "Based on NHTSA (National Highway Traffic Safety Administration) and MADD (Mothers Against Drunk Driving) 2026 data",
} as const;

export const CALCULATORS = [
    { id: "drunk-driving/dui-calculator", name: "DUI Settlement Calculator", shortName: "Calculator", description: "Calculate drunk driving settlement", longDescription: "Free DUI accident calculator with punitive damages and BAC multipliers.", icon: Calculator, category: "legal", keywords: ["drunk driving calculator", "dui accident settlement"], featured: true },
    { id: "drunk-driving/dui-guide", name: "DUI Accident Guide", shortName: "Guide", description: "Understanding DUI claims", longDescription: "Learn about BAC levels, punitive damages, and dram shop liability.", icon: FileText, category: "legal", keywords: ["dui accident guide", "drunk driving lawsuit"], featured: true },
] as const;

export interface DUIResult { bacLevel: string; injuryType: string; compensatory: number; punitiveDamages: number; medicalCosts: number; lostWages: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateDUISettlement(bacIndex: number, injuryIndex: number, age: number, annualIncome: number, medicalBills: number): DUIResult {
    const bac = DUI_2026.bacLevels[bacIndex];
    const injury = DUI_2026.injuryTypes[injuryIndex];
    const medicalCosts = medicalBills * 2.5;
    const remainingYears = Math.max(0, 65 - age);
    const lostWages = annualIncome * remainingYears * (injuryIndex >= 3 ? 0.8 : 0.3);
    const severityMultiplier = 3 + injuryIndex * 1.5;
    const painSuffering = medicalBills * severityMultiplier;
    const compensatory = medicalCosts + lostWages + painSuffering;
    const punitiveDamages = compensatory * (bac.multiplier - 1);
    const baseTotal = compensatory + punitiveDamages;
    return { bacLevel: bac.level, injuryType: injury.type, compensatory: Math.round(compensatory), punitiveDamages: Math.round(punitiveDamages), medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), painSuffering: Math.round(painSuffering), totalLow: Math.round(baseTotal * 0.6), totalMid: Math.round(baseTotal), totalHigh: Math.round(baseTotal * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
