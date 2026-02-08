"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE, CALCULATORS, TBI_2026, formatCurrency } from "@/lib/calculators/tbi";
import {
  ArrowRight, Brain, AlertTriangle, Users, Activity,
  Shield, CheckCircle2, ChevronRight, Zap, Scale,
  Stethoscope, Landmark, Search, TrendingUp, Info
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-amber-500/30">
      {/* Premium Header */}
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl py-4 border-white/10" : "bg-transparent py-6 border-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 rounded-xl">
              <Brain className="w-6 h-6 text-amber-500" />
            </div>
            <span className="text-sm font-black text-white tracking-[0.2em] uppercase italic">
              TBI <span className="text-amber-500">Auditor v2.1</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Benchmarks", "Trinity", "Calculation"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-amber-500 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <Link href="/tbi/calculator" className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)]">
            Start Audit
          </Link>
        </div>
      </header>

      {/* Hero Section: The Ranking Predator Intent */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#fbbf2415,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-widest animate-pulse">
              <Zap className="w-3 h-3" /> 2026 Forensic Standards Deployed
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-[0.9]">
              Traumatic Brain <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">Injury Auditor.</span>
            </h1>

            <p className="max-w-2xl text-lg text-slate-400 font-medium leading-relaxed">
              Calculate the high-fidelity value of your TBI claim using 2026 actuarial tables.
              Our auditor injects <span className="text-white italic">Glasgow Coma Scale (GCS)</span> severity and
              <span className="text-white italic">Diffuse Axonal Injury (DAI)</span> permanence multipliers
              that generic calculators ignore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/tbi/calculator" className="group flex items-center gap-4 px-10 py-5 bg-amber-600 hover:bg-amber-500 text-black font-black uppercase tracking-widest rounded-3xl transition-all shadow-2xl">
                Start Settlement Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a href="#stats" className="flex items-center gap-4 px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest rounded-3xl border border-white/10 transition-all">
                View Benchmarks
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Matrix (H2) */}
      <section id="stats" className="py-24 border-y border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 space-y-4">
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Phase 01: Global Benchmarks</h2>
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">S-Class Benchmark Matrix.</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Annual TBI Cases", val: `${(TBI_2026.statistics.annualCases / 1000000).toFixed(1)}M`, icon: Users },
              { label: "Fatality Rate", val: `${TBI_2026.statistics.annualDeaths.toLocaleString()}`, icon: AlertTriangle, red: true },
              { label: "Fall-Related %", val: `${TBI_2026.statistics.fallsPercent}%`, icon: Activity },
              { label: "Severe Payout Avg", val: formatCurrency(TBI_2026.severityLevels[2].avgSettlement), icon: TrendingUp, gold: true }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[2.5rem] space-y-4 hover:border-amber-500/30 transition-colors">
                <div className={`p-3 rounded-2xl w-fit ${stat.red ? "bg-red-500/10 text-red-500" : stat.gold ? "bg-amber-500/10 text-amber-500" : "bg-blue-500/10 text-blue-500"}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white tracking-tighter">{stat.val}</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation Logic & Methodology (H2) */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Valuation Logic</h2>
                <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic leading-none">The Mechanics of <br />Brain Injury Valuation.</h3>
              </div>

              <p className="text-slate-400 leading-relaxed font-medium">
                Standard TBI calculators use a generic 3x multiplier that fails to account for the neuro-cognitive
                permanence of the injury. Our 2026 S-Class Auditor uses a <span className="text-white italic">Dynamic Severity Matrix</span>
                that maps Glasgow Coma Scale (GCS) inputs to specific future care actuarial data.
              </p>

              <div className="space-y-4">
                {[
                  { title: "GCS Severity Audit", desc: "Adjusts base value by 1.50x for scores below 8.", icon: Shield },
                  { title: "DAI detection Alpha", desc: "Injects 1.35x multiplier for diffuse axonal damage.", icon: Zap },
                  { title: "Neurological Life Care", desc: "Projections based on 2026 neuro-rehab indices.", icon: Stethoscope }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/5 rounded-3xl group hover:border-amber-500/30 transition-all">
                    <div className="p-4 bg-amber-500/10 rounded-2xl text-amber-500 group-hover:scale-110 transition-transform shadow-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-white uppercase text-xs tracking-widest">{item.title}</h4>
                      <p className="text-slate-500 text-[11px] font-bold mt-1 tracking-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full" />
              <div className="relative p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-[4rem] shadow-2xl">
                <div className="space-y-8">
                  <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest text-center">Severity-to-Settlement Map</h4>
                  <div className="space-y-4">
                    {TBI_2026.severityLevels.slice(0, 4).map((level, i) => (
                      <div key={i} className="flex items-center justify-between p-5 bg-black/40 rounded-3xl border border-white/5">
                        <div className="space-y-1">
                          <p className="text-[10px] font-black text-white uppercase tracking-widest">{level.level.split(' ')[0]}</p>
                          <p className="text-[9px] font-bold text-slate-500">GCS: {level.gcsScore}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-black text-amber-500 tracking-tighter">{formatCurrency(level.avgSettlement)}</p>
                          <p className="text-[8px] font-black text-slate-600 uppercase tracking-widest italic">Avg Payout</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trinity Brain Analysis (H2) */}
      <section id="trinity" className="py-32 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">The Forensic Auditor</h2>
            <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic">Trinity Brain Analysis.</h3>
            <p className="text-slate-500 max-w-2xl mx-auto font-bold uppercase text-[10px] tracking-widest">A 3-Pillar Audit of Catastrophic Brain Injury Value</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Clinical Pillar",
                subtitle: "Neuro-Cognitive Audit",
                icon: Stethoscope,
                color: "blue",
                points: ["Glasgow Coma Scale Verification", "Neuropsychological deficits", "Diffuse Axonal Injury permanence"]
              },
              {
                title: "Statutory Pillar",
                subtitle: "Liability Framework",
                icon: Landmark,
                color: "amber",
                points: ["Strict vs Vicarious Liability", "Policy Limit Gap Analysis", "State-Specific Damage Caps"]
              },
              {
                title: "Economic Pillar",
                subtitle: "Life Care Forecasting",
                icon: Activity,
                color: "emerald",
                points: ["Future Medical Cost Indices", "Vocational Rehabilitation", "Life Expectancy Adjustments"]
              }
            ].map((pillar, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/5 rounded-[3.5rem] relative group hover:border-white/20 transition-all">
                <div className={`mb-8 p-5 rounded-3xl w-fit shadow-xl ${pillar.color === 'blue' ? "bg-blue-500/20 text-blue-400" :
                    pillar.color === 'amber' ? "bg-amber-500/20 text-amber-400" : "bg-emerald-500/20 text-emerald-400"
                  }`}>
                  <pillar.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-1">{pillar.title}</h4>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5 pb-4 mb-6">{pillar.subtitle}</p>
                <ul className="space-y-4">
                  {pillar.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${pillar.color === 'blue' ? "text-blue-500" :
                          pillar.color === 'amber' ? "text-amber-500" : "text-emerald-500"
                        }`} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Legal Representation Gap */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="p-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full bg-white/10 blur-[100px] -rotate-12 translate-x-1/2" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Representation Gap.</h3>
              <p className="text-amber-100/80 font-bold uppercase text-[10px] tracking-widest">Strategic Insight for 2026 Claims</p>
              <p className="text-lg font-medium leading-relaxed">
                TBI victims with legal representation secure an average of **3.5x higher**
                settlements than those who file pro se. Don't leave your neuro-rehabilitative
                future to chance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-black/20 backdrop-blur-md rounded-[2.5rem] border border-white/10 text-center space-y-2">
                <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Pro Se (No Lawyer)</p>
                <p className="text-3xl font-black tracking-tighter">$85K</p>
              </div>
              <div className="p-8 bg-white/20 backdrop-blur-md rounded-[2.5rem] border border-white/30 text-center space-y-2 scale-110 shadow-2xl">
                <p className="text-[9px] font-black uppercase tracking-widest text-amber-200">Attorney-Led Audit</p>
                <p className="text-3xl font-black tracking-tighter">$420K+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Intelligence Intelligence Library (FAQ) */}
      <section className="py-32 max-w-4xl mx-auto px-6">
        <div className="mb-16 space-y-4">
          <h2 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.3em]">Intelligence Library</h2>
          <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic">TBI Case Intelligence.</h3>
        </div>

        <div className="space-y-6">
          {[
            { q: "Is a 'Mild' TBI worth less in a settlement?", a: "Not necessarily. While initial symptoms may be temporary, the 'Information Gain' from a neuropsychological evaluation often reveals permanent cognitive deficits that can push settlements into the mid-six-figure range." },
            { q: "How does the Glasgow Coma Scale (GCS) impact my audit?", a: "GCS is the primary technical entity used by insurers to benchmark severity. A score of 3-8 (Severe) triggers an immediate S-Class multiplier, while a 13-15 (Mild) requires more granular 'Plus Alpha' evidence to sustain high value." },
            { q: "What is the Statute of Repose in brain injury claims?", a: "Unlike a standard statute of limitations, the statute of repose can set an absolute deadline for filing, regardless of when the injury was discovered. TBI claimants must audit their filing window immediately." },
            { q: "Can 'Diffuse Axonal Injury' result in higher payouts?", a: "Yes. Because DAI is often microsopic and permanent, it proves total loss of executive function more effectively than focal injuries, leading to significantly higher non-economic damage awards." }
          ].map((faq, i) => (
            <div key={i} className="group p-8 bg-white/5 border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all">
              <h4 className="text-lg font-black text-white italic tracking-tight mb-4 flex items-center gap-4">
                <Info className="w-5 h-5 text-amber-500 flex-shrink-0" />
                {faq.q}
              </h4>
              <p className="text-[13px] text-slate-400 font-bold leading-relaxed ml-9">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-600/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic italic">Secure Your Audit.</h2>
          <p className="text-slate-400 font-black uppercase text-xs tracking-[0.4em]">Forensic Transparency Deployed</p>
          <div className="flex justify-center">
            <Link href="/tbi/calculator" className="group flex items-center gap-6 px-12 py-6 bg-amber-600 hover:bg-amber-500 text-black font-black uppercase tracking-widest rounded-[2rem] transition-all shadow-[0_0_50px_rgba(245,158,11,0.4)]">
              Calculate TBI Value Now <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="flex items-center justify-center gap-4 text-slate-600">
            <Brain className="w-5 h-5" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">TBI Auditor v2.1</span>
          </div>
          <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest leading-loose max-w-3xl mx-auto">
            Forensic Estimate • 2026 S-Class Protocol • Not Legal Advice <br />
            {TBI_2026.citation}
          </p>
          <div className="pt-10">
            <RelatedCalculators currentCalc="tbi" count={6} />
          </div>
        </div>
      </footer>
    </div>
  );
}
