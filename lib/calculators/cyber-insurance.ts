// ============================================
// CYBER LIABILITY INSURANCE CALCULATOR
// 2026 Cyber Insurance Premiums - Advanced Version
// ============================================

import { Calculator, FileText, Shield, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Cyber Insurance Calculator",
    tagline: "Free 2026 Cyber Liability Insurance Estimator",
    description: "Calculate cyber insurance premiums. Data breach, ransomware, phishing, and network security coverage. Based on 2026 market data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/cyber-insurance",
};

export const BUSINESS_TYPES = [
    { id: "retail", name: "Retail / E-commerce", baseRate: 1500, riskMultiplier: 1.2 },
    { id: "healthcare", name: "Healthcare / Medical", baseRate: 3000, riskMultiplier: 1.8 },
    { id: "professional", name: "Professional Services", baseRate: 1000, riskMultiplier: 1.0 },
    { id: "financial", name: "Financial Services", baseRate: 2500, riskMultiplier: 1.5 },
    { id: "tech", name: "Technology / SaaS", baseRate: 2000, riskMultiplier: 1.3 },
    { id: "manufacturing", name: "Manufacturing", baseRate: 1200, riskMultiplier: 1.1 },
];

export const DATA_SENSITIVITY = [
    { id: "basic", name: "Basic Business Data", multiplier: 0.8 },
    { id: "pii", name: "PII (Names, Emails)", multiplier: 1.0 },
    { id: "financial", name: "Financial/Payment Data", multiplier: 1.4 },
    { id: "health", name: "Health/Medical Records (PHI)", multiplier: 1.8 },
];

export const COVERAGE_LIMITS = [
    { id: "250k", name: "$250K Limit", multiplier: 0.7 },
    { id: "500k", name: "$500K Limit", multiplier: 0.85 },
    { id: "1m", name: "$1M Limit", multiplier: 1.0 },
    { id: "2m", name: "$2M Limit", multiplier: 1.4 },
    { id: "5m", name: "$5M Limit", multiplier: 2.2 },
];

export const CYBER_2026 = {
    statistics: {
        avgCost: "Average Policy: $1,500/year",
        avgBreach: "Average Breach Cost: $4.45M",
        source: "NetDiligence / IBM 2026",
    },
    citations: [
        "NetDiligence Cyber Claims Study 2026",
        "IBM Cost of a Data Breach Report 2026",
        "Coalition Cyber Claims Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "cyber-insurance/calculator", name: "Premium Calculator", description: "Estimate cyber costs", icon: Calculator, featured: true },
    { id: "cyber-insurance/guide", name: "Coverage Guide", description: "What cyber covers", icon: FileText, featured: true },
    { id: "cyber-insurance/threats", name: "Cyber Threats", description: "Types of attacks", icon: AlertTriangle, featured: false },
    { id: "cyber-insurance/claims", name: "Common Claims", description: "Breach claim types", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is cyber insurance?", answer: "Cyber insurance covers financial losses from cyber attacks, data breaches, ransomware, and network security incidents. It includes first-party (your losses) and third-party (liability) coverage." },
    { question: "What does cyber insurance cover?", answer: "Cyber insurance covers data breach response costs, ransomware payments, business interruption, legal defense, regulatory fines, notification costs, credit monitoring, and PR expenses." },
    { question: "Do small businesses need cyber insurance?", answer: "Yes. 43% of cyber attacks target small businesses. Average breach cost for SMBs is $120,000. Many SMBs go out of business after a major breach." },
    { question: "How much cyber insurance do I need?", answer: "Coverage needs depend on data sensitivity, records stored, revenue, and industry. Most SMBs need $1M+. Healthcare and financial services often need $2M+." },
    { question: "What is first-party vs third-party coverage?", answer: "First-party covers your direct losses (breach response, business interruption). Third-party covers liability claims from affected parties (lawsuits, regulatory fines)." },
    { question: "Does cyber insurance cover ransomware?", answer: "Most cyber policies cover ransomware, including ransom payments, recovery costs, and business interruption. Coverage limits and sub-limits vary by policy." },
    { question: "What affects cyber insurance premiums?", answer: "Key factors: industry, revenue, data types stored, security controls, employee count, claims history, and coverage limits. Healthcare and financial pay more." },
    { question: "What security controls reduce premiums?", answer: "MFA (multi-factor auth), EDR, regular backups, employee training, patch management, and incident response plans can reduce premiums 10-25%." },
    { question: "What is not covered?", answer: "Common exclusions: unencrypted devices, failure to patch known vulnerabilities, insider threats (some policies), acts of war, and infrastructure failure." },
    { question: "How do I file a cyber claim?", answer: "Contact your insurer's breach hotline immediately. They provide forensic investigators, breach coaches, and legal counsel. Don't attempt remediation alone." },
];

export function calculateCyberPremium(
    businessType: string,
    dataSensitivity: string,
    coverageLimit: string,
    annualRevenue: number,
    employeeCount: number,
    hasMFA: boolean,
    priorBreach: boolean
) {
    const business = BUSINESS_TYPES.find(b => b.id === businessType) || BUSINESS_TYPES[2];
    const data = DATA_SENSITIVITY.find(d => d.id === dataSensitivity) || DATA_SENSITIVITY[1];
    const limit = COVERAGE_LIMITS.find(l => l.id === coverageLimit) || COVERAGE_LIMITS[2];

    const revenueFactor = Math.max(annualRevenue / 1000000, 1);
    const employeeFactor = 1 + (employeeCount * 0.01);
    const mfaDiscount = hasMFA ? 0.85 : 1.0;
    const breachMultiplier = priorBreach ? 1.5 : 1.0;

    const basePremium = business.baseRate * business.riskMultiplier;
    const annualPremium = Math.round(basePremium * data.multiplier * limit.multiplier * Math.min(revenueFactor, 3) * Math.min(employeeFactor, 1.5) * mfaDiscount * breachMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        businessType: business.name,
        coverageLimit: limit.name,
        annualPremium,
        monthlyPremium,
        dailyCost: Math.round(annualPremium / 365 * 100) / 100,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
