// ============================================
// LOAN PAYOFF CALCULATOR - SITE CONFIG
// 2026 Data - General Loan Payoff Strategies
// ============================================

import { Calculator, FileText, DollarSign, TrendingDown } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Loan Payoff Calculator",
    tagline: "Free Loan Payoff Calculator",
    description: "Calculate how fast you can pay off your loan. Free 2026 calculator with extra payment strategies and payoff timeline.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/loan-payoff",
};

// ============================================
// 2026 LOAN CONSTANTS
// ============================================
export const LOAN_2026 = {
    // Common loan types
    loanTypes: [
        { name: "Personal Loan", avgRate: 12.5, avgTerm: 60 },
        { name: "Auto Loan", avgRate: 7.0, avgTerm: 60 },
        { name: "Student Loan", avgRate: 6.5, avgTerm: 120 },
        { name: "Mortgage", avgRate: 7.0, avgTerm: 360 },
        { name: "Credit Card", avgRate: 24.0, avgTerm: 0 },
    ],

    // Extra payment strategies
    strategies: [
        { name: "Minimum Only", description: "Pay only the required amount" },
        { name: "Round Up", description: "Round up payment to nearest $50" },
        { name: "Extra Monthly", description: "Add fixed amount each month" },
        { name: "Bi-Weekly", description: "Pay half every 2 weeks (13 payments/yr)" },
        { name: "One-Time Lump Sum", description: "Make a single extra payment" },
    ],

    // Statistics
    statistics: {
        avgHouseholdDebt: 103358,
        avgAutoLoan: 23792,
        avgStudentLoan: 37574,
        avgCreditCard: 6501,
    },

    // Citation
    citation: "Based on Federal Reserve and Consumer Financial Protection Bureau data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "loan-payoff/loan-calculator",
        name: "Loan Payoff Calculator",
        shortName: "Calculator",
        description: "Calculate payoff timeline",
        longDescription: "Free loan payoff calculator. See how extra payments accelerate your debt-free date.",
        icon: Calculator,
        category: "finance",
        keywords: ["loan payoff calculator", "debt payoff calculator", "extra payment calculator"],
        featured: true,
    },
    {
        id: "loan-payoff/payoff-guide",
        name: "Payoff Strategies",
        shortName: "Guide",
        description: "Debt payoff strategies",
        longDescription: "Learn strategies to pay off your loans faster and save on interest.",
        icon: FileText,
        category: "finance",
        keywords: ["loan payoff strategies", "debt payoff tips", "pay off debt faster"],
        featured: true,
    },
] as const;

// ============================================
// LOAN PAYOFF CALCULATION
// ============================================
export interface PayoffResult {
    loanBalance: number;
    interestRate: number;
    monthlyPayment: number;
    extraPayment: number;
    totalPayment: number;
    originalMonths: number;
    newMonths: number;
    monthsSaved: number;
    originalInterest: number;
    newInterest: number;
    interestSaved: number;
    payoffDate: string;
}

export function calculatePayoff(
    loanBalance: number,
    interestRate: number,
    monthlyPayment: number,
    extraPayment: number = 0
): PayoffResult {
    const monthlyRate = interestRate / 100 / 12;

    // Calculate original payoff (no extra payments)
    let originalBalance = loanBalance;
    let originalMonths = 0;
    let originalInterest = 0;

    while (originalBalance > 0 && originalMonths < 600) {
        const interest = originalBalance * monthlyRate;
        originalInterest += interest;
        const principal = Math.min(monthlyPayment - interest, originalBalance);
        originalBalance -= principal;
        originalMonths++;
        if (monthlyPayment <= interest) break; // Would never pay off
    }

    // Calculate new payoff (with extra payments)
    let newBalance = loanBalance;
    let newMonths = 0;
    let newInterest = 0;
    const totalMonthlyPayment = monthlyPayment + extraPayment;

    while (newBalance > 0 && newMonths < 600) {
        const interest = newBalance * monthlyRate;
        newInterest += interest;
        const principal = Math.min(totalMonthlyPayment - interest, newBalance);
        newBalance -= principal;
        newMonths++;
        if (totalMonthlyPayment <= interest) break;
    }

    // Calculate payoff date
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + newMonths);

    return {
        loanBalance,
        interestRate,
        monthlyPayment,
        extraPayment,
        totalPayment: totalMonthlyPayment,
        originalMonths,
        newMonths,
        monthsSaved: originalMonths - newMonths,
        originalInterest: Math.round(originalInterest),
        newInterest: Math.round(newInterest),
        interestSaved: Math.round(originalInterest - newInterest),
        payoffDate: payoffDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
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
