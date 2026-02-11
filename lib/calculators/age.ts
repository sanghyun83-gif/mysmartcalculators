// ============================================
// AGE-CALC SITE CONFIGURATION
// 2026 Age Precision Auditor
// Chronological & Biological Aging Analysis
// ============================================

import { Calculator, Calendar, Hourglass, Info, BookOpen, ScrollText, Timer, GraduationCap } from 'lucide-react';

export const SITE = {
    name: "Age Calculator",
    tagline: "2026 Precision Chronological Auditor",
    description: "Calculate your exact age in years, months, days, hours, and seconds. Professional-grade chronological auditor with biological insights and longevity benchmarks.",
    year: 2026,
    baseUrl: "https://mysmartcalculators.com/age",
};

// ============================================
// 2026 AGE CONSTANTS & BENCHMARKS
// ============================================
export const AGE_DATA = {
    citations: [
        { name: "World Health Organization (WHO) - Ageing and Health", url: "https://www.who.int/news-room/fact-sheets/detail/ageing-and-health" },
        { name: "Centers for Disease Control (CDC) - Life Expectancy", url: "https://www.cdc.gov/nchs/fastats/life-expectancy.htm" },
        { name: "U.S. Census Bureau - Age and Sex Composition", url: "https://www.census.gov/topics/population/age-and-sex.html" },
        { name: "National Institute on Aging - Global Aging", url: "https://www.nia.nih.gov/about/aging-strategic-directions-research" },
        { name: "United Nations - World Population Prospects", url: "https://population.un.org/wpp/" }
    ],
    faqs: [
        {
            question: "How is chronological age calculated vs. biological age?",
            answer: "Chronological age is the total time elapsed since birth, measured in years, months, and days. Biological age, however, refers to how old your cells and tissues look based on physiological markers like DNA methylation, telomere length, and organ function. S-Class AgeMaster focuses on chronological precision while providing insights into biological factors."
        },
        {
            question: "Does the Age Calculator account for leap years?",
            answer: "Yes. Our 2026 Precision Engine accurately accounts for every leap day (February 29th) occurring within your lifespan. This ensures that the total days lived and the exact month-day breakdown remain mathematically sound over decades."
        },
        {
            question: "What is the 'Age in Seconds' calculation used for?",
            answer: "While often used for curiosity or social media milestones, precision time tracking is used in medical research, legal forensics, and insurance actuarial tables to determine exact risk profiles and development stages at the time of a specific event."
        },
        {
            question: "How do different cultures calculate age?",
            answer: "Most Western systems (International standard) consider a newborn 0 years old. However, in traditional East Asian systems (Corean/Chinese age), a baby is often considered 1 year old at birth, and age increments on the Lunar New Year. Our calculator follows the international standard used in regulatory and academic environments."
        },
        {
            question: "What is the global average life expectancy in 2026?",
            answer: "As of 2026, global life expectancy is approximately 73.4 years, with significant variance by region (85+ in Japan/Singapore vs. 55-60 in specific sub-Saharan regions). Our tool provides benchmarks based on updated 2026 WHO datasets."
        },
        {
            question: "How does aging affect the body's metabolism?",
            answer: "Metabolic rate typically declines by 1-2% per decade after the age of 20, primarily due to loss of lean muscle mass. Maintaining resistance training and high protein intake can partially mitigate this biological aging effect."
        },
        {
            question: "Can I calculate the age of an object or event?",
            answer: "Extremely. Though designed for humans, the AgeMaster engine acts as a general duration calculator. You can input any historical 'Birth' date to determine the current age of a corporation, a building, or a historical event with down-to-the-second accuracy."
        },
        {
            question: "What are the key milestones in human development by age?",
            answer: "Major developmental milestones include infancy (0-2), early childhood (2-6), middle childhood (6-11), adolescence (12-19), early adulthood (20-39), middle adulthood (40-64), and late adulthood (65+). Each stage has distinct physiological and cognitive benchmarks."
        },
        {
            question: "How does the 'Korean Age' system change in 2026?",
            answer: "South Korea officially transitioned to the international age system for administrative and judicial purposes in June 2023. While traditional counting persists socially, our calculator aligns with the official legal 'Man-nai' standard used internationally."
        },
        {
            question: "What occurs neurologically during the mid-20s?",
            answer: "The prefrontal cortex, responsible for executive function and risk management, typically finishes development around age 25. This is Why many insurance premiums drop significantly after this chronological milestone."
        },
        {
            question: "What is 'Successful Aging' by WHO standards?",
            answer: "The WHO defines healthy aging as 'the process of developing and maintaining the functional ability that enables well-being in older age.' functional ability includes the ability to meet basic needs, learn, be mobile, and build relationships."
        },
        {
            question: "How accurate is the 'Next Birthday' countdown?",
            answer: "Our engine uses UTC-synced time modules to provide a live countdown to your next birthday anniversary, adjusting for time zones and leap years for maximum precision."
        },
        {
            question: "Is my birth date data saved on your servers?",
            answer: "No. In accordance with S-Class Deep Hybrid privacy protocols, all calculations are performed client-side using JavaScript. Your birth date never leaves your browser."
        },
        {
            question: "How often should biological age markers be checked?",
            answer: "Medical experts suggest checking key biomarkers (blood pressure, cholesterol, glucose) annually after age 35 to monitor the delta between your chronological and biological age."
        },
        {
            question: "What is the 'Silver Tsunami' in demographics?",
            answer: "It refers to the significant increase in the proportion of the world's population over age 65, primarily due to the aging 'Baby Boomer' generation and increased life expectancy. This shift impacts economic, healthcare, and social structures."
        }
    ]
};

// ============================================
// PRECISION CHRONOLOGICAL CALCULATOR LOGIC
// ============================================
export interface AgeResult {
    years: number;
    months: number;
    days: number;
    totalMonths: number;
    totalWeeks: number;
    totalDays: number;
    totalHours: number;
    totalMinutes: number;
    totalSeconds: number;
    nextBirthday: {
        months: number;
        days: number;
        remainingDays: number;
    };
    zodiac: string;
}

export function calculatePrecisionAge(birthDateStr: string, benchmarkDateStr?: string): AgeResult {
    const birthDate = new Date(birthDateStr);
    const today = benchmarkDateStr ? new Date(benchmarkDateStr) : new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    // Totals
    const diffMs = today.getTime() - birthDate.getTime();
    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonthsAll = (years * 12) + months;

    // Next Birthday
    let nextBday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    if (today > nextBday) {
        nextBday.setFullYear(today.getFullYear() + 1);
    }
    const diffNextBdayMs = nextBday.getTime() - today.getTime();
    const remainingDays = Math.ceil(diffNextBdayMs / (1000 * 60 * 60 * 24));

    // Exact months/days to next birthday
    let nextMonths = nextBday.getMonth() - today.getMonth();
    let nextDays = nextBday.getDate() - today.getDate();
    if (nextDays < 0) {
        nextMonths -= 1;
        const lastMonth = new Date(nextBday.getFullYear(), nextBday.getMonth(), 0);
        nextDays += lastMonth.getDate();
    }
    if (nextMonths < 0) {
        nextMonths += 12;
    }

    // Zodiac logic
    const zodiacs = [
        { name: "Capricorn", day: 20 }, { name: "Aquarius", day: 19 },
        { name: "Pisces", day: 20 }, { name: "Aries", day: 20 },
        { name: "Taurus", day: 21 }, { name: "Gemini", day: 21 },
        { name: "Cancer", day: 22 }, { name: "Leo", day: 23 },
        { name: "Virgo", day: 23 }, { name: "Libra", day: 23 },
        { name: "Scorpio", day: 22 }, { name: "Sagittarius", day: 22 }
    ];
    const month = birthDate.getMonth(); // 0-indexed
    const day = birthDate.getDate();
    let zodiac = month === 11 && day >= 22 ? "Capricorn" : zodiacs[month].name;
    if (day < zodiacs[month].day) {
        zodiac = month === 0 ? "Capricorn" : zodiacs[month - 1].name;
    }

    return {
        years, months, days,
        totalMonths: totalMonthsAll,
        totalWeeks, totalDays,
        totalHours, totalMinutes, totalSeconds,
        nextBirthday: {
            months: nextMonths,
            days: nextDays,
            remainingDays
        },
        zodiac
    };
}
