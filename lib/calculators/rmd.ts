// ============================================
// RMD CALCULATOR - SITE CONFIG
// 2026 Data - Required Minimum Distributions (SECURE 2.0)
// ============================================

import { Calculator, DollarSign, FileText, TrendingDown } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "RMD Calculator",
    tagline: "Free Required Minimum Distribution Calculator",
    description: "Calculate Required Minimum Distributions (RMDs) from IRAs and 401(k)s. Free 2026 calculator with SECURE 2.0 rules.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/rmd",
};

// ============================================
// 2026 RMD CONSTANTS (SECURE 2.0 Act)
// ============================================
export const RMD_2026 = {
    // Starting age (SECURE 2.0)
    startingAge: 73,  // Born 1951-1959: 73, Born 1960+: 75 (starting 2033)

    // Uniform Lifetime Table (partial)
    uniformTable: [
        { age: 72, factor: 27.4 },
        { age: 73, factor: 26.5 },
        { age: 74, factor: 25.5 },
        { age: 75, factor: 24.6 },
        { age: 76, factor: 23.7 },
        { age: 77, factor: 22.9 },
        { age: 78, factor: 22.0 },
        { age: 79, factor: 21.1 },
        { age: 80, factor: 20.2 },
        { age: 81, factor: 19.4 },
        { age: 82, factor: 18.5 },
        { age: 83, factor: 17.7 },
        { age: 84, factor: 16.8 },
        { age: 85, factor: 16.0 },
        { age: 90, factor: 12.2 },
        { age: 95, factor: 8.9 },
        { age: 100, factor: 6.4 },
    ],

    // Penalty for missed RMD
    missedPenalty: 25,  // 25% (reduced from 50% by SECURE 2.0)
    correctedPenalty: 10,  // 10% if corrected timely

    // Account types requiring RMDs
    accountTypes: [
        "Traditional IRA",
        "SEP IRA",
        "SIMPLE IRA",
        "401(k)",
        "403(b)",
        "457(b)",
        "Profit Sharing",
    ],

    // Accounts NOT requiring RMDs
    noRmdAccounts: [
        "Roth IRA (original owner)",
        "Roth 401(k) (starting 2024)",
    ],

    // Statistics
    statistics: {
        avgIraBalance: 281000,
        avgRmd: 12500,
        percentMissing: 8,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "rmd/calculator",
        name: "RMD Calculator",
        shortName: "Calculator",
        description: "Calculate your Required Minimum Distribution",
        longDescription: "Free 2026 RMD calculator. Uses IRS Uniform Lifetime Table with SECURE 2.0 rules.",
        icon: Calculator,
        category: "finance",
        keywords: ["rmd calculator", "required minimum distribution calculator", "ira rmd calculator"],
        featured: true,
    },
    {
        id: "rmd/rules-guide",
        name: "RMD Rules Guide",
        shortName: "Guide",
        description: "Understanding RMD requirements",
        longDescription: "Learn about RMD rules, deadlines, penalties, and strategies.",
        icon: FileText,
        category: "finance",
        keywords: ["rmd rules", "required minimum distribution rules", "rmd deadline"],
        featured: true,
    },
] as const;

// ============================================
// RMD CALCULATION
// ============================================
export interface RMDResult {
    accountBalance: number;
    age: number;
    distributionFactor: number;
    rmdAmount: number;
    monthlyEquivalent: number;
    deadline: string;
}

export function calculateRMD(
    accountBalance: number,
    age: number
): RMDResult {
    // Find distribution factor from Uniform Lifetime Table
    let factor = 27.4; // Default for 72

    for (const row of RMD_2026.uniformTable) {
        if (row.age === age) {
            factor = row.factor;
            break;
        }
        if (row.age > age) {
            break;
        }
        factor = row.factor;
    }

    // RMD = Account Balance / Distribution Factor
    const rmdAmount = accountBalance / factor;
    const monthlyEquivalent = rmdAmount / 12;

    // Deadline
    const deadline = age === 73 ? "April 1 of next year (first RMD)" : "December 31";

    return {
        accountBalance,
        age,
        distributionFactor: factor,
        rmdAmount: Math.round(rmdAmount),
        monthlyEquivalent: Math.round(monthlyEquivalent),
        deadline,
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
