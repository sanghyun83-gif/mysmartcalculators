// ============================================
// CLOSING COST CALCULATOR - SITE CONFIG
// 2026 Data - Real Estate Transaction Standards
// ============================================

import { Calculator, FileText, DollarSign, Home } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Closing Cost Calculator",
    tagline: "Free Closing Cost Calculator",
    description: "Calculate home closing costs instantly. Free 2026 calculator with itemized fees for buyers and sellers.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/closing-cost",
};

// ============================================
// 2026 CLOSING COST CONSTANTS
// ============================================
export const CLOSING_COST_2026 = {
    // Buyer closing costs (as % of home price or loan amount)
    buyerCosts: [
        { name: "Loan Origination", percent: 1.0, of: "loan" },
        { name: "Appraisal", fixed: 500, of: "fixed" },
        { name: "Title Insurance", percent: 0.5, of: "price" },
        { name: "Title Search", fixed: 400, of: "fixed" },
        { name: "Home Inspection", fixed: 450, of: "fixed" },
        { name: "Recording Fees", fixed: 125, of: "fixed" },
        { name: "Prepaid Interest", percent: 0.5, of: "loan" },
        { name: "Escrow Deposit", percent: 0.25, of: "loan" },
    ],

    // Seller closing costs
    sellerCosts: [
        { name: "Real Estate Commission", percent: 5.0, of: "price" },
        { name: "Title Insurance (Owner's)", percent: 0.3, of: "price" },
        { name: "Transfer Tax", percent: 0.5, of: "price" },
        { name: "Attorney Fees", fixed: 800, of: "fixed" },
    ],

    // Statistics
    statistics: {
        avgBuyerClosing: 3.5,    // percent of price
        avgSellerClosing: 8.0,   // percent of price
        medianHomePrice: 416000,
        avgTotalClosing: 15000,
    },

    // Citation
    citation: "Based on CFPB and ALTA closing cost data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "closing-cost/calculator",
        name: "Closing Cost Calculator",
        shortName: "Calculator",
        description: "Calculate buyer & seller closing costs",
        longDescription: "Free closing cost calculator. Get itemized estimates for all home transaction fees.",
        icon: Calculator,
        category: "finance",
        keywords: ["closing cost calculator", "home closing costs", "buyer closing costs"],
        featured: true,
    },
    {
        id: "closing-cost/guide",
        name: "Closing Cost Guide",
        shortName: "Guide",
        description: "Understanding closing costs",
        longDescription: "Learn what fees to expect and how to reduce closing costs.",
        icon: FileText,
        category: "finance",
        keywords: ["closing cost breakdown", "who pays closing costs", "closing fees"],
        featured: true,
    },
] as const;

// ============================================
// CLOSING COST CALCULATION
// ============================================
export interface ClosingCostResult {
    homePrice: number;
    loanAmount: number;
    buyerCosts: { name: string; amount: number }[];
    totalBuyerCosts: number;
    sellerCosts: { name: string; amount: number }[];
    totalSellerCosts: number;
    buyerPercent: number;
    sellerPercent: number;
}

export function calculateClosingCosts(
    homePrice: number,
    downPaymentPercent: number = 20
): ClosingCostResult {
    const loanAmount = homePrice * (1 - downPaymentPercent / 100);

    // Calculate buyer costs
    const buyerCosts = CLOSING_COST_2026.buyerCosts.map(cost => {
        let amount = 0;
        if (cost.of === "fixed" && cost.fixed) {
            amount = cost.fixed;
        } else if (cost.of === "loan" && cost.percent) {
            amount = loanAmount * (cost.percent / 100);
        } else if (cost.of === "price" && cost.percent) {
            amount = homePrice * (cost.percent / 100);
        }
        return { name: cost.name, amount: Math.round(amount) };
    });

    const totalBuyerCosts = buyerCosts.reduce((sum, c) => sum + c.amount, 0);

    // Calculate seller costs
    const sellerCosts = CLOSING_COST_2026.sellerCosts.map(cost => {
        let amount = 0;
        if (cost.of === "fixed" && cost.fixed) {
            amount = cost.fixed;
        } else if (cost.of === "price" && cost.percent) {
            amount = homePrice * (cost.percent / 100);
        }
        return { name: cost.name, amount: Math.round(amount) };
    });

    const totalSellerCosts = sellerCosts.reduce((sum, c) => sum + c.amount, 0);

    return {
        homePrice,
        loanAmount: Math.round(loanAmount),
        buyerCosts,
        totalBuyerCosts: Math.round(totalBuyerCosts),
        sellerCosts,
        totalSellerCosts: Math.round(totalSellerCosts),
        buyerPercent: Math.round((totalBuyerCosts / homePrice) * 1000) / 10,
        sellerPercent: Math.round((totalSellerCosts / homePrice) * 1000) / 10,
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
