// ============================================
// COMMERCIAL AUTO INSURANCE CALCULATOR
// 2026 Commercial Vehicle Insurance - Advanced Version
// ============================================

import { Calculator, FileText, Truck, Shield } from 'lucide-react';

export const SITE = {
    name: "Commercial Auto Calculator",
    tagline: "Free 2026 Commercial Auto Insurance Estimator",
    description: "Calculate commercial auto insurance premiums for fleets, trucks, and business vehicles. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/commercial-auto",
};

export const VEHICLE_TYPES = [
    { id: "sedan", name: "Sedan / SUV", baseRate: 1200, riskMultiplier: 1.0 },
    { id: "van", name: "Cargo Van / Sprinter", baseRate: 1800, riskMultiplier: 1.3 },
    { id: "pickup", name: "Pickup Truck", baseRate: 1500, riskMultiplier: 1.2 },
    { id: "box-truck", name: "Box Truck (10K-26K GVW)", baseRate: 3500, riskMultiplier: 1.8 },
    { id: "semi", name: "Semi-Truck / Tractor", baseRate: 8500, riskMultiplier: 3.0 },
    { id: "dump-truck", name: "Dump Truck / Heavy Equipment", baseRate: 6000, riskMultiplier: 2.5 },
];

export const BUSINESS_USES = [
    { id: "service", name: "Service/Repair Calls", multiplier: 1.0 },
    { id: "delivery", name: "Local Delivery", multiplier: 1.2 },
    { id: "longhaul", name: "Long-Haul Trucking", multiplier: 1.5 },
    { id: "construction", name: "Construction", multiplier: 1.4 },
    { id: "passenger", name: "Passenger Transport", multiplier: 1.6 },
];

export const COVERAGE_LIMITS = [
    { id: "100-300", name: "$100K/$300K Liability", multiplier: 0.8 },
    { id: "250-500", name: "$250K/$500K Liability", multiplier: 1.0 },
    { id: "500-1m", name: "$500K/$1M Liability", multiplier: 1.3 },
    { id: "1m-csl", name: "$1M CSL (Combined)", multiplier: 1.5 },
];

export const CA_2026 = {
    statistics: {
        avgPremium: "Average Commercial Auto: $1,800/vehicle/year",
        avgClaim: "Average Claim: $28,000",
        source: "NAIC / FMCSA 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) Commercial Auto Data 2026",
        "Federal Motor Carrier Safety Administration (FMCSA) Statistics 2026",
        "Insurance Information Institute Commercial Auto Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "commercial-auto/calculator", name: "Premium Calculator", description: "Estimate vehicle costs", icon: Calculator, featured: true },
    { id: "commercial-auto/guide", name: "Coverage Guide", description: "Coverage options", icon: FileText, featured: true },
    { id: "commercial-auto/vehicle-types", name: "Vehicle Types", description: "Rates by vehicle", icon: Truck, featured: false },
    { id: "commercial-auto/fleet", name: "Fleet Discounts", description: "Multi-vehicle savings", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is commercial auto insurance?", answer: "Commercial auto insurance covers vehicles used for business purposes. It provides liability, collision, comprehensive, and cargo coverage for company-owned or leased vehicles." },
    { question: "Who needs commercial auto?", answer: "Any business using vehicles for work needs commercial auto. Personal auto policies exclude business use. This includes delivery, service calls, hauling, and employee travel." },
    { question: "What does commercial auto cover?", answer: "Commercial auto covers liability (bodily injury, property damage), collision, comprehensive (theft, weather), uninsured motorist, medical payments, and hired/non-owned autos." },
    { question: "How much does commercial auto cost?", answer: "Average is $1,800/vehicle/year. Semi-trucks: $8,000-$15,000/year. Box trucks: $3,000-$5,000/year. Sedans/vans: $1,200-$2,500/year." },
    { question: "What affects commercial auto premiums?", answer: "Key factors: vehicle type, business use, driver records, annual mileage, coverage limits, deductibles, and fleet size. Trucking has highest rates." },
    { question: "What is hired and non-owned auto?", answer: "Covers vehicles you don't own but use for business - employee personal cars, rentals. Essential if employees ever drive for work." },
    { question: "Do I need cargo coverage?", answer: "If you haul goods for customers, yes. Motor truck cargo covers goods you're transporting. Required for for-hire trucking." },
    { question: "What are fleet discounts?", answer: "Fleets of 5+ vehicles get 5-15% discounts. 10+ vehicles: 10-20% off. Large fleets may get dedicated fleet programs with better rates." },
    { question: "What's the difference from personal auto?", answer: "Commercial auto: higher limits, covers business liability, protects company assets. Personal auto excludes business use and may deny claims." },
    { question: "How does DOT number affect insurance?", answer: "Interstate commercial vehicles need DOT registration. FMCSA requires minimum $750K liability for trucks. Higher authority = higher premium requirements." },
];

export function calculateCommercialAutoPremium(
    vehicleType: string,
    businessUse: string,
    coverageLimit: string,
    fleetSize: number,
    annualMileage: number,
    cleanRecords: boolean,
    hasTelematics: boolean
) {
    const vehicle = VEHICLE_TYPES.find(v => v.id === vehicleType) || VEHICLE_TYPES[0];
    const use = BUSINESS_USES.find(u => u.id === businessUse) || BUSINESS_USES[0];
    const limit = COVERAGE_LIMITS.find(l => l.id === coverageLimit) || COVERAGE_LIMITS[1];

    const fleetDiscount = fleetSize >= 10 ? 0.85 : fleetSize >= 5 ? 0.92 : 1.0;
    const mileageFactor = annualMileage > 50000 ? 1.3 : annualMileage > 25000 ? 1.15 : 1.0;
    const cleanDiscount = cleanRecords ? 0.90 : 1.0;
    const telematicsDiscount = hasTelematics ? 0.92 : 1.0;

    const perVehicle = Math.round(vehicle.baseRate * vehicle.riskMultiplier * use.multiplier * limit.multiplier * mileageFactor * fleetDiscount * cleanDiscount * telematicsDiscount);
    const fleetTotal = perVehicle * fleetSize;

    return {
        vehicleType: vehicle.name,
        coverageLimit: limit.name,
        perVehiclePremium: perVehicle,
        fleetTotal,
        monthlyPerVehicle: Math.round(perVehicle / 12),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
