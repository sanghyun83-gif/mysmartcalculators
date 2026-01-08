// ============================================
// FLEET INSURANCE CALCULATOR
// 2026 Fleet Management Insurance - Standard Version
// ============================================

import { Calculator, FileText, Truck } from 'lucide-react';

export const SITE = {
    name: "Fleet Insurance Calculator",
    tagline: "Free 2026 Fleet Insurance Estimator",
    description: "Calculate fleet insurance premiums for multi-vehicle businesses. Bulk discounts for 5+ vehicle fleets. Based on 2026 NAIC data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/fleet-insurance",
};

export const FLEET_SIZES = [
    { id: "5-9", name: "5-9 Vehicles", baseRate: 1600, discount: 0.08 },
    { id: "10-24", name: "10-24 Vehicles", baseRate: 1450, discount: 0.12 },
    { id: "25-49", name: "25-49 Vehicles", baseRate: 1300, discount: 0.18 },
    { id: "50-99", name: "50-99 Vehicles", baseRate: 1150, discount: 0.22 },
    { id: "100+", name: "100+ Vehicles", baseRate: 1000, discount: 0.28 },
];

export const FLEET_TYPES = [
    { id: "mixed", name: "Mixed Fleet (Cars/Vans)", multiplier: 1.0 },
    { id: "delivery", name: "Delivery / Service", multiplier: 1.15 },
    { id: "trucking", name: "Trucking / Heavy", multiplier: 1.5 },
];

export const FLEET_2026 = {
    statistics: {
        avgPremium: "Average Fleet: $1,400/vehicle/year",
        avgSavings: "Fleet Discount: Up to 28%",
        source: "NAIC / III 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) Fleet Data 2026",
        "Insurance Information Institute Fleet Insurance Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "fleet-insurance/calculator", name: "Premium Calculator", description: "Estimate fleet costs", icon: Calculator, featured: true },
    { id: "fleet-insurance/guide", name: "Discount Guide", description: "Fleet savings tiers", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is fleet insurance?", answer: "Fleet insurance covers multiple business vehicles under one policy. Fleets of 5+ vehicles qualify for bulk discounts and simplified management." },
    { question: "How many vehicles for fleet?", answer: "Most insurers require 5+ vehicles for fleet programs. Some start at 3. Larger fleets (25+, 50+, 100+) get progressively better discounts." },
    { question: "What discounts are available?", answer: "Fleet discounts range from 8% (5-9 vehicles) to 28%+ (100+ vehicles). Additional savings: telematics, safety programs, claims-free history." },
    { question: "What affects fleet premiums?", answer: "Key factors: fleet size, vehicle types, driver records, annual mileage, business use, coverage limits, and claims history." },
    { question: "What's included in fleet insurance?", answer: "Fleet policies include liability, collision, comprehensive, hired/non-owned auto, and can add cargo, roadside assistance, and rental reimbursement." },
];

export function calculateFleetPremium(
    fleetSize: string,
    fleetType: string,
    vehicleCount: number,
    hasTelematics: boolean,
    hasSafetyProgram: boolean
) {
    const size = FLEET_SIZES.find(s => s.id === fleetSize) || FLEET_SIZES[0];
    const type = FLEET_TYPES.find(t => t.id === fleetType) || FLEET_TYPES[0];

    const telematicsDiscount = hasTelematics ? 0.92 : 1.0;
    const safetyDiscount = hasSafetyProgram ? 0.95 : 1.0;

    const perVehicle = Math.round(size.baseRate * type.multiplier * telematicsDiscount * safetyDiscount);
    const fleetTotal = perVehicle * vehicleCount;
    const annualSavings = Math.round(vehicleCount * 1800 * size.discount);

    return {
        fleetSize: size.name,
        fleetType: type.name,
        perVehiclePremium: perVehicle,
        fleetTotal,
        monthlyTotal: Math.round(fleetTotal / 12),
        discountPercent: Math.round(size.discount * 100),
        annualSavings,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
