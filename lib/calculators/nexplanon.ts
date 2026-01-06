// ============================================
// NEXPLANON LAWSUIT CALCULATOR
// 2026 Birth Control Implant Migration - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Nexplanon Lawsuit Calculator",
    tagline: "Free 2026 Birth Control Implant Settlement Estimator",
    description: "Calculate Nexplanon lawsuit settlements. Implant migration to lungs, difficult removal, nerve damage claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/nexplanon",
};

export const INJURY_TYPES = [
    { id: "migration-lung", name: "Migration to Lung/Chest", description: "Implant traveled to pulmonary artery", avgSettlement: 175000, multiplier: 3.5 },
    { id: "nerve-damage", name: "Nerve Damage", description: "Injury during insertion/removal", avgSettlement: 100000, multiplier: 2.0 },
    { id: "difficult-removal", name: "Difficult/Incomplete Removal", description: "Implant broke or stuck", avgSettlement: 75000, multiplier: 1.5 },
];

export const TREATMENT_TYPE = [
    { id: "surgery", name: "Surgical Removal Required", multiplier: 2.5 },
    { id: "ct-guided", name: "CT-Guided Extraction", multiplier: 2.0 },
    { id: "office", name: "Office Removal Only", multiplier: 1.0 },
    { id: "ongoing", name: "Implant Still Present", multiplier: 1.8 },
];

export const NEXPLANON_2026 = {
    statistics: {
        manufacturer: "Merck",
        usersWorldwide: "3+ Million",
        fdaWarning: "Black Box Label Required",
        status: "Individual Lawsuits",
    },
    citations: [
        "FDA Safety Communication - Nexplanon Implant Migration",
        "FDA MAUDE Database - Nexplanon Adverse Events",
    ],
};

export const CALCULATORS = [
    { id: "nexplanon/calculator", name: "Settlement Calculator", description: "Estimate Nexplanon claim value", icon: Calculator, featured: true },
    { id: "nexplanon/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Nexplanon lawsuit about?", answer: "Nexplanon lawsuits allege that Merck failed to adequately warn about the risk of implant migration. The birth control implant can travel from the arm to the lungs, chest, or blood vessels, sometimes requiring open surgery to remove." },
    { question: "What is Nexplanon?", answer: "Nexplanon is a matchstick-sized birth control implant inserted under the skin of the upper arm. It releases etonogestrel to prevent pregnancy for up to 3 years. It replaced Implanon in 2011 with added radiopacity." },
    { question: "What are the risks of Nexplanon?", answer: "Reported risks include implant migration to the lung or chest cavity, nerve and blood vessel damage during insertion or removal, chronic arm pain, difficult or impossible removal, and breakage during removal." },
    { question: "Who qualifies for a Nexplanon lawsuit?", answer: "Women who had Nexplanon (or Implanon) and experienced implant migration, required surgical removal, suffered nerve damage, or had other serious complications may qualify. Documentation of the implant and injury is essential." },
    { question: "What is the average settlement?", answer: "Settlement values vary based on injury severity. Cases requiring surgical removal of migrated implants may receive $100,000-$200,000 or more. Nerve damage and chronic pain cases are evaluated individually." },
];

export function calculateNexplanonSettlement(
    injuryType: string,
    treatmentType: string,
    medicalExpenses: number,
    monthsWithDevice: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const treatment = TREATMENT_TYPE.find(t => t.id === treatmentType) || TREATMENT_TYPE[0];

    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const earlyMigration = monthsWithDevice < 12 ? 1.2 : 1.0;

    const baseMultiplier = injury.multiplier * treatment.multiplier * docsBonus * earlyMigration;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        treatmentType: treatment.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
