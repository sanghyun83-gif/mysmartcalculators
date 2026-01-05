// ============================================
// SELF EMPLOYMENT TAX CALCULATOR - SITE CONFIG
// 2026 Data - SE Tax, Social Security, Medicare
// ============================================

import { Calculator, DollarSign, FileText, Briefcase } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Self Employment Tax Calculator",
    tagline: "Free SE Tax Estimator",
    description: "Calculate self-employment tax for freelancers and 1099 contractors. Free 2026 SE tax calculator.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/self-employment",
};

// ============================================
// 2026 SELF-EMPLOYMENT TAX CONSTANTS
// Source: IRS, SSA
// ============================================
export const SE_TAX_2026 = {
    // SE Tax Rates
    socialSecurityRate: 12.4,   // 6.2% x 2
    medicareRate: 2.9,          // 1.45% x 2
    totalSERate: 15.3,          // Combined rate

    // Social Security wage base (max earnings subject to SS)
    socialSecurityWageBase: 176100,  // 2026 projected

    // Additional Medicare tax
    additionalMedicareRate: 0.9,
    additionalMedicareThreshold: {
        single: 200000,
        married: 250000,
    },

    // Deduction for SE tax
    seDeductionRate: 50,  // 50% of SE tax is deductible

    // Net earnings calculation
    netEarningsMultiplier: 0.9235,  // 92.35% of net profit

    // Quarterly payment thresholds
    quarterlyThreshold: 1000,  // If you expect to owe $1K+

    // Statistics
    statistics: {
        selfEmployedWorkers: 16000000,
        avgSEIncome: 55000,
        avgSETax: 7800,
        freelancersGrowth: 6.8,  // % annual growth
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "self-employment/se-tax-calculator",
        name: "SE Tax Calculator",
        shortName: "Calculator",
        description: "Calculate self-employment tax",
        longDescription: "Free 2026 self-employment tax calculator. Estimate Social Security and Medicare taxes for freelancers.",
        icon: Calculator,
        category: "finance",
        keywords: ["self employment tax calculator", "1099 tax calculator", "freelance tax calculator"],
        featured: true,
    },
    {
        id: "self-employment/deductions-guide",
        name: "Deductions Guide",
        shortName: "Guide",
        description: "SE tax deductions and write-offs",
        longDescription: "Learn about self-employment tax deductions, home office, and business expenses.",
        icon: FileText,
        category: "finance",
        keywords: ["self employment deductions", "freelance tax write offs", "1099 deductions"],
        featured: true,
    },
] as const;

// ============================================
// SE TAX CALCULATION
// ============================================
export interface SETaxResult {
    grossIncome: number;
    businessExpenses: number;
    netProfit: number;
    netEarnings: number;
    socialSecurityTax: number;
    medicareTax: number;
    additionalMedicareTax: number;
    totalSETax: number;
    seDeduction: number;
    effectiveRate: number;
    quarterlyEstimate: number;
}

export function calculateSETax(
    grossIncome: number,
    businessExpenses: number = 0,
    filingStatus: string = "single"
): SETaxResult {
    // Net profit
    const netProfit = Math.max(0, grossIncome - businessExpenses);

    // Net earnings (92.35% of net profit)
    const netEarnings = netProfit * SE_TAX_2026.netEarningsMultiplier;

    // Social Security tax (capped at wage base)
    const ssWages = Math.min(netEarnings, SE_TAX_2026.socialSecurityWageBase);
    const socialSecurityTax = ssWages * (SE_TAX_2026.socialSecurityRate / 100);

    // Medicare tax (no cap)
    const medicareTax = netEarnings * (SE_TAX_2026.medicareRate / 100);

    // Additional Medicare tax (high earners)
    const additionalMedicareThreshold = filingStatus === "married"
        ? SE_TAX_2026.additionalMedicareThreshold.married
        : SE_TAX_2026.additionalMedicareThreshold.single;
    const additionalMedicareTax = netEarnings > additionalMedicareThreshold
        ? (netEarnings - additionalMedicareThreshold) * (SE_TAX_2026.additionalMedicareRate / 100)
        : 0;

    // Total SE tax
    const totalSETax = socialSecurityTax + medicareTax + additionalMedicareTax;

    // SE deduction (50% of SE tax)
    const seDeduction = totalSETax * (SE_TAX_2026.seDeductionRate / 100);

    // Effective rate
    const effectiveRate = netProfit > 0 ? (totalSETax / netProfit) * 100 : 0;

    // Quarterly estimate
    const quarterlyEstimate = totalSETax / 4;

    return {
        grossIncome,
        businessExpenses,
        netProfit: Math.round(netProfit),
        netEarnings: Math.round(netEarnings),
        socialSecurityTax: Math.round(socialSecurityTax),
        medicareTax: Math.round(medicareTax),
        additionalMedicareTax: Math.round(additionalMedicareTax),
        totalSETax: Math.round(totalSETax),
        seDeduction: Math.round(seDeduction),
        effectiveRate: Math.round(effectiveRate * 10) / 10,
        quarterlyEstimate: Math.round(quarterlyEstimate),
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
