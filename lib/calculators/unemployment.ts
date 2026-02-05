// ============================================
// UNEMPLOYMENT BENEFITS CALCULATOR - SITE CONFIG
// 2026 Data - State UI Benefits
// ============================================

import { Calculator, DollarSign, FileText, Briefcase } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Unemployment Benefits Calculator",
    tagline: "Free UI Benefits Estimator",
    description: "Calculate your unemployment benefits. Free 2026 calculator for weekly UI payments by state.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/unemployment",
};

// ============================================
// 2026 UNEMPLOYMENT CONSTANTS
// Source: DOL, State labor departments
// ============================================
export const UI_CONSTANTS_2026 = {
    // Sample state maximums (weekly)
    stateMaximums: {
        "California": 450,
        "Texas": 563,
        "New York": 504,
        "Florida": 275,
        "Illinois": 559,
        "Pennsylvania": 594,
        "Ohio": 544,
        "Georgia": 365,
        "Michigan": 362,
        "Massachusetts": 1033,
        "New Jersey": 854,
        "Washington": 999,
        "Colorado": 742,
        "Arizona": 320,
        "Nevada": 534,
    } as Record<string, number>,

    // Typical benefit calculation
    benefitFormula: {
        typicalPercentage: 50,  // 50% of weekly wage
        minWeeklyBenefit: 40,
        maxWeeklyBenefit: 1033, // MA highest
        typicalDuration: 26,    // weeks
    },

    // Extended benefits (if applicable)
    extendedBenefits: {
        regularMax: 26,
        extendedMax: 13,  // Additional weeks in high unemployment
        peucMax: 0,       // Pandemic program expired
    },

    // Statistics
    statistics: {
        avgWeeklyBenefit: 378,
        avgDuration: 14.5,  // weeks actually used
        totalRecipients: 1500000,
        replacementRate: 45,  // % of prior wage
    },
} as const;

// ============================================
// STATE LIST
// ============================================
export const STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
    "District of Columbia"
];

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "unemployment/calculator",
        name: "UI Benefits Calculator",
        shortName: "Calculator",
        description: "Calculate your weekly unemployment benefits",
        longDescription: "Free 2026 unemployment benefits calculator. Estimate your weekly payment based on prior wages and state.",
        icon: Calculator,
        category: "finance",
        keywords: ["unemployment calculator", "ui benefits calculator", "weekly benefit amount"],
        featured: true,
    },
    {
        id: "unemployment/eligibility-guide",
        name: "Eligibility Guide",
        shortName: "Guide",
        description: "Learn UI eligibility requirements",
        longDescription: "Understand unemployment insurance eligibility, work requirements, and how to apply.",
        icon: FileText,
        category: "finance",
        keywords: ["unemployment eligibility", "ui requirements", "how to apply for unemployment"],
        featured: true,
    },
] as const;

// ============================================
// UI CALCULATION
// ============================================
export interface UIResult {
    weeklyBenefit: number;
    maxWeeklyBenefit: number;
    weeklyWage: number;
    benefitPercentage: number;
    estimatedDuration: number;
    totalPotential: number;
    state: string;
    capApplied: boolean;
}

export function calculateUI(
    weeklyWage: number,
    state: string,
    benefitPercentage: number = 50
): UIResult {
    // Get state max or use default
    const maxWeeklyBenefit = UI_CONSTANTS_2026.stateMaximums[state] || 450;

    // Calculate raw benefit
    const rawBenefit = weeklyWage * (benefitPercentage / 100);

    // Apply state cap
    const weeklyBenefit = Math.min(rawBenefit, maxWeeklyBenefit);
    const capApplied = rawBenefit > maxWeeklyBenefit;

    // Standard duration
    const estimatedDuration = UI_CONSTANTS_2026.benefitFormula.typicalDuration;

    // Total potential benefits
    const totalPotential = weeklyBenefit * estimatedDuration;

    return {
        weeklyBenefit: Math.round(weeklyBenefit),
        maxWeeklyBenefit,
        weeklyWage,
        benefitPercentage,
        estimatedDuration,
        totalPotential: Math.round(totalPotential),
        state,
        capApplied,
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
