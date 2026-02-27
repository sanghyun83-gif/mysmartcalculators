export const TIME_CALCULATOR_2026 = {
    name: "Time Calculator",
    metadata: {
        title: "2026 Time Calculator | Duration and Hours Audit Engine",
        description:
            "Calculate time differences, add/subtract time, and convert between hours, minutes, and seconds with 2026 precision.",
        keywords: [
            "time calculator",
            "hours calculator",
            "time difference",
            "add time",
            "minutes to hours",
        ],
    },
    faqs: [
        {
            question: "How does the calculator compute time difference?",
            answer:
                "It converts both timestamps into total seconds, computes the absolute delta, and then expands it into hours, minutes, and seconds.",
        },
        {
            question: "Can I add and subtract time values?",
            answer:
                "Yes. Enter a base time and add or subtract hours, minutes, and seconds to get the adjusted result immediately.",
        },
        {
            question: "Does this support 24-hour format?",
            answer:
                "Yes. Inputs and outputs are handled in 24-hour format by default for unambiguous calculations.",
        },
        {
            question: "How are negative durations handled?",
            answer:
                "Negative results are normalized with a direction flag so you can identify whether the second timestamp is before or after the first.",
        },
        {
            question: "Is the calculator timezone-aware?",
            answer:
                "This tool is optimized for pure clock arithmetic and duration math. For timezone conversion, use a dedicated timezone tool.",
        },
        {
            question: "Can I use decimal hour input?",
            answer:
                "Yes. Decimal values are accepted and internally converted to minutes and seconds for accurate output.",
        },
        {
            question: "How do I convert minutes to hours?",
            answer:
                "Enter total minutes, and the converter returns equivalent hours plus remaining minutes and seconds.",
        },
        {
            question: "How do I convert hours to minutes?",
            answer:
                "Enter total hours and the converter multiplies by 60 to return minutes, then expands to seconds if needed.",
        },
        {
            question: "Can this be used for work-hour tracking?",
            answer:
                "Yes. It is suitable for shift length checks, overtime review, and time-entry validation.",
        },
        {
            question: "Does it account for breaks automatically?",
            answer:
                "No. Breaks should be entered as subtractive durations so the net working time is correctly reflected.",
        },
        {
            question: "What is the smallest unit supported?",
            answer:
                "Seconds are the base unit. All calculations are reduced to seconds first for consistency.",
        },
        {
            question: "Why do some results show rollover past 24 hours?",
            answer:
                "For duration calculations, values can exceed 24 hours because elapsed time is not constrained to a single clock day.",
        },
        {
            question: "Can I calculate multi-day durations?",
            answer:
                "Yes. The output provides total hours and can be interpreted across one or more days.",
        },
        {
            question: "Is this suitable for payroll pre-checks?",
            answer:
                "Yes. It helps validate logged hours before applying wage rules in payroll systems.",
        },
        {
            question: "How accurate is the result?",
            answer:
                "Arithmetic is exact at second resolution for the entered values, with no rounding drift in normal usage.",
        },
    ],
    citations: [
        { name: "NIST", type: "Time and Frequency Division", url: "https://www.nist.gov/" },
        { name: "ISO 8601", type: "Date and Time Standard", url: "https://www.iso.org/iso-8601-date-and-time-format.html" },
        { name: "BLS", type: "Hours Worked Concepts", url: "https://www.bls.gov/" },
        { name: "DOL", type: "Hours Worked Guidance", url: "https://www.dol.gov/" },
        { name: "IETF RFC 3339", type: "Internet Date and Time Format", url: "https://datatracker.ietf.org/doc/html/rfc3339" },
    ],
};

export type TimeDelta = {
    totalSeconds: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export class TimeCalculatorEngine {
    static toTotalSeconds(hours: number, minutes: number, seconds: number): number {
        return (hours * 3600) + (minutes * 60) + seconds;
    }

    static fromTotalSeconds(totalSeconds: number): TimeDelta {
        const abs = Math.abs(Math.trunc(totalSeconds));
        const hours = Math.floor(abs / 3600);
        const minutes = Math.floor((abs % 3600) / 60);
        const seconds = abs % 60;
        return { totalSeconds, hours, minutes, seconds };
    }

    static diff(
        startHours: number,
        startMinutes: number,
        startSeconds: number,
        endHours: number,
        endMinutes: number,
        endSeconds: number
    ): TimeDelta {
        const start = this.toTotalSeconds(startHours, startMinutes, startSeconds);
        const end = this.toTotalSeconds(endHours, endMinutes, endSeconds);
        return this.fromTotalSeconds(end - start);
    }

    static add(
        baseHours: number,
        baseMinutes: number,
        baseSeconds: number,
        deltaHours: number,
        deltaMinutes: number,
        deltaSeconds: number
    ): TimeDelta {
        const base = this.toTotalSeconds(baseHours, baseMinutes, baseSeconds);
        const delta = this.toTotalSeconds(deltaHours, deltaMinutes, deltaSeconds);
        return this.fromTotalSeconds(base + delta);
    }
}

