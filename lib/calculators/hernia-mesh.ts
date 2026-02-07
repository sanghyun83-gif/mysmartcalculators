// ============================================
// HERNIA MESH LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on FDA & MDL Court Data
// ============================================

import { Calculator, FileText, Activity, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Bard Hernia Mesh Settlement Calculator",
    tagline: "Free 2026 Bard Hernia Mesh Payout Negotiator",
    description: "Calculate your 2026 hernia mesh lawsuit settlement value instantly. Free Bard negotiator with official MDL 2846 litigation benchmarks, FDA MAUDE safety data, and revision surgery analysis.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/hernia-mesh",
};

export const HERNIA_2026 = {
    complications: [
        { type: "Mesh Migration/Shrinkage", avgSettlement: 250000, minSettlement: 75000, maxSettlement: 750000, description: "Mesh moved or contracted after surgery" },
        { type: "Chronic Pain Syndrome", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1000000, description: "Ongoing severe pain from mesh" },
        { type: "Mesh Rejection/Infection", avgSettlement: 450000, minSettlement: 150000, maxSettlement: 1500000, description: "Body rejected mesh, severe infection" },
        { type: "Bowel/Organ Perforation", avgSettlement: 750000, minSettlement: 300000, maxSettlement: 2500000, description: "Mesh perforated intestines or organs" },
        { type: "Multiple Revision Surgeries", avgSettlement: 600000, minSettlement: 200000, maxSettlement: 2000000, description: "Required 2+ corrective surgeries" },
        { type: "Wrongful Death", avgSettlement: 2000000, minSettlement: 750000, maxSettlement: 8000000, description: "Fatal mesh complications" },
    ],
    meshTypes: [
        { mesh: "Ethicon Physiomesh", manufacturer: "Johnson & Johnson", recalled: true },
        { mesh: "Bard/Davol Mesh", manufacturer: "C.R. Bard", recalled: false },
        { mesh: "Atrium C-QUR", manufacturer: "Atrium Medical", recalled: true },
        { mesh: "Covidien Parietex", manufacturer: "Medtronic", recalled: false },
    ],
    surgeryFactors: [
        { factor: "Single Revision Surgery", multiplier: 1.0, description: "One corrective surgery needed" },
        { factor: "Two Revision Surgeries", multiplier: 1.4, description: "Two corrective surgeries" },
        { factor: "Three+ Revision Surgeries", multiplier: 1.8, description: "Multiple failed repairs" },
        { factor: "Permanent Disability", multiplier: 2.2, description: "Unable to work due to complications" },
    ],
    statistics: {
        fdaReports: 80000,
        activeLawsuits: 20000,
        meshRecalls: 12,
        avgSettlement: 350000,
        mdlNumber: "MDL 2846",
    },
    citations: [
        "MDL 2846 - Davol, Inc./C.R. Bard, Inc., Polypropylene Hernia Mesh Products Liability Litigation",
        "FDA MAUDE (Manufacturer and User Facility Device Experience) Database",
        "Clinical Outcomes in Hernia Repair (Revision Surgery Benchmarks)",
    ],
    citation: "Based on official MDL 2846 (S.D. Ohio) litigation benchmarks, FDA MAUDE safety database metrics, and clinical revision surgery cost analysis.",
} as const;

export const CALCULATORS = [
    { id: "hernia-mesh/hernia-calculator", name: "Hernia Mesh Settlement Calculator", shortName: "Calculator", description: "Calculate hernia mesh lawsuit settlement", longDescription: "Free hernia mesh calculator with complication types and surgery factors.", icon: Calculator, category: "legal", keywords: ["hernia mesh calculator", "mesh lawsuit settlement"], featured: true },
    { id: "hernia-mesh/hernia-guide", name: "Hernia Mesh Lawsuit Guide", shortName: "Guide", description: "Understanding mesh lawsuits", longDescription: "Learn about mesh complications, recalls, and claim eligibility.", icon: FileText, category: "legal", keywords: ["hernia mesh lawsuit guide", "mesh recall"], featured: true },
] as const;

export interface HerniaResult { complication: string; surgeryFactor: string; baseDamages: number; surgeryBonus: number; medicalCosts: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateHerniaMeshSettlement(complicationIndex: number, surgeryIndex: number, revisionCount: number, medicalBills: number): HerniaResult {
    const complication = HERNIA_2026.complications[complicationIndex];
    const surgery = HERNIA_2026.surgeryFactors[surgeryIndex];
    const baseDamages = complication.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const painSuffering = baseDamages * 0.5;
    const revisionMultiplier = Math.min(revisionCount / 3, 2);
    const surgeryBonus = baseDamages * (surgery.multiplier - 1) * revisionMultiplier;
    const total = baseDamages + medicalCosts + painSuffering + surgeryBonus;
    return { complication: complication.type, surgeryFactor: surgery.factor, baseDamages: Math.round(baseDamages), surgeryBonus: Math.round(surgeryBonus), medicalCosts: Math.round(medicalCosts), painSuffering: Math.round(painSuffering), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
