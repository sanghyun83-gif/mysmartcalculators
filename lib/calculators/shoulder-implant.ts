// ============================================
// SHOULDER IMPLANT LAWSUIT CALCULATOR
// 2026 Reverse Shoulder Replacement Failures - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Shoulder Implant Lawsuit Calculator",
    tagline: "Free 2026 Shoulder Replacement Settlement Estimator",
    description: "Calculate shoulder implant lawsuit settlements. Reverse shoulder replacement failures, device loosening, revision surgery claims. Based on 2026 data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/shoulder-implant",
};

export const INJURY_TYPES = [
    { id: "revision", name: "Revision Surgery Required", description: "Device failure requiring replacement", avgSettlement: 200000, multiplier: 2.5 },
    { id: "loosening", name: "Component Loosening", description: "Implant shifted from bone", avgSettlement: 150000, multiplier: 2.0 },
    { id: "infection", name: "Deep Infection", description: "Post-surgical infection", avgSettlement: 175000, multiplier: 2.2 },
];

export const DEVICE_BRANDS = [
    { id: "exactech", name: "Exactech", info: "Recalled 2022 - packaging defect" },
    { id: "zimmer", name: "Zimmer Biomet", info: "Reverse shoulder systems" },
    { id: "depuy", name: "DePuy Synthes", info: "Delta XTEND system" },
    { id: "wright", name: "Wright Medical", info: "Various shoulder implants" },
];

export const SHOULDER_2026 = {
    statistics: {
        majorRecalls: "Exactech (2022)",
        affectedDevices: 140000,
        pendingCases: 1500,
        status: "Active Litigation",
    },
    citations: [
        "FDA Class II Recall - Exactech Shoulder Implants (2022)",
        "FDA MAUDE Database Shoulder Implant Adverse Events",
    ],
};

export const CALCULATORS = [
    { id: "shoulder-implant/calculator", name: "Settlement Calculator", description: "Estimate shoulder implant claim value", icon: Calculator, featured: true },
    { id: "shoulder-implant/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the shoulder implant lawsuit about?", answer: "Shoulder implant lawsuits allege that manufacturers sold defective devices that failed prematurely, causing pain, bone loss, and requiring revision surgery. Exactech's 2022 recall of 140,000+ shoulder implants is the largest case." },
    { question: "What happened with the Exactech recall?", answer: "In 2022, Exactech recalled over 140,000 shoulder, hip, and knee implants due to packaging defects that allowed oxygen to degrade the plastic components. This caused accelerated wear, debris, and premature failure." },
    { question: "What injuries are associated with failed shoulder implants?", answer: "Common injuries include chronic pain, bone loss (osteolysis), component loosening, dislocation, infection, and the need for revision surgery. Some patients require multiple revision surgeries." },
    { question: "Who qualifies for a shoulder implant lawsuit?", answer: "Patients who received a recalled or defective shoulder implant and experienced premature failure, pain, bone loss, or required revision surgery may qualify. You must identify the specific device manufacturer." },
    { question: "What is the average settlement value?", answer: "Settlement values vary significantly based on injury severity. Cases requiring revision surgery may receive $150,000-$300,000 or more. Multiple revisions or permanent disability increase values." },
];

export function calculateShoulderImplantSettlement(
    injuryType: string,
    deviceBrand: string,
    medicalExpenses: number,
    yearsWithDevice: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const brand = DEVICE_BRANDS.find(b => b.id === deviceBrand);

    const recallBonus = brand?.id === 'exactech' ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const yearsBonus = yearsWithDevice < 5 ? 1.2 : 1.0; // early failure

    const baseMultiplier = injury.multiplier * recallBonus * docsBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        deviceBrand: brand?.name || 'Unknown',
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
