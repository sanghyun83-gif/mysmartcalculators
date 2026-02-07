// ============================================
// LUNG DISEASE SETTLEMENT CALCULATOR
// 2026 Occupational Lung Disease Claims
// Silicosis, Asbestosis, COPD, Black Lung
// ============================================

import { Calculator, FileText, Stethoscope, AlertTriangle, Shield } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Lung Disease Settlement Calculator",
    tagline: "Free 2026 Occupational Lung Disease Compensation Estimator",
    description: "Calculate your occupational lung disease settlement. Silicosis, asbestosis, black lung, COPD, and toxic exposure claims. Based on 2026 OSHA and CDC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/lung-disease",
};

// ============================================
// LUNG DISEASE TYPES & SETTLEMENT DATA
// ============================================
export const LUNG_DISEASE_TYPES = [
    {
        id: "silicosis",
        name: "Silicosis",
        description: "Caused by inhaling crystalline silica dust",
        industries: ["Mining", "Construction", "Sandblasting", "Stone cutting"],
        avgSettlement: 450000,
        multiplier: 4.5,
        latency: "10-30 years",
    },
    {
        id: "asbestosis",
        name: "Asbestosis",
        description: "Scarring of lung tissue from asbestos fibers",
        industries: ["Shipbuilding", "Construction", "Insulation", "Automotive"],
        avgSettlement: 550000,
        multiplier: 5.0,
        latency: "15-40 years",
    },
    {
        id: "mesothelioma",
        name: "Mesothelioma",
        description: "Aggressive cancer of lung lining from asbestos",
        industries: ["Shipbuilding", "Construction", "Military", "Manufacturing"],
        avgSettlement: 1200000,
        multiplier: 8.0,
        latency: "20-50 years",
    },
    {
        id: "black-lung",
        name: "Black Lung (CWP)",
        description: "Coal workers' pneumoconiosis from coal dust",
        industries: ["Coal mining", "Underground mining"],
        avgSettlement: 400000,
        multiplier: 4.0,
        latency: "10-20 years",
    },
    {
        id: "copd",
        name: "Occupational COPD",
        description: "Chronic obstructive pulmonary disease from workplace exposure",
        industries: ["Manufacturing", "Agriculture", "Mining", "Construction"],
        avgSettlement: 350000,
        multiplier: 3.5,
        latency: "5-15 years",
    },
    {
        id: "pulmonary-fibrosis",
        name: "Pulmonary Fibrosis",
        description: "Scarring and thickening of lung tissue",
        industries: ["Agriculture", "Textile", "Metal working"],
        avgSettlement: 500000,
        multiplier: 4.5,
        latency: "5-20 years",
    },
];

// ============================================
// SEVERITY LEVELS
// ============================================
export const SEVERITY_LEVELS = [
    { id: "mild", name: "Mild", multiplier: 1.0, description: "Early stage, minimal symptoms" },
    { id: "moderate", name: "Moderate", multiplier: 2.0, description: "Noticeable breathing difficulty" },
    { id: "severe", name: "Severe", multiplier: 3.5, description: "Significant lung function loss" },
    { id: "terminal", name: "Terminal/Fatal", multiplier: 5.0, description: "Life-threatening or death" },
];

// ============================================
// EXPOSURE SOURCES
// ============================================
export const EXPOSURE_SOURCES = [
    { id: "workplace", name: "Workplace Exposure", multiplier: 1.0 },
    { id: "product", name: "Defective Product", multiplier: 1.3 },
    { id: "environmental", name: "Environmental/Community", multiplier: 1.2 },
    { id: "military", name: "Military Service", multiplier: 1.5 },
];

// ============================================
// COMPENSATION TYPES
// ============================================
export const COMPENSATION_TYPES = [
    { id: "medical", name: "Medical Expenses", description: "Past and future treatment costs" },
    { id: "lost-wages", name: "Lost Wages", description: "Income lost due to illness" },
    { id: "disability", name: "Disability", description: "Permanent impairment compensation" },
    { id: "pain-suffering", name: "Pain & Suffering", description: "Non-economic damages" },
    { id: "wrongful-death", name: "Wrongful Death", description: "Compensation for surviving family" },
];

// ============================================
// 2026 STATISTICS
// ============================================
export const LUNG_DISEASE_2026 = {
    statistics: {
        annualOccupationalDeaths: 65000,
        annualNewCases: 250000,
        avgSettlement: 485000,
        medianSettlement: 350000,
        silicosisDeaths: 1200,
        asbestosisDeaths: 3500,
        blackLungDeaths: 1000,
    },
    citation: "Source: CDC/NIOSH 2026, OSHA Occupational Health Statistics",

    // MDL Information
    mdlInfo: {
        silicosis: "In re: Silica Products Liability Litigation, MDL 1553",
        asbestos: "Various asbestos MDLs pending nationwide",
    },
};

// ============================================
// CALCULATORS (ROUTES)
// ============================================
export const CALCULATORS = [
    {
        id: "lung-disease/calculator",
        name: "Settlement Calculator",
        shortName: "Calculator",
        description: "Calculate your lung disease settlement value",
        longDescription: "Free occupational lung disease settlement calculator. Estimate compensation for silicosis, asbestosis, black lung, COPD, and other respiratory conditions.",
        icon: Calculator,
        keywords: ["lung disease settlement calculator", "occupational lung disease compensation"],
        featured: true,
    },
    {
        id: "lung-disease/types",
        name: "Disease Types Guide",
        shortName: "Disease Types",
        description: "Learn about different occupational lung diseases",
        longDescription: "Comprehensive guide to occupational lung diseases including silicosis, asbestosis, black lung, and COPD.",
        icon: Stethoscope,
        keywords: ["occupational lung disease types", "silicosis", "asbestosis"],
        featured: true,
    },
    {
        id: "lung-disease/guide",
        name: "Claims Guide",
        shortName: "Claims Guide",
        description: "Step-by-step guide to filing a lung disease claim",
        longDescription: "How to file an occupational lung disease lawsuit. Workers' compensation and personal injury claims explained.",
        icon: FileText,
        keywords: ["lung disease lawsuit", "how to file lung disease claim"],
        featured: false,
    },
    {
        id: "lung-disease/treatment",
        name: "Treatment Options",
        shortName: "Treatment",
        description: "Medical treatments and their costs",
        longDescription: "Treatment options for occupational lung diseases and associated medical costs for settlement calculations.",
        icon: Shield,
        keywords: ["lung disease treatment", "occupational lung disease therapy"],
        featured: false,
    },
];

// ============================================
// FAQ DATA (10 FAQs for Advanced)
// ============================================
export const FAQS = [
    {
        question: "How much can I get for an occupational lung disease settlement?",
        answer: "Occupational lung disease settlements typically range from $100,000 to over $1 million depending on disease severity, lost wages, and medical expenses. Mesothelioma cases average $1.2 million, while silicosis and asbestosis cases average $400,000-$550,000."
    },
    {
        question: "What is the statute of limitations for lung disease claims?",
        answer: "Most states have a 2-3 year statute of limitations from the date of diagnosis or discovery of the disease. Because lung diseases can take decades to develop, the 'discovery rule' often applies, starting the clock when you knew or should have known about your condition."
    },
    {
        question: "Can I file a claim if my employer is out of business?",
        answer: "Yes. Many asbestos and silica manufacturers have established bankruptcy trusts to compensate victims. There are over 60 asbestos trusts with $30+ billion available. An attorney can help identify all responsible parties and trusts."
    },
    {
        question: "What evidence do I need for a lung disease claim?",
        answer: "Key evidence includes: medical records and diagnosis, employment history documenting exposure, expert medical testimony linking exposure to disease, and documentation of lost wages and medical expenses. Chest X-rays, CT scans, and pulmonary function tests are critical."
    },
    {
        question: "Is workers' compensation my only option?",
        answer: "No. While workers' comp provides benefits regardless of fault, you may also have personal injury claims against manufacturers, property owners, or contractors. Third-party claims can provide significantly higher compensation than workers' comp alone."
    },
    {
        question: "How long does a lung disease lawsuit take?",
        answer: "Timeline varies: Workers' comp claims typically resolve in 6-12 months. Personal injury lawsuits take 1-3 years. Asbestos trust claims can be processed in 3-12 months. Many courts have expedited procedures for seriously ill plaintiffs."
    },
    {
        question: "What if I was exposed at multiple jobs or locations?",
        answer: "You can pursue claims against all responsible parties. Each employer, manufacturer, and property owner who exposed you to harmful substances may be liable. Joint and several liability rules in many states allow recovery from any responsible party."
    },
    {
        question: "Do I need a lawyer for a lung disease claim?",
        answer: "While not legally required, an experienced attorney significantly increases your chances of success and settlement amount. Most lung disease attorneys work on contingency (25-40% of settlement), meaning no upfront costs."
    },
    {
        question: "What is the difference between silicosis and asbestosis?",
        answer: "Silicosis is caused by inhaling crystalline silica dust (sandblasting, mining, construction). Asbestosis is caused by asbestos fibers (insulation, shipbuilding). Both cause lung scarring but asbestos can lead to mesothelioma, a deadly cancer."
    },
    {
        question: "Can family members file a claim if the worker died?",
        answer: "Yes. Surviving spouses, children, and dependents can file wrongful death claims. These include compensation for lost income, loss of companionship, and funeral expenses. Many states allow claims by the estate for the deceased's pain and suffering before death."
    },
];

// ============================================
// CALCULATION FUNCTIONS
// ============================================
export interface LungDiseaseResult {
    diseaseType: string;
    severity: string;
    exposureSource: string;
    medicalExpenses: number;
    lostWages: number;
    futureCareCost: number;
    painSufferingLow: number;
    painSufferingHigh: number;
    totalLow: number;
    totalHigh: number;
    withAttorneyLow: number;
    withAttorneyHigh: number;
}

export function calculateLungDiseaseSettlement(
    diseaseTypeId: string,
    severityId: string,
    exposureSourceId: string,
    medicalExpenses: number,
    lostWages: number,
    yearsExposed: number,
    age: number
): LungDiseaseResult {
    const diseaseType = LUNG_DISEASE_TYPES.find(d => d.id === diseaseTypeId) || LUNG_DISEASE_TYPES[0];
    const severity = SEVERITY_LEVELS.find(s => s.id === severityId) || SEVERITY_LEVELS[0];
    const exposureSource = EXPOSURE_SOURCES.find(e => e.id === exposureSourceId) || EXPOSURE_SOURCES[0];

    // Calculate base multiplier
    const baseMultiplier = diseaseType.multiplier * severity.multiplier * exposureSource.multiplier;

    // Years exposed bonus (more exposure = stronger case)
    const exposureBonus = Math.min(yearsExposed / 10, 1.5);

    // Age factor (younger = more future damages)
    const ageFactor = age < 50 ? 1.3 : age < 65 ? 1.0 : 0.8;

    // Future care costs (estimated based on severity)
    const futureCareCost = severity.id === 'terminal' ? 500000 :
        severity.id === 'severe' ? 300000 :
            severity.id === 'moderate' ? 150000 : 50000;

    // Calculate pain & suffering
    const painSufferingBase = medicalExpenses * baseMultiplier * exposureBonus * ageFactor;
    const painSufferingLow = Math.round(painSufferingBase * 0.7);
    const painSufferingHigh = Math.round(painSufferingBase * 1.3);

    // Total settlement
    const economicDamages = medicalExpenses + lostWages + futureCareCost;
    const totalLow = Math.round(economicDamages + painSufferingLow);
    const totalHigh = Math.round(economicDamages + painSufferingHigh);

    // With attorney bonus (30% higher settlements on average)
    const withAttorneyLow = Math.round(totalLow * 1.3);
    const withAttorneyHigh = Math.round(totalHigh * 1.3);

    return {
        diseaseType: diseaseType.name,
        severity: severity.name,
        exposureSource: exposureSource.name,
        medicalExpenses,
        lostWages,
        futureCareCost,
        painSufferingLow,
        painSufferingHigh,
        totalLow,
        totalHigh,
        withAttorneyLow,
        withAttorneyHigh,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}
