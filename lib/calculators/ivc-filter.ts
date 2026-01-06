// ============================================
// IVC FILTER LAWSUIT CALCULATOR
// 2026 Blood Clot Filter, Fracture, Migration - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "IVC Filter Lawsuit Calculator",
    tagline: "Free 2026 Blood Clot Filter Lawsuit Estimator",
    description: "Calculate IVC filter lawsuit settlements. Filter fracture, migration, organ perforation claims. Based on 2026 settlement data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ivc-filter",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal complications", avgSettlement: 1000000, multiplier: 5.0 },
    { id: "perforation", name: "Organ Perforation", description: "Filter punctured heart/organ", avgSettlement: 400000, multiplier: 3.5 },
    { id: "surgery", name: "Emergency Retrieval Surgery", description: "Surgery to remove filter", avgSettlement: 200000, multiplier: 2.5 },
    { id: "migration", name: "Filter Migration/Fracture", description: "Device moved or broke", avgSettlement: 100000, multiplier: 2.0 },
];

export const FILTER_BRANDS = [
    { id: "cook", name: "Cook Medical (Celect, Gunther Tulip)", multiplier: 1.2 },
    { id: "bard", name: "Bard (G2, Recovery, Eclipse)", multiplier: 1.2 },
    { id: "other", name: "Other IVC Filter", multiplier: 1.0 },
];

export const IVC_2026 = {
    statistics: {
        fdaWarning: "2010 Safety Communication",
        settledCases: 10000,
        avgSettlement: 100000,
        status: "Settlements Ongoing",
    },
    citations: [
        "FDA Safety Communication - IVC Filter Retrieval 2010, Updated 2014",
        "Cook Medical IVC Filter Settlements 2026",
    ],
};

export const CALCULATORS = [
    { id: "ivc-filter/calculator", name: "Settlement Calculator", description: "Estimate IVC filter claim value", icon: Calculator, featured: true },
    { id: "ivc-filter/guide", name: "Claims Guide", description: "How to file an IVC filter lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is an IVC filter lawsuit about?", answer: "IVC filter lawsuits allege that manufacturers sold defective blood clot filters that can fracture, tilt, migrate through the body, and perforate blood vessels or organs. The FDA issued safety communications warning about these risks." },
    { question: "What FDA warnings were issued?", answer: "The FDA issued a Safety Communication in 2010 (updated 2014) warning that retrievable IVC filters should be removed once the risk of blood clots has passed, as leaving them in place long-term increases the risk of complications." },
    { question: "Which brands are involved?", answer: "Major manufacturers include Cook Medical (Celect, Gunther Tulip) and Bard (G2, Recovery, Eclipse). Both companies have faced significant litigation and have entered into settlements." },
    { question: "What injuries are covered?", answer: "Covered injuries include filter fracture, device migration, tilting, perforation of blood vessels or organs (including heart), pulmonary embolism, and complications requiring emergency retrieval surgery." },
    { question: "What compensation is available?", answer: "Settlement values depend on injury severity. Migration/fracture cases may receive $50,000-$150,000, while organ perforation can exceed $400,000. Wrongful death cases may exceed $1 million." },
];

export function calculateIVCSettlement(
    injuryType: string,
    filterBrand: string,
    medicalExpenses: number,
    filterStillInBody: boolean,
    yearsWithFilter: number
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const brand = FILTER_BRANDS.find(b => b.id === filterBrand) || FILTER_BRANDS[0];

    const inBodyBonus = filterStillInBody ? 1.2 : 1.0;
    const yearBonus = yearsWithFilter > 5 ? 1.3 : yearsWithFilter > 2 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * brand.multiplier * inBodyBonus * yearBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        filterBrand: brand.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
