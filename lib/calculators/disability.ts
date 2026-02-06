// ============================================
// DISABILITY-CALC SITE CONFIGURATION
// 2026 SSDI & SSI Benefits Calculator
// Official SSA Data - 2.8% COLA
// ============================================

import { Calculator, Scale, FileCheck, DollarSign, Calendar, Shield } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Disability Benefits Calculator",
    tagline: "2026 SSDI & SSI Calculator - Updated with 2.8% COLA",
    description: "Calculate your 2026 Social Security Disability (SSDI) and SSI benefits. Free calculator with Back Pay estimation, updated with official 2.8% COLA increase.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/disability",
};

// ============================================
// 2026 SSA OFFICIAL CONSTANTS
// Source: ssa.gov (October 2026 announcement)
// ============================================
export const SSA_CONSTANTS_2026 = {
    // Cost of Living Adjustment
    cola: 0.028, // 2.8%
    colaDisplay: "2.8%",

    // SSDI Benefits
    ssdi: {
        averageMonthly: 1630,      // Average SSDI payment
        maxAtFRA: 4152,            // Maximum at Full Retirement Age
        maxAt70: 5251,             // Maximum if claiming at 70
        waitingPeriodMonths: 5,    // 5-month waiting period
    },

    // SSI Benefits (Federal)
    ssi: {
        maxIndividual: 994,        // Maximum individual SSI
        maxCouple: 1492,           // Maximum couple SSI
        resourceLimitIndividual: 2000,
        resourceLimitCouple: 3000,
    },

    // Earnings Limits
    earnings: {
        sgaLimit: 2040,            // Substantial Gainful Activity limit/month
        sgaLimitAnnual: 24480,     // SGA annual
        blindSgaLimit: 2590,       // SGA limit for blind
        trialWorkPeriod: 1170,     // Trial work period threshold
    },

    // Tax & Earnings
    taxableMax: 184500,            // Maximum taxable earnings

    // Payment Schedule
    paymentDates: {
        ssiPaymentDay: 1,          // SSI pays on 1st (or last business day of prior month)
        ssdiSchedule: "based on birthday", // SSDI based on birth date
    },

    // PIA Bend Points (for calculating benefits)
    bendPoints: {
        first: 1174,               // 90% of first $1,174
        second: 7078,              // 32% between $1,174 and $7,078
        // 15% above $7,078
    },
};

// ============================================
// STATE SSI SUPPLEMENTS (2026)
// Some states add to federal SSI
// ============================================
export const STATE_SSI_SUPPLEMENTS: Record<string, {
    name: string;
    supplement: number;
    notes: string;
}> = {
    AL: { name: "Alabama", supplement: 0, notes: "No state supplement" },
    AK: { name: "Alaska", supplement: 362, notes: "State supplement" },
    AZ: { name: "Arizona", supplement: 0, notes: "No state supplement" },
    AR: { name: "Arkansas", supplement: 0, notes: "No state supplement" },
    CA: { name: "California", supplement: 197, notes: "SSP - State Supplementary Payment" },
    CO: { name: "Colorado", supplement: 24, notes: "State supplement" },
    CT: { name: "Connecticut", supplement: 179, notes: "State supplement" },
    DE: { name: "Delaware", supplement: 0, notes: "No state supplement" },
    FL: { name: "Florida", supplement: 0, notes: "No state supplement" },
    GA: { name: "Georgia", supplement: 0, notes: "No state supplement" },
    HI: { name: "Hawaii", supplement: 11, notes: "State supplement" },
    ID: { name: "Idaho", supplement: 0, notes: "No state supplement" },
    IL: { name: "Illinois", supplement: 0, notes: "No state supplement" },
    IN: { name: "Indiana", supplement: 0, notes: "No state supplement" },
    IA: { name: "Iowa", supplement: 0, notes: "No state supplement" },
    KS: { name: "Kansas", supplement: 0, notes: "No state supplement" },
    KY: { name: "Kentucky", supplement: 0, notes: "No state supplement" },
    LA: { name: "Louisiana", supplement: 0, notes: "No state supplement" },
    ME: { name: "Maine", supplement: 10, notes: "State supplement" },
    MD: { name: "Maryland", supplement: 0, notes: "No state supplement" },
    MA: { name: "Massachusetts", supplement: 114, notes: "State supplement" },
    MI: { name: "Michigan", supplement: 14, notes: "State supplement" },
    MN: { name: "Minnesota", supplement: 81, notes: "State supplement" },
    MS: { name: "Mississippi", supplement: 0, notes: "No state supplement" },
    MO: { name: "Missouri", supplement: 0, notes: "No state supplement" },
    MT: { name: "Montana", supplement: 0, notes: "No state supplement" },
    NE: { name: "Nebraska", supplement: 0, notes: "No state supplement" },
    NV: { name: "Nevada", supplement: 0, notes: "No state supplement" },
    NH: { name: "New Hampshire", supplement: 0, notes: "No state supplement" },
    NJ: { name: "New Jersey", supplement: 35, notes: "State supplement" },
    NM: { name: "New Mexico", supplement: 0, notes: "No state supplement" },
    NY: { name: "New York", supplement: 87, notes: "State supplement" },
    NC: { name: "North Carolina", supplement: 0, notes: "No state supplement" },
    ND: { name: "North Dakota", supplement: 0, notes: "No state supplement" },
    OH: { name: "Ohio", supplement: 0, notes: "No state supplement" },
    OK: { name: "Oklahoma", supplement: 0, notes: "No state supplement" },
    OR: { name: "Oregon", supplement: 0, notes: "No state supplement" },
    PA: { name: "Pennsylvania", supplement: 28, notes: "State supplement" },
    RI: { name: "Rhode Island", supplement: 71, notes: "State supplement" },
    SC: { name: "South Carolina", supplement: 0, notes: "No state supplement" },
    SD: { name: "South Dakota", supplement: 0, notes: "No state supplement" },
    TN: { name: "Tennessee", supplement: 0, notes: "No state supplement" },
    TX: { name: "Texas", supplement: 0, notes: "No state supplement" },
    UT: { name: "Utah", supplement: 11, notes: "State supplement" },
    VT: { name: "Vermont", supplement: 90, notes: "State supplement" },
    VA: { name: "Virginia", supplement: 0, notes: "No state supplement" },
    WA: { name: "Washington", supplement: 74, notes: "State supplement" },
    WV: { name: "West Virginia", supplement: 0, notes: "No state supplement" },
    WI: { name: "Wisconsin", supplement: 84, notes: "State supplement" },
    WY: { name: "Wyoming", supplement: 0, notes: "No state supplement" },
    DC: { name: "Washington DC", supplement: 16, notes: "District supplement" },
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "disability/ssdi-calculator",
        name: "SSDI Calculator",
        shortName: "SSDI",
        description: "Calculate Social Security Disability benefits",
        longDescription: "Free 2026 SSDI calculator. Estimate your monthly disability benefits and potential Back Pay based on your work history.",
        icon: Calculator,
        category: "disability",
        keywords: ["SSDI calculator", "social security disability", "disability benefits 2026"],
        featured: true,
    },
    {
        id: "disability/ssi-calculator",
        name: "SSI Calculator",
        shortName: "SSI",
        description: "Calculate Supplemental Security Income",
        longDescription: "Free 2026 SSI calculator. Estimate your monthly SSI benefits including state supplements for all 50 states.",
        icon: DollarSign,
        category: "disability",
        keywords: ["SSI calculator", "supplemental security income", "SSI benefits 2026"],
        featured: true,
    },
    {
        id: "disability/eligibility",
        name: "Eligibility Guide",
        shortName: "Eligibility",
        description: "Check SSDI vs SSI eligibility requirements",
        longDescription: "Compare SSDI and SSI requirements. Find out which disability program you may qualify for based on your situation.",
        icon: FileCheck,
        category: "disability",
        keywords: ["SSDI eligibility", "SSI eligibility", "disability requirements"],
        featured: false,
    },
] as const;

// ============================================
// SSDI CALCULATION FUNCTION
// ============================================
export interface SSDIResult {
    state: string;
    stateName: string;
    averageIncome: number;
    currentAge: number;
    disabilityStartDate: Date;
    monthlyBenefit: number;
    monthlyWithCOLA: number;
    backPayMonths: number;
    backPayAmount: number;
    waitingPeriodMonths: number;
    colaIncrease: number;
}

export function calculateSSDI(
    stateCode: string,
    averageAnnualIncome: number,
    currentAge: number,
    disabilityStartDate: Date
): SSDIResult {
    const state = STATE_SSI_SUPPLEMENTS[stateCode] || STATE_SSI_SUPPLEMENTS['CA'];
    const constants = SSA_CONSTANTS_2026;

    // Calculate AIME (Average Indexed Monthly Earnings)
    const aime = Math.round(averageAnnualIncome / 12);

    // Calculate PIA using bend points (simplified)
    let pia = 0;
    if (aime <= constants.bendPoints.first) {
        pia = aime * 0.90;
    } else if (aime <= constants.bendPoints.second) {
        pia = (constants.bendPoints.first * 0.90) +
            ((aime - constants.bendPoints.first) * 0.32);
    } else {
        pia = (constants.bendPoints.first * 0.90) +
            ((constants.bendPoints.second - constants.bendPoints.first) * 0.32) +
            ((aime - constants.bendPoints.second) * 0.15);
    }

    // Round and cap at maximum
    let monthlyBenefit = Math.round(pia);
    monthlyBenefit = Math.min(monthlyBenefit, constants.ssdi.maxAtFRA);
    monthlyBenefit = Math.max(monthlyBenefit, 0);

    // Apply COLA
    const colaIncrease = Math.round(monthlyBenefit * constants.cola);
    const monthlyWithCOLA = monthlyBenefit + colaIncrease;

    // Calculate Back Pay (months since disability start, minus 5-month waiting period)
    const now = new Date();
    const monthsSinceDisability = Math.floor(
        (now.getTime() - disabilityStartDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
    );
    const backPayMonths = Math.max(0, monthsSinceDisability - constants.ssdi.waitingPeriodMonths);
    const backPayAmount = backPayMonths * monthlyWithCOLA;

    return {
        state: stateCode,
        stateName: state.name,
        averageIncome: averageAnnualIncome,
        currentAge,
        disabilityStartDate,
        monthlyBenefit,
        monthlyWithCOLA,
        backPayMonths,
        backPayAmount,
        waitingPeriodMonths: constants.ssdi.waitingPeriodMonths,
        colaIncrease,
    };
}

// ============================================
// SSI CALCULATION FUNCTION
// ============================================
export interface SSIResult {
    state: string;
    stateName: string;
    filingStatus: 'individual' | 'couple';
    federalSSI: number;
    stateSupplement: number;
    totalMonthly: number;
    countableIncome: number;
    incomeDeduction: number;
}

export function calculateSSI(
    stateCode: string,
    monthlyIncome: number,
    filingStatus: 'individual' | 'couple' = 'individual'
): SSIResult {
    const state = STATE_SSI_SUPPLEMENTS[stateCode] || STATE_SSI_SUPPLEMENTS['CA'];
    const constants = SSA_CONSTANTS_2026;

    // Federal SSI base
    const federalBase = filingStatus === 'couple'
        ? constants.ssi.maxCouple
        : constants.ssi.maxIndividual;

    // Calculate countable income (simplified: earned income / 2 after $65 exclusion)
    const generalExclusion = 20;
    const earnedExclusion = 65;
    let countableIncome = 0;

    if (monthlyIncome > 0) {
        const afterGeneral = Math.max(0, monthlyIncome - generalExclusion);
        const afterEarned = Math.max(0, afterGeneral - earnedExclusion);
        countableIncome = Math.round(afterEarned / 2);
    }

    // Calculate federal SSI after income deduction
    const federalSSI = Math.max(0, federalBase - countableIncome);

    // State supplement
    const stateSupplement = state.supplement;

    // Total monthly
    const totalMonthly = federalSSI + stateSupplement;

    return {
        state: stateCode,
        stateName: state.name,
        filingStatus,
        federalSSI,
        stateSupplement,
        totalMonthly,
        countableIncome,
        incomeDeduction: countableIncome,
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

export function getStatesList(): { code: string; name: string; supplement: number }[] {
    return Object.entries(STATE_SSI_SUPPLEMENTS).map(([code, data]) => ({
        code,
        name: data.name,
        supplement: data.supplement,
    })).sort((a, b) => a.name.localeCompare(b.name));
}

// 2026 Payment Schedule (based on birth date)
export function getPaymentDate(birthDay: number): string {
    if (birthDay >= 1 && birthDay <= 10) {
        return "2nd Wednesday of each month";
    } else if (birthDay >= 11 && birthDay <= 20) {
        return "3rd Wednesday of each month";
    } else {
        return "4th Wednesday of each month";
    }
}
