// ============================================
// DAYCARE INJURY LAWSUIT CALCULATOR
// 2026 Child Care Negligence - Advanced Version
// ============================================

import { Calculator, FileText, Baby, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Daycare Injury Calculator",
    tagline: "Free 2026 Daycare Injury Settlement Estimator",
    description: "Calculate daycare injury lawsuit settlements. Child abuse, negligent supervision, licensing violations. Based on 2026 childcare safety data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/daycare-injury",
};

export const INJURY_TYPES = [
    { id: "abuse-death", name: "Wrongful Death / Fatal Abuse", description: "Fatal childcare incidents", avgSettlement: 2500000, multiplier: 6.0 },
    { id: "abuse", name: "Physical / Sexual Abuse", description: "Child abuse claims", avgSettlement: 1200000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls/abuse", avgSettlement: 650000, multiplier: 4.0 },
    { id: "fractures", name: "Broken Bones / Fractures", description: "Skeletal injuries", avgSettlement: 125000, multiplier: 2.5 },
    { id: "choking", name: "Choking / Aspiration", description: "Airway obstruction injuries", avgSettlement: 400000, multiplier: 3.5 },
];

export const NEGLIGENCE_TYPES = [
    { id: "abuse", name: "Abuse by Staff", multiplier: 1.8 },
    { id: "supervision", name: "Inadequate Supervision", multiplier: 1.4 },
    { id: "staffing", name: "Understaffing / Ratio Violations", multiplier: 1.35 },
    { id: "licensing", name: "Licensing Violations", multiplier: 1.5 },
];

export const FACILITY_TYPES = [
    { id: "licensed", name: "Licensed Daycare Center", multiplier: 1.2 },
    { id: "home", name: "Home-Based Daycare", multiplier: 1.0 },
    { id: "unlicensed", name: "Unlicensed Facility", multiplier: 0.9 },
];

export const DAYCARE_2026 = {
    statistics: {
        children: "12M+ Children in Daycare",
        fatalities: "850+ Daycare Deaths (2015-2024)",
        source: "HHS / State Licensing Data",
    },
    citations: [
        "U.S. Department of Health and Human Services Childcare Safety Report 2026",
        "State Daycare Licensing Violation Database 2026",
        "National Association for the Education of Young Children (NAEYC) Standards 2026",
    ],
};

export const CALCULATORS = [
    { id: "daycare-injury/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "daycare-injury/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "daycare-injury/negligence", name: "Negligence Types", description: "Forms of daycare negligence", icon: AlertTriangle, featured: false },
    { id: "daycare-injury/licensing", name: "Licensing Violations", description: "State licensing issues", icon: Baby, featured: false },
];

export const FAQS = [
    { question: "What is a daycare injury lawsuit?", answer: "Daycare injury lawsuits seek compensation for children injured due to negligent supervision, abuse, or unsafe conditions at childcare facilities. Both the facility and individual employees can be held liable." },
    { question: "What constitutes daycare negligence?", answer: "Daycare negligence includes inadequate supervision, failure to maintain safe premises, ignoring known hazards, violating staff-to-child ratios, and failing to screen employees properly." },
    { question: "Can I sue for daycare abuse?", answer: "Yes. If a daycare employee abused your child, you can sue both the employee personally and the daycare facility for negligent hiring, supervision, and retention of the abuser." },
    { question: "What are staff-to-child ratio violations?", answer: "States set required ratios (e.g., 1 adult per 4 infants). When facilities exceed these ratios, children don't receive adequate supervision, creating liability for any resulting injuries." },
    { question: "What if the daycare was unlicensed?", answer: "Operating without a license is itself negligence. However, damages may be harder to collect because unlicensed facilities often lack insurance." },
    { question: "How do I prove daycare negligence?", answer: "Evidence includes medical records, incident reports, surveillance footage, licensing inspection records, employee background check failures, and witness statements from other parents." },
    { question: "What damages can I recover?", answer: "You may recover medical expenses, future treatment costs, pain and suffering, emotional distress, and therapy costs. In abuse cases, punitive damages may also be available." },
    { question: "Are there criminal charges too?", answer: "Yes. Criminal charges (child abuse, endangerment, manslaughter) may run parallel to civil lawsuits. Criminal convictions strengthen civil claims." },
    { question: "What about emotional trauma?", answer: "Children suffering emotional trauma from abuse or witnessing incidents can recover damages for therapy, psychological treatment, and long-term emotional distress." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). For child abuse claims, the clock may not start until the child reaches adulthood. Consult an attorney promptly." },
];

export function calculateDaycareSettlement(
    injuryType: string,
    negligenceType: string,
    facilityType: string,
    medicalExpenses: number,
    abuseInvolved: boolean,
    licensingViolations: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const negligence = NEGLIGENCE_TYPES.find(n => n.id === negligenceType) || NEGLIGENCE_TYPES[0];
    const facility = FACILITY_TYPES.find(f => f.id === facilityType) || FACILITY_TYPES[0];

    const abuseBonus = abuseInvolved ? 1.5 : 1.0;
    const licensingBonus = licensingViolations ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * negligence.multiplier * facility.multiplier * abuseBonus * licensingBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        negligenceType: negligence.name,
        facilityType: facility.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
