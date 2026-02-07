// ============================================
// AIRBNB INCOME CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Airbnb Income Calculator",
    tagline: "Free 2026 Airbnb Payout Negotiator",
    description: "Calculate your 2026 Airbnb earnings instantly. Free rental negotiator with official IRS Publication 527 guidelines, Section 280A (14-Day Rule) benchmarks, and occupancy rate projections.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/airbnb-income",
};

// ============================================
// EXPENSE CATEGORIES
// ============================================
export const EXPENSE_CATEGORIES = [
    { id: "platform", name: "Airbnb Fee", typical: "3%", description: "Host service fee" },
    { id: "cleaning", name: "Cleaning", typical: "$50-150", description: "Per turnover" },
    { id: "utilities", name: "Utilities", typical: "5-10%", description: "Higher usage" },
    { id: "supplies", name: "Supplies", typical: "2-3%", description: "Toiletries, linens" },
    { id: "management", name: "Management", typical: "20-25%", description: "If using co-host" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Occupancy", value: "50-70%", description: "Year-round" },
    { label: "Airbnb Fee", value: "3%", description: "Host fee" },
    { label: "Premium", value: "2-3x", description: "Vs long-term rent" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How do I calculate Airbnb income?",
        answer: "Net Airbnb Income = (Nightly Rate × Nights Booked) - Airbnb Fees (3%) - Operating Expenses. Key factors include occupancy rate (typically 50-70%), cleaning fees, utilities, and any property management costs. Many hosts net 2-3x more than traditional long-term rentals."
    },
    {
        question: "What is a good Airbnb occupancy rate?",
        answer: "A good occupancy rate is 50-70% annually. Top-performing listings in high-demand areas can reach 80%+. Seasonal markets may see 90%+ in peak season and 20-30% in off-season. Factor in realistic occupancy when projecting income."
    },
    {
        question: "How is Airbnb income taxed?",
        answer: "Airbnb income is taxable. If you rent 15+ days/year, report on Schedule E (or Schedule C if providing hotel-like services). You can deduct proportional mortgage interest, property taxes, insurance, repairs, depreciation, and direct costs. Keep detailed records."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "IRS Publication 527 (2026)",
        title: "Residential Rental Property (Including Vacation Homes)",
        url: "https://www.irs.gov/publications/p527",
        year: "2026"
    },
    {
        source: "IRS Section 280A",
        title: "Disallowance of Certain Expenses: Business Use of Home",
        url: "https://www.irs.gov/",
        year: "2026"
    },
    {
        source: "Airbnb Resource Center",
        title: "Short-Term Rental Tax Hub (2026 Edition)",
        url: "https://www.airbnb.com/",
        year: "2026"
    },
];

export const CITATION_NOTE = "Based on official IRS Publication 527 residential rental guidelines, Section 280A 14-day tax-free exclusion rules, and 2026 occupancy rate data.";

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Rental Income", url: "/rental-income", description: "Long-term rentals" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "Mortgage Calculator", url: "/mortgage", description: "Property loans" },
];
