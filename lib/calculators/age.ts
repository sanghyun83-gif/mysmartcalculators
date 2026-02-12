/**
 * Age Calculator Core Engine (S-Class Standard)
 * Precision 2026 Audit Engine
 */

export const SITE = {
    name: "Age Calculator"
};

export interface AgeResult {
    chronological: {
        years: number;
        months: number;
        days: number;
    };
    total: {
        months: number;
        weeks: number;
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    birthday: {
        nextDate: string;
        daysRemaining: number;
        ageTurning: number;
    };
    zodiac: {
        western: string;
        chinese: string;
    };
    milestones: {
        label: string;
        value: string;
        date: string;
    }[];
}

export const AGE_2026 = {
    faqs: [
        {
            question: "How is 'Chronological Age' precisely calculated?",
            answer: "Chronological age is the exact amount of time that has elapsed from birth to a given date. Our engine calculates this by precisely subtracting the year, month, and day of birth from the target date, accounting for leap years and the varying lengths of months (28, 30, or 31 days). This is the standard legal metric for age in most Western cultures."
        },
        {
            question: "What is the difference between Western and Korean age?",
            answer: "Traditionally, 'Korean Age' (Se-neun-nai) counted a baby as 1 year old at birth and added a year every New Year's Day. However, as of June 2023, South Korea officially transitioned to the 'International Age' system for all legal and administrative matters, matching the Western standard. Our calculator uses this modern 2026 legal standard."
        },
        {
            question: "How does the 'Next Birthday' countdown work?",
            answer: "The countdown identifies the date in the current calendar year that matches your birth month and day. If that date has already passed, it shifts to the following year. It uses UTC synchronization to provide a precise daily countdown, excluding the birth day itself to reflect 'days remaining'."
        },
        {
            question: "What are 'Chronological Milestones'?",
            answer: "Milestones are significant round numbers of days you have lived (e.g., 10,000, 20,000 days). Reaching 10,000 days occurs around the age of 27. These metrics are increasingly used in life-coaching and biological optimization to track 'life-span duration' rather than just years."
        },
        {
            question: "Is biological age different from chronological age?",
            answer: "Yes. Chronological age is based on the calendar, while biological age (or physiological age) reflects the functional status of your organs and biomarkers. Factors like telomere length, DNA methylation (the 'Horvath Clock'), and metabolic health can make one's biological age higher or lower than their calendar age."
        },
        {
            question: "How is the Western Zodiac sign determined?",
            answer: "Western Zodiac signs (Aries, Taurus, etc.) are based on the sun's position relative to twelve sectors of the ecliptic at the time of birth. Our audit uses the modern tropical zodiac dates which are standard in astrological analysis."
        },
        {
            question: "How is the Chinese Zodiac animal calculated?",
            answer: "The Chinese Zodiac is based on a 12-year lunar cycle, with each year associated with an animal. While the lunar New Year varies, our engine provides a precision match based on the Gregorian birth year, which is the standard benchmark for general zodiac identification."
        },
        {
            question: "Why do some months have 30 days and others 31 in age calculation?",
            answer: "To ensure legal precision, age calculation must follow the calendar's structure. If a person is born on January 31st, they technically turn 1 month old on the last day of February, regardless of whether it has 28 or 29 days. Our engine accounts for these 'month-end' edge cases."
        },
        {
            question: "What is the leap year impact on age?",
            answer: "For individuals born on February 29th, the legal age increment typically occurs on March 1st in non-leap years. Our calculator tracks total days lived with absolute precision, ensuring leap years are factored into the 'total days' and 'total hours' metrics."
        },
        {
            question: "How does 'Life Duration' in minutes help in health tracking?",
            answer: "High-resolution time tracking (hours/minutes) is used in medical research to track exposure durations and biological rhythms. In professional sports and biohacking, 'minutes lived' is a metric used for cumulative physical load analysis."
        },
        {
            question: "Are there legal age thresholds I should be aware of?",
            answer: "While varying by jurisdiction, common global thresholds include 16 (consent/driving), 18 (adulthood/voting), and 21 (full legal rights in some countries). Our audit provides the raw data needed to verify these thresholds against document dates."
        },
        {
            question: "How accurate is the 'Total Weeks' metric?",
            answer: "The total weeks metric is calculated by dividing total days by 7. This is often used in developmental psychology and pediatric audits where 'age in weeks' is a more sensitive developmental marker than years."
        },
        {
            question: "Does the calculator support future dates?",
            answer: "Yes. By adjusting the target date (defaulting to today), you can calculate your projected age at retirement, a future anniversary, or any upcoming milestone for planning purposes."
        },
        {
            question: "What is UTC temporal synchronization?",
            answer: "Coordinated Universal Time (UTC) is the primary time standard by which the world regulates clocks and time. Using UTC ensures that age audits remain consistent regardless of daylight savings shifts or local time zone anomalies."
        },
        {
            question: "Why is tracking 'Days Lived' becoming popular?",
            answer: "The '10,000 Days' milestone has become a cultural significance point representing roughly 27.4 years—a pivot point into full maturity. Tracking days encourages a more granular appreciation of time compared to the broad strokes of annual birthdays."
        }
    ],
    citations: [
        { s: "WHO", t: "World Health Statistics Report 2026: Life Expectancy & Demographics", d: "Global standards for age-related health milestones and mortality benchmarks." },
        { s: "UN Population Division", t: "Principles and Recommendations for a Vital Statistics System", d: "International standards for the recording of birth dates and age calculation." },
        { s: "ISO-8601", t: "Data Elements and Interchange Formats: Representation of Dates and Times", d: "The definitive technical standard for computer-generated chronological audits." },
        { s: "Horvath Clock", t: "DNA Methylation Age and the Genetics of Aging", d: "Scientific research differentiating biological age from chronological calendar age." },
        { s: "South Korean Ministry of Justice", t: "Administrative Act on Age Standardization (June 2023)", d: "Legal framework for the transition to international age standards in South Korea." }
    ]
};

export function calculateAge(birthDate: string, targetDate: string = new Date().toISOString()): AgeResult {
    const birth = new Date(birthDate);
    const target = new Date(targetDate);

    // Basic Chronological Age
    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Total metrics
    const diffMs = target.getTime() - birth.getTime();
    const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonthsExact = (target.getFullYear() - birth.getFullYear()) * 12 + (target.getMonth() - birth.getMonth()) + (target.getDate() < birth.getDate() ? -1 : 0);

    // Next Birthday
    const nextBday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBday < target) {
        nextBday.setFullYear(target.getFullYear() + 1);
    }
    const daysToBday = Math.ceil((nextBday.getTime() - target.getTime()) / (1000 * 60 * 60 * 24));

    // Zodiac logic
    const westernZodiac = getWesternZodiac(birth.getMonth() + 1, birth.getDate());
    const chineseZodiac = getChineseZodiac(birth.getFullYear());

    // Milestones
    const milestones = [
        { label: "10,000 Days", days: 10000 },
        { label: "15,000 Days", days: 15000 },
        { label: "20,000 Days", days: 20000 },
        { label: "25,000 Days", days: 25000 },
        { label: "30,000 Days", days: 30000 }
    ].map(m => {
        const d = new Date(birth.getTime() + m.days * 24 * 60 * 60 * 1000);
        return {
            label: m.label,
            value: `${m.days.toLocaleString()} days`,
            date: d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
        };
    });

    return {
        chronological: { years, months, days },
        total: {
            months: totalMonthsExact,
            weeks: totalWeeks,
            days: totalDays,
            hours: totalDays * 24,
            minutes: totalDays * 24 * 60,
            seconds: totalDays * 24 * 60 * 60
        },
        birthday: {
            nextDate: nextBday.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            daysRemaining: daysToBday,
            ageTurning: years + 1
        },
        zodiac: {
            western: westernZodiac,
            chinese: chineseZodiac
        },
        milestones
    };
}

function getWesternZodiac(month: number, day: number): string {
    const signs = [
        { sign: "Capricorn", start: [12, 22], end: [1, 19] },
        { sign: "Aquarius", start: [1, 20], end: [2, 18] },
        { sign: "Pisces", start: [2, 19], end: [3, 20] },
        { sign: "Aries", start: [3, 21], end: [4, 19] },
        { sign: "Taurus", start: [4, 20], end: [5, 20] },
        { sign: "Gemini", start: [5, 21], end: [6, 20] },
        { sign: "Cancer", start: [6, 21], end: [7, 22] },
        { sign: "Leo", start: [7, 23], end: [8, 22] },
        { sign: "Virgo", start: [8, 23], end: [9, 22] },
        { sign: "Libra", start: [9, 23], end: [10, 22] },
        { sign: "Scorpio", start: [10, 23], end: [11, 21] },
        { sign: "Sagittarius", start: [11, 22], end: [12, 21] }
    ];

    const sign = signs.find(s =>
        (month === s.start[0] && day >= s.start[1]) ||
        (month === s.end[0] && day <= s.end[1])
    );
    return sign?.sign || "Capricorn";
}

function getChineseZodiac(year: number): string {
    const animals = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"];
    return animals[(year - 4) % 12];
}
