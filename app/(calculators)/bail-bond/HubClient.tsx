"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
  PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
  Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
  Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill, Droplets, Flame
} from "lucide-react";
import { SITE, CALCULATORS, BAIL_CONSTANTS_2026, STATE_BAIL, formatCurrency } from "@/lib/calculators/bail-bond";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const topStates = useMemo(() => Object.entries(STATE_BAIL).slice(0, 4), []);
  const offenses = useMemo(() => Object.entries(BAIL_CONSTANTS_2026.bailByOffense).slice(0, 4), []);

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
      {/* 1. S-Class Hero: Cinema-Amber Jail Release Hub */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] animate-pulse">
              <Activity className="w-3.5 h-3.5" />
              BAIL PROTOCOL 2026: ACTIVE
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
              Bail Bond <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-800">Audit Node.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
              Institutional jail release forecasting. Solve for premium rates, state-specific schedules, and non-refundable bond fees.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/bail-bond/bail-calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-50 transition-all shadow-2xl overflow-hidden shadow-amber-500/10">
                <span className="relative z-10 flex items-center gap-3 italic">
                  Calculate Premium <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Scale className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">STATE SYNC</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">2026 Schedule Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table I: Offense Arbitrage */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Gavel className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Offense Profile</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Charge</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Avg Bail</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {offenses.map(([key, offense], i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 font-black text-white uppercase tracking-tighter">{key}</td>
                    <td className="py-3 text-right text-amber-400 uppercase tracking-tighter">{formatCurrency(offense.avg)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table II: State Jurisdiction */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Jurisdiction</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">State</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Premium</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {topStates.map(([key, state], i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 italic">{state.name}</td>
                    <td className="py-3 text-right text-amber-400">{(state.premiumRate * 100).toFixed(0)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table III: Premium Matrix */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Audit Matrix</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Layer</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Audit</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 font-black text-white">Non-Refundable Fee</td>
                  <td className="py-3 text-right text-amber-400">Premium</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">Cash Bail Deposit</td>
                  <td className="py-3 text-right text-amber-500 font-bold">100% Refundable</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 uppercase">Audit Version</td>
                  <td className="py-3 text-right text-amber-400">S-Class v2.6</td>
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
              <BarChart3 className="w-3.5 h-3.5 text-amber-500" />
              S-Class Statutory Audit
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
              The Bail <br />
              <span className="text-amber-600">Calculus.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Jail release costs are governed by **State Statutory Protocols**. Our engine audits cost structures based on active state schedules, offense severity multipliers, and current 2026 industry benchmarks.
            </p>

            <div className="grid gap-4">
              {[
                { title: "Premium Indexing", desc: "Forced audit of non-refundable agent fees", icon: DollarSign },
                { title: "Reform Diagnostics", desc: "Sync with active state cash bail reform", icon: Scale },
                { title: "Jurisdiction Calibration", desc: "2026 state-specific underwriting roadmap", icon: Lock }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                  <div className="p-3 bg-amber-500/10 rounded-xl group-hover:bg-amber-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-amber-500" />
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
            <div className="absolute -inset-4 bg-amber-600/10 rounded-[3rem] blur-3xl opacity-50" />
            <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Activity className="w-64 h-64 rotate-12 text-amber-900" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Premium Calibration</div>
                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                  Institutional <br /> Release Logic.
                </h3>
              </div>
              <div className="p-8 bg-amber-600 rounded-[3rem] space-y-4 shadow-2xl shadow-amber-900/20 text-center">
                <p className="text-xs font-bold text-amber-50 uppercase tracking-widest leading-relaxed">
                  "Calibrated against 2026 state bail schedules, Department of Justice pretrial data, and national bail bond industry loss ratios."
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
            <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-amber-500/30 underline-offset-8">
              Bail Bond FAQ.
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "How much does a bail bond cost in 2026?",
                a: "The standard bail bond premium is 10% of the total bail amount. For a $10,000 bail, you will pay a non-refundable $1,000 fee to the bondsman. Some states regulate these rates strictly, while others allow for slight variations based on the offense and defendant risk."
              },
              {
                q: "Is bail money refundable?",
                a: "If you pay 'cash bail' directly to the court, it is 100% refundable (less minor administrative fees) once the case concludes, regardless of the outcome. If you use a bondsman, the 10% premium fee is non-refundable, as it is the bondsman's payment for the risk and service."
              },
              {
                q: "What happens if a defendant misses a court date?",
                a: "If the defendant fails to appear, the bail is forfeited to the court. If a bondsman was used, they will likely employ a fugitive recovery agent (bounty hunter) to return the defendant to custody to avoid losing the full bail amount to the court."
              }
            ].map((faq, i) => (
              <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-amber-500" />
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
          <div className="p-16 bg-gradient-to-br from-amber-600 to-amber-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-amber-500/20">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                Audit Your Jail <br />
                Release Costs.
              </h2>
              <p className="text-amber-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                Don't overpay for your freedom. Initiate your official S-Class forensic bail bond premium audit.
              </p>
              <Link href="/bail-bond/bail-calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-50 transition-all hover:-translate-y-2 shadow-2xl">
                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {CALCULATORS.map((calc, i) => (
                <Link key={i} href={`/${calc.id}`} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-lg"><Activity className="w-6 h-6 text-amber-400" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{calc.name}</h3>
                      <p className="text-sm text-slate-400 mt-1">{calc.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <RelatedCalculators currentCalc="bail-bond" count={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
