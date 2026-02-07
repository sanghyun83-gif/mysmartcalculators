// ============================================
// RENTAL INCOME CALCULATOR - QUICK v3.0
// $70 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Rental Income Calculator",
    tagline: "Free 2026 Rental Property Income Calculator",
    description: "Calculate net rental income, cash flow, and ROI. Based on 2026 IRS guidelines for rental property deductions.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/rental-income",
};

// ============================================
// EXPENSE CATEGORIES
// ============================================
export const EXPENSE_CATEGORIES = [
    { id: "mortgage", name: "Mortgage Payment", typical: "30-40%", description: "Principal + Interest" },
    { id: "taxes", name: "Property Taxes", typical: "8-12%", description: "Annual taxes" },
    { id: "insurance", name: "Insurance", typical: "3-5%", description: "Landlord policy" },
    { id: "maintenance", name: "Maintenance", typical: "5-10%", description: "Repairs, upkeep" },
    { id: "vacancy", name: "Vacancy", typical: "5-8%", description: "Empty unit reserve" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Cap Rate", value: "5-8%", description: "Good investment" },
    { label: "Cash-on-Cash", value: "8-12%", description: "Strong return" },
    { label: "Expense Ratio", value: "35-50%", description: "Of gross rent" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How do I calculate net rental income?",
        answer: "Net Rental Income = Gross Rent - Operating Expenses - Mortgage Payment. Operating expenses typically include property taxes, insurance, maintenance, property management (8-10%), and vacancy reserve (5-8%). The 50% rule estimates expenses at half of gross rent."
    },
    {
        question: "What is a good cap rate for rental property?",
        answer: "Cap rate (Net Operating Income ÷ Property Value) of 5-8% is considered good in most markets. Higher cap rates (8-12%) indicate higher returns but may come with more risk. Lower cap rates (3-5%) are common in expensive markets with appreciation potential."
    },
    {
        question: "What rental income deductions can I claim?",
        answer: "Landlords can deduct mortgage interest (not principal), property taxes, insurance, repairs, depreciation (27.5 years for residential), property management fees, travel expenses, and professional services. Keep detailed records for all deductions."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Rental Income and Expenses",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Mortgage Calculator", url: "/mortgage", description: "Home loans" },
    { name: "Capital Gains", url: "/capital-gains", description: "Property sale tax" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
];
