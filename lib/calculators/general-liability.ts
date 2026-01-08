// ============================================
// GENERAL LIABILITY INSURANCE CALCULATOR
// 2026 GL Insurance Premiums - Advanced Version
// ============================================

import { Calculator, FileText, Shield, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "General Liability Calculator",
    tagline: "Free 2026 General Liability Insurance Estimator",
    description: "Calculate general liability insurance premiums. Slip and fall, property damage, advertising injury. Based on 2026 NAIC commercial lines data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/general-liability",
};

export const INDUSTRY_CLASSES = [
    { id: "office", name: "Office / Professional", classCode: "41677", baseRate: 0.20 },
    { id: "retail", name: "Retail Store", classCode: "18501", baseRate: 0.35 },
    { id: "restaurant", name: "Restaurant", classCode: "16900", baseRate: 0.75 },
    { id: "contractor", name: "Contractor / Construction", classCode: "91580", baseRate: 1.20 },
    { id: "manufacturing", name: "Manufacturing", classCode: "59998", baseRate: 0.65 },
];

export const COVERAGE_LIMITS = [
    { id: "500k-1m", name: "$500K / $1M", perOccurrence: 500000, aggregate: 1000000, multiplier: 0.85 },
    { id: "1m-2m", name: "$1M / $2M", perOccurrence: 1000000, aggregate: 2000000, multiplier: 1.0 },
    { id: "2m-4m", name: "$2M / $4M", perOccurrence: 2000000, aggregate: 4000000, multiplier: 1.5 },
    { id: "5m-5m", name: "$5M / $5M", perOccurrence: 5000000, aggregate: 5000000, multiplier: 2.2 },
];

export const DEDUCTIBLES = [
    { id: "0", name: "No Deductible", multiplier: 1.0 },
    { id: "500", name: "$500", multiplier: 0.95 },
    { id: "1000", name: "$1,000", multiplier: 0.90 },
    { id: "2500", name: "$2,500", multiplier: 0.85 },
];

export const GL_2026 = {
    statistics: {
        avgPremium: "Average GL: $42/month",
        medianPolicy: "Median Policy: $500/year",
        source: "NAIC / Insureon 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) Commercial Lines Report 2026",
        "Insurance Services Office (ISO) General Liability Manual 2026",
        "Insureon Small Business GL Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "general-liability/calculator", name: "Premium Calculator", description: "Estimate GL insurance costs", icon: Calculator, featured: true },
    { id: "general-liability/guide", name: "Coverage Guide", description: "What GL covers", icon: FileText, featured: true },
    { id: "general-liability/coverage", name: "Coverage Details", description: "What's included", icon: Shield, featured: false },
    { id: "general-liability/claims", name: "Common Claims", description: "Types of GL claims", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is general liability insurance?", answer: "General liability insurance protects your business from third-party claims of bodily injury, property damage, and personal/advertising injury. It's the foundation of business insurance." },
    { question: "What does GL cover?", answer: "GL covers third-party bodily injury (customer slip-and-fall), property damage (damage to client property), personal injury (defamation), and advertising injury (copyright infringement in ads)." },
    { question: "What is not covered?", answer: "GL does not cover your own injuries (workers comp), your own property (commercial property), professional errors (E&O), auto accidents (commercial auto), or intentional acts." },
    { question: "What are coverage limits?", answer: "GL policies have per-occurrence limits (max per claim) and aggregate limits (max per policy period). Common limits are $1M/$2M, meaning $1M per occurrence and $2M aggregate." },
    { question: "Do I need GL insurance?", answer: "Most commercial leases require GL. Many clients and contracts require proof of GL. Even without requirements, GL protects your business assets from lawsuits." },
    { question: "How are premiums calculated?", answer: "GL premiums are based on class code (industry risk), revenue or payroll, location, claims history, and coverage limits. Higher risk industries pay more." },
    { question: "What is a class code?", answer: "Class codes categorize businesses by type and risk level. ISO assigns class codes that determine base rates. Your class code significantly impacts your premium." },
    { question: "What is products/completed operations?", answer: "Products/completed operations coverage protects against claims from products you sell or work you complete. A contractor's work that fails months later is covered." },
    { question: "What is personal and advertising injury?", answer: "Personal injury covers defamation, false arrest, malicious prosecution. Advertising injury covers copyright infringement, misappropriation of ideas in your advertising." },
    { question: "How can I reduce my GL premium?", answer: "Maintain good claims history, raise your deductible, bundle with other policies, implement safety programs, and shop multiple insurers for quotes." },
];

export function calculateGLPremium(
    industryClass: string,
    coverageLimit: string,
    deductible: string,
    annualRevenue: number,
    employeeCount: number,
    claimsHistory: boolean,
    hasProducts: boolean
) {
    const industry = INDUSTRY_CLASSES.find(i => i.id === industryClass) || INDUSTRY_CLASSES[0];
    const limit = COVERAGE_LIMITS.find(l => l.id === coverageLimit) || COVERAGE_LIMITS[1];
    const ded = DEDUCTIBLES.find(d => d.id === deductible) || DEDUCTIBLES[0];

    const revenueFactor = Math.max(annualRevenue / 100000, 1);
    const employeeFactor = Math.max(employeeCount * 25, 100);
    const claimsMultiplier = claimsHistory ? 1.35 : 1.0;
    const productsMultiplier = hasProducts ? 1.25 : 1.0;

    const basePremium = (industry.baseRate * 1000 * revenueFactor) + employeeFactor;
    const annualPremium = Math.round(basePremium * limit.multiplier * ded.multiplier * claimsMultiplier * productsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        industryClass: industry.name,
        coverageLimit: limit.name,
        annualPremium,
        monthlyPremium,
        ratePerThousand: industry.baseRate,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
