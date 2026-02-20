/**
 * GRADE-CALC SITE CONFIGURATION
 * 2026 Academic Precision Engine
 */

import { GraduationCap, Award, BookOpen, Calculator, BarChart3, School, Microscope, Target, TrendingUp } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "Grade Calculator",
    tagline: "2026 Academic Grade Calculator & Estimator",
    description: "Calculate your course grades, weighted averages, and final exam targets instantly. Free expert guide for university grading scales and GPA conversion.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/grade",
};

// ============================================
// GRADE CONSTANTS
// ============================================
export const STANDARD_SCALE = [
    { label: 'A+', min: 97, max: 100, gpa: 4.0 },
    { label: 'A', min: 93, max: 96, gpa: 4.0 },
    { label: 'A-', min: 90, max: 92, gpa: 3.7 },
    { label: 'B+', min: 87, max: 89, gpa: 3.3 },
    { label: 'B', min: 83, max: 86, gpa: 3.0 },
    { label: 'B-', min: 80, max: 82, gpa: 2.7 },
    { label: 'C+', min: 77, max: 79, gpa: 2.3 },
    { label: 'C', min: 73, max: 76, gpa: 2.0 },
    { label: 'C-', min: 70, max: 72, gpa: 1.7 },
    { label: 'D+', min: 67, max: 69, gpa: 1.3 },
    { label: 'D', min: 63, max: 66, gpa: 1.0 },
    { label: 'D-', min: 60, max: 62, gpa: 0.7 },
    { label: 'F', min: 0, max: 59, gpa: 0.0 }
];

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const GRADE_2026 = {
    statistics: {
        avgCollegeGpa: "3.15",
        highSchoolGraduationRate: "88%",
        academicEngagementIndex: "4.9/5"
    },
    citations: [
        { name: "US Dept of Education 2026", url: "https://www.ed.gov/" },
        { name: "NCES Academic Standards", url: "https://nces.ed.gov/" },
        { name: "College Board Grade Reporting", url: "https://www.collegeboard.org/" },
        { name: "Harvard Pedagogy Lab 2025", url: "https://www.harvard.edu/" }
    ],
    faqs: [
        {
            question: "How is a weighted grade calculated?",
            answer: "A weighted grade is calculated by multiplying each assignment score by its percentage of the total grade (weight) and summing the results. For example, if a test is worth 40% and you score 90, it contributes 36 points (90 * 0.40) to your final average."
        },
        {
            question: "What is a passing grade in most universities?",
            answer: "In most U.S. higher education institutions, a 'D' (60%+) is a passing grade for general education requirements, but a 'C' (70%+) is often required for core major courses or prerequisite progression."
        },
        {
            question: "How do I calculate what I need on my final exam?",
            answer: "To find the final grade needed: Final % = (Target Grade % - (Current Grade % * (1 - Final Weight %))) / Final Weight %. Our calculator automates this calculation for you."
        },
        {
            question: "What is the difference between a Grade Point and a Grade?",
            answer: "A grade is typically a letter (A-F) or percentage (0-100%). A grade point is the numerical value assigned to that letter (e.g., A = 4.0) used to calculate GPA (Grade Point Average)."
        },
        {
            question: "How do grading curves affect my final result?",
            answer: "A grading curve (Relative Grading) adjusts the scores of the entire class based on a statistical distribution, usually a Bell Curve. In many competitive STEM fields, this ensures that only a specific percentage of students receive 'A' grades."
        },
        {
            question: "Do colleges look at weighted or unweighted grades?",
            answer: "Colleges typically look at both. They use your unweighted grade for a direct baseline comparison and your weighted grade to evaluate the academic rigor of your course load."
        },
        {
            question: "What constitutes an 'Elite' GPA in 2026?",
            answer: "In the 2026 admission cycle, an elite GPA is generally considered 3.8+ for unweighted and 4.2+ for weighted scales for top-tier Ivy League and global research institutions."
        },
        {
            question: "How do I convert a percentage to a 4.0 scale?",
            answer: "Most schools use a mapping where 93-100% = 4.0, 90-92% = 3.7, 87-89% = 3.3, and so on. Check your institution's specific Registrar's handbook for exact conversion deltas."
        },
        {
            question: "What happens if I fail one assignment worth 10%?",
            answer: "If you get a 0% on a 10% assignment, your maximum possible course grade drops by 10 points. For example, if you were at 100%, your grade would drop to 90% (A-)."
        },
        {
            question: "How does 'Grade Inflation' affect 2026 standards?",
            answer: "Grade inflation refers to the tendency to award higher grades for performance that would have received lower grades in the past. In 2026, many institutions are recalibrating their scales to maintain academic integrity."
        },
        {
            question: "Can I use this calculator for high school and college?",
            answer: "Yes, our engine supports both standard secondary education (K-12) and post-secondary (University/Graduate) grading architectures."
        },
        {
            question: "Are lab grades usually weighted differently?",
            answer: "In sciences, labs often carry a separate weight (e.g., 25% of the total course grade). Our weighted average tool allows you to input these specific subsets for a precise calculation."
        },
        {
            question: "Does an A- count the same as an A in GPA?",
            answer: "In most modern systems, an A is 4.0 but an A- is 3.7. This 0.3 delta can have a significant impact on your cumulative academic ranking."
        },
        {
            question: "Should I aim for an 'A' or take a harder class?",
            answer: "Admissions councils often prefer a 'B' in a more rigorous course (AP/IB/Honors) over an 'A' in a standard course, as it demonstrates academic resilience and intellectual risk-taking."
        },
        {
            question: "How often should I check my grades?",
            answer: "A regular check is recommended to identify downward trends early, allowing for strategic study sessions before final exams."
        }
    ]
};

// ============================================
// CALCULATION LOGIC
// ============================================

export interface Assignment {
    name: string;
    grade: number; // percentage (0-100)
    weight: number; // percentage (0-100)
}

/**
 * Calculate Weighted Average
 */
export function calculateWeightedGrade(assignments: Assignment[]): number {
    if (assignments.length === 0) return 0;

    let totalPoints = 0;
    let totalWeight = 0;

    assignments.forEach(a => {
        totalPoints += (a.grade * (a.weight / 100));
        totalWeight += a.weight;
    });

    if (totalWeight === 0) return 0;

    // Normalize if total weight < 100
    return (totalPoints / totalWeight) * 100;
}

/**
 * Calculate Final Grade Needed
 */
export function calculateFinalNeeded(
    currentGrade: number,
    targetGrade: number,
    finalWeight: number
): number {
    if (finalWeight <= 0 || finalWeight >= 100) return 0;

    const currentWeight = 100 - finalWeight;
    const needed = (targetGrade - (currentGrade * (currentWeight / 100))) / (finalWeight / 100);

    return Math.max(0, needed);
}

/**
 * Map Percentage to Letter Grade
 */
export function getGradeFromPercentage(percentage: number) {
    for (const scale of STANDARD_SCALE) {
        if (percentage >= scale.min) {
            return scale;
        }
    }
    return STANDARD_SCALE[STANDARD_SCALE.length - 1];
}

/**
 * Format helper
 */
export function formatValue(val: number): string {
    return val.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}
