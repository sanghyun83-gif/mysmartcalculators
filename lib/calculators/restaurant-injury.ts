// ============================================
// RESTAURANT INJURY LAWSUIT CALCULATOR
// 2026 Dining Premises Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Restaurant Injury Calculator",
    tagline: "Free 2026 Restaurant Injury Settlement Estimator",
    description: "Calculate restaurant injury lawsuit settlements. Slip and fall, burns, broken chairs, falling objects. Based on 2026 premises liability data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/restaurant-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls", avgSettlement: 350000, multiplier: 4.0 },
    { id: "burns", name: "Severe Burns", description: "Hot food/beverage spills", avgSettlement: 180000, multiplier: 3.0 },
    { id: "fractures", name: "Fractures", description: "Broken bones from falls/chairs", avgSettlement: 85000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injury", description: "Sprains, strains, cuts", avgSettlement: 40000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.3 },
    { id: "burns", name: "Burns / Scalding", multiplier: 1.4 },
    { id: "furniture", name: "Broken Chair / Furniture", multiplier: 1.35 },
    { id: "falling", name: "Falling Objects", multiplier: 1.25 },
];

export const RESTAURANT_2026 = {
    statistics: {
        injuries: "30,000+ Annual Restaurant Injuries",
        slipFall: "60% Are Slip & Fall",
        source: "OSHA / NRA Data",
    },
    citations: [
        "Occupational Safety and Health Administration (OSHA) Restaurant Safety Guidelines 2026",
        "National Restaurant Association (NRA) Safety Standards 2026",
    ],
};

export const CALCULATORS = [
    { id: "restaurant-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "restaurant-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a restaurant injury lawsuit?", answer: "Restaurant injury lawsuits seek compensation for injuries at dining establishments due to dangerous conditions, defective furniture, hot spills, or inadequate maintenance." },
    { question: "What are common restaurant injuries?", answer: "Common injuries include slip and falls on wet floors, burns from hot food/beverages, cuts from broken glass, injuries from broken chairs, and falling objects." },
    { question: "What must I prove?", answer: "You must prove the restaurant knew or should have known about the hazard, failed to fix it or warn you, and that the hazard caused your injury." },
    { question: "What about hot coffee spills?", answer: "The famous McDonald's coffee case established that restaurants can be liable for dangerously hot beverages causing burns. Similar claims apply to hot food spills." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Report the incident immediately and document everything before leaving." },
];

export function calculateRestaurantSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    priorViolations: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const violationsBonus = priorViolations ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * violationsBonus * docsBonus;
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
