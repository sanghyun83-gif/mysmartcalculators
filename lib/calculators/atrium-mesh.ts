// ============================================
// ATRIUM C-QUR MESH LAWSUIT CALCULATOR
// 2026 Omega-3 Coating MDL Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Atrium C-Qur Mesh Calculator",
    tagline: "Free 2026 C-Qur Settlement Estimator",
    description: "Calculate Atrium C-Qur mesh lawsuit settlements. Omega-3 coating complications, inflammatory reactions. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/atrium-mesh",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Mesh removed or replaced", avgSettlement: 175000, multiplier: 3.5 },
    { id: "inflammatory", name: "Inflammatory Reaction", description: "Severe reaction to omega-3 coating", avgSettlement: 125000, multiplier: 2.5 },
    { id: "chronic-pain", name: "Chronic Pain / Adhesions", description: "Ongoing pain or tissue adhesions", avgSettlement: 75000, multiplier: 1.5 },
];

export const ATRIUM_PRODUCTS = [
    { id: "c-qur-v-patch", name: "C-Qur V-Patch", multiplier: 1.3 },
    { id: "c-qur-tacshield", name: "C-Qur TacShield", multiplier: 1.25 },
    { id: "c-qur-edge", name: "C-Qur Edge", multiplier: 1.2 },
    { id: "other", name: "Other C-Qur Mesh", multiplier: 1.0 },
];

export const ATRIUM_2026 = {
    statistics: {
        mdl: "MDL 2753",
        status: "Settlements Ongoing",
        issue: "Omega-3 Coating",
        claims: "3,500+ Claims",
    },
    citations: [
        "In Re: Atrium Medical C-Qur Mesh Products Liability MDL 2753",
        "FDA MAUDE Reports - C-Qur Mesh Complications",
    ],
};

export const CALCULATORS = [
    { id: "atrium-mesh/calculator", name: "Settlement Calculator", description: "Estimate C-Qur mesh claim value", icon: Calculator, featured: true },
    { id: "atrium-mesh/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Atrium C-Qur mesh lawsuit?", answer: "Atrium C-Qur mesh lawsuits allege that the omega-3 fatty acid coating on C-Qur mesh products causes severe inflammatory reactions, chronic pain, and complications requiring revision surgery." },
    { question: "What is unique about C-Qur mesh?", answer: "C-Qur mesh features a proprietary omega-3 fatty acid coating (fish oil) designed to reduce adhesions. However, plaintiffs claim this coating causes inflammatory reactions." },
    { question: "What is MDL 2753?", answer: "MDL 2753 is the federal multidistrict litigation consolidating C-Qur mesh lawsuits in the District of New Hampshire for coordinated pretrial proceedings." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients who received Atrium C-Qur mesh and experienced inflammatory reactions, chronic pain, or complications requiring revision surgery may qualify." },
    { question: "What is the average settlement?", answer: "C-Qur mesh settlements have ranged from $50,000 to $250,000+ depending on injury severity and need for revision surgery." },
];

export function calculateAtriumSettlement(
    injuryType: string,
    productType: string,
    medicalExpenses: number,
    hadRevisionSurgery: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = ATRIUM_PRODUCTS.find(p => p.id === productType) || ATRIUM_PRODUCTS[0];

    const revisionBonus = hadRevisionSurgery ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.2 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * revisionBonus * docsBonus;
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
