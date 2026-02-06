// ============================================
// INHERITANCE CALCULATOR - QUICK v3.0
// $85 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Inheritance Calculator",
    tagline: "Free 2026 Inheritance Tax Calculator",
    description: "Calculate inheritance tax on inherited assets. Federal estate tax exemption and state inheritance tax rates. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/inheritance",
};

import { STATE_TAX_DATA, StateTaxData, getStatesList } from "./inheritance/state-data";

export interface InheritanceCalculationResult {
    inheritanceTax: number;
    estateTax: number;
    totalTax: number;
    netInheritance: number;
    stateName: string;
    hasInheritanceTax: boolean;
    hasEstateTax: boolean;
    inheritanceRates: string;
    inheritanceExemptions: string;
    estateThreshold: number;
}

export function calculateInheritanceTax(
    amount: number,
    stateCode: string,
    relationship: 'spouse' | 'child' | 'other'
): InheritanceCalculationResult {
    const stateData = STATE_TAX_DATA[stateCode] || STATE_TAX_DATA['CA'];
    let inheritanceTax = 0;
    let estateTax = 0;

    // Simplified inheritance tax calculation for research purposes
    if (stateData.hasInheritanceTax) {
        if (relationship === 'spouse') {
            inheritanceTax = 0; // Spouses are exempt in all 6 states
        } else if (relationship === 'child') {
            // Children are exempt in NJ, IA, KY, MD. 
            // PA is 4.5%, NE is 1%.
            if (stateCode === 'PA') inheritanceTax = amount * 0.045;
            if (stateCode === 'NE') inheritanceTax = amount * 0.01;
        } else {
            // Others (siblings, friends) pay high rates
            const maxRate = parseInt(stateData.inheritanceRates.match(/\d+/)?.[0] || "15") / 100;
            inheritanceTax = amount * maxRate;
        }
    }

    // Simplified estate tax (State level)
    if (stateData.hasEstateTax && amount > stateData.estateThreshold) {
        estateTax = (amount - stateData.estateThreshold) * (stateData.estateMaxRate / 100);
    }

    const totalTax = inheritanceTax + estateTax;

    return {
        inheritanceTax: Math.round(inheritanceTax),
        estateTax: Math.round(estateTax),
        totalTax: Math.round(totalTax),
        netInheritance: Math.round(amount - totalTax),
        stateName: stateData.name,
        hasInheritanceTax: stateData.hasInheritanceTax,
        hasEstateTax: stateData.hasEstateTax,
        inheritanceRates: stateData.inheritanceRates,
        inheritanceExemptions: stateData.inheritanceExemptions,
        estateThreshold: stateData.estateThreshold
    };
}

export { getStatesList };

// ============================================
// STATE INHERITANCE TAXES
// ============================================
export const STATE_TAXES = [
    { state: "Iowa", rate: "Up to 15%", exemptions: "Spouse, lineal heirs exempt" },
    { state: "Kentucky", rate: "Up to 16%", exemptions: "Class A beneficiaries exempt" },
    { state: "Maryland", rate: "10%", exemptions: "Spouse, children exempt" },
    { state: "Nebraska", rate: "Up to 18%", exemptions: "Spouse exempt" },
    { state: "New Jersey", rate: "Up to 16%", exemptions: "Spouse, lineal heirs exempt" },
    { state: "Pennsylvania", rate: "Up to 15%", exemptions: "Spouse exempt" },
];

export function formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(value);
}

export function parseFormattedNumber(value: string): number {
    return parseInt(value.replace(/[^0-9]/g, '')) || 0;
}

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Federal Exemption", value: "$13.61M", description: "Per person 2026" },
    { label: "Federal Rate", value: "40%", description: "Above exemption" },
    { label: "State Tax States", value: "18", description: "Have death taxes (12 estate, 6 inheritance)" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the difference between estate tax and inheritance tax?",
        answer: "Estate tax is paid by the deceased's estate before distribution. Inheritance tax is paid by beneficiaries on what they receive. 12 states have estate taxes (OR, WA, NY, etc.) and 6 have inheritance taxes (PA, NJ, etc.). Maryland is the only state with both."
    },
    {
        question: "What is the 2026 federal estate tax exemption?",
        answer: "The 2026 federal estate tax exemption is $13.61 million per person. Estates below this threshold owe no federal estate tax. Above, the rate is 40%. This is among the highest exemptions in history."
    },
    {
        question: "Which states have inheritance tax?",
        answer: "Iowa, Kentucky, Maryland, Nebraska, New Jersey, and Pennsylvania. However, Iowa is phasing theirs out, and most states recently exempted all close family members (lineal heirs)."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Estate and Gift Taxes",
        url: "https://www.irs.gov/",
        year: "2026"
    },
    {
        source: "Tax Foundation",
        title: "State Inheritance and Estate Taxes",
        url: "https://taxfoundation.org/",
        year: "2026"
    }
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Estate Tax", url: "/estate-tax", description: "Estate planning" },
    { name: "Gift Tax", url: "/gift-tax", description: "Lifetime gifts" },
    { name: "Trust Tax", url: "/trust-tax", description: "Trust taxation" },
];
