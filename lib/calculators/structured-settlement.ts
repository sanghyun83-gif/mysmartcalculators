// ============================================
// STRUCTURED SETTLEMENT CALCULATOR - SITE CONFIG
// 2026 Data - Sell Future Payments for Cash
// ============================================

import { Calculator, DollarSign, FileText, TrendingDown } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Structured Settlement Calculator",
    tagline: "Free Cash Value Estimator",
    description: "Calculate your structured settlement cash value. Free 2026 calculator for selling annuity payments - see how much you can get now.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/structured-settlement",
};

// ============================================
// 2026 STRUCTURED SETTLEMENT CONSTANTS
// Sources: Industry data, factoring company rates
// ============================================
export const SETTLEMENT_CONSTANTS_2026 = {
    // Discount Rates (what buyers pay)
    discountRates: {
        low: 0.09,       // 9% - excellent credit, short-term
        average: 0.12,   // 12% - typical rate
        high: 0.18,      // 18% - longer term, higher risk
        max: 0.25,       // 25% - worst case
    },

    // Typical Present Value Loss
    presentValueLoss: {
        min: 15,   // 15% loss from face value
        avg: 30,   // 30% average loss
        max: 50,   // 50% for long-term payouts
    },

    // Processing & Fees
    fees: {
        processing: 500,
        courtHearing: 300,
        adminFees: { min: 1000, max: 3000 },
    },

    // Timeline
    timeline: {
        avgWeeks: 12,    // 12 weeks average
        courtRequired: true,
        minWeeks: 6,
        maxWeeks: 16,
    },

    // Statistics
    statistics: {
        marketSize: 6000000000,  // $6 billion market
        avgSaleAmount: 75000,
        percentSelling: 5,       // 5% of holders sell
        avgDiscountRate: 12,
    },
} as const;

// ============================================
// DISCOUNT RATE BY PAYOUT TERM
// ============================================
export const DISCOUNT_BY_TERM = {
    shortTerm: {
        name: "Short-Term (1-5 years)",
        discountRate: 0.09,
        presentValueLoss: 15,
    },
    mediumTerm: {
        name: "Medium-Term (5-10 years)",
        discountRate: 0.12,
        presentValueLoss: 25,
    },
    longTerm: {
        name: "Long-Term (10-20 years)",
        discountRate: 0.15,
        presentValueLoss: 35,
    },
    veryLongTerm: {
        name: "Very Long-Term (20+ years)",
        discountRate: 0.18,
        presentValueLoss: 45,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "structured-settlement/settlement-calculator",
        name: "Structured Settlement Calculator",
        shortName: "Calculator",
        description: "Calculate your settlement's cash value",
        longDescription: "Free 2026 structured settlement calculator. Find out how much cash you can get for your annuity payments.",
        icon: Calculator,
        category: "finance",
        keywords: ["structured settlement calculator", "annuity cash value", "sell settlement"],
        featured: true,
    },
    {
        id: "structured-settlement/selling-guide",
        name: "Selling Guide",
        shortName: "Guide",
        description: "Learn how to sell your structured settlement",
        longDescription: "Complete guide to selling your structured settlement. Understand discount rates, court approval, and how to get the best deal.",
        icon: FileText,
        category: "finance",
        keywords: ["selling structured settlement", "how to sell annuity", "settlement buyout"],
        featured: true,
    },
] as const;

// ============================================
// STRUCTURED SETTLEMENT CALCULATION
// ============================================
export interface SettlementResult {
    totalFutureValue: number;
    monthlyPayment: number;
    yearsRemaining: number;
    totalPayments: number;
    discountRate: number;
    presentValue: number;
    estimatedFees: number;
    netCashNow: number;
    moneyLost: number;
    percentageLost: number;
    termType: string;
}

export function calculateSettlementValue(
    monthlyPayment: number,
    yearsRemaining: number,
    termType: keyof typeof DISCOUNT_BY_TERM
): SettlementResult {
    const termData = DISCOUNT_BY_TERM[termType];
    const discountRate = termData.discountRate;
    const monthlyRate = discountRate / 12;
    const totalPayments = yearsRemaining * 12;

    // Total future value (if you kept payments)
    const totalFutureValue = monthlyPayment * totalPayments;

    // Present value calculation using annuity formula
    // PV = PMT × [(1 - (1 + r)^-n) / r]
    const presentValue = monthlyPayment * ((1 - Math.pow(1 + monthlyRate, -totalPayments)) / monthlyRate);

    // Fees
    const estimatedFees = SETTLEMENT_CONSTANTS_2026.fees.processing +
        SETTLEMENT_CONSTANTS_2026.fees.courtHearing +
        (SETTLEMENT_CONSTANTS_2026.fees.adminFees.min + SETTLEMENT_CONSTANTS_2026.fees.adminFees.max) / 2;

    // Net cash after fees
    const netCashNow = Math.max(0, presentValue - estimatedFees);

    // Loss calculation
    const moneyLost = totalFutureValue - netCashNow;
    const percentageLost = Math.round((moneyLost / totalFutureValue) * 100);

    return {
        totalFutureValue: Math.round(totalFutureValue),
        monthlyPayment,
        yearsRemaining,
        totalPayments,
        discountRate,
        presentValue: Math.round(presentValue),
        estimatedFees: Math.round(estimatedFees),
        netCashNow: Math.round(netCashNow),
        moneyLost: Math.round(moneyLost),
        percentageLost,
        termType: termData.name,
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
