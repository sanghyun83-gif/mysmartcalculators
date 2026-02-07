// ============================================
// GROCERY STORE INJURY LAWSUIT CALCULATOR
// 2026 Retail Premises Claims - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Grocery Store Injury Calculator",
    tagline: "Free 2026 Grocery Store Injury Settlement Estimator",
    description: "Calculate grocery store injury lawsuit settlements. Slip and fall, falling products, wet floors, shopping cart accidents. Based on 2026 premises liability data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/grocery-store-injury",
};

export const INJURY_TYPES = [
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/objects", avgSettlement: 380000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal Cord Injury", description: "Falling merchandise", avgSettlement: 450000, multiplier: 4.5 },
    { id: "fractures", name: "Fractures", description: "Broken bones from falls", avgSettlement: 90000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injury", description: "Sprains, strains", avgSettlement: 42000, multiplier: 1.8 },
];

export const INCIDENT_TYPES = [
    { id: "slip-fall", name: "Slip and Fall", multiplier: 1.3 },
    { id: "falling-product", name: "Falling Product / Display", multiplier: 1.45 },
    { id: "shopping-cart", name: "Shopping Cart Accident", multiplier: 1.25 },
    { id: "floor-hazard", name: "Floor Hazard / Debris", multiplier: 1.35 },
];

export const GROCERY_2026 = {
    statistics: {
        injuries: "45,000+ Annual Grocery Store Injuries",
        slipFall: "65% Are Slip & Fall",
        source: "OSHA / NSC Data",
    },
    citations: [
        "Occupational Safety and Health Administration (OSHA) Retail Safety Guidelines 2026",
        "National Safety Council (NSC) Retail Injury Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "grocery-store-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "grocery-store-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is a grocery store injury lawsuit?", answer: "Grocery store injury lawsuits seek compensation for injuries at supermarkets due to dangerous conditions like wet floors, falling products, stacked displays, or unsecured shopping carts." },
    { question: "What are common grocery store injuries?", answer: "Common injuries include slip and falls on wet/greasy floors, being struck by falling products or displays, shopping cart collisions, and tripping over floor hazards or debris." },
    { question: "How do I prove negligence?", answer: "You must prove the store knew or should have known about the hazard and failed to fix it or warn you. Security footage, incident reports, and prior complaints are key evidence." },
    { question: "What if no 'Wet Floor' sign was present?", answer: "The absence of warning signs when there was a known spill strongly supports your case. Stores have a duty to warn customers of known hazards." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Report the incident immediately and ask the store manager to file an incident report before leaving." },
];

export function calculateGrocerySettlement(
    injuryType: string,
    incidentType: string,
    medicalExpenses: number,
    noWarningSign: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];

    const noSignBonus = noWarningSign ? 1.35 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * noSignBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        incidentType: incident.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
