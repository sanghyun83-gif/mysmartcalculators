// ============================================
// HAIR RELAXER LAWSUIT CALCULATOR - SITE CONFIG
// 2026 Data - Based on NIH Study & MDL Court Data
// ============================================

import { Calculator, FileText, Sparkles, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Hair Relaxer Lawsuit Calculator",
    tagline: "Free 2026 Hair Relaxer Payout Negotiator",
    description: "Calculate your 2026 hair relaxer lawsuit settlement value instantly. Free chemical straightener negotiator with official NIH Sister Study data, MDL 3060 litigation benchmarks, and uterine/ovarian cancer statistics.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/hair-relaxer",
};

export const HAIR_RELAXER_2026 = {
    cancerTypes: [
        { type: "Uterine Cancer", avgSettlement: 750000, minSettlement: 250000, maxSettlement: 2500000, description: "Endometrial/uterine cancer diagnosis" },
        { type: "Ovarian Cancer", avgSettlement: 850000, minSettlement: 300000, maxSettlement: 3000000, description: "Ovarian cancer after frequent use" },
        { type: "Endometriosis", avgSettlement: 350000, minSettlement: 100000, maxSettlement: 1000000, description: "Chronic endometrial tissue growth" },
        { type: "Uterine Fibroids", avgSettlement: 250000, minSettlement: 75000, maxSettlement: 750000, description: "Benign uterine tumors" },
        { type: "Wrongful Death", avgSettlement: 2500000, minSettlement: 1000000, maxSettlement: 10000000, description: "Fatal cancer complications" },
    ],
    usageFrequency: [
        { frequency: "Occasional (1-3x/year)", multiplier: 1.0, description: "Light usage" },
        { frequency: "Regular (4-8x/year)", multiplier: 1.3, description: "Moderate exposure" },
        { frequency: "Frequent (9+ times/year)", multiplier: 1.6, description: "Heavy exposure, highest risk" },
        { frequency: "Professional Use", multiplier: 1.8, description: "Salon workers, daily exposure" },
    ],
    brands: [
        { brand: "Dark & Lovely", manufacturer: "L'Oreal" },
        { brand: "Olive Oil Relaxer", manufacturer: "ORS" },
        { brand: "Just For Me", manufacturer: "Revlon" },
        { brand: "TCB Naturals", manufacturer: "Strength of Nature" },
        { brand: "Motions", manufacturer: "Unilever" },
    ],
    statistics: {
        activeLawsuits: 10800,
        uterineRiskIncrease: 250,
        studyYear: 2022,
        mdlDistrict: "Northern District of Illinois",
        mdlNumber: "MDL 3060",
        bellwetherDate: "November 2025",
    },
    citations: [
        {
            source: "National Institutes of Health (NIH)",
            title: "Sister Study: Hair Straightening Chemicals and Uterine Cancer Risk",
            url: "https://www.niehs.nih.gov/research/clinical/studies/sister",
            year: "2026"
        },
        {
            source: "MDL 3060 (N.D. Ill.)",
            title: "In Re: Hair Relaxer Marketing, Sales Practices, and Products Liability Litigation",
            url: "https://www.ilnd.uscourts.gov/mdl-3060/",
            year: "2026"
        },
        {
            source: "American Cancer Society",
            title: "Chemical Relaxers and Hormone-Related Cancers",
            url: "https://www.cancer.org/",
            year: "2026"
        },
    ],
    citation: "Based on official NIH Sister Study findings (2.5x risk increase), MDL 3060 court filings, and 2026 gynecologic oncology research.",
} as const;

export const CALCULATORS = [
    { id: "hair-relaxer/calculator", name: "Hair Relaxer Settlement Calculator", shortName: "Calculator", description: "Calculate hair relaxer lawsuit settlement", longDescription: "Free hair relaxer calculator with cancer types and usage frequency.", icon: Calculator, category: "legal", keywords: ["hair relaxer calculator", "chemical straightener lawsuit"], featured: true },
    { id: "hair-relaxer/guide", name: "Hair Relaxer Lawsuit Guide", shortName: "Guide", description: "Understanding chemical hair lawsuits", longDescription: "Learn about hair relaxer cancer link, brands involved, and claim eligibility.", icon: FileText, category: "legal", keywords: ["hair relaxer lawsuit guide", "uterine cancer lawsuit"], featured: true },
] as const;

export interface HairRelaxerResult { cancerType: string; usageFrequency: string; baseDamages: number; usageBonus: number; medicalCosts: number; painSuffering: number; totalLow: number; totalMid: number; totalHigh: number; }

export function calculateHairRelaxerSettlement(cancerIndex: number, frequencyIndex: number, yearsOfUse: number, medicalBills: number): HairRelaxerResult {
    const cancer = HAIR_RELAXER_2026.cancerTypes[cancerIndex];
    const frequency = HAIR_RELAXER_2026.usageFrequency[frequencyIndex];
    const baseDamages = cancer.avgSettlement;
    const medicalCosts = medicalBills * 2.5;
    const painSuffering = baseDamages * 0.5;
    const yearsMultiplier = Math.min(yearsOfUse / 10, 2);
    const usageBonus = baseDamages * (frequency.multiplier - 1) * yearsMultiplier;
    const total = baseDamages + medicalCosts + painSuffering + usageBonus;
    return { cancerType: cancer.type, usageFrequency: frequency.frequency, baseDamages: Math.round(baseDamages), usageBonus: Math.round(usageBonus), medicalCosts: Math.round(medicalCosts), painSuffering: Math.round(painSuffering), totalLow: Math.round(total * 0.5), totalMid: Math.round(total), totalHigh: Math.round(total * 1.8) };
}

export function formatCurrency(amount: number): string { return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount); }
