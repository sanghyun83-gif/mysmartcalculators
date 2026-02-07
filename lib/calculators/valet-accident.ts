// ============================================
// VALET ACCIDENT LAWSUIT CALCULATOR
// 2026 Valet & Parking Service Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Valet Accident Calculator",
    tagline: "Free 2026 Valet Accident Settlement Estimator",
    description: "Calculate valet accident lawsuit settlements. Vehicle damage, pedestrian injuries, theft, joyriding. Based on 2026 bailment and negligence law.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/valet-accident",
};

export const CLAIM_TYPES = [
    { id: "pedestrian", name: "Pedestrian Injury", description: "Hit by valet driver", avgSettlement: 350000, multiplier: 4.0 },
    { id: "vehicle-damage", name: "Vehicle Damage", description: "Collision/scrapes by valet", avgSettlement: 25000, multiplier: 1.5 },
    { id: "theft", name: "Vehicle Theft", description: "Stolen from valet custody", avgSettlement: 50000, multiplier: 2.0 },
    { id: "property", name: "Personal Property Theft", description: "Items stolen from vehicle", avgSettlement: 15000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "collision", name: "Valet Collision", multiplier: 1.4 },
    { id: "speeding", name: "Speeding / Joyriding", multiplier: 1.5 },
    { id: "theft", name: "Theft / Misappropriation", multiplier: 1.6 },
    { id: "negligent-parking", name: "Negligent Parking", multiplier: 1.2 },
];

export const VALET_2026 = {
    statistics: {
        claims: "25,000+ Annual Valet Claims",
        damage: "Average Vehicle Damage: $3,500",
        source: "NPA / IIHS Data",
    },
    citations: [
        "National Parking Association (NPA) Valet Industry Standards 2026",
        "Insurance Institute for Highway Safety (IIHS) Valet Accident Data 2026",
    ],
};

export const CALCULATORS = [
    { id: "valet-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "valet-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a valet accident lawsuit?", answer: "Valet accident lawsuits seek compensation for vehicle damage, personal injuries, or stolen property while your vehicle was in the custody of a valet service. This is based on bailment law." },
    { question: "What is bailment?", answer: "Bailment is a legal relationship where you entrust your property to another party for safekeeping. Valet services are bailees with a duty of care. They're liable for negligent damage or loss." },
    { question: "What about liability waivers?", answer: "Many valet tickets include liability waivers, but these have limitations. Waivers often cannot protect against gross negligence, intentional acts, or statutory violations." },
    { question: "What if my car was damaged?", answer: "Document the damage immediately. Take photos before and after valet service. Report to management and get a copy of the incident report. The valet company is typically liable for damage in their custody." },
    { question: "What about stolen items?", answer: "Valet companies may be liable for items stolen from your car while in their custody, especially visible items. Some companies limit liability for valuables - check your valet ticket." },
];

export function calculateValetSettlement(
    claimType: string,
    incidentType: string,
    damageAmount: number,
    liabilityWaiver: boolean,
    hasDocumentation: boolean
) {
    const claim = CLAIM_TYPES.find(c => c.id === claimType) || CLAIM_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const waiverReduction = liabilityWaiver ? 0.75 : 1.0;
    const docsBonus = hasDocumentation ? 1.2 : 1.0;

    const baseMultiplier = claim.multiplier * incident.multiplier * waiverReduction * docsBonus;
    const additionalDamages = Math.round(damageAmount * baseMultiplier);

    return {
        claimType: claim.name,
        incidentType: incident.name,
        damageAmount,
        additionalDamages,
        totalLow: Math.round((damageAmount + additionalDamages) * 0.7),
        totalHigh: Math.round((damageAmount + additionalDamages) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
