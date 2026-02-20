"use client";

import Link from "next/link";
import { TrendingUp, Calculator, Shield, DollarSign, ArrowRight, Table, BarChart3, Fingerprint, Activity, Smile, Info, HeartPulse, Scale, CheckCircle2 } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS, DENTAL_DATA_2026, COVERAGE_TIERS, PLAN_TYPES } from "@/lib/calculators/dental-insurance";

export default function HubClient() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30">
            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-2 shadow-2xl shadow-sky-500/10">
                            <Fingerprint className="w-4 h-4 text-sky-400" />
                            <span className="text-[10px] md:text-sm font-black tracking-widest text-sky-400 uppercase">Forensic Audit Engine 2026</span>
                        </div>
                        <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/5 rounded-full px-4 py-2">
                            <Activity className="w-4 h-4 text-sky-500" />
                            <span className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-tighter">$55.00 CPC INDEX</span>
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                        Dental <br /><span className="text-sky-500 font-black">Insurance</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        Institutional-grade oral health analyzer. Calculate 2026 PPO premiums, 100/80/50 coverage tiers, and procedure-specific cost audits with actuarial precision.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link href="/dental-insurance/calculator" className="group relative inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-[0_0_40px_-10px_rgba(14,165,233,0.5)] active:scale-95 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            Start Audit <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                        </Link>
                        <Link href="/dental-insurance/guide" className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl text-xl font-bold border border-white/5 transition-all active:scale-95">
                            Rate Guide <BarChart3 className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- REAL-TIME DATA INDEX --- */}
            <section className="py-12 px-4 border-b border-white/5 bg-slate-900/40 backdrop-blur-md">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {STATISTICS.map((stat, index) => (
                            <div key={index} className="flex flex-col items-center lg:items-start group transition-all text-center lg:text-left">
                                <span className="text-sky-500 text-3xl md:text-5xl font-black tracking-tighter mb-1 group-hover:scale-110 transition-transform">{stat.value}</span>
                                <span className="text-[10px] md:text-xs font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</span>
                                <span className="text-xs text-slate-600 font-medium italic">{stat.description}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MANDATORY 3-TABLE PROTOCOL --- */}
            <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-center gap-4 mb-16 border-l-4 border-sky-500 pl-6">
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic text-left">Actuarial Benchmarks</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Table 1: State Audit Index */}
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                            <div className="p-8 bg-slate-800/50 border-b border-white/5">
                                <div className="flex items-center gap-3 mb-4 text-sky-400">
                                    <Scale className="w-5 h-5" />
                                    <span className="text-xs font-black uppercase tracking-widest">State Premium Index (2026)</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Geographic Audit</h3>
                                <p className="text-sm text-slate-500 text-left">Monthly premium variations by jurisdiction.</p>
                            </div>
                            <div className="p-4 flex-grow">
                                <table className="w-full text-left text-sm">
                                    <thead className="text-[10px] text-slate-500 uppercase font-black border-b border-white/5">
                                        <tr>
                                            <th className="px-4 py-3">Jurisdiction</th>
                                            <th className="px-4 py-3 text-right">Avg Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {Object.entries(DENTAL_DATA_2026.premiums.states).map(([state, rate]) => (
                                            <tr key={state} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-4 py-4 text-slate-300 font-bold group-hover:text-sky-400">{state} PPO High</td>
                                                <td className="px-4 py-4 text-right font-black text-white">${rate.toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Table 2: Procedure Audit */}
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                            <div className="p-8 bg-slate-800/50 border-b border-white/5">
                                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                                    <Smile className="w-5 h-5" />
                                    <span className="text-xs font-black uppercase tracking-widest">Procedural Benchmarks</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Procedure Cost Index</h3>
                                <p className="text-sm text-slate-500 text-left">Institutional rates for uninsured work.</p>
                            </div>
                            <div className="p-4 flex-grow">
                                <div className="space-y-4">
                                    {Object.entries(DENTAL_DATA_2026.procedureCostsNoInsurance.major).map(([proc, cost], idx) => (
                                        <div key={idx} className="p-5 bg-slate-800/30 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-sky-500/20 transition-all">
                                            <div>
                                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Proc Code {idx + 400}</div>
                                                <div className="text-sm font-bold text-white capitalize">{proc.replace(/([A-Z])/g, ' $1')}</div>
                                            </div>
                                            <div className="text-xl font-black text-white tracking-tighter">${cost.toLocaleString()}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Table 3: Tier Audit */}
                        <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
                            <div className="p-8 bg-slate-800/50 border-b border-white/5">
                                <div className="flex items-center gap-3 mb-4 text-amber-400">
                                    <BarChart3 className="w-5 h-5" />
                                    <span className="text-xs font-black uppercase tracking-widest">Coverage Protocol</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">100/80/50 Efficiency</h3>
                                <p className="text-sm text-slate-500 text-left">Standard PPO coverage tiers.</p>
                            </div>
                            <div className="p-4 flex-grow overflow-x-auto">
                                <table className="w-full text-left text-sm min-w-[280px]">
                                    <thead className="text-[10px] text-slate-500 uppercase font-black border-b border-white/5">
                                        <tr>
                                            <th className="px-4 py-3">Tier</th>
                                            <th className="px-4 py-3">Coverage</th>
                                            <th className="px-4 py-3 text-right">Procedure Examples</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {COVERAGE_TIERS.map((tier, idx) => (
                                            <tr key={idx} className="hover:bg-white/5 transition-colors group">
                                                <td className="px-4 py-4 text-slate-300 group-hover:text-white transition-colors font-bold">{tier.name}</td>
                                                <td className="px-4 py-4 text-sky-400 font-black">{tier.rate}%</td>
                                                <td className="px-4 py-4 text-right text-[10px] text-slate-600 italic">{tier.procedures[0]}...</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- INFORMATIONAL SECTION I --- */}
            <section className="py-24 px-4 bg-slate-900/10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-left">
                            <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter italic">2026 Oral Care <br /><span className="text-sky-500">Underwriting Matrix</span></h2>
                            <p className="text-lg text-slate-400 font-light leading-relaxed">
                                Modern dental insurance in 2026 is no longer just a cleaning benefit. It is a complex financial hedge against high-cost procedures like implants (avg. $4,500) and root canals.
                            </p>
                            <div className="flex gap-6 p-6 bg-slate-900 rounded-3xl border border-white/5 shadow-inner">
                                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 flex items-center justify-center shrink-0">
                                    <Info className="w-6 h-6 text-sky-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">Waiting Period Protocol</h4>
                                    <p className="text-xs text-slate-500 leading-snug">Major restorative work typically requires a 6-month wait or 'evidence of prior coverage' to wave the period in S-Class PPO tiers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl text-left">
                            <h3 className="text-2xl font-bold text-white mb-6">Plan Comparison Audit</h3>
                            <div className="space-y-4">
                                {PLAN_TYPES.map((plan, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors">
                                        <div className="text-sky-500 font-black pt-1">0{idx + 1}.</div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white">{plan.name}</h4>
                                            <p className="text-[11px] text-slate-500 leading-tight">{plan.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- RELATED ENTITIES --- */}
            <section className="py-24 px-4 relative border-t border-white/5 bg-slate-950">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="mb-16 text-center flex flex-col items-center">
                        <HeartPulse className="w-12 h-12 text-sky-500 mx-auto mb-4" />
                        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic text-center">Institutional Health Nodes</h2>
                        <p className="text-slate-500 mt-2 font-light text-center">Cross-referenced health and protection audit engines.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {RELATED_CALCULATORS.map((calc, index) => (
                            <Link key={index} href={calc.url} className="group bg-slate-900 border border-white/5 rounded-[2rem] p-8 hover:border-sky-500/30 transition-all shadow-xl hover:shadow-sky-500/5 text-left flex flex-col items-center">
                                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Shield className="w-6 h-6 text-sky-400 underline decoration-sky-500/30 underline-offset-4" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors uppercase tracking-tight text-center">{calc.name}</h3>
                                <p className="text-xs text-slate-500 leading-snug text-center">{calc.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FOOTER CTA --- */}
            <section className="py-24 px-4 bg-sky-950/20 border-t border-white/5 mt-12 relative overflow-hidden text-center">
                <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter italic">Ready for <br />Oral Health Precision?</h2>
                    <Link href="/dental-insurance/calculator" className="inline-flex items-center gap-4 bg-sky-600 hover:bg-sky-500 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all shadow-2xl shadow-sky-500/30 active:scale-95 group">
                        Live Audit Engine <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Link>
                    <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
                </div>
            </section>
        </div>
    );
}
