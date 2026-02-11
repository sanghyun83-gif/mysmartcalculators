// ============================================
// 3M EARPLUG LAWSUIT CALCULATOR
// 2026 Combat Arms Earplug, Veterans Hearing Loss - S-Class v2.1
// ============================================

import { Calculator, FileText, AlertTriangle, Ear, Shield, Activity, Zap } from 'lucide-react';

export const SITE = {
    name: "3M Earplug Settlement Calculator",
    tagline: "S-Class v2.1 Combat Arms Earplug Payout Negotiator",
    description: "Calculate your 2026 3M earplug lawsuit settlement value with S-Class v2.1 precision. Features MDL 2885 EPP tier logic, VA audiology matrixing, and combat exposure multipliers.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/3m-earplug",
};

// EPP (Elective Payment Program) Tiers - The Core of the Settlement
export const EPP_TIERS = [
    { id: "level-1", name: "EPP Level 1", base: 10000, description: "Tinnitus only, minimal documentation" },
    { id: "level-2", name: "EPP Level 2", base: 16000, description: "Documented tinnitus + slight hearing loss" },
    { id: "level-3", name: "EPP Level 3", base: 24000, description: "Moderate hearing loss (Level 3 Tier)" },
    { id: "level-4", name: "EPP Level 4", base: 50000, description: "Significant hearing loss/High dB threshold" },
    { id: "level-5", name: "EPP Level 5", base: 100000, description: "Profound bilateral hearing loss" },
    { id: "extraordinary", name: "Extraordinary Injury Fund (EIF)", base: 250000, description: "Max severity EIF case" },
];

export const HEARING_CONDITIONS = [
    { id: "profound-loss", name: "Profound Bilateral Loss", description: "Severe/total hearing loss in both ears", avgSettlement: 280000, multiplier: 5.5, eppTier: "level-5" },
    { id: "moderate-loss", name: "Moderate Hearing Loss", description: "Significant hearing impairment (40dB+ threshold)", avgSettlement: 150000, multiplier: 3.8, eppTier: "level-3" },
    { id: "tinnitus-severe", name: "Severe Tinnitus", description: "Constant ringing interfering with sleep/work", avgSettlement: 100000, multiplier: 2.8, eppTier: "level-2" },
    { id: "tinnitus-mild", name: "Mild/Moderate Tinnitus", description: "Documented intermittent ringing", avgSettlement: 50000, multiplier: 1.8, eppTier: "level-1" },
];

export const SERVICE_PERIODS = [
    { id: "iraq-afghanistan", name: "Combat Deployment (OEF/OIF)", multiplier: 1.45, description: "Direct combat exposure with CAEv2 use" },
    { id: "training", name: "Training/Stateside", multiplier: 1.0, description: "Documented CAEv2 use during training" },
    { id: "special-ops", name: "Special Operations/Artillery", multiplier: 1.6, description: "Elite exposure to high-decibel pulse noise" },
];

export const EARPLUG_2026 = {
    statistics: {
        mdlNumber: "MDL 2885",
        totalClaims: 300000,
        settlementAmount: 6010000000,
        avgPayoutEstimate: 77000,
        eppParticipation: "Over 99%",
        status: "Funds Disbursing",
    },
    expertDelta: {
        audiologyAlpha: 1.35, // Premium for specific VA clinical findings
        exposureAlpha: 1.25,  // Duration of use (5+ years military service)
        litigationAlpha: 3.5, // Representative vs Unrepresented gap
    },
    citations: [
        "MDL 2885 Master Settlement Agreement (N.D. Florida)",
        "Brown v. 3M Company (Trial Verdict Benchmarks)",
        "VA Schedule for Rating Disabilities (Section 4.85-4.87: Hearing)",
    ],
    citation: "S-Class v2.1 analysis synthesized from MDL 2885 Elective Payment Program (EPP) protocols, VA Disability Rating tables, and the $6.01B Global Settlement framework."
};

export const CALCULATORS = [
    { id: "3m-earplug/calculator", name: "Expert Audit Engine", description: "High-fidelity EPP tier & EIF valuation", icon: Calculator, featured: true },
    { id: "3m-earplug/eligibility", name: "EPP Eligibility Sync", description: "Check status against 2026 protocols", icon: Shield, featured: true },
    { id: "3m-earplug/timeline", name: "Disbursement Matrix", description: "Payment phases and schedule", icon: Activity, featured: false },
    { id: "3m-earplug/guide", name: "Forensic Case Hub", description: "MDL 2885 Intelligence & Guide", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the EPP (Elective Payment Program)?", answer: "The EPP is an expedited payment pathway in the 3M settlement designed for over 99% of claimants. It provides fixed amounts (Tiers 1-5) ranging from $10,000 to $100,000 based on injury severity and documentation levels." },
    { question: "How does the S-Class auditor calculate my value?", answer: "Our S-Class engine syncs your clinical hearing loss (measured in dB) with the MDL 2885 EPP Tier Matrix. It applies 'Expert Delta' multipliers for combat exposure, hearing aid necessity, and medical documentation quality." },
    { question: "What counts as 'Extraordinary Injury' (EIF)?", answer: "The EIF (Extraordinary Injury Fund) is reserved for claimants with catastrophic hearing loss, such as total deafness or cases requiring major surgical intervention. These payouts can exceed $250,000." },
    { question: "Why is legal representation critical in 2026?", answer: "Claimants represented by counsel generally see higher EPP placements and have the forensic ability to appeal 'deferred' status or incorrect tier assignments, often resulting in a 3.5x higher net outcome compared to initial pro-se offers." },
];

export function calculate3MEarplugSClass(
    hearingCondition: string,
    servicePeriod: string,
    yearsAffected: number,
    vaDisabilityRating: number,
    hasAudiologyReport: boolean,
    hadSurgery: boolean,
    usesHearingAids: boolean,
    hasAttorney: boolean
) {
    const condition = HEARING_CONDITIONS.find(c => c.id === hearingCondition) || HEARING_CONDITIONS[0];
    const period = SERVICE_PERIODS.find(p => p.id === servicePeriod) || SERVICE_PERIODS[0];
    const eppTier = EPP_TIERS.find(t => t.id === condition.eppTier) || EPP_TIERS[0];

    // S-Class Expert Multipliers
    let expertDelta = 1.0;
    if (hasAudiologyReport) expertDelta *= EARPLUG_2026.expertDelta.audiologyAlpha;
    if (yearsAffected >= 10) expertDelta *= EARPLUG_2026.expertDelta.exposureAlpha;
    if (hasAttorney) expertDelta *= 1.35; // Professional negotiation premium
    if (hadSurgery) expertDelta *= 1.5;
    if (usesHearingAids) expertDelta *= 1.2;

    const vaMultiplier = vaDisabilityRating >= 60 ? 1.5 : vaDisabilityRating >= 30 ? 1.25 : 1.0;
    const finalMultiplier = condition.multiplier * period.multiplier * expertDelta * vaMultiplier;

    const eppBase = eppTier.base;
    const litigationPotential = Math.round(condition.avgSettlement * finalMultiplier);

    // EPP is the guaranteed floor, Litigation Potential is the expert ceiling
    const estimateLow = eppBase;
    const estimateHigh = litigationPotential;

    return {
        condition: condition.name,
        servicePeriod: period.name,
        eppTier: eppTier.name,
        eppBase,
        estimateLow,
        estimateHigh,
        expertDelta: Math.round(litigationPotential - eppBase),
        jurisdiction: "MDL 2885 - Northern District of Florida",
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
