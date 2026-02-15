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
  Landmark
} from "lucide-react";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is a 'Defined Benefit' pension plan in 2026?",
      a: "A Defined Benefit (DB) plan is an employer-sponsored retirement plan where the benefit is calculated using a formula based on salary history and years of service. Unlike a 401(k), the investment risk is borne by the employer, and the payout is usually a guaranteed monthly annuity for life."
    },
    {
      q: "How does the 'Multiplier' affect my monthly pension amount?",
      a: "The multiplier is a percentage (typically 1.5% to 2.5%) set by the plan. Your monthly benefit is calculated as: (Years of Service) x (Multiplier) x (Final Average Salary). A 2% multiplier over 30 years would result in a pension equal to 60% of your career-high average pay."
    },
    {
      q: "Should I choose the 'Lump Sum' or the 'Monthly Annuity'?",
      a: "The choice depends on your longevity, investment skill, and estate goals. An annuity provides 'longevity insurance'—you can't outlive the money. Totaling a lump sum allows for immediate control and potential inheritance for heirs, but requires you to manage the market risk yourself."
    },
    {
      q: "What happens to my pension if my employer goes bankrupt?",
      a: "Most private-sector defined benefit plans are insured by the Pension Benefit Guaranty Corporation (PBGC), a federal agency. If a plan is terminated without enough assets, the PBGC pays benefits up to certain legal limits, providing a safety net for participants."
    },
    {
      q: "What are 'Survivor Benefit' options for spouses?",
      a: "When you start your pension, you can typically choose between a 'Single Life' annuity (highest payment, ends at death) or a 'Joint and Survivor' annuity (lower payment, but continues for a spouse after your death). Federal law usually requires a 50% survivor benefit unless the spouse waives it in writing."
    },
    {
      q: "How does 'Vesting' work in a modern pension plan?",
      a: "Vesting is the process by which you earn a non-forfeitable right to your pension. In 2026, most plans use either 'Cliff Vesting' (100% vested after 5 years) or 'Graded Vesting' (increasing percentages over 3-7 years). If you leave before vesting, you may lose the employer-funded portion of the benefit."
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
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* 1. S-CLASS HERO LAYER */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
              <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400">Institutional Wealth Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Pension <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-slate-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Institutional-grade defined benefit modeling. Audit your retirement annuity with actuarial multiplier mapping and 2026 COLA projections.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pension/calculator" className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-indigo-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Launch Pension Auditor
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Retirement Benchmarks</h2>
            <p className="text-slate-400">Official 2026 benefit multipliers and actuarial growth targets.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Benefit Multipliers */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Target className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Corporate Multipliers</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Tier Level</th>
                      <th className="px-5 py-3 border-b border-white/5">Rate</th>
                      <th className="px-5 py-3 border-b border-white/5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Public/Govt</td>
                      <td className="px-5 py-3">2.0% - 2.5%</td>
                      <td className="px-5 py-3 text-emerald-400">Elite</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Legacy Corporate</td>
                      <td className="px-5 py-3">1.5% - 2.0%</td>
                      <td className="px-5 py-3 text-blue-400">Standard</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Hybrid Plan</td>
                      <td className="px-5 py-3">1.0% + DB</td>
                      <td className="px-5 py-3 text-amber-400">Mod</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400 italic">Avg Replacement</td>
                      <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400">55% Pay</td>
                      <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400">Target</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Payout Scalars */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-slate-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Payout Factors</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Option Type</th>
                      <th className="px-5 py-3 border-b border-white/5">Reduction</th>
                      <th className="px-5 py-3 border-b border-white/5">Survivor</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Single Life</td>
                      <td className="px-5 py-3 font-mono">0%</td>
                      <td className="px-5 py-3 text-rose-400">None</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Joint (50%)</td>
                      <td className="px-5 py-3 font-mono">10-15%</td>
                      <td className="px-5 py-3 text-emerald-400">Partial</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Joint (100%)</td>
                      <td className="px-5 py-3 font-mono">20-25%</td>
                      <td className="px-5 py-3 text-blue-400">Full</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Lump Sum Val</td>
                      <td className="px-5 py-3 font-mono">PV calc</td>
                      <td className="px-5 py-3 text-amber-400">100% Cash</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Optimization Mapping */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Early Retirement</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Age Relative</th>
                      <th className="px-5 py-3 border-b border-white/5">Penalty</th>
                      <th className="px-5 py-3 border-b border-white/5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Full (62-65)</td>
                      <td className="px-5 py-3">0%</td>
                      <td className="px-5 py-3 text-emerald-400">Standard</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Early (55)</td>
                      <td className="px-5 py-3">30% - 50%</td>
                      <td className="px-5 py-3 text-rose-400">Heavy</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Rule of 80/90</td>
                      <td className="px-5 py-3">Reduced</td>
                      <td className="px-5 py-3 text-blue-400">Institutional</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Delay Credit</td>
                      <td className="px-5 py-3">Rarely Off.</td>
                      <td className="px-5 py-3 text-slate-500">N/A</td>
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
          <div className="prose prose-invert prose-indigo max-w-none">
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-6 underline underline-offset-8 decoration-indigo-500/30">2026 Pension Compliance Architecture</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              A Defined Benefit (DB) pension represents the most stable tier of institutional retirement architecture. In the 2026 financial environment, the core focus has shifted to **Actuarial Multiplier Integrity**, **Lump Sum Commuted Values**, and **Early Retirement Penalty Mapping**. Our S-Class engine analyzes the core benefit vectors: **Final Average Salary (FAS) Peaks**, **Service Credit Velocity**, and **Survivor Annuity Friction**.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                  <PieChart className="w-16 h-16" />
                </div>
                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Payout Dynamics</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **FAS Optimization**: Strategies for maximizing late-career salary peaks.</li>
                  <li>• **Multiplier Scaling**: Impact of high-tier multiplier clauses.</li>
                  <li>• **COLA Protections**: Integrating 2026 inflation-adjustment buffers.</li>
                  <li>• **Commuted Value**: Solving for interest-rate sensitive lump sums.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-slate-500">
                  <LineChart className="w-16 h-16" />
                </div>
                <h4 className="text-slate-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Regulatory Friction</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **PBGC Insurance Caps**: Monitoring federal safety net thresholds.</li>
                  <li>• **Vesting Cliffs**: Solving for non-forfeitable bridge points.</li>
                  <li>• **Anti-Cutback Rules**: Protecting accrued benefits from plan changes.</li>
                  <li>• **Spousal Consent**: Managing legal requirements for survivor waivers.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">The Actuarial Model: Solving for Longevity Alpha</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Standard calculators often fail to account for the **Interest Rate Sensitivity** of pension lump sums. When market rates rise, the 'Commuted Value' of your pension typically drops, making the monthly annuity mathematically superior. Our Audit Engine applies a **Commuted Value Multiplier**, identifying the 'Break-Even Age' for the 2026/2056 cycle to ensure your retirement choice maximizes net estate value.
            </p>

            <div className="bg-indigo-500/5 border border-indigo-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-indigo-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-indigo-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The Rule of 80/90</strong>
                  Many institutional plans (especially in public sectors) utilize a 'point system.' If your age plus years of service equals a target (e.g., 85), you may qualify for full retirement benefits regardless of standard age requirements, providing a massive acceleration path for early-career hires.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Retirement Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 pension and institutional protocols.</p>
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
              <RelatedCalculators currentCalc="pension" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-indigo-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Audit Your Annuity.<br /><span className="text-indigo-500">Secure Your Pension Alpha.</span></h2>
          <Link href="/pension/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-indigo-500/20 active:scale-95 group">
            <Calculator className="w-6 h-6 group-hover:text-indigo-600 transition-colors" />
            RUN PENSION AUDIT
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
