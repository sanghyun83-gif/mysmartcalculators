/**
 * Pregnancy Calculator Core Engine (S-Class Standard)
 * Precision 2026 Maternal Health Audit Engine
 */

export const SITE = {
    name: "Pregnancy Calculator",
    tagline: "Precision 2026 Due Date Audit",
    description: "Calculate your estimated due date (EDD) and track pregnancy milestones with clinical precision. Support for LMP, Conception, and IVF methods based on 2026 maternal health standards.",
};

export interface PregnancyResult {
    edd: Date;
    conceptionDate: Date;
    currentWeek: number;
    currentDays: number;
    daysRemaining: number;
    progressPercent: number;
    trimester: number;
    milestone: string;
    zodiacSign: string;
}

export const PREGNANCY_2026 = {
    faqs: [
        {
            question: "How is the Estimated Due Date (EDD) calculated?",
            answer: "The standard clinical method is Naegele's Rule: add seven days to the first day of your Last Menstrual Period (LMP) and add nine months. This assumes a 28-day cycle. Our engine adjusts for cycle length and also supports ultrasound-based or conception-date calculations for higher accuracy."
        },
        {
            question: "Is the due date definitive?",
            answer: "No. The EDD is an estimate. Only about 4-5% of babies are born on their exact due date. Most births occur between 37 and 42 weeks of pregnancy. It serves as a clinical anchor for monitoring development rather than a strict deadline."
        },
        {
            question: "How does cycle length affect my due date?",
            answer: "If your cycle is longer than 28 days, you likely ovulated later, meaning your due date may be later than Naegele's Rule suggests. Conversely, a shorter cycle implies earlier ovulation. Our S-Class engine allows for custom cycle length adjustments to mitigate this variance."
        },
        {
            question: "What is the 'Conception Date' method?",
            answer: "If you know the exact date of intercourse or ovulation, the due date is calculated by adding 266 days (38 weeks). This is often more precise than LMP because it accounts for individual ovulation timing."
        },
        {
            question: "How is a pregnancy due date calculated for IVF?",
            answer: "For IVF, the 'conception date' is known precisely. For a Day 3 embryo transfer, the due date is calculated by adding 263 days. For a Day 5 transfer, it is 261 days from the transfer date."
        },
        {
            question: "What are the three trimesters?",
            answer: "Pregnancy is divided into three stages: First Trimester (Week 1-13), Second Trimester (Week 14-27), and Third Trimester (Week 28 to birth). Each stage marks distinct biological milestones for both the mother and the fetus."
        },
        {
            question: "Can an ultrasound change my due date?",
            answer: "Yes. Early ultrasounds (6-12 weeks) are considered the most accurate method for dating a pregnancy, as fetal growth is highly uniform during this period. If an ultrasound date differs from an LMP date by more than 7 days, clinical providers usually adopt the ultrasound date."
        },
        {
            question: "What is 'full term' in 2026 medical standards?",
            answer: "According to ACOG standards, 'Full Term' is between 39 weeks 0 days and 40 weeks 6 days. 'Early Term' is 37-38 weeks, and 'Late Term' is 41 weeks."
        },
        {
            question: "When will I feel the baby move?",
            answer: "Known as 'quickening,' this usually occurs between weeks 16 and 22. First-time mothers may feel it later (around week 20), while those who have been pregnant before may detect it as early as week 16."
        },
        {
            question: "What determines the baby's zodiac sign?",
            answer: "The zodiac sign is determined by the position of the sun on the estimated due date. While medically irrelevant, it is a common demographic milestone for parents planning for their child's arrival."
        },
        {
            question: "How much weight should I gain?",
            answer: "Weight gain targets depend on your pre-pregnancy BMI. Generally, women with a normal BMI are advised to gain 25-35 pounds. Always consult with a healthcare provider for personalized nutritional goals."
        },
        {
            question: "When is the best time for a prenatal visit?",
            answer: "Most providers schedule the first official 'dating' visit between 8 and 12 weeks. However, preconception health and early confirmation are vital for starting prenatal vitamins (folic acid)."
        },
        {
            question: "What is the 'Golden Month'?",
            answer: "The fourth month (start of the second trimester) is often called the 'Golden Month' as morning sickness typically wanes and energy levels increase before the physical strain of the third trimester begins."
        },
        {
            question: "Can stress affect the pregnancy timeline?",
            answer: "Prolonged high stress can lead to hormonal shifts, potentially increasing the risk of preterm labor. Maintaining psychological well-being is as critical as physical monitoring in 2026 maternal health protocols."
        },
        {
            question: "What should I pack in my hospital bag?",
            answer: "Expectant parents are advised to have a bag ready by week 36. Essentials include birth plans, insurance info, nursing clothes, and newborn essentials like a car seat (required by law in most jurisdictions)."
        }
    ],
    citations: [
        {
            name: "American College of Obstetricians and Gynecologists (ACOG) - Method for Estimating Due Date",
            url: "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date"
        },
        {
            name: "CDC - Pregnancy Weeks by Week",
            url: "https://www.cdc.gov/pregnancy/during.html"
        },
        {
            name: "NHS - Your Pregnancy and Baby Guide",
            url: "https://www.nhs.uk/pregnancy/"
        },
        {
            name: "Mayo Clinic - Pregnancy Due Date Calculator Mechanics",
            url: "https://www.mayoclinic.org/healthy-lifestyle/getting-pregnant/in-depth/pregnancy-due-date-calculator/art-20044510"
        },
        {
            name: "March of Dimes - Why at least 39 weeks is best",
            url: "https://www.marchofdimes.org/find-support/topics/pregnancy/why-least-39-weeks-best"
        }
    ]
};

/**
 * Calculates pregnancy metrics based on different input methods
 */
export function calculatePregnancy(input: {
    method: 'lmp' | 'conception' | 'ivf_3d' | 'ivf_5d' | 'ultrasound';
    date: Date;
    cycleLength?: number;
}): PregnancyResult {
    const cycle = input.cycleLength || 28;
    const offsetFrom28 = cycle - 28;

    let edd: Date;
    let conceptionDate: Date;

    const msInDay = 24 * 60 * 60 * 1000;

    switch (input.method) {
        case 'lmp':
            // Naegele's Rule: LMP + 280 days + (cycle - 28)
            edd = new Date(input.date.getTime() + (280 + offsetFrom28) * msInDay);
            conceptionDate = new Date(input.date.getTime() + (14 + offsetFrom28) * msInDay);
            break;
        case 'conception':
            conceptionDate = new Date(input.date);
            edd = new Date(input.date.getTime() + 266 * msInDay);
            break;
        case 'ivf_3d':
            conceptionDate = new Date(input.date.getTime() - 3 * msInDay);
            edd = new Date(input.date.getTime() + 263 * msInDay);
            break;
        case 'ivf_5d':
            conceptionDate = new Date(input.date.getTime() - 5 * msInDay);
            edd = new Date(input.date.getTime() + 261 * msInDay);
            break;
        case 'ultrasound':
            edd = new Date(input.date);
            conceptionDate = new Date(input.date.getTime() - 266 * msInDay);
            break;
        default:
            edd = new Date();
            conceptionDate = new Date();
    }

    const today = new Date();
    const totalDurationMs = 280 * msInDay; // Standard clinical 40 weeks
    const daysPassed = Math.floor((today.getTime() - (edd.getTime() - totalDurationMs)) / msInDay);

    const currentWeek = Math.max(0, Math.floor(daysPassed / 7));
    const currentDays = Math.max(0, daysPassed % 7);
    const daysRemaining = Math.max(0, Math.floor((edd.getTime() - today.getTime()) / msInDay));
    const progressPercent = Math.min(100, Math.max(0, (daysPassed / 280) * 100));

    let trimester = 1;
    if (currentWeek >= 28) trimester = 3;
    else if (currentWeek >= 14) trimester = 2;

    const milestones: Record<number, string> = {
        4: "Implantation complete; pregnancy test positive.",
        8: "Embryo becomes a fetus; all major organs formed.",
        12: "First trimester ends; baby starts moving.",
        16: "Sex of the baby may be visible via ultrasound.",
        20: "Anatomy scan; mother feels quickening.",
        24: "Age of viability; lungs begin to produce surfactant.",
        28: "Third trimester begins; baby opens eyes.",
        32: "Baby practice breathes; assuming head-down position.",
        36: "Early term; rapid weight gain begins.",
        40: "Estimated Due Date; full term maturity."
    };

    const milestoneKeys = Object.keys(milestones).map(Number).sort((a, b) => b - a);
    const milestoneLine = milestones[milestoneKeys.find(k => currentWeek >= k) || 4];

    return {
        edd,
        conceptionDate,
        currentWeek: currentWeek > 42 ? 42 : currentWeek,
        currentDays: currentDays,
        daysRemaining,
        progressPercent,
        trimester,
        milestone: milestoneLine,
        zodiacSign: getZodiacSign(edd)
    };
}

function getZodiacSign(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return "Aquarius";
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return "Pisces";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries";
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return "Taurus";
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return "Gemini";
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return "Cancer";
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return "Leo";
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return "Virgo";
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return "Libra";
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return "Scorpio";
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return "Sagittarius";
    return "Capricorn";
}
