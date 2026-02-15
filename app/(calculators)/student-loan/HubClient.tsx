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
  GraduationCap,
  BookOpen
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What are the 2025-2026 Federal Student Loan interest rates?",
      a: "For the 2025-2026 academic year, federal student loan rates are projected based on the May 10-year Treasury note auction. Undergraduate Direct Loans are expected to be around 6.53%, Graduate Direct Unsubsidized at 8.08%, and PLUS Loans at 9.08%."
    },
    {
      q: "How does the 'SAVE' Plan (Income-Driven Repayment) work in 2026?",
      a: "The SAVE plan is a high-efficiency IDR plan that limits payments to 5%-10% of discretionary income. Crucially, if you make your full monthly payment, any remaining unpaid interest for that month is waived by the government, preventing your balance from growing."
    },
    {
      q: "What is Public Service Loan Forgiveness (PSLF)?",
      a: "PSLF forgives the remaining balance on your Direct Loans after you have made 120 qualifying monthly payments under a qualifying repayment plan while working full-time for a qualifying employer (government or non-profit)."
    },
    {
      q: "Should I refinance my federal loans into private loans?",
      a: "Refinancing federal loans into private loans usually results in a lower interest rate but at a high cost: you lose all federal protections, including income-driven repayment plans, loan forgiveness programs, and generous deferment/forbearance options."
    },
    {
      q: "How does 'Capitalized Interest' impact my total balance?",
      a: "Interest capitalization occurs when unpaid interest is added to your principal balance—usually after a period of deferment or when changing repayment plans. Once capitalized, you begin paying interest on that new, higher principal, creating a compounding debt cycle."
    },
    {
      q: "What is the difference between Subsidized and Unsubsidized loans?",
      a: "Subsidized loans (undergraduate only) do not accrue interest while you are in school at least half-time or during grace periods. Unsubsidized loans begin accruing interest from the moment the funds are disbursed."
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
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      {/* 1. S-CLASS HERO LAYER */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Education Capital Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Student Loan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade education debt modeling. Solve for IDR efficiency, forgiveness trajectories, and repayment optimization with 2026 precision.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/student-loan/calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run Debt Auditor
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Repayment Benchmarks</h2>
            <p className="text-slate-400">Official 2025-2026 federal rates and institutional forgiveness targets.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Rate Logic */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Target className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: 2025-26 Rates</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Loan Tier</th>
                      <th className="px-5 py-3 border-b border-white/5">Rate</th>
                      <th className="px-5 py-3 border-b border-white/5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Undergrad Direct</td>
                      <td className="px-5 py-3">6.53%</td>
                      <td className="px-5 py-3 text-emerald-400">Effective</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Grad Unsub</td>
                      <td className="px-5 py-3">8.08%</td>
                      <td className="px-5 py-3 text-blue-400">Effective</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">PLUS (Grad/Parent)</td>
                      <td className="px-5 py-3">9.08%</td>
                      <td className="px-5 py-3 text-amber-400">Effective</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">Private Refi</td>
                      <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">4.5% - 10%</td>
                      <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">Variable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: IDR Scalars */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Repayment Modes</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Plan Type</th>
                      <th className="px-5 py-3 border-b border-white/5">% Discretionary</th>
                      <th className="px-5 py-3 border-b border-white/5">Term</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">SAVE (Undergrad)</td>
                      <td className="px-5 py-3 font-mono">5%</td>
                      <td className="px-5 py-3 text-emerald-400">20 Yrs</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">SAVE (Graduate)</td>
                      <td className="px-5 py-3 font-mono">10%</td>
                      <td className="px-5 py-3 text-blue-400">25 Yrs</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Extended Fixed</td>
                      <td className="px-5 py-3 font-mono">N/A</td>
                      <td className="px-5 py-3 text-amber-400">25 Yrs</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">PSLF Nexus</td>
                      <td className="px-5 py-3 font-mono">Varies</td>
                      <td className="px-5 py-3 text-emerald-400">10 Yrs</td>
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
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Forgiveness</td>
                      <td className="px-5 py-3">Govt/NP Emp</td>
                      <td className="px-5 py-3 text-emerald-400">PSLF 10yr</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Low Payment</td>
                      <td className="px-5 py-3">Income %</td>
                      <td className="px-5 py-3 text-blue-400">SAVE Flow</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Interest Save</td>
                      <td className="px-5 py-3">Rate Diff</td>
                      <td className="px-5 py-3 text-amber-400">Private Refi</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Total Cost</td>
                      <td className="px-5 py-3">Accelerated</td>
                      <td className="px-5 py-3 text-emerald-400">Standard 10</td>
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
          <div className="prose prose-invert prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Education Debt Architecture</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              Federal and private student loans represent a complex intersection of academic investment and multi-decade financial liability. In the 2026 economic environment, the focus has shifted toward **Income-Driven Efficiency**, **Interest Subsidy Management**, and **Forgiveness Compliance**. Our S-Class engine analyzes the core debt vectors: **SAVE Plan Elasticity**, **PSLF Qualification Velocity**, and **Refinancing Break-Even Points**.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                  <PieChart className="w-16 h-16" />
                </div>
                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Repayment Dynamics</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **SAVE Plan Logic**: 225% poverty guideline exclusion multiplier.</li>
                  <li>• **Interest Suppression**: Avoiding the balance-growth spiral.</li>
                  <li>• **Acceleration Strategies**: Mapping the ROI of extra principal.</li>
                  <li>• **Refi Thresholds**: Solving for the fed-to-private margin.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                  <LineChart className="w-16 h-16" />
                </div>
                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **PSLF Certifications**: Monitoring qualifying employment nexus.</li>
                  <li>• **IDR Recertification**: Managing annual income reporting spikes.</li>
                  <li>• **PLUS Loan Aggregation**: Solving for parent-contributed debt.</li>
                  <li>• **Taxability Foreclosure**: Impact of forgiven amounts in 2026+.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Managing the Interest Subsidy</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Standard calculators often fail to account for the **Interest Subsidy Gap** inherent in new 2026 IDR structures. Under the SAVE plan, if your income yields a $0 payment, as much as $500/month in interest may be suppressed by the government. Our Debt Audit Engine applies a **Subsidy Multiplier**, identifying the exact 'Net Cost of Capital' over the 20-25 year repayment horizon compared to private-market refinancing.
            </p>

            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-blue-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Strategic Note: The Refinancing Trap</strong>
                  Be cautious before 'locking in' a lower rate with a private lender. In the 2026 regulatory cycle, the value of federal 'Optionality' (protection from job loss, disability discharge, and broad forgiveness) often outweighs a 2% interest rate reduction produced by private refinancing audits.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Debt Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 student loan and education protocols.</p>
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
              <RelatedCalculators currentCalc="student-loan" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Optimize Your Debt.<br /><span className="text-blue-500">Secure Your Education Alpha.</span></h2>
          <Link href="/student-loan/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
            <Calculator className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
            RUN DEBT AUDIT
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
