// ============================================
// CHILD-SUPPORT-CALC SITE CONFIGURATION
// Child Support Calculator
// 2026 data - US State Guidelines
// ============================================

import { Calculator, Scale, Users, FileText, Home, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Child Support Calculator",
    tagline: "Free 2026 Calculator",
    description: "Calculate child support payments for all 50 US states. Free 2026 calculator based on official state guidelines, income shares, and custody arrangements.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/child-support",
};

// ============================================
// 2026 CHILD SUPPORT CONSTANTS
// Based on Federal Guidelines and State Models
// ============================================
export const CHILD_SUPPORT_CONSTANTS_2026 = {
    // Federal Poverty Guidelines 2026 (Annual)
    federalPovertyLevel: {
        1: 15060,
        2: 20440,
        3: 25820,
        4: 31200,
        5: 36580,
        6: 41960,
    },

    // Self-Support Reserve (typically 135% of FPL for 1 person)
    selfSupportReserve: 20331,

    // Average custody percentages
    custodyPercentages: {
        primaryParent: 70,      // Standard primary custody
        joint5050: 50,          // 50/50 joint custody
        everyOtherWeekend: 14,  // ~4 days/month
        extendedSummer: 25,     // Standard + summer
    },

    // Child-rearing expense percentages by income (2026 USDA data)
    childExpensePercent: {
        oneChild: 0.17,         // 17% of combined income
        twoChildren: 0.25,      // 25%
        threeChildren: 0.30,    // 30%
        fourPlusChildren: 0.33, // 33%
    },

    // Health insurance average monthly cost per child
    healthInsurancePerChild: 250,

    // Childcare average monthly cost
    childcareMonthly: {
        infant: 1500,
        toddler: 1200,
        preschool: 1000,
        schoolAge: 600,
    },
} as const;

// ============================================
// STATE GUIDELINES DATA (2026)
// Income Shares Model (most common)
// ============================================
export const STATE_DATA: Record<string, {
    name: string;
    model: 'income_shares' | 'percentage' | 'hybrid';
    basePercent: { one: number; two: number; three: number };
    selfSupportReserve: number;
    minOrderMonthly: number;
    maxIncomeConsidered: number;
    interestRateArrears: number; // percentage
    emancipationAge: number; // years
}> = {
    AL: { name: "Alabama", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.33 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 7.5, emancipationAge: 19 },
    AK: { name: "Alaska", model: "percentage", basePercent: { one: 0.20, two: 0.27, three: 0.33 }, selfSupportReserve: 1300, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 5.25, emancipationAge: 18 },
    AZ: { name: "Arizona", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 10.0, emancipationAge: 18 },
    AR: { name: "Arkansas", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 6.0, emancipationAge: 18 },
    CA: { name: "California", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.34 }, selfSupportReserve: 1350, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 10.0, emancipationAge: 18 },
    CO: { name: "Colorado", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 9.0, emancipationAge: 19 },
    CT: { name: "Connecticut", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1250, minOrderMonthly: 50, maxIncomeConsidered: 400000, interestRateArrears: 10.0, emancipationAge: 18 },
    DE: { name: "Delaware", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 10.0, emancipationAge: 18 },
    FL: { name: "Florida", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 9.3, emancipationAge: 18 },
    GA: { name: "Georgia", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 7.0, emancipationAge: 18 },
    HI: { name: "Hawaii", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.33 }, selfSupportReserve: 1400, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 10.0, emancipationAge: 18 },
    ID: { name: "Idaho", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 10.0, emancipationAge: 18 },
    IL: { name: "Illinois", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.33 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 9.0, emancipationAge: 18 },
    IN: { name: "Indiana", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 8.0, emancipationAge: 19 },
    IA: { name: "Iowa", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 2.1, emancipationAge: 18 },
    KS: { name: "Kansas", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 10.0, emancipationAge: 18 },
    KY: { name: "Kentucky", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 12.0, emancipationAge: 18 },
    LA: { name: "Louisiana", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 6.0, emancipationAge: 18 },
    ME: { name: "Maine", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 250000, interestRateArrears: 7.9, emancipationAge: 18 },
    MD: { name: "Maryland", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 10.0, emancipationAge: 18 },
    MA: { name: "Massachusetts", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.33 }, selfSupportReserve: 1300, minOrderMonthly: 50, maxIncomeConsidered: 400000, interestRateArrears: 12.0, emancipationAge: 18 },
    MI: { name: "Michigan", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 250000, interestRateArrears: 8.0, emancipationAge: 18 },
    MN: { name: "Minnesota", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 4.0, emancipationAge: 18 },
    MS: { name: "Mississippi", model: "percentage", basePercent: { one: 0.14, two: 0.20, three: 0.22 }, selfSupportReserve: 950, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 8.0, emancipationAge: 21 },
    MO: { name: "Missouri", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 9.0, emancipationAge: 18 },
    MT: { name: "Montana", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 10.0, emancipationAge: 18 },
    NE: { name: "Nebraska", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 6.5, emancipationAge: 19 },
    NV: { name: "Nevada", model: "percentage", basePercent: { one: 0.18, two: 0.25, three: 0.29 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 5.25, emancipationAge: 18 },
    NH: { name: "New Hampshire", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 6.0, emancipationAge: 18 },
    NJ: { name: "New Jersey", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1250, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 0.0, emancipationAge: 19 },
    NM: { name: "New Mexico", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 8.75, emancipationAge: 18 },
    NY: { name: "New York", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.29 }, selfSupportReserve: 1350, minOrderMonthly: 50, maxIncomeConsidered: 400000, interestRateArrears: 9.0, emancipationAge: 21 },
    NC: { name: "North Carolina", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 8.0, emancipationAge: 18 },
    ND: { name: "North Dakota", model: "percentage", basePercent: { one: 0.17, two: 0.22, three: 0.26 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 6.5, emancipationAge: 18 },
    OH: { name: "Ohio", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 336000, interestRateArrears: 10.0, emancipationAge: 18 },
    OK: { name: "Oklahoma", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 10.0, emancipationAge: 18 },
    OR: { name: "Oregon", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 9.0, emancipationAge: 18 },
    PA: { name: "Pennsylvania", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 6.0, emancipationAge: 18 },
    RI: { name: "Rhode Island", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 12.0, emancipationAge: 18 },
    SC: { name: "South Carolina", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 320000, interestRateArrears: 8.75, emancipationAge: 18 },
    SD: { name: "South Dakota", model: "percentage", basePercent: { one: 0.17, two: 0.22, three: 0.26 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 10.0, emancipationAge: 18 },
    TN: { name: "Tennessee", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 12.0, emancipationAge: 18 },
    TX: { name: "Texas", model: "percentage", basePercent: { one: 0.20, two: 0.25, three: 0.30 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 6.0, emancipationAge: 18 },
    UT: { name: "Utah", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 10.0, emancipationAge: 18 },
    VT: { name: "Vermont", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000, interestRateArrears: 12.0, emancipationAge: 18 },
    VA: { name: "Virginia", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 300000, interestRateArrears: 6.0, emancipationAge: 18 },
    WA: { name: "Washington", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1250, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 12.0, emancipationAge: 18 },
    WV: { name: "West Virginia", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 10.0, emancipationAge: 18 },
    WI: { name: "Wisconsin", model: "percentage", basePercent: { one: 0.17, two: 0.25, three: 0.29 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 12.0, emancipationAge: 18 },
    WY: { name: "Wyoming", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000, interestRateArrears: 10.0, emancipationAge: 18 },
    DC: { name: "Washington DC", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1300, minOrderMonthly: 50, maxIncomeConsidered: 360000, interestRateArrears: 4.0, emancipationAge: 18 },
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "child-support/child-support",
        name: "Child Support Calculator",
        shortName: "Calculator",
        description: "Calculate child support payments by state",
        longDescription: "Free 2026 child support calculator. Estimate monthly payments based on income, custody, and state guidelines.",
        icon: Calculator,
        category: "family",
        keywords: ["child support calculator", "custody calculator", "child support by state"],
        featured: true,
    },
    {
        id: "child-support/state-guidelines",
        name: "State Guidelines",
        shortName: "By State",
        description: "Child support guidelines by state",
        longDescription: "Compare child support guidelines, percentages, and requirements across all 50 US states.",
        icon: Scale,
        category: "family",
        keywords: ["child support by state", "state guidelines", "child support laws"],
        featured: true,
    },
    {
        id: "child-support/custody-calculator",
        name: "Custody Percentage Calculator",
        shortName: "Custody",
        description: "Calculate custody time percentages",
        longDescription: "Calculate your parenting time percentage based on custody schedule for child support calculations.",
        icon: Users,
        category: "family",
        keywords: ["custody calculator", "parenting time", "visitation schedule"],
        featured: false,
    },
] as const;

// ============================================
// CHILD SUPPORT CALCULATION FUNCTION
// ============================================
export interface ChildSupportResult {
    state: string;
    stateName: string;
    payorIncome: number;
    recipientIncome: number;
    combinedIncome: number;
    numberOfChildren: number;
    payorCustodyPercent: number;
    baseObligation: number;
    payorShare: number;
    custodyAdjustment: number;
    monthlySupport: number;
    annualSupport: number;
    model: string;
    interestRate: number;
    emancipationAge: number;
}

export function calculateChildSupport(
    stateCode: string,
    payorMonthlyIncome: number,
    recipientMonthlyIncome: number,
    numberOfChildren: number,
    payorCustodyPercent: number = 20
): ChildSupportResult {
    const state = STATE_DATA[stateCode] || STATE_DATA['CA'];

    // Get base percentage based on number of children
    let basePercent = state.basePercent.one;
    if (numberOfChildren === 2) basePercent = state.basePercent.two;
    if (numberOfChildren >= 3) basePercent = state.basePercent.three;

    // Calculate combined monthly income
    const combinedIncome = payorMonthlyIncome + recipientMonthlyIncome;

    // Base obligation (combined income × percentage)
    const baseObligation = Math.round(combinedIncome * basePercent);

    // Payor's share based on income proportion
    const payorIncomeShare = payorMonthlyIncome / combinedIncome;
    const payorShare = Math.round(baseObligation * payorIncomeShare);

    // Custody adjustment (more custody = less support)
    // If payor has 50% custody, support is reduced significantly
    let custodyMultiplier = 1;
    if (payorCustodyPercent >= 40) {
        custodyMultiplier = 0.5; // Significant reduction for near 50/50
    } else if (payorCustodyPercent >= 30) {
        custodyMultiplier = 0.7;
    } else if (payorCustodyPercent >= 20) {
        custodyMultiplier = 0.85;
    }

    const custodyAdjustment = Math.round(payorShare * (1 - custodyMultiplier));
    const monthlySupport = Math.max(state.minOrderMonthly, payorShare - custodyAdjustment);

    return {
        state: stateCode,
        stateName: state.name,
        payorIncome: payorMonthlyIncome,
        recipientIncome: recipientMonthlyIncome,
        combinedIncome,
        numberOfChildren,
        payorCustodyPercent,
        baseObligation,
        payorShare,
        custodyAdjustment,
        monthlySupport,
        annualSupport: monthlySupport * 12,
        model: state.model,
        interestRate: state.interestRateArrears,
        emancipationAge: state.emancipationAge,
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

export function getStatesList(): { code: string; name: string }[] {
    return Object.entries(STATE_DATA).map(([code, data]) => ({
        code,
        name: data.name,
    })).sort((a, b) => a.name.localeCompare(b.name));
}
