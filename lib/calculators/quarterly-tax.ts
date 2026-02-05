// ============================================
// QUARTERLY TAX CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Quarterly Tax Calculator",
    tagline: "Free 2026 Estimated Tax Payment Calculator",
    description: "Calculate quarterly estimated tax payments for self-employed individuals. Based on 2026 IRS Form 1040-ES guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/quarterly-tax",
};

// ============================================
// DUE DATES
// ============================================
export const DUE_DATES = [
    { quarter: "Q1", period: "Jan 1 - Mar 31", dueDate: "April 15, 2026" },
    { quarter: "Q2", period: "Apr 1 - May 31", dueDate: "June 16, 2026" },
    { quarter: "Q3", period: "Jun 1 - Aug 31", dueDate: "September 15, 2026" },
    { quarter: "Q4", period: "Sep 1 - Dec 31", dueDate: "January 15, 2027" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Threshold", value: "$1,000+", description: "Must pay quarterly" },
    { label: "Payments", value: "4x/year", description: "Equal installments" },
    { label: "Safe Harbor", value: "100-110%", description: "Prior year tax" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "Who needs to pay quarterly taxes?",
        answer: "You must pay quarterly estimated taxes if you expect to owe $1,000 or more in taxes when you file and your withholding will be less than 90% of your current year tax (or 100% of prior year tax). This typically applies to self-employed individuals, freelancers, and investors."
    },
    {
        question: "What are the 2026 quarterly tax due dates?",
        answer: "For 2026: Q1 is due April 15, Q2 is due June 16 (moved from 15th due to holiday), Q3 is due September 15, and Q4 is due January 15, 2027. If the due date falls on a weekend or holiday, it moves to the next business day."
    },
    {
        question: "What happens if I underpay quarterly taxes?",
        answer: "The IRS charges an underpayment penalty if you don't pay enough throughout the year. To avoid penalties, pay at least 90% of current year tax OR 100% of prior year tax (110% if AGI over $150K). Use Form 2210 to calculate any penalty."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Form 1040-ES Estimated Tax",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Self-Employment", url: "/self-employment", description: "SE tax" },
    { name: "1099 Tax", url: "/1099-tax", description: "Contractor tax" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
];
