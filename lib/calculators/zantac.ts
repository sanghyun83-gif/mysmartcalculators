// ============================================
// ZANTAC CANCER LAWSUIT CALCULATOR
// 2026 Ranitidine, NDMA Contamination - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Pill } from 'lucide-react';

export const SITE = {
    name: "Zantac Cancer Lawsuit Calculator",
    tagline: "Free 2026 Ranitidine NDMA Cancer Settlement Estimator",
    description: "Calculate Zantac cancer lawsuit settlements. Ranitidine, NDMA contamination, stomach, bladder, liver cancer. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/zantac",
};

export const CANCER_TYPES = [
    { id: "stomach", name: "Stomach/Gastric Cancer", description: "Primary cancer linked to NDMA", avgSettlement: 750000, multiplier: 5.0 },
    { id: "bladder", name: "Bladder Cancer", description: "Strongly linked to NDMA exposure", avgSettlement: 650000, multiplier: 4.5 },
    { id: "liver", name: "Liver Cancer", description: "Associated with prolonged use", avgSettlement: 600000, multiplier: 4.0 },
    { id: "esophageal", name: "Esophageal Cancer", description: "Under investigation", avgSettlement: 500000, multiplier: 3.5 },
];

export const USAGE_DURATION = [
    { id: "10plus", name: "10+ Years", multiplier: 1.5 },
    { id: "5-10", name: "5-10 Years", multiplier: 1.3 },
    { id: "2-5", name: "2-5 Years", multiplier: 1.15 },
    { id: "under-2", name: "Under 2 Years", multiplier: 1.0 },
];

export const USAGE_FREQUENCY = [
    { id: "daily", name: "Daily Use", multiplier: 1.4, description: "Prescription or regular OTC" },
    { id: "frequent", name: "Frequent (Weekly)", multiplier: 1.2, description: "Several times per week" },
    { id: "occasional", name: "Occasional", multiplier: 1.0, description: "As needed use" },
];

export const ZANTAC_2026 = {
    statistics: {
        mdlNumber: "MDL 2924",
        fdaRecallDate: "April 2020",
        claimsFiled: 75000,
        status: "State Court Litigation",
        ndmaExposure: "Exceeds FDA Limits",
    },
    citations: [
        "FDA Ranitidine Recall Notice April 2020",
        "MDL 2924 Southern District of Florida",
        "NDMA Carcinogenicity Studies 2026",
    ],
};

export const CALCULATORS = [
    { id: "zantac/calculator", name: "Settlement Calculator", description: "Calculate Zantac cancer claim value", icon: Calculator, featured: true },
    { id: "zantac/cancers", name: "Linked Cancers", description: "Cancers associated with Zantac", icon: AlertTriangle, featured: true },
    { id: "zantac/recall", name: "FDA Recall Info", description: "Why Zantac was recalled", icon: Pill, featured: false },
    { id: "zantac/guide", name: "Claims Guide", description: "How to file a Zantac lawsuit", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the Zantac lawsuit about?", answer: "Zantac (ranitidine) lawsuits claim the heartburn medication contained NDMA, a probable human carcinogen, at levels that increased with storage and heat. The FDA recalled all ranitidine products in April 2020." },
    { question: "What is NDMA and why is it dangerous?", answer: "NDMA (N-nitrosodimethylamine) is classified as a probable human carcinogen. Studies show it causes cancer in laboratory animals. Zantac was found to contain NDMA levels exceeding FDA's acceptable daily intake." },
    { question: "What cancers are linked to Zantac?", answer: "Cancers associated with NDMA/Zantac include stomach cancer, bladder cancer, liver cancer, esophageal cancer, colorectal cancer, and prostate cancer. Stomach and bladder cancers have the strongest scientific links." },
    { question: "Who qualifies for a Zantac lawsuit?", answer: "Individuals who took Zantac/ranitidine regularly (especially prescription strength or long-term OTC use) and were later diagnosed with an NDMA-linked cancer may qualify. Medical records and proof of use are essential." },
    { question: "What happened to the Zantac MDL?", answer: "In December 2022, the federal judge overseeing MDL 2924 excluded plaintiff expert witnesses and dismissed most cases. However, state court lawsuits continue in various jurisdictions, and some cases are proceeding." },
    { question: "Can I still file a Zantac lawsuit?", answer: "While the federal MDL faced setbacks, state court cases continue. Some states have different evidentiary standards. Consult an attorney to evaluate your options based on your state's laws." },
    { question: "What is the average Zantac settlement?", answer: "No major settlements have been finalized yet due to MDL dismissals. Potential settlement values depend on cancer type, usage duration, and case strength. Similar pharmaceutical cases have settled for $100,000 to $1M+." },
    { question: "How long does a Zantac case take?", answer: "Zantac litigation remains ongoing. State court cases may take 1-3 years. The timeline is uncertain due to legal challenges, but manufacturers may eventually settle to avoid ongoing litigation." },
    { question: "What evidence do I need?", answer: "Key evidence includes: cancer diagnosis records, proof of Zantac/ranitidine use (pharmacy records, prescriptions), medical history, and documentation of usage duration and frequency." },
    { question: "Why was Zantac recalled?", answer: "The FDA requested manufacturers withdraw all ranitidine products in April 2020 after testing showed NDMA levels in Zantac increased over time and with heat exposure, potentially reaching dangerous levels." },
];

export function calculateZantacSettlement(
    cancerType: string,
    usageDuration: string,
    usageFrequency: string,
    medicalExpenses: number,
    lostWages: number,
    futureCareCosts: number,
    hasPharmacyRecords: boolean
) {
    const cancer = CANCER_TYPES.find(c => c.id === cancerType) || CANCER_TYPES[0];
    const duration = USAGE_DURATION.find(d => d.id === usageDuration) || USAGE_DURATION[0];
    const frequency = USAGE_FREQUENCY.find(f => f.id === usageFrequency) || USAGE_FREQUENCY[0];

    const recordsBonus = hasPharmacyRecords ? 1.2 : 1.0;
    const baseMultiplier = cancer.multiplier * duration.multiplier * frequency.multiplier * recordsBonus / 5;

    const economicDamages = medicalExpenses + lostWages + futureCareCosts;
    const painSufferingLow = Math.round(economicDamages * baseMultiplier * 0.4);
    const painSufferingHigh = Math.round(economicDamages * baseMultiplier * 0.8);

    return {
        cancerType: cancer.name,
        usageDuration: duration.name,
        usageFrequency: frequency.name,
        economicDamages,
        painSufferingLow,
        painSufferingHigh,
        totalLow: Math.round(economicDamages + painSufferingLow),
        totalHigh: Math.round(economicDamages + painSufferingHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
