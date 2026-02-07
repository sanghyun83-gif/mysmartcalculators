// ============================================
// PLAYGROUND INJURY LAWSUIT CALCULATOR
// 2026 Equipment & Falls Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Playground Injury Calculator",
    tagline: "Free 2026 Playground Injury Settlement Estimator",
    description: "Calculate playground injury lawsuit settlements. Equipment defects, falls, inadequate supervision. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/playground-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls", avgSettlement: 500000, multiplier: 4.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 85000, multiplier: 2.5 },
    { id: "concussion", name: "Concussion", description: "Brain injury from impacts", avgSettlement: 60000, multiplier: 2.0 },
    { id: "lacerations", name: "Deep Lacerations", description: "Cuts requiring stitches", avgSettlement: 25000, multiplier: 1.5 },
];

export const ACCIDENT_TYPES = [
    { id: "equipment-defect", name: "Equipment Defect", multiplier: 1.5 },
    { id: "fall-height", name: "Fall from Height", multiplier: 1.3 },
    { id: "entrapment", name: "Entrapment / Strangulation", multiplier: 1.6 },
    { id: "supervision", name: "Inadequate Supervision", multiplier: 1.25 },
];

export const PLAYGROUND_2026 = {
    statistics: {
        injuries: "200,000+ Annual ER Visits",
        deaths: "15+ Annual Deaths",
        source: "CPSC / CDC Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Playground Report 2026",
        "ASTM F1487 Playground Safety Standard 2026",
    ],
};

export const CALCULATORS = [
    { id: "playground-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "playground-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a playground injury lawsuit?", answer: "Playground injury lawsuits seek compensation for children injured on playgrounds due to defective equipment, inadequate safety surfacing, or negligent supervision by schools or property owners." },
    { question: "Who can be held liable?", answer: "Potentially liable parties include equipment manufacturers (product defect), property owners (premises liability), schools or daycares (negligent supervision), and installers or maintenance companies." },
    { question: "What safety standards apply?", answer: "CPSC and ASTM F1487 set playground safety standards including fall heights, spacing, surfacing, and age-appropriate design. Violations of these standards strengthen injury claims." },
    { question: "What about school playgrounds?", answer: "Public school playgrounds involve government immunity issues. You must file a tort claims notice within 60-180 days. Private schools can be sued without these restrictions." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years for minors, often starting at age 18). For public entities, notice requirements are much shorter. Consult an attorney promptly." },
];

export function calculatePlaygroundSettlement(
    injuryType: string,
    accidentType: string,
    medicalExpenses: number,
    equipmentDefect: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];

    const defectBonus = equipmentDefect ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * accident.multiplier * defectBonus * docsBonus;
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
