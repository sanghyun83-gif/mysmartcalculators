// ============================================
// CAPITAL GAINS TAX CALCULATOR - SITE CONFIG
// 2026 Data - Federal Capital Gains Tax
// ============================================

import { Calculator, DollarSign, FileText, TrendingUp } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Capital Gains Tax Calculator",
    tagline: "Free Investment Tax Estimator",
    description: "Calculate capital gains tax on stocks, real estate, and investments. Free 2026 calculator.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/capital-gains",
};

// ============================================
// 2026 CAPITAL GAINS TAX RATES
// Source: IRS, adjusted for inflation
// ============================================
export const CAPITAL_GAINS_2026 = {
    // Long-term capital gains rates (held > 1 year)
    longTermRates: {
        single: [
            { min: 0, max: 48350, rate: 0 },
            { min: 48350, max: 533400, rate: 15 },
            { min: 533400, max: Infinity, rate: 20 },
        ],
        marriedFilingJointly: [
            { min: 0, max: 96700, rate: 0 },
            { min: 96700, max: 600050, rate: 15 },
            { min: 600050, max: Infinity, rate: 20 },
        ],
        marriedFilingSeparately: [
            { min: 0, max: 48350, rate: 0 },
            { min: 48350, max: 300025, rate: 15 },
            { min: 300025, max: Infinity, rate: 20 },
        ],
        headOfHousehold: [
            { min: 0, max: 64750, rate: 0 },
            { min: 64750, max: 566700, rate: 15 },
            { min: 566700, max: Infinity, rate: 20 },
        ],
    },

    // Short-term capital gains = ordinary income rates
    shortTermNote: "Short-term gains (held  1 year) are taxed as ordinary income (10%-37%)",

    // Net Investment Income Tax (NIIT)
    niit: {
        rate: 3.8,
        thresholdSingle: 200000,
        thresholdMarried: 250000,
    },

    // Collectibles rate
    collectiblesRate: 28,

    // State rates (select states)
    stateRates: [
        { state: "California", rate: 13.3 },
        { state: "New York", rate: 10.9 },
        { state: "New Jersey", rate: 10.75 },
        { state: "Oregon", rate: 9.9 },
        { state: "Minnesota", rate: 9.85 },
        { state: "Massachusetts", rate: 9 },
        { state: "Texas", rate: 0 },
        { state: "Florida", rate: 0 },
        { state: "Nevada", rate: 0 },
        { state: "Washington", rate: 7 }, // Only on gains > $262K
    ],

    // Statistics
    statistics: {
        avgLongTermRate: 15,
        zeroRateBracket: 48350, // Single
        niitThreshold: 200000,
        totalCapGainsRevenue: 320, // $320 billion
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "capital-gains/gains-calculator",
        name: "Capital Gains Calculator",
        shortName: "Calculator",
        description: "Calculate federal capital gains tax",
        longDescription: "Free 2026 capital gains tax calculator. Estimate tax on stocks, crypto, and real estate.",
        icon: Calculator,
        category: "finance",
        keywords: ["capital gains calculator", "stock tax calculator", "investment tax calculator"],
        featured: true,
    },
    {
        id: "capital-gains/tax-rates-guide",
        name: "Tax Rates Guide",
        shortName: "Guide",
        description: "Understanding capital gains tax rates",
        longDescription: "Learn about short-term vs long-term rates, NIIT, and state taxes.",
        icon: FileText,
        category: "finance",
        keywords: ["capital gains tax rates", "long term capital gains", "niit tax"],
        featured: true,
    },
] as const;

// ============================================
// CAPITAL GAINS CALCULATION
// ============================================
export interface CapitalGainsResult {
    salePrice: number;
    costBasis: number;
    gain: number;
    isLongTerm: boolean;
    filingStatus: string;
    taxableIncome: number;
    federalRate: number;
    federalTax: number;
    niitApplies: boolean;
    niitTax: number;
    stateRate: number;
    stateTax: number;
    totalTax: number;
    effectiveRate: number;
    netProceeds: number;
}

export function calculateCapitalGains(
    salePrice: number,
    costBasis: number,
    taxableIncome: number,
    isLongTerm: boolean = true,
    filingStatus: string = "single",
    state: string = ""
): CapitalGainsResult {
    const gain = Math.max(0, salePrice - costBasis);

    // Determine federal rate
    let federalRate = 0;
    if (isLongTerm) {
        const brackets = filingStatus === "marriedFilingJointly"
            ? CAPITAL_GAINS_2026.longTermRates.marriedFilingJointly
            : CAPITAL_GAINS_2026.longTermRates.single;

        for (const bracket of brackets) {
            if (taxableIncome >= bracket.min && taxableIncome < bracket.max) {
                federalRate = bracket.rate;
                break;
            }
        }
    } else {
        // Short-term: estimate based on income (simplified)
        if (taxableIncome < 50000) federalRate = 12;
        else if (taxableIncome < 100000) federalRate = 22;
        else if (taxableIncome < 200000) federalRate = 24;
        else if (taxableIncome < 500000) federalRate = 32;
        else federalRate = 37;
    }

    const federalTax = gain * (federalRate / 100);

    // NIIT calculation
    const niitThreshold = filingStatus === "marriedFilingJointly"
        ? CAPITAL_GAINS_2026.niit.thresholdMarried
        : CAPITAL_GAINS_2026.niit.thresholdSingle;
    const niitApplies = taxableIncome > niitThreshold;
    const niitTax = niitApplies ? gain * (CAPITAL_GAINS_2026.niit.rate / 100) : 0;

    // State tax
    let stateRate = 0;
    const stateInfo = CAPITAL_GAINS_2026.stateRates.find(s => s.state === state);
    if (stateInfo) {
        stateRate = stateInfo.rate;
    }
    const stateTax = gain * (stateRate / 100);

    const totalTax = federalTax + niitTax + stateTax;
    const effectiveRate = gain > 0 ? (totalTax / gain) * 100 : 0;
    const netProceeds = salePrice - totalTax;

    return {
        salePrice,
        costBasis,
        gain,
        isLongTerm,
        filingStatus,
        taxableIncome,
        federalRate,
        federalTax: Math.round(federalTax),
        niitApplies,
        niitTax: Math.round(niitTax),
        stateRate,
        stateTax: Math.round(stateTax),
        totalTax: Math.round(totalTax),
        effectiveRate: Math.round(effectiveRate * 10) / 10,
        netProceeds: Math.round(netProceeds),
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
