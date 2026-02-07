// ============================================
// HIP IMPLANT LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on FDA Recalls & MDL Data
// ============================================

import { Calculator, FileText, Activity, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Hip Implant Lawsuit Calculator",
    tagline: "Free Defective Hip Replacement Settlement Calculator",
    description: "Calculate hip implant lawsuit settlement value instantly. Free 2026 calculator for metal-on-metal hip replacement failures, recalls, and revision surgery claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/hip-implant",
};

export const HIP_2026 = {
    complicationTypes: [
        { type: "Metal-on-Metal Poisoning (Metallosis)", avgSettlement: 400000, minSettlement: 100000, maxSettlement: 1500000, description: "Cobalt/chromium metal ion toxicity" },
        { type: "Implant Loosening/Failure", avgSettlement: 250000, minSettlement: 75000, maxSettlement: 800000, description: "Device loosening requiring revision" },
        { type: "Revision Surgery Required", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1200000, description: "One or more revision surgeries" },
        { type: "Bone/Tissue Damage (Osteolysis)", avgSettlement: 300000, minSettlement: 80000, maxSettlement: 1000000, description: "Bone loss around implant" },
        { type: "Chronic Pain/Disability", avgSettlement: 200000, minSettlement: 50000, maxSettlement: 600000, description: "Persistent pain, limited mobility" },
        { type: "Infection/Sepsis", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1000000, description: "Implant-related infection" },
        { type: "Wrongful Death", avgSettlement: 1000000, minSettlement: 300000, maxSettlement: 4000000, description: "Death from implant complications" },
    ],
    implantBrands: [
        { brand: "DePuy ASR", recalled: true, manufacturer: "Johnson & Johnson", settlements: 4000000000 },
        { brand: "Stryker Rejuvenate/ABG II", recalled: true, manufacturer: "Stryker", settlements: 2000000000 },
        { brand: "Zimmer Durom Cup", recalled: true, manufacturer: "Zimmer", settlements: 314000000 },
        { brand: "Biomet M2a Magnum", recalled: true, manufacturer: "Biomet", settlements: 200000000 },
        { brand: "Smith & Nephew R3", recalled: true, manufacturer: "Smith & Nephew", settlements: 0 },
        { brand: "Wright Conserve", recalled: true, manufacturer: "Wright Medical", settlements: 240000000 },
    ],
    revisionFactors: [
        { revisions: "No revision yet", multiplier: 0.6 },
        { revisions: "1 revision surgery", multiplier: 1.0 },
        { revisions: "2 revision surgeries", multiplier: 1.4 },
        { revisions: "3+ revision surgeries", multiplier: 1.8 },
    ],
    statistics: {
        devicesRecalled: 500000,
        lawsuitsFiled: 15000,
        totalSettlements: 8000000000,
        avgSettlement: 300000,
        fdaReports: 25000,
    },
    citation: "Based on official 2026 FDA MAUDE Database Reports, MDL 2197 (DePuy ASR), MDL 2441 (Stryker), and American Academy of Orthopaedic Surgeons (AAOS) revision surgery benchmarks."
} as const;

export const CALCULATORS = [
    { id: "hip-implant/hip-calculator", name: "Hip Implant Settlement Calculator", shortName: "Calculator", description: "Calculate hip replacement settlement", longDescription: "Free hip implant calculator with brand and revision factors.", icon: Calculator, category: "legal", keywords: ["hip implant calculator", "hip replacement settlement"], featured: true },
    { id: "hip-implant/hip-guide", name: "Hip Implant Lawsuit Guide", shortName: "Guide", description: "Understanding hip implant claims", longDescription: "Learn about hip implant recalls, metallosis, and lawsuits.", icon: FileText, category: "legal", keywords: ["hip implant lawsuit guide", "hip recall claims"], featured: true },
] as const;

export interface HipResult { complicationType: string; implantBrand: string; revisionFactor: string; baseDamages: number; revisionBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateHipSettlement(complicationIndex: number, brandIndex: number, revisionIndex: number, medicalBills: number): HipResult {
    const complication = HIP_2026.complicationTypes[complicationIndex];
    const brand = HIP_2026.implantBrands[brandIndex];
    const revision = HIP_2026.revisionFactors[revisionIndex];
    const baseDamages = complication.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const revisionBonus = baseDamages * (revision.multiplier - 1);
    const recallBonus = brand.recalled ? baseDamages * 0.3 : 0;
    const total = baseDamages + medicalCosts + revisionBonus + recallBonus;
    return { complicationType: complication.type, implantBrand: brand.brand, revisionFactor: revision.revisions, baseDamages: Math.round(baseDamages), revisionBonus: Math.round(revisionBonus + recallBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
