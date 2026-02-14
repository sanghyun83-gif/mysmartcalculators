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
  Receipt,
  ListChecks,
  History
} from "lucide-react";
import { SITE, CALCULATORS, CLOSING_COST_2026, formatCurrency } from "@/lib/calculators/closing-cost";
import { RelatedCalculators } from "@/components/RelatedCalculators";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      q: "Who typically pays for the closing costs: Buyer or Seller?",
      a: "Both parties incur costs. Buyers typically pay between 2% and 5% of the purchase price, covering loan origination, appraisals, and title insurance. Sellers typically pay between 6% and 10%, which includes real estate commissions and transfer taxes. However, in a 2026 'Buyer's Market', you can negotiate 'Seller Concessions' where the seller pays a portion of the buyer's fees."
    },
    {
      q: "What is an 'Escrow Holdback' and when is it used?",
      a: "An Escrow Holdback occurs when a portion of the closing funds is withheld by the title company until specific conditions (like a repair or a final inspection) are met after the closing date. This is common in 2026 new construction or when a seller needs a few extra days to vacate the property."
    },
    {
      q: "Are closing costs tax-deductible in 2026?",
      a: "Generally, most closing costs are not immediately deductible; they are added to your home's 'Cost Basis', which reduces taxable capital gains when you sell. However, 'Points' (prepaid interest) and certain pro-rated property taxes paid at closing may be deductible in the year of purchase. Always consult a tax professional."
    },
    {
      q: "Does the 2026 Loan Estimate (LE) have to match the Closing Disclosure (CD)?",
      a: "By law (TRID regulations), most fees cannot increase by more than 10% from the initial Loan Estimate, and some (like lender fees) have a 'Zero Tolerance' policy, meaning they cannot change at all. If the CD shows significantly higher costs, you have the right to a detailed explanation and potential credits from the lender."
    },
    {
      q: "What is the 'Cash to Close' vs. 'Closing Costs'?",
      a: "Closing Costs are the specific fees for services (appraisal, title, etc.). 'Cash to Close' is the total liquidity you need at the table, which equals [Down Payment] + [Closing Costs] - [Earnest Money Deposit] - [Credits]. Our engine calculates both to ensure you aren't surprised by the final wire transfer amount."
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
              <Receipt className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-indigo-400">Transaction Settlement Protocol 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Closing Cost <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 italic">Audit Matrix</span>
            </h1>

            <p className="max-w-2xl text-slate-400 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Professional-grade transaction settlement forecasting. Avoid 'Sticker Shock' at the deal table with precise 2026 fee estimation.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/closing-cost/calculator" className="flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-[1.02] shadow-xl shadow-indigo-500/20 active:scale-95">
                <Calculator className="w-5 h-5 shrink-0" />
                Run Settlement Engine
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 italic">Settlement Benchmarks</h2>
            <p className="text-slate-400">Institutional transaction fee standards for the 2026 market.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Table I: Standard Fee Structure */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Scale className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table I: Fixed Service Fees</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Service Item</th>
                      <th className="px-5 py-3 border-b border-white/5">Est. Cost (2026)</th>
                      <th className="px-5 py-3 border-b border-white/5">Variance</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Appraisal Fee</td>
                      <td className="px-5 py-3">$550 - $850</td>
                      <td className="px-5 py-3 text-rose-400">Stable</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Home Inspection</td>
                      <td className="px-5 py-3">$400 - $650</td>
                      <td className="px-5 py-3 text-emerald-400">-5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Bank Processing</td>
                      <td className="px-5 py-3">$995 - $1,495</td>
                      <td className="px-5 py-3 text-amber-400">+2%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400 italic">Total Service Base</td>
                      <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400">~$3,500</td>
                      <td className="px-5 py-3 bg-indigo-500/10 font-bold text-indigo-400">Standard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table II: Variable Percentages */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Activity className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table II: Asset Scalars</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Percentage Fee</th>
                      <th className="px-5 py-3 border-b border-white/5">Standard Ratat</th>
                      <th className="px-5 py-3 border-b border-white/5">Exposure</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Title Insurance</td>
                      <td className="px-5 py-3 font-mono">0.50% - 0.75%</td>
                      <td className="px-5 py-3 text-emerald-400">Low-Risk</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Transfer Tax</td>
                      <td className="px-5 py-3 font-mono">0.01% - 3.00%</td>
                      <td className="px-5 py-3 text-rose-400">State-Dep.</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">Origination Pts</td>
                      <td className="px-5 py-3 font-mono">0.00% - 1.00%</td>
                      <td className="px-5 py-3 text-blue-400">Optional</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300 italic">Avg Total %</td>
                      <td className="px-5 py-3 font-mono">2.5% - 4.0%</td>
                      <td className="px-5 py-3 text-indigo-400">Typical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table III: Cash to Close Guardrails */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2 px-2">
                <Lock className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Table III: Liquidity Required</h3>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/5 text-slate-300 font-semibold uppercase text-[10px] tracking-widest">
                    <tr>
                      <th className="px-5 py-3 border-b border-white/5">Home Price</th>
                      <th className="px-5 py-3 border-b border-white/5">Est. Closing</th>
                      <th className="px-5 py-3 border-b border-white/5">Reserve Buffer</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-400 divide-y divide-white/5 font-mono">
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$350,000</td>
                      <td className="px-5 py-3">$10,500</td>
                      <td className="px-5 py-3 text-emerald-400">$3,000</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$550,000</td>
                      <td className="px-5 py-3">$16,500</td>
                      <td className="px-5 py-3 text-emerald-400">$5,000</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$850,000</td>
                      <td className="px-5 py-3 text-rose-400">$25,500</td>
                      <td className="px-5 py-3 text-rose-400">$10,000</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 bg-white/[0.02] font-medium text-slate-300">$1,500,000</td>
                      <td className="px-5 py-3 text-rose-400">$45,000+</td>
                      <td className="px-5 py-3 text-rose-400">$25,000</td>
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
            <h2 className="text-3xl font-bold text-white mb-8 border-l-4 border-indigo-500 pl-6 underline underline-offset-8 decoration-indigo-500/30">2026 Transaction Settlement Framework</h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 font-sans text-left">
              Closing costs represent the structural friction of converting liquid capital into real estate assets. In the 2026 market, these fees are governed by **TRID (TILA-RESPA Integrated Disclosure)** protocols, ensuring that your initial Loan Estimate remains consistent with your final Closing Disclosure. Our S-Class engine analyzes the three core friction points: **Lender Origination**, **Statutory Taxes**, and **Third-Party Service Settlement**.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-10 font-sans">
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-indigo-500">
                  <ListChecks className="w-16 h-16" />
                </div>
                <h4 className="text-indigo-400 font-bold mb-3 uppercase tracking-tighter text-xs">I. Statutory & Compliance Fees</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Transfer Taxes**: Municipal revenue collections.</li>
                  <li>• **Recording Fees**: County deed registration costs.</li>
                  <li>• **Prepaid Interest**: Pro-rated till the first payment.</li>
                  <li>• **Escrow Reserves**: Pro-rated taxes & insurance buffers.</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform text-purple-500">
                  <History className="w-16 h-16" />
                </div>
                <h4 className="text-purple-400 font-bold mb-3 uppercase tracking-tighter text-xs">II. Settlement Friction Scalars</h4>
                <ul className="text-sm space-y-2 mb-0 text-slate-400 list-none pl-0 text-left">
                  <li>• **Title Search**: Verifying lien-free asset transfer.</li>
                  <li>• **Courier/E-File**: Secure document transmission.</li>
                  <li>• **Notary Protocol**: Institutional identity verification.</li>
                  <li>• **Survey Fees**: Boundary verification for the lender.</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 text-left">Execution Logic: The S-Class Engine</h3>
            <p className="text-slate-400 leading-relaxed mb-6 font-sans text-left">
              Unlike generic calculators, our 2026 Settlement Engine utilizes **Regional Compliance Tables**. It doesn't just apply a flat 3%; it identifies whether you are in a 'Buyer Pay' or 'Seller Pay' customary state for title insurance and adjusts statutory tax rates based on county-level metadata. This produces a granular 'Cash to Close' requirement that matches professional Closing Disclosures (CD).
            </p>

            <div className="bg-indigo-500/5 border border-indigo-500/20 p-6 rounded-2xl my-10 font-sans text-left">
              <div className="flex items-start gap-4 text-indigo-300">
                <Info className="w-6 h-6 shrink-0 mt-1" />
                <div className="text-sm leading-relaxed">
                  <strong className="text-indigo-200 block mb-1 uppercase tracking-widest text-[10px]">Technical Note: The 10% Variation Rule</strong>
                  Under 2026 CFPB rules, certain fees (like Title Insurance from a provider you *cannot* shop for) have a 0% tolerance. Fees you *can* shop for have a 10% aggregate tolerance. If your final costs exceed these buffers, your lender is legally required to issue a 'Cure' or credit to match the limit.
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 italic tracking-wide font-sans">Settlement Intelligence</h2>
            <p className="text-slate-500 font-medium tracking-tight">Expert guidance for navigating 2026 home closing protocols.</p>
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
              <RelatedCalculators currentCalc="closing-cost" count={6} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-24 bg-gradient-to-t from-indigo-900/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none">Avoid Surprises.<br /><span className="text-indigo-500">Close With Confidence.</span></h2>
          <Link href="/closing-cost/calculator" className="inline-flex items-center gap-3 bg-white text-slate-950 hover:bg-slate-200 px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-indigo-500/20 active:scale-95 group">
            <DollarSign className="w-6 h-6 group-hover:text-indigo-600 transition-colors" />
            RUN SETTLEMENT ENGINE
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-8 text-slate-500 text-xs font-bold tracking-[0.4em] uppercase">Verified Institutional Framework • 2026 Edition</p>
        </div>
      </section>
    </div>
  );
}
