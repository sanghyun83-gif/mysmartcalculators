// ============================================
// AUTO-INSURANCE-CALC SITE CONFIGURATION
// 2026 Auto Insurance Calculator
// Blue Theme
// ============================================

import { Calculator, Car, MapPin, Users, Shield } from 'lucide-react';
import { STATE_INSURANCE_DATA, getStatesList } from './auto-insurance/state-data';

export { STATE_INSURANCE_DATA, getStatesList };

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Auto Insurance Calculator",
    tagline: "Free 2026 Rate Estimator",
    description: "Calculate your auto insurance premium for free. Compare rates by state, age, and coverage type. Get instant estimates and save money on car insurance.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/auto-insurance",
};

// ============================================
// 2026 AUTO INSURANCE CONSTANTS
// ============================================
export const AUTO_INSURANCE_CONSTANTS = {
    // National average annual premium (2026)
    nationalAverage: 1800,

    // Average premiums by state (annual, full coverage)
    stateRates: {
        "Alabama": 1650, "Alaska": 1350, "Arizona": 1750, "Arkansas": 1600,
        "California": 2100, "Colorado": 1950, "Connecticut": 1800, "Delaware": 1700,
        "Florida": 2400, "Georgia": 1900, "Hawaii": 1200, "Idaho": 1150,
        "Illinois": 1500, "Indiana": 1250, "Iowa": 1150, "Kansas": 1400,
        "Kentucky": 1850, "Louisiana": 2300, "Maine": 950, "Maryland": 1750,
        "Massachusetts": 1350, "Michigan": 2700, "Minnesota": 1400, "Mississippi": 1550,
        "Missouri": 1600, "Montana": 1400, "Nebraska": 1350, "Nevada": 1900,
        "New Hampshire": 1100, "New Jersey": 1650, "New Mexico": 1500, "New York": 2200,
        "North Carolina": 1200, "North Dakota": 1250, "Ohio": 1150, "Oklahoma": 1700,
        "Oregon": 1450, "Pennsylvania": 1550, "Rhode Island": 1900, "South Carolina": 1650,
        "South Dakota": 1350, "Tennessee": 1500, "Texas": 1850, "Utah": 1400,
        "Vermont": 1100, "Virginia": 1300, "Washington": 1400, "West Virginia": 1550,
        "Wisconsin": 1150, "Wyoming": 1300, "District of Columbia": 1650,
    } as Record<string, number>,

    // Age-based rate multipliers
    ageMultipliers: {
        16: 2.5, 17: 2.3, 18: 2.1, 19: 1.9, 20: 1.7,
        21: 1.5, 22: 1.4, 23: 1.3, 24: 1.2, 25: 1.0,
        26: 0.95, 30: 0.90, 35: 0.85, 40: 0.85, 45: 0.85,
        50: 0.88, 55: 0.90, 60: 0.95, 65: 1.0, 70: 1.15, 75: 1.35,
    } as Record<number, number>,

    // Coverage types
    coverageTypes: [
        { id: "liability", name: "Liability Only", description: "Covers damage you cause to others", multiplier: 0.5 },
        { id: "collision", name: "Collision", description: "Covers damage to your car in accidents", multiplier: 0.75 },
        { id: "comprehensive", name: "Comprehensive", description: "Covers theft, weather, vandalism", multiplier: 0.85 },
        { id: "full", name: "Full Coverage", description: "Liability + Collision + Comprehensive", multiplier: 1.0 },
    ],

    // Driving record impact
    drivingRecord: {
        clean: { label: "Clean Record", multiplier: 1.0 },
        oneTicket: { label: "1 Ticket (3 years)", multiplier: 1.15 },
        twoTickets: { label: "2+ Tickets", multiplier: 1.35 },
        accident: { label: "At-Fault Accident", multiplier: 1.45 },
        dui: { label: "DUI/DWI", multiplier: 2.0 },
    },

    // Vehicle type impact
    vehicleType: {
        sedan: { label: "Sedan", multiplier: 1.0 },
        suv: { label: "SUV/Crossover", multiplier: 1.1 },
        truck: { label: "Pickup Truck", multiplier: 1.05 },
        sports: { label: "Sports Car", multiplier: 1.4 },
        luxury: { label: "Luxury Vehicle", multiplier: 1.5 },
        electric: { label: "Electric Vehicle", multiplier: 1.15 },
    },

    // Defaults
    defaults: {
        age: 35,
        state: "California",
        coverage: "full",
        drivingRecord: "clean",
        vehicleType: "sedan",
    },
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "auto-insurance/calculator",
        name: "Premium Calculator",
        shortName: "Premium",
        description: "Estimate your auto insurance premium",
        longDescription: "Get an instant estimate based on your age, location, vehicle, and driving history.",
        icon: Calculator,
        category: "insurance",
        keywords: ["auto insurance calculator", "car insurance calculator", "insurance quote"],
        featured: true,
    },
    {
        id: "auto-insurance/by-state",
        name: "Rates by State",
        shortName: "By State",
        description: "Compare insurance costs across all 50 states",
        longDescription: "See which states have the highest and lowest auto insurance rates.",
        icon: MapPin,
        category: "insurance",
        keywords: ["car insurance by state", "cheapest car insurance states", "auto insurance rates"],
        featured: true,
    },
    {
        id: "auto-insurance/by-age",
        name: "Rates by Age",
        shortName: "By Age",
        description: "How age affects your insurance rates",
        longDescription: "See how premiums change from teen drivers to seniors.",
        icon: Users,
        category: "insurance",
        keywords: ["car insurance by age", "teen driver insurance", "senior auto insurance"],
        featured: true,
    },
    {
        id: "auto-insurance/coverage-types",
        name: "Coverage Guide",
        shortName: "Coverage",
        description: "Liability vs Collision vs Comprehensive",
        longDescription: "Understand different coverage types and what you actually need.",
        icon: Shield,
        category: "insurance",
        keywords: ["auto insurance coverage", "liability vs full coverage", "car insurance types"],
        featured: false,
    },
] as const;

// ============================================
// PREMIUM CALCULATION
// ============================================

export interface PremiumResult {
    age: number;
    state: string;
    baseRate: number;
    ageMultiplier: number;
    coverageMultiplier: number;
    drivingMultiplier: number;
    vehicleMultiplier: number;
    annualPremium: number;
    monthlyPremium: number;
    coverageType: string;
    comparedToNational: number; // percentage vs national average
}

export function calculatePremium(
    age: number,
    state: string,
    coverageType: string = "full",
    drivingRecord: string = "clean",
    vehicleType: string = "sedan"
): PremiumResult {
    const { stateRates, ageMultipliers, coverageTypes, drivingRecord: drivingRecords, vehicleType: vehicleTypes, nationalAverage } = AUTO_INSURANCE_CONSTANTS;

    // Get base rate for state
    const baseRate = stateRates[state] || nationalAverage;

    // Get age multiplier (find closest age)
    const ages = Object.keys(ageMultipliers).map(Number).sort((a, b) => a - b);
    let closestAge = ages[0];
    for (const tableAge of ages) {
        if (tableAge <= age) closestAge = tableAge;
    }
    const ageMultiplier = ageMultipliers[closestAge] || 1.0;

    // Get coverage multiplier
    const coverage = coverageTypes.find(c => c.id === coverageType);
    const coverageMultiplier = coverage?.multiplier || 1.0;

    // Get driving record multiplier
    const driving = drivingRecords[drivingRecord as keyof typeof drivingRecords];
    const drivingMultiplier = driving?.multiplier || 1.0;

    // Get vehicle type multiplier
    const vehicle = vehicleTypes[vehicleType as keyof typeof vehicleTypes];
    const vehicleMultiplier = vehicle?.multiplier || 1.0;

    // Calculate final premium
    const annualPremium = Math.round(baseRate * ageMultiplier * coverageMultiplier * drivingMultiplier * vehicleMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    // Compare to national average
    const comparedToNational = Math.round(((annualPremium - nationalAverage) / nationalAverage) * 100);

    return {
        age,
        state,
        baseRate,
        ageMultiplier,
        coverageMultiplier,
        drivingMultiplier,
        vehicleMultiplier,
        annualPremium,
        monthlyPremium,
        coverageType,
        comparedToNational,
    };
}

// ============================================
// STATE COMPARISON
// ============================================

export interface StateComparison {
    state: string;
    annualPremium: number;
    monthlyPremium: number;
    vsNational: number;
    rank: number;
}

export function getStateRankings(): StateComparison[] {
    const { stateRates, nationalAverage } = AUTO_INSURANCE_CONSTANTS;

    const rankings: StateComparison[] = Object.entries(stateRates)
        .map(([state, premium]) => ({
            state,
            annualPremium: premium,
            monthlyPremium: Math.round(premium / 12),
            vsNational: Math.round(((premium - nationalAverage) / nationalAverage) * 100),
            rank: 0,
        }))
        .sort((a, b) => a.annualPremium - b.annualPremium);

    // Assign ranks
    rankings.forEach((item, index) => {
        item.rank = index + 1;
    });

    return rankings;
}

export function getCheapestStates(count: number = 5): StateComparison[] {
    return getStateRankings().slice(0, count);
}

export function getMostExpensiveStates(count: number = 5): StateComparison[] {
    return getStateRankings().slice(-count).reverse();
}

// ============================================
// AGE COMPARISON
// ============================================

export interface AgeComparison {
    age: number;
    annualPremium: number;
    monthlyPremium: number;
    multiplier: number;
}

export function getAgeComparison(state: string = "California"): AgeComparison[] {
    const { stateRates, ageMultipliers, nationalAverage } = AUTO_INSURANCE_CONSTANTS;
    const baseRate = stateRates[state] || nationalAverage;

    const ages = [16, 18, 21, 25, 30, 40, 50, 60, 65, 70];

    return ages.map(age => {
        const multiplier = ageMultipliers[age] || 1.0;
        const annualPremium = Math.round(baseRate * multiplier);
        return {
            age,
            annualPremium,
            monthlyPremium: Math.round(annualPremium / 12),
            multiplier,
        };
    });
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
