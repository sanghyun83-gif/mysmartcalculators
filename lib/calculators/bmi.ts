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
        { name: "Obese Class III", range: "≥ 40", min: 40, max: 100, color: "text-red-500" },
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
    citation: "Based on WHO, CDC, and The Lancet 2026 guidelines",

    // FAQ Content - 15 Items for DEEP HYBRID Standard
    faqs: [
        { "question": "What is Body Mass Index (BMI)?", "answer": "BMI is a mathematical ratio used to categorize weight relative to height. It is calculated as kg/m² and remains the global standard for screening population health risks." },
        { "question": "How accurate is BMI for athletes?", "answer": "For highly muscular individuals, BMI tends to overestimate risk. Muscle is significantly denser than fat, leading to higher results despite low body fat percentages." },
        { "question": "Is BMI different for men and women?", "answer": "No, the core formula is identical. However, biological women typically carrier a higher body fat percentage at the same BMI compared to men." },
        { "question": "What are the new 2026 guidelines for obesity?", "answer": "The 2026 Lancet Commission recommends classifying obesity based on health complications (metabolic, mechanical, psychological) rather than just a BMI threshold of 30." },
        { "question": "What is the Quetelet Scale?", "answer": "Named after Adolphe Quetelet, the mathematician who created the BMI formula in 1832. It was originally designed to describe the 'Average Man' in statistical sociology." },
        { "question": "Does ethnicity affect BMI interpretation?", "answer": "Yes. Clinical data suggests that individuals of South Asian descent face higher metabolic risks at lower BMI levels (starting at 23.0) compared to Caucasian populations." },
        { "question": "Can children use this BMI calculator?", "answer": "Children and teens (2-19) use the same formula but the results are plotted on age-and-sex specific percentile charts rather than fixed categories." },
        { "question": "What is the difference between BMI and Body Fat %?", "answer": "BMI measures total weight relative to height. Body Fat % measures the actual percentage of fat tissue. One can have a high BMI with low body fat (muscular) or vice versa (skinny fat)." },
        { "question": "What health risks are linked to a high BMI?", "answer": "Type 2 diabetes, cardiovascular decay, hypertension, sleep apnea, and certain musculoskeletal loads like osteoarthritis are directly correlated with persistent high BMI." },
        { "question": "Is falling below 18.5 BMI dangerous?", "answer": "Yes. An underweight classification can indicate nutritional deficiencies, weakened immune function, or underlying endocrine issues requiring clinical intervention." },
        { "question": "How often should I audit my BMI?", "answer": "Standard clinical advice suggests checking every 3-6 months to monitor weight trends, unless you are actively participating in a medical weight management program." },
        { "question": "What is Visceral Fat vs. Subcutaneous Fat?", "answer": "Subcutaneous fat lives under the skin. Visceral fat surrounds organs and is highly metabolically active, posing a much greater risk even if BMI appears normal." },
        { "question": "How do 2026 standards view waist-to-height ratio?", "answer": "Many clinical boards now favor waist-to-height ratio (optimal < 0.5) as a superior indicator of abdominal fat risk compared to BMI alone." },
        { "question": "Can BMI predict mortality?", "answer": "Population studies show a J-shaped curve: both very low and very high BMI levels are associated with increased all-cause mortality across global cohorts." },
        { "question": "When should I see a doctor about my BMI?", "answer": "Consult a professional if your BMI shifts categories rapidly or if a result in the Obese category is accompanied by high blood pressure or fatigue." }
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
