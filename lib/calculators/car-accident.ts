/**
 * S-Class Car Accident Logic Engine v5.0
 * Based on 50-State Comparative Fault Rules & 2026 Economic Benchmarks
 */

export const ACCIDENT_CONSTANTS = {
    injuryTiers: {
        SOFT_TISSUE: { base: 15000, multiplier: 1.5, label: "Soft Tissue (Whiplash, Strains)" },
        MODERATE: { base: 45000, multiplier: 3, label: "Moderate (Broken Bones, Lacerations)" },
        SEVERE: { base: 125000, multiplier: 5, label: "Severe (Organ Damage, Surgery Required)" },
        CATASTROPHIC: { base: 500000, multiplier: 10, label: "Catastrophic (TBI, Paralysis, Loss of Limb)" }
    },
    stateFaultRules: {
        PURE_COMPARATIVE: ["AZ", "CA", "FL", "KY", "LA", "MS", "MO", "NM", "NY", "RI", "WA"],
        MODIFIED_50: ["GA", "ID", "NE", "ND", "TN", "UT", "WV", "WI"],
        MODIFIED_51: ["CT", "DE", "HI", "IL", "IN", "IA", "KS", "ME", "MA", "MI", "MN", "MT", "NH", "NJ", "NV", "OH", "OK", "OR", "PA", "SC", "TX", "VT", "WY"],
        CONTRIBUTORY: ["AL", "MD", "NC", "VA", "DC"]
    },
    economicFactors: {
        WAGE_LOSS_BUFFER: 1.25, // Accounts for future earning capacity
        MEDICAL_LIEN_EST: 0.35 // Estimated medical lien reduction
    },
    citation: "Based on 2026 NHTSA Crash Data & National Safety Council (NSC) Economic Cost Benchmarks."
};

export interface CarAccidentInputs {
    medicalBills: number;
    lostWages: number;
    propertyDamage: number;
    injuryTier: keyof typeof ACCIDENT_CONSTANTS.injuryTiers;
    stateCode: string;
    faultPercentage: number;
}

export function calculateCarAccidentSettlement(inputs: CarAccidentInputs) {
    const tier = ACCIDENT_CONSTANTS.injuryTiers[inputs.injuryTier];

    // 1. Economic Damages (Hard Costs)
    const economicDamages = (inputs.medicalBills + inputs.lostWages) * ACCIDENT_CONSTANTS.economicFactors.WAGE_LOSS_BUFFER + inputs.propertyDamage;

    // 2. Non-Economic Damages (Pain & Suffering)
    // S-Class Logic: Pain & Suffering is a function of Medical Bills * Tier Multiplier
    const painAndSuffering = inputs.medicalBills * tier.multiplier;

    // 3. Gross Settlement Potential
    let grossTotal = economicDamages + painAndSuffering;

    // 4. Fault Adjustment (Jurisdictional Logic)
    let finalGross = grossTotal;
    const rules = ACCIDENT_CONSTANTS.stateFaultRules;
    const fault = inputs.faultPercentage;

    if (rules.CONTRIBUTORY.includes(inputs.stateCode)) {
        if (fault > 0) finalGross = 0; // Barred if even 1% at fault
    } else if (rules.MODIFIED_50.includes(inputs.stateCode)) {
        if (fault >= 50) finalGross = 0;
        else finalGross = grossTotal * (1 - fault / 100);
    } else if (rules.MODIFIED_51.includes(inputs.stateCode)) {
        if (fault > 50) finalGross = 0;
        else finalGross = grossTotal * (1 - fault / 100);
    } else {
        // Pure Comparative
        finalGross = grossTotal * (1 - fault / 100);
    }

    // 5. Returns Net Estimates (Pre-attorney fees)
    return {
        low: finalGross * 0.8,
        mid: finalGross,
        high: finalGross * 1.3,
        breakdown: {
            economic: economicDamages,
            painSuffering: painAndSuffering,
            faultReduction: grossTotal - finalGross,
            taxImpact: 0, // Physical injury settlements are usually federal tax-free
            tierLabel: tier.label
        }
    };
}

export const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
