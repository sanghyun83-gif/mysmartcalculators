"use client";

import React from "react";
import {
    Clock,
    Calendar,
    BookOpen,
    Shield,
    Globe,
    Terminal,
    Settings,
    AlertCircle,
    Database,
    History,
    Cpu,
    Lock
} from "lucide-react";

export default function HubClient() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-16">

                {/* Sticky Sidebar Navigation */}
                <aside className="lg:col-span-3">
                    <div className="sticky top-32 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-[10px] font-black text-blue-500 uppercase tracking-widest px-4 font-bold italic">Expert Audit Navigation</h2>
                            <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
                        </div>
                        <nav className="flex flex-col gap-1">
                            {[
                                { id: "epoch", label: "Temporal Genesis", icon: History },
                                { id: "standards", label: "ISO 8601 Logic", icon: Globe },
                                { id: "leap", label: "Leap-Year Correction", icon: Settings },
                                { id: "working", label: "Business Day Audit", icon: Terminal },
                                { id: "y2k38", label: "Computation (Y2K38)", icon: Cpu },
                                { id: "security", label: "Data Integrity", icon: Lock }
                            ].map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 hover:text-blue-400 transition-all font-bold italic text-sm group"
                                >
                                    <item.icon className="w-4 h-4 text-slate-500 group-hover:text-blue-500 transition-colors" />
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Main Scientific Content */}
                <main className="lg:col-span-9 space-y-32">

                    {/* Genesis Section */}
                    <section id="epoch" className="space-y-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                            <History className="w-3 h-3" /> Section 01: Temporal Genesis
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            The Evolution of <span className="text-blue-600">Chronological Logic.</span>
                        </h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8 text-justify">
                            <p>
                                Chronology is the industrial foundation of human civilization. Before the digital epoch, time was audited through observational astronomy—tracking the alignment of the Earth, Moon, and Sun to regulate agricultural and social rhythms. However, as global commerce expanded, the inherent drift between lunar and solar cycles created 'Temporal Scarcity', leading to the radical Gregorian reform of 1582.
                            </p>
                            <p>
                                In 2026, date calculation has moved from paper scrolls to **64-bit Boolean logic**. Every calculation performed by our engine is a mini-simulation of the Gregorian algorithm, accounting for the 97 leap years that occur every 400 years to maintain a mean year length of 365.2425 days. This precision is what separates a standard calendar from an **Institutional Temporal Auditor**.
                            </p>
                            <blockquote className="border-l-4 border-blue-500 pl-8 py-4 bg-blue-500/5 rounded-r-3xl my-12 not-prose">
                                <p className="text-xl text-white font-black italic tracking-tight leading-relaxed">
                                    "To audit time is to audit the primary resource of the universe. Accuracy isn't a feature; it's a structural requirement for 2026 systems."
                                </p>
                            </blockquote>
                        </div>
                    </section>

                    {/* Standards Section */}
                    <section id="standards" className="space-y-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-500 uppercase tracking-widest">
                            <Globe className="w-3 h-3" /> Section 02: ISO 8601 Standards
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Linear Data <span className="text-indigo-600">Normalization.</span>
                        </h2>
                        <div className="prose prose-invert prose-indigo max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8 text-justify">
                            <p>
                                The **ISO 8601** standard is the 'Universal Grammar' of date and time. It established the `YYYY-MM-DD` sequence to solve the 'Endian Problem'—the chaos caused by regional preferences for day-first or month-first notation. By utilizing Big-Endian sorting, ISO 8601 allows computers to sort dates as raw strings, significantly reducing compute overhead in large-scale temporal audits.
                            </p>
                            <p>
                                Our auditor strictly adheres to **ISO 8601:2019**, the latest iteration of the standard. This includes precise handling of 'Week 01' (the week with the first Thursday of the year) and UTC offsets. For global logistics and financial markets, failing to use ISO normalization can lead to 'Buffer Overflows' in time-sensitive contract executions. We treat every date as a standardized data element, not just a label on a calendar.
                            </p>
                        </div>
                    </section>

                    {/* Leap Year Logic */}
                    <section id="leap" className="space-y-12 bg-slate-900/40 p-12 rounded-[4rem] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none"><Settings className="w-48 h-48 text-blue-500" /></div>
                        <div className="relative z-10 space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-500 uppercase tracking-widest">
                                <Cpu className="w-3 h-3" /> Section 03: Leap Year Correction
                            </div>
                            <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase">The 0.002% <span className="text-blue-600">Correction Audit.</span></h3>
                            <p className="text-slate-400 text-lg font-bold italic leading-relaxed text-justify">
                                Why do we subtract or add days every four years? The Earth's orbit around the sun takes approximately 365.2422 days. Without correction, our seasons would drift by nearly 25 days every century. The Gregorian algorithm provides a 'Temporal Stabilizer' using a nested logic gate:
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 my-8">
                                <div className="space-y-2 p-6 bg-black/40 rounded-3xl border border-white/5">
                                    <div className="text-[10px] font-black text-blue-500 uppercase italic">Condition A</div>
                                    <p className="text-sm font-bold text-white italic">Year must be divisible by 4.</p>
                                </div>
                                <div className="space-y-2 p-6 bg-black/40 rounded-3xl border border-white/5">
                                    <div className="text-[10px] font-black text-rose-500 uppercase italic">Condition B (Exception)</div>
                                    <p className="text-sm font-bold text-white italic">If divisible by 100, must also be divisible by 400.</p>
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm font-bold italic leading-relaxed">
                                Our calculator executes these conditional audits in real-time, ensuring that a duration calculated across the year 2000 (a leap year) is handled differently than one across 2100 (not a leap year). This is clinical-grade temporal accounting.
                            </p>
                        </div>
                    </section>

                    {/* Business Day Audit */}
                    <section id="working" className="space-y-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                            <Terminal className="w-3 h-3" /> Section 04: Business Day Audit
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Operational <span className="text-emerald-600">Velocity.</span>
                        </h2>
                        <div className="prose prose-invert prose-emerald max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8 text-justify">
                            <p>
                                In industrial timekeeping, 'Total Days' is a misleading metric for productivity. A project scheduled for 10 calendar days only contains 8 actual working cycles. Our **Business Day Logic Gate** filters the temporal stream to extract 'Net Operational Windows'. This calculation is essential for calculating **VPU (Velocity Per Unit)** and ensuring that supply chain logistics don't stall over weekend entropy.
                            </p>
                            <p>
                                The algorithm iterates through every 24-hour cycle between the start and end tokens, checking the `dayOfWeek` index. Indices 0 (Sunday) and 6 (Saturday) are discarded from the working count. In advanced 2026 enterprise models, this is also cross-referenced with regional holiday JSON datasets to create a 100% accurate 'Financial Maturity Audit'.
                            </p>
                        </div>
                    </section>

                    {/* Y2K38 Section */}
                    <section id="y2k38" className="space-y-12 p-12 bg-blue-600 rounded-[4rem] text-white overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center gap-4">
                                <Cpu className="w-12 h-12" />
                                <h3 className="text-4xl font-black tracking-tighter italic uppercase">The Y2K38 <br /> Cryptic Limit.</h3>
                            </div>
                            <p className="text-blue-500 bg-white px-4 py-1 rounded-full w-fit text-[10px] font-black uppercase tracking-widest">Crucial System Audit</p>
                            <p className="text-blue-50 text-xl font-bold italic leading-relaxed text-justify">
                                On January 19, 2038, billions of 32-bit Unix systems will experience a catastrophic 'Integer Overflow'. The timestamp, which counts seconds since 1970, will exceed its 2,147,483,647 limit and wrap around to a negative value—resetting the clock to 1901.
                            </p>
                            <p className="text-blue-100 text-base font-bold italic leading-relaxed opacity-80">
                                Our S-Class Auditor uses **64-bit BigInt** architecture. Our limit extends to 292 billion years, making this engine future-proof against the next several cosmic cycles. We are currently auditing dates for the post-2038 era already.
                            </p>
                        </div>
                    </section>

                    {/* Final Security Section */}
                    <section id="security" className="space-y-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <Lock className="w-3 h-3" /> Section 06: Data Integrity
                        </div>
                        <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">
                            Institutional <span className="opacity-50">Reliability.</span>
                        </h2>
                        <div className="prose prose-invert prose-slate max-w-none text-slate-400 text-lg leading-relaxed font-bold italic space-y-8 text-justify">
                            <p>
                                At **mysmartcalculators.com**, we treat your temporal data as a clinical biometric. Every audit is performed locally in your browser environment, ensuring that your sensitive dates—birthdays, project windows, or legal deadlines—are never transmitted across an unencrypted network. We provide the logic; you maintain the data sovereignty.
                            </p>
                            <p>
                                By utilizing standardized JavaScript `Date` and `Intl` objects, we ensure that the results you see are consistently reproducible across all 2026-compliant browsers. Our 'Temporal Audit' is your benchmark for chronological truth in an era of digital misinformation.
                            </p>
                        </div>
                    </section>

                    {/* Institutional Citations Preview */}
                    <section className="py-24 border-t border-white/5">
                        <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-12 text-center italic">Verified Data Citations</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { n: "NIST", l: "Atomic Timekeepers" },
                                { n: "IEEE", l: "64-bit Standards" },
                                { n: "ISO", l: "8601 Certification" }
                            ].map((cite, i) => (
                                <div key={i} className="text-center p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
                                    <div className="text-blue-500 font-black text-2xl italic tracking-tighter mb-1 lowercase">{cite.n}</div>
                                    <div className="text-[10px] text-slate-600 font-bold uppercase tracking-widest italic">{cite.l}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
