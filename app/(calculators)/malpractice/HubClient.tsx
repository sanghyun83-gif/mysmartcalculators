"use client";

import Link from "next/link";
import { SITE, CALCULATORS, MALPRACTICE_CONSTANTS, formatCurrency } from "@/lib/calculators/malpractice";
import { ArrowRight, Shield, Stethoscope, AlertTriangle, Scale, Activity, Gavel, Info, FileText, ChevronRight, Zap, Target, BookOpen } from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function MalpracticeHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* S-Class Top Navigation / Breadcrumb */}
      <div className="border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-amber-500 transition-colors">
              Discovery
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-700" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">
              Medical Malpractice v2.1
            </span>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">2026 Actuarial Staging Live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

        {/* Sidebar Audit Navigation */}
        <aside className="lg:col-span-3 space-y-8">
          <div className="sticky top-32 space-y-8">
            <div className="space-y-2">
              <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Case Audit Hub</div>
              <h2 className="text-2xl font-black text-white italic tracking-tighter">Settlement Intelligence.</h2>
            </div>

            <nav className="space-y-1">
              {[
                { n: "Valuation Matrix", id: "#valuation", icon: Target },
                { n: "Trinity Audit", id: "#trinity", icon: Zap },
                { n: "Standard of Care", id: "#care", icon: Shield },
                { n: "Statutory Caps", id: "#caps", icon: Gavel },
                { n: "Representation Gap", id: "#gap", icon: Scale }
              ].map((item) => (
                <Link
                  key={item.id}
                  href={item.id}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/5 rounded-2xl text-xs font-bold text-slate-400 hover:text-white hover:bg-white/10 hover:border-amber-500/30 transition-all group"
                >
                  <item.icon className="w-4 h-4 text-amber-500/50 group-hover:text-amber-500 transition-colors" />
                  {item.n}
                </Link>
              ))}
            </nav>

            <div className="p-6 bg-amber-500/10 border border-amber-500/20 rounded-[2.5rem] space-y-4">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Authority signal</span>
              </div>
              <p className="text-xs font-bold text-slate-300 leading-relaxed italic">
                "93% of medical malpractice claims settle before trial, but 0.1% of 'Never-Events' trigger 8-figure verdicts."
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:col-span-9 space-y-32">

          {/* Hero Section */}
          <div className="space-y-8 text-balance">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-400 uppercase tracking-[0.2em]">
              <Activity className="w-3.5 h-3.5 animate-pulse" /> Clinical Forensic Engine v2.1
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase">
              Clinical <span className="text-amber-500 italic">Negligence</span> Audit.
            </h1>
            <p className="text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl">
              Medical malpractice occurs when a healthcare provider breaches the <span className="text-white italic underline decoration-amber-500 decoration-2 underline-offset-4">Standard of Care</span>, causing tangible harm. Our S-Class engine audits your clinical scenario against 2026 actuarial benchmarks.
            </p>
          </div>

          {/* Section 1: Valuation Matrix */}
          <section id="valuation" className="grid md:grid-cols-3 gap-6">
            {[
              { l: "Surgical Errors", v: formatCurrency(MALPRACTICE_CONSTANTS.avgSettlements.surgicalError.avg), d: "Egregious 'Never-Events' or retained instruments." },
              { l: "Birth Injuries", v: formatCurrency(MALPRACTICE_CONSTANTS.avgSettlements.birthInjury.avg), d: "Cerebral palsy or oxygen deprivation staging." },
              { l: "Medication Mis-step", v: formatCurrency(MALPRACTICE_CONSTANTS.avgSettlements.medicationError.avg), d: "Dosage errors or dangerous drug interactions." }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[3rem] space-y-4 hover:border-amber-500/20 transition-all hover:-translate-y-1">
                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Market Benchmark</div>
                <div className="text-3xl font-black text-white italic">{stat.v}</div>
                <div className="text-sm font-bold text-slate-300">{stat.l}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.d}</p>
              </div>
            ))}
          </section>

          {/* Section 2: Trinity Audit Framework */}
          <section id="trinity" className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-500/20" />
              <h2 className="text-4xl font-black text-white italic tracking-tighter uppercase underline decoration-amber-500 decoration-4 underline-offset-8">The Trinity Audit.</h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-500/20" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Clinical Staging", d: "Analysis of the specific 'Standard of Care' breach using IOM and Clinical Practice Guidelines (CPG) metrics.", icon: Stethoscope },
                { t: "Statutory Defense", d: "Auditing state-specific damage caps (e.g., MICRA in CA) and 'Expert Affidavit' requirements for filing.", icon: Gavel },
                { t: "Insurance Staging", d: "Evaluating the hospital's self-insurance limits vs. individual physician's professional liability coverage.", icon: Shield }
              ].map((pillar, i) => (
                <div key={i} className="group relative p-10 bg-white/5 border border-white/5 rounded-[4rem] hover:bg-white/10 transition-all">
                  <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <pillar.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-4 lowercase italic">{pillar.t}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">{pillar.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Legal Representation Gap (Predator Matrix) */}
          <section id="gap" className="p-16 bg-amber-500 border border-amber-400 rounded-[5rem] text-slate-950 space-y-10 shadow-2xl shadow-amber-500/20">
            <div className="space-y-4">
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-[0.9]">The Pro Se <br /> Valuation <span className="italic">Gap</span>.</h2>
              <p className="text-xl font-bold opacity-80 max-w-2xl">
                Unrepresented claimants receive significantly lower settlements. S-Class data shows a 3.5x valuation boost when leveraging clinical expert testimony.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-950/10">
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Pro Se (No Counsel)</div>
                <div className="text-4xl font-black italic">$42,000</div>
                <div className="h-2 w-full bg-slate-950/20 rounded-full overflow-hidden">
                  <div className="h-full w-[15%] bg-slate-950" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Expert Legal Audit</div>
                <div className="text-4xl font-black italic">$147,000+</div>
                <div className="h-2 w-full bg-slate-950/20 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-white shadow-lg" />
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Deep Content & EEAT */}
          <section id="care" className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-white italic tracking-tighter">Establishing the Breach.</h2>
                <div className="prose prose-invert prose-slate text-slate-400 font-medium leading-[1.8]">
                  <p>
                    To win a medical malpractice case, you must prove four elements: **Duty, Breach, Causation, and Damages**. The most difficult is proving the "Breach"—that the doctor's actions fell below the accepted standard of care.
                  </p>
                  <p>
                    In 2026, courts increasingly rely on **Clinical Practice Guidelines (CPGs)** as a benchmark. If a physician deviates from these guidelines without a documented clinical rationale, it creates a "Negligence Per Se" scenario that maximizes settlement leverage.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900 border border-white/5 rounded-[4rem] p-12 space-y-8">
                <div className="text-[10px] font-black text-amber-500 uppercase tracking-widest">Technical Entity Map</div>
                <ul className="space-y-4">
                  {[
                    "Expert Affidavit of Merit Requirements",
                    "Statute of Repose vs Limitations",
                    "Vicarious Liability / Respondeat Superior",
                    "Comparative Negligence Defense",
                    "MICRA and Noneconomic Caps"
                  ].map((entity, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" /> {entity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Pre-submission CTA */}
          <div className="p-20 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[5rem] text-center space-y-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
              <Scale className="w-64 h-64 text-amber-500" />
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-500 font-black text-xs uppercase tracking-widest">
                <Zap className="w-4 h-4 fill-amber-500" /> Ready for Clinical Audit
              </div>
              <h2 className="text-5xl font-black text-white italic tracking-tighter uppercase underline decoration-amber-500 decoration-8 underline-offset-4">Run the Auditor.</h2>
              <p className="text-lg text-slate-400 font-medium max-w-xl mx-auto">
                Ingest your surgical logs, misdiagnosis timeline, and billing data for a 2026 forensic projection.
              </p>
            </div>
            <Link
              href="/malpractice/settlement"
              className="inline-flex items-center gap-4 bg-amber-500 hover:bg-amber-400 text-slate-950 px-12 py-6 rounded-full font-black uppercase italic tracking-wider transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-amber-500/20"
            >
              Start Forensic Calculation <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col items-center">
            <div className="w-full max-w-xs">
              <RelatedCalculators currentCalc="malpractice" count={5} />
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
