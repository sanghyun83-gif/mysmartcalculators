"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SITE,
  CALCULATORS,
  SCI_2026,
  formatCurrency
} from "@/lib/calculators/spinal-cord";
import {
  Activity,
  ArrowRight,
  Gavel,
  Shield,
  Zap,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Stethoscope,
  Heart,
  Scale,
  Building2,
  FileText
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function SCIHub() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vertebral Matrix", href: "#matrix" },
    { name: "Trinity Audit", href: "#trinity" },
    { name: "Life Care Plan", href: "#lcp" },
    { name: "Expert FAQ", href: "#faq" }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500/30">
      {/* S-Class Top Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-amber-500 transition-colors">
              Discovery
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-700" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-500">
              Spinal Cord v2.1
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-amber-500 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <Link href="/spinal-cord/calculator" className="px-6 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">
            Execute Audit
          </Link>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">2026 Catastrophic Litigation Standard</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.85]">
            Spinal <br />
            <span className="text-amber-500 not-italic">Auditor v2.1</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-slate-400 font-medium leading-relaxed mb-12">
            Quantify catastrophic impairment using the <span className="text-white">ASIA Scale Framework</span>.
            Injected with NSCISC actuarial life-care projections and multi-million dollar verdict trends.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/spinal-cord/calculator" className="group w-full sm:w-auto px-12 py-6 bg-amber-500 text-slate-950 rounded-full font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.2)]">
              Calculate Payout
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#trinity" className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              Review Trinity Audit
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-24 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "New Cases / Yr", val: SCI_2026.statistics.annualNewCases.toLocaleString(), color: "text-amber-500" },
              { label: "Vehicle Impact", val: `${SCI_2026.statistics.vehicleAccidentPercent}%`, color: "text-blue-500" },
              { label: "Lifetime Care (High)", val: formatCurrency(SCI_2026.severityLevels[1].lifetimeCost), color: "text-emerald-500" },
              { label: "Avg Age at Injury", val: SCI_2026.statistics.avgAge.toString(), color: "text-slate-400" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className={`text-3xl font-black tracking-tighter italic ${stat.color}`}>{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertebral Matrix Section */}
      <section id="matrix" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-6">
              Vertebral <span className="text-amber-500 not-italic">Benchmark Matrix</span>
            </h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto">
              Actual 2026 insurance payout ranges categorized by neurological level of injury (NLI) and lifetime medical maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SCI_2026.severityLevels.slice(0, 3).map((level, i) => (
              <div key={i} className="bg-slate-900/40 border border-white/5 p-10 rounded-[3rem] group hover:border-amber-500/30 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Activity className="w-24 h-24 text-white" />
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-6 italic">{level.level}</div>
                <div className="text-4xl font-black text-white mb-2 italic">{formatCurrency(level.avgSettlement)}</div>
                <div className="text-xs text-slate-500 font-black uppercase tracking-widest mb-8">— Settlement Benchmark</div>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Lifetime Care Cost</span>
                    <span className="text-white font-bold">{formatCurrency(level.lifetimeCost)}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500/50" style={{ width: `${(level.lifetimeCost / 6000000) * 100}%` }} />
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-10">{level.description}</p>
                <Link href="/spinal-cord/calculator" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                  Analyze This Case <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trinity Audit Framework */}
      <section id="trinity" className="py-32 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-[0.9]">
                The Catastrophic <br />
                <span className="text-amber-500 not-italic">Trinity Audit Engine</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Clinical Neuro-Trauma", desc: "ASIA Scale mapping of complete vs incomplete impairment (ASIA A-D).", icon: Stethoscope },
                  { title: "Statutory Damage Cap", desc: "Analysis of non-economic damage ceilings and punitive eligibility.", icon: Gavel },
                  { title: "Actuarial Life Care", desc: "LCP (Life Care Plan) projection using 2026 medical inflation indices.", icon: Heart }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 group hover:bg-white/10 transition-all">
                    <div className="p-4 bg-amber-500 rounded-2xl h-fit shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      <item.icon className="w-6 h-6 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase italic mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-950 rounded-[3rem] border border-white/10 p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-32 h-32 text-amber-500" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic mb-10 tracking-tight">Representation Valuation Gap</h3>
                <div className="space-y-10 relative z-10">
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                      <span>Pro Se (Unrepresented)</span>
                      <span>$700k Avg Range</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                      <div className="h-full bg-slate-700 w-[20%] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-amber-500 font-black">
                      <span>Attorney-Led (SCI Specialist)</span>
                      <span>$2.5M - $10M+ Focus</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-1">
                      <div className="h-full bg-amber-500 w-[75%] rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
                    </div>
                  </div>
                  <div className="pt-10 border-t border-white/5">
                    <div className="flex items-center gap-3 text-emerald-400 mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="text-sm font-black uppercase tracking-widest italic">4.2x Median Recovery Increase</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic">
                      Based on NSCISC longitudinal data. SCI cases involving Lifetime Care Plans (LCP) and specialized legal representation secure significantly higher non-economic damages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert FAQ Section */}
      <section id="faq" className="py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-6">Expert <span className="text-amber-500 not-italic">Case Intelligence</span></h2>
            <p className="text-slate-400 font-medium italic italic">Strategic analysis of spinal neuro-trauma litigation and life-care recovery.</p>
          </div>

          <div className="space-y-8">
            {[
              { q: "What is the ASIA Impairment Scale?", a: "The ASIA (American Spinal Injury Association) scale classifies the severity of spinal cord injuries from A (Complete) to E (Normal). In v2.1 Auditor, ASIA A cases trigger a 1.50x multiplier due to the total lack of sensory and motor function." },
              { q: "How are Life Care Plans (LCP) calculated?", a: "An LCP projects every medical and non-medical expense from injury date to death. We factor in 2026 indices for home nursing (RN/LPN), specialized durable medical equipment (DME), and frequent vehicle modifications." },
              { q: "Does the level of vertebrae affect the payout?", a: "Significantly. Cervical (Neck) injuries like C1-C4 require ventilator support and 24/7 care, resulting in base lifetime costs exceeding $5M. Thoracic or Lumbar injuries (Paraplegia) have lower maintenance costs but still require high-level modifications." },
              { q: "What is Autonomic Dysreflexia in a legal context?", a: "This is a life-threatening medical emergency common in T6 or higher injuries. Documenting this risk as a 'Future Medical Complication' provides essential leverage for larger non-economic damage awards." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900 border border-white/5 p-10 rounded-[2.5rem] group hover:bg-slate-900/80 transition-all">
                <div className="flex gap-6">
                  <span className="text-amber-500 font-black text-xl italic opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                  <div>
                    <h4 className="text-xl font-black text-white uppercase italic mb-4">{faq.q}</h4>
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
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tight">Access <span className="text-amber-500 not-italic">Related Auditors</span></h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <RelatedCalculators currentCalc="spinal-cord" count={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic mb-8 tracking-tighter leading-none">
            Diagnose <br />
            <span className="text-amber-500 not-italic">YOUR RECOVERY</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-medium max-w-xl mx-auto leading-relaxed">
            Catastrophic injuries deserve catastrophic-grade quantification. Execute the 2026 Audit now.
          </p>
          <Link href="/spinal-cord/calculator" className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest text-lg hover:bg-amber-500 transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            Start Settlement Audit
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* S-Class Footer */}
      <footer className="py-24 border-t border-white/5 bg-slate-950 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-amber-500 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)]">
                <Activity className="w-6 h-6 text-slate-950" />
              </div>
              <span className="text-2xl font-black uppercase tracking-tighter text-white italic">
                SCI <span className="text-amber-500 not-italic">Auditor</span>
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
              &copy; 2026 Spinal Cord Forensic Standards. ASIA Grade Compliant.
            </p>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">Live 2026 Actuarial Sync</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
