// ============================================
// BOATING ACCIDENT LAWSUIT CALCULATOR
// 2026 Maritime Personal Injury Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Boating Accident Calculator",
    tagline: "Free 2026 Boating Accident Settlement Estimator",
    description: "Calculate boating accident lawsuit settlements. Drowning, propeller injuries, boat collision claims. Based on 2026 maritime data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/boating-accident",
};

export const INJURY_TYPES = [
    { id: "drowning-death", name: "Drowning / Wrongful Death", description: "Fatal boating accident claims", avgSettlement: 750000, multiplier: 5.0 },
    { id: "propeller-injury", name: "Propeller Injury", description: "Severe lacerations or amputations", avgSettlement: 500000, multiplier: 4.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head injuries from collisions", avgSettlement: 400000, multiplier: 3.5 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Paralysis or nerve damage", avgSettlement: 600000, multiplier: 4.5 },
];

export const ACCIDENT_TYPES = [
    { id: "collision", name: "Boat Collision", multiplier: 1.2 },
    { id: "capsizing", name: "Capsizing / Sinking", multiplier: 1.3 },
    { id: "falling-overboard", name: "Falling Overboard", multiplier: 1.15 },
    { id: "jet-ski", name: "Jet Ski / PWC Accident", multiplier: 1.1 },
];

export const BOATING_2026 = {
    statistics: {
        deaths: "767 Deaths/Year",
        injuries: "2,859 Injuries/Year",
        source: "USCG Statistics",
    },
    citations: [
        "US Coast Guard Recreational Boating Statistics 2026",
        "Jones Act Maritime Injury Litigation",
    ],
};

export const CALCULATORS = [
    { id: "boating-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "boating-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a boating accident lawsuit?", answer: "Boating accident lawsuits seek compensation for injuries caused by negligent boat operators, defective boats, or improper maintenance. Claims can be filed against boat owners, operators, or manufacturers." },
    { question: "What causes most boating accidents?", answer: "The USCG reports the top causes are operator inattention, operator inexperience, improper lookout, excessive speed, and alcohol use while operating." },
    { question: "Who can be liable in a boating accident?", answer: "Potential defendants include the boat operator, boat owner, rental company, boat manufacturer, marina, or passengers who contributed to the accident." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, disability costs, wrongful death damages, and boat repair/replacement costs." },
    { question: "Is there a time limit to file?", answer: "Statutes of limitations vary by state (typically 2-4 years for personal injury). Maritime claims may have different deadlines. Consult an attorney promptly." },
];

export function calculateBoatingSettlement(
    injuryType: string,
    accidentType: string,
    medicalExpenses: number,
    operatorNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];

    const negligenceBonus = operatorNegligence ? 1.3 : 1.0;
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
