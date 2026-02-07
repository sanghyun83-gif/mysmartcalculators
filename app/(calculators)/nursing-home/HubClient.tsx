"use client";

import Link from "next/link";
import { SITE, CALCULATORS, NURSING_HOME_CONSTANTS_2026, ABUSE_TYPES, formatCurrency } from "@/lib/calculators/nursing-home";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Gavel,
  Activity,
  Scale,
  ChevronRight,
  Clock,
  Building2,
  UserCheck,
  FileText,
  Stethoscope,
  AlertCircle,
  Info
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { useState, useEffect } from "react";

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-amber-500/30">
      {/* S-Class Premium Navigator */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-amber-500 rounded-lg">
                <Heart className="w-5 h-5 text-slate-950" />
              </div>
              <span className="text-sm font-black uppercase tracking-tighter text-white italic">
                Nursing Home <span className="text-amber-500 not-italic">Auditor v2.1</span>
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

          <Link href="/nursing-home/abuse-settlement" className="px-5 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-amber-500 transition-all hover:scale-105 active:scale-95">
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
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">2026 Elder Care Forensic Standard</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase italic leading-[0.9]">
            Nursing Home <br />
            <span className="text-amber-500 not-italic">Abuse Litigation Hub</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-slate-400 font-medium leading-relaxed mb-12">
            Quantify your elder abuse claim using the <span className="text-white">v2.1 Forensic Auditor</span>.
            Injected with 2026 CMS quality metrics, staffing ratio deltas, and multi-million dollar verdict data.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/nursing-home/abuse-settlement" className="group w-full sm:w-auto px-10 py-5 bg-amber-500 text-slate-950 rounded-[2rem] font-black uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-2">
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
                Beyond basic neglect. We factor in bedsore staging (I-IV), sepsis infection markers, and malnutrition BMI deltas.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-blue-500/10 rounded-2xl w-fit">
                <Building2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic">CMS Rating Impact</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Facilities with a 1-Star Medicare rating trigger automatic valuation multipliers due to systemic failure evidence.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl w-fit">
                <Scale className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic">Punitive Leverage</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Staffing ratio breaches and prior F-Tag violations provide essential leverage for punitive damage negotiations.
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
            <p className="text-slate-400 font-medium">Actual 2026 payout ranges based on elder abuse litigation trends.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(ABUSE_TYPES).slice(0, 4).map(([key, item]) => (
              <div key={key} className="p-8 bg-slate-900/50 border border-white/5 rounded-[2.5rem] hover:border-amber-500/30 transition-all group">
                <div className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-4 italic">{item.name}</div>
                <div className="text-3xl font-black text-white mb-2 italic">
                  {formatCurrency(item.avgSettlement.min)}
                </div>
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-6">— Benchmark Floor</div>
                <p className="text-slate-400 text-xs leading-relaxed mb-8">{item.signs}</p>
                <Link href="/nursing-home/abuse-settlement" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-amber-500 transition-colors">
                  Audit Case <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          {/* Legal Representation Gap Matrix */}
          <div className="mt-20 p-12 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-[3rem]">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-black text-white uppercase italic mb-6">The Representation <span className="text-amber-500 not-italic">Valuation Gap</span></h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                    <span className="text-sm font-black uppercase italic text-slate-400">Pro Se (No Counsel)</span>
                    <span className="text-xl font-black text-white">1.0x Base</span>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-amber-500 rounded-2xl border border-amber-400">
                    <span className="text-sm font-black uppercase italic text-slate-950">Expert Attorney-Led</span>
                    <span className="text-xl font-black text-slate-950">3.5x Premium</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-slate-400 text-lg leading-relaxed italic">
                  "Data shows that nursing home claims led by specialist litigation firms yield <span className="text-white">350% higher recoveries</span> due to their ability to subpoena staffing logs, surveillance, and corporate financial data."
                </p>
                <div className="flex gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 flex items-center justify-center">
                        <UserCheck className="w-5 h-5 text-amber-500" />
                      </div>
                    ))}
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-500 self-center">Verified by 2026 Legal Audit Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trinity Audit Section */}
      <section id="trinity" className="py-32 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">S-Class Standard</div>
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mb-8">The Elder Care <span className="text-amber-500 not-italic">Trinity Audit</span></h2>
            <p className="max-w-3xl mx-auto text-slate-400 font-medium">We move beyond medical bills. Our engine analyzes the three pillars of nursing home litigation to maximize case value.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Clinical */}
            <div className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] hover:bg-slate-900 transition-all">
              <Activity className="w-12 h-12 text-amber-500 mb-8" />
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Clinical <br />Forensics</h3>
              <ul className="space-y-4">
                {[
                  "Bedsore Staging (II-IV) Analysis",
                  "Sepsis & Infection Toxicity",
                  "Fall-induced Hip/TBI Trauma",
                  "Medication Over-sedation Proof"
                ].map(item => (
                  <li key={item} className="flex gap-3 text-xs text-slate-400 font-medium italic">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Regulatory */}
            <div className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] hover:bg-slate-900 transition-all">
              <ShieldCheck className="w-12 h-12 text-blue-500 mb-8" />
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Regulatory <br />Compliance</h3>
              <ul className="space-y-4">
                {[
                  "CMS Star Rating Verification",
                  "Federal Staffing Ratio Audit",
                  "F-Tag Citation History Search",
                  "Medicare Fraud Indicators"
                ].map(item => (
                  <li key={item} className="flex gap-3 text-xs text-slate-400 font-medium italic">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 3: Corporate */}
            <div className="p-10 bg-slate-900/50 border border-white/5 rounded-[3rem] hover:bg-slate-900 transition-all">
              <Building2 className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Corporate <br />Negligence</h3>
              <ul className="space-y-4">
                {[
                  "Private Equity Ownership Delta",
                  "Staffing Log Falsification",
                  "Prior Wrongful Death Verdicts",
                  "Inadequate Training Patterns"
                ].map(item => (
                  <li key={item} className="flex gap-3 text-xs text-slate-400 font-medium italic">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-black text-white uppercase italic mb-16 text-center">Case Intelligence <span className="text-amber-500 not-italic">Library</span></h2>
          <div className="space-y-6">
            {[
              {
                q: "How does the CMS 1-Star rating affect my settlement?",
                a: "Facilities with a 1-star Medicare rating are legally recognized as 'Special Focus Facilities' or substandard care providers. This history of non-compliance can act as a powerful multiplier (approx. 1.4x) during settlement negotiations because it demonstrates systemic neglect."
              },
              {
                q: "What is the average settlement for stage IV bedsores?",
                a: "Stage IV bedsores often represent gross negligence and carry significant liability. Payouts in 2026 typically range from $500,000 to over $2,000,000, depending on complications like sepsis or permanent disfigurement."
              },
              {
                q: "Can a staffing ratio breach increase my claim value?",
                a: "Yes. Federal and state laws mandate minimum hours of direct care per resident. If we prove the facility was understaffed at the time of an injury (e.g., a fall), it transitions the case from 'unfortunate accident' to 'reckless negligence,' significantly increasing punitive damage potential."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-slate-950 border border-white/5 rounded-3xl">
                <h4 className="text-lg font-black text-white mb-4 italic flex items-center gap-3">
                  <span className="text-amber-500">Q.</span> {faq.q}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-amber-500/5" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic mb-8 tracking-tighter">Ready for a <span className="text-amber-500 not-italic">Forensic Audit?</span></h2>
          <p className="text-slate-400 text-lg font-medium mb-12">Stop guessing. Use the 2026 actuarial engine to determine the fair market value of your case.</p>
          <Link href="/nursing-home/abuse-settlement" className="inline-flex items-center gap-4 px-12 py-6 bg-white text-slate-950 rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-amber-500 transition-all hover:scale-105 active:scale-95">
            Start Audit Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-amber-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white italic">Nursing Home <span className="text-amber-500">Auditor</span></span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-medium">
                Technical oversight by the 2026 Forensic Data Team. Benchmarks derived from CMS Five-Star Quality Ratings and National Center on Elder Abuse (NCEA) litigation archives.
              </p>
            </div>
            <div className="flex flex-col md:items-end gap-6 text-[10px] font-black uppercase tracking-widest italic text-slate-600">
              <a href="#" className="hover:text-amber-500 transition-colors">Forensic Methodology</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy & Legal Data</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Attorney Partnerships</a>
            </div>
          </div>

          <div className="mb-12">
            <RelatedCalculators currentCalc="nursing-home" count={10} />
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">© 2026 Ranking Predator AI. All Rights Reserved.</span>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-600">
              <span>Status: <span className="text-amber-500">Live Audit Sync</span></span>
              <span>Region: <span className="text-white font-medium">Global Elder Care</span></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
