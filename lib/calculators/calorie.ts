// ============================================
// CALORIE CALCULATOR - SITE CONFIG
// 2026 Data - USDA/CDC Nutrition Guidelines
// ============================================

import { Calculator, FileText, Flame, Apple } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Calorie Calculator",
    tagline: "Free Calorie Calculator",
    description: "Calculate your daily calorie needs instantly. Free 2026 calculator based on USDA and CDC nutrition guidelines.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/calorie",
};

// ============================================
// 2026 CALORIE CONSTANTS (USDA/CDC)
// ============================================
export const CALORIE_2026 = {
    // Activity levels (multipliers for TDEE)
    activityLevels: [
        { name: "Sedentary", description: "Little or no exercise", multiplier: 1.2 },
        { name: "Light", description: "Exercise 1-3 days/week", multiplier: 1.375 },
        { name: "Moderate", description: "Exercise 3-5 days/week", multiplier: 1.55 },
        { name: "Active", description: "Exercise 6-7 days/week", multiplier: 1.725 },
        { name: "Very Active", description: "Hard exercise daily", multiplier: 1.9 },
    ],

    // Goals
    goals: {
        lose2: -1000,   // lose 2 lbs/week
        lose1: -500,    // lose 1 lb/week
        lose05: -250,   // lose 0.5 lb/week
        maintain: 0,
        gain05: 250,    // gain 0.5 lb/week
        gain1: 500,     // gain 1 lb/week
    },

    // Macro ratios (balanced)
    macroRatios: {
        protein: 0.30,
        carbs: 0.40,
        fat: 0.30,
    },

    // Statistics (CDC 2026)
    statistics: {
        avgIntakeUS: 2100,
        recommendedMen: 2500,
        recommendedWomen: 2000,
        obesityRate: 42,
    },

    // Data source citation
    citation: "Based on USDA Dietary Guidelines and CDC data 2026",
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "calorie/calculator",
        name: "Calorie Calculator",
        shortName: "Calculator",
        description: "Calculate daily calorie needs",
        longDescription: "Free calorie calculator using Mifflin-St Jeor equation and USDA guidelines.",
        icon: Calculator,
        category: "health",
        keywords: ["calorie calculator", "daily calorie needs", "tdee calculator"],
        featured: true,
    },
    {
        id: "calorie/nutrition-guide",
        name: "Nutrition Guide",
        shortName: "Guide",
        description: "Understanding calories and macros",
        longDescription: "Learn about calories, macronutrients, and healthy eating tips.",
        icon: FileText,
        category: "health",
        keywords: ["calorie guide", "macro calculator", "nutrition tips"],
        featured: true,
    },
] as const;

// ============================================
// CALORIE CALCULATION (Mifflin-St Jeor)
// ============================================
export interface CalorieResult {
    bmr: number;
    tdee: number;
    goalCalories: number;
    protein: number;
    carbs: number;
    fat: number;
    activityLevel: string;
    goal: string;
}

export function calculateCalories(
    age: number,
    gender: string,
    heightFeet: number,
    heightInches: number,
    weightLbs: number,
    activityMultiplier: number = 1.2,
    goalAdjustment: number = 0
): CalorieResult {
    // Convert to metric
    const totalInches = heightFeet * 12 + heightInches;
    const heightCm = totalInches * 2.54;
    const weightKg = weightLbs * 0.453592;

    // Mifflin-St Jeor Equation
    let bmr: number;
    if (gender === "male") {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    // TDEE = BMR * Activity Level
    const tdee = Math.round(bmr * activityMultiplier);

    // Goal calories
    const goalCalories = Math.round(tdee + goalAdjustment);

    // Macros (based on goal calories)
    const protein = Math.round((goalCalories * CALORIE_2026.macroRatios.protein) / 4); // g
    const carbs = Math.round((goalCalories * CALORIE_2026.macroRatios.carbs) / 4); // g
    const fat = Math.round((goalCalories * CALORIE_2026.macroRatios.fat) / 9); // g

    // Find activity level name
    const activity = CALORIE_2026.activityLevels.find(a => a.multiplier === activityMultiplier);
    const activityLevel = activity?.name || "Sedentary";

    // Goal name
    let goal = "Maintain";
    if (goalAdjustment < 0) goal = "Lose Weight";
    if (goalAdjustment > 0) goal = "Gain Weight";

    return {
        bmr: Math.round(bmr),
        tdee,
        goalCalories,
        protein,
        carbs,
        fat,
        activityLevel,
        goal,
    };
}

export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}
