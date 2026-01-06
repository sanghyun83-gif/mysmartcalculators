// ============================================
// XARELTO BLEEDING LAWSUIT CALCULATOR
// 2026 Blood Thinner Bleeding Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Xarelto Lawsuit Calculator",
    tagline: "Free 2026 Blood Thinner Bleeding Settlement Estimator",
    description: "Calculate Xarelto lawsuit settlements. Uncontrollable bleeding, GI hemorrhage, brain bleeding claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/xarelto",
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

export const XARELTO_2026 = {
    statistics: {
        manufacturer: "Bayer / J&J",
        fdaApproval: "2011",
        bleedingDeaths: "25,000+",
        status: "MDL Complete",
    },
    citations: [
        "Xarelto MDL 2592 - E.D. Louisiana (Concluded)",
        "FDA Adverse Event Reports - Xarelto Bleeding 2026",
    ],
};

export const CALCULATORS = [
    { id: "xarelto/calculator", name: "Settlement Calculator", description: "Estimate Xarelto claim value", icon: Calculator, featured: true },
    { id: "xarelto/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Xarelto lawsuit about?", answer: "Xarelto lawsuits allege that Bayer and Johnson & Johnson downplayed bleeding risks and failed to warn that no reversal agent existed at the time. Thousands of patients suffered uncontrollable bleeding, and many died." },
    { question: "What is Xarelto?", answer: "Xarelto (rivaroxaban) is a blood thinner used to prevent blood clots and strokes. It was marketed as more convenient than warfarin because it didn't require blood monitoring. It was approved by the FDA in 2011." },
    { question: "What are the bleeding risks?", answer: "Xarelto can cause uncontrollable internal bleeding including gastrointestinal hemorrhage, brain bleeding, and bleeding in other organs. At the time of initial marketing, there was no way to reverse the bleeding quickly." },
    { question: "Was there a settlement?", answer: "Bayer and J&J agreed to pay $775 million in 2019 to settle approximately 25,000 lawsuits. However, individual cases outside the settlement may still be pursued for serious injuries or deaths." },
    { question: "Who qualifies for a Xarelto lawsuit?", answer: "Patients who took Xarelto and experienced serious bleeding events may still qualify if their case wasn't part of the 2019 settlement. Deaths and severe injuries like brain bleeds have the strongest claims." },
];

export function calculateXareltoSettlement(
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
