// ============================================
// WATER CONTAMINATION LAWSUIT CALCULATOR
// 2026 PFAS, Camp Lejeune, Industrial Pollution - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Droplets } from 'lucide-react';

export const SITE = {
    name: "Water Contamination Lawsuit Calculator",
    tagline: "Free 2026 PFAS & Water Pollution Settlement Estimator",
    description: "Calculate water contamination lawsuit settlements. PFAS forever chemicals, Camp Lejeune, industrial pollution. Based on 2026 EPA and MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/water-contamination",
};

export const CONTAMINATION_TYPES = [
    { id: "pfas", name: "PFAS (Forever Chemicals)", description: "PFOA, PFOS in drinking water from manufacturing", avgSettlement: 550000, multiplier: 5.0 },
    { id: "camp-lejeune", name: "Camp Lejeune", description: "Military base water contamination (1953-1987)", avgSettlement: 450000, multiplier: 4.5 },
    { id: "industrial", name: "Industrial Discharge", description: "Factory runoff, chemical plant pollution", avgSettlement: 400000, multiplier: 4.0 },
    { id: "agricultural", name: "Agricultural Runoff", description: "Pesticides, fertilizers, animal waste", avgSettlement: 300000, multiplier: 3.0 },
];

export const HEALTH_EFFECTS = [
    { id: "cancer", name: "Cancer", multiplier: 5.0, description: "Kidney, testicular, bladder, thyroid cancer" },
    { id: "thyroid", name: "Thyroid Disease", multiplier: 3.0, description: "Hypothyroidism, thyroid dysfunction" },
    { id: "liver", name: "Liver Damage", multiplier: 3.5, description: "Elevated liver enzymes, liver disease" },
    { id: "immune", name: "Immune System", multiplier: 2.5, description: "Weakened immune response, autoimmune issues" },
];

export const EXPOSURE_DURATION = [
    { id: "short", name: "1-5 years", multiplier: 1.0 },
    { id: "medium", name: "5-10 years", multiplier: 1.5 },
    { id: "long", name: "10-20 years", multiplier: 2.0 },
    { id: "extended", name: "20+ years", multiplier: 2.5 },
];

export const WATER_CONTAMINATION_2026 = {
    statistics: {
        pfasAffectedPeople: 200000000,
        campLejeunePlaintiffs: 180000,
        avgSettlement: 425000,
        pfasMDL: "MDL 2873",
        campLejeuneMDL: "Camp Lejeune Justice Act 2022",
    },
    citations: [
        "EPA PFAS Strategic Roadmap 2026",
        "Camp Lejeune Justice Act Litigation Data",
        "ATSDR Water Contamination Health Studies",
    ],
};

export const CALCULATORS = [
    { id: "water-contamination/calculator", name: "Settlement Calculator", description: "Calculate water contamination settlement", icon: Calculator, featured: true },
    { id: "water-contamination/pfas", name: "PFAS Guide", description: "PFAS forever chemicals lawsuits", icon: AlertTriangle, featured: true },
    { id: "water-contamination/camp-lejeune", name: "Camp Lejeune", description: "Military base contamination claims", icon: Droplets, featured: false },
    { id: "water-contamination/guide", name: "Claims Guide", description: "How to file a water contamination suit", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the average water contamination settlement?", answer: "Water contamination settlements average $300,000-$600,000 for individual claims. PFAS and Camp Lejeune cases with cancer diagnoses often exceed $500,000-$1M+." },
    { question: "What are PFAS (forever chemicals)?", answer: "PFAS (per- and polyfluoroalkyl substances) are synthetic chemicals found in firefighting foam, nonstick cookware, and industrial products. They don't break down naturally, hence 'forever chemicals.' Over 200 million Americans have PFAS in their drinking water." },
    { question: "Who qualifies for Camp Lejeune compensation?", answer: "Anyone who lived or worked at Camp Lejeune, NC for at least 30 days between August 1953 and December 1987 may qualify. This includes Marines, family members, and civilian workers." },
    { question: "What health conditions are linked to water contamination?", answer: "PFAS exposure is linked to kidney cancer, testicular cancer, thyroid disease, ulcerative colitis, high cholesterol, and pregnancy complications. Camp Lejeune is linked to multiple cancers and Parkinson's disease." },
    { question: "Can I sue my water utility?", answer: "Yes. If your water utility knew or should have known about contamination and failed to act, you may have a claim for negligence. Class actions against utilities have resulted in large settlements." },
    { question: "What is the PFAS MDL?", answer: "The PFAS MDL (Multi-District Litigation) consolidates thousands of PFAS lawsuits in federal court. MDL 2873 is handling claims against PFAS manufacturers like 3M and DuPont." },
    { question: "How do I prove water contamination caused my illness?", answer: "Key evidence includes: water testing showing contaminants, medical records with qualifying diagnosis, proof of residence/exposure duration, and expert testimony linking exposure to illness." },
    { question: "What is the statute of limitations?", answer: "Varies by state (1-6 years). The Camp Lejeune Justice Act has a 2-year filing deadline from August 2022. Discovery rules may extend deadlines when contamination was recently discovered." },
    { question: "What damages can I recover?", answer: "Damages include medical expenses, lost wages, disability, pain and suffering, loss of quality of life, and wrongful death claims for family members." },
    { question: "Do I need a water contamination lawyer?", answer: "Strongly recommended. Water contamination cases require scientific evidence and expert testimony. Most attorneys work on contingency (25-40%) and handle complex litigation." },
];

export function calculateWaterContaminationSettlement(
    contaminationType: string,
    healthEffect: string,
    exposureDuration: string,
    medicalExpenses: number,
    lostWages: number,
    futureCareCosts: number,
    householdSize: number
) {
    const contamination = CONTAMINATION_TYPES.find(c => c.id === contaminationType) || CONTAMINATION_TYPES[0];
    const health = HEALTH_EFFECTS.find(h => h.id === healthEffect) || HEALTH_EFFECTS[0];
    const duration = EXPOSURE_DURATION.find(d => d.id === exposureDuration) || EXPOSURE_DURATION[0];

    const householdBonus = Math.min(householdSize * 0.1, 0.5);
    const baseMultiplier = contamination.multiplier * health.multiplier * duration.multiplier * (1 + householdBonus);

    const economicDamages = medicalExpenses + lostWages + futureCareCosts;
    const painSufferingLow = Math.round(economicDamages * baseMultiplier * 0.4);
    const painSufferingHigh = Math.round(economicDamages * baseMultiplier * 0.8);

    return {
        contaminationType: contamination.name,
        healthEffect: health.name,
        exposureDuration: duration.name,
        economicDamages,
        painSufferingLow,
        painSufferingHigh,
        totalLow: Math.round(economicDamages + painSufferingLow),
        totalHigh: Math.round(economicDamages + painSufferingHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
