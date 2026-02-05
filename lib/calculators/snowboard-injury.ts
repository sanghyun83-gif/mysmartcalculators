// ============================================
// SNOWBOARD INJURY LAWSUIT CALCULATOR
// 2026 Terrain Park Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Snowboard Injury Calculator",
    tagline: "Free 2026 Snowboard Injury Settlement Estimator",
    description: "Calculate snowboard injury lawsuit settlements. Terrain park, jump, lift accidents. Based on 2026 NSAA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/snowboard-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from jumps/falls", avgSettlement: 550000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Paralysis", description: "Catastrophic spine injuries", avgSettlement: 850000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Wrist, leg, ankle breaks", avgSettlement: 90000, multiplier: 2.5 },
    { id: "wrist", name: "Wrist / FOOSH Injury", description: "Common snowboard-specific injury", avgSettlement: 50000, multiplier: 2.0 },
];

export const ACCIDENT_TYPES = [
    { id: "terrain-park", name: "Terrain Park Feature", multiplier: 1.4 },
    { id: "lift", name: "Ski Lift Accident", multiplier: 1.6 },
    { id: "collision", name: "Collision with Object", multiplier: 1.3 },
    { id: "equipment", name: "Equipment Failure", multiplier: 1.35 },
];

export const SNOWBOARD_2026 = {
    statistics: {
        injuries: "600,000+ Injuries/Year",
        wristRate: "25% Are Wrist Injuries",
        source: "NSAA / CPSC Data",
    },
    citations: [
        "National Ski Areas Association (NSAA) Snowboard Safety Report 2026",
        "CPSC Sports Injury Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "snowboard-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "snowboard-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a snowboard injury lawsuit?", answer: "Snowboard injury lawsuits seek compensation for injuries at ski resorts, but face inherent risk defenses. Terrain park injuries are particularly complex due to additional waivers." },
    { question: "Are terrain park injuries covered?", answer: "Terrain parks often have separate waivers. However, negligent design, inadequate padding, or failure to maintain features properly can still create resort liability." },
    { question: "What about snowboard-specific injuries?", answer: "Wrist injuries (FOOSH - Fall On OutStretched Hand) account for 25% of snowboard injuries. Head injuries are also common. These injuries can be claimed if resort negligence contributed." },
    { question: "Can I sue for a ski lift accident?", answer: "Yes. Ski lifts are common carriers with higher safety standards. Resorts cannot waive liability for lift mechanical failures or operator errors. These are often the strongest claims." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Inherent risk laws may affect your claim. Consult an attorney promptly after your accident." },
];

export function calculateSnowboardSettlement(
    injuryType: string,
    accidentType: string,
    medicalExpenses: number,
    terrainParkAccident: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];

    const terrainBonus = terrainParkAccident ? 1.2 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * accident.multiplier * terrainBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentType: accident.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
