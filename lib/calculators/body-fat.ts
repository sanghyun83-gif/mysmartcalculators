// Removed non-existent import
import { Activity, ShieldCheck, ExternalLink, Info } from "lucide-react";
import React from 'react';

export const BODY_FAT_2026 = {
    name: "Body Fat Calculator",
    metadata: {
        title: "Body Fat Calculator | Healthy Composition Analysis",
        description: "Calculate your body fat percentage accurately with our professional tool. Track your fitness goals and health progress with standard measurement methods.",
        keywords: ["body fat calculator", "body fat percentage", "fitness calculator", "body mass composition", "health tracking"]
    },
    citations: [
        {
            name: "NIH National Institute of Diabetes and Digestive and Kidney Diseases",
            url: "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity",
            type: "Health Reference"
        },
        {
            name: "CDC - Assessing Your Weight",
            url: "https://www.cdc.gov/healthyweight/assessing/index.html",
            type: "Public Health Standard"
        },
        {
            name: "American Council on Exercise (ACE) - Body Fat Ranges",
            url: "https://www.acefitness.org/resources/everyone/blog/6693/ace-fit-appropriate-body-fat-percentage-ranges/",
            type: "Fitness Standard"
        },
        {
            name: "World Health Organization - Obesity Data",
            url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
            type: "Global Health Data"
        },
        {
            name: "Mayo Clinic - Body Composition Guide",
            url: "https://www.mayoclinic.org/healthy-lifestyle/weight-loss/in-depth/bmi/art-20044462",
            type: "Clinical Reference"
        }
    ],
    faqs: [
        {
            question: "How accurate is the US Navy Body Fat method?",
            answer: "The US Navy method is a highly reliable way to estimate body fat without expensive equipment. It typically has a margin of error of about 3-4% compared to professional scans. By using precise measurements of your neck, waist, and height, it provides a consistent baseline for tracking your fitness progress over time."
        },
        {
            question: "What is considered essential body fat?",
            answer: "Essential fat is the minimum amount of fat your body needs to function properly. For men, this is around 2-5%, and for women, it is 10-13%. Maintaining these levels is vital for basic health and energy."
        },
        {
            question: "Why do body fat measurements differ by gender?",
            answer: "Men and women naturally store fat differently. Men tend to carry more weight in the midsection, while women often have more in the hips and thighs. Our calculator uses specific formulas for each gender to ensure your results accurately reflect these natural differences."
        },
        {
            question: "Can I be at a healthy weight but have high body fat?",
            answer: "Yes, this is often called being 'overfat' while at a normal weight. It means your total weight is in a healthy range, but a higher portion of that weight comes from fat rather than muscle. Tracking body fat percentage gives a clearer picture of your overall health than weight alone."
        },
        {
            question: "How often should I measure my body fat?",
            answer: "For most people, measuring once a month or every few months is ideal. Checking too often can be misleading due to daily changes in water weight or bloating. For the most consistent results, always measure at the same time of day under similar conditions."
        },
        {
            question: "What is the best way to reduce body fat?",
            answer: "The most effective way to lower body fat is through a combination of a balanced diet and regular exercise. Focused strength training helps maintain muscle while you lose fat, leading to a healthier body composition and better long-term results."
        },
        {
            question: "Does age affect what a healthy body fat percentage is?",
            answer: "Yes, as we get older, our bodies naturally lose some muscle and gain fat. Because of this, the 'healthy' range for older adults is slightly higher than for younger people. Our benchmarks take these natural changes into account for a more realistic view of health."
        },
        {
            question: "What is the difference between the 'Athlete' and 'Fitness' categories?",
            answer: "These categories reflect different levels of leanness. The 'Athlete' range is for those with very low fat levels, often found in professional or highly active sports. The 'Fitness' range is a healthy, sustainable level for most active people who want to look and feel their best."
        },
        {
            question: "Can stress affect my body fat results?",
            answer: "High stress can sometimes cause the body to hold onto more weight in the abdominal area. It can also cause temporary bloating or water retention, which might slightly change your measurements. It is best to measure when you are feeling healthy and well-rested."
        },
        {
            question: "Is it possible to lose fat in just one area?",
            answer: "While you can't choose exactly where your body loses fat first, regular exercise and a healthy diet will reduce your overall body fat percentage. Over time, this results in fat loss across your entire body, including your target areas."
        },
        {
            question: "Does drinking water affect the measurement?",
            answer: "Hydration levels can cause small changes in your waist or hip measurements due to bloating. For the most accurate results, try to stay consistently hydrated and take your measurements at the same time, such as in the morning before breakfast."
        },
        {
            question: "How does body fat impact my long-term health?",
            answer: "Maintaining a healthy body fat percentage is one of the best ways to support your long-term wellness. It helps manage energy levels, supports heart health, and reduces the risk of many common health issues as you age."
        },
        {
            question: "Are there different standards for different body types?",
            answer: "Everyone's body is unique, but the standard measurement methods provide a very good estimate for most people. By focusing on your own progress and how you feel, you can use these results as a helpful guide for your personal fitness journey."
        },
        {
            question: "Why should I track body fat instead of just weight?",
            answer: "Weight can go up and down due to muscle gain or water changes. Body fat percentage tells you more about what your weight is actually made of. This helps you see if you are losing fat or gaining muscle, which is a better measure of success."
        },
        {
            question: "What equipment do I need for this calculator?",
            answer: "All you need is a simple, flexible measuring tape. Most people find a standard cloth or plastic tape measure works perfectly for taking the height, neck, waist, and hip measurements required for the calculation."
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
        if (percentage < 6) return { label: "Essential Fat", color: "text-rose-800", bg: "bg-rose-50" };
        if (percentage < 14) return { label: "Athletes", color: "text-emerald-800", bg: "bg-emerald-50" };
        if (percentage < 18) return { label: "Fitness", color: "text-emerald-700", bg: "bg-emerald-50" };
        if (percentage < 25) return { label: "Average", color: "text-amber-800", bg: "bg-amber-50" };
        return { label: "Obese", color: "text-rose-800", bg: "bg-rose-50" };
    } else {
        if (percentage < 14) return { label: "Essential Fat", color: "text-rose-800", bg: "bg-rose-50" };
        if (percentage < 21) return { label: "Athletes", color: "text-emerald-800", bg: "bg-emerald-50" };
        if (percentage < 25) return { label: "Fitness", color: "text-emerald-700", bg: "bg-emerald-50" };
        if (percentage < 32) return { label: "Average", color: "text-amber-800", bg: "bg-amber-50" };
        return { label: "Obese", color: "text-rose-800", bg: "bg-rose-50" };
    }
};
