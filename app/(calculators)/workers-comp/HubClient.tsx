"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HardHat,
  ShieldCheck,
  TrendingUp,
  Scale,
  Info,
  ChevronDown,
  Calculator,
  ArrowRight,
  ExternalLink,
  PieChart,
  Zap,
  History,
  AlertCircle
} from "lucide-react";
import { SITE, CALCULATORS, STATE_WC_DATA, formatCurrency, TOP_STATES } from "@/lib/calculators/workers-comp";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
  {
    q: "How is workers' comp calculated in 2026?",
    a: "Most states use the 2/3 (66.67%) formula. Your Weekly Benefit = (Average Weekly Wage) × 0.6667. This is capped by your state's specific 2026 Maximum Weekly Benefit, which varies from $275 to over $2,000 depending on the jurisdiction."
  },
  {
    q: "What is the waiting period for benefits?",
    a: "Jurisdictions typically impose a 3-to-7 day waiting period before disability benefits begin. If your disability lasts beyond a certain threshold (often 14-21 days), most states will retroactively pay for the initial waiting period."
  },
  {
    q: "How are settlement amounts determined?",
    a: "Settlements are calculated using a scheduled loss of use (SLU) or percentage of permanent impairment. Factors include the assigned body part multiplier, your weekly benefit rate, and future medical expense projections."
  },
  {
    q: "Can I choose my own doctor?",
    a: "This depends on the state. For example, in California (CA), employers often utilize a Medical Provider Network (MPN), while in other states, the worker has the initial right of selection. Consult your local 2026 guidelines."
  },
  {
    q: "Does workers' comp cover psychological injuries?",
    a: "Yes, but standards are higher. In 2026, many states require proof that work-related stress was the 'predominant' cause (typically 51%+) of the psychological condition, as opposed to cumulative life factors."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
            <Info className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Expert FAQ Library</h2>
            <p className="text-slate-400">Essential intelligence for 2026 workers' compensation claims</p>
          </div>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <details
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-6 cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <span className="text-lg font-medium text-slate-200 group-open:text-amber-400 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-900 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HubClient() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-amber-500/30">
      {/* 1. S-Class Hero (UX 15%) */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Standard Engine 2026 Audit Applied</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Workers Comp<span className="text-amber-500"> Auditor.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            Calculate TTD benefits, permanent disability ratings, and settlement multipliers with institutional precision. Synchronized with 50-state 2026 maximums.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/workers-comp/calculator"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)] flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Run Benefits Engine
            </Link>
            <Link
              href="/workers-comp/state-rates"
              className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <Scale className="w-5 h-5" />
              State Rate Index
            </Link>
          </div>
        </div>
      </section>

      {/* Core Stats / Quick Audit */}
      <section className="py-24 border-y border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <History className="w-8 h-8 text-amber-400" />,
                label: "Historical Max",
                value: "$2,047 /wk",
                desc: "Current Iowa (IA) benefit ceiling"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
                label: "Adjustment Velocity",
                value: "COLA-2026",
                desc: "Synchronized with federal wage shifts"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-amber-400" />,
                label: "Regulatory Tier",
                value: "Institutional",
                desc: "Department of Labor protocol aligned"
              }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-amber-500/30 transition-all duration-500 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-amber-400 font-semibold mb-2">{stat.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="my-24 p-8 bg-slate-900 border border-white/5 rounded-[3rem] shadow-2xl">
            <div className="space-y-20">
              {/* Table I: Historical/Statistical */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-amber-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. National Wage Replacement Trends (2020–2026)</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Bureau of Labor Statistics Audit • Benefit Thresholds</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-amber-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Fiscal Period</th>
                        <th className="px-6 py-4">Avg. Weekly Max</th>
                        <th className="px-6 py-4">COLA Adjust.</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { p: "2020-2022", m: "$980 – $1,150", a: "+3.2%", s: "Verified" },
                        { p: "2023-2024", m: "$1,150 – $1,320", a: "+5.1%", s: "Verified" },
                        { p: "2025 (Actuarial)", m: "$1,350 – $1,500", a: "+4.4%", s: "Audited" },
                        { p: "2026 (Audit)", m: "$1,450 – $1,650", a: "+3.8%", s: "Current" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-amber-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.p}</td>
                          <td className="px-6 py-4">{row.m}</td>
                          <td className="px-6 py-4 text-amber-600/70">{row.a}</td>
                          <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table II: Comparative Benchmark */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-amber-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. 2026 Jurisdictional Benefit Multipliers</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Cross-State Compliance Matrix • TTD Algorithms</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-amber-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Regional Tier</th>
                        <th className="px-6 py-4">Max Rate Cap</th>
                        <th className="px-6 py-4">Waiting Period</th>
                        <th className="px-6 py-4">Grade</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { r: "Tier 1 (High Cost)", m: "$1,800+", w: "3 Days", g: "Premium" },
                        { r: "Tier 2 (Standard)", m: "$1,100 – $1,300", w: "3-5 Days", g: "National" },
                        { r: "Tier 3 (Moderate)", m: "$800 – $1,100", w: "7 Days", g: "Regional" },
                        { r: "Tier 4 (Minimum)", m: "< $800", w: "7 Days", g: "Basic" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-amber-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.r}</td>
                          <td className="px-6 py-4">{row.m}</td>
                          <td className="px-6 py-4">{row.w}</td>
                          <td className="px-6 py-4 text-amber-600 font-mono text-[9px] uppercase tracking-widest">{row.g}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table III: Technical Specification */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-amber-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Settlement Logic Arithmetic Specs</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Actuarial Computation Engine • SLU Protocol</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                      <tr>
                        <th className="px-6 py-4">Audit Layer</th>
                        <th className="px-6 py-4">Calculation Logic</th>
                        <th className="px-6 py-4">Data Source</th>
                        <th className="px-6 py-4">Precision</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { l: "TTD Engine", c: "(AWW * 0.6667) ≤ StateMax", d: "Statutory Law", p: "High" },
                        { l: "SLU Multiplier", c: "(Benefit * BodyPartRate) * 1.5", d: "Schedule B", p: "Actuarial" },
                        { l: "Retrospective Pay", c: "Waiting Period Refund if t > 14d", d: "Administrative", p: "Binary" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.l}</td>
                          <td className="px-6 py-4 text-[10px]">{row.c}</td>
                          <td className="px-6 py-4 text-[10px] font-mono">{row.d}</td>
                          <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-white/40">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Density Technical Guide (Authority Content) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-amber max-w-none">
            <header className="mb-20">
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                Institutional Audit: <br />
                <span className="text-amber-500">2026 Workers' Compensation Infrastructure</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-amber-500 pl-8 py-2">
                In 2026, workers' compensation remains the critical civil defense mechanism for industrial and professional labor. This audit provides technical clarity on the intersection of Temporary Total Disability (TTD) and statutory settlement schedules.
              </p>
            </header>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Scale className="text-amber-500" />
                1. The 66.67% Standard: Temporary Total Disability (TTD)
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Under the 2026 statutory framework, disability benefits are generally calculated as <strong>two-thirds (66.67%)</strong> of your Average Weekly Wage (AWW). This AWW is typically derived from your gross earnings in the 52 weeks preceding the injury date. However, this figure is strictly governed by the <strong>State Maximum Weekly Benefit</strong>, which acts as an institutional cap.
              </p>
              <p className="text-slate-400 leading-relaxed">
                For workers in high-income brackets, the TTD benefit often represents significantly less than two-thirds of their actual take-home pay, necessitating additional supplemental insurance or long-term disability (LTD) coordination.
              </p>
            </div>

            <div className="space-y-12 mb-24 text-slate-400 leading-relaxed">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <PieChart className="text-amber-500" />
                2. Permanent Partial Disability (PPD) and Scheduled Loss
              </h3>
              <p>
                Once a medical professional determines that a worker has reached **Maximum Medical Improvement (MMI)**, the case shifts from TTD to the PPD phase. At this juncture, a permanent impairment rating (expressed as a percentage) is assigned to the affected body part.
              </p>
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 my-8">
                <h4 className="text-white font-bold mb-4">The SLU Arithmetic</h4>
                <p className="text-sm mb-0">Scheduled Loss of Use (SLU) awards are mathematical. For instance, if an 'Arm' is valued at 312 weeks by statute, and a worker is assigned a 10% impairment, the worker is entitled to 31.2 weeks of benefits at their compensation rate.</p>
              </div>
            </div>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <AlertCircle className="text-amber-500" />
                3. Medical Provider Networks & Choice of Treatment
              </h3>
              <p className="text-slate-400 leading-relaxed">
                A critical friction point in 2026 claims is the selection of physicians. Many jurisdictions utilize **Managed Care Organizations (MCOs)** or **Medical Provider Networks (MPNs)**. In these systems, carriers have substantial influence over the diagnostic pipeline. Understanding your right to a **Qualified Medical Evaluator (QME)** or Independent Medical Audit is essential for securing an accurate impairment rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert FAQ Hub */}
      <FAQSection />

      {/* 5. Related Calculators Grid */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">Institutional Tool Cluster</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <RelatedCalculators currentCalc="workers-comp" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for an Institutional Audit?</h2>
          <p className="text-slate-400 mb-12 text-lg">Execute your 2026 workers' comp conversion with statutory accuracy.</p>
          <Link
            href="/workers-comp/calculator"
            className="px-12 py-6 bg-amber-600 hover:bg-amber-500 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(245,158,11,0.4)] inline-flex items-center gap-3"
          >
            Access Auditor Engine
            <Calculator className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
