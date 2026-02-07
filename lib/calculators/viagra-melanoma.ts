// ============================================
// VIAGRA MELANOMA LAWSUIT CALCULATOR
// 2026 Skin Cancer Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Viagra Melanoma Lawsuit Calculator",
    tagline: "Free 2026 Viagra Melanoma Settlement Estimator",
    description: "Calculate Viagra melanoma lawsuit settlements. Sildenafil skin cancer claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/viagra-melanoma",
};

export const INJURY_TYPES = [
    { id: "melanoma-metastatic", name: "Metastatic Melanoma", description: "Advanced melanoma that has spread", avgSettlement: 500000, multiplier: 5.0 },
    { id: "melanoma-invasive", name: "Invasive Melanoma", description: "Melanoma requiring surgery", avgSettlement: 300000, multiplier: 3.5 },
    { id: "melanoma-early", name: "Early Stage Melanoma", description: "Melanoma in situ or early stage", avgSettlement: 150000, multiplier: 2.5 },
];

export const USAGE_DURATION = [
    { id: "over-5-years", name: "Over 5 Years", multiplier: 1.4 },
    { id: "3-5-years", name: "3-5 Years", multiplier: 1.25 },
    { id: "1-3-years", name: "1-3 Years", multiplier: 1.1 },
    { id: "under-1-year", name: "Under 1 Year", multiplier: 1.0 },
];

export const VIAGRA_2026 = {
    statistics: {
        status: "Active Litigation",
        issue: "Melanoma Risk",
        study: "JAMA Study 2014",
    },
    citations: [
        "JAMA Internal Medicine - Sildenafil and Melanoma Risk Study",
        "Viagra Melanoma Litigation Case Studies 2026",
    ],
};

export const CALCULATORS = [
    { id: "viagra-melanoma/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "viagra-melanoma/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Viagra melanoma lawsuit?", answer: "Viagra melanoma lawsuits allege that Pfizer failed to warn patients that sildenafil (Viagra) increases the risk of developing melanoma, a serious form of skin cancer." },
    { question: "What is the link between Viagra and melanoma?", answer: "A 2014 study in JAMA Internal Medicine found that men who used Viagra had an 84% increased risk of developing melanoma compared to non-users." },
    { question: "Who can file a Viagra melanoma lawsuit?", answer: "Men who used Viagra (sildenafil) and were subsequently diagnosed with melanoma skin cancer may qualify to file a lawsuit." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, cancer treatment costs, lost wages, pain and suffering, and wrongful death damages in fatal cases." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from melanoma diagnosis. Consult an attorney promptly to preserve your rights." },
];

export function calculateViagraMelanomaSettlement(
    injuryType: string,
    usageDuration: string,
    medicalExpenses: number,
    hadSurgery: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const usage = USAGE_DURATION.find(u => u.id === usageDuration) || USAGE_DURATION[0];

    const surgeryBonus = hadSurgery ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * usage.multiplier * surgeryBonus * docsBonus;
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
