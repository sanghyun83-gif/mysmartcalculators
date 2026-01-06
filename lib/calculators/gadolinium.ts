// ============================================
// GADOLINIUM MRI LAWSUIT CALCULATOR
// 2026 MRI Contrast Agent Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Gadolinium Lawsuit Calculator",
    tagline: "Free 2026 MRI Contrast Injury Settlement Estimator",
    description: "Calculate Gadolinium lawsuit settlements. Gadolinium Deposition Disease, NSF, brain retention claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/gadolinium",
};

export const INJURY_TYPES = [
    { id: "gdd", name: "Gadolinium Deposition Disease", description: "Chronic pain, skin changes, cognitive issues", avgSettlement: 300000, multiplier: 3.0 },
    { id: "nsf", name: "Nephrogenic Systemic Fibrosis", description: "Skin thickening, organ damage", avgSettlement: 500000, multiplier: 5.0 },
    { id: "brain-retention", name: "Brain Gadolinium Retention", description: "Neurological symptoms", avgSettlement: 250000, multiplier: 2.5 },
];

export const CONTRAST_AGENTS = [
    { id: "omniscan", name: "Omniscan (GE)", multiplier: 1.3 },
    { id: "magnevist", name: "Magnevist (Bayer)", multiplier: 1.2 },
    { id: "prohance", name: "ProHance (Bracco)", multiplier: 1.1 },
    { id: "multihance", name: "MultiHance (Bracco)", multiplier: 1.1 },
    { id: "other", name: "Other GBCA", multiplier: 1.0 },
];

export const GADOLINIUM_2026 = {
    statistics: {
        manufacturers: "GE, Bayer, Bracco",
        fdaWarning: "Class Warning (2017)",
        mriScans: "30M+ Annually",
        status: "Active Litigation",
    },
    citations: [
        "FDA Drug Safety Communication - Gadolinium Brain Retention (2017)",
        "FDA Warning - Gadolinium-Based Contrast Agents for MRI",
    ],
};

export const CALCULATORS = [
    { id: "gadolinium/calculator", name: "Settlement Calculator", description: "Estimate Gadolinium claim value", icon: Calculator, featured: true },
    { id: "gadolinium/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Gadolinium lawsuit about?", answer: "Gadolinium lawsuits allege that manufacturers of MRI contrast agents failed to warn that gadolinium can be retained in the brain, bones, and other tissues, causing Gadolinium Deposition Disease (GDD) and other serious conditions." },
    { question: "What is Gadolinium?", answer: "Gadolinium is a heavy metal used in contrast agents for MRI scans. Products like Omniscan, Magnevist, and ProHance contain gadolinium. Over 30 million MRI scans using gadolinium are performed annually in the US." },
    { question: "What is Gadolinium Deposition Disease?", answer: "GDD is a condition where gadolinium is retained in the body, causing chronic pain, burning sensations, skin thickening, cognitive impairment, and other symptoms. It can occur even in patients with normal kidney function." },
    { question: "Who qualifies for a Gadolinium lawsuit?", answer: "Patients who received gadolinium-based MRI contrast and developed GDD symptoms, NSF, or other adverse effects may qualify. Multiple MRI scans and documented gadolinium retention strengthen claims." },
    { question: "What are the average settlements?", answer: "Settlement values vary based on injury. NSF cases may receive $400,000-$600,000+. GDD cases typically receive $200,000-$400,000. Brain retention cases are still being evaluated in litigation." },
];

export function calculateGadoliniumSettlement(
    injuryType: string,
    contrastAgent: string,
    medicalExpenses: number,
    numberOfScans: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const agent = CONTRAST_AGENTS.find(a => a.id === contrastAgent) || CONTRAST_AGENTS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const scanBonus = numberOfScans > 5 ? 1.3 : numberOfScans > 2 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * agent.multiplier * docsBonus * scanBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        contrastAgent: agent.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
