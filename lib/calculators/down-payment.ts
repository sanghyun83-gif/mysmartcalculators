// ============================================
// DOWN PAYMENT CALCULATOR - SITE CONFIG
// 2026 Data - Home Buying Standards
// ============================================

import { Calculator, FileText, DollarSign, Home } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Down Payment Calculator",
    tagline: "Free Down Payment Calculator",
    description: "Calculate how much you need for a down payment. Free 2026 calculator with PMI estimates and savings timeline.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/down-payment",
};

// ============================================
// 2026 DOWN PAYMENT CONSTANTS
// ============================================
export const DOWN_PAYMENT_2026 = {
    // Common down payment percentages
    percentages: [
        { percent: 3, name: "Minimum Conventional", pmiRequired: true },
        { percent: 5, name: "Low Down Payment", pmiRequired: true },
        { percent: 10, name: "Standard", pmiRequired: true },
        { percent: 20, name: "Traditional (No PMI)", pmiRequired: false },
        { percent: 25, name: "Strong Equity", pmiRequired: false },
    ],

    // PMI rates (annual rate based on LTV)
    pmiRates: {
        ltv97: 1.5,  // 97% LTV = 3% down
        ltv95: 1.2,  // 95% LTV = 5% down
        ltv90: 0.8,  // 90% LTV = 10% down
        ltv85: 0.5,  // 85% LTV = 15% down
    },

    // Statistics
    statistics: {
        avgDownPayment: 13,  // percent
        medianHomePrice: 416000,
        avgFirstTimeBuyer: 8,  // percent
        avgRepeatBuyer: 19,   // percent
    },

    // Citation
    citation: "Based on NAR and CFPB home buying data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "down-payment/calculator",
        name: "Down Payment Calculator",
        shortName: "Calculator",
        description: "Calculate down payment and PMI",
        longDescription: "Free down payment calculator. See how much you need and estimate monthly PMI costs.",
        icon: Calculator,
        category: "finance",
        keywords: ["down payment calculator", "home down payment", "pmi calculator"],
        featured: true,
    },
    {
        id: "down-payment/savings-guide",
        name: "Savings Guide",
        shortName: "Guide",
        description: "Tips to save for a down payment",
        longDescription: "Learn strategies to save for your home down payment faster.",
        icon: FileText,
        category: "finance",
        keywords: ["save for down payment", "down payment tips", "first time buyer"],
        featured: true,
    },
] as const;

// ============================================
// DOWN PAYMENT CALCULATION
// ============================================
export interface DownPaymentResult {
    homePrice: number;
    downPaymentPercent: number;
    downPaymentAmount: number;
    loanAmount: number;
    pmiRequired: boolean;
    monthlyPMI: number;
    closingCostsEstimate: number;
    totalCashNeeded: number;
    monthsToSave: number;
}

export function calculateDownPayment(
    homePrice: number,
    downPaymentPercent: number = 20,
    monthlySavings: number = 1000
): DownPaymentResult {
    const downPaymentAmount = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPaymentAmount;

    // PMI calculation
    const ltv = (loanAmount / homePrice) * 100;
    let pmiRate = 0;
    let pmiRequired = false;

    if (ltv > 80) {
        pmiRequired = true;
        if (ltv > 95) pmiRate = DOWN_PAYMENT_2026.pmiRates.ltv97;
        else if (ltv > 90) pmiRate = DOWN_PAYMENT_2026.pmiRates.ltv95;
        else if (ltv > 85) pmiRate = DOWN_PAYMENT_2026.pmiRates.ltv90;
        else pmiRate = DOWN_PAYMENT_2026.pmiRates.ltv85;
    }

    const monthlyPMI = pmiRequired ? Math.round((loanAmount * (pmiRate / 100)) / 12) : 0;

    // Closing costs (3% estimate)
    const closingCostsEstimate = Math.round(homePrice * 0.03);

    // Total cash needed
    const totalCashNeeded = downPaymentAmount + closingCostsEstimate;

    // Months to save
    const monthsToSave = monthlySavings > 0 ? Math.ceil(totalCashNeeded / monthlySavings) : 0;

    return {
        homePrice,
        downPaymentPercent,
        downPaymentAmount: Math.round(downPaymentAmount),
        loanAmount: Math.round(loanAmount),
        pmiRequired,
        monthlyPMI,
        closingCostsEstimate,
        totalCashNeeded: Math.round(totalCashNeeded),
        monthsToSave,
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
