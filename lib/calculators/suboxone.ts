// ============================================
// SUBOXONE TOOTH DECAY LAWSUIT CALCULATOR
// 2026 Buprenorphine, Dental Damage - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Suboxone Tooth Decay Calculator",
    tagline: "Free 2026 Dental Damage Lawsuit Estimator",
    description: "Calculate Suboxone tooth decay lawsuit settlements. Buprenorphine sublingual film, dental damage, extraction claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/suboxone",
};

export const DAMAGE_SEVERITY = [
    { id: "extractions", name: "Multiple Tooth Extractions", description: "Loss of multiple teeth", avgSettlement: 150000, multiplier: 3.0 },
    { id: "severe-decay", name: "Severe Tooth Decay", description: "Extensive dental work needed", avgSettlement: 80000, multiplier: 2.0 },
    { id: "moderate", name: "Moderate Dental Damage", description: "Cavities, root canals", avgSettlement: 40000, multiplier: 1.5 },
];

export const USAGE_DURATION = [
    { id: "5plus", name: "5+ Years", multiplier: 1.5 },
    { id: "2-5", name: "2-5 Years", multiplier: 1.2 },
    { id: "under-2", name: "Under 2 Years", multiplier: 1.0 },
];

export const SUBOXONE_2026 = {
    statistics: {
        fdaWarning: "January 2022",
        pendingCases: 2500,
        avgProjectedSettlement: 75000,
        status: "Active Litigation",
    },
    citations: [
        "FDA Drug Safety Communication - Dental Problems with Buprenorphine Medicines (January 2022)",
        "Suboxone Product Liability Litigation 2026",
    ],
};

export const CALCULATORS = [
    { id: "suboxone/calculator", name: "Settlement Calculator", description: "Estimate dental damage claim value", icon: Calculator, featured: true },
    { id: "suboxone/guide", name: "Claims Guide", description: "How to file a Suboxone lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Suboxone tooth decay lawsuit?", answer: "Lawsuits allege that Indivior (maker of Suboxone) failed to warn patients that the sublingual film formulation can cause severe dental problems including tooth decay, cavities, tooth fractures, and tooth loss." },
    { question: "What FDA warning was issued?", answer: "In January 2022, the FDA issued a Drug Safety Communication warning about serious dental problems in people who dissolve buprenorphine medicines in their mouth. This included reports of tooth decay, cavities, oral infections, and loss of teeth." },
    { question: "Who qualifies for a Suboxone lawsuit?", answer: "Individuals who used Suboxone sublingual film (under the tongue) and experienced significant dental problems such as tooth decay, cavities, tooth loss, or oral infections may qualify. Prior good dental health strengthens claims." },
    { question: "What kind of compensation is available?", answer: "Potential damages include cost of dental treatment (extractions, implants, dentures), pain and suffering, and ongoing dental care costs. Settlement values depend on damage severity." },
    { question: "Do I need records?", answer: "Key evidence includes: dental records before and after Suboxone use, prescription history, photos of dental damage, and treatment records. Records showing good dental health before use are particularly valuable." },
];

export function calculateSuboxoneSettlement(
    damageSeverity: string,
    usageDuration: string,
    dentalCosts: number,
    hadGoodTeethBefore: boolean,
    teethExtracted: number
) {
    const severity = DAMAGE_SEVERITY.find(s => s.id === damageSeverity) || DAMAGE_SEVERITY[0];
    const duration = USAGE_DURATION.find(d => d.id === usageDuration) || USAGE_DURATION[0];

    const priorHealthBonus = hadGoodTeethBefore ? 1.3 : 1.0;
    const extractionBonus = teethExtracted > 5 ? 1.3 : teethExtracted > 0 ? 1.1 : 1.0;

    const baseMultiplier = severity.multiplier * duration.multiplier * priorHealthBonus * extractionBonus;
    const painSuffering = Math.round(dentalCosts * baseMultiplier);

    return {
        severity: severity.name,
        duration: duration.name,
        dentalCosts,
        painSuffering,
        totalLow: Math.round((dentalCosts + painSuffering) * 0.7),
        totalHigh: Math.round((dentalCosts + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
