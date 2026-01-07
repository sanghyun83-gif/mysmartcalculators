// ============================================
// SPORTS INJURY LAWSUIT CALCULATOR
// 2026 CTE/Concussion Claims - Advanced Version
// ============================================

import { Calculator, FileText, Trophy, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Sports Injury Calculator",
    tagline: "Free 2026 Sports Injury Settlement Estimator",
    description: "Calculate sports injury lawsuit settlements. CTE, concussion, youth sports injuries. Based on 2026 CDC sports injury data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/sports-injury",
};

export const INJURY_TYPES = [
    { id: "cte", name: "CTE / Chronic Brain Injury", description: "Repeated head trauma conditions", avgSettlement: 1500000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Severe concussion/head trauma", avgSettlement: 550000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Paralysis", description: "Catastrophic spine injuries", avgSettlement: 900000, multiplier: 4.5 },
    { id: "acl-injury", name: "ACL / Knee Injury", description: "Ligament tears", avgSettlement: 120000, multiplier: 2.5 },
    { id: "concussion", name: "Concussion", description: "Single head injury", avgSettlement: 75000, multiplier: 2.0 },
];

export const SPORT_TYPES = [
    { id: "football", name: "Football", multiplier: 1.5 },
    { id: "soccer", name: "Soccer", multiplier: 1.2 },
    { id: "hockey", name: "Hockey", multiplier: 1.4 },
    { id: "other", name: "Other Sports", multiplier: 1.0 },
];

export const CONTEXT_TYPES = [
    { id: "youth", name: "Youth / School Sports", multiplier: 1.4 },
    { id: "college", name: "College Athletics", multiplier: 1.3 },
    { id: "professional", name: "Professional Sports", multiplier: 1.1 },
    { id: "recreational", name: "Recreational Sports", multiplier: 1.0 },
];

export const SPORTS_2026 = {
    statistics: {
        injuries: "8.6M+ Annual Sports Injuries",
        concussions: "300,000+ Youth Concussions",
        source: "CDC / NSGA Data",
    },
    citations: [
        "Centers for Disease Control (CDC) Sports Injury Report 2026",
        "National Collegiate Athletic Association (NCAA) Concussion Protocol 2026",
        "Youth Sports Safety Alliance Guidelines 2026",
    ],
};

export const CALCULATORS = [
    { id: "sports-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "sports-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "sports-injury/concussion", name: "Concussion Claims", description: "CTE & head injury lawsuits", icon: AlertTriangle, featured: false },
    { id: "sports-injury/assumption-risk", name: "Assumption of Risk", description: "Defense & exceptions", icon: Trophy, featured: false },
];

export const FAQS = [
    { question: "What is a sports injury lawsuit?", answer: "Sports injury lawsuits seek compensation for injuries caused by negligence in sports settings. Claims typically target coaches, schools, leagues, or equipment manufacturers rather than other players." },
    { question: "What is assumption of risk?", answer: "Assumption of risk is a defense where defendants argue the injured person voluntarily accepted known sports risks. However, this doesn't protect against negligent coaching, unsafe conditions, or defective equipment." },
    { question: "Can I sue for a concussion?", answer: "Yes. Concussion lawsuits are increasingly successful, especially when coaches or schools failed to follow concussion protocols, allowed return-to-play too soon, or ignored symptoms." },
    { question: "What about CTE claims?", answer: "CTE (Chronic Traumatic Encephalopathy) claims allege that organizations knew about repeated head trauma risks but failed to protect athletes. These are complex but can result in large settlements." },
    { question: "Are youth sports injuries covered?", answer: "Youth sports have higher standards of care. Schools and leagues have greater responsibility to protect children. Failure to provide proper supervision or medical attention can create liability." },
    { question: "What about waivers I signed?", answer: "Waivers don't protect against gross negligence, intentional misconduct, or violations of safety protocols. They also often don't apply to minors. An attorney can evaluate your specific waiver." },
    { question: "Can I sue a coach?", answer: "Coaches can be liable for negligent training, ignoring injuries, allowing dangerous play, or failing to follow concussion protocols. Individual liability depends on employment status." },
    { question: "What about equipment defects?", answer: "Defective sports equipment (helmets, pads, etc.) can support product liability claims against manufacturers. These claims don't require proving negligence." },
    { question: "What damages can I recover?", answer: "You may recover medical expenses, future treatment costs, lost athletic scholarships, pain and suffering, and long-term disability compensation for career-ending injuries." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). For minors, the clock often doesn't start until age 18. For CTE claims, discovery rules may extend deadlines." },
];

export function calculateSportsSettlement(
    injuryType: string,
    sportType: string,
    contextType: string,
    medicalExpenses: number,
    concussionProtocolViolation: boolean,
    youthSports: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const sport = SPORT_TYPES.find(s => s.id === sportType) || SPORT_TYPES[0];
    const context = CONTEXT_TYPES.find(c => c.id === contextType) || CONTEXT_TYPES[0];

    const protocolBonus = concussionProtocolViolation ? 1.35 : 1.0;
    const youthBonus = youthSports ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * sport.multiplier * context.multiplier * protocolBonus * youthBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        sportType: sport.name,
        contextType: context.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
