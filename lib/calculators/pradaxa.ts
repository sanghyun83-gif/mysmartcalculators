// ============================================
// PRADAXA BLEEDING LAWSUIT CALCULATOR
// 2026 Blood Thinner Bleeding Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Pradaxa Lawsuit Calculator",
    tagline: "Free 2026 Blood Thinner Bleeding Settlement Estimator",
    description: "Calculate Pradaxa lawsuit settlements. Uncontrollable bleeding, fatal hemorrhage claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pradaxa",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal bleeding event", avgSettlement: 500000, multiplier: 5.0 },
    { id: "brain-bleed", name: "Brain Hemorrhage", description: "Intracranial bleeding", avgSettlement: 350000, multiplier: 3.5 },
    { id: "gi-bleed", name: "GI Hemorrhage", description: "Gastrointestinal bleeding", avgSettlement: 200000, multiplier: 2.5 },
];

export const HOSPITALIZATION = [
    { id: "icu-extended", name: "ICU + Extended Hospital Stay", multiplier: 2.0 },
    { id: "icu-short", name: "ICU Stay (1-3 days)", multiplier: 1.7 },
    { id: "hospital", name: "Hospital Stay (no ICU)", multiplier: 1.4 },
    { id: "er-only", name: "ER Visit Only", multiplier: 1.0 },
];

export const PRADAXA_2026 = {
    statistics: {
        manufacturer: "Boehringer Ingelheim",
        fdaApproval: "2010",
        settlement: "$650 Million",
        status: "Settled",
    },
    citations: [
        "Pradaxa MDL 2385 - S.D. Illinois (Settled)",
        "FDA Adverse Event Reports - Pradaxa Bleeding 2026",
    ],
};

export const CALCULATORS = [
    { id: "pradaxa/calculator", name: "Settlement Calculator", description: "Estimate Pradaxa claim value", icon: Calculator, featured: true },
    { id: "pradaxa/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Pradaxa lawsuit about?", answer: "Pradaxa lawsuits allege that Boehringer Ingelheim failed to adequately warn about bleeding risks and that no reversal agent existed at the time of launch. The company settled for $650 million in 2014." },
    { question: "What is Pradaxa?", answer: "Pradaxa (dabigatran) is a blood thinner used to prevent strokes in patients with atrial fibrillation. It was the first new oral anticoagulant approved by the FDA in 2010 as an alternative to warfarin." },
    { question: "What are the bleeding risks?", answer: "Pradaxa can cause severe, uncontrollable internal bleeding including gastrointestinal hemorrhage and brain bleeding. Unlike warfarin, there was initially no way to reverse Pradaxa's blood-thinning effect." },
    { question: "Can I still file a Pradaxa lawsuit?", answer: "While the main MDL settled in 2014, new cases may still be possible for injuries not covered by the settlement. Cases involving deaths or severe injuries should be evaluated by an attorney." },
    { question: "What is the average settlement?", answer: "The 2014 settlement averaged about $150,000 per claim for approximately 4,000 cases. Death cases and severe injuries received higher amounts. Current cases may achieve different values." },
];

export function calculatePradaxaSettlement(
    injuryType: string,
    hospitalization: string,
    medicalExpenses: number,
    monthsOnDrug: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const hospital = HOSPITALIZATION.find(h => h.id === hospitalization) || HOSPITALIZATION[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = monthsOnDrug > 12 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * hospital.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        hospitalization: hospital.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
