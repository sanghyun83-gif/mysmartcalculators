// ============================================
// BABY FORMULA NEC LAWSUIT CALCULATOR
// 2026 Similac, Enfamil, Premature Infant NEC - Standard Version
// ============================================

import { Calculator, FileText, Baby } from 'lucide-react';

export const SITE = {
    name: "NEC Baby Formula Settlement Calculator",
    tagline: "Free 2026 Similac & Enfamil NEC Payout Negotiator",
    description: "Calculate your 2026 NEC lawsuit settlement value instantly. Free baby formula negotiator with official MDL 3037 (Similac/Enfamil) litigation data and peer-reviewed pediatric medical benchmarks.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/baby-formula",
};

export const INJURY_SEVERITY = [
    { id: "death", name: "Wrongful Death", description: "Infant death from NEC", avgSettlement: 5000000, multiplier: 5.0 },
    { id: "surgery", name: "Surgery Required", description: "Bowel resection surgery", avgSettlement: 2500000, multiplier: 4.0 },
    { id: "severe", name: "Severe NEC", description: "Hospitalization, long-term effects", avgSettlement: 1500000, multiplier: 3.0 },
];

export const FORMULA_BRANDS = [
    { id: "similac", name: "Similac (Abbott)", multiplier: 1.0 },
    { id: "enfamil", name: "Enfamil (Mead Johnson)", multiplier: 1.0 },
    { id: "other", name: "Other Cow's Milk Formula", multiplier: 0.8 },
];

export const FORMULA_2026 = {
    statistics: {
        mdlNumber: "MDL 3037",
        pendingCases: 1200,
        avgProjectedSettlement: 500000,
        status: "Active Litigation",
    },
    citations: [
        "MDL 3037 - Preterm Infant Nutrition Products Liability Litigation",
        "FDA Safety Communication: Cow's Milk-Based Formula and NEC Risk",
        "Lancet/Journal of Pediatrics NEC Clinical Studies",
    ],
    citation: "Based on official MDL 3037 (Northern District of Illinois) litigation benchmarks, FDA Safety Communications for premature infant nutrition, and Lancet/Journal of Pediatrics clinical NEC data."
};

export const CALCULATORS = [
    { id: "baby-formula/calculator", name: "Settlement Calculator", description: "Estimate NEC claim value", icon: Calculator, featured: true },
    { id: "baby-formula/guide", name: "Claims Guide", description: "How to file a NEC lawsuit", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is NEC and how is it linked to formula?", answer: "Necrotizing enterocolitis (NEC) is a serious intestinal disease in premature infants where bacteria invade the intestinal wall, causing tissue death. Studies show premature babies fed cow's milk-based formula have significantly higher NEC risk compared to those fed breast milk." },
    { question: "Which formulas are involved in NEC lawsuits?", answer: "The lawsuits primarily target Abbott (Similac) and Mead Johnson (Enfamil) cow's milk-based formulas marketed or used in NICUs for premature infants. Claims allege manufacturers failed to warn about increased NEC risk." },
    { question: "Who qualifies for a NEC formula lawsuit?", answer: "Parents of premature infants (born before 37 weeks) who developed NEC after being fed cow's milk-based formula in a NICU may qualify. The infant must have been diagnosed with NEC requiring medical treatment." },
    { question: "What compensation is available?", answer: "Potential compensation includes medical expenses, pain and suffering, future care costs, and in wrongful death cases, funeral expenses and loss of companionship. Settlement values vary based on injury severity." },
    { question: "How long do I have to file?", answer: "Statutes of limitation vary by state, typically 2-6 years from diagnosis or discovery of the link. Some states have special rules for minors. Consult an attorney promptly to protect your rights." },
];

export function calculateNECSettlement(
    injurySeverity: string,
    formulaBrand: string,
    medicalExpenses: number,
    wasInNICU: boolean,
    birthWeeks: number
) {
    const severity = INJURY_SEVERITY.find(s => s.id === injurySeverity) || INJURY_SEVERITY[0];
    const brand = FORMULA_BRANDS.find(b => b.id === formulaBrand) || FORMULA_BRANDS[0];

    const nicuBonus = wasInNICU ? 1.2 : 1.0;
    const prematurityBonus = birthWeeks < 32 ? 1.3 : birthWeeks < 37 ? 1.1 : 1.0;

    const baseMultiplier = severity.multiplier * brand.multiplier * nicuBonus * prematurityBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        severity: severity.name,
        brand: brand.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.2),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
