// ============================================
// WRONGFUL DEATH SETTLEMENT CALCULATOR
// 2026 data - Wrongful death claim compensation
// ============================================

import { Scale, FileText, Shield, Calculator, Heart, Users, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Wrongful Death Calculator",
    tagline: "Free Wrongful Death Settlement Estimator",
    description: "Calculate wrongful death settlement value. Free 2026 calculator for medical malpractice death, car accident fatality, workplace death. Average settlements $500K-$1M+.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/wrongful-death",
};

// ============================================
// 2026 WRONGFUL DEATH CONSTANTS
// Sources: Wrongful death verdict reporters, Legal databases
// ============================================
export const WRONGFUL_DEATH_CONSTANTS = {
    // Economic Damages Multipliers by Case Strength
    multipliers: {
        weak: { min: 0.5, max: 1.0, avg: 0.75 },       // Questionable liability
        moderate: { min: 1.0, max: 2.0, avg: 1.5 },    // Clear liability, some defense
        strong: { min: 2.0, max: 4.0, avg: 3.0 },      // Clear liability, clear negligence
        exceptional: { min: 4.0, max: 10.0, avg: 6.0 }, // Gross negligence, punitive damages
    },

    // Average Wrongful Death Settlements by Cause (2026)
    avgSettlements: {
        medicalMalpractice: { min: 500000, max: 3000000, avg: 1200000 },
        carAccident: { min: 300000, max: 2000000, avg: 800000 },
        truckAccident: { min: 500000, max: 5000000, avg: 1500000 },
        workplaceAccident: { min: 400000, max: 2500000, avg: 1000000 },
        productLiability: { min: 500000, max: 10000000, avg: 2000000 },
        nursingHomeNeglect: { min: 200000, max: 1500000, avg: 600000 },
        criminalAct: { min: 100000, max: 1000000, avg: 400000 },
    },

    // Attorney Fees (Contingency)
    attorneyFees: {
        preSettlement: 0.33,  // 33% if settled before trial
        postTrial: 0.40,      // 40% if goes to trial
    },

    // Life Expectancy Data (US 2026)
    lifeExpectancy: {
        male: 76.1,
        female: 81.1,
        average: 78.6,
    },

    // Average Annual Income (US)
    avgAnnualIncome: 60000,

    // Average Household Services Value
    avgHouseholdServicesPerYear: 25000,

    // Funeral & Burial Costs
    funeralCosts: {
        min: 7000,
        max: 15000,
        avg: 10000,
    },
} as const;

// ============================================
// WRONGFUL DEATH CASE TYPES
// ============================================
export const DEATH_CASE_TYPES = {
    medicalMalpractice: {
        name: "Medical Malpractice Death",
        severity: "exceptional",
        avgSettlement: { min: 500000, max: 3000000 },
        examples: "Surgical error, anesthesia death, misdiagnosis leading to death",
        description: "Death caused by medical negligence including surgical errors, medication overdose, or delayed diagnosis.",
    },
    carAccident: {
        name: "Car Accident Fatality",
        severity: "strong",
        avgSettlement: { min: 300000, max: 2000000 },
        examples: "Drunk driving, distracted driving, running red light",
        description: "Death caused by negligent or reckless driving in an automobile accident.",
    },
    truckAccident: {
        name: "Truck Accident Fatality",
        severity: "exceptional",
        avgSettlement: { min: 500000, max: 5000000 },
        examples: "18-wheeler crash, commercial vehicle accident, FMCSA violations",
        description: "Death caused by commercial truck accident, often involving multiple liable parties.",
    },
    workplaceAccident: {
        name: "Workplace Death",
        severity: "strong",
        avgSettlement: { min: 400000, max: 2500000 },
        examples: "Construction accident, industrial accident, OSHA violations",
        description: "Death occurring at workplace due to unsafe conditions or employer negligence.",
    },
    productLiability: {
        name: "Defective Product Death",
        severity: "exceptional",
        avgSettlement: { min: 500000, max: 10000000 },
        examples: "Defective vehicle, dangerous drug, faulty medical device",
        description: "Death caused by defective or dangerous product, often resulting in large settlements.",
    },
    nursingHome: {
        name: "Nursing Home Neglect Death",
        severity: "moderate",
        avgSettlement: { min: 200000, max: 1500000 },
        examples: "Bedsores, dehydration, medication error, fall",
        description: "Death of elderly person due to neglect or abuse in nursing home or care facility.",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "wrongful-death/settlement",
        name: "Death Settlement Calculator",
        shortName: "Settlement",
        description: "Calculate wrongful death settlement value",
        longDescription: "Free 2026 wrongful death settlement calculator. Estimate compensation for lost income, loss of companionship, and survivor damages.",
        icon: Calculator,
        category: "legal",
        keywords: ["wrongful death calculator", "death settlement", "fatality compensation", "survivor damages"],
        featured: true,
    },
    {
        id: "wrongful-death/death-case-types",
        name: "Case Types Guide",
        shortName: "Case Types",
        description: "Average settlements by cause of death",
        longDescription: "See average wrongful death settlement values for medical malpractice, car accidents, workplace deaths, and more.",
        icon: FileText,
        category: "legal",
        keywords: ["wrongful death by type", "malpractice death", "car accident death", "workplace fatality"],
        featured: true,
    },
] as const;

// ============================================
// WRONGFUL DEATH CALCULATION FUNCTION
// ============================================
export interface WrongfulDeathResult {
    lostIncome: number;
    lostBenefits: number;
    funeralCosts: number;
    lossOfCompanionship: number;
    medicalExpenses: number;
    totalBeforeFees: number;
    attorneyFees: number;
    netSettlement: number;
    settlementRange: { min: number; max: number };
}

export function calculateWrongfulDeath(
    annualIncome: number,
    yearsRemaining: number,
    funeralCosts: number,
    medicalExpenses: number,
    caseStrength: 'weak' | 'moderate' | 'strong' | 'exceptional',
    hasAttorney: boolean = true
): WrongfulDeathResult {
    const multipliers = WRONGFUL_DEATH_CONSTANTS.multipliers[caseStrength];

    // Lost income (future earnings)
    const lostIncome = Math.round(annualIncome * yearsRemaining);

    // Lost benefits (typically 30% of income)
    const lostBenefits = Math.round(lostIncome * 0.30);

    // Loss of companionship (non-economic) - using multiplier on annual income
    const lossOfCompanionship = Math.round(annualIncome * multipliers.avg * yearsRemaining * 0.5);

    // Total economic damages
    const economicDamages = lostIncome + lostBenefits + funeralCosts + medicalExpenses;

    // Total before fees
    const totalBeforeFees = economicDamages + lossOfCompanionship;

    // Attorney fees
    const attorneyFees = hasAttorney
        ? Math.round(totalBeforeFees * WRONGFUL_DEATH_CONSTANTS.attorneyFees.preSettlement)
        : 0;

    // Net settlement
    const netSettlement = totalBeforeFees - attorneyFees;

    // Calculate range
    const minTotal = economicDamages + (annualIncome * multipliers.min * yearsRemaining * 0.5);
    const maxTotal = economicDamages + (annualIncome * multipliers.max * yearsRemaining * 0.5);

    return {
        lostIncome,
        lostBenefits,
        funeralCosts,
        lossOfCompanionship,
        medicalExpenses,
        totalBeforeFees,
        attorneyFees,
        netSettlement,
        settlementRange: {
            min: Math.round(hasAttorney ? minTotal * 0.67 : minTotal),
            max: Math.round(hasAttorney ? maxTotal * 0.67 : maxTotal),
        },
    };
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

export function getCaseStrengthLabel(strength: string): string {
    const labels: Record<string, string> = {
        weak: "Weak Case",
        moderate: "Moderate Case",
        strong: "Strong Case",
        exceptional: "Exceptional Case",
    };
    return labels[strength] || strength;
}

export function getCaseStrengthColor(strength: string): string {
    const colors: Record<string, string> = {
        weak: "text-red-400",
        moderate: "text-yellow-400",
        strong: "text-green-400",
        exceptional: "text-emerald-400",
    };
    return colors[strength] || "text-slate-400";
}

export function calculateYearsRemaining(age: number, gender: 'male' | 'female' = 'male'): number {
    const lifeExpectancy = gender === 'male'
        ? WRONGFUL_DEATH_CONSTANTS.lifeExpectancy.male
        : WRONGFUL_DEATH_CONSTANTS.lifeExpectancy.female;
    return Math.max(0, Math.round(lifeExpectancy - age));
}
