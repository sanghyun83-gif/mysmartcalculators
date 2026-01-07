// ============================================
// SCHOOL INJURY LAWSUIT CALCULATOR
// 2026 School Liability Claims - Advanced Version
// ============================================

import { Calculator, FileText, School, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "School Injury Calculator",
    tagline: "Free 2026 School Injury Settlement Estimator",
    description: "Calculate school injury lawsuit settlements. Playground accidents, bullying, sports injuries. Based on 2026 NCES data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/school-injury",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal school incidents", avgSettlement: 1800000, multiplier: 5.5 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/sports", avgSettlement: 550000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Paralysis", description: "Catastrophic injuries", avgSettlement: 800000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones", avgSettlement: 95000, multiplier: 2.5 },
    { id: "bullying-trauma", name: "Bullying / Psychological", description: "Emotional trauma claims", avgSettlement: 150000, multiplier: 2.0 },
];

export const INCIDENT_TYPES = [
    { id: "playground", name: "Playground Accident", multiplier: 1.3 },
    { id: "sports", name: "Sports Injury", multiplier: 1.2 },
    { id: "bullying", name: "Bullying / Assault", multiplier: 1.5 },
    { id: "bus", name: "School Bus Accident", multiplier: 1.4 },
];

export const SCHOOL_TYPES = [
    { id: "public", name: "Public School", multiplier: 0.9 },
    { id: "private", name: "Private School", multiplier: 1.2 },
    { id: "charter", name: "Charter School", multiplier: 1.0 },
];

export const SCHOOL_2026 = {
    statistics: {
        students: "50M+ K-12 Students",
        injuries: "2.6M+ Annual Injuries",
        source: "NCES / CDC Data",
    },
    citations: [
        "National Center for Education Statistics (NCES) School Safety Report 2026",
        "CDC School Injury Surveillance Data 2026",
        "State Government Tort Claims Act Summary 2026",
    ],
};

export const CALCULATORS = [
    { id: "school-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "school-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "school-injury/immunity", name: "Government Immunity", description: "Public school defenses", icon: School, featured: false },
    { id: "school-injury/bullying", name: "Bullying Claims", description: "Anti-bullying lawsuits", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is a school injury lawsuit?", answer: "School injury lawsuits seek compensation for injuries that occur at school due to negligent supervision, dangerous conditions, or failure to protect students from foreseeable harm." },
    { question: "Can I sue a public school?", answer: "Yes, but public schools have government immunity protections. Most states have tort claims acts that limit damages and require special notice procedures within 60-180 days." },
    { question: "What about private school lawsuits?", answer: "Private schools don't have government immunity. They can be sued like any private business, often with higher damage caps and fewer procedural hurdles." },
    { question: "Can I sue for playground injuries?", answer: "Yes, if the school knew of dangerous equipment or conditions and failed to address them. Schools must maintain safe playground equipment and provide adequate supervision." },
    { question: "What about bullying lawsuits?", answer: "Schools can be liable for bullying if they knew about ongoing harassment and failed to take reasonable steps to stop it. Documentation of prior complaints strengthens claims." },
    { question: "Are sports injuries covered?", answer: "Schools are generally not liable for inherent sports risks. However, they can be liable for inadequate safety equipment, dangerous conditions, or failure to provide proper medical response." },
    { question: "What is the tort claims notice?", answer: "For public schools, you must file a formal notice of claim within a short deadline (often 60-180 days). Failure to file proper notice can bar your lawsuit entirely." },
    { question: "What damages can I recover?", answer: "You may recover medical expenses, future medical costs, pain and suffering, and emotional distress. Some states cap damages against public schools." },
    { question: "Can I sue individual teachers?", answer: "Teachers often have qualified immunity for acts within their job duties. However, they may be personally liable for willful misconduct or actions outside their authority." },
    { question: "How long do I have to file?", answer: "Notice requirements for public schools are very short (60-180 days). Regular statutes of limitations (2-3 years) apply to the actual lawsuit. Act quickly and consult an attorney." },
];

export function calculateSchoolSettlement(
    injuryType: string,
    incidentType: string,
    schoolType: string,
    medicalExpenses: number,
    priorComplaints: boolean,
    bullyingInvolved: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const incident = INCIDENT_TYPES.find(i => i.id === incidentType) || INCIDENT_TYPES[0];
    const school = SCHOOL_TYPES.find(s => s.id === schoolType) || SCHOOL_TYPES[0];

    const priorBonus = priorComplaints ? 1.25 : 1.0;
    const bullyingBonus = bullyingInvolved ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * incident.multiplier * school.multiplier * priorBonus * bullyingBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        incidentType: incident.name,
        schoolType: school.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
