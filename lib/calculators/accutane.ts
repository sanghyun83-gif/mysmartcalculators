// ============================================
// ACCUTANE SIDE EFFECTS LAWSUIT CALCULATOR
// 2026 IBD/Depression Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Accutane Side Effects Calculator",
    tagline: "Free 2026 Accutane Settlement Estimator",
    description: "Calculate Accutane side effects lawsuit settlements. IBD, Crohn's, depression, ulcerative colitis claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/accutane",
};

export const INJURY_TYPES = [
    { id: "ibd-crohns", name: "Crohn's Disease", description: "IBD developing after Accutane use", avgSettlement: 350000, multiplier: 4.0 },
    { id: "ulcerative-colitis", name: "Ulcerative Colitis", description: "UC developing after Accutane use", avgSettlement: 300000, multiplier: 3.5 },
    { id: "depression-suicide", name: "Depression / Suicidal Ideation", description: "Mental health effects", avgSettlement: 250000, multiplier: 3.0 },
    { id: "birth-defects", name: "Birth Defects", description: "Pregnancy exposure birth defects", avgSettlement: 500000, multiplier: 5.0 },
];

export const USAGE_DURATION = [
    { id: "less-3-months", name: "Less than 3 months", multiplier: 1.0 },
    { id: "3-6-months", name: "3-6 months", multiplier: 1.2 },
    { id: "6-12-months", name: "6-12 months", multiplier: 1.4 },
    { id: "over-12-months", name: "Over 12 months", multiplier: 1.5 },
];

export const DIAGNOSIS_TIMING = [
    { id: "during-treatment", name: "During Accutane Treatment", multiplier: 1.4 },
    { id: "within-1-year", name: "Within 1 Year of Treatment", multiplier: 1.3 },
    { id: "1-3-years", name: "1-3 Years After Treatment", multiplier: 1.1 },
    { id: "over-3-years", name: "Over 3 Years After", multiplier: 1.0 },
];

export const ACCUTANE_2026 = {
    statistics: {
        status: "Active Litigation",
        settlements: "$150M+ Total",
        issue: "IBD / Depression",
        verdicts: "Significant Verdicts",
    },
    citations: [
        "FDA Black Box Warning - Isotretinoin Psychiatric Effects",
        "Accutane IBD Litigation Case Studies",
        "Roche Laboratories Accutane Discontinuation 2009",
    ],
};

export const CALCULATORS = [
    { id: "accutane/calculator", name: "Settlement Calculator", description: "Estimate Accutane claim value", icon: Calculator, featured: true },
    { id: "accutane/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "accutane/side-effects", name: "Side Effects", description: "Known Accutane complications", icon: AlertTriangle, featured: false },
    { id: "accutane/ibd", name: "IBD Connection", description: "IBD and Accutane link", icon: Scale, featured: false },
];

export const FAQS = [
    { question: "What is the Accutane lawsuit?", answer: "Accutane lawsuits allege that the acne medication isotretinoin (Accutane) causes serious side effects including inflammatory bowel disease (IBD), depression, and birth defects that were not adequately warned about." },
    { question: "What is the link between Accutane and IBD?", answer: "Studies have shown a connection between Accutane use and the development of Crohn's disease and ulcerative colitis. Many patients developed IBD during or shortly after Accutane treatment." },
    { question: "Who can file an Accutane lawsuit?", answer: "Individuals who took Accutane (isotretinoin) and developed IBD, Crohn's disease, ulcerative colitis, depression, or who experienced birth defects from pregnancy exposure may qualify." },
    { question: "Is Accutane still on the market?", answer: "The brand-name Accutane was discontinued in 2009, but generic isotretinoin products remain available under strict prescribing protocols including iPLEDGE." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, ongoing treatment costs, and in severe cases, disability and reduced quality of life." },
    { question: "What is the average settlement?", answer: "Accutane settlements have ranged from $50,000 to $10,000,000+ in jury verdicts. IBD cases with documented Crohn's or UC diagnoses typically receive higher compensation." },
    { question: "What evidence is needed?", answer: "Key evidence includes Accutane prescription records, IBD diagnosis records, colonoscopy/endoscopy results, treatment history, and medical expert testimony linking Accutane to your condition." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from diagnosis. Many states apply discovery rules that can extend deadlines." },
    { question: "What are the FDA warnings on Accutane?", answer: "The FDA requires black box warnings about psychiatric effects including depression and suicidal thoughts, and requires pregnancy prevention due to severe birth defect risks." },
    { question: "Can I sue for depression caused by Accutane?", answer: "Yes, depression and psychiatric side effects are a basis for Accutane lawsuits, especially if you experienced suicidal thoughts during or after treatment." },
];

export function calculateAccutaneSettlement(
    injuryType: string,
    usageDuration: string,
    diagnosisTiming: string,
    medicalExpenses: number,
    hadSurgery: boolean,
    hasOngoingTreatment: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const usage = USAGE_DURATION.find(u => u.id === usageDuration) || USAGE_DURATION[0];
    const timing = DIAGNOSIS_TIMING.find(t => t.id === diagnosisTiming) || DIAGNOSIS_TIMING[0];

    const surgeryBonus = hadSurgery ? 1.4 : 1.0;
    const ongoingBonus = hasOngoingTreatment ? 1.2 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * usage.multiplier * timing.multiplier * surgeryBonus * ongoingBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        usageDuration: usage.name,
        diagnosisTiming: timing.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
