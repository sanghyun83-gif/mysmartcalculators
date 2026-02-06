// ============================================
// ALIMONY CALCULATOR - SITE CONFIG
// 2026 Data - Spousal Support by State
// ============================================

import { Calculator, Scale, MapPin, FileText } from 'lucide-react';
import { STATE_ALIMONY_DATA, getStatesList } from './alimony/state-data';

export { getStatesList };

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Alimony Calculator",
    tagline: "Free Spousal Support Estimator by State",
    description: "Calculate your alimony payment or entitlement. Free 2026 calculator with state-specific formulas for CA, TX, FL, NY, and all 50 states.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/alimony",
};

// ============================================
// 2026 ALIMONY CONSTANTS
// Sources: State family law codes, IRS guidelines
// ============================================
export const ALIMONY_CONSTANTS_2026 = {
    // Federal Tax Rules (post-2019 TCJA)
    taxRules: {
        payerDeduction: false,     // Payer can NOT deduct alimony (TCJA 2019+)
        recipientIncome: false,    // Recipient does NOT report as income
        effectiveDate: "2019-01-01",
    },

    // Duration Guidelines (general rules)
    durationRules: {
        shortMarriage: { years: 5, multiplier: 0.3 },   // 30% of marriage length
        mediumMarriage: { years: 10, multiplier: 0.5 }, // 50% of marriage length
        longMarriage: { years: 20, multiplier: 0.75 },  // 75% of marriage length
        permanentThreshold: 20, // Marriages 20+ years may qualify for permanent
    },

    // Statistics
    statistics: {
        avgMonthlyPayment: 1500,
        avgDurationYears: 5,
        percentAwarded: 10,  // Only ~10% of divorces include alimony
        modificationRate: 25, // 25% of orders are modified
    },
} as const;

// ============================================
// STATE ALIMONY FORMULAS (2026)
// ============================================
export const STATE_ALIMONY = {
    california: {
        name: "California",
        abbr: "CA",
        formula: "40% of payer income minus 50% of recipient income",
        formulaType: "guideline",
        durationRule: "50% of marriage length for <10 years; court discretion for 10+ years",
        notes: "Temporary (pendente lite) vs. permanent spousal support differ",
        avgMonthly: 1800,
    },
    texas: {
        name: "Texas",
        abbr: "TX",
        formula: "Lesser of $5,000/month or 20% of payer's gross income",
        formulaType: "statutory",
        durationRule: "5 years max for 10-20 year marriages; 7 years for 20-30; 10 years for 30+",
        notes: "Strict eligibility requirements; must prove need and inability to be self-supporting",
        avgMonthly: 2500,
    },
    florida: {
        name: "Florida",
        abbr: "FL",
        formula: "Need-based; no strict formula",
        formulaType: "discretionary",
        durationRule: "Bridge-the-gap, rehabilitative, durational, or permanent",
        notes: "2023 reform eliminated permanent alimony for most cases",
        avgMonthly: 1500,
    },
    newyork: {
        name: "New York",
        abbr: "NY",
        formula: "(30% of payer income) minus (20% of recipient income)",
        formulaType: "guideline",
        durationRule: "15-30% of marriage length based on duration",
        notes: "Income cap of $228,000 for guideline formula",
        avgMonthly: 2200,
    },
    illinois: {
        name: "Illinois",
        abbr: "IL",
        formula: "(33.33% of payer net) minus (25% of recipient net)",
        formulaType: "statutory",
        durationRule: "Set percentages based on marriage length",
        notes: "Combined income cannot exceed 40% of combined net",
        avgMonthly: 1700,
    },
    massachusetts: {
        name: "Massachusetts",
        abbr: "MA",
        formula: "30-35% of income difference",
        formulaType: "guideline",
        durationRule: "50-80% of marriage length based on duration",
        notes: "Alimony ends at recipient's remarriage or payor's retirement age",
        avgMonthly: 1900,
    },
    newjersey: {
        name: "New Jersey",
        abbr: "NJ",
        formula: "No strict formula; based on need and ability",
        formulaType: "discretionary",
        durationRule: "Limited duration for marriages under 20 years",
        notes: "2014 reform limited permanent alimony",
        avgMonthly: 2100,
    },
    pennsylvania: {
        name: "Pennsylvania",
        abbr: "PA",
        formula: "40% of payer minus 50% of recipient (APL)",
        formulaType: "guideline",
        durationRule: "Based on 17 statutory factors",
        notes: "Alimony pendente lite (during divorce) vs. final alimony",
        avgMonthly: 1600,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "alimony/calculator",
        name: "Alimony Calculator",
        shortName: "Calculator",
        description: "Calculate your monthly alimony payment or entitlement",
        longDescription: "Free 2026 alimony calculator. Estimate spousal support based on income, marriage length, and state laws.",
        icon: Calculator,
        category: "family",
        keywords: ["alimony calculator", "spousal support calculator", "divorce alimony"],
        featured: true,
    },
    {
        id: "alimony/state-laws",
        name: "State Alimony Laws",
        shortName: "State Laws",
        description: "View alimony formulas and rules by state",
        longDescription: "Compare alimony laws across all 50 states. See formulas, duration rules, and recent reforms.",
        icon: MapPin,
        category: "family",
        keywords: ["alimony by state", "state spousal support laws", "california alimony"],
        featured: true,
    },
] as const;

// ============================================
// ALIMONY CALCULATION FUNCTION
// ============================================
export interface AlimonyResult {
    monthlyAlimony: number;
    yearlyAlimony: number;
    estimatedDurationYears: number;
    totalAlimony: number;
    payerNetIncome: number;
    recipientNetIncome: number;
    formula: string;
    state: string;
    cohabitationImpact: string;
    model: string;
}

export function calculateAlimony(
    payerGrossMonthly: number,
    recipientGrossMonthly: number,
    marriageYears: number,
    state: string
): AlimonyResult {
    const stateData = STATE_ALIMONY_DATA[state] || STATE_ALIMONY_DATA['CA'];

    // Simplified calculation based on common formulas
    let monthlyAlimony = 0;

    switch (state) {
        case "california":
        case "CA":
            // 40% of payer - 50% of recipient
            monthlyAlimony = Math.max(0, (payerGrossMonthly * 0.40) - (recipientGrossMonthly * 0.50));
            break;
        case "texas":
        case "TX":
            // Lesser of $5,000 or 20% of payer gross
            monthlyAlimony = Math.min(5000, payerGrossMonthly * 0.20);
            break;
        case "newyork":
        case "NY":
            // 30% of payer - 20% of recipient
            monthlyAlimony = Math.max(0, (payerGrossMonthly * 0.30) - (recipientGrossMonthly * 0.20));
            break;
        case "illinois":
        case "IL":
            // 33.33% of payer - 25% of recipient (capped at 40% combined)
            const combined = payerGrossMonthly + recipientGrossMonthly;
            monthlyAlimony = Math.max(0, (payerGrossMonthly * 0.3333) - (recipientGrossMonthly * 0.25));
            monthlyAlimony = Math.min(monthlyAlimony, combined * 0.40 - recipientGrossMonthly);
            break;
        default:
            // Default: 25% of income difference (conservative expert average)
            monthlyAlimony = Math.max(0, (payerGrossMonthly - recipientGrossMonthly) * 0.25);
    }

    // Duration calculation using state-specific multiplier
    const multiplier = stateData.durationMultiplier || 0.5;
    let durationYears = Math.round(marriageYears * multiplier * 10) / 10;

    const yearlyAlimony = monthlyAlimony * 12;
    const totalAlimony = yearlyAlimony * durationYears;

    return {
        monthlyAlimony: Math.round(monthlyAlimony),
        yearlyAlimony: Math.round(yearlyAlimony),
        estimatedDurationYears: durationYears,
        totalAlimony: Math.round(totalAlimony),
        payerNetIncome: Math.round(payerGrossMonthly - monthlyAlimony),
        recipientNetIncome: Math.round(recipientGrossMonthly + monthlyAlimony),
        formula: stateData.formula,
        state: stateData.name,
        cohabitationImpact: stateData.cohabitationImpact,
        model: stateData.model,
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
