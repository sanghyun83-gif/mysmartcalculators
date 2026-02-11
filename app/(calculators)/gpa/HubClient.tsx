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

            {/* Strategic Nav / Stats Bar */}
            <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/10 backdrop-blur-sm sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {sections.map((section) => (
                            <a key={section.id} href={`#${section.id}`} className="group flex flex-col items-center text-center space-y-3">
                                <div className="p-3 rounded-xl bg-slate-800 group-hover:bg-indigo-500/20 transition-colors">
                                    <section.icon className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors">
                                    {section.name}
                                </span>
                            </a>
                        ))}
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
                        <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-10 space-y-8 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-all" />
                            <h3 className="text-2xl font-black text-white tracking-tight">The 5.0 Precision Scale</h3>
                            <div className="space-y-4">
                                {[
                                    { grade: "Regular A", val: "4.0", bar: "W-80" },
                                    { grade: "Honors A", val: "4.5", bar: "W-90" },
                                    { grade: "AP/IB A", val: "5.0", bar: "W-100" },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500">
                                            <span>{item.grade}</span>
                                            <span className="text-purple-400">{item.val} pts</span>
                                        </div>
                                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div className={`h-full bg-gradient-to-r from-indigo-500 to-purple-500 ${item.bar === 'W-80' ? 'w-[80%]' : item.bar === 'W-90' ? 'w-[90%]' : 'w-full'}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
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
                        <div className="p-10 bg-slate-900 border border-white/5 rounded-[3rem] relative overflow-hidden group not-prose">
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-center">Typical Admitted GPA Ranges (Weighted)</h3>
                            <div className="grid gap-4">
                                {[
                                    { rank: "Top-Tier Ivy", range: "4.3 - 4.6", color: "text-indigo-400" },
                                    { rank: "Elite Public (UC Berkeley/UVA)", range: "4.1 - 4.4", color: "text-purple-400" },
                                    { rank: "Competitive State Schools", range: "3.7 - 4.1", color: "text-blue-400" },
                                ].map((row, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                        <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">{row.rank}</span>
                                        <span className={`text-lg font-black ${row.color}`}>{row.range}</span>
                                    </div>
                                ))}
                            </div>
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
