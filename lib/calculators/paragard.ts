// ============================================
// PARAGARD IUD CALCULATOR - ENHANCED VERSION
// 2026 Data - Bellwether Trial January 2026
// ============================================

import { Calculator, FileText, Shield, AlertTriangle, Scale, CheckCircle } from 'lucide-react';

export const SITE = {
    name: "Paragard IUD Lawsuit Calculator",
    tagline: "Free Paragard Fracture Settlement Calculator",
    description: "Calculate Paragard IUD lawsuit settlement value instantly. Free 2026 calculator for IUD fracture, breakage, and removal injury claims. Bellwether trial January 2026.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/paragard",
};

export const PARAGARD_2026 = {
    fractureTypes: [
        { type: "Complete Arm Fracture (Surgery Required)", avgSettlement: 350000, minSettlement: 150000, maxSettlement: 800000, description: "IUD arm broke during removal, required surgery" },
        { type: "Embedded/Migrated Device", avgSettlement: 500000, minSettlement: 200000, maxSettlement: 1200000, description: "Device migrated into uterine wall or organs" },
        { type: "Perforation with Surgery", avgSettlement: 600000, minSettlement: 250000, maxSettlement: 1500000, description: "IUD perforated uterus, major surgery needed" },
        { type: "Hysterectomy Required", avgSettlement: 900000, minSettlement: 400000, maxSettlement: 2000000, description: "Complete removal of uterus due to IUD damage" },
        { type: "Infertility/Loss of Fertility", avgSettlement: 1200000, minSettlement: 500000, maxSettlement: 3000000, description: "Permanent inability to have children" },
        { type: "Multiple Surgeries Required", avgSettlement: 750000, minSettlement: 300000, maxSettlement: 1800000, description: "Two or more surgeries to remove fragments" },
        { type: "Minor Complications (No Surgery)", avgSettlement: 100000, minSettlement: 30000, maxSettlement: 250000, description: "Pain, infection without surgical intervention" },
    ],
    removalFactors: [
        { factor: "Normal removal attempt", multiplier: 1.0 },
        { factor: "Difficult removal (forceps used)", multiplier: 1.2 },
        { factor: "Emergency removal", multiplier: 1.4 },
        { factor: "Removal with laparoscopy", multiplier: 1.5 },
        { factor: "Removal with hysteroscopy", multiplier: 1.6 },
    ],
    usageDuration: [
        { duration: "Less than 1 year", multiplier: 0.7 },
        { duration: "1-3 years", multiplier: 0.9 },
        { duration: "3-5 years", multiplier: 1.0 },
        { duration: "5-10 years", multiplier: 1.2 },
        { duration: "10+ years (max recommended)", multiplier: 1.4 },
    ],
    bellwetherTrial: {
        date: "January 2026",
        court: "Northern District of Georgia",
        judge: "Judge Leigh Martin May",
        mdlNumber: "MDL 2974",
        pendingCases: 12500,
        firstTrialDate: "January 13, 2026",
        defendant: "Teva Pharmaceuticals / CooperSurgical",
    },
    eligibility: [
        { requirement: "Used Paragard IUD", critical: true },
        { requirement: "Device broke during or after removal", critical: true },
        { requirement: "Required surgery to remove fragments", critical: true },
        { requirement: "Experienced complications (infection, pain, perforation)", critical: false },
        { requirement: "Have medical records documenting injury", critical: true },
        { requirement: "Incident within statute of limitations", critical: true },
    ],
    statistics: {
        totalImplanted: 5400000,
        reportedBreakages: 2700,
        lawsuitsFiled: 12500,
        avgSettlement: 450000,
        fdaWarnings: 4,
        defectRate: 3.2,
    },
    citation: "Based on MDL 2974 (N.D. Ga.), FDA MAUDE Database 2026, Teva Pharmaceuticals Litigation Data, and Bellwether Trial Schedule",
} as const;

export const CALCULATORS = [
    { id: "paragard/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate Paragard settlement", longDescription: "Free Paragard IUD fracture calculator.", icon: Calculator, category: "legal", keywords: ["paragard calculator"], featured: true },
    { id: "paragard/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding Paragard claims", longDescription: "Learn about Paragard lawsuits and MDL.", icon: FileText, category: "legal", keywords: ["paragard guide"], featured: true },
    { id: "paragard/trial-status", name: "2026 Trial Status", shortName: "Trial", description: "January 2026 Bellwether Trial", longDescription: "Track the first Paragard bellwether trial.", icon: Scale, category: "legal", keywords: ["paragard trial 2026"], featured: true },
    { id: "paragard/eligibility", name: "Eligibility Check", shortName: "Qualify", description: "Do you qualify for a lawsuit?", longDescription: "Check if you qualify for Paragard lawsuit.", icon: CheckCircle, category: "legal", keywords: ["paragard lawsuit eligibility"], featured: true },
] as const;

export interface ParagardResult { fractureType: string; removalFactor: string; usageDuration: string; baseDamages: number; removalBonus: number; usageBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateParagardSettlement(fractureIndex: number, removalIndex: number, usageIndex: number, medicalBills: number): ParagardResult {
    const fracture = PARAGARD_2026.fractureTypes[fractureIndex];
    const removal = PARAGARD_2026.removalFactors[removalIndex];
    const usage = PARAGARD_2026.usageDuration[usageIndex];
    const baseDamages = fracture.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const removalBonus = baseDamages * (removal.multiplier - 1);
    const usageBonus = baseDamages * (usage.multiplier - 1);
    const total = baseDamages + medicalCosts + removalBonus + usageBonus;
    return { fractureType: fracture.type, removalFactor: removal.factor, usageDuration: usage.duration, baseDamages: Math.round(baseDamages), removalBonus: Math.round(removalBonus), usageBonus: Math.round(usageBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
