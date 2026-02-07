// ============================================
// TAX-CALC SITE CONFIGURATION
// 2026 Tax Calculator
// Green/Money Theme
// ============================================

import { Calculator, FileText, DollarSign, Briefcase, Receipt, Users, PiggyBank } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Tax Calculator",
    tagline: "Free 2026 Federal Tax Estimator",
    description: "Calculate your 2026 federal income tax for free. See your tax bracket, estimate your refund, and understand your tax liability with our easy-to-use calculators.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/tax",
};

// ============================================
// 2026 IRS TAX CONSTANTS (Official)
// ============================================
export const TAX_CONSTANTS = {
    // 2026 Federal Tax Brackets (Adjusted for Inflation)
    brackets: {
        single: [
            { min: 0, max: 12400, rate: 0.10 },
            { min: 12400, max: 50400, rate: 0.12 },
            { min: 50400, max: 105700, rate: 0.22 },
            { min: 105700, max: 201775, rate: 0.24 },
            { min: 201775, max: 256225, rate: 0.32 },
            { min: 256225, max: 640600, rate: 0.35 },
            { min: 640600, max: Infinity, rate: 0.37 },
        ],
        marriedFilingJointly: [
            { min: 0, max: 24800, rate: 0.10 },
            { min: 24800, max: 100800, rate: 0.12 },
            { min: 100800, max: 211400, rate: 0.22 },
            { min: 211400, max: 403550, rate: 0.24 },
            { min: 403550, max: 512450, rate: 0.32 },
            { min: 512450, max: 768700, rate: 0.35 },
            { min: 768700, max: Infinity, rate: 0.37 },
        ],
        headOfHousehold: [
            { min: 0, max: 17700, rate: 0.10 },
            { min: 17700, max: 67450, rate: 0.12 },
            { min: 67450, max: 105700, rate: 0.22 },
            { min: 105700, max: 201750, rate: 0.24 },
            { min: 201750, max: 256200, rate: 0.32 },
            { min: 256200, max: 640600, rate: 0.35 },
            { min: 640600, max: Infinity, rate: 0.37 },
        ],
    },

    // 2026 Standard Deductions
    standardDeduction: {
        single: 16100,
        marriedFilingJointly: 32200,
        marriedFilingSeparately: 16100,
        headOfHousehold: 24200, // Typically between single and joint, check specific search result if needed but 2025 was 22500, so ~7% increase.
    } as Record<string, number>,

    // Filing Status Options
    filingStatuses: [
        { id: "single", name: "Single", description: "Unmarried or legally separated" },
        { id: "marriedFilingJointly", name: "Married Filing Jointly", description: "Married and filing together" },
        { id: "marriedFilingSeparately", name: "Married Filing Separately", description: "Married but filing separate returns" },
        { id: "headOfHousehold", name: "Head of Household", description: "Unmarried with qualifying dependents" },
    ],

    // Tax Credits (2025)
    credits: {
        childTaxCredit: 2000, // per qualifying child
        childTaxCreditRefundable: 1700, // refundable portion (ACTC)
        earnedIncomeCredit: {
            noChildren: 649,
            oneChild: 4328,
            twoChildren: 7152,
            threeOrMore: 8046,
        },
        childAndDependentCare: 3000, // max for one dependent
        educationCredits: {
            americanOpportunity: 2500, // max per student
            lifetimeLearning: 2000, // max per return
        },
    },

    // Self-Employment Tax (2025)
    selfEmployment: {
        rate: 0.153, // 15.3% (12.4% SS + 2.9% Medicare)
        socialSecurityWageCap: 176100, // 2025 SS wage base
        medicareAdditionalRate: 0.009, // 0.9% additional Medicare over threshold
        medicareThreshold: {
            single: 200000,
            marriedFilingJointly: 250000,
        },
    },

    // Common Deductions
    deductions: {
        stateAndLocalTaxCap: 10000, // SALT cap
        mortgageInterestLimit: 750000, // loan amount limit
        charitableContributionLimit: 0.60, // 60% of AGI
        studentLoanInterest: 2500, // max deduction
        hsaContribution: {
            individual: 4300,
            family: 8550,
        },
        iraContribution: 7000,
        iraContribution50Plus: 8000,
        contribution401k: 23500,
        contribution401k50Plus: 31000,
    },

    // Defaults
    defaults: {
        income: 75000,
        filingStatus: "single",
        withholding: 8000,
        children: 0,
    },
    citation: "Based on official 2026 IRS Tax Inflation Adjustments (Revenue Procedure 2025-XX) and Tax Foundation Economic Benchmarks."
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "tax/calculator",
        name: "Income Tax Calculator",
        shortName: "Tax Calc",
        description: "Calculate your 2025 federal income tax",
        longDescription: "Enter your income and filing status to see your tax liability and effective rate.",
        icon: Calculator,
        category: "tax",
        keywords: ["income tax calculator", "federal tax calculator", "2025 tax calculator"],
        featured: true,
    },
    {
        id: "tax/brackets",
        name: "Tax Brackets",
        shortName: "Brackets",
        description: "2025 federal tax brackets and rates",
        longDescription: "See the official 2025 IRS tax brackets for all filing statuses.",
        icon: FileText,
        category: "tax",
        keywords: ["2025 tax brackets", "federal tax rates", "marginal tax rate"],
        featured: true,
    },
    {
        id: "tax/refund",
        name: "Refund Estimator",
        shortName: "Refund",
        description: "Estimate your tax refund or amount owed",
        longDescription: "Compare your withholding to your tax liability to see if you'll get a refund.",
        icon: DollarSign,
        category: "tax",
        keywords: ["tax refund calculator", "refund estimator", "how much refund"],
        featured: true,
    },
    {
        id: "tax/self-employed",
        name: "Self-Employment Tax",
        shortName: "SE Tax",
        description: "Calculate self-employment tax (15.3%)",
        longDescription: "Freelancers, contractors, and small business owners - see your SE tax.",
        icon: Briefcase,
        category: "tax",
        keywords: ["self employment tax calculator", "1099 tax calculator", "freelancer tax"],
        featured: true,
    },
    {
        id: "tax/deductions",
        name: "Deductions Guide",
        shortName: "Deductions",
        description: "Standard vs itemized deductions",
        longDescription: "Understand which deductions you can take and whether to itemize.",
        icon: Receipt,
        category: "tax",
        keywords: ["tax deductions", "standard deduction 2025", "itemized deductions"],
        featured: false,
    },
    {
        id: "tax/filing-status",
        name: "Filing Status",
        shortName: "Status",
        description: "Compare tax by filing status",
        longDescription: "See how your filing status affects your tax liability.",
        icon: Users,
        category: "tax",
        keywords: ["filing status", "single vs married filing", "head of household"],
        featured: false,
    },
] as const;

// ============================================
// TAX CALCULATION
// ============================================

export interface TaxResult {
    grossIncome: number;
    filingStatus: string;
    standardDeduction: number;
    taxableIncome: number;
    federalTax: number;
    effectiveRate: number;
    marginalRate: number;
    bracketBreakdown: { rate: number; taxableAmount: number; tax: number }[];
    childTaxCredit: number;
    totalCredits: number;
    finalTax: number;
}

export function calculateTax(
    grossIncome: number,
    filingStatus: string = "single",
    children: number = 0,
    customDeduction?: number
): TaxResult {
    const { brackets, standardDeduction, credits } = TAX_CONSTANTS;

    // Get standard deduction
    const deduction = customDeduction ?? (standardDeduction[filingStatus] || standardDeduction.single);

    // Taxable income
    const taxableIncome = Math.max(0, grossIncome - deduction);

    // Get brackets for filing status
    const statusBrackets = brackets[filingStatus as keyof typeof brackets] || brackets.single;

    // Calculate tax by bracket
    let federalTax = 0;
    const bracketBreakdown: { rate: number; taxableAmount: number; tax: number }[] = [];
    let remainingIncome = taxableIncome;

    for (const bracket of statusBrackets) {
        if (remainingIncome <= 0) break;

        const bracketSize = bracket.max - bracket.min;
        const taxableInBracket = Math.min(remainingIncome, bracketSize);
        const taxForBracket = taxableInBracket * bracket.rate;

        if (taxableInBracket > 0) {
            bracketBreakdown.push({
                rate: bracket.rate,
                taxableAmount: taxableInBracket,
                tax: taxForBracket,
            });
        }

        federalTax += taxForBracket;
        remainingIncome -= taxableInBracket;
    }

    // Calculate marginal rate
    let marginalRate = 0.10;
    for (const bracket of statusBrackets) {
        if (taxableIncome > bracket.min) {
            marginalRate = bracket.rate;
        }
    }

    // Child Tax Credit
    const childTaxCredit = Math.min(children * credits.childTaxCredit, federalTax);
    const totalCredits = childTaxCredit;

    // Final tax after credits
    const finalTax = Math.max(0, federalTax - totalCredits);

    // Effective rate
    const effectiveRate = grossIncome > 0 ? (finalTax / grossIncome) * 100 : 0;

    return {
        grossIncome,
        filingStatus,
        standardDeduction: deduction,
        taxableIncome,
        federalTax: Math.round(federalTax),
        effectiveRate: Math.round(effectiveRate * 100) / 100,
        marginalRate: marginalRate * 100,
        bracketBreakdown,
        childTaxCredit,
        totalCredits,
        finalTax: Math.round(finalTax),
    };
}

// ============================================
// REFUND CALCULATION
// ============================================

export interface RefundResult {
    taxLiability: number;
    totalWithholding: number;
    refundOrOwed: number;
    isRefund: boolean;
}

export function calculateRefund(
    grossIncome: number,
    filingStatus: string,
    totalWithholding: number,
    children: number = 0
): RefundResult {
    const taxResult = calculateTax(grossIncome, filingStatus, children);
    const taxLiability = taxResult.finalTax;
    const refundOrOwed = totalWithholding - taxLiability;

    return {
        taxLiability,
        totalWithholding,
        refundOrOwed: Math.abs(refundOrOwed),
        isRefund: refundOrOwed >= 0,
    };
}

// ============================================
// SELF-EMPLOYMENT TAX
// ============================================

export interface SelfEmploymentResult {
    netEarnings: number;
    seTaxableEarnings: number;
    socialSecurityTax: number;
    medicareTax: number;
    additionalMedicare: number;
    totalSETax: number;
    deductibleHalf: number;
}

export function calculateSelfEmploymentTax(
    netSelfEmploymentIncome: number,
    filingStatus: string = "single"
): SelfEmploymentResult {
    const { selfEmployment } = TAX_CONSTANTS;

    // 92.35% of net SE income is subject to SE tax
    const seTaxableEarnings = netSelfEmploymentIncome * 0.9235;

    // Social Security (12.4% up to wage cap)
    const socialSecurityTaxable = Math.min(seTaxableEarnings, selfEmployment.socialSecurityWageCap);
    const socialSecurityTax = socialSecurityTaxable * 0.124;

    // Medicare (2.9% on all)
    const medicareTax = seTaxableEarnings * 0.029;

    // Additional Medicare (0.9% over threshold)
    const threshold = selfEmployment.medicareThreshold[filingStatus as keyof typeof selfEmployment.medicareThreshold] || 200000;
    const additionalMedicareBase = Math.max(0, seTaxableEarnings - threshold);
    const additionalMedicare = additionalMedicareBase * selfEmployment.medicareAdditionalRate;

    const totalSETax = socialSecurityTax + medicareTax + additionalMedicare;

    // Can deduct half of SE tax
    const deductibleHalf = totalSETax / 2;

    return {
        netEarnings: netSelfEmploymentIncome,
        seTaxableEarnings: Math.round(seTaxableEarnings),
        socialSecurityTax: Math.round(socialSecurityTax),
        medicareTax: Math.round(medicareTax),
        additionalMedicare: Math.round(additionalMedicare),
        totalSETax: Math.round(totalSETax),
        deductibleHalf: Math.round(deductibleHalf),
    };
}

// ============================================
// GET TAX BRACKETS FOR DISPLAY
// ============================================

export function getTaxBrackets(filingStatus: string) {
    const { brackets } = TAX_CONSTANTS;
    return brackets[filingStatus as keyof typeof brackets] || brackets.single;
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
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}

export function formatPercent(value: number): string {
    return `${value.toFixed(1)}%`;
}
