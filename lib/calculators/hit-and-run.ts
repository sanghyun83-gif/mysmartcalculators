// ============================================
// HIT AND RUN CALCULATOR - SITE CONFIG
// 2026 Data - Based on NHTSA & AAA Foundation
// ============================================

import { Calculator, FileText, Car, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Hit and Run Calculator",
    tagline: "Free Hit and Run Settlement Calculator",
    description: "Calculate hit and run accident settlement value instantly. Free 2026 calculator with uninsured motorist coverage and victim compensation funds.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/hit-and-run",
};

export const HITRUN_2026 = {
    compensationSources: [
        { source: "Uninsured Motorist (UM) Coverage", avgPayout: 75000, maxPayout: 250000, description: "Your own auto policy UM coverage" },
        { source: "Underinsured Motorist (UIM)", avgPayout: 50000, maxPayout: 100000, description: "When UM limits are exceeded" },
        { source: "MedPay/PIP Coverage", avgPayout: 15000, maxPayout: 50000, description: "No-fault medical coverage" },
        { source: "State Victim Compensation Fund", avgPayout: 25000, maxPayout: 100000, description: "State-run crime victim funds" },
        { source: "Civil Lawsuit (if driver found)", avgPayout: 150000, maxPayout: 500000, description: "Direct lawsuit against fleeing driver" },
    ],
    injuryTypes: [
        { type: "Minor Injuries", avgSettlement: 25000, minSettlement: 5000, maxSettlement: 75000, description: "Soft tissue, minor whiplash" },
        { type: "Moderate Injuries", avgSettlement: 75000, minSettlement: 30000, maxSettlement: 200000, description: "Fractures, concussions" },
        { type: "Severe Injuries", avgSettlement: 250000, minSettlement: 100000, maxSettlement: 750000, description: "Multiple fractures, TBI" },
        { type: "Catastrophic Injuries", avgSettlement: 750000, minSettlement: 300000, maxSettlement: 2500000, description: "Permanent disability" },
        { type: "Wrongful Death", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, description: "Fatal hit and run" },
    ],
    statistics: {
        annualHitRuns: 737000,
        annualDeaths: 2049,
        unsolvedPercent: 50,
        pedestrianPercent: 65,
        nighttimePercent: 72,
        alcoholInvolved: 62,
    },
    citation: "Based on NHTSA (National Highway Traffic Safety Administration) and AAA Foundation for Traffic Safety 2026 data",
} as const;

export const CALCULATORS = [
    { id: "hit-and-run/hitrun-calculator", name: "Hit & Run Settlement Calculator", shortName: "Calculator", description: "Calculate hit and run settlement", longDescription: "Free hit and run calculator with UM coverage and victim funds.", icon: Calculator, category: "legal", keywords: ["hit and run calculator", "hit and run settlement"], featured: true },
    { id: "hit-and-run/hitrun-guide", name: "Hit & Run Guide", shortName: "Guide", description: "Understanding hit and run claims", longDescription: "Learn about UM coverage, victim compensation, and legal options.", icon: FileText, category: "legal", keywords: ["hit and run guide", "uninsured motorist"], featured: true },
] as const;

export interface HitRunResult { compensationSource: string; injuryType: string; maxAvailable: number; medicalCosts: number; lostWages: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateHitRunSettlement(sourceIndex: number, injuryIndex: number, age: number, annualIncome: number, medicalBills: number, hasUM: boolean): HitRunResult {
    const source = HITRUN_2026.compensationSources[sourceIndex];
    const injury = HITRUN_2026.injuryTypes[injuryIndex];
    const medicalCosts = medicalBills * 2;
    const remainingYears = Math.max(0, 65 - age);
    const lostWages = annualIncome * remainingYears * (injuryIndex >= 3 ? 0.6 : 0.2);
    const severityMultiplier = 1.5 + injuryIndex * 1.0;
    const painSuffering = medicalBills * severityMultiplier;
    let baseTotal = medicalCosts + lostWages + painSuffering;
    const maxAvailable = hasUM ? source.maxPayout : HITRUN_2026.compensationSources[3].maxPayout;
    if (baseTotal > maxAvailable) baseTotal = maxAvailable;
    return { compensationSource: source.source, injuryType: injury.type, maxAvailable, medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), painSuffering: Math.round(painSuffering), totalLow: Math.round(baseTotal * 0.5), totalMid: Math.round(baseTotal), totalHigh: Math.round(Math.min(baseTotal * 1.4, maxAvailable)) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
