// ============================================
// TEXTURED BREAST IMPLANT LAWSUIT CALCULATOR
// 2026 Allergan BIOCELL Recall - Standard Version
// ============================================

import { Calculator, FileText } from 'lucide-react';

export const SITE = {
    name: "Textured Breast Implant Calculator",
    tagline: "Free 2026 Allergan Recall Settlement Estimator",
    description: "Calculate textured breast implant lawsuit settlements. Allergan BIOCELL recall, BIA-ALCL cancer claims. Based on 2026 litigation data.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/textured-implant",
};

export const INJURY_TYPES = [
    { id: "bia-alcl", name: "BIA-ALCL Diagnosed", description: "Breast implant-associated lymphoma", avgSettlement: 400000, multiplier: 4.0 },
    { id: "explant-preventive", name: "Preventive Explant", description: "Removed recalled implants", avgSettlement: 75000, multiplier: 1.5 },
    { id: "complications", name: "Other Complications", description: "Capsular contracture, rupture", avgSettlement: 100000, multiplier: 2.0 },
];

export const IMPLANT_PRODUCTS = [
    { id: "biocell", name: "Allergan BIOCELL (Recalled)", recalled: true, multiplier: 1.5 },
    { id: "natrelle-textured", name: "Allergan Natrelle Textured", recalled: true, multiplier: 1.3 },
    { id: "other-textured", name: "Other Textured Brand", recalled: false, multiplier: 1.0 },
];

export const TEXTURED_2026 = {
    statistics: {
        recallDate: "July 24, 2019",
        manufacturer: "Allergan (AbbVie)",
        implantedWorldwide: "400,000+",
        biaAlclCases: "1,100+",
    },
    citations: [
        "FDA Class I Recall - Allergan BIOCELL Textured Breast Implants",
        "BIA-ALCL and Textured Breast Implants - FDA 2026 Update",
    ],
};

export const CALCULATORS = [
    { id: "textured-implant/calculator", name: "Settlement Calculator", description: "Estimate recall claim value", icon: Calculator, featured: true },
    { id: "textured-implant/guide", name: "Claims Guide", description: "How to file a claim", icon: FileText, featured: true },
];

export const FAQS = [
    { question: "What textured implants were recalled?", answer: "In July 2019, the FDA requested Allergan recall all BIOCELL textured breast implants and tissue expanders. This was the first-ever breast implant recall in the U.S., affecting hundreds of thousands of women worldwide." },
    { question: "Why were textured implants recalled?", answer: "Textured breast implants were linked to BIA-ALCL (Breast Implant-Associated Anaplastic Large Cell Lymphoma), a rare cancer. Studies showed textured implants had significantly higher ALCL risk than smooth implants." },
    { question: "Should I have my textured implants removed?", answer: "The FDA does not recommend removing textured implants unless you have symptoms. However, discuss your specific situation with your doctor. For BIA-ALCL diagnosis, explant is the standard treatment." },
    { question: "What is the lawsuit compensation for recalled implants?", answer: "Compensation varies. Women diagnosed with BIA-ALCL may receive $300,000-$500,000+. Preventive explant cases may receive $50,000-$100,000 for surgery costs and distress." },
    { question: "How do I know if I have BIOCELL implants?", answer: "Check your surgical records for the implant manufacturer and product name. BIOCELL is Allergan's textured surface technology. Your surgeon's office should have records of the specific implants used." },
];

export function calculateTexturedImplantSettlement(
    injuryType: string,
    implantProduct: string,
    medicalExpenses: number,
    yearsWithImplants: number,
    hasDocumentation: boolean
) {
    const injury = INJURY_TYPES.find(i => i.id === injuryType) || INJURY_TYPES[0];
    const product = IMPLANT_PRODUCTS.find(p => p.id === implantProduct) || IMPLANT_PRODUCTS[0];

    const docsBonus = hasDocumentation ? 1.2 : 1.0;
    const yearsBonus = yearsWithImplants > 10 ? 1.15 : 1.0;

    const baseMultiplier = injury.multiplier * product.multiplier * docsBonus * yearsBonus;
    const painSuffering = Math.round(medicalExpenses * baseMultiplier);

    return {
        injuryType: injury.name,
        implantProduct: product.name,
        medicalExpenses,
        painSuffering,
        totalLow: Math.round((medicalExpenses + painSuffering) * 0.7),
        totalHigh: Math.round((medicalExpenses + painSuffering) * 1.3),
    };
}

export const formatCurrency = (n: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n);
