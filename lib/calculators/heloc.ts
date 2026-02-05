// ============================================
// HELOC CALCULATOR - SITE CONFIG
// 2026 Data - Home Equity Line of Credit
// ============================================

import { Calculator, FileText, CreditCard, Home } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "HELOC Calculator",
    tagline: "Free HELOC Calculator",
    description: "Calculate your home equity line of credit instantly. Free 2026 HELOC calculator with credit limit and payment estimates.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/heloc",
};

// ============================================
// 2026 HELOC CONSTANTS
// ============================================
export const HELOC_2026 = {
    // Current average rates
    rates: {
        avgVariable: 8.5,
        avgIntroRate: 6.5,
        primeRate: 8.0,
        margin: 0.5, // typical margin over prime
    },

    // LTV limits
    ltvLimits: {
        standard: 80,  // 80% CLTV maximum
        high: 85,      // some lenders go to 85%
        min: 15,       // minimum equity needed
    },

    // Draw period and repayment
    periods: {
        drawPeriod: 10,      // years - interest-only
        repaymentPeriod: 20, // years after draw
    },

    // Statistics
    statistics: {
        avgCreditLimit: 75000,
        avgHomeEquity: 185000,
        helocUsage: 35,        // percent of available used
        avgDrawnAmount: 45000,
    },

    // Citation
    citation: "Based on Federal Reserve and CFPB HELOC data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "heloc/calculator",
        name: "HELOC Calculator",
        shortName: "Calculator",
        description: "Calculate HELOC credit limit",
        longDescription: "Free HELOC calculator. See your available credit line and estimated payments.",
        icon: Calculator,
        category: "finance",
        keywords: ["heloc calculator", "home equity line calculator", "heloc payment calculator"],
        featured: true,
    },
    {
        id: "heloc/guide",
        name: "HELOC Guide",
        shortName: "Guide",
        description: "Understanding HELOCs",
        longDescription: "Learn how HELOCs work, pros and cons, and if it's right for you.",
        icon: FileText,
        category: "finance",
        keywords: ["what is heloc", "heloc vs home equity loan", "how heloc works"],
        featured: true,
    },
] as const;

// ============================================
// HELOC CALCULATION
// ============================================
export interface HELOCResult {
    homeValue: number;
    mortgageBalance: number;
    homeEquity: number;
    maxCLTV: number;
    maxBorrowable: number;
    availableCreditLine: number;
    interestOnlyPayment: number;
    fullPayment: number;
    rate: number;
}

export function calculateHELOC(
    homeValue: number,
    mortgageBalance: number,
    desiredAmount: number = 0,
    rate: number = HELOC_2026.rates.avgVariable,
    maxCLTV: number = 80
): HELOCResult {
    const homeEquity = homeValue - mortgageBalance;
    const maxBorrowable = Math.max(0, (homeValue * (maxCLTV / 100)) - mortgageBalance);

    // Credit line is lesser of desired amount or max borrowable
    const availableCreditLine = desiredAmount > 0
        ? Math.min(desiredAmount, maxBorrowable)
        : maxBorrowable;

    // Monthly interest-only payment (draw period)
    const monthlyRate = rate / 100 / 12;
    const interestOnlyPayment = availableCreditLine * monthlyRate;

    // Full principal + interest payment (repayment period)
    const repaymentMonths = HELOC_2026.periods.repaymentPeriod * 12;
    const fullPayment = availableCreditLine *
        (monthlyRate * Math.pow(1 + monthlyRate, repaymentMonths)) /
        (Math.pow(1 + monthlyRate, repaymentMonths) - 1);

    return {
        homeValue,
        mortgageBalance,
        homeEquity,
        maxCLTV,
        maxBorrowable: Math.round(maxBorrowable),
        availableCreditLine: Math.round(availableCreditLine),
        interestOnlyPayment: Math.round(interestOnlyPayment),
        fullPayment: Math.round(fullPayment),
        rate,
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
