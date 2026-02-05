// ============================================
// RESORT INJURY LAWSUIT CALCULATOR
// 2026 Vacation Resort Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Resort Injury Calculator",
    tagline: "Free 2026 Resort Injury Settlement Estimator",
    description: "Calculate resort injury lawsuit settlements. Pool accidents, activity injuries, excursion negligence. Based on 2026 hospitality industry data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/resort-injury",
};

export const INJURY_TYPES = [
    { id: "drowning", name: "Drowning / Near-Drowning", description: "Pool, ocean, waterpark", avgSettlement: 600000, multiplier: 4.5 },
    { id: "activity", name: "Activity Injury", description: "Zipline, ATV, water sports", avgSettlement: 200000, multiplier: 3.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Falls, excursion accidents", avgSettlement: 90000, multiplier: 2.5 },
    { id: "slip-fall", name: "Slip and Fall", description: "Wet surfaces, uneven terrain", avgSettlement: 70000, multiplier: 2.0 },
];

export const INCIDENT_TYPES = [
    { id: "pool", name: "Pool / Spa Accident", multiplier: 1.4 },
    { id: "activity", name: "Resort Activity Injury", multiplier: 1.5 },
    { id: "excursion", name: "Excursion / Tour Accident", multiplier: 1.45 },
    { id: "premises", name: "Premises Hazard", multiplier: 1.25 },
];

export const RESORT_2026 = {
    statistics: {
        claims: "45,000+ Annual Resort Injury Claims",
        drowning: "350+ Pool Drownings Annually",
        source: "CPSC / HLA Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Pool Safety Report 2026",
        "Hospitality Lawyers Association (HLA) Resort Liability Guidelines 2026",
    ],
};

export const CALCULATORS = [
    { id: "resort-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "resort-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a resort injury lawsuit?", answer: "Resort injury lawsuits seek compensation for injuries at vacation resorts due to unsafe pools, negligent activity supervision, dangerous excursions, or premises hazards. Resorts owe guests a high duty of care." },
    { question: "What about activity waivers?", answer: "Waivers don't protect resorts from gross negligence, failure to provide adequate safety equipment, or hidden dangers. Many states limit waiver enforceability, especially for children." },
    { question: "Can I sue for pool injuries?", answer: "Yes. Resorts must maintain safe pools with proper supervision, fencing, and safety equipment. Missing drain covers, inadequate lifeguards, and unclear depth markings create liability." },
    { question: "What about excursion accidents?", answer: "Resorts can be liable for recommending or arranging dangerous excursions, especially if they failed to vet operators or ignored known safety issues." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state and country. International resort injuries can be complex. Document everything and consult an attorney immediately upon returning home." },
];

export function calculateResortSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    safetyConcerns: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const safetyBonus = safetyConcerns ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * safetyBonus * docsBonus;
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
