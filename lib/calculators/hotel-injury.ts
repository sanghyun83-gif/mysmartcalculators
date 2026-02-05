// ============================================
// HOTEL INJURY LAWSUIT CALCULATOR
// 2026 Hospitality Premises Liability - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Hotel Injury Calculator",
    tagline: "Free 2026 Hotel Injury Settlement Estimator",
    description: "Calculate hotel injury lawsuit settlements. Slip and fall, bed bugs, pool accidents, security negligence. Based on 2026 hospitality industry data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/hotel-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls", avgSettlement: 400000, multiplier: 4.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from slip/fall", avgSettlement: 85000, multiplier: 2.5 },
    { id: "bedbug", name: "Bed Bug Infestation", description: "Bites, allergic reactions", avgSettlement: 50000, multiplier: 2.0 },
    { id: "drowning", name: "Drowning / Near-Drowning", description: "Pool/spa incidents", avgSettlement: 500000, multiplier: 4.5 },
];

export const INCIDENT_TYPES = [
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.3 },
    { id: "bedbug", name: "Bed Bug Infestation", multiplier: 1.4 },
    { id: "pool", name: "Pool / Spa Accident", multiplier: 1.5 },
    { id: "security", name: "Security Negligence / Assault", multiplier: 1.6 },
];

export const HOTEL_2026 = {
    statistics: {
        claims: "70,000+ Annual Hotel Injury Claims",
        bedbug: "95% of Hotels Report Bed Bugs",
        source: "AH&LA / OSHA Data",
    },
    citations: [
        "American Hotel & Lodging Association (AH&LA) Safety Report 2026",
        "Occupational Safety and Health Administration (OSHA) Hospitality Standards 2026",
    ],
};

export const CALCULATORS = [
    { id: "hotel-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "hotel-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a hotel injury lawsuit?", answer: "Hotel injury lawsuits seek compensation for injuries at hotels due to dangerous conditions, inadequate security, bed bug infestations, or pool hazards. Hotels owe guests a high duty of care." },
    { question: "Can I sue for bed bugs?", answer: "Yes. Bed bug lawsuits are common and often successful. Hotels have a duty to prevent infestations and respond promptly. Damages include medical bills, property replacement, and emotional distress." },
    { question: "What about slip and fall injuries?", answer: "Hotels must maintain safe premises. Wet floors without warning signs, torn carpets, and poor lighting create liability. Document hazard conditions immediately after your fall." },
    { question: "Are hotels liable for assault?", answer: "Hotels can be liable for assaults if they failed to provide adequate security, maintained unsafe conditions, or ignored prior criminal activity. This is called negligent security." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). However, you should notify the hotel immediately and document everything. Evidence can disappear quickly." },
];

export function calculateHotelSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    priorIncidents: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const priorBonus = priorIncidents ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * priorBonus * docsBonus;
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
