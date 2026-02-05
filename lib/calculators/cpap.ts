// ============================================
// CPAP RECALL LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on FDA & Philips Recall
// ============================================

import { Calculator, FileText, Wind, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "CPAP Recall Lawsuit Calculator",
    tagline: "Free Philips CPAP Recall Settlement Calculator",
    description: "Calculate CPAP recall lawsuit settlement value instantly. Free 2026 calculator for Philips Respironics CPAP, BiPAP, and ventilator foam degradation claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/cpap",
};

export const CPAP_2026 = {
    injuryTypes: [
        { type: "Lung Cancer", avgSettlement: 750000, minSettlement: 200000, maxSettlement: 3000000, description: "Primary lung cancer diagnosis" },
        { type: "Other Cancers (Kidney, Liver)", avgSettlement: 600000, minSettlement: 150000, maxSettlement: 2500000, description: "Kidney, liver, or other organ cancer" },
        { type: "Respiratory Illness", avgSettlement: 150000, minSettlement: 50000, maxSettlement: 500000, description: "COPD, asthma, breathing problems" },
        { type: "Headaches/Dizziness", avgSettlement: 50000, minSettlement: 10000, maxSettlement: 150000, description: "Chronic headaches, nausea, dizziness" },
        { type: "Organ Damage (Non-Cancer)", avgSettlement: 300000, minSettlement: 75000, maxSettlement: 1000000, description: "Liver, kidney damage without cancer" },
        { type: "Wrongful Death", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, description: "Death from CPAP-related illness" },
    ],
    deviceTypes: [
        { device: "DreamStation", recalled: true, models: "DreamStation 1, Auto, BiPAP" },
        { device: "SystemOne", recalled: true, models: "SystemOne Q-Series, REMstar" },
        { device: "DreamStation 2", recalled: false, models: "Not recalled (newer model)" },
        { device: "Trilogy Ventilator", recalled: true, models: "Trilogy 100, 200" },
        { device: "BiPAP A-Series", recalled: true, models: "A30, A40" },
    ],
    usageFactors: [
        { usage: "Less than 1 year", multiplier: 0.5 },
        { usage: "1-3 years", multiplier: 0.8 },
        { usage: "3-5 years", multiplier: 1.0 },
        { usage: "5-10 years", multiplier: 1.3 },
        { usage: "10+ years", multiplier: 1.5 },
    ],
    statistics: {
        devicesRecalled: 15000000,
        lawsuitsFiled: 800000,
        mdlCases: 750000,
        avgSettlement: 350000,
        fdaReports: 105000,
    },
    citation: "Based on FDA Class I Recall Notice, Philips Respironics Safety Communication 2021-2026, and MDL 3014 Court Filings",
} as const;

export const CALCULATORS = [
    { id: "cpap/calculator", name: "CPAP Settlement Calculator", shortName: "Calculator", description: "Calculate CPAP recall settlement", longDescription: "Free Philips CPAP recall calculator with injury and usage factors.", icon: Calculator, category: "legal", keywords: ["cpap calculator", "philips recall settlement"], featured: true },
    { id: "cpap/guide", name: "CPAP Recall Guide", shortName: "Guide", description: "Understanding CPAP lawsuits", longDescription: "Learn about Philips recall, foam degradation, and claims.", icon: FileText, category: "legal", keywords: ["cpap lawsuit guide", "philips recall claims"], featured: true },
] as const;

export interface CpapResult { injuryType: string; deviceType: string; usageFactor: string; baseDamages: number; usageBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateCpapSettlement(injuryIndex: number, deviceIndex: number, usageIndex: number, medicalBills: number): CpapResult {
    const injury = CPAP_2026.injuryTypes[injuryIndex];
    const device = CPAP_2026.deviceTypes[deviceIndex];
    const usage = CPAP_2026.usageFactors[usageIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const usageBonus = baseDamages * (usage.multiplier - 1);
    const recallBonus = device.recalled ? baseDamages * 0.2 : 0;
    const total = baseDamages + medicalCosts + usageBonus + recallBonus;
    return { injuryType: injury.type, deviceType: device.device, usageFactor: usage.usage, baseDamages: Math.round(baseDamages), usageBonus: Math.round(usageBonus + recallBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
