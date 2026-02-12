// ============================================
// TIP CALCULATOR - SITE CONFIG
// 2026 Data - Tipping Standards & Etiquette (S-Class)
// ============================================

import { Calculator, FileText, DollarSign, Users, Shield, Globe, Landmark, Scale, Heart } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "2026 Tip Calculator | Gratuity Gold Precision Engine",
    tagline: "Institutional Tipping Standards & Global Etiquette Audit",
    description: "Calculate tips, split bills, and audit tipping etiquette with 2026 precision. Expert guide for global gratuity standards, service economy ethics, and digital prompt management.",
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
        { service: "Restaurant (Average)", percent: 18, description: "2026 median service" },
        { service: "Takeout", percent: 10, description: "Pickup/Carry-out" },
        { service: "Delivery", percent: 15, description: "Base delivery fee" },
        { service: "Bartender", percent: 20, description: "Per round or tab" },
    ],

    // Quick tip options
    quickTips: [18, 20, 22, 25],

    // Statistics
    statistics: {
        avgTipPercent: 21.2,
        tippedWorkers: 4.8,  // million
        avgAnnualTips: 6200,
        tipFrequency: 82,  // % of Americans tip
    },

    // E-E-A-T Citations
    citations: [
        { name: "Emily Post Institute Tipping Guide", url: "https://emilypost.com/" },
        { name: "US Dept of Labor: Tipped Employees", url: "https://www.dol.gov/" },
        { name: "National Restaurant Association 2026", url: "https://restaurant.org/" },
        { name: "Pew Research: Service Economy Trends", url: "https://www.pewresearch.org/" }
    ],

    faqs: [
        {
            question: "Is it customary to tip on the pre-tax or post-tax total?",
            answer: "Etiquette experts at the Emily Post Institute recommend tipping on the pre-tax bill. However, most digital POS (Point of Sale) systems in 2026 automatically calculate tips on the post-tax total. Our calculator allows for both for maximum precision."
        },
        {
            question: "How should I handle 'Tip Inflation' in 2026?",
            answer: "Tip inflation refers to the rising baseline percentages (from 15% to 18-20%). While 20% is the new 'standard' for good service, you are never legally required to exceed your comfort level. Base your decision on the quality of service and institutional norms."
        },
        {
            question: "What is the proper etiquette for tipping on takeout?",
            answer: "While not mandatory like sit-down dining, tipping 10-15% on takeout is increasingly common in 2026 to support back-of-house staff who package and verify complex orders."
        },
        {
            question: "Do I tip for counter service with a digital tablet prompt?",
            answer: "If the service is minimal (just taking an order), a tip is not strictly required. However, a small 'round-up' or $1-2 is appreciated for workers in high-cost-of-living areas."
        },
        {
            question: "What are the rules for tipping at all-inclusive resorts?",
            answer: "Check the resort policy; many include a 'Service Charge' which replaces individual tipping. If exceptional service is provided, a discrete cash gratuity ($5-10) is still a common courtesy."
        },
        {
            question: "How do I split a bill with different numbers of drinks and appetizers?",
            answer: "The 'Proportional Split' method is best. Our S-Class engine allows you to calculate the total tip and then distribute it proportional to each individual's subtotal."
        },
        {
            question: "What is a 'Service Charge' vs. a 'Tip'?",
            answer: "A service charge is a mandatory fee (often for large parties), while a tip is a voluntary gratuity. Legally, employers have more control over service charges, whereas tips belong to the employee."
        },
        {
            question: "Is tipping common in Europe or Asia?",
            answer: "In much of Europe, service is included (service compris), and a small 'round up' is sufficient. In Japan and Korea, tipping can sometimes be seen as insulting. Always audit the local customs via our Global Hub."
        },
        {
            question: "Should I tip for bad service?",
            answer: "If service is poor, tipping 10-15% is still standard as a 'base livelihood' gesture, but you should speak with a manager to ensure the feedback is constructive."
        },
        {
            question: "How much should I tip a hotel concierge?",
            answer: "For basic directions, no tip. For hard-to-get reservations or complex arrangements, $10-20 is appropriate depending on the difficulty."
        },
        {
            question: "What is the 2026 'Tip Credit' legislation?",
            answer: "Several US states are phasing out the 'Tip Credit,' ensuring tipped workers receive the full minimum wage plus tips. This is shifting standard tipping expectations in those regions."
        },
        {
            question: "How do I calculate a tip for a large group of 10+ people?",
            answer: "Parties of 6 or more often have an automatic 18-20% gratuity included. Always check the bill for 'Gratuity' or 'Service Charge' before adding more."
        },
        {
            question: "Do I tip the owner of a small business?",
            answer: "Historically, owners were not tipped. In 2026, this rule has softened; if the owner provides the service personally (e.g., a hair stylist), tipping is now widely accepted."
        },
        {
            question: "What is the etiquette for tipping on a gift card?",
            answer: "Tip based on the original value of the meal, not the remaining balance after the gift card is applied. This ensures the server is compensated for the full level of effort."
        },
        {
            question: "How has digital tipping changed server compensation?",
            answer: "Digital prompts have increased the average tip percentage, but 'Tip Fatigue' has stabilized the frequency. 2026 data shows that consumers are becoming more selective with high-percentage prompts."
        }
    ]
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "tip/calculator",
        name: "2026 Tip Calculator",
        shortName: "Calculator",
        description: "Precision bill split and tip audit engine",
        longDescription: "Calculate tip amount, split the bill, and manage tax-exclusive tipping for any party size with 2026 institutional precision.",
        icon: Calculator,
        category: "finance",
        keywords: ["tip calculator", "gratuity calculator", "bill split calculator", "2026 tipping standards"],
        featured: true,
    },
    {
        id: "tip/tipping-guide",
        name: "Global Tipping Hub",
        shortName: "Guide",
        description: "2026 Tipping etiquette by service",
        longDescription: "Deep dive into proper tipping amounts for restaurants, delivery, bars, and international travel in 2026.",
        icon: FileText,
        category: "finance",
        keywords: ["tipping guide", "how much to tip", "tipping etiquette 2026", "international tipping"],
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
