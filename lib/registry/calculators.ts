/**
 * CALCULATOR REGISTRY V5.0
 * Automatically synchronized via scripts/sync-registry.mjs
 */

export interface CalculatorConfig {
    id: string;
    name: string;
    description: string;
    category: 'health' | 'finance' | 'legal' | 'tax' | 'general';
    tier: 1 | 2 | 3;
    color: string;
    icon: string;
}

export const CALCULATOR_REGISTRY: Record<string, CalculatorConfig> = {
    "age": {
        "id": "age",
        "name": "Age Calculator",
        "description": "Precision Age Calculator analyzer for the 2026 market.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    },
    "bmi": {
        "id": "bmi",
        "name": "BMI Calculator",
        "description": "Calculate your Body Mass Index (BMI) instantly. Free 2026 calculator with health recommendations based on WHO and CDC guidelines.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "body-fat": {
        "id": "body-fat",
        "name": "Body Fat Calculator",
        "description": "Calculate your body fat percentage accurately with our professional tool. Track your fitness goals and health progress with standard measurement methods.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "calorie": {
        "id": "calorie",
        "name": "Calorie Calculator",
        "description": "Calculate your daily energy expenditure with precision. Professional-grade TDEE, BMR, and macronutrient analysis based on 2026 standard guidelines.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "compound-interest": {
        "id": "compound-interest",
        "name": "2026 Compound Interest Calculator | Wealth Accretion Engine",
        "description": "Calculate compound interest growth with 2026 precision. Peer-reviewed audit of wealth accretion, inflation adjustments, and tax-sheltered compounding strategies.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "conversion": {
        "id": "conversion",
        "name": "Unit Conversion Calculator",
        "description": "Industrial-grade unit conversion for length, mass, volume, and temperature. Compliant with NIST and ISO 80000 standards.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "date": {
        "id": "date",
        "name": "Date Calculator",
        "description": "Institutional date arithmetic and duration auditor. Calculate precise time deltas, leap year parity, and business day intervals with ISO 8601 precision.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "home-afford": {
        "id": "home-afford",
        "name": "Home Affordability Calculator",
        "description": "Calculate how much house you can afford based on your income. See down payment, DTI ratio, monthly payments, and closing costs with 2026 loan limits.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "loan": {
        "id": "loan",
        "name": "Loan Calculator",
        "description": "Precision Loan Calculator analyzer for the 2026 market.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "mortgage": {
        "id": "mortgage",
        "name": "Mortgage Calculator",
        "description": "Calculate your 2026 mortgage payment instantly. Analyze principal, interest, taxes, insurance, and PMI with Freddie Mac PMMS and FHFA benchmark context.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "ovulation": {
        "id": "ovulation",
        "name": "Ovulation Calculator",
        "description": "Medical-grade fertility window auditing. Track ovulation, peak fertile days, and luteal phase stability with ACOG-aligned precision.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "percentage": {
        "id": "percentage",
        "name": "Percentage Calculator",
        "description": "Calculate percentages instantly with our 2026 math engine. Analyze percentage increase, decrease, reverse percentage, and relative difference using NIST-aligned methods.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "pregnancy": {
        "id": "pregnancy",
        "name": "Pregnancy Calculator",
        "description": "Calculate your estimated due date (EDD) and track pregnancy milestones with clinical precision. Support for LMP, Conception, and IVF methods based on 2026 maternal health standards.",
        "category": "health",
        "tier": 2,
        "color": "emerald-500",
        "icon": "activity"
    },
    "refinance": {
        "id": "refinance",
        "name": "Refinance Calculator",
        "description": "Calculate mortgage refinance savings instantly. Free 2026 calculator with break-even analysis.",
        "category": "finance",
        "tier": 2,
        "color": "blue-500",
        "icon": "landmark"
    },
    "scientific": {
        "id": "scientific",
        "name": "Scientific Calculator",
        "description": "Free scientific calculator for trigonometry, logarithms, powers, and roots with degree/radian support and IEEE 754-aware numeric handling.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "self-employment": {
        "id": "self-employment",
        "name": "Self Employment Tax Calculator",
        "description": "Calculate self-employment tax for freelancers and 1099 contractors. Free 2026 SE tax calculator.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "tax": {
        "id": "tax",
        "name": "Tax Calculator",
        "description": "Calculate your 2026 federal income tax for free. See your tax bracket, estimate your refund, and understand your tax liability with our easy-to-use calculators.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "time-calculator": {
        "id": "time-calculator",
        "name": "Time Calculator",
        "description": "Calculate time differences, add/subtract time, and convert between hours, minutes, and seconds with 2026 precision.",
        "category": "general",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "tip": {
        "id": "tip",
        "name": "2026 Tip Calculator | Gratuity Gold Precision Engine",
        "description": "Calculate tips, split bills, and audit tipping etiquette with 2026 precision. Expert guide for global gratuity standards, service economy ethics, and digital prompt management.",
        "category": "tax",
        "tier": 2,
        "color": "slate-500",
        "icon": "calculator"
    },
    "workers-comp": {
        "id": "workers-comp",
        "name": "Workers Comp Calculator",
        "description": "Calculate your workers compensation benefits for 2026. Free calculator with 50 state maximum rates, TTD calculation, and settlement estimator.",
        "category": "legal",
        "tier": 2,
        "color": "rose-500",
        "icon": "gavel"
    }
};

export function getCalculatorMeta(id: string) {
    const config = CALCULATOR_REGISTRY[id];
    
    if (!config) {
        return {
            title: `${id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ')} Calculator | 2026 Audit`,
            description: `Precision ${id} calculation for the 2026 market. Free clinical-grade health and finance metrics.`,
            canonical: `https://mysmartcalculators.com/${id}`,
        };
    }

    return {
        title: `${config.name} | S-Class 2026 Precision Audit`,
        description: config.description,
        canonical: `https://mysmartcalculators.com/${config.id}`,
    };
}
