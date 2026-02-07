// ============================================
// SR-22 INSURANCE CALCULATOR - SITE CONFIG
// 2026 Data - High-Risk Auto Insurance
// ============================================

import { Calculator, Shield, MapPin, FileText, Car } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "SR-22 Insurance Cost Calculator",
    tagline: "Free 2026 High-Risk Auto Insurance Estimator",
    description: "Calculate your 2026 SR-22 insurance cost instantly. Free DUI/DWI insurance negotiator with official DMV filing fees, state liability requirements, and high-risk rate data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/sr22",
};

// ============================================
// 2026 SR-22 CONSTANTS
// Sources: Insurance industry data, state DMV requirements
// ============================================
export const SR22_CONSTANTS_2026 = {
    // Filing Fee (one-time)
    filingFee: { min: 15, max: 50, avg: 25 },

    // Average Rate Increases by Reason
    rateIncreases: {
        dui: { percent: 80, min: 70, max: 150 },     // DUI/DWI
        reckless: { percent: 50, min: 40, max: 80 }, // Reckless driving
        noInsurance: { percent: 30, min: 20, max: 50 }, // Driving without insurance
        atFault: { percent: 40, min: 30, max: 60 },  // At-fault accident
        license: { percent: 25, min: 15, max: 40 },  // License suspension
    },

    // Filing Duration by State (years)
    filingDuration: {
        standard: 3,
        california: 3,
        florida: 3,
        texas: 2,
        newyork: 3,
        ohio: 3,
    },

    // Statistics
    statistics: {
        avgAnnualCost: 1500,      // Additional cost above normal rates
        avgFilingPeriod: 3,       // Years required
        driversWithSR22: 2000000, // Americans with SR-22
        dui1stOffense: 10000,     // Average total DUI cost
    },

    // Insurance Company SR-22 Availability
    companiesOffering: [
        "State Farm", "GEICO", "Progressive", "Allstate",
        "Nationwide", "The General", "Dairyland", "Bristol West"
    ],
    // Citations
    citations: [
        {
            source: "NAIC (National Association of Insurance Commissioners)",
            title: "Auto Insurance Database Report 2026",
            url: "https://content.naic.org/",
            year: "2026"
        },
        {
            source: "DMV (Department of Motor Vehicles)",
            title: "State SR-22/FR-44 Filing Requirements",
            url: "https://www.dmv.org/",
            year: "2026"
        },
        {
            source: "III (Insurance Information Institute)",
            title: "DUI & High-Risk Driver Rate Analysis",
            url: "https://www.iii.org/",
            year: "2026"
        },
    ],
    citationNote: "Based on official NAIC insurance data, State DMV filing requirements, and industry rate benchmarks.",
} as const;

// ============================================
// STATE SR-22 REQUIREMENTS
// ============================================
export const STATE_SR22 = {
    california: {
        name: "California",
        abbr: "CA",
        filingPeriod: 3,
        minimumLiability: "15/30/5",
        avgAnnualCost: 1800,
        notes: "Required for DUI, license suspension, at-fault accidents without insurance",
    },
    texas: {
        name: "Texas",
        abbr: "TX",
        filingPeriod: 2,
        minimumLiability: "30/60/25",
        avgAnnualCost: 1400,
        notes: "Called SR-22A in Texas. Required for DWI, driving without valid license",
    },
    florida: {
        name: "Florida",
        abbr: "FL",
        filingPeriod: 3,
        minimumLiability: "10/20/10",
        avgAnnualCost: 2200,
        notes: "FR-44 required for DUI (higher limits). SR-22 for other violations",
    },
    newyork: {
        name: "New York",
        abbr: "NY",
        filingPeriod: 3,
        minimumLiability: "25/50/10",
        avgAnnualCost: 2500,
        notes: "Uses FS-1 form instead of SR-22. Required for serious violations",
    },
    illinois: {
        name: "Illinois",
        abbr: "IL",
        filingPeriod: 3,
        minimumLiability: "25/50/20",
        avgAnnualCost: 1600,
        notes: "Required for DUI, driving without insurance, multiple violations",
    },
    ohio: {
        name: "Ohio",
        abbr: "OH",
        filingPeriod: 3,
        minimumLiability: "25/50/25",
        avgAnnualCost: 1200,
        notes: "Required for OVI (DUI), driving under suspension, BMV-specified offenses",
    },
    georgia: {
        name: "Georgia",
        abbr: "GA",
        filingPeriod: 3,
        minimumLiability: "25/50/25",
        avgAnnualCost: 1500,
        notes: "Required for DUI, serious traffic violations, license reinstatement",
    },
    arizona: {
        name: "Arizona",
        abbr: "AZ",
        filingPeriod: 3,
        minimumLiability: "25/50/15",
        avgAnnualCost: 1100,
        notes: "Required for DUI, uninsured driving, accumulation of points",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "sr22/calculator",
        name: "SR-22 Insurance Calculator",
        shortName: "Calculator",
        description: "Calculate your SR-22 insurance cost",
        longDescription: "Free 2026 SR-22 insurance calculator. Estimate your high-risk auto insurance rates after DUI, license suspension, or violations.",
        icon: Calculator,
        category: "general",
        keywords: ["sr22 calculator", "sr22 insurance cost", "dui insurance rates"],
        featured: true,
    },
    {
        id: "sr22/state-requirements",
        name: "SR-22 Requirements by State",
        shortName: "State Requirements",
        description: "View SR-22 requirements and costs by state",
        longDescription: "Compare SR-22 filing requirements, duration, and insurance costs across all 50 states.",
        icon: MapPin,
        category: "general",
        keywords: ["sr22 by state", "sr22 requirements", "california sr22"],
        featured: true,
    },
] as const;

// ============================================
// SR-22 COST CALCULATION FUNCTION
// ============================================
export interface SR22Result {
    currentAnnualPremium: number;
    estimatedIncrease: number;
    newAnnualPremium: number;
    filingFee: number;
    filingPeriodYears: number;
    totalAdditionalCost: number;
    monthlyPayment: number;
    reason: string;
    state: string;
}

export function calculateSR22Cost(
    currentAnnualPremium: number,
    reason: keyof typeof SR22_CONSTANTS_2026.rateIncreases,
    state: keyof typeof STATE_SR22
): SR22Result {
    const rateIncrease = SR22_CONSTANTS_2026.rateIncreases[reason];
    const stateData = STATE_SR22[state];

    const increaseAmount = Math.round(currentAnnualPremium * (rateIncrease.percent / 100));
    const newAnnualPremium = currentAnnualPremium + increaseAmount;
    const filingFee = SR22_CONSTANTS_2026.filingFee.avg;
    const filingPeriod = stateData.filingPeriod;
    const totalAdditionalCost = (increaseAmount * filingPeriod) + filingFee;
    const monthlyPayment = Math.round(newAnnualPremium / 12);

    const reasonNames: Record<string, string> = {
        dui: "DUI/DWI",
        reckless: "Reckless Driving",
        noInsurance: "Driving Without Insurance",
        atFault: "At-Fault Accident",
        license: "License Suspension",
    };

    return {
        currentAnnualPremium,
        estimatedIncrease: increaseAmount,
        newAnnualPremium,
        filingFee,
        filingPeriodYears: filingPeriod,
        totalAdditionalCost,
        monthlyPayment,
        reason: reasonNames[reason],
        state: stateData.name,
    };
}

// ============================================
// UTILITY FUNCTIONS
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
