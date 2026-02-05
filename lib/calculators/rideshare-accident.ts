// ============================================
// UBER/LYFT RIDESHARE ACCIDENT CALCULATOR
// 2026 Data - Based on State PUC Regulations & Rideshare Insurance Requirements
// ============================================

import { Calculator, FileText, Car, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Rideshare Accident Calculator",
    tagline: "Free Uber/Lyft Accident Calculator",
    description: "Calculate Uber or Lyft accident settlement value instantly. Free 2026 calculator with rideshare insurance tiers and liability coverage.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/rideshare-accident",
};

export const RIDESHARE_2026 = {
    insuranceTiers: [
        { tier: "Period 0 - App Off", coverage: 0, driverInsurance: "Personal auto policy only", description: "Rideshare company has no liability" },
        { tier: "Period 1 - App On, No Ride", coverage: 50000, driverInsurance: "Limited rideshare coverage", description: "$50K/$100K liability, $25K property" },
        { tier: "Period 2 - Ride Accepted", coverage: 1000000, driverInsurance: "Full commercial coverage", description: "$1M liability coverage active" },
        { tier: "Period 3 - Passenger in Car", coverage: 1000000, driverInsurance: "Full commercial coverage", description: "$1M liability + uninsured motorist" },
    ],
    injuryTypes: [
        { type: "Minor Injuries", avgSettlement: 25000, minSettlement: 5000, maxSettlement: 75000, description: "Soft tissue, minor whiplash" },
        { type: "Moderate Injuries", avgSettlement: 100000, minSettlement: 40000, maxSettlement: 250000, description: "Fractures, herniated discs" },
        { type: "Severe Injuries", avgSettlement: 400000, minSettlement: 150000, maxSettlement: 1000000, description: "Multiple fractures, surgery required" },
        { type: "Catastrophic Injuries", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, description: "TBI, spinal cord, permanent disability" },
        { type: "Wrongful Death", avgSettlement: 2000000, minSettlement: 750000, maxSettlement: 10000000, description: "Fatal rideshare accident" },
    ],
    statistics: {
        dailyRides: 17000000,
        annualAccidents: 97000,
        fatalitiesPerYear: 49,
        avgClaimValue: 42000,
        uberMarketShare: 68,
        lyftMarketShare: 32,
    },
    citation: "Based on California PUC Rideshare Regulations, State Insurance Requirements, and NHTSA 2026 data",
} as const;

export const CALCULATORS = [
    { id: "rideshare-accident/rideshare-calculator", name: "Rideshare Settlement Calculator", shortName: "Calculator", description: "Calculate Uber/Lyft accident settlement", longDescription: "Free rideshare injury calculator with insurance tier coverage.", icon: Calculator, category: "legal", keywords: ["uber accident calculator", "lyft accident settlement"], featured: true },
    { id: "rideshare-accident/rideshare-guide", name: "Rideshare Insurance Guide", shortName: "Guide", description: "Understanding rideshare insurance", longDescription: "Learn about Uber/Lyft insurance tiers and coverage periods.", icon: FileText, category: "legal", keywords: ["uber insurance guide", "lyft coverage tiers"], featured: true },
] as const;

export interface RideshareResult { insuranceTier: string; injuryType: string; maxCoverage: number; medicalCosts: number; lostWages: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateRideshareSettlement(tierIndex: number, injuryIndex: number, age: number, annualIncome: number, medicalBills: number): RideshareResult {
    const tier = RIDESHARE_2026.insuranceTiers[tierIndex];
    const injury = RIDESHARE_2026.injuryTypes[injuryIndex];
    const medicalCosts = medicalBills * 2;
    const remainingYears = Math.max(0, 65 - age);
    const lostWages = annualIncome * remainingYears * (injuryIndex >= 3 ? 0.7 : 0.25);
    const severityMultiplier = 2 + injuryIndex * 1.2;
    const painSuffering = medicalBills * severityMultiplier;
    let baseTotal = medicalCosts + lostWages + painSuffering;
    if (tier.coverage > 0 && baseTotal > tier.coverage) baseTotal = tier.coverage;
    return { insuranceTier: tier.tier, injuryType: injury.type, maxCoverage: tier.coverage, medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), painSuffering: Math.round(painSuffering), totalLow: Math.round(baseTotal * 0.6), totalMid: Math.round(baseTotal), totalHigh: Math.round(Math.min(baseTotal * 1.5, tier.coverage > 0 ? tier.coverage : baseTotal * 1.5)) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
