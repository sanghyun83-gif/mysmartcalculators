// ============================================
// FENTANYL EXPOSURE LAWSUIT CALCULATOR
// 2026 First Responder/Workplace Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Fentanyl Exposure Calculator",
    tagline: "Free 2026 Fentanyl Exposure Settlement Estimator",
    description: "Calculate fentanyl exposure lawsuit settlements. First responder, workplace, accidental exposure claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/fentanyl-exposure",
};

export const INJURY_TYPES = [
    { id: "overdose-death", name: "Overdose Death", description: "Fatal exposure to fentanyl", avgSettlement: 750000, multiplier: 6.0 },
    { id: "hospitalization", name: "Hospitalization Required", description: "Emergency treatment for exposure", avgSettlement: 200000, multiplier: 3.5 },
    { id: "chronic-health", name: "Chronic Health Issues", description: "Long-term health effects", avgSettlement: 150000, multiplier: 2.5 },
    { id: "ptsd-anxiety", name: "PTSD / Anxiety", description: "Mental health from exposure incident", avgSettlement: 100000, multiplier: 2.0 },
];

export const EXPOSURE_TYPES = [
    { id: "first-responder", name: "First Responder (Police/EMS/Fire)", multiplier: 1.4 },
    { id: "healthcare", name: "Healthcare Worker", multiplier: 1.3 },
    { id: "corrections", name: "Corrections Officer", multiplier: 1.35 },
    { id: "workplace", name: "Other Workplace Exposure", multiplier: 1.2 },
    { id: "accidental", name: "Accidental Contact", multiplier: 1.0 },
];

export const EXPOSURE_ROUTES = [
    { id: "inhalation", name: "Inhalation", multiplier: 1.3 },
    { id: "skin-contact", name: "Skin Contact", multiplier: 1.1 },
    { id: "ingestion", name: "Accidental Ingestion", multiplier: 1.4 },
    { id: "unknown", name: "Unknown Route", multiplier: 1.0 },
];

export const FENTANYL_2026 = {
    statistics: {
        status: "Active Litigation",
        crisis: "110,000+ OD Deaths/Year",
        issue: "First Responder Exposure",
        claims: "Growing Claims",
    },
    citations: [
        "CDC Fentanyl Overdose Statistics 2026",
        "OSHA Guidelines on Fentanyl Exposure Prevention",
        "First Responder Fentanyl Exposure Litigation Trends",
    ],
};

export const CALCULATORS = [
    { id: "fentanyl-exposure/calculator", name: "Settlement Calculator", description: "Estimate fentanyl exposure claim value", icon: Calculator, featured: true },
    { id: "fentanyl-exposure/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "fentanyl-exposure/types", name: "Exposure Types", description: "How exposure occurs", icon: Scale, featured: false },
    { id: "fentanyl-exposure/symptoms", name: "Symptoms", description: "Exposure symptoms", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is a fentanyl exposure lawsuit?", answer: "Fentanyl exposure lawsuits are filed by individuals, often first responders, who suffered health effects from accidental exposure to fentanyl while on the job or through other circumstances." },
    { question: "How does fentanyl exposure occur?", answer: "Exposure can occur through inhalation of airborne particles, skin contact with powder, or accidental ingestion. First responders, healthcare workers, and corrections officers are at highest risk." },
    { question: "Who can file a fentanyl exposure lawsuit?", answer: "First responders (police, EMS, firefighters), healthcare workers, corrections officers, and anyone who suffered harm from accidental fentanyl exposure may qualify." },
    { question: "What are fentanyl exposure symptoms?", answer: "Symptoms include respiratory depression, drowsiness, confusion, dizziness, nausea, pinpoint pupils, and in severe cases, loss of consciousness requiring Narcan administration." },
    { question: "Who is liable for fentanyl exposure?", answer: "Potential defendants include employers who failed to provide proper PPE, property owners, drug manufacturers, and parties responsible for fentanyl contamination." },
    { question: "What compensation is available?", answer: "Compensation can cover medical expenses, lost wages, pain and suffering, disability, and in fatal cases, wrongful death damages for families." },
    { question: "How much are settlements worth?", answer: "Fentanyl exposure settlements vary widely from $50,000 to $1,000,000+ depending on injury severity, exposure circumstances, and liable parties." },
    { question: "Is there a statute of limitations?", answer: "Statutes of limitations vary by state, typically 2-6 years from injury discovery. First responder claims may have special provisions under workers' comp laws." },
    { question: "What evidence is needed?", answer: "Key evidence includes incident reports, toxicology results, medical records, witness statements, photos/video, and documentation of safety failures." },
    { question: "Can I sue my employer?", answer: "Workers' compensation typically covers workplace injuries, but third-party lawsuits against manufacturers, property owners, or others may be possible outside comp systems." },
];

export function calculateFentanylSettlement(
    injuryType: string,
    exposureType: string,
    exposureRoute: string,
    medicalExpenses: number,
    hadNarcan: boolean,
    hadHospitalization: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const exposure = EXPOSURE_TYPES.find(e => e.id === exposureType) || EXPOSURE_TYPES[0];
    const route = EXPOSURE_ROUTES.find(r => r.id === exposureRoute) || EXPOSURE_ROUTES[0];

    const narcanBonus = hadNarcan ? 1.3 : 1.0;
    const hospitalBonus = hadHospitalization ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * exposure.multiplier * route.multiplier * narcanBonus * hospitalBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        exposureType: exposure.name,
        exposureRoute: route.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
