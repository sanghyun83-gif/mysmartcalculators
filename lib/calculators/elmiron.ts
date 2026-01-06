// ============================================
// ELMIRON VISION LOSS LAWSUIT CALCULATOR
// 2026 Pentosan Polysulfate Sodium, Maculopathy - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Elmiron Vision Loss Calculator",
    tagline: "Free 2026 Eye Damage Lawsuit Estimator",
    description: "Calculate Elmiron vision loss lawsuit settlements. Pentosan polysulfate sodium, maculopathy, retinal damage claims. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/elmiron",
};

export const VISION_SEVERITY = [
    { id: "blindness", name: "Legal Blindness", description: "Severe vision loss, unable to drive", avgSettlement: 500000, multiplier: 5.0 },
    { id: "severe", name: "Severe Vision Impairment", description: "Significant daily life impact", avgSettlement: 250000, multiplier: 3.0 },
    { id: "moderate", name: "Moderate Vision Loss", description: "Difficulty reading, night vision", avgSettlement: 100000, multiplier: 2.0 },
];

export const USAGE_DURATION = [
    { id: "10plus", name: "10+ Years", multiplier: 1.5 },
    { id: "5-10", name: "5-10 Years", multiplier: 1.3 },
    { id: "3-5", name: "3-5 Years", multiplier: 1.1 },
    { id: "under-3", name: "Under 3 Years", multiplier: 1.0 },
];

export const ELMIRON_2026 = {
    statistics: {
        mdlNumber: "MDL 2973",
        court: "District of New Jersey",
        pendingCases: 1200,
        status: "Active Litigation",
    },
    citations: [
        "Elmiron Vision Loss MDL 2973 - D.N.J.",
        "FDA Elmiron Label Update: Retinal Pigmentary Changes Warning",
    ],
};

export const CALCULATORS = [
    { id: "elmiron/calculator", name: "Settlement Calculator", description: "Estimate vision loss claim value", icon: Calculator, featured: true },
    { id: "elmiron/guide", name: "Claims Guide", description: "How to file an Elmiron lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Elmiron vision lawsuit about?", answer: "Lawsuits allege that Janssen Pharmaceuticals failed to warn patients that long-term use of Elmiron (pentosan polysulfate sodium) can cause serious eye damage called pigmentary maculopathy, which can lead to permanent vision loss." },
    { question: "What is pigmentary maculopathy?", answer: "Pigmentary maculopathy is a condition where pigment accumulates on the retina, causing damage to the macula (central vision area). Symptoms include difficulty reading, adapting to low light, blurred vision, and in severe cases, permanent vision loss." },
    { question: "Who qualifies for an Elmiron lawsuit?", answer: "Patients who took Elmiron for interstitial cystitis and developed vision problems including maculopathy, difficulty reading, dark spots, or other visual disturbances may qualify. Longer use strengthens claims." },
    { question: "What is the status of MDL 2973?", answer: "MDL 2973 consolidates Elmiron vision loss cases in the District of New Jersey. Bellwether trials have begun, and settlement negotiations are ongoing. Janssen has not yet announced a global settlement." },
    { question: "What evidence do I need?", answer: "Key evidence includes Elmiron prescription records, ophthalmology/retinal specialist records documenting maculopathy, visual field tests, and OCT scans showing retinal damage. Before/after vision records are valuable." },
];

export function calculateElmironSettlement(
    visionSeverity: string,
    usageDuration: string,
    medicalExpenses: number,
    hasRetinalDamage: boolean,
    yearsOfUse: number
) {
    const severity = VISION_SEVERITY.find(s => s.id === visionSeverity) || VISION_SEVERITY[0];
    const duration = USAGE_DURATION.find(d => d.id === usageDuration) || USAGE_DURATION[0];

    const retinalBonus = hasRetinalDamage ? 1.3 : 1.0;
    const usageBonus = yearsOfUse > 5 ? 1.2 : 1.0;

    const baseMultiplier = severity.multiplier * duration.multiplier * retinalBonus * usageBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        severity: severity.name,
        duration: duration.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
