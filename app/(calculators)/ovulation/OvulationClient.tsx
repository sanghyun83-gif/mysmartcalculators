"use client";

import { useState } from "react";
import { HeartPulse, ShieldCheck } from "lucide-react";
import { OVULATION_2026, auditFertility } from "@/lib/calculators/ovulation";

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

function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(date);
}

export default function OvulationClient() {
  const [lastPeriodDate, setLastPeriodDate] = useState(toIsoDate(new Date(new Date().getTime() - 14 * 86400000)));
  const [cycleLength, setCycleLength] = useState("28");
  const [lutealLength, setLutealLength] = useState("14");
  const [showResults, setShowResults] = useState(false);

  const faqs = (OVULATION_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedLastPeriod = lastPeriodDate ? new Date(`${lastPeriodDate}T00:00:00`) : null;
  const parsedCycle = Number(cycleLength) || 28;
  const parsedLuteal = Number(lutealLength) || 14;

  const result = (() => {
    if (!showResults || !parsedLastPeriod || Number.isNaN(parsedLastPeriod.getTime())) return null;
    return auditFertility(parsedLastPeriod, parsedCycle, parsedLuteal);
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <HeartPulse className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Ovulation Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by ACOG Fertility Guidance + WHO Reproductive Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Last Period Start Date</label>
                  <input
                    type="date"
                    value={lastPeriodDate}
                    onChange={(e) => setLastPeriodDate(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Cycle Length (days)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={cycleLength}
                      onChange={(e) => setCycleLength(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Luteal Length (days)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={lutealLength}
                      onChange={(e) => setLutealLength(e.target.value.replace(/[^0-9]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Fertility Window
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Fertility Window.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Fertile Start</div>
                    <div className="text-xl font-black">{formatDate(result.fertileStart)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Ovulation Day</div>
                    <div className="text-xl font-black">{formatDate(result.ovulationDate)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Next Period</div>
                    <div className="text-xl font-black">{formatDate(result.nextPeriodDate)}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Fertility Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Phase</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Typical Window</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Clinical Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Fertile Window</td><td className="py-1.5 px-2 text-slate-700">5 days before ovulation + ovulation day</td><td className="py-1.5 px-2 text-slate-700">Highest conception probability window</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Luteal Phase</td><td className="py-1.5 px-2 text-slate-700">~12-14 days</td><td className="py-1.5 px-2 text-slate-700">Tracks post-ovulation cycle stability</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Cycle Length</td><td className="py-1.5 px-2 text-slate-700">~21-35 days</td><td className="py-1.5 px-2 text-slate-700">Individual baseline should guide interpretation</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Ovulation Planning Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Ovulation prediction should be paired with physical biomarkers like LH test strips and cervical mucus changes for higher confidence.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Authority References</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Source</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {OVULATION_2026.citations.map((cite) => (
                  <tr key={cite.name} className="even:bg-slate-50">
                    <td className="py-1.5 px-2 text-slate-700">{cite.name}</td>
                    <td className="py-1.5 px-2 text-slate-700">{cite.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Ovulation FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}