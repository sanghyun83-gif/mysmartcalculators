// ============================================
// OFFSHORE MARITIME CALCULATOR - SITE CONFIG
// 2026 Data - Based on Jones Act & Maritime Law
// ============================================

import { Calculator, FileText, Anchor, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Jones Act Settlement Calculator",
    tagline: "Free 2026 Offshore Injury Payout Negotiator",
    description: "Calculate your 2026 Jones Act settlement value instantly. Free maritime negotiator with official Maintenance & Cure rates, Unseaworthiness benchmarks, and USCG casualty data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/offshore",
};

export const MARITIME_2026 = {
    injuryTypes: [
        { type: "Ship/Vessel Collision", avgSettlement: 1500000, minSettlement: 300000, maxSettlement: 8000000, description: "Collisions at sea, groundings" },
        { type: "Slip & Fall on Deck", avgSettlement: 500000, minSettlement: 100000, maxSettlement: 2500000, description: "Wet deck, unsecured cargo" },
        { type: "Crane/Lifting Injuries", avgSettlement: 1200000, minSettlement: 250000, maxSettlement: 6000000, description: "Loading/unloading accidents" },
        { type: "Drowning/Man Overboard", avgSettlement: 2500000, minSettlement: 500000, maxSettlement: 15000000, description: "Overboard incidents, rescue failure" },
        { type: "Unseaworthiness", avgSettlement: 800000, minSettlement: 150000, maxSettlement: 4000000, description: "Defective vessel conditions" },
        { type: "Maintenance & Cure Denial", avgSettlement: 400000, minSettlement: 75000, maxSettlement: 1500000, description: "Denied medical/wages during recovery" },
        { type: "Wrongful Death at Sea", avgSettlement: 3500000, minSettlement: 1000000, maxSettlement: 20000000, description: "Fatal maritime accidents" },
    ],
    workerTypes: [
        { type: "Jones Act Seaman", multiplier: 1.5, description: "30%+ work on vessel in navigation" },
        { type: "Longshore Worker (LHWCA)", multiplier: 1.2, description: "Harbor, dock, terminal workers" },
        { type: "Harbor Worker", multiplier: 1.1, description: "Shipbuilders, ship repair workers" },
        { type: "Cruise Ship Worker", multiplier: 1.3, description: "Cruise line crew members" },
        { type: "Commercial Fisherman", multiplier: 1.4, description: "Commercial fishing vessel crew" },
    ],
    vesselTypes: [
        { vessel: "Cargo Ships", type: "Container, bulk carriers" },
        { vessel: "Tankers", type: "Oil, chemical, LNG" },
        { vessel: "Tugboats", type: "Harbor tugs, ocean tugs" },
        { vessel: "Cruise Ships", type: "Passenger vessels" },
        { vessel: "Fishing Vessels", type: "Commercial fishing boats" },
        { vessel: "Barges", type: "Deck barges, tank barges" },
    ],
    statistics: {
        annualInjuries: 4500,
        jonesActCases: 8000,
        avgSettlement: 1200000,
        maintenanceCure: 95,
        uscgReports: 12000,
    },
    citations: [
        {
            source: "U.S. Code Title 46 (Merchant Marine Act of 1920)",
            title: "The Jones Act: Seaman's Rights and Recovery",
            url: "https://uscode.house.gov/",
            year: "1920"
        },
        {
            source: "USCG (United States Coast Guard)",
            title: "Marine Casualty and Pollution Data",
            url: "https://www.dco.uscg.mil/",
            year: "2026"
        },
        {
            source: "BSEE (Bureau of Safety and Environmental Enforcement)",
            title: "Offshore Incident Statistics",
            url: "https://www.bsee.gov/stats-facts",
            year: "2026"
        },
    ],
    citationNote: "Based on 46 U.S.C. §30104 (Jones Act), General Maritime Law (Unseaworthiness), and USCG Marine Casualty benchmarks.",
} as const;

export const CALCULATORS = [
    { id: "offshore/calculator", name: "Offshore Settlement Calculator", shortName: "Calculator", description: "Calculate maritime injury settlement", longDescription: "Free maritime calculator with Jones Act and LHWCA factors.", icon: Calculator, category: "legal", keywords: ["offshore calculator", "jones act settlement"], featured: true },
    { id: "offshore/guide", name: "Maritime Injury Guide", shortName: "Guide", description: "Understanding maritime law", longDescription: "Learn about Jones Act, LHWCA, and seaman rights.", icon: FileText, category: "legal", keywords: ["maritime injury guide", "jones act claims"], featured: true },
] as const;

export interface OffshoreResult { injuryType: string; workerType: string; baseDamages: number; workerBonus: number; medicalCosts: number; lostWages: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateOffshoreSettlement(injuryIndex: number, workerIndex: number, yearsAtSea: number, medicalBills: number, monthlyWage: number): OffshoreResult {
    const injury = MARITIME_2026.injuryTypes[injuryIndex];
    const worker = MARITIME_2026.workerTypes[workerIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const lostWages = monthlyWage * 12 * (5 + Math.min(yearsAtSea, 20));
    const workerBonus = baseDamages * (worker.multiplier - 1);
    const total = baseDamages + medicalCosts + lostWages + workerBonus;
    return { injuryType: injury.type, workerType: worker.type, baseDamages: Math.round(baseDamages), workerBonus: Math.round(workerBonus), medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
