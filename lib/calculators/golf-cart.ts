// ============================================
// GOLF CART ACCIDENT LAWSUIT CALCULATOR
// 2026 Low-Speed Vehicle Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Golf Cart Accident Calculator",
    tagline: "Free 2026 Golf Cart Settlement Estimator",
    description: "Calculate golf cart accident lawsuit settlements. Rollover, ejection, resort injury claims. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/golf-cart",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal golf cart accident claims", avgSettlement: 650000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from ejection/rollover", avgSettlement: 400000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Paralysis from rollover", avgSettlement: 500000, multiplier: 4.5 },
    { id: "fractures", name: "Broken Bones / Fractures", description: "Multiple fractures from falls", avgSettlement: 150000, multiplier: 2.5 },
];

export const ACCIDENT_LOCATIONS = [
    { id: "resort", name: "Resort / Hotel Property", multiplier: 1.35 },
    { id: "golf-course", name: "Golf Course", multiplier: 1.2 },
    { id: "retirement-community", name: "Retirement Community", multiplier: 1.25 },
    { id: "private-property", name: "Private Property", multiplier: 1.1 },
];

export const GOLFCART_2026 = {
    statistics: {
        injuries: "15,000+ ER Visits/Year",
        deaths: "40+ Deaths/Year",
        source: "CPSC Statistics",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) Golf Cart Report 2026",
        "Golf Cart & LSV Premises Liability Case Studies",
    ],
};

export const CALCULATORS = [
    { id: "golf-cart/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "golf-cart/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a golf cart accident lawsuit?", answer: "Golf cart accident lawsuits seek compensation for injuries caused by negligent operators, defective carts, or property owner negligence. Claims often target resorts, golf courses, or retirement communities." },
    { question: "What makes golf carts dangerous?", answer: "Golf carts lack basic safety features: no seat belts, doors, airbags, or crash protection. They can reach 20+ mph and tip over easily on uneven terrain or sharp turns." },
    { question: "Who can be liable in a golf cart accident?", answer: "Potential defendants include cart operators, property owners (resorts, golf courses), cart manufacturers, rental companies, and maintenance providers." },
    { question: "Can I sue a resort for a golf cart injury?", answer: "Yes. Resorts and golf courses may be liable for poorly maintained carts, inadequate safety training, dangerous paths, or allowing underage or intoxicated operation." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, rehabilitation costs, lost wages, pain and suffering, disability, wrongful death damages, and permanent scarring." },
];

export function calculateGolfCartSettlement(
    injuryType: string,
    accidentLocation: string,
    medicalExpenses: number,
    propertyOwnerNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const location = ACCIDENT_LOCATIONS.find(l => l.id === accidentLocation) || ACCIDENT_LOCATIONS[0];

    const negligenceBonus = propertyOwnerNegligence ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * location.multiplier * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentLocation: location.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
