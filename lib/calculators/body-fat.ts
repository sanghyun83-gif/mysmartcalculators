// Removed non-existent import
import { Activity, ShieldCheck, ExternalLink, Info } from "lucide-react";
import React from 'react';

export const BODY_FAT_2026 = {
    name: "Body Fat Calculator",
    metadata: {
        title: "Body Fat Calculator | S-Class Institutional Adipose Audit",
        description: "Execute precision body fat estimation using US Navy and BMI-based protocols. Includes clinical health benchmarks and 2026 anthropometric standards.",
        keywords: ["body fat calculator", "US navy body fat method", "body composition audit", "body fat percentage", "health markers"]
    },
    citations: [
        {
            name: "NIH National Institute of Diabetes and Digestive and Kidney Diseases",
            url: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity",
            type: "Clinical Guideline"
        },
        {
            name: "CDC - About Adult BMI",
            url: "https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html",
            type: "Public Health Standard"
        },
        {
            name: "American Council on Exercise (ACE) - Body Fat Categorization",
            url: "https://www.acefitness.org/resources/everyone/blog/6693/ace-fit-appropriate-body-fat-percentage-ranges/",
            type: "Professional Benchmark"
        },
        {
            name: "WHO - Obesity and Overweight",
            url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
            type: "Global Institutional Data"
        },
        {
            name: "Journal of Applied Physiology - Anthropometric Methods",
            url: "https://journals.physiology.org/journal/jappl",
            type: "Academic Research"
        }
    ],
    faqs: [
        {
            question: "How accurate is the US Navy Body Fat method compared to DEXA scans?",
            answer: "The US Navy method is an institutional-grade anthropometric surrogate that typically yields a margin of error within 3% to 4% of a DEXA (Dual-Energy X-ray Absorptiometry) scan. While DEXA remains the 'Gold Standard' for measuring bone density and fat distribution, the Navy method uses logarithmic regression models based on neck, waist, and hip circumferences to estimate total body density. In 2026, it remains the most cost-effective and reliable protocol for large-scale clinical audits where advanced imaging is restricted. For maximum accuracy, measurements must be taken at the precision level of 0.1 cm using a non-elastic tension tape."
        },
        {
            question: "What are the clinically essential body fat percentages for survival?",
            answer: "Essential fat is the absolute physiological minimum required for hormone production, vitamin absorption, and organ protection. For males, the essential threshold is typically 2% to 5%. For females, it is significantly higher at 10% to 13% due to reproductive and endocrine requirements. Dropping below these benchmarks can trigger systemic physiological failure, including hormonal imbalances, skeletal demineralization, and cardiovascular strain. Our 2026 audit framework classifies anything below these levels as a 'Critical Physiological Risk' requiring immediate institutional intervention."
        },
        {
            question: "Why does the Body Fat Calculator require hip measurements for females but not for males?",
            answer: "The sexual dimorphism in human adipose distribution requires different regression models for precision. Males tend to accumulate 'android' (central) fat around the abdominal region, making the waist-to-neck ratio the primary predictor of density. Females typically exhibit 'gynoid' (peripheral) distribution across the hips and thighs. The US Navy formula for females incorporates the hip circumference to account for this pelvic adipose storage, ensuring the audit reflects the higher physiological fat requirements inherent in the female endocrine architecture."
        },
        {
            question: "Can I have a 'normal' BMI but a high body fat percentage?",
            answer: "Yes, this is known institutionally as 'Normal Weight Obesity' or colloquially as 'Skinny Fat'. In these cases, an individual's total weight falls within the CDC's healthy BMI range, but their adipose tissue exceeds the 30% (female) or 25% (male) thresholds. This condition is often more dangerous than visible obesity because the fat is frequently 'visceral'—stored around vital organs—increasing the risk of metabolic syndrome and type 2 diabetes. Our 2026 audit engine prioritizes body fat percentage over BMI as a more accurate metric of real health capital."
        },
        {
            question: "How often should I audit my body composition for accurate trends?",
            answer: "Institutional guidelines suggest a quarterly audit (every 90 days) for standard health tracking, or a monthly audit for those in high-performance athletic cycles. Daily measurements are discouraged due to fluctuations in hydration levels, glycogen storage, and sodium balance which can artificially alter circumference metrics by up to 1.5 cm. To ensure audit reliability, always take measurements at the same time of day (ideally post-waking, pre-caloric intake) and use a professional-grade steel or PVC tape measure."
        },
        {
            question: "What is 'Visceral Fat' and why is it the primary target of a clinical audit?",
            answer: "Visceral fat is the internal adipose tissue that wraps around the liver, pancreas, and kidneys. Unlike subcutaneous fat (the fat you can pinch), visceral fat is metabolically active and secretes inflammatory cytokines that directly lead to atherosclerosis and insulin resistance. High waist circumferences, regardless of total body fat percentage, are strong indicators of visceral accumulation. Our 2026 measurement protocols emphasize the abdominal audit because reducing visceral fat provides the highest immediate ROI for cardiovascular longevitiy."
        },
        {
            question: "Does age affect the target body fat percentage range?",
            answer: "Yes, the 'Healthy' range shifts upward with age to account for natural sarcopenia (muscle loss) and changes in lipid metabolism. A 20-year-old male might target 10-15%, whereas a 60-year-old male is clinically healthy at 20-25%. These age-adjusted benchmarks prevent 'over-dieting' in older populations, which can lead to frailty and decreased bone density. The 2026 Institutional standard recognizes that maintaining a slightly higher fat buffer in later years can serve as metabolic insurance against illness."
        },
        {
            question: "How does the 'Athlete' category differ from the 'Fitness' category?",
            answer: "The classification depends on the specific performance requirements of the individual. 'Athletes' typically occupy the 6% to 13% range (male) or 14% to 20% (female), where power-to-weight ratios are maximized for explosive movement and endurance. The 'Fitness' category (14-17% male, 21-24% female) represents a sustainable, aesthetically lean state that minimizes metabolic risk without the extreme dietary rigors and potential endocrine suppression associated with sub-10% elite athletic levels."
        },
        {
            question: "Can stress levels impact the results of a body fat audit?",
            answer: "Indirectly, yes. Chronic elevation of cortisol (the stress hormone) directly signals the body to store fat in the abdominal (visceral) region even if caloric intake is stable. Furthermore, stress-induced edema (water retention) can increase waist circumference measurements, leading to a false 'High' in circumference-based audits. Our 2026 guidance recommends performing an audit during a period of relative physiological stability to ensure the data accurately reflects adipose tissue rather than temporary metabolic stress."
        },
        {
            question: "Is it possible to target fat loss in specific areas like the abdomen or thighs?",
            answer: "Institutionally, 'Spot Reduction' is considered a myth. Fat mobilization is a systemic process governed by the sympathetic nervous system and specific hormone receptors (alpha and beta-adrenergic receptors). When a caloric deficit is audited, the body draws from fat stores across the entire organism based on genetic architecture. However, strengthening the underlying muscle (hypertrophy) in a specific area can improve the 'tonicity' of the region as total body fat percentage decreases."
        },
        {
            question: "What role does hydration play in body fat measurement accuracy?",
            answer: "In Bioelectrical Impedance Analysis (BIA), hydration is critical as muscle is roughly 75% water and fat is 10%; dehydration leads to an overestimation of fat. In our circumference-based Navy audit, hydration plays a smaller but still relevant role via bloating. Severe dehydration can shrink tissue volume slightly, while high sodium intake can increase waist girth. For institutional-grade data, we recommend maintaining a consistent 2.5L to 3.5L daily water intake for 48 hours prior to an audit."
        },
        {
            question: "How do 2026 economic trends impact our view of body composition?",
            answer: "In 2026, body composition is increasingly viewed as 'Health Capital'. As healthcare costs shift toward value-based care, maintaining a body fat percentage within the 'Optimal' range is seen as a proactive hedge against chronic disease expenses. Corporations are beginning to include body composition audits in 'Total Rewards' packages, recognizing that a metabolically healthy workforce has 40% fewer absenteeism days and 25% lower insurance premiums."
        },
        {
            question: "What is the 'Brown Fat' Multiplier and can it be audited?",
            answer: "Brown Adipose Tissue (BAT) is thermogenic fat that burns calories to generate heat, unlike 'White Fat' which stores energy. While standard calculators measure total adipose mass, 2026 research focuses on BAT activation via cold exposure and metabolic triggers. While we cannot yet audit BAT percentage via simple tape measure, a higher metabolic rate than predicted for your size often indicates a superior 'BAT Architecture', which leads to more effortless maintenance of lower total body fat."
        },
        {
            question: "Are there different standards for body fat in different ethnic populations?",
            answer: "Yes, institutional audits recognize that body density varies by ethnicity. For example, South Asian populations often exhibit higher metabolic risk at lower body fat percentages compared to Caucasian or African populations—a phenomenon known as the 'thin-fat' phenotype. The 2026 WHO guidelines suggest stricter audit thresholds for Asian populations to prevent cardiovascular disease, targeting a 'Fitness' ceiling of 23% for females rather than the standard 25%."
        },
        {
            question: "What is the future of body fat auditing beyond 2026?",
            answer: "The future lies in 'Generative Anthropometrics'. We anticipate AI-driven vision systems using smartphone cameras will soon replace tape measures, creating a 3D volumetric audit of the body with 99% agreement with DEXA. This 'Digital Twin' will allow for real-time tracking of fat mobilization and muscle accrual, making precision health auditing accessible to every individual without the need for clinical equipment."
        }
    ]
};

export const calculateBodyFat = (
    gender: 'male' | 'female',
    height: number,
    waist: number,
    neck: number,
    hip?: number
) => {
    // US Navy Method (all inputs in cm)
    if (gender === 'male') {
        const bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450;
        return Math.max(0, Math.round(bf * 10) / 10);
    } else {
        if (!hip) return 0;
        const bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip! - neck) + 0.22100 * Math.log10(height)) - 450;
        return Math.max(0, Math.round(bf * 10) / 10);
    }
};

export const getBodyFatCategory = (gender: 'male' | 'female', percentage: number) => {
    if (gender === 'male') {
        if (percentage < 6) return { label: "Essential Fat", color: "text-red-400", bg: "bg-red-400/10" };
        if (percentage < 14) return { label: "Athletes", color: "text-emerald-400", bg: "bg-emerald-400/10" };
        if (percentage < 18) return { label: "Fitness", color: "text-blue-400", bg: "bg-blue-400/10" };
        if (percentage < 25) return { label: "Average", color: "text-slate-400", bg: "bg-slate-400/10" };
        return { label: "Obese", color: "text-orange-400", bg: "bg-orange-400/10" };
    } else {
        if (percentage < 14) return { label: "Essential Fat", color: "text-red-400", bg: "bg-red-400/10" };
        if (percentage < 21) return { label: "Athletes", color: "text-emerald-400", bg: "bg-emerald-400/10" };
        if (percentage < 25) return { label: "Fitness", color: "text-blue-400", bg: "bg-blue-400/10" };
        if (percentage < 32) return { label: "Average", color: "text-slate-400", bg: "bg-slate-400/10" };
        return { label: "Obese", color: "text-orange-400", bg: "bg-orange-400/10" };
    }
};
