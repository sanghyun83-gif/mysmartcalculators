// ============================================
// SCAFFOLDING ACCIDENT CALCULATOR - Standard Version
// 2026 Data - Based on OSHA/BLS/NIOSH
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Scaffolding Accident Calculator",
    tagline: "Free Scaffolding Injury Settlement Calculator",
    description: "Calculate scaffolding fall and collapse injury settlement value instantly. Free 2026 calculator for construction scaffold accidents.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/scaffolding",
};

export const SCAFFOLDING_2026 = {
    accidentTypes: [
        { type: "Scaffold Collapse", avgSettlement: 1400000, minSettlement: 500000, maxSettlement: 8000000, description: "Complete or partial structure failure" },
        { type: "Fall from Scaffold", avgSettlement: 1100000, minSettlement: 350000, maxSettlement: 6000000, description: "Worker falls from elevated platform" },
        { type: "Falling Object Strike", avgSettlement: 750000, minSettlement: 200000, maxSettlement: 4000000, description: "Tools, materials fall from scaffold" },
        { type: "Electrocution", avgSettlement: 1200000, minSettlement: 400000, maxSettlement: 7000000, description: "Contact with power lines" },
        { type: "Planking/Platform Failure", avgSettlement: 950000, minSettlement: 300000, maxSettlement: 5000000, description: "Broken or missing planks" },
        { type: "Improper Access Fall", avgSettlement: 800000, minSettlement: 250000, maxSettlement: 4500000, description: "Ladder/access point failure" },
    ],
    oshaViolations: [
        { violation: "No Fall Protection (1926.451)", multiplier: 1.6, description: "Missing guardrails, harness" },
        { violation: "Defective Planking", multiplier: 1.4, description: "Damaged, undersized, or missing planks" },
        { violation: "Improper Erection", multiplier: 1.5, description: "Not following manufacturer specs" },
        { violation: "Overloading", multiplier: 1.4, description: "Exceeding weight capacity" },
        { violation: "No Training", multiplier: 1.3, description: "Untrained workers on scaffold" },
        { violation: "No Violation Documented", multiplier: 1.0, description: "Standard liability" },
    ],
    statistics: {
        annualScaffoldDeaths: 60,
        annualScaffoldInjuries: 4500,
        fallPercentage: 72,
        avgSettlement: 950000,
        oshaViolations: 3200,
    },
    citation: "Based on OSHA Scaffolding Standard 1926.451, BLS Construction Injury Data 2026, NIOSH Fall Prevention Reports",
} as const;

export const CALCULATORS = [
    { id: "scaffolding/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate scaffolding injury settlement", icon: Calculator, keywords: ["scaffolding injury calculator"], featured: true },
    { id: "scaffolding/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding scaffolding claims", icon: FileText, keywords: ["scaffolding lawsuit guide"], featured: true },
] as const;

export interface ScaffoldingResult { accidentType: string; baseDamages: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateScaffoldingSettlement(typeIndex: number, medicalBills: number): ScaffoldingResult {
    const accident = SCAFFOLDING_2026.accidentTypes[typeIndex];
    const baseDamages = accident.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const total = baseDamages + medicalCosts;
    return { accidentType: accident.type, baseDamages: Math.round(baseDamages), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
