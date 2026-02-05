// ============================================
// BREAST IMPLANT ILLNESS LAWSUIT CALCULATOR
// 2026 BII & BIA-ALCL Claims - Advanced Version
// ============================================

import { Calculator, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

export const SITE = {
    name: "Breast Implant Illness Calculator",
    tagline: "Free 2026 BII & BIA-ALCL Settlement Estimator",
    description: "Calculate breast implant illness lawsuit settlements. BIA-ALCL lymphoma, textured implant complications, Allergan recall claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/breast-implant",
};

export const INJURY_TYPES = [
    { id: "bia-alcl", name: "BIA-ALCL (Lymphoma)", description: "Breast Implant-Associated Large Cell Lymphoma", avgSettlement: 350000, multiplier: 4.0 },
    { id: "bii-autoimmune", name: "BII Autoimmune Symptoms", description: "Systemic symptoms from silicone", avgSettlement: 150000, multiplier: 2.0 },
    { id: "rupture", name: "Implant Rupture", description: "Silicone leak into body", avgSettlement: 100000, multiplier: 1.8 },
    { id: "capsular", name: "Capsular Contracture", description: "Severe scar tissue hardening", avgSettlement: 80000, multiplier: 1.5 },
];

export const IMPLANT_TYPES = [
    { id: "textured", name: "Textured (Allergan Recalled)", multiplier: 1.5 },
    { id: "smooth-silicone", name: "Smooth Silicone", multiplier: 1.0 },
    { id: "saline", name: "Saline", multiplier: 0.8 },
];

export const MANUFACTURERS = [
    { id: "allergan", name: "Allergan (BIOCELL)", recalled: true },
    { id: "mentor", name: "Mentor (J&J)", recalled: false },
    { id: "sientra", name: "Sientra", recalled: false },
    { id: "other", name: "Other/Unknown", recalled: false },
];

export const SURGERY_REQUIRED = [
    { id: "explant-chemo", name: "Explant + Chemotherapy", multiplier: 3.5 },
    { id: "explant-only", name: "Explant Surgery Only", multiplier: 2.0 },
    { id: "multiple", name: "Multiple Surgeries", multiplier: 2.5 },
    { id: "none", name: "No Surgery Yet", multiplier: 1.0 },
];

export const BREAST_IMPLANT_2026 = {
    statistics: {
        allerganRecall: "July 2019",
        biaAlclCases: "1,100+",
        deaths: "60+",
        status: "MDL 2921 Active",
    },
    citations: [
        "Allergan BIOCELL Textured Implant Recall (FDA 2019)",
        "MDL 2921: Breast Implant Products Liability Litigation",
        "FDA Updated Safety Information on BIA-ALCL 2026",
    ],
};

export const CALCULATORS = [
    { id: "breast-implant/calculator", name: "Settlement Calculator", description: "Estimate BII/ALCL claim value", icon: Calculator, featured: true },
    { id: "breast-implant/eligibility", name: "Eligibility Check", description: "Check if you qualify", icon: CheckCircle, featured: true },
    { id: "breast-implant/symptoms", name: "BII Symptoms", description: "Recognize warning signs", icon: AlertTriangle, featured: true },
    { id: "breast-implant/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What is Breast Implant Illness (BII)?", answer: "Breast Implant Illness is a term for systemic symptoms some women experience after breast implant surgery. Symptoms include chronic fatigue, joint pain, brain fog, hair loss, and autoimmune-like issues. While the FDA acknowledges these reports, BII is not yet a formal medical diagnosis." },
    { question: "What is BIA-ALCL?", answer: "BIA-ALCL (Breast Implant-Associated Anaplastic Large Cell Lymphoma) is a rare cancer of the immune system linked to textured breast implants. It develops in the scar tissue around the implant and typically requires explant surgery and sometimes chemotherapy." },
    { question: "Why was Allergan recalled?", answer: "In July 2019, the FDA requested Allergan recall its BIOCELL textured breast implants and tissue expanders due to the risk of BIA-ALCL. Allergan complied with a worldwide recall affecting hundreds of thousands of implants." },
    { question: "What manufacturers are being sued?", answer: "Lawsuits target multiple manufacturers including Allergan (now AbbVie), Mentor (Johnson & Johnson), and Sientra. The federal MDL 2921 consolidates cases against multiple defendants in New Jersey." },
    { question: "Who qualifies for a breast implant lawsuit?", answer: "Women who developed BIA-ALCL, experienced severe BII symptoms, or suffered injuries from recalled textured implants may qualify. Those with Allergan BIOCELL implants have particularly strong cases." },
    { question: "What are the symptoms of BIA-ALCL?", answer: "Symptoms include sudden swelling of the breast, fluid collection around the implant (seroma), capsular contracture, breast pain, and lumps in the breast or armpit. It typically develops years after implant surgery." },
    { question: "What are common BII symptoms?", answer: "Common symptoms include chronic fatigue, joint and muscle pain, cognitive difficulties (brain fog), hair loss, skin rashes, dry eyes and mouth, anxiety, depression, and various autoimmune symptoms." },
    { question: "What is the average settlement value?", answer: "Settlement values vary widely. BIA-ALCL cases requiring explant and chemotherapy may receive $300,000-$500,000+. BII cases with documented systemic illness may receive $100,000-$200,000. Each case is evaluated individually." },
    { question: "Should I have my implants removed?", answer: "That is a medical decision to discuss with your doctor. For BIA-ALCL diagnosis, explant surgery is the standard treatment. For BII symptoms, many women report improvement after explant, though results vary." },
    { question: "What is the statute of limitations?", answer: "Statutes of limitations vary by state, typically 2-4 years from when you knew or should have known about the injury. Consult an attorney immediately as time limits are strict." },
];

export function calculateBreastImplantSettlement(
    injuryType: string,
    implantType: string,
    manufacturer: string,
    surgeryRequired: string,
    medicalExpenses: number,
    yearsWithImplants: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const implant = IMPLANT_TYPES.find(i => i.id === implantType) || IMPLANT_TYPES[0];
    const surgery = SURGERY_REQUIRED.find(s => s.id === surgeryRequired) || SURGERY_REQUIRED[0];
    const mfr = MANUFACTURERS.find(m => m.id === manufacturer);

    const recallBonus = mfr?.recalled ? 1.3 : 1.0;
    const docsBonus = hasDocumentation ? 1.15 : 1.0;
    const yearsBonus = yearsWithImplants > 10 ? 1.2 : 1.0;

    const baseMultiplier = injury.multiplier * implant.multiplier * surgery.multiplier * recallBonus * docsBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        implantType: implant.name,
        manufacturer: mfr?.name || 'Unknown',
        surgeryRequired: surgery.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
