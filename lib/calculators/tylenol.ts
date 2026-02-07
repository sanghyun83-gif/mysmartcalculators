// ============================================
// TYLENOL AUTISM LAWSUIT CALCULATOR
// 2026 Acetaminophen, Pregnancy, Autism/ADHD - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Baby } from 'lucide-react';

export const SITE = {
    name: "Tylenol Autism Lawsuit Calculator",
    tagline: "Free 2026 Acetaminophen Pregnancy Lawsuit Estimator",
    description: "Calculate Tylenol autism lawsuit settlements. Acetaminophen, pregnancy use, autism, ADHD claims. Based on 2026 MDL data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/tylenol",
};

export const DIAGNOSIS_TYPES = [
    { id: "autism", name: "Autism Spectrum Disorder", description: "ASD diagnosis", avgSettlement: 500000, multiplier: 4.0 },
    { id: "adhd", name: "ADHD", description: "Attention Deficit Hyperactivity Disorder", avgSettlement: 250000, multiplier: 2.5 },
    { id: "both", name: "Autism + ADHD", description: "Combined diagnoses", avgSettlement: 700000, multiplier: 5.0 },
    { id: "developmental", name: "Other Developmental Delays", description: "Speech, motor, cognitive delays", avgSettlement: 200000, multiplier: 2.0 },
];

export const USAGE_FREQUENCY = [
    { id: "daily", name: "Daily Use", multiplier: 1.5 },
    { id: "frequent", name: "Frequent (Weekly)", multiplier: 1.3 },
    { id: "occasional", name: "Occasional", multiplier: 1.0 },
];

export const TRIMESTER = [
    { id: "first", name: "First Trimester", multiplier: 1.3, description: "Weeks 1-12" },
    { id: "second", name: "Second Trimester", multiplier: 1.2, description: "Weeks 13-26" },
    { id: "third", name: "Third Trimester", multiplier: 1.1, description: "Weeks 27-40" },
    { id: "multiple", name: "Multiple Trimesters", multiplier: 1.4, description: "Throughout pregnancy" },
];

export const TYLENOL_2026 = {
    statistics: {
        mdlNumber: "MDL 3043",
        court: "Southern District of New York",
        pendingCases: 1000,
        status: "Active Litigation",
    },
    citations: [
        "Tylenol Autism MDL 3043 - S.D.N.Y.",
        "JAMA Pediatrics Studies on Acetaminophen & Neurodevelopment",
        "FDA Safety Communication on Acetaminophen During Pregnancy",
    ],
};

export const CALCULATORS = [
    { id: "tylenol/calculator", name: "Settlement Calculator", description: "Estimate Tylenol claim value", icon: Calculator, featured: true },
    { id: "tylenol/eligibility", name: "Eligibility Check", description: "Do you qualify for a claim?", icon: AlertTriangle, featured: true },
    { id: "tylenol/studies", name: "Scientific Studies", description: "Research linking Tylenol to autism", icon: FileText, featured: false },
    { id: "tylenol/guide", name: "Claims Guide", description: "How to file a Tylenol lawsuit", icon: FileText, featured: false },
];

export const FAQS = [
    { question: "What is the Tylenol autism lawsuit about?", answer: "Lawsuits allege that manufacturers of acetaminophen (Tylenol, generic brands) and retailers failed to warn pregnant women that prenatal use could increase the risk of autism spectrum disorder (ASD) and ADHD in children." },
    { question: "Who can file a Tylenol autism lawsuit?", answer: "Parents of children diagnosed with autism or ADHD whose mothers used acetaminophen during pregnancy may qualify. The mother must have used the medication during pregnancy and the child must have a documented diagnosis." },
    { question: "What is MDL 3043?", answer: "MDL 3043 consolidates Tylenol autism lawsuits in the Southern District of New York for coordinated pretrial proceedings. This allows efficient handling of discovery and key legal issues before individual trials." },
    { question: "What evidence links Tylenol to autism?", answer: "Multiple studies published in JAMA Pediatrics and other journals found associations between prenatal acetaminophen use and increased risk of autism and ADHD. While causation debates continue, the research has prompted legal action." },
    { question: "How much can I receive in a Tylenol lawsuit?", answer: "Settlement values vary based on diagnosis severity, medical expenses, and care needs. No settlements have been finalized yet as litigation is ongoing. Estimates range from $100,000 to over $500,000 for severe cases." },
    { question: "What is the deadline to file?", answer: "Statutes of limitation vary by state. Many states have 2-3 year limits from diagnosis or discovery. Some states have special rules for minors. Consult an attorney promptly to protect your rights." },
    { question: "What brands are included in the lawsuit?", answer: "Lawsuits target Tylenol (Johnson & Johnson), generic acetaminophen manufacturers, and retailers like CVS, Walgreens, and Costco who sold store-brand versions." },
    { question: "Do I need to prove I bought a specific brand?", answer: "While purchase records help, the lawsuits often include generic products. Medical records showing acetaminophen use during pregnancy can support claims even without specific brand receipts." },
    { question: "What damages can I recover?", answer: "Potential damages include medical expenses, therapy costs, special education, future care costs, pain and suffering, and lost earning capacity if the child requires lifelong support." },
    { question: "How long will the lawsuit take?", answer: "MDL 3043 is still in early stages. Bellwether trials may begin in 2026-2027. Individual settlements could follow. Complex pharmaceutical cases typically take 3-5+ years." },
];

export function calculateTylenolSettlement(
    diagnosisType: string,
    usageFrequency: string,
    trimester: string,
    medicalExpenses: number,
    therapyCosts: number,
    futureCareCosts: number,
    hasMedicalRecords: boolean
) {
    const diagnosis = DIAGNOSIS_TYPES.find(d => d.id === diagnosisType) || DIAGNOSIS_TYPES[0];
    const frequency = USAGE_FREQUENCY.find(f => f.id === usageFrequency) || USAGE_FREQUENCY[0];
    const tri = TRIMESTER.find(t => t.id === trimester) || TRIMESTER[0];

    const recordsBonus = hasMedicalRecords ? 1.2 : 1.0;
    const baseMultiplier = diagnosis.multiplier * frequency.multiplier * tri.multiplier * recordsBonus / 6;

    const economicDamages = medicalExpenses + therapyCosts + futureCareCosts;
    const painSufferingLow = Math.round(economicDamages * baseMultiplier * 0.5);
    const painSufferingHigh = Math.round(economicDamages * baseMultiplier * 1.0);

    return {
        diagnosisType: diagnosis.name,
        usageFrequency: frequency.name,
        trimester: tri.name,
        economicDamages,
        painSufferingLow,
        painSufferingHigh,
        totalLow: Math.round(economicDamages + painSufferingLow),
        totalHigh: Math.round(economicDamages + painSufferingHigh),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
