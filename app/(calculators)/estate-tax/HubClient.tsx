"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  TrendingUp,
  Shield,
  FileText,
  ArrowRight,
  TrendingDown,
  Scale,
  Info,
  ChevronDown,
  Zap,
  Activity,
  Lock,
  Globe,
  CheckCircle2,
  AlertCircle,
  DollarSign,
  RefreshCw,
  Clock,
  Target,
  Briefcase,
  PieChart,
  LineChart,
  Users
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the federal estate tax exemption for 2026?",
      a: "For 2026, the federal estate tax exemption is projected to be approximately $13.99 million per individual. However, unless Congress acts, the current high exemption levels from the TCJA are set to 'sunset' after 2025, potentially dropping back to around $7 million (adjusted for inflation)."
    },
    {
      q: "How does the 'Portability' provision work for married couples?",
      a: "Portability allows a surviving spouse to use any unused portion of their deceased spouse's federal estate tax exemption. To lock in this 'Deceased Spouse Unused Exclusion' (DSUE), an estate tax return (Form 706) must be filed even if no tax is due."
    },
    {
      q: "What is the maximum federal estate tax rate in 2026?",
      a: "The top federal estate tax rate remains at 40% for estates valued above the exemption threshold. This is a progressive tax, but for most high-net-worth estates, the effective rate on the taxable portion settles near the 40% mark."
    },
    {
      q: "Is there a difference between 'Estate Tax' and 'Inheritance Tax'?",
      a: "Yes. Estate tax is levied on the total value of the deceased's assets before distribution. Inheritance tax is paid by the beneficiary receiving the assets. While the federal government only has an estate tax, some states (like New Jersey or Maryland) have inheritance taxes."
    },
    {
      q: "What are 'Stepped-Up Basis' rules and why are they important?",
      a: "When an asset is inherited, its cost basis is 'stepped up' to its fair market value at the date of death. This significantly reduces or eliminates capital gains tax for the heirs when they eventually sell the asset."
    },
    {
      q: "How can 'Annual Gift Exclusions' reduce estate tax liability?",
      a: "In 2026, you can gift up to $18,000 (projected) per recipient to any number of people without using your lifetime exemption. This 'annual gifting strategy' is a primary method for reducing the taxable base of a large estate over time."
    }
  ];

  return (
    <div className="grid gap-4 max-w-3xl mx-auto text-left">
      {faqs.map((faq, idx) => (
        <div key={idx} className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden active:scale-[0.99] transition-all">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full p-5 flex items-center justify-between"
          >
            <span className="font-semibold text-slate-100 pr-8">{faq.q}</span>
            <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
          </button>
          {openIndex === idx && (
            <div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function HubClient() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* 1. S-CLASS HERO LAYER */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Fiscal Policy Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Estate Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade estate liability forecasting. Calculate federal and state inheritance exposure with 2026 TCJA sunset mapping.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/estate-tax/estate-calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Launch Estate Auditor
                <ArrowRight className="w-5 h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRICT 3-TABLE PROTOCOL LAYER */}
      <section className="py-20 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Tax Benchmarks</h2>
            <p className="text-slate-400">Official 2026 exemption thresholds and state-level exposure limits.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Federal Exemption Logic */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Federal Logic</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Filing Status</th>
                      <th className="px-5 py-3 border-b border-white/5">Exemption</th>
                      <th className="px-5 py-3 border-b border-white/5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Single</td>
                      <td className="px-5 py-3">$13.99M</td>
                      <td className="px-5 py-3 text-emerald-400">Current</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Married (Joint)</td>
                      <td className="px-5 py-3">$27.98M</td>
                      <td className="px-5 py-3 text-blue-400">Portability</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Annual Gift</td>
                      <td className="px-5 py-3">$18,000</td>
                      <td className="px-5 py-3 text-emerald-400">Exclusion</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Post-Sunset</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">~$7.0M</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Alert</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Rate Brackets */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Federal Tax Brackets</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Taxable Over</th>
                      <th className="px-5 py-3 border-b border-white/5">Rate</th>
                      <th className="px-5 py-3 border-b border-white/5">Exposure</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$0 - $10k</td>
                      <td className="px-5 py-3 font-mono">18%</td>
                      <td className="px-5 py-3 text-emerald-400">Low</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$250k - $500k</td>
                      <td className="px-5 py-3 font-mono">34%</td>
                      <td className="px-5 py-3 text-amber-400">Mod</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$1M+</td>
                      <td className="px-5 py-3 font-mono">40%</td>
                      <td className="px-5 py-3 text-rose-400">Maximum</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Effective Avg</td>
                      <td className="px-5 py-3 font-mono">~35%</td>
                      <td className="px-5 py-3 text-emerald-400">Standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Combined Exposure */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: State Compliance</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">State Level</th>
                      <th className="px-5 py-3 border-b border-white/5">Threshold</th>
                      <th className="px-5 py-3 border-b border-white/5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">MA / OR</td>
                      <td className="px-5 py-3">$1.0M - $2.0M</td>
                      <td className="px-5 py-3 text-rose-400">Aggressive</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">NY / WA</td>
                      <td className="px-5 py-3">$2.2M - $6.9M</td>
                      <td className="px-5 py-3 text-amber-400">Moderate</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">FL / TX / CA</td>
                      <td className="px-5 py-3">None</td>
                      <td className="px-5 py-3 text-emerald-400">Friendly</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Inheritance</td>
                      <td className="px-5 py-3">6 States</td>
                      <td className="px-5 py-3 text-rose-400">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HIGH-DENSITY TECHNICAL GUIDE LAYER */}
      <section className="py-20 bg-slate-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-invert prose-emerald max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Estate Tax Compliance Architecture</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              The federal estate tax, often referred to as the 'death tax' in legislative discourse, functions as a transfer levy on assets exceeding institutional exemption thresholds. In the 2026 financial environment, the core focus is the **Portability Logic** for married couples and the pending **Sunset Clause** of the Tax Cuts and Jobs Act (TCJA). Our S-Class engine analyzes the three core exposure vectors: **Gross Estate Valuation**, **Portability Optimization**, and **State-Level Fragmentation**.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                  <PieChart className="w-16 h-16" />
                </div>
                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Transfer Dynamics</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Step-Up Basis**: Revaluing assets at date of death.</li>
                  <li>• **Marital Deduction**: Unlimited transfers to U.S. citizen spouses.</li>
                  <li>• **Annual Exclusions**: Tax-free gifting up to $18k/recipient.</li>
                  <li>• **Life Insurance Trusts (ILIT)**: Removing death benefits from the estate.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                  <LineChart className="w-16 h-16" />
                </div>
                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Sunset Risk**: Planning for a 50% reduction in exemptions.</li>
                  <li>• **Cliff States**: Monitoring states with zero-portability rules.</li>
                  <li>• **QDOT Provisions**: Managing exposure for non-citizen spouses.</li>
                  <li>• **Appraisal Valuation**: Impact of illiquid asset discounts.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Mapping the Sunset</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Standard calculators often fail to account for the **Exemption Sunset Gap**. If an individual has an estate of $10M today, they owe zero federal tax. However, if they pass away after 2025 without legislative intervention, their estate could suddenly face a $1.2M+ tax bill as the exemption drops back to the $6-7M range. Our Audit Engine applies a **Sunset Multiplier** to your projections, ensuring your estate plan is resilient to the pending structural shifts in the tax code.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-emerald-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The Portability Election</strong>
                  Even if an estate is below the federal exemption threshold, executors should strongly consider filing Form 706 to elect portability. This 'locks in' the unused exemption for the surviving spouse, providing a secondary shield against future asset appreciation or legislative changes that lower exemption limits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERT FAQ HUB LAYER */}
      <section className="py-20 border-t border-white/5 bg-[#020617]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Estate Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 estate tax and legacy protocols.</p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* 5. RELATED CALCULATORS LAYER */}
      <section className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Financial Resource Cluster</h2>
              <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
            </div>
            <div className="w-full max-w-lg">
              <RelatedCalculators currentCalc="estate-tax" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Legacy.<br /><span className="text-emerald-500">Minimize Your Tax Loss.</span></h2>
          <Link href="/estate-tax/estate-calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
            <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
            RUN ESTATE AUDIT
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
