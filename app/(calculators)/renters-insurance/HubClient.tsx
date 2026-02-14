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
  Package
} from "lucide-react";
import { SITE, CALCULATORS, RENTERS_2026, formatCurrency } from "@/lib/calculators/renters-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "How much renters insurance do I realistically need in 2026?",
      a: "A standard 2026 recommendation is $30,000 for personal property and $300,000 for liability. However, you should conduct a 'digital inventory' of your electronics and high-value items. If you own luxury goods or professional equipment, you may need a 'Scheduled Personal Property' rider for full replacement value."
    },
    {
      q: "Does renters insurance cover my roommate's belongings?",
      a: "No. Renters insurance policies are individual. Unless your roommate is specifically named on the policy (which is rare and often discouraged by carriers), they must carry their own separate insurance to protect their assets."
    },
    {
      q: "What is 'Loss of Use' coverage and why is it critical?",
      a: "Loss of Use (Additional Living Expenses) covers your hotel, restaurant, and relocation costs if your rental becomes uninhabitable due to a covered peril like fire or major water damage. In the 2026 high-rent market, this is essential for temporary housing stability."
    },
    {
      q: "Does my policy cover theft if it happens outside my apartment?",
      a: "Yes. Most standard renters insurance policies provide 'Off-Premises' coverage. If your laptop is stolen from your car or a coffee shop, it is typically covered, though often subject to a lower limit (usually 10% of your total property coverage)."
    },
    {
      q: "How does the deductible affect my monthly premium?",
      a: "The deductible is the amount you pay out-of-pocket before insurance kicks in. Increasing your deductible from $250 to $1,000 can reduce your annual premium by 10-15%. However, you must ensure you have that cash reserved in case of a claim."
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
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-400">Tenant Asset Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Renters Insurance <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Precision residential liability and personal property forecasting for 2026. Benchmark your rental coverage against NAIC regional loss-cost data.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/renters-insurance/renters-calculator" className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-blue-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run Coverage Model
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
            <p className="text-slate-400">Official 2026 tenant insurance pricing and loss-exposure scalars.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Premium Trajectory */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Market Velocity</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Fiscal Cycle</th>
                      <th className="px-5 py-3 border-b border-white/5">Avg Premium</th>
                      <th className="px-5 py-3 border-b border-white/5">Risk Shift</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2023 FY</td>
                      <td className="px-5 py-3">$148/yr</td>
                      <td className="px-5 py-3 text-emerald-400">+1.2%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2024 FY</td>
                      <td className="px-5 py-3">$155/yr</td>
                      <td className="px-5 py-3 text-emerald-400">+4.7%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">2025 FY</td>
                      <td className="px-5 py-3">$164/yr</td>
                      <td className="px-5 py-3 text-amber-400">+5.8%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400 italic">2026 Target</td>
                      <td className="px-5 py-3 bg-blue-500/10 font-bold text-blue-400">$173+</td>
                      <td className="px-5 py-3 bg-blue-500/10 font-bold text-rose-400">+5.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Coverage Tiers */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Package className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Coverage Tiers</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Tier Grade</th>
                      <th className="px-5 py-3 border-b border-white/5">Property Limit</th>
                      <th className="px-5 py-3 border-b border-white/5">Liab Base</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Economy</td>
                      <td className="px-5 py-3 text-emerald-400">$15k Limit</td>
                      <td className="px-5 py-3 font-mono">$100k</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Standard</td>
                      <td className="px-5 py-3 text-blue-400">$30k Limit</td>
                      <td className="px-5 py-3 font-mono">$300k</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Premium</td>
                      <td className="px-5 py-3 text-amber-400">$50k+ Limit</td>
                      <td className="px-5 py-3 font-mono">$500k</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Institutional</td>
                      <td className="px-5 py-3 text-rose-400">$100k+ Max</td>
                      <td className="px-5 py-3 font-mono">$1M+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Logic Parameters */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Scale className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Logic Parameters</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Logic Filter</th>
                      <th className="px-5 py-3 border-b border-white/5">Premium Impact</th>
                      <th className="px-5 py-3 border-b border-white/5">Variance</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Deductible ($1k)</td>
                      <td className="px-5 py-3">Exposure Credit</td>
                      <td className="px-5 py-3 text-emerald-400">-10.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Bundle Discount</td>
                      <td className="px-5 py-3">Auto/Home Link</td>
                      <td className="px-5 py-3 text-emerald-400">-15.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Credit Rating</td>
                      <td className="px-5 py-3">Selection Grade</td>
                      <td className="px-5 py-3 text-blue-400">0.85x Factor</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Claims Incident</td>
                      <td className="px-5 py-3">Surcharge Load</td>
                      <td className="px-5 py-3 text-rose-400">+20.0% min</td>
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
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-blue-500 pl-6 underline underline-offset-8 decoration-blue-500/30">2026 Statutory Framework for Renters Insurance</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              In the 2026 residential rental market, **Renters Insurance** (HO-4 policy) is no longer a luxury but a fundamental requirement for lease execution. While landlord insurance protects the physical structure, it offers zero protection for your personal property or personal liability. The 2026 framework focuses on **Replacement Cost Value (RCV)** vs. **Actual Cash Value (ACV)**, with a high weighting on 'Additional Living Expenses' due to record-high temporary housing costs.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-blue-500">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h4 className="text-blue-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Core Coverage Pillars</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Personal Property**: Furniture, electronics, wearables.</li>
                  <li>• **Personal Liability**: Defense against third-party injury suits.</li>
                  <li>• **Loss of Use**: Housing costs if displacement occurs.</li>
                  <li>• **Med-Pay**: Small-scale medical costs for guests.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                  <AlertCircle className="w-16 h-16" />
                </div>
                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Actuarial Rating Factors</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Fire Protection Grade**: Proximity to hydrants/stations.</li>
                  <li>• **Credit-Based Insurance Score**: Predictor of loss frequency.</li>
                  <li>• **Climatological Risk**: Regional wildfire or storm exposure.</li>
                  <li>• **Deductible Selection**: Primary out-of-pocket scalar.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">Evaluation Logic: The S-Class Engine</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Our 2026 Engine utilizes the **Regional Loss-Cost Model**. We analyze your 'Property Value' (e.g., $15k vs. $50k), apply the 'Liability Scalar' based on your risk tolerance, and integrate 'Logic Overlays' like credit grading and bundling. This creates a high-fidelity premium forecast used by institutional property management firms to verify tenant compliance.
            </p>

            <div className="bg-blue-500/5 border border-blue-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-blue-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-blue-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: Replacement Cost Value (RCV)</strong>
                  Always ensure your 2026 policy is set to **Replacement Cost Value**. Cheap policies often default to 'Actual Cash Value', which subtracts depreciation. This means if a 5-year-old $1,500 laptop is stolen, ACV might only pay you $300, whereas RCV pays the full price for a brand-new equivalent model.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Tenant Intelligence Hub</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for renter risk management in 2026.</p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* 5. RELATED CALCULATORS LAYER */}
      <section className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Institutional Risk Cluster</h2>
              <p className="text-slate-500 text-sm italic italic tracking-[0.3em] uppercase font-light">Internal Resource Mapping</p>
            </div>
            <div className="w-full max-w-lg">
              <RelatedCalculators currentCalc="renters-insurance" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Protect Your Assets.<br /><span className="text-blue-500">Secure Your Home.</span></h2>
          <Link href="/renters-insurance/renters-calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-500/20 active:scale-95 group">
            <Home className="w-6 h-6 group-hover:text-blue-600 transition-colors" />
            RUN AUDIT ENGINE
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
