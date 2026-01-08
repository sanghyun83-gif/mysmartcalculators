// ============================================
// WORKERS COMP PREMIUM CALCULATOR
// 2026 WC Insurance Premiums - Advanced Version
// ============================================

import { Calculator, FileText, Briefcase, Shield } from 'lucide-react';

export const SITE = {
    name: "Workers Comp Premium Calculator",
    tagline: "Free 2026 Workers Compensation Premium Estimator",
    description: "Calculate workers compensation insurance premiums. Class codes, experience mod, and payroll-based calculations. Based on 2026 NCCI rates.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/workers-comp-premium",
};

export const CLASS_CODES = [
    { id: "8810", name: "8810 - Clerical Office", rate: 0.16 },
    { id: "8742", name: "8742 - Outside Sales", rate: 0.25 },
    { id: "5191", name: "5191 - Office Machine Install", rate: 1.85 },
    { id: "8017", name: "8017 - Retail Store", rate: 1.35 },
    { id: "9079", name: "9079 - Restaurant", rate: 2.10 },
    { id: "5213", name: "5213 - Concrete Construction", rate: 8.75 },
    { id: "5022", name: "5022 - Masonry", rate: 7.50 },
    { id: "3632", name: "3632 - Machine Shop", rate: 3.20 },
];

export const EXPERIENCE_MODS = [
    { id: "0.7", name: "0.70 (Excellent)", multiplier: 0.70 },
    { id: "0.85", name: "0.85 (Good)", multiplier: 0.85 },
    { id: "1.0", name: "1.00 (Average)", multiplier: 1.00 },
    { id: "1.15", name: "1.15 (Below Average)", multiplier: 1.15 },
    { id: "1.3", name: "1.30 (Poor)", multiplier: 1.30 },
];

export const STATES = [
    { id: "ca", name: "California", modifier: 1.15 },
    { id: "tx", name: "Texas", modifier: 0.95 },
    { id: "ny", name: "New York", modifier: 1.20 },
    { id: "fl", name: "Florida", modifier: 1.05 },
    { id: "other", name: "Other States", modifier: 1.00 },
];

export const WCP_2026 = {
    statistics: {
        avgPremium: "Average WC: $1.19 per $100 payroll",
        avgClaim: "Average Claim: $42,000",
        source: "NCCI / BLS 2026",
    },
    citations: [
        "National Council on Compensation Insurance (NCCI) Rate Filing 2026",
        "Bureau of Labor Statistics Workplace Injury Data 2026",
        "Workers Compensation Research Institute (WCRI) Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "workers-comp-premium/calculator", name: "Premium Calculator", description: "Estimate WC premiums", icon: Calculator, featured: true },
    { id: "workers-comp-premium/guide", name: "Rate Guide", description: "How rates work", icon: FileText, featured: true },
    { id: "workers-comp-premium/class-codes", name: "Class Codes", description: "Find your code", icon: Briefcase, featured: false },
    { id: "workers-comp-premium/experience-mod", name: "Experience Mod", description: "Reduce premiums", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "How is workers comp premium calculated?", answer: "Premium = (Payroll / 100) × Class Code Rate × Experience Modifier × State Factor. The base calculation is per $100 of payroll." },
    { question: "What is a class code?", answer: "Class codes categorize jobs by risk. Office workers (8810) have rates around $0.16/$100. Construction workers can have rates over $8.00/$100." },
    { question: "What is experience modification rate (EMR)?", answer: "EMR compares your claims history to similar businesses. 1.00 is average. Below 1.00 means better than average (lower premiums). Above 1.00 means more claims." },
    { question: "How can I lower my workers comp premium?", answer: "Improve safety programs, return injured workers to light duty, implement training, and manage claims actively. A good EMR can reduce premiums 30%+." },
    { question: "Is workers comp required?", answer: "Most states require workers comp for businesses with employees. Texas and a few others are optional but recommended. Penalties for non-compliance are severe." },
    { question: "What affects workers comp rates?", answer: "Key factors: class codes, payroll, experience mod, state, safety programs, claims history, and industry risk." },
    { question: "What is minimum premium?", answer: "Most states have minimum premiums regardless of payroll. This ensures coverage even for very small businesses, typically $500-$2,500." },
    { question: "How often do rates change?", answer: "NCCI files rate changes annually. Some states have independent rating bureaus. Rates can increase or decrease based on industry loss trends." },
    { question: "What is payroll audit?", answer: "Insurers audit your actual payroll at policy end. If actual payroll differs from estimated, you may owe additional premium or receive a refund." },
    { question: "Can I exclude owners from coverage?", answer: "Many states allow owners/officers to exclude themselves. This reduces premium but means no coverage if you're injured at work." },
];

export function calculateWCPremium(
    classCode: string,
    experienceMod: string,
    state: string,
    annualPayroll: number,
    hasOfficers: boolean,
    safetyProgram: boolean,
    claimsFreeLast3Years: boolean
) {
    const code = CLASS_CODES.find(c => c.id === classCode) || CLASS_CODES[0];
    const mod = EXPERIENCE_MODS.find(m => m.id === experienceMod) || EXPERIENCE_MODS[2];
    const st = STATES.find(s => s.id === state) || STATES[4];

    const officerDiscount = hasOfficers ? 0.95 : 1.0;
    const safetyDiscount = safetyProgram ? 0.92 : 1.0;
    const claimsFreeDiscount = claimsFreeLast3Years ? 0.90 : 1.0;

    const manualPremium = (annualPayroll / 100) * code.rate;
    const annualPremium = Math.round(manualPremium * mod.multiplier * st.modifier * officerDiscount * safetyDiscount * claimsFreeDiscount);
    const monthlyPremium = Math.round(annualPremium / 12);
    const ratePerHundred = Math.round(code.rate * mod.multiplier * st.modifier * 100) / 100;

    return {
        classCode: code.name,
        experienceMod: mod.name,
        annualPremium: Math.max(annualPremium, 750),
        monthlyPremium: Math.max(monthlyPremium, 63),
        ratePerHundred,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
