// ============================================
// ESCALATOR INJURY LAWSUIT CALCULATOR
// 2026 Premises Liability Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Escalator Injury Calculator",
    tagline: "Free 2026 Escalator Injury Settlement Estimator",
    description: "Calculate escalator injury lawsuit settlements. Falls, entrapment, step defects, handrail injuries. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/escalator-injury",
};

export const INJURY_TYPES = [
    { id: "amputation", name: "Amputation / Crush Injury", description: "Limb loss from entrapment", avgSettlement: 750000, multiplier: 5.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from falls", avgSettlement: 150000, multiplier: 2.5 },
    { id: "head-trauma", name: "Head Trauma / TBI", description: "Head injury from falls", avgSettlement: 400000, multiplier: 4.0 },
    { id: "lacerations", name: "Severe Lacerations", description: "Cuts from sharp edges", avgSettlement: 60000, multiplier: 1.8 },
];

export const ACCIDENT_CAUSES = [
    { id: "step-defect", name: "Step Defect / Missing Comb Teeth", multiplier: 1.4 },
    { id: "entrapment", name: "Foot/Clothing Entrapment", multiplier: 1.45 },
    { id: "sudden-stop", name: "Sudden Stop / Jerk", multiplier: 1.25 },
    { id: "handrail-failure", name: "Handrail Speed Mismatch", multiplier: 1.2 },
];

export const ESCALATOR_2026 = {
    statistics: {
        injuries: "10,000+ Injuries/Year",
        deaths: "30+ Deaths/Year",
        source: "CPSC Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Escalator Report 2026",
        "ASME A17.1 Escalator Safety Code Standards",
    ],
};

export const CALCULATORS = [
    { id: "escalator-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "escalator-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is an escalator injury lawsuit?", answer: "Escalator injury lawsuits seek compensation for injuries caused by defective escalators, poor maintenance, or inadequate safety measures. Claims can target building owners, property managers, and escalator manufacturers." },
    { question: "What causes escalator accidents?", answer: "Common causes include missing comb teeth, entrapment of shoes/clothing, sudden stops, handrail speed mismatches, worn steps, and inadequate maintenance. Children and elderly are at highest risk." },
    { question: "Who is liable for escalator injuries?", answer: "Potential defendants include building owners, property managers, escalator manufacturers (Otis, Schindler, Kone), and maintenance companies. Multiple parties often share responsibility." },
    { question: "Can I sue for a child's escalator injury?", answer: "Yes. Children are frequently injured on escalators due to entrapment of small feet and fingers. Crocs-type shoes are particularly dangerous. Parents can file claims on behalf of minors." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-4 years). Claims against government-owned buildings may have shorter notice requirements. Evidence can disappear quickly, so consult an attorney promptly." },
];

export function calculateEscalatorSettlement(
    injuryType: string,
    accidentCause: string,
    medicalExpenses: number,
    maintenanceNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const negligenceBonus = maintenanceNegligence ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentCause: cause.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
