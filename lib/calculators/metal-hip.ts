// ============================================
// METAL-ON-METAL HIP LAWSUIT CALCULATOR
// 2026 MoM Hip Implant Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "Metal-on-Metal Hip Lawsuit Calculator",
    tagline: "Free 2026 MoM Hip Implant Settlement Estimator",
    description: "Calculate metal-on-metal hip lawsuit settlements. Cobalt poisoning, metallosis, revision surgery claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/metal-hip",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hip implant replaced due to failure", avgSettlement: 375000, multiplier: 3.75 },
    { id: "metallosis", name: "Metallosis", description: "Metal debris in tissue", avgSettlement: 325000, multiplier: 3.25 },
    { id: "cobalt-poisoning", name: "Cobalt/Chromium Poisoning", description: "Systemic metal toxicity", avgSettlement: 350000, multiplier: 3.5 },
    { id: "pseudotumor", name: "Pseudotumor / ALVAL", description: "Inflammatory tissue mass", avgSettlement: 275000, multiplier: 2.75 },
    { id: "bone-damage", name: "Bone Damage / Osteolysis", description: "Bone loss around implant", avgSettlement: 250000, multiplier: 2.5 },
];

export const MOM_MANUFACTURERS = [
    { id: "depuy", name: "DePuy (J&J)", multiplier: 1.3 },
    { id: "stryker", name: "Stryker", multiplier: 1.25 },
    { id: "zimmer", name: "Zimmer Biomet", multiplier: 1.2 },
    { id: "smith-nephew", name: "Smith & Nephew", multiplier: 1.15 },
    { id: "wright", name: "Wright Medical", multiplier: 1.1 },
    { id: "other", name: "Other Manufacturer", multiplier: 1.0 },
];

export const METAL_LEVELS = [
    { id: "very-high", name: "Very High (>10 ppb)", multiplier: 1.4 },
    { id: "high", name: "High (5-10 ppb)", multiplier: 1.25 },
    { id: "moderate", name: "Moderate (2-5 ppb)", multiplier: 1.1 },
    { id: "unknown", name: "Unknown / Not Tested", multiplier: 1.0 },
];

export const MOM_2026 = {
    statistics: {
        affectedPatients: "500,000+",
        totalSettlements: "$10 Billion+",
        failureRate: "Up to 15%",
        status: "Ongoing Litigation",
    },
    citations: [
        "FDA Safety Communication - Metal-on-Metal Hip Implants (2019)",
        "AAOS Clinical Practice Guidelines - Metal-on-Metal Bearings",
        "Multiple MDL Proceedings - DePuy, Stryker, Zimmer Hip Litigation",
    ],
};

export const CALCULATORS = [
    { id: "metal-hip/calculator", name: "Settlement Calculator", description: "Estimate MoM hip claim value", icon: Calculator, featured: true },
    { id: "metal-hip/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "metal-hip/manufacturers", name: "Manufacturers", description: "MoM implant companies", icon: Scale, featured: false },
    { id: "metal-hip/symptoms", name: "Symptoms", description: "Metal toxicity signs", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is the metal-on-metal hip lawsuit about?", answer: "Metal-on-metal hip lawsuits allege that manufacturers sold defective hip implants with metal bearing surfaces that release cobalt and chromium particles, causing metallosis, bone damage, and systemic poisoning." },
    { question: "What is a metal-on-metal hip implant?", answer: "MoM hip implants use metal (cobalt-chromium alloy) for both the ball and socket components. This design releases metal debris as surfaces wear, unlike ceramic or polyethylene alternatives." },
    { question: "What is metallosis?", answer: "Metallosis is metal poisoning from metal particles shed by MoM implants. Particles accumulate in tissue and bloodstream, causing tissue death, bone loss, and systemic effects throughout the body." },
    { question: "What are symptoms of cobalt poisoning?", answer: "Cobalt poisoning symptoms include neurological problems (memory, vision, hearing), heart issues (cardiomyopathy), thyroid dysfunction, depression, and general fatigue and weakness." },
    { question: "Which manufacturers are involved?", answer: "Major defendants include DePuy (J&J), Stryker, Zimmer Biomet, Smith & Nephew, and Wright Medical. Each has faced significant litigation over MoM hip designs." },
    { question: "Who qualifies for a lawsuit?", answer: "Patients with metal-on-metal hip implants who experienced revision surgery, elevated metal levels in blood, metallosis, pseudotumors, or other complications may qualify for compensation." },
    { question: "How are settlements calculated?", answer: "Settlement values depend on injury severity, manufacturer, blood metal levels, number of revision surgeries, and documented complications. Cases requiring multiple surgeries receive higher compensation." },
    { question: "What is a blood metal test?", answer: "Blood metal tests measure cobalt and chromium levels. Levels above 7 ppb (parts per billion) are concerning. Very high levels (>10 ppb) indicate significant metal release and strengthen claims." },
    { question: "What is ALVAL?", answer: "ALVAL (Aseptic Lymphocyte-dominated Vasculitis-Associated Lesion) is an inflammatory reaction to metal debris that creates tissue masses similar to pseudotumors." },
    { question: "Is there a deadline to file?", answer: "Statutes of limitations vary by state. Many states have discovery rules allowing claims after injury discovery rather than implant date. Consult an attorney immediately." },
];

export function calculateMoMSettlement(
    injuryType: string,
    manufacturer: string,
    metalLevel: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hadRevisionSurgery: boolean,
    hasOngoingSymptoms: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const mfr = MOM_MANUFACTURERS.find(m => m.id === manufacturer) || MOM_MANUFACTURERS[0];
    const metal = METAL_LEVELS.find(m => m.id === metalLevel) || METAL_LEVELS[0];

    const revisionBonus = hadRevisionSurgery ? 1.3 : 1.0;
    const ongoingBonus = hasOngoingSymptoms ? 1.2 : 1.0;
    const durationBonus = yearsSinceImplant > 8 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * mfr.multiplier * metal.multiplier * revisionBonus * ongoingBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        manufacturer: mfr.name,
        metalLevel: metal.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
