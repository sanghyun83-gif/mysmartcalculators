"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
  PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
  Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
  Users, DollarSign, Calculator, Lock, GraduationCap, School, Landmark, Wallet
} from "lucide-react";
import { SITE, CALCULATORS, PLAN_529_2026, formatCurrency } from "@/lib/calculators/529";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30">
      {/* 1. S-Class Hero: Cinema-Emerald Royale */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em] animate-pulse">
              <Activity className="w-3.5 h-3.5" />
              EQUITY SAVINGS PROTOCOL 2026: ACTIVE
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
              529 Plan <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-emerald-400 to-emerald-700">Audit Node.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
              Institutional education equity forecasting. Solve for compound growth, state tax arbitrage, and Section 529 contribution limits.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/529/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-50 transition-all shadow-2xl overflow-hidden shadow-emerald-500/10">
                <span className="relative z-10 flex items-center gap-3 italic">
                  Analyze Savings Growth <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                <div className="text-left">
                  <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">IRS SEC 529</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Statutory Sync</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table I: Statutory Limits */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-emerald-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Statutory Limits</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Parameter</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">2026 Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3">Annual Gift Exclusion</td>
                  <td className="py-3 text-right text-emerald-400">{formatCurrency(PLAN_529_2026.annualGiftExclusion)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">5-Year Superfunding</td>
                  <td className="py-3 text-right">{formatCurrency(PLAN_529_2026.superfunding)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Avg Account Limit</td>
                  <td className="py-3 text-right">{formatCurrency(PLAN_529_2026.avgAccountLimit)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table II: State Arbitrage */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Landmark className="w-5 h-5 text-emerald-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">State Deductions</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Jurisdiction</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Max Deduction</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {PLAN_529_2026.topStateDeductions.slice(0, 3).map((state, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3">{state.state}</td>
                    <td className="py-3 text-right text-emerald-400">{typeof state.deduction === 'number' ? formatCurrency(state.deduction) : state.deduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table III: Cost Projections */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <School className="w-5 h-5 text-emerald-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Tuition Benchmarks</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Institution Type</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Avg Cost/Yr</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3">Public 4-Year (In-State)</td>
                  <td className="py-3 text-right text-emerald-400">{formatCurrency(PLAN_529_2026.collegeCostPublic4Year)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Private 4-Year</td>
                  <td className="py-3 text-right">{formatCurrency(PLAN_529_2026.collegeCoestPrivate4Year)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Audit Version</td>
                  <td className="py-3 text-right text-emerald-400">S-Class v2.6</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Technical Guide & Methodology */}
      <section id="logic" className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 lg:flex gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              <BarChart3 className="w-3.5 h-3.5 text-emerald-500" />
              S-Class Forensic Audit
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
              The Education <br />
              <span className="text-emerald-500">Equity Matrix.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              College savings growth is governed by **Tax-Free Compounding Loops**. Our engine audits savings trajectories through automated application of Section 529 federal tax codes and state-specific deductor logic.
            </p>

            <div className="grid gap-4">
              {[
                { title: "Compound Quant", desc: "Tax-free growth probability audit", icon: TrendingUp },
                { title: "Superfunding Audit", desc: "5-year gift acceleration logic", icon: Target },
                { title: "Qualified Loss Control", desc: "Expense eligibility mapping", icon: Lock }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                  <div className="p-3 bg-emerald-500/10 rounded-xl group-hover:bg-emerald-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[10px] font-bold text-slate-500 uppercase">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 relative">
            <div className="absolute -inset-4 bg-emerald-600/10 rounded-[3rem] blur-3xl opacity-50" />
            <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <GraduationCap className="w-64 h-64 rotate-12" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Market Calibration</div>
                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                  Institutional <br /> Savings Logic.
                </h3>
              </div>
              <div className="p-8 bg-emerald-600 rounded-[3rem] space-y-4 shadow-2xl shadow-emerald-900/20 text-center">
                <p className="text-xs font-bold text-emerald-50 uppercase tracking-widest leading-relaxed">
                  "Calibrated against 2026 IRS Section 529 guidelines, state statutory tax codes, and College Board tuition benchmarks."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert FAQ Hub (PAA Targeted) */}
      <section id="faq" className="py-32 bg-slate-950 border-y border-white/5 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-emerald-500/30 underline-offset-8">
              529 Plan FAQ.
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "What is the 529 gift limit for 2026?",
                a: "In 2026, the annual gift tax exclusion is $19,000 per donor, per beneficiary. Superfunding allows a one-time lump sum of $95,000 per donor (treated as 5 years of gifts)."
              },
              {
                q: "Are 529 contributions tax-deductible?",
                a: "Contributions are not deductible from federal income tax. However, over 30 states offer state income tax deductions or credits for contributions, ranging from $2,000 to over $20,000."
              },
              {
                q: "What are qualified education expenses?",
                a: "Funds can be used tax-free for tuition, fees, books, supplies, and room and board at accredited institutions. It also covers K-12 tuition up to $10,000 annually and $10,000 in student loan repayment."
              }
            ].map((faq, i) => (
              <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-emerald-500" />
                  Q: {faq.q}
                </h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed italic border-l border-white/10 pl-6 ml-2 group-hover:text-slate-400">
                  A: {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Related Calculators & CTA */}
      <section className="py-32 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-16 bg-gradient-to-br from-emerald-600 to-emerald-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-emerald-500/20">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                Audit Your College <br />
                Savings Trajectory.
              </h2>
              <p className="text-emerald-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                Don't leave your education equity to chance. Initiate your official S-Class forensic college savings audit.
              </p>
              <Link href="/529/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-50 transition-all hover:-translate-y-2 shadow-2xl">
                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-32">
            <RelatedCalculators currentCalc="529" count={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
