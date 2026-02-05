// ============================================
// THEME PARK INJURY LAWSUIT CALCULATOR
// 2026 Disney/Universal Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Theme Park Injury Calculator",
    tagline: "Free 2026 Theme Park Injury Settlement Estimator",
    description: "Calculate theme park injury lawsuit settlements. Disney, Universal, SeaWorld injury claims. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/theme-park",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal theme park accident claims", avgSettlement: 1800000, multiplier: 5.5 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from attractions", avgSettlement: 600000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Neck Injury", description: "Back and neck injuries", avgSettlement: 500000, multiplier: 3.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 140000, multiplier: 2.5 },
];

export const ACCIDENT_TYPES = [
    { id: "attraction-malfunction", name: "Attraction Malfunction", multiplier: 1.5 },
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.2 },
    { id: "character-incident", name: "Character/Employee Incident", multiplier: 1.3 },
    { id: "heat-related", name: "Heat-Related Emergency", multiplier: 1.25 },
];

export const THEME_PARK_2026 = {
    statistics: {
        injuries: "50,000+ Injuries/Year",
        visitors: "400M+ Visitors/Year",
        source: "CPSC / TEA Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Theme Park Report 2026",
        "Themed Entertainment Association (TEA) Global Attractions Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "theme-park/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "theme-park/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a theme park injury lawsuit?", answer: "Theme park injury lawsuits seek compensation for injuries at large destination parks like Disney, Universal, and SeaWorld. These parks have a duty to maintain safe premises and proper ride operations." },
    { question: "Can I sue Disney or Universal?", answer: "Yes. Major theme parks can be sued for negligence. However, ticket purchases often include arbitration agreements. An attorney can evaluate whether these clauses apply to your injury." },
    { question: "What about heat-related emergencies?", answer: "Theme parks in Florida and California must take reasonable precautions for guest safety in heat. Failure to provide adequate shade, water, or cooling can create liability." },
    { question: "Are character meet-and-greet injuries covered?", answer: "Yes. Injuries caused by employees in costume, character interactions, or photo opportunities can result in valid claims against the park." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-4 years). Florida theme parks may have specific notice requirements. Document your injury and consult an attorney promptly." },
];

export function calculateThemeParkSettlement(
    injuryType: string,
    accidentType: string,
    medicalExpenses: number,
    attractionMalfunction: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];

    const malfunctionBonus = attractionMalfunction ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * accident.multiplier * malfunctionBonus * docsBonus;
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
