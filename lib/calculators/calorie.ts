// ============================================
// CALORIE CALCULATOR - S-CLASS CORE ENGINE
// 2026 Data - USDA/CDC/Mifflin-St Jeor Standards
// ============================================

import { Calculator, FileText, Flame, Apple, Activity, Heart, Target, Users } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Calorie Calculator",
    tagline: "Total Daily Energy Expenditure 2026",
    description: "Calculate your daily energy expenditure with precision. Professional-grade TDEE, BMR, and macronutrient analysis based on 2026 standard guidelines.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/calorie",
};

// ============================================
// 2026 CALORIE STANDARDS & CLINICAL DATA
// ============================================
export const CALORIE_2026 = {
    // Activity levels (multipliers for TDEE - institutional standards)
    activityLevels: [
        { name: "Sedentary", description: "Zero/minimal exercise (Desk job)", multiplier: 1.2 },
        { name: "Lightly Active", description: "Light exercise 1-3 days/week", multiplier: 1.375 },
        { name: "Moderately Active", description: "Moderate exercise 3-5 days/week", multiplier: 1.55 },
        { name: "Very Active", description: "Hard exercise 6-7 days/week", multiplier: 1.725 },
        { name: "Extra Active", description: "Very hard daily exercise & physical job", multiplier: 1.9 },
    ],

    // Target Adjustments (Calorie Delta)
    goals: {
        extreme_loss: -1000,
        normal_loss: -500,
        mild_loss: -250,
        maintain: 0,
        mild_gain: 250,
        normal_gain: 500,
    },

    // Institutional Macro Blueprints
    macroBlueprints: {
        balanced: { p: 0.30, c: 0.40, f: 0.30, label: "Balanced Diet" },
        low_carb: { p: 0.40, c: 0.20, f: 0.40, label: "Low Carb Plan" },
        high_protein: { p: 0.45, c: 0.35, f: 0.20, label: "High Protein Focus" }
    },

    // 2026 Global benchmarks
    statistics: {
        avgIntakeUS: 2100,
        recommendedMen: 2500,
        recommendedWomen: 2000,
        obesityRate: 42.4,
    },

    // Authoritative Citations (E-E-A-T)
    citations: [
        { name: "USDA Dietary Guidelines 2025-2030", url: "https://www.dietaryguidelines.gov/" },
        { name: "CDC Healthy Weight Metrics", url: "https://www.cdc.gov/healthyweight/" },
        { name: "American Journal of Clinical Nutrition", url: "https://ajcn.nutrition.org/" },
        { name: "National Institutes of Health (NIH)", url: "https://www.nih.gov/" },
        { name: "WHO Global Diet Strategy", url: "https://www.who.int/health-topics/diet" }
    ],

    // Premium FAQ Dataset (15+ Items)
    faqs: [
        {
            question: "How is my calorie requirement calculated?",
            answer: "Our engine utilizes the Mifflin-St Jeor equation, currently recognized as the global standard for estimating Basal Metabolic Rate (BMR) with high accuracy. We apply TDEE multipliers synchronized with standard activity benchmarks."
        },
        {
            question: "What is the difference between BMR and TDEE?",
            answer: "BMR (Basal Metabolic Rate) is the energy your body consumes to maintain life at absolute rest. TDEE (Total Daily Energy Expenditure) is your BMR multiplied by your Activity Factor. TDEE is the 'Maintenance' number required to keep your weight stable."
        },
        {
            question: "Can I target extreme weight loss safely?",
            answer: "Standard guidelines recommend a deficit not exceeding 1,000 calories/day. For sustainable health, a 500-calorie deficit (tracking for 1lb loss per week) is the optimal target for long-term success."
        },
        {
            question: "How do macros impact my body composition?",
            answer: "Calorie quantity dictates weight, while macronutrient quality dictates body composition. Higher protein ratios help preserve lean muscle mass during deficits, while healthy fats regulate hormonal balance."
        },
        {
            question: "What is Metabolic Adaptation?",
            answer: "When in a prolonged calorie deficit, your body may lower its NEAT (Non-Exercise Activity Thermogenesis) to compensate for energy scarcity. Our S-Class engine accounts for this by suggesting moderate initial deficits to avoid early-stage plateaus."
        },
        {
            question: "Is the '3,500 Calorie Rule' still valid in 2026?",
            answer: "While 3,500 kcal is the approximate energy density of 1lb of fat, human biology is dynamic. Water retention, hormonal flux, and metabolic variance mean results often follow a non-linear trajectory."
        },
        {
            question: "How does age affect my calorie requirements?",
            answer: "Metabolic rate naturally decreases by approximately 1-2% per decade after 30 due to muscle mass atrophy (Sarcopenia). Maintaining resistance training can audit this decline and preserve your TDEE benchmarks."
        },
        {
            question: "Should I count exercise calories toward my goal?",
            answer: "Fitness trackers frequently overestimate exercise expenditure by up to 40%. We recommend using our TDEE multiplier as your anchor and only adjusting intake if your activity level shifts fundamentally for a period of 14+ days."
        },
        {
            question: "What is the Thermic Effect of Food (TEF)?",
            answer: "TEF represents the energy required for digestion. Protein has the highest TEF (20-30%), meaning your body 'burns' nearly 30% of the protein energy simply by processing it—making high-protein diets highly effective for fat loss."
        },
        {
            question: "Does meal timing matter for calorie efficiency?",
            answer: "Total daily caloric and macro-composition remain the primary drivers of weight change. While insulin sensitivity fluctuates, 'when' you eat is secondary to 'what' and 'how much' you eat according to your audit results."
        },
        {
            question: "What are 'Empty' Calories in 2026 standards?",
            answer: "Empty calories refer to energy sources with zero micronutrient density (no vitamins, minerals, or fiber). These can spike insulin and lead to metabolic instability without providing the satiety signals of whole-food architectures."
        },
        {
            question: "How do I handle 'Cheat Meals' in my audit?",
            answer: "A single event unlikely disrupts an 80/20 audit structure. We recommend a weekly thermodynamic overview rather than a daily fixation, allowing for social flexibility without compromising long-term biological goals."
        },
        {
            question: "Why does weight loss slow down over time?",
            answer: "As you lose weight, your total biological mass decreases, lowering your BMR. You essentially become a more 'efficient' machine that requires less fuel. Re-auditing your data every 10lbs is critical for continued progress."
        },
        {
            question: "Does water intake affect calorie burning?",
            answer: "Optimal hydration is critical for cellular metabolism (Lipolysis). Dehydration can slow the metabolic conversion of stored energy, making water intake a silent partner in your calorie audit success."
        },
        {
            question: "What is the role of fiber in calorie audits?",
            answer: "Fiber is a non-digestible carbohydrate that adds volume to meals and slows gastric emptying. This increases satiety signals and often lowers the 'Net Calorie' absorption of a meal, aiding in deficit adherence."
        }
    ]
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "calorie/calculator",
        name: "Calorie Calculator",
        shortName: "Calculator",
        description: "Calculate daily energy expenditure",
        longDescription: "High-precision calorie calculator using Mifflin-St Jeor benchmarks and standard guidelines.",
        icon: Calculator,
        category: "health",
        keywords: ["calorie calculator", "tdee calculator", "bmr calculator", "weight loss calculator"],
        featured: true,
    },
    {
        id: "calorie/nutrition-guide",
        name: "Nutrition Guide 2026",
        shortName: "Guide",
        description: "Energy balance principles",
        longDescription: "Deep-dive into metabolic pathways, macro-composition, and sustainable fat-loss plans.",
        icon: FileText,
        category: "health",
        keywords: ["nutrition guide", "metabolism guide", "weight loss science"],
        featured: true,
    },
] as const;

// ============================================
// CALORIE AUDIT LOGIC
// ============================================
export interface CalorieResult {
    bmr: number;
    tdee: number;
    goalCalories: number;
    activityLevel: string;
    goal: string;
    macros: {
        balanced: MacroSet;
        lowCarb: MacroSet;
        highProtein: MacroSet;
    };
}

export interface MacroSet {
    protein: number;
    carbs: number;
    fat: number;
    label: string;
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
    // Metric conversion (Institutional standard)
    const totalInches = heightFeet * 12 + heightInches;
    const heightCm = totalInches * 2.54;
    const weightKg = weightLbs * 0.453592;

    // Mifflin-St Jeor Equation (S-Class Standard)
    let bmr: number;
    if (gender === "male") {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    // TDEE Audit
    const tdee = Math.round(bmr * activityMultiplier);
    const goalCalories = Math.round(tdee + goalAdjustment);

    // Dynamic Macro Architecture
    const buildMacros = (ratio: { p: number, c: number, f: number, label: string }): MacroSet => ({
        protein: Math.round((goalCalories * ratio.p) / 4),
        carbs: Math.round((goalCalories * ratio.c) / 4),
        fat: Math.round((goalCalories * ratio.f) / 9),
        label: ratio.label
    });

    const macros = {
        balanced: buildMacros(CALORIE_2026.macroBlueprints.balanced),
        lowCarb: buildMacros(CALORIE_2026.macroBlueprints.low_carb),
        highProtein: buildMacros(CALORIE_2026.macroBlueprints.high_protein)
    };

    // Metadata retrieval
    const activity = CALORIE_2026.activityLevels.find(a => a.multiplier === activityMultiplier);
    const activityLevel = activity?.name || "Sedentary Audit";

    let goal = "Maintenance";
    if (goalAdjustment < 0) goal = "Weight Loss";
    if (goalAdjustment > 0) goal = "Weight Gain";

    return {
        bmr: Math.round(bmr),
        tdee,
        goalCalories,
        activityLevel,
        goal,
        macros
    };
}

export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}
