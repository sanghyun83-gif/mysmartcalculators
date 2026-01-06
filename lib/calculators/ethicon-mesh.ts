// ============================================
// ETHICON HERNIA MESH LAWSUIT CALCULATOR
// 2026 Physiomesh MDL Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Ethicon Hernia Mesh Calculator",
    tagline: "Free 2026 Physiomesh Settlement Estimator",
    description: "Calculate Ethicon hernia mesh lawsuit settlements. Physiomesh recall, mesh failure, revision surgery claims. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ethicon-mesh",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Mesh removed or replaced", avgSettlement: 175000, multiplier: 3.5 },
    { id: "mesh-failure", name: "Mesh Failure / Recurrence", description: "Hernia recurred due to mesh failure", avgSettlement: 125000, multiplier: 2.5 },
    { id: "infection", name: "Infection / Abscess", description: "Surgical site infection from mesh", avgSettlement: 150000, multiplier: 3.0 },
    { id: "chronic-pain", name: "Chronic Pain / Adhesions", description: "Ongoing pain or tissue adhesions", avgSettlement: 75000, multiplier: 1.5 },
];

export const ETHICON_PRODUCTS = [
    { id: "physiomesh", name: "Physiomesh Flexible Composite", multiplier: 1.4 },
    { id: "prolene", name: "Prolene Hernia System", multiplier: 1.2 },
    { id: "proceed", name: "Proceed Surgical Mesh", multiplier: 1.15 },
    { id: "other", name: "Other Ethicon Mesh", multiplier: 1.0 },
];

export const HERNIA_TYPES = [
    { id: "inguinal", name: "Inguinal (Groin) Hernia", multiplier: 1.0 },
    { id: "ventral", name: "Ventral / Incisional Hernia", multiplier: 1.2 },
    { id: "umbilical", name: "Umbilical Hernia", multiplier: 1.1 },
    { id: "hiatal", name: "Hiatal Hernia", multiplier: 1.15 },
];

export const ETHICON_2026 = {
    statistics: {
        mdl: "MDL 2846",
        status: "Active Settlements",
        recall: "Physiomesh Recall 2016",
        claims: "20,000+ Claims",
    },
    citations: [
        "In Re: Ethicon Physiomesh Flexible Composite Products Liability MDL 2846",
        "FDA Class I Recall - Ethicon Physiomesh May 2016",
        "J&J/Ethicon Hernia Mesh Litigation Updates 2026",
    ],
};

export const CALCULATORS = [
    { id: "ethicon-mesh/calculator", name: "Settlement Calculator", description: "Estimate Ethicon mesh claim value", icon: Calculator, featured: true },
    { id: "ethicon-mesh/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "ethicon-mesh/products", name: "Mesh Products", description: "Recalled Ethicon devices", icon: Scale, featured: false },
    { id: "ethicon-mesh/complications", name: "Complications", description: "Known mesh issues", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the Ethicon hernia mesh lawsuit?", answer: "Ethicon hernia mesh lawsuits allege that J&J's Ethicon subsidiary sold defective surgical mesh products, particularly Physiomesh, that caused serious complications including mesh failure, infections, and the need for revision surgery." },
    { question: "What is Physiomesh?", answer: "Physiomesh Flexible Composite Mesh was a polypropylene mesh product used in hernia repair. It was recalled in 2016 due to higher-than-expected rates of hernia recurrence and reoperation." },
    { question: "Why was Physiomesh recalled?", answer: "Ethicon voluntarily recalled Physiomesh in May 2016 after data showed higher rates of hernia recurrence and revision surgery compared to other mesh products on the market." },
    { question: "What complications are linked to Ethicon mesh?", answer: "Complications include mesh failure, hernia recurrence, chronic pain, infection, mesh migration, bowel obstruction, and adhesions requiring additional surgery." },
    { question: "Who qualifies for an Ethicon mesh lawsuit?", answer: "Patients who received Physiomesh or other Ethicon hernia mesh products and experienced complications, mesh failure, or required revision surgery may qualify for compensation." },
    { question: "What is MDL 2846?", answer: "MDL 2846 is the federal multidistrict litigation consolidating Ethicon Physiomesh lawsuits. Cases are centralized in the Northern District of Georgia for pretrial proceedings." },
    { question: "What is the average settlement?", answer: "Ethicon mesh settlements have ranged from $50,000 to $250,000+ depending on injury severity, need for revision surgery, and individual case factors." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from when you discovered or should have discovered your mesh-related injury. Consult an attorney promptly." },
    { question: "What evidence do I need?", answer: "Key evidence includes surgical records identifying the mesh product, medical records showing complications, imaging studies, revision surgery records, and documentation of ongoing symptoms." },
    { question: "Are other Ethicon products involved?", answer: "Yes, besides Physiomesh, lawsuits have also been filed involving Prolene Hernia System, Proceed Mesh, and other Ethicon mesh products with reported complications." },
];

export function calculateEthiconSettlement(
    injuryType: string,
    productType: string,
    herniaType: string,
    medicalExpenses: number,
    hadRevisionSurgery: boolean,
    hasOngoingSymptoms: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = ETHICON_PRODUCTS.find(p => p.id === productType) || ETHICON_PRODUCTS[0];
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
