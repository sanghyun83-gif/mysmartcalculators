// ============================================
// CROWD CRUSH LAWSUIT CALCULATOR
// 2026 Mass Casualty Events - Advanced Version
// ?   200th CALCULATOR! ?  
// ============================================

import { Calculator, FileText, Users, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Crowd Crush Calculator",
    tagline: "Free 2026 Crowd Crush Settlement Estimator",
    description: "Calculate crowd crush injury lawsuit settlements. Stadium stampedes, festival surges, nightclub crush. Based on 2026 mass casualty research.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/crowd-crush",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal asphyxiation/compression", avgSettlement: 3000000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Hypoxic brain damage", avgSettlement: 700000, multiplier: 4.0 },
    { id: "asphyxiation", name: "Asphyxiation Injuries", description: "Organ damage from compression", avgSettlement: 450000, multiplier: 3.5 },
    { id: "crush", name: "Crush Syndrome", description: "Rhabdomyolysis, kidney failure", avgSettlement: 350000, multiplier: 3.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Trampling injuries", avgSettlement: 120000, multiplier: 2.5 },
];

export const EVENT_TYPES = [
    { id: "concert", name: "Concert / Festival", multiplier: 1.5 },
    { id: "stadium", name: "Stadium / Sports Event", multiplier: 1.4 },
    { id: "nightclub", name: "Nightclub / Indoor Venue", multiplier: 1.45 },
    { id: "religious", name: "Religious / Cultural Event", multiplier: 1.35 },
];

export const DENSITY_LEVELS = [
    { id: "dangerous", name: "Dangerous (6+ people/m²)", multiplier: 1.5 },
    { id: "severe", name: "Severe (5 people/m²)", multiplier: 1.35 },
    { id: "critical", name: "Critical (4 people/m²)", multiplier: 1.2 },
];

export const CRUSH_2026 = {
    statistics: {
        astroworld: "Astroworld 2021: 10 Deaths",
        itaewon: "Itaewon 2022: 159 Deaths",
        source: "Crowd Science / NFPA Data",
    },
    citations: [
        "National Fire Protection Association (NFPA) Crowd Safety Standards 2026",
        "G. Keith Still Crowd Science Research 2026",
        "Harris County (Astroworld) Investigation Report 2022",
    ],
};

export const CALCULATORS = [
    { id: "crowd-crush/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "crowd-crush/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "crowd-crush/causes", name: "Crush Causes", description: "Understanding crowd disasters", icon: Users, featured: false },
    { id: "crowd-crush/prevention", name: "Safety Failures", description: "What went wrong", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is crowd crush?", answer: "Crowd crush (also called crowd collapse or crush asphyxia) occurs when crowd density exceeds 4-5 people per square meter. Victims are compressed and cannot breathe. Unlike stampedes, victims often cannot move at all." },
    { question: "How do people die in crowd crush?", answer: "Most victims die from compressive asphyxia - they're squeezed so tightly they cannot expand their chest to breathe. Hypoxia leads to cardiac arrest within minutes. It's not trampling that kills most victims." },
    { question: "What happened at Astroworld?", answer: "In November 2021, during Travis Scott's Astroworld Festival, a crowd surge killed 10 people and injured hundreds. Investigations revealed failures in crowd management, security, and emergency response." },
    { question: "What happened at Itaewon?", answer: "On October 29, 2022, 159 people died in Seoul's Itaewon district during Halloween celebrations when a crowd surge occurred in a narrow alley. It was one of the deadliest crowd crush events in history." },
    { question: "Who is liable for crowd crush?", answer: "Potentially liable parties include venue operators, event organizers, crowd management firms, security companies, and local government. Each has specific safety responsibilities." },
    { question: "What is dangerous crowd density?", answer: "Safe density is 2-3 people per square meter. At 4 people/m², movement becomes difficult. At 5+/m², crowd crush becomes likely. At 6+/m², fatalities are common." },
    { question: "What are warning signs?", answer: "Warning signs include difficulty breathing, being lifted off feet, uncontrolled wave motion, inability to move arms, and rising panic. Organizers should monitor for these signs." },
    { question: "What about signed waivers?", answer: "Ticket waivers don't protect organizers from gross negligence or willful misconduct. When obvious safety risks are ignored, waivers typically provide no defense." },
    { question: "What damages can be recovered?", answer: "Victims can recover medical expenses, lost wages, pain and suffering, PTSD treatment costs, and in death cases, wrongful death damages. Punitive damages may apply." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary (typically 2-3 years). However, evidence disappears quickly - video footage, witness memories fade. Consult an attorney immediately." },
];

export function calculateCrushSettlement(
    injuryType: string,
    eventType: string,
    densityLevel: string,
    medicalExpenses: number,
    warningsIgnored: boolean,
    capacityExceeded: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const event = EVENT_TYPES.find(e => e.id === eventType) || EVENT_TYPES[0];
    const density = DENSITY_LEVELS.find(d => d.id === densityLevel) || DENSITY_LEVELS[0];

    const warningsBonus = warningsIgnored ? 1.4 : 1.0;
    const capacityBonus = capacityExceeded ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * event.multiplier * density.multiplier * warningsBonus * capacityBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        eventType: event.name,
        densityLevel: density.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
