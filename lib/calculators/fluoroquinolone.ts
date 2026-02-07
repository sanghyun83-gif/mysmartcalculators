// ============================================
// FLUOROQUINOLONE LAWSUIT CALCULATOR
// 2026 Tendon Rupture/Nerve Damage Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Fluoroquinolone Lawsuit Calculator",
    tagline: "Free 2026 Fluoroquinolone Settlement Estimator",
    description: "Calculate fluoroquinolone antibiotic lawsuit settlements. Tendon rupture, nerve damage, Cipro/Levaquin claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/fluoroquinolone",
};

export const INJURY_TYPES = [
    { id: "tendon-rupture", name: "Tendon Rupture", description: "Achilles or other tendon rupture", avgSettlement: 300000, multiplier: 4.0 },
    { id: "peripheral-neuropathy", name: "Peripheral Neuropathy", description: "Permanent nerve damage", avgSettlement: 275000, multiplier: 3.5 },
    { id: "aortic-dissection", name: "Aortic Dissection/Aneurysm", description: "Life-threatening cardiovascular damage", avgSettlement: 500000, multiplier: 5.0 },
];

export const DRUG_TYPES = [
    { id: "cipro", name: "Ciprofloxacin (Cipro)", multiplier: 1.2 },
    { id: "levaquin", name: "Levofloxacin (Levaquin)", multiplier: 1.25 },
    { id: "avelox", name: "Moxifloxacin (Avelox)", multiplier: 1.15 },
    { id: "other", name: "Other Fluoroquinolone", multiplier: 1.0 },
];

export const FLUOROQUINOLONE_2026 = {
    statistics: {
        status: "FDA Black Box Warning",
        issue: "Tendon, Nerve, Aortic",
        lawsuits: "Ongoing Litigation",
    },
    citations: [
        "FDA Black Box Warning - Fluoroquinolone Antibiotics",
        "Fluoroquinolone Tendon Rupture Litigation 2026",
    ],
};

export const CALCULATORS = [
    { id: "fluoroquinolone/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "fluoroquinolone/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a fluoroquinolone lawsuit?", answer: "Fluoroquinolone lawsuits allege that antibiotics like Cipro, Levaquin, and Avelox cause serious side effects including tendon rupture, peripheral neuropathy, and aortic damage that were not adequately warned about." },
    { question: "What is the FDA Black Box Warning?", answer: "The FDA has issued multiple Black Box warnings for fluoroquinolones regarding tendon rupture, peripheral neuropathy, and aortic aneurysm/dissection risk." },
    { question: "Who can file a fluoroquinolone lawsuit?", answer: "Anyone who took fluoroquinolone antibiotics (Cipro, Levaquin, Avelox, etc.) and developed tendon rupture, nerve damage, or aortic problems may qualify." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, surgery costs, and long-term disability damages." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-6 years from injury discovery. Consult an attorney promptly to preserve your rights." },
];

export function calculateFluoroquinoloneSettlement(
    injuryType: string,
    drugType: string,
    medicalExpenses: number,
    hadSurgery: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const drug = DRUG_TYPES.find(d => d.id === drugType) || DRUG_TYPES[0];

    const surgeryBonus = hadSurgery ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * drug.multiplier * surgeryBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        drugType: drug.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
