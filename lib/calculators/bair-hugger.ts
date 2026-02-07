// ============================================
// BAIR HUGGER LAWSUIT CALCULATOR
// 2026 Surgical Warming Blanket Infection - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Bair Hugger Lawsuit Calculator",
    tagline: "Free 2026 Surgical Infection Settlement Estimator",
    description: "Calculate Bair Hugger warming blanket lawsuit settlements. Deep joint infection after hip/knee surgery. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bair-hugger",
};

export const INFECTION_TYPES = [
    { id: "hip", name: "Hip Replacement Infection", description: "Deep joint infection after hip surgery", avgSettlement: 350000, multiplier: 3.0 },
    { id: "knee", name: "Knee Replacement Infection", description: "Deep joint infection after knee surgery", avgSettlement: 300000, multiplier: 2.5 },
    { id: "revision", name: "Revision Surgery Required", description: "Multiple surgeries to treat infection", avgSettlement: 450000, multiplier: 4.0 },
];

export const SURGERY_OUTCOME = [
    { id: "multiple", name: "Multiple Revision Surgeries", multiplier: 1.5 },
    { id: "amputation", name: "Amputation Required", multiplier: 2.5 },
    { id: "permanent", name: "Permanent Disability", multiplier: 2.0 },
    { id: "single", name: "Single Revision Surgery", multiplier: 1.2 },
];

export const BAIR_2026 = {
    statistics: {
        mdlStatus: "MDL 2666 Dismissed - State Cases Active",
        manufacturer: "3M Company",
        pendingCases: 500,
        status: "State Court Litigation",
    },
    citations: [
        "Bair Hugger Product Liability Litigation - State Courts",
        "FDA MAUDE Device Adverse Event Reports",
    ],
};

export const CALCULATORS = [
    { id: "bair-hugger/calculator", name: "Settlement Calculator", description: "Estimate Bair Hugger claim value", icon: Calculator, featured: true },
    { id: "bair-hugger/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Bair Hugger lawsuit about?", answer: "The Bair Hugger lawsuit alleges that the forced-air warming blankets used during hip and knee replacement surgeries can spread bacteria, causing deep joint infections (periprosthetic joint infections or PJIs)." },
    { question: "Who manufactures Bair Hugger?", answer: "Bair Hugger is manufactured by 3M Company. The device blows warm air over patients during surgery to maintain body temperature. Lawsuits allege the design allows bacteria to circulate into surgical sites." },
    { question: "What happened to MDL 2666?", answer: "The federal MDL 2666 was dismissed after several test trials. However, cases continue in state courts where plaintiffs have had some success. The legal theory focuses on the device spreading operating room bacteria." },
    { question: "Who can file a Bair Hugger lawsuit?", answer: "Patients who had hip or knee replacement surgery where a Bair Hugger was used and developed a deep joint infection (PJI) requiring revision surgery may qualify. You must prove the Bair Hugger was used during your surgery." },
    { question: "What is the average settlement value?", answer: "Settlement values vary widely based on injury severity. Cases requiring multiple revision surgeries or resulting in amputation may receive $300,000-$500,000 or more. Each case is evaluated individually." },
];

export function calculateBairHuggerSettlement(
    infectionType: string,
    surgeryOutcome: string,
    medicalExpenses: number,
    hasDocumentation: boolean,
    revisionCount: number
) {
    const infection = INFECTION_TYPES.find(i => i.id === infectionType) || INFECTION_TYPES[0];
    const outcome = SURGERY_OUTCOME.find(o => o.id === surgeryOutcome) || SURGERY_OUTCOME[0];

    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const revisionBonus = revisionCount > 3 ? 1.4 : revisionCount > 1 ? 1.2 : 1.0;

    const baseMultiplier = infection.multiplier * outcome.multiplier * docsBonus * revisionBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        infectionType: infection.name,
        surgeryOutcome: outcome.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
