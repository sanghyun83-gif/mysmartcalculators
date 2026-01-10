// ============================================
// FREELANCE TAX CALCULATOR - QUICK v3.0
// $65 CPC | Competition: Med | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Freelance Tax Calculator",
    tagline: "Free 2026 Freelancer Tax Calculator",
    description: "Calculate freelance taxes, self-employment tax, and take-home pay. Based on 2026 IRS guidelines for freelancers and solopreneurs.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/freelance-tax",
};

// ============================================
// FREELANCE CATEGORIES
// ============================================
export const FREELANCE_CATEGORIES = [
    { id: "writer", name: "Writer/Editor", deductions: "Software, research, home office" },
    { id: "designer", name: "Designer/Artist", deductions: "Software, equipment, supplies" },
    { id: "developer", name: "Developer/Tech", deductions: "Hardware, software, hosting" },
    { id: "consultant", name: "Consultant/Coach", deductions: "Travel, marketing, training" },
    { id: "creator", name: "Content Creator", deductions: "Equipment, editing, props" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "SE Tax", value: "15.3%", description: "Social Security + Medicare" },
    { label: "Avg Deductions", value: "20-30%", description: "Of gross income" },
    { label: "Save for Taxes", value: "25-30%", description: "Recommended" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much should freelancers save for taxes?",
        answer: "A safe rule is to save 25-30% of your freelance income for taxes. This covers self-employment tax (15.3%) plus federal income tax (10-37% based on bracket). State taxes may require saving more. Set aside money from each payment you receive."
    },
    {
        question: "What deductions can freelancers claim?",
        answer: "Common deductions include home office (simplified: $5/sq ft up to 300 sq ft), internet/phone (business %), equipment and software, professional development, health insurance premiums, retirement contributions (SEP-IRA, Solo 401k), and travel for business purposes."
    },
    {
        question: "Do freelancers need to file quarterly taxes?",
        answer: "Yes, if you expect to owe $1,000+ in taxes. Quarterly estimated payments are due April 15, June 15, September 15, and January 15. Use IRS Form 1040-ES. Many freelancers set aside 25-30% of each payment for taxes."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Self-Employed Individuals Tax Center",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "1099 Tax", url: "/1099-tax", description: "Contractor tax" },
    { name: "Self-Employment", url: "/self-employment", description: "Full SE tax" },
    { name: "Side Hustle Tax", url: "/side-hustle-tax", description: "Gig income" },
];
