// ============================================
// DIVORCE-CALC SITE CONFIGURATION
// Divorce Settlement & Alimony Calculator
// 2026 data - US State Laws
// ============================================

import { Calculator, Scale, Users, FileText, Home, DollarSign, Gavel } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Divorce Settlement Calculator",
    tagline: "Free Alimony & Property Division Calculator",
    description: "Calculate alimony (spousal support) and property division for divorce. Free 2026 calculator based on state laws for all 50 US states.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/divorce",
};

// ============================================
// 2026 DIVORCE/ALIMONY CONSTANTS
// Based on State Laws and Guidelines
// ============================================
export const DIVORCE_CONSTANTS_2026 = {
    // Alimony duration multipliers (years of marriage × multiplier)
    alimonyDurationMultiplier: {
        shortTerm: 0.3,    // Marriage < 10 years
        midTerm: 0.4,      // Marriage 10-20 years
        longTerm: 0.5,     // Marriage > 20 years
    },

    // Alimony amount as percentage of income difference
    alimonyPercentage: {
        low: 0.25,         // Conservative states
        medium: 0.30,      // Average
        high: 0.40,        // Generous states (CA, etc.)
    } as Record<string, number>,

    // Property division defaults
    propertyDivision: {
        communityProperty: 0.50,    // 50/50 split
        equitableMin: 0.40,         // Equitable states range
        equitableMax: 0.60,
    },

    // Maximum alimony cap (percentage of payor's gross income)
    maxAlimonyPercent: 0.40,

    // Minimum marriage duration for alimony consideration (years)
    minMarriageDuration: 1,
};

// ============================================
// STATE PROPERTY DIVISION LAWS (2026)
// ============================================
export type PropertyDivisionType = 'community' | 'equitable';

export const STATE_DATA: Record<string, {
    name: string;
    propertyDivision: PropertyDivisionType;
    alimonyFactor: 'low' | 'medium' | 'high';
    hasAlimonyFormula: boolean;
    notes: string;
}> = {
    // Community Property States (9 states)
    AZ: { name: "Arizona", propertyDivision: "community", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "50/50 split required" },
    CA: { name: "California", propertyDivision: "community", alimonyFactor: "high", hasAlimonyFormula: true, notes: "50/50 split, generous alimony" },
    ID: { name: "Idaho", propertyDivision: "community", alimonyFactor: "low", hasAlimonyFormula: false, notes: "50/50 split" },
    LA: { name: "Louisiana", propertyDivision: "community", alimonyFactor: "low", hasAlimonyFormula: false, notes: "50/50 split" },
    NV: { name: "Nevada", propertyDivision: "community", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "50/50 split" },
    NM: { name: "New Mexico", propertyDivision: "community", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "50/50 split" },
    TX: { name: "Texas", propertyDivision: "community", alimonyFactor: "low", hasAlimonyFormula: true, notes: "50/50 split, limited alimony" },
    WA: { name: "Washington", propertyDivision: "community", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "50/50 split" },
    WI: { name: "Wisconsin", propertyDivision: "community", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "50/50 split (marital property)" },

    // Equitable Distribution States (41 states + DC)
    AL: { name: "Alabama", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Judge discretion" },
    AK: { name: "Alaska", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Can opt into community" },
    AR: { name: "Arkansas", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Judge discretion" },
    CO: { name: "Colorado", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: true, notes: "Formula-based alimony" },
    CT: { name: "Connecticut", propertyDivision: "equitable", alimonyFactor: "high", hasAlimonyFormula: false, notes: "All property divisible" },
    DE: { name: "Delaware", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Judge discretion" },
    FL: { name: "Florida", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Multiple alimony types" },
    GA: { name: "Georgia", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Fault affects division" },
    HI: { name: "Hawaii", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Partnership model" },
    IL: { name: "Illinois", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: true, notes: "Statutory formula" },
    IN: { name: "Indiana", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Presumption of 50/50" },
    IA: { name: "Iowa", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Judge discretion" },
    KS: { name: "Kansas", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "121-month max alimony" },
    KY: { name: "Kentucky", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "No fault state" },
    ME: { name: "Maine", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Marital vs separate" },
    MD: { name: "Maryland", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Monetary awards" },
    MA: { name: "Massachusetts", propertyDivision: "equitable", alimonyFactor: "high", hasAlimonyFormula: true, notes: "Alimony Reform Act 2011" },
    MI: { name: "Michigan", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "12 statutory factors" },
    MN: { name: "Minnesota", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Judge discretion" },
    MS: { name: "Mississippi", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Title-based system" },
    MO: { name: "Missouri", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Marital vs non-marital" },
    MT: { name: "Montana", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Judge discretion" },
    NE: { name: "Nebraska", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "One-third to one-half" },
    NH: { name: "New Hampshire", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "All property divisible" },
    NJ: { name: "New Jersey", propertyDivision: "equitable", alimonyFactor: "high", hasAlimonyFormula: false, notes: "Multiple alimony types" },
    NY: { name: "New York", propertyDivision: "equitable", alimonyFactor: "high", hasAlimonyFormula: true, notes: "Statutory formula" },
    NC: { name: "North Carolina", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Fault affects alimony" },
    ND: { name: "North Dakota", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Rehabilitative focus" },
    OH: { name: "Ohio", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "14 statutory factors" },
    OK: { name: "Oklahoma", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Support alimony" },
    OR: { name: "Oregon", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Rebuttable presumption" },
    PA: { name: "Pennsylvania", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: true, notes: "APL formula exists" },
    RI: { name: "Rhode Island", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Judge discretion" },
    SC: { name: "South Carolina", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Fault state" },
    SD: { name: "South Dakota", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Judge discretion" },
    TN: { name: "Tennessee", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "4 alimony types" },
    UT: { name: "Utah", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Standard of living" },
    VT: { name: "Vermont", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "All property divisible" },
    VA: { name: "Virginia", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Fault affects awards" },
    WV: { name: "West Virginia", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Rehabilitative focus" },
    WY: { name: "Wyoming", propertyDivision: "equitable", alimonyFactor: "low", hasAlimonyFormula: false, notes: "Judge discretion" },
    DC: { name: "Washington DC", propertyDivision: "equitable", alimonyFactor: "medium", hasAlimonyFormula: false, notes: "Judge discretion" },
};

// Community Property States list
export const COMMUNITY_PROPERTY_STATES = ['AZ', 'CA', 'ID', 'LA', 'NV', 'NM', 'TX', 'WA', 'WI'];

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "divorce/alimony-calculator",
        name: "Alimony Calculator",
        shortName: "Alimony",
        description: "Calculate spousal support payments",
        longDescription: "Free 2026 alimony calculator. Estimate monthly spousal support based on income, marriage duration, and state guidelines.",
        icon: Calculator,
        category: "divorce",
        keywords: ["alimony calculator", "spousal support calculator", "divorce alimony", "maintenance calculator"],
        featured: true,
    },
    {
        id: "divorce/property-division",
        name: "Property Division Calculator",
        shortName: "Property",
        description: "Calculate marital property division",
        longDescription: "Calculate how marital assets are divided. Community property vs equitable distribution explained.",
        icon: Home,
        category: "divorce",
        keywords: ["property division", "marital assets", "divorce settlement", "asset division"],
        featured: true,
    },
    {
        id: "divorce/state-laws",
        name: "Divorce Laws by State",
        shortName: "State Laws",
        description: "Compare divorce laws across states",
        longDescription: "Compare divorce laws, property division rules, and alimony guidelines for all 50 US states.",
        icon: Scale,
        category: "divorce",
        keywords: ["divorce laws by state", "state divorce laws", "alimony by state", "property division by state"],
        featured: false,
    },
] as const;

// ============================================
// ALIMONY CALCULATION FUNCTION
// ============================================
export interface AlimonyResult {
    state: string;
    stateName: string;
    propertyDivision: PropertyDivisionType;
    higherIncome: number;
    lowerIncome: number;
    incomeDifference: number;
    marriageYears: number;
    monthlyAlimony: number;
    alimonyDurationMonths: number;
    totalAlimony: number;
    alimonyFactor: string;
}

export function calculateAlimony(
    stateCode: string,
    higherEarnerIncome: number,
    lowerEarnerIncome: number,
    marriageYears: number
): AlimonyResult {
    const state = STATE_DATA[stateCode] || STATE_DATA['CA'];
    const constants = DIVORCE_CONSTANTS_2026;

    // Income difference
    const incomeDifference = higherEarnerIncome - lowerEarnerIncome;

    // Get alimony percentage based on state factor
    let alimonyPercent = constants.alimonyPercentage.medium;
    if (state.alimonyFactor === 'low') alimonyPercent = constants.alimonyPercentage.low;
    if (state.alimonyFactor === 'high') alimonyPercent = constants.alimonyPercentage.high;

    // Calculate monthly alimony (percentage of income difference)
    let monthlyAlimony = Math.round(incomeDifference * alimonyPercent);

    // Cap at 40% of higher earner's income
    const maxAlimony = Math.round(higherEarnerIncome * constants.maxAlimonyPercent);
    monthlyAlimony = Math.min(monthlyAlimony, maxAlimony);

    // Calculate duration based on marriage length
    let durationMultiplier = constants.alimonyDurationMultiplier.shortTerm;
    if (marriageYears >= 20) {
        durationMultiplier = constants.alimonyDurationMultiplier.longTerm;
    } else if (marriageYears >= 10) {
        durationMultiplier = constants.alimonyDurationMultiplier.midTerm;
    }

    // Duration in months (marriage years × multiplier × 12)
    let alimonyDurationMonths = Math.round(marriageYears * durationMultiplier * 12);

    // Long-term marriages (20+ years) may get permanent alimony
    if (marriageYears >= 20) {
        alimonyDurationMonths = Math.max(alimonyDurationMonths, 120); // At least 10 years
    }

    // Minimum 1 year for short marriages
    if (marriageYears >= constants.minMarriageDuration && alimonyDurationMonths < 12) {
        alimonyDurationMonths = 12;
    }

    // Very short marriages get no alimony
    if (marriageYears < constants.minMarriageDuration) {
        monthlyAlimony = 0;
        alimonyDurationMonths = 0;
    }

    const totalAlimony = monthlyAlimony * alimonyDurationMonths;

    return {
        state: stateCode,
        stateName: state.name,
        propertyDivision: state.propertyDivision,
        higherIncome: higherEarnerIncome,
        lowerIncome: lowerEarnerIncome,
        incomeDifference,
        marriageYears,
        monthlyAlimony,
        alimonyDurationMonths,
        totalAlimony,
        alimonyFactor: state.alimonyFactor,
    };
}

// ============================================
// PROPERTY DIVISION CALCULATION
// ============================================
export interface PropertyDivisionResult {
    state: string;
    stateName: string;
    divisionType: PropertyDivisionType;
    totalAssets: number;
    totalDebts: number;
    netMaritalEstate: number;
    spouse1Share: number;
    spouse2Share: number;
    spouse1Percent: number;
    spouse2Percent: number;
}

export function calculatePropertyDivision(
    stateCode: string,
    totalAssets: number,
    totalDebts: number,
    spouse1Contribution: number = 50 // percentage, only for equitable
): PropertyDivisionResult {
    const state = STATE_DATA[stateCode] || STATE_DATA['CA'];
    const constants = DIVORCE_CONSTANTS_2026;

    const netMaritalEstate = totalAssets - totalDebts;

    let spouse1Percent: number;
    let spouse2Percent: number;

    if (state.propertyDivision === 'community') {
        // Community property = 50/50
        spouse1Percent = 50;
        spouse2Percent = 50;
    } else {
        // Equitable distribution - based on contribution
        spouse1Percent = Math.min(Math.max(spouse1Contribution, 40), 60);
        spouse2Percent = 100 - spouse1Percent;
    }

    const spouse1Share = Math.round(netMaritalEstate * (spouse1Percent / 100));
    const spouse2Share = Math.round(netMaritalEstate * (spouse2Percent / 100));

    return {
        state: stateCode,
        stateName: state.name,
        divisionType: state.propertyDivision,
        totalAssets,
        totalDebts,
        netMaritalEstate,
        spouse1Share,
        spouse2Share,
        spouse1Percent,
        spouse2Percent,
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

export function getStatesList(): { code: string; name: string; divisionType: PropertyDivisionType }[] {
    return Object.entries(STATE_DATA).map(([code, data]) => ({
        code,
        name: data.name,
        divisionType: data.propertyDivision,
    })).sort((a, b) => a.name.localeCompare(b.name));
}

export function isCommunityPropertyState(stateCode: string): boolean {
    return COMMUNITY_PROPERTY_STATES.includes(stateCode);
}
