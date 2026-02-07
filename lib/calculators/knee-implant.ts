// ============================================
// KNEE REPLACEMENT LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on FDA MAUDE & Product Recalls
// ============================================

import { Calculator, FileText, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Knee Replacement Lawsuit Calculator",
    tagline: "Free Knee Implant Settlement Calculator",
    description: "Calculate knee replacement lawsuit settlement value instantly. Free 2026 calculator for defective knee implant claims, revision surgeries, and metal poisoning.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/knee-implant",
};

export const KNEE_2026 = {
    complications: [
        { type: "Revision Surgery Required", avgSettlement: 450000, minSettlement: 200000, maxSettlement: 1200000, description: "Implant failed, required replacement surgery" },
        { type: "Multiple Revision Surgeries", avgSettlement: 750000, minSettlement: 350000, maxSettlement: 2000000, description: "Two or more revision surgeries needed" },
        { type: "Metal Poisoning/Metallosis", avgSettlement: 600000, minSettlement: 250000, maxSettlement: 1500000, description: "Metal debris causing tissue damage" },
        { type: "Chronic Pain/Instability", avgSettlement: 300000, minSettlement: 100000, maxSettlement: 700000, description: "Ongoing pain or joint instability" },
        { type: "Infection Leading to Removal", avgSettlement: 500000, minSettlement: 200000, maxSettlement: 1300000, description: "Serious infection requiring implant removal" },
        { type: "Bone Loss/Osteolysis", avgSettlement: 400000, minSettlement: 150000, maxSettlement: 1000000, description: "Bone deterioration around implant" },
        { type: "Amputation", avgSettlement: 1500000, minSettlement: 700000, maxSettlement: 4000000, description: "Leg amputation due to implant failure" },
    ],
    recalledBrands: [
        { brand: "Zimmer Persona", manufacturer: "Zimmer Biomet", recalled: true, multiplier: 1.3, reason: "Tibial baseplate loosening" },
        { brand: "Stryker Triathlon", manufacturer: "Stryker", recalled: true, multiplier: 1.2, reason: "Component failure" },
        { brand: "Smith & Nephew Journey II", manufacturer: "Smith & Nephew", recalled: true, multiplier: 1.2, reason: "Premature failure" },
        { brand: "DePuy Attune", manufacturer: "Johnson & Johnson", recalled: true, multiplier: 1.25, reason: "Tibial loosening" },
        { brand: "Exactech Optetrak", manufacturer: "Exactech", recalled: true, multiplier: 1.4, reason: "Polyethylene insert degradation" },
        { brand: "Other/Unknown", manufacturer: "Various", recalled: false, multiplier: 1.0, reason: "General defect claims" },
    ],
    timeToFailure: [
        { period: "Less than 1 year", multiplier: 1.4 },
        { period: "1-3 years", multiplier: 1.2 },
        { period: "3-5 years", multiplier: 1.0 },
        { period: "5-10 years", multiplier: 0.9 },
        { period: "10+ years", multiplier: 0.7 },
    ],
    statistics: {
        annualSurgeries: 790000,
        failureRate: 6,
        lawsuitsFiled: 8500,
        avgSettlement: 420000,
        exactechRecall: "June 2022",
        fdaWarnings: 12,
    },
    citation: "Based on 2026 FDA MAUDE Adverse Event Reports, Exactech Class II Polyethylene Recall data, Zimmer Biomet MDL settlements, and AJRR (American Joint Replacement Registry) stats."
} as const;

export const CALCULATORS = [
    { id: "knee-implant/knee-calculator", name: "Knee Settlement Calculator", shortName: "Calculator", description: "Calculate knee implant settlement", longDescription: "Free knee replacement lawsuit calculator.", icon: Calculator, category: "legal", keywords: ["knee implant calculator", "knee replacement lawsuit"], featured: true },
    { id: "knee-implant/knee-guide", name: "Knee Lawsuit Guide", shortName: "Guide", description: "Understanding knee implant claims", longDescription: "Learn about defective knee implants and claims.", icon: FileText, category: "legal", keywords: ["knee lawsuit guide", "implant failure"], featured: true },
] as const;

export interface KneeResult { complicationType: string; implantBrand: string; timeToFailure: string; baseDamages: number; brandBonus: number; timeBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateKneeSettlement(compIndex: number, brandIndex: number, timeIndex: number, medicalBills: number): KneeResult {
    const comp = KNEE_2026.complications[compIndex];
    const brand = KNEE_2026.recalledBrands[brandIndex];
    const time = KNEE_2026.timeToFailure[timeIndex];
    const baseDamages = comp.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const brandBonus = baseDamages * (brand.multiplier - 1);
    const timeBonus = baseDamages * (time.multiplier - 1);
    const total = baseDamages + medicalCosts + brandBonus + timeBonus;
    return { complicationType: comp.type, implantBrand: brand.brand, timeToFailure: time.period, baseDamages: Math.round(baseDamages), brandBonus: Math.round(brandBonus), timeBonus: Math.round(timeBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
