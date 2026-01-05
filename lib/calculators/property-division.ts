// ============================================
// PROPERTY DIVISION CALCULATOR - SITE CONFIG
// 2026 Data - Divorce Asset Division
// ============================================

import { Calculator, Home, Scale, FileText } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Property Division Calculator",
    tagline: "Free Divorce Asset Splitter",
    description: "Calculate your divorce property division. Free 2026 calculator for splitting marital assets, home equity, and retirement accounts.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/property-division",
};

// ============================================
// 2026 PROPERTY DIVISION CONSTANTS
// Sources: State family laws, divorce statistics
// ============================================
export const DIVISION_CONSTANTS_2026 = {
    // Division Types
    divisionTypes: {
        communityProperty: {
            name: "Community Property",
            split: "50/50",
            states: ["AZ", "CA", "ID", "LA", "NV", "NM", "TX", "WA", "WI"],
            description: "Equal 50/50 split of all marital assets",
        },
        equitableDistribution: {
            name: "Equitable Distribution",
            split: "Fair (not necessarily equal)",
            states: 41,  // All other states
            description: "Fair division based on multiple factors",
        },
    },

    // Factors for Equitable Distribution
    equitableFactors: [
        "Length of marriage",
        "Each spouse's income and earning capacity",
        "Age and health of each spouse",
        "Custody of children",
        "Contribution to marital assets",
        "Tax consequences",
    ],

    // Statistics
    statistics: {
        avgMaritalAssets: 285000,
        avgHomeEquity: 175000,
        divorcesWith401k: 62,  // 62% involve retirement accounts
        avgLengthOfMarriage: 8,  // years
        medianDivorceAge: 30,
    },
} as const;

// ============================================
// ASSET CATEGORIES
// ============================================
export const ASSET_TYPES = {
    realEstate: {
        name: "Real Estate",
        description: "Home equity, rental properties, land",
        icon: "home",
        examples: ["Primary residence", "Vacation home", "Investment property"],
    },
    retirement: {
        name: "Retirement Accounts",
        description: "401(k), IRA, pension, military benefits",
        icon: "piggy-bank",
        examples: ["401(k)", "IRA", "Pension", "403(b)"],
        note: "May require QDRO for division",
    },
    investments: {
        name: "Investments & Savings",
        description: "Stocks, bonds, bank accounts",
        icon: "trending-up",
        examples: ["Brokerage accounts", "Savings", "CDs", "Crypto"],
    },
    vehicles: {
        name: "Vehicles",
        description: "Cars, boats, motorcycles, RVs",
        icon: "car",
        examples: ["Cars", "Trucks", "Boats", "Motorcycles"],
    },
    personal: {
        name: "Personal Property",
        description: "Furniture, jewelry, collectibles",
        icon: "gift",
        examples: ["Furniture", "Art", "Jewelry", "Electronics"],
    },
    business: {
        name: "Business Interests",
        description: "Business ownership, partnerships, stock options",
        icon: "briefcase",
        examples: ["LLC shares", "Partnership interest", "Stock options"],
    },
} as const;

// ============================================
// COMMUNITY PROPERTY STATES
// ============================================
export const COMMUNITY_PROPERTY_STATES = [
    { abbr: "AZ", name: "Arizona" },
    { abbr: "CA", name: "California" },
    { abbr: "ID", name: "Idaho" },
    { abbr: "LA", name: "Louisiana" },
    { abbr: "NV", name: "Nevada" },
    { abbr: "NM", name: "New Mexico" },
    { abbr: "TX", name: "Texas" },
    { abbr: "WA", name: "Washington" },
    { abbr: "WI", name: "Wisconsin" },
] as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "property-division/division-calculator",
        name: "Property Division Calculator",
        shortName: "Calculator",
        description: "Calculate your asset split",
        longDescription: "Free 2026 property division calculator. Calculate how marital assets will be divided in your divorce.",
        icon: Calculator,
        category: "family",
        keywords: ["property division calculator", "divorce asset split", "marital property"],
        featured: true,
    },
    {
        id: "property-division/state-guide",
        name: "State Division Laws",
        shortName: "State Laws",
        description: "Community property vs equitable distribution",
        longDescription: "Learn about property division laws in your state. Community property vs equitable distribution explained.",
        icon: FileText,
        category: "family",
        keywords: ["community property states", "equitable distribution", "divorce property laws"],
        featured: true,
    },
] as const;

// ============================================
// PROPERTY DIVISION CALCULATION
// ============================================
export interface AssetItem {
    name: string;
    value: number;
    type: keyof typeof ASSET_TYPES;
    isMarital: boolean;
}

export interface DivisionResult {
    totalAssets: number;
    totalMarital: number;
    totalSeparate: number;
    spouse1Share: number;
    spouse2Share: number;
    splitPercentage: number;
    divisionType: string;
    isCommunityProperty: boolean;
}

export function calculatePropertyDivision(
    assets: AssetItem[],
    state: string,
    customSplit: number = 50
): DivisionResult {
    const communityStates: string[] = COMMUNITY_PROPERTY_STATES.map(s => s.abbr);
    const isCommunityProperty = communityStates.includes(state.toUpperCase());

    const totalAssets = assets.reduce((sum, a) => sum + a.value, 0);
    const totalMarital = assets.filter(a => a.isMarital).reduce((sum, a) => sum + a.value, 0);
    const totalSeparate = totalAssets - totalMarital;

    const splitPercentage = isCommunityProperty ? 50 : customSplit;
    const spouse1Share = Math.round(totalMarital * (splitPercentage / 100));
    const spouse2Share = totalMarital - spouse1Share;

    return {
        totalAssets,
        totalMarital,
        totalSeparate,
        spouse1Share,
        spouse2Share,
        splitPercentage,
        divisionType: isCommunityProperty ? "Community Property (50/50)" : `Equitable Distribution (${splitPercentage}/${100 - splitPercentage})`,
        isCommunityProperty,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
    }
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
