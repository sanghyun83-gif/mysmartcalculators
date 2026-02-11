"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CONSTRUCTION_2026,
  CALCULATORS,
  formatCurrency
} from "@/lib/calculators/construction-accident";
import {
  Shield,
  Activity,
  Zap,
  Gavel,
  ChevronRight,
  ArrowRight,
  HardHat,
  Scale,
  Stethoscope,
  AlertTriangle,
  TrendingUp,
  Hammer,
  Building2,
  Construction,
  Info
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
      {/* 1. S-Class Hero (Cinema-Amber Royale) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-400 uppercase tracking-[0.2em] mb-4 animate-pulse">
              <Construction className="w-3.5 h-3.5" />
              OSHA Safety Audit Sync 2026
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Construction <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-600 italic">Settlement Auditor.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
              High-fidelity valuation for <span className="text-white text-bold">Workplace Injuries & Fatal Four</span>. Analyze Labor Law Section 240/241 liability and forensic OSHA safety breaches.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link href="/construction-accident/construction-calculator" className="bg-amber-600 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-500 transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                Launch Forensic Audit <ChevronRight className="w-5 h-5" />
              </Link>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  <Shield className="w-4 h-4 text-amber-500" /> OSHA Compliance Sync
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  <Activity className="w-4 h-4 text-emerald-500" /> Litigation Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 Anchor Navigator */}
      <div className={`sticky top-[70px] z-[110] transition-all duration-300 border-b border-white/5 py-4 hidden md:block ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="max-w-7xl auto px-6 flex items-center justify-center gap-12 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
          <a href="#pulse" className="hover:text-amber-400 transition-colors cursor-pointer">Safety Pulse</a>
          <a href="#labour" className="hover:text-amber-400 transition-colors cursor-pointer">Labour Law Logic</a>
          <a href="#trinity" className="hover:text-amber-400 transition-colors cursor-pointer">Trinity Audit</a>
          <a href="#hazard" className="hover:text-amber-400 transition-colors cursor-pointer">Forensic Hazards</a>
        </div>
      </div>

      {/* 2. Safety Pulse Board */}
      <section id="pulse" className="py-12 bg-black/40 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-amber-500/5 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Fatal Four Deaths", value: CONSTRUCTION_2026.statistics.annualDeaths.toLocaleString(), detail: "Annual OSHA Report" },
              { label: "Injury Frequency", value: `${(CONSTRUCTION_2026.statistics.annualInjuries / 1000).toFixed(0)}K`, detail: "BLS Non-Fatal" },
              { label: "Settlement Ceiling", value: "$2.5M+", detail: "Catastrophic Cases" },
              { label: "Industry Pulse", value: CONSTRUCTION_2026.statistics.status, detail: "Verified Claims" }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default border-l border-amber-500/20 pl-6 space-y-1 hover:border-amber-500 transition-colors">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                <p className="text-[10px] font-bold text-amber-500/60 uppercase">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Labor Law Section 240 Logic */}
      <section id="labour" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">Absolute <br />Liability Pillars.</h2>
              <div className="h-1.5 w-24 bg-amber-600 rounded-full" />
            </div>

            <div className="prose prose-invert prose-slate text-lg font-medium leading-[1.8] text-slate-400 space-y-8">
              <p>
                Construction settlements are governed by stringent statutory frameworks. In NY, **Labor Law Section 240 (The Scaffold Law)** imposes absolute liability on owners and contractors for gravity-related injuries.
              </p>
              <p>
                Our S-Class auditor accounts for the **Expert Delta**—the escalation triggered by OSHA safety breaches (PPE, Fall Protection, Trench Shoring) and third-party negligence.
              </p>
            </div>

            <div className="grid gap-6">
              {CALCULATORS.map((calc, i) => {
                const Icon = calc.icon;
                return (
                  <Link key={i} href={`/${calc.id}`} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                    <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">{calc.name}</h4>
                      <p className="text-sm text-slate-500 font-bold">{calc.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="sticky top-12 p-12 bg-slate-900 border border-amber-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-all">
              <HardHat className="w-64 h-64 text-amber-600" />
            </div>
            <div className="relative z-10 space-y-10">
              <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">Legal <span className="text-amber-500">Framework Matrix.</span></h3>
              <p className="text-slate-400 font-bold italic text-sm border-l-2 border-amber-500 pl-6 leading-loose">
                "Section 240 claims are priority litigation targets. 85% of cases involving catastrophic falls result in high-tier settlements."
              </p>

              <div className="space-y-4">
                {CONSTRUCTION_2026.legalFramework.map((framework, i) => (
                  <div key={i} className={`p-6 rounded-3xl border transition-all ${i === 2 ? "bg-amber-500/10 border-amber-500/30 shadow-xl" : "bg-black/40 border-white/5"}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{framework.name}</span>
                      <span className="text-sm font-black text-amber-400 uppercase tracking-widest">{framework.multiplier}X Esc</span>
                    </div>
                    <p className="text-[10px] font-bold text-slate-600 uppercase">{framework.description}</p>
                  </div>
                ))}

                <div className="p-6 bg-amber-600 rounded-3xl shadow-xl space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-black uppercase text-white/80 tracking-widest">Catastrophic Premium</span>
                    <span className="px-2 py-1 bg-white text-[10px] font-black text-amber-600 rounded">SECTION 240/241</span>
                  </div>
                  <p className="text-[10px] text-white/60 font-medium leading-relaxed uppercase">
                    Site safety audits often reveal absolute liability triggers that increase valuation by 200% compared to standard workers' comp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trinity Audit Section */}
      <section id="trinity" className="py-32 bg-slate-900/10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic">Trinity Audit.</h2>
            <p className="text-amber-500 font-black text-xs uppercase tracking-[0.4em]">Construction Liability Forensic Framework</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                id: "01",
                title: "Clinical / Injury",
                icon: Stethoscope,
                desc: "Forensic analysis of vertebral fractures, traumatic brain injury (TBI), and crush syndrome mapping.",
                entities: ["Vertebral Matrix", "Diagnosis Audit"]
              },
              {
                id: "02",
                title: "Statutory / OSHA",
                icon: Shield,
                desc: "Synchronization with OSHA CFR Part 1926 standards, focusing on Fall Protection and Hazard Communication.",
                entities: ["OSHA Part 1926", "Safety Breaches"]
              },
              {
                id: "03",
                title: "Economic / Liability",
                icon: Scale,
                desc: "Actuarial calculation of future life care costs, lost earning capacity, andSection 240/241 Absolute Liability.",
                entities: ["Labor Law 240/241", "Life Care Costs"]
              }
            ].map((pillar, i) => (
              <div key={i} className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-amber-500/5 transition-all overflow-hidden border-b-4 border-b-transparent hover:border-b-amber-500">
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 italic scale-150 group-hover:text-amber-500/10 transition-colors uppercase">{pillar.id}</div>
                <div className="mb-8">
                  <pillar.icon className="w-12 h-12 text-amber-500 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-2xl font-black text-white mb-6 italic tracking-tighter uppercase leading-none">{pillar.title}</h4>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8 relative z-10">{pillar.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {pillar.entities.map((e, j) => (
                    <span key={j} className="text-[8px] font-black uppercase px-2 py-1 bg-white/5 border border-white/10 text-slate-500 rounded-full tracking-widest">{e}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Forensic Hazards (OSHA Fatal Four) */}
      <section id="hazard" className="py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">Forensic Hazards.</h2>
            <p className="text-amber-500 font-black text-xs uppercase tracking-[0.4em]">OSHA 2026 Fatal Four Data</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Falls", val: "33.5%", color: "text-amber-500", icon: Building2 },
              { label: "Struck by", val: "11.1%", color: "text-orange-500", icon: Gavel },
              { label: "Electrocution", val: "8.5%", color: "text-yellow-400", icon: Zap },
              { label: "Caught-In", val: "5.5%", color: "text-red-500", icon: Hammer }
            ].map((hazard, i) => (
              <div key={i} className="text-center p-8 bg-white/5 border border-white/5 rounded-3xl space-y-4">
                <hazard.icon className={`w-10 h-10 mx-auto ${hazard.color}`} />
                <div>
                  <p className="text-3xl font-black text-white italic">{hazard.val}</p>
                  <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{hazard.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-12 bg-amber-500/5 border border-amber-500/20 rounded-[3rem] space-y-6">
            <h3 className="text-xl font-black text-white uppercase italic tracking-tighter leading-none">The Scaffolding <span className="text-amber-500">Hazard Pulse.</span></h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed uppercase tracking-tight">
              Falls remain the absolute leading cause of construction injury litigation. S-Class v2.1 focuses on the **Expert Delta** for fall-related spinal and TBI cases, where Labor Law Section 240 provides the strongest legal leverage for maximum settlements.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Forensic CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-20 bg-gradient-to-br from-amber-600 to-slate-950 rounded-[5rem] text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_rgba(245,158,11,0.2)] border border-amber-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">Analyze New York <br />Labor Law Liability.</h2>
              <p className="text-amber-100 text-xl font-bold max-w-2xl mx-auto leading-relaxed italic opacity-80 uppercase tracking-tight">
                Access the S-Class Forensic Audit Engine. Estimate your settlement based on OSHA breaches and 2026 Fatal Four statistics.
              </p>
              <Link href="/construction-accident/construction-calculator" className="inline-flex items-center gap-4 bg-white text-slate-900 px-16 py-8 rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl">
                Start Forensic Audit <ArrowRight className="w-6 h-6 text-amber-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center items-center gap-3">
            <HardHat className="w-6 h-6 text-amber-500" />
            <span className="text-xl font-black text-white tracking-widest uppercase italic">Construction Accident Auditor.</span>
          </div>
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.4em] max-w-3xl mx-auto leading-loose">
            OSHA CFR Part 1926 Sync • NY Labor Law 240/241 Framework • Not Legal Advice • Professional Actuarial Settlement Estimate
          </p>
          <div className="pt-12 flex justify-center gap-12 text-[10px] font-black text-slate-500 uppercase tracking-widest font-mono">
            <Link href="/spinal-cord" className="hover:text-amber-400 transition-colors cursor-pointer">Back Injury Audit</Link>
            <Link href="/brain-injury" className="hover:text-amber-400 transition-colors cursor-pointer">TBI Assessment</Link>
            <Link href="/wrongful-death" className="hover:text-amber-400 transition-colors cursor-pointer">Fatal Four Death</Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <RelatedCalculators currentCalc="construction-accident" count={6} />
        </div>
      </footer>
    </div>
  );
}
