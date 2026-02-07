// ============================================
// PHILIPS CPAP/VENTILATOR LAWSUIT CALCULATOR
// 2026 Foam Degradation, Cancer Risk - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Philips CPAP Settlement Calculator",
    tagline: "Free 2026 Philips CPAP & Ventilator Payout Negotiator",
    description: "Calculate your 2026 Philips CPAP lawsuit settlement value instantly. Free ventilator recall negotiator with official MDL 3014 litigation data, FDA Class I recall benchmarks, and cancer risk analysis.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/philips-ventilator",
};

export const INJURY_TYPES = [
    { id: "cancer", name: "Cancer Diagnosis", description: "Lung, liver, kidney, other cancers", avgSettlement: 500000, multiplier: 5.0 },
    { id: "respiratory", name: "Respiratory Injury", description: "Lung damage, breathing difficulty", avgSettlement: 150000, multiplier: 2.5 },
    { id: "other", name: "Other Health Issues", description: "Headaches, irritation, organ damage", avgSettlement: 75000, multiplier: 1.5 },
];

export const DEVICE_TYPES = [
    { id: "cpap", name: "CPAP Machine", multiplier: 1.0 },
    { id: "bipap", name: "BiPAP Machine", multiplier: 1.1 },
    { id: "ventilator", name: "Ventilator", multiplier: 1.2 },
];

export const PHILIPS_2026 = {
    statistics: {
        mdlNumber: "MDL 3014",
        fdaRecall: "June 2021 Class I Recall",
        devicesRecalled: 15000000,
        status: "Active Litigation",
    },
    citations: [
        "FDA Class I Recall - Philips Respironics CPAP/BiPAP Devices (June 2021)",
        "Philips CPAP MDL 3014 - W.D. Pennsylvania",
        "FDA Safety Communication (2026 Updates)",
    ],
    citation: "Based on official FDA Class I Recall Data, Philips Respironics Safety Communications, and MDL 3014 (Western District of Pennsylvania) settlement benchmarks."
};

export const CALCULATORS = [
    { id: "philips-ventilator/calculator", name: "Settlement Calculator", description: "Estimate CPAP/BiPAP claim value", icon: Calculator, featured: true },
    { id: "philips-ventilator/guide", name: "Claims Guide", description: "How to file a Philips lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Philips CPAP recall about?", answer: "In June 2021, Philips recalled millions of CPAP, BiPAP, and ventilator machines due to a defective sound abatement foam that can degrade and release toxic, potentially carcinogenic particles that users inhale directly." },
    { question: "Which devices are affected?", answer: "Recalled devices include Philips DreamStation, DreamStation 2, System One, and various BiPAP and ventilator models manufactured before April 2021. Over 15 million devices worldwide were recalled." },
    { question: "What health risks are involved?", answer: "Inhaling degraded foam particles may cause headaches, respiratory issues, asthma, lung damage, and potentially cancer. Studies found foam releases toxic chemicals including suspected carcinogens." },
    { question: "Who qualifies for a lawsuit?", answer: "Anyone who used a recalled Philips CPAP, BiPAP, or ventilator and developed health issues including respiratory problems, cancer, or other conditions may qualify. No diagnosis is needed to register for some claims." },
    { question: "What is the status of MDL 3014?", answer: "The MDL 3014 consolidates Philips CPAP cases in Western District of Pennsylvania. Bellwether trials are scheduled for 2026. Settlement negotiations are ongoing but no global settlement has been announced." },
];

export function calculatePhilipsSettlement(
    injuryType: string,
    deviceType: string,
    medicalExpenses: number,
    yearsOfUse: number,
    hasCancerDiagnosis: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const device = DEVICE_TYPES.find(d => d.id === deviceType) || DEVICE_TYPES[0];

    const cancerBonus = hasCancerDiagnosis ? 2.0 : 1.0;
    const usageBonus = yearsOfUse > 5 ? 1.3 : yearsOfUse > 2 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * device.multiplier * cancerBonus * usageBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        deviceType: device.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
