// ============================================
// BARD HERNIA MESH LAWSUIT CALCULATOR
// 2026 Bard/Davol MDL Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Bard Hernia Mesh Calculator",
    tagline: "Free 2026 Bard/Davol Settlement Estimator",
    description: "Calculate Bard hernia mesh lawsuit settlements. Ventralex, Composix, 3DMax mesh complications. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bard-mesh",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Mesh removed or replaced", avgSettlement: 175000, multiplier: 3.5 },
    { id: "mesh-failure", name: "Mesh Failure / Recurrence", description: "Hernia recurred due to mesh failure", avgSettlement: 125000, multiplier: 2.5 },
    { id: "infection", name: "Infection / Abscess", description: "Surgical site infection from mesh", avgSettlement: 150000, multiplier: 3.0 },
    { id: "chronic-pain", name: "Chronic Pain / Adhesions", description: "Ongoing pain or tissue adhesions", avgSettlement: 75000, multiplier: 1.5 },
];

export const BARD_PRODUCTS = [
    { id: "ventralex", name: "Ventralex Hernia Patch", multiplier: 1.35 },
    { id: "composix", name: "Composix Kugel Mesh", multiplier: 1.3 },
    { id: "3dmax", name: "3DMax Mesh", multiplier: 1.2 },
    { id: "perfix", name: "PerFix Plug", multiplier: 1.25 },
    { id: "other", name: "Other Bard Mesh", multiplier: 1.0 },
];

export const HERNIA_TYPES = [
    { id: "inguinal", name: "Inguinal (Groin) Hernia", multiplier: 1.0 },
    { id: "ventral", name: "Ventral / Incisional Hernia", multiplier: 1.2 },
    { id: "umbilical", name: "Umbilical Hernia", multiplier: 1.1 },
    { id: "hiatal", name: "Hiatal Hernia", multiplier: 1.15 },
];

export const BARD_2026 = {
    statistics: {
        mdl: "MDL 2846",
        status: "Active Settlements",
        recall: "Composix Kugel Recall",
        claims: "16,000+ Claims",
    },
    citations: [
        "In Re: Davol/C.R. Bard Hernia Mesh Products Liability MDL",
        "FDA Class I Recall - Composix Kugel Mesh 2005-2007",
        "Bard/Davol Hernia Mesh Litigation Updates 2026",
    ],
};

export const CALCULATORS = [
    { id: "bard-mesh/calculator", name: "Settlement Calculator", description: "Estimate Bard mesh claim value", icon: Calculator, featured: true },
    { id: "bard-mesh/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "bard-mesh/products", name: "Mesh Products", description: "Recalled Bard devices", icon: Scale, featured: false },
    { id: "bard-mesh/complications", name: "Complications", description: "Known mesh issues", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the Bard hernia mesh lawsuit?", answer: "Bard hernia mesh lawsuits allege that C.R. Bard and its subsidiary Davol manufactured defective polypropylene mesh products that caused serious complications including mesh failure, infections, and revision surgery." },
    { question: "What Bard products are involved?", answer: "Key products include Ventralex Hernia Patch, Composix Kugel Mesh (recalled), 3DMax Mesh, PerFix Plug, and various other polypropylene mesh devices." },
    { question: "Why was Composix Kugel recalled?", answer: "Composix Kugel Mesh was recalled in 2005-2007 due to a defective memory recoil ring that could break, causing bowel perforations and other serious injuries." },
    { question: "What complications are linked to Bard mesh?", answer: "Complications include mesh shrinkage, chronic pain, infection, adhesions, bowel obstruction, mesh migration, and hernia recurrence requiring revision surgery." },
    { question: "Who qualifies for a Bard mesh lawsuit?", answer: "Patients who received Bard/Davol hernia mesh products and experienced complications, mesh failure, or required revision surgery may qualify for compensation." },
    { question: "What is the Bard mesh MDL?", answer: "Bard mesh cases are consolidated in MDL 2846 in the Southern District of Ohio for pretrial proceedings. Settlements have been reached in many cases." },
    { question: "What is the average settlement?", answer: "Bard mesh settlements have ranged from $50,000 to $300,000+ depending on injury severity and the need for revision surgery." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from injury discovery. Consult an attorney promptly to protect your rights." },
    { question: "What evidence do I need?", answer: "Key evidence includes surgical records identifying the mesh product, medical records showing complications, imaging studies, and revision surgery records." },
    { question: "Is Bard still making hernia mesh?", answer: "Yes, Bard (now part of BD/Becton Dickinson) continues manufacturing hernia mesh products. Litigation involves older products and design issues." },
];

export function calculateBardSettlement(
    injuryType: string,
    productType: string,
    herniaType: string,
    medicalExpenses: number,
    hadRevisionSurgery: boolean,
    hasOngoingSymptoms: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = BARD_PRODUCTS.find(p => p.id === productType) || BARD_PRODUCTS[0];
    const hernia = HERNIA_TYPES.find(h => h.id === herniaType) || HERNIA_TYPES[0];

    const revisionBonus = hadRevisionSurgery ? 1.3 : 1.0;
    const ongoingBonus = hasOngoingSymptoms ? 1.15 : 1.0;
    const docsBonus = hasDocumentation ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * hernia.multiplier * revisionBonus * ongoingBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        productType: product.name,
        herniaType: hernia.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
