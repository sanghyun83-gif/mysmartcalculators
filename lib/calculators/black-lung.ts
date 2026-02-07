// ============================================
// BLACK LUNG SETTLEMENT CALCULATOR
// 2026 Coal Workers' Pneumoconiosis Claims
// ============================================

import { Calculator, FileText, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Black Lung Settlement Calculator",
    tagline: "Free 2026 Coal Workers' Pneumoconiosis Calculator",
    description: "Calculate your black lung disease settlement. Coal workers' pneumoconiosis compensation for miners. Based on 2026 MSHA and federal black lung program data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/black-lung",
};

export const BLACK_LUNG_TYPES = [
    { id: "simple", name: "Simple CWP", description: "Early stage coal dust accumulation", avgSettlement: 250000, multiplier: 2.5 },
    { id: "complicated", name: "Complicated CWP (PMF)", description: "Progressive massive fibrosis", avgSettlement: 500000, multiplier: 5.0 },
    { id: "severe", name: "Severe/Terminal", description: "End-stage respiratory failure", avgSettlement: 750000, multiplier: 7.0 },
];

export const SEVERITY_LEVELS = [
    { id: "mild", name: "Mild", multiplier: 1.0, description: "Minimal symptoms" },
    { id: "moderate", name: "Moderate", multiplier: 2.0, description: "Breathing difficulty on exertion" },
    { id: "severe", name: "Severe", multiplier: 3.5, description: "Constant breathing problems" },
    { id: "total-disability", name: "Total Disability", multiplier: 5.0, description: "Unable to work in mining" },
];

export const BLACK_LUNG_2026 = {
    statistics: {
        annualDeaths: 1000,
        federalBenefitsMonthly: 728,
        activeMiners: 42000,
        prevalenceRate: "4.5%",
    },
    citation: "Source: MSHA 2026, DOL Black Lung Benefits Program, NIOSH Coal Workers' Health Surveillance",
};

export const CALCULATORS = [
    { id: "black-lung/calculator", name: "Settlement Calculator", description: "Calculate black lung settlement value", icon: Calculator, featured: true },
    { id: "black-lung/guide", name: "Benefits Guide", description: "Federal black lung benefits explained", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the average black lung settlement?", answer: "Black lung settlements range from $150,000 to $750,000+ depending on disease severity. Simple CWP averages $250,000, while complicated PMF cases average $500,000+. Total disability cases often exceed $750,000." },
    { question: "What are federal black lung benefits?", answer: "The Federal Black Lung Benefits Program provides monthly payments ($728.50 in 2026 for a single miner), medical care, and survivor benefits. These are separate from civil lawsuits against coal companies." },
    { question: "Can I sue my employer for black lung?", answer: "Yes. In addition to federal benefits, you may have claims against coal companies, equipment manufacturers, and others who failed to protect you. These civil suits can provide significantly higher compensation." },
    { question: "What is the statute of limitations?", answer: "For federal benefits, you can file anytime. For civil lawsuits, most states have 2-3 years from diagnosis. The 'discovery rule' applies since black lung develops over decades." },
    { question: "Do I need a lawyer?", answer: "For federal benefits, the DOL provides free assistance. For civil lawsuits, experienced black lung attorneys work on contingency (25-40%) and typically increase settlements significantly." },
];

export function calculateBlackLungSettlement(lungType: string, severity: string, medicalExpenses: number, lostWages: number, yearsExposed: number) {
    const type = BLACK_LUNG_TYPES.find(t => t.id === lungType) || BLACK_LUNG_TYPES[0];
    const sev = SEVERITY_LEVELS.find(s => s.id === severity) || SEVERITY_LEVELS[0];
    const exposureBonus = Math.min(yearsExposed / 15, 1.5);
    const multiplier = type.multiplier * sev.multiplier * exposureBonus;

    const painSufferingLow = Math.round(medicalExpenses * multiplier * 0.7);
    const painSufferingHigh = Math.round(medicalExpenses * multiplier * 1.3);
    const futureCare = sev.id === 'total-disability' ? 350000 : sev.id === 'severe' ? 200000 : 75000;

    return {
        type: type.name, severity: sev.name, medicalExpenses, lostWages, futureCare,
        painSufferingLow, painSufferingHigh,
        totalLow: Math.round(medicalExpenses + lostWages + futureCare + painSufferingLow),
        totalHigh: Math.round(medicalExpenses + lostWages + futureCare + painSufferingHigh),
        monthlyFederalBenefit: BLACK_LUNG_2026.statistics.federalBenefitsMonthly,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
