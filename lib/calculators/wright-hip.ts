// ============================================
// WRIGHT HIP LAWSUIT CALCULATOR
// 2026 Conserve Plus Hip Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Wright Hip Lawsuit Calculator",
    tagline: "Free 2026 Conserve Plus Hip Settlement Estimator",
    description: "Calculate Wright Medical hip lawsuit settlements. Conserve Plus, Dynasty hip resurfacing failure claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/wright-hip",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hip implant replaced due to failure", avgSettlement: 300000, multiplier: 3.0 },
    { id: "metallosis", name: "Metallosis / Metal Debris", description: "Metal particles in tissue", avgSettlement: 250000, multiplier: 2.5 },
    { id: "bone-damage", name: "Bone Damage / Osteolysis", description: "Bone loss around implant", avgSettlement: 200000, multiplier: 2.0 },
];

export const WRIGHT_PRODUCTS = [
    { id: "conserve-plus", name: "Conserve Plus Hip System", multiplier: 1.3 },
    { id: "dynasty", name: "Dynasty Hip System", multiplier: 1.2 },
    { id: "profemur", name: "Profemur Hip System", multiplier: 1.15 },
    { id: "other", name: "Other Wright Hip Product", multiplier: 1.0 },
];

export const WRIGHT_2026 = {
    statistics: {
        manufacturer: "Wright Medical",
        settlement: "$240 Million+",
        issue: "MoM Resurfacing",
        status: "Settled / Ongoing",
    },
    citations: [
        "Wright Medical Conserve Plus Hip Settlement Program",
        "FDA MAUDE Reports - Wright Medical Hip Devices",
    ],
};

export const CALCULATORS = [
    { id: "wright-hip/calculator", name: "Settlement Calculator", description: "Estimate Wright hip claim value", icon: Calculator, featured: true },
    { id: "wright-hip/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Wright hip lawsuit about?", answer: "Wright hip lawsuits allege that Wright Medical's Conserve Plus hip resurfacing system and other metal-on-metal hip products caused metallosis, bone damage, and early failure requiring revision surgery." },
    { question: "Which Wright products are involved?", answer: "The primary product is the Conserve Plus hip resurfacing system. The Dynasty and Profemur hip systems are also involved in litigation due to metal-on-metal bearing issues." },
    { question: "What is hip resurfacing?", answer: "Hip resurfacing is an alternative to total hip replacement where the femoral head is reshaped and capped with a metal prosthesis. Wright's metal-on-metal design caused problems." },
    { question: "Who qualifies for a Wright hip lawsuit?", answer: "Patients with Wright Conserve Plus, Dynasty, or other Wright hip implants who experienced revision surgery, metallosis, elevated metal levels, or chronic pain may qualify." },
    { question: "What is the average settlement?", answer: "Wright Medical paid $240 million+ to settle Conserve Plus claims. Individual settlements ranged from $150,000 to $400,000 depending on severity and revision surgery." },
];

export function calculateWrightSettlement(
    injuryType: string,
    productType: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = WRIGHT_PRODUCTS.find(p => p.id === productType) || WRIGHT_PRODUCTS[0];

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
