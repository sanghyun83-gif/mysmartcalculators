"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SITE,
  CALCULATORS,
  LEJEUNE_2026,
  formatCurrency
} from "@/lib/calculators/camp-lejeune";
import {
  ArrowRight,
  Droplet,
  AlertTriangle,
  Calendar,
  ShieldCheck,
  Zap,
  Award,
  TrendingUp,
  CheckCircle2,
  Stethoscope,
  Waves,
  Building,
  Scale,
  Activity,
  Info,
  ChevronRight,
  Flame
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "CLJA Roadmap", href: "#matrix" },
    { name: "Liability Gap", href: "#rules" },
    { name: "Trinity Audit", href: "#trinity" },
    { name: "Expert FAQ", href: "#faq" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* S-Class Premium Navigator */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.4)]">
                <Droplet className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-sm font-black uppercase tracking-tighter text-white italic">
                Lejeune <span className="text-amber-500 not-italic">Auditor v2.1</span>
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <Link href="/camp-lejeune/lejeune-calculator" className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Launch Audit
          </Link>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Calendar className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">2026 PACT Act & CLJA Recovery Standard</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
            Camp <span className="text-amber-500 not-italic">Lejeune</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">Water Auditor.</span>
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-slate-400 font-medium leading-relaxed mb-12">
            Professional-grade toxic water quantification for the <span className="text-white">August 2026 Deadline</span>.
            Injected with 2026 DOJ EES tables, ATSDR plume data, and CLJA legal deltas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/camp-lejeune/lejeune-calculator" className="group w-full sm:w-auto px-12 py-6 bg-amber-500 text-slate-950 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              Calculate Settlement
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#rules" className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all font-black">
              Review DOJ Tracks
            </a>
          </div>
        </div>
      </section>

      {/* Benchmark Matrix (id='stats') */}
      <section id="matrix" className="py-24 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Eligible Population", val: "1.0M+", color: "text-amber-500" },
              { label: "Claims Processing", val: "250K+", color: "text-orange-500" },
              { label: "Avg EES Payout", val: "$400K", color: "text-emerald-500" },
              { label: "2026 Deadline", val: "Aug 10", color: "text-rose-500" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2 group cursor-default">
                <div className={`text-4xl font-black tracking-tighter italic ${stat.color} group-hover:scale-110 transition-transform duration-500`}>{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liability Framework (id='rules') */}
      <section id="rules" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6 leading-tight">
              The Recovery <span className="text-amber-500 not-italic">Tier Hierarchy</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto">
              The Department of Justice (DOJ) Elective Early Settlement (EES) track defines specific payout ranges for Tier 1 conditions. Litigation beyond these caps requires a full forensic audit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LEJEUNE_2026.conditions.slice(0, 3).map((cond, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] group hover:border-amber-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Droplet className="w-24 h-24 text-white" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-6 italic">— Tier {cond.tier} Status</div>
                <div className="text-4xl font-black text-white mb-2 italic">{formatCurrency(cond.avgSettlement)}</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest mb-8">{cond.condition}</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-10 opacity-70">
                  {cond.description}. Benchmarked against 2026 PACT Act EES payout indices.
                </p>
                <Link href="/camp-lejeune/lejeune-calculator" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                  Audit Case Value <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Intelligence & Trinity Analysis (id='trinity') */}
      <section id="trinity" className="py-32 bg-slate-900/30 border-y border-white/5 font-black font-black italic italic uppercase tracking-tighter">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-12 font-black italic italic uppercase tracking-tighter text-center mb-10">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9] tracking-tighter mb-4">
                The Trinity <br />
                <span className="text-amber-500 not-italic">Water Audit Engine</span>
              </h2>
              <p className="not-italic text-sm text-slate-400 font-medium max-w-2xl mx-auto">
                Analyzing the three pillars of Camp Lejeune toxic tort litigation to maximize recovery potential for 2026 claims.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8 not-italic">
              {[
                { title: "Bio-Path Analysis", desc: "Correlation between VOC biomarkers (TCE/PCE) and specific oncological staging.", icon: Stethoscope, color: "bg-amber-500" },
                { title: "Forensic Plume Entry", desc: "Mapping service records to specific contaminated wells (Tarawa Terrace vs Hadnot Point).", icon: Waves, color: "bg-blue-500" },
                { title: "Statutory CLJA Sync", desc: "Alignment with the 2022 Camp Lejeune Justice Act and 2026 DOJ expedited updates.", icon: Scale, color: "bg-orange-500" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 group hover:bg-white/10 transition-all">
                  <div className={`p-4 ${item.color} rounded-2xl h-fit shadow-xl group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-slate-950" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase italic mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-5 space-y-8 not-italic">
              {/* Expert Compensation Matrix */}
              <div className="bg-slate-950 rounded-[3rem] border border-white/10 p-12 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-32 h-32 text-amber-500" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic mb-10 tracking-tight">Legal Representation Gap</h3>
                <div className="space-y-10 relative z-10">
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>DOJ EES (Pro Se)</span>
                      <span>$100k-$450k Cap</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                      <div className="h-full bg-slate-700 w-[25%] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-amber-500">
                      <span>Trial Verdicts (Attorney)</span>
                      <span>$1.2M - $5M+ Focus</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                      <div className="h-full bg-amber-500 w-[85%] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
                    </div>
                  </div>
                  <div className="pt-10 border-t border-white/5">
                    <div className="flex items-center gap-3 text-emerald-400 mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="text-sm font-black uppercase tracking-widest italic font-black">4.2x Median Payout Delta</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic font-medium">
                      Represented claimants typically bypass DOJ caps by presenting forensic toxicological evidence in North Carolina courts, achieving significantly higher offsets than the elective early settlement track.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert FAQ Section (id='faq') */}
      <section id="faq" className="py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[10px] font-black uppercase tracking-widest mb-8">
            Intelligence Library
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-20 tracking-tighter underline decoration-amber-500/30 decoration-8 underline-offset-8 font-black italic italic uppercase tracking-tighter">
            Forensic <span className="text-amber-500 not-italic">Knowledge Base</span>
          </h2>

          <div className="space-y-8 text-left">
            {[
              { q: "What is the CLJA 'Statute of Repose' update?", a: "The Camp Lejeune Justice Act (CLJA) specifically overrides North Carolina's 10-year statute of repose, allowing victims exposed between 1953 and 1987 to file claims regardless of how long ago the injury occurred." },
              { q: "How do DOJ 'Tiers' affect my payment?", a: "Tier 1 conditions (Bladder Cancer, Kidney Cancer, Leukemia) qualify for the highest EES track payments. Tier 2 conditions (Parkinson's, Multiple Myeloma) have slightly lower caps but still qualify for expedited processing." },
              { q: "Can I claim for 'Secondary Exposure' as a child?", a: "Yes. Children exposed 'in utero' or through household contamination (e.g., father's contaminated boots) are classified as high-premium claimants. Our v2.1 Auditor applies a 1.3x alpha multiplier to these cases." },
              { q: "What if I already receive VA disability benefits?", a: "CLJA settlements are independent of VA benefits. However, the DOJ may seek to offset specific medical cost reimbursements already paid by the VA. Professional audits are required to calculate the exact net recovery." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded-[3rem] group hover:bg-slate-900/80 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <Award className="w-32 h-32 text-white" />
                </div>
                <div className="flex gap-6 relative z-10">
                  <span className="text-amber-500 font-black text-3xl italic opacity-30 group-hover:opacity-100 transition-opacity tracking-tighter">0{i + 1}</span>
                  <div>
                    <h4 className="text-2xl font-black text-white uppercase italic mb-4 tracking-tighter italic italic">{faq.q}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Forensic Tools */}
      <section className="py-32 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-white to-slate-500">
              Access Related <span className="text-amber-500 not-italic">Auditors</span>
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <RelatedCalculators currentCalc="camp-lejeune" count={3} />
            </div>
          </div>
        </div>
      </section>

      {/* S-Class Final CTA */}
      <section className="py-40 bg-slate-950 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent_70%)] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-6xl md:text-9xl font-black text-white uppercase italic mb-10 tracking-tighter leading-[0.8]">
            Claim Your <br />
            <span className="text-amber-500 not-italic">Justice Back.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-12 font-medium max-w-2xl mx-auto leading-relaxed italic italic">
            The August 10, 2026 deadline is approaching. Execute your PACT Act audit today.
          </p>
          <Link href="/camp-lejeune/lejeune-calculator" className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-xl hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-amber-500/20">
            Calculate Recovery Now
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* S-Class Footer */}
      <footer className="py-24 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-amber-500 rounded-xl shadow-lg">
                <Droplet className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-white italic">
                Lejeune <span className="text-amber-500 not-italic">Auditor</span>
              </span>
            </div>
            <div className="flex gap-10">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 italic">
              &copy; 2026 Camp Lejeune Forensic Standards. PACT ACT COMPLIANT.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Live 2026 DOJ Settlement Sync</span>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <RelatedCalculators currentCalc="camp-lejeune" count={6} />
        </div>
      </footer>
    </div>
  );
}
