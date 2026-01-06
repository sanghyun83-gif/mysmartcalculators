// ============================================
// SMITH & NEPHEW KNEE LAWSUIT CALCULATOR
// 2026 Journey/Legion Knee Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Smith & Nephew Knee Calculator",
    tagline: "Free 2026 Journey Knee Settlement Estimator",
    description: "Calculate Smith & Nephew knee lawsuit settlements. Journey, Legion, Genesis knee implant failure claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/smith-nephew-knee",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Knee implant replaced due to failure", avgSettlement: 275000, multiplier: 2.75 },
    { id: "loosening", name: "Component Loosening", description: "Implant separated from bone", avgSettlement: 225000, multiplier: 2.25 },
    { id: "chronic-pain", name: "Chronic Pain / Instability", description: "Persistent pain or knee instability", avgSettlement: 125000, multiplier: 1.25 },
];

export const SN_KNEE_PRODUCTS = [
    { id: "journey", name: "Journey Knee System", multiplier: 1.25 },
    { id: "legion", name: "Legion Knee System", multiplier: 1.2 },
    { id: "genesis", name: "Genesis II Knee", multiplier: 1.15 },
    { id: "other", name: "Other S&N Knee Product", multiplier: 1.0 },
];

export const SN_KNEE_2026 = {
    statistics: {
        manufacturer: "Smith & Nephew",
        status: "Ongoing Claims",
        issue: "Loosening / Wear",
        product: "Journey System",
    },
    citations: [
        "FDA MAUDE Reports - Smith & Nephew Knee Systems",
        "Smith & Nephew Knee Implant Safety Communications",
    ],
};

export const CALCULATORS = [
    { id: "smith-nephew-knee/calculator", name: "Settlement Calculator", description: "Estimate S&N knee claim value", icon: Calculator, featured: true },
    { id: "smith-nephew-knee/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Smith & Nephew knee lawsuit about?", answer: "Smith & Nephew knee lawsuits allege that certain knee implants, including the Journey and Legion systems, had design defects causing early loosening and the need for revision surgery." },
    { question: "Which Smith & Nephew knee products are involved?", answer: "Products include the Journey Knee System, Legion Knee System, and Genesis II Knee. Various issues have been reported including loosening and polyethylene wear." },
    { question: "What causes Smith & Nephew knee failure?", answer: "Common issues include tibial component loosening, polyethylene insert wear, and instability. Some implants failed prematurely when they should last 15-20 years." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients who received a Smith & Nephew Journey, Legion, Genesis, or other S&N knee implant and experienced early failure, loosening, or revision surgery may qualify." },
    { question: "What is the average settlement?", answer: "Smith & Nephew knee settlement values vary based on injury severity. Cases requiring revision surgery may receive $125,000-$350,000 depending on circumstances." },
];

export function calculateSNKneeSettlement(
    injuryType: string,
    productType: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = SN_KNEE_PRODUCTS.find(p => p.id === productType) || SN_KNEE_PRODUCTS[0];

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
