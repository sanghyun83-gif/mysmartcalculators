// ============================================
// COMMERCIAL INSURANCE PREMIUM CALCULATOR
// 2026 Business Insurance Costs - Advanced Version
// ============================================

import { Calculator, FileText, Building2, Shield } from 'lucide-react';

export const SITE = {
    name: "Commercial Insurance Calculator",
    tagline: "Free 2026 Commercial Insurance Premium Estimator",
    description: "Calculate commercial insurance premiums. General liability, workers comp, commercial auto, professional liability. Based on 2026 NAIC business insurance data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/commercial-insurance",
};

export const COVERAGE_TYPES = [
    { id: "gl", name: "General Liability", description: "Third-party bodily injury/property damage", baseRate: 500, perEmployee: 50 },
    { id: "wc", name: "Workers Compensation", description: "Employee injury coverage", baseRate: 800, perEmployee: 120 },
    { id: "bop", name: "Business Owner Policy", description: "Property + liability bundle", baseRate: 1200, perEmployee: 80 },
    { id: "professional", name: "Professional Liability", description: "Errors & omissions coverage", baseRate: 1500, perEmployee: 100 },
    { id: "commercial-auto", name: "Commercial Auto", description: "Fleet vehicle coverage", baseRate: 2000, perVehicle: 600 },
];

export const INDUSTRY_TYPES = [
    { id: "office", name: "Office / Professional", multiplier: 0.8 },
    { id: "retail", name: "Retail Store", multiplier: 1.0 },
    { id: "restaurant", name: "Restaurant / Food Service", multiplier: 1.4 },
    { id: "construction", name: "Construction", multiplier: 1.8 },
    { id: "manufacturing", name: "Manufacturing", multiplier: 1.5 },
];

export const BUSINESS_SIZE = [
    { id: "small", name: "Small (1-10 employees)", multiplier: 0.7 },
    { id: "medium", name: "Medium (11-50 employees)", multiplier: 1.0 },
    { id: "large", name: "Large (51-200 employees)", multiplier: 1.3 },
    { id: "enterprise", name: "Enterprise (200+ employees)", multiplier: 1.6 },
];

export const COMMERCIAL_2026 = {
    statistics: {
        avgPremium: "Average Small Business: $1,281/year",
        glCost: "General Liability: $42/month avg",
        source: "NAIC / Insurance.com 2026",
    },
    citations: [
        "National Association of Insurance Commissioners (NAIC) Commercial Lines Data 2026",
        "Insurance Information Institute (III) Business Insurance Report 2026",
        "Insureon Small Business Insurance Report 2026",
    ],
};

export const CALCULATORS = [
    { id: "commercial-insurance/calculator", name: "Premium Calculator", description: "Estimate business insurance costs", icon: Calculator, featured: true },
    { id: "commercial-insurance/guide", name: "Coverage Guide", description: "Types of business insurance", icon: FileText, featured: true },
    { id: "commercial-insurance/coverage-types", name: "Coverage Types", description: "Compare policy options", icon: Shield, featured: false },
    { id: "commercial-insurance/industry", name: "By Industry", description: "Industry-specific coverage", icon: Building2, featured: false },
];

export const FAQS = [
    { question: "What is commercial insurance?", answer: "Commercial insurance protects businesses from financial losses due to lawsuits, property damage, employee injuries, and other business risks. Common types include general liability, workers comp, and BOP." },
    { question: "What is general liability insurance?", answer: "General liability insurance protects your business from third-party claims of bodily injury, property damage, and personal/advertising injury. It's required by most commercial leases." },
    { question: "What is workers compensation?", answer: "Workers compensation covers medical expenses and lost wages for employees injured on the job. It's required by law in most states for businesses with employees." },
    { question: "What is a BOP?", answer: "A Business Owner Policy bundles general liability and commercial property insurance at a discounted rate. It's designed for small to medium-sized businesses." },
    { question: "What is professional liability?", answer: "Professional liability (E&O) protects against claims of negligence, errors, or omissions in your professional services. Essential for consultants, accountants, and service providers." },
    { question: "What affects commercial auto rates?", answer: "Commercial auto rates depend on fleet size, vehicle types, driver records, mileage, and industry. Restaurants and delivery services typically pay higher rates." },
    { question: "How much coverage do I need?", answer: "Most commercial leases and contracts require at least $1M/$2M general liability limits. High-risk industries or larger clients may require higher limits." },
    { question: "What is a class code?", answer: "Class codes categorize businesses by industry and risk level. Your class code significantly impacts workers comp and general liability premiums." },
    { question: "Can I bundle policies?", answer: "Yes. Business Owner Policies (BOP) bundle property and liability. Many insurers offer discounts for multiple policies." },
    { question: "How can I reduce premiums?", answer: "Improve workplace safety, raise deductibles, bundle policies, maintain good claims history, and shop multiple quotes. Some industries qualify for pay-as-you-go workers comp." },
];

export function calculateCommercialInsurance(
    coverageType: string,
    industryType: string,
    businessSize: string,
    employees: number,
    vehicles: number,
    coverageLimit: number,
    claimsHistory: boolean
) {
    const coverage = COVERAGE_TYPES.find(c => c.id === coverageType) || COVERAGE_TYPES[0];
    const industry = INDUSTRY_TYPES.find(i => i.id === industryType) || INDUSTRY_TYPES[0];
    const size = BUSINESS_SIZE.find(s => s.id === businessSize) || BUSINESS_SIZE[0];

    const claimsMultiplier = claimsHistory ? 1.35 : 1.0;
    const limitMultiplier = coverageLimit / 1000000;

    let basePremium = coverage.baseRate;
    if (coverageType === 'commercial-auto') {
        basePremium += (coverage.perVehicle || 0) * vehicles;
    } else {
        basePremium += (coverage.perEmployee || 0) * employees;
    }

    const annualPremium = Math.round(basePremium * industry.multiplier * size.multiplier * limitMultiplier * claimsMultiplier);
    const monthlyPremium = Math.round(annualPremium / 12);

    return {
        coverageType: coverage.name,
        industryType: industry.name,
        annualPremium,
        monthlyPremium,
        perEmployeeCost: Math.round(annualPremium / (employees || 1)),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
