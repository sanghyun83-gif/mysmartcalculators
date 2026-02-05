// ============================================
// STRYKER KNEE LAWSUIT CALCULATOR
// 2026 Triathlon Knee Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Stryker Knee Lawsuit Calculator",
    tagline: "Free 2026 Triathlon Knee Settlement Estimator",
    description: "Calculate Stryker knee lawsuit settlements. Triathlon knee loosening, polyethylene wear, revision surgery claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/stryker-knee",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Knee implant replaced due to failure", avgSettlement: 300000, multiplier: 3.0 },
    { id: "loosening", name: "Component Loosening", description: "Implant separated from bone", avgSettlement: 250000, multiplier: 2.5 },
    { id: "chronic-pain", name: "Chronic Pain / Instability", description: "Persistent pain or knee instability", avgSettlement: 150000, multiplier: 1.5 },
];

export const STRYKER_KNEE_PRODUCTS = [
    { id: "triathlon", name: "Triathlon Knee System", multiplier: 1.25 },
    { id: "scorpio", name: "Scorpio Knee System", multiplier: 1.15 },
    { id: "other", name: "Other Stryker Knee Product", multiplier: 1.0 },
];

export const STRYKER_KNEE_2026 = {
    statistics: {
        manufacturer: "Stryker",
        status: "Ongoing Claims",
        issue: "Loosening / Wear",
        product: "Triathlon System",
    },
    citations: [
        "FDA MAUDE Reports - Stryker Triathlon Knee System",
        "Stryker Knee Implant Recall and Safety Notices",
    ],
};

export const CALCULATORS = [
    { id: "stryker-knee/calculator", name: "Settlement Calculator", description: "Estimate Stryker knee claim value", icon: Calculator, featured: true },
    { id: "stryker-knee/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Stryker knee lawsuit about?", answer: "Stryker knee lawsuits allege that certain Stryker knee implants, especially the Triathlon Knee System, had design defects causing early loosening, polyethylene wear, and the need for revision surgery." },
    { question: "Which Stryker knee products are involved?", answer: "The primary product is the Triathlon Knee System. The Scorpio Knee System and other Stryker knee products have also faced litigation for various issues." },
    { question: "What causes Stryker knee failure?", answer: "Common issues include tibial component loosening, polyethylene insert wear, and instability. Some knee implants failed within a few years when they should last 15-20 years." },
    { question: "Who qualifies for a Stryker knee lawsuit?", answer: "Patients who received a Stryker Triathlon or other Stryker knee implant and experienced early failure, loosening, or required revision surgery may qualify." },
    { question: "What is the average settlement?", answer: "Stryker knee settlement values vary based on injury severity. Cases requiring revision surgery may receive $150,000-$400,000 depending on circumstances." },
];

export function calculateStrykerKneeSettlement(
    injuryType: string,
    productType: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = STRYKER_KNEE_PRODUCTS.find(p => p.id === productType) || STRYKER_KNEE_PRODUCTS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const earlyFailure = yearsSinceImplant < 5 ? 1.3 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * docsBonus * earlyFailure;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        productType: product.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
