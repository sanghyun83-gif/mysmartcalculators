// ============================================
// REFINANCE CALCULATOR - SITE CONFIG
// 2026 Data - Mortgage Refinancing
// ============================================

import { Calculator, FileText, RefreshCw, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Refinance Calculator",
    tagline: "Free Refinance Calculator",
    description: "Calculate mortgage refinance savings instantly. Free 2026 calculator with break-even analysis.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/refinance",
};

// ============================================
// 2026 REFINANCE CONSTANTS
// ============================================
export const REFINANCE_2026 = {
    // Current average rates
    rates: {
        avg30Year: 6.8,
        avg15Year: 6.1,
        avgARM: 6.4,
    },

    // Closing costs (as % of loan)
    closingCosts: {
        low: 2,
        average: 3,
        high: 5,
    },

    // Refinance types
    types: [
        { name: "Rate-and-Term", description: "Lower rate or change loan term" },
        { name: "Cash-Out", description: "Tap home equity for cash" },
        { name: "Cash-In", description: "Pay down principal at closing" },
        { name: "Streamline", description: "Simplified process for FHA/VA" },
    ],

    // Statistics
    statistics: {
        avgSavings: 250,          // per month
        avgBreakEven: 24,         // months
        refinanceRate: 12,        // percent of mortgages refinanced in 2025
        avgClosingCost: 5000,
    },

    // Citation
    citation: "Based on Freddie Mac and CFPB refinance data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "refinance/calculator",
        name: "Refinance Calculator",
        shortName: "Calculator",
        description: "Calculate refinance savings",
        longDescription: "Free refinance calculator. See monthly savings and break-even point.",
        icon: Calculator,
        category: "finance",
        keywords: ["refinance calculator", "mortgage refinance calculator", "refi calculator"],
        featured: true,
    },
    {
        id: "refinance/guide",
        name: "Refinance Guide",
        shortName: "Guide",
        description: "When to refinance your mortgage",
        longDescription: "Learn if refinancing makes sense for you and how to get the best rate.",
        icon: FileText,
        category: "finance",
        keywords: ["should i refinance", "when to refinance", "refinance mortgage"],
        featured: true,
    },
] as const;

// ============================================
// REFINANCE CALCULATION
// ============================================
export interface RefinanceResult {
    currentPayment: number;
    newPayment: number;
    monthlySavings: number;
    closingCosts: number;
    breakEvenMonths: number;
    totalSavings: number;
    lifetimeInterestSaved: number;
    newLoanAmount: number;
}

export function calculateRefinance(
    currentBalance: number,
    currentRate: number,
    currentTermRemaining: number, // months
    newRate: number,
    newTerm: number = 360, // months (30 years)
    closingCostPercent: number = 3
): RefinanceResult {
    // Calculate current payment
    const currentMonthlyRate = currentRate / 100 / 12;
    const currentPayment = currentBalance *
        (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentTermRemaining)) /
        (Math.pow(1 + currentMonthlyRate, currentTermRemaining) - 1);

    // Calculate new payment
    const closingCosts = currentBalance * (closingCostPercent / 100);
    const newLoanAmount = currentBalance; // Not rolling in closing costs
    const newMonthlyRate = newRate / 100 / 12;
    const newPayment = newLoanAmount *
        (newMonthlyRate * Math.pow(1 + newMonthlyRate, newTerm)) /
        (Math.pow(1 + newMonthlyRate, newTerm) - 1);

    // Calculate savings
    const monthlySavings = currentPayment - newPayment;
    const breakEvenMonths = monthlySavings > 0 ? Math.ceil(closingCosts / monthlySavings) : 0;

    // Total savings over remaining term (use shorter of current remaining or new term)
    const comparisonMonths = Math.min(currentTermRemaining, newTerm);
    const totalCurrentCost = currentPayment * currentTermRemaining;
    const totalNewCost = newPayment * newTerm + closingCosts;
    const totalSavings = totalCurrentCost - totalNewCost;

    // Lifetime interest saved
    const currentTotalInterest = (currentPayment * currentTermRemaining) - currentBalance;
    const newTotalInterest = (newPayment * newTerm) - newLoanAmount;
    const lifetimeInterestSaved = currentTotalInterest - newTotalInterest;

    return {
        currentPayment: Math.round(currentPayment),
        newPayment: Math.round(newPayment),
        monthlySavings: Math.round(monthlySavings),
        closingCosts: Math.round(closingCosts),
        breakEvenMonths: Math.max(0, breakEvenMonths),
        totalSavings: Math.round(totalSavings),
        lifetimeInterestSaved: Math.round(lifetimeInterestSaved),
        newLoanAmount: Math.round(newLoanAmount),
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
