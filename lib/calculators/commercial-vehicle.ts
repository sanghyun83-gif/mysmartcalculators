// ============================================
// COMMERCIAL VEHICLE ACCIDENT CALCULATOR
// 2026 Data - Based on FMCSA/DOT Statistics
// ============================================

import { Calculator, FileText, AlertTriangle, Truck } from 'lucide-react';

export const SITE = {
    name: "Commercial Vehicle Accident Calculator",
    tagline: "Free Commercial Truck Settlement Calculator",
    description: "Calculate commercial vehicle accident settlement value instantly. Free 2026 calculator for delivery truck, box truck, bus, and fleet vehicle accident claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/commercial-vehicle",
};

export const COMMERCIAL_2026 = {
    vehicleTypes: [
        { type: "Delivery Van (Amazon, FedEx, UPS)", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1200000, description: "Last-mile delivery vehicles" },
        { type: "Box Truck/Straight Truck", avgSettlement: 450000, minSettlement: 150000, maxSettlement: 1500000, description: "Medium-duty commercial trucks" },
        { type: "Commercial Bus/Shuttle", avgSettlement: 500000, minSettlement: 200000, maxSettlement: 2000000, description: "Passenger transport vehicles" },
        { type: "Dump Truck/Construction", avgSettlement: 550000, minSettlement: 200000, maxSettlement: 2500000, description: "Heavy construction vehicles" },
        { type: "Utility/Service Vehicle", avgSettlement: 300000, minSettlement: 80000, maxSettlement: 1000000, description: "Cable, electric, plumbing trucks" },
        { type: "Tow Truck/Wrecker", avgSettlement: 400000, minSettlement: 120000, maxSettlement: 1300000, description: "Recovery and towing vehicles" },
    ],
    injuryTypes: [
        { injury: "Wrongful Death", multiplier: 3.0, avgSettlement: 1500000 },
        { injury: "Traumatic Brain Injury", multiplier: 2.5, avgSettlement: 1200000 },
        { injury: "Spinal Cord/Paralysis", multiplier: 2.5, avgSettlement: 1100000 },
        { injury: "Multiple Fractures", multiplier: 1.5, avgSettlement: 500000 },
        { injury: "Soft Tissue/Whiplash", multiplier: 1.0, avgSettlement: 150000 },
    ],
    liabilityFactors: [
        { factor: "Driver Negligence Only", multiplier: 1.0 },
        { factor: "Company Negligent Hiring", multiplier: 1.4 },
        { factor: "Poor Vehicle Maintenance", multiplier: 1.3 },
        { factor: "FMCSA Hours Violation", multiplier: 1.5 },
        { factor: "Multiple Violations", multiplier: 1.8 },
    ],
    statistics: {
        annualCrashes: 523000,
        annualDeaths: 5700,
        annualInjuries: 155000,
        avgSettlement: 420000,
        amazonDeliveryAccidents: 18500,
    },
    citation: "Based on FMCSA Large Truck and Bus Crash Facts 2026, NHTSA Traffic Safety Data, and DOT Commercial Vehicle Regulations",
} as const;

export const CALCULATORS = [
    { id: "commercial-vehicle/vehicle-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate commercial vehicle settlement", icon: Calculator, keywords: ["commercial vehicle calculator"], featured: true },
    { id: "commercial-vehicle/vehicle-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding commercial vehicle claims", icon: FileText, keywords: ["commercial truck lawsuit"], featured: true },
] as const;

export interface VehicleResult { vehicleType: string; injuryType: string; liabilityFactor: string; baseDamages: number; injuryBonus: number; liabilityBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateVehicleSettlement(vehicleIndex: number, injuryIndex: number, liabilityIndex: number, medicalBills: number): VehicleResult {
    const vehicle = COMMERCIAL_2026.vehicleTypes[vehicleIndex];
    const injury = COMMERCIAL_2026.injuryTypes[injuryIndex];
    const liability = COMMERCIAL_2026.liabilityFactors[liabilityIndex];
    const baseDamages = vehicle.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const injuryBonus = baseDamages * (injury.multiplier - 1);
    const liabilityBonus = baseDamages * (liability.multiplier - 1);
    const total = baseDamages + medicalCosts + injuryBonus + liabilityBonus;
    return { vehicleType: vehicle.type, injuryType: injury.injury, liabilityFactor: liability.factor, baseDamages: Math.round(baseDamages), injuryBonus: Math.round(injuryBonus), liabilityBonus: Math.round(liabilityBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
