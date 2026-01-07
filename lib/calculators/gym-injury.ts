// ============================================
// GYM INJURY LAWSUIT CALCULATOR
// 2026 Fitness Facility Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Gym Injury Calculator",
    tagline: "Free 2026 Gym Injury Settlement Estimator",
    description: "Calculate gym injury lawsuit settlements. Equipment defects, personal trainer negligence, waiver exceptions. Based on 2026 fitness industry data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/gym-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from equipment falls", avgSettlement: 450000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal Injury", description: "Back/neck injuries", avgSettlement: 350000, multiplier: 3.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from equipment", avgSettlement: 80000, multiplier: 2.5 },
    { id: "muscle", name: "Muscle / Tendon Tears", description: "ACL, rotator cuff injuries", avgSettlement: 55000, multiplier: 2.0 },
];

export const ACCIDENT_TYPES = [
    { id: "equipment-defect", name: "Equipment Defect / Malfunction", multiplier: 1.5 },
    { id: "trainer", name: "Personal Trainer Negligence", multiplier: 1.4 },
    { id: "premises", name: "Unsafe Premises / Wet Floor", multiplier: 1.3 },
    { id: "maintenance", name: "Poor Equipment Maintenance", multiplier: 1.35 },
];

export const GYM_2026 = {
    statistics: {
        injuries: "460,000+ Annual Gym Injuries",
        deaths: "100+ Annual Deaths",
        source: "CPSC / NSGA Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Exercise Equipment Report 2026",
        "International Health, Racquet & Sportsclub Association (IHRSA) Safety Standards 2026",
    ],
};

export const CALCULATORS = [
    { id: "gym-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "gym-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a gym injury lawsuit?", answer: "Gym injury lawsuits seek compensation for injuries at fitness facilities due to defective equipment, negligent trainers, or unsafe conditions. Both the gym and equipment manufacturers may be liable." },
    { question: "Can I sue if I signed a waiver?", answer: "Waivers don't protect gyms from gross negligence, intentional misconduct, or equipment defects. Many states also limit waiver enforceability. An attorney can evaluate your specific waiver." },
    { question: "What about personal trainer negligence?", answer: "Personal trainers can be liable for improper instruction, ignoring injuries, pushing clients beyond safe limits, or failing to properly supervise exercises." },
    { question: "Who is liable for equipment defects?", answer: "Equipment manufacturers face product liability claims regardless of waivers. Gyms may also be liable if they continued using defective or poorly maintained equipment." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). For product liability claims against manufacturers, different deadlines may apply. Consult an attorney promptly." },
];

export function calculateGymSettlement(
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
