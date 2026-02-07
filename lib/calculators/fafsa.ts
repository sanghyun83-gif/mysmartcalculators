// ============================================
// FAFSA CALCULATOR - SITE CONFIG
// 2026-27 Data - Federal Student Aid
// ============================================

import { Calculator, GraduationCap, FileText, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "FAFSA Calculator",
    tagline: "Free EFC Estimator",
    description: "Estimate your Expected Family Contribution and federal student aid eligibility. Free 2026-27 FAFSA calculator.",
    year: "2026-27",
    baseUrl: "https://mysmartcalculators.com/fafsa",
};

// ============================================
// 2026-27 FAFSA/SAI CONSTANTS
// Source: Federal Student Aid, ED.gov
// Note: EFC replaced by SAI (Student Aid Index) in 2024-25
// ============================================
export const FAFSA_CONSTANTS_2026 = {
    // Pell Grant maximums
    pellGrant: {
        maximum: 7895,   // 2026-27 max Pell Grant
        minimum: 750,    // Minimum Pell award
    },

    // Income Protection Allowances (simplified)
    incomeProtection: {
        student: 7600,
        parent1: 25000,
        parent2: 8000,  // Additional for second parent
        perDependent: 3000,
    },

    // Asset Protection (age-based, simplified)
    assetProtection: {
        under25: 0,
        age40: 8000,
        age50: 12000,
        age60: 18000,
    },

    // Contribution rates
    contributionRates: {
        parentIncome: 0.22,   // ~22% of available income
        parentAssets: 0.05,   // ~5.64% of available assets
        studentIncome: 0.50,  // 50% of student income
        studentAssets: 0.20,  // 20% of student assets
    },

    // Federal loan limits (undergraduate)
    loanLimits: {
        freshmanDependent: 5500,
        sophomoreDependent: 6500,
        juniorSeniorDependent: 7500,
        freshmanIndependent: 9500,
        sophomoreIndependent: 10500,
        juniorSeniorIndependent: 12500,
    },

    // Statistics
    statistics: {
        avgPellGrant: 4500,
        avgTotalAid: 14500,
        studentsReceivingAid: 85,  // % of college students
        avgSAI: 12000,
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "fafsa/calculator",
        name: "FAFSA/SAI Calculator",
        shortName: "Calculator",
        description: "Estimate your SAI and aid eligibility",
        longDescription: "Free 2026-27 FAFSA calculator. Estimate your Student Aid Index and potential federal aid.",
        icon: Calculator,
        category: "finance",
        keywords: ["fafsa calculator", "efc calculator", "sai calculator", "student aid index"],
        featured: true,
    },
    {
        id: "fafsa/efc-guide",
        name: "SAI/EFC Guide",
        shortName: "Guide",
        description: "Understanding the Student Aid Index",
        longDescription: "Learn how your SAI is calculated and what it means for your financial aid package.",
        icon: FileText,
        category: "finance",
        keywords: ["efc explained", "sai explained", "fafsa formula", "how fafsa works"],
        featured: true,
    },
] as const;

// ============================================
// SAI CALCULATION (Simplified)
// ============================================
export interface FAFSAResult {
    studentAidIndex: number;
    estimatedPellGrant: number;
    maxSubsidizedLoan: number;
    maxUnsubsidizedLoan: number;
    totalEstimatedAid: number;
    parentContribution: number;
    studentContribution: number;
    isNegativeSAI: boolean;
}

export function calculateFAFSA(
    parentIncome: number,
    parentAssets: number,
    studentIncome: number,
    studentAssets: number,
    familySize: number = 4,
    numberInCollege: number = 1,
    isDependent: boolean = true,
    gradeLevel: string = "freshman"
): FAFSAResult {
    // Simplified SAI calculation

    // Parent contribution (dependent students only)
    let parentContribution = 0;
    if (isDependent) {
        const parentIncomeProtection = FAFSA_CONSTANTS_2026.incomeProtection.parent1 +
            (familySize - 2) * FAFSA_CONSTANTS_2026.incomeProtection.perDependent;
        const availableParentIncome = Math.max(0, parentIncome - parentIncomeProtection);
        const parentIncomeContribution = availableParentIncome * FAFSA_CONSTANTS_2026.contributionRates.parentIncome;

        const availableParentAssets = Math.max(0, parentAssets - FAFSA_CONSTANTS_2026.assetProtection.age50);
        const parentAssetContribution = availableParentAssets * FAFSA_CONSTANTS_2026.contributionRates.parentAssets;

        parentContribution = (parentIncomeContribution + parentAssetContribution) / numberInCollege;
    }

    // Student contribution
    const studentIncomeProtection = FAFSA_CONSTANTS_2026.incomeProtection.student;
    const availableStudentIncome = Math.max(0, studentIncome - studentIncomeProtection);
    const studentIncomeContribution = availableStudentIncome * FAFSA_CONSTANTS_2026.contributionRates.studentIncome;
    const studentAssetContribution = studentAssets * FAFSA_CONSTANTS_2026.contributionRates.studentAssets;
    const studentContribution = studentIncomeContribution + studentAssetContribution;

    // Total SAI (can be negative now)
    const studentAidIndex = Math.round(parentContribution + studentContribution);
    const isNegativeSAI = studentAidIndex < 0;

    // Estimate Pell Grant (simplified - based on SAI)
    let estimatedPellGrant = 0;
    if (studentAidIndex <= 0) {
        estimatedPellGrant = FAFSA_CONSTANTS_2026.pellGrant.maximum;
    } else if (studentAidIndex < FAFSA_CONSTANTS_2026.pellGrant.maximum) {
        estimatedPellGrant = Math.max(0, FAFSA_CONSTANTS_2026.pellGrant.maximum - studentAidIndex);
    }

    // Loan limits based on grade level
    let maxSubsidizedLoan: number = FAFSA_CONSTANTS_2026.loanLimits.freshmanDependent;
    let maxUnsubsidizedLoan: number = isDependent ? 2000 : 6000;

    if (gradeLevel === "sophomore") {
        maxSubsidizedLoan = isDependent ?
            FAFSA_CONSTANTS_2026.loanLimits.sophomoreDependent :
            FAFSA_CONSTANTS_2026.loanLimits.sophomoreIndependent;
    } else if (gradeLevel === "junior" || gradeLevel === "senior") {
        maxSubsidizedLoan = isDependent ?
            FAFSA_CONSTANTS_2026.loanLimits.juniorSeniorDependent :
            FAFSA_CONSTANTS_2026.loanLimits.juniorSeniorIndependent;
    }

    const totalEstimatedAid = estimatedPellGrant + maxSubsidizedLoan + maxUnsubsidizedLoan;

    return {
        studentAidIndex: Math.max(-1500, studentAidIndex), // SAI can go to -1500
        estimatedPellGrant: Math.round(estimatedPellGrant),
        maxSubsidizedLoan,
        maxUnsubsidizedLoan,
        totalEstimatedAid: Math.round(totalEstimatedAid),
        parentContribution: Math.round(parentContribution),
        studentContribution: Math.round(studentContribution),
        isNegativeSAI,
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
