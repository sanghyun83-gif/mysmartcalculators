"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE, SLIP_FALL_CONSTANTS_2026, FALL_LOCATIONS, formatCurrency } from "@/lib/calculators/slip-and-fall";
import {
  ArrowRight, Building, AlertTriangle, Scale, Shield,
  Gavel, Search, BarChart3, Info, Star, CheckCircle2,
  Footprints, Eye, Activity
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "liability", label: "Liability Audit", icon: Gavel },
    { id: "damages", label: "Damages Matrix", icon: BarChart3 },
    { id: "stratagem", label: "Legal Stratagem", icon: Shield },
    { id: "faq", label: "Case Law FAQ", icon: Info },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* S-Class Premium Navigator */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-amber-500 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
              <Footprints className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">{SITE.name} <span className="text-amber-500 not-italic text-sm ml-1">v2.1</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors uppercase italic">{item.label}</a>
            ))}
          </div>
          <Link href="/slip-and-fall/slip-fall-settlement" className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] font-black">Audit Claim</Link>
        </div>
      </nav>

      {/* S-Class Hero Section: The Gold Standard for Premises Liability */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.1),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 animate-fade-in">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">2026 ANSI/NFSI Actuarial Standard</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[0.9] uppercase italic">
            Slip & Fall <span className="text-amber-500 not-italic">Liability Auditor</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            The definitive forensic engine for quantifying Premises Liability damages
            using <span className="text-white italic">Notice Quality Analysis</span> and ANSI-grade safety benchmarks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/slip-and-fall/slip-fall-settlement" className="w-full sm:w-auto bg-amber-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 hover:scale-105 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)] flex items-center justify-center gap-3 italic">
              Launch Damages Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Global Liability Matrix */}
      <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Annual Injuries", value: "1.2M", suffix: "+", color: "text-white" },
              { label: "Avg Jury Verdict", value: "$185K", suffix: "", color: "text-amber-500" },
              { label: "Hip Fracture High", value: "$500K", suffix: "+", color: "text-white" },
              { label: "Notice Delta", value: "1.35x", suffix: "", color: "text-red-500" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter ${stat.color}`}>{stat.value}{stat.suffix}</p>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors uppercase italic">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trinity Audit Pillars: Liability, Damages, Stratagem */}
      <section id="trinity" className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-[11px] font-black text-amber-500 uppercase tracking-[0.4em] italic font-black">The S-Class Trinity Framework</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase shrink-0">Comprehensive <span className="text-amber-500 not-italic">Premises Liability Audit</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              id: "liability",
              title: "Liability Audit",
              desc: "Quantifying Actual vs. Constructive notice. Analyzing the property owner's duty to inspect and failure to warn.",
              icon: Gavel,
              color: "amber",
              features: ["Notice Quality Score", "Inspection Log Discovery", "ANSI B101.1 Benchmarks"]
            },
            {
              id: "damages",
              title: "Damages Matrix",
              desc: "Cross-referencing orthopaedic trauma codes against 2026 economic wage-loss and future care life-care plans.",
              icon: BarChart3,
              color: "red",
              features: ["Pain & Suffering Multiplier", "Lien Mitigation Delta", "Future Earnings Modeling"]
            },
            {
              id: "stratagem",
              title: "Legal Stratagem",
              desc: "Bypassing comparative negligence traps by documenting hazard duration through surveillance forensics.",
              icon: Shield,
              color: "blue",
              features: ["Negligence Bar Audit", "Video Impact Forensics", "Comparative Defense Buffer"]
            }
          ].map((pillar, i) => (
            <div key={i} id={pillar.id} className="p-10 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-amber-500/20 transition-all group">
              <div className={`w-14 h-14 rounded-2xl bg-${pillar.color}-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <pillar.icon className={`w-7 h-7 text-${pillar.color}-500`} />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tight">{pillar.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">{pillar.desc}</p>
              <ul className="space-y-3">
                {pillar.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-colors uppercase italic font-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Representation Valuation Gap (Step 5 Conversion Anchor) */}
      <section className="py-32 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase italic">The Representation <br /><span className="text-amber-500 not-italic">Valuation Gap</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Internal insurance adjusters prioritize claims with ANSI-grade safety expert reports.
                Claims filed with forensic representation see a 3.2x increase in settlement floor values.
              </p>
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-slate-500 italic font-black">Unrepresented Average</span>
                  <span className="text-xl font-black text-slate-400">$18,500</span>
                </div>
                <div className="p-6 bg-amber-500/10 rounded-2xl border border-amber-500/30 flex items-center justify-between relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-20 h-full bg-amber-500/20 blur-3xl group-hover:w-40 transition-all" />
                  <span className="text-xs font-black uppercase text-amber-500 italic font-black">Attorney-Led Audit</span>
                  <span className="text-2xl font-black text-white">$65,000+</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/10 blur-[100px] pointer-events-none" />
              <div className="bg-slate-950 border border-white/10 p-2 rounded-[2rem] transform rotate-3 shadow-2xl">
                <div className="bg-slate-900 rounded-[1.8rem] p-10 space-y-6">
                  <div className="flex items-center gap-4 text-[10px] font-black text-amber-500 uppercase tracking-widest italic font-black">
                    <Eye className="w-4 h-4" /> Evidence Lock v2.1
                  </div>
                  <h4 className="text-2xl font-black text-white uppercase italic">Surveillance & Notice<br /> Verification @ 2026</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed italic">
                    Calibrated against the latest ANSI/NFSI B101.1 floor slip resistance standards and 2026 comparative fault bars.
                  </p>
                  <Link href="/slip-and-fall/slip-fall-settlement" className="block w-full text-center bg-white text-slate-950 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-amber-500 transition-colors italic">Run Forensic Audit</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Case FAQ (Deep Feature Restoration) */}
      <section id="faq" className="py-32 max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black text-white mb-12 uppercase italic text-center tracking-tight">Case Intelligence <span className="text-amber-500 not-italic">Library</span></h2>
        <div className="space-y-6">
          {[
            {
              q: "What is the difference between 'Actual' and 'Constructive' notice?",
              a: "Actual notice means the owner was told about the hazard. Constructive notice means the hazard existed for so long (e.g., a spill left for 30+ mins) that they SHOULD have found it. Our 2.1 engine applies a higher multiplier to cases with documented actual notice."
            },
            {
              q: "Can I still recover if I was partially at fault (Comparative Negligence)?",
              a: "Yes, in most states. However, if your fault exceeds 50% or 51% (Modified Comparative), you may recover $0. Our auditor helps identify 'Negligence Traps' to ensure your story aligns with surveillance facts."
            },
            {
              q: "Why does the location affect my slip and fall settlement?",
              a: "Commercial locations like grocery stores (Kroger, Walmart) have massive insurance tranches and strict inspection log requirements. Public property (sidewalks) often involves 'Sovereign Immunity' caps and shorter notice deadlines."
            }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-3xl group hover:border-amber-500/20 transition-all">
              <h4 className="text-lg font-black text-white mb-4 flex items-start gap-4 uppercase italic">
                <span className="text-amber-500">Q.</span> {item.q}
              </h4>
              <p className="text-slate-400 text-sm leading-[1.8] font-medium pl-8 border-l border-amber-500/20 italic">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* S-Class Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Footprints className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-black text-white uppercase tracking-tighter italic">{SITE.name} <span className="text-amber-500">2026</span></span>
          </div>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em] italic max-w-md text-center md:text-right uppercase italic font-black">
            S-Class Intelligence Engine v2.1. Developed for ANSI/NFSI compliance audit. NOT legal advice.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-8">
          <RelatedCalculators currentCalc="slip-and-fall" count={6} />
        </div>
      </footer>
    </div>
  );
}
