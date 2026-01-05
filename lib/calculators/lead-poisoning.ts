// ============================================
// LEAD POISONING SETTLEMENT CALCULATOR
// 2026 Lead Exposure Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Heart } from 'lucide-react';

export const SITE = {
    name: "Lead Poisoning Settlement Calculator",
    tagline: "Free 2026 Lead Exposure Compensation Estimator",
    description: "Calculate lead poisoning settlement. Lead paint, contaminated water, occupational exposure claims. Based on 2026 CDC and EPA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/lead-poisoning",
};

export const EXPOSURE_SOURCES = [
    { id: "lead-paint", name: "Lead Paint", description: "Pre-1978 housing, deteriorating paint", avgSettlement: 450000, multiplier: 4.0 },
    { id: "water-contamination", name: "Contaminated Water", description: "Lead pipes, Flint-style contamination", avgSettlement: 350000, multiplier: 3.5 },
    { id: "occupational", name: "Occupational Exposure", description: "Battery plants, smelters, construction", avgSettlement: 400000, multiplier: 3.8 },
    { id: "consumer-products", name: "Consumer Products", description: "Toys, jewelry, imported goods", avgSettlement: 300000, multiplier: 3.0 },
];

export const SEVERITY_LEVELS = [
    { id: "mild", name: "Mild (5-9 µg/dL)", multiplier: 1.0, description: "Cognitive effects, learning issues" },
    { id: "moderate", name: "Moderate (10-44 µg/dL)", multiplier: 2.5, description: "Behavioral problems, developmental delays" },
    { id: "severe", name: "Severe (45-69 µg/dL)", multiplier: 4.0, description: "Significant neurological damage" },
    { id: "critical", name: "Critical (70+ µg/dL)", multiplier: 6.0, description: "Life-threatening, permanent disability" },
];

export const AGE_GROUPS = [
    { id: "infant", name: "Infant (0-1)", multiplier: 2.0 },
    { id: "toddler", name: "Toddler (1-3)", multiplier: 1.8 },
    { id: "child", name: "Child (3-12)", multiplier: 1.5 },
    { id: "teen", name: "Teen (13-17)", multiplier: 1.2 },
    { id: "adult", name: "Adult (18+)", multiplier: 1.0 },
];

export const LEAD_POISONING_2026 = {
    statistics: {
        childrenAffected: 500000,
        safeBloodLevel: 3.5,
        avgSettlement: 385000,
        leadPipeHomes: 9000000,
        annualFilings: 4500,
    },
    citations: [
        "CDC Blood Lead Reference Value Guidelines 2026",
        "EPA Lead and Copper Rule Revisions 2026",
        "HUD Lead-Based Paint Hazard Control Data",
    ],
};

export const CALCULATORS = [
    { id: "lead-poisoning/calculator", name: "Settlement Calculator", description: "Calculate lead poisoning settlement", icon: Calculator, featured: true },
    { id: "lead-poisoning/sources", name: "Exposure Sources", description: "Common sources of lead exposure", icon: AlertTriangle, featured: true },
    { id: "lead-poisoning/children", name: "Children & Lead", description: "Lead poisoning in children", icon: Heart, featured: false },
    { id: "lead-poisoning/guide", name: "Claims Guide", description: "How to file a lead poisoning claim", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the average lead poisoning settlement?", answer: "Lead poisoning settlements average $200,000-$500,000 depending on severity, age at exposure, and long-term effects. Children with permanent cognitive damage often receive $500,000-$1M+." },
    { question: "What blood lead level is considered dangerous?", answer: "The CDC now considers 3.5 µg/dL the reference value for children. Any level above this indicates exposure. Levels above 45 µg/dL are considered severe and require immediate medical intervention." },
    { question: "Who can I sue for lead poisoning?", answer: "Potential defendants include landlords (lead paint), water utilities, product manufacturers, employers (occupational exposure), and previous property owners who knew of lead hazards." },
    { question: "What is the statute of limitations?", answer: "Varies by state (1-6 years). For children, the clock often starts at age 18. The discovery rule may extend deadlines when lead poisoning is diagnosed later." },
    { question: "Does lead paint still cause poisoning today?", answer: "Yes. Lead paint was banned in 1978, but 29 million pre-1978 homes still contain lead paint. Deteriorating paint and renovation dust are major exposure sources." },
    { question: "Can adults sue for lead poisoning?", answer: "Yes. Adults exposed occupationally (battery plants, construction, smelters) can file workers' comp and personal injury claims against negligent employers." },
    { question: "What damages can I recover?", answer: "Damages include medical expenses, special education costs, lost earning capacity, pain and suffering, and in severe cases, lifetime care costs." },
    { question: "How do I prove lead poisoning?", answer: "Key evidence includes blood lead tests, medical records, property inspection showing lead paint, and expert testimony connecting exposure to health effects." },
    { question: "What about contaminated water (Flint-style)?", answer: "Water contamination lawsuits target utilities, municipalities, and government agencies. Class actions like Flint have resulted in settlements exceeding $600 million." },
    { question: "Do I need a lawyer?", answer: "Strongly recommended. Lead poisoning attorneys work on contingency (25-40%) and handle complex medical evidence. Most cases settle for significantly more with legal representation." },
];

export function calculateLeadPoisoningSettlement(
    exposureSource: string,
    severity: string,
    ageGroup: string,
    medicalExpenses: number,
    specialEducation: number,
    lostEarningCapacity: number,
    yearsExposed: number
) {
    const source = EXPOSURE_SOURCES.find(s => s.id === exposureSource) || EXPOSURE_SOURCES[0];
    const sev = SEVERITY_LEVELS.find(s => s.id === severity) || SEVERITY_LEVELS[0];
    const age = AGE_GROUPS.find(a => a.id === ageGroup) || AGE_GROUPS[0];

    const exposureBonus = Math.min(yearsExposed / 3, 1.5);
    const baseMultiplier = source.multiplier * sev.multiplier * age.multiplier * exposureBonus;

    const economicDamages = medicalExpenses + specialEducation + lostEarningCapacity;
    const painSufferingLow = Math.round(economicDamages * baseMultiplier * 0.5);
    const painSufferingHigh = Math.round(economicDamages * baseMultiplier * 1.0);

    return {
        exposureSource: source.name,
        severity: sev.name,
        ageGroup: age.name,
        economicDamages,
        painSufferingLow,
        painSufferingHigh,
        totalLow: Math.round(economicDamages + painSufferingLow),
        totalHigh: Math.round(economicDamages + painSufferingHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
