// ============================================
// CASINO INJURY LAWSUIT CALCULATOR
// 2026 Gaming Facility Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Casino Injury Calculator",
    tagline: "Free 2026 Casino Injury Settlement Estimator",
    description: "Calculate casino injury lawsuit settlements. Slip and fall, security negligence, assault, escalator accidents. Based on 2026 hospitality data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/casino-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/assault", avgSettlement: 450000, multiplier: 4.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 90000, multiplier: 2.5 },
    { id: "assault", name: "Assault Injuries", description: "Security failures", avgSettlement: 180000, multiplier: 3.0 },
    { id: "soft-tissue", name: "Soft Tissue Injury", description: "Sprains, strains", avgSettlement: 45000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.3 },
    { id: "security", name: "Security Negligence / Assault", multiplier: 1.6 },
    { id: "escalator", name: "Escalator / Elevator Accident", multiplier: 1.4 },
    { id: "premises", name: "Premises Hazard", multiplier: 1.25 },
];

export const CASINO_2026 = {
    statistics: {
        claims: "35,000+ Annual Casino Injury Claims",
        security: "Negligent Security Claims Rising",
        source: "AGA / OSHA Data",
    },
    citations: [
        "American Gaming Association (AGA) Safety Report 2026",
        "Occupational Safety and Health Administration (OSHA) Gaming Industry Standards 2026",
    ],
};

export const CALCULATORS = [
    { id: "casino-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "casino-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a casino injury lawsuit?", answer: "Casino injury lawsuits seek compensation for injuries at casinos due to dangerous conditions, inadequate security, or premises hazards. Casinos owe patrons a high duty of care as invitees." },
    { question: "Can I sue for assault at a casino?", answer: "Yes. Casinos can be liable for assaults if they failed to provide adequate security, ignored prior incidents, over-served alcohol, or failed to remove problem patrons." },
    { question: "What about slip and fall injuries?", answer: "Casinos must maintain safe premises. Wet floors, spilled drinks, torn carpeting, and poor lighting create liability. The 24/7 nature of casinos requires constant maintenance." },
    { question: "Are tribe-owned casinos different?", answer: "Tribal casinos may have sovereign immunity, but many have waived immunity for personal injury claims. The rules vary significantly by tribe and state." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Tribal casinos may have shorter notice requirements. Consult an attorney immediately after injury." },
];

export function calculateCasinoSettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    securityFailure: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const securityBonus = securityFailure ? 1.4 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * securityBonus * docsBonus;
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
