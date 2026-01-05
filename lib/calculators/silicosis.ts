// ============================================
// SILICOSIS SETTLEMENT CALCULATOR
// 2026 Crystalline Silica Exposure Claims
// ============================================

import { Calculator, FileText, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Silicosis Settlement Calculator",
    tagline: "Free 2026 Silica Exposure Compensation Estimator",
    description: "Calculate your silicosis settlement. Crystalline silica exposure from sandblasting, mining, construction. Based on 2026 OSHA and CDC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/silicosis",
};

export const SILICOSIS_TYPES = [
    { id: "chronic", name: "Chronic Silicosis", description: "10+ years exposure, most common", avgSettlement: 400000, multiplier: 3.5 },
    { id: "accelerated", name: "Accelerated Silicosis", description: "5-10 years high exposure", avgSettlement: 550000, multiplier: 4.5 },
    { id: "acute", name: "Acute Silicosis", description: "1-3 years very high exposure", avgSettlement: 700000, multiplier: 5.5 },
];

export const SEVERITY_LEVELS = [
    { id: "mild", name: "Mild", multiplier: 1.0, description: "Early stage, minimal symptoms" },
    { id: "moderate", name: "Moderate", multiplier: 2.0, description: "Noticeable breathing difficulty" },
    { id: "severe", name: "Severe", multiplier: 3.5, description: "Significant lung function loss" },
    { id: "terminal", name: "Terminal/Fatal", multiplier: 5.0, description: "Progressive massive fibrosis" },
];

export const HIGH_RISK_INDUSTRIES = [
    "Sandblasting", "Stone cutting", "Mining", "Quarrying", "Tunneling",
    "Construction", "Concrete work", "Foundries", "Glass manufacturing", "Ceramics"
];

export const SILICOSIS_2026 = {
    statistics: {
        annualDeaths: 1200,
        annualNewCases: 7000,
        avgSettlement: 450000,
        mdlNumber: "MDL 1553",
        oshaExposureLimit: "50 μg/m³",
    },
    citation: "Source: CDC/NIOSH 2026, OSHA Silica Standard 29 CFR 1926.1153",
};

export const CALCULATORS = [
    { id: "silicosis/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate silicosis settlement value", icon: Calculator, featured: true },
    { id: "silicosis/guide", name: "Claims Guide", shortName: "Guide", description: "How to file a silicosis claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "How much is the average silicosis settlement?", answer: "Average silicosis settlements range from $300,000 to $700,000 depending on disease severity and exposure duration. Acute silicosis and terminal cases often exceed $1 million." },
    { question: "What industries cause silicosis?", answer: "High-risk industries include sandblasting, stone cutting, mining, quarrying, tunneling, construction, concrete work, foundries, glass manufacturing, and ceramics production." },
    { question: "What is the statute of limitations for silicosis claims?", answer: "Most states have a 2-3 year statute of limitations from date of diagnosis. The 'discovery rule' applies since silicosis can take decades to develop." },
    { question: "Can I file a claim if my employer is bankrupt?", answer: "Yes. Silica litigation consolidated under MDL 1553 includes claims against multiple manufacturers. Many have established trust funds for victim compensation." },
    { question: "Do I need a lawyer for a silicosis claim?", answer: "While not required, experienced silicosis attorneys work on contingency (25-40%) and typically increase settlements by 30% or more. No upfront costs." },
];

export function calculateSilicosisSettlement(
    silicosisType: string,
    severity: string,
    medicalExpenses: number,
    lostWages: number,
    yearsExposed: number
) {
    const type = SILICOSIS_TYPES.find(t => t.id === silicosisType) || SILICOSIS_TYPES[0];
    const sev = SEVERITY_LEVELS.find(s => s.id === severity) || SEVERITY_LEVELS[0];
    const exposureBonus = Math.min(yearsExposed / 10, 1.5);
    const multiplier = type.multiplier * sev.multiplier * exposureBonus;

    const painSufferingLow = Math.round(medicalExpenses * multiplier * 0.7);
    const painSufferingHigh = Math.round(medicalExpenses * multiplier * 1.3);
    const futureCare = sev.id === 'terminal' ? 400000 : sev.id === 'severe' ? 250000 : 100000;

    return {
        type: type.name, severity: sev.name, medicalExpenses, lostWages, futureCare,
        painSufferingLow, painSufferingHigh,
        totalLow: Math.round(medicalExpenses + lostWages + futureCare + painSufferingLow),
        totalHigh: Math.round(medicalExpenses + lostWages + futureCare + painSufferingHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
