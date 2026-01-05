// ============================================
// SSDI BACK PAY CALCULATOR - SITE CONFIG
// 2026 Data - Social Security Disability Benefits
// ============================================

import { Calculator, DollarSign, Clock, FileText } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "SSDI Back Pay Calculator",
    tagline: "Free Disability Back Payment Estimator",
    description: "Calculate your SSDI back pay amount. Free 2026 calculator for Social Security disability retroactive payments and attorney fees.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ssdi",
};

// ============================================
// 2026 SSDI CONSTANTS
// Sources: SSA data, disability benefits guidelines
// ============================================
export const SSDI_CONSTANTS_2026 = {
    // Maximum Monthly Benefits (2026)
    maxMonthlyBenefit: 3822,  // Max SSDI at FRA
    avgMonthlyBenefit: 1537,   // Average SSDI payment

    // 5-Month Waiting Period (required by law)
    waitingPeriodMonths: 5,

    // Attorney Fees (regulated by SSA)
    attorneyFees: {
        percentage: 0.25,  // 25% of back pay
        maxFee: 7200,      // $7,200 cap (2026)
    },

    // Processing Times
    processingTimes: {
        initialApplication: 6,   // 6 months average
        reconsideration: 4,      // 4 months
        hearingWait: 12,         // 12 months for ALJ hearing
        totalAverage: 22,        // Average total wait
    },

    // Statistics
    statistics: {
        approvalRateInitial: 22,    // 22% approved initially
        approvalRateHearing: 54,    // 54% at hearing level
        avgBackPayMonths: 18,       // Average back pay months
        avgBackPayAmount: 27700,    // Average back pay total
        pendingClaims: 1100000,     // 1.1 million pending
        avgWaitDays: 200,           // Average wait for decision
    },

    // COLA Increases (recent years)
    colaRates: {
        2024: 3.2,
        2025: 2.5,
        2026: 2.8,  // Estimated
    },
} as const;

// ============================================
// BACK PAY CALCULATION PERIODS
// ============================================
export const BACK_PAY_TYPES = {
    retroactive: {
        name: "Retroactive Benefits",
        description: "Up to 12 months before application date",
        maxMonths: 12,
        requires: "Onset date must be 17+ months before approval",
    },
    backPay: {
        name: "Back Pay (Waiting Period)",
        description: "From 5 months after onset to approval",
        startPoint: "After 5-month waiting period",
        requires: "Standard waiting period required by law",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "ssdi/calculator",
        name: "SSDI Back Pay Calculator",
        shortName: "Calculator",
        description: "Calculate your SSDI back pay amount",
        longDescription: "Free 2026 SSDI back pay calculator. Estimate your Social Security disability retroactive payment and attorney fees.",
        icon: Calculator,
        category: "benefits",
        keywords: ["ssdi back pay calculator", "disability back pay", "ssdi retroactive pay"],
        featured: true,
    },
    {
        id: "ssdi/back-pay-guide",
        name: "SSDI Back Pay Guide",
        shortName: "Guide",
        description: "Understand how SSDI back pay is calculated",
        longDescription: "Learn about SSDI back pay, retroactive benefits, waiting periods, and attorney fees.",
        icon: FileText,
        category: "benefits",
        keywords: ["ssdi back pay explained", "how ssdi back pay works", "disability retroactive"],
        featured: true,
    },
] as const;

// ============================================
// SSDI BACK PAY CALCULATION FUNCTION
// ============================================
export interface SSDIResult {
    monthlyBenefit: number;
    onsetDate: Date;
    approvalDate: Date;
    waitingPeriodEnd: Date;
    totalMonthsOwed: number;
    retroactiveMonths: number;
    backPayMonths: number;
    grossBackPay: number;
    attorneyFee: number;
    netBackPay: number;
    firstMonthlyPayment: Date;
}

export function calculateSSDIBackPay(
    monthlyBenefit: number,
    onsetDateStr: string,
    approvalDateStr: string,
    hasAttorney: boolean = true
): SSDIResult {
    const onsetDate = new Date(onsetDateStr);
    const approvalDate = new Date(approvalDateStr);

    // Calculate waiting period end (5 months after onset)
    const waitingPeriodEnd = new Date(onsetDate);
    waitingPeriodEnd.setMonth(waitingPeriodEnd.getMonth() + 5);

    // Calculate months between waiting period end and approval
    const backPayStart = waitingPeriodEnd;
    const monthsDiff = (approvalDate.getFullYear() - backPayStart.getFullYear()) * 12 +
        (approvalDate.getMonth() - backPayStart.getMonth());

    const backPayMonths = Math.max(0, monthsDiff);

    // Retroactive: up to 12 months before application (simplified)
    // In reality, application date matters, but we'll estimate
    const retroactiveMonths = Math.min(12, Math.max(0, backPayMonths - 12));
    const totalMonthsOwed = backPayMonths;

    // Calculate amounts
    const grossBackPay = monthlyBenefit * totalMonthsOwed;

    // Attorney fee calculation
    let attorneyFee = 0;
    if (hasAttorney) {
        const calculatedFee = grossBackPay * SSDI_CONSTANTS_2026.attorneyFees.percentage;
        attorneyFee = Math.min(calculatedFee, SSDI_CONSTANTS_2026.attorneyFees.maxFee);
    }

    const netBackPay = grossBackPay - attorneyFee;

    // First monthly payment (month after approval)
    const firstMonthlyPayment = new Date(approvalDate);
    firstMonthlyPayment.setMonth(firstMonthlyPayment.getMonth() + 1);

    return {
        monthlyBenefit,
        onsetDate,
        approvalDate,
        waitingPeriodEnd,
        totalMonthsOwed,
        retroactiveMonths,
        backPayMonths,
        grossBackPay: Math.round(grossBackPay),
        attorneyFee: Math.round(attorneyFee),
        netBackPay: Math.round(netBackPay),
        firstMonthlyPayment,
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

export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
    });
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}
