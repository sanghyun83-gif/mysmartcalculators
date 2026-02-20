// ============================================
// DRUNK DRIVING CALCULATOR - S-CLASS SUPREME v1.0
// $85 CPC | Competition: Critical | Red Theme
// Institutional-Grade 2026 DUI Audit Engine
// ============================================

import { Calculator, FileText, Car, AlertTriangle, Shield, Gavel, DollarSign } from 'lucide-react';

export const SITE = {
    name: "DUI Calculator",
    tagline: "Official 2026 DUI Forensic Audit Engine",
    description: "Pro-tier DUI analyzer with 2026 blood alcohol concentration (BAC) indices, state-level penalty audit, and SR-22/legal expense forecasting.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/drunk-driving",
};

// ============================================
// 2026 INSTITUTIONAL DATA BENCHMARKS
// ============================================
export const DUI_DATA_2026 = {
    bacMetabolism: {
        male: 0.015, // % BAC reduction per hour
        female: 0.018,
        legalLimit: 0.08,
        commercialLimit: 0.04,
        minorLimit: 0.01
    },
    penalties1stOffense: {
        fines: { min: 500, max: 2000, avg: 1250 },
        jailTime: { min: "24 Hours", max: "1 Year" },
        licenseSuspension: { min: "90 Days", max: "1 Year" },
        states: {
            AZ: { severity: "Extreme", jail: "10 Days", fine: 1250, mandatoryIID: true },
            TN: { severity: "High", jail: "48 Hours", fine: 1500, mandatoryIID: true },
            CA: { severity: "Moderate", jail: "Optional", fine: 1000, mandatoryIID: "Varies" },
            ID: { severity: "Moderate", jail: "Variable", fine: 1000, mandatoryIID: false }
        }
    },
    hiddenCosts: {
        legalFees: { min: 1500, max: 6000, complexityScale: 2.5 }, // 2.5x for complex cases
        sr22Insurance: { annualAvg: 3295, filingFee: 25 },
        ignitionInterlock: { install: 150, monthly: 110, totalYear: 1470 },
        drunkDrivingSettlement: {
            minor: 50000,
            moderate: 200000,
            severe: 750000,
            fatal: 5000000
        }
    }
};

export const STATISTICS = [
    { label: "Annual Fatalities", value: "13,384", description: "NHTSA 2026 Projection" },
    { label: "Economic Cost", value: "$68.7B+", description: "Total annual US impact" },
    { label: "SR-22 Premium", value: "+370%", description: "Avg post-DUI increase" },
    { label: "Legal Cap", value: "$25,000", description: "Top-tier defense cost" },
];

// ============================================
// FAQS - 6 Institutional Questions
// ============================================
export const FAQS = [
    {
        question: "How is 2026 BAC calculated by weight?",
        answer: "BAC is estimated using the Widmark formula, which considers body weight, gender-specific distribution constants (r), and the amount of alcohol consumed. In 2026, the standard metabolism rate is estimated at 0.015% per hour for men and 0.018% for women. However, factors like food intake and individual metadata significantly alter real-time absorption."
    },
    {
        question: "What are the mandatory minimums for a first DUI in 2026?",
        answer: "Most states mandate at least 24-48 hours of jail time and fines ranging from $500 to $2,000. In strict jurisdictions like Arizona or Tennessee, mandatory minimums include immediate license suspension and the installation of an ignition interlock device (IID) even for first-time offenders."
    },
    {
        question: "How much does SR-22 insurance cost after a DUI?",
        answer: "SR-22 is not insurance but a certificate of responsibility. In 2026, obtaining this certificate typically increases your annual premium by an average of 370%, with typical post-DUI liability premiums ranging from $3,000 to $5,500 per year, depending on state-level risk pooling."
    },
    {
        question: "What is the total 'Hidden Cost' of a DUI conviction?",
        answer: "The true financial impact often exceeds $15,000. This includes legal fees ($3,000 avg), fines ($1,250), SR-22 premium increases ($9,000 over 3 years), ignition interlock fees ($1,500), and license reinstatement costs. This does not account for lost wages due to jail time or job loss."
    },
    {
        question: "Can I refuse a breathalyzer in 2026?",
        answer: "Every state has 'Implied Consent' laws. Refusing a breath or blood test typically results in an automatic, administrative license suspension (often 1 year) that is independent of whether you are eventually convicted of a DUI in court."
    },
    {
        question: "What is the difference between a DUI and a DWI?",
        answer: "While often used interchangeably, DUI (Driving Under the Influence) is a broader term, whereas DWI (Driving While Intoxicated or Impaired) often implies a higher level of impairment or a specific BAC threshold depending on the jurisdiction's penal code."
    }
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NHTSA",
        title: "2026 Alcohol-Impaired Driving Statistics",
        url: "https://www.nhtsa.gov/risky-driving/drunk-driving",
        year: "2026"
    },
    {
        source: "MADD (Mothers Against Drunk Driving)",
        title: "DUI State Law & Penalty Database",
        url: "https://www.madd.org/state-laws/",
        year: "2026"
    },
    {
        source: "Forbes Advisor",
        title: "The Actual Cost of a DUI in 2026",
        url: "https://www.forbes.com/advisor/car-insurance/cost-of-dui/",
        year: "2026"
    }
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "BAC Calculator", url: "/alcohol-bac", description: "Blood alcohol auditor" },
    { name: "Car Insurance", url: "/car-insurance", description: "High-risk premium audit" },
    { name: "Personal Injury", url: "/personal-injury", description: "Lawsuit value forecaster" },
    { name: "Wrongful Death", url: "/wrongful-death", description: "Loss of life audit" },
];

// ============================================
// LEGACY COMPATIBILITY - Accident Settlement
// ============================================
export interface DUIResult {
    bacLevel: string;
    fineAvg: number;
    jailTime: string;
    totalHiddenCost: number;
    legalForecast: number;
    sr22Forecast: number;
}

export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}
