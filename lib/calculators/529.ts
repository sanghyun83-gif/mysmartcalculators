// ============================================
// 529 PLAN CALCULATOR - SITE CONFIG
// 2026 Data - Education Savings, Tax Benefits
// ============================================

import { Calculator, DollarSign, FileText, GraduationCap } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "529 Plan Calculator",
    tagline: "Free 529 College Savings Calculator",
    description: "Calculate 529 plan growth for college savings. Free 2026 calculator with state tax benefits and contribution limits.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/529",
};

// ============================================
// 2026 529 PLAN CONSTANTS
// ============================================
export const PLAN_529_2026 = {
    // Federal gift tax limits
    annualGiftExclusion: 19000,  // Per beneficiary, per donor
    superfunding: 95000,         // 5-year gift election (19k × 5)

    // Aggregate limits (varies by state, using average)
    avgAccountLimit: 350000,

    // Average costs
    collegeCoestPrivate4Year: 60170,
    collegeCostPublic4Year: 24030,
    avgAnnualIncrease: 6,  // % per year

    // Statistics
    statistics: {
        avg529Balance: 27741,
        totalAssets: 480, // billion
        avgContribution: 4850,
        statesWithDeduction: 34,
    },

    // Qualified expenses
    qualifiedExpenses: [
        "Tuition and fees",
        "Room and board",
        "Books and supplies",
        "Computer equipment",
        "K-12 tuition (up to $10K/year)",
        "Apprenticeship programs",
        "Student loan repayment (up to $10K lifetime)",
    ],

    // States with income tax deduction
    topStateDeductions: [
        { state: "New York", deduction: 10000, married: 20000 },
        { state: "Pennsylvania", deduction: "Unlimited", married: "Unlimited" },
        { state: "Illinois", deduction: 10000, married: 20000 },
        { state: "Ohio", deduction: 4000, married: 8000 },
        { state: "Virginia", deduction: 4000, married: 8000 },
    ],
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "529/calculator",
        name: "529 Calculator",
        shortName: "Calculator",
        description: "Calculate 529 plan growth for college",
        longDescription: "Free 2026 calculator. Project tax-free growth for education savings.",
        icon: Calculator,
        category: "finance",
        keywords: ["529 plan calculator", "529 calculator", "college savings calculator"],
        featured: true,
    },
    {
        id: "529/state-benefits",
        name: "State Tax Benefits",
        shortName: "Benefits",
        description: "State tax deductions for 529 plans",
        longDescription: "Find state tax benefits and deductions for 529 contributions.",
        icon: FileText,
        category: "finance",
        keywords: ["529 state tax deduction", "529 plan benefits", "529 tax benefits by state"],
        featured: true,
    },
] as const;

// ============================================
// 529 CALCULATION
// ============================================
export interface Plan529Result {
    currentAge: number;
    collegeAge: number;
    monthlyContribution: number;
    currentBalance: number;
    expectedReturn: number;
    futureValue: number;
    totalContributions: number;
    totalGrowth: number;
    yearsOfCollege: number;
    estimatedCollegeCost: number;
    coveragePercent: number;
}

export function calculate529(
    childAge: number,
    collegeAge: number = 18,
    monthlyContribution: number,
    currentBalance: number = 0,
    expectedReturn: number = 6,
    collegeYears: number = 4,
    isPrivate: boolean = false
): Plan529Result {
    const years = collegeAge - childAge;
    const rate = expectedReturn / 100 / 12;
    const months = years * 12;

    // Future Value with monthly contributions
    // FV = PV(1+r)^n + PMT × [(1+r)^n - 1] / r
    const fvBalance = currentBalance * Math.pow(1 + rate, months);
    const fvContributions = monthlyContribution * ((Math.pow(1 + rate, months) - 1) / rate);
    const futureValue = fvBalance + fvContributions;

    const totalContributions = currentBalance + (monthlyContribution * months);
    const totalGrowth = futureValue - totalContributions;

    // Estimated college cost with inflation
    const baseCost = isPrivate
        ? PLAN_529_2026.collegeCoestPrivate4Year
        : PLAN_529_2026.collegeCostPublic4Year;
    const inflatedCost = baseCost * Math.pow(1 + PLAN_529_2026.avgAnnualIncrease / 100, years);
    const totalCollegeCost = inflatedCost * collegeYears;

    const coveragePercent = Math.min(100, (futureValue / totalCollegeCost) * 100);

    return {
        currentAge: childAge,
        collegeAge,
        monthlyContribution,
        currentBalance,
        expectedReturn,
        futureValue: Math.round(futureValue),
        totalContributions: Math.round(totalContributions),
        totalGrowth: Math.round(totalGrowth),
        yearsOfCollege: collegeYears,
        estimatedCollegeCost: Math.round(totalCollegeCost),
        coveragePercent: Math.round(coveragePercent),
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
