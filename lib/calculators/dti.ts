// ============================================
// DEBT TO INCOME (DTI) CALCULATOR - SITE CONFIG
// 2026 Data - CFPB/Lender Standards
// ============================================

import { Calculator, FileText, Percent, TrendingDown } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "DTI Calculator",
    tagline: "Free Debt-to-Income Calculator",
    description: "Calculate your debt-to-income ratio instantly. Free 2026 DTI calculator to check mortgage qualification.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/dti",
};

// ============================================
// 2026 DTI CONSTANTS (CFPB/Lender Standards)
// ============================================
export const DTI_2026 = {
    // DTI Thresholds
    thresholds: {
        excellent: 20,    // < 20% = Excellent
        good: 36,         // 20-36% = Good
        acceptable: 43,   // 36-43% = Acceptable (QM limit)
        high: 50,         // 43-50% = High
        veryHigh: 50,     // > 50% = Very High
    },

    // Qualified Mortgage (QM) limit
    qmLimit: 43,

    // Common debt types
    debtCategories: [
        { name: "Mortgage/Rent", description: "Monthly housing payment" },
        { name: "Car Loan", description: "Auto loan payments" },
        { name: "Student Loans", description: "Education debt" },
        { name: "Credit Cards", description: "Minimum payments" },
        { name: "Personal Loans", description: "Unsecured debt" },
        { name: "Child Support/Alimony", description: "Court-ordered payments" },
    ],

    // Statistics
    statistics: {
        avgDTI: 36,
        idealDTI: 28,
        maxQM: 43,
        avgHousing: 28,
    },

    // Citation
    citation: "Based on CFPB Qualified Mortgage standards and lender guidelines 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "dti/calculator",
        name: "DTI Calculator",
        shortName: "Calculator",
        description: "Calculate your debt-to-income ratio",
        longDescription: "Free DTI calculator. Check if you qualify for a mortgage based on your income and debts.",
        icon: Calculator,
        category: "finance",
        keywords: ["dti calculator", "debt to income calculator", "mortgage qualification"],
        featured: true,
    },
    {
        id: "dti/guide",
        name: "DTI Guide",
        shortName: "Guide",
        description: "Understanding DTI ratios",
        longDescription: "Learn what DTI means, acceptable ranges, and how to improve your ratio.",
        icon: FileText,
        category: "finance",
        keywords: ["what is dti", "good dti ratio", "dti for mortgage"],
        featured: true,
    },
] as const;

// ============================================
// DTI CALCULATION
// ============================================
export interface DTIResult {
    monthlyIncome: number;
    totalDebt: number;
    dtiRatio: number;
    dtiCategory: string;
    dtiColor: string;
    isQMQualified: boolean;
    maxAdditionalDebt: number;
    housingRatio: number;
}

export function calculateDTI(
    monthlyIncome: number,
    housingPayment: number,
    carPayment: number = 0,
    studentLoans: number = 0,
    creditCards: number = 0,
    otherDebt: number = 0
): DTIResult {
    const totalDebt = housingPayment + carPayment + studentLoans + creditCards + otherDebt;
    const dtiRatio = monthlyIncome > 0 ? (totalDebt / monthlyIncome) * 100 : 0;
    const housingRatio = monthlyIncome > 0 ? (housingPayment / monthlyIncome) * 100 : 0;

    // Determine category
    let dtiCategory = "Excellent";
    let dtiColor = "text-green-400";

    if (dtiRatio >= DTI_2026.thresholds.veryHigh) {
        dtiCategory = "Very High";
        dtiColor = "text-red-500";
    } else if (dtiRatio >= DTI_2026.thresholds.acceptable) {
        dtiCategory = "High";
        dtiColor = "text-red-400";
    } else if (dtiRatio >= DTI_2026.thresholds.good) {
        dtiCategory = "Acceptable";
        dtiColor = "text-yellow-400";
    } else if (dtiRatio >= DTI_2026.thresholds.excellent) {
        dtiCategory = "Good";
        dtiColor = "text-emerald-400";
    }

    // QM qualification
    const isQMQualified = dtiRatio <= DTI_2026.qmLimit;

    // Max additional debt to stay at 43%
    const maxDebtAt43 = monthlyIncome * 0.43;
    const maxAdditionalDebt = Math.max(0, maxDebtAt43 - totalDebt);

    return {
        monthlyIncome,
        totalDebt: Math.round(totalDebt),
        dtiRatio: Math.round(dtiRatio * 10) / 10,
        dtiCategory,
        dtiColor,
        isQMQualified,
        maxAdditionalDebt: Math.round(maxAdditionalDebt),
        housingRatio: Math.round(housingRatio * 10) / 10,
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
