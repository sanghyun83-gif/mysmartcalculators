// ============================================
// LEMON LAW CALCULATOR - SITE CONFIG
// 2026 Data - Defective Vehicle Claims
// ============================================

import { Calculator, Car, MapPin, Scale } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Lemon Law Calculator",
    tagline: "Free Defective Vehicle Claim Estimator",
    description: "Calculate your lemon law claim value. Free 2026 calculator for defective cars - buyback, replacement, and cash refund estimates.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/lemon-law",
};

// ============================================
// 2026 LEMON LAW CONSTANTS
// Sources: State lemon laws, NHTSA data
// ============================================
export const LEMON_CONSTANTS_2026 = {
    // Typical Repair Attempt Thresholds
    repairAttempts: {
        sameIssue: 4,      // Same problem fixed 4+ times
        safetyIssue: 2,    // Safety defect: 2 attempts
        daysOutOfService: 30,  // 30+ days in shop
    },

    // Mileage Offset Calculation
    // Formula: (miles at first repair / 120,000) × purchase price
    mileageOffset: {
        divisor: 120000,  // Standard divisor for most states
    },

    // Attorney Fees (manufacturer pays if you win)
    attorneyFees: {
        manufacturerPays: true,
        typicalFee: 0,  // Usually $0 to consumer
    },

    // Common Remedies
    remedies: {
        buyback: "Full refund minus mileage offset",
        replacement: "New vehicle of equal value",
        cashSettlement: "Lump sum payment",
    },

    // Statistics
    statistics: {
        avgClaimValue: 32000,
        successRate: 85,
        avgProcessingWeeks: 12,
        casesFiled: 150000,
    },
} as const;

// ============================================
// STATE LEMON LAWS (Major States)
// ============================================
export const STATE_LEMON = {
    california: {
        name: "California",
        abbr: "CA",
        warrantyPeriod: "18 months or 18,000 miles",
        repairAttempts: 4,
        daysOutOfService: 30,
        arbitration: "Optional (CAP)",
        strength: "Strong",
        notes: "Song-Beverly Consumer Warranty Act. Includes used vehicles.",
    },
    texas: {
        name: "Texas",
        abbr: "TX",
        warrantyPeriod: "24 months or 24,000 miles",
        repairAttempts: 4,
        daysOutOfService: 30,
        arbitration: "Required (MVRA)",
        strength: "Moderate",
        notes: "Must give manufacturer final repair attempt. Arbitration required first.",
    },
    florida: {
        name: "Florida",
        abbr: "FL",
        warrantyPeriod: "24 months",
        repairAttempts: 3,
        daysOutOfService: 30,
        arbitration: "Required",
        strength: "Moderate",
        notes: "Motor Vehicle Warranty Enforcement Act. Arbitration required.",
    },
    newyork: {
        name: "New York",
        abbr: "NY",
        warrantyPeriod: "24 months or 18,000 miles",
        repairAttempts: 4,
        daysOutOfService: 30,
        arbitration: "Optional",
        strength: "Strong",
        notes: "Covers purchase and lease. Used cars included with limits.",
    },
    pennsylvania: {
        name: "Pennsylvania",
        abbr: "PA",
        warrantyPeriod: "12 months or 12,000 miles",
        repairAttempts: 3,
        daysOutOfService: 30,
        arbitration: "Available",
        strength: "Moderate",
        notes: "Automobile Lemon Law. Shorter coverage than many states.",
    },
    illinois: {
        name: "Illinois",
        abbr: "IL",
        warrantyPeriod: "12 months or 12,000 miles",
        repairAttempts: 4,
        daysOutOfService: 30,
        arbitration: "Available",
        strength: "Moderate",
        notes: "New Vehicle Buyer Protection Act.",
    },
    ohio: {
        name: "Ohio",
        abbr: "OH",
        warrantyPeriod: "12 months or 18,000 miles",
        repairAttempts: 3,
        daysOutOfService: 30,
        arbitration: "Available",
        strength: "Moderate",
        notes: "Covers new vehicles only. Written notice required.",
    },
    newjersey: {
        name: "New Jersey",
        abbr: "NJ",
        warrantyPeriod: "24 months or 24,000 miles",
        repairAttempts: 3,
        daysOutOfService: 20,
        arbitration: "Available",
        strength: "Strong",
        notes: "Lemon Law Unit at Division of Consumer Affairs.",
    },
} as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "lemon-law/lemon-calculator",
        name: "Lemon Law Calculator",
        shortName: "Calculator",
        description: "Calculate your lemon law claim value",
        longDescription: "Free 2026 lemon law calculator. Estimate your buyback refund, replacement value, or cash settlement for defective vehicles.",
        icon: Calculator,
        category: "legal",
        keywords: ["lemon law calculator", "defective car claim", "lemon buyback"],
        featured: true,
    },
    {
        id: "lemon-law/state-laws",
        name: "Lemon Laws by State",
        shortName: "State Laws",
        description: "Compare lemon law protections by state",
        longDescription: "State-by-state lemon law comparison. Find repair attempt limits, warranty periods, and arbitration requirements.",
        icon: MapPin,
        category: "legal",
        keywords: ["california lemon law", "texas lemon law", "state lemon laws"],
        featured: true,
    },
] as const;

// ============================================
// LEMON LAW CLAIM CALCULATION
// ============================================
export interface LemonResult {
    purchasePrice: number;
    milesAtFirstRepair: number;
    mileageOffset: number;
    estimatedRefund: number;
    repairAttempts: number;
    daysInShop: number;
    qualifies: boolean;
    qualifyReason: string;
    state: string;
    remedy: string;
}

export function calculateLemonClaim(
    purchasePrice: number,
    milesAtFirstRepair: number,
    repairAttempts: number,
    daysInShop: number,
    state: keyof typeof STATE_LEMON,
    isSafetyIssue: boolean = false
): LemonResult {
    const stateData = STATE_LEMON[state];

    // Calculate mileage offset
    const mileageOffset = Math.round(
        (milesAtFirstRepair / LEMON_CONSTANTS_2026.mileageOffset.divisor) * purchasePrice
    );

    // Estimated refund (buyback minus offset)
    const estimatedRefund = Math.max(0, purchasePrice - mileageOffset);

    // Check if qualifies
    let qualifies = false;
    let qualifyReason = "";

    const minAttempts = isSafetyIssue ? 2 : stateData.repairAttempts;

    if (repairAttempts >= minAttempts) {
        qualifies = true;
        qualifyReason = `✓ ${repairAttempts} repair attempts meets ${stateData.name} threshold of ${minAttempts}`;
    } else if (daysInShop >= stateData.daysOutOfService) {
        qualifies = true;
        qualifyReason = `✓ ${daysInShop} days out of service exceeds ${stateData.daysOutOfService}-day limit`;
    } else {
        qualifyReason = `✗ Need ${minAttempts - repairAttempts} more repairs OR ${stateData.daysOutOfService - daysInShop} more days in shop`;
    }

    return {
        purchasePrice,
        milesAtFirstRepair,
        mileageOffset,
        estimatedRefund,
        repairAttempts,
        daysInShop,
        qualifies,
        qualifyReason,
        state: stateData.name,
        remedy: qualifies ? "Buyback or Replacement" : "Not Yet Eligible",
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
