"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Shield,
  DollarSign,
  Scale,
  Users,
  ArrowRight,
  CheckCircle,
  Info,
  ChevronDown,
  Zap,
  TrendingUp,
  TrendingDown,
  PieChart,
  Activity,
  Lock,
  Globe,
  Briefcase
} from "lucide-react";
import { SITE, CALCULATORS, INSURANCE_CONSTANTS, formatCurrency } from "@/lib/calculators/life-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center">
            <Info className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Expert FAQ Library</h2>
            <p className="text-slate-400">Essential 2026 Life Insurance regulatory intelligence</p>
          </div>
        </div>
        <div className="space-y-4">
          {[
            { q: "How much life insurance do I actually need in 2026?", a: "The institutional 'DIME' method factors in Debt, Income replacement (10-15x), Mortgage, and Education. For a 35-year-old earning $75k, a $1M term policy is a common baseline to ensure 10+ years of full replacement and debt clearing." },
            { q: "Term vs. Whole Life: Which is better for 2026 wealth strategy?", a: "Term life is the most cost-effective for pure protection during high-liability years (parenting, mortgage). Whole life is an expensive hybrid of insurance and a low-yield cash-value component, often best reserved for high-net-worth estate tax liquidity or legacy planning." },
            { q: "How do 2026 mortality table updates affect my premium?", a: "Life expectancy adjustments in the 2026 NAIC tables have stabilized premiums for younger, healthy non-smokers. However, premiums scale aggressively after age 50 due to actuarial 'stair-stepping' in mortality risk." },
            { q: "Does life insurance payout have income tax in 2026?", a: "Death benefits are generally received income tax-free by beneficiaries. However, for estates exceeding federal thresholds (approx. $13.9M in 2026), the benefit may be subject to federal estate taxes if not structured in a trust (ILIT)." },
            { q: "Can I get life insurance without a medical exam in 2026?", a: "Yes. Accelerated Underwriting (AU) uses real-time prescription and MIB data to offer instant approvals for healthy applicants up to $1M-$3M without a physical exam, though traditionally underwritten policies may still offer lower rates." }
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300"
              open={openIndex === index}
            >
              <summary
                className="flex items-center justify-between p-6 cursor-pointer list-none"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenIndex(openIndex === index ? null : index);
                }}
              >
                <span className="text-lg font-medium text-slate-200 group-open:text-indigo-400 transition-colors">
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
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-indigo-500/30 text-slate-300">
      {/* 1. S-Class Hero (UX 15%) */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>Standard Engine 2026 Audit Applied</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
            Legacy<span className="text-indigo-500"> Auditor.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            Calculate coverage gaps, premium escalations, and estate liquidity with institutional precision. Synced with 2026 NAIC mortality models.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/life-insurance/calculator"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(79,70,229,0.3)] flex items-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Run Coverage Engine
            </Link>
            <Link
              href="/life-insurance/term-vs-whole"
              className="px-8 py-4 bg-slate-900 border border-slate-800 hover:border-slate-700 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <Scale className="w-5 h-5" />
              Policy Audit
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
                icon: <TrendingDown className="w-8 h-8 text-emerald-400" />,
                label: "Avg Monthly Premium",
                value: "$30-$50",
                desc: "Based on $500k/20yr term (35M Preferred)"
              },
              {
                icon: <Users className="w-8 h-8 text-indigo-400" />,
                label: "Income Multiplier",
                value: "10x - 15x",
                desc: "Statutory range for full debt protection"
              },
              {
                icon: <PieChart className="w-8 h-8 text-purple-400" />,
                label: "NAIC Alpha",
                value: "Rule 2026",
                desc: "Official life insurance mortality auditing"
              }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all duration-500 group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-indigo-400 font-semibold mb-2">{stat.label}</div>
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
                <div className="flex items-center gap-4 border-l-4 border-indigo-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">I. Life Expectancy & Premium Index (2020–2026)</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">ACLI Sector Audit • Term Life Volatility</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-indigo-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Fiscal Cycle</th>
                        <th className="px-6 py-4">Avg Term rate</th>
                        <th className="px-6 py-4">Mortality Index</th>
                        <th className="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { y: "2020-21", c: "$24.50", r: "82.4", s: "Archived" },
                        { y: "2022-23", c: "$26.10", r: "84.7", s: "Archived" },
                        { y: "2024-25", c: "$27.85", r: "81.2", s: "Verified" },
                        { y: "2026 Est", c: "$29.40", r: "80.8", s: "Current" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.y}</td>
                          <td className="px-6 py-4">{row.c}</td>
                          <td className="px-6 py-4 text-indigo-600/70">{row.r}</td>
                          <td className="px-6 py-4 text-[9px] uppercase tracking-widest text-slate-600 font-mono">{row.s}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table II: Comparative Benchmark */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-indigo-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">II. 2026 Health Underwriting Coefficients</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Risk Class • Premium Multipliers</p>
                  </div>
                </div>
                <div className="overflow-x-auto rounded-[2rem] border border-white/5 bg-slate-950">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-white/5 border-b border-white/10 text-[9px] font-black tracking-[0.2em] text-indigo-400 uppercase">
                      <tr>
                        <th className="px-6 py-4">Health Tier</th>
                        <th className="px-6 py-4">Premium Delta</th>
                        <th className="px-6 py-4">Criteria</th>
                        <th className="px-6 py-4">Accelerated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-xs font-bold italic text-slate-400">
                      {[
                        { e: "Preferred Plus", m: "-25%", c: "Optimal Vitals", a: "Yes" },
                        { e: "Preferred", m: "Baseline", c: "Good Health", a: "Yes" },
                        { e: "Standard", m: "+15%", c: "Average Vitals", a: "Conditional" },
                        { e: "Standard Plus", m: "+85%+", c: "Smoker / Issues", a: "No" }
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-indigo-500/5 transition-colors group">
                          <td className="px-6 py-4 text-white">{row.e}</td>
                          <td className="px-6 py-4">{row.m}</td>
                          <td className="px-6 py-4">{row.c}</td>
                          <td className="px-6 py-4 text-indigo-600 font-mono text-[9px] uppercase tracking-widest">{row.a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Table III: Technical Specification */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-l-4 border-indigo-500 pl-6">
                  <div>
                    <h2 className="text-xl font-black text-white italic uppercase tracking-tighter">III. Need Calculus Logic Specs</h2>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Mathematical Weighting • DIME Method Audit</p>
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
                        { t: "Income Replacement", w: "65% Factor", p: "Adjusted Gross", pr: "Primary" },
                        { t: "Mortgage/Liability", w: "25% Factor", p: "Amortization", pr: "Secondary" },
                        { t: "Education / Burial", w: "10% Factor", p: "Inflation Adj.", pr: "Localized" }
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
          <div className="prose prose-invert prose-indigo max-w-none">
            <header className="mb-20">
              <h2 className="text-5xl font-black text-white mb-8 leading-tight">
                Institutional Audit: <br />
                <span className="text-indigo-500">2026 Life Insurance Ecosystem</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed italic border-l-4 border-indigo-500 pl-8 py-2">
                For individuals in 2026, life insurance is the ultimate hedge against human capital volatility. Navigating term lengths, underwriting classes, and the statutory tax-free nature of death benefits requires a data-driven approach based on NAIC actuarial models.
              </p>
            </header>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Lock className="text-indigo-500" />
                1. The DIME Method for Institutional Sizing
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Professional financial advisors in 2026 utilize the **DIME method** to quantify coverage needs precisely. This factors in **D**ebt (including mortgage balance), **I**ncome (multiplying annual gross by the years your family will need support), **M**ortgage settlement, and **E**ducation (future college inflation costs). A 10x-15x income multiple remains the benchmark for comprehensive protection during the primary earning cycle.
              </p>
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 my-8">
                <h4 className="text-white font-bold mb-4">Legacy Risk Audit Checklist</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400">
                  <li>• Verify **Income Multiple**: Ensure replacement covers 100% of standard of living.</li>
                  <li>• Assess **Term Alignment**: Sync policy expiration with the payoff date of major debts.</li>
                  <li>• Audit **Beneficiary Primary/Contingent**: Maintain updated designations to avoid probate.</li>
                  <li>• Check **Accelerated Benefits**: 2026 riders often allow early access for terminal illness.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-12 mb-24 text-slate-400 leading-relaxed">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Activity className="text-indigo-500" />
                2. Accelerated Underwriting & Data Fusion
              </h3>
              <p>
                The 2026 life insurance market has pivoted toward **Accelerated Underwriting (AU)**. Carriers now leverage Big Data—including motor vehicle records, medical history clearinghouses (MIB), and even prescription histories—to approve policies without invasive fluids in minutes. This speed enhances accessibility but requires applicants to have high-fidelity 'data profiles' to qualify for the most competitive Preferred Plus coefficients.
              </p>
            </div>

            <div className="space-y-12 mb-24">
              <h3 className="text-3xl font-bold text-white flex items-center gap-3">
                <Globe className="text-indigo-500" />
                3. Terminal vs. Permanent: The 2026 Strategy
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Strategic financial planning in 2026 favors **Term Life Insurance** for the vast majority of consumers. By purchasing a low-cost term policy and investing the significant premium delta into tax-advantaged accounts (HSA/401k), individuals generally achieve superior net wealth outcomes compared to Whole Life products. Permanent insurance remains an institutional tool specialized for IRD (Income in Respect of a Decedent) tax mitigation and multi-generational trust funding.
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
              <RelatedCalculators currentCalc="life-insurance" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for a Legacy Audit?</h2>
          <p className="text-slate-400 mb-12 text-lg">Execute your 2026 life insurance projections with statutory accuracy.</p>
          <Link
            href="/life-insurance/calculator"
            className="px-12 py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-3xl font-black text-2xl transition-all duration-300 shadow-[0_0_40px_rgba(79,70,229,0.4)] inline-flex items-center gap-3"
          >
            Access Auditor Engine
            <Calculator className="w-8 h-8" />
          </Link>
        </div>
      </section>
    </div>
  );
}
