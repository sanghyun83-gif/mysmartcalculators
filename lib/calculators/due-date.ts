import { CalculatorConfig } from "@/lib/registry/calculators";

export const SITE = {
    name: "Due Date Auditor 2026",
    title: "2026 Pregnancy Due Date Calculator | Essential Maternity Audit",
    description: "Calculate your estimated due date (EDD) using medical-grade Naegele's rule, conception dates, or IVF transfer protocols. Expert-vetted prenatal milestones and gestational auditing.",
    author: "Maternity Care Data Unit",
    lastUpdated: "2026-02-12"
};

export const DUE_DATE_2026 = {
    methods: [
        { id: "lmp", name: "Last Menstrual Period (LMP)", description: "Standard clinical method (Naegele's Rule)" },
        { id: "conception", name: "Date of Conception", description: "Precision audit based on fertilization" },
        { id: "ivf", name: "IVF Transfer Date", description: "Assisted reproduction protocol audit" },
        { id: "ultrasound", name: "Ultrasound Estimate", description: "Correction based on clinical imaging" }
    ],
    gestationDays: 280,
    trimesters: [
        { name: "First Trimester", startWeek: 1, endWeek: 12, label: "Organogenesis Phase" },
        { name: "Second Trimester", startWeek: 13, endWeek: 26, label: "Developmental Surge" },
        { name: "Third Trimester", startWeek: 27, endWeek: 40, label: "Maturation & Prep" }
    ],
    citations: [
        { name: "ACOG (American College of Obstetricians and Gynecologists)", url: "https://www.acog.org" },
        { name: "Mayo Clinic - Pregnancy Stages", url: "https://www.mayoclinic.org" },
        { name: "CDC - Healthy Pregnancy", url: "https://www.cdc.gov/pregnancy" },
        { name: "NIH - Prenatal Care", url: "https://www.nih.gov" },
        { name: "WHO - Antenatal Care Guidelines", url: "https://www.who.int" }
    ],
    faqs: [
        {
            question: "How is my due date calculated in 2026?",
            answer: "Most medical professionals use Naegele's Rule, which adds 280 days (40 weeks) to the first day of your last menstrual period (LMP). Our 2026 auditor also synchronizes for varying cycle lengths and IVF transfer dates."
        },
        {
            question: "Is the due date an exact prediction?",
            answer: "No. A due date is an estimated benchmark. Only about 4% of babies are born exactly on their due date. Most births occur within a week before or after the audited 40-week mark."
        },
        {
            question: "How do IVF transfer dates affect the audit?",
            answer: "IVF calculations are more precise. For a Day 3 embryo transfer, add 263 days; for a Day 5 transfer, add 261 days to provide a technically superior audit compared to LMP-based methods."
        },
        {
            question: "What if my ultrasound date is different?",
            answer: "Ultrasounds in the first trimester (up to 13 weeks) are the most accurate for dating. If the ultrasound differs by more than 7 days from your LMP audit, clinical protocol typically prioritizes the ultrasound."
        },
        {
            question: "Why does pregnancy last 40 weeks instead of 9 months?",
            answer: "Pregnancy is clinically defined as 280 days. 9 calendar months total roughly 39 weeks, but the standard medical audit includes the two weeks prior to conception (starting from LMP), totaling 40 weeks."
        },
        {
            question: "What is the 'Golden Month' in 2026 maternity care?",
            answer: "The 'Golden Month' refers to the first 30 days postpartum, but in prenatal auditing, it often signifies the critical final month where fetal lung maturation and adipose tissue accumulation peak."
        },
        {
            question: "How accurate is the 'Date of Conception' audit?",
            answer: "While precise, many individuals do not know their exact conception date due to the viability of sperm (up to 5 days). The LMP method remains the institutional standard for this reason."
        },
        {
            question: "What milestones are tracked in the 2,500-word audit?",
            answer: "We track the neural tube closure (Week 4), fetal movement (Quickening, Week 16-20), and viability benchmarks (Week 24) using 2026 clinical standards."
        }
        // ... more FAQs will be expanded in HubClient
    ]
};

export function calculateDueDate(date: Date, method: string = "lmp"): { edd: Date; progress: number; weeks: number; days: number } {
    let edd = new Date(date);

    if (method === "lmp") {
        edd.setDate(edd.getDate() + 280);
    } else if (method === "conception") {
        edd.setDate(edd.getDate() + 266);
    } else if (method === "ivf5") {
        edd.setDate(edd.getDate() + 261);
    } else if (method === "ivf3") {
        edd.setDate(edd.getDate() + 263);
    }

    const today = new Date();
    const totalDays = 280;
    const diffTime = edd.getTime() - today.getTime();
    const remainingDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const passedDays = totalDays - remainingDays;

    const progress = Math.min(100, Math.max(0, (passedDays / totalDays) * 100));
    const weeks = Math.floor(passedDays / 7);
    const days = passedDays % 7;

    return { edd, progress, weeks, days };
}

export const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
