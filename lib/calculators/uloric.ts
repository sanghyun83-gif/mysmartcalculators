// ============================================
// ULORIC HEART LAWSUIT CALCULATOR
// 2026 Gout Medication Cardiovascular Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Uloric Lawsuit Calculator",
    tagline: "Free 2026 Gout Drug Heart Attack Settlement Estimator",
    description: "Calculate Uloric lawsuit settlements. Heart attack, stroke, cardiovascular death claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/uloric",
};

export const INJURY_TYPES = [
    { id: "death", name: "Cardiovascular Death", description: "Fatal heart attack or stroke", avgSettlement: 500000, multiplier: 5.0 },
    { id: "heart-attack", name: "Heart Attack", description: "Non-fatal myocardial infarction", avgSettlement: 300000, multiplier: 3.0 },
    { id: "stroke", name: "Stroke", description: "Ischemic or hemorrhagic stroke", avgSettlement: 350000, multiplier: 3.5 },
];

export const HOSPITALIZATION = [
    { id: "icu-extended", name: "ICU + Extended Hospital Stay", multiplier: 2.0 },
    { id: "icu-short", name: "ICU Stay (1-3 days)", multiplier: 1.7 },
    { id: "hospital", name: "Hospital Stay (no ICU)", multiplier: 1.4 },
    { id: "er-only", name: "ER Visit Only", multiplier: 1.0 },
];

export const ULORIC_2026 = {
    statistics: {
        manufacturer: "Takeda Pharmaceuticals",
        fdaWarning: "Black Box (2019)",
        deathRisk: "22% Higher",
        status: "Active Litigation",
    },
    citations: [
        "FDA Black Box Warning - Uloric Cardiovascular Death Risk (2019)",
        "CARES Trial - Cardiovascular Safety of Febuxostat vs Allopurinol",
    ],
};

export const CALCULATORS = [
    { id: "uloric/calculator", name: "Settlement Calculator", description: "Estimate Uloric claim value", icon: Calculator, featured: true },
    { id: "uloric/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Uloric lawsuit about?", answer: "Uloric lawsuits allege that Takeda failed to adequately warn about increased cardiovascular death risk. In 2019, the FDA required a black box warning after the CARES trial showed 22% higher cardiovascular death risk compared to allopurinol." },
    { question: "What is Uloric?", answer: "Uloric (febuxostat) is a medication used to treat gout by lowering uric acid levels. It was approved by the FDA in 2009 as an alternative to allopurinol. It was marketed to patients with kidney problems who couldn't take allopurinol." },
    { question: "What heart risks are linked to Uloric?", answer: "The CARES trial showed Uloric patients had a 22% higher rate of cardiovascular death, including heart attacks and strokes. The risk was particularly elevated in patients with existing heart conditions." },
    { question: "Who qualifies for an Uloric lawsuit?", answer: "Patients who took Uloric and suffered a heart attack, stroke, or cardiovascular death may qualify. The strongest cases involve patients not informed of the heart risks, especially those with prior heart conditions." },
    { question: "What is the average settlement?", answer: "Settlement values vary based on injury severity. Death cases may receive $400,000-$600,000+. Heart attack and stroke survivors may receive $200,000-$400,000 depending on severity and ongoing disability." },
];

export function calculateUloricSettlement(
    injuryType: string,
    hospitalization: string,
    medicalExpenses: number,
    monthsOnDrug: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const hospital = HOSPITALIZATION.find(h => h.id === hospitalization) || HOSPITALIZATION[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const durationBonus = monthsOnDrug > 12 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * hospital.multiplier * docsBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        hospitalization: hospital.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
