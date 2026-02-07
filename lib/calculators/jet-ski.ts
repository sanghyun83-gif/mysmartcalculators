// ============================================
// JET SKI ACCIDENT LAWSUIT CALCULATOR
// 2026 PWC Personal Injury Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Jet Ski Accident Calculator",
    tagline: "Free 2026 Jet Ski Settlement Estimator",
    description: "Calculate jet ski accident lawsuit settlements. PWC collision, drowning, rental injury claims. Based on 2026 maritime data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/jet-ski",
};

export const INJURY_TYPES = [
    { id: "drowning-death", name: "Drowning / Wrongful Death", description: "Fatal jet ski accident claims", avgSettlement: 700000, multiplier: 5.0 },
    { id: "collision-trauma", name: "Collision Trauma", description: "Blunt force impact injuries", avgSettlement: 350000, multiplier: 3.5 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Paralysis or nerve damage from impact", avgSettlement: 550000, multiplier: 4.5 },
    { id: "broken-bones", name: "Broken Bones / Fractures", description: "Multiple fractures or compound breaks", avgSettlement: 175000, multiplier: 2.5 },
];

export const ACCIDENT_CAUSES = [
    { id: "operator-negligence", name: "Operator Negligence", multiplier: 1.3 },
    { id: "rental-defect", name: "Rental Company Negligence", multiplier: 1.35 },
    { id: "collision", name: "PWC-to-PWC Collision", multiplier: 1.2 },
    { id: "ejection", name: "Rider Ejection", multiplier: 1.1 },
];

export const JETSKI_2026 = {
    statistics: {
        pwcDeaths: "92 PWC Deaths/Year",
        pwcInjuries: "804 PWC Injuries/Year",
        source: "USCG PWC Statistics",
    },
    citations: [
        "US Coast Guard Personal Watercraft Statistics 2026",
        "PWC Rental Liability Case Studies",
    ],
};

export const CALCULATORS = [
    { id: "jet-ski/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "jet-ski/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a jet ski accident lawsuit?", answer: "Jet ski (PWC) accident lawsuits seek compensation for injuries caused by negligent operators, defective watercraft, or negligent rental companies. These accidents often result in severe injuries due to high speeds and lack of protection." },
    { question: "What makes jet ski accidents dangerous?", answer: "Jet skis operate at high speeds (up to 65+ mph) with no brakes and no protection for riders. Common causes include operator inexperience, alcohol use, and failure to maintain proper lookout." },
    { question: "Who can be liable in a jet ski accident?", answer: "Potential defendants include the jet ski operator, owner, rental company, manufacturer (for defects), marina, or other watercraft operators involved in collisions." },
    { question: "Can I sue a rental company?", answer: "Yes. Rental companies can be liable for inadequate safety training, renting to inexperienced operators, failing to maintain equipment, or renting defective watercraft." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, disability costs, wrongful death damages, and disfigurement from collision injuries." },
];

export function calculateJetSkiSettlement(
    injuryType: string,
    accidentCause: string,
    medicalExpenses: number,
    rentalInvolved: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const rentalBonus = rentalInvolved ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * rentalBonus * docsBonus;
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
