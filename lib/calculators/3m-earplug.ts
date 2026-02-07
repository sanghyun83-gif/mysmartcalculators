// ============================================
// 3M EARPLUG LAWSUIT CALCULATOR
// 2026 Combat Arms Earplug, Veterans Hearing Loss - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Ear } from 'lucide-react';

export const SITE = {
    name: "3M Earplug Settlement Calculator",
    tagline: "Free 2026 Combat Arms Earplug Payout Negotiator",
    description: "Calculate your 2026 3M earplug lawsuit settlement value instantly. Free Combat Arms negotiator with official MDL 2885 litigation data, VA audiology benchmarks, and tiered payout records.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/3m-earplug",
};

export const HEARING_CONDITIONS = [
    { id: "profound-loss", name: "Profound Hearing Loss", description: "Severe/total hearing loss in one or both ears", avgSettlement: 280000, multiplier: 5.0 },
    { id: "moderate-loss", name: "Moderate Hearing Loss", description: "Significant hearing impairment", avgSettlement: 150000, multiplier: 3.5 },
    { id: "tinnitus-severe", name: "Severe Tinnitus", description: "Constant ringing affecting daily life", avgSettlement: 100000, multiplier: 2.5 },
    { id: "tinnitus-mild", name: "Mild Tinnitus", description: "Intermittent ringing", avgSettlement: 50000, multiplier: 1.5 },
];

export const SERVICE_PERIODS = [
    { id: "iraq-afghanistan", name: "Iraq/Afghanistan (2003-2021)", multiplier: 1.3, description: "Combat deployments with CAEv2 use" },
    { id: "training", name: "Training Only", multiplier: 1.0, description: "Stateside training with CAEv2" },
    { id: "multiple-deployments", name: "Multiple Deployments", multiplier: 1.5, description: "Extended combat exposure" },
];

export const SETTLEMENT_TIERS = [
    { tier: "Tier 1", description: "Severe hearing loss, documented CAEv2 use", range: "$200,000 - $300,000" },
    { tier: "Tier 2", description: "Moderate hearing loss + tinnitus", range: "$100,000 - $200,000" },
    { tier: "Tier 3", description: "Tinnitus only, strong documentation", range: "$50,000 - $100,000" },
    { tier: "Tier 4", description: "Mild symptoms, limited documentation", range: "$10,000 - $50,000" },
];

export const EARPLUG_2026 = {
    statistics: {
        mdlNumber: "MDL 2885",
        totalClaims: 300000,
        settlementAmount: 6000000000,
        avgPayoutEstimate: 77000,
        status: "Settlement Processing",
    },
    citations: [
        "MDL 2885 - 3M Combat Arms Earplug Products Liability Litigation (N.D. Florida)",
        "VA M21-1 Adjudication Procedures (Hearing Loss & Tinnitus)",
        "DoD Occupational Audiology & Combat Earplug Distribution Logs",
    ],
    citation: "Based on official MDL 2885 settlement protocol data, VA audiology service records, and Department of Defense combat equipment deployment logs."
};

export const CALCULATORS = [
    { id: "3m-earplug/calculator", name: "Settlement Calculator", description: "Estimate your 3M earplug payout", icon: Calculator, featured: true },
    { id: "3m-earplug/eligibility", name: "Eligibility Check", description: "See if you qualify", icon: AlertTriangle, featured: true },
    { id: "3m-earplug/timeline", name: "Payment Timeline", description: "When to expect compensation", icon: Ear, featured: false },
    { id: "3m-earplug/guide", name: "Claims Guide", description: "How to file or check your claim", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the 3M earplug settlement amount?", answer: "3M agreed to pay $6 billion to resolve approximately 300,000 claims. Individual payouts depend on injury severity, with estimates ranging from $10,000 to $300,000 or more for the most severe cases." },
    { question: "Who qualifies for the 3M earplug settlement?", answer: "Veterans and military personnel who used Combat Arms Earplugs Version 2 (CAEv2) between 2003-2015 and developed hearing loss or tinnitus may qualify. Service records and medical documentation are required." },
    { question: "What is the average 3M earplug payout?", answer: "The average payout is estimated at $77,000, though amounts vary significantly based on severity. Severe hearing loss cases may receive $200,000+, while mild tinnitus cases may receive $10,000-$50,000." },
    { question: "When will I receive my 3M earplug payment?", answer: "Settlement payments are being processed in phases. Initial payments began in 2024, with most claimants expected to receive funds through 2026. Timing depends on claim tier and verification." },
    { question: "What was wrong with the 3M earplugs?", answer: "The Combat Arms Earplugs (CAEv2) were allegedly too short to properly seal the ear canal, allowing damaging noise to enter. 3M allegedly knew of the defect but continued selling to the military without warning." },
    { question: "Can I still file a 3M earplug claim?", answer: "The filing deadline for the MDL has passed. However, some late claims may be processed. If you haven't filed, consult an attorney immediately to determine if you can still participate." },
    { question: "Do I need a lawyer for the 3M settlement?", answer: "If you already filed through an attorney, they will handle the settlement process. Their contingency fee (typically 30-40%) is deducted from your payment. If you filed yourself, you retain the full amount." },
    { question: "What evidence do I need?", answer: "Key evidence includes: military service records, VA audiological exams, diagnosis of hearing loss or tinnitus, and documentation of CAEv2 earplug issuance or use." },
    { question: "Is the settlement taxable?", answer: "Generally, compensation for physical injuries (hearing loss) is not taxable under IRS rules. However, portions allocated to lost wages may be taxable. Consult a tax professional." },
    { question: "What if I was denied?", answer: "Denials can often be appealed with additional documentation. Common reasons include insufficient medical evidence or failure to prove CAEv2 use. An attorney can help with appeals." },
];

export function calculate3MEarplugSettlement(
    hearingCondition: string,
    servicePeriod: string,
    yearsAffected: number,
    vaDisabilityRating: number,
    hasDocumentation: boolean,
    hadSurgery: boolean,
    usesHearingAids: boolean
) {
    const condition = HEARING_CONDITIONS.find(c => c.id === hearingCondition) || HEARING_CONDITIONS[0];
    const period = SERVICE_PERIODS.find(p => p.id === servicePeriod) || SERVICE_PERIODS[0];

    const yearsBonus = Math.min(yearsAffected / 10, 1.3);
    const vaBonus = vaDisabilityRating >= 50 ? 1.3 : vaDisabilityRating >= 30 ? 1.15 : 1.0;
    const docBonus = hasDocumentation ? 1.2 : 1.0;
    const surgeryBonus = hadSurgery ? 1.25 : 1.0;
    const aidBonus = usesHearingAids ? 1.15 : 1.0;

    const baseMultiplier = condition.multiplier * period.multiplier * yearsBonus * vaBonus * docBonus * surgeryBonus * aidBonus;
    const baseAmount = condition.avgSettlement;

    const estimateLow = Math.round(baseAmount * 0.7);
    const estimateHigh = Math.round(baseAmount * baseMultiplier);

    return {
        condition: condition.name,
        servicePeriod: period.name,
        estimateLow,
        estimateHigh,
        tier: condition.multiplier >= 4 ? "Tier 1" : condition.multiplier >= 2.5 ? "Tier 2" : "Tier 3-4",
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
