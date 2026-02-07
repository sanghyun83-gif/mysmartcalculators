// ============================================
// DEPUY KNEE LAWSUIT CALCULATOR
// 2026 Attune Knee Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "DePuy Knee Lawsuit Calculator",
    tagline: "Free 2026 Attune Knee Settlement Estimator",
    description: "Calculate DePuy knee lawsuit settlements. Attune tibial loosening, early failure, revision surgery claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/depuy-knee",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Knee implant replaced due to failure", avgSettlement: 350000, multiplier: 3.5 },
    { id: "tibial-loosening", name: "Tibial Component Loosening", description: "Implant separated from bone", avgSettlement: 300000, multiplier: 3.0 },
    { id: "bone-damage", name: "Bone Damage / Cement Failure", description: "Bone loss or cement problems", avgSettlement: 250000, multiplier: 2.5 },
    { id: "chronic-pain", name: "Chronic Pain / Instability", description: "Persistent pain or knee instability", avgSettlement: 150000, multiplier: 1.5 },
];

export const DEPUY_KNEE_PRODUCTS = [
    { id: "attune", name: "Attune Knee System", multiplier: 1.3 },
    { id: "sigma", name: "Sigma Knee System", multiplier: 1.15 },
    { id: "lcs", name: "LCS Complete System", multiplier: 1.1 },
    { id: "other", name: "Other DePuy Knee Product", multiplier: 1.0 },
];

export const FAILURE_TIMING = [
    { id: "within-2", name: "Within 2 Years", multiplier: 1.4 },
    { id: "2-5", name: "2-5 Years", multiplier: 1.2 },
    { id: "5-10", name: "5-10 Years", multiplier: 1.0 },
    { id: "over-10", name: "Over 10 Years", multiplier: 0.9 },
];

export const DEPUY_KNEE_2026 = {
    statistics: {
        manufacturer: "DePuy (J&J)",
        status: "Active Litigation",
        issue: "Tibial Loosening",
        affected: "Thousands",
    },
    citations: [
        "FDA MAUDE Reports - DePuy Attune Knee System",
        "In Re: Attune Knee System Products Liability MDL",
        "Journal of Arthroplasty - Attune Tibial Loosening Studies",
    ],
};

export const CALCULATORS = [
    { id: "depuy-knee/calculator", name: "Settlement Calculator", description: "Estimate DePuy knee claim value", icon: Calculator, featured: true },
    { id: "depuy-knee/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "depuy-knee/products", name: "Knee Products", description: "Attune, Sigma systems", icon: Scale, featured: false },
    { id: "depuy-knee/complications", name: "Complications", description: "Known implant issues", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the DePuy Attune knee lawsuit about?", answer: "DePuy Attune knee lawsuits allege that the Attune Knee System has a design defect causing tibial component loosening and early failure, requiring revision surgery within years of implantation." },
    { question: "What is tibial loosening?", answer: "Tibial loosening occurs when the tibial (shin bone) component of the knee implant separates from the bone. This causes pain, instability, and requires revision surgery to correct." },
    { question: "Which DePuy knee products are involved?", answer: "The primary product is the Attune Knee System, launched in 2013. The Sigma and LCS knee systems have also faced litigation for various issues." },
    { question: "What causes Attune knee failure?", answer: "Studies suggest the Attune tibial baseplate design may not allow proper cement bonding to bone. The cement-bone interface fails, causing loosening." },
    { question: "Who qualifies for a DePuy knee lawsuit?", answer: "Patients who received a DePuy Attune or other DePuy knee implant and experienced early failure, tibial loosening, or required revision surgery may qualify." },
    { question: "What are the symptoms of knee implant failure?", answer: "Symptoms include persistent knee pain, swelling, instability, clicking or popping, difficulty walking, and the knee giving way during activities." },
    { question: "How early do Attune knees fail?", answer: "Many Attune knee failures occur within 2-5 years of implantation. Knee implants should typically last 15-20 years, making early failure a significant defect indicator." },
    { question: "What is the average settlement?", answer: "DePuy knee settlement values vary widely based on injury severity. Cases requiring revision surgery may receive $200,000-$500,000 depending on circumstances." },
    { question: "Is there an MDL for DePuy Attune?", answer: "Yes, DePuy Attune knee cases have been consolidated for pretrial proceedings. This allows efficient handling of discovery and common issues." },
    { question: "What documents do I need?", answer: "Key documents include surgical records, implant identification, X-rays/MRIs, revision surgery records, and records of complications and ongoing treatment." },
];

export function calculateDePuyKneeSettlement(
    injuryType: string,
    productType: string,
    failureTiming: string,
    medicalExpenses: number,
    hadRevisionSurgery: boolean,
    hasOngoingSymptoms: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = DEPUY_KNEE_PRODUCTS.find(p => p.id === productType) || DEPUY_KNEE_PRODUCTS[0];
    const timing = FAILURE_TIMING.find(t => t.id === failureTiming) || FAILURE_TIMING[0];

    const revisionBonus = hadRevisionSurgery ? 1.3 : 1.0;
    const ongoingBonus = hasOngoingSymptoms ? 1.15 : 1.0;
    const docsBonus = hasDocumentation ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * timing.multiplier * revisionBonus * ongoingBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        productType: product.name,
        failureTiming: timing.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
