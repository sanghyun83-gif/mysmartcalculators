// ============================================
// LUPRON SIDE EFFECTS LAWSUIT CALCULATOR
// 2026 Bone Loss/Hormonal Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Lupron Side Effects Calculator",
    tagline: "Free 2026 Lupron Settlement Estimator",
    description: "Calculate Lupron side effects lawsuit settlements. Bone loss, hot flashes, hormonal damage claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/lupron",
};

export const INJURY_TYPES = [
    { id: "bone-loss", name: "Bone Loss / Osteoporosis", description: "Severe bone density loss from Lupron", avgSettlement: 225000, multiplier: 3.5 },
    { id: "cardiovascular", name: "Cardiovascular Effects", description: "Heart-related side effects", avgSettlement: 275000, multiplier: 4.0 },
    { id: "hormonal-damage", name: "Permanent Hormonal Damage", description: "Long-term endocrine disruption", avgSettlement: 200000, multiplier: 3.0 },
];

export const USAGE_PURPOSE = [
    { id: "prostate-cancer", name: "Prostate Cancer Treatment", multiplier: 1.2 },
    { id: "endometriosis", name: "Endometriosis Treatment", multiplier: 1.3 },
    { id: "precocious-puberty", name: "Precocious Puberty (Children)", multiplier: 1.5 },
    { id: "ivf", name: "IVF / Fertility Treatment", multiplier: 1.2 },
];

export const LUPRON_2026 = {
    statistics: {
        status: "Active Lawsuits",
        issue: "Bone Loss, Hot Flashes",
        manufacturer: "AbbVie (TAP)",
    },
    citations: [
        "FDA Adverse Event Reports - Lupron (Leuprolide)",
        "Lupron Bone Density Loss Studies 2026",
    ],
};

export const CALCULATORS = [
    { id: "lupron/calculator", name: "Settlement Calculator", description: "Estimate Lupron claim value", icon: Calculator, featured: true },
    { id: "lupron/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a Lupron lawsuit?", answer: "Lupron lawsuits allege the drug (leuprolide acetate) causes severe side effects including bone loss, hot flashes, and long-term hormonal damage that were not adequately warned about." },
    { question: "What are Lupron side effects?", answer: "Common side effects include hot flashes, bone loss (osteoporosis), joint pain, mood changes, and in some cases, permanent hormonal disruption." },
    { question: "Who can file a Lupron lawsuit?", answer: "Anyone who took Lupron for prostate cancer, endometriosis, precocious puberty, or fertility treatment and developed serious side effects may qualify." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, and ongoing treatment costs for bone loss and other side effects." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from when you discovered or should have discovered your injury." },
];

export function calculateLupronSettlement(
    injuryType: string,
    usagePurpose: string,
    medicalExpenses: number,
    hasBoneDensityLoss: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const usage = USAGE_PURPOSE.find(u => u.id === usagePurpose) || USAGE_PURPOSE[0];

    const boneBonus = hasBoneDensityLoss ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * usage.multiplier * boneBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        usagePurpose: usage.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
