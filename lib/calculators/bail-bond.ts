// ============================================
// BAIL BOND CALCULATOR - SITE CONFIG
// 2026 Data - Bail & Bond Amounts
// ============================================

import { Calculator, Shield, MapPin, Scale } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Bail Bond Calculator",
    tagline: "Free Bail Cost Estimator",
    description: "Calculate your bail bond cost. Free 2026 calculator with state bail schedules, bond types, and premium rates.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/bail-bond",
};

// ============================================
// 2026 BAIL BOND CONSTANTS
// Sources: State bail schedules, bail bond industry data
// ============================================
export const BAIL_CONSTANTS_2026 = {
    // Standard Bond Premium Rates
    premiumRates: {
        standard: 0.10,      // 10% is standard nationwide
        california: 0.10,    // 10% (regulated)
        texas: 0.10,         // 10% typical
        florida: 0.10,       // 10% typical
        lowEnd: 0.08,        // Some states allow 8%
        highEnd: 0.15,       // Some can go to 15%
    },

    // Collateral Requirements
    collateral: {
        lowBail: 0,          // Under $5,000 often no collateral
        mediumBail: 0.10,    // 10% collateral for medium
        highBail: 0.20,      // 20%+ for high bail
    },

    // Common Bail Amounts by Crime Type
    bailByOffense: {
        misdemeanor: { min: 500, max: 5000, avg: 2500 },
        dui: { min: 5000, max: 25000, avg: 10000 },
        felony: { min: 20000, max: 100000, avg: 50000 },
        violentFelony: { min: 50000, max: 500000, avg: 150000 },
        drugFelony: { min: 25000, max: 250000, avg: 75000 },
        murder: { min: 500000, max: 2000000, avg: 1000000 },
    },

    // Statistics
    statistics: {
        avgBailAmount: 55000,
        avgPremiumPaid: 5500,
        jailPopAwaitingTrial: 470000,
        percentCantAffordBail: 74,
    },
} as const;

// ============================================
// STATE BAIL INFORMATION
// ============================================
export const STATE_BAIL = {
    california: {
        name: "California",
        abbr: "CA",
        premiumRate: 0.10,
        regulatedRate: true,
        avgBail: 50000,
        cashBailReform: "SB 10 passed but referendum pending",
        notes: "Bail schedules set by county. Major reform efforts underway.",
    },
    texas: {
        name: "Texas",
        abbr: "TX",
        premiumRate: 0.10,
        regulatedRate: false,
        avgBail: 45000,
        cashBailReform: "No major reform",
        notes: "Harris County has pretrial reform. Bail schedules vary by county.",
    },
    florida: {
        name: "Florida",
        abbr: "FL",
        premiumRate: 0.10,
        regulatedRate: false,
        avgBail: 40000,
        cashBailReform: "No major reform",
        notes: "Bail bondsmen widely available. Some counties use risk assessment.",
    },
    newyork: {
        name: "New York",
        abbr: "NY",
        premiumRate: 0.10,
        regulatedRate: true,
        avgBail: 60000,
        cashBailReform: "2020 bail reform eliminated cash bail for most misdemeanors",
        notes: "Major bail reform in 2020. Cash bail only for violent felonies.",
    },
    illinois: {
        name: "Illinois",
        abbr: "IL",
        premiumRate: 0.10,
        regulatedRate: true,
        avgBail: 35000,
        cashBailReform: "SAFE-T Act eliminated cash bail (2023)",
        notes: "First state to eliminate cash bail entirely. Uses pretrial detention hearings.",
    },
    newjersey: {
        name: "New Jersey",
        abbr: "NJ",
        premiumRate: 0.10,
        regulatedRate: true,
        avgBail: 50000,
        cashBailReform: "2017 bail reform - risk-based system",
        notes: "Near elimination of cash bail. Uses PSA risk assessment.",
    },
    georgia: {
        name: "Georgia",
        abbr: "GA",
        premiumRate: 0.12,
        regulatedRate: false,
        avgBail: 35000,
        cashBailReform: "No major reform",
        notes: "Traditional bail system. Premium rates can vary.",
    },
    arizona: {
        name: "Arizona",
        abbr: "AZ",
        premiumRate: 0.10,
        regulatedRate: false,
        avgBail: 30000,
        cashBailReform: "Prop 100 restricts release for some offenses",
        notes: "Cash bail remains. Some restrictions on certain offense releases.",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "bail-bond/bail-calculator",
        name: "Bail Bond Calculator",
        shortName: "Calculator",
        description: "Calculate your bail bond cost and premium",
        longDescription: "Free 2026 bail bond calculator. Estimate your bail premium, collateral requirements, and total cost to get out of jail.",
        icon: Calculator,
        category: "legal",
        keywords: ["bail bond calculator", "bail premium", "how much is bail"],
        featured: true,
    },
    {
        id: "bail-bond/state-bail",
        name: "Bail by State",
        shortName: "State Bail",
        description: "View bail amounts and laws by state",
        longDescription: "Compare bail amounts, premium rates, and bail reform status across all 50 states.",
        icon: MapPin,
        category: "legal",
        keywords: ["bail by state", "california bail", "state bail schedule"],
        featured: true,
    },
] as const;

// ============================================
// BAIL COST CALCULATION FUNCTION
// ============================================
export interface BailResult {
    bailAmount: number;
    premiumRate: number;
    bondPremium: number;
    estimatedCollateral: number;
    totalOutOfPocket: number;
    refundable: number;
    nonRefundable: number;
    offenseType: string;
    state: string;
}

export function calculateBailCost(
    bailAmount: number,
    offenseType: keyof typeof BAIL_CONSTANTS_2026.bailByOffense,
    state: keyof typeof STATE_BAIL,
    usesBondsman: boolean = true
): BailResult {
    const stateData = STATE_BAIL[state];
    const offenseData = BAIL_CONSTANTS_2026.bailByOffense[offenseType];

    const premiumRate = stateData.premiumRate;
    const bondPremium = usesBondsman ? Math.round(bailAmount * premiumRate) : 0;

    // Collateral calculation
    let collateralRate = 0;
    if (bailAmount > 50000) {
        collateralRate = BAIL_CONSTANTS_2026.collateral.highBail;
    } else if (bailAmount > 5000) {
        collateralRate = BAIL_CONSTANTS_2026.collateral.mediumBail;
    }
    const estimatedCollateral = Math.round(bailAmount * collateralRate);

    // Total out of pocket
    const totalOutOfPocket = usesBondsman ? bondPremium : bailAmount;
    const refundable = usesBondsman ? 0 : bailAmount;
    const nonRefundable = bondPremium;

    const offenseNames: Record<string, string> = {
        misdemeanor: "Misdemeanor",
        dui: "DUI/DWI",
        felony: "Felony",
        violentFelony: "Violent Felony",
        drugFelony: "Drug Felony",
        murder: "Murder/Homicide",
    };

    return {
        bailAmount,
        premiumRate,
        bondPremium,
        estimatedCollateral,
        totalOutOfPocket,
        refundable,
        nonRefundable,
        offenseType: offenseNames[offenseType],
        state: stateData.name,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    if (amount >= 1000000) {
        return `$${(amount / 1000000).toFixed(1)}M`;
    }
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
