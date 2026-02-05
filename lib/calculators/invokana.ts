// ============================================
// INVOKANA AMPUTATION LAWSUIT CALCULATOR
// 2026 Diabetes Drug Amputation Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Invokana Lawsuit Calculator",
    tagline: "Free 2026 Diabetes Drug Amputation Settlement Estimator",
    description: "Calculate Invokana lawsuit settlements. Leg amputation, toe amputation, diabetic ketoacidosis claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/invokana",
};

export const INJURY_TYPES = [
    { id: "leg-amputation", name: "Leg Amputation", description: "Above or below knee amputation", avgSettlement: 400000, multiplier: 4.0 },
    { id: "toe-amputation", name: "Toe Amputation", description: "One or more toes removed", avgSettlement: 200000, multiplier: 2.5 },
    { id: "dka", name: "Diabetic Ketoacidosis", description: "Life-threatening DKA episode", avgSettlement: 150000, multiplier: 2.0 },
];

export const AMPUTATION_LEVEL = [
    { id: "above-knee", name: "Above Knee", multiplier: 2.0 },
    { id: "below-knee", name: "Below Knee", multiplier: 1.7 },
    { id: "foot", name: "Foot/Partial Foot", multiplier: 1.4 },
    { id: "toe", name: "Toe(s)", multiplier: 1.0 },
    { id: "none", name: "No Amputation (DKA only)", multiplier: 0.8 },
];

export const INVOKANA_2026 = {
    statistics: {
        manufacturer: "Johnson & Johnson",
        fdaWarning: "Black Box (2017)",
        amputationRisk: "2x Higher",
        status: "Active Litigation",
    },
    citations: [
        "FDA Black Box Warning - Invokana Amputation Risk (2017)",
        "FDA Drug Safety Communication - SGLT2 Inhibitors 2026",
    ],
};

export const CALCULATORS = [
    { id: "invokana/calculator", name: "Settlement Calculator", description: "Estimate Invokana claim value", icon: Calculator, featured: true },
    { id: "invokana/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Invokana lawsuit about?", answer: "Invokana lawsuits allege that Johnson & Johnson failed to warn patients about the risk of leg, foot, and toe amputations. The FDA added a black box warning in 2017 after studies showed Invokana doubled amputation risk." },
    { question: "What is Invokana?", answer: "Invokana (canagliflozin) is a type 2 diabetes drug in the SGLT2 inhibitor class. It works by causing the kidneys to excrete excess glucose. It was the first SGLT2 inhibitor approved in the U.S. in 2013." },
    { question: "What injuries are linked to Invokana?", answer: "The most serious injury is amputation of toes, feet, or legs. Other injuries include diabetic ketoacidosis (DKA), kidney damage, bone fractures, urinary tract infections, and Fournier's gangrene." },
    { question: "Who qualifies for an Invokana lawsuit?", answer: "Patients who took Invokana (or Invokamet) and suffered amputation, DKA, or other serious injuries may qualify. Having medical records proving Invokana use before the injury is critical." },
    { question: "What is the average settlement?", answer: "Amputation cases may receive $200,000-$500,000+ depending on severity. Leg amputations receive higher compensation than toe amputions. DKA cases without amputation receive lower amounts." },
];

export function calculateInvokanaSettlement(
    injuryType: string,
    amputationLevel: string,
    medicalExpenses: number,
    monthsOnDrug: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const amputation = AMPUTATION_LEVEL.find(a => a.id === amputationLevel) || AMPUTATION_LEVEL[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = monthsOnDrug > 24 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * amputation.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        amputationLevel: amputation.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
