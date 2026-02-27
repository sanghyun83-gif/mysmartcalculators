"use client";

import { useState } from "react";
import { CalendarHeart, ShieldCheck } from "lucide-react";
import { DUE_DATE_2026, calculateDueDate, formatDisplayDate } from "@/lib/calculators/due-date";

type FAQItem = Readonly<{ question: string; answer: string }>;
type DueDateMethod = "lmp" | "conception" | "ivf5" | "ivf3" | "ultrasound";

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
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(base: Date, days: number): Date {
  return new Date(base.getTime() + days * 24 * 60 * 60 * 1000);
}

export default function DueDateClient() {
  const [method, setMethod] = useState<DueDateMethod>("lmp");
  const [baseDate, setBaseDate] = useState(toIsoDate(addDays(new Date(), -84)));
  const [showResults, setShowResults] = useState(false);

  const faqs = (DUE_DATE_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedDate = baseDate ? new Date(`${baseDate}T00:00:00`) : null;

  const result = (() => {
    if (!showResults || !parsedDate || Number.isNaN(parsedDate.getTime())) return null;
    return calculateDueDate(parsedDate, method);
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <CalendarHeart className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Due Date Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by ACOG Dating Guidelines + WHO Antenatal Care Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Calculation Method</label>
                  <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value as DueDateMethod)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    <option value="lmp">Last Menstrual Period (LMP)</option>
                    <option value="conception">Conception Date</option>
                    <option value="ivf5">IVF Day-5 Transfer</option>
                    <option value="ivf3">IVF Day-3 Transfer</option>
                    <option value="ultrasound">Known Ultrasound Due Date</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">
                    {method === "ultrasound" ? "Known Due Date" : "Reference Date"}
                  </label>
                  <input
                    type="date"
                    value={baseDate}
                    onChange={(e) => setBaseDate(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Due Date
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Method Notes</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                LMP and conception are standard dating inputs. IVF transfer methods use embryo age offsets, and ultrasound mode uses an already established EDD.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Calculate Due Date.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Estimated Due Date</div>
                    <div className="text-xl font-black">{formatDisplayDate(result.edd)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Current Gestation</div>
                    <div className="text-xl font-black">{result.weeks}w {result.days}d</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Progress</div>
                    <div className="text-xl font-black">{result.progress.toFixed(1)}%</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Pregnancy Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Phase</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Week Range</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Clinical Label</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {DUE_DATE_2026.trimesters.map((item) => (
                      <tr key={item.name} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700">{item.name}</td>
                        <td className="py-1.5 px-2 text-slate-700">{item.startWeek}-{item.endWeek}</td>
                        <td className="py-1.5 px-2 text-slate-700">{item.label}</td>
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
          <h2 className="text-base font-bold text-slate-900 mb-2">Due Date Planning Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            A due date is a planning estimate, not an exact delivery date. Use this timeline to schedule prenatal care and follow-up scans with your provider.
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
                {DUE_DATE_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Due Date FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
