// ============================================
// VISION INSURANCE CALCULATOR - QUICK v3.0
// $50 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Vision Insurance Calculator",
    tagline: "Free 2026 Vision Coverage Estimator",
    description: "Calculate vision insurance costs. Coverage for eye exams, glasses, contacts, and LASIK. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/vision-insurance",
};

// ============================================
// PLAN TYPES
// ============================================
export const PLAN_TYPES = [
    { id: "basic", name: "Basic Plan", factor: 0.8, description: "Exam + glasses only" },
    { id: "standard", name: "Standard Plan", factor: 1.0, description: "Exam + glasses + contacts" },
    { id: "premium", name: "Premium Plan", factor: 1.3, description: "Full coverage + discounts" },
    { id: "family", name: "Family Plan", factor: 2.5, description: "Covers dependents" },
    { id: "individual", name: "Individual", factor: 0.9, description: "Single coverage" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "exam", name: "Eye Exam", description: "Annual comprehensive exam" },
    { id: "glasses", name: "Glasses/Frames", description: "Lenses and frames" },
    { id: "contacts", name: "Contacts", description: "Annual contact lens allowance" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Monthly Cost", value: "$10-$25", description: "Per person" },
    { label: "Annual Exam", value: "$0-$20", description: "With insurance" },
    { label: "Frame Allowance", value: "$130-$200", description: "Every 1-2 years" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does vision insurance cost in 2026?",
        answer: "Vision insurance costs $10-$25 per month for individual coverage, or $120-$300 annually. Family plans cost $25-$50/month. Employer-sponsored plans are often cheaper at $5-$15/month. Standalone vision plans may offer better coverage than add-ons."
    },
    {
        question: "Is vision insurance worth it?",
        answer: "Vision insurance is worth it if you wear glasses/contacts or need annual exams. Plans typically save $100-$200 on glasses and provide free annual exams. If you rarely need vision care, a discount program may be more cost-effective than full insurance."
    },
    {
        question: "What does vision insurance cover?",
        answer: "Vision insurance covers annual eye exams, prescription glasses (lenses and frames), contact lenses, and discounts on LASIK surgery. Some plans include additional benefits like blue light lens coatings or progressive lenses. Coverage limits and copays vary by plan."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "VSP Vision Care",
        title: "Vision Insurance Benefits",
        url: "https://www.vsp.com/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Health Insurance", url: "/health-insurance", description: "Medical coverage" },
    { name: "Dental Insurance", url: "/dental-insurance", description: "Dental coverage" },
    { name: "Student Insurance", url: "/student-insurance", description: "Student health" },
];
