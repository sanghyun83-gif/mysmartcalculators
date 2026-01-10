// ============================================
// STUDENT INSURANCE CALCULATOR - QUICK v3.0
// $55 CPC | Competition: Med | Blue Theme
// 2 Routes | 3 FAQs | 3 Inputs | 1 Citation
// ============================================

export const SITE = {
    name: "Student Insurance Calculator",
    tagline: "Free 2026 Student Health Coverage Estimator",
    description: "Calculate student health insurance costs. Coverage for college students, international students, and study abroad. Based on 2026 insurance data.",
    year: "2026",
    baseUrl: "https://mysmartcalculators.com/student-insurance",
};

// ============================================
// STUDENT TYPES
// ============================================
export const STUDENT_TYPES = [
    { id: "domestic", name: "Domestic Student", factor: 0.9, description: "US college student" },
    { id: "international", name: "International Student", factor: 1.3, description: "F-1/J-1 visa" },
    { id: "studyabroad", name: "Study Abroad", factor: 1.2, description: "US student overseas" },
    { id: "graduate", name: "Graduate Student", factor: 1.0, description: "Masters/PhD" },
    { id: "parttime", name: "Part-Time Student", factor: 0.85, description: "Limited coverage" },
];

// ============================================
// COVERAGE OPTIONS
// ============================================
export const COVERAGE_OPTIONS = [
    { id: "basic", name: "Basic Plan", description: "Essential coverage" },
    { id: "comprehensive", name: "Comprehensive", description: "Full coverage" },
    { id: "dental", name: "Dental/Vision", description: "Add-on coverage" },
];

// ============================================
// STATISTICS
// ============================================
export const STATISTICS = [
    { label: "Avg Annual Cost", value: "$1,500-$3,500", description: "Per year" },
    { label: "International Avg", value: "$2,000-$4,500", description: "Per year" },
    { label: "Uninsured Students", value: "8%", description: "US college" },
];

// ============================================
// FAQS - 3 Questions
// ============================================
export const FAQS = [
    {
        question: "How much does student health insurance cost in 2026?",
        answer: "Student health insurance costs $1,500-$3,500 per year for domestic students and $2,000-$4,500 for international students. University-sponsored plans average $2,500/year. Private plans may be cheaper but offer less campus integration."
    },
    {
        question: "Do college students need health insurance?",
        answer: "Under ACA, students under 26 can stay on parents' plans. However, many colleges require proof of health insurance for enrollment. International students (F-1, J-1 visa) typically must have health insurance as a visa requirement."
    },
    {
        question: "What does student health insurance cover?",
        answer: "Student health insurance covers doctor visits, hospitalization, prescriptions, mental health services, and preventive care. Plans vary in coverage for dental, vision, and sports injuries. Campus health centers may be covered at lower or no cost."
    },
];

// ============================================
// CITATIONS
// ============================================
export const CITATIONS = [
    {
        source: "College Board",
        title: "Student Health Insurance Costs",
        url: "https://www.collegeboard.org/",
        year: "2026"
    },
];

// ============================================
// RELATED CALCULATORS
// ============================================
export const RELATED_CALCULATORS = [
    { name: "Health Insurance", url: "/health-insurance", description: "General health" },
    { name: "Travel Insurance", url: "/travel-insurance", description: "Travel coverage" },
    { name: "Life Insurance", url: "/life-insurance", description: "Life coverage" },
];
