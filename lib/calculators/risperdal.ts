// ============================================
// RISPERDAL LAWSUIT CALCULATOR
// 2026 Gynecomastia Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Risperdal Lawsuit Calculator",
    tagline: "Free 2026 Gynecomastia Settlement Estimator",
    description: "Calculate Risperdal lawsuit settlements. Gynecomastia (male breast growth), diabetes, stroke claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/risperdal",
};

export const INJURY_TYPES = [
    { id: "gynecomastia-surgery", name: "Gynecomastia (Surgery Required)", description: "Male breast growth requiring mastectomy", avgSettlement: 400000, multiplier: 4.0 },
    { id: "gynecomastia-mild", name: "Gynecomastia (No Surgery)", description: "Male breast growth, no surgery", avgSettlement: 150000, multiplier: 2.0 },
    { id: "diabetes", name: "Diabetes", description: "Type 2 diabetes development", avgSettlement: 200000, multiplier: 2.5 },
];

export const PATIENT_AGE = [
    { id: "child", name: "Child (Under 18)", multiplier: 1.5 },
    { id: "teen", name: "Teenager (13-17)", multiplier: 1.4 },
    { id: "young-adult", name: "Young Adult (18-25)", multiplier: 1.2 },
    { id: "adult", name: "Adult (26+)", multiplier: 1.0 },
];

export const RISPERDAL_2026 = {
    statistics: {
        manufacturer: "Johnson & Johnson",
        dojSettlement: "$2.2 Billion (2013)",
        juryVerdicts: "$70M+ Individual",
        status: "Ongoing Cases",
    },
    citations: [
        "DOJ Criminal Settlement - Risperdal Off-Label Marketing (2013)",
        "FDA Adverse Event Reports - Risperdal Gynecomastia 2026",
    ],
};

export const CALCULATORS = [
    { id: "risperdal/calculator", name: "Settlement Calculator", description: "Estimate Risperdal claim value", icon: Calculator, featured: true },
    { id: "risperdal/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Risperdal lawsuit about?", answer: "Risperdal lawsuits allege that Johnson & Johnson failed to warn about gynecomastia (male breast growth) risk in boys and young men. J&J paid $2.2 billion in 2013 to settle DOJ charges of illegal off-label marketing to children." },
    { question: "What is Risperdal?", answer: "Risperdal (risperidone) is an antipsychotic medication used to treat schizophrenia, bipolar disorder, and irritability in autism. It increases prolactin levels, which can cause breast tissue growth in males." },
    { question: "What is gynecomastia?", answer: "Gynecomastia is abnormal breast tissue growth in males. In Risperdal cases, boys developed feminine breast tissue requiring surgical removal. This caused significant psychological trauma and scarring." },
    { question: "Who qualifies for a Risperdal lawsuit?", answer: "Males who took Risperdal (especially as children or teenagers) and developed gynecomastia may qualify. Cases involving surgery to remove breast tissue have the strongest claims." },
    { question: "What are the average settlements?", answer: "Individual jury verdicts have exceeded $70 million. Settlements for cases requiring surgery typically range from $200,000-$500,000+. Cases involving children receive higher compensation." },
];

export function calculateRisperdalSettlement(
    injuryType: string,
    patientAge: string,
    medicalExpenses: number,
    yearsOnDrug: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const age = PATIENT_AGE.find(a => a.id === patientAge) || PATIENT_AGE[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = yearsOnDrug > 2 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * age.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        patientAge: age.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
