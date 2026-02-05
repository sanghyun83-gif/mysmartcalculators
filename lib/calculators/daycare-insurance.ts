// ============================================
// DAYCARE INSURANCE CALCULATOR - STANDARD v3.0
// $115 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Daycare Insurance Calculator",
    tagline: "Free 2026 Child Care Center Insurance Estimator",
    description: "Calculate daycare insurance costs. GL, professional liability, abuse/molestation coverage for child care centers and preschools. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/daycare-insurance",
};

// ============================================
// DAYCARE TYPES
// ============================================
export const DAYCARE_TYPES = [
    { id: "home-daycare", name: "Home Daycare (1-6 kids)", factor: 0.70, description: "In-home care" },
    { id: "small-center", name: "Small Center (7-25 kids)", factor: 1.0, description: "Small licensed facility" },
    { id: "medium-center", name: "Medium Center (26-75 kids)", factor: 1.25, description: "Mid-size facility" },
    { id: "large-center", name: "Large Center (75+ kids)", factor: 1.50, description: "Large licensed facility" },
    { id: "preschool", name: "Preschool", factor: 1.10, description: "Educational focus" },
    { id: "after-school", name: "After-School Program", factor: 0.85, description: "School-age children" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 2000, description: "Child injuries, slip/fall" },
    { id: "professional", name: "Professional Liability", baseCost: 800, description: "Care errors, supervision" },
    { id: "abuse", name: "Abuse/Molestation", baseCost: 1500, description: "Required for child care" },
    { id: "property", name: "Business Property", baseCost: 1200, description: "Equipment, supplies" },
];

// ============================================
// CHILD COUNT TIERS
// ============================================
export const CHILD_TIERS = [
    { id: "1-10", name: "1-10 children", factor: 0.65 },
    { id: "11-25", name: "11-25 children", factor: 0.85 },
    { id: "26-50", name: "26-50 children", factor: 1.0 },
    { id: "51-100", name: "51-100 children", factor: 1.30 },
    { id: "over100", name: "Over 100 children", factor: 1.60 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Total Premium", value: "$3,000-$8,000", description: "Per year" },
    { label: "Abuse Coverage", value: "Required", description: "By most states" },
    { label: "Child Injuries", value: "70%", description: "Of daycare claims" },
    { label: "Staff Ratio", value: "1:4 to 1:10", description: "Affects premiums" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does daycare insurance cost in 2026?",
        answer: "Daycare insurance typically costs $3,000-$8,000 per year for a small to medium center. Costs depend on the number of children enrolled, staff ratios, facility type, and state regulations. Home daycares pay less ($1,500-$3,000) while large centers pay more."
    },
    {
        question: "What insurance does a daycare need?",
        answer: "Daycares need: General Liability (child injuries, slip/fall), Professional Liability (supervision errors), Abuse/Molestation coverage (required by most states and parents), Property coverage (equipment, supplies), and Workers Comp for staff."
    },
    {
        question: "Is abuse/molestation coverage required for daycares?",
        answer: "Most states require it for licensing. Even where not legally required, parents expect it, and it's essential protection. This coverage protects against abuse allegations involving employees or volunteers. Typical limits are $100K-$500K."
    },
    {
        question: "Does daycare insurance cover child injuries?",
        answer: "Yes. General liability covers injuries to children in your care - playground falls, cuts, bumps, and other common incidents. About 70% of daycare liability claims involve child injuries. Proper supervision and safety protocols reduce claims."
    },
    {
        question: "How does staff-to-child ratio affect insurance?",
        answer: "Lower ratios (more staff per child) can reduce premiums because better supervision reduces injury risk. Most states mandate minimum ratios (e.g., 1:4 for infants, 1:10 for school-age). Meeting or exceeding requirements can lower your insurance costs."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Child Care Business Insurance Report",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "Child Care Aware",
        title: "Licensing and Regulation Requirements",
        url: "https://www.childcareaware.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Business Insurance", url: "/business-insurance", description: "Small business coverage" },
    { name: "General Liability", url: "/general-liability", description: "GL coverage" },
    { name: "Workers Comp Premium", url: "/workers-comp-premium", description: "WC rate calculator" },
];
