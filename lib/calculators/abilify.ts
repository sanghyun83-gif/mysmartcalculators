// ============================================
// ABILIFY GAMBLING LAWSUIT CALCULATOR
// 2026 Compulsive Behavior Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Abilify Lawsuit Calculator",
    tagline: "Free 2026 Compulsive Gambling Settlement Estimator",
    description: "Calculate Abilify lawsuit settlements. Compulsive gambling, shopping addiction, hypersexual behavior claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/abilify",
};

export const INJURY_TYPES = [
    { id: "gambling", name: "Compulsive Gambling", description: "Uncontrollable urge to gamble", avgSettlement: 200000, multiplier: 2.5 },
    { id: "shopping", name: "Compulsive Shopping", description: "Uncontrollable spending", avgSettlement: 150000, multiplier: 2.0 },
    { id: "hypersexual", name: "Hypersexual Behavior", description: "Compulsive sexual urges", avgSettlement: 175000, multiplier: 2.2 },
];

export const FINANCIAL_LOSS = [
    { id: "severe", name: "$100,000+ Lost", multiplier: 2.5 },
    { id: "major", name: "$50,000-$100,000 Lost", multiplier: 2.0 },
    { id: "moderate", name: "$10,000-$50,000 Lost", multiplier: 1.5 },
    { id: "minor", name: "Under $10,000 Lost", multiplier: 1.0 },
];

export const ABILIFY_2026 = {
    statistics: {
        manufacturer: "Bristol-Myers Squibb / Otsuka",
        fdaWarning: "2016 Label Update",
        annualUsers: "1.5 Million+",
        status: "Settlements Ongoing",
    },
    citations: [
        "FDA Drug Safety Communication - Abilify Compulsive Behaviors (2016)",
        "Abilify Product Liability Litigation 2026",
    ],
};

export const CALCULATORS = [
    { id: "abilify/calculator", name: "Settlement Calculator", description: "Estimate Abilify claim value", icon: Calculator, featured: true },
    { id: "abilify/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Abilify lawsuit about?", answer: "Abilify lawsuits allege that Bristol-Myers Squibb and Otsuka knew the drug caused compulsive behaviors but failed to warn patients. The FDA required a label update in 2016 after reports of pathological gambling, compulsive shopping, and hypersexuality." },
    { question: "What is Abilify?", answer: "Abilify (aripiprazole) is an antipsychotic medication used to treat schizophrenia, bipolar disorder, depression, autism irritability, and Tourette's. It's one of the bestselling drugs in the U.S. with over $7 billion in annual sales at its peak." },
    { question: "What compulsive behaviors are linked to Abilify?", answer: "Reported behaviors include pathological gambling, compulsive shopping/spending, binge eating, and hypersexual behavior. Many patients reported these urges stopped after discontinuing Abilify." },
    { question: "Who qualifies for an Abilify lawsuit?", answer: "Patients who took Abilify and developed compulsive gambling, shopping, eating, or sexual behaviors that caused financial, personal, or relationship harm may qualify. Documentation of both Abilify use and resulting losses is important." },
    { question: "What is the average settlement?", answer: "Settlement values vary based on financial losses and harm. Cases with documented losses over $100,000 may receive $200,000-$300,000+. Cases must prove the behavior started after beginning Abilify and stopped after discontinuation." },
];

export function calculateAbilifySettlement(
    injuryType: string,
    financialLoss: string,
    documentedLosses: number,
    monthsOnDrug: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const loss = FINANCIAL_LOSS.find(l => l.id === financialLoss) || FINANCIAL_LOSS[0];

    const docsBonus = hasDocumentation ? 1.25 : 1.0;
    const durationBonus = monthsOnDrug > 12 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * loss.multiplier * docsBonus * durationBonus;
    const emotionalDamages = Math.round(documentedLosses * baseMultiplier);

    return {
        injuryType: injury.name,
        financialLoss: loss.name,
        documentedLosses,
        emotionalDamages,
        totalLow: Math.round((documentedLosses + emotionalDamages) * 0.7),
        totalHigh: Math.round((documentedLosses + emotionalDamages) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
