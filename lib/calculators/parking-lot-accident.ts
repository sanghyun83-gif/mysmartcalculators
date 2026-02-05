// ============================================
// PARKING LOT ACCIDENT LAWSUIT CALCULATOR
// 2026 Parking Lot Claims - Advanced Version
// ============================================

import { Calculator, FileText, Car, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Parking Lot Accident Calculator",
    tagline: "Free 2026 Parking Lot Accident Settlement Estimator",
    description: "Calculate parking lot accident lawsuit settlements. Pedestrian strikes, backing accidents, poor lighting, potholes. Based on 2026 premises liability data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/parking-lot-accident",
};

export const INJURY_TYPES = [
    { id: "death", name: "Wrongful Death", description: "Fatal pedestrian strike", avgSettlement: 1500000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from strike/fall", avgSettlement: 450000, multiplier: 4.0 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones from impact", avgSettlement: 110000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injury", description: "Sprains, strains, whiplash", avgSettlement: 35000, multiplier: 1.8 },
    { id: "lacerations", name: "Lacerations / Bruises", description: "Cuts and contusions", avgSettlement: 18000, multiplier: 1.5 },
];

export const ACCIDENT_TYPES = [
    { id: "pedestrian", name: "Pedestrian Strike", multiplier: 1.5 },
    { id: "backing", name: "Backing Accident", multiplier: 1.35 },
    { id: "collision", name: "Vehicle Collision", multiplier: 1.3 },
    { id: "trip-fall", name: "Trip and Fall", multiplier: 1.2 },
];

export const HAZARD_TYPES = [
    { id: "lighting", name: "Poor Lighting", multiplier: 1.4 },
    { id: "potholes", name: "Potholes / Uneven Surface", multiplier: 1.35 },
    { id: "signage", name: "Missing / Confusing Signage", multiplier: 1.3 },
];

export const PARKING_2026 = {
    statistics: {
        accidents: "50,000+ Annual Parking Lot Accidents",
        deaths: "500+ Parking Lot Deaths/Year",
        source: "NSC / NHTSA Data",
    },
    citations: [
        "National Safety Council (NSC) Parking Lot Safety Report 2026",
        "National Highway Traffic Safety Admin (NHTSA) Parking Data 2026",
        "Insurance Institute for Highway Safety (IIHS) Pedestrian Study 2026",
    ],
};

export const CALCULATORS = [
    { id: "parking-lot-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "parking-lot-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "parking-lot-accident/liability", name: "Liability Guide", description: "Who is responsible", icon: Car, featured: false },
    { id: "parking-lot-accident/hazards", name: "Common Hazards", description: "Dangerous conditions", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is a parking lot accident lawsuit?", answer: "Parking lot accident lawsuits seek compensation for injuries in parking lots due to driver negligence, premises hazards, or inadequate security. Property owners and drivers may share liability." },
    { question: "Who is liable?", answer: "Liability may fall on the negligent driver, property owner (for poor maintenance, lighting, or design), or both. Property owners must maintain safe conditions." },
    { question: "What about pedestrian strikes?", answer: "Pedestrians have the right of way in parking lots. Drivers who strike pedestrians, especially when backing up, are typically liable. Poor visibility due to inadequate lighting increases property owner liability." },
    { question: "What are common hazards?", answer: "Common hazards include poor lighting, potholes, uneven surfaces, missing/confusing signage, obstructed sight lines, and inadequate crosswalks or speed bumps." },
    { question: "What about backing accidents?", answer: "Backing accidents are extremely common in parking lots. Drivers have a duty to ensure it's safe before reversing. Failure to use backup cameras or check mirrors creates liability." },
    { question: "Does the property owner have insurance?", answer: "Yes. Property owners typically have premises liability insurance. Large retailers, hospitals, and hotels have substantial coverage for parking lot accidents." },
    { question: "What if poor lighting caused the accident?", answer: "Property owners must maintain adequate lighting. If poor lighting contributed to the accident, they share liability. This includes burned-out lights and inadequate fixtures." },
    { question: "What about potholes?", answer: "Property owners must repair potholes and uneven surfaces. If they knew or should have known about the hazard, they're liable for injuries caused by trips, falls, or vehicle damage." },
    { question: "What damages can I recover?", answer: "You can recover medical expenses, lost wages, vehicle damage, pain and suffering, and in fatal accidents, wrongful death damages." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Document everything immediately and preserve security camera footage requests." },
];

export function calculateParkingLotSettlement(
    injuryType: string,
    accidentType: string,
    hazardType: string,
    medicalExpenses: number,
    propertyOwnerNegligence: boolean,
    hasSecurityFootage: boolean,
    witnessesPresent: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const accident = ACCIDENT_TYPES.find(a => a.id === accidentType) || ACCIDENT_TYPES[0];
    const hazard = HAZARD_TYPES.find(h => h.id === hazardType) || HAZARD_TYPES[0];

    const ownerBonus = propertyOwnerNegligence ? 1.35 : 1.0;
    const footageBonus = hasSecurityFootage ? 1.2 : 1.0;
    const witnessBonus = witnessesPresent ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * accident.multiplier * hazard.multiplier * ownerBonus * footageBonus * witnessBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentType: accident.name,
        hazardType: hazard.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
