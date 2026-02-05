// ============================================
// ELEVATOR ACCIDENT LAWSUIT CALCULATOR
// 2026 Premises Liability Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Elevator Accident Calculator",
    tagline: "Free 2026 Elevator Accident Settlement Estimator",
    description: "Calculate elevator accident lawsuit settlements. Premises liability, entrapment, door closing injuries. Based on 2026 CPSC and OSHA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/elevator-accident",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal elevator accident claims", avgSettlement: 1100000, multiplier: 5.5 },
    { id: "amputation", name: "Amputation / Crush Injury", description: "Limb loss from doors", avgSettlement: 800000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 175000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injuries", description: "Sprains from sudden stops", avgSettlement: 50000, multiplier: 1.5 },
];

export const ACCIDENT_CAUSES = [
    { id: "free-fall", name: "Free Fall / Drop", multiplier: 1.5 },
    { id: "door-injury", name: "Door Closing Injury", multiplier: 1.3 },
    { id: "entrapment", name: "Entrapment", multiplier: 1.25 },
    { id: "misleveling", name: "Misleveling / Trip", multiplier: 1.2 },
];

export const ELEVATOR_2026 = {
    statistics: {
        injuries: "17,000+ Injuries/Year",
        deaths: "30+ Deaths/Year",
        source: "CPSC / OSHA Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Elevator/Escalator Report 2026",
        "OSHA Elevator Safety Standards 2026",
    ],
};

export const CALCULATORS = [
    { id: "elevator-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "elevator-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is an elevator accident lawsuit?", answer: "Elevator accident lawsuits seek compensation for injuries caused by defective elevators, poor maintenance, or premises liability. Claims can target building owners, property managers, and elevator maintenance companies." },
    { question: "Who is liable for elevator accidents?", answer: "Potential defendants include building owners, property managers, elevator manufacturers, and maintenance companies. Multiple parties are often responsible for ensuring elevator safety." },
    { question: "What causes elevator accidents?", answer: "Common causes include door malfunctions, sudden drops/stops, misleveling (floor not aligned), entrapment, and inadequate maintenance. Many accidents are preventable with proper maintenance." },
    { question: "Can I sue for getting stuck in an elevator?", answer: "Yes. Entrapment can cause physical injuries (from escape attempts) and psychological trauma (claustrophobia, PTSD). You may recover damages for both physical and emotional distress." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-4 years). Claims against government-owned buildings may have shorter notice requirements. Consult an attorney promptly." },
];

export function calculateElevatorSettlement(
    injuryType: string,
    accidentCause: string,
    medicalExpenses: number,
    maintenanceNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const negligenceBonus = maintenanceNegligence ? 1.3 : 1.0;
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
