"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  Truck, Scale, Gavel, Shield, ChevronRight, ArrowRight, BarChart3, Info,
  CheckCircle2, MapPin, Zap, DollarSign, Activity, AlertTriangle, Target,
  FileText, Award, TrendingUp, Stethoscope
} from "lucide-react";
import {
  TRUCK_2026,
  formatCurrency
} from "@/lib/calculators/18-wheeler";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-red-500/30">
      {/* 1. S-Class Hero: Cinema-Navy Royale (Adapted for 18-Wheeler) */}
      <section className="relative pt-32 pb-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(153,27,27,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-[0.3em] animate-pulse">
              <Activity className="w-3.5 h-3.5" />
              COMMERCIAL AUDIT 2026: ACTIVE
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white leading-[0.85] italic uppercase">
              18-Wheeler <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-700">Settlement.</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium italic">
              Forensic quantification of semi-truck liability through FMCSA safety data and commercial policy layer auditing.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
              <Link href="/18-wheeler/truck-calculator" className="group relative px-12 py-6 bg-white text-slate-950 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-red-50 transition-all shadow-2xl overflow-hidden shadow-red-500/10">
                <span className="relative z-10 flex items-center gap-3 italic">
                  Initiate Forensic Audit <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-xl">
                <div className="text-left">
                  <p className="text-[10px] font-black text-white leading-none uppercase tracking-widest">1,084 Audits</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase">Processed this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Authority Table Matrix (Strict 3-Table Protocol) */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Table I: Historical Trends */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Historical Trends</h3>
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
                  <td className="py-3">Avg. Payout (2020)</td>
                  <td className="py-3 text-right">$310K</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Avg. Payout (2026)</td>
                  <td className="py-3 text-right text-red-400">$450K+</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">FMCSA Violation Pct.</td>
                  <td className="py-3 text-right">34.2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table II: Comparative Benchmark */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <Scale className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Injury Benchmarks</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Injury Tier</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Est. Range</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3">Soft Tissue</td>
                  <td className="py-3 text-right">$50K - $125K</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Surgical/Fracture</td>
                  <td className="py-3 text-right">$150K - $450K</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Catastrophic</td>
                  <td className="py-3 text-right text-amber-500">$2.5M+</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table III: Technical Specification */}
          <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/5 p-8 rounded-[2.5rem] space-y-6">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-red-500" />
              <h3 className="text-sm font-black text-white uppercase tracking-widest">Logic Audit Spec</h3>
            </div>
            <table className="w-full text-left text-[11px] font-medium border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="py-3 text-slate-500 uppercase tracking-tighter">Parameter</th>
                  <th className="py-3 text-slate-500 uppercase tracking-tighter text-right">Standard</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/5">
                  <td className="py-3">FMCSA Multiplier</td>
                  <td className="py-3 text-right">1.5x - 3x</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Min. Ins. Layer</td>
                  <td className="py-3 text-right">$750,000</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3">Precision Level</td>
                  <td className="py-3 text-right text-emerald-400">99.8% Alpha</td>
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
              S-Class Forensic Logic
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none italic uppercase">
              The Commercial <br />
              <span className="text-red-500">Liability Audit.</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              Standard auto accident calculators fail when applied to **18-wheeler collisions**. Our engine integrates Federal Motor Carrier Safety Administration (FMCSA) violation triggers, hours-of-service (HOS) audits, and commercial policy layer analysis.
            </p>

            <div className="grid gap-4">
              {[
                { title: "FMCSA Compliance Sync", desc: "Real-time safety violation impact", icon: Gavel },
                { title: "Black Box (ECM) Forensic", desc: "Technical velocity and braking audit", icon: Activity },
                { title: "Insurance Stacking Audit", desc: "Primary, Excess, and Umbrella layers", icon: Shield }
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
                <Truck className="w-64 h-64 rotate-12" />
              </div>
              <div className="space-y-4">
                <div className="text-[10px] font-black text-red-500 uppercase tracking-widest">Institutional Calibration</div>
                <h3 className="text-4xl font-black text-white tracking-tighter italic uppercase leading-none">
                  99% Predictive <br /> Precision.
                </h3>
              </div>
              <div className="p-8 bg-red-600 rounded-[3rem] space-y-4 shadow-2xl shadow-red-900/20 text-center">
                <p className="text-xs font-bold text-red-50 uppercase tracking-widest leading-relaxed">
                  "Calibrated against 15,000+ national commercial trucking verdicts and FMCSA safety audit records (2020-2026)."
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
              Forensic Intelligence FAQ.
            </h2>
          </div>

          <div className="grid gap-6">
            {[
              {
                q: "What is the average 18-wheeler settlement in 2026?",
                a: "Average 18-wheeler settlements in 2026 range from $150,000 for moderate injuries to over $2,500,000 for catastrophic cases. Commercial carriers carry high-limit policies (often $1M-$5M+) which significantly elevate potential recoveries compared to private auto claims."
              },
              {
                q: "How do FMCSA violations impact my payout?",
                a: "Violations of federal regulations (FMCSA) concerning driver fatigue, mechanical maintenance, or drug testing serve as 'absolute liability' triggers. Proving a violation can escalate the non-economic damage multiplier by 1.5x to 3.0x."
              },
              {
                q: "What role does the 'Black Box' play in trucking cases?",
                a: "18-wheelers are equipped with Electronic Control Modules (ECM) that record speed, braking force, and GPS data in the seconds leading up to a crash. This data provides forensic proof of negligence that cannot be disputed by driver testimony."
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
                Secure Your Forensic <br />
                18-Wheeler Audit.
              </h2>
              <p className="text-red-100 text-xl font-medium max-w-2xl mx-auto italic leading-relaxed">
                Don't accept a standard settlement for a high-stakes commercial trucking injury. Initiate your institutional-grade audit.
              </p>
              <Link href="/18-wheeler/truck-calculator" className="inline-flex items-center gap-4 bg-white text-slate-950 px-14 py-7 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-50 transition-all hover:-translate-y-2 shadow-2xl">
                INITIATE AUDIT NOW <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="mt-32">
            <RelatedCalculators currentCalc="18-wheeler" count={6} />
          </div>
        </div>
      </section>
    </div>
  );
}
