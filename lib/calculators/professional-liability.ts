// ============================================
// PROFESSIONAL LIABILITY INSURANCE CALCULATOR
// 2026 E&O Insurance Premiums - Advanced Version
// ============================================

import { Calculator, FileText, Briefcase, Shield } from 'lucide-react';

export const SITE = {
    name: "Professional Liability Calculator",
    tagline: "Free 2026 E&O Insurance Premium Estimator",
    description: "Calculate professional liability (E&O) insurance premiums. Errors & omissions coverage for consultants, accountants, tech, and professionals. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/professional-liability",
};

export const PROFESSION_TYPES = [
    { id: "consultant", name: "Consultant / Advisor", baseRate: 1200, riskMultiplier: 1.0 },
    { id: "accountant", name: "Accountant / CPA", baseRate: 1500, riskMultiplier: 1.2 },
    { id: "lawyer", name: "Attorney / Law Firm", baseRate: 3500, riskMultiplier: 1.8 },
    { id: "tech", name: "Technology / IT Services", baseRate: 1800, riskMultiplier: 1.3 },
    { id: "healthcare", name: "Healthcare Provider", baseRate: 4000, riskMultiplier: 2.0 },
    { id: "architect", name: "Architect / Engineer", baseRate: 2500, riskMultiplier: 1.5 },
];

export const COVERAGE_LIMITS = [
    { id: "250k-500k", name: "$250K / $500K", multiplier: 0.7 },
    { id: "500k-1m", name: "$500K / $1M", multiplier: 0.85 },
    { id: "1m-1m", name: "$1M / $1M", multiplier: 1.0 },
    { id: "1m-2m", name: "$1M / $2M", multiplier: 1.15 },
    { id: "2m-2m", name: "$2M / $2M", multiplier: 1.4 },
];

export const DEDUCTIBLES = [
    { id: "0", name: "No Deductible", multiplier: 1.0 },
    { id: "1000", name: "$1,000", multiplier: 0.92 },
    { id: "2500", name: "$2,500", multiplier: 0.85 },
    { id: "5000", name: "$5,000", multiplier: 0.78 },
];

export const PL_2026 = {
    statistics: {
        avgPremium: "Average E&O: $61/month",
        medianClaim: "Median Claim: $35,000",
        source: "NAIC / Insureon 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) Professional Liability Data 2026",
        "American Institute of CPAs (AICPA) E&O Insurance Survey 2026",
        "Insureon E&O Claims Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "professional-liability/calculator", name: "Premium Calculator", description: "Estimate E&O costs", icon: Calculator, featured: true },
    { id: "professional-liability/guide", name: "Coverage Guide", description: "What E&O covers", icon: FileText, featured: true },
    { id: "professional-liability/professions", name: "By Profession", description: "Profession-specific rates", icon: Briefcase, featured: false },
    { id: "professional-liability/claims", name: "Common Claims", description: "Types of E&O claims", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is professional liability insurance?", answer: "Professional liability insurance (E&O) protects against claims of negligence, errors, or omissions in your professional services. It covers legal defense costs and settlements." },
    { question: "What is E&O insurance?", answer: "E&O stands for Errors & Omissions. It's another name for professional liability insurance. It protects professionals when clients claim their services caused financial harm." },
    { question: "Who needs professional liability?", answer: "Any professional providing advice, services, or expertise: consultants, accountants, lawyers, IT professionals, architects, engineers, healthcare providers, and real estate agents." },
    { question: "What does E&O cover?", answer: "E&O covers negligence claims, missed deadlines, errors in work, failure to deliver promised services, copyright infringement related to work product, and defense costs." },
    { question: "What's not covered?", answer: "E&O does not cover intentional wrongdoing, criminal acts, bodily injury (need GL), property damage (need GL), employee claims (need EPLI), or cyber incidents (need cyber liability)." },
    { question: "How much E&O coverage do I need?", answer: "Most contracts require $1M per claim. High-risk professions (lawyers, healthcare) often need $2M+. Consider the value of projects you work on." },
    { question: "What affects E&O premiums?", answer: "Key factors: profession type, revenue or billings, coverage limits, deductible, claims history, years in business, and number of employees." },
    { question: "What is a claims-made policy?", answer: "Most E&O policies are claims-made, meaning they cover claims made during the policy period for incidents that occurred after the retroactive date. Tail coverage may be needed if you cancel." },
    { question: "What is tail coverage?", answer: "Tail coverage (Extended Reporting Period) extends claims-made coverage after policy cancellation. Important if you retire or switch carriers to cover past work." },
    { question: "How can I reduce E&O premiums?", answer: "Maintain clean claims history, use written contracts, document everything, raise deductibles, implement quality control procedures, and maintain professional certifications." },
];

export function calculatePLPremium(
    professionType: string,
    coverageLimit: string,
    deductible: string,
    annualRevenue: number,
    employeeCount: number,
    yearsInBusiness: number,
    claimsHistory: boolean
) {
    const profession = PROFESSION_TYPES.find(p => p.id === professionType) || PROFESSION_TYPES[0];
    const limit = COVERAGE_LIMITS.find(l => l.id === coverageLimit) || COVERAGE_LIMITS[2];
    const ded = DEDUCTIBLES.find(d => d.id === deductible) || DEDUCTIBLES[0];

    const revenueFactor = Math.max(annualRevenue / 250000, 1);
    const employeeFactor = 1 + (employeeCount * 0.08);
    const experienceDiscount = Math.min(yearsInBusiness * 0.015, 0.15);
    const claimsMultiplier = claimsHistory ? 1.4 : 1.0;

    const basePremium = profession.baseRate * profession.riskMultiplier;
    const annualPremium = Math.round(basePremium * revenueFactor * employeeFactor * limit.multiplier * ded.multiplier * (1 - experienceDiscount) * claimsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        professionType: profession.name,
        coverageLimit: limit.name,
        annualPremium,
        monthlyPremium,
        dailyCost: Math.round(annualPremium / 365 * 100) / 100,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
