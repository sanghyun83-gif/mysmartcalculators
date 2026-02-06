"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE, CALCULATORS, CALORIE_2026, formatNumber } from "@/lib/calculators/calorie";
import {
    ArrowRight, Flame, Activity, Apple, Calculator, FileText,
    ChevronDown, ChevronUp, CheckCircle, AlertTriangle, Info,
    TrendingUp, Users, Target, Heart
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// ============================================
// FAQ DATA - 15 Items for Advanced++ Standard
// ============================================
const FAQ_DATA = [
    {
        q: "How many calories should I eat per day?",
        a: "Daily calorie needs vary based on age, sex, weight, height, and activity level. According to USDA Dietary Guidelines, adult men typically need 2,000-3,000 calories daily, while women need 1,600-2,400 calories. Use our calculator for a personalized estimate based on the Mifflin-St Jeor equation."
    },
    {
        q: "What is TDEE and how is it calculated?",
        a: "TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day. It's calculated by multiplying your BMR (Basal Metabolic Rate) by an activity factor. TDEE = BMR × Activity Multiplier. This represents your maintenance calories?�the amount needed to maintain current weight."
    },
    {
        q: "What is BMR and why is it important?",
        a: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain vital functions like breathing, circulation, and cell production. It typically accounts for 60-75% of daily calorie expenditure. The Mifflin-St Jeor equation is the most accurate formula for calculating BMR."
    },
    {
        q: "How many calories should I eat to lose weight?",
        a: "To lose 1 pound per week, create a 500-calorie daily deficit. For 2 pounds per week, create a 1,000-calorie deficit. Never go below 1,200 calories (women) or 1,500 calories (men) without medical supervision. A moderate deficit of 500-750 calories is sustainable and safe for most people."
    },
    {
        q: "What are macronutrients and how should I balance them?",
        a: "Macronutrients are protein, carbohydrates, and fats. A balanced diet typically consists of 10-35% protein, 45-65% carbs, and 20-35% fat. For weight loss, higher protein (25-30%) helps preserve muscle. Athletes may need 1.2-2.0g protein per kg body weight. Our calculator provides personalized macro targets."
    },
    {
        q: "How does activity level affect calorie needs?",
        a: "Activity level significantly impacts calorie needs. Sedentary individuals (desk job, no exercise) multiply BMR by 1.2, while very active people (hard exercise daily) multiply by 1.9. Moving from sedentary to moderately active can increase needs by 400-600 calories daily."
    },
    {
        q: "Should I count calories to lose weight?",
        a: "Calorie counting can be an effective tool but isn't required for everyone. It increases awareness of portion sizes and food choices. However, focusing on food quality, eating whole foods, and listening to hunger cues can also lead to weight loss without strict counting. Find what's sustainable for you."
    },
    {
        q: "What is the difference between net calories and gross calories?",
        a: "Gross calories are total calories consumed. Net calories = Calories eaten - Exercise calories burned. Some diet plans focus on net calories, allowing you to 'earn' more food through exercise. However, be cautious?�fitness trackers often overestimate exercise calories by 20-50%."
    },
    {
        q: "How accurate are calorie calculators?",
        a: "Calorie calculators using the Mifflin-St Jeor equation are accurate within 10% for most people. Individual factors like genetics, body composition, hormones, and metabolic adaptation can affect actual needs. Use calculated values as a starting point and adjust based on real-world results over 2-4 weeks."
    },
    {
        q: "Do I need to eat less as I age?",
        a: "Yes, calorie needs typically decrease with age due to muscle mass loss and metabolic slowdown. After age 30, BMR decreases approximately 1-2% per decade. A 50-year-old may need 200-300 fewer calories than at age 30. Resistance training can help maintain muscle and metabolism."
    },
    {
        q: "What is metabolic adaptation and how does it affect weight loss?",
        a: "Metabolic adaptation is your body's response to calorie restriction, slowing metabolism to conserve energy. This can reduce TDEE by 10-15% beyond what weight loss alone would predict. Combat this with diet breaks, reverse dieting, resistance training, and avoiding extreme calorie deficits."
    },
    {
        q: "How many calories do I burn during exercise?",
        a: "Calories burned depend on exercise type, intensity, duration, and body weight. Examples for 155-lb person: Walking (3.5 mph): 140 cal/30min, Running (6 mph): 295 cal/30min, Cycling: 260 cal/30min, Swimming: 225 cal/30min. Heavier individuals burn more calories for the same activity."
    },
    {
        q: "Should I eat back exercise calories?",
        a: "This depends on your goals. For weight loss, eating back 25-50% of exercise calories is reasonable since trackers overestimate. For maintenance or building muscle, eat all of them. If you're very active, not eating enough can impair recovery and cause muscle loss."
    },
    {
        q: "What is the thermic effect of food (TEF)?",
        a: "TEF is the energy required to digest, absorb, and metabolize food. Protein has the highest TEF (20-30%), carbs 5-10%, and fat 0-3%. This means eating 100 calories of protein only nets about 70-80 calories. High-protein diets slightly boost metabolism through TEF."
    },
    {
        q: "How do I maintain weight after losing it?",
        a: "Gradually increase calories to maintenance level (reverse dieting). Monitor weight weekly. Continue exercise, especially resistance training. Eat protein at every meal. Stay mindful of portions. Studies show those who track food and weigh regularly maintain loss better long-term."
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
                                <ChevronUp className="w-5 h-5 text-orange-400 flex-shrink-0" />
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

export default function CalorieHubClient() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#0a0f1a] to-[#0d1320]">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                        <Activity className="w-4 h-4 text-orange-400" />
                        <span className="text-sm text-orange-300 font-semibold">USDA 2026 Guidelines</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Calorie <span className="text-orange-400">Calculator</span>
                    </h1>

                    <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Calculate your exact daily calorie needs using the science-backed Mifflin-St Jeor equation.
                        Get personalized TDEE, BMR, and macro targets based on {SITE.year} USDA and CDC nutrition guidelines.
                    </p>

                    <Link
                        href="/calorie/calculator"
                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate My Calories
                        <ArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Quick Stats */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-blue-400">{formatNumber(CALORIE_2026.statistics.recommendedMen)}</p>
                            <p className="text-xs text-slate-400 mt-1">Men (cal/day)</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-pink-400">{formatNumber(CALORIE_2026.statistics.recommendedWomen)}</p>
                            <p className="text-xs text-slate-400 mt-1">Women (cal/day)</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-orange-400">{formatNumber(CALORIE_2026.statistics.avgIntakeUS)}</p>
                            <p className="text-xs text-slate-400 mt-1">US Average</p>
                        </div>
                        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center">
                            <p className="text-2xl font-black text-red-400">{CALORIE_2026.statistics.obesityRate}%</p>
                            <p className="text-xs text-slate-400 mt-1">Obesity Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Calorie Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
                    Understanding Calories and Energy Balance
                </h2>
                <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                    <p>
                        A <strong className="text-white">calorie</strong> is a unit of energy. In nutrition, we actually use kilocalories (kcal), though commonly referred to as "calories." Your body needs energy for everything from breathing and circulation to exercise and digestion. Understanding your calorie needs is fundamental to weight management.
                    </p>
                    <p>
                        The <strong className="text-white">Mifflin-St Jeor equation</strong>, developed in 1990 and validated in numerous studies, is considered the most accurate formula for estimating Basal Metabolic Rate (BMR). The <strong className="text-white">American Dietetic Association</strong> recommends this equation over older formulas like Harris-Benedict due to its superior accuracy across different populations.
                    </p>
                    <p>
                        Energy balance determines weight change: consume more calories than you burn (surplus) and you gain weight; consume fewer (deficit) and you lose weight. One pound of body fat contains approximately 3,500 calories, so a 500-calorie daily deficit theoretically results in 1 pound of weight loss per week.
                    </p>
                </div>
            </section>

            {/* Activity Levels */}
            <section className="bg-slate-800/30 border-y border-slate-700/50 py-16">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                        Activity Level Multipliers
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {CALORIE_2026.activityLevels.map((level) => (
                            <div
                                key={level.name}
                                className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 text-center hover:border-orange-500/30 transition-colors"
                            >
                                <p className="font-black text-orange-400">{level.name}</p>
                                <p className="text-xs text-slate-400 mt-1">{level.description}</p>
                                <p className="text-xl font-black text-white mt-2">×{level.multiplier}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 bg-orange-500/10 border border-orange-500/30 rounded-xl p-4 flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                        <p className="text-orange-300 text-sm">
                            <strong>Pro Tip:</strong> Most people overestimate activity level. If unsure, start with "Light" and adjust based on results.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8 text-center">
                    Free Calorie Tools
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {CALCULATORS.map((calc) => {
                        const IconComponent = calc.icon;
                        return (
                            <Link
                                key={calc.id}
                                href={`/${calc.id}`}
                                className="group bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-orange-500/50 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-orange-500/10 rounded-lg group-hover:bg-orange-500/20 transition-colors">
                                        <IconComponent className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                                            {calc.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {calc.longDescription}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-orange-400 text-sm mt-3 group-hover:gap-2 transition-all font-semibold">
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

            {/* Citations */}
            <section className="max-w-4xl mx-auto px-6 py-8 border-t border-slate-700/50">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                    Data Sources & Citations
                </h3>
                <ul className="text-xs text-slate-500 space-y-2">
                    <li>??U.S. Department of Agriculture. "Dietary Guidelines for Americans, 2020-2026." USDA, 2020.</li>
                    <li>??Mifflin MD, et al. "A new predictive equation for resting energy expenditure in healthy individuals." Am J Clin Nutr. 1990;51(2):241-247.</li>
                    <li>??CDC. "Adult Obesity Facts." Centers for Disease Control and Prevention, 2026.</li>
                    <li>??Institute of Medicine. "Dietary Reference Intakes for Energy, Carbohydrate, Fiber, Fat, Fatty Acids, Cholesterol, Protein, and Amino Acids." National Academies Press, 2005.</li>
                    <li>??Academy of Nutrition and Dietetics. "Position of the Academy: Total Diet Approach." J Acad Nutr Diet. 2024.</li>
                </ul>
            </section>

            {/* CTA */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-2xl font-black text-white mb-4">
                    Start Your Nutrition Journey
                </h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                    Calculate your exact daily calorie needs in 30 seconds. Get personalized macros and TDEE.
                </p>
                <Link
                    href="/calorie/calculator"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-orange-500/25"
                >
                    <Calculator className="w-5 h-5" />
                    Start Free Calculator
                    <ArrowRight className="w-5 h-5" />
                </Link>
            </section>

            {/* Related */}
            <section className="max-w-4xl mx-auto px-6 py-8">
                <RelatedCalculators currentCalc="calorie" count={5} />
            </section>
        </div>
    );
}
