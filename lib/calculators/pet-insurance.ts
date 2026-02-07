// ============================================
// PET INSURANCE CALCULATOR - SITE CONFIG
// 2026 Data - Dog/Cat Insurance, Premiums, Coverage
// ============================================

import { Calculator, DollarSign, FileText, Heart } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Pet Insurance Calculator",
    tagline: "Free Pet Insurance Cost Calculator",
    description: "Calculate pet insurance costs for dogs and cats. Free 2026 calculator with premium estimates and coverage options.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/pet-insurance",
};

// ============================================
// 2026 PET INSURANCE CONSTANTS
// ============================================
export const PET_2026 = {
    // Average monthly premiums
    avgPremiums: {
        dogAccident: 25,
        dogComprehensive: 50,
        catAccident: 15,
        catComprehensive: 30,
    },

    // Age factors
    ageFactors: {
        puppy: 0.8,     // 0-1 years
        young: 1.0,     // 1-4 years
        adult: 1.3,     // 5-8 years
        senior: 1.8,    // 9+ years
    },

    // Breed factors (dogs)
    breedFactors: {
        mixed: 1.0,
        small: 0.9,
        medium: 1.0,
        large: 1.2,
        giant: 1.5,
    },

    // Deductible options
    deductibles: [100, 250, 500, 750, 1000],

    // Reimbursement rates
    reimbursementRates: [70, 80, 90],

    // Coverage types
    coverageTypes: [
        { name: "Accident Only", description: "Injuries, emergencies", avgCost: 20 },
        { name: "Accident + Illness", description: "Comprehensive coverage", avgCost: 45 },
        { name: "Wellness Add-on", description: "Routine care, vaccines", avgCost: 25 },
    ],

    // Statistics
    statistics: {
        avgAnnualVetCost: 1480,
        petOwnersWithInsurance: 4.4, // million
        avgClaimAmount: 850,
        marketGrowth: 15, // % YoY
    },

    // Common claims
    commonClaims: [
        { condition: "Torn ACL", avgCost: 4500 },
        { condition: "Cancer treatment", avgCost: 8000 },
        { condition: "Foreign body ingestion", avgCost: 3000 },
        { condition: "Ear infection", avgCost: 250 },
        { condition: "Allergies", avgCost: 1000 },
    ],
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "pet-insurance/pet-calculator",
        name: "Pet Insurance Calculator",
        shortName: "Calculator",
        description: "Calculate monthly premium costs",
        longDescription: "Free 2026 calculator. Estimate pet insurance costs based on pet type, age, and coverage.",
        icon: Calculator,
        category: "insurance",
        keywords: ["pet insurance calculator", "dog insurance cost", "cat insurance calculator"],
        featured: true,
    },
    {
        id: "pet-insurance/coverage-guide",
        name: "Coverage Guide",
        shortName: "Guide",
        description: "Compare coverage types and options",
        longDescription: "Learn about accident-only vs comprehensive coverage and what's covered.",
        icon: FileText,
        category: "insurance",
        keywords: ["pet insurance coverage", "what pet insurance covers", "pet insurance comparison"],
        featured: true,
    },
] as const;

// ============================================
// PET INSURANCE CALCULATION
// ============================================
export interface PetResult {
    petType: string;
    age: number;
    breed: string;
    coverage: string;
    deductible: number;
    reimbursement: number;
    basePremium: number;
    monthlyPremium: number;
    annualPremium: number;
    annualMaxBenefit: number;
}

export function calculatePet(
    petType: "dog" | "cat",
    age: number,
    breedSize: string = "medium",
    coverageType: string = "comprehensive",
    deductible: number = 500,
    reimbursement: number = 80
): PetResult {
    // Base premium
    const isComprehensive = coverageType === "comprehensive";
    let basePremium = petType === "dog"
        ? (isComprehensive ? PET_2026.avgPremiums.dogComprehensive : PET_2026.avgPremiums.dogAccident)
        : (isComprehensive ? PET_2026.avgPremiums.catComprehensive : PET_2026.avgPremiums.catAccident);

    // Age factor
    const ageFactor = age <= 1 ? PET_2026.ageFactors.puppy :
        age <= 4 ? PET_2026.ageFactors.young :
            age <= 8 ? PET_2026.ageFactors.adult :
                PET_2026.ageFactors.senior;

    // Breed factor (dogs only)
    const breedFactor = petType === "dog"
        ? (PET_2026.breedFactors[breedSize as keyof typeof PET_2026.breedFactors] || 1.0)
        : 1.0;

    // Deductible discount
    const deductibleFactor = deductible <= 250 ? 1.15 :
        deductible <= 500 ? 1.0 :
            deductible <= 750 ? 0.9 :
                0.85;

    // Reimbursement factor
    const reimbursementFactor = reimbursement === 90 ? 1.2 :
        reimbursement === 80 ? 1.0 :
            0.85;

    const monthlyPremium = Math.round(basePremium * ageFactor * breedFactor * deductibleFactor * reimbursementFactor);

    // Annual max benefit
    const annualMaxBenefit = deductible <= 250 ? 10000 :
        deductible <= 500 ? 15000 :
            20000;

    return {
        petType,
        age,
        breed: breedSize,
        coverage: coverageType,
        deductible,
        reimbursement,
        basePremium: Math.round(basePremium),
        monthlyPremium,
        annualPremium: monthlyPremium * 12,
        annualMaxBenefit,
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
