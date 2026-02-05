// ============================================
// AMUSEMENT PARK INJURY LAWSUIT CALCULATOR
// 2026 Theme Park Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Amusement Park Injury Calculator",
    tagline: "Free 2026 Theme Park Injury Settlement Estimator",
    description: "Calculate amusement park injury lawsuit settlements. Roller coaster, water slide, ride malfunction claims. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/amusement-park",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal ride accident claims", avgSettlement: 1500000, multiplier: 5.5 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from rides", avgSettlement: 550000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Neck Injury", description: "Back and neck injuries", avgSettlement: 450000, multiplier: 3.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 125000, multiplier: 2.5 },
];

export const ACCIDENT_TYPES = [
    { id: "ride-malfunction", name: "Ride Malfunction", multiplier: 1.5 },
    { id: "operator-error", name: "Operator Error", multiplier: 1.4 },
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.2 },
    { id: "restraint-failure", name: "Restraint Failure", multiplier: 1.6 },
];

export const PARK_2026 = {
    statistics: {
        injuries: "30,000+ Injuries/Year",
        deaths: "4-5 Deaths/Year",
        source: "CPSC / IAAPA Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Amusement Ride Report 2026",
        "IAAPA Global Theme Park Safety Data 2026",
    ],
};

export const CALCULATORS = [
    { id: "amusement-park/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "amusement-park/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is an amusement park injury lawsuit?", answer: "Amusement park injury lawsuits seek compensation for injuries caused by defective rides, operator negligence, or unsafe conditions. Parks can be held liable for ride malfunctions and inadequate safety measures." },
    { question: "Can I sue Disney, Six Flags, or Cedar Fair?", answer: "Yes. Large theme parks have extensive insurance and can be sued for negligence. However, be aware that some parks require arbitration through fine print on tickets or waivers." },
    { question: "What if I signed a waiver?", answer: "Waivers cannot protect parks from gross negligence or intentional misconduct. If a ride malfunctioned or was improperly maintained, the waiver may not apply." },
    { question: "Who is liable for ride accidents?", answer: "Potential defendants include the park, ride manufacturer, maintenance company, and individual operators. An attorney can identify all responsible parties." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-4 years). Report the incident to park management immediately and seek medical attention to document injuries." },
];

export function calculateParkSettlement(
    injuryType: string,
    accidentType: string,
    medicalExpenses: number,
    rideMalfunction: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];

    const malfunctionBonus = rideMalfunction ? 1.35 : 1.0;
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
