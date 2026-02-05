// ============================================
// EPLI (EMPLOYMENT PRACTICES LIABILITY) CALCULATOR
// 2026 EPLI Insurance Premiums - Standard Version
// ============================================

import { Calculator, FileText, Users } from 'lucide-react';

export const SITE = {
    name: "EPLI Calculator",
    tagline: "Free 2026 Employment Practices Liability Estimator",
    description: "Calculate EPLI insurance premiums. Wrongful termination, discrimination, and harassment coverage. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/epli",
};

export const EMPLOYEE_COUNTS = [
    { id: "1-10", name: "1-10 Employees", baseRate: 800, multiplier: 0.6 },
    { id: "11-25", name: "11-25 Employees", baseRate: 1500, multiplier: 1.0 },
    { id: "26-50", name: "26-50 Employees", baseRate: 2500, multiplier: 1.5 },
    { id: "51-100", name: "51-100 Employees", baseRate: 4000, multiplier: 2.0 },
    { id: "100+", name: "100+ Employees", baseRate: 7500, multiplier: 3.0 },
];

export const INDUSTRY_RISKS = [
    { id: "low", name: "Low Risk (Tech, Finance)", multiplier: 0.8 },
    { id: "medium", name: "Medium Risk (Retail, Healthcare)", multiplier: 1.0 },
    { id: "high", name: "High Risk (Hospitality, Manufacturing)", multiplier: 1.4 },
];

export const EPLI_2026 = {
    statistics: {
        avgPremium: "Average EPLI: $1,500/year",
        avgClaim: "Average Claim: $75,000",
        source: "NAIC / EEOC 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) EPLI Data 2026",
        "EEOC Employment Discrimination Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "epli/calculator", name: "Premium Calculator", description: "Estimate EPLI costs", icon: Calculator, featured: true },
    { id: "epli/guide", name: "Coverage Guide", description: "What EPLI covers", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is EPLI insurance?", answer: "EPLI (Employment Practices Liability Insurance) protects employers from claims alleging wrongful termination, discrimination, harassment, and other employment-related issues." },
    { question: "What does EPLI cover?", answer: "EPLI covers wrongful termination, discrimination (age, race, gender, disability), sexual harassment, retaliation, failure to promote, and workplace bullying claims." },
    { question: "Who needs EPLI?", answer: "Any employer with employees needs EPLI. Most claims come from employees 25-100. Even small businesses face significant risk from employment claims." },
    { question: "How much does EPLI cost?", answer: "EPLI costs $800-$3,000/year for small businesses. Cost depends on employee count, industry, claims history, and HR practices." },
    { question: "What affects EPLI premiums?", answer: "Key factors: employee count, industry risk, claims history, HR policies, training programs, and state employment laws." },
];

export function calculateEPLIPremium(
    employeeCount: string,
    industryRisk: string,
    hasHRPolicies: boolean,
    hasTraining: boolean,
    claimsHistory: boolean
) {
    const employees = EMPLOYEE_COUNTS.find(e => e.id === employeeCount) || EMPLOYEE_COUNTS[1];
    const industry = INDUSTRY_RISKS.find(i => i.id === industryRisk) || INDUSTRY_RISKS[1];

    const hrDiscount = hasHRPolicies ? 0.9 : 1.0;
    const trainingDiscount = hasTraining ? 0.9 : 1.0;
    const claimsMultiplier = claimsHistory ? 1.5 : 1.0;

    const annualPremium = Math.round(employees.baseRate * industry.multiplier * hrDiscount * trainingDiscount * claimsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        employeeRange: employees.name,
        industryRisk: industry.name,
        annualPremium,
        monthlyPremium,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
