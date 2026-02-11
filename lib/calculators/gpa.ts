// ============================================
// GPA-CALC SITE CONFIGURATION
// 2026 GPA Precision Engine (S-Class)
// ============================================

import { GraduationCap, Award, BookOpen, Calculator, BarChart3, School } from 'lucide-react';

// ============================================
// SITE METADATA
// ============================================
export const SITE = {
    name: "GPA Calculator",
    tagline: "2026 Global Academic Precision Engine",
    description: "Calculate your weighted and unweighted GPA with 2026 university-grade precision. Expert guide for AP/IB honors, semester tracking, and college admission GPA requirements.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/gpa",
};

// ============================================
// GPA CONSTANTS
// ============================================
export const GRADE_SCALE_4_0 = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'D-': 0.7,
    'F': 0.0
};

export const WEIGHT_BONUS = {
    'regular': 0,
    'honors': 0.5,
    'ap/ib': 1.0
};

// ============================================
// CALCULATOR DEFINITIONS
// ============================================
export const CALCULATORS = [
    {
        id: "gpa/calculator",
        name: "Standard GPA Calculator",
        shortName: "GPA Engine",
        description: "Calculate 4.0 scale GPA with weighted options",
        longDescription: "Professional academic tool for calculating semester and cumulative GPA based on standard U.S. university scales.",
        icon: GraduationCap,
        category: "general",
        keywords: ["gpa calculator", "weighted gpa", "calculate gpa", "high school gpa"],
        featured: true,
        faqs: [
            {
                question: "What is the difference between Weighted and Unweighted GPA?",
                answer: "An unweighted GPA is calculated on a 4.0 scale regardless of course difficulty. A weighted GPA adds 'bonus points' for advanced courses (Honors +0.5, AP/IB +1.0) to reflect academic rigor, often resulting in GPAs above 4.0."
            },
            {
                question: "How is a standard 4.0 GPA calculated?",
                answer: "Divide the total grade points earned by the total number of credit hours attempted. Grade points are determined by multiplying the course's numerical grade value (e.g., A=4.0) by its credit value."
            },
            {
                question: "Do colleges prefer weighted or unweighted GPA?",
                answer: "Most selective colleges look at both. They use the unweighted GPA for a baseline comparison and the weighted GPA (or a recalculated internal GPA) to assess the level of challenge the student took on."
            },
            {
                question: "How do credit hours affect my GPA?",
                answer: "Credits function as 'weights'. A 4-credit course has double the impact on your GPA compared to a 2-credit course. High grades in high-credit courses are the most effective way to raise a cumulative GPA."
            },
            {
                question: "What counts as a 'Passing' grade for GPA?",
                answer: "Generally, any grade D- (0.7) or higher is considered passing for credit. However, many major programs and graduate schools require a C or higher for specific core requirements."
            },
            {
                question: "How can I raise my GPA quickly?",
                answer: "The fastest way to raise a GPA is to perform well in high-credit courses. Additionally, retaking a course where you received a low grade (if your school allows grade replacement) can significantly boost your cumulative average."
            },
            {
                question: "What is a 5.0 GPA scale?",
                answer: "A 5.0 scale is typically used in high schools that offer weighted grades for AP (Advanced Placement) or IB (International Baccalaureate) courses, where an A in an advanced class is worth 5.0 points."
            },
            {
                question: "How do I calculate GPA if my school uses percentages?",
                answer: "You must first convert your percentages to a 4.0 scale using your school's official conversion chart. Typically, 90-100% is an A (4.0), 80-89% is a B (3.0), etc."
            },
            {
                question: "What is a 'Cumulative' GPA?",
                answer: "It is the overall GPA for your entire academic career at a specific institution, including all semesters and years completed to date."
            },
            {
                question: "Do 'W' (Withdrawal) grades affect my GPA?",
                answer: "Standard 'W' grades do not affect your GPA as no points are earned and no credits are attempted. However, a 'WF' (Withdrawal Failing) often counts as an F (0.0)."
            },
            {
                question: "How is a Semester GPA different from a Cumulative GPA?",
                answer: "Semester GPA only considers the courses taken within one specific term, whereas Cumulative GPA includes every course taken throughout your entire schooling period."
            },
            {
                question: "How do honors courses affect weighted GPA?",
                answer: "Most schools add 0.5 points to the standard grade value for Honors courses. So an 'A' in an Honors class would be worth 4.5 instead of 4.0."
            },
            {
                question: "What grade is a 3.0 GPA?",
                answer: "A 3.0 GPA is equivalent to a 'B' average. It is often the minimum requirement for many scholarships and graduate program admissions."
            },
            {
                question: "Does failing a class ruin my GPA?",
                answer: "An 'F' yields 0.0 points but counts toward the total credits attempted, which can significantly lower the average. Retaking the class is the best way to mitigate this damage."
            },
            {
                question: "How do graduate schools look at GPA?",
                answer: "Graduate schools often look at 'U-Trend' (whether your GPA improved over time) and your GPA in major-specific courses, rather than just the final cumulative number."
            }
        ]
    }
] as const;

// ============================================
// CALCULATION LOGIC
// ============================================

export interface CourseData {
    grade: keyof typeof GRADE_SCALE_4_0;
    credits: number;
    type: keyof typeof WEIGHT_BONUS;
}

export function calculateGPA(courses: CourseData[]): { unweighted: number; weighted: number } {
    if (courses.length === 0) return { unweighted: 0, weighted: 0 };

    let totalUnweightedPoints = 0;
    let totalWeightedPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
        const baseValue = GRADE_SCALE_4_0[course.grade];
        const weightBonus = WEIGHT_BONUS[course.type];

        totalUnweightedPoints += baseValue * course.credits;
        totalWeightedPoints += (baseValue + (baseValue > 0 ? weightBonus : 0)) * course.credits;
        totalCredits += course.credits;
    });

    if (totalCredits === 0) return { unweighted: 0, weighted: 0 };

    return {
        unweighted: totalUnweightedPoints / totalCredits,
        weighted: totalWeightedPoints / totalCredits
    };
}
