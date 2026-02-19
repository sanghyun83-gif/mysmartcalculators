"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
  PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale,
  Gavel, Briefcase, TrendingDown, Ban, Stethoscope, HeartPulse, Clock, TrendingUp,
  Users, DollarSign, Calculator, Lock, AlertTriangle, Heart, Pill, Droplets, Flame,
  Thermometer, ShieldAlert
} from "lucide-react";
import { SITE, CALCULATORS, BENZENE_2026, formatCurrency } from "@/lib/calculators/benzene";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const diseases = useMemo(() => BENZENE_2026.diseases.slice(0, 4), []);

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
      {/* 1. S-Class Hero: Cinema-Amber Toxicity Hub */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-[0.3em] animate-pulse">
              <AlertTriangle className="w-3.5 h-3.5" />
              EXPOSURE AUDIT 2026: ACTIVE
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
              Benzene Leukemia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-amber-800">S-Class Node.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
              Institutional carcinogenic settlement forecasting. Audit claim values for AML, MDS, and occupational benzene toxicity protocols.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/benzene/calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-amber-50 transition-all shadow-2xl overflow-hidden shadow-amber-500/10">
                <span className="relative z-10 flex items-center gap-3 italic">
                  Calculate Settlement <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                <div className="p-2 bg-amber-500/10 rounded-lg">
                  <Scale className="w-5 h-5 text-amber-500" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">OSHA 1910 SYNC</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Exposure Threshold Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table I: Disease Arbitrage */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Droplets className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Disease Profile</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Condition</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Settlement</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {diseases.map((d, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 font-black text-white uppercase tracking-tighter">{d.disease.split(' ')[0]}</td>
                    <td className="py-3 text-right text-amber-400 uppercase tracking-tighter">{formatCurrency(d.avgSettlement)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table II: Occupational Metrics */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Gavel className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Exposure Stats</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Metric</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Value</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">Annual Related Cases</td>
                  <td className="py-3 text-right text-amber-400">{BENZENE_2026.statistics.benzeneRelatedCases}</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">OSHA PEL</td>
                  <td className="py-3 text-right text-white">{BENZENE_2026.statistics.oshaPEL} ppm</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">Avg Settlement</td>
                  <td className="py-3 text-right text-amber-400">{formatCurrency(BENZENE_2026.statistics.avgSettlement)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table III: Audit Scalar Matrix */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-amber-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Audit Matrix</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Scalar</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Audit</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 font-black text-white">Refinery Bonus</td>
                  <td className="py-3 text-right text-amber-400">1.4x Value</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 italic">20+ Year Duration</td>
                  <td className="py-3 text-right text-amber-500 font-bold">1.5x Scalar</td>
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
              S-Class Forensic Audit
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
              The Benzene <br />
              <span className="text-amber-600">Calculus.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Compensation for benzene exposure is driven by **Hematopoietic Toxicity Metrics**. Our engine audits claim values based on marrow degradation scores, occupational exposure vectors, and long-term diagnostic latency protocols.
            </p>

            <div className="grid gap-4">
              {[
                { title: "Exposure Vector", desc: "Analysis of refinement and chemical vectors", icon: Flame },
                { title: "Duration Scalar", desc: "Yearly exposure indexing logic", icon: Clock },
                { title: "Clinical Audit", desc: "Calculates specific leukemia stage multipliers", icon: Activity }
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
                <FileText className="w-64 h-64 rotate-12 text-amber-900" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Claim Calibration</div>
                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                  Forensic <br /> Exposure Logic.
                </h3>
              </div>
              <div className="p-8 bg-amber-600 rounded-[3rem] space-y-4 shadow-2xl shadow-amber-900/20 text-center">
                <p className="text-xs font-bold text-amber-50 uppercase tracking-widest leading-relaxed">
                  "Calibrated against 2026 OSHA 29 CFR 1910 benchmarks, petrochemical industry settlement data, and NIOSH occupational cancer reports."
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
              Benzene FAQ.
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "What is the primary link between Benzene and Leukemia?",
                a: "Benzene is a known human carcinogen that affects the blood-forming organs. Long-term exposure, typically in industrial settings like refineries or chemical plants, significantly increases the risk of Acute Myeloid Leukemia (AML) and other bone marrow disorders."
              },
              {
                q: "How much is an average benzene settlement worth in 2026?",
                a: "Settlement values vary by diagnosis. AML cases often see benchmarks ranging from $500,000 to over $2,000,000. Occupations with higher exposure levels, such as refinery workers with 20+ years of history, command the highest settlements."
              },
              {
                q: "Can I file a claim if my exposure was decades ago?",
                a: "Yes. Benzene-related cancers often have a long latency period, sometimes appearing 15-30 years after the initial exposure. S-Class v2.6 protocols account for these latency factors in settlement auditing."
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
                Audit Your <br />
                Exposure Claim.
              </h2>
              <p className="text-amber-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                Don't let industrial negligence go unpunished. Initiate your official S-Class forensic benzene settlement audit.
              </p>
              <Link href="/benzene/calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-50 transition-all hover:-translate-y-2 shadow-2xl">
                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <RelatedCalculators currentCalc="benzene" count={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
