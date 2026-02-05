// ============================================
// SKI ACCIDENT LAWSUIT CALCULATOR
// 2026 Ski Resort Claims - Advanced Version
// ============================================

import { Calculator, FileText, Mountain, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Ski Accident Calculator",
    tagline: "Free 2026 Ski Accident Settlement Estimator",
    description: "Calculate ski accident lawsuit settlements. Ski lift malfunctions, collisions, resort negligence claims. Based on 2026 NSAA data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/ski-accident",
};

export const INJURY_TYPES = [
    { id: "wrongful-death", name: "Wrongful Death", description: "Fatal ski accidents", avgSettlement: 1200000, multiplier: 5.0 },
    { id: "tbi", name: "Traumatic Brain Injury", description: "Head trauma from collisions", avgSettlement: 550000, multiplier: 4.0 },
    { id: "spinal", name: "Spinal / Paralysis", description: "Catastrophic spine injuries", avgSettlement: 900000, multiplier: 4.5 },
    { id: "fractures", name: "Multiple Fractures", description: "Broken bones", avgSettlement: 100000, multiplier: 2.5 },
    { id: "acl-injury", name: "ACL/MCL Tear", description: "Knee ligament injuries", avgSettlement: 75000, multiplier: 2.0 },
];

export const ACCIDENT_CAUSES = [
    { id: "lift-malfunction", name: "Ski Lift Malfunction", multiplier: 1.6 },
    { id: "collision-skier", name: "Skier-to-Skier Collision", multiplier: 1.2 },
    { id: "trail-hazard", name: "Trail Hazard / Grooming", multiplier: 1.4 },
    { id: "equipment-failure", name: "Rental Equipment Failure", multiplier: 1.35 },
];

export const SKI_RESORTS = [
    { id: "major", name: "Major Resort (Vail, Aspen)", multiplier: 1.2 },
    { id: "regional", name: "Regional Resort", multiplier: 1.0 },
    { id: "small", name: "Small Local Resort", multiplier: 0.9 },
];

export const SKI_2026 = {
    statistics: {
        injuries: "40+ Fatalities/Year",
        visits: "60M+ Visits/Year",
        source: "NSAA Data",
    },
    citations: [
        "National Ski Areas Association (NSAA) Safety Report 2026",
        "Ski Area Liability Case Law Analysis 2026",
        "Colorado Ski Safety Act Court Interpretations 2026",
    ],
};

export const CALCULATORS = [
    { id: "ski-accident/calculator", name: "Settlement Calculator", description: "Estimate claim value", icon: Calculator, featured: true },
    { id: "ski-accident/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "ski-accident/liability", name: "Resort Liability", description: "When resorts are liable", icon: Mountain, featured: false },
    { id: "ski-accident/inherent-risk", name: "Inherent Risk Doctrine", description: "Understanding waivers", icon: AlertTriangle, featured: false },
];

export const FAQS = [
    { question: "What is a ski accident lawsuit?", answer: "Ski accident lawsuits seek compensation for injuries caused by ski resort negligence, ski lift malfunctions, or equipment failures. However, ski resorts have strong defenses under inherent risk doctrine." },
    { question: "Can I sue a ski resort?", answer: "Yes, but it's difficult. Most ski tickets contain liability waivers, and most states have Ski Area Safety Acts that protect resorts from inherent risks. However, negligence claims may still succeed." },
    { question: "What is inherent risk in skiing?", answer: "Inherent risk refers to dangers natural to skiing - ice, snow conditions, variations in terrain. Resorts are generally not liable for inherent risks, but ARE liable for negligent maintenance or unmarked hazards." },
    { question: "Can I sue for ski lift accidents?", answer: "Yes. Ski lifts are common carriers subject to higher safety standards. Resorts cannot waive liability for ski lift mechanical failures or operator negligence. These are often the strongest ski accident claims." },
    { question: "What about rental equipment failures?", answer: "Rental shops have a duty to provide properly maintained equipment and correct bindings. If faulty equipment caused your injury, you may have a claim against both the shop and manufacturer." },
    { question: "Can I sue another skier who hit me?", answer: "Yes. Skiers have a duty to ski in control and yield to downhill skiers. If another skier collided with you due to recklessness, they may be personally liable." },
    { question: "What damages can I recover?", answer: "You may recover medical expenses, lost wages, future medical care, pain and suffering, and potentially punitive damages for egregious negligence." },
    { question: "Do liability waivers always apply?", answer: "No. Waivers cannot protect resorts from gross negligence, willful misconduct, or violations of statutory duties. An attorney can evaluate if the waiver applies to your situation." },
    { question: "What is the Colorado Ski Safety Act?", answer: "The Colorado Ski Safety Act (and similar laws in other states) limits resort liability for inherent skiing risks but does NOT protect resorts from negligent trail maintenance or mechanical failures." },
    { question: "How long do I have to file?", answer: "Statutes of limitations vary by state (typically 2-3 years). Some states have shorter periods for ski resort claims. Consult an attorney promptly after your accident." },
];

export function calculateSkiSettlement(
    injuryType: string,
    accidentCause: string,
    resortType: string,
    medicalExpenses: number,
    liftMalfunction: boolean,
    resortNegligence: boolean,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const cause = ACCIDENT_CAUSES.find(c => c.id === accidentCause) || ACCIDENT_CAUSES[0];
    const resort = SKI_RESORTS.find(r => r.id === resortType) || SKI_RESORTS[0];

    const liftBonus = liftMalfunction ? 1.4 : 1.0;
    const negligenceBonus = resortNegligence ? 1.25 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * cause.multiplier * resort.multiplier * liftBonus * negligenceBonus * docsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        accidentCause: cause.name,
        resortType: resort.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
