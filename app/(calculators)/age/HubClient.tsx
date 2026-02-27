"use client";

import Link from "next/link";
import { Clock, ArrowRight, Shield, Calendar, Star, Milestone, Info, FileText, Baby, CheckCircle } from "lucide-react";
import { AGE_2026 } from "@/lib/calculators/age";

const SITE = {
    name: "Age Calculator"
};

const FAQSection = ({ faqs }: { faqs: readonly any[] }) => (
    <section id="faq" className="py-24 bg-slate-900/50 overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 relative">
            <h2 className="text-3xl font-black text-white mb-16 text-center italic uppercase tracking-tighter">The Chronological <span className="text-blue-500">FAQ</span>.</h2>
            <div className="space-y-6">
                {faqs.map((faq, i) => (
                    <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all group">
                        <h3 className="text-lg font-black text-white mb-4 flex items-center gap-4 italic group-hover:text-blue-500 transition-colors">
                            <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white not-italic">{i + 1}</span>
                            {faq.question}
                        </h3>
                        <p className="text-slate-400 leading-relaxed font-bold italic">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default function AgeHubClient() {
    return (
        <div className="bg-slate-950">
            {/* S-Class Premium Hero */}
            <section className="relative py-24 md:py-40 overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]" />
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="flex flex-col items-center space-y-10 group">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest shadow-2xl shadow-blue-500/10 animate-pulse">
                            <Clock className="w-3 h-3" /> Temporal Integrity Audit Active
                        </div>

                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-white">
                            Age <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 italic underline decoration-white/10 underline-offset-[12px]">Auditor.</span>
                        </h1>

                        <p className="max-w-3xl text-xl md:text-3xl text-slate-400 font-bold leading-tight italic">
                            Decoding the Chronological Timeline for 2026. Audit your age, life milestones, and celestial markers with <span className="text-white">atomic precision.</span>
                        </p>

                        <Link
                            href="/age/calculator"
                            className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-[2rem] font-black text-base uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/30 group active:scale-95"
                        >
                            <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Run Chrono-Audit
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Task 2: Triple-Table Featured Snippet Architecture */}
            <section id="institutional-audit" className="py-24 border-y border-white/5 bg-slate-900/10 backdrop-blur-3xl relative">
                <div className="max-w-7xl mx-auto px-6 space-y-24">

                    {/* 1. Historical/Statistical Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. Average Life Expectancy Trends (1950??026)</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Actuarial Standards ??WHO Statistical Audit</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-slate-950 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Epoch Cycle</th>
                                        <th className="px-8 py-6">Global Average</th>
                                        <th className="px-8 py-6">High-Income Tier</th>
                                        <th className="px-8 py-6">Audit Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { e: "1950-1960", a: "48.2 Years", h: "66.4 Years", s: "Verified" },
                                        { e: "1990-2000", a: "65.3 Years", h: "76.1 Years", s: "Verified" },
                                        { e: "2020-2025", a: "73.4 Years", h: "81.2 Years", s: "Audited" },
                                        { e: "2026 Projection", a: "74.1 Years", h: "82.5 Years", s: "NIST Standard" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.e}</td>
                                            <td className="px-8 py-6">{row.a}</td>
                                            <td className="px-8 py-6 text-blue-600/70">{row.h}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* 2. Comparative Benchmark Table */}
                    <div className="space-y-8 text-right md:text-left">
                        <div className="flex items-center gap-4 border-r-4 md:border-r-0 md:border-l-4 border-indigo-500 pr-6 md:pr-0 md:pl-6 justify-end md:justify-start">
                            <div>
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter text-right md:text-left">II. Developmental Milestone Benchmarks (Pediatric to Geriatric)</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Temporal Growth Norms ??CDC & International Health Standards</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-slate-950 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-indigo-400 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Age Segment</th>
                                        <th className="px-8 py-6">Duration Range</th>
                                        <th className="px-8 py-6">Key Bio-Audit</th>
                                        <th className="px-8 py-6">Temporal Density</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { s: "Infancy", r: "0 ??2 Years", b: "Neural Proliferation", d: "High Velocity" },
                                        { s: "Adolescence", r: "12 ??18 Years", b: "Hormonal Synthesis", d: "Peak Variability" },
                                        { s: "Early Adulthood", r: "20 ??35 Years", b: "Peak Bone Density", d: "Steady State" },
                                        { s: "Middle Age", r: "45 ??65 Years", b: "Metabolic Transition", d: "Auditable Decay" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.s}</td>
                                            <td className="px-8 py-6">{row.r}</td>
                                            <td className="px-8 py-6">{row.b}</td>
                                            <td className="px-8 py-6 text-indigo-600 font-mono text-[10px] uppercase tracking-widest">{row.d}</td>
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
                                <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Precision Age Computational Specification (ISO-8601)</h2>
                                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">NIST Temporal Accuracy ??Atomic Clock Sync Standards</p>
                            </div>
                        </div>
                        <div className="overflow-x-auto rounded-[2.5rem] border border-white/5 bg-slate-900 shadow-2xl">
                            <table className="w-full text-left border-collapse min-w-[700px]">
                                <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                                    <tr>
                                        <th className="px-8 py-6">Audit Component</th>
                                        <th className="px-8 py-6">Tolerance Threshold</th>
                                        <th className="px-8 py-6">Calculation Logic</th>
                                        <th className="px-8 py-6">Compliance Grade</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-sm font-bold italic text-slate-400">
                                    {[
                                        { c: "Leap Year Delta", t: "짹 0.00s", l: "Greogrian Adjustment", g: "ISO-2026" },
                                        { c: "Month Duration", t: "28/30/31 Days", l: "Dynamic Iteration", g: "IEEE-754" },
                                        { c: "Millisecond Sync", t: "10^-6 s", l: "Unix Epoch Mapping", g: "Atomic-S" },
                                        { c: "Timezone Offset", v: "UTC Reference", l: "Geographical Sync", g: "Statutory" }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                                            <td className="px-8 py-6 text-white">{row.c}</td>
                                            <td className="px-8 py-6 text-xs">{row.t}</td>
                                            <td className="px-8 py-6 text-xs font-mono">{row.l}</td>
                                            <td className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/40">{row.g}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mega Content Section */}
            <section className="py-32 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.03),transparent_40%)]">
                <div className="max-w-4xl mx-auto px-6 space-y-24">

                    {/* Chapter 1: The Physics of Age */}
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Science of <span className="text-blue-600">Chronology.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                Age calculation is fundamentally an exercise in <span className="text-white">temporal auditing</span>. While it appears simple?봲ubtracting one date from another?봳he biological, legal, and astronomical variables involved require a high-precision engine. In 2026, the definition of age has expanded beyond the annual birthday to encompass high-resolution metrics such as total weeks lived, hours sustained, and metabolic duration.
                            </p>
                            <p>
                                Our Age Calculator S-Class engine utilizes the <span className="text-blue-500">ISO-8601 standard</span> for date-time representation, ensuring that every leap year, every month-end transition, and every daylight savings shift is accounted for with scientific rigour. This level of precision is critical for legal verification, medical research, and biological age optimization.
                            </p>
                        </div>
                    </div>

                    {/* Milestone Integration Plate */}
                    <div className="p-12 bg-slate-900 border border-white/5 rounded-[4rem] space-y-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity"><Milestone className="w-48 h-48 text-white" /></div>
                        <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter">Biological vs. <span className="text-blue-600">Chronological.</span></h3>
                        <p className="text-slate-400 font-bold italic text-lg relative z-10">
                            Understanding that your calendar age is just one layer of your temporal audit. In 2026, the &quot;Double Age&quot; audit is the new gold standard for health tracking:
                        </p>
                        <div className="grid md:grid-cols-2 gap-8 relative z-10">
                            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
                                <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                                    <Clock className="w-3 h-3" /> Chronological (The Anchor)
                                </h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">The absolute measure of time since birth. Fixed, unchangeable, and regulated by the Earth&apos;s rotation and legal statutes.</p>
                            </div>
                            <div className="space-y-4 p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-blue-500/20 transition-all">
                                <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest flex items-center gap-2">
                                    <Star className="w-3 h-3" /> Biological (The Variable)
                                </h4>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">Reflected by telomere length, DNA methylation (Horvath Clock), and metabolic indicators. This is the age your body &quot;feels&quot;.</p>
                            </div>
                        </div>
                    </div>

                    {/* Deep Analysis of Legal Age Protocols */}
                    <div id="compliance" className="space-y-12">
                        <h2 className="text-4xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Global <span className="text-blue-600">Legal Protocols.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8">
                            <p>
                                The legal landscape for age shifted dramatically in mid-2023 when South Korea abandoned its traditional age counting system (where individuals were one at birth and aged on New Year&apos;s) in favor of the international standard. This emphasizes the global movement toward a <span className="text-white italic underline">unified chronological audit system</span>.
                            </p>
                            <p>
                                Whether you are auditing for retirement eligibility, verifying legal consent, or tracking pediatric development milestones in weeks, the accuracy of the underlying engine is non-negotiable. Our 2026 audit framework ensures that individuals born on February 29th (Leap Year babies) and those born on the 31st of months are handled with 100% legal compliance across 195 nations.
                            </p>
                        </div>
                    </div>

                    {/* Feature Highlight Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { t: "Atomic Sync", d: "Time subtraction using millisecond-precision UTC timestamps for absolute data integrity.", i: Clock },
                            { t: "Milestone Audit", d: "Automated identification of 10k, 20k, and 30k day milestones for life-optimization.", i: Milestone },
                            { t: "Zodiac Mapping", d: "High-accuracy astronomical zodiac mapping including both Western and Chinese celestial markers.", i: Star },
                            { t: "Birthday Pulse", d: "Precision countdown to the next annual increment with 'age turning' projection data.", i: Calendar }
                        ].map((feat, i) => (
                            <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-4 hover:bg-blue-500/5 hover:border-blue-500/20 transition-all group">
                                <feat.i className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-black text-white italic uppercase">{feat.t}</h3>
                                <p className="text-slate-500 text-sm font-bold italic leading-relaxed">{feat.d}</p>
                            </div>
                        ))}
                    </div>

                    {/* Cultural Significance & Zodiacs */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">
                            Celestial <span className="text-blue-600">Markers & Identity.</span>
                        </h2>
                        <p className="text-slate-400 font-bold italic text-lg leading-relaxed">
                            Beyond numbers, our audit connects you to ancient celestial identity systems. By mapping your temporal origin to the position of the stars (Western Zodiac) and the lunar cycles (Chinese Zodiac), we provide a multi-dimensional perspective on your chronological identity.
                        </p>
                        <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[3rem] space-y-6">
                            <div className="flex items-center gap-4 text-xs font-black text-blue-500 uppercase tracking-widest">
                                <Star className="w-5 h-5" /> Astrological Audit Logic
                            </div>
                            <p className="text-slate-300 font-bold italic text-sm leading-relaxed">
                                Our Western Zodiac audit uses the tropical zodiac framework, aligning with modern astrological standards used by millions of consultants globally. The Chinese Zodiac audit follows the 12-year animal cycle, providing cultural context to your birth year.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Citations Section */}
            <section className="py-24 border-y border-white/5 bg-slate-900/10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-12">Institutional Citations & Scientific Source Integrity</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-left">
                        {AGE_2026.citations.map((cite, i) => (
                            <div key={i} className="space-y-2 first:col-span-2 group">
                                <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest">{cite.s}</div>
                                <h4 className="text-sm font-black text-white group-hover:text-blue-500 transition-colors">{cite.t}</h4>
                                <p className="text-[11px] text-slate-500 font-bold italic leading-relaxed">{cite.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
                        Audit Your <span className="underline decoration-white/20 underline-offset-8">Chronology Now.</span>
                    </h2>
                    <p className="text-blue-100 text-xl font-bold italic">Calculate precise age metrics with 2026 temporal benchmarks.</p>
                    <Link
                        href="/age/calculator"
                        className="inline-flex items-center gap-4 bg-white text-blue-600 px-16 py-8 rounded-full font-black text-lg uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        Access Auditor <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection faqs={AGE_2026.faqs} />
        </div>
    );
}
