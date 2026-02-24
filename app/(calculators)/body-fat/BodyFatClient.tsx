"use client";

import { useState } from "react";
import {
    Scale, ShieldCheck, Zap, Microscope, Activity, Target
} from "lucide-react";
import {
    BODY_FAT_2026,
    calculateBodyFat,
    getBodyFatCategory
} from "@/lib/calculators/body-fat";

// --- Components ---

function BodyFatGauge({ percentage }: { percentage: number }) {
    const maxVal = 40;
    const pos = Math.min(Math.max((percentage / maxVal) * 100, 0), 100);

    return (
        <div className="space-y-2 pt-2" aria-hidden="true">
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                <span>Lean</span>
                <span>Fitness</span>
                <span>Over</span>
            </div>
            <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden flex border border-slate-200">
                <div className="bg-emerald-400/40 h-full w-[35%]" />
                <div className="bg-amber-400/40 h-full w-[25%]" />
                <div className="bg-rose-400/40 h-full w-[40%]" />

                <div
                    className="absolute top-0 bottom-0 w-1 bg-slate-900 z-10 transition-all duration-1000 ease-out"
                    style={{ left: `${pos}%` }}
                >
                    <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-1 h-3 bg-slate-900 rounded-sm" />
                </div>
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

export default function BodyFatClient() {
    const [gender, setGender] = useState<'male' | 'female'>('male');
    const [height, setHeight] = useState("175");
    const [waist, setWaist] = useState("85");
    const [neck, setNeck] = useState("38");
    const [hip, setHip] = useState("95");

    const result = (() => {
        const h = parseFloat(height) || 0;
        const w = parseFloat(waist) || 0;
        const n = parseFloat(neck) || 0;
        const hipVal = parseFloat(hip) || 0;

        if (h > 0 && w > 0 && n > 0) {
            const percentage = calculateBodyFat(gender, h, w, n, gender === 'female' ? hipVal : undefined);
            const category = getBodyFatCategory(gender, percentage);
            return { percentage, category };
        }
        return { percentage: 0, category: { label: "Enter Details", color: "text-slate-400", bg: "bg-slate-50" } };
    })();

    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                        <Activity className="w-4 h-4 text-emerald-600" />
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                            Body Fat <span className="text-emerald-600">Calculator</span>
                        </h1>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-0.5">
                        <ShieldCheck className="w-3 h-3 text-emerald-600" />
                        Professional Fitness Standard 2026
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 space-y-4">
                        <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden">
                            <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between">
                                <h2 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Global Parameters</h2>
                                <Target className="w-3 h-3 text-slate-400" />
                            </div>

                            <div className="p-4 space-y-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tighter">Gender</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {(['male', 'female'] as const).map((g) => (
                                            <button
                                                key={g}
                                                onClick={() => setGender(g)}
                                                className={`h-9 rounded-md text-xs font-bold uppercase transition-all ${gender === g ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50'}`}
                                            >
                                                {g}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tighter">Height</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                inputMode="decimal"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value.replace(/[^0-9.]/g, ""))}
                                                className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">cm</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tighter">Waist</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                inputMode="decimal"
                                                value={waist}
                                                onChange={(e) => setWaist(e.target.value.replace(/[^0-9.]/g, ""))}
                                                className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">cm</span>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tighter">Neck</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                inputMode="decimal"
                                                value={neck}
                                                onChange={(e) => setNeck(e.target.value.replace(/[^0-9.]/g, ""))}
                                                className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                            />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">cm</span>
                                        </div>
                                    </div>
                                    {gender === 'female' && (
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tighter">Hip</label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    inputMode="decimal"
                                                    value={hip}
                                                    onChange={(e) => setHip(e.target.value.replace(/[^0-9.]/g, ""))}
                                                    className="w-full h-10 px-3 bg-white border border-slate-300 rounded-md text-sm font-bold text-slate-900 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 outline-none transition-all"
                                                />
                                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-[10px] uppercase pointer-events-none">cm</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 rounded-md font-bold uppercase tracking-widest text-xs shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2 group">
                                    <Scale className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                    Calculate Body Fat
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        <div className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden border-t-4 border-t-emerald-600">
                            <div className="bg-slate-50 border-b border-slate-200 p-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Health Outcome</h2>
                                    <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${result.category.bg} ${result.category.color} border-current/20`}>
                                        {result.category.label}
                                    </div>
                                </div>
                                <div className="mt-4 flex items-baseline gap-2">
                                    <span className="text-5xl font-black tracking-tighter text-slate-900">{result.percentage}%</span>
                                    <span className="text-sm font-bold text-slate-400 uppercase tracking-tighter">Body Fat</span>
                                </div>
                            </div>

                            <div className="p-4 bg-white space-y-4">
                                <BodyFatGauge percentage={result.percentage} />

                                <div className="grid grid-cols-2 gap-3 pt-2">
                                    <div className="p-3 bg-slate-50 rounded border border-slate-100 flex flex-col items-center">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Reference</span>
                                        <span className="text-sm font-black text-slate-700 uppercase">US Navy</span>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded border border-slate-100 flex flex-col items-center">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 text-center">Standard</span>
                                        <span className="text-sm font-black text-slate-700 uppercase">ACE Ranges</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 space-y-12">
                    <div className="border-t border-slate-200 pt-10">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-1.5 h-6 bg-emerald-600 rounded-sm" />
                            <h2 className="text-xl font-bold text-slate-900 tracking-tight uppercase">Health Benchmarks</h2>
                        </div>

                        <div className="overflow-x-auto rounded-md border border-slate-200 shadow-sm">
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="bg-slate-100 border-b border-slate-300">
                                    <tr>
                                        <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Category</th>
                                        <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs text-center">Men (%)</th>
                                        <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs text-center">Women (%)</th>
                                        <th className="px-4 py-2 font-bold text-slate-700 uppercase tracking-tighter text-xs">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 text-slate-600">
                                    {[
                                        { cat: "Essential Fat", m: "2-5%", w: "10-13%", desc: "Baseline" },
                                        { cat: "Athletes", m: "6-13%", w: "14-20%", desc: "High Fitness" },
                                        { cat: "Fitness", m: "14-17%", w: "21-24%", desc: "Optimal Health" },
                                        { cat: "Average", m: "18-24%", w: "25-31%", desc: "Healthy Range" },
                                        { cat: "Obese", m: "25%+", w: "32%+", desc: "Review Needed" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 even:bg-slate-50/50">
                                            <td className="px-4 py-2 font-bold text-slate-900 whitespace-nowrap">{row.cat}</td>
                                            <td className="px-4 py-2 font-mono text-center">{row.m}</td>
                                            <td className="px-4 py-2 font-mono text-center">{row.w}</td>
                                            <td className="px-4 py-2 text-xs font-bold uppercase">{row.desc}</td>
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
                                Composition Analysis
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed italic font-medium">
                                Body fat percentage represents the true makeup of your health. While weight only accounts for total mass, body fat analysis separates fat tissue from muscle and bone density.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 uppercase">
                                <Microscope className="w-4 h-4 text-emerald-600" />
                                Practical Accuracy
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed italic font-medium">
                                Using standard measurement methods, we estimate body density by checking key measurements against established models for a reliable, everyday fitness guide.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-100 rounded-xl p-8 border border-slate-200">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-black text-slate-900 uppercase">Health Guide</h2>
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">Common Questions & Answers</p>
                        </div>
                        <FAQSection faqs={BODY_FAT_2026.faqs} />
                    </div>
                </div>
            </div>

        </main>
    );
}
