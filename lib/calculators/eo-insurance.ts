// ============================================
// E&O (ERRORS & OMISSIONS) INSURANCE CALCULATOR
// 2026 E&O for Agents & Service Providers - Advanced Version
// ============================================

import { Calculator, FileText, Home, Shield } from 'lucide-react';

export const SITE = {
    name: "E&O Insurance Calculator",
    tagline: "Free 2026 Errors & Omissions Insurance Estimator",
    description: "Calculate E&O insurance premiums for real estate agents, insurance agents, notaries, and service professionals. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/eo-insurance",
};

export const AGENT_TYPES = [
    { id: "real-estate", name: "Real Estate Agent", baseRate: 350, riskMultiplier: 1.0 },
    { id: "insurance-agent", name: "Insurance Agent/Broker", baseRate: 450, riskMultiplier: 1.1 },
    { id: "mortgage-broker", name: "Mortgage Broker", baseRate: 600, riskMultiplier: 1.3 },
    { id: "notary", name: "Notary Public / Signing Agent", baseRate: 150, riskMultiplier: 0.6 },
    { id: "property-manager", name: "Property Manager", baseRate: 500, riskMultiplier: 1.2 },
    { id: "travel-agent", name: "Travel Agent", baseRate: 250, riskMultiplier: 0.8 },
];

export const TRANSACTION_VOLUME = [
    { id: "low", name: "Under 20 transactions/year", multiplier: 0.8 },
    { id: "medium", name: "20-50 transactions/year", multiplier: 1.0 },
    { id: "high", name: "50-100 transactions/year", multiplier: 1.3 },
    { id: "very-high", name: "100+ transactions/year", multiplier: 1.6 },
];

export const COVERAGE_LIMITS = [
    { id: "100k-300k", name: "$100K / $300K", multiplier: 0.6 },
    { id: "250k-500k", name: "$250K / $500K", multiplier: 0.8 },
    { id: "500k-1m", name: "$500K / $1M", multiplier: 1.0 },
    { id: "1m-1m", name: "$1M / $1M", multiplier: 1.2 },
];

export const EO_2026 = {
    statistics: {
        avgRealtor: "Avg Realtor E&O: $350/year",
        avgClaim: "Average Claim: $18,000",
        source: "NAIC / NAR 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) E&O Data 2026",
        "National Association of Realtors (NAR) E&O Survey 2026",
        "American Land Title Association (ALTA) Agent Liability Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "eo-insurance/calculator", name: "Premium Calculator", description: "Estimate E&O costs", icon: Calculator, featured: true },
    { id: "eo-insurance/guide", name: "Coverage Guide", description: "What E&O covers", icon: FileText, featured: true },
    { id: "eo-insurance/agents", name: "By Agent Type", description: "Rates by profession", icon: Home, featured: false },
    { id: "eo-insurance/claims", name: "Common Claims", description: "Types of E&O claims", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is E&O insurance?", answer: "E&O (Errors & Omissions) insurance protects agents and service providers from claims of negligence, mistakes, or failure to perform professional duties. It covers defense costs and settlements." },
    { question: "Do real estate agents need E&O?", answer: "Yes. Most states require or strongly recommend E&O for realtors. Many brokerages require agents to carry E&O. NAR recommends at least $100K coverage." },
    { question: "What does realtor E&O cover?", answer: "Realtor E&O covers disclosure failures, misleading information, contract errors, deadline misses, and fiduciary duty breaches. It does not cover intentional fraud." },
    { question: "What about insurance agent E&O?", answer: "Insurance agent E&O covers claims of selling inappropriate policies, coverage gaps, failure to add insureds, late renewals, and application errors." },
    { question: "Do notaries need E&O?", answer: "Yes. Notary signing agents especially need E&O as they handle important documents. Many lenders require $25K-$100K E&O coverage." },
    { question: "How much E&O do I need?", answer: "Real estate agents typically need $250K-$1M. Transaction volume and price point matter. Luxury real estate may need higher limits." },
    { question: "What is the difference from GL?", answer: "General liability covers bodily injury and property damage. E&O covers financial harm from professional errors. You typically need both." },
    { question: "Is E&O tax deductible?", answer: "Yes. E&O insurance premiums are tax-deductible as a business expense for self-employed agents and independent contractors." },
    { question: "What affects E&O premiums?", answer: "Key factors: profession type, transaction volume, coverage limits, claims history, years of experience, and state requirements." },
    { question: "What is prior acts coverage?", answer: "Prior acts coverage protects against claims for work done before the policy start date. Important when switching E&O carriers." },
];

export function calculateEOPremium(
    agentType: string,
    transactionVolume: string,
    coverageLimit: string,
    yearsLicensed: number,
    hasAssistants: boolean,
    claimsHistory: boolean,
    teamSize: number
) {
    const agent = AGENT_TYPES.find(a => a.id === agentType) || AGENT_TYPES[0];
    const volume = TRANSACTION_VOLUME.find(v => v.id === transactionVolume) || TRANSACTION_VOLUME[1];
    const limit = COVERAGE_LIMITS.find(l => l.id === coverageLimit) || COVERAGE_LIMITS[2];

    const experienceDiscount = Math.min(yearsLicensed * 0.02, 0.20);
    const assistantMultiplier = hasAssistants ? 1.15 : 1.0;
    const claimsMultiplier = claimsHistory ? 1.45 : 1.0;
    const teamMultiplier = 1 + (Math.max(teamSize - 1, 0) * 0.25);

    const basePremium = agent.baseRate * agent.riskMultiplier;
    const annualPremium = Math.round(basePremium * volume.multiplier * limit.multiplier * assistantMultiplier * teamMultiplier * (1 - experienceDiscount) * claimsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        agentType: agent.name,
        coverageLimit: limit.name,
        annualPremium,
        monthlyPremium,
        dailyCost: Math.round(annualPremium / 365 * 100) / 100,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
