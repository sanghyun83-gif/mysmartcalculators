// ============================================
// FIREFIGHTER FOAM (AFFF) LAWSUIT CALCULATOR
// 2026 PFAS Contamination, Cancer - Advanced Version
// ============================================

import { Calculator, FileText, Shield, Activity } from 'lucide-react';

export const SITE = {
    name: "Firefighter Foam Lawsuit Calculator",
    tagline: "Free 2026 AFFF PFAS Cancer Settlement Estimator",
    description: "Calculate AFFF firefighting foam lawsuit settlements. PFAS forever chemicals, firefighter cancer claims. Based on MDL 2873 data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/firefighter-foam",
};

export const CANCER_TYPES = [
    { id: "kidney", name: "Kidney Cancer", description: "Strong PFAS link established", avgSettlement: 400000, multiplier: 3.5 },
    { id: "testicular", name: "Testicular Cancer", description: "Highest PFAS correlation", avgSettlement: 350000, multiplier: 3.0 },
    { id: "bladder", name: "Bladder Cancer", description: "Linked to PFAS exposure", avgSettlement: 300000, multiplier: 2.5 },
    { id: "prostate", name: "Prostate Cancer", description: "Emerging PFAS connection", avgSettlement: 250000, multiplier: 2.0 },
    { id: "thyroid", name: "Thyroid Disease/Cancer", description: "Thyroid disruption documented", avgSettlement: 200000, multiplier: 1.8 },
    { id: "liver", name: "Liver Cancer", description: "PFAS liver damage link", avgSettlement: 350000, multiplier: 3.0 },
];

export const EXPOSURE_TYPE = [
    { id: "firefighter", name: "Professional Firefighter", multiplier: 1.5, years: "Career/volunteer" },
    { id: "military", name: "Military (Fire Training)", multiplier: 1.4, years: "On-base exposure" },
    { id: "airport", name: "Airport Personnel", multiplier: 1.3, years: "AFFF usage" },
    { id: "industrial", name: "Industrial Worker", multiplier: 1.2, years: "Factory/plant" },
];

export const EXPOSURE_DURATION = [
    { id: "20plus", name: "20+ Years", multiplier: 1.5 },
    { id: "10-20", name: "10-20 Years", multiplier: 1.3 },
    { id: "5-10", name: "5-10 Years", multiplier: 1.1 },
    { id: "under-5", name: "Under 5 Years", multiplier: 1.0 },
];

export const AFFF_2026 = {
    statistics: {
        mdlNumber: "MDL 2873",
        court: "District of South Carolina",
        pendingCases: 9000,
        avgProjectedSettlement: 300000,
        status: "Active - Settlements Ongoing",
        waterSettlement: "12.5B+ in 2024",
    },
    citations: [
        "AFFF MDL 2873 - D.S.C. (Aqueous Film-Forming Foam)",
        "EPA PFAS Action Plan 2024-2026",
        "CDC/ATSDR PFAS Health Effects Studies",
    ],
};

export const CALCULATORS = [
    { id: "firefighter-foam/calculator", name: "Settlement Calculator", description: "Estimate AFFF claim value", icon: Calculator, featured: true },
    { id: "firefighter-foam/eligibility", name: "Eligibility Check", description: "Do you qualify for lawsuit?", icon: Shield, featured: true },
    { id: "firefighter-foam/cancers", name: "PFAS-Linked Cancers", description: "Cancer types from AFFF", icon: Activity, featured: false },
    { id: "firefighter-foam/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is AFFF firefighting foam?", answer: "AFFF (Aqueous Film-Forming Foam) is a firefighting foam used to suppress flammable liquid fires. It contains PFAS 'forever chemicals' that don't break down and accumulate in the body, causing serious health effects." },
    { question: "What is the AFFF MDL 2873 lawsuit?", answer: "MDL 2873 consolidates thousands of AFFF lawsuits in the District of South Carolina. Plaintiffs include firefighters, military personnel, and communities with contaminated water who developed cancer or other diseases from PFAS exposure." },
    { question: "Which cancers are linked to AFFF/PFAS?", answer: "Studies link PFAS to kidney cancer, testicular cancer, thyroid disease, bladder cancer, prostate cancer, liver cancer, and other conditions. The EPA has recognized PFAS as a hazardous substance." },
    { question: "Who qualifies for an AFFF lawsuit?", answer: "Firefighters, military personnel, airport workers, and industrial workers exposed to AFFF who developed cancer or other serious health conditions may qualify. Residents near contaminated military bases or fire training areas may also qualify." },
    { question: "What is the average AFFF settlement?", answer: "Settlement values vary significantly based on cancer type, exposure duration, and damages. Kidney and testicular cancer cases may receive $300,000-$500,000 or more. The water contamination portion of MDL 2873 has resulted in over $12.5 billion in settlements." },
    { question: "What companies made AFFF?", answer: "Major defendants include 3M, DuPont, Chemours, Tyco Fire Products, and Kidde-Fenwal. 3M has announced plans to exit PFAS manufacturing and has set aside billions for settlements." },
    { question: "How do I prove AFFF exposure?", answer: "Evidence includes employment records showing firefighting/military service, training logs documenting AFFF use, blood tests showing elevated PFAS levels, medical records of cancer diagnosis, and proximity to contaminated sites." },
    { question: "What is the statute of limitations?", answer: "Statutes of limitations vary by state, typically 2-3 years from diagnosis. Some states apply the 'discovery rule,' starting the clock when you learned PFAS caused your illness. Contact an attorney immediately." },
    { question: "Can military personnel sue?", answer: "Yes, military personnel can sue AFFF manufacturers (not the government). The Feres Doctrine doesn't apply to product liability claims against private companies. Many active and retired service members have filed claims." },
    { question: "What is the status of litigation in 2026?", answer: "MDL 2873 is actively litigating personal injury claims after the $12.5B+ water contamination settlement. Bellwether trials for individual cancer cases are underway, with significant verdicts expected to influence settlements." },
];

export function calculateAFFFSettlement(
    cancerType: string,
    exposureType: string,
    exposureDuration: string,
    medicalExpenses: number,
    yearsOfService: number,
    hasBloodTest: boolean,
    hasWorkRecords: boolean
) {
    const cancer = CANCER_TYPES.find(c => c.id === cancerType) || CANCER_TYPES[0];
    const exposure = EXPOSURE_TYPE.find(e => e.id === exposureType) || EXPOSURE_TYPE[0];
    const duration = EXPOSURE_DURATION.find(d => d.id === exposureDuration) || EXPOSURE_DURATION[0];

    const bloodTestBonus = hasBloodTest ? 1.2 : 1.0;
    const recordsBonus = hasWorkRecords ? 1.15 : 1.0;
    const serviceBonus = yearsOfService > 20 ? 1.3 : yearsOfService > 10 ? 1.15 : 1.0;

    const baseMultiplier = cancer.multiplier * exposure.multiplier * duration.multiplier * bloodTestBonus * recordsBonus * serviceBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        cancerType: cancer.name,
        exposureType: exposure.name,
        duration: duration.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
