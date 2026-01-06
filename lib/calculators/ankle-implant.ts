// ============================================
// ANKLE IMPLANT LAWSUIT CALCULATOR
// 2026 Total Ankle Replacement Failures - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Ankle Implant Lawsuit Calculator",
    tagline: "Free 2026 Ankle Replacement Settlement Estimator",
    description: "Calculate ankle implant lawsuit settlements. Total ankle replacement failures, device loosening, revision surgery claims. Based on 2026 data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ankle-implant",
};

export const INJURY_TYPES = [
    { id: "revision", name: "Revision Surgery Required", description: "Device failure requiring replacement", avgSettlement: 175000, multiplier: 2.5 },
    { id: "loosening", name: "Component Loosening", description: "Implant shifted from bone", avgSettlement: 125000, multiplier: 2.0 },
    { id: "fusion", name: "Ankle Fusion Required", description: "Implant removed, ankle fused", avgSettlement: 200000, multiplier: 3.0 },
];

export const DEVICE_BRANDS = [
    { id: "wright", name: "Wright Medical INBONE", info: "High failure rate reported" },
    { id: "integra", name: "Integra SALTO", info: "Talus component issues" },
    { id: "depuy", name: "DePuy STAR", info: "Removed from US market 2015" },
    { id: "zimmer", name: "Zimmer Trabecular Metal", info: "Various ankle systems" },
];

export const ANKLE_2026 = {
    statistics: {
        failureRate: "Up to 25% at 10 years",
        revisionsAnnual: 5000,
        pendingCases: 800,
        status: "Active Litigation",
    },
    citations: [
        "FDA MAUDE Database - Ankle Implant Adverse Events",
        "AAOS Ankle Replacement Registry Data 2026",
    ],
};

export const CALCULATORS = [
    { id: "ankle-implant/calculator", name: "Settlement Calculator", description: "Estimate ankle implant claim value", icon: Calculator, featured: true },
    { id: "ankle-implant/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the ankle implant lawsuit about?", answer: "Ankle implant lawsuits allege that manufacturers sold defective total ankle replacement devices that failed prematurely, causing pain, bone loss, and requiring revision surgery or ankle fusion." },
    { question: "What is the failure rate for ankle implants?", answer: "Total ankle replacement has higher failure rates than hip or knee replacements. Studies show failure rates up to 25% at 10 years for some devices, with many patients requiring revision or fusion." },
    { question: "What injuries are associated with failed ankle implants?", answer: "Common injuries include chronic pain and swelling, component loosening or subsidence, bone loss (osteolysis), implant fracture, and the need for revision surgery or ankle fusion." },
    { question: "What is ankle fusion after failed replacement?", answer: "When ankle replacement fails, surgeons may remove the implant and fuse the ankle bones together (arthrodesis). This eliminates motion but provides stability and pain relief when revision is not possible." },
    { question: "Who qualifies for an ankle implant lawsuit?", answer: "Patients who received a total ankle replacement that failed prematurely, causing pain, requiring revision surgery, or leading to ankle fusion may qualify. You must identify the specific device manufacturer." },
];

export function calculateAnkleImplantSettlement(
    injuryType: string,
    deviceBrand: string,
    medicalExpenses: number,
    yearsWithDevice: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const brand = DEVICE_BRANDS.find(b => b.id === deviceBrand);

    const earlyFailureBonus = yearsWithDevice < 5 ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * earlyFailureBonus * docsBonus;
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
