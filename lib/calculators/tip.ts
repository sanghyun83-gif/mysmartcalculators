// ============================================
// TIP CALCULATOR - SITE CONFIG
// 2026 Data - Tipping Standards & Etiquette
// ============================================

import { Calculator, FileText, DollarSign, Users } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Tip Calculator",
    tagline: "Free Tip Calculator",
    description: "Calculate tips and split bills instantly. Free 2026 tip calculator with standard tipping percentages.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/tip",
};

// ============================================
// 2026 TIPPING CONSTANTS
// ============================================
export const TIP_2026 = {
    // Standard tip percentages by service
    tipPercentages: [
        { service: "Restaurant (Good)", percent: 20, description: "Standard good service" },
        { service: "Restaurant (Exceptional)", percent: 25, description: "Exceptional service" },
        { service: "Restaurant (Average)", percent: 15, description: "Basic service" },
        { service: "Takeout", percent: 10, description: "Pickup orders" },
        { service: "Delivery", percent: 18, description: "Food delivery" },
        { service: "Bartender", percent: 20, description: "Per round or tab" },
    ],

    // Quick tip options
    quickTips: [15, 18, 20, 25],

    // Statistics
    statistics: {
        avgTipPercent: 19.5,
        tippedWorkers: 4.3,  // million
        avgAnnualTips: 5600,
        tipFrequency: 78,  // % of Americans tip
    },

    // Citation
    citation: "Based on US Department of Labor and National Restaurant Association data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "tip/calculator",
        name: "Tip Calculator",
        shortName: "Calculator",
        description: "Calculate tip and split bill",
        longDescription: "Free tip calculator. Calculate tip amount and split the bill among party members.",
        icon: Calculator,
        category: "finance",
        keywords: ["tip calculator", "gratuity calculator", "bill split calculator"],
        featured: true,
    },
    {
        id: "tip/tipping-guide",
        name: "Tipping Guide",
        shortName: "Guide",
        description: "Tipping etiquette by service",
        longDescription: "Learn proper tipping amounts for restaurants, delivery, bars, and more.",
        icon: FileText,
        category: "finance",
        keywords: ["tipping guide", "how much to tip", "tipping etiquette"],
        featured: true,
    },
] as const;

// ============================================
// TIP CALCULATION
// ============================================
export interface TipResult {
    billAmount: number;
    tipPercent: number;
    tipAmount: number;
    totalAmount: number;
    splitCount: number;
    perPersonBill: number;
    perPersonTip: number;
    perPersonTotal: number;
}

export function calculateTip(
    billAmount: number,
    tipPercent: number = 20,
    splitCount: number = 1
): TipResult {
    const tipAmount = billAmount * (tipPercent / 100);
    const totalAmount = billAmount + tipAmount;

    const perPersonBill = billAmount / splitCount;
    const perPersonTip = tipAmount / splitCount;
    const perPersonTotal = totalAmount / splitCount;

    return {
        billAmount,
        tipPercent,
        tipAmount: Math.round(tipAmount * 100) / 100,
        totalAmount: Math.round(totalAmount * 100) / 100,
        splitCount,
        perPersonBill: Math.round(perPersonBill * 100) / 100,
        perPersonTip: Math.round(perPersonTip * 100) / 100,
        perPersonTotal: Math.round(perPersonTotal * 100) / 100,
    };
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}
