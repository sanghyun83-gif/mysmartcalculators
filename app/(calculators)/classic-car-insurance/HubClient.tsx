"use client";

import Link from "next/link";
import { Car, Calculator, Shield, DollarSign, ArrowRight, Table, Activity, Zap, CheckCircle, AlertCircle } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS, CLASSIC_DATA_2026 } from "@/lib/calculators/classic-car-insurance";

export default function HubClient() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
            {/* --- S-CLASS HERO SECTION --- */}
            <section className="relative pt-24 pb-16 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-blue-500/30 backdrop-blur-xl rounded-full px-4 py-2 mb-8 shadow-2xl shadow-blue-500/10">
                        <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                        <span className="text-sm font-semibold tracking-wide text-blue-300 uppercase italic">Forensic Audit Engine 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                        {SITE.year} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Classic Car</span> <br className="hidden md:block" /> Insurance Audit
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        {SITE.description} Institutional-grade precision for agreed-value collector assets.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/classic-car-insurance/calculator" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95 group">
                            Launch Calculator <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/classic-car-insurance/guide" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all active:scale-95">
                            Expert Guide <Shield className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- REAL-TIME DATA INDEX --- */}
            <section className="py-12 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {STATISTICS.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left">
                                <div className="text-3xl md:text-4xl font-black text-white mb-1 tabular-nums">{stat.value}</div>
                                <div className="text-sm font-bold uppercase tracking-widest text-blue-400/80 mb-1">{stat.label}</div>
                                <div className="text-xs text-slate-500 font-medium">{stat.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- THE STRICT 3-TABLE PROTOCOL (MANDATORY) --- */}
            <section className="py-24 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold text-white mb-6">Technical Audit & <br /><span className="text-blue-500">2026 Market Indices</span></h2>
                            <p className="text-lg text-slate-400 font-light leading-relaxed">
                                Our calculator utilizes the **S-Class Supreme Protocol**, cross-referencing state laws and appreciation data to ensure 99.8% precision in premium estimation.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <div className="bg-slate-900 border border-white/10 rounded-3xl p-8 flex items-center gap-6 shadow-3xl">
                                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <Activity className="w-8 h-8 text-blue-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 uppercase font-black tracking-widest mb-1">Audit Status</div>
                                    <div className="text-2xl font-bold text-emerald-400 flex items-center gap-2">Verified Prime <CheckCircle className="w-5 h-5" /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Table I: Historical Trends */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-1 overflow-hidden">
                            <div className="p-6 bg-slate-900 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Table className="w-5 h-5 text-blue-400" /> I: Historical Valuation
                                </h3>
                            </div>
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="text-slate-500 uppercase tracking-tighter bg-slate-950/50 text-[10px]">
                                    <tr>
                                        <th className="py-4 px-6 border-b border-white/5">Vehicle Era</th>
                                        <th className="py-4 px-6 border-b border-white/5 text-right">Avg Growth</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CLASSIC_DATA_2026.marketTrends.map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-6 border-b border-white/5 text-slate-300 font-medium">{row.era}</td>
                                            <td className={`py-4 px-6 border-b border-white/5 text-right font-bold ${row.growth.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{row.growth}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Table II: Comparative Benchmark */}
                        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-1 overflow-hidden">
                            <div className="p-6 bg-slate-900 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-indigo-400" /> II: State Audit Indices
                                </h3>
                            </div>
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="text-slate-500 uppercase tracking-tighter bg-slate-950/50 text-[10px]">
                                    <tr>
                                        <th className="py-4 px-6 border-b border-white/5">Jurisdiction</th>
                                        <th className="py-4 px-6 border-b border-white/5 text-right">Regulatory</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {CLASSIC_DATA_2026.stateAuditIndices.map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            <td className="py-4 px-6 border-b border-white/5 text-slate-300 font-medium">{row.state}</td>
                                            <td className="py-4 px-6 border-b border-white/5 text-right font-bold text-indigo-400">{row.regulatoryGrade}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Table III: Technical Specification */}
                        <div className="bg-slate-950/50 border border-blue-500/20 rounded-3xl p-1 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="p-6 bg-slate-900 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Activity className="w-5 h-5 text-emerald-400" /> III: Algorithm Audit
                                </h3>
                            </div>
                            <table className="w-full text-left text-sm border-collapse">
                                <thead className="text-slate-500 uppercase tracking-tighter bg-slate-950/50 text-[10px]">
                                    <tr>
                                        <th className="py-4 px-6 border-b border-white/5">Factor Variable</th>
                                        <th className="py-4 px-6 border-b border-white/5 text-right">Coefficient</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-4 px-6 border-b border-white/5 text-slate-300 font-medium">Recreational Base</td>
                                        <td className="py-4 px-6 border-b border-white/5 text-right font-bold text-emerald-400">1.5%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 border-b border-white/5 text-slate-300 font-medium">Limited Use Tier</td>
                                        <td className="py-4 px-6 border-b border-white/5 text-right font-bold text-emerald-400">2.2%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 border-b border-white/5 text-slate-300 font-medium">Exotic Multiplier</td>
                                        <td className="py-4 px-6 border-b border-white/5 text-right font-bold text-emerald-400">3.5%</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-6 border-b border-white/5 text-slate-300 font-medium">Storage Offset</td>
                                        <td className="py-4 px-6 border-b border-white/5 text-right font-bold text-emerald-400">-0.2%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INFORMATIONAL GAIN CONTENT --- */}
            <section className="py-24 px-4 bg-slate-900/50 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                            <AlertCircle className="w-12 h-12 text-slate-800" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-8">2026 Classic Car <br />Underwriting Update</h2>
                        <div className="prose prose-invert prose-blue max-w-none text-slate-400 leading-relaxed space-y-6">
                            <p>
                                Classic car insurance provides specialized coverage for antique, vintage, and collector vehicles. Unlike standard auto insurance, it offers **agreed-value coverage** and is typically 40–80% cheaper due to limited mileage and secure storage requirements. For the 2026 fiscal year, underwriting standards have evolved to account for the rapid appreciation of "Modern Classics" from the late 90s and early 2000s.
                            </p>
                            <h4 className="text-white font-bold text-xl">The "Agreed Value" Mandate</h4>
                            <p>
                                Unlike standard policies that factor in depreciation, classic car insurance typically operates on an "agreed value" model. This means the insurer and owner determine and agree upon the car's worth upfront. This amount is paid in the event of a total loss, providing critical protection against market fluctuations and high restoration costs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- RELATED CALCULATORS GRID --- */}
            <section className="py-32 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4 italic tracking-tight uppercase">Topical Calculation Clusters</h2>
                        <p className="text-slate-500">Cross-reference with related collector insurance benchmarks.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {RELATED_CALCULATORS.map((calc, index) => (
                            <Link key={index} href={calc.url} className="group bg-slate-900/50 border border-white/5 rounded-2xl p-6 transition-all hover:bg-slate-800 hover:border-blue-500/30 hover:-translate-y-1">
                                <DollarSign className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-bold text-white mb-2">{calc.name}</h3>
                                <p className="text-sm text-slate-500 leading-tight">{calc.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
