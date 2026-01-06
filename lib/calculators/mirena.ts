// ============================================
// MIRENA IUD LAWSUIT CALCULATOR
// 2026 IUD Complications - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Mirena IUD Lawsuit Calculator",
    tagline: "Free 2026 IUD Complication Settlement Estimator",
    description: "Calculate Mirena IUD lawsuit settlements. Device migration, uterine perforation, Pseudotumor Cerebri claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/mirena",
};

export const INJURY_TYPES = [
    { id: "perforation", name: "Uterine Perforation", description: "IUD penetrated uterine wall", avgSettlement: 150000, multiplier: 3.0 },
    { id: "migration", name: "Device Migration", description: "IUD moved from placement", avgSettlement: 100000, multiplier: 2.0 },
    { id: "ptc", name: "Pseudotumor Cerebri (IIH)", description: "Increased intracranial pressure", avgSettlement: 200000, multiplier: 3.5 },
];

export const SURGERY_REQUIRED = [
    { id: "laparoscopy", name: "Laparoscopic Removal", multiplier: 1.8 },
    { id: "laparotomy", name: "Open Surgery (Laparotomy)", multiplier: 2.5 },
    { id: "hysterectomy", name: "Hysterectomy Required", multiplier: 3.0 },
    { id: "office", name: "Office Removal Only", multiplier: 1.0 },
];

export const MIRENA_2026 = {
    statistics: {
        manufacturer: "Bayer",
        usersWorldwide: "10+ Million",
        fdaApproved: "2000",
        status: "Individual Lawsuits Ongoing",
    },
    citations: [
        "FDA MAUDE Database - Mirena IUD Adverse Events",
        "Bayer Mirena Product Liability Litigation",
    ],
};

export const CALCULATORS = [
    { id: "mirena/calculator", name: "Settlement Calculator", description: "Estimate Mirena IUD claim value", icon: Calculator, featured: true },
    { id: "mirena/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is the Mirena lawsuit about?", answer: "Mirena lawsuits allege that Bayer failed to adequately warn women about serious risks including device migration, uterine perforation, and Pseudotumor Cerebri (idiopathic intracranial hypertension)." },
    { question: "What is Pseudotumor Cerebri?", answer: "Pseudotumor Cerebri (PTC), now called Idiopathic Intracranial Hypertension (IIH), causes increased pressure in the skull. Symptoms include severe headaches, vision problems, and papilledema. Some cases are linked to levonorgestrel IUDs like Mirena." },
    { question: "What injuries are associated with Mirena?", answer: "Common injuries include uterine perforation during insertion, device migration to other organs, ectopic pregnancy, infection, and Pseudotumor Cerebri. Some women require surgery to remove migrated devices." },
    { question: "Who qualifies for a Mirena lawsuit?", answer: "Women who had a Mirena IUD and experienced perforation, migration requiring surgery, or developed Pseudotumor Cerebri may qualify. You must document the IUD placement and subsequent injury." },
    { question: "What is the average Mirena settlement?", answer: "Settlement values vary based on injury severity. Cases requiring surgery for perforation or migration may receive $75,000-$200,000. Pseudotumor Cerebri cases with vision loss can be worth more." },
];

export function calculateMirenaSettlement(
    injuryType: string,
    surgeryRequired: string,
    medicalExpenses: number,
    yearsWithDevice: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const surgery = SURGERY_REQUIRED.find(s => s.id === surgeryRequired) || SURGERY_REQUIRED[0];

    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const yearsBonus = yearsWithDevice < 2 ? 1.2 : 1.0;

    const baseMultiplier = injury.multiplier * surgery.multiplier * docsBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        surgeryRequired: surgery.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
