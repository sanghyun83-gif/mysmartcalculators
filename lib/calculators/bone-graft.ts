// ============================================
// BONE GRAFT LAWSUIT CALCULATOR
// 2026 Allograft/BMP Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Bone Graft Lawsuit Calculator",
    tagline: "Free 2026 Bone Graft Settlement Estimator",
    description: "Calculate bone graft lawsuit settlements. Allograft contamination, BMP complications, synthetic graft failure claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bone-graft",
};

export const INJURY_TYPES = [
    { id: "infection", name: "Infection / Contamination", description: "Infection from contaminated graft", avgSettlement: 350000, multiplier: 3.5 },
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Graft failure requiring reoperation", avgSettlement: 275000, multiplier: 2.75 },
    { id: "failed-fusion", name: "Failed Fusion / Nonunion", description: "Bones failed to heal properly", avgSettlement: 200000, multiplier: 2.0 },
];

export const GRAFT_TYPES = [
    { id: "allograft", name: "Allograft (Donor Bone)", multiplier: 1.3 },
    { id: "bmp", name: "BMP (Bone Morphogenetic Protein)", multiplier: 1.25 },
    { id: "synthetic", name: "Synthetic Bone Graft", multiplier: 1.15 },
    { id: "other", name: "Other Graft Material", multiplier: 1.0 },
];

export const GRAFT_2026 = {
    statistics: {
        status: "Ongoing Claims",
        issue: "Contamination / Failure",
        recalls: "Multiple FDA Recalls",
        procedures: "500K+ Annually",
    },
    citations: [
        "FDA MAUDE Reports - Bone Graft Substitutes",
        "CDC Guidelines - Allograft Safety",
    ],
};

export const CALCULATORS = [
    { id: "bone-graft/calculator", name: "Settlement Calculator", description: "Estimate bone graft claim value", icon: Calculator, featured: true },
    { id: "bone-graft/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a bone graft lawsuit?", answer: "Bone graft lawsuits allege that bone graft materials were contaminated, defective, or improperly processed, causing infections, failed fusions, or other serious complications." },
    { question: "What types of bone grafts are involved?", answer: "Litigation involves allografts (donor bone), synthetic bone grafts, and BMP (bone morphogenetic protein) products like Infuse that caused complications." },
    { question: "What causes bone graft complications?", answer: "Issues include contamination during processing, infection transmission from donor tissue, failed fusion, excessive bone growth (BMP), and allergic reactions." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients who received bone graft material that was contaminated, recalled, or caused infection, failed fusion, or other complications requiring additional treatment may qualify." },
    { question: "What is the average settlement?", answer: "Bone graft settlements vary based on injury severity. Infection cases may receive $200,000-$500,000 depending on complications and medical expenses." },
];

export function calculateGraftSettlement(
    injuryType: string,
    graftType: string,
    medicalExpenses: number,
    hasInfection: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const graft = GRAFT_TYPES.find(g => g.id === graftType) || GRAFT_TYPES[0];

    const infectionBonus = hasInfection ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.2 : 1.0;

    const baseMultiplier = injury.multiplier * graft.multiplier * infectionBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        graftType: graft.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
