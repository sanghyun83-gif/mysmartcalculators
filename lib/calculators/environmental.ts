// ============================================
// ENVIRONMENTAL LAWSUIT CALCULATOR
// 2026 Pollution & Environmental Damage Claims
// ============================================

import { Calculator, FileText, Scale, AlertTriangle, TreePine } from 'lucide-react';

export const SITE = {
    name: "Environmental Lawsuit Calculator",
    tagline: "Free 2026 Pollution & Environmental Damage Calculator",
    description: "Calculate environmental lawsuit settlements. Air pollution, water contamination, soil damage, community harm. Based on 2026 EPA and environmental law data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/environmental",
};

export const POLLUTION_TYPES = [
    { id: "air-pollution", name: "Air Pollution", description: "Industrial emissions, factory smoke, chemical releases", avgSettlement: 450000, multiplier: 3.5 },
    { id: "water-pollution", name: "Water Pollution", description: "Industrial discharge, agricultural runoff, sewage", avgSettlement: 550000, multiplier: 4.0 },
    { id: "soil-contamination", name: "Soil Contamination", description: "Hazardous waste, chemical spills, landfill leaks", avgSettlement: 480000, multiplier: 3.8 },
    { id: "noise-pollution", name: "Noise Pollution", description: "Industrial noise, construction, airport proximity", avgSettlement: 150000, multiplier: 1.5 },
];

export const DAMAGE_TYPES = [
    { id: "property", name: "Property Damage", multiplier: 2.0, description: "Contaminated land, diminished value" },
    { id: "health", name: "Health Effects", multiplier: 3.5, description: "Respiratory issues, cancer, chronic illness" },
    { id: "business", name: "Business Loss", multiplier: 2.5, description: "Lost revenue, relocation costs" },
    { id: "community", name: "Community Harm", multiplier: 3.0, description: "Class action, widespread impact" },
];

export const VIOLATION_TYPES = [
    { id: "clean-air", name: "Clean Air Act Violation", statute: "42 U.S.C. § 7401" },
    { id: "clean-water", name: "Clean Water Act Violation", statute: "33 U.S.C. § 1251" },
    { id: "cercla", name: "CERCLA/Superfund", statute: "42 U.S.C. § 9601" },
    { id: "rcra", name: "RCRA (Hazardous Waste)", statute: "42 U.S.C. § 6901" },
];

export const ENVIRONMENTAL_2026 = {
    statistics: {
        avgSettlement: 425000,
        epaPenalties: 4200000000,
        superfundSites: 1336,
        cleanWaterViolations: 23000,
        annualFilings: 8500,
    },
    citations: [
        "EPA Enforcement Annual Results 2026",
        "Clean Air Act Enforcement Data",
        "Clean Water Act Violation Reports",
    ],
};

export const CALCULATORS = [
    { id: "environmental/calculator", name: "Settlement Calculator", description: "Calculate environmental lawsuit value", icon: Calculator, featured: true },
    { id: "environmental/violations", name: "Violation Types", description: "Environmental law violations guide", icon: Scale, featured: true },
    { id: "environmental/property", name: "Property Damage", description: "Land contamination claims", icon: TreePine, featured: false },
    { id: "environmental/guide", name: "Claims Guide", description: "How to file an environmental suit", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is an environmental lawsuit?", answer: "An environmental lawsuit seeks compensation for harm caused by pollution or contamination. Claims can include property damage, health effects, business losses, and remediation costs from air, water, or soil pollution." },
    { question: "How much can I get for an environmental claim?", answer: "Environmental settlements average $200,000-$600,000 for individual claims. Class actions involving community-wide contamination can reach millions or billions. Property damage claims often include diminished property value plus remediation costs." },
    { question: "Who can sue for environmental damage?", answer: "Property owners, residents near contamination, businesses affected by pollution, and communities harmed by environmental violations can all file claims. The EPA and state agencies can also pursue enforcement actions." },
    { question: "What environmental laws protect me?", answer: "Key laws include the Clean Air Act, Clean Water Act, CERCLA (Superfund), RCRA (hazardous waste), and state environmental protection laws. These create liability for polluters and rights for victims." },
    { question: "What is a Superfund site?", answer: "Superfund sites are contaminated locations on the EPA's National Priorities List. The CERCLA law (Superfund) holds responsible parties strictly liable for cleanup costs and victim compensation." },
    { question: "Can I sue for property value loss?", answer: "Yes. Environmental contamination often reduces property values by 15-50%. You can recover for diminished value, remediation costs, loss of use, and relocation expenses." },
    { question: "What evidence do I need?", answer: "Key evidence includes: environmental testing showing contamination, property appraisals showing value loss, medical records (if health effects), and documentation of the polluter's activities." },
    { question: "What is the statute of limitations?", answer: "Varies by state (2-6 years typically). The 'discovery rule' may apply, starting the clock when contamination was discovered. Continuing violations may extend the deadline." },
    { question: "Can I join a class action?", answer: "Yes. Environmental cases often proceed as class actions when many people are affected. Class members share in any settlement based on their individual damages." },
    { question: "Do I need an environmental lawyer?", answer: "Strongly recommended. Environmental cases require expert testimony, scientific evidence, and knowledge of complex regulations. Most environmental attorneys work on contingency (25-40%)." },
];

export function calculateEnvironmentalSettlement(
    pollutionType: string,
    damageType: string,
    propertyValue: number,
    remediationCost: number,
    businessLoss: number,
    yearsAffected: number,
    numberOfPlaintiffs: number
) {
    const pollution = POLLUTION_TYPES.find(p => p.id === pollutionType) || POLLUTION_TYPES[0];
    const damage = DAMAGE_TYPES.find(d => d.id === damageType) || DAMAGE_TYPES[0];

    const yearMultiplier = Math.min(yearsAffected / 3, 2.0);
    const classMultiplier = numberOfPlaintiffs > 50 ? 0.85 : numberOfPlaintiffs > 10 ? 0.9 : 1.0;
    const baseMultiplier = pollution.multiplier * damage.multiplier * yearMultiplier * classMultiplier;

    const propertyDamage = propertyValue * 0.25; // Assume 25% value loss
    const economicDamages = propertyDamage + remediationCost + businessLoss;
    const nonEconomicLow = Math.round(economicDamages * baseMultiplier * 0.5);
    const nonEconomicHigh = Math.round(economicDamages * baseMultiplier * 1.0);

    return {
        pollutionType: pollution.name,
        damageType: damage.name,
        propertyDamage,
        remediationCost,
        businessLoss,
        nonEconomicLow,
        nonEconomicHigh,
        totalLow: Math.round(economicDamages + nonEconomicLow),
        totalHigh: Math.round(economicDamages + nonEconomicHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
