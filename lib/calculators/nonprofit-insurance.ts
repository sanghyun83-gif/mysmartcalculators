// ============================================
// NONPROFIT INSURANCE CALCULATOR - STANDARD v3.0
// $100 CPC | Competition: Low | Blue Theme
// 2 Routes | 5 FAQs | 5 Inputs | 2 Citations
// ============================================

export const SITE = {
    name: "Non-Profit Insurance Calculator",
    tagline: "Free 2026 Nonprofit Organization Insurance Estimator",
    description: "Calculate nonprofit insurance costs. D&O liability, GL, volunteer coverage for charities, foundations, and 501(c)(3) organizations. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/nonprofit-insurance",
};

// ============================================
// NONPROFIT TYPES
// ============================================
export const NONPROFIT_TYPES = [
    { id: "charity", name: "Charitable Organization", factor: 1.0, description: "General charity" },
    { id: "foundation", name: "Private Foundation", factor: 1.15, description: "Grantmaking" },
    { id: "religious", name: "Religious Organization", factor: 0.90, description: "Church, mosque, temple" },
    { id: "educational", name: "Educational Institution", factor: 1.10, description: "Schools, tutoring" },
    { id: "advocacy", name: "Advocacy/Political", factor: 1.35, description: "Policy, lobbying" },
    { id: "social-services", name: "Social Services", factor: 1.25, description: "Direct client services" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "gl", name: "General Liability", baseCost: 1500, description: "Premises, events" },
    { id: "do", name: "Directors & Officers", baseCost: 2000, description: "Board member protection" },
    { id: "property", name: "Business Property", baseCost: 800, description: "Equipment, supplies" },
    { id: "volunteer", name: "Volunteer Accident", baseCost: 500, description: "Volunteer injury" },
];

// ============================================
// BUDGET TIERS
// ============================================
export const BUDGET_TIERS = [
    { id: "under100k", name: "Under $100,000", factor: 0.60 },
    { id: "100k-500k", name: "$100,000 - $500,000", factor: 0.80 },
    { id: "500k-1m", name: "$500,000 - $1 Million", factor: 1.0 },
    { id: "1m-5m", name: "$1 Million - $5 Million", factor: 1.30 },
    { id: "over5m", name: "Over $5 Million", factor: 1.65 },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Total Premium", value: "$2,000-$6,000", description: "Per year" },
    { label: "D&O Coverage", value: "Essential", description: "Board protection" },
    { label: "Employment Claims", value: "40%", description: "Of nonprofit lawsuits" },
    { label: "501(c)(3)s in US", value: "1.5M+", description: "Registered 2026" },
];

// ============================================
// FAQS - 5 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does nonprofit insurance cost in 2026?",
        answer: "Nonprofit insurance typically costs $2,000-$6,000 per year for a small to medium organization. Costs depend on your budget size, number of employees and volunteers, activities, and whether you work with vulnerable populations (children, elderly)."
    },
    {
        question: "What insurance does a 501(c)(3) need?",
        answer: "Nonprofits need: General Liability (event injuries, property damage), Directors & Officers (protects board from lawsuits), Property coverage (equipment), and often Volunteer Accident insurance. Some funders require specific limits for grants."
    },
    {
        question: "Why is D&O insurance important for nonprofits?",
        answer: "Directors & Officers liability protects board members personally if the organization is sued for mismanagement, discrimination, or fiduciary breaches. Many qualified board members won't serve without D&O protection. Employment claims are the #1 D&O risk."
    },
    {
        question: "Does nonprofit insurance cover volunteers?",
        answer: "Standard GL covers liability if a volunteer injures someone, but NOT if the volunteer is injured. Volunteer Accident insurance covers medical costs if your volunteers are hurt while serving. This is highly recommended for organizations with active volunteer programs."
    },
    {
        question: "Do nonprofits get discounted insurance rates?",
        answer: "Some insurers specialize in nonprofit coverage and offer competitive rates. 501(c)(3) status doesn't automatically mean lower premiums, but insurers consider the generally lower-risk nature of most nonprofit activities. Shopping with nonprofit-focused insurers helps."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "NAIC",
        title: "Nonprofit Organization Insurance Guide",
        url: "https://www.naic.org/",
        year: "2026"
    },
    {
        source: "National Council of Nonprofits",
        title: "Insurance & Risk Management",
        url: "https://www.councilofnonprofits.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Business Insurance", url: "/business-insurance", description: "Small business coverage" },
    { name: "General Liability", url: "/general-liability", description: "GL coverage" },
    { name: "D&O Insurance", url: "/do-insurance", description: "Directors & Officers" },
];
