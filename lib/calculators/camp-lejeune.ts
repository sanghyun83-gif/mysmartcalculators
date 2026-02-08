// ============================================
// CAMP LEJEUNE WATER CALCULATOR - SITE CONFIG
// 2026 Data - Based on PACT Act & VA Claims
// ============================================

import { Calculator, FileText, Droplet, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Camp Lejeune Settlement Calculator",
    tagline: "Free 2026 Camp Lejeune & Toxic Water Payout Negotiator",
    description: "Calculate your 2026 Camp Lejeune settlement value instantly. Free toxic water negotiator with official PACT Act (CLJA) guidelines, DOJ settlement benchmarks, and VA health data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/camp-lejeune",
};

export const LEJEUNE_2026 = {
    conditions: [
        { condition: "Cancer (Any Type)", avgSettlement: 550000, minSettlement: 250000, maxSettlement: 1500000, tier: 1, description: "Bladder, kidney, liver, leukemia, non-Hodgkin's lymphoma, etc." },
        { condition: "Parkinson's Disease", avgSettlement: 450000, minSettlement: 200000, maxSettlement: 1200000, tier: 1, description: "Neurological condition linked to contamination" },
        { condition: "Kidney Disease/Failure", avgSettlement: 400000, minSettlement: 180000, maxSettlement: 1000000, tier: 1, description: "Chronic or acute kidney conditions" },
        { condition: "Liver Disease", avgSettlement: 380000, minSettlement: 160000, maxSettlement: 950000, tier: 1, description: "Hepatic steatosis, cirrhosis, liver damage" },
        { condition: "Aplastic Anemia", avgSettlement: 350000, minSettlement: 150000, maxSettlement: 900000, tier: 2, description: "Bone marrow failure condition" },
        { condition: "Multiple Myeloma", avgSettlement: 500000, minSettlement: 220000, maxSettlement: 1300000, tier: 1, description: "Blood cancer affecting plasma cells" },
        { condition: "Scleroderma", avgSettlement: 300000, minSettlement: 120000, maxSettlement: 750000, tier: 2, description: "Autoimmune connective tissue disease" },
        { condition: "Birth Defects (In Utero)", avgSettlement: 600000, minSettlement: 250000, maxSettlement: 2000000, tier: 1, description: "Child born with defects due to exposure" },
        { condition: "Infertility/Miscarriage", avgSettlement: 280000, minSettlement: 100000, maxSettlement: 700000, tier: 2, description: "Reproductive issues from contamination" },
        { condition: "Neurobehavioral Effects", avgSettlement: 250000, minSettlement: 80000, maxSettlement: 600000, tier: 2, description: "Cognitive and behavioral disorders" },
    ],
    exposureYears: [
        { period: "1-2 years at Camp Lejeune", multiplier: 0.7 },
        { period: "2-5 years", multiplier: 0.9 },
        { period: "5-10 years", multiplier: 1.0 },
        { period: "10-20 years", multiplier: 1.2 },
        { period: "20+ years", multiplier: 1.5 },
    ],
    claimantTypes: [
        { type: "Veteran (Active Duty)", multiplier: 1.0 },
        { type: "Veteran's Family Member", multiplier: 0.9 },
        { type: "Civilian Employee", multiplier: 0.95 },
        { type: "Child (In Utero Exposure)", multiplier: 1.3 },
        { type: "Deceased (Wrongful Death)", multiplier: 1.4 },
    ],
    contaminants: [
        { name: "TCE (Trichloroethylene)", level: "1400x safe limit" },
        { name: "PCE (Perchloroethylene)", level: "43x safe limit" },
        { name: "Benzene", level: "35x safe limit" },
        { name: "Vinyl Chloride", level: "Severely elevated" },
    ],
    expertMultipliers: {
        eesTrack: 1.15, // DOJ Elective Early Settlement Track
        tortPremium: 1.65, // Full Litigation/Trial Delta
        latencyAlpha: 1.25, // Exposure > 10 years bonus
        peakPeriodAlpha: 1.1, // 1970-1985 peak contamination
    },
    statistics: {
        exposedPeople: 1000000,
        claimsFiled: 250000,
        avgSettlement: 400000,
        deadlineExtended: "August 2026",
        contaminationPeriod: "1953-1987",
        pactActSigned: "August 10, 2022",
    },
    citation: "Based on PACT Act (Camp Lejeune Justice Act 2022), VA Health Care Eligibility, DOJ Settlement Data 2026, and ATSDR Water Studies",
} as const;

export const CALCULATORS = [
    { id: "camp-lejeune/lejeune-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate Camp Lejeune settlement", longDescription: "Free Camp Lejeune water contamination calculator.", icon: Calculator, category: "legal", keywords: ["camp lejeune calculator", "water contamination settlement"], featured: true },
    { id: "camp-lejeune/lejeune-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding Camp Lejeune claims", longDescription: "Learn about PACT Act, eligibility, and claims.", icon: FileText, category: "legal", keywords: ["camp lejeune lawsuit guide", "pact act claims"], featured: true },
] as const;

export interface LejeuneResult {
    condition: string;
    exposurePeriod: string;
    claimantType: string;
    baseDamages: number;
    exposureBonus: number;
    claimantBonus: number;
    medicalCosts: number;
    expertDelta: number;
    totalLow: number;
    totalMid: number;
    totalHigh: number;
    isEESEligible: boolean;
}

export function calculateLejeuneSettlement(
    conditionIndex: number,
    exposureIndex: number,
    claimantIndex: number,
    medicalBills: number,
    isExpertMode: boolean = false,
    useEESTrack: boolean = false
): LejeuneResult {
    const cond = LEJEUNE_2026.conditions[conditionIndex];
    const exposure = LEJEUNE_2026.exposureYears[exposureIndex];
    const claimant = LEJEUNE_2026.claimantTypes[claimantIndex];
    const multipliers = LEJEUNE_2026.expertMultipliers;

    let baseDamages = cond.avgSettlement;
    let expertDelta = 0;

    // Apply Expert Multipliers if in Expert Mode
    if (isExpertMode) {
        if (useEESTrack && cond.tier === 1) {
            baseDamages *= multipliers.eesTrack; // Guaranteed but capped DOJ track
        } else {
            baseDamages *= multipliers.tortPremium; // Higher potential through litigation
        }

        // Latency Alpha for long-term residents
        if (exposure.multiplier >= 1.2) {
            baseDamages *= multipliers.latencyAlpha;
        }

        expertDelta = baseDamages - cond.avgSettlement;
    }

    const medicalCosts = medicalBills * 2;
    const exposureBonus = baseDamages * (exposure.multiplier - 1);
    const claimantBonus = baseDamages * (claimant.multiplier - 1);
    const total = baseDamages + medicalCosts + exposureBonus + claimantBonus;

    return {
        condition: cond.condition,
        exposurePeriod: exposure.period,
        claimantType: claimant.type,
        baseDamages: Math.round(baseDamages),
        exposureBonus: Math.round(exposureBonus),
        claimantBonus: Math.round(claimantBonus),
        medicalCosts: Math.round(medicalCosts),
        expertDelta: Math.round(expertDelta),
        totalLow: Math.round(total * 0.8),
        totalMid: Math.round(total),
        totalHigh: Math.round(total * 1.45),
        isEESEligible: cond.tier === 1
    };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
