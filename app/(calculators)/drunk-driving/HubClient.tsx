"use client";

import Link from "next/link";
import { TrendingUp, Calculator, Shield, DollarSign, ArrowRight, Table, BarChart3, Fingerprint, Activity, Gavel, Scale, AlertTriangle, Zap, Info, ShieldAlert } from "lucide-react";
import { SITE, STATISTICS, RELATED_CALCULATORS, DUI_DATA_2026 } from "@/lib/calculators/drunk-driving";

export default function HubClient() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-rose-500/30">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 shadow-2xl shadow-rose-500/10">
              <Fingerprint className="w-4 h-4 text-rose-400" />
              <span className="text-[10px] md:text-sm font-black tracking-widest text-rose-400 uppercase">Forensic Audit Engine 2026</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-white/5 rounded-full px-4 py-2">
              <Activity className="w-4 h-4 text-rose-500" />
              <span className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-tighter">$85.00 CPC INDEX</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            DUI <br /><span className="text-rose-600 font-black italic">Calculator</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Institutional-grade DUI analyzer. Audit 2026 BAC metabolism, state-level penalty indices, and hidden legal liability with actuarial precision.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link href="/drunk-driving/calculator" className="group relative inline-flex items-center justify-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-[0_0_40px_-10px_rgba(225,29,72,0.5)] active:scale-95 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              Start Audit <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Link>
            <Link href="/drunk-driving/guide" className="inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl text-xl font-bold border border-white/5 transition-all active:scale-95">
              Penalty Guide <BarChart3 className="w-6 h-6" />
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
                <span className="text-rose-500 text-3xl md:text-5xl font-black tracking-tighter mb-1 group-hover:scale-110 transition-transform">{stat.value}</span>
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
          <div className="flex items-center gap-4 mb-16 border-l-4 border-rose-600 pl-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic text-left">Actuarial Benchmarks</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Table 1: State Penalty Index */}
            <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="p-8 bg-slate-800/50 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4 text-rose-400">
                  <Gavel className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest text-left">State Penalty Index (2026)</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight text-left">Jurisdictional Audit</h3>
                <p className="text-sm text-slate-500 text-left">Mandatory minimums for first offenders.</p>
              </div>
              <div className="p-4 flex-grow">
                <table className="w-full text-left text-sm">
                  <thead className="text-[10px] text-slate-500 uppercase font-black border-b border-white/5 text-left">
                    <tr>
                      <th className="px-4 py-3">Jurisdiction</th>
                      <th className="px-4 py-3 text-right">Mandatory Jail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {Object.entries(DUI_DATA_2026.penalties1stOffense.states).map(([state, data]) => (
                      <tr key={state} className="hover:bg-white/5 transition-colors group">
                        <td className="px-4 py-4 text-slate-300 font-bold group-hover:text-rose-400">{state} (1st Offense)</td>
                        <td className="px-4 py-4 text-right font-black text-white">{data.jail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Hidden Cost Audit */}
            <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="p-8 bg-slate-800/50 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4 text-amber-400">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest text-left">Liability Forecast</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight text-left">Hidden Cost Audit</h3>
                <p className="text-sm text-slate-500 text-left">Cumulative financial impact of conviction.</p>
              </div>
              <div className="p-4 flex-grow">
                <div className="space-y-4">
                  <div className="p-5 bg-slate-800/30 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-rose-500/20 transition-all">
                    <div className="text-left">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-left">Risk Factor 01</div>
                      <div className="text-sm font-bold text-white capitalize text-left">Legal Defense Fund</div>
                    </div>
                    <div className="text-xl font-black text-white tracking-tighter text-right">${DUI_DATA_2026.hiddenCosts.legalFees.min.toLocaleString()}</div>
                  </div>
                  <div className="p-5 bg-slate-800/30 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-rose-500/20 transition-all">
                    <div className="text-left">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-left">Risk Factor 02</div>
                      <div className="text-sm font-bold text-white capitalize text-left">SR-22 Premium Surcharge</div>
                    </div>
                    <div className="text-xl font-black text-white tracking-tighter text-right">${DUI_DATA_2026.hiddenCosts.sr22Insurance.annualAvg.toLocaleString()}</div>
                  </div>
                  <div className="p-5 bg-slate-800/30 border border-white/5 rounded-2xl flex items-center justify-between group hover:border-rose-500/20 transition-all">
                    <div className="text-left">
                      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1 text-left">Risk Factor 03</div>
                      <div className="text-sm font-bold text-white capitalize text-left">Interlock Hardware</div>
                    </div>
                    <div className="text-xl font-black text-white tracking-tighter text-right">${DUI_DATA_2026.hiddenCosts.ignitionInterlock.totalYear.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table 3: Metabolism Audit */}
            <div className="bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="p-8 bg-slate-800/50 border-b border-white/5">
                <div className="flex items-center gap-3 mb-4 text-emerald-400">
                  <Scale className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-widest text-left">Metabolic Protocol</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight text-left">Burn-Off Indices</h3>
                <p className="text-sm text-slate-500 text-left">Estimated BAC reduction by gender per hour.</p>
              </div>
              <div className="p-4 flex-grow overflow-x-auto">
                <table className="w-full text-left text-sm min-w-[280px]">
                  <thead className="text-[10px] text-slate-500 uppercase font-black border-b border-white/5 text-left">
                    <tr>
                      <th className="px-4 py-3">Variable</th>
                      <th className="px-4 py-3">Metabolism Rate</th>
                      <th className="px-4 py-3 text-right">Legal Threshold</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-4 py-4 text-slate-300 group-hover:text-white transition-colors font-bold text-left text-left">Male Adult</td>
                      <td className="px-4 py-4 text-rose-500 font-black text-left">{DUI_DATA_2026.bacMetabolism.male}% / hr</td>
                      <td className="px-4 py-4 text-right text-[10px] text-slate-600 italic">0.08% Std</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-4 py-4 text-slate-300 group-hover:text-white transition-colors font-bold text-left">Female Adult</td>
                      <td className="px-4 py-4 text-rose-500 font-black text-left">{DUI_DATA_2026.bacMetabolism.female}% / hr</td>
                      <td className="px-4 py-4 text-right text-[10px] text-slate-600 italic">0.08% Std</td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-4 py-4 text-slate-300 group-hover:text-white transition-colors font-bold text-left">Commercial</td>
                      <td className="px-4 py-4 text-rose-500 font-black text-left">Varies</td>
                      <td className="px-4 py-4 text-right text-[10px] text-slate-600 italic">0.04% CDL</td>
                    </tr>
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
              <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter italic text-left">2026 Penal <br /><span className="text-rose-600">Enforcement Registry</span></h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed text-left">
                Modern DUI enforcement in 2026 utilizes automated license plate recognition and real-time biometric ignition interlocks. A single conviction triggers a cascade of administrative and judicial liabilities exceeding $15,000.
              </p>
              <div className="flex gap-6 p-6 bg-slate-900 rounded-3xl border border-white/5 shadow-inner text-left">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-rose-400" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1 text-left">Implied Consent Protocol</h4>
                  <p className="text-xs text-slate-500 leading-snug">Refusing a 2026 chemical test results in an automatic 12-month administrative suspension, independent of the court's final ruling.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/5 shadow-2xl text-left">
              <h3 className="text-2xl font-bold text-white mb-6 text-left">Conviction Audit Flow</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors text-left">
                  <div className="text-rose-500 font-black pt-1">01.</div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white text-left">Pre-Conviction Hold</h4>
                    <p className="text-[11px] text-slate-500 leading-tight text-left">Immediate vehicle impoundment and administrative license hold.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors text-left">
                  <div className="text-rose-500 font-black pt-1">02.</div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white text-left">Mandatory minimums</h4>
                    <p className="text-[11px] text-slate-500 leading-tight text-left">Fines, interlock installation, and alcohol assessment screening.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors text-left">
                  <div className="text-rose-500 font-black pt-1">03.</div>
                  <div className="text-left">
                    <h4 className="text-sm font-bold text-white text-left">Risk-Based Rating</h4>
                    <p className="text-[11px] text-slate-500 leading-tight text-left">Transition to non-standard (SR-22) insurance markets for 3-5 years.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RELATED ENTITIES --- */}
      <section className="py-24 px-4 relative border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16 text-center flex flex-col items-center">
            <ShieldAlert className="w-12 h-12 text-rose-600 mx-auto mb-4" />
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic text-center">Institutional Protection Nodes</h2>
            <p className="text-slate-500 mt-2 font-light text-center text-center">Cross-referenced legal and risk audit engines.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RELATED_CALCULATORS.map((calc, index) => (
              <Link key={index} href={calc.url} className="group bg-slate-900 border border-white/5 rounded-[2rem] p-8 hover:border-rose-500/30 transition-all shadow-xl hover:shadow-rose-500/5 text-left flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Gavel className="w-6 h-6 text-rose-400 underline decoration-rose-500/30 underline-offset-4" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-400 transition-colors uppercase tracking-tight text-center">{calc.name}</h3>
                <p className="text-xs text-slate-500 leading-snug text-center">{calc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-4 bg-rose-950/20 border-t border-white/5 mt-12 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter italic text-center">Ready for <br />DUI Forensic Precision?</h2>
          <Link href="/drunk-driving/calculator" className="inline-flex items-center gap-4 bg-rose-600 hover:bg-rose-500 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all shadow-2xl shadow-rose-500/30 active:scale-95 group">
            Live Audit Engine <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase text-center">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
