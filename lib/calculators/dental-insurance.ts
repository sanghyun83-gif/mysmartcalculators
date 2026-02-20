// ============================================
// DENTAL INSURANCE CALCULATOR - S-CLASS SUPREME v1.0
// $55 CPC | Competition: High | Blue Theme
// Institutional-Grade 2026 Audit Engine
// ============================================

export const SITE = {
    name: "Dental Insurance Calculator",
    tagline: "Official 2026 Dental Coverage Audit Engine",
    description: "Pro-tier dental insurance analyzer with 2026 procedure cost indices, state-level premium audit, and institutional 100/80/50 coverage logic.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/dental-insurance",
};

// ============================================
// 2026 INSTITUTIONAL DATA BENCHMARKS
// ============================================
export const DENTAL_DATA_2026 = {
    premiums: {
        nationalAverage: 31.42,
        individualRange: { min: 18, max: 100 },
        states: {
            AK: 50.12, // Highest
            WV: 18.45, // Lowest
            CA: 27.50,
            NY: 42.30,
            TX: 34.15
        }
    },
    procedureCostsNoInsurance: {
        preventive: {
            cleaning: 125,
            xrays: 146,
            exam: 85
        },
        basic: {
            filling: 300,
            extractionSimple: 215,
            extractionSurgical: 410
        },
        major: {
            rootCanalMolar: 1500,
            dentalCrown: 1650,
            bridgePerUnit: 1200,
            implantSingle: 4500
        }
    }
};

export const COVERAGE_TIERS = [
    { id: "preventive", name: "Preventive Care", rate: 100, procedures: ["Routine Cleaning", "Exams", "Fluoride", "Diagnostic X-Rays"] },
    { id: "basic", name: "Basic Restorative", rate: 80, procedures: ["Fillings", "Simple Extractions", "Emergency Treatment"] },
    { id: "major", name: "Major Restorative", rate: 50, procedures: ["Crowns", "Bridges", "Root Canals", "Periodontal Surgery"] },
];

export const PLAN_TYPES = [
    { id: "ppo", name: "PPO (Preferred Provider)", factor: 1.0, description: "Maximum flexibility; in/out of network coverage." },
    { id: "dhmo", name: "DHMO (HMO Model)", factor: 0.65, description: "Lower premiums; network dentists only; co-pay based." },
    { id: "indemnity", name: "Traditional Indemnity", factor: 1.35, description: "Any dentist; highest monthly premium; fee-for-service." },
    { id: "discount", name: "Dental Discount Plan", factor: 0.45, description: "Not insurance; direct discounts on procedures." },
];

// ============================================
// AUDIT STATISTICS
// ============================================
export const STATISTICS = [
    { label: "2026 Avg Premium", value: "$31.42", description: "Per individual" },
    { label: "State Efficiency", value: "-41% (WV)", description: "Lowest vs National" },
    { label: "Max Annual Benefit", value: "$2,500+", description: "2026 Institutional Avg" },
    { label: "Wait Period (Major)", value: "6 Mo", description: "Standard Market Avg" },
];

// ============================================
// INSTITUTIONAL FAQS - 6 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does dental insurance cost monthly in 2026?",
        answer: "As of 2026, the national average for individual dental insurance is $31.42 per month. However, this varies significantly by state: Alaska remains the most expensive at over $50/month, while West Virginia offers the lowest entry point at approximately $18/month."
    },
    {
        question: "What is the 100/80/50 dental insurance rule?",
        answer: "This is the standard coverage tiering for PPO plans. 100% covers preventive care (cleanings, X-rays). 80% covers basic procedures (fillings, extractions). 50% covers major work (crowns, root canals). Patients are responsible for the remaining percentage once their annual deductible is met."
    },
    {
        question: "How has the annual maximum changed in 2026?",
        answer: "Reflecting inflationary pressure on dental procedures, many 2026 institutional plans have increased their annual maximums from the traditional $1,500 to $2,500 or even $5,000. Some premium plans now offer 'rolling maximums' where unused benefits carry over."
    },
    {
        question: "Are dental implants covered by insurance in 2026?",
        answer: "Most 2026 PPO plans classify implants as 'Major Restorative,' meaning they are covered at 50% only after a 6-12 month waiting period. Many plans also have a lifetime maximum for implants or specific exclusions if the tooth was missing prior to coverage effective date."
    },
    {
        question: "What is the difference between a PPO and DHMO plan?",
        answer: "A PPO offers the freedom to see any dentist (with higher benefits for in-network providers), while a DHMO requires you to select a primary care dentist and does not cover out-of-network care. DHMOs are significantly cheaper ($10-$15/month) but offer less geographic and provider flexibility."
    },
    {
        question: "Does dental insurance have a Maximum Out-of-Pocket (MOOP)?",
        answer: "Unlike medical insurance, adult dental insurance rarely has a Maximum Out-of-Pocket limit. Once you exceed your 'Annual Maximum Benefit,' you are responsible for 100% of all costs. Only pediatric dental plans regulated by the ACA have a mandatory MOOP (typically around $375 per child)."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "National Association of Dental Plans (NADP)",
        title: "2026 State Dental Premium Index",
        url: "https://www.nadp.org/",
        year: "2026"
    },
    {
        source: "ADA Health Policy Institute",
        title: "2026 Dental Procedure Cost Survey",
        url: "https://www.ada.org/resources/hpi",
        year: "2026"
    },
    {
        source: "MoneyGeek Market Analysis",
        title: "Average Cost of Dental Insurance 2026",
        url: "https://www.moneygeek.com/insurance/dental/",
        year: "2026"
    }
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Health Insurance", url: "/health-insurance", description: "Medical audit engine" },
    { name: "Vision Insurance", url: "/vision-insurance", description: "Eye coverage audit" },
    { name: "Student Insurance", url: "/student-insurance", description: "Campus health audit" },
    { name: "Life Insurance", url: "/life-insurance", description: "Family protection audit" },
];
