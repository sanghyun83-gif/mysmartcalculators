// ============================================
// TRAIN ACCIDENT LAWSUIT CALCULATOR
// 2026 Railroad & FELA Claims - Advanced Version
// ============================================

import { Calculator, FileText, Train as TrainIcon, AlertTriangle as AlertIcon } from 'lucide-react';

export const SITE = {
    name: "Train Accident Calculator",
    tagline: "Free 2026 Train Accident Settlement Estimator",
    description: "Calculate train accident lawsuit settlements. FELA railroad workers, crossing accidents, Metro/subway claims. Based on 2026 FRA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/train-accident",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal train accident claims", avgSettlement: 1200000, multiplier: 5.5 },
    { id: "amputation", name: "Amputation / Crush Injury", description: "Loss of limbs from train", avgSettlement: 900000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from impact", avgSettlement: 600000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Paralysis or nerve damage", avgSettlement: 750000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from collision", avgSettlement: 200000, multiplier: 2.5 },
];

export const CLAIM_TYPES = [
    { id: "fela", name: "FELA (Railroad Worker)", multiplier: 1.4 },
    { id: "crossing", name: "Rail Crossing Accident", multiplier: 1.3 },
    { id: "metro-subway", name: "Metro / Subway Passenger", multiplier: 1.25 },
    { id: "amtrak", name: "Amtrak / Passenger Rail", multiplier: 1.3 },
];

export const ACCIDENT_CAUSES = [
    { id: "negligence", name: "Railroad Negligence", multiplier: 1.35 },
    { id: "defective-equipment", name: "Defective Equipment", multiplier: 1.4 },
    { id: "crossing-signal", name: "Crossing Signal Failure", multiplier: 1.35 },
    { id: "derailment", name: "Derailment", multiplier: 1.45 },
];

export const TRAIN_2026 = {
    statistics: {
        injuries: "8,000+ Injuries/Year",
        deaths: "900+ Deaths/Year",
        crossingAccidents: "2,100+ Crossing Accidents",
        source: "FRA Data",
    },
    citations: [
        "Federal Railroad Administration (FRA) Safety Report 2026",
        "Federal Employers' Liability Act (FELA) Case Statistics",
        "National Transportation Safety Board (NTSB) Rail Data",
    ],
};

export const CALCULATORS = [
    { id: "train-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "train-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "train-accident/fela", name: "FELA Claims", description: "Railroad worker rights", icon: TrainIcon, featured: false },
    { id: "train-accident/crossing", name: "Crossing Accidents", description: "Grade crossing claims", icon: AlertIcon, featured: false },
];

export const FAQS = [
    { question: "What is a train accident lawsuit?", answer: "Train accident lawsuits seek compensation for injuries caused by railroad negligence, defective equipment, or unsafe conditions. Claims can involve passengers, pedestrians, vehicle occupants, or railroad workers." },
    { question: "What is FELA?", answer: "The Federal Employers' Liability Act (FELA) is a federal law that allows railroad workers to sue their employers for on-the-job injuries. Unlike workers' comp, FELA allows full damage recovery if negligence is proven." },
    { question: "Can I sue for a rail crossing accident?", answer: "Yes. Railroad companies must maintain proper crossing signals, gates, and warning devices. If a defective signal or lack of warning caused your accident, the railroad may be liable." },
    { question: "Who is liable in a Metro/Subway accident?", answer: "Transit agencies operating subways and light rail are common carriers with heightened duty of care. Claims may involve government tort procedures with notice requirements." },
    { question: "What about Amtrak accidents?", answer: "Amtrak is a federally-owned corporation with limited sovereign immunity. There are damage caps on Amtrak lawsuits ($295M per incident), but individual recoveries can still be substantial." },
    { question: "Are derailment lawsuits different?", answer: "Derailments often result in mass casualty events with multiple lawsuits. These may be consolidated into Multi-District Litigation (MDL) for coordinated handling." },
    { question: "What if a train hit my car?", answer: "If a train struck your vehicle at a crossing, you may have claims against the railroad for signal defects, inadequate warnings, or sight-line obstructions." },
    { question: "Can railroad workers still sue?", answer: "Yes. Unlike most workers, railroad employees can sue their employer under FELA. This often results in higher recoveries than workers' compensation." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, disability, disfigurement, loss of consortium, and wrongful death damages." },
    { question: "How long do I have to file?", answer: "FELA claims have a 3-year statute of limitations. Personal injury claims against railroads vary by state (typically 2-4 years). Government claims may have shorter notice periods." },
];

export function calculateTrainSettlement(
    injuryType: string,
    claimType: string,
    accidentCause: string,
    medicalExpenses: number,
    isRailroadWorker: boolean,
    railroadNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const claim = CLAIM_TYPES.find(c => c.id === claimType) || CLAIM_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const workerBonus = isRailroadWorker ? 1.25 : 1.0;
    const negligenceBonus = railroadNegligence ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * claim.multiplier * cause.multiplier * workerBonus * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        claimType: claim.name,
        accidentCause: cause.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
