// ============================================
// SEVERANCE PAY CALCULATOR - SITE CONFIG
// 2026 Data - Employment & Layoff
// ============================================

import { Calculator, DollarSign, FileText, Briefcase } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Severance Pay Calculator",
    tagline: "Free Layoff Package Estimator",
    description: "Calculate your severance pay. Free 2026 calculator for layoff packages, negotiation tips, and what to expect.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/severance",
};

// ============================================
// 2026 SEVERANCE PAY CONSTANTS
// Sources: SHRM, BLS, employment law
// ============================================
export const SEVERANCE_CONSTANTS_2026 = {
    // Common Formulas
    formulas: {
        standard: {
            name: "Standard Formula",
            weeksPerYear: 1,  // 1 week per year of service
            description: "Most common: 1 week of pay per year worked",
        },
        generous: {
            name: "Generous Formula",
            weeksPerYear: 2,  // 2 weeks per year
            description: "Tech/finance standard: 2 weeks per year worked",
        },
        executive: {
            name: "Executive Package",
            weeksPerYear: 4,  // 4 weeks per year
            description: "Senior executives: 4+ weeks per year or fixed months",
        },
    },

    // Additional Benefits Often Included
    additionalBenefits: [
        "COBRA health insurance continuation (often subsidized)",
        "Outplacement services",
        "Accelerated stock option vesting",
        "Prorated bonus payment",
        "Unused PTO payout (required in some states)",
        "Extended access to employee assistance programs",
    ],

    // Minimum Weeks (what to ask for)
    minimums: {
        lessThan2Years: 2,    // weeks
        twoToFiveYears: 4,    // weeks
        fiveToTenYears: 8,    // weeks
        tenPlusYears: 12,     // weeks
    },

    // Statistics
    statistics: {
        companiesOfferingSeverance: 68,  // %
        avgSeveranceWeeks: 8.5,
        avgWithNegotiation: 12.5,  // weeks after negotiating
        pctWhoNegotiate: 43,  // % of employees who negotiate
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "severance/calculator",
        name: "Severance Pay Calculator",
        shortName: "Calculator",
        description: "Calculate your severance package",
        longDescription: "Free 2026 severance calculator. Estimate your layoff package based on salary, tenure, and company practices.",
        icon: Calculator,
        category: "finance",
        keywords: ["severance calculator", "layoff package", "severance pay estimator"],
        featured: true,
    },
    {
        id: "severance/negotiation-guide",
        name: "Negotiation Guide",
        shortName: "Negotiate",
        description: "Tips to maximize your severance",
        longDescription: "Learn how to negotiate a better severance package. Expert tips and strategies.",
        icon: FileText,
        category: "finance",
        keywords: ["negotiate severance", "severance tips", "better layoff package"],
        featured: true,
    },
] as const;

// ============================================
// SEVERANCE CALCULATION
// ============================================
export interface SeveranceResult {
    baseSeverance: number;
    weeksOfPay: number;
    cobraEstimate: number;
    ptoValue: number;
    totalPackage: number;
    yearsOfService: number;
    formula: string;
    weeksPerYear: number;
    canNegotiate: boolean;
}

export function calculateSeverance(
    annualSalary: number,
    yearsOfService: number,
    weeksPerYear: number = 1,
    unusedPtoDays: number = 0,
    cobraMonths: number = 0
): SeveranceResult {
    const weeklyPay = annualSalary / 52;
    const dailyPay = annualSalary / 260;  // 260 working days

    // Base severance
    const weeksOfPay = Math.round(yearsOfService * weeksPerYear);
    const baseSeverance = Math.round(weeksOfPay * weeklyPay);

    // COBRA estimate (avg monthly premium: $700 individual, $2000 family)
    const cobraMonthly = 700;  // Individual estimate
    const cobraEstimate = Math.round(cobraMonths * cobraMonthly);

    // PTO value
    const ptoValue = Math.round(unusedPtoDays * dailyPay);

    // Total package
    const totalPackage = baseSeverance + cobraEstimate + ptoValue;

    // Determine formula name
    let formula = "Custom Formula";
    if (weeksPerYear === 1) formula = "Standard (1 week/year)";
    else if (weeksPerYear === 2) formula = "Generous (2 weeks/year)";
    else if (weeksPerYear >= 4) formula = "Executive (4+ weeks/year)";

    return {
        baseSeverance,
        weeksOfPay,
        cobraEstimate,
        ptoValue,
        totalPackage,
        yearsOfService,
        formula,
        weeksPerYear,
        canNegotiate: true,  // Almost always can negotiate
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
    return parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
}
