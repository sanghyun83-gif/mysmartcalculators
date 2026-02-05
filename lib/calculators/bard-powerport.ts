// ============================================
// BARD POWERPORT LAWSUIT CALCULATOR
// 2026 Port Catheter Fracture, Migration - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Bard PowerPort Lawsuit Calculator",
    tagline: "Free 2026 Port Catheter Lawsuit Estimator",
    description: "Calculate Bard PowerPort lawsuit settlements. Catheter fracture, migration, blood clots. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bard-powerport",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal complications", avgSettlement: 1000000, multiplier: 5.0 },
    { id: "surgery", name: "Emergency Surgery", description: "Retrieval surgery required", avgSettlement: 300000, multiplier: 3.0 },
    { id: "clots", name: "Blood Clots / Embolism", description: "DVT, pulmonary embolism", avgSettlement: 200000, multiplier: 2.5 },
    { id: "fracture", name: "Catheter Fracture / Migration", description: "Device broke or moved", avgSettlement: 100000, multiplier: 2.0 },
];

export const DEVICE_STATUS = [
    { id: "recalled", name: "Recalled Device Model", multiplier: 1.3 },
    { id: "named", name: "Named in Lawsuits", multiplier: 1.1 },
    { id: "other", name: "Other Bard Port", multiplier: 1.0 },
];

export const POWERPORT_2026 = {
    statistics: {
        fdaRecall: "Class I Recall",
        pendingCases: 4000,
        avgProjectedSettlement: 150000,
        status: "Active Litigation",
    },
    citations: [
        "FDA Class I Recall - Bard PowerPort Implanted Port Catheter",
        "Bard PowerPort Product Liability Litigation 2026",
    ],
};

export const CALCULATORS = [
    { id: "bard-powerport/calculator", name: "Settlement Calculator", description: "Estimate PowerPort claim value", icon: Calculator, featured: true },
    { id: "bard-powerport/guide", name: "Claims Guide", description: "How to file a Bard lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Bard PowerPort lawsuit about?", answer: "Lawsuits allege that Bard Access Systems sold defective implanted port catheters that can fracture, migrate through the body, and cause serious injuries including blood clots, cardiac damage, and death. The devices were subject to FDA Class I recall." },
    { question: "What is a Class I recall?", answer: "A Class I recall is the FDA's most serious recall category, indicating the product has a reasonable probability of causing serious adverse health consequences or death. Bard PowerPort devices received this classification." },
    { question: "Who qualifies for a Bard PowerPort lawsuit?", answer: "Patients who had a Bard PowerPort implanted and experienced complications such as catheter fracture, migration, blood clots, infection, or required surgery to remove fragments may qualify for compensation." },
    { question: "What injuries are covered?", answer: "Covered injuries include catheter fracture, device migration, pulmonary embolism, deep vein thrombosis (DVT), cardiac perforation, infection, and complications requiring emergency surgery." },
    { question: "What compensation can I expect?", answer: "Settlement values depend on injury severity. Emergency surgery cases may receive $200,000-$400,000, while wrongful death cases could exceed $1 million. Each case is evaluated individually." },
];

export function calculatePowerPortSettlement(
    injuryType: string,
    deviceStatus: string,
    medicalExpenses: number,
    hadSurgery: boolean,
    daysHospitalized: number
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const status = DEVICE_STATUS.find(s => s.id === deviceStatus) || DEVICE_STATUS[0];

    const surgeryBonus = hadSurgery ? 1.3 : 1.0;
    const hospitalBonus = daysHospitalized > 7 ? 1.3 : daysHospitalized > 3 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * status.multiplier * surgeryBonus * hospitalBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        deviceStatus: status.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
