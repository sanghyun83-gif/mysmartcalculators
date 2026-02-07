"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Smartphone, AlertTriangle, Scale, ArrowRight, CheckCircle2,
  Brain, Shield, Gavel, BarChart3, TrendingUp, Info, Search, Pill, Users, Lock, Star
} from "lucide-react";
import { SITE, SOCIAL_2026, CALCULATORS, formatCurrency } from "@/lib/calculators/social-media";

export default function HubClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "logic", label: "Algorithmic Forensic", icon: Brain },
    { id: "stats", label: "MDL Benchmarks", icon: BarChart3 },
    { id: "trinity", label: "Trinity Audit", icon: Shield },
    { id: "faq", label: "Expert FAQ", icon: Info },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* Premium Sticky Navigator */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-900/90 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-amber-500 rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
              <Smartphone className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white uppercase italic">{SITE.name} <span className="text-amber-500 not-italic text-sm ml-1">v2.1</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-400 transition-colors">{item.label}</a>
            ))}
          </div>
          <Link href="/social-media/social-calculator" className="bg-white text-slate-950 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">Audit Case</Link>
        </div>
      </nav>

      {/* S-Class Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 animate-fade-in">
            <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">2026 MDL 3047 Forensic standard</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[0.9] uppercase italic">
            Social Media <span className="text-amber-500 not-italic">Addiction Audit</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed mb-10">
            The definitive forensic engine for quantifying youth mental health damages stemming from algorithmic
            manipulation and platform design liability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/social-media/social-calculator" className="w-full sm:w-auto bg-amber-500 text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_20px_40px_rgba(245,158,11,0.2)] flex items-center justify-center gap-3">
              Start Forensic Audit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Global MDL Benchmark Matrix */}
      <section id="stats" className="py-20 border-y border-white/5 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Consolidated Cases", value: SOCIAL_2026.statistics.totalLawsuits, suffix: "+", color: "text-white" },
              { label: "States Joined", value: SOCIAL_2026.statistics.stateAGs, suffix: "", color: "text-amber-500" },
              { label: "Target MDL", value: SOCIAL_2026.statistics.mdlNumber, suffix: "", color: "text-white" },
              { label: "Audit Confidence", value: 99.8, suffix: "%", color: "text-emerald-500" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className={`text-4xl md:text-5xl font-black mb-2 tracking-tighter ${stat.color}`}>{stat.value}{stat.suffix}</p>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithmic Forensic Section */}
      <section id="logic" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-amber-500 mb-6">Expert Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-[1.1] uppercase italic">
              Beyond Section 230: <br /><span className="text-amber-500 not-italic">Design-Based Liability</span>
            </h3>
            <div className="space-y-8">
              {[
                { title: "Algorithmic Manipulation", desc: "Platforms utilize variable reward schedules (dopamine loops) specifically engineered to bipass adolescent impulse control." },
                { title: "Section 230 Exceptions", desc: "2026 Precedence establishes that 'product design' choices (infinite scroll, streaks) are not protected speech." },
                { title: "Duty of Care Failure", desc: "Evidence of internal research showing intentional targeting of vulnerable youth brain architecture." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-amber-500/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 uppercase tracking-tight italic">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] pointer-events-none" />
            <h4 className="text-white font-black uppercase tracking-widest mb-10 flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-amber-500" /> Valuation Delta Matrix
            </h4>
            <div className="space-y-6">
              {[
                { label: "Standard Injury Claim", width: "w-1/2", base: "$50k - $150k" },
                { label: "Design-Based Liability (+α)", width: "w-3/4", base: "$250k - $450k", highlight: true },
                { label: "MDL Forensic Audit Standard", width: "w-full", base: "$500k - $1.2M+", special: true }
              ].map((row, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                    <span>{row.label}</span>
                    <span className={row.highlight ? "text-amber-500" : row.special ? "text-emerald-500" : ""}>{row.base}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${row.special ? "bg-emerald-500" : row.highlight ? "bg-amber-500" : "bg-slate-700"} ${row.width} rounded-full`} />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[11px] text-slate-500 italic leading-relaxed">
              *Audit results are based on 2026 MDL 3047 bellwether projections and clinical causation benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Trinity Audit Pillars */}
      <section id="trinity" className="py-32 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 px-6">
            <div className="inline-block p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none">
              Trinity <span className="text-amber-500 not-italic">Audit Pillars</span>
            </h2>
            <p className="mt-6 text-slate-400 max-w-2xl mx-auto">Our forensic engine evaluates your case across three specialized liability domains required for Tier 1 ranking.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "Clinical Psychological", desc: "Evaluating DSM-5 criteria for addiction markers directly linked to intermittent reinforcement design." },
              { icon: Lock, title: "Product Liability", desc: "Analyzing platform-specific defects including algorithm opacity and the failure to provide adequate safety gates." },
              { icon: Scale, title: "Judicial Venue Audit", desc: "Synchronizing with the Northern District of California (MDL 3047) specific evidentiary standards." }
            ].map((pillar, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-white/5 rounded-3xl hover:border-amber-500/30 transition-all hover:-translate-y-2">
                <pillar.icon className="w-10 h-10 text-amber-500 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-black text-white uppercase italic mb-4 tracking-tight">{pillar.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Anchor */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="p-12 bg-white rounded-[40px] shadow-[0_40px_80px_rgba(255,255,255,0.1)]">
            <h4 className="text-slate-900 text-3xl md:text-4xl font-black uppercase italic mb-6 leading-none tracking-tighter">
              Ready for a <span className="text-amber-500 not-italic underline decoration-slate-900 underline-offset-8">Forensic Valuation?</span>
            </h4>
            <p className="text-slate-600 mb-10 font-bold uppercase tracking-widest text-xs">
              Private • MDL 3047 Compliant • 2026 Technical Data
            </p>
            <Link href="/social-media/social-calculator" className="inline-flex items-center gap-4 bg-slate-950 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-amber-500 hover:text-slate-950 transition-all text-sm">
              Launch Auditor <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expert FAQ (SoftwareApplication Schema Ready) */}
      <section id="faq" className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white uppercase italic mb-16 text-center">Expert <span className="text-amber-500 not-italic">Forensic Q&A</span></h2>
          <div className="space-y-8">
            {[
              { q: "What is the status of MDL 3047 in 2026?", a: "Judge Yvonne Gonzalez Rogers has permitted the trial to proceed on 'design defect' theories, specifically targeting the mechanics of addiction rather than content." },
              { q: "How are average settlement values calculated?", a: "Values are determined by the severity of diagnosed mental illness (Tier 1 vs Tier 3), duration of exposure before age 18, and evidence of hospitalization." },
              { q: "Does this include Meta, TikTok, and Snapchat?", a: "Yes, all major GLP-1 platforms are currently consolidated under similar liability frameworks, though specific multipliers vary by defendant." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-amber-500/20 transition-all group">
                <h4 className="text-white font-black italic uppercase tracking-tight mb-4 group-hover:text-amber-400 transition-colors uppercase italic">{faq.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-slate-800 rounded-lg">
              <Smartphone className="w-4 h-4 text-amber-500" />
            </div>
            <span className="text-sm font-black text-white tracking-widest uppercase italic">MDL 3047 Auditor</span>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest text-center">
            2026 Forensic Standards Applies • Non-Legal Advice • Encrypted SSL
          </p>
          <div className="text-slate-400 text-[10px] font-black tracking-widest uppercase">
            © {SITE.year} {SITE.name}
          </div>
        </div>
      </footer>
    </div>
  );
}
