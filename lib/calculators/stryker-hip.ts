// ============================================
// STRYKER HIP LAWSUIT CALCULATOR
// 2026 Hip Implant Failure Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Stryker Hip Lawsuit Calculator",
    tagline: "Free 2026 Hip Implant Failure Settlement Estimator",
    description: "Calculate Stryker hip lawsuit settlements. Rejuvenate, ABG II implant failure, metal poisoning claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/stryker-hip",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hip implant replaced due to failure", avgSettlement: 350000, multiplier: 3.5 },
    { id: "metallosis", name: "Metallosis / Metal Poisoning", description: "Metal debris in bloodstream", avgSettlement: 300000, multiplier: 3.0 },
    { id: "bone-damage", name: "Bone Damage / Osteolysis", description: "Bone loss around implant", avgSettlement: 250000, multiplier: 2.5 },
];

export const IMPLANT_PRODUCTS = [
    { id: "rejuvenate", name: "Rejuvenate Modular Hip", multiplier: 1.3 },
    { id: "abg2", name: "ABG II Modular Hip", multiplier: 1.3 },
    { id: "lfit-v40", name: "LFIT V40 Femoral Head", multiplier: 1.2 },
    { id: "other", name: "Other Stryker Hip Product", multiplier: 1.0 },
];

export const STRYKER_2026 = {
    statistics: {
        manufacturer: "Stryker Corp",
        settlement: "$1.43 Billion",
        recall: "2012 (Rejuvenate/ABG II)",
        status: "Settled / Ongoing",
    },
    citations: [
        "Stryker Rejuvenate/ABG II Voluntary Recall (2012)",
        "Stryker Hip Settlement Program - $1.43 Billion Resolution",
    ],
};

export const CALCULATORS = [
    { id: "stryker-hip/calculator", name: "Settlement Calculator", description: "Estimate Stryker hip claim value", icon: Calculator, featured: true },
    { id: "stryker-hip/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Stryker hip lawsuit about?", answer: "Stryker hip lawsuits allege that the Rejuvenate and ABG II modular hip implants were defectively designed, causing metal-on-metal corrosion, tissue damage, and early implant failure requiring revision surgery." },
    { question: "Which Stryker products were recalled?", answer: "In 2012, Stryker voluntarily recalled the Rejuvenate Modular and ABG II Modular Hip Systems due to concerns about corrosion at the modular neck junction causing metal debris and tissue damage." },
    { question: "What is metallosis?", answer: "Metallosis is a form of metal poisoning that occurs when metal particles from the hip implant enter the bloodstream and surrounding tissue. Symptoms include pain, swelling, and implant loosening." },
    { question: "Who qualifies for a Stryker hip lawsuit?", answer: "Patients who received Stryker Rejuvenate, ABG II, or LFIT V40 hip implants and experienced revision surgery, metallosis, bone damage, or chronic pain may qualify for compensation." },
    { question: "What is the average settlement?", answer: "Stryker paid $1.43 billion to settle claims. Individual settlements for revision surgery cases have ranged from $250,000 to $500,000+. Cases with severe metallosis receive higher compensation." },
];

export function calculateStrykerSettlement(
    injuryType: string,
    implantProduct: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = IMPLANT_PRODUCTS.find(p => p.id === implantProduct) || IMPLANT_PRODUCTS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = yearsSinceImplant > 5 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        implantProduct: product.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
