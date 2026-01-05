// ============================================
// TOXIC TORT SETTLEMENT CALCULATOR
// 2026 Environmental & Chemical Exposure Claims
// ============================================

import { Calculator, FileText, Scale, AlertTriangle, Shield, Beaker } from 'lucide-react';

export const SITE = {
    name: "Toxic Tort Settlement Calculator",
    tagline: "Free 2026 Chemical & Environmental Exposure Calculator",
    description: "Calculate your toxic tort settlement. Chemical exposure, water contamination, environmental pollution claims. Based on 2026 EPA, OSHA, and court data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/toxic-tort",
};

export const TOXIC_EXPOSURE_TYPES = [
    { id: "water-contamination", name: "Water Contamination", description: "PFAS, lead, industrial chemicals in drinking water", avgSettlement: 850000, multiplier: 5.0 },
    { id: "air-pollution", name: "Industrial Air Pollution", description: "Factory emissions, chemical plants, refineries", avgSettlement: 650000, multiplier: 4.0 },
    { id: "soil-contamination", name: "Soil Contamination", description: "Hazardous waste sites, landfills, military bases", avgSettlement: 550000, multiplier: 3.5 },
    { id: "chemical-exposure", name: "Workplace Chemical Exposure", description: "Industrial chemicals, solvents, pesticides", avgSettlement: 450000, multiplier: 3.0 },
    { id: "pharmaceutical", name: "Pharmaceutical Contamination", description: "Drug contamination, manufacturing defects", avgSettlement: 750000, multiplier: 4.5 },
    { id: "radiation", name: "Radiation Exposure", description: "Nuclear facilities, medical radiation", avgSettlement: 950000, multiplier: 6.0 },
];

export const DISEASE_TYPES = [
    { id: "cancer", name: "Cancer", multiplier: 5.0, description: "Leukemia, lymphoma, solid tumors" },
    { id: "neurological", name: "Neurological Damage", multiplier: 4.0, description: "Brain damage, cognitive decline" },
    { id: "respiratory", name: "Respiratory Disease", multiplier: 3.0, description: "Lung disease, COPD, asthma" },
    { id: "reproductive", name: "Reproductive Harm", multiplier: 3.5, description: "Infertility, birth defects" },
    { id: "liver-kidney", name: "Liver/Kidney Disease", multiplier: 3.0, description: "Organ damage and failure" },
    { id: "immune", name: "Immune System Disorders", multiplier: 2.5, description: "Autoimmune conditions" },
];

export const LIABILITY_FACTORS = [
    { id: "negligence", name: "Negligence", multiplier: 1.0 },
    { id: "gross-negligence", name: "Gross Negligence", multiplier: 1.5 },
    { id: "willful", name: "Willful Misconduct", multiplier: 2.0 },
    { id: "fraud", name: "Fraud/Concealment", multiplier: 2.5 },
];

export const MAJOR_MDL_CASES = [
    { name: "PFAS Water Contamination", mdl: "MDL 2873", status: "Active", defendants: "3M, DuPont, BASF" },
    { name: "Camp Lejeune Water", mdl: "CLJA 2022", status: "Active", defendants: "U.S. Government" },
    { name: "Paraquat Parkinson's", mdl: "MDL 3004", status: "Active", defendants: "Syngenta, Chevron" },
    { name: "Roundup Lymphoma", mdl: "MDL 2741", status: "Settling", defendants: "Bayer/Monsanto" },
];

export const TOXIC_TORT_2026 = {
    statistics: {
        avgSettlement: 725000,
        medianSettlement: 450000,
        superfundSites: 1336,
        annualToxicTortFilings: 15000,
        avgTimeToResolution: "3-5 years",
    },
    citations: [
        "EPA CERCLA Superfund Site Data 2026",
        "ATSDR Toxic Substances Registry",
        "CDC Environmental Health Statistics",
        "DOJ Environmental Crimes Data",
        "Mass Tort MDL Statistics 2026",
    ],
};

export const CALCULATORS = [
    { id: "toxic-tort/calculator", name: "Settlement Calculator", description: "Calculate toxic exposure settlement", icon: Calculator, featured: true },
    { id: "toxic-tort/exposure-types", name: "Exposure Types", description: "Chemical and environmental exposures", icon: Beaker, featured: true },
    { id: "toxic-tort/diseases", name: "Related Diseases", description: "Health conditions from toxic exposure", icon: AlertTriangle, featured: true },
    { id: "toxic-tort/mdl", name: "Active MDL Cases", description: "Current mass tort litigation", icon: Scale, featured: false },
    { id: "toxic-tort/guide", name: "Claims Guide", description: "How to file a toxic tort claim", icon: FileText, featured: false },
    { id: "toxic-tort/superfund", name: "Superfund Sites", description: "EPA contaminated site information", icon: Shield, featured: false },
];

export const FAQS = [
    { question: "What is a toxic tort lawsuit?", answer: "A toxic tort is a legal claim for personal injury caused by exposure to dangerous substances like chemicals, pollutants, pharmaceuticals, or contaminated water/air/soil. These cases can be filed individually or as part of mass tort litigation." },
    { question: "How much is the average toxic tort settlement?", answer: "Average toxic tort settlements range from $450,000 to over $1 million depending on exposure type, resulting illness, and defendant liability. Cancer cases average higher ($750,000-$1.5M) than non-cancer claims." },
    { question: "What is the statute of limitations?", answer: "Toxic tort statutes vary by state (1-6 years) and typically begin when you discover the injury and its cause. The 'discovery rule' is crucial as toxic exposures often cause latent diseases appearing decades later." },
    { question: "What chemicals commonly cause toxic tort claims?", answer: "Common substances include PFAS (forever chemicals), benzene, asbestos, lead, PCBs, pesticides (paraquat, Roundup), industrial solvents, and contaminated drinking water from various pollutants." },
    { question: "What is PFAS contamination?", answer: "PFAS (per- and polyfluoroalkyl substances) are 'forever chemicals' used in firefighting foam, non-stick cookware, and waterproofing. They contaminate water supplies and are linked to cancer, thyroid disease, and immune disorders." },
    { question: "Can I sue the government for contamination?", answer: "Yes. The Camp Lejeune Justice Act (2022) allows claims against the U.S. government for water contamination. State and local governments can also be sued for contamination they caused or failed to prevent." },
    { question: "What is a Superfund site?", answer: "Superfund sites are contaminated locations identified by the EPA for cleanup under CERCLA. Living near or working at a Superfund site may entitle you to compensation from responsible parties." },
    { question: "What's the difference between individual and mass tort?", answer: "Individual claims proceed independently. Mass torts (MDL) consolidate similar claims for efficiency but each plaintiff receives individual settlements based on their specific injuries and damages." },
    { question: "What evidence do I need?", answer: "Key evidence includes: medical records documenting illness, proof of exposure (residence/work near contamination), expert testimony linking exposure to disease, and documentation of defendant's negligence or knowledge." },
    { question: "Can children file toxic tort claims?", answer: "Yes. Children exposed to toxins (lead paint, contaminated water) can file claims, often with extended statutes of limitations. Parents/guardians file on their behalf until age 18." },
    { question: "Do I need a lawyer for toxic tort cases?", answer: "Strongly recommended. Toxic tort cases require scientific evidence, expert witnesses, and complex litigation. Experienced attorneys work on contingency (25-40%) and have resources to fight large corporations." },
    { question: "What are punitive damages?", answer: "Punitive damages punish defendants for egregious conduct (concealing dangers, ignoring warnings). They can multiply settlements significantly when fraud or willful misconduct is proven." },
    { question: "How long do toxic tort cases take?", answer: "Timeline varies: Individual cases take 2-4 years. MDL cases may take 3-7 years but can result in global settlements. Some cases settle faster with bellwether trial verdicts." },
    { question: "What if the company is bankrupt?", answer: "Many companies establish bankruptcy trusts (like asbestos trusts) to pay victims. An attorney can identify all liable parties and available funds, including insurance policies and successor companies." },
    { question: "Can I claim for property damage too?", answer: "Yes. Toxic tort claims can include property damage (contaminated land, diminished value), remediation costs, relocation expenses, and loss of use, in addition to personal injury damages." },
];

export function calculateToxicTortSettlement(
    exposureType: string,
    diseaseType: string,
    liabilityFactor: string,
    medicalExpenses: number,
    lostWages: number,
    futureCareCost: number,
    yearsExposed: number,
    age: number,
    numberOfPlaintiffs: number,
    propertyDamage: number
) {
    const exposure = TOXIC_EXPOSURE_TYPES.find(e => e.id === exposureType) || TOXIC_EXPOSURE_TYPES[0];
    const disease = DISEASE_TYPES.find(d => d.id === diseaseType) || DISEASE_TYPES[0];
    const liability = LIABILITY_FACTORS.find(l => l.id === liabilityFactor) || LIABILITY_FACTORS[0];

    const exposureBonus = Math.min(yearsExposed / 5, 2.0);
    const ageMultiplier = age < 40 ? 1.3 : age < 60 ? 1.0 : 0.8;
    const classSizeMultiplier = numberOfPlaintiffs > 100 ? 0.9 : 1.0; // Slight reduction for large class actions

    const baseMultiplier = exposure.multiplier * disease.multiplier * liability.multiplier * exposureBonus * ageMultiplier * classSizeMultiplier;

    const painSufferingLow = Math.round(medicalExpenses * baseMultiplier * 0.7);
    const painSufferingHigh = Math.round(medicalExpenses * baseMultiplier * 1.3);

    const economicDamages = medicalExpenses + lostWages + futureCareCost + propertyDamage;

    const totalLow = Math.round(economicDamages + painSufferingLow);
    const totalHigh = Math.round(economicDamages + painSufferingHigh);

    // Punitive damages estimate (if fraud/willful)
    const punitiveMultiplier = liability.id === 'fraud' ? 3 : liability.id === 'willful' ? 2 : 0;
    const punitiveDamages = punitiveMultiplier > 0 ? Math.round(totalHigh * punitiveMultiplier) : 0;

    return {
        exposureType: exposure.name,
        diseaseType: disease.name,
        liabilityLevel: liability.name,
        economicDamages,
        painSufferingLow,
        painSufferingHigh,
        punitiveDamages,
        totalLow,
        totalHigh,
        totalWithPunitive: totalHigh + punitiveDamages,
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
