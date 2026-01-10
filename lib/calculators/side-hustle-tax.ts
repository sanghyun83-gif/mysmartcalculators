// ============================================
// SIDE HUSTLE TAX CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Low | Emerald Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Side Hustle Tax Calculator",
    tagline: "Free 2026 Gig Economy Tax Calculator",
    description: "Calculate self-employment taxes on side income. Includes SE tax, quarterly estimates, and deductions. Based on 2026 IRS guidelines.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/side-hustle-tax",
};

// ============================================
// COMMON SIDE HUSTLES
// ============================================
export const SIDE_HUSTLES = [
    { id: "rideshare", name: "Rideshare (Uber/Lyft)", expenses: "Mileage, phone" },
    { id: "delivery", name: "Delivery (DoorDash)", expenses: "Mileage, bags" },
    { id: "freelance", name: "Freelance/Consulting", expenses: "Equipment, software" },
    { id: "ecommerce", name: "E-commerce/Reselling", expenses: "Inventory, shipping" },
    { id: "content", name: "Content Creation", expenses: "Equipment, editing" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "SE Tax Rate", value: "15.3%", description: "Social Security + Medicare" },
    { label: "Threshold", value: "$400+", description: "Must file if over" },
    { label: "Mileage Rate", value: "70¢/mi", description: "2026 IRS rate" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How is side hustle income taxed?",
        answer: "Side hustle income is subject to self-employment tax (15.3% for Social Security and Medicare) plus regular income tax based on your bracket. You pay both employer and employee portions of FICA. You must file if you earn $400+ from self-employment."
    },
    {
        question: "Do I need to pay quarterly taxes?",
        answer: "If you expect to owe $1,000+ in taxes from your side hustle, you should pay quarterly estimated taxes (due April 15, June 15, September 15, January 15). Use Form 1040-ES. Failure to pay quarterly can result in underpayment penalties."
    },
    {
        question: "What side hustle expenses can I deduct?",
        answer: "Common deductions include mileage (70¢/mile for 2026), phone/internet (business %), home office, equipment, supplies, software subscriptions, and professional services. Keep detailed records. Deductions reduce your taxable income."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "Internal Revenue Service",
        title: "Self-Employment Tax",
        url: "https://www.irs.gov/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Self-Employment", url: "/self-employment", description: "Full SE tax" },
    { name: "Tax Calculator", url: "/tax", description: "Income tax" },
    { name: "Quarterly Tax", url: "/quarterly-tax", description: "Estimated payments" },
];
