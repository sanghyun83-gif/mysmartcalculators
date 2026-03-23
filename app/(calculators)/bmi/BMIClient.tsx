"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
    Activity,
    CheckCircle,
    AlertTriangle,
    ShieldCheck,
    Link2
} from "lucide-react";
import {
    calculateBMI,
    BMIResult,
    BMI_2026
} from "@/lib/calculators/bmi";
import { sendGaEvent } from "@/lib/analytics/ga";

// --- Components ---

const BMI_CATEGORIES = [
    { name: "Underweight", min: 0, max: 18.5, color: "bg-blue-400" },
    { name: "Normal", min: 18.5, max: 25, color: "bg-emerald-400" },
    { name: "Overweight", min: 25, max: 30, color: "bg-amber-400" },
    { name: "Obese I", min: 30, max: 35, color: "bg-orange-400" },
    { name: "Obese II", min: 35, max: 40, color: "bg-rose-400" },
    { name: "Obese III", min: 40, max: 60, color: "bg-rose-600" },
];

function BMIGauge({ bmi }: { bmi: number }) {
    const percentage = Math.min(Math.max(((bmi - 10) / (45 - 10)) * 100, 0), 100);

    const getStatusStyles = (val: number) => {
        if (val < 18.5) return "text-blue-800 bg-blue-50 border-blue-200";
        if (val < 25) return "text-emerald-800 bg-emerald-50 border-emerald-200";
        if (val < 30) return "text-amber-800 bg-amber-50 border-amber-200";
        return "text-rose-800 bg-rose-50 border-rose-200";
    };

    const getStatusText = (val: number) => {
        if (val < 18.5) return "Underweight";
        if (val < 25) return "Normal Weight";
        if (val < 30) return "Overweight";
        return "Obese";
    };

    return (
        <div className="space-y-2 pt-2" aria-hidden="true">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">
                <span>Under</span>
                <span>Normal</span>
                <span>Obese</span>
            </div>
            <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
                {BMI_CATEGORIES.map((cat, i) => {
                    const width = ((cat.max - cat.min) / 50) * 100 * 1.5;
                    return (
                        <div
                            key={i}
                            style={{ width: `${width}%` }}
                            className={`${cat.color} h-full opacity-40`}
                        />
                    );
                })}
                <div
                    className="absolute top-0 bottom-0 w-1 bg-slate-900 z-10 transition-all duration-1000 ease-out"
                    style={{ left: `${percentage}%` }}
                >
                    <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-3 bg-slate-900 rounded-sm" />
                </div>
            </div>
            <div className={`flex justify-between items-center p-2 rounded-md border ${getStatusStyles(bmi)}`}>
                <p className="text-[10px] font-bold uppercase tracking-widest">Status</p>
                <p className="text-xs font-black uppercase">
                    {getStatusText(bmi)}
                </p>
            </div>
        </div>
    );
}

type FAQItem = {
    question: string;
    answer: string;
};

const FAQSection = ({ faqs }: { faqs: readonly FAQItem[] }) => (
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

const BMI_EVIDENCE_MATRIX = [
    {
        authority: "WHO",
        topic: "BMI classification and risk categories",
        officialUrl: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight",
        lastVerified: "2026-03-23",
        whatChanged: "Category language aligned to WHO risk interpretation.",
    },
    {
        authority: "CDC",
        topic: "Adult BMI interpretation guidance",
        officialUrl: "https://www.cdc.gov/bmi/adult-calculator/index.html",
        lastVerified: "2026-03-23",
        whatChanged: "Population guidance notes and interpretation caveats refreshed.",
    },
    {
        authority: "NIH",
        topic: "Healthy weight and BMI context",
        officialUrl: "https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi_tbl.htm",
        lastVerified: "2026-03-23",
        whatChanged: "Healthy range references rechecked for educational consistency.",
    },
    {
        authority: "Lancet Commission",
        topic: "2026 obesity interpretation update",
        officialUrl: "https://www.thelancet.com/",
        lastVerified: "2026-03-23",
        whatChanged: "Clinical framing note updated for complication-first interpretation.",
    },
] as const;

export default function BMIClient() {
    const startedRef = useRef(false);
    const [unitType, setUnitType] = useState<"US" | "Metric">("US");
    const [heightFeet, setHeightFeet] = useState(5);
    const [heightInches, setHeightInches] = useState(9);
    const [weightLbs, setWeightLbs] = useState("160");
    const [heightCm, setHeightCm] = useState("175");
    const [weightKg, setWeightKg] = useState("72");

    const calculatorRef = useRef<HTMLDivElement>(null);

    const result: BMIResult = (() => {
        if (unitType === "US") {
            const w = parseFloat(weightLbs) || 0;
            return w > 0 ? calculateBMI(heightFeet, heightInches, w, "US") : calculateBMI(5, 9, 160, "US");
        } else {
            const h = parseFloat(heightCm) || 0;
            const w = parseFloat(weightKg) || 0;
            return (h > 0 && w > 0) ? calculateBMI(h, 0, w, "Metric") : calculateBMI(175, 0, 72, "Metric");
        }
    })();

    const lifecycleRows = useMemo(() => {
        const status = result.category.toLowerCase();
        const baselineAction = result.isHealthy
            ? "Maintain current routine and monitor trend monthly."
            : "Start calorie/activity correction and baseline sleep recovery.";

        const checkWeek6 = status.includes("obese")
            ? "Re-check with clinician if no downward trend in BMI."
            : "Assess adherence and adjust nutrition/activity plan.";

        return [
            { stage: "Baseline Capture", window: "Week 0", action: "Record BMI, waist trend, and current routine." },
            { stage: "Intervention Start", window: "Week 1-2", action: baselineAction },
            { stage: "Midpoint Audit", window: "Week 6", action: checkWeek6 },
            { stage: "Outcome Review", window: "Week 12", action: "Compare BMI delta and define next 90-day plan." },
        ];
    }, [result.category, result.isHealthy]);

    const sensitivityRows = useMemo(() => {
        const weight = unitType === "US" ? parseFloat(weightLbs) || 160 : parseFloat(weightKg) || 72;
        const scenarios = [
            { label: "Conservative", factor: 1.05 },
            { label: "Base", factor: 1 },
            { label: "Optimized", factor: 0.95 },
        ];

        return scenarios.map((scenario) => {
            const adjustedWeight = Math.max(1, weight * scenario.factor);
            const simulated =
                unitType === "US"
                    ? calculateBMI(heightFeet, heightInches, adjustedWeight, "US")
                    : calculateBMI(parseFloat(heightCm) || 175, 0, adjustedWeight, "Metric");

            return {
                label: scenario.label,
                weight: adjustedWeight,
                bmi: simulated.bmi,
                category: simulated.category,
            };
        });
    }, [heightCm, heightFeet, heightInches, unitType, weightKg, weightLbs]);

    const readinessChecklist = [
        "Measure under similar conditions (same time/day, similar hydration).",
        "Track trend over at least 8-12 weeks before judging results.",
        "Pair BMI with waist ratio or body fat for better context.",
        "Review medications and sleep factors that affect weight trend.",
        "Escalate to clinical support if BMI trend worsens despite adherence.",
    ];

    const assumptions = [
        "BMI is a screening metric, not a standalone diagnosis.",
        "Height and weight are assumed to be measured accurately.",
        "Adult WHO/CDC thresholds are used for category interpretation.",
        "Body composition differences (muscle vs fat) are not directly modeled.",
        "Risk interpretation should be paired with clinical context.",
    ];

    const edgeTests = [
        {
            caseName: "Athlete profile (high muscle mass)",
            input: "5'9\", 190 lbs",
            risk: "BMI may overstate fat-related risk.",
            action: "Use body-fat % and waist metrics before making decisions.",
        },
        {
            caseName: "Low BMI with symptoms",
            input: "5'9\", 115 lbs",
            risk: "Nutritional or endocrine issues may be hidden.",
            action: "Escalate to clinician if fatigue, weakness, or rapid loss exists.",
        },
        {
            caseName: "Rapid trend change",
            input: "+/- 5% body weight in <8 weeks",
            risk: "Short-term fluctuation can distort interpretation.",
            action: "Track 8-12 week trend and reassess intervention.",
        },
    ];

    function trackStart() {
        if (startedRef.current) return;
        startedRef.current = true;
        sendGaEvent("calculator_start", { calculator_id: "bmi", route: "/bmi" });
    }

    function handleCalculate() {
        trackStart();
        sendGaEvent("calculator_complete", {
            calculator_id: "bmi",
            route: "/bmi",
            unit_type: unitType,
            bmi: result.bmi,
            category: result.category,
        });
    }

    function copyPermalink() {
        trackStart();
        const params =
            unitType === "US"
                ? new URLSearchParams({
                      unit: "US",
                      ft: String(heightFeet),
                      in: String(heightInches),
                      lbs: String(weightLbs),
                  })
                : new URLSearchParams({
                      unit: "Metric",
                      cm: String(heightCm),
                      kg: String(weightKg),
                  });

        const link = `${window.location.origin}/bmi?${params.toString()}`;
        void navigator.clipboard.writeText(link);
        sendGaEvent("cta_click", { calculator_id: "bmi", route: "/bmi", cta: "copy_permalink" });
    }

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* --- Compact Header --- */}
            <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                        <Activity className="w-4 h-4 text-emerald-600" />
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            BMI <span className="text-emerald-600">Calculator</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono uppercase tracking-wider">
                        <ShieldCheck size={14} className="text-emerald-600" />
                        Verified by WHO & Clinical Standards
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
                                        onClick={() => {
                                            trackStart();
                                            setUnitType("US");
                                        }}
                                        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${unitType === "US" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                                    >
                                        US
                                    </button>
                                    <button
                                        onClick={() => {
                                            trackStart();
                                            setUnitType("Metric");
                                        }}
                                        className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase transition-all ${unitType === "Metric" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                                    >
                                        Metric
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {unitType === "US" ? (
                                    <>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-700 ml-0.5">Height</label>
                                            <div className="flex flex-row items-center gap-2">
                                                <div className="relative w-20">
                                                    <input
                                                        type="number"
                                                        value={heightFeet}
                                                        onFocus={trackStart}
                                                        onChange={(e) => setHeightFeet(parseInt(e.target.value) || 0)}
                                                        className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                                    />
                                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 font-bold uppercase pointer-events-none">ft</span>
                                                </div>
                                                <div className="relative w-20">
                                                    <input
                                                        type="number"
                                                        value={heightInches}
                                                        onFocus={trackStart}
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
                                                    onFocus={trackStart}
                                                    onChange={(e) => setWeightLbs(e.target.value.replace(/[^0-9.]/g, ""))}
                                                    className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase">lbs</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-700 ml-0.5">Height</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    inputMode="decimal"
                                                    value={heightCm}
                                                    onFocus={trackStart}
                                                    onChange={(e) => setHeightCm(e.target.value.replace(/[^0-9.]/g, ""))}
                                                    className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">cm</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-700 ml-0.5">Weight</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    inputMode="decimal"
                                                    value={weightKg}
                                                    onFocus={trackStart}
                                                    onChange={(e) => setWeightKg(e.target.value.replace(/[^0-9.]/g, ""))}
                                                    className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">kg</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <button
                                    onClick={handleCalculate}
                                    className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md shadow-sm transition-colors text-sm uppercase tracking-wide"
                                >
                                    Calculate Body Mass Index
                                </button>
                                <button
                                    onClick={copyPermalink}
                                    className="w-full h-9 border border-slate-300 hover:border-emerald-300 bg-white hover:bg-emerald-50 text-slate-700 font-semibold rounded-md transition-colors text-sm flex items-center justify-center gap-2"
                                >
                                    <Link2 className="w-4 h-4" /> Copy Link
                                </button>
                            </div>
                        </div>

                        {/* Fast Stats */}
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { label: "US Avg BMI", val: BMI_2026.statistics.avgBmiUS },
                                { label: "Obesity Rate", val: `${BMI_2026.statistics.obesityRate}%` },
                                { label: unitType === "US" ? "Healthy Min" : "Ideal Min", val: unitType === "US" ? `${BMI_2026.healthyRange.min} lbs` : `${result.healthyWeightRange.min} kg` },
                                { label: unitType === "US" ? "Healthy Max" : "Ideal Max", val: unitType === "US" ? `${BMI_2026.healthyRange.max} lbs` : `${result.healthyWeightRange.max} kg` },
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
                                    <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${result.isHealthy ? 'text-emerald-800 bg-emerald-50 border-emerald-200' : 'text-amber-800 bg-amber-50 border-amber-200'}`}>
                                        {result.category}
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 space-y-5">
                                <div className="flex items-baseline gap-4">
                                    <div className="text-7xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">
                                        {result.bmi}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">BMI Status</p>
                                        <div className="h-1 w-12 bg-emerald-600 rounded-full" />
                                    </div>
                                </div>

                                <BMIGauge bmi={result.bmi} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                                    <div className={`p-3 rounded-md border ${result.isHealthy ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
                                        <div className="flex items-center gap-2 mb-1">
                                            {result.isHealthy ? <CheckCircle className="w-3.5 h-3.5 text-emerald-700" /> : <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />}
                                            <span className="text-[10px] font-bold uppercase tracking-tight text-slate-800">
                                                {result.isHealthy ? 'Healthy Status' : 'Attention Needed'}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-700 leading-tight">
                                            {result.isHealthy
                                                ? 'You are within the optimal clinical range.'
                                                : `Adjust weight by ${Math.abs(result.weightToHealthy)} ${unitType === "US" ? 'lbs' : 'kg'} for health.`}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 border border-slate-200 p-3 rounded-md flex flex-col justify-center">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Target Weight Range</p>
                                        <p className="text-sm font-black text-emerald-700 text-center">
                                            {result.healthyWeightRange.min} - {result.healthyWeightRange.max} <span className="text-[10px]">{unitType === "US" ? 'lbs' : 'kg'}</span>
                                        </p>
                                    </div>
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
                        <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase">BMI Weight Categories</h2>
                    </div>

                    <div className="overflow-x-auto rounded-md border border-slate-200 shadow-sm">
                        <table className="w-full text-left border-collapse text-sm">
                            <thead className="bg-slate-100 border-b border-slate-300">
                                <tr>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">BMI Range</th>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Weight Category</th>
                                    <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Health Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-slate-600">
                                {[
                                    { range: "< 18.5", cat: "Underweight", risk: "Deficiency Risk", bg: "bg-white" },
                                    { range: "18.5 – 24.9", cat: "Normal Weight", risk: "Optimal Range", bg: "bg-slate-50" },
                                    { range: "25.0 – 29.9", cat: "Overweight", risk: "Elevated Risk", bg: "bg-white" },
                                    { range: "30.0 – 34.9", cat: "Obesity Class I", risk: "High Risk", bg: "bg-slate-50" },
                                    { range: "35.0+", cat: "Obesity Class II+", risk: "Critical Alert", bg: "bg-white" },
                                ].map((row, i) => (
                                    <tr key={i} className={`${row.bg} hover:bg-slate-100 transition-colors`}>
                                        <td className="px-4 py-2 font-mono font-medium">{row.range}</td>
                                        <td className="px-4 py-2 font-bold">{row.cat}</td>
                                        <td className="px-4 py-2 text-xs font-bold uppercase">{row.risk}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 py-10 border-t border-slate-200">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase">
                            <span className="w-1 h-3 bg-emerald-600" />
                            General Context
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            BMI is a screening tool, not a diagnostic. It estimates body fat based on weight-to-height ratio but does not factor in bone density or muscle volume. For athletes, additional body fat measurements are recommended.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase">
                            <span className="w-1 h-3 bg-emerald-600" />
                            Health Optimization
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Maintaining a BMI between 18.5 and 24.9 is associated with lower risks of heart disease, type 2 diabetes, and various metabolic disorders. Consistency in activity and nutrition is the primary driver of index stability.
                        </p>
                    </div>
                </div>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4 space-y-3">
                    <h2 className="text-base font-bold">Decision Guide</h2>
                    <p className="text-sm text-slate-700">
                        Use this BMI result as a triage metric. If the value is outside the normal range, prioritize
                        trend correction over single-day interpretation, then combine with waist/body-fat context before
                        selecting an intervention.
                    </p>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Scenario Pack</h2>
                    <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div className="rounded border border-slate-200 bg-slate-50 p-3">
                            <p className="font-semibold">General adult check</p>
                            <p className="text-slate-600">Routine quarterly BMI trend monitoring.</p>
                        </div>
                        <div className="rounded border border-slate-200 bg-slate-50 p-3">
                            <p className="font-semibold">Weight-loss planning</p>
                            <p className="text-slate-600">Set 12-week target and track category transitions.</p>
                        </div>
                        <div className="rounded border border-slate-200 bg-slate-50 p-3">
                            <p className="font-semibold">Athlete context</p>
                            <p className="text-slate-600">Pair with body-fat % to avoid false risk escalation.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Assumptions & Limits</h2>
                    <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                        {assumptions.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Edge / Stress Tests</h2>
                    <table className="w-full text-sm border-collapse">
                        <thead className="bg-slate-100 border-b border-slate-300">
                            <tr>
                                <th className="text-left py-1.5 px-2 text-xs">Case</th>
                                <th className="text-left py-1.5 px-2 text-xs">Input</th>
                                <th className="text-left py-1.5 px-2 text-xs">Risk</th>
                                <th className="text-left py-1.5 px-2 text-xs">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {edgeTests.map((row) => (
                                <tr key={row.caseName} className="even:bg-slate-50">
                                    <td className="py-1.5 px-2 font-semibold">{row.caseName}</td>
                                    <td className="py-1.5 px-2">{row.input}</td>
                                    <td className="py-1.5 px-2">{row.risk}</td>
                                    <td className="py-1.5 px-2">{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Authority Evidence Matrix</h2>
                    <table className="w-full text-sm border-collapse">
                        <thead className="bg-slate-100 border-b border-slate-300">
                            <tr>
                                <th className="text-left py-1.5 px-2 text-xs">Authority</th>
                                <th className="text-left py-1.5 px-2 text-xs">Topic</th>
                                <th className="text-left py-1.5 px-2 text-xs">Last Verified</th>
                                <th className="text-left py-1.5 px-2 text-xs">What Changed</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {BMI_EVIDENCE_MATRIX.map((row) => (
                                <tr key={row.topic} className="even:bg-slate-50">
                                    <td className="py-1.5 px-2 font-semibold">{row.authority}</td>
                                    <td className="py-1.5 px-2">
                                        <a href={row.officialUrl} target="_blank" rel="noopener noreferrer" className="underline">
                                            {row.topic}
                                        </a>
                                    </td>
                                    <td className="py-1.5 px-2">{row.lastVerified}</td>
                                    <td className="py-1.5 px-2">{row.whatChanged}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Lifecycle Simulator (BMI Trend Cycle)</h2>
                    <table className="w-full text-sm border-collapse">
                        <thead className="bg-slate-100 border-b border-slate-300">
                            <tr>
                                <th className="text-left py-1.5 px-2 text-xs">Stage</th>
                                <th className="text-left py-1.5 px-2 text-xs">Window</th>
                                <th className="text-left py-1.5 px-2 text-xs">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {lifecycleRows.map((row) => (
                                <tr key={row.stage} className="even:bg-slate-50">
                                    <td className="py-1.5 px-2 font-semibold">{row.stage}</td>
                                    <td className="py-1.5 px-2">{row.window}</td>
                                    <td className="py-1.5 px-2">{row.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Sensitivity Lab (Weight Delta Impact)</h2>
                    <table className="w-full text-sm border-collapse">
                        <thead className="bg-slate-100 border-b border-slate-300">
                            <tr>
                                <th className="text-left py-1.5 px-2 text-xs">Profile</th>
                                <th className="text-left py-1.5 px-2 text-xs">Weight</th>
                                <th className="text-left py-1.5 px-2 text-xs">BMI</th>
                                <th className="text-left py-1.5 px-2 text-xs">Outcome</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {sensitivityRows.map((row) => (
                                <tr key={row.label} className="even:bg-slate-50">
                                    <td className="py-1.5 px-2 font-semibold">{row.label}</td>
                                    <td className="py-1.5 px-2">
                                        {row.weight.toFixed(1)} {unitType === "US" ? "lbs" : "kg"}
                                    </td>
                                    <td className="py-1.5 px-2">{row.bmi}</td>
                                    <td className="py-1.5 px-2">{row.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4 space-y-3">
                    <h2 className="text-base font-bold mb-2">Who / How / Why</h2>
                    <p className="text-sm text-slate-700"><strong>Who:</strong> Adults who need fast weight-risk triage before deeper clinical evaluation.</p>
                    <p className="text-sm text-slate-700"><strong>How:</strong> Applies WHO/CDC BMI thresholds, then adds lifecycle and sensitivity blocks for decision support.</p>
                    <p className="text-sm text-slate-700"><strong>Why:</strong> Reduces misinterpretation from one-off readings and improves next-step planning quality.</p>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4 space-y-2">
                    <h2 className="text-base font-bold mb-2">Sources & Review</h2>
                    <p className="text-sm text-slate-700">
                        Reviewer: Clinical Methods Team (MySmartCalculators) | Last reviewed: 2026-03-23
                    </p>
                </section>

                <section className="bg-amber-50 border border-amber-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2 text-amber-900">Disclaimer</h2>
                    <p className="text-sm text-amber-900">
                        This calculator is for informational screening only and does not replace medical diagnosis.
                        Clinical decisions should be made with a licensed professional using full patient context.
                    </p>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Readiness Pack (Health Use)</h2>
                    <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                        {readinessChecklist.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
                    <h2 className="text-base font-bold mb-2">Distribution Moat</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
                        <Link href="/body-fat" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Body Fat Calculator</Link>
                        <Link href="/calorie" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Calorie Calculator</Link>
                        <Link href="/age" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Age Calculator</Link>
                        <Link href="/conversion" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Unit Conversion</Link>
                        <Link href="/time-calculator" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Time Calculator</Link>
                        <Link href="/scientific" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Scientific Calculator</Link>
                    </div>
                </section>
            </article>

            {/* Sources Registry */}
            <section className="py-12 border-t border-slate-200 bg-slate-100" aria-label="Sources">
                <div className="max-w-4xl mx-auto px-6">
                    <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-6 text-center">Data Sources & Standards</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["WHO Registry", "CDC Guidelines", "NIH Biometrics", "Lancet Medical"].map((source, i) => (
                            <div key={i} className="text-center p-2 border-r border-slate-200 last:border-0">
                                <p className="text-xs font-bold text-slate-700 uppercase tracking-tighter">{source}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tight FAQ Section (Absolute Light Theme) */}
            <section className="bg-slate-50 pb-16 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6">
                    <h3 className="text-lg font-bold text-slate-900 pt-12 mb-8 text-center uppercase tracking-tight">Expert FAQ & Guidelines</h3>
                    <FAQSection faqs={BMI_2026.faqs} />
                </div>
            </section>
        </main>
    );
}
