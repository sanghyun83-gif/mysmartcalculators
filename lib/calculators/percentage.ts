// ============================================
// PERCENTAGE-CALC SITE CONFIGURATION
// 2025-2026 Percentage Engine
// ============================================

import { Percent, TrendingUp, TrendingDown, Scale, Calculator, CalculatorIcon } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Percentage Calculator",
    tagline: "Free 2026 Precision Percentage & Growth Estimator",
    description: "Calculate percentages instantly with our 2026 math engine. Free negotiator for percentage increase, decrease, difference, and common business metrics with NIST precision.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/percentage",
};

// ============================================
// PERCENTAGE CONSTANTS
// ============================================
export const PERCENT_CONSTANTS = {
    defaults: {
        value1: 100,
        value2: 20,
    },
    citation: "Based on NIST Mathematical Standards, ISO 80000-1 quantities and units, and industry-standard business accounting benchmarks (GAAP)."
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "percentage/calculator",
        name: "Percentage Calculator",
        shortName: "Percentage",
        description: "Calculate basic percentages and differences",
        longDescription: "Free percentage calculator to find the percentage of a value, percentage change, and relative difference.",
        icon: Percent,
        category: "general",
        keywords: ["percentage calculator", "percent off calculator", "calculate percent"],
        featured: true,
        faqs: [
            {
                question: "What is the basic formula for a percentage?",
                answer: "The word percentage comes from 'per centum', meaning 'per 100'. The basic formula is (Part / Whole) × 100. For example, if you have 20 apples out of 100, you have (20/100) × 100 = 20%."
            },
            {
                question: "How do I calculate percentage increase?",
                answer: "To find the percentage increase: ((New Value - Original Value) / Original Value) × 100. If a price goes from $100 to $120, the increase is (($120 - $100) / $100) × 100 = 20%."
            },
            {
                question: "How do I calculate percentage decrease?",
                answer: "To find the percentage decrease: ((Original Value - New Value) / Original Value) × 100. If a price drops from $100 to $80, the decrease is (($100 - $80) / $100) × 100 = 20%."
            },
            {
                question: "What is the difference between percentage and percentage points?",
                answer: "A percentage is a ratio, while percentage points refer to the arithmetic difference between two percentages. For example, if an interest rate rises from 5% to 6%, it has increased by 1 percentage point, which is a 20% relative increase."
            },
            {
                question: "How do you add a percentage to a number?",
                answer: "Multiply the original number by (1 + percentage/100). To add 15% to $100: $100 × (1 + 0.15) = $115."
            },
            {
                question: "How do you subtract a percentage from a number?",
                answer: "Multiply the original number by (1 - percentage/100). To take 20% off $100: $100 × (1 - 0.20) = $80."
            },
            {
                question: "How do I convert a fraction to a percentage?",
                answer: "Divide the numerator by the denominator and multiply by 100. For example, 3/4 becomes 0.75, then 0.75 × 100 = 75%."
            },
            {
                question: "How do I convert a decimal to a percentage?",
                answer: "Simply multiply the decimal by 100 and add the '%' sign. For example, 0.456 becomes 45.6%."
            },
            {
                question: "What is VAT and how is it calculated?",
                answer: "Value Added Tax (VAT) is a consumption tax. To find the VAT amount: (Net Price × VAT Rate) / 100. To find the total price: Net Price × (1 + VAT Rate/100)."
            },
            {
                question: "How do I calculate CAGR (Compound Annual Growth Rate)?",
                answer: "CAGR is the geometric progression ratio that provides a constant rate of return: [(End Value / Start Value)^(1 / Number of Years)] - 1. Then multiply by 100 to get the percentage."
            },
            {
                question: "Why is 100% of something just the original amount?",
                answer: "100% means 100 per 100, which equals 1 (100/100 = 1). Multiplying any number by 1 leaves it unchanged."
            },
            {
                question: "What happens if a value increases by more than 100%?",
                answer: "A 100% increase means the value has doubled. A 200% increase means it has tripled (Original + 2 × Original). There is no upper limit to percentage increase."
            },
            {
                question: "Can a percentage be negative?",
                answer: "In mathematics, percentages usually refer to absolute ratios (0-100+). However, in financial contexts, a 'negative percentage' usually indicates a decrease or a loss."
            },
            {
                question: "How do I find the 'Whole' if I know the 'Part' and the 'Percentage'?",
                answer: "Use the formula: Whole = Part / (Percentage / 100). If 20 is 10% of a number, then Whole = 20 / 0.10 = 200."
            },
            {
                question: "What is percentage error?",
                answer: "It measures the inaccuracy of a measurement: (|Experimental Value - Theoretical Value| / |Theoretical Value|) × 100. It shows how close a result is to the target."
            }
        ]
    },
    {
        id: "percentage/change",
        name: "Percentage Change",
        shortName: "Change",
        description: "Calculate increase or decrease percentage",
        longDescription: "Instantly find the percentage change between two numbers with our growth engine.",
        icon: TrendingUp,
        category: "general",
        keywords: ["percentage change calculator", "percent increase", "percent decrease"],
        featured: true,
    },
    {
        id: "percentage/difference",
        name: "Percentage Difference",
        shortName: "Difference",
        description: "Calculate relative difference between values",
        longDescription: "Find the relative percentage difference between two positive values.",
        icon: Scale,
        category: "general",
        keywords: ["percentage difference", "relative difference"],
        featured: true,
    }
] as const;

// ============================================
// CALCULATION LOGIC
// ============================================

export function getPercentageOf(value: number, percentage: number): number {
    return (value * percentage) / 100;
}

export function getWhatPercentageIs(part: number, whole: number): number {
    if (whole === 0) return 0;
    return (part / whole) * 100;
}

export function getPercentageChange(oldValue: number, newValue: number): number {
    if (oldValue === 0) return 0;
    return ((newValue - oldValue) / oldValue) * 100;
}

export function getPercentageDifference(val1: number, val2: number): number {
    const avg = (val1 + val2) / 2;
    if (avg === 0) return 0;
    return (Math.abs(val1 - val2) / avg) * 100;
}
