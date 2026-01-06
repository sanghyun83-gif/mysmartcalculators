// ============================================
// SPINE IMPLANT LAWSUIT CALCULATOR
// 2026 Spinal Fusion/Disc Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Spine Implant Lawsuit Calculator",
    tagline: "Free 2026 Spinal Device Settlement Estimator",
    description: "Calculate spine implant lawsuit settlements. Infuse BMP, spinal fusion failure, disc replacement claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/spine-implant",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Spine implant replaced or removed", avgSettlement: 400000, multiplier: 4.0 },
    { id: "nerve-damage", name: "Nerve Damage / Radiculopathy", description: "Nerve injury causing pain or weakness", avgSettlement: 350000, multiplier: 3.5 },
    { id: "failed-fusion", name: "Failed Fusion / Pseudoarthrosis", description: "Bones failed to fuse properly", avgSettlement: 300000, multiplier: 3.0 },
    { id: "chronic-pain", name: "Chronic Pain / Complications", description: "Ongoing pain or other complications", avgSettlement: 200000, multiplier: 2.0 },
];

export const SPINE_PRODUCTS = [
    { id: "infuse-bmp", name: "Medtronic Infuse BMP", multiplier: 1.4 },
    { id: "disc-replacement", name: "Artificial Disc Replacement", multiplier: 1.25 },
    { id: "pedicle-screws", name: "Pedicle Screw System", multiplier: 1.15 },
    { id: "other", name: "Other Spine Implant", multiplier: 1.0 },
];

export const SPINE_LOCATION = [
    { id: "cervical", name: "Cervical (Neck)", multiplier: 1.3 },
    { id: "lumbar", name: "Lumbar (Lower Back)", multiplier: 1.2 },
    { id: "thoracic", name: "Thoracic (Mid-Back)", multiplier: 1.1 },
    { id: "multiple", name: "Multiple Levels", multiplier: 1.4 },
];

export const SPINE_2026 = {
    statistics: {
        status: "Active Litigation",
        settlement: "$2.5 Billion+",
        issue: "BMP Off-Label Use",
        affected: "Thousands",
    },
    citations: [
        "In Re: Medtronic Infuse Bone Graft Products Liability MDL",
        "FDA Warning - Infuse BMP Off-Label Use Complications",
        "The Spine Journal - Infuse BMP Studies and Outcomes",
    ],
};

export const CALCULATORS = [
    { id: "spine-implant/calculator", name: "Settlement Calculator", description: "Estimate spine implant claim value", icon: Calculator, featured: true },
    { id: "spine-implant/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "spine-implant/products", name: "Spine Products", description: "Recalled devices", icon: Scale, featured: false },
    { id: "spine-implant/complications", name: "Complications", description: "Known implant issues", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the spine implant lawsuit about?", answer: "Spine implant lawsuits allege that certain spinal devices, especially Medtronic's Infuse BMP, caused serious complications when used off-label in the cervical spine or in ways not approved by the FDA." },
    { question: "What is Medtronic Infuse BMP?", answer: "Infuse BMP is a bone morphogenetic protein product designed to promote bone growth during spinal fusion. It was approved for specific lumbar procedures but was often used off-label." },
    { question: "What are the complications?", answer: "Complications include excessive bone growth, cancer risks, male sterility, nerve damage, infection, and failed fusion requiring revision surgery." },
    { question: "What is off-label use?", answer: "Off-label use means using a device or drug for purposes not approved by the FDA. Infuse BMP was used in cervical spine and other procedures without FDA approval." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients who received Infuse BMP, artificial disc replacements, or other spine implants and experienced serious complications, failed fusion, or revision surgery may qualify." },
    { question: "What was the Infuse BMP settlement?", answer: "Medtronic has paid over $2.5 billion to settle Infuse BMP claims. Individual settlements ranged from $150,000 to $1 million depending on injury severity." },
    { question: "Are disc replacement lawsuits related?", answer: "Yes, some artificial disc replacement devices have also faced litigation for early failure, migration, and the need for revision surgery." },
    { question: "What evidence do I need?", answer: "Key evidence includes surgical records, device identification, imaging showing complications, revision surgery records, and documentation of ongoing problems." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from discovery of injury. Consult an attorney promptly to protect your rights." },
    { question: "How are settlement values determined?", answer: "Settlement values depend on injury severity, need for revision surgery, ongoing symptoms, lost wages, and impact on quality of life." },
];

export function calculateSpineSettlement(
    injuryType: string,
    productType: string,
    spineLocation: string,
    medicalExpenses: number,
    hadRevisionSurgery: boolean,
    hasOngoingSymptoms: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = SPINE_PRODUCTS.find(p => p.id === productType) || SPINE_PRODUCTS[0];
    const location = SPINE_LOCATION.find(l => l.id === spineLocation) || SPINE_LOCATION[0];

    const revisionBonus = hadRevisionSurgery ? 1.3 : 1.0;
    const ongoingBonus = hasOngoingSymptoms ? 1.15 : 1.0;
    const docsBonus = hasDocumentation ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * location.multiplier * revisionBonus * ongoingBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        productType: product.name,
        spineLocation: location.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
