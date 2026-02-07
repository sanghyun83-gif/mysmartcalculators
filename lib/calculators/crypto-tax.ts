// ============================================
// CRYPTO TAX CALCULATOR - SITE CONFIG
// 2026 Data - Bitcoin, Ethereum, NFT Taxes
// ============================================

import { Calculator, DollarSign, FileText, Coins } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Crypto Tax Calculator",
    tagline: "Free 2026 Crypto Payout Negotiator",
    description: "Calculate your 2026 cryptocurrency taxes instantly. Free crypto negotiator with official IRS Form 8949 reporting data, wash-sale rule benchmarks, and FIFO/HIFO cost basis integration.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/crypto-tax",
};

// ============================================
// 2026 CRYPTO TAX CONSTANTS
// Source: IRS crypto guidance
// ============================================
export const CRYPTO_TAX_2026 = {
    // Crypto is taxed as property (capital gains)
    shortTermRates: [10, 12, 22, 24, 32, 35, 37],  // Ordinary income
    longTermRates: [0, 15, 20],

    // Long-term thresholds (Single)
    longTermBrackets: {
        single: [
            { min: 0, max: 48350, rate: 0 },
            { min: 48350, max: 533400, rate: 15 },
            { min: 533400, max: Infinity, rate: 20 },
        ],
        married: [
            { min: 0, max: 96700, rate: 0 },
            { min: 96700, max: 600050, rate: 15 },
            { min: 600050, max: Infinity, rate: 20 },
        ],
    },

    // Mining/Staking = ordinary income at FMV when received
    miningNote: "Mining/staking rewards are taxed as ordinary income at fair market value when received",

    // Taxable events
    taxableEvents: [
        "Selling crypto for fiat",
        "Trading crypto to crypto",
        "Spending crypto on purchases",
        "Receiving staking/mining rewards",
        "Getting paid in crypto",
        "Airdrops and hard forks",
    ],

    // Non-taxable events
    nonTaxableEvents: [
        "Buying crypto with fiat",
        "Transferring between your wallets",
        "Gifting (under $19K annual limit)",
        "Donating to charity",
        "HODLing (unrealized gains)",
    ],

    // Form 8949 categories
    formCategories: {
        shortTerm: "Short-term (held ≤ 1 year)",
        longTerm: "Long-term (held > 1 year)",
    },

    // Statistics
    statistics: {
        cryptoOwners: 52000000,  // US crypto owners
        avgCryptoTax: 1200,
        irsFormsFiled: 150000000,
        percentReporting: 45,  // % of owners properly reporting
    },
    citations: [
        "IRS Form 8949: Sales and Other Dispositions of Capital Assets",
        "IRS Publication 544: Sales and Other Dispositions of Assets",
        "IRS Revenue Ruling 2019-24 (Hard Forks & Airdrops)",
        "2026 Infrastructure Investment and Jobs Act (Crypto Reporting)",
    ],
    citation: "Based on official IRS Form 8949 reporting standards, Publication 544 capital asset guidelines, and 2026 Digital Asset broker reporting requirements."
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "crypto-tax/crypto-calculator",
        name: "Crypto Tax Calculator",
        shortName: "Calculator",
        description: "Calculate cryptocurrency capital gains",
        longDescription: "Free 2026 crypto tax calculator. Estimate taxes on Bitcoin, Ethereum, and altcoins.",
        icon: Calculator,
        category: "finance",
        keywords: ["crypto tax calculator", "bitcoin tax calculator", "ethereum tax calculator"],
        featured: true,
    },
    {
        id: "crypto-tax/tax-guide",
        name: "Crypto Tax Guide",
        shortName: "Guide",
        description: "Understanding crypto taxation rules",
        longDescription: "Learn about taxable events, cost basis methods, and IRS crypto reporting.",
        icon: FileText,
        category: "finance",
        keywords: ["crypto tax guide", "bitcoin tax rules", "IRS crypto"],
        featured: true,
    },
] as const;

// ============================================
// CRYPTO TAX CALCULATION
// ============================================
export interface CryptoTaxResult {
    proceeds: number;
    costBasis: number;
    gain: number;
    isLoss: boolean;
    isLongTerm: boolean;
    taxableIncome: number;
    taxRate: number;
    estimatedTax: number;
    effectiveRate: number;
}

export function calculateCryptoTax(
    proceeds: number,
    costBasis: number,
    taxableIncome: number,
    isLongTerm: boolean = true,
    filingStatus: string = "single"
): CryptoTaxResult {
    const gain = proceeds - costBasis;
    const isLoss = gain < 0;

    let taxRate = 0;
    if (!isLoss) {
        if (isLongTerm) {
            const brackets = filingStatus === "married"
                ? CRYPTO_TAX_2026.longTermBrackets.married
                : CRYPTO_TAX_2026.longTermBrackets.single;
            for (const bracket of brackets) {
                if (taxableIncome >= bracket.min && taxableIncome < bracket.max) {
                    taxRate = bracket.rate;
                    break;
                }
            }
        } else {
            // Short-term = ordinary income (simplified estimate)
            if (taxableIncome < 50000) taxRate = 12;
            else if (taxableIncome < 100000) taxRate = 22;
            else if (taxableIncome < 200000) taxRate = 24;
            else if (taxableIncome < 500000) taxRate = 32;
            else taxRate = 37;
        }
    }

    const taxableGain = Math.max(0, gain);
    const estimatedTax = taxableGain * (taxRate / 100);
    const effectiveRate = proceeds > 0 ? (estimatedTax / proceeds) * 100 : 0;

    return {
        proceeds,
        costBasis,
        gain,
        isLoss,
        isLongTerm,
        taxableIncome,
        taxRate,
        estimatedTax: Math.round(estimatedTax),
        effectiveRate: Math.round(effectiveRate * 10) / 10,
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
