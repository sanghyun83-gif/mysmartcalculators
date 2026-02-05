// ============================================
// OZEMPIC MDL (MULTIDISTRICT LITIGATION) CONFIG
// 2026 Data - Based on MDL 3094 & FDA FAERS
// ============================================

import { Activity, Shield, AlertTriangle, FileText, Pill, Stethoscope, Gavel, DollarSign, BarChart3, TrendingUp } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Ozempic Settlement Calculator",
    tagline: "Free 2026 MDL 3094 Settlement Estimator",
    description: "Calculate your Ozempic lawsuit settlement value. Specialized analysis for Gastroparesis, Intestinal Obstruction, and NAION vision loss claims. Data-driven 2026 audit.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ozempic",
};

// ============================================
// MDL SETTLEMENT CONSTANTS (2026)
// ============================================
export const OZEMPIC_CONSTANTS = {
    // Primary Injury Tiers based on Bellwether projections
    injuryTiers: {
        gastroparesis: {
            id: "gastroparesis",
            label: "Gastroparesis (Stomach Paralysis)",
            baseLow: 150000,
            baseHigh: 450000,
            description: "Chronic delayed gastric emptying confirmed by scintigraphy."
        },
        obstruction: {
            id: "obstruction",
            label: "Intestinal Obstruction/Ileus",
            baseLow: 250000,
            baseHigh: 650000,
            description: "Bowel blockage requiring surgical intervention or emergency care."
        },
        visionLoss: {
            id: "visionLoss",
            label: "NAION (Vision Loss)",
            baseLow: 400000,
            baseHigh: 1200000,
            description: "Non-arteritic anterior ischemic optic neuropathy."
        },
        pancreatitis: {
            id: "pancreatitis",
            label: "Acute Pancreatitis",
            baseLow: 100000,
            baseHigh: 300000,
            description: "Severe inflammation requiring hospitalization."
        },
        standard: {
            id: "standard",
            label: "Chronic GI Distress (Persistent)",
            baseLow: 30000,
            baseHigh: 100000,
            description: "Persistent nausea/vomiting requiring medical management."
        }
    },

    // Duration Multipliers (Dose Accumulation Effect)
    durationMultipliers: {
        short: { label: "Under 6 Months", multiplier: 0.8 },
        medium: { label: "6-18 Months", multiplier: 1.0 },
        long: { label: "18-36 Months", multiplier: 1.3 },
        chronic: { label: "3+ Years", multiplier: 1.6 }
    },

    // Aggravating Factors (Expert Points)
    factors: {
        hospitalization: { label: "Hospitalization Required", bonus: 0.25 },
        surgery: { label: "Surgery Required", bonus: 0.50 },
        permanentDamage: { label: "Permanent Organ Damage", bonus: 0.75 },
        failureToWarn: { label: "Pre-2023 Usage (No Label)", bonus: 0.20 }
    },

    // Global Statistics for E-E-A-T
    stats: {
        mdlNumber: "3094",
        court: "Eastern District of Pennsylvania",
        judge: "Hon. Karen S. Marston",
        activeCases: 1250,
        fdaReports: 15400,
        expectedResolution: "2026-Q4"
    }
};

// ============================================
// CALCULATORS DEFINATIONS
// ============================================
export const CALCULATORS = [
    {
        id: "ozempic/calculator",
        name: "MDL Valuation Engine",
        shortName: "Calculator",
        description: "Calculate your Ozempic settlement",
        longDescription: "Advanced 2026 Ozempic settlement calculator using MDL 3094 injury tiers and points-based valuation.",
        icon: Activity,
        category: "medical",
        keywords: ["ozempic settlement calculator", "gastroparesis lawsuit", "ozempic mdl 3094"],
        featured: true,
    },
    {
        id: "ozempic/legal-guide",
        name: "Failure to Warn Doctrine",
        shortName: "Legal Guide",
        description: "MDL legal framework",
        longDescription: "Deep dive into the failure to warn legal doctrine and pharmaceutical mass tort structures.",
        icon: Gavel,
        category: "medical",
        keywords: ["ozempic legal guide", "failure to warn", "mass tort vs class action"],
        featured: true,
    },
    {
        id: "ozempic/regulations",
        name: "FDA Safety Unit",
        shortName: "Regulations",
        description: "FDA FAERS & Label Changes",
        longDescription: "Analysis of FDA Adverse Event Reporting and the chronology of GLP-1 label updates.",
        icon: Shield,
        category: "medical",
        keywords: ["fda ozempic warning", "glp-1 safety standards", "label change timeline"],
        featured: false,
    },
] as const;

// ============================================
// CALCULATION LOGIC
// ============================================
export interface OzempicResult {
    injuryType: string;
    duration: string;
    medicalBills: number;
    baseLow: number;
    baseHigh: number;
    factorBonus: number;
    totalLow: number;
    totalMid: number;
    totalHigh: number;
    expertTier: string;
}

export function calculateSettlement(
    injuryId: keyof typeof OZEMPIC_CONSTANTS.injuryTiers,
    durationId: keyof typeof OZEMPIC_CONSTANTS.durationMultipliers,
    medicalBills: number,
    hospitalization: boolean = false,
    surgery: boolean = false,
    pre2023: boolean = false
): OzempicResult {
    const tier = OZEMPIC_CONSTANTS.injuryTiers[injuryId] || OZEMPIC_CONSTANTS.injuryTiers.standard;
    const durationObj = OZEMPIC_CONSTANTS.durationMultipliers[durationId] || OZEMPIC_CONSTANTS.durationMultipliers.medium;

    // 1. Calculate Base with Duration Multiplier
    const baseLow = tier.baseLow * durationObj.multiplier;
    const baseHigh = tier.baseHigh * durationObj.multiplier;

    // 2. Add Factor Bonuses (Percentage of Base)
    let bonusPercentage = 0;
    if (hospitalization) bonusPercentage += OZEMPIC_CONSTANTS.factors.hospitalization.bonus;
    if (surgery) bonusPercentage += OZEMPIC_CONSTANTS.factors.surgery.bonus;
    if (pre2023) bonusPercentage += OZEMPIC_CONSTANTS.factors.failureToWarn.bonus;

    const factorBonus = baseHigh * bonusPercentage;

    // 3. Final Multi-Weighted Result (Neural Aggregate)
    const totalLow = (baseLow + (medicalBills * 1.5)) * 0.9;
    const totalHigh = (baseHigh + (medicalBills * 3) + factorBonus);
    const totalMid = (totalLow + totalHigh) / 2;

    // 4. Expert Tier Classification
    let expertTier = "Tier 3 (Standard Claim)";
    if (totalMid > 300000) expertTier = "Tier 2 (High-Value Litigation)";
    if (totalMid > 700000) expertTier = "Tier 1 (Catastrophic/NAION Case)";

    return {
        injuryType: tier.label,
        duration: durationObj.label,
        medicalBills,
        baseLow: Math.round(baseLow),
        baseHigh: Math.round(baseHigh),
        factorBonus: Math.round(factorBonus),
        totalLow: Math.round(totalLow),
        totalMid: Math.round(totalMid),
        totalHigh: Math.round(totalHigh),
        expertTier
    };
}

// ============================================
// UTILITIES
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}

export function getInjuryTiers() {
    return Object.values(OZEMPIC_CONSTANTS.injuryTiers);
}

export function getDurationLevels() {
    return Object.entries(OZEMPIC_CONSTANTS.durationMultipliers).map(([id, data]) => ({
        id,
        label: data.label
    }));
}
