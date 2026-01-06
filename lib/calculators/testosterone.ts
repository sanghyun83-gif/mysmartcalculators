// ============================================
// TESTOSTERONE THERAPY LAWSUIT CALCULATOR
// 2026 TRT Heart Attack/Stroke Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Testosterone Lawsuit Calculator",
    tagline: "Free 2026 TRT Heart Attack Settlement Estimator",
    description: "Calculate testosterone therapy lawsuit settlements. Heart attack, stroke, blood clot claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/testosterone",
};

export const INJURY_TYPES = [
    { id: "heart-attack", name: "Heart Attack", description: "Myocardial infarction", avgSettlement: 350000, multiplier: 3.5 },
    { id: "stroke", name: "Stroke", description: "Ischemic or hemorrhagic stroke", avgSettlement: 400000, multiplier: 4.0 },
    { id: "blood-clot", name: "Blood Clot / DVT / PE", description: "Deep vein thrombosis or pulmonary embolism", avgSettlement: 250000, multiplier: 2.5 },
];

export const TRT_PRODUCTS = [
    { id: "androgel", name: "AndroGel", multiplier: 1.2 },
    { id: "axiron", name: "Axiron", multiplier: 1.1 },
    { id: "testim", name: "Testim", multiplier: 1.1 },
    { id: "androderm", name: "Androderm", multiplier: 1.0 },
    { id: "other", name: "Other Testosterone Product", multiplier: 1.0 },
];

export const TESTOSTERONE_2026 = {
    statistics: {
        manufacturers: "AbbVie, Endo, Eli Lilly",
        fdaWarning: "Black Box (2015)",
        heartRisk: "30% Higher",
        status: "MDL 2545 Complete",
    },
    citations: [
        "FDA Drug Safety Communication - Testosterone Cardiovascular Risk (2015)",
        "Testosterone MDL 2545 - N.D. Illinois (Concluded)",
    ],
};

export const CALCULATORS = [
    { id: "testosterone/calculator", name: "Settlement Calculator", description: "Estimate TRT claim value", icon: Calculator, featured: true },
    { id: "testosterone/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the testosterone lawsuit about?", answer: "Testosterone lawsuits allege that manufacturers of TRT products like AndroGel failed to adequately warn about increased heart attack, stroke, and blood clot risks. The FDA required a black box warning in 2015." },
    { question: "What is testosterone replacement therapy?", answer: "Testosterone replacement therapy (TRT) uses gels, patches, or injections to treat low testosterone. Products like AndroGel, Axiron, and Testim were heavily marketed for 'Low T' symptoms in aging men." },
    { question: "What heart risks are linked to TRT?", answer: "Studies show testosterone therapy increases heart attack risk by 30% or more. The FDA required updated warnings in 2015 about the risk of heart attack, stroke, and blood clots." },
    { question: "Who qualifies for a testosterone lawsuit?", answer: "Men who used testosterone products and suffered heart attacks, strokes, or blood clots may qualify. Cases where injury occurred before 2015 (when warnings were added) have stronger claims." },
    { question: "What are the average settlements?", answer: "Settlement values vary based on injury. Heart attacks and strokes typically receive $200,000-$500,000. Blood clots may receive $150,000-$300,000. Fatal cases receive higher compensation." },
];

export function calculateTestosteroneSettlement(
    injuryType: string,
    trtProduct: string,
    medicalExpenses: number,
    monthsOnTherapy: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = TRT_PRODUCTS.find(p => p.id === trtProduct) || TRT_PRODUCTS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = monthsOnTherapy > 12 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        trtProduct: product.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
