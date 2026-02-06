// ============================================
// BMI CALCULATOR - SITE CONFIG
// 2026 Data - Body Mass Index, WHO/CDC Guidelines
// ============================================

import { Calculator, FileText, Scale, Activity } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "BMI Calculator",
    tagline: "Free BMI Calculator",
    description: "Calculate your Body Mass Index (BMI) instantly. Free 2026 calculator with health recommendations based on WHO and CDC guidelines.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bmi",
};

// ============================================
// 2026 BMI CONSTANTS (WHO/CDC)
// ============================================
export const BMI_2026 = {
    // BMI Categories (WHO)
    categories: [
        { name: "Underweight", range: "< 18.5", min: 0, max: 18.5, color: "text-blue-400" },
        { name: "Normal", range: "18.5 - 24.9", min: 18.5, max: 25, color: "text-green-400" },
        { name: "Overweight", range: "25 - 29.9", min: 25, max: 30, color: "text-yellow-400" },
        { name: "Obese Class I", range: "30 - 34.9", min: 30, max: 35, color: "text-orange-400" },
        { name: "Obese Class II", range: "35 - 39.9", min: 35, max: 40, color: "text-red-400" },
        { name: "Obese Class III", range: "??40", min: 40, max: 100, color: "text-red-500" },
    ],

    // Statistics (CDC 2026)
    statistics: {
        avgBmiUS: 26.5,
        obesityRate: 42,
        overweightRate: 30,
        normalWeightRate: 28,
    },

    // Healthy BMI range
    healthyRange: {
        min: 18.5,
        max: 24.9,
    },

    // Data source citation
    citation: "Based on WHO and CDC BMI guidelines 2026",

    // FAQ Content
    faqs: [
        {
            question: "What is a healthy BMI range?",
            answer: "For most adults, a healthy BMI is between 18.5 and 24.9. This range is associated with the lowest risk of developing chronic health conditions."
        },
        {
            question: "Is BMI accurate for athletes?",
            answer: "BMI does not distinguish between muscle and fat. Athletes with high muscle mass may have a high BMI despite having low body fat."
        },
        {
            question: "How often should I check my BMI?",
            answer: "Checking once every 3-6 months is usually sufficient for monitoring weight trends, unless directed otherwise by a healthcare professional."
        }
    ]
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "bmi/calculator",
        name: "BMI Calculator",
        shortName: "Calculator",
        description: "Calculate your Body Mass Index",
        longDescription: "Free BMI calculator using WHO and CDC guidelines.",
        icon: Calculator,
        category: "health",
        keywords: ["bmi calculator", "body mass index calculator", "bmi check"],
        featured: true,
    },
    {
        id: "bmi/health-guide",
        name: "BMI Health Guide",
        shortName: "Guide",
        description: "Understanding BMI categories",
        longDescription: "Learn what your BMI means and healthy weight tips.",
        icon: FileText,
        category: "health",
        keywords: ["bmi chart", "healthy bmi range", "bmi categories"],
        featured: true,
    },
] as const;

// ============================================
// BMI CALCULATION
// ============================================
export interface BMIResult {
    bmi: number;
    category: string;
    categoryColor: string;
    healthyWeightRange: { min: number; max: number };
    weightToHealthy: number;
    isHealthy: boolean;
}

export function calculateBMI(
    heightFeet: number,
    heightInches: number,
    weightLbs: number
): BMIResult {
    const totalInches = heightFeet * 12 + heightInches;
    const heightMeters = totalInches * 0.0254;
    const weightKg = weightLbs * 0.453592;

    const bmi = weightKg / (heightMeters * heightMeters);

    let category = "Normal";
    let categoryColor = "text-green-400";
    for (const cat of BMI_2026.categories) {
        if (bmi >= cat.min && bmi < cat.max) {
            category = cat.name;
            categoryColor = cat.color;
            break;
        }
    }

    const healthyWeightMinKg = BMI_2026.healthyRange.min * heightMeters * heightMeters;
    const healthyWeightMaxKg = BMI_2026.healthyRange.max * heightMeters * heightMeters;
    const healthyWeightMin = Math.round(healthyWeightMinKg / 0.453592);
    const healthyWeightMax = Math.round(healthyWeightMaxKg / 0.453592);

    let weightToHealthy = 0;
    if (weightLbs > healthyWeightMax) {
        weightToHealthy = weightLbs - healthyWeightMax;
    } else if (weightLbs < healthyWeightMin) {
        weightToHealthy = weightLbs - healthyWeightMin;
    }

    const isHealthy = bmi >= BMI_2026.healthyRange.min && bmi < BMI_2026.healthyRange.max;

    return {
        bmi: Math.round(bmi * 10) / 10,
        category,
        categoryColor,
        healthyWeightRange: { min: healthyWeightMin, max: healthyWeightMax },
        weightToHealthy: Math.round(weightToHealthy),
        isHealthy,
    };
}

export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}
