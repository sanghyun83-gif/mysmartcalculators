// ============================================
// PELVIC MESH LAWSUIT CALCULATOR
// 2026 Transvaginal Mesh Complications - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Pelvic Mesh Lawsuit Calculator",
    tagline: "Free 2026 Transvaginal Mesh Settlement Estimator",
    description: "Calculate pelvic mesh lawsuit settlements. Mesh erosion, chronic pain, revision surgery claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pelvic-mesh",
};

export const INJURY_TYPES = [
    { id: "erosion", name: "Mesh Erosion", description: "Mesh protruding through tissue", avgSettlement: 250000, multiplier: 3.0 },
    { id: "chronic-pain", name: "Chronic Pelvic Pain", description: "Persistent pain after implant", avgSettlement: 150000, multiplier: 2.0 },
    { id: "organ-damage", name: "Organ Perforation", description: "Mesh damaged organs", avgSettlement: 300000, multiplier: 3.5 },
];

export const SURGERY_REQUIRED = [
    { id: "full-removal", name: "Full Mesh Removal", multiplier: 2.5 },
    { id: "partial-removal", name: "Partial Removal/Revision", multiplier: 1.8 },
    { id: "multiple", name: "Multiple Surgeries", multiplier: 3.0 },
    { id: "none", name: "No Surgery Yet", multiplier: 1.0 },
];

export const MESH_2026 = {
    statistics: {
        totalSettlements: "$8 Billion+",
        manufacturers: "J&J, Boston Scientific, C.R. Bard",
        affectedWomen: "100,000+",
        status: "Most MDLs Resolved",
    },
    citations: [
        "Pelvic Mesh MDL Settlements (MDL 2187, 2325, 2326, 2327)",
        "FDA 2019 Order - Transvaginal Mesh Sales Stop",
    ],
};

export const CALCULATORS = [
    { id: "pelvic-mesh/calculator", name: "Settlement Calculator", description: "Estimate pelvic mesh claim value", icon: Calculator, featured: true },
    { id: "pelvic-mesh/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the pelvic mesh lawsuit?", answer: "Pelvic mesh lawsuits allege that manufacturers sold defective surgical mesh products for pelvic organ prolapse (POP) and stress urinary incontinence (SUI) that caused serious complications including erosion, chronic pain, and organ damage." },
    { question: "How much have manufacturers paid in settlements?", answer: "Major manufacturers have paid over $8 billion to resolve mesh claims. Johnson & Johnson paid $8.9 billion, Boston Scientific $2.7 billion, and C.R. Bard $4 billion. Individual settlements ranged from $50,000 to $500,000+." },
    { question: "What injuries are caused by pelvic mesh?", answer: "Common injuries include mesh erosion through vaginal tissue, chronic pelvic pain, pain during intercourse, recurrent infections, urinary problems, and organ perforation. Many women require multiple surgeries to remove the mesh." },
    { question: "Can I still file a pelvic mesh lawsuit?", answer: "While most MDLs have concluded, some state court cases continue. Women who recently discovered injuries or who did not participate in earlier settlements may still have options. Consult an attorney immediately." },
    { question: "What is the average settlement?", answer: "Settlements varied widely from $50,000 to $500,000+ depending on injury severity. Women requiring full mesh removal or multiple surgeries typically received higher amounts. Each case was evaluated individually." },
];

export function calculatePelvicMeshSettlement(
    injuryType: string,
    surgeryRequired: string,
    medicalExpenses: number,
    yearsWithMesh: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const surgery = SURGERY_REQUIRED.find(s => s.id === surgeryRequired) || SURGERY_REQUIRED[0];

    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const yearsBonus = yearsWithMesh > 5 ? 1.2 : 1.0;

    const baseMultiplier = injury.multiplier * surgery.multiplier * docsBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        surgeryRequired: surgery.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
