"use client";

import { useState } from "react";
import { HandCoins, ShieldCheck } from "lucide-react";
import { TIP_2026, calculateTip, formatCurrency } from "@/lib/calculators/tip";

type FAQItem = Readonly<{ question: string; answer: string }>;

function FAQSection({ faqs }: { faqs: readonly FAQItem[] }) {
  return (
    <div className="max-w-4xl mx-auto px-4 space-y-2">
      {faqs.map((faq, index) => (
        <details key={index} className="group bg-white border border-slate-200 rounded-md hover:border-slate-300">
          <summary className="list-none p-3 flex items-center justify-between cursor-pointer [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-slate-800">{faq.question}</h3>
            <span className="text-slate-400 group-open:rotate-180 transition-transform">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </summary>
          <div className="p-3 pt-1 border-t border-slate-100 text-sm leading-relaxed text-slate-600">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}

function cleanNumber(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

export default function TipClient() {
  const [billAmount, setBillAmount] = useState("85.00");
  const [tipPercent, setTipPercent] = useState("20");
  const [splitCount, setSplitCount] = useState("2");
  const [showResults, setShowResults] = useState(false);

  const faqs = (TIP_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedBill = Number(billAmount) || 0;
  const parsedTip = Number(tipPercent) || 0;
  const parsedSplit = Math.max(1, Number(splitCount) || 1);

  const result = (() => {
    if (!showResults || parsedBill <= 0 || parsedTip < 0 || parsedSplit <= 0) return null;
    return calculateTip(parsedBill, parsedTip, parsedSplit);
  })();

  const tipRateState = parsedTip >= 20 ? "text-emerald-800" : parsedTip >= 15 ? "text-amber-800" : "text-rose-800";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <HandCoins className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Tip Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by U.S. DOL Tipped Wage Rules + Emily Post Etiquette Guidance
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Bill Amount</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={billAmount}
                    onChange={(e) => setBillAmount(cleanNumber(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Tip Percentage</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={tipPercent}
                      onChange={(e) => setTipPercent(cleanNumber(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                    <span className="text-xs text-slate-500">%</span>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    {TIP_2026.quickTips.map((tip) => (
                      <button
                        key={tip}
                        type="button"
                        onClick={() => setTipPercent(String(tip))}
                        className="h-8 px-3 border border-slate-300 rounded-md bg-slate-50 text-xs font-semibold"
                      >
                        {tip}%
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Split Between</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={splitCount}
                      onChange={(e) => setSplitCount(cleanNumber(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                    <span className="text-xs text-slate-500">people</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Tip
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Notes</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Typical U.S. full-service tip ranges from 18% to 20%. Check for automatic service charge before adding additional gratuity.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Tip.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Tip Amount</div>
                    <div className="text-2xl font-black">{formatCurrency(result.tipAmount)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Total Bill</div>
                    <div className="text-2xl font-black">{formatCurrency(result.totalAmount)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Per Person</div>
                    <div className="text-2xl font-black">{formatCurrency(result.perPersonTotal)}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Tip Snapshot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Tip Rate</div>
                  <div className={`font-bold ${tipRateState}`}>{parsedTip.toFixed(1)}%</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">People</div>
                  <div className="font-bold text-slate-800">{parsedSplit}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Bill per Person</div>
                  <div className="font-bold text-slate-800">{result ? formatCurrency(result.perPersonBill) : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Tip per Person</div>
                  <div className="font-bold text-slate-800">{result ? formatCurrency(result.perPersonTip) : "-"}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Service Type</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Typical Tip</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {TIP_2026.tipPercentages.map((item) => (
                      <tr key={item.service} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700">{item.service}</td>
                        <td className="py-1.5 px-2 text-slate-700">{item.percent}%</td>
                        <td className="py-1.5 px-2 text-slate-700">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Tipping Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Tipping norms vary by region and service model. Use this calculator as a quick planning tool, then adjust for local custom, service quality, and any service charge already included.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Authority References</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Source</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {TIP_2026.citations.map((cite) => (
                  <tr key={cite.name} className="even:bg-slate-50">
                    <td className="py-1.5 px-2 text-slate-700">{cite.name}</td>
                    <td className="py-1.5 px-2 text-slate-700 break-all">{cite.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Tip FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
