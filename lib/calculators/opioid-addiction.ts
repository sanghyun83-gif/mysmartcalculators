// ============================================
// OPIOID ADDICTION LAWSUIT CALCULATOR
// 2026 Opioid Crisis MDL Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Opioid Addiction Calculator",
    tagline: "Free 2026 Opioid Settlement Estimator",
    description: "Calculate opioid addiction lawsuit settlements. Purdue Pharma, J&J, drug distributor claims. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/opioid-addiction",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death (Overdose)", description: "Fatal overdose from opioid addiction", avgSettlement: 500000, multiplier: 5.0 },
    { id: "addiction-treatment", name: "Addiction Treatment Required", description: "Rehab, detox, counseling costs", avgSettlement: 150000, multiplier: 2.5 },
    { id: "long-term-disability", name: "Long-term Disability", description: "Unable to work due to addiction", avgSettlement: 250000, multiplier: 3.5 },
    { id: "ongoing-care", name: "Ongoing Medical Care", description: "Continuing treatment and medication", avgSettlement: 100000, multiplier: 2.0 },
];

export const OPIOID_TYPES = [
    { id: "oxycontin", name: "OxyContin (Purdue Pharma)", multiplier: 1.4 },
    { id: "vicodin", name: "Vicodin / Hydrocodone", multiplier: 1.2 },
    { id: "fentanyl", name: "Fentanyl Prescription", multiplier: 1.35 },
    { id: "percocet", name: "Percocet / Oxycodone", multiplier: 1.25 },
    { id: "other", name: "Other Prescription Opioid", multiplier: 1.0 },
];

export const PRESCRIBER_TYPES = [
    { id: "pain-clinic", name: "Pain Clinic / Pill Mill", multiplier: 1.3 },
    { id: "primary-care", name: "Primary Care Physician", multiplier: 1.1 },
    { id: "surgeon", name: "Surgeon (Post-Op)", multiplier: 1.0 },
    { id: "dentist", name: "Dentist", multiplier: 1.0 },
];

export const OPIOID_2026 = {
    statistics: {
        mdl: "MDL 2804",
        status: "$50B+ Total Settlements",
        crisis: "500,000+ Deaths",
        claims: "Nationwide Claims",
    },
    citations: [
        "In Re: National Prescription Opiate Litigation MDL 2804",
        "Purdue Pharma Bankruptcy Settlement $6B+ Trust",
        "CDC Opioid Crisis Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "opioid-addiction/calculator", name: "Settlement Calculator", description: "Estimate opioid claim value", icon: Calculator, featured: true },
    { id: "opioid-addiction/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "opioid-addiction/defendants", name: "Defendants", description: "Companies involved", icon: Scale, featured: false },
    { id: "opioid-addiction/treatment", name: "Treatment Costs", description: "Recovery expense data", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the opioid addiction lawsuit?", answer: "Opioid lawsuits allege that pharmaceutical companies like Purdue Pharma, Johnson & Johnson, and drug distributors deceptively marketed opioids and fueled the addiction crisis that has killed over 500,000 Americans." },
    { question: "What is MDL 2804?", answer: "MDL 2804 is the federal multidistrict litigation consolidating thousands of opioid cases in the Northern District of Ohio. It includes claims from states, cities, hospitals, and individuals." },
    { question: "Who can file an opioid lawsuit?", answer: "Individuals who developed addiction after being prescribed opioids, families who lost loved ones to overdose, and those who required extensive addiction treatment may qualify for compensation." },
    { question: "What is the Purdue Pharma settlement?", answer: "Purdue Pharma, maker of OxyContin, agreed to a $6+ billion settlement as part of bankruptcy. The Sackler family contributed additional funds to addiction treatment trusts." },
    { question: "Which companies are defendants?", answer: "Major defendants include Purdue Pharma, Johnson & Johnson, Teva, Allergan, and distributors like McKesson, Cardinal Health, and AmerisourceBergen." },
    { question: "How much are settlements worth?", answer: "Individual settlements vary widely from $10,000 to $1,000,000+ depending on injury severity, wrongful death, treatment costs, and state of residence." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from injury discovery. Many states have extended deadlines for opioid cases due to the crisis." },
    { question: "What evidence do I need?", answer: "Key evidence includes prescription records, addiction treatment records, medical diagnosis, pharmacy records, and documentation of how addiction developed." },
    { question: "Can I sue if a family member died?", answer: "Yes, wrongful death claims for opioid overdose are among the highest-value cases. Families can sue for funeral costs, lost income, and pain and suffering." },
    { question: "Are individual claims still being accepted?", answer: "Yes, while major settlements have been reached, individual personal injury claims are still being filed and processed through the MDL and state courts." },
];

export function calculateOpioidSettlement(
    injuryType: string,
    opioidType: string,
    prescriberType: string,
    treatmentCosts: number,
    hadOverdose: boolean,
    hadRehab: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const opioid = OPIOID_TYPES.find(o => o.id === opioidType) || OPIOID_TYPES[0];
    const prescriber = PRESCRIBER_TYPES.find(p => p.id === prescriberType) || PRESCRIBER_TYPES[0];

    const overdoseBonus = hadOverdose ? 1.4 : 1.0;
    const rehabBonus = hadRehab ? 1.2 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * opioid.multiplier * prescriber.multiplier * overdoseBonus * rehabBonus * docsBonus;
    const painSuffering = Math.round(treatmentCosts * baseMultiplier);

    return {
        injuryType: injury.name,
        opioidType: opioid.name,
        prescriberType: prescriber.name,
        treatmentCosts,
        painSuffering,
        totalLow: Math.round((treatmentCosts + painSuffering) * 0.7),
        totalHigh: Math.round((treatmentCosts + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
