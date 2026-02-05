// ============================================
// ESSURE BIRTH CONTROL LAWSUIT CALCULATOR
// 2026 Permanent Contraceptive Device - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Essure Lawsuit Calculator",
    tagline: "Free 2026 Birth Control Device Settlement Estimator",
    description: "Calculate Essure birth control device lawsuit settlements. Coil migration, organ perforation, chronic pain claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/essure",
};

export const INJURY_TYPES = [
    { id: "perforation", name: "Organ Perforation", description: "Coil penetrated uterus/organs", avgSettlement: 150000, multiplier: 3.0 },
    { id: "migration", name: "Device Migration", description: "Coils moved from placement", avgSettlement: 100000, multiplier: 2.0 },
    { id: "chronic-pain", name: "Chronic Pain", description: "Persistent pelvic pain", avgSettlement: 75000, multiplier: 1.5 },
];

export const SURGERY_REQUIRED = [
    { id: "hysterectomy", name: "Hysterectomy Required", multiplier: 2.0 },
    { id: "removal", name: "Device Removal Surgery", multiplier: 1.5 },
    { id: "multiple", name: "Multiple Surgeries", multiplier: 2.5 },
    { id: "none", name: "No Surgery", multiplier: 1.0 },
];

export const ESSURE_2026 = {
    statistics: {
        manufacturer: "Bayer",
        fdaStatus: "Removed from US Market 2018",
        settledCases: 39000,
        settlementFund: "$1.6 Billion",
    },
    citations: [
        "Bayer Essure Settlement Agreement (2020)",
        "FDA Essure Post-Market Safety Review",
    ],
};

export const CALCULATORS = [
    { id: "essure/calculator", name: "Settlement Calculator", description: "Estimate Essure claim value", icon: Calculator, featured: true },
    { id: "essure/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is Essure?", answer: "Essure was a permanent birth control device made by Bayer. It consisted of metal coils inserted into the fallopian tubes without surgery. The device was removed from the U.S. market in 2018 after thousands of adverse event reports." },
    { question: "Why was Essure removed from the market?", answer: "The FDA ordered restrictions on Essure in 2016 due to safety concerns. Bayer voluntarily withdrew the device from the U.S. market in 2018 due to declining sales and ongoing litigation, though they never admitted fault." },
    { question: "What injuries are associated with Essure?", answer: "Common injuries include device migration, organ perforation, chronic pelvic pain, heavy bleeding, allergic reactions to nickel, and unintended pregnancy. Many women required hysterectomies to remove the device." },
    { question: "What was the Essure settlement?", answer: "Bayer agreed to pay $1.6 billion to settle approximately 39,000 Essure lawsuits in 2020. Individual settlement amounts varied based on injury severity. Some cases continue in state courts." },
    { question: "Can I still file an Essure lawsuit?", answer: "Most Essure claims have been resolved through the 2020 settlement. However, women who did not participate in the settlement or who developed injuries later may still have options. Consult an attorney immediately to discuss your case." },
];

export function calculateEssureSettlement(
    injuryType: string,
    surgeryRequired: string,
    medicalExpenses: number,
    yearsWithDevice: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const surgery = SURGERY_REQUIRED.find(s => s.id === surgeryRequired) || SURGERY_REQUIRED[0];

    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const yearsBonus = yearsWithDevice > 5 ? 1.2 : 1.0;

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
