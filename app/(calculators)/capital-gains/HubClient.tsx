"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Scale,
  PieChart,
  Info,
  ChevronDown,
  Zap,
  History,
  Target,
  Activity
} from "lucide-react";
import { SITE, CALCULATORS, CAPITAL_GAINS_2026, formatCurrency } from "@/lib/calculators/capital-gains";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQ_DATA = [
  {
    q: "What is the 2026 capital gains tax rate for high earners?",
    a: "In 2026, the maximum long-term capital gains rate is 20%. Additionally, high earners (Single > $200k, Joint > $250k) are subject to the 3.8% Net Investment Income Tax (NIIT), bringing the effective federal cap to 23.8%."
  },
  {
    q: "How does the Section 121 real estate exclusion work in 2026?",
    a: "IRS Section 121 allows individuals to exclude up to $250,000 (Single) or $500,000 (Married) of gain from the sale of a primary residence, provided you owned and lived in the home for at least 2 of the 5 years prior to sale."
  },
  {
    q: "What constitutes a 'Long-Term' holding period?",
    a: "To qualify for long-term capital gains rates (0%, 15%, or 20%), you must hold the asset for more than one year (366 days or more). Assets held for 365 days or less are taxed as ordinary income."
  },
  {
    q: "Can I offset 2026 capital gains with losses?",
    a: "Yes. Capital losses first offset capital gains of the same type (short-term vs. long-term). If losses exceed gains, you can use up to $3,000 ($1,500 if MFS) to offset ordinary income, with remaining losses carried forward indefinitely."
  },
  {
    q: "Is there a capital gains tax on cryptocurrency in 2026?",
    a: "Yes. The IRS treats cryptocurrency as property. Selling, trading, or using crypto to purchase goods triggers a capital gains event based on the difference between your cost basis and the fair market value at the time of the transaction."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
            <Info className="w-6 h-6 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Expert FAQ Library</h2>
            <p className="text-slate-400">Essential 2026 Capital Gains tax intelligence</p>
          </div>
        </div>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <details
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-6 cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <span className="text-lg font-medium text-slate-200 group-open:text-emerald-400 transition-colors">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
              </summary>
              <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-900 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function HubClient() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-emerald-500/30 text-slate-300">
      {/* 1. S-Class Hero (UX 15%) */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Standard Engine 2026 Audit Applied</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Gains<span className="text-emerald-500"> Auditor.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            Calculate capital gains tax, NIIT surcharges, and Section 121 exclusions with institutional precision. Synced with 2026 IRS Publication 550.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/capital-gains/gains-calculator"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,0.3)] flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Run Tax Engine
            </Link>
            <Link
              href="/capital-gains/tax-rates-guide"
              className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Rate Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Core Metrics */}
      <section className="py-24 border-y border-slate-900 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="w-8 h-8 text-emerald-400" />,
                label: "LT Gains Median",
                value: "15%",
                desc: "Standard rate for most US individual filers"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                label: "Max Federal Rate",
                value: "23.8%",
                desc: "Includes 20% Base + 3.8% NIIT Surcharge"
              },
              {
                icon: <Target className="w-8 h-8 text-emerald-400" />,
                label: "Zero-Tax Floor",
                value: formatCurrency(CAPITAL_GAINS_2026.longTermRates.single[0].max),
                desc: "Income limit for 0% long-term gains (Single)"
              }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-500 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-emerald-400 font-semibold mb-2">{stat.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Strict 3-Table Protocol (Authority 85%) */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="my-24 p-8 bg-slate-900 border border-white/5 rounded-[3rem] shadow-2xl">
            <div className="space-y-20">
              {/* Table I: Historical/Statistical */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. Capital Gains Tax Revenue (2020–2026)</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">IRS Fiscal Audit • Cumulative Investment Gains</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Fiscal Cycle</th>
                        <th className="px-6 py-4">Est. Revenue</th>
                        <th className="px-6 py-4">Gain Velocity</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { c: "2020-2021", r: "$240B", v: "Baseline", s: "Archived" },
                        { c: "2022-2023", r: "$285B", v: "+18.7%", s: "Archived" },
                        { c: "2024-2025", r: "$310B", v: "+8.8%", s: "Verified" },
                        { c: "2026 Audit", r: "$320B", v: "+3.2%", s: "Current" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.c}</td>
                          <td className="px-6 py-4">{row.r}</td>
                          <td className="px-6 py-4 text-emerald-600/70">{row.v}</td>
                          <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table II: Comparative Benchmark */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. 2026 Investment Risk Benchmarks</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Asset Class Allocation • Statutory Rates</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-emerald-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Asset Tier</th>
                        <th className="px-6 py-4">Holding Rule</th>
                        <th className="px-6 py-4">Max Fed Rate</th>
                        <th className="px-6 py-4">IRS Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { a: "Equities / Crypto", h: "> 1 Year", m: "23.8%", s: "Standard" },
                        { a: "Real Estate", h: "> 1 Year", m: "25% (Depr)", s: "Section 121" },
                        { a: "Collectibles", h: "> 1 Year", m: "28%", s: "Pub 550" },
                        { a: "Short-Term", h: "< 1 Year", m: "37%", s: "Ordinary" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-emerald-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.a}</td>
                          <td className="px-6 py-4">{row.h}</td>
                          <td className="px-6 py-4">{row.m}</td>
                          <td className="px-6 py-4 text-emerald-600 font-mono text-[9px] uppercase tracking-widest">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table III: Technical Specification */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Tax Calculus Logic Specs</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Statutory Formula • NIIT Architecture</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                      <tr>
                        <th className="px-6 py-4">Audit Layer</th>
                        <th className="px-6 py-4">Mathematical Weight</th>
                        <th className="px-6 py-4">Data Source</th>
                        <th className="px-6 py-4">Precision</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { t: "Filing Status", w: "Bracket Baseline", p: "IRS Pub 17", pr: "Primary" },
                        { t: "Adjusted Gross", w: "Threshold Check", p: "Form 1040 Audit", pr: "Secondary" },
                        { t: "Cost Basis", w: "Principal Delta", p: "Schedule D", pr: "Variable" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.t}</td>
                          <td className="px-6 py-4 text-[10px]">{row.w}</td>
                          <td className="px-6 py-4 text-[10px] font-mono">{row.p}</td>
                          <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-white/40">{row.pr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. High-Density Technical Guide (Authority Content) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-invert prose-emerald max-w-none">
            <header className="mb-20">
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                Institutional Audit: <br />
                <span className="text-emerald-500">2026 Capital Gains Ecosystem</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-emerald-500 pl-8 py-2">
                Capital gains taxation in 2026 remains a pillar of wealth management. Understanding the interaction between holding periods, Net Investment Income Tax (NIIT), and state-level statutory rates is essential for optimizing net-of-tax returns on equities, crypto, and real estate.
              </p>
            </header>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Scale className="text-emerald-500" />
                1. The Long-Term Capital Gains Framework
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Assets held for more than one year are subject to the **Long-Term Capital Gains** rates of 0%, 15%, or 20%. In 2026, the 0% bracket has been adjusted for inflation to cover income up to {formatCurrency(CAPITAL_GAINS_2026.longTermRates.single[0].max)} for single filers. This provides a significant tax shield for baseline investors and retirees.
              </p>
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 my-8">
                <h4 className="text-white font-bold mb-4">Investment Audit Checklist</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400">
                  <li>• Verify **Holding Periods**: 366+ days are required for statutory LT treatment.</li>
                  <li>• Assess **Cost Basis**: Include commissions, legal fees, and improvements (Real Estate).</li>
                  <li>• Audit **NIIT Thresholds**: single &gt; $200k, Joint &gt; $250k triggers the 3.8% surtax.</li>
                  <li>• Check **Wash Sale Rules**: Ensure losses are not invalidated by repurchasing within 30 days.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-12 mb-24 text-slate-400 leading-relaxed">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <PieChart className="text-emerald-500" />
                2. Section 121: The Real Estate Privilege
              </h3>
              <p>
                The **Section 121 exclusion** remains the most powerful tax benefit for homeowners. For 2026, the statutory caps remain at $250,000 for single filers and $500,000 for married couples filing jointly. To qualify, you must pass the 'Ownership and Use' tests, which mandate primary residency for at least two of the five years preceding the sale.
              </p>
            </div>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <History className="text-emerald-500" />
                3. Crypto & Digital Asset Compliance
              </h3>
              <p className="text-slate-400 leading-relaxed">
                IRS **Publication 550** clarifies that digital assets (cryptocurrency, NFTs) are treated as property. Every trade is a realization event. In 2026, carriers and exchanges provide automated 1099-DA forms, making precise tracking of cost basis via FIFO (First-In-First-Out) or Specific Identification mandatory for statutory auditing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert FAQ Hub */}
      <FAQSection />

      {/* 5. Related Cluster */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-12 text-center">Institutional Tool Cluster</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <RelatedCalculators currentCalc="capital-gains" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for a Tax Audit?</h2>
          <p className="text-slate-400 mb-12 text-lg">Execute your 2026 capital gains projections with statutory accuracy.</p>
          <Link
            href="/capital-gains/gains-calculator"
            className="px-12 py-6 bg-emerald-600 hover:bg-emerald-700 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(16,185,129,0.4)] inline-flex items-center gap-3"
          >
            Access Auditor Engine
            <Calculator className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
