// ============================================
// WORKERS-COMP-CALC SITE CONFIGURATION
// 2026 Workers Compensation Calculator
// 50 State Maximum Weekly Benefits
// ============================================

import { Calculator, Scale, FileText, DollarSign, Shield, HardHat } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Workers Comp Calculator",
    tagline: "2026 State Maximum Rates Applied",
    description: "Calculate your workers compensation benefits for 2026. Free calculator with 50 state maximum rates, TTD calculation, and settlement estimator.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/workers-comp",
};

// ============================================
// 2026 WORKERS COMP CONSTANTS
// ============================================
export const WC_CONSTANTS_2026 = {
    // Standard TTD rate (most states)
    ttdRate: 0.6667, // 66.67% (2/3) of AWW

    // Settlement multipliers by body part
    bodyPartMultipliers: {
        back: { weeks: 300, multiplier: 1.5, name: "Back/Spine" },
        neck: { weeks: 250, multiplier: 1.4, name: "Neck" },
        shoulder: { weeks: 175, multiplier: 1.2, name: "Shoulder" },
        knee: { weeks: 175, multiplier: 1.2, name: "Knee" },
        hand: { weeks: 175, multiplier: 1.1, name: "Hand" },
        arm: { weeks: 200, multiplier: 1.2, name: "Arm" },
        leg: { weeks: 200, multiplier: 1.2, name: "Leg" },
        head: { weeks: 400, multiplier: 2.0, name: "Head/TBI" },
        wrist: { weeks: 150, multiplier: 1.1, name: "Wrist" },
        ankle: { weeks: 150, multiplier: 1.1, name: "Ankle" },
        other: { weeks: 150, multiplier: 1.0, name: "Other" },
    },

    // Settlement variance (for range calculation)
    settlementVariance: 0.3, // ±30%
};

// ============================================
// 50 STATE 2026 MAXIMUM WEEKLY BENEFITS
// Source: State workers comp agencies
// ============================================
export const STATE_WC_DATA: Record<string, {
    name: string;
    maxWeeklyBenefit: number;
    minWeeklyBenefit: number;
    ttdRate: number;
    waitingPeriod: number; // days
    retroactivePeriod: number; // days (0 if none)
    doctorChoice: "Employer" | "Employee" | "Initial Employer" | "Employer Panel";
    notes: string;
}> = {
    AL: { name: "Alabama", maxWeeklyBenefit: 1135, minWeeklyBenefit: 275, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 21, doctorChoice: "Employer", notes: "Employer selects treating physician" },
    AK: { name: "Alaska", maxWeeklyBenefit: 1588, minWeeklyBenefit: 298, ttdRate: 0.80, waitingPeriod: 3, retroactivePeriod: 28, doctorChoice: "Employee", notes: "Employee has initial choice of doctor" },
    AZ: { name: "Arizona", maxWeeklyBenefit: 1211, minWeeklyBenefit: 0, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee usually chooses doctor" },
    AR: { name: "Arkansas", maxWeeklyBenefit: 790, minWeeklyBenefit: 20, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer has right to select doctor" },
    CA: { name: "California", maxWeeklyBenefit: 1676, minWeeklyBenefit: 225, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Initial Employer", notes: "Employer chooses for first 30 days" },
    CO: { name: "Colorado", maxWeeklyBenefit: 1272, minWeeklyBenefit: 318, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer selects from list of 2 or more" },
    CT: { name: "Connecticut", maxWeeklyBenefit: 1636, minWeeklyBenefit: 327, ttdRate: 0.75, waitingPeriod: 3, retroactivePeriod: 7, doctorChoice: "Employer", notes: "Employer chooses within network" },
    DE: { name: "Delaware", maxWeeklyBenefit: 893, minWeeklyBenefit: 267, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 7, doctorChoice: "Employee", notes: "Employee chooses from provider list" },
    FL: { name: "Florida", maxWeeklyBenefit: 1197, minWeeklyBenefit: 20, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 21, doctorChoice: "Employer", notes: "Employer/Insurer chooses doctor" },
    GA: { name: "Georgia", maxWeeklyBenefit: 800, minWeeklyBenefit: 50, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 21, doctorChoice: "Employer Panel", notes: "Employee chooses from employer's panel" },
    HI: { name: "Hawaii", maxWeeklyBenefit: 1188, minWeeklyBenefit: 297, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 0, doctorChoice: "Employee", notes: "Employee has free choice of doctor" },
    ID: { name: "Idaho", maxWeeklyBenefit: 873, minWeeklyBenefit: 291, ttdRate: 0.6667, waitingPeriod: 5, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer selects physician" },
    IL: { name: "Illinois", maxWeeklyBenefit: 1910, minWeeklyBenefit: 286, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses (2 doctor limit)" },
    IN: { name: "Indiana", maxWeeklyBenefit: 918, minWeeklyBenefit: 50, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 21, doctorChoice: "Employer", notes: "Employer has total right to choose" },
    IA: { name: "Iowa", maxWeeklyBenefit: 2047, minWeeklyBenefit: 307, ttdRate: 0.80, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer chooses care provider" },
    KS: { name: "Kansas", maxWeeklyBenefit: 771, minWeeklyBenefit: 25, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 21, doctorChoice: "Employer", notes: "Employer selects doctor" },
    KY: { name: "Kentucky", maxWeeklyBenefit: 1036, minWeeklyBenefit: 206, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses within network" },
    LA: { name: "Louisiana", maxWeeklyBenefit: 806, minWeeklyBenefit: 201, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 42, doctorChoice: "Employee", notes: "Employee chooses one per specialty" },
    ME: { name: "Maine", maxWeeklyBenefit: 1135, minWeeklyBenefit: 227, ttdRate: 0.80, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Initial Employer", notes: "Employer chooses for first 10 days" },
    MD: { name: "Maryland", maxWeeklyBenefit: 1252, minWeeklyBenefit: 50, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee has free choice" },
    MA: { name: "Massachusetts", maxWeeklyBenefit: 1796, minWeeklyBenefit: 359, ttdRate: 0.60, waitingPeriod: 5, retroactivePeriod: 21, doctorChoice: "Employee", notes: "Employee chooses (initial insurer choice allowed)" },
    MI: { name: "Michigan", maxWeeklyBenefit: 1155, minWeeklyBenefit: 346, ttdRate: 0.80, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Initial Employer", notes: "Employer chooses for first 28 days" },
    MN: { name: "Minnesota", maxWeeklyBenefit: 1374, minWeeklyBenefit: 173, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 10, doctorChoice: "Employee", notes: "Employee has free choice" },
    MS: { name: "Mississippi", maxWeeklyBenefit: 603, minWeeklyBenefit: 25, ttdRate: 0.6667, waitingPeriod: 5, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses from list" },
    MO: { name: "Missouri", maxWeeklyBenefit: 1138, minWeeklyBenefit: 40, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer/Insurer selects doctor" },
    MT: { name: "Montana", maxWeeklyBenefit: 889, minWeeklyBenefit: 356, ttdRate: 0.6667, waitingPeriod: 5, retroactivePeriod: 21, doctorChoice: "Employee", notes: "Employee chooses initial doctor" },
    NE: { name: "Nebraska", maxWeeklyBenefit: 1092, minWeeklyBenefit: 72, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 42, doctorChoice: "Employee", notes: "Employee chooses if previous relationship exists" },
    NV: { name: "Nevada", maxWeeklyBenefit: 1119, minWeeklyBenefit: 280, ttdRate: 0.6667, waitingPeriod: 5, retroactivePeriod: 21, doctorChoice: "Employer Panel", notes: "Choice from insurer list" },
    NH: { name: "New Hampshire", maxWeeklyBenefit: 1973, minWeeklyBenefit: 394, ttdRate: 0.60, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses within network" },
    NJ: { name: "New Jersey", maxWeeklyBenefit: 1099, minWeeklyBenefit: 275, ttdRate: 0.70, waitingPeriod: 7, retroactivePeriod: 7, doctorChoice: "Employer", notes: "Employer controls medical care" },
    NM: { name: "New Mexico", maxWeeklyBenefit: 978, minWeeklyBenefit: 102, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 28, doctorChoice: "Initial Employer", notes: "Employer/Employee choice alternates" },
    NY: { name: "New York", maxWeeklyBenefit: 1145, minWeeklyBenefit: 275, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Free choice from authorized list" },
    NC: { name: "North Carolina", maxWeeklyBenefit: 1254, minWeeklyBenefit: 30, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 21, doctorChoice: "Employer", notes: "Employer selects doctor" },
    ND: { name: "North Dakota", maxWeeklyBenefit: 1288, minWeeklyBenefit: 600, ttdRate: 0.6667, waitingPeriod: 5, retroactivePeriod: 5, doctorChoice: "Employer", notes: "State fund selects doctor" },
    OH: { name: "Ohio", maxWeeklyBenefit: 1170, minWeeklyBenefit: 293, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses from BWC certified" },
    OK: { name: "Oklahoma", maxWeeklyBenefit: 1035, minWeeklyBenefit: 172, ttdRate: 0.70, waitingPeriod: 3, retroactivePeriod: 21, doctorChoice: "Employer", notes: "Employer chooses within network" },
    OR: { name: "Oregon", maxWeeklyBenefit: 1517, minWeeklyBenefit: 379, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses MCO provider" },
    PA: { name: "Pennsylvania", maxWeeklyBenefit: 1325, minWeeklyBenefit: 331, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Initial Employer", notes: "Employer chooses for first 90 days" },
    RI: { name: "Rhode Island", maxWeeklyBenefit: 1226, minWeeklyBenefit: 184, ttdRate: 0.75, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee has first choice" },
    SC: { name: "South Carolina", maxWeeklyBenefit: 1006, minWeeklyBenefit: 75, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer selects doctor" },
    SD: { name: "South Dakota", maxWeeklyBenefit: 989, minWeeklyBenefit: 494, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 7, doctorChoice: "Employee", notes: "Employee chooses initial doctor" },
    TN: { name: "Tennessee", maxWeeklyBenefit: 1238, minWeeklyBenefit: 185, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 14, doctorChoice: "Employer Panel", notes: "Employer provides list of 3" },
    TX: { name: "Texas", maxWeeklyBenefit: 1156, minWeeklyBenefit: 173, ttdRate: 0.70, waitingPeriod: 7, retroactivePeriod: 28, doctorChoice: "Employee", notes: "Employee chooses from network" },
    UT: { name: "Utah", maxWeeklyBenefit: 1121, minWeeklyBenefit: 72, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employer", notes: "Employer selects doctor" },
    VT: { name: "Vermont", maxWeeklyBenefit: 1337, minWeeklyBenefit: 267, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 7, doctorChoice: "Employee", notes: "Employee chooses initial doctor" },
    VA: { name: "Virginia", maxWeeklyBenefit: 1347, minWeeklyBenefit: 337, ttdRate: 0.6667, waitingPeriod: 7, retroactivePeriod: 21, doctorChoice: "Employer Panel", notes: "Employer provides list of 3" },
    WA: { name: "Washington", maxWeeklyBenefit: 1765, minWeeklyBenefit: 353, ttdRate: 0.60, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee chooses from provider network" },
    WV: { name: "West Virginia", maxWeeklyBenefit: 1052, minWeeklyBenefit: 263, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 7, doctorChoice: "Employer Network", notes: "Choice within managed care network" } as any,
    WI: { name: "Wisconsin", maxWeeklyBenefit: 1233, minWeeklyBenefit: 370, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 7, doctorChoice: "Employee", notes: "Employee has free choice" } as any,
    WY: { name: "Wyoming", maxWeeklyBenefit: 1044, minWeeklyBenefit: 522, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 0, doctorChoice: "Employee", notes: "Employee selects from list" } as any,
    DC: { name: "Washington DC", maxWeeklyBenefit: 1807, minWeeklyBenefit: 451, ttdRate: 0.6667, waitingPeriod: 3, retroactivePeriod: 14, doctorChoice: "Employee", notes: "Employee has free choice" } as any,
};

// States with highest max benefits
export const TOP_STATES = ['IA', 'NH', 'IL', 'DC', 'MA', 'WA', 'CA'];

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "workers-comp/calculator",
        name: "Workers Comp Calculator",
        shortName: "Calculator",
        description: "Calculate weekly benefits and settlement estimate",
        longDescription: "Free 2026 workers compensation calculator. Estimate your TTD benefits and potential settlement based on state laws and injury type.",
        icon: Calculator,
        category: "legal",
        keywords: ["workers comp calculator", "TTD calculator", "workers compensation"],
        featured: true,
    },
    {
        id: "workers-comp/state-rates",
        name: "2026 State Maximum Rates",
        shortName: "State Rates",
        description: "Compare workers comp limits by state",
        longDescription: "Compare 2026 workers compensation maximum weekly benefits across all 50 states.",
        icon: Scale,
        category: "legal",
        keywords: ["workers comp by state", "state maximum rates", "TTD limits"],
        featured: false,
    },
] as const;

// ============================================
// WORKERS COMP CALCULATION FUNCTION
// ============================================
export interface WorkersCompResult {
    state: string;
    stateName: string;
    averageWeeklyWage: number;
    weeklyBenefit: number;
    stateMaxApplied: boolean;
    stateMax: number;
    bodyPart: string;
    bodyPartName: string;
    settlementLow: number;
    settlementHigh: number;
    weeksOfBenefits: number;
    waitingPeriod: number;
    retroactivePeriod: number;
    doctorChoice: string;
}

export function calculateWorkersComp(
    stateCode: string,
    averageWeeklyWage: number,
    bodyPart: string = 'other'
): WorkersCompResult {
    const state = STATE_WC_DATA[stateCode] || STATE_WC_DATA['CA'];
    const constants = WC_CONSTANTS_2026;
    const bodyPartData = constants.bodyPartMultipliers[bodyPart as keyof typeof constants.bodyPartMultipliers]
        || constants.bodyPartMultipliers.other;

    // Calculate TTD (Temporary Total Disability) benefit
    let weeklyBenefit = Math.round(averageWeeklyWage * state.ttdRate);
    let stateMaxApplied = false;

    // Apply state maximum cap
    if (weeklyBenefit > state.maxWeeklyBenefit) {
        weeklyBenefit = state.maxWeeklyBenefit;
        stateMaxApplied = true;
    }

    // Apply state minimum
    if (weeklyBenefit < state.minWeeklyBenefit && averageWeeklyWage > 0) {
        weeklyBenefit = state.minWeeklyBenefit;
    }

    // Calculate settlement estimate based on body part
    const weeksOfBenefits = bodyPartData.weeks;
    const baseSettlement = weeklyBenefit * weeksOfBenefits * bodyPartData.multiplier;

    // Apply variance for range
    const settlementLow = Math.round(baseSettlement * (1 - constants.settlementVariance));
    const settlementHigh = Math.round(baseSettlement * (1 + constants.settlementVariance));

    return {
        state: stateCode,
        stateName: state.name,
        averageWeeklyWage,
        weeklyBenefit,
        stateMaxApplied,
        stateMax: state.maxWeeklyBenefit,
        bodyPart,
        bodyPartName: bodyPartData.name,
        settlementLow,
        settlementHigh,
        weeksOfBenefits,
        waitingPeriod: state.waitingPeriod,
        retroactivePeriod: state.retroactivePeriod,
        doctorChoice: state.doctorChoice,
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

export function getStatesList(): { code: string; name: string; maxBenefit: number }[] {
    return Object.entries(STATE_WC_DATA).map(([code, data]) => ({
        code,
        name: data.name,
        maxBenefit: data.maxWeeklyBenefit,
    })).sort((a, b) => a.name.localeCompare(b.name));
}

export function getBodyPartsList(): { id: string; name: string; weeks: number }[] {
    return Object.entries(WC_CONSTANTS_2026.bodyPartMultipliers).map(([id, data]) => ({
        id,
        name: data.name,
        weeks: data.weeks,
    }));
}
