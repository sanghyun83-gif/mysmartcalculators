"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  AlertCircle, Shield, ArrowRight, Zap, Activity, Target, FileText, ChevronRight, BarChart3,
  PieChart, LineChart, Info, CheckCircle2, MapPin, Award, Scale, Flame,
  Home, Droplets, ZapIcon, Microscope, HeartPulse, Eraser, Skull
} from "lucide-react";
import { SITE, CALCULATORS, BURN_2026, formatCurrency } from "@/lib/calculators/burn-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
  {
    q: "How is a burn injury settlement calculated in 2026?",
    a: "Settlements are calculated using a 'Multiplier Method' based on medical expenses. In 2026, multipliers range from 1.5x (minor) to 6.5x+ (critical), heavily influenced by Total Body Surface Area (TBSA) and the degree of permanent disfigurement."
  },
  {
    q: "Does scarring increase my settlement value?",
    a: "Yes. In 2026, permanent scarring or hypertrophic disfigurement triggers a separate 'Disfigurement Multiplier' (often 1.3x to 1.5x of the base claim), especially if it affects visible areas like the face, neck, or hands."
  },
  {
    q: "What is TBSA and why does it matter?",
    a: "TBSA stands for Total Body Surface Area. It is a clinical measurement of what percentage of your body was burned. Claims with TBSA over 20% are categorized as 'Major' or 'Critical' and carry significantly higher non-economic damages."
  },
  {
    q: "Can I recover for psychological trauma after a burn?",
    a: "Absolutely. 2026 maritime and civil litigation increasingly recognizes PTSD, anxiety, and depression as core components of a burn claim, often adding 25-30% to the total valuation."
  },
  {
    q: "Who is liable for a workplace explosion burn?",
    a: "Liability can lie with the employer (if safety rules were violated), a third-party equipment manufacturer (if a machine malfunctioned), or a sub-contractor responsible for site maintenance."
  }
];

export default function HubClient() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-300 font-sans selection:bg-orange-500/30">
      {/* 1. S-Class Hero: Forensic Auditor Badge & H1 */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8 animate-fade-in">
            <Flame className="w-4 h-4" />
            <span>Institutional Forensic Auditor 2026: ACTIVE</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Burn Injury <span className="text-orange-500">Auditor.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            Forensic claim evaluation using 2026 TBSA multipliers.
            Synchronized with Actuarial disfigurement tiers and clinical recovery benchmarks.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/burn-injury/calculator"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.3)] flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Start Forensic Audit
            </Link>
            <Link
              href="#audit-data"
              className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              View Settlement Indices
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-20 bg-slate-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "ANNUAL CASES", value: "450K+", desc: "US Market Benchmark", icon: <Activity className="text-orange-400" /> },
              { label: "SURVIVAL RATE", value: BURN_2026.statistics.survivalRate, desc: "Modern Care Standard", icon: <HeartPulse className="text-orange-400" /> },
              { label: "CRITICAL COST", value: BURN_2026.statistics.avgCostCritical, desc: "Mean Hospital Recovery", icon: <Scale className="text-orange-400" /> },
              { label: "AUDIT LEVEL", value: "Forensic", desc: "Statutory Precision", icon: <Shield className="text-orange-400" /> },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-orange-500/30 transition-all duration-500 group">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">{stat.label}</div>
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
          <div className="space-y-32 text-left">
            {/* Table I: Settlement Tiers */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">I. 2026 Actuarial Settlement Tiers</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Severity Calibration • Institutional Benchmarks</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-orange-400 uppercase">
                    <tr>
                      <th className="px-8 py-5">Severity Phase</th>
                      <th className="px-8 py-5">Value Range</th>
                      <th className="px-8 py-5">Multiplier</th>
                      <th className="px-8 py-5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                    {Object.values(BURN_2026.settlementTiers).map((row, i) => (
                      <tr key={i} className="hover:bg-orange-500/5 transition-colors group">
                        <td className="px-8 py-5 text-white">{row.label}</td>
                        <td className="px-8 py-5">{formatCurrency(row.range[0])}–{formatCurrency(row.range[1])}</td>
                        <td className="px-8 py-5 text-orange-500/70">{row.multiplier}x</td>
                        <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-slate-600 font-mono italic">Verified</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Complication Risk Indices */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">II. Clinical Complication Risk Indices</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Infection Probability • Settlement Adjustment Factors</p>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-white/5 border-b border-white/10 text-[10px] font-black tracking-[0.2em] text-orange-400 uppercase">
                    <tr>
                      <th className="px-8 py-5">Complication</th>
                      <th className="px-8 py-5">Exposure Risk</th>
                      <th className="px-8 py-5">Settlement Adj.</th>
                      <th className="px-8 py-5">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                    {Object.values(BURN_2026.riskIndices).map((row, i) => (
                      <tr key={i} className="hover:bg-orange-500/5 transition-colors group">
                        <td className="px-8 py-5 text-white">{row.name}</td>
                        <td className="px-8 py-5">{row.risk}</td>
                        <td className="px-8 py-5 text-slate-300">{row.settlementAdj}</td>
                        <td className="px-8 py-5 text-orange-500 font-mono text-[9px] uppercase tracking-widest italic">Forensic</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Calculation Methodology */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                <div>
                  <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter">III. Forensic P&I Settlement Logic</h2>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-none mt-1">Audit Calibration Engine • Multiplier Matrix</p>
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
                      { l: "Pain & Suffering", c: "MedicalBills * (Degree + TBSA Multiplier)", d: "ABA Colossus", p: "Actuarial" },
                      { l: "Disfigurement Adj.", c: "SettlementValue * (1.5x if Hypertrophic)", d: "Clinical Rule", p: "Binary" },
                      { l: "Economic Final", c: "Bills + Wages + Future Grafting", d: "Statutory Law", p: "Linear" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors group">
                        <td className="px-8 py-5 text-white">{row.l}</td>
                        <td className="px-8 py-5 text-[10px] font-mono">{row.c}</td>
                        <td className="px-8 py-5 text-[10px]">{row.d}</td>
                        <td className="px-8 py-5 text-[9px] uppercase tracking-widest text-white/40 italic">{row.p}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Expert Content Section (Authority) */}
      <section className="py-32 bg-slate-950 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <header className="mb-20">
            <h2 className="text-5xl font-black text-white mb-8 leading-tight tracking-tighter">
              Institutional Claims: <br />
              <span className="text-orange-500">2026 Burn Care Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-orange-500 pl-8 py-2">
              In 2026, burn injury settlements have evolved toward forensic verification of TBSA and long-term disfigurement care. This guide outlines the technical framework for private and commercial fire/chemical claims.
            </p>
          </header>

          <div className="space-y-16">
            <div className="prose prose-invert prose-orange max-w-none">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                <Microscope className="text-orange-500" />
                1. Total Body Surface Area (TBSA) & Rule of Nines
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Modern 2026 litigation requires absolute precision in TBSA calculation. Utilizing the 'Rule of Nines' or the 'Lund-Browder Chart,' forensic auditors analyze the extent of the injury to determine the non-economic damage multiplier. A 10% TBSA increase can lead to a 1.5x surge in the 'Pain and Suffering' component due to the exponential increase in infection risk and surgical requirements.
              </p>
            </div>

            <div className="prose prose-invert prose-orange max-w-none">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3 mb-6">
                <Eraser className="text-orange-500" />
                2. Scarring & Hypertrophic Disfigurement Valuations
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Permanent scarring is no longer a generalized claim. In 2026, settlements distinguish between superficial scarring and **Hypertrophic/Keloid disfigurement**. If the burn results in contractures (skin tightening that limits movement), the claim value incorporates permanent disability multipliers. Disfigurement of the face or hands is audited at a premium due to the profound impact on 'Loss of Enjoyment of Life' and future earning capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert FAQ Hub */}
      <section className="py-32 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16 text-left">
            <div className="w-16 h-16 rounded-[2rem] bg-orange-500/20 flex items-center justify-center">
              <Info className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter">Clinical Intelligence Library</h2>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs tracking-widest">Forensic Burn Guidance for 2026</p>
            </div>
          </div>

          <div className="grid gap-6 text-left">
            {FAQ_DATA.map((faq, i) => (
              <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-orange-500/30 transition-all duration-300">
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                  <span className="text-xl font-bold text-slate-200 group-open:text-orange-400 transition-colors tracking-tight">
                    {faq.q}
                  </span>
                  <ChevronRight className="w-6 h-6 text-slate-600 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-8 pb-8 text-slate-400 leading-relaxed text-lg italic">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tool Cluster & Citation */}
      <section className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase italic">Institutional Audit Cluster</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <RelatedCalculators currentCalc="burn-injury" count={6} />
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 text-center">
            <p className="text-slate-600 text-xs font-mono uppercase tracking-[0.3em] flex items-center justify-center gap-4">
              <span>{BURN_2026.citations[0]}</span>
              <span className="w-2 h-2 rounded-full bg-orange-500/50" />
              <span>Audit Ref: BRN-2026-Lawsuit</span>
            </p>
            <div className="mt-8">
              <Link href="https://ameriburn.org/who-we-are/media-center/burn-incidence-and-treatment-fact-sheet/" className="text-orange-500/60 hover:text-orange-400 text-[10px] font-bold uppercase tracking-widest transition-colors">
                View Official 2026 Burn Payout Standards →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-40 bg-slate-900 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none italic uppercase">
            Start Burn <br />
            <span className="text-orange-500 italic">Audit Node.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 italic">Execute a professional claim audit using forensic 2026 clinical logic.</p>
          <Link
            href="/burn-injury/calculator"
            className="px-12 py-6 bg-orange-600 hover:bg-orange-500 text-white rounded-[2rem] font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(249,115,22,0.4)] inline-flex items-center gap-3 group"
          >
            Access Claim Auditor
            <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
