"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Dog,
  Shield,
  Scale,
  AlertTriangle,
  ArrowRight,
  Heart,
  ShieldCheck,
  Stethoscope,
  Building2,
  Gavel,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import {
  SITE,
  CALCULATORS,
  DOG_BITE_CONSTANTS_2026,
  BITE_SEVERITY,
  formatCurrency
} from "@/lib/calculators/dog-bite";
import { RelatedCalculators } from "@/components/RelatedCalculators";

export default function HubClient() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Audit Logic", href: "#logic" },
    { name: "Matrix", href: "#stats" },
    { name: "Trinity Audit", href: "#trinity" },
    { name: "Expert FAQ", href: "#faq" }
  ];

  const severityLevels = Object.entries(BITE_SEVERITY).slice(2, 6); // Level 3-6

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      {/* S-Class Premium Navigator */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-500 rounded-lg">
                <Dog className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-sm font-black uppercase tracking-tighter text-white italic">
                Dog Bite <span className="text-amber-500 not-italic">Auditor v2.1</span>
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

          <Link href="/dog-bite/settlement" className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95">
            Start Audit
          </Link>
        </div>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">2026 Animal Liability Standard</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Dog Bite <br />
            <span className="text-amber-500 not-italic">Litigation Hub</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium leading-relaxed mb-12">
            Quantify your animal attack claim using the <span className="text-white">v2.1 Forensic Auditor</span>.
            Injected with 2026 Insurance Institute liability data, genetic propensity deltas, and multi-million dollar verdict trends.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dog-bite/settlement" className="group w-full sm:w-auto px-10 py-5 bg-amber-500 text-slate-950 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-2">
              Access Settlement Engine
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#trinity" className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              View Audit Pillars
            </a>
          </div>
        </div>
      </section>

      {/* Logic section */}
      <section id="logic" className="py-24 border-y border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="p-3 bg-amber-500/10 rounded-2xl w-fit">
                <Stethoscope className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic">Clinical Staging</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Beyond basic punctures. We factor in permanent scarring deltas, complex nerve damage, and facial disfigurement multipliers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl w-fit">
                <Building2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic">Genetic Propensity</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Cases involving dangerous breeds or prior aggression history trigger automatic valuation multipliers due to systemic risk evidence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl w-fit">
                <Scale className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic">Liability Leverage</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Strict liability statutes and One-Bite Rule breaches provide essential leverage for punitive damage negotiations in 50 states.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Matrix Section */}
      <section id="stats" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-6">Settlement <span className="text-amber-500 not-italic">Benchmark Matrix</span></h2>
            <p className="text-slate-400 font-medium">Actual 2026 insurance payout ranges based on animal liability trends.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {severityLevels.map(([key, level]) => (
              <div key={key} className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all group">
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-4 italic">{level.name}</div>
                <div className="text-3xl font-black text-white mb-2 italic">
                  {formatCurrency(level.avgSettlement.min)}
                </div>
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6">— Benchmark Floor</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-8">{level.injuries}</p>
                <Link href="/dog-bite/settlement" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                  Calculate Delta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trinity Audit Section */}
      <section id="trinity" className="py-32 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-8 leading-[1.1]">
                The Animal Attack <br />
                <span className="text-amber-500 not-italic">Trinity Audit Engine</span>
              </h2>
              <p className="text-slate-400 font-medium mb-12">
                Our v2.1 Auditor uses a tri-pillar analysis to uncover the hidden valuation of a dog bite claim.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Clinical Audit", desc: "Mapping of nerve damage, infection markers, and scarring permanence.", icon: Heart },
                  { title: "Statutory Audit", desc: "Strict liability vs Negligence analysis across 50 state jurisdictions.", icon: Gavel },
                  { title: "Insurance Audit", desc: "Homeowner policy limit discovery and umbrella coverage triggers.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="p-3 bg-amber-500 rounded-2xl h-fit">
                      <item.icon className="w-5 h-5 text-slate-950" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white uppercase italic mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Representation Gap Matrix */}
              <div className="bg-slate-950 border border-white/10 rounded-[3rem] p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-32 h-32 text-amber-500" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic mb-8">Representation Valuation Gap</h3>
                <div className="space-y-8 relative z-10">
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-4">
                      <span className="text-slate-500">Unrepresented (Pro Se)</span>
                      <span className="text-slate-500">$18,500 Avg.</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-700 w-[15%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-4">
                      <span className="text-amber-500">Attorney-Led (Forensic)</span>
                      <span className="text-amber-500">$64,555 Avg.</span>
                    </div>
                    <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-[55%] shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
                    </div>
                  </div>
                  <div className="pt-8 border-t border-white/5">
                    <div className="flex items-center gap-3 text-emerald-400 mb-4">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-black uppercase italic italic">3.5x Valuation Increase Expected</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed italic">
                      Data synthesized from Insurance Information Institute (III) 2024 analysis. Legal representation typically secures 300% more in non-economic damages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert FAQ Section */}
      <section id="faq" className="py-32 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white uppercase italic mb-6">Case <span className="text-amber-500 not-italic">Intelligence Library</span></h2>
            <p className="text-slate-400">Expert analysis on animal attack litigation and insurance recovery.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: "What is the One-Bite Rule?", a: "A legal principle in some states where an owner is only liable if they knew the dog was dangerous. However, most modern jurisdictions are moving toward 'Strict Liability' where the owner is liable regardless of prior knowledge." },
              { q: "How are facial scarring settlements calculated?", a: "For facial injuries, we apply a 'visibility multiplier' of 1.45x. This accounts for the psychological impact and permanent aesthetic alteration, often resulting in significantly higher pain and suffering awards." },
              { q: "Does the dog's breed affect the payout?", a: "Yes. In the v2.1 Forensic Auditor, we apply a 1.40x Genetic Propensity multiplier for high-risk breeds. Insurance adjusters and juries often perceive these cases as having higher systemic risk." },
              { q: "Can I claim for emotional trauma?", a: "Absolutely. Post-Traumatic Stress Disorder (PTSD) and Cynophobia (fear of dogs) are recognized non-economic damages. These are quantified through our Trinity Audit Clinical pillar." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-900 border border-white/5 rounded-[2.5rem]">
                <h4 className="text-lg font-black text-white uppercase italic mb-4 flex items-center gap-3">
                  <span className="text-amber-500 text-sm">#0{i + 1}</span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-32 bg-slate-900/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase italic">Related <span className="text-amber-500 not-italic">Forensic Tools</span></h2>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <RelatedCalculators currentCalc="dog-bite" count={3} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-8 tracking-tighter">
            Secure Your <br />
            <span className="text-amber-500 not-italic">2026 AUDIT</span>
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-medium">
            Don't leave your recovery to chance. Quantify the expert delta now.
          </p>
          <Link href="/dog-bite/settlement" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-950 rounded-full font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95">
            Start Settlement Audit
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* S-Class Footer */}
      <footer className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-white/5 rounded-xl">
                <Dog className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter text-white italic">
                Dog Bite <span className="text-amber-500 not-italic">Auditor</span>
              </span>
            </div>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <RelatedCalculators currentCalc="dog-bite" count={6} />
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 italic">
              &copy; 2026 Dog Bite Forensic Standards. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
