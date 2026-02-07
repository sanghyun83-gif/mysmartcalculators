// ============================================
// SPINAL FUSION HARDWARE LAWSUIT CALCULATOR
// 2026 Pedicle Screw/Rod Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Spinal Fusion Hardware Calculator",
    tagline: "Free 2026 Spinal Hardware Settlement Estimator",
    description: "Calculate spinal fusion hardware lawsuit settlements. Pedicle screw, rod, cage failure claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/spinal-fusion",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hardware removed or replaced", avgSettlement: 350000, multiplier: 3.5 },
    { id: "hardware-failure", name: "Hardware Breakage / Failure", description: "Screw, rod, or cage broken", avgSettlement: 275000, multiplier: 2.75 },
    { id: "nerve-damage", name: "Nerve Damage / Chronic Pain", description: "Nerve injury from misplaced hardware", avgSettlement: 225000, multiplier: 2.25 },
];

export const HARDWARE_TYPES = [
    { id: "pedicle-screw", name: "Pedicle Screw System", multiplier: 1.25 },
    { id: "spinal-rod", name: "Spinal Rods", multiplier: 1.2 },
    { id: "interbody-cage", name: "Interbody Fusion Cage", multiplier: 1.15 },
    { id: "other", name: "Other Hardware", multiplier: 1.0 },
];

export const FUSION_2026 = {
    statistics: {
        status: "Ongoing Claims",
        recalls: "Multiple FDA Recalls",
        issue: "Hardware Failure",
        surgeries: "450K+ Annually",
    },
    citations: [
        "FDA MAUDE Reports - Spinal Fusion Hardware",
        "FDA Class II Recalls - Pedicle Screw Systems",
    ],
};

export const CALCULATORS = [
    { id: "spinal-fusion/calculator", name: "Settlement Calculator", description: "Estimate hardware failure claim", icon: Calculator, featured: true },
    { id: "spinal-fusion/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a spinal fusion hardware lawsuit?", answer: "Spinal fusion hardware lawsuits allege that pedicle screws, rods, cages, or other spinal hardware were defectively designed or manufactured, causing failure and the need for revision surgery." },
    { question: "What types of hardware are involved?", answer: "Common hardware includes pedicle screws that anchor to vertebrae, rods that stabilize the spine, interbody cages that replace discs, and plates that secure the fusion." },
    { question: "What causes spinal hardware failure?", answer: "Hardware can fail due to design defects, manufacturing errors, metal fatigue, improper sizing, or loosening over time. Screws may break, rods may fracture, or cages may migrate." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients who had spinal fusion surgery with hardware that broke, loosened, or migrated requiring revision surgery may qualify. Cases are evaluated individually." },
    { question: "What is the average settlement?", answer: "Spinal hardware settlements vary based on injury severity. Cases requiring revision surgery may receive $200,000-$500,000 depending on complications and manufacturer." },
];

export function calculateFusionSettlement(
    injuryType: string,
    hardwareType: string,
    medicalExpenses: number,
    yearsSinceSurgery: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const hardware = HARDWARE_TYPES.find(h => h.id === hardwareType) || HARDWARE_TYPES[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const earlyFailure = yearsSinceSurgery < 3 ? 1.3 : 1.0;

    const baseMultiplier = injury.multiplier * hardware.multiplier * docsBonus * earlyFailure;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        hardwareType: hardware.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
