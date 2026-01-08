// ============================================
// RETAIL STORE INJURY LAWSUIT CALCULATOR
// 2026 Retail Premises Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Retail Store Injury Calculator",
    tagline: "Free 2026 Retail Store Injury Settlement Estimator",
    description: "Calculate retail store injury lawsuit settlements. Black Friday injuries, falling displays, escalator accidents, automatic doors. Based on 2026 premises liability data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/retail-store-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/objects", avgSettlement: 400000, multiplier: 4.0 },
    { id: "crush", name: "Crush Injuries", description: "Black Friday stampedes", avgSettlement: 250000, multiplier: 3.5 },
    { id: "fractures", name: "Fractures", description: "Broken bones from falls", avgSettlement: 95000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injury", description: "Sprains, strains, cuts", avgSettlement: 45000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.3 },
    { id: "display", name: "Falling Display / Merchandise", multiplier: 1.45 },
    { id: "escalator", name: "Escalator / Elevator Accident", multiplier: 1.5 },
    { id: "door", name: "Automatic Door Malfunction", multiplier: 1.4 },
];

export const RETAIL_2026 = {
    statistics: {
        injuries: "50,000+ Annual Retail Store Injuries",
        blackFriday: "100+ Black Friday Injuries/Year",
        source: "OSHA / CPSC Data",
    },
    citations: [
        "Occupational Safety and Health Administration (OSHA) Retail Safety Guidelines 2026",
        "Consumer Product Safety Commission (CPSC) Retail Injury Reports 2026",
    ],
};

export const CALCULATORS = [
    { id: "retail-store-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "retail-store-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a retail store injury lawsuit?", answer: "Retail store injury lawsuits seek compensation for injuries at stores like Walmart, Target, or department stores due to dangerous conditions, falling merchandise, escalator malfunctions, or crowd control failures." },
    { question: "What are common retail store injuries?", answer: "Common injuries include slip and falls on wet floors, being struck by falling displays or merchandise, escalator/elevator accidents, automatic door injuries, and Black Friday crowd crush." },
    { question: "What about Black Friday injuries?", answer: "Stores can be liable for Black Friday stampede and crowd crush injuries if they failed to implement adequate crowd control measures. Several deaths and serious injuries occur each year during doorbuster events." },
    { question: "Are escalator injuries covered?", answer: "Yes. Stores have a duty to maintain safe escalators and elevators. Common injuries include falls, entrapment, and sudden stops or reversals." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Report the incident immediately and document everything before leaving the store." },
];

export function calculateRetailSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    crowdControl: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const crowdBonus = crowdControl ? 1.4 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * crowdBonus * docsBonus;
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
