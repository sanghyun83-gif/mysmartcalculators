// ============================================
// AFFF LAWSUIT CALCULATOR
// 2026 PFAS Aqueous Film-Forming Foam - Advanced Version
// ============================================

import { Calculator, FileText, Shield, Building } from 'lucide-react';

export const SITE = {
    name: "AFFF Lawsuit Calculator",
    tagline: "Free 2026 PFAS Firefighting Foam Settlement Estimator",
    description: "Calculate AFFF lawsuit settlements. Aqueous film-forming foam PFAS contamination, cancer claims. Based on MDL 2873 data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/afff",
};

export const CLAIM_TYPES = [
    { id: "cancer", name: "Personal Injury (Cancer)", description: "PFAS-related cancer diagnosis", avgSettlement: 350000, multiplier: 3.5 },
    { id: "water", name: "Water Contamination", description: "Municipal/private well contamination", avgSettlement: 50000, multiplier: 1.5 },
    { id: "property", name: "Property Damage", description: "Land/water contamination", avgSettlement: 100000, multiplier: 2.0 },
    { id: "medical", name: "Medical Monitoring", description: "Blood testing, ongoing monitoring", avgSettlement: 25000, multiplier: 1.0 },
];

export const EXPOSURE_SOURCE = [
    { id: "firefighting", name: "Firefighting/Training", multiplier: 1.5 },
    { id: "military", name: "Military Base", multiplier: 1.4 },
    { id: "airport", name: "Airport", multiplier: 1.3 },
    { id: "industrial", name: "Industrial Facility", multiplier: 1.2 },
    { id: "residential", name: "Residential (Water)", multiplier: 1.1 },
];

export const DEFENDANTS = [
    { id: "3m", name: "3M Company", info: "$12.5B+ water settlement" },
    { id: "dupont", name: "DuPont/Chemours", info: "Teflon PFAS manufacturer" },
    { id: "tyco", name: "Tyco Fire Products", info: "AFFF manufacturer" },
    { id: "kidde", name: "Kidde-Fenwal", info: "Fire suppression systems" },
];

export const AFFF_2026 = {
    statistics: {
        mdlNumber: "MDL 2873",
        court: "District of South Carolina",
        totalCases: 9000,
        waterSettlement: "$12.5B+",
        status: "Personal Injury Trials 2026",
    },
    citations: [
        "AFFF Products Liability Litigation MDL 2873 - D.S.C.",
        "EPA PFAS Strategic Roadmap 2024-2026",
        "3M AFFF Water Contamination Settlement 2024",
    ],
};

export const CALCULATORS = [
    { id: "afff/calculator", name: "Settlement Calculator", description: "Estimate AFFF claim value", icon: Calculator, featured: true },
    { id: "afff/eligibility", name: "Eligibility Check", description: "Do you qualify?", icon: Shield, featured: true },
    { id: "afff/defendants", name: "Defendants", description: "Companies being sued", icon: Building, featured: false },
    { id: "afff/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is AFFF?", answer: "AFFF (Aqueous Film-Forming Foam) is a firefighting foam designed to suppress flammable liquid fires. It contains PFAS 'forever chemicals' that contaminate water supplies and accumulate in human bodies." },
    { question: "What does the AFFF lawsuit allege?", answer: "The lawsuit alleges that AFFF manufacturers knew their products contained toxic PFAS chemicals but failed to warn users or the public. These chemicals have contaminated drinking water and caused cancer and other diseases." },
    { question: "What is MDL 2873?", answer: "MDL 2873 consolidates over 9,000 AFFF-related lawsuits in the District of South Carolina. It includes both personal injury claims and water contamination claims. Bellwether trials for cancer cases are ongoing." },
    { question: "Who can file an AFFF lawsuit?", answer: "Firefighters, military personnel, airport workers, and industrial workers exposed to AFFF may file personal injury claims. Water utilities and property owners affected by PFAS contamination can file water/property claims." },
    { question: "What is the 3M water settlement?", answer: "In 2024, 3M agreed to pay over $12.5 billion to settle claims that AFFF contaminated public water supplies. This settlement addresses water contamination only; personal injury cases are being litigated separately." },
    { question: "What cancers are linked to AFFF?", answer: "Studies link PFAS exposure to kidney cancer, testicular cancer, thyroid disease, bladder cancer, prostate cancer, and other conditions. The EPA has declared PFAS a hazardous substance." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state, typically 2-3 years from diagnosis or discovery of contamination. Many states apply the discovery rule. Contact an attorney immediately to protect your rights." },
    { question: "What evidence do I need?", answer: "Key evidence includes exposure history (work records, military service), medical records documenting diagnosis, PFAS blood tests showing elevated levels, and documentation of contaminated water if applicable." },
    { question: "What compensation is available?", answer: "Personal injury cases may receive $100,000-$500,000+ depending on cancer type and severity. Water contamination claims vary based on utility size and contamination level. Property damage claims depend on remediation costs." },
    { question: "Can I file if I don't have cancer?", answer: "Yes, you may qualify for medical monitoring claims if you have elevated PFAS blood levels, even without a current diagnosis. Water utilities and property owners can file contamination claims regardless of personal health effects." },
];

export function calculateAFFFSettlement(
    claimType: string,
    exposureSource: string,
    medicalExpenses: number,
    yearsExposed: number,
    hasPFASTest: boolean,
    hasDocumentation: boolean,
    isContaminated: boolean
) {
    const claim = CLAIM_TYPES.find(c => c.id === claimType) || CLAIM_TYPES[0];
    const source = EXPOSURE_SOURCE.find(s => s.id === exposureSource) || EXPOSURE_SOURCE[0];

    const pfasBonus = hasPFASTest ? 1.2 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const contaminationBonus = isContaminated ? 1.1 : 1.0;
    const yearsBonus = yearsExposed > 10 ? 1.3 : yearsExposed > 5 ? 1.15 : 1.0;

    const baseMultiplier = claim.multiplier * source.multiplier * pfasBonus * docsBonus * contaminationBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        claimType: claim.name,
        exposureSource: source.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
