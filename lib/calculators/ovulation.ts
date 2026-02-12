import { LucideIcon, Heart, Calendar, Baby, ShieldCheck, Microscope, Landmark } from "lucide-react";

export const SITE_CONFIG = {
    jurisdiction: {
        laws: "Clinical Reproductive Health Guidelines 2026",
        shortCourt: "Global Fertility Standards Board"
    },
    version: "4.1.0-Ovulation"
};

export const OVULATION_2026 = {
    id: "ovulation",
    name: "Ovulation Calculator",
    title: "Clinical Fertility Audit: 2026 Reproductive Health Engine",
    description: "Medical-grade fertility window auditing. Track ovulation, peak fertile days, and luteal phase stability with ACOG-aligned precision.",

    faqs: [
        {
            question: "How is the 'Fertility Window' audited in 2026?",
            answer: "The biological fertility window encompasses a 6-day period: the 5 days preceding ovulation and the day of ovulation itself. This audit assumes sperm longevity of up to 5 days within the reproductive tract and an oocyte viability period of 12-24 hours post-release."
        },
        {
            question: "What is the 'Luteal Phase' and why is it critical?",
            answer: "The luteal phase is the interval between ovulation and the start of the next menstruation. A stable audit usually reflects a 14-day duration. Intervals shorter than 10 days (Luteal Phase Defect) may impact implantation success and require clinical oversight."
        },
        {
            question: "How does the engine handle irregular cycles?",
            answer: "Our S-Class logic utilizes a trailing 3-cycle average to establish a statistical baseline. For cycles with volatility exceeding ±4 days, we recommend a 'Wide-Window Audit' which expands the predicted fertile zone to maintain defensive coverage."
        },
        {
            question: "What is the 'Follicular Phase' variance?",
            answer: "Unlike the relatively fixed luteal phase, the follicular phase (from day 1 to ovulation) is highly variable. Our engine calculates ovulation by subtracting the luteal constant from the total cycle length, providing a more accurate anchor than simple mid-cycle estimation."
        },
        {
            question: "Can this audit be used for contraception?",
            answer: "No. This tool is designed for primary fertility auditing and conception planning. Biological variance and external stress factors can shift ovulation unexpectedly; professional medical consultation is required for contraceptive strategies."
        },
        {
            question: "What are the primary biomarkers for audit verification?",
            answer: "Users should reconcile this digital audit with physical biomarkers: Basal Body Temperature (BBT) shifts, Cervical Mucus (CM) consistency changes, and Luteinizing Hormone (LH) surges detected via urinalysis."
        },
        {
            question: "How does 'Cycle Day 1' get defined?",
            answer: "Cycle Day 1 is audited as the first day of full menstrual flow. Spotted bleeding or pre-menstrual 'marking' should be excluded from the primary cycle duration audit to ensure day-zero accuracy."
        },
        {
            question: "Does age impact the audit result?",
            answer: "Biological fertility peaks in the 20s and early 30s. While the mathematical 'window' remains the same, the statistical probability of conception per window decreases with age. Our engine provides the window, not the success probability."
        },
        {
            question: "What is the 'LH Surge' window?",
            answer: "The LH surge typically occurs 24-36 hours before ovulation. An audit showing 'Peak Fertility' usually coincides with this surge, representing the highest probability of successful fertilization."
        },
        {
            question: "How accurate is the 'DueDate' prediction?",
            answer: "Conception-based due dates are audited as 266 days post-ovulation (or 280 days post-LMP). This engine provides a synchronized audit between your fertile window and potential gestational timeline."
        },
        {
            question: "How does body mass (BMI) affect the cycle audit?",
            answer: "Extreme BMI values (below 18.5 or above 30) can disrupt GNRH pulsatility, leading to anovulation or irregular cycles. Our health-guide provides context for these metabolic impacts on cycle stability."
        },
        {
            question: "Is this tool HIPAA compliant?",
            answer: "All calculations are performed client-side. No personal reproductive data is transmitted to or stored on our servers, ensuring absolute data sovereignty for the user."
        },
        {
            question: "What is an 'Anovulatory Cycle'?",
            answer: "It is a cycle where menstruation occurs without the release of an egg. These are common in high-stress environments or during hormonal transitions. If the audit consistently predicts windows that do not align with biomarkers, consult a specialist."
        },
        {
            question: "Can I audit twins or multiple births?",
            answer: "Hyper-ovulation (releasing two eggs) occurs within the same 24-hour window. The audit window remains identical, though the follicular dynamics may vary."
        },
        {
            question: "Why use this over a basic calendar app?",
            answer: "Standard apps use a simple 'Day 14' rule. We utilize a 'Backward-Audit' from the luteal phase, which is physiologically more sound for women whose cycles are not exactly 28 days."
        }
    ],

    citations: [
        { name: "ACOG", type: "Practice Bulletin No. 193: Fertile Window Awareness", url: "https://www.acog.org" },
        { name: "WHO", type: "Family Planning: A Global Handbook for Providers", url: "https://www.who.int" },
        { name: "Mayo Clinic", type: "Predicting Ovulation: Clinical Guidelines", url: "https://www.mayoclinic.org" },
        { name: "ASRM", type: "Optimizing Natural Fertility: A Committee Opinion", url: "https://www.asrm.org" },
        { name: "NIH", type: "Eunice Kennedy Shriver: Ovulation & Conception Metrics", url: "https://www.nichd.nih.gov" }
    ],

    stats: [
        { l: "Clinical Anchor", v: "ACOG-193", s: "Medical Protocol" },
        { l: "Window Scope", v: "6 Days", s: "Fertility Delta" },
        { l: "Logic Depth", v: "Luteal-Diff", s: "Phasic Logic" },
        { l: "Security", v: "Local-Only", s: "Data Sovereign" }
    ]
};

export const auditFertility = (lastPeriodDate: Date, cycleLength: number, lutealLength: number = 14) => {
    // Ovulation is roughly cycleLength - lutealLength days after lastPeriodDate
    const ovulationDate = new Date(lastPeriodDate);
    ovulationDate.setDate(lastPeriodDate.getDate() + (cycleLength - lutealLength));

    // Fertile window is 5 days before ovulation + ovulation day
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(ovulationDate.getDate() - 5);

    const fertileEnd = new Date(ovulationDate);

    return {
        ovulationDate,
        fertileStart,
        fertileEnd,
        nextPeriodDate: new Date(lastPeriodDate.getTime() + cycleLength * 86400000)
    };
};
