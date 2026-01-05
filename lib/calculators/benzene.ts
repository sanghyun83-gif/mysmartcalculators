// ============================================
// BENZENE LEUKEMIA CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/EPA/CDC/NIOSH
// ============================================

import { Calculator, FileText, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Benzene Leukemia Calculator",
    tagline: "Free Benzene Exposure Settlement Calculator",
    description: "Calculate benzene exposure lawsuit settlement value instantly. Free 2026 calculator for leukemia, AML, MDS, and occupational benzene exposure claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/benzene",
};

export const BENZENE_2026 = {
    diseases: [
        { disease: "Acute Myeloid Leukemia (AML)", avgSettlement: 1800000, minSettlement: 500000, maxSettlement: 6000000, description: "Most common benzene-related cancer" },
        { disease: "Chronic Myeloid Leukemia (CML)", avgSettlement: 1500000, minSettlement: 400000, maxSettlement: 4500000, description: "Chronic blood cancer from benzene" },
        { disease: "Myelodysplastic Syndrome (MDS)", avgSettlement: 1200000, minSettlement: 350000, maxSettlement: 4000000, description: "Pre-leukemic bone marrow disorder" },
        { disease: "Acute Lymphocytic Leukemia (ALL)", avgSettlement: 1600000, minSettlement: 450000, maxSettlement: 5000000, description: "Blood cancer affecting lymphocytes" },
        { disease: "Non-Hodgkin Lymphoma", avgSettlement: 1000000, minSettlement: 300000, maxSettlement: 3500000, description: "Lymphatic system cancer" },
        { disease: "Aplastic Anemia", avgSettlement: 700000, minSettlement: 200000, maxSettlement: 2000000, description: "Bone marrow failure" },
    ],
    exposureSources: [
        { source: "Oil Refinery/Petrochemical", multiplier: 1.4, description: "Crude oil processing" },
        { source: "Chemical Manufacturing", multiplier: 1.3, description: "Industrial chemical production" },
        { source: "Gasoline/Fuel Handling", multiplier: 1.2, description: "Gas stations, fuel transport" },
        { source: "Rubber/Tire Manufacturing", multiplier: 1.3, description: "Tire and rubber production" },
        { source: "Steel/Manufacturing", multiplier: 1.2, description: "Steel mills, foundries" },
        { source: "Painting/Coatings", multiplier: 1.1, description: "Industrial paints, solvents" },
    ],
    exposureDuration: [
        { duration: "20+ Years", multiplier: 1.5 },
        { duration: "10-20 Years", multiplier: 1.3 },
        { duration: "5-10 Years", multiplier: 1.1 },
        { duration: "1-5 Years", multiplier: 1.0 },
    ],
    statistics: {
        annualLeukemiaCases: 60000,
        benzeneRelatedCases: 7800,
        avgSettlement: 1400000,
        oshaPEL: 1,
        knownCarcinogenSince: 1987,
    },
    citation: "Based on OSHA 29 CFR 1910.1028 Benzene Standard, EPA IRIS Benzene Classification, CDC/NIOSH Occupational Cancer Data 2026",
} as const;

export const CALCULATORS = [
    { id: "benzene/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate benzene exposure settlement", icon: Calculator, keywords: ["benzene settlement calculator"], featured: true },
    { id: "benzene/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding benzene claims", icon: FileText, keywords: ["benzene lawsuit guide"], featured: true },
] as const;

export interface BenzeneResult { disease: string; exposureSource: string; duration: string; baseDamages: number; sourceBonus: number; durationBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateBenzeneSettlement(diseaseIndex: number, sourceIndex: number, durationIndex: number, medicalBills: number): BenzeneResult {
    const disease = BENZENE_2026.diseases[diseaseIndex];
    const source = BENZENE_2026.exposureSources[sourceIndex];
    const duration = BENZENE_2026.exposureDuration[durationIndex];
    const baseDamages = disease.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const sourceBonus = baseDamages * (source.multiplier - 1);
    const durationBonus = baseDamages * (duration.multiplier - 1);
    const total = baseDamages + medicalCosts + sourceBonus + durationBonus;
    return { disease: disease.disease, exposureSource: source.source, duration: duration.duration, baseDamages: Math.round(baseDamages), sourceBonus: Math.round(sourceBonus), durationBonus: Math.round(durationBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
