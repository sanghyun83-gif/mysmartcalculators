// ============================================
// SUBWAY ACCIDENT LAWSUIT CALCULATOR
// 2026 Transit Authority Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Subway Accident Calculator",
    tagline: "Free 2026 Subway Accident Settlement Estimator",
    description: "Calculate subway accident lawsuit settlements. MTA, CTA, BART injury claims. Platform falls, train strikes, assault claims. Based on 2026 FTA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/subway-accident",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal subway accident claims", avgSettlement: 950000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/strikes", avgSettlement: 500000, multiplier: 4.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from platform falls", avgSettlement: 160000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injuries", description: "Sprains, strains from falls", avgSettlement: 55000, multiplier: 1.5 },
];

export const ACCIDENT_CAUSES = [
    { id: "platform-fall", name: "Platform Fall / Gap", multiplier: 1.3 },
    { id: "train-strike", name: "Train Strike", multiplier: 1.5 },
    { id: "door-closing", name: "Door Closing Injury", multiplier: 1.2 },
    { id: "assault", name: "Assault on Subway", multiplier: 1.35 },
];

export const SUBWAY_2026 = {
    statistics: {
        injuries: "5,500+ Injuries/Year",
        deaths: "75+ Deaths/Year",
        source: "FTA Data",
    },
    citations: [
        "Federal Transit Administration (FTA) Safety Report 2026",
        "Transit Authority Liability Case Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "subway-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "subway-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a subway accident lawsuit?", answer: "Subway accident lawsuits seek compensation for injuries caused by transit authority negligence. Claims can involve platform falls, train strikes, door injuries, or inadequate security leading to assault." },
    { question: "Can I sue the MTA/CTA/BART?", answer: "Yes. Transit authorities are common carriers with a heightened duty of passenger safety. However, they are government entities, so you must file a tort claim notice within 90 days in most jurisdictions." },
    { question: "What if I fell on the platform?", answer: "Transit authorities must maintain safe platforms, including adequate lighting, slip-resistant surfaces, and proper gap warnings. Dangerous conditions can be grounds for a lawsuit." },
    { question: "Can I sue for assault on the subway?", answer: "Yes. Transit authorities have a duty to provide adequate security. If negligent security contributed to your assault, you may have a claim against the transit authority." },
    { question: "How long do I have to file?", answer: "Claims against transit authorities typically require a tort claim notice within 90 days and lawsuit filing within 1-2 years. These deadlines are strict and missing them bars your claim." },
];

export function calculateSubwaySettlement(
    injuryType: string,
    accidentCause: string,
    medicalExpenses: number,
    transitNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const negligenceBonus = transitNegligence ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentCause: cause.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
