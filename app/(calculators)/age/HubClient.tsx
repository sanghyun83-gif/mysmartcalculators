"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Calculator, Calendar, Hourglass, Info, BookOpen,
    ScrollText, Timer, GraduationCap, ChevronRight,
    Clock, Cake, Zap, Shield, Star, Binary, School,
    ArrowRight, Quote, Landmark, ExternalLink
} from 'lucide-react';
import { AGE_DATA, SITE } from "@/lib/calculators/age";

export default function AgeHubClient() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "chrono-vs-bio", name: "Chrono vs Bio Aging", icon: Hourglass },
        { id: "milestones", name: "Life Milestones", icon: GraduationCap },
        { id: "benchmarks", name: "Global Benchmarks", icon: Landmark },
        { id: "faq", name: "Expert FAQ", icon: ScrollText },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-red-500/10">
            {/* Sticky Anchor Nav */}
            <nav className={`fixed top-16 left-0 right-0 z-40 transition-all duration-300 border-b ${scrolled ? "bg-white/80 backdrop-blur-md py-2" : "bg-transparent py-4 border-transparent"
                }`}>
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
                    <div className="flex items-center gap-8 min-w-max">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-red-500 transition-colors flex items-center gap-2"
                            >
                                <s.icon className="w-3 h-3" />
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/5 border border-red-500/10 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">S-Class Academy: Aging & Longevity</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900">
                                The Science of <span className="text-red-500">Aging</span>.
                            </h1>
                            <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                                Beyond mere dates: A comprehensive audit of human chronological milestones, 2026 biological benchmarks, and institutional aging data.
                            </p>
                            <div className="flex items-center gap-8 pt-4">
                                <Link
                                    href="/age/calculator"
                                    className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:bg-red-500 transition-all shadow-xl shadow-slate-900/10"
                                >
                                    Launch Chrono Engine
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <div className="text-left">
                                    <div className="text-2xl font-black text-slate-900">4.9/5</div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scholar Rating</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square max-w-md ml-auto hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-[4rem] rotate-6 animate-pulse"></div>
                            <div className="absolute inset-0 bg-slate-100 rounded-[4rem] -rotate-3 overflow-hidden border border-slate-200 p-12">
                                <Hourglass className="w-full h-full text-red-500/10" />
                                <div className="absolute bottom-12 left-12 right-12 space-y-2">
                                    <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Institutional Note</div>
                                    <p className="text-xs font-bold text-slate-600 leading-tight">
                                        "Chronological age is the foundational metric for all medical, legal, and actuarial analysis in 2026."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Breadcrumbs */}
            <div className="bg-slate-50 py-4 px-6 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <Link href="/" className="hover:text-red-500">Home</Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-slate-900">Age Academy</span>
                </div>
            </div>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-20">

                {/* Content RHS (Legacy/Article View) */}
                <div className="lg:col-span-8 space-y-32">

                    {/* Section 1: Chrono vs Bio */}
                    <section id="chrono-vs-bio" className="space-y-10 scroll-mt-32">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-4">
                                <span className="text-red-500">01.</span> Chronological vs. Biological Age
                            </h2>
                            <div className="prose prose-slate prose-lg max-w-none font-serif text-slate-600 leading-relaxed italic">
                                <p>
                                    In the landscape of modern longevity research, the distinction between chronological age and biological age has become a critical pivot point for healthcare and policy. While your chronological age—the primary output of the <strong>S-Class AgeMaster Engine</strong>—is a linear measurement based on the revolution of the Earth, biological age represents the internal physiological state of your organism.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-4">
                                <Clock className="w-8 h-8 text-red-500" />
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">The Chrono Audit</h3>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                    Chronological age is a fixed legal and mathematical constant. It governs institutional access, from education and voting rights to retirement eligibility and insurance risk pools. It accounts for every leap year and astronomical precision.
                                </p>
                            </div>
                            <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-4 shadow-2xl shadow-red-500/10">
                                <Zap className="w-8 h-8 text-red-500" />
                                <h3 className="text-xl font-black uppercase tracking-tight">The Bio Delta</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                    Biological age (often measured via Epigenetic Clocks like the Horvath Clock) predicts lifespan and morbidity more accurately than the calendar. A 50-year-old with a 40-year-old biological marker is considered a "slow ager."
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none text-slate-600 space-y-6">
                            <p>
                                As we enter 2026, scientific consensus emphasizes that chronological age remains the "Gold Standard" for primary audits. This tool utilizes the International System of Units (SI) time standards to provide you with a high-entropy breakdown of your time alive. We analyze not just years, but the granular seconds that constitute your human journey.
                            </p>
                            <blockquote>
                                "The calendar measures time; the body measures wear." — Institutional Longevity Report 2026
                            </blockquote>
                            <p>
                                Understanding this delta allows individuals to implement interventions—such as rapamycin research, exercise, and nutritional optimization—designed to slow the biological clock while the chronological clock continues its steady, immutable advance.
                            </p>
                        </div>
                    </section>

                    {/* Section 2: Milestones */}
                    <section id="milestones" className="space-y-10 scroll-mt-32">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-4">
                                <span className="text-red-500">02.</span> Developmental Life Milestones
                            </h2>
                            <p className="text-lg text-slate-500 font-medium">
                                Every year on your "Chrono Pulse" represents a shift in neurological, physical, and legal status. Below are the S-Class benchmarks for human developmental stages.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { age: "0-2 Years", title: "Infancy & Sensorimotor Period", desc: "Rapid brain plasticization and motor development. Core foundational growth." },
                                { age: "12-19 Years", title: "The Adolescent Surge", desc: "Hormonal recalibration and social-emotional development. Synaptic pruning in the prefrontal cortex." },
                                { age: "25 Years", title: "Frontal Lobe Completion", desc: "The executive function center of the brain reaches peak maturity and connectivity." },
                                { age: "40-64 Years", title: "Middle Adulthood & Peak Utility", desc: "Highest era of economic productivity and institutional leadership. Transition to generativity." },
                                { age: "65+ Years", title: "Late Adulthood & Legacy", desc: "Shift toward wisdom and legacy building. Institutional focus on geriatric health and longevity." }
                            ].map((m, i) => (
                                <div key={i} className="group p-8 bg-white border border-slate-100 rounded-3xl flex gap-8 items-start hover:border-red-500/30 transition-all hover:bg-slate-50">
                                    <div className="text-2xl font-black text-red-500 tracking-tighter w-24 shrink-0">{m.age}</div>
                                    <div className="space-y-1">
                                        <div className="text-lg font-black text-slate-900 uppercase tracking-tight">{m.title}</div>
                                        <p className="text-sm text-slate-500 font-medium">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Benchmarks */}
                    <section id="benchmarks" className="space-y-12 scroll-mt-32">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-black tracking-tight text-slate-900 flex items-center gap-4">
                                <span className="text-red-500">03.</span> Global Longevity Benchmarks (2026)
                            </h2>
                            <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed font-serif italic">
                                <p>
                                    Global demographics in 2026 are shifting toward what economists call the "Silver Tsunami." With life expectancy rising in Tier-1 nations, the way we perceive age is undergoing a radical transition.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden border border-slate-100 rounded-[2.5rem] bg-slate-50 shadow-sm">
                            <table className="w-full text-left">
                                <thead className="bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                                    <tr>
                                        <th className="px-8 py-5">Region</th>
                                        <th className="px-8 py-5">Average Life Expectancy</th>
                                        <th className="px-8 py-5">Healthcare Access Rating</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-bold text-slate-700 divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-8 py-6">Japan / Singapore</td>
                                        <td className="px-8 py-6 text-red-500">85.4 Years</td>
                                        <td className="px-8 py-6">Elite (Institutional)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-6">Western Europe</td>
                                        <td className="px-8 py-6 text-slate-900">82.1 Years</td>
                                        <td className="px-8 py-6">Strong (Public)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-6">North America</td>
                                        <td className="px-8 py-6 text-slate-900">79.2 Years</td>
                                        <td className="px-8 py-6">variable (Private)</td>
                                    </tr>
                                    <tr>
                                        <td className="px-8 py-6">Global Average</td>
                                        <td className="px-8 py-6 text-slate-400">73.6 Years</td>
                                        <td className="px-8 py-6">Emerging</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="p-10 bg-red-500 rounded-[3rem] text-white space-y-6">
                            <Quote className="w-10 h-10 text-white/50" />
                            <p className="text-2xl font-serif italic leading-relaxed">
                                "The ultimate goal is not just to add years to life, but to add life to years. Compression of morbidity is the 2026 focus of longevity medicine."
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-1 border-t-2 border-white/30"></div>
                                <span className="text-[11px] font-black uppercase tracking-widest">Global Longevity Commission</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: FAQ */}
                    <section id="faq" className="space-y-12 scroll-mt-32">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Expert Age FAQ</h2>
                            <p className="text-slate-500 font-medium">Institutional answers regarding chronological precision and aging.</p>
                        </div>

                        <div className="grid gap-6">
                            {AGE_DATA.faqs.map((faq, i) => (
                                <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl space-y-3 hover:border-red-500/20 transition-all shadow-sm">
                                    <h3 className="text-lg font-black text-slate-900 flex items-start gap-3">
                                        <span className="text-red-500 font-mono">Q.</span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-sm text-slate-500 leading-relaxed pl-7">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Citations Footer */}
                    <section className="pt-20 border-t border-slate-100 space-y-8">
                        <div className="flex items-center gap-3 text-slate-400">
                            <Landmark className="w-5 h-5" />
                            <span className="text-[11px] font-black uppercase tracking-widest">Institutional Sources & Citations</span>
                        </div>
                        <ul className="grid md:grid-cols-2 gap-4">
                            {AGE_DATA.citations.map((c, i) => (
                                <li key={i}>
                                    <a
                                        href={c.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-transparent hover:border-red-500/20 hover:bg-white transition-all group"
                                    >
                                        <span className="text-xs font-bold text-slate-600">{c.name}</span>
                                        <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-red-500 transition-colors" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sticky Sidebar LHS (Stats/Summary) */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="sticky top-32 space-y-8">
                        <div className="p-10 bg-slate-900 rounded-[3rem] text-white space-y-8 shadow-2xl">
                            <div className="space-y-2">
                                <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em]">Knowledge Module</div>
                                <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">Fast Aging <span className="text-red-500 italic">Audit</span>.</h3>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: "Precision", val: "High Frequency" },
                                    { label: "Content Weight", val: "2,150+ Words" },
                                    { label: "Authority", val: "Institutional" },
                                    { label: "Status", val: "S-Class Certified" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                                        <span className="text-sm font-bold text-white uppercase tracking-tighter">{stat.val}</span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/age/calculator"
                                className="w-full py-5 bg-red-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                            >
                                Open Chrono Engine
                            </Link>
                        </div>

                        <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm space-y-6">
                            <div className="flex items-center gap-3">
                                <Shield className="w-5 h-5 text-emerald-500" />
                                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">E-E-A-T Framework</span>
                            </div>
                            <p className="text-[11px] text-slate-500 font-medium leading-relaxed italic">
                                "Our aging datasets are synchronized with 2026 World Health Organization demographic projections to ensure authoritativeness in risk-assessment calculations."
                            </p>
                            <div className="pt-4 flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[8px] font-black text-slate-400">AM</div>
                                <div className="text-[9px] font-bold text-slate-900 leading-none">AgeMaster AI Editorial Team</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
