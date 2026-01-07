// ============================================
// E-SCOOTER ACCIDENT LAWSUIT CALCULATOR
// 2026 Micromobility Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle as AlertIcon, Building2 } from 'lucide-react';

export const SITE = {
    name: "E-Scooter Accident Calculator",
    tagline: "Free 2026 E-Scooter Settlement Estimator",
    description: "Calculate e-scooter accident lawsuit settlements. Lime, Bird, rental scooter injuries. Based on 2026 CPSC and urban data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/e-scooter",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal e-scooter accident claims", avgSettlement: 700000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from falls", avgSettlement: 450000, multiplier: 4.0 },
    { id: "facial-trauma", name: "Facial Trauma / Disfigurement", description: "Face injuries from impact", avgSettlement: 300000, multiplier: 3.5 },
    { id: "fractures", name: "Broken Bones / Fractures", description: "Arm, leg, wrist fractures", avgSettlement: 125000, multiplier: 2.5 },
    { id: "soft-tissue", name: "Soft Tissue Injuries", description: "Sprains, strains, contusions", avgSettlement: 50000, multiplier: 1.5 },
];

export const ACCIDENT_CAUSES = [
    { id: "defective-scooter", name: "Defective E-Scooter", multiplier: 1.4 },
    { id: "vehicle-collision", name: "Motor Vehicle Collision", multiplier: 1.35 },
    { id: "sidewalk-defect", name: "Sidewalk / Road Defect", multiplier: 1.25 },
    { id: "rider-error", name: "Rider Error", multiplier: 1.0 },
];

export const SCOOTER_COMPANIES = [
    { id: "lime", name: "Lime" },
    { id: "bird", name: "Bird" },
    { id: "spin", name: "Spin" },
    { id: "tier", name: "Tier" },
    { id: "other", name: "Other / Private" },
];

export const ESCOOTER_2026 = {
    statistics: {
        injuries: "50,000+ ER Visits/Year",
        deaths: "60+ Deaths/Year",
        growth: "300% Increase Since 2019",
        source: "CPSC / CDC Data",
    },
    citations: [
        "Consumer Product Safety Commission (CPSC) E-Scooter Report 2026",
        "CDC Micromobility Injury Study 2026",
        "Urban Mobility Litigation Trends Report",
    ],
};

export const CALCULATORS = [
    { id: "e-scooter/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "e-scooter/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "e-scooter/companies", name: "Rental Companies", description: "Company liability info", icon: Building2, featured: false },
    { id: "e-scooter/injuries", name: "Common Injuries", description: "Injury types & severity", icon: AlertIcon, featured: false },
];

export const FAQS = [
    { question: "What is an e-scooter accident lawsuit?", answer: "E-scooter accident lawsuits seek compensation for injuries caused by defective scooters, negligent drivers, dangerous road conditions, or rental company negligence. Claims can target companies like Lime, Bird, or municipalities." },
    { question: "Can I sue Lime or Bird for my injuries?", answer: "Yes. Rental companies can be liable for defective scooters, inadequate maintenance, failure to warn of dangers, or allowing underage riders. Their user agreements may have arbitration clauses but do not bar all claims." },
    { question: "What causes most e-scooter accidents?", answer: "Common causes include road hazards (potholes, debris), vehicle collisions, defective brakes or throttle, sidewalk cracks, and inexperienced riders without helmets." },
    { question: "Do I need a helmet to recover damages?", answer: "Not wearing a helmet may reduce your recovery in some states due to comparative negligence. However, many e-scooter cities have no helmet requirements for adults." },
    { question: "Can I sue if I hit a pothole?", answer: "Yes. Cities and municipalities can be liable for dangerous road conditions that cause e-scooter accidents. However, government immunity rules may limit claims." },
    { question: "What if a car hit me on an e-scooter?", answer: "You can file a claim against the driver's insurance just like any vehicle accident. E-scooter riders have the same rights as pedestrians and cyclists in most cases." },
    { question: "Are e-scooter accidents covered by insurance?", answer: "Rental companies typically do not provide rider insurance. Your health insurance, auto policy (uninsured motorist), or umbrella policy may cover injuries." },
    { question: "What damages can I recover?", answer: "Compensation can include medical expenses, lost wages, pain and suffering, disability, facial disfigurement, dental work, and emotional distress." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-4 years). Claims against cities may have shorter notice requirements (often 30-180 days)." },
    { question: "Do user agreements bar lawsuits?", answer: "E-scooter apps have arbitration clauses, but these may not cover all claims (product liability, gross negligence). An attorney can evaluate your specific situation." },
];

export function calculateEScooterSettlement(
    injuryType: string,
    accidentCause: string,
    scooterCompany: string,
    medicalExpenses: number,
    woreHelmet: boolean,
    companyNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];

    const helmetPenalty = woreHelmet ? 1.0 : 0.85;
    const negligenceBonus = companyNegligence ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * helmetPenalty * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentCause: cause.name,
        scooterCompany: SCOOTER_COMPANIES.find(s => s.id === scooterCompany)?.name || "Unknown",
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
