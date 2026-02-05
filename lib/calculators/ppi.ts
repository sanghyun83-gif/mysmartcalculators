// ============================================
// PROTON PUMP INHIBITOR (PPI) LAWSUIT CALCULATOR
// 2026 Heartburn Drug Kidney/Bone Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "PPI Lawsuit Calculator",
    tagline: "Free 2026 Proton Pump Inhibitor Settlement Estimator",
    description: "Calculate PPI lawsuit settlements. Kidney disease, bone fractures, gastric cancer claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ppi",
};

export const INJURY_TYPES = [
    { id: "kidney-disease", name: "Chronic Kidney Disease", description: "CKD or kidney failure", avgSettlement: 300000, multiplier: 3.5 },
    { id: "acute-kidney", name: "Acute Kidney Injury", description: "Sudden kidney damage", avgSettlement: 200000, multiplier: 2.5 },
    { id: "bone-fracture", name: "Bone Fractures", description: "Hip, spine, or wrist fracture", avgSettlement: 150000, multiplier: 2.0 },
];

export const PPI_DRUGS = [
    { id: "nexium", name: "Nexium (esomeprazole)", multiplier: 1.2 },
    { id: "prilosec", name: "Prilosec (omeprazole)", multiplier: 1.1 },
    { id: "prevacid", name: "Prevacid (lansoprazole)", multiplier: 1.1 },
    { id: "protonix", name: "Protonix (pantoprazole)", multiplier: 1.0 },
    { id: "other", name: "Other PPI", multiplier: 1.0 },
];

export const PPI_2026 = {
    statistics: {
        manufacturers: "AstraZeneca, Pfizer, Takeda",
        annualUsers: "15 Million+",
        kidneyRisk: "50% Higher",
        status: "Active Litigation",
    },
    citations: [
        "FDA Drug Safety Communication - PPI Kidney Disease Risk",
        "JAMA Study - Proton Pump Inhibitors and Chronic Kidney Disease",
    ],
};

export const CALCULATORS = [
    { id: "ppi/calculator", name: "Settlement Calculator", description: "Estimate PPI claim value", icon: Calculator, featured: true },
    { id: "ppi/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the PPI lawsuit about?", answer: "PPI lawsuits allege that manufacturers of heartburn drugs like Nexium, Prilosec, and Prevacid failed to adequately warn about kidney disease, bone fracture, and other serious risks from long-term use." },
    { question: "What are PPIs?", answer: "Proton Pump Inhibitors (PPIs) are drugs that reduce stomach acid. They include Nexium, Prilosec, Prevacid, Protonix, and others. They are among the most widely used medications, with over 15 million users annually." },
    { question: "What injuries are linked to PPIs?", answer: "Studies link long-term PPI use to chronic kidney disease (50% higher risk), acute kidney injury, bone fractures (hip, spine, wrist), low magnesium, C. diff infections, and possibly stomach cancer." },
    { question: "Who qualifies for a PPI lawsuit?", answer: "Patients who took PPIs for extended periods and developed kidney disease, kidney failure requiring dialysis, or serious bone fractures may qualify. Duration of use and severity of injury are key factors." },
    { question: "What is the average settlement?", answer: "Settlement values vary based on injury type. Kidney failure requiring dialysis may receive $300,000-$500,000+. Bone fractures may receive $100,000-$200,000. Cases are still being litigated." },
];

export function calculatePPISettlement(
    injuryType: string,
    ppiDrug: string,
    medicalExpenses: number,
    yearsOnDrug: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const drug = PPI_DRUGS.find(d => d.id === ppiDrug) || PPI_DRUGS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = yearsOnDrug > 3 ? 1.2 : yearsOnDrug > 1 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * drug.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        ppiDrug: drug.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
