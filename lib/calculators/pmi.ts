// ============================================
// PMI CALCULATOR - SITE CONFIG
// 2026 Data - Private Mortgage Insurance
// ============================================

import { Calculator, FileText, Shield, Home } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "PMI Calculator",
    tagline: "Free PMI Calculator",
    description: "Calculate your private mortgage insurance cost instantly. Free 2026 PMI calculator with removal timeline.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pmi",
};

// ============================================
// 2026 PMI CONSTANTS
// ============================================
export const PMI_2026 = {
    // PMI rates by LTV (Loan-to-Value)
    rates: [
        { ltvMin: 95, ltvMax: 97, rate: 1.50, description: "97% LTV (3% down)" },
        { ltvMin: 90, ltvMax: 95, rate: 1.20, description: "95% LTV (5% down)" },
        { ltvMin: 85, ltvMax: 90, rate: 0.80, description: "90% LTV (10% down)" },
        { ltvMin: 80, ltvMax: 85, rate: 0.50, description: "85% LTV (15% down)" },
    ],

    // Removal thresholds
    removalThresholds: {
        automatic: 78,     // Automatic removal at 78% LTV
        request: 80,       // Can request removal at 80% LTV
    },

    // Statistics
    statistics: {
        avgPMI: 150,         // per month
        avgAnnualPMI: 1800,  // per year
        avgRemovalTime: 5,   // years
        homesWithPMI: 22,    // percent of mortgages
    },

    // Citation
    citation: "Based on CFPB Homeowners Protection Act and mortgage industry data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "pmi/calculator",
        name: "PMI Calculator",
        shortName: "Calculator",
        description: "Calculate monthly PMI cost",
        longDescription: "Free PMI calculator. See your monthly cost and when you can remove PMI.",
        icon: Calculator,
        category: "finance",
        keywords: ["pmi calculator", "mortgage insurance calculator", "private mortgage insurance"],
        featured: true,
    },
    {
        id: "pmi/guide",
        name: "PMI Guide",
        shortName: "Guide",
        description: "Understanding PMI & removal",
        longDescription: "Learn what PMI is, when it's required, and how to remove it.",
        icon: FileText,
        category: "finance",
        keywords: ["what is pmi", "how to remove pmi", "pmi removal"],
        featured: true,
    },
] as const;

// ============================================
// PMI CALCULATION
// ============================================
export interface PMIResult {
    homePrice: number;
    downPayment: number;
    downPaymentPercent: number;
    loanAmount: number;
    ltv: number;
    pmiRate: number;
    monthlyPMI: number;
    annualPMI: number;
    monthsToRemove: number;
    equityNeeded: number;
}

export function calculatePMI(
    homePrice: number,
    downPaymentPercent: number = 10,
    interestRate: number = 7.0,
    homeAppreciationRate: number = 3.0
): PMIResult {
    const downPayment = homePrice * (downPaymentPercent / 100);
    const loanAmount = homePrice - downPayment;
    const ltv = (loanAmount / homePrice) * 100;

    // Find PMI rate based on LTV
    let pmiRate = 0;
    for (const tier of PMI_2026.rates) {
        if (ltv > tier.ltvMin && ltv <= tier.ltvMax) {
            pmiRate = tier.rate;
            break;
        }
    }
    if (ltv > 97) pmiRate = PMI_2026.rates[0].rate;

    const annualPMI = loanAmount * (pmiRate / 100);
    const monthlyPMI = annualPMI / 12;

    // Calculate months to reach 80% LTV (for PMI removal request)
    const targetLTV = 80;
    const targetEquity = homePrice * (1 - targetLTV / 100);
    const currentEquity = downPayment;
    const equityNeeded = targetEquity - currentEquity;

    // Estimate months (simplified: considers appreciation only)
    const monthlyAppreciation = homePrice * (homeAppreciationRate / 100 / 12);
    const monthlyPrincipal = loanAmount * (interestRate / 100 / 12) * 0.3; // rough estimate
    const monthlyEquityGain = monthlyAppreciation + monthlyPrincipal;
    const monthsToRemove = monthlyEquityGain > 0 ? Math.ceil(equityNeeded / monthlyEquityGain) : 0;

    return {
        homePrice,
        downPayment: Math.round(downPayment),
        downPaymentPercent,
        loanAmount: Math.round(loanAmount),
        ltv: Math.round(ltv * 10) / 10,
        pmiRate,
        monthlyPMI: Math.round(monthlyPMI),
        annualPMI: Math.round(annualPMI),
        monthsToRemove: Math.min(monthsToRemove, 120), // Cap at 10 years
        equityNeeded: Math.round(equityNeeded),
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
