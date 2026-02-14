"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Shield,
  FileText,
  Home,
  ArrowRight,
  TrendingUp,
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
  Target
} from "lucide-react";
import { SITE, CALCULATORS, REFINANCE_2026, formatCurrency } from "@/lib/calculators/refinance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the 'Break-Even Point' in a 2026 mortgage refinance?",
      a: "The break-even point is the number of months it takes for your monthly savings to cover the upfront closing costs of the refinance. For example, if your refinance costs $4,000 and saves you $200/month, your break-even point is 20 months. Our S-Class engine automatically solves for this to ensure the transaction makes financial sense."
    },
    {
      q: "Can I refinance if I have less than 20% equity in 2026?",
      a: "Yes. While 20% equity (80% LTV) is the sweet spot for avoiding PMI, you can refinance with as little as 3% equity using Conventional programs, or 0% equity via the VA Interest Rate Reduction Refinance Loan (IRRRL) if you are a veteran. FHA Streamline refinances also do not require an appraisal or proof of equity."
    },
    {
      q: "What is a 'Cash-Out Refinance' and how does it affect my rate?",
      a: "A cash-out refinance allows you to replace your current loan with a larger one and take the difference in cash. In 2026, cash-out rates are typically 0.25% to 0.50% higher than 'Rate-and-Term' refinances because they represent higher risk to the lender. Most lenders limit cash-out LTV to 80%."
    },
    {
      q: "Does a refinance restart my 30-year clock?",
      a: "Typically, yes. If you are 5 years into a 30-year mortgage and refinance into a new 30-year loan, you will be paying interest for a total of 35 years. To avoid this, consider a 20-year or 15-year term, or set your amortization schedule to match your remaining years (e.g., a 25-year fixed)."
    },
    {
      q: "What are the 2026 'Closing Costs' for a typical refinance?",
      a: "Refinance costs generally range from 2% to 4% of the loan amount. This covers appraisal, title search, lender origination, and credit report fees. Our 2026 model factors in these costs to provide a 'Net Present Value' (NPV) analysis of the deal."
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
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* 1. S-CLASS HERO LAYER */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-400">Equity Optimization Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Refinance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade yield optimization. Solve for break-even points, amortization recapture, and net present value in the 2026 market.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/refinance/calculator" className="flex items-center gap-3 bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-cyan-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run Optimization Engine
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Refinance Benchmarks</h2>
            <p className="text-slate-400">Official 2026 mortgage yield targets and equity thresholds.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Yield Optimization Targets */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Interest Targets</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Current Rate</th>
                      <th className="px-5 py-3 border-b border-white/5">Target (2026)</th>
                      <th className="px-5 py-3 border-b border-white/5">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">7.5% - 8.0%</td>
                      <td className="px-5 py-3">6.15%</td>
                      <td className="px-5 py-3 text-emerald-400">Strong Buy</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">7.0% - 7.5%</td>
                      <td className="px-5 py-3">6.15%</td>
                      <td className="px-5 py-3 text-blue-400">Optimize</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">6.5% - 7.0%</td>
                      <td className="px-5 py-3">6.15%</td>
                      <td className="px-5 py-3 text-amber-400">Analyze</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-cyan-500/10 font-bold text-cyan-400 italic">Net Spread</td>
                      <td className="px-5 py-3 bg-cyan-500/10 font-bold text-cyan-400">{">"} 0.75%</td>
                      <td className="px-5 py-3 bg-cyan-500/10 font-bold text-cyan-400">Target</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Break-Even Recapture */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Amortization Logic</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Closing Cost</th>
                      <th className="px-5 py-3 border-b border-white/5">Mo. Savings</th>
                      <th className="px-5 py-3 border-b border-white/5">Break-Even</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$3,000</td>
                      <td className="px-5 py-3 font-mono">$250</td>
                      <td className="px-5 py-3 text-emerald-400">12 Mo.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$5,000</td>
                      <td className="px-5 py-3 font-mono">$250</td>
                      <td className="px-5 py-3 text-blue-400">20 Mo.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$7,500</td>
                      <td className="px-5 py-3 font-mono">$250</td>
                      <td className="px-5 py-3 text-amber-400">30 Mo.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Standard Limit</td>
                      <td className="px-5 py-3 font-mono">-</td>
                      <td className="px-5 py-3 text-rose-400">36 Mo. Max</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Equity Tier Guardrails */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Equity Protocols</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Equity (LTV)</th>
                      <th className="px-5 py-3 border-b border-white/5">PMI Status</th>
                      <th className="px-5 py-3 border-b border-white/5">Program Access</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">20%+ (80%)</td>
                      <td className="px-5 py-3 text-emerald-400">None</td>
                      <td className="px-5 py-3">All Access</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">10-19% (90%)</td>
                      <td className="px-5 py-3 text-amber-400">Standard</td>
                      <td className="px-5 py-3">Conventional</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">3-9% (97%)</td>
                      <td className="px-5 py-3 text-rose-400">High-Risk</td>
                      <td className="px-5 py-3">FHA / Low-Down</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">VA Streamline</td>
                      <td className="px-5 py-3 text-blue-400">None</td>
                      <td className="px-5 py-3 text-blue-400">IRRRL</td>
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
          <div className="prose prose-invert prose-cyan max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-cyan-500 pl-6 underline underline-offset-8 decoration-cyan-500/30">2026 Mortgage Refinance Framework</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              Refinancing is the strategic re-leveraging of residential debt to capture lower yield environments or extract asset liquidity. In the 2026 market, success is determined by the **NPV (Net Present Value)** of the transaction relative to the remaining amortization term. Our S-Class engine analyzes the delta between your current **Weighted Average Cost of Debt** and the 2026 prevailing conforming rates.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-cyan-500">
                  <Activity className="w-16 h-16" />
                </div>
                <h4 className="text-cyan-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Rate & Term Optimization</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Yield Delta**: Capture the 100bps+ spread.</li>
                  <li>• **Term Compression**: Moving 30-yr to 15-yr.</li>
                  <li>• **PMI Elimination**: Refinancing at 80% LTV.</li>
                  <li>• **Amortization Reset**: Impact on interest-to-principal.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                  <TrendingUp className="w-16 h-16" />
                </div>
                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Liquidity & Equity Extraction</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Cash-Out Protocol**: Limit at 80% LTV.</li>
                  <li>• **Debt Consolidation**: Rolling high-interest into low.</li>
                  <li>• **Asset Improvement**: Capitalizing renos via equity.</li>
                  <li>• **Reserve Factor**: Protecting liquid cash flows.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">Execution Logic: The S-Class Engine</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Our 2026 Engine utilizes a **Time-Value-of-Money (TVM) Comparison**. It doesn't just look at the monthly payment; it calculates the total interest paid over the remaining life of both the old and new loans, factoring in the upfront closing costs. This ensures that a lower monthly payment doesn't accidentally lead to higher long-term costs due to an amortization reset.
            </p>

            <div className="bg-cyan-500/5 border border-cyan-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-cyan-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-cyan-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The 'Rule of Three' (2026)</strong>
                  A refinance is generally optimal if it meets three criteria: 1) Interest rate drops by at least 0.75%, 2) You plan to stay in the home longer than the break-even period, and 3) The total closing costs are recouped in under 36 months of savings. Always solve for all three.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Refinance Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 mortgage liquidity options.</p>
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
              <RelatedCalculators currentCalc="refinance" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-cyan-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Debt.<br /><span className="text-cyan-500">Recapture Your Equity.</span></h2>
          <Link href="/refinance/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-cyan-500/20 active:scale-95 group">
            <RefreshCw className="w-6 h-6 group-hover:text-cyan-600 transition-colors" />
            RUN OPTIMIZATION ENGINE
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
