"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, BMI_2026 } from "@/lib/calculators/bmi";
import {
    ArrowRight, Scale, Activity, Heart, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    TrendingUp, Users, Target, Shield
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "What is BMI and how is it calculated?",
        a: "Body Mass Index (BMI) is a numerical value calculated from your weight and height. The formula is: BMI = weight (kg) / height (m)². For imperial units, the formula is: BMI = (weight in lbs × 703) / (height in inches)². It provides a quick screening tool to identify potential weight problems in adults."
    },
    {
        q: "What BMI is considered healthy?",
        a: "According to WHO and CDC guidelines, a healthy BMI ranges from 18.5 to 24.9. Below 18.5 is considered underweight, 25-29.9 is overweight, and 30 or above is classified as obese. However, BMI should be considered alongside other health indicators."
    },
    {
        q: "Is BMI accurate for athletes and muscular individuals?",
        a: "BMI has limitations for athletes, bodybuilders, and highly muscular individuals. Since muscle weighs more than fat, these individuals may have a high BMI while having a low body fat percentage. Alternative measures like body fat percentage, waist circumference, or waist-to-hip ratio may be more accurate."
    },
    {
        q: "How does age affect BMI interpretation?",
        a: "For adults 20 and older, BMI interpretation is the same regardless of age. However, for children and teens (ages 2-19), BMI is age and sex-specific and is referred to as 'BMI-for-age.' Older adults may benefit from having a slightly higher BMI (23-27) as some research suggests it may be protective."
    },
    {
        q: "What health risks are associated with high BMI?",
        a: "A high BMI is associated with increased risk of type 2 diabetes, cardiovascular disease, high blood pressure, certain cancers (including breast, colon, and kidney), sleep apnea, osteoarthritis, fatty liver disease, and gallbladder disease. The risk increases as BMI rises above the healthy range."
    },
    {
        q: "Can BMI predict mortality risk?",
        a: "Studies show that both very low (under 18.5) and very high (over 35) BMI are associated with increased mortality risk. The 'obesity paradox' suggests that for some conditions like heart failure, moderately overweight individuals may have better outcomes. However, maintaining a healthy BMI is generally recommended."
    },
    {
        q: "How often should I check my BMI?",
        a: "For most adults, checking BMI once a month or quarterly is sufficient. If you're actively trying to lose or gain weight, weekly measurements can help track progress. Consistency is key—weigh yourself at the same time of day, preferably in the morning before eating."
    },
    {
        q: "Does BMI differ by ethnicity?",
        a: "Yes, BMI thresholds may vary by ethnicity. WHO recommends lower BMI cutoffs for Asian populations (overweight at 23+, obese at 27.5+) due to higher health risks at lower BMI levels. Pacific Islander populations may have higher thresholds. Discuss ethnic-specific guidelines with your healthcare provider."
    },
    {
        q: "What is the difference between BMI and body fat percentage?",
        a: "BMI is a ratio of weight to height and doesn't directly measure body fat. Body fat percentage measures the actual proportion of fat in your body. While correlated, they can differ significantly—an athlete might have low body fat but high BMI due to muscle mass. Body fat percentage is more accurate but harder to measure."
    },
    {
        q: "How can I lower my BMI safely?",
        a: "To lower BMI safely: 1) Create a moderate caloric deficit (500-750 cal/day), 2) Increase physical activity (150+ min/week moderate exercise), 3) Focus on whole foods, lean proteins, and fiber, 4) Stay hydrated, 5) Get adequate sleep (7-9 hours), 6) Manage stress. Aim for 1-2 lbs weight loss per week."
    },
    {
        q: "What is BMI Prime?",
        a: "BMI Prime is the ratio of your actual BMI to the upper limit of the healthy BMI range (25). A BMI Prime of 1.0 means you're at the threshold. Below 1.0 indicates healthy weight; above 1.0 indicates overweight. For example, BMI of 30 gives BMI Prime of 1.2 (30/25), meaning you're 20% above the healthy threshold."
    },
    {
        q: "Should children and teens use adult BMI calculators?",
        a: "No. Children and teens should use age-specific BMI-for-age percentile charts. A BMI in the 85th-94th percentile is considered overweight; 95th percentile and above is obese. The CDC provides BMI-for-age growth charts for children ages 2-20. Consult a pediatrician for proper interpretation."
    },
    {
        q: "How accurate are home BMI calculations?",
        a: "Home BMI calculations are very accurate when you use precise measurements. Use a digital scale for weight (accurate to 0.1 lbs) and measure height without shoes, preferably using a wall-mounted stadiometer or measuring tape. The mathematical calculation itself has no margin of error."
    },
    {
        q: "What is waist-to-height ratio and is it better than BMI?",
        a: "Waist-to-height ratio (WHtR) is calculated by dividing waist circumference by height. A ratio under 0.5 is considered healthy. Some studies suggest WHtR is a better predictor of cardiovascular risk than BMI because it accounts for abdominal fat distribution. Using both metrics together provides a more complete picture."
    },
    {
        q: "Can BMI be used during pregnancy?",
        a: "Pre-pregnancy BMI is used to determine healthy weight gain during pregnancy: Underweight (BMI <18.5): 28-40 lbs, Normal (18.5-24.9): 25-35 lbs, Overweight (25-29.9): 15-25 lbs, Obese (30+): 11-20 lbs. Regular BMI calculations during pregnancy are not recommended; consult your OB-GYN for guidance."
    },
];

// FAQ Component
function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                Frequently Asked Questions
            </h2>
            <div className="space-y-3">
                {FAQ_DATA.map((faq, idx) => (
                    <div
                        key={idx}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/30 transition-colors"
                        >
                            <span className="font-semibold text-white pr-4">{faq.q}</span>
                            {openIndex === idx ? (
                                <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                            ) : (
                                <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                        </button>
                        {openIndex === idx && (
                            <div className="px-4 pb-4 text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-3">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function BMIHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                        <Activity className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-300 font-semibold">WHO/CDC 2026 Guidelines</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        BMI <span className="text-green-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate your Body Mass Index instantly using the world's most trusted health metric.
                        Our free calculator uses official {SITE.year} WHO and CDC guidelines to provide accurate results
                        with personalized health recommendations.
                    </p>

                    <Link
                        href="/bmi/calculator"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-green-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate My BMI Now
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stat Banner */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{BMI_2026.statistics.avgBmiUS}</p>
                            <p className="text-xs text-slate-400 mt-1">Avg US BMI</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-red-400">{BMI_2026.statistics.obesityRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">Obesity Rate</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-yellow-400">{BMI_2026.statistics.overweightRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">Overweight</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-green-400">{BMI_2026.statistics.normalWeightRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">Healthy Weight</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is BMI Section - SEO Content */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    What is Body Mass Index (BMI)?
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        <strong className="text-white">Body Mass Index (BMI)</strong> is a standardized measurement that uses your height and weight to estimate whether you are at a healthy weight. Developed by Belgian mathematician Adolphe Quetelet in the 19th century, BMI has become the most widely used screening tool for assessing weight-related health risks in clinical settings worldwide.
                    </p>
                    <p>
                        The <strong className="text-white">World Health Organization (WHO)</strong> and the <strong className="text-white">Centers for Disease Control and Prevention (CDC)</strong> both endorse BMI as a primary screening metric for identifying potential weight problems in adults. According to the CDC's National Health and Nutrition Examination Survey (NHANES) 2021-2023, approximately 42% of American adults are now classified as obese (BMI ≥ 30), representing a significant public health concern.
                    </p>
                    <p>
                        While BMI is an excellent population-level indicator, it's important to understand its limitations. BMI does not directly measure body fat or account for factors like muscle mass, bone density, age, sex, or ethnicity. Athletes and bodybuilders may have elevated BMI scores due to higher muscle mass despite having low body fat percentages. For a comprehensive health assessment, BMI should be used alongside other metrics such as waist circumference, waist-to-hip ratio, and body fat percentage.
                    </p>
                </div>
            </section>

            {/* BMI Categories Chart */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        BMI Categories (WHO Classification)
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {BMI_2026.categories.map((cat) => (
                            <div
                                key={cat.name}
                                className="bg-slate-800/80 rounded-xl p-5 border border-slate-700/50 text-center hover:border-green-500/30 transition-colors"
                            >
                                <p className={`font-black text-xl ${cat.color}`}>{cat.name}</p>
                                <p className="text-slate-300 text-lg mt-2 font-mono">{cat.range}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <p className="text-green-300 text-sm">
                            <strong>Optimal Range:</strong> A BMI between 18.5 and 24.9 is associated with the lowest risk of weight-related health problems.
                        </p>
                    </div>
                </div>
            </section>

            {/* How to Calculate Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    How to Calculate Your BMI
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        BMI is calculated using a simple mathematical formula that relates your weight to your height squared. The formula produces a single number that can be compared against standardized categories to assess your weight status.
                    </p>

                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-6">
                        <h3 className="text-lg font-bold text-white mb-4">BMI Formulas</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-green-400 font-semibold mb-2">Metric Formula:</p>
                                <p className="font-mono text-white bg-slate-900/50 p-3 rounded-lg">
                                    BMI = Weight (kg) ÷ Height² (m²)
                                </p>
                            </div>
                            <div>
                                <p className="text-green-400 font-semibold mb-2">Imperial Formula:</p>
                                <p className="font-mono text-white bg-slate-900/50 p-3 rounded-lg">
                                    BMI = (Weight × 703) ÷ Height² (in²)
                                </p>
                            </div>
                        </div>
                    </div>

                    <p>
                        <strong className="text-white">Example:</strong> A person who weighs 150 lbs (68 kg) and is 5'6" (1.68 m) tall would have a BMI of approximately 24.2, placing them in the upper end of the "Normal" weight category.
                    </p>
                </div>
            </section>

            {/* Health Risks Section */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                        Health Risks by BMI Category
                    </h2>
                    <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                        <p>
                            Research published in peer-reviewed journals including <strong className="text-white">The Lancet</strong>, <strong className="text-white">JAMA</strong>, and <strong className="text-white">The New England Journal of Medicine</strong> consistently demonstrates a strong correlation between elevated BMI and increased risk of chronic diseases.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 my-6">
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-5 h-5 text-red-400" />
                                    <h3 className="font-bold text-red-400">High BMI Risks (≥30)</h3>
                                </div>
                                <ul className="text-sm space-y-1 text-slate-300">
                                    <li>• Type 2 Diabetes (3x higher risk)</li>
                                    <li>• Cardiovascular Disease</li>
                                    <li>• Hypertension</li>
                                    <li>• Sleep Apnea</li>
                                    <li>• Certain Cancers</li>
                                    <li>• Osteoarthritis</li>
                                </ul>
                            </div>
                            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <Info className="w-5 h-5 text-blue-400" />
                                    <h3 className="font-bold text-blue-400">Low BMI Risks (&lt;18.5)</h3>
                                </div>
                                <ul className="text-sm space-y-1 text-slate-300">
                                    <li>• Nutritional Deficiencies</li>
                                    <li>• Weakened Immune System</li>
                                    <li>• Osteoporosis Risk</li>
                                    <li>• Fertility Issues</li>
                                    <li>• Anemia</li>
                                    <li>• Slower Wound Healing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free BMI Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-green-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
                                            Start Now <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection />

            {/* Citations Section */}
            <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-700/50">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Data Sources & Citations
                </h3>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li>• World Health Organization (WHO). "Body Mass Index - BMI." WHO Global Health Observatory, 2026.</li>
                    <li>• Centers for Disease Control and Prevention (CDC). "About Adult BMI." Division of Nutrition, Physical Activity, and Obesity, 2026.</li>
                    <li>• National Institutes of Health (NIH). "Clinical Guidelines on the Identification, Evaluation, and Treatment of Overweight and Obesity in Adults." NHLBI, 2024.</li>
                    <li>• Flegal KM, et al. "Association of All-Cause Mortality With Overweight and Obesity Using Standard Body Mass Index Categories." JAMA. 2013;309(1):71-82.</li>
                    <li>• The Lancet. "Global, regional, and national prevalence of overweight and obesity." GBD 2019 Risk Factors Collaborators, 2020.</li>
                </ul>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Check Your BMI Now
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Takes less than 30 seconds. No signup required. Get instant results with personalized health recommendations.
                </p>
                <Link
                    href="/bmi/calculator"
                    className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-green-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Start Free Calculator
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related Calculators */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="bmi" count={5} />
            </section>
        </div>
    );
}
