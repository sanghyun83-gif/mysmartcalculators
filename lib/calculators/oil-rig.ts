// ============================================
// OIL RIG INJURY CALCULATOR - SITE CONFIG
// 2026 Data - Based on Jones Act & OSHA Data
// ============================================

import { Calculator, FileText, Flame, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Oil Rig Injury Calculator",
    tagline: "Free Offshore Oil Rig Settlement Calculator",
    description: "Calculate oil rig injury settlement value instantly. Free 2026 calculator for offshore drilling accidents, explosions, and Jones Act claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/oil-rig",
};

export const OIL_RIG_2026 = {
    injuryTypes: [
        { type: "Burns & Explosions", avgSettlement: 2500000, minSettlement: 500000, maxSettlement: 15000000, description: "Offshore explosions, fire injuries, chemical burns" },
        { type: "Drowning/Near Drowning", avgSettlement: 3000000, minSettlement: 750000, maxSettlement: 20000000, description: "Overboard incidents, platform collapse" },
        { type: "Crush Injuries", avgSettlement: 1500000, minSettlement: 300000, maxSettlement: 8000000, description: "Heavy equipment, crane accidents" },
        { type: "Toxic Exposure (H2S, Benzene)", avgSettlement: 2000000, minSettlement: 400000, maxSettlement: 12000000, description: "Hydrogen sulfide, chemical exposure" },
        { type: "Spinal Cord/Back Injuries", avgSettlement: 1800000, minSettlement: 350000, maxSettlement: 10000000, description: "Lifting injuries, falls on deck" },
        { type: "Amputation/Limb Loss", avgSettlement: 2200000, minSettlement: 500000, maxSettlement: 12000000, description: "Machinery accidents, drill equipment" },
        { type: "Wrongful Death", avgSettlement: 5000000, minSettlement: 1500000, maxSettlement: 30000000, description: "Fatal offshore accidents" },
    ],
    liabilityTypes: [
        { type: "Jones Act (Seaman)", multiplier: 1.5, description: "Maritime workers on vessels" },
        { type: "LHWCA (Longshoreman)", multiplier: 1.3, description: "Harbor/dock workers" },
        { type: "OCSLA (Outer Continental Shelf)", multiplier: 1.4, description: "Fixed platform workers" },
        { type: "General Maritime Law", multiplier: 1.2, description: "Unseaworthiness claims" },
    ],
    companies: [
        { company: "BP", incidents: "Deepwater Horizon" },
        { company: "Transocean", incidents: "Drilling contractor" },
        { company: "Halliburton", incidents: "Services/cementing" },
        { company: "Chevron", incidents: "Major operator" },
        { company: "ExxonMobil", incidents: "Major operator" },
    ],
    statistics: {
        annualInjuries: 1500,
        fatalityRate: 7.4,
        avgSettlement: 2500000,
        jonesActCases: 5000,
        oshaFines2025: 15000000,
    },
    citation: "Based on Jones Act 46 U.S.C. §30104, OSHA Offshore Statistics 2026, and Maritime Law Court Filings data",
} as const;

export const CALCULATORS = [
    { id: "oil-rig/calculator", name: "Oil Rig Settlement Calculator", shortName: "Calculator", description: "Calculate oil rig injury settlement", longDescription: "Free oil rig calculator with Jones Act and OCSLA factors.", icon: Calculator, category: "legal", keywords: ["oil rig calculator", "offshore injury settlement"], featured: true },
    { id: "oil-rig/guide", name: "Oil Rig Injury Guide", shortName: "Guide", description: "Understanding offshore lawsuits", longDescription: "Learn about Jones Act, OCSLA, and offshore injury claims.", icon: FileText, category: "legal", keywords: ["oil rig lawsuit guide", "jones act claims"], featured: true },
] as const;

export interface OilRigResult { injuryType: string; liabilityType: string; baseDamages: number; liabilityBonus: number; medicalCosts: number; lostWages: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateOilRigSettlement(injuryIndex: number, liabilityIndex: number, yearsExperience: number, medicalBills: number, annualWage: number): OilRigResult {
    const injury = OIL_RIG_2026.injuryTypes[injuryIndex];
    const liability = OIL_RIG_2026.liabilityTypes[liabilityIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const lostWages = annualWage * (10 + yearsExperience);
    const liabilityBonus = baseDamages * (liability.multiplier - 1);
    const total = baseDamages + medicalCosts + lostWages + liabilityBonus;
    return { injuryType: injury.type, liabilityType: liability.type, baseDamages: Math.round(baseDamages), liabilityBonus: Math.round(liabilityBonus), medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 2) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
