"use client";

import { useState } from "react";
import { CalendarRange, ShieldCheck } from "lucide-react";
import { DATE_2026, DateEngine } from "@/lib/calculators/date";

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

export default function DateClient() {
  const [startDate, setStartDate] = useState("2026-01-01");
  const [endDate, setEndDate] = useState("2026-12-31");
  const [addYears, setAddYears] = useState("0");
  const [addMonths, setAddMonths] = useState("1");
  const [addDays, setAddDays] = useState("0");
  const [showResults, setShowResults] = useState(false);

  const faqs = (DATE_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedStart = startDate ? new Date(`${startDate}T00:00:00`) : null;
  const parsedEnd = endDate ? new Date(`${endDate}T00:00:00`) : null;

  const result = (() => {
    if (!showResults || !parsedStart || !parsedEnd || Number.isNaN(parsedStart.getTime()) || Number.isNaN(parsedEnd.getTime())) {
      return null;
    }

    const inverse = parsedEnd < parsedStart;
    const s = inverse ? parsedEnd : parsedStart;
    const e = inverse ? parsedStart : parsedEnd;

    const duration = DateEngine.getDuration(s, e);
    const businessDays = DateEngine.getBusinessDays(s, e);
    const addedDate = DateEngine.addDuration(
      parsedStart,
      Number(addYears) || 0,
      Number(addMonths) || 0,
      Number(addDays) || 0
    );

    return {
      inverse,
      duration,
      businessDays,
      addedDate,
    };
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <CalendarRange className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Date Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by ISO 8601 + NIST Time Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Add Duration (Y / M / D)</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={addYears}
                      onChange={(e) => setAddYears(e.target.value.replace(/[^0-9-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      placeholder="Years"
                    />
                    <input
                      type="text"
                      inputMode="decimal"
                      value={addMonths}
                      onChange={(e) => setAddMonths(e.target.value.replace(/[^0-9-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      placeholder="Months"
                    />
                    <input
                      type="text"
                      inputMode="decimal"
                      value={addDays}
                      onChange={(e) => setAddDays(e.target.value.replace(/[^0-9-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      placeholder="Days"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Date Results
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
                  <div className="text-base font-black">Enter values and click Calculate Date Results.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Total Days</div>
                    <div className="text-2xl font-black">{result.duration.totalDays}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Business Days</div>
                    <div className="text-2xl font-black">{result.businessDays}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Direction</div>
                    <div className="text-2xl font-black">{result.inverse ? "Past" : "Forward"}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Temporal Breakdown</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Years</div>
                  <div className="font-bold text-slate-800">{result ? result.duration.years : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Months</div>
                  <div className="font-bold text-slate-800">{result ? result.duration.months : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Weeks</div>
                  <div className="font-bold text-slate-800">{result ? result.duration.weeks : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Remaining Days</div>
                  <div className="font-bold text-slate-800">{result ? result.duration.remainingDays : "-"}</div>
                </div>
              </div>
              <div className="mt-2 p-2 rounded border border-slate-200 bg-slate-50 text-sm text-slate-700">
                <span className="font-semibold text-slate-800">Start + Duration:</span> {result ? formatDate(result.addedDate) : "-"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Date Calculation Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Date arithmetic should use consistent timezone and format rules. ISO 8601 inputs help avoid ambiguity when calculating intervals and deadlines.
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
                {DATE_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Date FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
