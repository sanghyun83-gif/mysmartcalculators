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
  Wallet
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is an annuity and how does the 2026 model calculate payouts?",
      a: "An annuity is a long-term contract with an insurance company designed to provide a steady stream of income, especially during retirement. Our 2026 model utilizes current actuarial life expectancy tables and projected interest rates to estimate monthly or annual payouts based on your principal and payout phase."
    },
    {
      q: "What is the difference between a Fixed and Variable annuity?",
      a: "Fixed annuities provide a guaranteed minimum interest rate and a set payout amount, offering low-risk stability. Variable annuities allow you to choose from various investment options (sub-accounts), providing potentially higher returns but with market risk and higher fees."
    },
    {
      q: "How do 'Immediate' annuities differ from 'Deferred' annuities?",
      a: "Immediate annuities (SPIA) start paying out income almost immediately (within a year) after a lump-sum payment. Deferred annuities accumulate interest over a long period before the payout phase begins, often years or decades later."
    },
    {
      q: "Are annuity payouts taxable in 2026?",
      a: "If purchased with pre-tax dollars (qualified), the entire payout is generally taxable as ordinary income. If purchased with after-tax dollars (non-qualified), only the earnings portion is taxable, while the principal return is tax-free."
    },
    {
      q: "What are 'Surrender Charges' and how can they be avoided?",
      a: "Surrender charges are fees incurred if you withdraw funds from a deferred annuity early (typically during the first 5-10 years). To avoid these, ensure you have sufficient liquid reserves and choose a contract with a 'Free Withdrawal' provision (usually 10% per year)."
    },
    {
      q: "How does inflation affect annuity income in the 2026 market?",
      a: "Standard fixed annuities do not adjust for inflation, meaning your purchasing power may erode over time. However, many 2026 contracts offer 'Cost-of-Living Adjustment' (COLA) riders that increase payouts by a fixed percentage (e.g., 2-3% annually)."
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
              <Wallet className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Guaranteed Income Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Annuity Payout <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade retirement income forecasting. Solve for fixed, variable, and immediate annuity yields with 2026 actuarial precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/annuity/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run Payout Engine
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Annuity Benchmarks</h2>
            <p className="text-slate-400">Official 2026 industry yield targets and risk thresholds.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Current Yield Targets */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Fixed Rate Targets</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Term (Years)</th>
                      <th className="px-5 py-3 border-b border-white/5">Target Yield</th>
                      <th className="px-5 py-3 border-b border-white/5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">3-Year Fixed</td>
                      <td className="px-5 py-3">4.85%</td>
                      <td className="px-5 py-3 text-emerald-400">Stable</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">5-Year Fixed</td>
                      <td className="px-5 py-3">5.20%</td>
                      <td className="px-5 py-3 text-blue-400">Optimize</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">10-Year Fixed</td>
                      <td className="px-5 py-3">5.50%</td>
                      <td className="px-5 py-3 text-emerald-400">Legacy</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Avg Benchmark</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">5.18%</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Target</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Payout Scalars */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Payout Volatility</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Annuity Type</th>
                      <th className="px-5 py-3 border-b border-white/5">Fee Scalar</th>
                      <th className="px-5 py-3 border-b border-white/5">Income Est.</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">SPIA (Imm.)</td>
                      <td className="px-5 py-3 font-mono">0.4% - 0.9%</td>
                      <td className="px-5 py-3 text-emerald-400">Max</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Variable</td>
                      <td className="px-5 py-3 font-mono">1.2% - 2.5%</td>
                      <td className="px-5 py-3 text-rose-400">Market</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Indexed (FIA)</td>
                      <td className="px-5 py-3 font-mono">0.8% - 1.5%</td>
                      <td className="px-5 py-3 text-amber-400">Buffered</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Standard Load</td>
                      <td className="px-5 py-3 font-mono">~1.0% Avg</td>
                      <td className="px-5 py-3 text-emerald-400">Stable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Retention & Vesting */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Liquidity Guardrails</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Surrender Year</th>
                      <th className="px-5 py-3 border-b border-white/5">Avg Penalty</th>
                      <th className="px-5 py-3 border-b border-white/5">Vesting Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Year 1</td>
                      <td className="px-5 py-3">7.0% - 10.0%</td>
                      <td className="px-5 py-3 text-rose-400">Locked</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Year 5</td>
                      <td className="px-5 py-3">3.0% - 5.0%</td>
                      <td className="px-5 py-3 text-amber-400">Partial</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Year 7+</td>
                      <td className="px-5 py-3">0.0%</td>
                      <td className="px-5 py-3 text-emerald-400">Liquid</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Standard Limit</td>
                      <td className="px-5 py-3">10% Free</td>
                      <td className="px-5 py-3 text-emerald-400">Annual</td>
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
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Annuity Payout Framework</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              Annuities function as institutional risk-transfer mechanisms, converting liquid principal into perpetual income streams. In the 2026 market, these contracts are governed by **Actuarial Longevity Tables** and current **Risk-Free Rate Benchmarks**. Our S-Class engine analyzes the core growth and payout vectors: **Accumulation Velocity**, **Surrender Charge Decay**, and **Inflation-Adjusted Purchasing Power**.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                  <PieChart className="w-16 h-16" />
                </div>
                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Payout Mechanics</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Immediate (SPIA)**: Converting lump-sums to cash flow.</li>
                  <li>• **Joint & Survivor**: Ensuring multi-life income security.</li>
                  <li>• **Period Certain**: Guaranteeing payouts for a fixed term.</li>
                  <li>• **COLA Riders**: Adjusting for 2-3% annual inflation.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                  <LineChart className="w-16 h-16" />
                </div>
                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Risk & Fee Scalars</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **M&E Charges**: Mortality and expense risk fees.</li>
                  <li>• **Surrender Schedules**: Fee decay over the vesting period.</li>
                  <li>• **Market Access**: Impact of underlying sub-account volatility.</li>
                  <li>• **Credit Risk**: Assessing insurer financial strength (AM Best).</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for Solvency</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Unlike generic interest calculators, our 2026 Payout Engine utilizes **Cohort Mortality Data**. It doesn't just apply a flat rate; it identifies your 'Break-Even Age' based on current life expectancy and adjusts for the **Exclusion Ratio**—ensuring you understand what portion of your income is a tax-free return of principal. This produces a granular 'Net Monthly Income' that matches professional institutional illustrations.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-emerald-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The 1035 Exchange Rule</strong>
                  Under IRS Section 1035, you can exchange an existing annuity contract for a newer one with better rates or lower fees without triggering immediate tax consequences. In the 2026 market, many participants utilize this to pivot from high-fee variable contracts into modern indexed (FIA) options.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Annuity Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 annuity and income protocols.</p>
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
              <RelatedCalculators currentCalc="annuity" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Future.<br /><span className="text-emerald-500">Guarantee Your Income.</span></h2>
          <Link href="/annuity/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
            <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
            RUN PAYOUT ENGINE
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
