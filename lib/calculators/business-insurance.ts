// ============================================
// BUSINESS INSURANCE PREMIUM CALCULATOR
// 2026 Small Business Insurance - Advanced Version
// ============================================

import { Calculator, FileText, Briefcase, Shield } from 'lucide-react';

export const SITE = {
    name: "Business Insurance Calculator",
    tagline: "Free 2026 Business Insurance Premium Estimator",
    description: "Calculate business insurance premiums for small businesses, startups, and LLCs. Compare coverage options and costs. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/business-insurance",
};

export const BUSINESS_TYPES = [
    { id: "sole-proprietor", name: "Sole Proprietor", description: "One owner, unlimited liability", baseRate: 400, riskMultiplier: 1.0 },
    { id: "llc", name: "LLC", description: "Limited liability company", baseRate: 600, riskMultiplier: 0.9 },
    { id: "partnership", name: "Partnership", description: "Multiple owners, shared liability", baseRate: 700, riskMultiplier: 1.0 },
    { id: "corporation", name: "Corporation", description: "S-Corp or C-Corp", baseRate: 900, riskMultiplier: 0.85 },
    { id: "startup", name: "Startup", description: "Pre-revenue or early stage", baseRate: 800, riskMultiplier: 1.2 },
];

export const REVENUE_TIERS = [
    { id: "under-100k", name: "Under $100K", multiplier: 0.6 },
    { id: "100k-500k", name: "$100K - $500K", multiplier: 1.0 },
    { id: "500k-1m", name: "$500K - $1M", multiplier: 1.4 },
    { id: "1m-5m", name: "$1M - $5M", multiplier: 1.8 },
    { id: "over-5m", name: "Over $5M", multiplier: 2.5 },
];

export const COVERAGE_NEEDS = [
    { id: "basic", name: "Basic (GL Only)", multiplier: 0.7 },
    { id: "standard", name: "Standard (BOP)", multiplier: 1.0 },
    { id: "comprehensive", name: "Comprehensive (BOP + Extras)", multiplier: 1.4 },
    { id: "premium", name: "Premium (Full Coverage)", multiplier: 2.0 },
];

export const BUSINESS_2026 = {
    statistics: {
        avgCost: "Average Small Business: $1,281/year",
        startupCost: "Startups: $500 - $3,000/year",
        source: "NAIC / SBA 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) Small Business Data 2026",
        "Small Business Administration (SBA) Insurance Guidelines 2026",
        "Next Insurance Small Business Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "business-insurance/calculator", name: "Premium Calculator", description: "Estimate insurance costs", icon: Calculator, featured: true },
    { id: "business-insurance/guide", name: "Coverage Guide", description: "What coverage you need", icon: FileText, featured: true },
    { id: "business-insurance/business-types", name: "By Business Type", description: "LLC, Corp, Sole Prop", icon: Briefcase, featured: false },
    { id: "business-insurance/startup", name: "Startup Insurance", description: "Coverage for new businesses", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is business insurance?", answer: "Business insurance protects your company from financial losses due to lawsuits, property damage, employee injuries, and other risks. Common types include general liability, BOP, and workers compensation." },
    { question: "Do I need business insurance as a sole proprietor?", answer: "Yes. As a sole proprietor, your personal assets are at risk. Business insurance protects your savings, home, and other assets from business-related lawsuits." },
    { question: "What insurance does an LLC need?", answer: "LLCs typically need general liability insurance at minimum. Many also need professional liability (for service businesses), commercial property, and workers comp if they have employees." },
    { question: "What is a BOP?", answer: "A Business Owner Policy bundles general liability and commercial property insurance at a discounted rate. It's designed for small businesses and offers comprehensive basic protection." },
    { question: "How much does business insurance cost?", answer: "Small business insurance averages $1,281/year for basic coverage. Costs vary based on industry, revenue, location, and coverage needs. Startups typically pay $500-$3,000/year." },
    { question: "What insurance do startups need?", answer: "Startups typically need general liability, professional liability (E&O), D&O insurance for investors, and cyber liability. Some also need product liability." },
    { question: "Is business insurance tax deductible?", answer: "Yes. Business insurance premiums are generally tax-deductible as a business expense. Consult your accountant for specific guidance." },
    { question: "What factors affect my premium?", answer: "Key factors include industry/risk classification, business size, revenue, claims history, location, coverage limits, and deductibles." },
    { question: "Can I get insurance for a home-based business?", answer: "Yes. Home-based businesses can get business insurance. Your homeowner's policy typically excludes business activities, so separate coverage is needed." },
    { question: "How do I lower my business insurance costs?", answer: "Bundle policies (BOP), raise deductibles, maintain good claims history, improve safety measures, shop multiple quotes, and pay annually instead of monthly." },
];

export function calculateBusinessInsurance(
    businessType: string,
    revenueTier: string,
    coverageNeed: string,
    employees: number,
    yearsInBusiness: number,
    homeBasedBusiness: boolean,
    priorClaims: boolean
) {
    const business = BUSINESS_TYPES.find(b => b.id === businessType) || BUSINESS_TYPES[0];
    const revenue = REVENUE_TIERS.find(r => r.id === revenueTier) || REVENUE_TIERS[1];
    const coverage = COVERAGE_NEEDS.find(c => c.id === coverageNeed) || COVERAGE_NEEDS[1];

    const experienceDiscount = Math.min(yearsInBusiness * 0.02, 0.15);
    const homeBasedDiscount = homeBasedBusiness ? 0.85 : 1.0;
    const claimsMultiplier = priorClaims ? 1.4 : 1.0;
    const employeeAddon = employees * 50;

    const basePremium = business.baseRate + employeeAddon;
    const annualPremium = Math.round(basePremium * business.riskMultiplier * revenue.multiplier * coverage.multiplier * (1 - experienceDiscount) * homeBasedDiscount * claimsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        businessType: business.name,
        coverageLevel: coverage.name,
        annualPremium,
        monthlyPremium,
        dailyCost: Math.round(annualPremium / 365 * 100) / 100,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
