"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Coins,
  Shield,
  Calculator,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Scale,
  Info,
  ChevronDown,
  Zap,
  History,
  AlertCircle,
  PieChart,
  Download,
  Lock,
  Activity,
  CheckCircle,
  XCircle,
  Users,
  Globe
} from "lucide-react";
import { SITE, CALCULATORS, CRYPTO_TAX_2026, formatCurrency } from "@/lib/calculators/crypto-tax";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
            <Info className="w-6 h-6 text-orange-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Expert FAQ Library</h2>
            <p className="text-slate-400">Essential 2026 Crypto Tax regulatory intelligence</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { q: "How is cryptocurrency taxed by the IRS in 2026?", a: "Crypto is treated as property, not currency. Every sale, trade (crypto-to-crypto), or spend is a realization event subject to capital gains tax (Form 8949)." },
            { q: "What is the 2026 'Wash Sale' rule status for crypto?", a: "While stocks have a 30-day wash sale rule, crypto technically remains under 'property' rules, though 2026 statutory updates progressively align it with securities to prevent tax-loss harvesting abuse." },
            { q: "Does the IRS know about my exchange trades?", a: "Yes. Under 2026 reporting mandates, all major exchanges issue Form 1099-DA directly to the IRS, detailing your digital asset proceeds and cost basis." },
            { q: "How are mining and staking rewards taxed?", a: "The IRS treats rewards as ordinary income based on the fair market value when received. Subsequent sales trigger capital gains based on that initial value basis." },
            { q: "Can I use HIFO (Highest-In-First-Out) for lower taxes?", a: "Yes, provided you can specifically identify the lots. 2026 institutional tools often defaults to FIFO, but HIFO can significantly reduce taxable gains during bull cycles." }
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-6 cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <span className="text-lg font-medium text-slate-200 group-open:text-orange-400 transition-colors">
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
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-orange-500/30 text-slate-300">
      {/* 1. S-Class Hero (UX 15%) */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Standard Engine 2026 Audit Applied</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Crypto<span className="text-orange-500"> Auditor.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            Calculate crypto gains, Form 8949 margins, and liability surcharges with institutional precision. Synced with 2026 IRS 1099-DA mandates.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/crypto-tax/crypto-calculator"
              className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.3)] flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Run Payout Engine
            </Link>
            <Link
              href="/crypto-tax/tax-guide"
              className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              IRS Audit Guide
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
                icon: <Activity className="w-8 h-8 text-orange-400" />,
                label: "Avg Crypto Tax",
                value: formatCurrency(CRYPTO_TAX_2026.statistics.avgCryptoTax),
                desc: "Standard realization liability baseline"
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-400" />,
                label: "US Holders",
                value: "52.0M+",
                desc: "FMV indexed participant volume for 2026"
              },
              {
                icon: <Lock className="w-8 h-8 text-purple-400" />,
                label: "Form 8949",
                value: "Rule 2026",
                desc: "Statutory disposition reporting standard"
              }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/30 transition-all duration-500 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-orange-400 font-semibold mb-2">{stat.label}</div>
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
                <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. Digital Asset Tax Compliance (2020–2026)</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">IRS Audit Volume • Reported Gains Statistics</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-orange-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Fiscal Year</th>
                        <th className="px-6 py-4">IRS Audit Rate</th>
                        <th className="px-6 py-4">compliance (%)</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { y: "2020", c: "0.28%", r: "18.4%", s: "Archived" },
                        { y: "2022", c: "0.45%", r: "24.2%", s: "Archived" },
                        { y: "2024", c: "0.68%", r: "38.5%", s: "Verified" },
                        { y: "2026 Est", c: "1.12%", r: "45.0%", s: "Current" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-orange-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.y}</td>
                          <td className="px-6 py-4">{row.c}</td>
                          <td className="px-6 py-4 text-orange-600/70">{row.r}</td>
                          <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table II: Comparative Benchmark */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. 2026 IRS Disposition Matrix (Form 8949)</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Asset Category • Valuation Methodology</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-orange-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">realization Event</th>
                        <th className="px-6 py-4">Tax Type</th>
                        <th className="px-6 py-4">Cost Basis Rule</th>
                        <th className="px-6 py-4">Audit Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { e: "Crypto to Fiat", t: "Capital Gains", c: "FIFO / Specific", a: "Standard" },
                        { e: "Crypto to Crypto", t: "Capital Gains", c: "Relative FMV", a: "High" },
                        { e: "Staking / Mining", t: "Ordinary Income", c: "FMV at Receipt", a: "Medium" },
                        { e: "Card Purchases", t: "Capital Gains", c: "Spot Price", a: "Verifiable" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-orange-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.e}</td>
                          <td className="px-6 py-4">{row.t}</td>
                          <td className="px-6 py-4">{row.c}</td>
                          <td className="px-6 py-4 text-orange-600 font-mono text-[9px] uppercase tracking-widest">{row.a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table III: Technical Specification */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-orange-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Underwriting Logic Specs (2026 Payout)</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Mathematical Weighting • Data Source Audit</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                      <tr>
                        <th className="px-6 py-4">Module Tier</th>
                        <th className="px-6 py-4">Mathematical Weight</th>
                        <th className="px-6 py-4">Data Source</th>
                        <th className="px-6 py-4">Precision</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { t: "Lot Selection (LIFO/FIFO)", w: "40% Impact", p: "Wallet Audit", pr: "Primary" },
                        { t: "FMV Reconciliation", w: "35% Impact", p: "Exchange API", pr: "Secondary" },
                        { t: "State Statutory Delta", w: "25% Impact", p: "Revenue Dept.", pr: "Localized" }
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
          <div className="prose prose-invert prose-orange max-w-none">
            <header className="mb-20">
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                Institutional Audit: <br />
                <span className="text-orange-500">2026 Digital Asset Tax Ecosystem</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-orange-500 pl-8 py-2">
                In 2026, the IRS treatment of cryptocurrency has matured from an &quot;unknown ledger&quot; to a fully integrated property asset class. Compliance centers on Form 1040 Schedule 1 and Form 8949, where transparency and cost-basis precision are the primary shields against underwriting audits.
              </p>
            </header>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Lock className="text-orange-500" />
                1. Realization Events & Statutory Reporting
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Under the **2026 Digital Asset Mandate**, every transaction involving the exchange of one digital asset for another (e.g., BTC to ETH) is a realization event. Unlike traditional currency exchanges, these trades trigger capital gains based on the fair market value (FMV) at the precise millisecond of the execution. This requires high-fidelity tracking of every swap through an integrated tax ledger.
              </p>
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 my-8">
                <h4 className="text-white font-bold mb-4">Crypto Compliance Audit Checklist</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400">
                  <li>• Verify **Cost Basis Methodology**: Consistently apply FIFO, LIFO, or HIFO.</li>
                  <li>• Assess **Mining/Staking FMV**: Income is realized at the point of dominion and control.</li>
                  <li>• Audit **1099-DA Forms**: Reconcile third-party exchange data with private wallet ledgers.</li>
                  <li>• Check **Wash Sale Alignment**: Monitor positions for potential 30-day cross-asset synchronization.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-12 mb-24 text-slate-400 leading-relaxed">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <PieChart className="text-orange-500" />
                2. Tax-Loss Harvesting & Lot Optimization
              </h3>
              <p>
                Actuarial strategies for 2026 emphasize **Specific Identification** of lots to minimize net capital gains. In a volatile market, choosing the highest cost-basis lot (HIFO) to offset current year ordinary income (up to $3,000) remains a critical tool for wealth preservation. However, since 2026 statutory updates, the IRS has increased scrutiny on &quot;chain-hopping&quot; to reset basis without substantive economic change.
              </p>
            </div>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Globe className="text-orange-500" />
                3. The 2026 Global Reporting Framework (CARF)
              </h3>
              <p className="text-slate-400 leading-relaxed">
                The implementation of the **Crypto-Asset Reporting Framework (CARF)** in 2026 has standardized cross-border data sharing. For US holders with assets on offshore exchanges, automated reporting now mirrors FATCA standards. Ensuring that all international realization events are synchronized with your Form 8949 is no longer optional but a baseline for statutory compliance.
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
              <RelatedCalculators currentCalc="crypto-tax" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for a Crypto Audit?</h2>
          <p className="text-slate-400 mb-12 text-lg">Execute your 2026 digital asset projections with statutory accuracy.</p>
          <Link
            href="/crypto-tax/crypto-calculator"
            className="px-12 py-6 bg-orange-600 hover:bg-orange-700 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_60px_rgba(249,115,22,0.4)] inline-flex items-center gap-3"
          >
            Access Auditor Engine
            <Calculator className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
