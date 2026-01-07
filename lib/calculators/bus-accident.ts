// ============================================
// BUS ACCIDENT LAWSUIT CALCULATOR
// 2026 Common Carrier Claims - Advanced Version
// ============================================

import { Calculator, FileText, Bus as BusIcon, AlertTriangle as AlertIcon } from 'lucide-react';

export const SITE = {
    name: "Bus Accident Calculator",
    tagline: "Free 2026 Bus Accident Settlement Estimator",
    description: "Calculate bus accident lawsuit settlements. Public transit, school bus, charter bus injury claims. Based on 2026 NHTSA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bus-accident",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal bus accident claims", avgSettlement: 850000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from impact", avgSettlement: 500000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Paralysis or nerve damage", avgSettlement: 650000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from crashes", avgSettlement: 175000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injuries", description: "Whiplash, sprains, strains", avgSettlement: 60000, multiplier: 1.5 },
];

export const BUS_TYPES = [
    { id: "public-transit", name: "Public Transit Bus", multiplier: 1.3 },
    { id: "school-bus", name: "School Bus", multiplier: 1.4 },
    { id: "charter-bus", name: "Charter / Tour Bus", multiplier: 1.25 },
    { id: "greyhound", name: "Greyhound / Intercity", multiplier: 1.2 },
];

export const ACCIDENT_CAUSES = [
    { id: "driver-negligence", name: "Driver Negligence", multiplier: 1.3 },
    { id: "defective-bus", name: "Defective Bus / Equipment", multiplier: 1.4 },
    { id: "collision", name: "Collision with Vehicle", multiplier: 1.2 },
    { id: "pedestrian", name: "Pedestrian Strike", multiplier: 1.35 },
];

export const BUS_2026 = {
    statistics: {
        injuries: "24,000+ Injuries/Year",
        deaths: "240+ Deaths/Year",
        crashes: "60,000+ Crashes/Year",
        source: "NHTSA Data",
    },
    citations: [
        "National Highway Traffic Safety Administration (NHTSA) Bus Safety Report 2026",
        "Federal Motor Carrier Safety Administration (FMCSA) Data 2026",
        "Common Carrier Liability Case Studies",
    ],
};

export const CALCULATORS = [
    { id: "bus-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "bus-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "bus-accident/types", name: "Bus Types", description: "Liability by bus type", icon: BusIcon, featured: false },
    { id: "bus-accident/liability", name: "Carrier Liability", description: "Common carrier rules", icon: AlertIcon, featured: false },
];

export const FAQS = [
    { question: "What is a bus accident lawsuit?", answer: "Bus accident lawsuits seek compensation for injuries caused by negligent bus drivers, defective buses, or unsafe road conditions. Common carriers like buses owe passengers a heightened duty of care." },
    { question: "What is common carrier liability?", answer: "Common carriers (buses, trains, airlines) owe passengers the highest duty of care under law. This makes it easier to prove negligence and often results in higher settlements." },
    { question: "Can I sue a city bus?", answer: "Yes, but government immunity rules may apply. Most states require filing a tort claim notice within 30-180 days. Claims against government entities have special procedures and caps." },
    { question: "What if a school bus injured my child?", answer: "School bus accidents often involve school districts and bus companies. These cases receive extra attention due to child victims and may result in higher settlements." },
    { question: "Who can be liable in a bus accident?", answer: "Potential defendants include the bus company, driver, bus manufacturer, maintenance provider, government agency, or other drivers involved in the crash." },
    { question: "Can passengers sue for injuries?", answer: "Yes. Bus passengers can sue for injuries even without proving who caused the crash, as common carriers must ensure passenger safety at all times." },
    { question: "What about pedestrians hit by buses?", answer: "Pedestrians struck by buses can file claims against the bus company. These cases often result in serious injuries and substantial settlements." },
    { question: "Are charter bus accidents treated differently?", answer: "Charter and tour bus companies are regulated by FMCSA. They are common carriers with heightened liability and must carry substantial insurance ($5M minimum)." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, disability, disfigurement, wrongful death damages, and future care costs." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Claims against government entities may have much shorter notice requirements (30-180 days)." },
];

export function calculateBusSettlement(
    injuryType: string,
    busType: string,
    accidentCause: string,
    medicalExpenses: number,
    isPassenger: boolean,
    governmentBus: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const bus = BUS_TYPES.find(b => b.id === busType) || BUS_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const passengerBonus = isPassenger ? 1.2 : 1.0;
    const govPenalty = governmentBus ? 0.85 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * bus.multiplier * cause.multiplier * passengerBonus * govPenalty * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        busType: bus.name,
        accidentCause: cause.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
