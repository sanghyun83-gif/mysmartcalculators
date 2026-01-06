// ============================================
// NEC FORMULA LAWSUIT CALCULATOR
// 2026 Necrotizing Enterocolitis, Premature Infants - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "NEC Formula Lawsuit Calculator",
    tagline: "Free 2026 Necrotizing Enterocolitis Settlement Estimator",
    description: "Calculate NEC formula lawsuit settlements. Similac, Enfamil, premature infant necrotizing enterocolitis claims. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/nec-formula",
};

export const NEC_SEVERITY = [
    { id: "death", name: "Wrongful Death", description: "Infant death from NEC", avgSettlement: 1000000, multiplier: 5.0 },
    { id: "surgery", name: "Surgery Required", description: "Bowel resection surgery", avgSettlement: 500000, multiplier: 3.5 },
    { id: "hospitalization", name: "Extended Hospitalization", description: "NICU treatment, recovery", avgSettlement: 200000, multiplier: 2.0 },
];

export const FORMULA_USED = [
    { id: "similac", name: "Similac (Abbott)", multiplier: 1.2 },
    { id: "enfamil", name: "Enfamil (Mead Johnson)", multiplier: 1.2 },
    { id: "both", name: "Both Brands", multiplier: 1.3 },
    { id: "other", name: "Other Formula", multiplier: 1.0 },
];

export const NEC_2026 = {
    statistics: {
        mdlNumber: "MDL 3026",
        court: "Northern District of Illinois",
        pendingCases: 900,
        status: "Active Litigation - Bellwether 2026",
    },
    citations: [
        "NEC Baby Formula MDL 3026 - N.D. Illinois",
        "FDA Notice on Cow's Milk-Based Formula for Premature Infants",
    ],
};

export const CALCULATORS = [
    { id: "nec-formula/calculator", name: "Settlement Calculator", description: "Estimate NEC claim value", icon: Calculator, featured: true },
    { id: "nec-formula/guide", name: "Claims Guide", description: "How to file a NEC lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is NEC and how does formula cause it?", answer: "NEC (Necrotizing Enterocolitis) is a devastating intestinal disease affecting premature infants. Research shows cow's milk-based formulas like Similac and Enfamil significantly increase NEC risk in preemies compared to breast milk." },
    { question: "Who can file a NEC lawsuit?", answer: "Parents of premature infants (born before 37 weeks) who were fed Similac or Enfamil cow's milk-based formula in the NICU and developed NEC may qualify. Cases involving surgery or death have the strongest claims." },
    { question: "What is MDL 3026?", answer: "MDL 3026 consolidates NEC formula lawsuits in the Northern District of Illinois. Abbott (Similac) and Mead Johnson/Reckitt (Enfamil) are defendants. Bellwether trials are scheduled for 2026." },
    { question: "What compensation is available?", answer: "Settlement values depend on NEC severity. Cases requiring bowel surgery may receive $300,000-$600,000. Wrongful death cases could exceed $1 million. No global settlement has been announced yet." },
    { question: "What evidence do I need?", answer: "Key evidence includes NICU records showing formula feeding, NEC diagnosis, surgical records if applicable, and medical bills. Records showing the infant was premature are essential." },
];

export function calculateNECSettlement(
    severity: string,
    formulaUsed: string,
    medicalExpenses: number,
    hadSurgery: boolean,
    birthWeeks: number
) {
    const sev = NEC_SEVERITY.find(s => s.id === severity) || NEC_SEVERITY[0];
    const formula = FORMULA_USED.find(f => f.id === formulaUsed) || FORMULA_USED[0];

    const surgeryBonus = hadSurgery ? 1.5 : 1.0;
    const prematurityBonus = birthWeeks < 32 ? 1.3 : birthWeeks < 37 ? 1.1 : 1.0;

    const baseMultiplier = sev.multiplier * formula.multiplier * surgeryBonus * prematurityBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        severity: sev.name,
        formulaUsed: formula.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
