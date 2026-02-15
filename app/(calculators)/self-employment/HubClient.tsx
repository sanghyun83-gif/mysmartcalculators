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
  LineChart
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is the total self-employment tax rate for 2026?",
      a: "For 2026, the combined self-employment tax rate is 15.3%. This consists of 12.4% for Social Security (up to the annual wage limit) and 2.9% for Medicare. Because you are both the employer and employee, you pay both halves of these taxes."
    },
    {
      q: "How does the '92.35% Rule' affect my taxable earnings?",
      a: "The IRS does not tax 100% of your net business profit. Instead, you multiply your net profit by 92.35% to determine your taxable self-employment income. This adjustment accounts for the fact that W-2 employees don't pay Social Security tax on the half of the tax paid by their employer."
    },
    {
      q: "Is any part of my self-employment tax tax-deductible?",
      a: "Yes. You can deduct 50% of your self-employment tax as an adjustment to income on Form 1040. This deduction only affects your income tax, not the self-employment tax itself, but it significantly reduces your overall federal tax bill."
    },
    {
      q: "What is the Social Security wage base for 2026?",
      a: "While the official 2026 limit will be confirmed by the SSA, it is projected to be approximately $174,900. You only pay the 12.4% Social Security portion of the SE tax on the first $174,900 of your net earnings; earnings above this limit are only subject to the 2.9% Medicare portion."
    },
    {
      q: "Do I have to pay self-employment tax if my profit is low?",
      a: "If your net earnings from self-employment are less than $400 for the year, you generally do not owe self-employment tax. However, you may still be required to file a tax return if you meet other filing requirements."
    },
    {
      q: "What happens if I also have a W-2 job?",
      a: "If you have a W-2 job, your employer already pays half of your FICA taxes on that income. Your self-employment income is added on top. If your combined W-2 wages and SE earnings exceed the Social Security wage base, you may be eligible for a refund or a reduction in the SE tax owed."
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
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-400">Independent Labor Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              SE Tax <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade 1099 liability forecasting. Solve for SE tax clusters, wage base caps, and net-earnings arbitrage with 2026 precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/self-employment/se-tax-calculator" className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run SE Tax Auditor
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Taxation Benchmarks</h2>
            <p className="text-slate-400">Official 2026 self-employment rates and wage base targets.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Rate Structure */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2026 Rates</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Component</th>
                      <th className="px-5 py-3 border-b border-white/5">Self Rate</th>
                      <th className="px-5 py-3 border-b border-white/5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Social Security</td>
                      <td className="px-5 py-3">12.4%</td>
                      <td className="px-5 py-3 text-emerald-400">Capped</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medicare</td>
                      <td className="px-5 py-3">2.9%</td>
                      <td className="px-5 py-3 text-blue-400">Unlimited</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Total SE Tax</td>
                      <td className="px-5 py-3">15.3%</td>
                      <td className="px-5 py-3 text-emerald-400">Combined</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400 italic">Net Threshold</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">$400</td>
                      <td className="px-5 py-3 bg-emerald-500/10 font-bold text-emerald-400">Floor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Payout Scalars */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-teal-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Limits</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Limit Type</th>
                      <th className="px-5 py-3 border-b border-white/5">2026 Figure</th>
                      <th className="px-5 py-3 border-b border-white/5">Trigger</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">SS Wage Base</td>
                      <td className="px-5 py-3 font-mono">~$174,900</td>
                      <td className="px-5 py-3 text-emerald-400">Cap</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Medicare (Add)</td>
                      <td className="px-5 py-3 font-mono">0.9%</td>
                      <td className="px-5 py-3 text-amber-400">$200k+</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Deductible %</td>
                      <td className="px-5 py-3 font-mono">50.0%</td>
                      <td className="px-5 py-3 text-blue-400">Offset</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Net Earner Multi</td>
                      <td className="px-5 py-3 font-mono">92.35%</td>
                      <td className="px-5 py-3 text-teal-400">Std</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Optimization Mapping */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <RefreshCw className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Strategic Pivot</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Objective</th>
                      <th className="px-5 py-3 border-b border-white/5">Primary Factor</th>
                      <th className="px-5 py-3 border-b border-white/5">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Lower SE Liab</td>
                      <td className="px-5 py-3">Business Exp.</td>
                      <td className="px-5 py-3 text-emerald-400">Net Red.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">FICA Defense</td>
                      <td className="px-5 py-3">S-Corp Election</td>
                      <td className="px-5 py-3 text-blue-400">Dividend</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Income Shield</td>
                      <td className="px-5 py-3">SEP IRA/Solo K</td>
                      <td className="px-5 py-3 text-amber-400">Efficiency</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Multi-Job Sync</td>
                      <td className="px-5 py-3">W-2/SE Agg.</td>
                      <td className="px-5 py-3 text-emerald-400">Refund</td>
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
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-6 underline underline-offset-8 decoration-emerald-500/30">2026 Self-Employment Architecture</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              Self-employment taxation represents the dual role of the entrepreneur as both capital-provider and labor-provider. In the 2026 labor market, the focus is on navigating **SE Tax Clusters**, **Wage Base Limit Friction**, and **Deduction Threshold Arbitrage**. Our S-Class engine analyzes the core liability vectors: **The IRS Schedule SE Framework**, **FICA Burden Aggregation**, and **Net Earnings Normalization**.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-emerald-500">
                  <PieChart className="w-16 h-16" />
                </div>
                <h4 className="text-emerald-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Expenditure Dynamics</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Net Profit Consolidation**: Solving for the 92.35% taxable earnings multiplier.</li>
                  <li>• **Wage Base Friction**: Tracking the Social Security cap for high-net-worth 1099 contractors.</li>
                  <li>• **Additional Medicare Trigger**: Auditing the 0.9% surcharge on high-income self-employment tiers.</li>
                  <li>• **Self-Employed Health Insurance**: Strategic deduction audits for premium offset on Form 1040.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-teal-500">
                  <LineChart className="w-16 h-16" />
                </div>
                <h4 className="text-teal-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **IRS Schedule SE Protocol**: Standardizing the calculation of self-employment tax.</li>
                  <li>• **The $400 Reporting Floor**: Managing the minimum income threshold for FICA liability.</li>
                  <li>• **W-2/SE Concurrent Audit**: Mapping the interaction between employer withholding and direct SE payments.</li>
                  <li>• **Qualified Business Income (QBI)**: Monitoring the 20% deduction limit expiration risks in 2026.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for the FICA Alpha</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Standard calculators often fail to account for the **S-Corp Tax Shield**. By electing to be taxed as an S-Corporation, a business owner can split their income between a 'Reasonable Salary' (subject to SE tax) and 'Shareholder Distributions' (exempt from SE tax). Our Self-Employment Audit Engine applies a **Shielded-Distribution-Ratio (SDR)** co-efficient, identifying the exact potential tax savings of corporate election vs. sole proprietorship in the 2026 market.
            </p>

            <div className="bg-emerald-500/5 border border-emerald-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-emerald-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-emerald-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The 50% Deduction</strong>
                  You are entitled to deduct half of your self-employment tax when calculating your Adjusted Gross Income (AGI). This deduction is taken 'above the line' on Schedule 1 of Form 1040, meaning you don't need to itemize to benefit from it. In 2026, this remains a critical lever for reducing overall income tax exposure.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">SE Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 self-employment tax and FICA protocols.</p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* 5. RELATED CALCULATORS LAYER */}
      <section className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Entrepreneurial Resource Cluster</h2>
              <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
            </div>
            <div className="w-full max-w-lg">
              <RelatedCalculators currentCalc="self-employment" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-emerald-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Own Your Earnings.<br /><span className="text-emerald-500">Secure Your SE Alpha.</span></h2>
          <Link href="/self-employment/se-tax-calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-emerald-500/20 active:scale-95 group">
            <Calculator className="w-6 h-6 group-hover:text-emerald-600 transition-colors" />
            RUN SE TAX AUDIT
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
