// ============================================
// NEXIUM KIDNEY LAWSUIT CALCULATOR
// 2026 PPI Kidney Damage Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Nexium Kidney Lawsuit Calculator",
    tagline: "Free 2026 Nexium Kidney Settlement Estimator",
    description: "Calculate Nexium kidney damage lawsuit settlements. PPI chronic kidney disease claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/nexium",
};

export const INJURY_TYPES = [
    { id: "kidney-failure", name: "Kidney Failure / ESRD", description: "End-stage renal disease requiring dialysis", avgSettlement: 400000, multiplier: 5.0 },
    { id: "ckd", name: "Chronic Kidney Disease (CKD)", description: "Progressive kidney function loss", avgSettlement: 250000, multiplier: 3.5 },
    { id: "acute-kidney", name: "Acute Kidney Injury", description: "Sudden kidney damage", avgSettlement: 175000, multiplier: 2.5 },
];

export const USAGE_DURATION = [
    { id: "over-3-years", name: "Over 3 Years", multiplier: 1.4 },
    { id: "1-3-years", name: "1-3 Years", multiplier: 1.2 },
    { id: "6-12-months", name: "6-12 Months", multiplier: 1.1 },
    { id: "under-6-months", name: "Under 6 Months", multiplier: 1.0 },
];

export const NEXIUM_2026 = {
    statistics: {
        status: "MDL Litigation",
        issue: "Kidney Damage",
        mdl: "MDL 2789",
    },
    citations: [
        "In Re: Proton-Pump Inhibitor Products Liability Litigation (MDL 2789)",
        "FDA PPI Kidney Risk Warnings 2026",
    ],
};

export const CALCULATORS = [
    { id: "nexium/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "nexium/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Nexium kidney lawsuit?", answer: "Nexium kidney lawsuits allege that AstraZeneca failed to warn patients that long-term use of the proton pump inhibitor (PPI) can cause serious kidney damage including chronic kidney disease and kidney failure." },
    { question: "What kidney problems are linked to Nexium?", answer: "Studies link Nexium and other PPIs to acute interstitial nephritis, chronic kidney disease (CKD), and end-stage renal disease (ESRD) requiring dialysis or transplant." },
    { question: "Who can file a Nexium lawsuit?", answer: "Anyone who took Nexium or generic esomeprazole and developed kidney problems including CKD, acute kidney injury, or kidney failure may qualify to file a lawsuit." },
    { question: "What is MDL 2789?", answer: "MDL 2789 is the federal multi-district litigation consolidating PPI kidney damage lawsuits involving Nexium, Prilosec, Prevacid, and other proton pump inhibitors." },
    { question: "What damages can I recover?", answer: "Compensation can include dialysis costs, transplant expenses, medical bills, lost wages, pain and suffering, and ongoing kidney treatment costs." },
];

export function calculateNexiumSettlement(
    injuryType: string,
    usageDuration: string,
    medicalExpenses: number,
    requiresDialysis: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const usage = USAGE_DURATION.find(u => u.id === usageDuration) || USAGE_DURATION[0];

    const dialysisBonus = requiresDialysis ? 1.5 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * usage.multiplier * dialysisBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        usageDuration: usage.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
