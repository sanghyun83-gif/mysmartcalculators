// ============================================
// PRODUCT LIABILITY CALCULATOR - Advanced Version
// 2026 Data - Based on CPSC/FDA/NHTSA
// ============================================

import { Calculator, FileText, AlertTriangle, Shield } from 'lucide-react';

export const SITE = {
    name: "Product Liability Calculator",
    tagline: "Free Defective Product Settlement Calculator",
    description: "Calculate defective product lawsuit settlement value instantly. Free 2026 calculator for manufacturing defects, design flaws, and product recalls.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/product-liability",
};

export const PRODUCT_2026 = {
    defectTypes: [
        { type: "Manufacturing Defect", avgSettlement: 650000, minSettlement: 100000, maxSettlement: 5000000, description: "Error during production, single product" },
        { type: "Design Defect", avgSettlement: 1200000, minSettlement: 250000, maxSettlement: 10000000, description: "Inherently unsafe design, all products" },
        { type: "Failure to Warn", avgSettlement: 450000, minSettlement: 80000, maxSettlement: 3000000, description: "Missing/inadequate warnings or instructions" },
        { type: "Breach of Warranty", avgSettlement: 300000, minSettlement: 50000, maxSettlement: 1500000, description: "Product fails to meet stated claims" },
    ],
    productCategories: [
        { category: "Medical Devices/Implants", multiplier: 1.8, description: "Hip implants, pacemakers, mesh" },
        { category: "Pharmaceuticals/Drugs", multiplier: 1.6, description: "Prescription drugs, OTC medications" },
        { category: "Automotive/Vehicle Parts", multiplier: 1.5, description: "Airbags, tires, brakes, seats" },
        { category: "Consumer Electronics", multiplier: 1.2, description: "Phones, laptops, batteries" },
        { category: "Children's Products/Toys", multiplier: 1.4, description: "Cribs, car seats, toys" },
        { category: "Household Appliances", multiplier: 1.1, description: "Kitchen appliances, HVAC" },
    ],
    injurySeverity: [
        { severity: "Minor Injury", multiplier: 0.5, description: "Temporary, full recovery expected" },
        { severity: "Moderate Injury", multiplier: 1.0, description: "Medical treatment, partial recovery" },
        { severity: "Severe Injury", multiplier: 2.0, description: "Surgery, long-term effects" },
        { severity: "Permanent Disability", multiplier: 3.0, description: "Life-altering, ongoing care" },
        { severity: "Wrongful Death", multiplier: 4.0, description: "Fatal product defect" },
    ],
    statistics: {
        annualRecalls: 3200,
        annualInjuries: 29000000,
        annualDeaths: 22000,
        avgSettlement: 720000,
        cpscReports: 400000,
    },
    recentRecalls: [
        { product: "Takata Airbags", year: 2024, injuries: 400, deaths: 27 },
        { product: "Fisher-Price Rock n Play", year: 2023, injuries: 100, deaths: 50 },
        { product: "Peloton Tread+", year: 2023, injuries: 72, deaths: 1 },
        { product: "IKEA Malm Dresser", year: 2022, injuries: 91, deaths: 8 },
    ],
    citation: "Based on CPSC Annual Report 2026, FDA MAUDE Database, NHTSA Vehicle Defect Data, and DOJ Product Liability Statistics",
} as const;

export const CALCULATORS = [
    { id: "product-liability/product-calculator", name: "Settlement Calculator", shortName: "Calculator", description: "Calculate defective product settlement", icon: Calculator, keywords: ["product liability calculator"], featured: true },
    { id: "product-liability/product-guide", name: "Lawsuit Guide", shortName: "Guide", description: "Understanding product liability claims", icon: FileText, keywords: ["product liability guide"], featured: true },
    { id: "product-liability/defect-types", name: "Defect Types", shortName: "Defects", description: "Manufacturing, design, warning defects", icon: AlertTriangle, keywords: ["product defect types"], featured: true },
    { id: "product-liability/recalls", name: "Product Recalls", shortName: "Recalls", description: "Recent recalls and settlements", icon: Shield, keywords: ["product recalls"], featured: true },
] as const;

export interface ProductResult { defectType: string; productCategory: string; severity: string; baseDamages: number; categoryBonus: number; severityBonus: number; medicalCosts: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateProductSettlement(defectIndex: number, categoryIndex: number, severityIndex: number, medicalBills: number): ProductResult {
    const defect = PRODUCT_2026.defectTypes[defectIndex];
    const category = PRODUCT_2026.productCategories[categoryIndex];
    const severity = PRODUCT_2026.injurySeverity[severityIndex];
    const baseDamages = defect.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const categoryBonus = baseDamages * (category.multiplier - 1);
    const severityBonus = baseDamages * (severity.multiplier - 1);
    const total = baseDamages + medicalCosts + categoryBonus + severityBonus;
    return { defectType: defect.type, productCategory: category.category, severity: severity.severity, baseDamages: Math.round(baseDamages), categoryBonus: Math.round(categoryBonus), severityBonus: Math.round(severityBonus), medicalCosts: Math.round(medicalCosts), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
