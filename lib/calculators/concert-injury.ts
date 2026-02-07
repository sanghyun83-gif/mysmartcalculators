// ============================================
// CONCERT INJURY LAWSUIT CALCULATOR
// 2026 Live Event Claims - Advanced Version
// ============================================

import { Calculator, FileText, Users, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Concert Injury Calculator",
    tagline: "Free 2026 Concert Injury Settlement Estimator",
    description: "Calculate concert injury lawsuit settlements. Crowd crush, security failures, stage collapse. Based on 2026 live event safety data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/concert-injury",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal crowd crush/collapse", avgSettlement: 2500000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from crush", avgSettlement: 550000, multiplier: 4.0 },
    { id: "asphyxiation", name: "Asphyxiation / Organ Damage", description: "Crowd compression", avgSettlement: 400000, multiplier: 3.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Trampling injuries", avgSettlement: 120000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injuries", description: "Sprains, bruises", avgSettlement: 50000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "crowd-crush", name: "Crowd Crush / Surge", multiplier: 1.6 },
    { id: "stage-collapse", name: "Stage Collapse", multiplier: 1.5 },
    { id: "security", name: "Security Failure", multiplier: 1.4 },
    { id: "pyrotechnics", name: "Pyrotechnics / Fire", multiplier: 1.45 },
];

export const VENUE_TYPES = [
    { id: "stadium", name: "Stadium / Arena", multiplier: 1.2 },
    { id: "festival", name: "Outdoor Festival", multiplier: 1.3 },
    { id: "club", name: "Nightclub / Small Venue", multiplier: 1.1 },
];

export const CONCERT_2026 = {
    statistics: {
        injuries: "15,000+ Annual Concert Injuries",
        deaths: "Astroworld: 10 Deaths, 300+ Injuries",
        source: "OSHA / NFPA Data",
    },
    citations: [
        "Occupational Safety and Health Administration (OSHA) Crowd Management Guidelines 2026",
        "National Fire Protection Association (NFPA) Event Safety Standards 2026",
        "Harris County (Astroworld) Investigation Report 2022",
    ],
};

export const CALCULATORS = [
    { id: "concert-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "concert-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "concert-injury/crowd-crush", name: "Crowd Crush Claims", description: "Surge & stampede injuries", icon: Users, featured: false },
    { id: "concert-injury/liability", name: "Venue Liability", description: "Who is responsible", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is a concert injury lawsuit?", answer: "Concert injury lawsuits seek compensation for injuries at live events caused by inadequate crowd management, security failures, or venue negligence. Multiple parties may be liable." },
    { question: "What happened at Astroworld?", answer: "In November 2021, 10 people died and hundreds were injured when a crowd surge occurred during Travis Scott's Astroworld Festival. Victims were crushed and asphyxiated. Lawsuits are ongoing." },
    { question: "What is a crowd crush?", answer: "Crowd crush occurs when crowd density exceeds safe limits (4-5 people per square meter). Victims are compressed and can't breathe. Unlike stampedes, people often can't move at all." },
    { question: "Who can be sued?", answer: "Potentially liable parties include the venue, promoter, artist/performer, security company, and crowd management firms. Each may share responsibility for safety failures." },
    { question: "What about signed waivers?", answer: "Ticket waivers rarely protect against gross negligence or willful misconduct. When organizers ignore obvious safety risks, waivers typically don't apply." },
    { question: "What damages can I recover?", answer: "You may recover medical expenses, lost wages, pain and suffering, and in death cases, wrongful death damages. Punitive damages may apply for egregious negligence." },
    { question: "How do I prove negligence?", answer: "Evidence includes video footage, crowd density analysis, ignored warning signs, prior incident history, and failure to follow crowd management standards." },
    { question: "What about overcrowding?", answer: "Venues have capacity limits for safety reasons. Exceeding capacity or failing to manage crowd density creates liability. Many concert injuries involve overcrowding." },
    { question: "Can I sue the performer?", answer: "Performers can be liable if they encouraged dangerous behavior, ignored obvious safety issues, or continued performing during emergencies." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). However, evidence disappears quickly. Document injuries and consult an attorney immediately." },
];

export function calculateConcertSettlement(
    injuryType: string,
    incidentType: string,
    venueType: string,
    medicalExpenses: number,
    crowdCrush: boolean,
    capacityExceeded: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];
    const venue = VENUE_TYPES.find(v => v.id === venueType) || VENUE_TYPES[0];

    const crushBonus = crowdCrush ? 1.4 : 1.0;
    const capacityBonus = capacityExceeded ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * venue.multiplier * crushBonus * capacityBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        incidentType: incident.name,
        venueType: venue.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
