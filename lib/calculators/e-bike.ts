// ============================================
// E-BIKE ACCIDENT LAWSUIT CALCULATOR
// 2026 Electric Bicycle Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "E-Bike Accident Calculator",
    tagline: "Free 2026 E-Bike Settlement Estimator",
    description: "Calculate e-bike accident lawsuit settlements. Class 1/2/3 e-bikes, battery defects, vehicle collision claims. Based on 2026 CPSC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/e-bike",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal e-bike accident claims", avgSettlement: 750000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from collisions", avgSettlement: 450000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Paralysis from high-speed crashes", avgSettlement: 550000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from impact", avgSettlement: 150000, multiplier: 2.5 },
];

export const ACCIDENT_CAUSES = [
    { id: "vehicle-collision", name: "Motor Vehicle Collision", multiplier: 1.35 },
    { id: "battery-fire", name: "Battery Fire / Explosion", multiplier: 1.5 },
    { id: "defective-brakes", name: "Defective Brakes", multiplier: 1.4 },
    { id: "road-hazard", name: "Road Hazard", multiplier: 1.2 },
];

export const EBIKE_2026 = {
    statistics: {
        injuries: "45,000+ ER Visits/Year",
        deaths: "90+ Deaths/Year",
        source: "CPSC Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) E-Bike Report 2026",
        "NHTSA Electric Bicycle Safety Data 2026",
    ],
};

export const CALCULATORS = [
    { id: "e-bike/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "e-bike/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is an e-bike accident lawsuit?", answer: "E-bike accident lawsuits seek compensation for injuries caused by defective e-bikes, negligent drivers, or dangerous road conditions. Claims can target manufacturers, retailers, or other motorists." },
    { question: "Are e-bikes more dangerous than regular bikes?", answer: "Yes. E-bikes travel at higher speeds (up to 28 mph for Class 3) and are heavier. Studies show e-bike accidents result in more severe injuries than traditional bicycle accidents." },
    { question: "Can I sue for a battery fire?", answer: "Yes. E-bike battery fires and explosions have led to numerous product liability lawsuits. Manufacturers can be liable for defective batteries or inadequate charging systems." },
    { question: "What if a car hit me while riding?", answer: "You can file a claim against the driver's insurance. E-bike riders have similar rights to cyclists and may recover damages for medical expenses, lost wages, and pain and suffering." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, rehabilitation costs, lost wages, pain and suffering, disability, helmet replacement, and bike repair or replacement costs." },
];

export function calculateEBikeSettlement(
    injuryType: string,
    accidentCause: string,
    medicalExpenses: number,
    woreHelmet: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const helmetBonus = woreHelmet ? 1.0 : 0.85;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * helmetBonus * docsBonus;
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
