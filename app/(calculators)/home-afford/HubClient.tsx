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
  Percent,
  PieChart,
  BarChart3
} from "lucide-react";
import { SITE, CALCULATORS, HOUSING_CONSTANTS, formatCurrency } from "@/lib/calculators/home-afford";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the '28/36 Rule' and is it still valid for 2026 home buying?",
      a: "The 28/36 rule remains a primary benchmark. It suggests that your housing costs (PITI) shouldn't exceed 28% of your gross monthly income, and your total debt payments (including housing) shouldn't exceed 36%. However, for 2026, many conventional lenders allow up to 45% back-end DTI, while FHA may permit up to 50% with higher credit scores."
    },
    {
      q: "How do 2026 conforming loan limits affect my purchasing power?",
      a: "The FHFA has set the 2026 baseline limit at $806,500. Staying below this threshold allows you to access conventional financing with lower rates. Exceeding this limit triggers 'Jumbo' loan requirements, which often demand higher down payments (20%+), higher reserves (12+ months), and more stringent credit criteria."
    },
    {
      q: "How much should I realistically set aside for maintenance on a house in 2026?",
      a: "Standard advice is the '1% Rule' (save 1% of the purchase price annually). For a $500,000 home, expect $5,000/year. In the current 2026 economy, specialized systems like HVAC or solar arrays can see significant repair cost inflation, so a 1.5% buffer is recommended for institutional-grade stability."
    },
    {
      q: "Does a 20% down payment actually eliminate PMI completely?",
      a: "Yes. Once you provide 20% equity at closing, Private Mortgage Insurance (PMI) is waived for conventional loans. For FHA loans, however, Mortgage Insurance Premium (MIP) usually persists for the life of the loan if your initial down payment was less than 10%, regardless of later equity gains."
    },
    {
      q: "What 'Hidden Costs' should I calculate beyond the mortgage payment?",
      a: "Total cost of ownership includes Property Taxes (approx 1.1% national avg), Homeowners Insurance, HOA dues, and 'Opportunity Cost' of your down payment. Our 2026 engine factors in a 3% closing cost scalar to ensure you have sufficient liquidity at the deal table."
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
  const { conformingLoanLimits, mortgageRates } = HOUSING_CONSTANTS;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30">
      {/* 1. S-CLASS HERO LAYER */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
              <Home className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Housing Liquidity Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Home Affordability <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade purchasing power forecasting. Benchmark your 2026 house hunt against FHFA conforming limits and real-time yield curves.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/home-afford/calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run Affordability Engine
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Authority Market Benchmarks</h2>
            <p className="text-slate-400">Official 2026 mortgage rates and conforming liquidity caps.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Yield Trajectory */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Interest Vectors</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Loan Product</th>
                      <th className="px-5 py-3 border-b border-white/5">Rate (APR)</th>
                      <th className="px-5 py-3 border-b border-white/5">Trend</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">30-Year Fixed</td>
                      <td className="px-5 py-3">{mortgageRates.thirtyYear}%</td>
                      <td className="px-5 py-3 text-rose-400">Stable</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">15-Year Fixed</td>
                      <td className="px-5 py-3">{mortgageRates.fifteenYear}%</td>
                      <td className="px-5 py-3 text-emerald-400">-0.2%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">FHA 30-Year</td>
                      <td className="px-5 py-3">{mortgageRates.fha}%</td>
                      <td className="px-5 py-3 text-amber-400">+0.1%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">VA Zero-Down</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">{mortgageRates.va}%</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Premium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Liquidity Caps */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Lock className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: FHFA Limits</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">County Class</th>
                      <th className="px-5 py-3 border-b border-white/5">Limit (USD)</th>
                      <th className="px-5 py-3 border-b border-white/5">Tier Grade</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Baseline US</td>
                      <td className="px-5 py-3 font-mono">{formatCurrency(conformingLoanLimits.standard)}</td>
                      <td className="px-5 py-3 text-emerald-400">Conforming</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">High-Cost Area</td>
                      <td className="px-5 py-3 font-mono">{formatCurrency(conformingLoanLimits.highCost)}</td>
                      <td className="px-5 py-3 text-blue-400">High-Balance</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Super-High (AK/HI)</td>
                      <td className="px-5 py-3 font-mono">{formatCurrency(conformingLoanLimits.superHighCost)}</td>
                      <td className="px-5 py-3 text-indigo-400">Alaska/Hawaii</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Jumbo Triggers</td>
                      <td className="px-5 py-3 font-mono">$1.2M+</td>
                      <td className="px-5 py-3 text-rose-400">Non-Agency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Ratio Guardrails */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Scale className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: DTI Guardrails</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Program</th>
                      <th className="px-5 py-3 border-b border-white/5">Front-End</th>
                      <th className="px-5 py-3 border-b border-white/5">Back-End</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Conventional</td>
                      <td className="px-5 py-3">28%</td>
                      <td className="px-5 py-3 text-emerald-400">36-43%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">FHA 203(b)</td>
                      <td className="px-5 py-3 text-amber-400">31%</td>
                      <td className="px-5 py-3 text-amber-400">43-50%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">VA Military</td>
                      <td className="px-5 py-3">-</td>
                      <td className="px-5 py-3 text-blue-400">41%+</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">High-DTI Exception</td>
                      <td className="px-5 py-3 text-rose-400">35%+</td>
                      <td className="px-5 py-3 text-rose-400">55% Max</td>
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
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Home Affordability Framework</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              In the 2026 residential real estate market, **Affordability** is defined by three interconnected scalars: **Income Velocity**, **Debt Sustainability**, and **Equity Liquidity**. Our S-Class engine moves beyond simple 'Salary vs. Payment' logic by integrating FHFA Conforming Loan Limits and dynamic DTI (Debt-to-Income) buffers to provide a bank-verifiable purchasing range.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                  <PieChart className="w-16 h-16" />
                </div>
                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. The 28/36 Rule Protocol</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Primary Housing (28%)**: PI + Taxes + Insurance + HOA.</li>
                  <li>• **Total Obligation (36%)**: Housing + Car + Scholar + Credit.</li>
                  <li>• **Net Liquidity**: Remaining cash flow post-mortgage.</li>
                  <li>• **Reserve Factor**: Cash for 6-months of payments.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                  <BarChart3 className="w-16 h-16" />
                </div>
                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Market Access Scalars</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Conforming Baseline**: Loans under $806,500.</li>
                  <li>• **Jumbo Threshold**: Non-agency liquidity constraints.</li>
                  <li>• **LTV (Loan-to-Value)**: Equity buffer vs. PMI exposure.</li>
                  <li>• **Yield Curve**: Impact of 10-year Treasury on fixed rates.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">Execution Logic: The S-Class Engine</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Our 2026 Engine utilizes an **Iterative Convergence Model**. We don't just multiply your income by a factor; we calculate the PITI (Principal, Interest, Taxes, Insurance) for every price point, checking against conforming loan limits and specific PMI tiers. This ensures your 'affordability' isn't just a guess, but a technically accurate forecast of what a lender's automated underwriting system (AUS) will likely approve.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-emerald-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Front-End vs Back-End DTI</strong>
                  Lenders look at two ratios. The **Front-End (Housing Ratio)** is purely your home costs vs. income. The **Back-End (Total Debt Ratio)** includes all other monthly bills. If your car payment is $800/month, your 'buying power' drops significantly even if your income is high. Always solve for the lower of the two limits.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Home Buying Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 housing inventory.</p>
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
              <RelatedCalculators currentCalc="home-afford" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Find Your Limit.<br /><span className="text-emerald-500">Claim Your Home.</span></h2>
          <Link href="/home-afford/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
            <DollarSign className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
            RUN AUDIT ENGINE
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
