"use client";

import { useState, useRef } from "react";
import {
    Flame, ArrowRight, Shield, Heart, Scale,
    CheckCircle, AlertTriangle, Calculator, FileText,
    Zap, Microscope, Globe, Landmark, Target, Brain, Dna
} from "lucide-react";
import {
    CALORIE_2026,
    calculateCalories,
    formatNumber
} from "@/lib/calculators/calorie";
import { RelatedCalculators } from "@/components/RelatedCalculators";

// --- Components ---

function CalorieGauge({ tdee, goal }: { tdee: number, goal: number }) {
    // Visualization of current goal vs maintenance
    const percentage = Math.min(Math.max((goal / (tdee * 1.5)) * 100, 0), 100);
    const isDeficit = goal < tdee;

    return (
        <div className="space-y-4 pt-6" aria-hidden="true">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                <span>Deficit</span>
                <span>Maintenance</span>
                <span>Surplus</span>
            </div>
            <div className="relative h-4 bg-white/5 rounded-full overflow-hidden flex border border-white/10">
                <div className="bg-blue-500/40 h-full w-[40%]" title="Deficit Zone" />
                <div className="bg-green-500/40 h-full w-[20%]" title="Maintenance Zone" />
                <div className="bg-orange-500/40 h-full w-[40%]" title="Surplus Zone" />

                {/* Active Marker */}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-10 transition-all duration-1000 ease-out"
                    style={{ left: `${percentage}%` }}
                >
                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-1 h-6 bg-white rounded-sm" />
                </div>
            </div>
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Calories Gauge</p>
                <p className="text-sm font-black text-white uppercase tracking-tight">
                    {isDeficit ? 'Calorie Deficit' : goal === tdee ? 'Maintenance Level' : 'Calorie Surplus'}
                </p>
            </div>
        </div>
    );
}

const FAQSection = ({ faqs }: { faqs: readonly any[] }) => (
    <div className="max-w-4xl mx-auto px-6 relative space-y-4">
        {faqs.map((faq, i) => (
            <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-[2.5rem] hover:border-orange-500/30 transition-all cursor-pointer">
                <summary className="p-8 list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
                    <h3 className="text-lg font-black text-white flex items-center gap-4 group-hover:text-orange-500 transition-colors text-left">
                        <span className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white not-italic flex-shrink-0">{i + 1}</span>
                        {faq.question}
                    </h3>
                    <span className="text-slate-500 group-open:rotate-180 transition-transform duration-300">
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </summary>
                <div className="px-8 pb-8 text-slate-400 leading-relaxed font-medium">
                    <p className="pt-4 border-t border-white/5">
                        {faq.answer}
                    </p>
                </div>
            </details>
        ))}
    </div>
);

export default function CalorieClient() {
    // State
    const [age, setAge] = useState("30");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(10);
    const [weightLbs, setWeightLbs] = useState("175");
    const [activityMultiplier, setActivityMultiplier] = useState(1.2);
    const [goalAdjustment, setGoalAdjustment] = useState(0);

    const calculatorRef = useRef<HTMLDivElement>(null);

    // Derived State Optimization (Zero useEffect)
    const result = (() => {
        const a = parseInt(age) || 0;
        const w = parseFloat(weightLbs) || 0;
        if (a > 0 && w > 0) {
            return calculateCalories(a, gender, heightFeet, heightInches, w, activityMultiplier, goalAdjustment);
        }
        return calculateCalories(30, "male", 5, 10, 175, 1.2, 0);
    })();

    const scrollToCalculator = () => {
        calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-[#020617] text-slate-300">
            {/* --- Hero / Header Section --- */}
            <header className="relative py-16 md:py-24 overflow-hidden px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05),transparent_70%)]" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col items-center text-center space-y-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-black text-orange-500 uppercase tracking-widest animate-pulse">
                            <Flame className="w-3 h-3" /> Precision Metabolic Engine
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-white max-w-4xl">
                            Calorie <span className="text-orange-500">Calculator</span>.
                        </h1>

                        <p className="max-w-2xl text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
                            Find your daily maintenance calories and personalized macros. Get a professional breakdown of your TDEE and BMR based on the latest 2026 nutrition standards.
                        </p>

                        <button
                            onClick={scrollToCalculator}
                            className="inline-flex items-center gap-4 bg-orange-600 hover:bg-orange-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-orange-600/30 group active:scale-95"
                        >
                            <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Calculate Calories
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </header>

            {/* --- Calculator Functional Area --- */}
            <section aria-label="Calorie Audit Engine" ref={calculatorRef} id="calculator" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 border-t border-white/5 scroll-mt-24">
                {/* Input Panel */}
                <div className="lg:col-span-7 space-y-8">
                    <div className="p-8 md:p-12 bg-slate-900/50 border border-white/10 rounded-[4rem] space-y-10 shadow-2xl backdrop-blur-3xl">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-black text-white tracking-tight">Enter Your Details</h2>
                                <p className="text-slate-400 text-xs font-bold tracking-tight">Provide your metrics for an accurate metabolic calculation.</p>
                            </div>

                            {/* Gender Toggle */}
                            <div className="flex bg-black p-1 rounded-xl border border-white/10">
                                <button
                                    onClick={() => setGender("male")}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${gender === "male" ? "bg-orange-600 text-white" : "text-slate-500 hover:text-slate-400"}`}
                                >
                                    Male
                                </button>
                                <button
                                    onClick={() => setGender("female")}
                                    className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${gender === "female" ? "bg-orange-600 text-white" : "text-slate-500 hover:text-slate-400"}`}
                                >
                                    Female
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Height Section */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Stature (Feet/Inches)</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <select
                                        value={heightFeet}
                                        onChange={(e) => setHeightFeet(parseInt(e.target.value))}
                                        className="w-full bg-black border border-white/10 rounded-2xl p-4 text-sm font-black text-white focus:border-orange-500 outline-none transition-all appearance-none"
                                    >
                                        {[4, 5, 6, 7].map((ft) => (
                                            <option key={ft} value={ft}>{ft} ft</option>
                                        ))}
                                    </select>
                                    <select
                                        value={heightInches}
                                        onChange={(e) => setHeightInches(parseInt(e.target.value))}
                                        className="w-full bg-black border border-white/10 rounded-2xl p-4 text-sm font-black text-white focus:border-orange-500 outline-none transition-all appearance-none"
                                    >
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option key={i} value={i}>{i} in</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Weight Section */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mass (Lbs)</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        inputMode="decimal"
                                        pattern="[0-9]*"
                                        value={weightLbs}
                                        onChange={(e) => setWeightLbs(e.target.value.replace(/[^0-9.]/g, ""))}
                                        placeholder="175"
                                        className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl text-xl font-black text-white focus:border-orange-500 outline-none transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 font-black uppercase text-[10px] tracking-widest">lbs</span>
                                </div>
                            </div>

                            {/* Age Section */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Biological Age</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        inputMode="decimal"
                                        pattern="[0-9]*"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))}
                                        placeholder="30"
                                        className="w-full px-6 py-4 bg-black border border-white/10 rounded-2xl text-xl font-black text-white focus:border-orange-500 outline-none transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-600 font-black uppercase text-[10px] tracking-widest">yrs</span>
                                </div>
                            </div>

                            {/* Activity Section */}
                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Activity Tier</label>
                                <select
                                    value={activityMultiplier}
                                    onChange={(e) => setActivityMultiplier(parseFloat(e.target.value))}
                                    className="w-full bg-black border border-white/10 rounded-2xl p-4 text-sm font-black text-white focus:border-orange-500 outline-none transition-all appearance-none"
                                >
                                    {CALORIE_2026.activityLevels.map((lvl) => (
                                        <option key={lvl.multiplier} value={lvl.multiplier}>{lvl.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Goal Adjustment */}
                        <div className="space-y-4 pt-6 border-t border-white/5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Transformation</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {Object.entries(CALORIE_2026.goals).map(([key, val]) => (
                                    <button
                                        key={key}
                                        onClick={() => setGoalAdjustment(val)}
                                        className={`p-4 rounded-2xl border text-[10px] font-black uppercase tracking-widest transition-all ${goalAdjustment === val ? 'bg-orange-600 border-orange-500 text-white shadow-lg shadow-orange-600/20' : 'bg-black border-white/10 text-slate-500 hover:border-white/20'}`}
                                    >
                                        {key.replace('_', ' ')}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Output Panel (Gauge) */}
                <div className="lg:col-span-5 relative self-start">
                    <div className="lg:sticky lg:top-24">
                        <div className="p-10 md:p-12 bg-white/5 border border-white/10 rounded-[4rem] shadow-2xl space-y-10 relative overflow-hidden backdrop-blur-3xl group">
                            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                <Zap className="w-32 h-32 text-orange-500" />
                            </div>

                            <div className="space-y-4">
                                <div className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] p-1.5 bg-orange-500/10 w-fit rounded">Target Intake</div>
                                <div className="text-6xl md:text-8xl font-black text-white tracking-tighter tabular-nums leading-none">
                                    {formatNumber(result.goalCalories)}
                                </div>
                                <div className="text-xs font-black uppercase tracking-widest text-slate-500">
                                    Calories Per Day
                                </div>
                            </div>

                            {/* VISUAL GAUGE AREA */}
                            <CalorieGauge tdee={result.tdee} goal={result.goalCalories} />

                            <div className="pt-8 border-t border-white/10 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5 space-y-1">
                                        <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">BMR Baseline</p>
                                        <p className="text-lg font-black text-white">{formatNumber(result.bmr)}</p>
                                    </div>
                                    <div className="bg-slate-950/50 p-4 rounded-2xl border border-white/5 space-y-1">
                                        <p className="text-[8px] text-slate-500 font-black uppercase tracking-widest">TDEE Level</p>
                                        <p className="text-lg font-black text-white">{formatNumber(result.tdee)}</p>
                                    </div>
                                </div>

                                <div className={`p-6 rounded-3xl border border-orange-500/10 bg-orange-500/5`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Target className="w-4 h-4 text-orange-500" />
                                        <span className="text-[10px] font-black uppercase text-orange-500">
                                            {result.goal === 'Thermodynamic Maintenance' ? 'Maintenance Plan' : result.goal}
                                        </span>
                                    </div>
                                    <p className="text-xs font-bold text-white leading-relaxed">
                                        Your maintenance calories are {formatNumber(result.tdee)} kcal. Your target of {formatNumber(result.goalCalories)} kcal is optimized for your selected goal.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Macro Architecture Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl font-black text-white tracking-tight uppercase">Macronutrient Blueprints</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto font-medium">Protein, carbohydrate, and lipid partitioning based on institutional 2026 protocols.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {Object.values(result.macros).map((macro, i) => (
                        <div key={i} className="bg-slate-900/40 border border-white/10 rounded-[3rem] p-10 space-y-8 backdrop-blur-3xl hover:border-orange-500/30 transition-all group">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">Blueprint {(i + 1).toString().padStart(2, '0')}</p>
                                <h3 className="text-xl font-black text-white">{macro.label}</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: "Protein", val: `${macro.protein}g`, icon: Heart, color: "text-red-400" },
                                    { label: "Carbs", val: `${macro.carbs}g`, icon: Zap, color: "text-blue-400" },
                                    { label: "Fats", val: `${macro.fat}g`, icon: Flame, color: "text-orange-400" },
                                ].map((m, j) => (
                                    <div key={j} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-3">
                                            <m.icon className={`w-4 h-4 ${m.color}`} />
                                            <span className="text-xs font-black text-white/60 uppercase tracking-widest">{m.label}</span>
                                        </div>
                                        <span className="text-lg font-black text-white">{m.val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- Authority Content (Encyclopedia) --- */}
            <article className="py-24 space-y-32 max-w-5xl mx-auto">
                <div className="px-6 space-y-24">
                    {/* Historical Benchmarks Table */}
                    <section className="space-y-8" aria-labelledby="historical-benchmarks">
                        <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                            <div>
                                <h2 id="historical-benchmarks" className="text-2xl font-black text-white tracking-tight">I. Historical Calorie Benchmarks</h2>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Global Nutritional Standards</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[3rem] border border-white/5 bg-slate-900 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <caption className="sr-only">Chronological daily calorie intake benchmarks and activity trends</caption>
                                <thead className="bg-white/5 border-b border-white/10 text-xs font-black tracking-widest text-orange-500 uppercase">
                                    <tr>
                                        <th scope="col" className="px-8 py-6">Era</th>
                                        <th scope="col" className="px-8 py-6">Avg Intake (kcal)</th>
                                        <th scope="col" className="px-8 py-6">Activity Trend</th>
                                        <th scope="col" className="px-8 py-6">Audit Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold text-slate-400">
                                    {[
                                        { era: "1920–1950", intake: "2,800–3,200", activity: "High (Agrarian)", status: "Reference" },
                                        { era: "1980–2010", intake: "2,200–2,600", activity: "Moderate", status: "Verified" },
                                        { era: "2020–2024", intake: "2,000–2,400", activity: "Low (Sedentary)", status: "Audited" },
                                        { era: "2026 Projection", intake: "1,900–2,200", activity: "Optimized", status: "Target" },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-orange-500/5 transition-colors text-xs md:text-sm">
                                            <th scope="row" className="px-8 py-6 text-white font-mono font-normal">{row.era}</th>
                                            <td className="px-8 py-6">{row.intake}</td>
                                            <td className="px-8 py-6">{row.activity}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-wider text-slate-500">{row.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Scientific Principles */}
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="p-10 md:p-12 bg-orange-500/5 border border-orange-500/10 rounded-[4rem] space-y-8 relative overflow-hidden group">
                            <div className="absolute -right-8 -top-8 p-12 opacity-5">
                                <Dna className="w-48 h-48 text-orange-500" />
                            </div>
                            <h3 className="text-3xl font-black text-white italic">Thermodynamics</h3>
                            <p className="text-slate-400 font-medium leading-relaxed">
                                Our engine operates on the First Law of Thermodynamics: energy cannot be created or destroyed, only transformed. Caloric surplus leads to energy sequestration (fat storage), while deficit induces metabolic cannibalization of adipose tissue.
                            </p>
                            <div className="grid gap-4">
                                {[
                                    "BMR Baseline Efficiency",
                                    "TEF Digestion Overhead",
                                    "NEAT Incidental Flux",
                                    "EAT Structured Delta"
                                ].map((u, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-black text-orange-500/80 uppercase tracking-widest">
                                        <CheckCircle className="w-3 h-3" /> {u}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12">
                            <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/5 space-y-4">
                                <h3 className="text-xl font-black text-white italic flex items-center gap-3">
                                    <Brain className="w-6 h-6 text-blue-400" /> Bio-Feedback Loops
                                </h3>
                                <p className="text-sm text-slate-400 font-medium leading-[1.8]">
                                    Calorie intake is regulated by the hypothalamic-pituitary-adrenal axis. High-fiber and high-protein architectures trigger the 'ileal brake', signaling satiety faster than hyper-palatable lipid flows.
                                </p>
                            </div>
                            <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/5 space-y-4">
                                <h3 className="text-xl font-black text-white italic flex items-center gap-3">
                                    <Microscope className="w-6 h-6 text-amber-400" /> Metabolic Adaptation
                                </h3>
                                <p className="text-sm text-slate-400 font-medium leading-[1.8]">
                                    Prolonged deficits signal scarcity, inducing the 'thrifty phenotype' response. Our S-Class audit suggests moderate targets to prevent down-regulation of basal mitochondrial function.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Citations Grid */}
            <section className="py-24 border-y border-white/5 bg-slate-950/50" aria-label="Clinical Sources">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-12 text-center">Institutional Data Signals</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {CALORIE_2026.citations.map((cite, i) => (
                            <a
                                key={i}
                                href={cite.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-6 bg-black/40 border border-white/5 rounded-3xl group hover:border-orange-500/30 transition-all"
                            >
                                <div className="text-[9px] font-black text-orange-500 uppercase mb-1">Source Node {i + 1}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-orange-500 transition-colors mb-2">{cite.name}</h4>
                                <p className="text-[11px] text-slate-400 font-bold">Standardized clinical guidelines for metabolic expenditure management.</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section aria-labelledby="faq-title" className="py-24">
                <h2 id="faq-title" className="sr-only">Frequently Asked Questions</h2>
                <h3 className="text-3xl font-black text-white mb-16 text-center italic">Calorie Audit <span className="text-orange-500">FAQ</span>.</h3>
                <FAQSection faqs={CALORIE_2026.faqs} />
            </section>

            {/* Related Calculators */}
            <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
                <RelatedCalculators currentCalc="calorie" count={5} />
            </section>
        </main>
    );
}
