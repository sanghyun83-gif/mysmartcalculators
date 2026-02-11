"use client";

import { Heart, ChevronRight, Activity, CheckCircle2, Gavel, Scale, Shield, ArrowRight, AlertCircle, FileText, Landmark, Users, Search, TrendingUp, Zap, MapPin, DollarSign, Info, Stethoscope, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { WRONGFUL_DEATH_CONSTANTS, formatCurrency } from "@/lib/calculators/wrongful-death";
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
      {/* 1. S-Class Predator Hero (Cinema-Gold) */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase tracking-[0.2em] mb-8 animate-pulse">
              <Zap className="w-3.5 h-3.5" />
              2026 Actuarial & SSA Sync
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] mb-8">
              Wrongful Death <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 italic">Settlement Auditor.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-medium">
              Professional-grade valuation for <span className="text-white">Fatality Claims</span>. Analyze settlement trajectories using 2026 SSA life tables, CDC mortality data, and survivor indemnity benchmarks.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <Link href="/wrongful-death/settlement" className="bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-2xl hover:-translate-y-1 flex items-center gap-3">
                Start Private Audit <ChevronRight className="w-5 h-5" />
              </Link>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Personal ID Required
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Forensic Payout Matrix
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 Anchor Navigator (Sticky Sub-Nav) */}
      <div className={`sticky top-[70px] z-[110] transition-all duration-300 border-b border-white/5 py-4 hidden md:block ${isScrolled ? "bg-slate-950/80 backdrop-blur-xl" : "bg-transparent font-bold capitalize"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-12 text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
          <a href="#stats" className="hover:text-amber-500 transition-colors cursor-pointer">Settlement Benchmarks</a>
          <a href="#rules" className="hover:text-amber-500 transition-colors cursor-pointer">Liability Rules</a>
          <a href="#trinity" className="hover:text-amber-500 transition-colors cursor-pointer">Trinity Audit</a>
          <a href="#faq" className="hover:text-amber-500 transition-colors cursor-pointer">Case Intelligence</a>
        </div>
      </div>

      {/* 2. Benchmark Matrix (Fatal Payout Wall) */}
      <section id="stats" className="py-12 bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Med-Mal Death Avg", value: "$1,200,000", detail: "2026 Case Data" },
              { label: "Truck Fatality Avg", value: "$1,500,000", detail: "FMCSA Benchmark" },
              { label: "Survival Delta", value: "up to +150%", detail: "Pre-Death Pain" },
              { label: "Representation Gap", value: "3.5x Higher", detail: "IRC Industry Stat" }
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

      {/* 3. Logic & Methodology (The Anatomy of Payout) */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-5xl font-black text-white tracking-tighter leading-none italic uppercase">The Anatomy <br />of Survival Recovery.</h2>
              <div className="h-1.5 w-24 bg-amber-600 rounded-full" />
            </div>

            <div className="prose prose-invert prose-slate text-lg font-medium leading-[1.8] text-slate-400 space-y-8">
              <p>
                A wrongful death settlement is a composite of two distinct legal actions: the **Wrongful Death** claim (damages to survivors) and the **Survival Action** (damages to the deceased's estate).
              </p>
              <p>
                In 2026, valuation hinges on "Economic Loss of Support" filtered through 2026 SSA Life Expectancy tables. Our auditor accounts for **Hedonic Damages**—the intrinsic loss of life's pleasure—which acts as the primary "Expert Delta" in multi-million dollar verdicts.
              </p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: <Scale className="w-6 h-6" />, title: "Survival Action", desc: "Compensation for the pain and suffering experienced between injury and time of death." },
                { icon: <Users className="w-6 h-6" />, title: "Loss of Consortium", desc: "Monetary value assigned to the loss of care, protection, and companionship for dependents." },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Hedonic Damages", desc: "The 'Invisible Delta' representing the lost pleasure of a life cut short." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
                  <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-sm tracking-widest mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 font-bold">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-12 p-12 bg-slate-900 border border-amber-500/20 rounded-[4rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12 group-hover:rotate-0 transition-all">
              <Heart className="w-64 h-64 text-amber-600" />
            </div>
            <div className="relative z-10 space-y-10">
              <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase">Representation <span className="text-amber-500">Valuation Gap.</span></h3>
              <p className="text-slate-400 font-bold italic text-sm border-l-2 border-amber-500 pl-6 leading-loose">
                "Fatality cases with legal representation statistically yield 3.5x higher net settlements due to 'Future Earning Capacity' forensics."
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 bg-black/40 rounded-3xl border border-white/5 space-y-4">
                    <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Insurance <br />Initial Offer</div>
                    <div className="text-2xl font-black text-slate-500">$215,000</div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-1/4 bg-slate-600" />
                    </div>
                  </div>
                  <div className="p-6 bg-amber-500/5 rounded-3xl border border-amber-500/20 space-y-4">
                    <div className="text-[10px] font-black uppercase text-amber-500 tracking-widest">Attorney-Led <br />Audit Payout</div>
                    <div className="text-2xl font-black text-white">$752,500</div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-amber-600 to-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[11px] font-black uppercase text-white tracking-widest">The Forensic Gap</span>
                    <span className="px-2 py-1 bg-amber-600 text-[10px] font-black text-white rounded">+350%</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Life Expectancy Actuarial Multiplier", status: true },
                      { label: "Work-Life Probability Analysis", status: true },
                      { label: "Lost Household Service Valuation", status: true }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-slate-400">
                        <AlertCircle className="w-5 h-5 text-amber-500 mt-1 shrink-0" />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[9px] text-center text-slate-600 font-bold uppercase tracking-widest pt-2">
                  *Analysis based on Miller & Zois Fatality Verdict Database 2026.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Liability & Death Categories (id='rules') */}
      <section id="rules" className="py-32 bg-slate-900/10 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase italic">Catastrophic Liability.</h2>
            <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto leading-relaxed">
              Wrongful death recovery is heavily influenced by the legal standard of care applicable to the defendant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { name: "Common Carrier Liability", desc: "Higher standard of care for public transit and commercial carriers (Buses, Airlines).", examples: "Uber/Lyft, Commercial Trucks, Rail" },
              { name: "Statutory Damage Caps", desc: "State-specific limits on non-economic damages (Loss of Companionship).", examples: "Texas, California, Florida" }
            ].map((rule, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-amber-500/30 transition-all group">
                <h4 className="text-xl font-black text-white mb-4 italic group-hover:text-amber-500 transition-colors uppercase tracking-tighter underline underline-offset-8 decoration-amber-600/30">{rule.name}</h4>
                <p className="text-slate-400 text-sm font-medium leading-loose mb-6">{rule.desc}</p>
                <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Key Impact Area: <span className="text-slate-400">{rule.examples}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Trinity Audit (id='trinity') */}
      <section id="trinity" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="text-center space-y-4">
            <h2 className="text-6xl font-black text-white tracking-tighter uppercase italic">Trinity Audit.</h2>
            <p className="text-amber-500 font-black text-xs uppercase tracking-[0.4em]">Forensic Valuation Framework</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                id: "01",
                title: "Actuarial / Economic",
                icon: TrendingUp,
                desc: "Sync with 2026 SSA Period Life Tables. Projected lifetime earnings adjusted for inflation and work-life probability.",
                entities: ["SSA Life Expectancy", "Work-Life Projections"]
              },
              {
                id: "02",
                title: "Forensic / Clinical",
                icon: Stethoscope,
                desc: "Survival Action analysis. Documented pain, suffering, and consciousness duration prior to time of death.",
                entities: ["Survival Claim", "Conscious Suffering"]
              },
              {
                id: "03",
                title: "Statutory / Damage",
                icon: Gavel,
                desc: "Analysis of state-specific caps and loss of consortium eligibility for surviving family members.",
                entities: ["Statutory Caps", "Consortium Rights"]
              }
            ].map((pillar, i) => (
              <div key={i} className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] group hover:bg-amber-500/5 transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 italic scale-150 group-hover:text-amber-500/10 transition-colors">{pillar.id}</div>
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

      {/* 6. Case Intelligence Library (FAQ Section) */}
      <section id="faq" className="py-32 bg-slate-900/10">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <div className="flex items-center gap-6">
            <div className="w-16 h-1 w-24 bg-amber-600 rounded-full" />
            <h2 className="text-4xl font-black text-white tracking-widest uppercase italic leading-none">Intelligence Library.</h2>
          </div>

          <div className="grid gap-12 pt-8 border-t border-white/5">
            {[
              {
                q: "What is a 'Survival Action' vs. 'Wrongful Death'?",
                a: "A 'Survival Action' compensates for the pain and suffering the deceased felt before they died. 'Wrongful Death' compensates the family for their own loss (income, companionship)."
              },
              {
                q: "How do 2026 Life Tables affect settlement values?",
                a: "Settlements are often front-loaded with 'lost future earnings.' If the deceased was young with a high 2026 life expectancy, the economic payout can exceed $3M-$5M depending on career path."
              },
              {
                q: "Who is legally allowed to recover in a death case?",
                a: "Determined by state statute. Generally includes the surviving spouse, children, and parents. Some jurisdictions allow dependents or life partners to claim loss of support."
              },
              {
                q: "What are 'Hedonic Damages'?",
                a: "Also known as 'loss of enjoyment of life.' It aims to quantify the value of the experiences, hobbies, and simple pleasures of life that the deceased can no longer enjoy."
              },
              {
                q: "How long does a fatality audit take?",
                a: "Our private auditor provides an immediate actuarial estimate. Full litigation typically ranges from 18 to 36 months depending on the complexity of forensic evidence."
              }
            ].map((faq, i) => (
              <div key={i} className="group cursor-help space-y-4">
                <h4 className="text-xl font-black text-amber-500 tracking-tight flex gap-4 lowercase">
                  <span className="opacity-20 text-white font-serif">?</span> {faq.q}
                </h4>
                <div className="pl-8 border-l-2 border-amber-600/20">
                  <p className="text-slate-400 text-sm font-medium leading-loose group-hover:text-slate-300 transition-colors uppercase tracking-tight">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Audit */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-20 bg-gradient-to-br from-amber-600 to-orange-700 rounded-[5rem] text-center space-y-12 relative overflow-hidden group shadow-[0_50px_100px_rgba(245,158,11,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 space-y-8">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase">Secure an Expert <br />Fatality Audit.</h2>
              <p className="text-amber-50 text-xl font-bold max-w-2xl mx-auto leading-relaxed italic opacity-80">
                Access the 2026 S-Class Survival Action Logic. Calculate settlement trajectories without sharing personal identification.
              </p>
              <Link href="/wrongful-death/settlement" className="inline-flex items-center gap-4 bg-white text-black px-16 py-8 rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] hover:bg-slate-100 transition-all hover:scale-105 shadow-2xl">
                Launch Auditor <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Related Items */}
      <footer className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 text-amber-500" />
              <span className="text-xl font-black text-white tracking-widest uppercase italic">Wrongful Death.</span>
            </div>
            <p className="text-slate-500 text-xs font-bold leading-[2.5] uppercase tracking-widest">
              STRICT COMPLIANCE WITH 2026 LEGAL DISCLAIMER GUIDELINES. NOT LEGAL ADVICE. PROVISION OF ESTIMATES ONLY. ALL DATA MANAGED UNDER JURISDICTION OF LOCAL STATUTES.
            </p>
            <div className="mt-12">
              <RelatedCalculators currentCalc="wrongful-death" count={6} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
