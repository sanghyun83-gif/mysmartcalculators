// ============================================
// D&O (DIRECTORS & OFFICERS) INSURANCE CALCULATOR
// 2026 D&O Liability Insurance - Advanced Version
// ============================================

import { Calculator, FileText, Users, Shield } from 'lucide-react';

export const SITE = {
    name: "D&O Insurance Calculator",
    tagline: "Free 2026 Directors & Officers Insurance Estimator",
    description: "Calculate D&O liability insurance premiums for directors, officers, and board members. Protects personal assets. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/do-insurance",
};

export const COMPANY_TYPES = [
    { id: "private", name: "Private Company", baseRate: 2500, riskMultiplier: 1.0 },
    { id: "nonprofit", name: "Nonprofit Organization", baseRate: 1200, riskMultiplier: 0.7 },
    { id: "startup", name: "Venture-Backed Startup", baseRate: 5000, riskMultiplier: 1.5 },
    { id: "public", name: "Public Company", baseRate: 25000, riskMultiplier: 3.0 },
    { id: "spac", name: "SPAC / IPO Prep", baseRate: 35000, riskMultiplier: 4.0 },
];

export const REVENUE_TIERS = [
    { id: "under-1m", name: "Under $1M", multiplier: 0.6 },
    { id: "1m-10m", name: "$1M - $10M", multiplier: 1.0 },
    { id: "10m-50m", name: "$10M - $50M", multiplier: 1.5 },
    { id: "50m-100m", name: "$50M - $100M", multiplier: 2.0 },
    { id: "over-100m", name: "Over $100M", multiplier: 3.0 },
];

export const COVERAGE_LIMITS = [
    { id: "1m", name: "$1M Limit", multiplier: 0.8 },
    { id: "2m", name: "$2M Limit", multiplier: 1.0 },
    { id: "5m", name: "$5M Limit", multiplier: 1.6 },
    { id: "10m", name: "$10M Limit", multiplier: 2.5 },
];

export const DO_2026 = {
    statistics: {
        avgPrivate: "Private D&O: $2,500-$5,000/year",
        avgPublic: "Public D&O: $25,000+/year",
        source: "NAIC / Advisen 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) D&O Data 2026",
        "Advisen D&O Liability Benchmark 2026",
        "Chubb Directors & Officers Liability Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "do-insurance/calculator", name: "Premium Calculator", description: "Estimate D&O costs", icon: Calculator, featured: true },
    { id: "do-insurance/guide", name: "Coverage Guide", description: "What D&O covers", icon: FileText, featured: true },
    { id: "do-insurance/company-types", name: "By Company Type", description: "Private, Public, Nonprofit", icon: Users, featured: false },
    { id: "do-insurance/claims", name: "Common Claims", description: "Types of D&O claims", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is D&O insurance?", answer: "D&O (Directors & Officers) insurance protects company leaders' personal assets from lawsuits alleging wrongful acts in managing the company. It covers defense costs and settlements." },
    { question: "Who needs D&O insurance?", answer: "Any company with a board of directors, officers, or advisory board needs D&O. This includes corporations, LLCs, nonprofits, private companies, and public companies." },
    { question: "What does D&O cover?", answer: "D&O covers breach of fiduciary duty, mismanagement, regulatory investigations, employment practices claims, securities claims (public companies), and misrepresentation." },
    { question: "What are Side A, B, and C coverage?", answer: "Side A covers directors/officers when company can't indemnify. Side B reimburses company for indemnifying D&Os. Side C covers the company entity itself for securities claims." },
    { question: "Do nonprofits need D&O?", answer: "Yes. Nonprofit board members face personal liability for mismanagement, discrimination, wrongful termination, and regulatory issues. Many funders require D&O coverage." },
    { question: "Why do startups need D&O?", answer: "VCs and investors require D&O as a condition of funding. It protects founders from investor lawsuits, employment claims, and regulatory issues." },
    { question: "What is the average D&O cost?", answer: "Private companies: $2,500-$5,000/year. Public companies: $25,000-$500,000+/year depending on size, industry, and claims history." },
    { question: "What affects D&O premiums?", answer: "Key factors: company type (private/public), revenue, industry risk, claims history, number of directors/officers, and coverage limits." },
    { question: "What claims are excluded?", answer: "Common exclusions: fraud/intentional wrongdoing, bodily injury (need GL), property damage, prior acts known at policy start, and criminal fines/penalties." },
    { question: "Should board members buy their own D&O?", answer: "Personal D&O policies exist but company policies typically cover board members. Ensure adequate Side A coverage which protects when company can't/won't indemnify." },
];

export function calculateDOPremium(
    companyType: string,
    revenueTier: string,
    coverageLimit: string,
    boardSize: number,
    yearsInBusiness: number,
    hasVCFunding: boolean,
    claimsHistory: boolean
) {
    const company = COMPANY_TYPES.find(c => c.id === companyType) || COMPANY_TYPES[0];
    const revenue = REVENUE_TIERS.find(r => r.id === revenueTier) || REVENUE_TIERS[1];
    const limit = COVERAGE_LIMITS.find(l => l.id === coverageLimit) || COVERAGE_LIMITS[1];

    const boardMultiplier = 1 + (Math.max(boardSize - 5, 0) * 0.05);
    const experienceDiscount = Math.min(yearsInBusiness * 0.01, 0.10);
    const vcMultiplier = hasVCFunding ? 1.25 : 1.0;
    const claimsMultiplier = claimsHistory ? 1.5 : 1.0;

    const basePremium = company.baseRate * company.riskMultiplier;
    const annualPremium = Math.round(basePremium * revenue.multiplier * limit.multiplier * boardMultiplier * vcMultiplier * (1 - experienceDiscount) * claimsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        companyType: company.name,
        coverageLimit: limit.name,
        annualPremium,
        monthlyPremium,
        dailyCost: Math.round(annualPremium / 365 * 100) / 100,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
