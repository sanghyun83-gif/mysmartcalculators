// ============================================
// TRUCK-ACCIDENT-CALC SITE CONFIGURATION
// 2026 Truck Accident Settlement Calculator
// 18-Wheeler, Semi-Truck, Commercial Truck Claims
// ============================================

import { Calculator, Scale, FileText, DollarSign, Car, AlertTriangle, Gavel, Truck } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Truck Accident Settlement Calculator",
    tagline: "Free 2026 Settlement Estimator",
    description: "Calculate your truck accident settlement value for free. Estimate 18-wheeler, semi-truck, and commercial vehicle accident compensation. Average settlements $500K-$3M.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/truck-accident",
};

// ============================================
// 2026 TRUCK ACCIDENT CONSTANTS (S-Class v2.1)
// ============================================
export const TRUCK_2026 = {
    // Expert Delta Multipliers (Alpha)
    fmcsaMultiplier: 1.50,    // FMCSA Safety Regulation Violations
    nuclearVenueAlpha: 1.35,  // High-payout jurisdictions (TX, GA, FL)
    edrAlpha: 1.15,          // Black Box / EDR evidentiary precision

    injuryTypes: [
        { id: "soft-tissue", name: "Soft Tissue / Whiplash", base: 45000, description: "Muscle strains, neck pain, no surgery." },
        { id: "fracture", name: "Simple Fracture", base: 125000, description: "Broken bones requiring casting/immobility." },
        { id: "surgery", name: "Surgical Orthopedic", base: 350000, description: "Pins, plates, or joint reconstruction." },
        { id: "spinal", name: "Spinal / Discal Matrix", base: 850000, description: "Herniated discs with nerve impingement." },
        { id: "tbi-permanent", name: "Catastrophic TBI/Paralysis", base: 2500000, description: "Permanent neurological or physical impairment." }
    ],

    // FMCSA Regulatory Pillars
    fmcsaPillars: [
        { id: "hos", name: "Hours of Service (HOS)", description: "Driver fatigue exceeding legal driving limits." },
        { id: "maintenance", name: "Equipment Maintenance", description: "Brake failure or tire blowouts due to neglect." },
        { id: "licensing", name: "CDL / Qualification", description: "Unqualified driver or high-risk hiring history." }
    ],

    statistics: {
        annualCommercialAccidents: 500000,
        averageSettlement: 450000,
        highTierCeiling: 15000000,
        status: "MDL 2026 Regulatory Sync"
    }
};

// ============================================
// S-CLASS v2.1 FORENSIC TRUCK ACCIDENT ENGINE
// ============================================
export interface TruckSClassResult {
    totalLow: number;
    totalHigh: number;
    economicDelta: number;
    fmcsaPremium: number;
    venueEscalation: number;
    edrBonus: number;
    verdict: string;
    severityLabel: string;
}

export function calculateTruckSClass(
    injuryId: string,
    medicalBills: number,
    annualIncome: number,
    age: number,
    hasFmcsaViolation: boolean = false,
    isNuclearVenue: boolean = false,
    hasEdrData: boolean = false,
    isPermanent: boolean = false
): TruckSClassResult {
    const injury = TRUCK_2026.injuryTypes.find(t => t.id === injuryId) || TRUCK_2026.injuryTypes[0];

    // 1. Economic Foundation (Wage loss + Life care)
    const workYearsRemaining = Math.max(0, 65 - age);
    const wageLossPotential = annualIncome * workYearsRemaining * (isPermanent ? 0.7 : 0.2);
    const economicDelta = medicalBills + wageLossPotential;

    // 2. Base Valuation (S-Class Weighted)
    let baseVal = injury.base + (economicDelta * 1.5);

    // 3. Expert Delta Multipliers (Predator α)
    let fmcsaPremium = 0;
    let venueEscalation = 0;
    let edrBonus = 0;

    if (hasFmcsaViolation) {
        fmcsaPremium = baseVal * (TRUCK_2026.fmcsaMultiplier - 1);
        baseVal *= TRUCK_2026.fmcsaMultiplier;
    }

    if (isNuclearVenue) {
        venueEscalation = baseVal * (TRUCK_2026.nuclearVenueAlpha - 1);
        baseVal *= TRUCK_2026.nuclearVenueAlpha;
    }

    if (hasEdrData) {
        edrBonus = baseVal * (TRUCK_2026.edrAlpha - 1);
        baseVal *= TRUCK_2026.edrAlpha;
    }

    // 4. Final Aggregation
    const totalHigh = Math.round(baseVal);
    const totalLow = Math.round(baseVal * 0.65);

    // 5. Verdict Matrix
    let verdict = "Standard Tier Settlement Pathway.";
    let severityLabel = "MODERATE";

    if (baseVal > 1500000) {
        verdict = "Catastrophic Liability Triggering High-Tier Settlement.";
        severityLabel = "CRITICAL";
    } else if (baseVal > 500000) {
        verdict = "Significant Liability with High Economic Impact.";
        severityLabel = "SEVERE";
    }

    return {
        totalLow,
        totalHigh,
        economicDelta,
        fmcsaPremium,
        venueEscalation,
        edrBonus,
        verdict,
        severityLabel
    };
}

// ============================================
// 50 STATE FAULT LAWS
// ============================================
export type FaultSystem = 'at-fault' | 'no-fault' | 'choice';
export type ComparativeType = 'pure' | 'modified-50' | 'modified-51' | 'contributory';

export const STATE_FAULT_LAWS: Record<string, {
    name: string;
    faultSystem: FaultSystem;
    comparativeType: ComparativeType;
    threshold: string;
    notes: string;
}> = {
    AL: { name: "Alabama", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery" },
    AK: { name: "Alaska", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    AZ: { name: "Arizona", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    AR: { name: "Arkansas", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    CA: { name: "California", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    CO: { name: "Colorado", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    CT: { name: "Connecticut", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    DE: { name: "Delaware", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    FL: { name: "Florida", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Changed from no-fault in 2023" },
    GA: { name: "Georgia", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    HI: { name: "Hawaii", faultSystem: "no-fault", comparativeType: "modified-51", threshold: "Serious injury", notes: "No-fault with threshold" },
    ID: { name: "Idaho", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    IL: { name: "Illinois", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    IN: { name: "Indiana", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    IA: { name: "Iowa", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    KS: { name: "Kansas", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "$2,000 med", notes: "No-fault with threshold" },
    KY: { name: "Kentucky", faultSystem: "choice", comparativeType: "pure", threshold: "Choice", notes: "Choice no-fault state" },
    LA: { name: "Louisiana", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    ME: { name: "Maine", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    MD: { name: "Maryland", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery" },
    MA: { name: "Massachusetts", faultSystem: "no-fault", comparativeType: "modified-51", threshold: "$2,000 med", notes: "No-fault with threshold" },
    MI: { name: "Michigan", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "Serious injury", notes: "Strong no-fault state" },
    MN: { name: "Minnesota", faultSystem: "no-fault", comparativeType: "modified-51", threshold: "$4,000 med", notes: "No-fault with threshold" },
    MS: { name: "Mississippi", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    MO: { name: "Missouri", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    MT: { name: "Montana", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    NE: { name: "Nebraska", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    NV: { name: "Nevada", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    NH: { name: "New Hampshire", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    NJ: { name: "New Jersey", faultSystem: "choice", comparativeType: "modified-51", threshold: "Choice", notes: "Choice no-fault state" },
    NM: { name: "New Mexico", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    NY: { name: "New York", faultSystem: "no-fault", comparativeType: "pure", threshold: "Serious injury", notes: "No-fault with serious injury threshold" },
    NC: { name: "North Carolina", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery" },
    ND: { name: "North Dakota", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "$2,500 med", notes: "No-fault with threshold" },
    OH: { name: "Ohio", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    OK: { name: "Oklahoma", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    OR: { name: "Oregon", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    PA: { name: "Pennsylvania", faultSystem: "choice", comparativeType: "modified-51", threshold: "Choice", notes: "Choice no-fault state" },
    RI: { name: "Rhode Island", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    SC: { name: "South Carolina", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    SD: { name: "South Dakota", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    TN: { name: "Tennessee", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    TX: { name: "Texas", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    UT: { name: "Utah", faultSystem: "no-fault", comparativeType: "modified-50", threshold: "$3,000 med", notes: "No-fault with threshold" },
    VT: { name: "Vermont", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    VA: { name: "Virginia", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery" },
    WA: { name: "Washington", faultSystem: "at-fault", comparativeType: "pure", threshold: "None", notes: "Pure comparative fault" },
    WV: { name: "West Virginia", faultSystem: "at-fault", comparativeType: "modified-50", threshold: "50%", notes: "Modified comparative (50% bar)" },
    WI: { name: "Wisconsin", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    WY: { name: "Wyoming", faultSystem: "at-fault", comparativeType: "modified-51", threshold: "51%", notes: "Modified comparative (51% bar)" },
    DC: { name: "Washington DC", faultSystem: "at-fault", comparativeType: "contributory", threshold: "None", notes: "Contributory negligence bars recovery" },
};

export function getInjuryTypes(): { id: string; name: string; description: string }[] {
    return TRUCK_2026.injuryTypes.map(t => ({
        id: t.id,
        name: t.name,
        description: t.description
    }));
}

export function getFmcsaPillars(): { id: string; name: string; description: string }[] {
    return TRUCK_2026.fmcsaPillars;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}

export function getStatesList(): { code: string; name: string; faultSystem: FaultSystem }[] {
    return Object.entries(STATE_FAULT_LAWS).map(([code, data]) => ({
        code,
        name: data.name,
        faultSystem: data.faultSystem,
    })).sort((a, b) => a.name.localeCompare(b.name));
}

// Deprecated legacy function (keeping signature for compatibility, but updating logic)
export function calculateSettlement(
    stateCode: string,
    medicalBills: number,
    lostWages: number,
    propertyDamage: number,
    injurySeverity: string,
    faultPercentage: number = 0,
    hasFmcsaViolation: boolean = false,
    isNuclearVenue: boolean = false
): any {
    return calculateTruckSClass(
        injurySeverity,
        medicalBills,
        lostWages,
        45, // default age
        hasFmcsaViolation,
        isNuclearVenue,
        false,
        injurySeverity === 'tbi-permanent'
    );
}

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "truck-accident/settlement-calculator",
        name: "Settlement Auditor",
        shortName: "Auditor",
        description: "Calculate FMCSA & Nuclear Venue impact",
        longDescription: "Free 2026 truck accident settlement auditor. Estimate your 18-wheeler, semi-truck, or commercial vehicle accident compensation.",
        icon: Calculator,
        category: "legal",
        keywords: ["truck accident settlement calculator", "18 wheeler accident", "semi truck accident"],
        featured: true,
    },
    {
        id: "truck-accident/guide",
        name: "Forensic Guide",
        shortName: "Guide",
        description: "Trucking liability & FMCSA regs",
        longDescription: "Expert guide on trucking accident laws, FMCSA regulations, and liability rules.",
        icon: FileText,
        category: "legal",
        keywords: ["truck accident laws by state", "FMCSA regulations", "trucking liability"],
        featured: false,
    },
] as const;
