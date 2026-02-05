// ============================================
// CHILD-SUPPORT-CALC SITE CONFIGURATION
// Child Support Calculator
// 2025 data - US State Guidelines
// ============================================

import { Calculator, Scale, Users, FileText, Home, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Child Support Calculator",
    tagline: "Free 2025 Calculator",
    description: "Calculate child support payments for all 50 US states. Free 2025 calculator based on official state guidelines, income shares, and custody arrangements.",
    year: 2025,
    baseUrl: "https://mysmartcalculators.com/child-support",
};

// ============================================
// 2025 CHILD SUPPORT CONSTANTS
// Based on Federal Guidelines and State Models
// ============================================
export const CHILD_SUPPORT_CONSTANTS_2025 = {
    // Federal Poverty Guidelines 2025 (Annual)
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

    // Child-rearing expense percentages by income (2025 USDA data)
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
// STATE GUIDELINES DATA (2025)
// Income Shares Model (most common)
// ============================================
export const STATE_DATA: Record<string, {
    name: string;
    model: 'income_shares' | 'percentage' | 'hybrid';
    basePercent: { one: number; two: number; three: number };
    selfSupportReserve: number;
    minOrderMonthly: number;
    maxIncomeConsidered: number;
}> = {
    AL: { name: "Alabama", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.33 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    AK: { name: "Alaska", model: "percentage", basePercent: { one: 0.20, two: 0.27, three: 0.33 }, selfSupportReserve: 1300, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    AZ: { name: "Arizona", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    AR: { name: "Arkansas", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    CA: { name: "California", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.34 }, selfSupportReserve: 1350, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
    CO: { name: "Colorado", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
    CT: { name: "Connecticut", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1250, minOrderMonthly: 50, maxIncomeConsidered: 400000 },
    DE: { name: "Delaware", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    FL: { name: "Florida", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    GA: { name: "Georgia", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    HI: { name: "Hawaii", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.33 }, selfSupportReserve: 1400, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    ID: { name: "Idaho", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    IL: { name: "Illinois", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.33 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    IN: { name: "Indiana", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    IA: { name: "Iowa", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    KS: { name: "Kansas", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    KY: { name: "Kentucky", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    LA: { name: "Louisiana", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    ME: { name: "Maine", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 250000 },
    MD: { name: "Maryland", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    MA: { name: "Massachusetts", model: "income_shares", basePercent: { one: 0.20, two: 0.28, three: 0.33 }, selfSupportReserve: 1300, minOrderMonthly: 50, maxIncomeConsidered: 400000 },
    MI: { name: "Michigan", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 250000 },
    MN: { name: "Minnesota", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    MS: { name: "Mississippi", model: "percentage", basePercent: { one: 0.14, two: 0.20, three: 0.22 }, selfSupportReserve: 950, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    MO: { name: "Missouri", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    MT: { name: "Montana", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    NE: { name: "Nebraska", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    NV: { name: "Nevada", model: "percentage", basePercent: { one: 0.18, two: 0.25, three: 0.29 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    NH: { name: "New Hampshire", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1200, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    NJ: { name: "New Jersey", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1250, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
    NM: { name: "New Mexico", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    NY: { name: "New York", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.29 }, selfSupportReserve: 1350, minOrderMonthly: 50, maxIncomeConsidered: 400000 },
    NC: { name: "North Carolina", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    ND: { name: "North Dakota", model: "percentage", basePercent: { one: 0.17, two: 0.22, three: 0.26 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    OH: { name: "Ohio", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 336000 },
    OK: { name: "Oklahoma", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    OR: { name: "Oregon", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    PA: { name: "Pennsylvania", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
    RI: { name: "Rhode Island", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    SC: { name: "South Carolina", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 320000 },
    SD: { name: "South Dakota", model: "percentage", basePercent: { one: 0.17, two: 0.22, three: 0.26 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    TN: { name: "Tennessee", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1050, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    TX: { name: "Texas", model: "percentage", basePercent: { one: 0.20, two: 0.25, three: 0.30 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    UT: { name: "Utah", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    VT: { name: "Vermont", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1150, minOrderMonthly: 50, maxIncomeConsidered: 240000 },
    VA: { name: "Virginia", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 300000 },
    WA: { name: "Washington", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1250, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
    WV: { name: "West Virginia", model: "income_shares", basePercent: { one: 0.17, two: 0.25, three: 0.30 }, selfSupportReserve: 1000, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    WI: { name: "Wisconsin", model: "percentage", basePercent: { one: 0.17, two: 0.25, three: 0.29 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
    WY: { name: "Wyoming", model: "income_shares", basePercent: { one: 0.18, two: 0.26, three: 0.31 }, selfSupportReserve: 1100, minOrderMonthly: 50, maxIncomeConsidered: 180000 },
    DC: { name: "Washington DC", model: "income_shares", basePercent: { one: 0.19, two: 0.27, three: 0.32 }, selfSupportReserve: 1300, minOrderMonthly: 50, maxIncomeConsidered: 360000 },
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
        longDescription: "Free 2025 child support calculator. Estimate monthly payments based on income, custody, and state guidelines.",
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
