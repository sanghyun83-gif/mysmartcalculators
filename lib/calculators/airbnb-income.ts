// ============================================
// AIRBNB INCOME CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Airbnb Income Calculator",
    tagline: "Free 2026 Short-Term Rental Income Calculator",
    description: "Calculate Airbnb earnings, occupancy rates, and net income. Based on 2026 IRS guidelines for short-term rental income.",
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
        source: "Internal Revenue Service",
        title: "Sharing Economy Tax Center",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Rental Income", url: "/rental-income", description: "Long-term rentals" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "Mortgage Calculator", url: "/mortgage", description: "Property loans" },
];
