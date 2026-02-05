// ============================================
// DIALYSIS LAWSUIT CALCULATOR
// 2026 GranuFlo & Dialysis Injury Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Dialysis Lawsuit Calculator",
    tagline: "Free 2026 Dialysis Injury Settlement Estimator",
    description: "Calculate dialysis lawsuit settlements. GranuFlo deaths, dialyzer failure, negligent treatment claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/dialysis",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Patient death from dialysis complications", avgSettlement: 500000, multiplier: 5.0 },
    { id: "cardiac-arrest", name: "Cardiac Arrest", description: "Heart attack during/after treatment", avgSettlement: 300000, multiplier: 3.5 },
    { id: "infection", name: "Bloodstream Infection", description: "Catheter or dialyzer infection", avgSettlement: 150000, multiplier: 2.0 },
];

export const CAUSE_TYPES = [
    { id: "granuflo", name: "GranuFlo/NaturaLyte", description: "Bicarbonate solution issue", multiplier: 1.5 },
    { id: "equipment", name: "Dialyzer/Equipment Failure", description: "Machine malfunction", multiplier: 1.3 },
    { id: "negligence", name: "Staff Negligence", description: "Improper treatment/monitoring", multiplier: 1.2 },
    { id: "infection-source", name: "Infection Protocol Failure", description: "Contamination or hygiene issue", multiplier: 1.4 },
];

export const DIALYSIS_2026 = {
    statistics: {
        granuFloSettlement: "$250M (2016)",
        annualPatients: "550,000+",
        facilitiesUS: "7,500+",
        status: "Individual Lawsuits Ongoing",
    },
    citations: [
        "FDA Class I Recall - GranuFlo/NaturaLyte Dialysate Products",
        "CMS Dialysis Facility Safety Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "dialysis/calculator", name: "Settlement Calculator", description: "Estimate dialysis claim value", icon: Calculator, featured: true },
    { id: "dialysis/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the dialysis lawsuit about?", answer: "Dialysis lawsuits allege that dialysis centers caused patient harm through defective products (like GranuFlo), equipment failures, staff negligence, or infection control failures. Many involve deaths or serious cardiac events." },
    { question: "What was the GranuFlo recall?", answer: "GranuFlo and NaturaLyte were dialysate solutions recalled in 2012 after Fresenius internal data showed they increased cardiac arrest risk by 6-8 times. The products were linked to hundreds of patient deaths." },
    { question: "What injuries occur from dialysis malpractice?", answer: "Common injuries include cardiac arrest during treatment, bloodstream infections from catheters, air embolism, severe hypotension, hemolysis (blood cell destruction), and wrongful death." },
    { question: "Who can be sued in dialysis cases?", answer: "Defendants may include dialysis centers (DaVita, Fresenius), equipment manufacturers, dialysate solution makers, individual healthcare providers, and hospitals if dialysis was provided there." },
    { question: "What is the average dialysis settlement?", answer: "Settlement values vary widely. Wrongful death cases may receive $300,000-$1M+. Serious injury cases like cardiac arrest may receive $150,000-$400,000. GranuFlo cases settled for higher amounts." },
];

export function calculateDialysisSettlement(
    injuryType: string,
    causeType: string,
    medicalExpenses: number,
    treatmentYears: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = CAUSE_TYPES.find(c => c.id === causeType) || CAUSE_TYPES[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const yearsBonus = treatmentYears > 5 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * docsBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        causeType: cause.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
