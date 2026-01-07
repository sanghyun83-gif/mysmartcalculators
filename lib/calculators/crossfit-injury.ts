// ============================================
// CROSSFIT INJURY LAWSUIT CALCULATOR
// 2026 High-Intensity Training Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "CrossFit Injury Calculator",
    tagline: "Free 2026 CrossFit Injury Settlement Estimator",
    description: "Calculate CrossFit injury lawsuit settlements. Rhabdomyolysis, coach negligence, overexertion injuries. Based on 2026 fitness injury data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/crossfit-injury",
};

export const INJURY_TYPES = [
    { id: "rhabdo", name: "Rhabdomyolysis", description: "Muscle breakdown from overexertion", avgSettlement: 250000, multiplier: 3.5 },
    { id: "spinal", name: "Spinal / Back Injury", description: "Improper lifting technique", avgSettlement: 300000, multiplier: 3.5 },
    { id: "shoulder", name: "Shoulder Injury", description: "Rotator cuff, labrum tears", avgSettlement: 80000, multiplier: 2.5 },
    { id: "knee", name: "Knee / ACL Injury", description: "Ligament tears from jumps", avgSettlement: 70000, multiplier: 2.0 },
];

export const NEGLIGENCE_TYPES = [
    { id: "coach", name: "Coach Negligence / Improper Instruction", multiplier: 1.5 },
    { id: "overexertion", name: "Pushed Beyond Safe Limits", multiplier: 1.4 },
    { id: "equipment", name: "Equipment Defect / Poor Maintenance", multiplier: 1.35 },
    { id: "premises", name: "Unsafe Training Environment", multiplier: 1.25 },
];

export const CROSSFIT_2026 = {
    statistics: {
        injuries: "73.5% Report Injury at Some Point",
        rhabdo: "Rhabdo Risk Higher in CrossFit",
        source: "ACSM / JOSPT Research",
    },
    citations: [
        "American College of Sports Medicine (ACSM) CrossFit Injury Study 2026",
        "Journal of Orthopaedic & Sports Physical Therapy (JOSPT) 2026",
    ],
};

export const CALCULATORS = [
    { id: "crossfit-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "crossfit-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a CrossFit injury lawsuit?", answer: "CrossFit injury lawsuits seek compensation for injuries from high-intensity workouts caused by negligent coaching, overexertion, or unsafe conditions. CrossFit's competitive culture creates unique liability issues." },
    { question: "What is rhabdomyolysis?", answer: "Rhabdomyolysis ('rhabdo') occurs when overworked muscles break down, releasing proteins into the bloodstream. It can cause kidney failure and death. CrossFit has nicknamed it 'Uncle Rhabdo' - a controversial mascot." },
    { question: "Can I sue a CrossFit coach?", answer: "Yes. Coaches can be liable for pushing members beyond safe limits, ignoring signs of exhaustion, providing improper instruction on complex Olympic lifts, or creating a culture that discourages stopping." },
    { question: "What about the waiver I signed?", answer: "CrossFit waivers don't protect against gross negligence, reckless conduct, or intentional harm. Many states limit waiver enforceability. Rhabdo cases often succeed despite waivers." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Rhabdo injuries may have delayed onset - consult an attorney if you develop symptoms after intense workouts." },
];

export function calculateCrossFitSettlement(
    injuryType: string,
    negligenceType: string,
    medicalExpenses: number,
    rhabdoInvolved: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const negligence = NEGLIGENCE_TYPES.find(n => n.id === negligenceType) || NEGLIGENCE_TYPES[0];

    const rhabdoBonus = rhabdoInvolved ? 1.4 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * negligence.multiplier * rhabdoBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        negligenceType: negligence.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
