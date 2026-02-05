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

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Federal Exemption", value: "$13.61M", description: "Per person 2026" },
    { label: "Federal Rate", value: "40%", description: "Above exemption" },
    { label: "State Tax States", value: "6", description: "Have inheritance tax" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "What is the difference between estate tax and inheritance tax?",
        answer: "Estate tax is paid by the deceased's estate before distribution (federal + some states). Inheritance tax is paid by beneficiaries on what they receive (6 states only). Most states have neither. Spouses are typically exempt from both under unlimited marital deduction."
    },
    {
        question: "What is the 2026 federal estate tax exemption?",
        answer: "The 2026 federal estate tax exemption is $13.61 million per person ($27.22M for married couples with portability). Estates below this threshold owe no federal estate tax. Above, the rate is 40%. This exemption is set to drop significantly in 2026 when TCJA expires."
    },
    {
        question: "Which states have inheritance tax?",
        answer: "Only 6 states have inheritance tax: Iowa, Kentucky, Maryland, Nebraska, New Jersey, and Pennsylvania. Rates vary from 0-18% depending on relationship to deceased. Spouses are exempt in all states. Most lineal heirs (children, parents) have reduced rates or exemptions."
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
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Estate Tax", url: "/estate-tax", description: "Estate planning" },
    { name: "Gift Tax", url: "/gift-tax", description: "Lifetime gifts" },
    { name: "Trust Tax", url: "/trust-tax", description: "Trust taxation" },
];
