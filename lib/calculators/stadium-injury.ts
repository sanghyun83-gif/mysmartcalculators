// ============================================
// STADIUM INJURY LAWSUIT CALCULATOR
// 2026 Sports Venue Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Stadium Injury Calculator",
    tagline: "Free 2026 Stadium Injury Settlement Estimator",
    description: "Calculate stadium injury lawsuit settlements. Foul balls, railing falls, crowd surge, alcohol-related injuries. Based on 2026 venue safety data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/stadium-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/objects", avgSettlement: 450000, multiplier: 4.0 },
    { id: "eye", name: "Eye Injury / Blindness", description: "Foul ball impact", avgSettlement: 350000, multiplier: 3.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Falls from seating", avgSettlement: 95000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injury", description: "Sprains, strains", avgSettlement: 45000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "foul-ball", name: "Foul Ball / Puck Strike", multiplier: 1.3 },
    { id: "fall", name: "Fall from Seating / Railing", multiplier: 1.5 },
    { id: "crowd", name: "Crowd Surge / Crush", multiplier: 1.6 },
    { id: "alcohol", name: "Alcohol-Related Incident", multiplier: 1.4 },
];

export const STADIUM_2026 = {
    statistics: {
        injuries: "1,750+ Annual Stadium Injuries",
        foulBall: "35+ Serious Foul Ball Injuries/Year",
        source: "CDC / NHTSA Data",
    },
    citations: [
        "Centers for Disease Control (CDC) Sports Venue Injury Report 2026",
        "National Highway Traffic Safety Administration (NHTSA) Stadium Safety Guidelines 2026",
    ],
};

export const CALCULATORS = [
    { id: "stadium-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "stadium-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a stadium injury lawsuit?", answer: "Stadium injury lawsuits seek compensation for injuries at sports venues due to dangerous conditions, inadequate barriers, crowd management failures, or over-service of alcohol." },
    { question: "Can I sue for foul ball injuries?", answer: "Despite the 'Baseball Rule' assumption of risk, stadiums can be liable if protective netting was inadequate, warnings were insufficient, or the design was unreasonably dangerous." },
    { question: "What about railing falls?", answer: "Stadiums must maintain safe railings and barriers. Falls from seating areas due to inadequate railings or gaps create clear liability." },
    { question: "Are stadiums liable for drunk fans?", answer: "Yes. Stadiums can be liable for over-serving alcohol or failing to control intoxicated patrons who injure others. This is called 'dram shop liability.'" },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Document injuries immediately and consult an attorney soon after the incident." },
];

export function calculateStadiumSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    safetyViolation: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const safetyBonus = safetyViolation ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * safetyBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        incidentType: incident.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
