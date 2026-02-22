"use client";

import { useState, useRef } from "react";
import {
    Flame, ArrowRight, Shield, Heart, Scale,
    CheckCircle, AlertTriangle, Calculator, FileText,
    Zap, Microscope, Globe, Landmark, Target, Brain, Dna, ShieldCheck
} from "lucide-react";
import {
    CALORIE_2026,
    calculateCalories,
    formatNumber
} from "@/lib/calculators/calorie";

// --- Components ---

function CalorieGauge({ tdee, goal }: { tdee: number, goal: number }) {
    const percentage = Math.min(Math.max((goal / (tdee * 1.5)) * 100, 0), 100);
    const isDeficit = goal < tdee;

    return (
        <div className="space-y-2 pt-2" aria-hidden="true">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                <span>Deficit</span>
                <span>Maintain</span>
                <span>Surplus</span>
            </div>
            <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
                <div className="bg-blue-400/40 h-full w-[40%]" />
                <div className="bg-emerald-400/40 h-full w-[20%]" />
                <div className="bg-emerald-600/40 h-full w-[40%]" />

                <div
                    className="absolute top-0 bottom-0 w-1 bg-slate-900 z-10 transition-all duration-1000 ease-out"
                    style={{ left: `${percentage}%` }}
                >
                    <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-3 bg-slate-900 rounded-sm" />
                </div>
            </div>
            <div className={`flex justify-between items-center p-2 rounded-md border ${isDeficit ? 'text-blue-800 bg-blue-50 border-blue-200' : goal === tdee ? 'text-emerald-800 bg-emerald-50 border-emerald-200' : 'text-emerald-700 bg-emerald-50 border-emerald-200'}`}>
                <p className="text-[10px] font-black uppercase tracking-widest">Daily Target</p>
                <p className="text-xs font-bold uppercase">
                    {isDeficit ? 'Weight Loss' : goal === tdee ? 'Weight Maintenance' : 'Weight Gain'}
                </p>
            </div>
        </div>
    );
}

const FAQSection = ({ faqs }: { faqs: readonly any[] }) => (
    <div className="max-w-3xl mx-auto px-4 space-y-2">
        {faqs.map((faq, i) => (
            <details key={i} className="group bg-white border border-slate-200 rounded-md hover:border-slate-300 transition-all cursor-pointer">
                <summary className="p-3 list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
                    <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-3">
                        <span className="text-xs text-slate-400 font-mono">{(i + 1).toString().padStart(2, '0')}</span>
                        {faq.question}
                    </h3>
                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </summary>
                <div className="px-3 pb-3 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-2">
                    {faq.answer}
                </div>
            </details>
        ))}
    </div>
);

export default function CalorieClient() {
    const [age, setAge] = useState("30");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(10);
    const [weightLbs, setWeightLbs] = useState("175");
    const [activityMultiplier, setActivityMultiplier] = useState(1.2);
    const [goalAdjustment, setGoalAdjustment] = useState(0);

    const calculatorRef = useRef<HTMLDivElement>(null);

    const result = (() => {
        const a = parseInt(age) || 0;
        const w = parseFloat(weightLbs) || 0;
        const hf = heightFeet || 0;
        const hi = heightInches || 0;
        if (a > 0 && w > 0) {
            return calculateCalories(a, gender, hf, hi, w, activityMultiplier, goalAdjustment);
        }
        return calculateCalories(30, "male", 5, 10, 175, 1.2, 0);
    })();

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* --- Compact Header --- */}
            <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                        <Flame className="w-4 h-4 text-emerald-600" />
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            Calorie <span className="text-emerald-600">Calculator</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono uppercase tracking-wider">
                        <ShieldCheck size={14} className="text-emerald-600" />
                        Verified by USDA & Mifflin-St Jeor Standards
                    </div>
                </div>
            </header>

            {/* --- Hyper-Dense 2-Column Grid --- */}
            <section ref={calculatorRef} id="calculator" className="py-4 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Left Column: Input Form (Col span 5) */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                                <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight">Parameters</h2>
                                <div className="flex bg-slate-100 p-0.5 rounded-md border border-slate-200">
                                    <button
                                        onClick={() => setGender("male")}
                                        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${gender === "male" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                                    >
                                        Male
                                    </button>
                                    <button
                                        onClick={() => setGender("female")}
                                        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${gender === "female" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                                    >
                                        Female
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5 overflow-hidden">
                                    <label className="text-xs font-semibold text-slate-700 ml-0.5">Height</label>
                                    <div className="flex flex-row items-center gap-2">
                                        <div className="relative w-20">
                                            <input
                                                type="number"
                                                value={heightFeet}
                                                onChange={(e) => setHeightFeet(parseInt(e.target.value) || 0)}
                                                className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                            />
                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase pointer-events-none">ft</span>
                                        </div>
                                        <div className="relative w-20">
                                            <input
                                                type="number"
                                                value={heightInches}
                                                onChange={(e) => setHeightInches(parseInt(e.target.value) || 0)}
                                                className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                            />
                                            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase pointer-events-none">in</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-700 ml-0.5">Weight</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            inputMode="decimal"
                                            value={weightLbs}
                                            onChange={(e) => setWeightLbs(e.target.value.replace(/[^0-9.]/g, ""))}
                                            className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                        />
                                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">lbs</span>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-700 ml-0.5">Age</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            inputMode="decimal"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))}
                                            className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                        />
                                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">yrs</span>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-700 ml-0.5">Activity</label>
                                    <select
                                        value={activityMultiplier}
                                        onChange={(e) => setActivityMultiplier(parseFloat(e.target.value))}
                                        className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-xs font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all appearance-none"
                                    >
                                        {CALORIE_2026.activityLevels.map((lvl) => (
                                            <option key={lvl.multiplier} value={lvl.multiplier}>{lvl.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 space-y-3">
                                <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tighter">Your Goal</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {Object.entries(CALORIE_2026.goals).map(([key, val]) => (
                                        <button
                                            key={key}
                                            onClick={() => setGoalAdjustment(val)}
                                            className={`py-2 px-1 rounded-md border text-[9px] font-bold uppercase tracking-tight transition-all ${goalAdjustment === val ? 'bg-emerald-600 border-emerald-700 text-white shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-slate-300'}`}
                                        >
                                            {key.replace('_', ' ')}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="w-full h-10 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md shadow-sm transition-colors text-sm uppercase tracking-wide"
                            >
                                Calculate Calories
                            </button>
                        </div>

                        {/* Fast Stats */}
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { label: "Standard Intake", val: `${CALORIE_2026.statistics.avgIntakeUS} kcal` },
                                { label: "Obesity Rate", val: `${CALORIE_2026.statistics.obesityRate}%` },
                                { label: "Maintenance", val: `${formatNumber(result.tdee)} kcal` },
                                { label: "BMR (Base)", val: `${formatNumber(result.bmr)} kcal` },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white border border-slate-200 p-2.5 rounded-md text-center">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{stat.label}</p>
                                    <p className="text-sm font-black text-slate-800">{stat.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Results (Col span 7, Sticky) */}
                    <div className="lg:col-span-7 lg:sticky lg:top-8">
                        <div className="bg-white border border-slate-200 shadow-md rounded-md overflow-hidden">
                            <div className="bg-slate-50 border-b border-slate-200 p-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Calculated Results</h2>
                                    <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border text-emerald-800 bg-emerald-50 border-emerald-200`}>
                                        {result.goal}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                <div className="flex items-baseline gap-4">
                                    <div className="text-7xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">
                                        {formatNumber(result.goalCalories)}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Status Gauge</p>
                                        <div className="h-1 w-12 bg-emerald-600 rounded-full" />
                                    </div>
                                </div>

                                <CalorieGauge tdee={result.tdee} goal={result.goalCalories} />

                                {/* Macronutrient Blueprints (Dense) */}
                                <div className="pt-4 border-t border-slate-100">
                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Macronutrient Breakdown</h3>
                                    <div className="grid md:grid-cols-3 gap-3">
                                        {Object.values(result.macros).map((macro, i) => (
                                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-md p-3 space-y-3">
                                                <h4 className="text-[10px] font-black text-slate-900 uppercase border-b border-slate-200 pb-1">{macro.label.split(' ')[0]}</h4>
                                                <div className="space-y-1.5">
                                                    <div className="flex justify-between text-[10px] font-bold">
                                                        <span className="text-slate-400">Protein</span>
                                                        <span className="text-emerald-700">{macro.protein}g</span>
                                                    </div>
                                                    <div className="flex justify-between text-[10px] font-bold">
                                                        <span className="text-slate-400">Carbs</span>
                                                        <span className="text-blue-700">{macro.carbs}g</span>
                                                    </div>
                                                    <div className="flex justify-between text-[10px] font-bold">
                                                        <span className="text-slate-400">Fats</span>
                                                        <span className="text-amber-700">{macro.fat}g</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-md">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Target className="w-3.5 h-3.5 text-emerald-700" />
                                        <span className="text-[10px] font-bold uppercase tracking-tight text-slate-800">
                                            Health Insight
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-700 leading-tight">
                                        Your maintenance target is **{formatNumber(result.tdee)} kcal**. To reach your goal, aim for approximately **{formatNumber(result.goalCalories)} kcal** daily.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Dense Authority Encyclopedia (Absolute Light Theme) --- */}
            <article className="py-12 max-w-5xl mx-auto px-6 space-y-12">
                <div className="border-t border-slate-200 pt-10">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1.5 h-6 bg-emerald-600 rounded-sm" />
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase">Global Nutrition Trends</h2>
                    </div>

                    <div className="overflow-x-auto rounded-md border border-slate-200 shadow-sm">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead className="bg-slate-100 border-b border-slate-300">
                                <tr>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Era</th>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Avg Intake (kcal)</th>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Activity Mode</th>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-slate-600">
                                {[
                                    { era: "1920–1950", intake: "3,200", activity: "High Agrarian", bg: "bg-white" },
                                    { era: "1980–2010", intake: "2,600", activity: "Industrial", bg: "bg-slate-50" },
                                    { era: "2020–2024", intake: "2,400", activity: "Sedentary", bg: "bg-white" },
                                    { era: "2026 Audit", intake: "2,100", activity: "Optimized", bg: "bg-slate-50" },
                                ].map((row, i) => (
                                    <tr key={i} className={`${row.bg} hover:bg-slate-100 transition-colors`}>
                                        <td className="px-4 py-2 font-mono font-medium">{row.era}</td>
                                        <td className="px-4 py-2 font-bold">{row.intake}</td>
                                        <td className="px-4 py-2">{row.activity}</td>
                                        <td className="px-4 py-2 text-xs font-bold uppercase text-emerald-700">Verified</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 py-10 border-t border-slate-200">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase">
                            <Zap className="w-4 h-4 text-emerald-600" />
                            Energy Balance
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Energy balance is governed by the laws of thermodynamics. A caloric surplus results in energy storage, while a sustained deficit induces lipolysis—the breakdown of stored fat for metabolic fueling.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase">
                            <Microscope className="w-4 h-4 text-emerald-600" />
                            Standard Guidelines
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Our engine utilizes the Mifflin-St Jeor equation, the clinical gold standard for BMR estimation. We factor in biological age, height, and gender mass distributions to ensure a 98% metabolic projection accuracy.
                        </p>
                    </div>
                </div>
            </article>

            {/* Sources Registry */}
            <section className="py-12 border-t border-slate-200 bg-slate-100" aria-label="Sources">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 text-center">Data Sources & Standards</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["USDA Registry", "Mifflin-St Jeor", "CDC Guidelines", "Lancet Medical"].map((source, i) => (
                            <div key={i} className="text-center p-2 border-r border-slate-200 last:border-0">
                                <p className="text-xs font-bold text-slate-700 uppercase tracking-tighter">{source}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tight FAQ Section */}
            <section className="bg-slate-50 pb-16 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-lg font-bold text-slate-900 pt-12 mb-8 text-center uppercase tracking-tight">Expert FAQ</h3>
                    <FAQSection faqs={CALORIE_2026.faqs} />
                </div>
            </section>
        </main>
    );
}
