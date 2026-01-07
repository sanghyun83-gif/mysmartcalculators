// ============================================
// WATERPARK INJURY LAWSUIT CALCULATOR
// 2026 Water Slide/Pool Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Waterpark Injury Calculator",
    tagline: "Free 2026 Waterpark Injury Settlement Estimator",
    description: "Calculate waterpark injury lawsuit settlements. Water slides, wave pools, lazy rivers, drowning claims. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/waterpark-injury",
};

export const INJURY_TYPES = [
    { id: "drowning-death", name: "Drowning / Wrongful Death", description: "Fatal waterpark accidents", avgSettlement: 1500000, multiplier: 5.5 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from slides", avgSettlement: 500000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Neck Injury", description: "Cervical injuries", avgSettlement: 400000, multiplier: 3.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 110000, multiplier: 2.5 },
];

export const ACCIDENT_TYPES = [
    { id: "water-slide", name: "Water Slide Accident", multiplier: 1.4 },
    { id: "wave-pool", name: "Wave Pool Drowning", multiplier: 1.5 },
    { id: "lazy-river", name: "Lazy River Entrapment", multiplier: 1.35 },
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.2 },
];

export const WATERPARK_2026 = {
    statistics: {
        injuries: "4,500+ Injuries/Year",
        deaths: "35+ Deaths/Year",
        source: "CPSC / WWA Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Waterpark Report 2026",
        "World Waterpark Association (WWA) Safety Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "waterpark-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "waterpark-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a waterpark injury lawsuit?", answer: "Waterpark injury lawsuits seek compensation for injuries caused by dangerous water slides, inadequate lifeguard supervision, or unsafe pool conditions. Waterparks owe guests a duty of care." },
    { question: "What are common waterpark accidents?", answer: "Common accidents include water slide injuries (ejections, collisions), wave pool drownings, lazy river entrapments, slip and falls on wet surfaces, and inadequate lifeguard response." },
    { question: "Can I sue for a drowning accident?", answer: "Yes. Waterparks must provide adequate lifeguard coverage, proper signage, and emergency response. Failure to do so can result in liability for drowning incidents." },
    { question: "What about waivers I signed?", answer: "Waivers cannot protect waterparks from gross negligence or willful misconduct. If the park ignored known dangers or failed basic safety, the waiver may not apply." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-4 years). Document the incident immediately and consult an attorney promptly, as evidence can deteriorate quickly." },
];

export function calculateWaterparkSettlement(
    injuryType: string,
    accidentType: string,
    medicalExpenses: number,
    lifeguardNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];

    const negligenceBonus = lifeguardNegligence ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * accident.multiplier * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentType: accident.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
