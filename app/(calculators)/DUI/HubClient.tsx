"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
  PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
  Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
  Users, DollarSign, Calculator, Lock, AlertTriangle, FileWarning, Car, Landmark
} from "lucide-react";
import { SITE, CALCULATORS, DUI_COSTS_2026, STATE_DATA, formatCurrency } from "@/lib/calculators/DUI";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-red-500/30">
      {/* 1. S-Class Hero: Cinema-Crimson Legal Hub */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-500 uppercase tracking-[0.3em] animate-pulse">
              <Scale className="w-3.5 h-3.5" />
              LEGAL SETTLEMENT PROTOCOL 2026: ACTIVE
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
              DUI Cost <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-800">Audit Node.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
              Forensic 2026 DUI financial audit. Calculate statutory fines, lawyer fees, and 3-year insurance premium spikes across all 50 states.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/DUI/dui-cost" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all shadow-2xl overflow-hidden shadow-red-500/10">
                <span className="relative z-10 flex items-center gap-3 italic">
                  Analyze Conviction Costs <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                <div className="text-left">
                  <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">NHTSA DATA</p>
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
          {/* Table I: Statutory Penalty Matrix */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Gavel className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Penalty Matrix</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Offense Tier</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Fine Range</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 italic font-black text-white">First Offense</td>
                  <td className="py-3 text-right text-red-500 font-black">{formatCurrency(DUI_COSTS_2026.fineFirstOffense.min)} - {formatCurrency(DUI_COSTS_2026.fineFirstOffense.max)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Second Offense</td>
                  <td className="py-3 text-right">{formatCurrency(DUI_COSTS_2026.fineSecondOffense.min)} - {formatCurrency(DUI_COSTS_2026.fineSecondOffense.max)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 font-black text-white">High BAC (0.15+)</td>
                  <td className="py-3 text-right text-red-400">1.5x Multiplier</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table II: Insurance & DMV Arbitrage */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Insurance Impact</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Premium Factor</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Adjustment</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">Average Increase</td>
                  <td className="py-3 text-right text-red-500 font-black">+{DUI_COSTS_2026.insuranceIncreasePercent}%</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Surcharge Term</td>
                  <td className="py-3 text-right">{DUI_COSTS_2026.insuranceYears} Years</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">SR-22 Filing</td>
                  <td className="py-3 text-right text-red-400">Required</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table III: Total Cost Benchmarks */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Activity className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Cost Benchmarks</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Cost Component</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Avg Estimate</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 italic font-black text-white">Legal Representation</td>
                  <td className="py-3 text-right text-red-500 font-black">{formatCurrency(DUI_COSTS_2026.lawyerFirstOffense.min)} - {formatCurrency(DUI_COSTS_2026.lawyerFirstOffense.max)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">DUI Programs/IID</td>
                  <td className="py-3 text-right">{formatCurrency(2500)}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Audit Version</td>
                  <td className="py-3 text-right text-red-400">S-Class v2.6</td>
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
              <BarChart3 className="w-3.5 h-3.5 text-red-500" />
              S-Class Forensic Audit
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
              The Total <br />
              <span className="text-red-600">Cost Matrix.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              A DUI conviction is a **Compound Financial Event**. Our engine audits direct penalties and long-tail insurance surcharges using state-specific statutory rates and industry SR-22 benchmarks.
            </p>

            <div className="grid gap-4">
              {[
                { title: "Penalty Quant", desc: "Statutory fine & fee audit", icon: Scale },
                { title: "Insurance Surcharge", desc: "SR-22 premium impact audit", icon: Shield },
                { title: "Peripheral Costs", desc: "IID & mandatory program logic", icon: Lock }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-slate-900/50 border border-white/5 rounded-2xl group hover:bg-slate-900 transition-colors">
                  <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                    <item.icon className="w-5 h-5 text-red-500" />
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
            <div className="absolute -inset-4 bg-red-600/10 rounded-[3rem] blur-3xl opacity-50" />
            <div className="relative aspect-square bg-slate-900 border border-white/10 rounded-[4rem] p-12 overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Scale className="w-64 h-64 rotate-12 text-red-500" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Legal Calibration</div>
                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                  Institutional <br /> Settlement Logic.
                </h3>
              </div>
              <div className="p-8 bg-red-600 rounded-[3rem] space-y-4 shadow-2xl shadow-red-900/20 text-center">
                <p className="text-xs font-bold text-red-50 uppercase tracking-widest leading-relaxed">
                  "Calibrated against 2026 NHTSA economic cost benchmarks, state statutory penalty schedules, and national SR-22 insurance trends."
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
            <h2 className="text-4xl font-black text-white tracking-tighter italic uppercase underline decoration-red-500/30 underline-offset-8">
              DUI Settlement FAQ.
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "How much does a DUI cost on average in 2026?",
                q_schema: "How much does a DUI cost on average in 2026?",
                a: "For 2026, the total cost of a first-offense DUI (including lawyer fees, fines, and insurance spikes) averages between $10,000 and $15,000 nationwide."
              },
              {
                q: "What is an SR-22 and do I need one?",
                q_schema: "What is an SR-22 and do I need one?",
                a: "An SR-22 is a Certificate of Financial Responsibility required by the DMV after a DUI. It proves you have the minimum liability insurance required and usually results in high premiums."
              },
              {
                q: "Does a high BAC increase DUI costs?",
                q_schema: "Does a high BAC increase DUI costs?",
                a: "Yes, in most states, a BAC over 0.15 is considered an 'aggravated' offense, which can double statutory fines and mandatory license suspension periods."
              }
            ].map((faq, i) => (
              <div key={i} className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] space-y-4 hover:bg-slate-900 transition-all group">
                <h4 className="text-lg font-black text-white italic flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-red-500" />
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
          <div className="p-16 bg-gradient-to-br from-red-600 to-red-950 rounded-[4rem] text-center space-y-8 shadow-2xl relative overflow-hidden group shadow-red-500/20">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-none">
                Audit Your DUI <br />
                Conviction Cost.
              </h2>
              <p className="text-red-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                Don't navigate the legal matrix blind. Initiate your official S-Class forensic DUI settlement audit.
              </p>
              <Link href="/DUI/dui-cost" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-50 transition-all hover:-translate-y-2 shadow-2xl">
                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-32">
            <RelatedCalculators currentCalc="DUI" count={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
