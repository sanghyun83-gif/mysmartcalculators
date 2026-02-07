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
        1: 15960,
        2: 21640,
        3: 27320,
        4: 33000,
        5: 38680,
        6: 44360,
    },

    // Self-Support Reserve (typically 135% of FPL for 1 person)
    selfSupportReserve: 21550, // 15960 * 1.35 = 21546

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
    citation: "Based on 2026 Federal Poverty Guidelines (HHS), USDA Child-Rearing Data, and individual State Judicial Guidelines for all 50 US states."
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
}

export function calculateChildSupport(
    stateCode: string,
    payorMonthlyIncome: number,
    recipientMonthlyIncome: number,
    numberOfChildren: number,
    payorCustodyPercent: number = 20
): ChildSupportResult {
    const state = STATE_DATA[stateCode] || STATE_DATA['CA'];
    const constants = CHILD_SUPPORT_CONSTANTS_2026;

    // 1. Calculate combined monthly income
    const combinedIncome = payorMonthlyIncome + recipientMonthlyIncome;

    // 2. Determine base obligation (Simplified model for 300+ states scale)
    let baseObligation = 0;

    if (state.model === 'percentage') {
        // Percentage of Income Model (Model A): Obligation is based only on Payor's income
        let percentage = state.basePercent.one;
        if (numberOfChildren === 2) percentage = state.basePercent.two;
        if (numberOfChildren >= 3) percentage = state.basePercent.three;

        baseObligation = Math.round(payorMonthlyIncome * percentage);
    } else {
        // Income Shares Model (Model B): Obligation based on combined income, then split
        let percentage = state.basePercent.one;
        if (numberOfChildren === 2) percentage = state.basePercent.two;
        if (numberOfChildren >= 3) percentage = state.basePercent.three;

        // Apply a slight regression for higher combined incomes
        const incomeAdjustment = combinedIncome > 15000 ? 0.85 : 1.0;
        baseObligation = Math.round(combinedIncome * percentage * incomeAdjustment);
    }

    // 3. Allocate Payor's Share
    let payorShare = 0;
    if (state.model === 'percentage') {
        payorShare = baseObligation;
    } else {
        const payorIncomeProportion = payorMonthlyIncome / (combinedIncome || 1);
        payorShare = Math.round(baseObligation * payorIncomeProportion);
    }

    // 4. Custody Adjustment (Parenting Time Offset)
    // Most states reduce support if non-custodial parent has significant time
    let custodyMultiplier = 1.0;
    if (payorCustodyPercent >= 50) {
        custodyMultiplier = 0.0; // Assume 50/50 split means offset covers it (simplified)
    } else if (payorCustodyPercent >= 40) {
        custodyMultiplier = 0.4;
    } else if (payorCustodyPercent >= 30) {
        custodyMultiplier = 0.6;
    } else if (payorCustodyPercent >= 20) {
        custodyMultiplier = 0.85;
    }

    const monthlySupportBeforeReserve = Math.round(payorShare * custodyMultiplier);

    // 5. Low Income Protection (Self-Support Reserve)
    const monthlyReserve = constants.selfSupportReserve / 12;
    const supportAfterReserve = Math.max(
        state.minOrderMonthly,
        Math.min(monthlySupportBeforeReserve, Math.max(0, payorMonthlyIncome - monthlyReserve))
    );

    const monthlySupport = Math.round(supportAfterReserve);

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
        custodyAdjustment: Math.round(payorShare * (1 - custodyMultiplier)),
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
