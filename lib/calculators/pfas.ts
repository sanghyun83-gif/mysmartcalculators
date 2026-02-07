// ============================================
// PFAS LAWSUIT CALCULATOR
// 2026 Forever Chemicals, Firefighter AFFF, 3M/DuPont - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Flame } from 'lucide-react';

export const SITE = {
    name: "PFAS Lawsuit Calculator",
    tagline: "Free 2026 Forever Chemicals Settlement Estimator",
    description: "Calculate PFAS lawsuit settlements. Firefighter AFFF exposure, 3M & DuPont claims, cancer and disease compensation. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pfas",
};

export const EXPOSURE_TYPES = [
    { id: "firefighter", name: "Firefighter (AFFF Foam)", description: "Direct exposure to firefighting foam", avgSettlement: 650000, multiplier: 5.5 },
    { id: "military", name: "Military Personnel", description: "Base firefighting, training operations", avgSettlement: 550000, multiplier: 5.0 },
    { id: "industrial", name: "Industrial Worker", description: "PFAS manufacturing, chemical plants", avgSettlement: 500000, multiplier: 4.5 },
    { id: "community", name: "Community Exposure", description: "Living near contaminated water source", avgSettlement: 400000, multiplier: 4.0 },
];

export const CANCER_TYPES = [
    { id: "kidney", name: "Kidney Cancer", multiplier: 5.0, description: "Strongest scientific link to PFAS" },
    { id: "testicular", name: "Testicular Cancer", multiplier: 5.0, description: "Strong EPA/ATSDR connection" },
    { id: "thyroid", name: "Thyroid Cancer", multiplier: 4.0, description: "Linked to PFAS exposure" },
    { id: "bladder", name: "Bladder Cancer", multiplier: 4.0, description: "Associated with PFAS" },
    { id: "non-cancer", name: "Non-Cancer (Thyroid/Liver)", multiplier: 2.0, description: "Thyroid disease, liver damage" },
];

export const DEFENDANTS = [
    { name: "3M Company", status: "Settled $10.3B (water systems)", individualClaims: "Ongoing" },
    { name: "DuPont/Chemours", status: "Multiple settlements", individualClaims: "Active MDL" },
    { name: "Tyco Fire Products", status: "Active litigation", individualClaims: "Ongoing" },
    { name: "Kidde-Fenwal", status: "Active litigation", individualClaims: "Ongoing" },
];

export const PFAS_2026 = {
    statistics: {
        mdlNumber: "MDL 2873",
        totalClaims: 10000,
        firefighterClaims: 5000,
        avgCancerSettlement: 550000,
        threeM_Settlement: 10300000000,
    },
    citations: [
        "PFAS MDL 2873 - SC District Court 2026",
        "EPA PFAS Health Advisory 2026",
        "ATSDR Toxicological Profile for PFAS",
    ],
};

export const CALCULATORS = [
    { id: "pfas/calculator", name: "Settlement Calculator", description: "Calculate PFAS lawsuit value", icon: Calculator, featured: true },
    { id: "pfas/firefighter", name: "Firefighter Claims", description: "AFFF foam exposure lawsuits", icon: Flame, featured: true },
    { id: "pfas/manufacturers", name: "Defendant Companies", description: "3M, DuPont, Tyco litigation", icon: AlertTriangle, featured: false },
    { id: "pfas/guide", name: "Claims Guide", description: "How to file a PFAS lawsuit", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the average PFAS cancer settlement?", answer: "PFAS cancer settlements currently average $400,000-$700,000 for kidney and testicular cancer cases with strong exposure evidence. Firefighters with AFFF exposure often receive higher amounts due to documented occupational exposure." },
    { question: "Who qualifies for a PFAS lawsuit?", answer: "Those exposed to PFAS who developed cancer (kidney, testicular, thyroid, bladder) or other conditions (thyroid disease, ulcerative colitis, high cholesterol) may qualify. Firefighters, military personnel, and residents near contaminated sites have the strongest claims." },
    { question: "What is MDL 2873?", answer: "MDL 2873 is the federal Multi-District Litigation consolidating thousands of PFAS lawsuits against manufacturers like 3M and DuPont. Cases are coordinated in the South Carolina District Court to streamline discovery and pre-trial proceedings." },
    { question: "Did 3M settle the PFAS lawsuit?", answer: "3M agreed to pay $10.3 billion over 13 years to public water systems. Individual personal injury claims are separate and still being litigated in MDL 2873." },
    { question: "What is AFFF firefighting foam?", answer: "Aqueous Film-Forming Foam (AFFF) contains PFAS chemicals and has been used since the 1960s for fuel fires. Firefighters exposed to AFFF have higher rates of cancer, leading to thousands of lawsuits." },
    { question: "How long do I have to file?", answer: "Statutes of limitation vary by state (1-6 years from diagnosis or discovery). Given the ongoing MDL, earlier filing is recommended. Consult an attorney immediately upon diagnosis." },
    { question: "What evidence do I need?", answer: "Key evidence includes: cancer diagnosis, proof of PFAS exposure (employment records, testing, residence), blood PFAS testing if available, and medical records linking exposure to disease." },
    { question: "Can I sue if I don't have cancer?", answer: "Yes. Claims exist for thyroid disease, ulcerative colitis, high cholesterol, pregnancy complications, and other PFAS-linked conditions, though settlements are typically lower than cancer cases." },
    { question: "Are firefighter claims different?", answer: "Yes. Firefighters have documented occupational exposure to AFFF foam, making their cases easier to prove. Many states also have presumption laws protecting firefighters with cancer." },
    { question: "What companies are being sued?", answer: "Major defendants include 3M, DuPont/Chemours, Tyco Fire Products, Kidde-Fenwal, and other PFAS and AFFF manufacturers. Multiple companies may be liable in each case." },
];

export function calculatePFASSettlement(
    exposureType: string,
    cancerType: string,
    yearsExposed: number,
    medicalExpenses: number,
    lostWages: number,
    futureCareCosts: number,
    bloodPFASLevel: string
) {
    const exposure = EXPOSURE_TYPES.find(e => e.id === exposureType) || EXPOSURE_TYPES[0];
    const cancer = CANCER_TYPES.find(c => c.id === cancerType) || CANCER_TYPES[0];

    const exposureBonus = Math.min(yearsExposed / 5, 1.5);
    const bloodBonus = bloodPFASLevel === "high" ? 1.3 : bloodPFASLevel === "medium" ? 1.15 : 1.0;
    const baseMultiplier = exposure.multiplier * cancer.multiplier * exposureBonus * bloodBonus / 5;

    const economicDamages = medicalExpenses + lostWages + futureCareCosts;
    const painSufferingLow = Math.round(economicDamages * baseMultiplier * 0.6);
    const painSufferingHigh = Math.round(economicDamages * baseMultiplier * 1.2);

    return {
        exposureType: exposure.name,
        cancerType: cancer.name,
        economicDamages,
        painSufferingLow,
        painSufferingHigh,
        totalLow: Math.round(economicDamages + painSufferingLow),
        totalHigh: Math.round(economicDamages + painSufferingHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
