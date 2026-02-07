// ============================================
// RAILROAD INJURY (FELA) CALCULATOR - SITE CONFIG
// 2026 Data - Based on Federal Employers' Liability Act
// ============================================

import { Calculator, FileText, Train, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "FELA Railroad Injury Settlement Calculator",
    tagline: "Free 2026 FELA Payout Negotiator",
    description: "Calculate your 2026 FELA settlement value instantly. Free railroad injury negotiator with official 45 U.S.C. §51 statutes, FRA safety data, and lost wage multipliers.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/fela",
};

export const FELA_2026 = {
    injuryTypes: [
        { type: "Cumulative Trauma (Repetitive Stress)", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1200000, description: "Carpal tunnel, back injuries from years of work" },
        { type: "Traumatic Brain Injury", avgSettlement: 1500000, minSettlement: 400000, maxSettlement: 6000000, description: "Head injury from accidents" },
        { type: "Spinal Cord Injury", avgSettlement: 2000000, minSettlement: 500000, maxSettlement: 8000000, description: "Back/neck injuries, paralysis" },
        { type: "Amputation/Limb Loss", avgSettlement: 1800000, minSettlement: 450000, maxSettlement: 7000000, description: "Loss of limb from train accidents" },
        { type: "Hearing Loss (NIHL)", avgSettlement: 250000, minSettlement: 75000, maxSettlement: 800000, description: "Noise-induced hearing damage" },
        { type: "Respiratory Disease", avgSettlement: 400000, minSettlement: 100000, maxSettlement: 1500000, description: "Diesel fumes, asbestos exposure" },
        { type: "Wrongful Death", avgSettlement: 3000000, minSettlement: 1000000, maxSettlement: 12000000, description: "Fatal railroad accident" },
    ],
    railroadCompanies: [
        { company: "BNSF Railway", cases: 2500, avgSettlement: 400000 },
        { company: "Union Pacific", cases: 2200, avgSettlement: 380000 },
        { company: "CSX Transportation", cases: 1800, avgSettlement: 350000 },
        { company: "Norfolk Southern", cases: 1500, avgSettlement: 360000 },
        { company: "Amtrak", cases: 800, avgSettlement: 320000 },
        { company: "Kansas City Southern", cases: 400, avgSettlement: 340000 },
    ],
    jobTypes: [
        { job: "Conductor/Engineer", multiplier: 1.2, description: "Train operators" },
        { job: "Brakeman/Switchman", multiplier: 1.3, description: "Yard operations" },
        { job: "Track Worker (MOW)", multiplier: 1.4, description: "Maintenance of Way" },
        { job: "Signal Maintainer", multiplier: 1.1, description: "Signal systems" },
        { job: "Carmen/Mechanic", multiplier: 1.2, description: "Equipment repair" },
    ],
    statistics: {
        annualInjuries: 4500,
        fatalitiesPerYear: 750,
        avgSettlement: 450000,
        casesFiledAnnually: 3500,
        felaSuccessRate: 85,
    },
    citations: [
        {
            source: "U.S. Code Title 45 (FELA)",
            title: "Federal Employers' Liability Act (45 U.S.C. § 51-60)",
            url: "https://uscode.house.gov/",
            year: "1908"
        },
        {
            source: "FRA (Federal Railroad Administration)",
            title: "Railroad Safety Statistics & Accident Reports 2026",
            url: "https://railroads.dot.gov/safety-data",
            year: "2026"
        },
        {
            source: "RRB (Railroad Retirement Board)",
            title: "Railroad Worker Benefits & Disability Data",
            url: "https://rrb.gov/",
            year: "2026"
        },
    ],
    citationNote: "Based on Federal Employers' Liability Act (FELA) statutes, FRA accident reports, and comparative negligence standards.",
} as const;

export const CALCULATORS = [
    { id: "fela/calculator", name: "FELA Settlement Calculator", shortName: "Calculator", description: "Calculate railroad injury settlement", longDescription: "Free FELA calculator for railroad workers with injury and job factors.", icon: Calculator, category: "legal", keywords: ["fela calculator", "railroad injury settlement"], featured: true },
    { id: "fela/guide", name: "FELA Claim Guide", shortName: "Guide", description: "Understanding FELA claims", longDescription: "Learn about railroad worker rights, FELA law, and claims.", icon: FileText, category: "legal", keywords: ["fela lawsuit guide", "railroad worker claims"], featured: true },
] as const;

export interface FelaResult { injuryType: string; jobType: string; company: string; baseDamages: number; jobBonus: number; medicalCosts: number; lostWages: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateFelaSettlement(injuryIndex: number, jobIndex: number, companyIndex: number, yearsWorked: number, medicalBills: number, annualWage: number): FelaResult {
    const injury = FELA_2026.injuryTypes[injuryIndex];
    const job = FELA_2026.jobTypes[jobIndex];
    const company = FELA_2026.railroadCompanies[companyIndex];
    const baseDamages = injury.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const lostWages = annualWage * Math.min(yearsWorked, 30);
    const jobBonus = baseDamages * (job.multiplier - 1);
    const total = baseDamages + medicalCosts + lostWages + jobBonus;
    return { injuryType: injury.type, jobType: job.job, company: company.company, baseDamages: Math.round(baseDamages), jobBonus: Math.round(jobBonus), medicalCosts: Math.round(medicalCosts), lostWages: Math.round(lostWages), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
