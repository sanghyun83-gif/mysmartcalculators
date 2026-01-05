// ============================================
// CRANE INJURY CALCULATOR - SITE CONFIG (Advanced Version)
// 2026 Data - Based on OSHA/BLS Construction Statistics
// ============================================

import { Calculator, FileText, AlertTriangle, Shield, Construction } from 'lucide-react';

export const SITE = {
    name: "Crane Injury Calculator",
    tagline: "Free Crane Accident Settlement Calculator",
    description: "Calculate crane injury lawsuit settlement value instantly. Free 2026 calculator for crane collapse, struck-by, and construction accident claims. OSHA violation multipliers.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/crane",
};

export const CRANE_2026 = {
    accidentTypes: [
        { type: "Crane Collapse/Tip-Over", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, fatalityRate: 45, description: "Complete structural failure or overturning" },
        { type: "Struck-By Falling Load", avgSettlement: 800000, minSettlement: 300000, maxSettlement: 2500000, fatalityRate: 25, description: "Worker struck by dropped materials" },
        { type: "Electrocution (Power Lines)", avgSettlement: 1200000, minSettlement: 400000, maxSettlement: 4000000, fatalityRate: 60, description: "Contact with overhead electrical lines" },
        { type: "Caught-In/Between", avgSettlement: 700000, minSettlement: 250000, maxSettlement: 2000000, fatalityRate: 20, description: "Crushed by crane components" },
        { type: "Fall From Crane", avgSettlement: 900000, minSettlement: 350000, maxSettlement: 3000000, fatalityRate: 35, description: "Operator/rigger fall from height" },
        { type: "Boom/Cable Failure", avgSettlement: 1000000, minSettlement: 400000, maxSettlement: 3500000, fatalityRate: 30, description: "Mechanical failure of boom or cables" },
        { type: "Rigging Failure", avgSettlement: 600000, minSettlement: 200000, maxSettlement: 1800000, fatalityRate: 15, description: "Improper rigging causing load release" },
        { type: "Counterweight Strike", avgSettlement: 550000, minSettlement: 180000, maxSettlement: 1500000, fatalityRate: 20, description: "Struck by swinging counterweight" },
    ],
    oshaViolations: [
        { violation: "No OSHA Violations", multiplier: 1.0, description: "Standard negligence claim" },
        { violation: "Serious Violation (§1926.1400)", multiplier: 1.3, description: "Crane operation without proper certification" },
        { violation: "Willful Violation", multiplier: 1.8, description: "Employer knowingly violated safety rules" },
        { violation: "Repeat Violation", multiplier: 1.5, description: "Previous similar violations on record" },
        { violation: "Multiple Violations", multiplier: 2.0, description: "Several OSHA violations combined" },
        { violation: "Criminal Negligence", multiplier: 2.5, description: "Egregious disregard for worker safety" },
    ],
    craneTypes: [
        { type: "Tower Crane", avgValue: 1.2, commonIn: "High-rise construction" },
        { type: "Mobile Crane", avgValue: 1.0, commonIn: "General construction" },
        { type: "Crawler Crane", avgValue: 1.1, commonIn: "Heavy industrial" },
        { type: "Overhead/Gantry Crane", avgValue: 0.9, commonIn: "Manufacturing/ports" },
        { type: "Telescopic Crane", avgValue: 1.0, commonIn: "Utility work" },
    ],
    injurySeverity: [
        { level: "Fatal", multiplier: 2.5, description: "Wrongful death claim" },
        { level: "Permanent Disability", multiplier: 2.0, description: "Paralysis, amputation, TBI" },
        { level: "Serious/Long-term", multiplier: 1.5, description: "Major fractures, surgery required" },
        { level: "Moderate", multiplier: 1.0, description: "Broken bones, hospitalization" },
        { level: "Minor", multiplier: 0.5, description: "Soft tissue, minor injuries" },
    ],
    statistics: {
        annualDeaths: 79,
        annualInjuries: 2500,
        avgSettlement: 850000,
        oshaFines2025: 15600000,
        topViolation: "Failure to conduct pre-lift inspection",
        deadliestType: "Electrocution",
    },
    liableParties: [
        "General Contractor",
        "Crane Operator's Employer",
        "Crane Owner/Rental Company",
        "Crane Manufacturer",
        "Site Owner/Developer",
        "Rigging Contractors",
    ],
    citation: "Based on OSHA 29 CFR 1926.1400-1442 Crane Standards, BLS Fatal Occupational Injuries 2026, and Construction Industry Litigation Data",
} as const;

export const CALCULATORS = [
    { id: "crane/calculator", name: "Crane Settlement Calculator", shortName: "Calculator", description: "Calculate crane accident settlement", icon: Calculator, keywords: ["crane injury calculator"], featured: true },
    { id: "crane/guide", name: "Crane Lawsuit Guide", shortName: "Guide", description: "Understanding crane accident claims", icon: FileText, keywords: ["crane lawsuit guide"], featured: true },
] as const;

export interface CraneResult { accidentType: string; oshaViolation: string; severity: string; baseDamages: number; oshaBonus: number; severityBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateCraneSettlement(accidentIndex: number, oshaIndex: number, severityIndex: number, medicalBills: number): CraneResult {
    const accident = CRANE_2026.accidentTypes[accidentIndex];
    const osha = CRANE_2026.oshaViolations[oshaIndex];
    const severity = CRANE_2026.injurySeverity[severityIndex];
    const baseDamages = accident.avgSettlement;
    const medicalCosts = medicalBills * 3;
    const oshaBonus = baseDamages * (osha.multiplier - 1);
    const severityBonus = baseDamages * (severity.multiplier - 1);
    const total = baseDamages + medicalCosts + oshaBonus + severityBonus;
    return { accidentType: accident.type, oshaViolation: osha.violation, severity: severity.level, baseDamages: Math.round(baseDamages), oshaBonus: Math.round(oshaBonus), severityBonus: Math.round(severityBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
