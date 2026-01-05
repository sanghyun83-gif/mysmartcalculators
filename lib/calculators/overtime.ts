// ============================================
// OVERTIME PAY CALCULATOR - SITE CONFIG
// 2026 Data - FLSA Overtime Rules
// ============================================

import { Calculator, Clock, FileText, DollarSign } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Overtime Pay Calculator",
    tagline: "Free FLSA Overtime Calculator",
    description: "Calculate your overtime pay. Free 2026 calculator for time and a half, double time, and weekly overtime.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/overtime",
};

// ============================================
// 2026 FLSA OVERTIME CONSTANTS
// Source: DOL, FLSA updates
// ============================================
export const OVERTIME_CONSTANTS_2026 = {
    // Federal Standards
    federal: {
        standardWorkweek: 40,
        overtimeMultiplier: 1.5,  // Time and a half
        federalMinWage: 7.25,
        salaryThreshold: 58656,  // 2026 projected ($1128/week)
    },

    // California (most employee-friendly)
    california: {
        dailyOvertimeStart: 8,  // After 8 hours/day
        dailyDoubleTimeStart: 12,  // After 12 hours/day
        seventhDayOT: true,  // 7th consecutive day is OT
        doubleTimeMultiplier: 2.0,
    },

    // Common OT Types
    overtimeTypes: {
        timeAndHalf: { multiplier: 1.5, name: "Time and a Half", description: "50% more than regular rate" },
        doubleTime: { multiplier: 2.0, name: "Double Time", description: "Twice the regular rate" },
        tripleTime: { multiplier: 3.0, name: "Triple Time", description: "Three times regular rate (rare)" },
    },

    // Statistics
    statistics: {
        workersEligible: 56,  // 56% of workers eligible for OT
        avgOvertimeHours: 4.5,  // per week for those who work OT
        unpaidOTannually: 15000000000,  // $15 billion in wage theft
        misclassifiedWorkers: 10,  // % wrongly classified as exempt
    },
} as const;

// ============================================
// EXEMPT VS NON-EXEMPT CATEGORIES
// ============================================
export const EXEMPTION_CATEGORIES = [
    { name: "Executive", description: "Manages team of 2+, hiring/firing authority", exempt: true },
    { name: "Administrative", description: "Office work, exercises independent judgment", exempt: true },
    { name: "Professional", description: "Advanced knowledge, creative, learned", exempt: true },
    { name: "Computer", description: "Systems analyst, programmer, $27.63+/hr", exempt: true },
    { name: "Outside Sales", description: "Makes sales away from employer's place", exempt: true },
    { name: "Hourly Worker", description: "Paid by the hour, not salaried", exempt: false },
    { name: "Salaried Under Threshold", description: `Salary < $${OVERTIME_CONSTANTS_2026.federal.salaryThreshold.toLocaleString()}/year`, exempt: false },
] as const;

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "overtime/calculator",
        name: "Overtime Pay Calculator",
        shortName: "Calculator",
        description: "Calculate your overtime earnings",
        longDescription: "Free 2026 overtime calculator. Calculate time and a half, double time, and weekly overtime pay.",
        icon: Calculator,
        category: "finance",
        keywords: ["overtime calculator", "time and a half", "ot pay calculator"],
        featured: true,
    },
    {
        id: "overtime/flsa-guide",
        name: "FLSA Overtime Guide",
        shortName: "FLSA Guide",
        description: "Who qualifies for overtime?",
        longDescription: "Understand FLSA overtime rules. Learn if you're exempt or non-exempt and your rights.",
        icon: FileText,
        category: "finance",
        keywords: ["flsa overtime", "exempt vs non-exempt", "overtime eligibility"],
        featured: true,
    },
] as const;

// ============================================
// OVERTIME CALCULATION
// ============================================
export interface OvertimeResult {
    regularPay: number;
    regularHours: number;
    overtimeHours: number;
    overtimePay: number;
    doubleTimeHours: number;
    doubleTimePay: number;
    totalPay: number;
    effectiveHourlyRate: number;
    hourlyRate: number;
    overtimeMultiplier: number;
}

export function calculateOvertime(
    hourlyRate: number,
    totalHours: number,
    regularHoursLimit: number = 40,
    overtimeMultiplier: number = 1.5,
    doubleTimeHours: number = 0,
    doubleTimeMultiplier: number = 2.0
): OvertimeResult {
    // Regular hours (up to limit)
    const regularHours = Math.min(totalHours, regularHoursLimit);
    const regularPay = regularHours * hourlyRate;

    // Overtime hours
    const rawOvertimeHours = Math.max(0, totalHours - regularHoursLimit - doubleTimeHours);
    const overtimeHours = rawOvertimeHours;
    const overtimePay = overtimeHours * hourlyRate * overtimeMultiplier;

    // Double time
    const doubleTimePay = doubleTimeHours * hourlyRate * doubleTimeMultiplier;

    // Totals
    const totalPay = regularPay + overtimePay + doubleTimePay;
    const effectiveHourlyRate = totalHours > 0 ? totalPay / totalHours : hourlyRate;

    return {
        regularPay: Math.round(regularPay * 100) / 100,
        regularHours,
        overtimeHours,
        overtimePay: Math.round(overtimePay * 100) / 100,
        doubleTimeHours,
        doubleTimePay: Math.round(doubleTimePay * 100) / 100,
        totalPay: Math.round(totalPay * 100) / 100,
        effectiveHourlyRate: Math.round(effectiveHourlyRate * 100) / 100,
        hourlyRate,
        overtimeMultiplier,
    };
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
}

export function parseFormattedNumber(value: string): number {
    return parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
}
