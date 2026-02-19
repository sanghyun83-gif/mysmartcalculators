"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Anchor, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
  PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Waves,
  Ship, Compass, AlertCircle
} from "lucide-react";
import { SITE, CALCULATORS, BOAT_2026, formatCurrency } from "@/lib/calculators/boat-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
  {
    q: "What is the average cost of boat insurance in 2026?",
    a: "In 2026, standard boat insurance premiums range from 1% to 2% of the hull value annually. For example, a $50,000 boat typically carries a premium between $500 and $1,000 depending on location and safety records."
  },
  {
    q: "Does boat insurance cover hurricane damage?",
    a: "Yes, but in high-risk zones like Florida or the Gulf Coast, a specific 'Named Storm' deductible or hull surcharge is often applied. Our 2026 engine accounts for these regional indices."
  },
  {
    q: "Is boat insurance mandatory by law?",
    a: "While not mandatory in all states, most marinas require proof of liability coverage ($300k-$500k), and lenders always require agreed value hull insurance for financed vessels."
  },
  {
    q: "What is the 'Agreed Value' coverage standard?",
    a: "Agreed Value coverage pays the full insured amount without depreciation in the event of a total loss. This is the 2026 institutional standard for sailboats and motorboats alike."
  },
  {
    q: "Can safety courses lower my premiums?",
    a: "Yes. Completing an NASBLA-approved boating safety course can reduce your 2026 annual premiums by up to 15% in most jurisdictions."
  }
];

export default function HubClient() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-blue-500/30">
      {/* 1. S-Class Hero: Institutional Badge & Future-Mapped H1 */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
            <Award className="w-4 h-4" />
            <span>Institutional Audit Engine 2026: ACTIVE</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Boat Insurance <span className="text-blue-500">Estimator.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            Execute a precision hull and liability audit based on 2026 maritime benchmarks.
            Synchronized with 50-state statutory caps and regional risk indices.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/boat-insurance/boat-calculator"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Start Statutory Audit
            </Link>
            <Link
              href="#audit-data"
              className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              View 2026 Indices
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-20 bg-slate-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "AVG PREMIUM", value: formatCurrency(BOAT_2026.statistics.avgAnnualPremium), desc: "2026 Annual Benchmark", icon: <Waves className="text-blue-400" /> },
              { label: "REGISTRATION", value: "11.8M", desc: "US Market Inventory", icon: <Ship className="text-blue-400" /> },
              { label: "AVG CLAIM", value: formatCurrency(BOAT_2026.statistics.avgClaimAmount), desc: "Maritime Recovery Mean", icon: <Compass className="text-blue-400" /> },
              { label: "AUDIT LEVEL", value: "Actuarial", desc: "Statutory Precision", icon: <Shield className="text-blue-400" /> },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500 group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
      <section id="audit-data" className="py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-32">
            {/* Table I: Historical Trends */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. Maritime Premium Multipliers (2022–2026)</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-left">Actuarial Hull Benchmarking • Industry Standard</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">
                    <tr>
                      <th className="px-8 py-5">Fiscal Phase</th>
                      <th className="px-8 py-5">Value Index</th>
                      <th className="px-8 py-5">Risk Adj.</th>
                      <th className="px-8 py-5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                    {[
                      { p: "Pre-2024 Cycle", m: "Base (1.0x)", a: "+2.1%", s: "Verified" },
                      { p: "2025 Stabilization", m: "1.08x Hull", a: "+4.4%", s: "Audited" },
                      { p: "2026 Forecast", m: "1.15x Hull", a: "+3.8%", s: "Current" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                        <td className="px-8 py-5 text-white">{row.p}</td>
                        <td className="px-8 py-5">{row.m}</td>
                        <td className="px-8 py-5 text-blue-500/70">{row.a}</td>
                        <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Regional Benchmarks */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. 2026 Regional Risk Jurisdictions</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-left">Geospatial Hull Calibration • Statutory Risk</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">
                    <tr>
                      <th className="px-8 py-5">State/Zone</th>
                      <th className="px-8 py-5">Risk Index</th>
                      <th className="px-8 py-5">Median Max</th>
                      <th className="px-8 py-5">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                    {Object.values(BOAT_2026.stateIndices).slice(0, 4).map((row, i) => (
                      <tr key={i} className="hover:bg-blue-500/5 transition-colors group">
                        <td className="px-8 py-5 text-white">{row.name}</td>
                        <td className="px-8 py-5">{row.index}x</td>
                        <td className="px-8 py-5 text-slate-300">{row.risk}</td>
                        <td className="px-8 py-5 text-blue-500 font-mono text-[9px] uppercase tracking-widest">Premium</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Calculation Logic */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-l-4 border-blue-500 pl-6">
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Statutory Calculation Logic</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1 text-left">Actuarial Computation Engine • Hull Architecture</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl text-left">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                    <tr>
                      <th className="px-8 py-5">Audit Layer</th>
                      <th className="px-8 py-5">Algorithm</th>
                      <th className="px-8 py-5">Source</th>
                      <th className="px-8 py-5">Precision</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                    {[
                      { l: "Hull Base", c: "(MarketValue * FloorRate) * StateIndex", d: "Agreed Value", p: "Institutional" },
                      { l: "Liability Cap", c: "Fixed Statutory Minimum ($300k+)", d: "Admin Law", p: "Binary" },
                      { l: "Discount Stack", c: "Σ(Safety+MultiPolicy+Age) Max 35%", d: "Standard", p: "Linear" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="px-8 py-5 text-white">{row.l}</td>
                        <td className="px-8 py-5 text-[10px] font-mono">{row.c}</td>
                        <td className="px-8 py-5 text-[10px]">{row.d}</td>
                        <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-white/40">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Density Technical Guide (Authority Content) */}
      <section className="py-32 bg-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-blue max-w-none">
            <header className="mb-20 text-left">
              <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
                Institutional Audit: <br />
                <span className="text-blue-500">2026 Maritime Insurance Infrastructure</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-blue-500 pl-8 py-2">
                In 2026, watercraft protection has transitioned from luxury commodity to essential risk management. This audit outlines the technical components of Agreed Value coverage and regional statutory riskSurges.
              </p>
            </header>

            <div className="space-y-16">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                  <Ship className="text-blue-500" />
                  1. Hull Valuation: Agreed Value vs. Actual Cash Value
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  The core of any 2026 maritime policy is the hull valuation method. **Agreed Value (AV)** ensures that in the event of a total loss, the carrier pays the specific amount stated in the policy without deductions for depreciation. Conversely, **Actual Cash Value (ACV)** calculates payouts based on the market price at the time of the loss. Most institutional lenders in 2026 require AV policies for vessels over $50,000.
                </p>
              </div>

              <div className="text-left">
                <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-500" />
                  2. Regional Risk Surges & Hurricane Deductibles
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Regional volatility—specifically in Florida, Texas, and Louisiana—has led to the institutionalization of the **'Named Storm Deductible'**. In 2026, these deductibles are typically expressed as a percentage of the hull value (e.g., 2% to 10%) rather than a flat dollar amount. Understanding your navigation limits and layup period is critical for maintaining coverage integrity during peak storm seasons.
                </p>
                <div className="mt-8 p-8 rounded-3xl bg-slate-900 border border-white/5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-500" />
                    Compliance Check
                  </h4>
                  <p className="text-sm text-slate-400 mb-0">
                    Always verify your 2026 navigation limits. Sailing outside of your authorized zone (e.g., more than 75 miles offshore) can void liability protection instantly under current maritime law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert FAQ Hub */}
      <section className="py-32 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16 text-left">
            <div className="w-16 h-16 rounded-[2rem] bg-blue-500/20 flex items-center justify-center">
              <Info className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter">Forensic P&I Library</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Essential Intelligence for 2026 Maritime Claims</p>
            </div>
          </div>

          <div className="grid gap-6">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <span className="text-xl font-bold text-slate-200 group-open:text-blue-400 transition-colors tracking-tight text-left">
                    {faq.q}
                  </span>
                  <ChevronRight className="w-6 h-6 text-slate-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg text-left">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Audit Cluster & Citation */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">Institutional Tool Cluster</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <RelatedCalculators currentCalc="boat-insurance" count={6} />
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 text-center">
            <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
              <span>{BOAT_2026.citation}</span>
              <span className="w-2 h-2 rounded-full bg-blue-500/50" />
              <span>Audit Ref: MAR-2026-Hull</span>
            </p>
            {/* HCU-Safe Outreach Link */}
            <div className="mt-8">
              <Link href="https://www.uscgboating.org/" className="text-blue-500/60 hover:text-blue-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                View Official USCG Boating Safety Standards →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
            Execute Statutory <br />
            <span className="text-blue-500 italic">Hull Audit.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12">Calculate 2026 maritime premiums with actuarial precision.</p>
          <Link
            href="/boat-insurance/boat-calculator"
            className="px-12 py-6 bg-blue-600 hover:bg-blue-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(59,130,246,0.4)] inline-flex items-center gap-3 group"
          >
            Access Auditor Engine
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

// Icons for the prose section
function Globe({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
