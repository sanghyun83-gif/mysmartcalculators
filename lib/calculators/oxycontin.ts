// ============================================
// OXYCONTIN LAWSUIT CALCULATOR
// 2026 Purdue Pharma Bankruptcy Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "OxyContin Lawsuit Calculator",
    tagline: "Free 2026 OxyContin Settlement Estimator",
    description: "Calculate OxyContin addiction lawsuit settlements. Purdue Pharma bankruptcy claims, Sackler family trust. Based on 2026 settlement data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/oxycontin",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death (Overdose)", description: "Fatal OxyContin overdose", avgSettlement: 500000, multiplier: 5.0 },
    { id: "addiction", name: "Addiction / Dependency", description: "Developed opioid use disorder", avgSettlement: 175000, multiplier: 3.0 },
    { id: "long-term-treatment", name: "Long-term Treatment", description: "Rehab, MAT, ongoing care", avgSettlement: 125000, multiplier: 2.5 },
    { id: "disability", name: "Disability from Addiction", description: "Unable to work due to addiction", avgSettlement: 200000, multiplier: 3.5 },
];

export const PRESCRIPTION_SOURCES = [
    { id: "pain-management", name: "Pain Management Clinic", multiplier: 1.3 },
    { id: "post-surgery", name: "Post-Surgical Pain", multiplier: 1.2 },
    { id: "chronic-pain", name: "Chronic Pain Treatment", multiplier: 1.25 },
    { id: "primary-care", name: "Primary Care Physician", multiplier: 1.1 },
    { id: "other", name: "Other Prescriber", multiplier: 1.0 },
];

export const TREATMENT_TYPES = [
    { id: "inpatient-rehab", name: "Inpatient Rehab", multiplier: 1.3 },
    { id: "outpatient", name: "Outpatient Treatment", multiplier: 1.1 },
    { id: "mat", name: "MAT (Suboxone/Methadone)", multiplier: 1.2 },
    { id: "none", name: "No Formal Treatment", multiplier: 1.0 },
];

export const OXYCONTIN_2026 = {
    statistics: {
        settlement: "$6B+ Purdue Trust",
        sackler: "$4.5B Sackler Contribution",
        deaths: "500,000+ OD Deaths",
        status: "Claims Processing",
    },
    citations: [
        "In Re: Purdue Pharma L.P. Bankruptcy Settlement",
        "Sackler Family Contribution to Opioid Abatement Trust",
        "CDC OxyContin Overdose Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "oxycontin/calculator", name: "Settlement Calculator", description: "Estimate OxyContin claim value", icon: Calculator, featured: true },
    { id: "oxycontin/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "oxycontin/purdue", name: "Purdue Settlement", description: "Bankruptcy trust details", icon: Scale, featured: false },
    { id: "oxycontin/treatment", name: "Treatment Costs", description: "Recovery expense data", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the OxyContin lawsuit?", answer: "OxyContin lawsuits allege that Purdue Pharma deceptively marketed OxyContin as less addictive than other opioids, leading to widespread addiction and hundreds of thousands of overdose deaths." },
    { question: "What is the Purdue Pharma settlement?", answer: "Purdue Pharma declared bankruptcy and agreed to a $6+ billion settlement. The Sackler family, who owned Purdue, contributed an additional $4.5+ billion to addiction treatment trusts." },
    { question: "Who can file an OxyContin claim?", answer: "Individuals who developed addiction after being prescribed OxyContin, families who lost loved ones to OxyContin overdose, and those who required extensive treatment may qualify for compensation." },
    { question: "How do I file a claim against Purdue?", answer: "Claims are filed through the Purdue Pharma bankruptcy trust. Claimants must provide evidence of OxyContin prescription, addiction development, and resulting damages." },
    { question: "What compensation is available?", answer: "Compensation from the bankruptcy trust varies based on injury severity, treatment costs, and whether there was a wrongful death. Amounts range from $3,500 to $750,000+." },
    { question: "What is the claims deadline?", answer: "Specific deadlines apply to different claim categories. Individual personal injury claims have extended deadlines through the bankruptcy trust process." },
    { question: "What evidence is needed?", answer: "Key evidence includes OxyContin prescription records, addiction diagnosis, treatment records, medical bills, and documentation of how addiction developed." },
    { question: "Who are the Sacklers?", answer: "The Sackler family owned Purdue Pharma. They agreed to contribute $4.5+ billion to the settlement after allegations they personally enriched themselves while fueling the opioid crisis." },
    { question: "Can I sue if a family member died?", answer: "Yes, wrongful death claims for OxyContin overdose are eligible for the highest compensation tiers in the bankruptcy trust distribution." },
    { question: "Will I get money from the settlement?", answer: "Qualified claimants will receive payments from the bankruptcy trust. The amount depends on injury tier, documentation, and total claims filed." },
];

export function calculateOxycontinSettlement(
    injuryType: string,
    prescriptionSource: string,
    treatmentType: string,
    treatmentCosts: number,
    hadOverdose: boolean,
    hasRxRecords: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const prescription = PRESCRIPTION_SOURCES.find(p => p.id === prescriptionSource) || PRESCRIPTION_SOURCES[0];
    const treatment = TREATMENT_TYPES.find(t => t.id === treatmentType) || TREATMENT_TYPES[0];

    const overdoseBonus = hadOverdose ? 1.4 : 1.0;
    const rxBonus = hasRxRecords ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * prescription.multiplier * treatment.multiplier * overdoseBonus * rxBonus * docsBonus;
    const painSuffering = Math.round(treatmentCosts * baseMultiplier);

    return {
        injuryType: injury.name,
        prescriptionSource: prescription.name,
        treatmentType: treatment.name,
        treatmentCosts,
        painSuffering,
        totalLow: Math.round((treatmentCosts + painSuffering) * 0.7),
        totalHigh: Math.round((treatmentCosts + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
