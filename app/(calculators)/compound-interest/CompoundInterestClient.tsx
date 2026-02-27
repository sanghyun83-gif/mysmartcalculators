"use client";

import { useState } from "react";
import { ChartNoAxesCombined, ShieldCheck } from "lucide-react";
import {
  COMPOUND_2026,
  calculateCompoundInterest,
  formatCurrency,
} from "@/lib/calculators/compound-interest";

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

function cleanNumeric(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

export default function CompoundInterestClient() {
  const [principal, setPrincipal] = useState("10000");
  const [monthlyContribution, setMonthlyContribution] = useState("300");
  const [annualRate, setAnnualRate] = useState("7");
  const [years, setYears] = useState("20");
  const [frequency, setFrequency] = useState("12");
  const [showResults, setShowResults] = useState(false);

  const faqs = (COMPOUND_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedPrincipal = Number(principal) || 0;
  const parsedContribution = Number(monthlyContribution) || 0;
  const parsedRate = Number(annualRate) || 0;
  const parsedYears = Number(years) || 0;
  const parsedFrequency = Number(frequency) || 12;

  const result = (() => {
    if (
      !showResults ||
      parsedPrincipal < 0 ||
      parsedContribution < 0 ||
      parsedRate < 0 ||
      parsedYears <= 0
    ) {
      return null;
    }

    return calculateCompoundInterest(
      parsedPrincipal,
      parsedContribution,
      parsedRate,
      parsedYears,
      parsedFrequency
    );
  })();

  const growthRatio = result && result.totalPrincipal > 0 ? result.totalValue / result.totalPrincipal : 0;
  const yearlyPreview = result ? result.yearlyData.slice(-10) : [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <ChartNoAxesCombined className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Compound Interest Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by SEC Investor.gov + Federal Reserve Savings Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Initial Principal</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={principal}
                    onChange={(e) => setPrincipal(cleanNumeric(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Monthly Contribution</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(cleanNumeric(e.target.value))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Annual Rate (%)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(cleanNumeric(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Years</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={years}
                      onChange={(e) => setYears(cleanNumeric(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Compounding Frequency</label>
                  <select
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    {COMPOUND_2026.frequencies.map((item) => (
                      <option key={item.value} value={String(item.value)}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Growth
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Formula</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Compound growth comes from reinvesting prior gains. Regular contributions usually drive more impact than short-term rate changes.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Growth.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Future Value</div>
                    <div className="text-2xl font-black">{formatCurrency(result.totalValue)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Total Principal</div>
                    <div className="text-2xl font-black">{formatCurrency(result.totalPrincipal)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Interest Earned</div>
                    <div className="text-2xl font-black">{formatCurrency(result.totalInterest)}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Growth Snapshot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Rate</div>
                  <div className="font-bold text-slate-800">{parsedRate.toFixed(2)}%</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Duration</div>
                  <div className="font-bold text-slate-800">{parsedYears} years</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Frequency</div>
                  <div className="font-bold text-slate-800">{parsedFrequency}/yr</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Growth Multiple</div>
                  <div className="font-bold text-slate-800">{result ? `${growthRatio.toFixed(2)}x` : "-"}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Yearly Projection (Recent 10 Years)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Year</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Principal</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Interest</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Total Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {yearlyPreview.length === 0 ? (
                      <tr className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700" colSpan={4}>Run calculation to view projection.</td>
                      </tr>
                    ) : (
                      yearlyPreview.map((row) => (
                        <tr key={row.year} className="even:bg-slate-50">
                          <td className="py-1.5 px-2 text-slate-700">{row.year}</td>
                          <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.principal)}</td>
                          <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.interest)}</td>
                          <td className="py-1.5 px-2 text-slate-700">{formatCurrency(row.value)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Compound Interest Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Long-term compounding depends on consistency. A stable contribution plan and realistic return assumptions generally outperform irregular timing decisions.
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
                {COMPOUND_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Compound Interest FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
