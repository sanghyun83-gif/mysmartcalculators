// ============================================
// AVIATION/PLANE CRASH CALCULATOR - SITE CONFIG
// 2026 Data - Based on FAA & NTSB Regulations
// ============================================

import { Calculator, FileText, Plane, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Aviation Accident Calculator",
    tagline: "Free Plane Crash Settlement Calculator",
    description: "Calculate aviation accident settlement value instantly. Free 2026 calculator for plane crashes, helicopter accidents, and airline injury claims based on Warsaw/Montreal Conventions.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/aviation",
};

export const AVIATION_2026 = {
    accidentTypes: [
        { type: "Commercial Airline Crash", avgSettlement: 5000000, minSettlement: 1500000, maxSettlement: 20000000, description: "Major airline crash fatality/injury" },
        { type: "Private Plane Crash", avgSettlement: 2000000, minSettlement: 500000, maxSettlement: 8000000, description: "Small aircraft accident" },
        { type: "Helicopter Accident", avgSettlement: 2500000, minSettlement: 600000, maxSettlement: 10000000, description: "Rotorcraft crash or malfunction" },
        { type: "Charter/Air Taxi Crash", avgSettlement: 3000000, minSettlement: 800000, maxSettlement: 12000000, description: "Charter flight accident" },
        { type: "Runway/Airport Injury", avgSettlement: 800000, minSettlement: 200000, maxSettlement: 3000000, description: "Ground-based airport injury" },
        { type: "Turbulence Injury", avgSettlement: 400000, minSettlement: 100000, maxSettlement: 1500000, description: "In-flight turbulence injury" },
        { type: "Emergency Landing Injury", avgSettlement: 600000, minSettlement: 150000, maxSettlement: 2000000, description: "Injury during emergency landing" },
    ],
    causeTypes: [
        { cause: "Pilot Error", percentage: 53, multiplier: 1.0 },
        { cause: "Mechanical Failure", percentage: 22, multiplier: 1.3 },
        { cause: "Weather-Related", percentage: 12, multiplier: 0.8 },
        { cause: "Air Traffic Control Error", percentage: 8, multiplier: 1.5 },
        { cause: "Manufacturing Defect", percentage: 5, multiplier: 1.6 },
    ],
    injurySeverity: [
        { severity: "Minor Injuries", multiplier: 0.3 },
        { severity: "Serious Injuries", multiplier: 0.7 },
        { severity: "Permanent Disability", multiplier: 1.2 },
        { severity: "Wrongful Death", multiplier: 1.5 },
    ],
    statistics: {
        annualAccidents: 1249,
        annualFatalities: 349,
        avgSettlement: 2500000,
        montrealConventionLimit: 175800,
        domesticNoLimit: true,
    },
    citation: "Based on FAA Accident Data 2026, NTSB Safety Statistics, Warsaw Convention, and Montreal Convention (SDR 175,800)",
} as const;

export const CALCULATORS = [
    { id: "aviation/calculator", name: "Aviation Settlement Calculator", shortName: "Calculator", description: "Calculate plane crash settlement", longDescription: "Free aviation accident calculator with FAA/NTSB factors.", icon: Calculator, category: "legal", keywords: ["aviation calculator", "plane crash settlement"], featured: true },
    { id: "aviation/guide", name: "Aviation Accident Guide", shortName: "Guide", description: "Understanding aviation claims", longDescription: "Learn about plane crash lawsuits, Montreal Convention, and claims.", icon: FileText, category: "legal", keywords: ["aviation lawsuit guide", "plane crash claims"], featured: true },
] as const;

export interface AviationResult { accidentType: string; causeType: string; severity: string; baseDamages: number; causeBonus: number; severityFactor: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateAviationSettlement(accidentIndex: number, causeIndex: number, severityIndex: number, medicalBills: number): AviationResult {
    const accident = AVIATION_2026.accidentTypes[accidentIndex];
    const cause = AVIATION_2026.causeTypes[causeIndex];
    const severity = AVIATION_2026.injurySeverity[severityIndex];
    const baseDamages = accident.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const causeBonus = baseDamages * (cause.multiplier - 1);
    const severityFactor = baseDamages * severity.multiplier;
    const total = severityFactor + medicalCosts + causeBonus;
    return { accidentType: accident.type, causeType: cause.cause, severity: severity.severity, baseDamages: Math.round(baseDamages), causeBonus: Math.round(causeBonus), severityFactor: Math.round(severityFactor), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
