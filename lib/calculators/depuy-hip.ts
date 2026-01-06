// ============================================
// DEPUY HIP LAWSUIT CALCULATOR
// 2026 ASR & Pinnacle Hip Claims - Advanced Version
// ============================================

import { Calculator, FileText, AlertTriangle, Scale } from 'lucide-react';

export const SITE = {
    name: "DePuy Hip Lawsuit Calculator",
    tagline: "Free 2026 ASR & Pinnacle Hip Settlement Estimator",
    description: "Calculate DePuy hip lawsuit settlements. ASR, Pinnacle metal-on-metal failure, metallosis claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/depuy-hip",
};

export const INJURY_TYPES = [
    { id: "revision-surgery", name: "Revision Surgery Required", description: "Hip implant replaced due to failure", avgSettlement: 400000, multiplier: 4.0 },
    { id: "metallosis", name: "Metallosis / Metal Poisoning", description: "Cobalt/chromium in bloodstream", avgSettlement: 350000, multiplier: 3.5 },
    { id: "bone-damage", name: "Bone Damage / Osteolysis", description: "Bone loss around implant", avgSettlement: 300000, multiplier: 3.0 },
    { id: "pseudotumor", name: "Pseudotumor", description: "Soft tissue mass near implant", avgSettlement: 250000, multiplier: 2.5 },
    { id: "chronic-pain", name: "Chronic Pain", description: "Persistent hip pain without revision", avgSettlement: 150000, multiplier: 1.5 },
];

export const IMPLANT_PRODUCTS = [
    { id: "asr", name: "ASR Hip System", multiplier: 1.4 },
    { id: "asr-xl", name: "ASR XL Acetabular System", multiplier: 1.4 },
    { id: "pinnacle", name: "Pinnacle Metal-on-Metal", multiplier: 1.3 },
    { id: "other", name: "Other DePuy Hip Product", multiplier: 1.0 },
];

export const SURGERY_STATUS = [
    { id: "multiple-revision", name: "Multiple Revision Surgeries", multiplier: 1.5 },
    { id: "single-revision", name: "Single Revision Surgery", multiplier: 1.2 },
    { id: "partial-removal", name: "Partial Component Removal", multiplier: 1.1 },
    { id: "no-revision", name: "No Revision Surgery Yet", multiplier: 1.0 },
];

export const DEPUY_2026 = {
    statistics: {
        manufacturer: "DePuy (J&J)",
        asrRecall: "2010",
        totalSettlements: "$4 Billion+",
        status: "Ongoing Claims",
    },
    citations: [
        "DePuy ASR Hip Recall Notice (August 2010)",
        "In Re: DePuy Pinnacle Hip MDL 2244 - N.D. Texas",
        "DePuy ASR Global Settlement Program Documents",
    ],
};

export const CALCULATORS = [
    { id: "depuy-hip/calculator", name: "Settlement Calculator", description: "Estimate DePuy hip claim value", icon: Calculator, featured: true },
    { id: "depuy-hip/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
    { id: "depuy-hip/products", name: "Recalled Products", description: "ASR & Pinnacle devices", icon: AlertTriangle, featured: false },
    { id: "depuy-hip/complications", name: "Complications", description: "Known implant injuries", icon: Scale, featured: false },
];

export const FAQS = [
    { question: "What is the DePuy hip lawsuit about?", answer: "DePuy hip lawsuits allege that J&J's DePuy Orthopaedics sold defective metal-on-metal hip implants that caused metallosis, bone damage, and early failure requiring revision surgery. Over $4 billion has been paid." },
    { question: "Which DePuy products were recalled?", answer: "The ASR Hip System and ASR XL Acetabular System were recalled in 2010. The Pinnacle metal-on-metal hip system faced massive litigation but was not formally recalled." },
    { question: "What is metallosis?", answer: "Metallosis is metal poisoning from cobalt and chromium particles shed from metal-on-metal hip implants. Symptoms include pain, swelling, tissue death, and systemic effects from metal in the bloodstream." },
    { question: "What is a pseudotumor?", answer: "A pseudotumor is a mass of inflamed soft tissue that forms near the hip implant in response to metal debris. Despite the name, it is not cancerous but can cause significant damage." },
    { question: "Who qualifies for a DePuy hip lawsuit?", answer: "Patients who received DePuy ASR, ASR XL, or Pinnacle metal-on-metal hip implants and experienced revision surgery, metallosis, pseudotumors, or other complications may qualify." },
    { question: "What are the average settlements?", answer: "DePuy has paid over $4 billion in settlements. ASR cases averaged $250,000-$400,000. Pinnacle jury verdicts have exceeded $1 billion across multiple trials." },
    { question: "Is there a deadline to file?", answer: "Statutes of limitations vary by state. Some states have discovery rules that extend deadlines. Consult an attorney immediately to preserve your rights." },
    { question: "Why did DePuy recall the ASR hip?", answer: "DePuy recalled the ASR hip in 2010 after data showed failure rates of 12-13% at 5 years - far higher than acceptable. Metal debris caused severe tissue damage in many patients." },
    { question: "What documents do I need?", answer: "Key documents include hip implant surgical records, product identification, revision surgery records, blood metal tests, and records of complications and ongoing treatment." },
    { question: "Can I still file a claim?", answer: "Yes, new claims continue to be filed. Patients who recently discovered their injuries or developed new complications may still be eligible. Contact an attorney for evaluation." },
];

export function calculateDePuySettlement(
    injuryType: string,
    implantProduct: string,
    surgeryStatus: string,
    medicalExpenses: number,
    yearsSinceImplant: number,
    hasMetalTest: boolean,
    hasOngoingSymptoms: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = IMPLANT_PRODUCTS.find(p => p.id === implantProduct) || IMPLANT_PRODUCTS[0];
    const surgery = SURGERY_STATUS.find(s => s.id === surgeryStatus) || SURGERY_STATUS[0];

    const metalTestBonus = hasMetalTest ? 1.15 : 1.0;
    const ongoingBonus = hasOngoingSymptoms ? 1.2 : 1.0;
    const durationBonus = yearsSinceImplant > 10 ? 1.1 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * surgery.multiplier * metalTestBonus * ongoingBonus * durationBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        implantProduct: product.name,
        surgeryStatus: surgery.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
