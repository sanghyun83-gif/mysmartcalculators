// ============================================
// ZIMMER HIP LAWSUIT CALCULATOR
// 2026 Durom Cup Hip Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Zimmer Hip Lawsuit Calculator",
    tagline: "Free 2026 Durom Cup Hip Settlement Estimator",
    description: "Calculate Zimmer hip lawsuit settlements. Durom Cup, metal-on-metal failure, revision surgery claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/zimmer-hip",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hip implant replaced due to failure", avgSettlement: 325000, multiplier: 3.25 },
    { id: "metallosis", name: "Metallosis / Metal Debris", description: "Metal particles in tissue", avgSettlement: 275000, multiplier: 2.75 },
    { id: "bone-damage", name: "Bone Damage / Loosening", description: "Bone loss or implant loosening", avgSettlement: 225000, multiplier: 2.25 },
];

export const ZIMMER_PRODUCTS = [
    { id: "durom-cup", name: "Durom Cup", multiplier: 1.3 },
    { id: "tm-modular", name: "Trabecular Metal Modular", multiplier: 1.2 },
    { id: "trilogy", name: "Trilogy Acetabular System", multiplier: 1.15 },
    { id: "other", name: "Other Zimmer Hip Product", multiplier: 1.0 },
];

export const ZIMMER_2026 = {
    statistics: {
        manufacturer: "Zimmer Biomet",
        settlement: "$500 Million+",
        recall: "Durom Cup 2008",
        status: "Settled / New Claims",
    },
    citations: [
        "Zimmer Durom Cup Voluntary Suspension (July 2008)",
        "FDA MAUDE Reports - Zimmer Hip Devices",
    ],
};

export const CALCULATORS = [
    { id: "zimmer-hip/calculator", name: "Settlement Calculator", description: "Estimate Zimmer hip claim value", icon: Calculator, featured: true },
    { id: "zimmer-hip/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Zimmer hip lawsuit about?", answer: "Zimmer hip lawsuits allege that Zimmer's Durom Cup and other hip implants were defectively designed, causing early failure, metallosis, and the need for revision surgery." },
    { question: "Which Zimmer products are involved?", answer: "The main product is the Durom Cup acetabular component, which Zimmer suspended in 2008 due to high failure rates. Other products include the Trabecular Metal Modular and Trilogy systems." },
    { question: "What happened with the Durom Cup?", answer: "Zimmer voluntarily suspended Durom Cup sales in 2008 after reports showed higher than expected failure rates. The issue was related to surgical technique and design flaws." },
    { question: "Who qualifies for a Zimmer hip lawsuit?", answer: "Patients who received Zimmer Durom Cup, Trabecular Metal, or other Zimmer hip implants and experienced revision surgery, metallosis, or implant failure may qualify." },
    { question: "What is the average settlement?", answer: "Zimmer has paid over $500 million to settle hip implant claims. Individual settlements range from $150,000 to $500,000 depending on severity and complications." },
];

export function calculateZimmerSettlement(
    injuryType: string,
    productType: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = ZIMMER_PRODUCTS.find(p => p.id === productType) || ZIMMER_PRODUCTS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = yearsSinceImplant > 5 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * docsBonus * durationBonus;
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
