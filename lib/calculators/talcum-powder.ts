// ============================================
// TALCUM POWDER LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on FDA & MDL Court Data
// ============================================

import { Calculator, FileText, Droplet, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Talcum Powder Settlement Calculator",
    tagline: "Free 2026 Talcum Powder & Baby Powder Payout Negotiator",
    description: "Calculate your 2026 Talcum Powder lawsuit settlement value instantly. Free baby powder negotiator with official MDL 2738 litigation data, IARC carcinogen benchmarks, and J&J settlement records.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/talcum-powder",
};

export const TALCUM_2026 = {
    cancerTypes: [
        { type: "Ovarian Cancer - Stage I-II", avgSettlement: 500000, minSettlement: 150000, maxSettlement: 1500000, description: "Early stage ovarian cancer" },
        { type: "Ovarian Cancer - Stage III-IV", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, description: "Advanced stage ovarian cancer" },
        { type: "Mesothelioma (Asbestos)", avgSettlement: 2500000, minSettlement: 1000000, maxSettlement: 10000000, description: "Asbestos-contaminated talc" },
        { type: "Wrongful Death - Ovarian", avgSettlement: 3000000, minSettlement: 1000000, maxSettlement: 15000000, description: "Fatal ovarian cancer" },
        { type: "Wrongful Death - Mesothelioma", avgSettlement: 5000000, minSettlement: 2000000, maxSettlement: 20000000, description: "Fatal mesothelioma" },
    ],
    usageTypes: [
        { type: "Occasional Use (Years)", multiplier: 1.0, description: "Infrequent use for short period" },
        { type: "Regular Use (5-10 Years)", multiplier: 1.3, description: "Regular personal hygiene use" },
        { type: "Long-term Use (10-20 Years)", multiplier: 1.5, description: "Decades of daily use" },
        { type: "Lifetime Use (20+ Years)", multiplier: 1.8, description: "Daily use since childhood" },
    ],
    products: [
        { product: "Johnson's Baby Powder", manufacturer: "Johnson & Johnson" },
        { product: "Shower to Shower", manufacturer: "Johnson & Johnson" },
        { product: "Gold Bond", manufacturer: "Sanofi" },
        { product: "Generic Talcum Powder", manufacturer: "Various" },
    ],
    statistics: {
        activeLawsuits: 67000,
        totalVerdicts: 5000000000,
        avgJuryVerdict: 25000000,
        stateSettlement: 700000000,
        jnjBankruptcy: "Rejected April 2025",
        mdlNumber: "MDL 2738",
    },
    citations: [
        "MDL 2738 - Johnson & Johnson Talcum Powder Products Marketing, Sales Practices and Products Liability Litigation",
        "IARC Monograph 129: Talc with Asbestiform Fibers and Ovarian Cancer",
        "FDA Asbestos Testing in Talc-Containing Cosmetic Products (2026)",
    ],
    citation: "Based on official MDL 2738 (District of New Jersey) litigation benchmarks, IARC carcinogen data, and FDA asbestos testing safety protocols.",
} as const;

export const CALCULATORS = [
    { id: "talcum-powder/talcum-calculator", name: "Talcum Powder Settlement Calculator", shortName: "Calculator", description: "Calculate talcum powder lawsuit settlement", longDescription: "Free talcum calculator with cancer types and usage history.", icon: Calculator, category: "legal", keywords: ["talcum powder calculator", "baby powder lawsuit"], featured: true },
    { id: "talcum-powder/talcum-guide", name: "Talcum Powder Lawsuit Guide", shortName: "Guide", description: "Understanding J&J lawsuits", longDescription: "Learn about talcum powder cancer link, J&J liability, and claim eligibility.", icon: FileText, category: "legal", keywords: ["talcum powder lawsuit guide", "johnson johnson lawsuit"], featured: true },
] as const;

export interface TalcumResult { cancerType: string; usageType: string; baseDamages: number; usageBonus: number; medicalCosts: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateTalcumSettlement(cancerIndex: number, usageIndex: number, yearsOfUse: number, medicalBills: number): TalcumResult {
    const cancer = TALCUM_2026.cancerTypes[cancerIndex];
    const usage = TALCUM_2026.usageTypes[usageIndex];
    const baseDamages = cancer.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const painSuffering = baseDamages * 0.6;
    const yearsMultiplier = Math.min(yearsOfUse / 20, 2);
    const usageBonus = baseDamages * (usage.multiplier - 1) * yearsMultiplier;
    const total = baseDamages + medicalCosts + painSuffering + usageBonus;
    return { cancerType: cancer.type, usageType: usage.type, baseDamages: Math.round(baseDamages), usageBonus: Math.round(usageBonus), medicalCosts: Math.round(medicalCosts), painSuffering: Math.round(painSuffering), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
