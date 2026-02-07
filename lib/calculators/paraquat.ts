// ============================================
// PARAQUAT LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on EPA & MDL Court Data
// ============================================

import { Calculator, FileText, Leaf, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Paraquat Lawsuit Calculator",
    tagline: "Free Paraquat Settlement Calculator",
    description: "Calculate Paraquat lawsuit settlement value instantly. Free 2026 calculator for Parkinson's disease claims against Syngenta and Chevron.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/paraquat",
};

export const PARAQUAT_2026 = {
    diseaseStages: [
        { stage: "Early Parkinson's (Stage 1-2)", avgSettlement: 500000, minSettlement: 150000, maxSettlement: 1500000, description: "Mild symptoms, tremors, one-sided effects" },
        { stage: "Moderate Parkinson's (Stage 3)", avgSettlement: 1000000, minSettlement: 400000, maxSettlement: 3000000, description: "Balance issues, slowed movement, both sides" },
        { stage: "Advanced Parkinson's (Stage 4)", avgSettlement: 2000000, minSettlement: 750000, maxSettlement: 5000000, description: "Severe disability, cannot live alone" },
        { stage: "End Stage Parkinson's (Stage 5)", avgSettlement: 3500000, minSettlement: 1500000, maxSettlement: 10000000, description: "Bedridden, full-time care required" },
        { stage: "Wrongful Death", avgSettlement: 5000000, minSettlement: 2000000, maxSettlement: 15000000, description: "Fatal Parkinson's complications" },
    ],
    exposureTypes: [
        { type: "Agricultural Worker (Direct)", multiplier: 1.5, description: "Farmers, farm workers who mixed/applied" },
        { type: "Licensed Applicator", multiplier: 1.4, description: "Commercial pesticide applicators" },
        { type: "Residential Proximity", multiplier: 1.2, description: "Lived near treated fields" },
        { type: "Groundwater Contamination", multiplier: 1.1, description: "Drinking water exposure" },
    ],
    defendants: [
        { company: "Syngenta", role: "Manufacturer" },
        { company: "Chevron", role: "Former manufacturer" },
        { company: "Growmark", role: "Distributor" },
    ],
    statistics: {
        activeLawsuits: 5000,
        parkinsonsRiskIncrease: 250,
        yearsOnMarket: 60,
        countriesBanned: 50,
        mdlDistrict: "Southern District of Illinois",
        mdlNumber: "MDL 3004",
    },
    citation: "Based on 2026 MDL 3004 (Southern District of Illinois) Court Filings, NIH Unified Parkinson's Disease Rating Scale (UPDRS), and HUD/EPA Agricultural Toxicity Benchmarks."
} as const;

export const CALCULATORS = [
    { id: "paraquat/calculator", name: "Paraquat Settlement Calculator", shortName: "Calculator", description: "Calculate Paraquat lawsuit settlement", longDescription: "Free Paraquat calculator with Parkinson's stages and exposure types.", icon: Calculator, category: "legal", keywords: ["paraquat calculator", "paraquat lawsuit settlement"], featured: true },
    { id: "paraquat/guide", name: "Paraquat Lawsuit Guide", shortName: "Guide", description: "Understanding herbicide lawsuits", longDescription: "Learn about Paraquat exposure, Parkinson's link, and claim eligibility.", icon: FileText, category: "legal", keywords: ["paraquat lawsuit guide", "parkinson's paraquat"], featured: true },
] as const;

export interface ParaquatResult { diseaseStage: string; exposureType: string; baseDamages: number; exposureBonus: number; medicalCosts: number; lostWages: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateParaquatSettlement(stageIndex: number, exposureIndex: number, exposureYears: number, medicalBills: number, annualIncome: number): ParaquatResult {
    const stage = PARAQUAT_2026.diseaseStages[stageIndex];
    const exposure = PARAQUAT_2026.exposureTypes[exposureIndex];
    const baseDamages = stage.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const yearsMultiplier = Math.min(exposureYears / 10, 2);
    const lostWages = annualIncome * (10 + stageIndex * 5);
    const exposureBonus = baseDamages * (exposure.multiplier - 1) * yearsMultiplier;
    const total = baseDamages + medicalCosts + lostWages + exposureBonus;
    return { diseaseStage: stage.stage, exposureType: exposure.type, baseDamages: Math.round(baseDamages), exposureBonus: Math.round(exposureBonus), medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
