// ============================================
// BIOMET HIP LAWSUIT CALCULATOR
// 2026 M/L Taper Hip Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Biomet Hip Lawsuit Calculator",
    tagline: "Free 2026 M/L Taper Hip Settlement Estimator",
    description: "Calculate Biomet hip lawsuit settlements. M/L Taper, Magnum head corrosion, revision surgery claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/biomet-hip",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hip implant replaced due to failure", avgSettlement: 325000, multiplier: 3.25 },
    { id: "metallosis", name: "Metallosis / Corrosion", description: "Metal debris from taper junction", avgSettlement: 275000, multiplier: 2.75 },
    { id: "bone-damage", name: "Bone Damage / Osteolysis", description: "Bone loss around implant", avgSettlement: 225000, multiplier: 2.25 },
];

export const BIOMET_PRODUCTS = [
    { id: "ml-taper", name: "M/L Taper Hip Stem", multiplier: 1.3 },
    { id: "magnum", name: "Magnum Hip System", multiplier: 1.25 },
    { id: "taperloc", name: "Taperloc Hip Stem", multiplier: 1.2 },
    { id: "other", name: "Other Biomet Hip Product", multiplier: 1.0 },
];

export const BIOMET_2026 = {
    statistics: {
        manufacturer: "Zimmer Biomet",
        settlement: "$56 Million+",
        recall: "M/L Taper Issues",
        status: "Ongoing Claims",
    },
    citations: [
        "Zimmer Biomet M/L Taper FDA MAUDE Reports",
        "In Re: Biomet M2a Magnum Hip MDL - N.D. Indiana",
    ],
};

export const CALCULATORS = [
    { id: "biomet-hip/calculator", name: "Settlement Calculator", description: "Estimate Biomet hip claim value", icon: Calculator, featured: true },
    { id: "biomet-hip/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Biomet hip lawsuit about?", answer: "Biomet hip lawsuits allege that certain Biomet hip implants, especially the M/L Taper hip stem and Magnum hip system, had defective taper junctions that caused metal corrosion and early failure." },
    { question: "Which Biomet products are involved?", answer: "The main products are the M/L Taper hip stem and Magnum hip system. The taper junction between the stem and head is prone to corrosion, releasing metal debris and causing tissue damage." },
    { question: "What is taper corrosion?", answer: "Taper corrosion occurs at the junction between the hip stem and ball head. Metal debris (fretting corrosion) is released into surrounding tissue, causing metallosis, bone damage, and implant failure." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients with Biomet M/L Taper, Magnum, or similar hip implants who experienced revision surgery, metallosis, elevated metal levels, or chronic pain may qualify for compensation." },
    { question: "What is the average settlement?", answer: "Biomet M2a Magnum settlements averaged $200,000-$400,000 depending on severity. Cases requiring multiple revision surgeries receive higher compensation." },
];

export function calculateBiometSettlement(
    injuryType: string,
    productType: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = BIOMET_PRODUCTS.find(p => p.id === productType) || BIOMET_PRODUCTS[0];

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
