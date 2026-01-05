// ============================================
// ASBESTOS EXPOSURE CALCULATOR - Advanced Version
// 2026 Data - Based on EPA/OSHA/CDC/NIOSH
// ============================================

import { Calculator, FileText, AlertTriangle, Shield, Activity } from 'lucide-react';

export const SITE = {
    name: "Asbestos Exposure Calculator",
    tagline: "Free Mesothelioma & Asbestos Settlement Calculator",
    description: "Calculate asbestos exposure lawsuit settlement value instantly. Free 2026 calculator for mesothelioma, lung cancer, asbestosis, and occupational exposure claims.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/asbestos",
};

export const ASBESTOS_2026 = {
    diseases: [
        { disease: "Mesothelioma (Pleural)", avgSettlement: 2500000, minSettlement: 1000000, maxSettlement: 10000000, latency: "20-50 years", survival: "12-21 months", description: "Aggressive cancer of lung lining" },
        { disease: "Mesothelioma (Peritoneal)", avgSettlement: 2200000, minSettlement: 800000, maxSettlement: 8000000, latency: "20-50 years", survival: "6-24 months", description: "Cancer of abdominal lining" },
        { disease: "Lung Cancer (Asbestos)", avgSettlement: 1500000, minSettlement: 500000, maxSettlement: 5000000, latency: "15-35 years", survival: "Varies", description: "Primary lung cancer from exposure" },
        { disease: "Asbestosis", avgSettlement: 600000, minSettlement: 150000, maxSettlement: 2000000, latency: "10-40 years", survival: "Chronic", description: "Chronic lung scarring/fibrosis" },
        { disease: "Pleural Plaques", avgSettlement: 150000, minSettlement: 50000, maxSettlement: 500000, latency: "10-30 years", survival: "Non-malignant", description: "Calcified pleural thickening" },
        { disease: "Pleural Effusion", avgSettlement: 300000, minSettlement: 100000, maxSettlement: 1000000, latency: "10-30 years", survival: "Varies", description: "Fluid in lung cavity" },
    ],
    exposureSites: [
        { site: "Shipyard/Naval", multiplier: 1.4, description: "Navy ships, shipbuilding" },
        { site: "Construction/Insulation", multiplier: 1.3, description: "Building insulation, drywall, roofing" },
        { site: "Power/Industrial Plant", multiplier: 1.3, description: "Power plants, refineries" },
        { site: "Automotive (Brakes)", multiplier: 1.1, description: "Brake pads, clutches, gaskets" },
        { site: "Mining/Milling", multiplier: 1.5, description: "Asbestos mining operations" },
        { site: "Secondary/Household", multiplier: 1.0, description: "Family member brought fibers home" },
    ],
    exposureDuration: [
        { duration: "20+ Years", multiplier: 1.5 },
        { duration: "10-20 Years", multiplier: 1.3 },
        { duration: "5-10 Years", multiplier: 1.1 },
        { duration: "1-5 Years", multiplier: 1.0 },
        { duration: "Less than 1 Year", multiplier: 0.8 },
    ],
    trustFunds: [
        { company: "Johns-Manville Trust", amount: 2500000000, status: "Active" },
        { company: "Owens Corning/Fibreboard", amount: 5400000000, status: "Active" },
        { company: "USG Trust", amount: 890000000, status: "Active" },
        { company: "W.R. Grace Trust", amount: 4000000000, status: "Active" },
        { company: "Armstrong World Industries", amount: 2000000000, status: "Active" },
    ],
    statistics: {
        annualDeaths: 40000,
        annualMesotheliomaCases: 3000,
        avgMesotheliomaSettlement: 2400000,
        trustFundsTotal: 30000000000,
        occupationalCases: 90,
    },
    citation: "Based on EPA Asbestos Regulations 2026, OSHA 29 CFR 1910.1001, CDC/NIOSH Occupational Lung Disease Data, and Asbestos Bankruptcy Trust Reports",
} as const;

export const CALCULATORS = [
    { id: "asbestos/calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate asbestos exposure settlement", icon: Calculator, keywords: ["asbestos settlement calculator"], featured: true },
    { id: "asbestos/guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding asbestos claims", icon: FileText, keywords: ["asbestos lawsuit guide"], featured: true },
    { id: "asbestos/diseases", name: "Disease Types", shortName: "Diseases", description: "Mesothelioma, lung cancer, asbestosis", icon: AlertTriangle, keywords: ["mesothelioma types"], featured: true },
    { id: "asbestos/exposure-sites", name: "Exposure Sites", shortName: "Exposure", description: "Shipyards, construction, mining", icon: Shield, keywords: ["asbestos exposure sites"], featured: true },
] as const;

export interface AsbestosResult { disease: string; exposureSite: string; duration: string; baseDamages: number; siteBonus: number; durationBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateAsbestosSettlement(diseaseIndex: number, siteIndex: number, durationIndex: number, medicalBills: number): AsbestosResult {
    const disease = ASBESTOS_2026.diseases[diseaseIndex];
    const site = ASBESTOS_2026.exposureSites[siteIndex];
    const duration = ASBESTOS_2026.exposureDuration[durationIndex];
    const baseDamages = disease.avgSettlement;
    const medicalCosts = medicalBills * 2;
    const siteBonus = baseDamages * (site.multiplier - 1);
    const durationBonus = baseDamages * (duration.multiplier - 1);
    const total = baseDamages + medicalCosts + siteBonus + durationBonus;
    return { disease: disease.disease, exposureSite: site.site, duration: duration.duration, baseDamages: Math.round(baseDamages), siteBonus: Math.round(siteBonus), durationBonus: Math.round(durationBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
