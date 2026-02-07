// ============================================
// GARAGE ACCIDENT LAWSUIT CALCULATOR
// 2026 Garage & Mechanic Shop Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Garage Accident Calculator",
    tagline: "Free 2026 Garage Accident Settlement Estimator",
    description: "Calculate garage accident lawsuit settlements. CO poisoning, door malfunctions, vehicle lifts, fires. Based on 2026 premises and workplace safety data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/garage-accident",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal CO poisoning/crush", avgSettlement: 1200000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "CO poisoning brain damage", avgSettlement: 500000, multiplier: 4.0 },
    { id: "crush", name: "Crush Injuries", description: "Vehicle lift collapse", avgSettlement: 250000, multiplier: 3.5 },
    { id: "burns", name: "Burn Injuries", description: "Fire/explosion burns", avgSettlement: 180000, multiplier: 3.0 },
];

export const INCIDENT_TYPES = [
    { id: "co-poisoning", name: "CO Poisoning", multiplier: 1.5 },
    { id: "door", name: "Garage Door Malfunction", multiplier: 1.4 },
    { id: "lift", name: "Vehicle Lift Collapse", multiplier: 1.45 },
    { id: "fire", name: "Fire / Explosion", multiplier: 1.5 },
];

export const GARAGE_2026 = {
    statistics: {
        injuries: "15,000+ Annual Garage Injuries",
        coPoisoning: "400+ CO Poisoning Deaths/Year",
        source: "OSHA / CPSC Data",
    },
    citations: [
        "Occupational Safety and Health Administration (OSHA) Garage Safety Guidelines 2026",
        "Consumer Product Safety Commission (CPSC) Garage Door Injury Reports 2026",
    ],
};

export const CALCULATORS = [
    { id: "garage-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "garage-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a garage accident lawsuit?", answer: "Garage accident lawsuits seek compensation for injuries in residential garages, commercial parking garages, or auto repair shops due to equipment malfunctions, hazardous conditions, or negligence." },
    { question: "What about CO poisoning?", answer: "Carbon monoxide poisoning is a serious garage hazard. Running vehicles in enclosed garages can cause brain damage or death within minutes. Property owners must ensure adequate ventilation." },
    { question: "Are garage door injuries covered?", answer: "Yes. Garage door malfunctions including sensor failures, cable breaks, and spring releases cause thousands of injuries annually. Manufacturers and property owners may be liable." },
    { question: "What about vehicle lift collapses?", answer: "Vehicle lift collapses in auto shops can cause fatal crush injuries. Shop owners must properly maintain lifts and follow OSHA safety requirements." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Document the scene, equipment, and conditions immediately after any garage accident." },
];

export function calculateGarageSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    equipmentDefect: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const defectBonus = equipmentDefect ? 1.4 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * defectBonus * docsBonus;
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
