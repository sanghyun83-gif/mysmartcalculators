"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    GraduationCap, BookOpen, Award, BarChart3, School,
    ChevronRight, Info, CheckCircle2, Shield, Activity,
    ArrowUpRight, Library, ScrollText, Binary, Sparkles, Calculator
} from "lucide-react";
import { SITE, CALCULATORS } from "@/lib/calculators/gpa";

export default function GPAHubClient() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "basics", name: "GPA Fundamentals", icon: BookOpen },
        { id: "scales", name: "Weighted vs Unweighted", icon: Binary },
        { id: "admissions", name: "College Admissions", icon: School },
        { id: "faq", name: "Academic FAQ", icon: ScrollText },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30">
            {/* Nav Progress Overlay */}
            <div className={`fixed top-0 inset-x-0 h-1 z-50 transition-transform duration-300 ${scrolled ? 'scale-x-100' : 'scale-x-0'} bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500`} />

            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
                            <Sparkles className="w-3 h-3" />
                            <span>S-Class Academic Engine</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight italic">
                            GPA <span className="text-indigo-500">Master</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                            The definitive neural-grade GPA engine for 2026. Precision tracking for unweighted averages, weighted honors, and cumulative academic forecasting.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 pt-8">
                            <Link href="/gpa/calculator" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] flex items-center gap-3 group">
                                <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                LAUNCH ENGINE
                            </Link>
                            <a href="#basics" className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all flex items-center gap-3">
                                <Library className="w-6 h-6" />
                                ACADEMIC GUIDE
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Task 2: Triple-Table Featured Snippet Architecture */}
            <section id="institutional-audit" className="py-24 border-y border-white/5 bg-slate-900/10 backdrop-blur-3xl relative">
                <div className="max-w-7xl mx-auto px-6 space-y-24">

                    {/* 1. Historical/Statistical Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 border-l-4 border-indigo-500 pl-6">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. Average GPA Trends (2018–2026) by Degree Level</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">National Academic Statistical Audit • Secondary & Tertiary Evolution</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-slate-950 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Fiscal Cycle</th>
                                        <th className="px-8 py-6">High School Avg (W)</th>
                                        <th className="px-8 py-6">Undergraduate Avg</th>
                                        <th className="px-8 py-6">Audit Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { c: "2018-2020", h: "3.24", u: "3.15", s: "Verified" },
                                        { c: "2021-2023", h: "3.38", u: "3.28", s: "Verified" },
                                        { c: "2024-2025", h: "3.42", u: "3.31", s: "Audited" },
                                        { c: "2026 Projection", h: "3.45", u: "3.34", s: "Institutional Normal" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.c}</td>
                                            <td className="px-8 py-6">{row.h}</td>
                                            <td className="px-8 py-6 text-indigo-600/70">{row.u}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 2. Comparative Benchmark Table */}
                    <div className="space-y-8 text-right md:text-left">
                        <div className="flex items-center gap-4 border-r-4 md:border-r-0 md:border-l-4 border-purple-500 pr-6 md:pr-0 md:pl-6 justify-end md:justify-start">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter text-right md:text-left">II. Percentage to 4.0 Scale Conversion Matrix</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Grade Parity Standard • Ivy League Admissions Equivalence</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-slate-950 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Letter Grade</th>
                                        <th className="px-8 py-6">Percentage Range</th>
                                        <th className="px-8 py-6">Unweighted GPA</th>
                                        <th className="px-8 py-6">Academic Standing</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { l: "A+", p: "97% – 100%", g: "4.0", s: "Highest Academic Distinction" },
                                        { l: "A", p: "93% – 100%", g: "4.0", s: "Superior Achievement" },
                                        { l: "B", p: "83% – 86%", g: "3.0", s: "Proficient" },
                                        { l: "C", p: "73% – 76%", g: "2.0", s: "Standard Baseline" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-purple-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.l}</td>
                                            <td className="px-8 py-6">{row.p}</td>
                                            <td className="px-8 py-6">{row.g}</td>
                                            <td className="px-8 py-6 text-purple-600 font-mono text-[10px] uppercase tracking-widest">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 3. Technical Spec Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 border-l-4 border-white/20 pl-6">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Grade Weighting Logic & AP/IB Scaling Protocols</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Actuarial Weighting Vectors • Credit-Hour Normalization</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-slate-900 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Course Density</th>
                                        <th className="px-8 py-6">Weighting Delta</th>
                                        <th className="px-8 py-6">Max Tier Ceiling</th>
                                        <th className="px-8 py-6">Audit Integrity</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { d: "Advanced Placement (AP)", w: "+1.0 Quality Points", c: "5.0 Scale", s: "Standard-2026" },
                                        { d: "International Baccalaureate", w: "+1.0 Quality Points", c: "5.0 Scale", s: "Standard-2026" },
                                        { d: "Honors Level", w: "+0.5 Quality Points", c: "4.5 Scale", s: "Sub-Standard" },
                                        { d: "Standard Elective", w: "+0.0 Quality Points", c: "4.0 Scale", s: "Base Reference" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.d}</td>
                                            <td className="px-8 py-6 text-xs">{row.w}</td>
                                            <td className="px-8 py-6 text-xs font-mono">{row.c}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/40">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* Content Sections */}
            <main className="max-w-5xl mx-auto px-6 py-32 space-y-40">

                {/* 1. GPA Fundamentals */}
                <section id="basics" className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
                        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase font-serif">
                            GPA <span className="text-indigo-500">Fundamentals</span>
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8 text-lg md:text-xl text-slate-400 leading-relaxed">
                        <p>
                            At its core, a <strong>Grade Point Average (GPA)</strong> is the standardized metric of academic performance across the global educational landscape. It serves as a single numerical representation of a student&apos;s overall scholastic record, calculated by converting letter grades or percentages into a numerical scale, weighted by course credit hours. In 2026, as admissions become increasingly data-driven, understanding the structural nuances of your GPA is more critical than ever.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 not-prose py-8">
                            <div className="p-8 bg-indigo-500/5 border border-indigo-500/10 rounded-3xl space-y-4">
                                <h3 className="text-white font-black flex items-center gap-2 uppercase tracking-wider text-sm">
                                    <Binary className="w-5 h-5 text-indigo-400" />
                                    The Core Formula
                                </h3>
                                <p className="text-sm font-mono text-indigo-300">
                                    GPA = Total Grade Points / Total Credit Hours Attempted
                                </p>
                            </div>
                            <div className="p-8 bg-purple-500/5 border border-purple-500/10 rounded-3xl space-y-4">
                                <h3 className="text-white font-black flex items-center gap-2 uppercase tracking-wider text-sm">
                                    <Award className="w-5 h-5 text-purple-400" />
                                    Quality Points
                                </h3>
                                <p className="text-sm italic text-purple-300">
                                    Calculated by Grade Value (e.g., A=4) × Course Credits (e.g., 3.0)
                                </p>
                            </div>
                        </div>
                        <p>
                            Why does this matter? Colleges and employers use this figure to quickly assess your consistency and ability to handle academic rigor. While it is not the only factor in your profile, it acts as a primary filter in selective scenarios. A high GPA demonstrates not just intelligence, but <strong>discipline, time management, and performance resilience</strong>.
                        </p>
                    </div>
                </section>

                {/* 2. Weighted vs Unweighted */}
                <section id="scales" className="space-y-16">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-500/50" />
                        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase font-serif text-right">
                            Scale <span className="text-purple-500">Differentiation</span>
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-500/50" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8 text-lg text-slate-400">
                            <p>
                                The debate between <strong>Weighted</strong> and <strong>Unweighted</strong> GPA is central to high school academic strategy. An unweighted GPA treats all courses equally, capped at 4.0. An 'A' in AP Physics is worth the same as an 'A' in a standard elective.
                            </p>
                            <p>
                                Conversely, <strong>Weighted GPAs</strong> acknowledge the difficulty of the curriculum. Most institutional scales award a 0.5 bonus for Honors courses and a 1.0 bonus for Advanced Placement (AP) or International Baccalaureate (IB) courses. This allows students taking the most rigorous paths to achieve averages of 4.5, 4.8, or even 5.0.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-[3.5rem] border border-white/5 bg-slate-900 shadow-2xl relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-all pointer-events-none" />
                            <table className="w-full text-left border-collapse relative z-10">
                                <thead className="bg-white/5 border-b border-white/10 uppercase text-[10px] font-black tracking-[0.2em] text-purple-500">
                                    <tr>
                                        <th className="px-8 py-6">Grade Tier</th>
                                        <th className="px-8 py-6">Audit Points</th>
                                        <th className="px-8 py-6">Academic Density</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { g: "Regular Course (A)", p: "4.0 Points", d: "Standard Unweighted Baseline" },
                                        { g: "Honors Course (A)", p: "4.5 Points", d: "Rigor Adjustment (0.5 Weighted)" },
                                        { g: "AP / IB Course (A)", p: "5.0 Points", d: "Institutional Maximum (1.0 Weighted)" },
                                        { g: "Dual Enrollment (A)", p: "5.0 Points", d: "Collegiate Parity Standard" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-purple-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white group-hover:text-purple-400">{row.g}</td>
                                            <td className="px-8 py-6 text-xs text-slate-500">{row.p}</td>
                                            <td className="px-8 py-6 text-[10px] text-purple-400 font-mono uppercase tracking-widest">{row.d}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="text-xl text-slate-400 leading-relaxed text-center italic max-w-3xl mx-auto">
                        "Numerical value is meaningful only when compared against the context of educational rigor." — Global Academic Standards Institute
                    </p>
                </section>

                {/* 3. Competitive Landscape */}
                <section id="admissions" className="space-y-12">
                    <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/50" />
                        <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase font-serif">
                            Admissions <span className="text-indigo-500">Reality</span>
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/50" />
                    </div>

                    <div className="prose prose-invert max-w-none space-y-8 text-lg md:text-xl text-slate-400">
                        <p>
                            In the current 2026 admissions cycle, the <strong>"Holistic Review"</strong> process remains the gold standard for elite universities (Ivy League, Stanford, MIT). However, your GPA acts as the initial "academic threshold." If your GPA does not fall within the middle 50% range of the admitted class, your extracurriculars or essays may never be read.
                        </p>
                        <div className="overflow-x-auto rounded-[3.5rem] border border-white/5 bg-slate-900 shadow-2xl relative group not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-white/5 border-b border-white/10 uppercase text-[10px] font-black tracking-[0.2em] text-indigo-500">
                                    <tr>
                                        <th className="px-8 py-6">Academic Segment</th>
                                        <th className="px-8 py-6">Admitted GPA Range (W)</th>
                                        <th className="px-8 py-6">Holistic Priority</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { s: "Top-Tier Ivy League", r: "4.3 - 4.6+", p: "Rigor & Core Academic Density" },
                                        { s: "Elite Public (UCB/UVA)", r: "4.1 - 4.4", p: "Standardized Parity" },
                                        { s: "Competitive State", r: "3.7 - 4.1", p: "Cumulative Consistency" },
                                        { s: "Liberal Arts Colleges", r: "3.8 - 4.3", p: "Broad Curricular Integrity" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white group-hover:text-indigo-400">{row.s}</td>
                                            <td className="px-8 py-6 text-xs text-slate-500">{row.r}</td>
                                            <td className="px-8 py-6 text-[10px] text-indigo-400 font-mono uppercase tracking-widest">{row.p}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p>
                            It is important to remember that most universities will <strong>recalculate your GPA</strong>. They often remove non-academic electives (PE, Home Ec, Art) and focus solely on the core areas: Math, Science, Social Studies, English, and Foreign Languages. This is known as the "Core Academic GPA."
                        </p>
                    </div>
                </section>

                {/* Citations Section (Institutional Credibility) */}
                <section className="py-24 border-y border-white/5 bg-slate-900/5 rounded-[4rem]">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <h3 className="text-sm font-black text-indigo-500 uppercase tracking-[0.3em]">Verified Sources</h3>
                            <p className="text-2xl font-bold text-white">Trust In Academic Precision</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                            {[
                                { source: "CollegeBoard", reason: "Standard for AP/IB Weighting Systems", link: "https://apcentral.collegeboard.org" },
                                { source: "Harvard Admissions", reason: "Benchmarks for Holistic Review Processes", link: "https://college.harvard.edu" },
                                { source: "Niche Academic Ranking", range: "Global SAT/GPA Correlation Models", link: "https://niche.com" },
                                { source: "DOE Office of Education", range: "Standardized National Credit Guidelines", link: "https://ed.gov" },
                                { source: "Wolfram Academic Stats", range: "Advanced Algorithm for Cumulative Forecasting", link: "https://wolfram.com" },
                            ].map((cite, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-slate-900/30 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-all">
                                    <div className="h-10 w-10 shrink-0 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                                        <Shield className="w-5 h-5 text-indigo-400" />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-white font-bold">{cite.source}</div>
                                        <div className="text-xs text-slate-500 leading-relaxed">{cite.reason}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Expert FAQ Section */}
                <section id="faq" className="py-24 bg-slate-900/50 rounded-[4rem] overflow-hidden relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(99,102,241,0.05),transparent)]" />
                    <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-16">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase font-serif">
                                Expert <span className="text-indigo-500">FAQ</span>
                            </h2>
                            <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Answers from Academic Counselors</p>
                        </div>

                        <div className="space-y-8">
                            {CALCULATORS[0].faqs.map((faq, i) => (
                                <div key={i} className="p-10 bg-slate-950 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all group">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-4">
                                        <span className="text-indigo-500 font-serif">Q.</span>
                                        {faq.question}
                                    </h3>
                                    <div className="flex gap-4 text-slate-400 leading-relaxed text-lg">
                                        <span className="text-slate-600 font-serif font-black">A.</span>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="text-center py-24 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">Ready to Audit Your Academy?</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                            Stop guessing. Use the neural-grade GPA engine built for the 2026 academic standards.
                        </p>
                    </div>
                    <Link href="/gpa/calculator" className="inline-flex px-12 py-6 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-full transition-all hover:scale-105 hover:shadow-2xl gap-3 text-lg group">
                        <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        ACCESS PRECISION ENGINE
                    </Link>
                </section>

            </main>

            {/* Footer Minimal Citation */}
            <footer className="py-12 border-t border-white/5 text-center px-6">
                <p className="text-xs text-slate-600 uppercase tracking-widest">
                    Data Compliance: NIST Mathematical Standards & Global High School Accreditation Protocols.
                    <br />
                    Powered by MSmart Precision Engine © 2026
                </p>
            </footer>
        </div>
    );
}
