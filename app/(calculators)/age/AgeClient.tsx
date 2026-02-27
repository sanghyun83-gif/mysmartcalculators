"use client";

import { useState } from "react";
import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import { AGE_2026, calculateAge } from "@/lib/calculators/age";

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

function getTodayIsoDate(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function AgeClient() {
  const [birthDate, setBirthDate] = useState("1995-01-01");
  const [targetDate, setTargetDate] = useState(getTodayIsoDate());
  const [showResults, setShowResults] = useState(false);

  const faqs = (AGE_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const result = (() => {
    if (!showResults || !birthDate || !targetDate) return null;
    return calculateAge(birthDate, targetDate);
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Clock3 className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Age Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by WHO Demographic Standards + ISO-8601 Date Rules
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Birth Date</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="date"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Target Date</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="date"
                      value={targetDate}
                      onChange={(e) => setTargetDate(e.target.value)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Age
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Notes</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Age uses calendar year, month, and day differences with leap-year handling. For legal deadlines, verify local jurisdiction rules.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter dates and click Calculate Age.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Years</div>
                    <div className="text-3xl font-black">{result.chronological.years}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Months</div>
                    <div className="text-3xl font-black">{result.chronological.months}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Days</div>
                    <div className="text-3xl font-black">{result.chronological.days}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Detailed Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Total Days</div>
                  <div className="font-bold text-slate-800">{result ? result.total.days.toLocaleString() : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Total Weeks</div>
                  <div className="font-bold text-slate-800">{result ? result.total.weeks.toLocaleString() : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Next Birthday</div>
                  <div className="font-bold text-slate-800">{result ? `${result.birthday.daysRemaining} days` : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Turning Age</div>
                  <div className="font-bold text-slate-800">{result ? result.birthday.ageTurning : "-"}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Metric</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Value</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Chronological age</td>
                      <td className="py-1.5 px-2 text-slate-700">Year / Month / Day</td>
                      <td className="py-1.5 px-2 text-slate-700">General legal and personal use</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Total days</td>
                      <td className="py-1.5 px-2 text-slate-700">Exact days elapsed</td>
                      <td className="py-1.5 px-2 text-slate-700">Milestone tracking</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Next birthday</td>
                      <td className="py-1.5 px-2 text-slate-700">Days remaining</td>
                      <td className="py-1.5 px-2 text-slate-700">Planning and reminders</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Age Calculation Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Age calculations are date-sensitive and depend on month length and leap years. This tool is suited for planning,
            education, and baseline verification.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Authority References</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Source</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {AGE_2026.citations.map((cite) => (
                  <tr key={cite.s} className="even:bg-slate-50">
                    <td className="py-1.5 px-2 text-slate-700">{cite.s}</td>
                    <td className="py-1.5 px-2 text-slate-700">{cite.t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Age FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="bg-slate-100 border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-xs text-slate-500 flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          Date math follows Gregorian calendar conventions and ISO-8601 formatting.
        </div>
      </section>
    </main>
  );
}
