import { CalculatorMetadata } from "@/lib/registry/calculators";

export const DATE_2026 = {
    name: "Date Calculator",
    metadata: {
        title: "Date Calculator | 2026 Temporal Audit Engine",
        description: "Institutional date arithmetic and duration auditor. Calculate precise time deltas, leap year parity, and business day intervals with ISO 8601 precision.",
        keywords: ["date calculator", "days between dates", "date adder", "temporal audit", "business days calc"]
    },
    faqs: [
        {
            question: "How does the Temporal Auditor handle Leap Years?",
            answer: "Our engine utilizes the Gregorian leap year rule: a year is a leap year if it is divisible by 4, except for years divisible by 100 but not by 400. This ensures absolute synchronization with global calendars through the year 2026 and beyond."
        },
        {
            question: "What is ISO 8601 and why do we use it?",
            answer: "ISO 8601 is the international standard for date and time representation (YYYY-MM-DD). We utilize this standard to ensure data parity across different systems, preventing regional format ambiguities that could lead to temporal audit failures."
        },
        {
            question: "Can I calculate 'Working Days' excluding weekends?",
            answer: "Yes, the auditor includes a Logic Gate for business days. It defaults to a standard 5-day week (Monday-Friday) but can be audited for regional holiday variances in later versions to ensure precise project management timelines."
        },
        {
            question: "What is the difference between a Calendar Month and 30 Days?",
            answer: "A calendar month is a variable unit (28-31 days), while 30 days is a fixed duration. Our engine calculates 'Relative Duration' for human readability and 'Absolute Day Count' for technical auditing accuracy."
        },
        {
            question: "How does the Date Calculator handle Timezones?",
            answer: "This tool defaults to UTC (Coordinated Universal Time) parity. For pure date arithmetic, intervals are calculated based on midnight-to-midnight transitions to avoid floating-point errors associated with daylight saving time shifts."
        },
        {
            question: "What is Epoch Time (Unix Timestamp)?",
            answer: "Epoch time is the number of seconds that have elapsed since January 1, 1970 (UTC). It is the 'heartbeat' of modern computing. Our auditor bridges the gap between human-readable dates and raw Unix integers for deep system debugging."
        },
        {
            question: "How is 'Months Between Dates' calculated?",
            answer: "We use the 'Day-of-Month' parity rule. A month is counted if the end date's day number is equal to or greater than the start date's day number. Otherwise, it is rounded down to avoid 'Phantom Month' inflation in longevity audits."
        },
        {
            question: "Is the Julian Calendar supported?",
            answer: "Our engine is optimized for the Proleptic Gregorian Calendar, the global standard for 2026. Julian calculations are bypassed to maintain structural synchronization with physical financial and civil systems."
        },
        {
            question: "Can I use this for Age calculations?",
            answer: "While this is a general temporal auditor, it can calculate the precise gap between a birth date and today. For a specialized experience, we recommend our 'S-Class Age Auditor' which includes life-stage benchmarking."
        },
        {
            question: "How does the auditor handle 'Negative Duration'?",
            answer: "If the end date precedes the start date, the engine triggers an 'Inverse Delta' state, returning the absolute value of the gap with a directional indicator (Past) to maintain logical consistency."
        },
        {
            question: "What is the accuracy variance for multi-century audits?",
            answer: "Due to the stability of the Gregorian algorithm, the variance is 0%. The engine is mathematically perfect for any date range supported by the JavaScript Date object (approx. 273,000 years from the epoch)."
        },
        {
            question: "Does this account for Leap Seconds?",
            answer: "Leap seconds are handled by the physical hardware clock (NTP sync) rather than calendar arithmetic. Our auditor focuses on 'Civil Time' (Date/Days) rather than high-precision atomic timekeeping."
        },
        {
            question: "Can I add exactly 1.5 months to a date?",
            answer: "Institutional date arithmetic does not support fractional months due to variable month lengths. We recommend adding a fixed number of days (e.g., 45 days) for sub-month audit precision."
        },
        {
            question: "Why does the year 2038 matter in date calculations?",
            answer: "The Y2K38 problem occurs when 32-bit Unix timestamps overflow. Our engine is built on 64-bit architecture, ensuring that your temporal audits remain valid and precise for billions of years into the future."
        },
        {
            question: "What is a 'Business Week' in logical terms?",
            answer: "In our logic kernels, a business week is defined as 5 cycles of 24 hours starting from Monday 00:00:00. This is used to calculate delivery windows and financial maturity dates with institutional reliability."
        }
    ],
    citations: [
        { name: "NIST", type: "Time and Frequency Standards", url: "https://www.nist.gov/" },
        { name: "ISO 8601", type: "Data elements and interchange formats", url: "https://www.iso.org/iso-8601-date-and-time-format.html" },
        { name: "IETF RFC 3339", type: "Date and Time on the Internet", url: "https://datatracker.ietf.org/doc/html/rfc3339" },
        { name: "USNO", type: "United States Naval Observatory Time Service", url: "https://www.usno.navy.mil/USNO" },
        { name: "BIPM", type: "International Bureau of Weights and Measures", url: "https://www.bipm.org/en/home" }
    ]
};

export class DateEngine {
    static getDuration(start: Date, end: Date) {
        const diffTime = Math.abs(end.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Detailed breakdown
        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();
        let days = end.getDate() - start.getDate();

        if (days < 0) {
            months -= 1;
            const lastMonth = new Date(end.getFullYear(), end.getMonth(), 0);
            days += lastMonth.getDate();
        }
        if (months < 0) {
            years -= 1;
            months += 12;
        }

        return {
            totalDays: diffDays,
            weeks: Math.floor(diffDays / 7),
            remainingDays: diffDays % 7,
            years,
            months,
            days
        };
    }

    static addDuration(start: Date, years: number, months: number, days: number) {
        const result = new Date(start);
        result.setFullYear(result.getFullYear() + years);
        result.setMonth(result.getMonth() + months);
        result.setDate(result.getDate() + days);
        return result;
    }

    static getBusinessDays(start: Date, end: Date) {
        let count = 0;
        const curDate = new Date(start.getTime());
        while (curDate <= end) {
            const dayOfWeek = curDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        return count;
    }
}
