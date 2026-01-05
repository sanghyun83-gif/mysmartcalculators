// ============================================
// ESTATE TAX CALCULATOR - SITE CONFIG
// 2026 Data - Federal Estate & Gift Tax
// ============================================

import { Calculator, DollarSign, FileText, Scale } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Estate Tax Calculator",
    tagline: "Free Estate Tax Estimator",
    description: "Calculate federal estate tax liability. Free 2026 calculator for estate exemption and tax rates.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/estate-tax",
};

// ============================================
// 2026 ESTATE TAX CONSTANTS
// Source: IRS, adjusted for inflation
// ============================================
export const ESTATE_TAX_2026 = {
    // Federal exemption (per person)
    federalExemption: 13990000,  // $13.99M for 2026 (projected)

    // Married couples (portability)
    marriedExemption: 27980000,  // 2x single exemption

    // Top tax rate
    maxTaxRate: 40,  // 40% on amounts over exemption

    // Annual gift exclusion
    annualGiftExclusion: 19000,  // Per recipient

    // Tax brackets (simplified - amounts over exemption)
    taxBrackets: [
        { min: 0, max: 10000, rate: 18 },
        { min: 10000, max: 20000, rate: 20 },
        { min: 20000, max: 40000, rate: 22 },
        { min: 40000, max: 60000, rate: 24 },
        { min: 60000, max: 80000, rate: 26 },
        { min: 80000, max: 100000, rate: 28 },
        { min: 100000, max: 150000, rate: 30 },
        { min: 150000, max: 250000, rate: 32 },
        { min: 250000, max: 500000, rate: 34 },
        { min: 500000, max: 750000, rate: 37 },
        { min: 750000, max: 1000000, rate: 39 },
        { min: 1000000, max: Infinity, rate: 40 },
    ],

    // States with estate tax
    statesWithEstateTax: [
        { state: "Washington", exemption: 2193000, rate: 20 },
        { state: "Oregon", exemption: 1000000, rate: 16 },
        { state: "Massachusetts", exemption: 2000000, rate: 16 },
        { state: "New York", exemption: 6940000, rate: 16 },
        { state: "Maryland", exemption: 5000000, rate: 16 },
        { state: "Illinois", exemption: 4000000, rate: 16 },
        { state: "Connecticut", exemption: 13990000, rate: 12 },
    ],

    // Statistics
    statistics: {
        estatesPayingTax: 0.1,  // % of estates
        avgEstateTaxPaid: 6800000,
        totalEstatesAnnually: 2800000,
        taxableEstatesAnnually: 2500,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "estate-tax/estate-calculator",
        name: "Estate Tax Calculator",
        shortName: "Calculator",
        description: "Calculate federal estate tax",
        longDescription: "Free 2026 estate tax calculator. Estimate federal estate tax based on estate value and exemptions.",
        icon: Calculator,
        category: "finance",
        keywords: ["estate tax calculator", "inheritance tax calculator", "death tax calculator"],
        featured: true,
    },
    {
        id: "estate-tax/exemption-guide",
        name: "Exemption Guide",
        shortName: "Guide",
        description: "Understanding estate tax exemptions",
        longDescription: "Learn about federal estate tax exemption, portability, and state estate taxes.",
        icon: FileText,
        category: "finance",
        keywords: ["estate tax exemption", "portability", "state estate tax"],
        featured: true,
    },
] as const;

// ============================================
// ESTATE TAX CALCULATION
// ============================================
export interface EstateTaxResult {
    grossEstate: number;
    deductions: number;
    taxableEstate: number;
    exemptionUsed: number;
    taxableAfterExemption: number;
    federalTax: number;
    stateTax: number;
    totalTax: number;
    effectiveRate: number;
    isMarried: boolean;
}

export function calculateEstateTax(
    grossEstate: number,
    deductions: number = 0,
    isMarried: boolean = false,
    stateWithTax: string = "",
    priorGifts: number = 0
): EstateTaxResult {
    // Calculate taxable estate
    const taxableEstate = Math.max(0, grossEstate - deductions);

    // Determine exemption
    const baseExemption = isMarried ?
        ESTATE_TAX_2026.marriedExemption :
        ESTATE_TAX_2026.federalExemption;
    const exemptionUsed = Math.min(taxableEstate + priorGifts, baseExemption);

    // Amount subject to tax
    const taxableAfterExemption = Math.max(0, taxableEstate + priorGifts - baseExemption);

    // Calculate federal tax using brackets
    let federalTax = 0;
    if (taxableAfterExemption > 0) {
        // Simplified: use 40% on amount over exemption
        federalTax = taxableAfterExemption * 0.40;
    }

    // Calculate state tax if applicable
    let stateTax = 0;
    const stateInfo = ESTATE_TAX_2026.statesWithEstateTax.find(s => s.state === stateWithTax);
    if (stateInfo) {
        const stateExcess = Math.max(0, taxableEstate - stateInfo.exemption);
        stateTax = stateExcess * (stateInfo.rate / 100);
    }

    const totalTax = federalTax + stateTax;
    const effectiveRate = grossEstate > 0 ? (totalTax / grossEstate) * 100 : 0;

    return {
        grossEstate,
        deductions,
        taxableEstate,
        exemptionUsed,
        taxableAfterExemption,
        federalTax: Math.round(federalTax),
        stateTax: Math.round(stateTax),
        totalTax: Math.round(totalTax),
        effectiveRate: Math.round(effectiveRate * 10) / 10,
        isMarried,
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

export function formatFullCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}
