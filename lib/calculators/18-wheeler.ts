// ============================================
// 18 WHEELER ACCIDENT CALCULATOR - SITE CONFIG
// 2026 Data - Based on FMCSA & DOT Statistics
// ============================================

import { Calculator, FileText, Truck, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "18 Wheeler Accident Calculator",
    tagline: "Free Semi-Truck Accident Settlement Calculator",
    description: "Calculate 18 wheeler accident settlement value instantly. Free 2026 calculator for semi-truck crashes, commercial vehicle accidents, and trucking company liability.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/18-wheeler",
};

export const TRUCK_2026 = {
    injuryTypes: [
        { type: "Soft Tissue/Whiplash", avgSettlement: 75000, minSettlement: 15000, maxSettlement: 250000, description: "Neck, back strain, minor injuries" },
        { type: "Broken Bones/Fractures", avgSettlement: 150000, minSettlement: 50000, maxSettlement: 500000, description: "Arm, leg, rib fractures" },
        { type: "Spinal Cord Injury", avgSettlement: 1500000, minSettlement: 400000, maxSettlement: 8000000, description: "Herniated discs, paralysis" },
        { type: "Traumatic Brain Injury", avgSettlement: 2000000, minSettlement: 500000, maxSettlement: 10000000, description: "Concussion, TBI, cognitive damage" },
        { type: "Amputation/Limb Loss", avgSettlement: 2500000, minSettlement: 750000, maxSettlement: 12000000, description: "Loss of limb from crush injuries" },
        { type: "Burn Injuries", avgSettlement: 1800000, minSettlement: 400000, maxSettlement: 8000000, description: "Fuel fire, explosion burns" },
        { type: "Wrongful Death", avgSettlement: 3500000, minSettlement: 1000000, maxSettlement: 20000000, description: "Fatal semi-truck collision" },
    ],
    liabilityParties: [
        { party: "Truck Driver", multiplier: 1.0, description: "Negligent driving, fatigue, distraction" },
        { party: "Trucking Company", multiplier: 1.5, description: "Vicarious liability, negligent hiring" },
        { party: "Cargo Loader", multiplier: 1.2, description: "Improper loading, shifting cargo" },
        { party: "Truck Manufacturer", multiplier: 1.4, description: "Defective brakes, tires, parts" },
        { party: "Maintenance Company", multiplier: 1.3, description: "Negligent maintenance, repairs" },
    ],
    accidentTypes: [
        { type: "Rear-End Collision", cases: "35%" },
        { type: "Jackknife Accident", cases: "15%" },
        { type: "Underride Crash", cases: "10%" },
        { type: "Tire Blowout", cases: "12%" },
        { type: "Wide Turn Accident", cases: "8%" },
        { type: "Rollover", cases: "20%" },
    ],
    statistics: {
        annualFatalities: 5700,
        annualInjuries: 150000,
        avgSettlement: 750000,
        fmcsaViolations: 500000,
        avgVerdictMultiple: 3.5,
    },
    citation: "Based on FMCSA (Federal Motor Carrier Safety Administration) and NHTSA 2026 data, 49 CFR Part 395",
} as const;

export const CALCULATORS = [
    { id: "18-wheeler/truck-calculator", name: "18 Wheeler Settlement Calculator", shortName: "Calculator", description: "Calculate truck accident settlement", longDescription: "Free semi-truck accident calculator with commercial vehicle factors.", icon: Calculator, category: "legal", keywords: ["18 wheeler calculator", "truck accident settlement"], featured: true },
    { id: "18-wheeler/truck-guide", name: "Truck Accident Guide", shortName: "Guide", description: "Understanding trucking liability", longDescription: "Learn about FMCSA regulations, trucking company liability, and claims.", icon: FileText, category: "legal", keywords: ["truck accident guide", "semi truck claims"], featured: true },
] as const;

export interface TruckResult { injuryType: string; liabilityParty: string; baseDamages: number; liabilityBonus: number; medicalCosts: number; lostWages: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateTruckSettlement(injuryIndex: number, liabilityIndex: number, faultPercent: number, medicalBills: number, annualIncome: number): TruckResult {
    const injury = TRUCK_2026.injuryTypes[injuryIndex];
    const liability = TRUCK_2026.liabilityParties[liabilityIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const lostWages = annualIncome * 5;
    const liabilityBonus = baseDamages * (liability.multiplier - 1) * (faultPercent / 100);
    const total = (baseDamages + medicalCosts + lostWages + liabilityBonus) * (faultPercent / 100);
    return { injuryType: injury.type, liabilityParty: liability.party, baseDamages: Math.round(baseDamages), liabilityBonus: Math.round(liabilityBonus), medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), totalLow: Math.round(total * 0.6), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
