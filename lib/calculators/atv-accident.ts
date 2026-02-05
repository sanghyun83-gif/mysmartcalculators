// ============================================
// ATV ACCIDENT LAWSUIT CALCULATOR
// 2026 Off-Road Vehicle Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "ATV Accident Calculator",
    tagline: "Free 2026 ATV Accident Settlement Estimator",
    description: "Calculate ATV accident lawsuit settlements. Rollover, child injury, defective vehicle claims. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/atv-accident",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal ATV accident claims", avgSettlement: 750000, multiplier: 5.0 },
    { id: "spinal-cord", name: "Spinal Cord Injury", description: "Paralysis from rollover", avgSettlement: 600000, multiplier: 4.5 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma without helmet", avgSettlement: 450000, multiplier: 4.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones and crush injuries", avgSettlement: 175000, multiplier: 2.5 },
];

export const ACCIDENT_CAUSES = [
    { id: "rollover", name: "Rollover Accident", multiplier: 1.3 },
    { id: "defect", name: "Product Defect", multiplier: 1.4 },
    { id: "child-injury", name: "Child Rider Injury", multiplier: 1.35 },
    { id: "collision", name: "Collision with Vehicle", multiplier: 1.2 },
];

export const ATV_2026 = {
    statistics: {
        deaths: "658 Deaths/Year",
        injuries: "93,800 ER Visits/Year",
        source: "CPSC Statistics",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) ATV Report 2026",
        "ATV Product Liability Litigation Data",
    ],
};

export const CALCULATORS = [
    { id: "atv-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "atv-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is an ATV accident lawsuit?", answer: "ATV accident lawsuits seek compensation for injuries caused by negligent operators, defective ATVs, unsafe trails, or improper rental practices. Claims can be filed against manufacturers, landowners, or operators." },
    { question: "What causes most ATV accidents?", answer: "The CPSC reports top causes include rollovers, collisions, inexperienced riders, passengers on single-rider ATVs, and children riding adult-sized ATVs." },
    { question: "Can I sue an ATV manufacturer?", answer: "Yes. If a defective design, faulty brakes, throttle issues, or inadequate safety features caused your accident, you may have a product liability claim against the manufacturer." },
    { question: "Are child ATV injuries common?", answer: "Yes. Approximately 25% of ATV deaths involve children under 16. Lawsuits often target manufacturers who marketed adult ATVs to children or failed to include proper warnings." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, rehabilitation costs, lost wages, pain and suffering, disability, wrongful death damages, and permanent disfigurement." },
];

export function calculateATVSettlement(
    injuryType: string,
    accidentCause: string,
    medicalExpenses: number,
    involvedMinor: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const minorBonus = involvedMinor ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * minorBonus * docsBonus;
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
