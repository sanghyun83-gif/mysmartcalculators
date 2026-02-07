// ============================================
// WAGE GARNISHMENT CALCULATOR - SITE CONFIG
// 2026 Data - Federal & State Limits
// ============================================

import { Calculator, DollarSign, FileText, Scale } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Wage Garnishment Calculator",
    tagline: "Free Paycheck Deduction Calculator",
    description: "Calculate your wage garnishment limits. Free 2026 calculator for paycheck garnishment - federal limits, child support, and state protections.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/wage-garnishment",
};

// ============================================
// 2026 FEDERAL GARNISHMENT LIMITS
// Source: Title III of CCPA, DOL
// ============================================
export const GARNISHMENT_LIMITS_2026 = {
    // Federal Minimum Wage (2026)
    federalMinWage: 7.25,
    federalMinWeekly: 290,  // 40 hrs × $7.25

    // Consumer Debt Limits (CCPA)
    consumerDebt: {
        maxPercent: 25,  // 25% of disposable earnings
        protectedMultiple: 30,  // 30× federal min wage protected
        weeklyProtected: 217.50,  // 30 × $7.25
    },

    // Child Support / Alimony
    childSupport: {
        withDependents: 50,     // 50% if supporting spouse/child
        withoutDependents: 60,  // 60% if not supporting another
        arrears12Weeks: 5,      // Additional 5% if 12+ weeks behind
        maxWithArrears: 65,
    },

    // Federal Tax Levy (IRS)
    irsLevy: {
        exemptAmount: 404.17,  // Weekly exempt (per pay period, single)
        dependentAdd: 153.85,   // Additional per dependent
    },

    // Student Loans (Federal)
    studentLoans: {
        maxPercent: 15,
        minDisposable: 30,  // 30× min wage must remain
    },

    // Statistics
    statistics: {
        workersGarnished: 7,  // 7% of workers
        avgGarnishment: 450,  // per paycheck
        totalGarnished: 10000000,  // 10 million workers
    },
} as const;

// ============================================
// GARNISHMENT TYPES
// ============================================
export const GARNISHMENT_TYPES = {
    consumerDebt: {
        name: "Consumer Debt",
        description: "Credit cards, medical bills, personal loans",
        maxPercent: 25,
        protectedAmount: "30× federal minimum wage",
        icon: "credit-card",
    },
    childSupport: {
        name: "Child Support / Alimony",
        description: "Court-ordered family support",
        maxPercent: 50,  // Base (can go to 65%)
        protectedAmount: "None (higher limits apply)",
        icon: "users",
    },
    taxLevy: {
        name: "IRS Tax Levy",
        description: "Unpaid federal taxes",
        maxPercent: 0,  // Complex calculation
        protectedAmount: "Exempt amount based on filing status",
        icon: "landmark",
    },
    studentLoans: {
        name: "Federal Student Loans",
        description: "Defaulted federal student loans",
        maxPercent: 15,
        protectedAmount: "30× federal minimum wage",
        icon: "graduation-cap",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "wage-garnishment/garnishment-calculator",
        name: "Wage Garnishment Calculator",
        shortName: "Calculator",
        description: "Calculate your garnishment limit",
        longDescription: "Free 2026 wage garnishment calculator. Find how much can be taken from your paycheck for debt, child support, or taxes.",
        icon: Calculator,
        category: "finance",
        keywords: ["wage garnishment calculator", "paycheck garnishment", "garnishment limit"],
        featured: true,
    },
    {
        id: "wage-garnishment/limits-guide",
        name: "Garnishment Limits Guide",
        shortName: "Limits",
        description: "Federal and state garnishment limits",
        longDescription: "Complete guide to wage garnishment limits. Understand federal protections, state laws, and exemptions.",
        icon: FileText,
        category: "finance",
        keywords: ["garnishment limits", "ccpa limits", "protected wages"],
        featured: true,
    },
] as const;

// ============================================
// WAGE GARNISHMENT CALCULATION
// ============================================
export interface GarnishmentResult {
    grossPay: number;
    disposableIncome: number;
    garnishmentType: string;
    maxGarnishment: number;
    takeHomePay: number;
    protectedAmount: number;
    percentGarnished: number;
    payFrequency: string;
}

export function calculateGarnishment(
    grossPay: number,
    deductions: number,
    garnishmentType: keyof typeof GARNISHMENT_TYPES,
    payFrequency: "weekly" | "biweekly" | "monthly",
    supportsDependents: boolean = true
): GarnishmentResult {
    // Calculate disposable income
    const disposableIncome = grossPay - deductions;

    // Federal minimum wage protection (weekly)
    const weekMultiplier = payFrequency === "weekly" ? 1 : payFrequency === "biweekly" ? 2 : 4.33;
    const protectedAmount = GARNISHMENT_LIMITS_2026.consumerDebt.weeklyProtected * weekMultiplier;

    let maxGarnishment = 0;
    let percentGarnished = 0;

    switch (garnishmentType) {
        case "consumerDebt":
            // Lesser of: 25% of disposable OR (disposable - 30×min wage)
            const option1 = disposableIncome * 0.25;
            const option2 = Math.max(0, disposableIncome - protectedAmount);
            maxGarnishment = Math.min(option1, option2);
            break;

        case "childSupport":
            const rate = supportsDependents
                ? GARNISHMENT_LIMITS_2026.childSupport.withDependents
                : GARNISHMENT_LIMITS_2026.childSupport.withoutDependents;
            maxGarnishment = disposableIncome * (rate / 100);
            break;

        case "studentLoans":
            const studentRate = GARNISHMENT_LIMITS_2026.studentLoans.maxPercent / 100;
            const studentOption1 = disposableIncome * studentRate;
            const studentOption2 = Math.max(0, disposableIncome - protectedAmount);
            maxGarnishment = Math.min(studentOption1, studentOption2);
            break;

        case "taxLevy":
            // Simplified: disposable minus exempt amount
            const weeklyExempt = GARNISHMENT_LIMITS_2026.irsLevy.exemptAmount * weekMultiplier;
            maxGarnishment = Math.max(0, disposableIncome - weeklyExempt);
            break;
    }

    maxGarnishment = Math.max(0, Math.round(maxGarnishment * 100) / 100);
    const takeHomePay = Math.max(0, grossPay - deductions - maxGarnishment);
    percentGarnished = disposableIncome > 0 ? Math.round((maxGarnishment / disposableIncome) * 100) : 0;

    return {
        grossPay,
        disposableIncome,
        garnishmentType: GARNISHMENT_TYPES[garnishmentType].name,
        maxGarnishment,
        takeHomePay,
        protectedAmount: Math.round(protectedAmount),
        percentGarnished,
        payFrequency,
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
    return parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
}
