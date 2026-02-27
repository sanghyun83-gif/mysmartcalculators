"use client";

import { useState } from "react";
import { Baby, CalendarDays, ShieldCheck } from "lucide-react";
import { PREGNANCY_2026, calculatePregnancy } from "@/lib/calculators/pregnancy";

type FAQItem = Readonly<{ question: string; answer: string }>;
type PregnancyMethod = "lmp" | "conception" | "ivf_3d" | "ivf_5d" | "ultrasound";

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

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

function getMethodLabel(method: PregnancyMethod): string {
  switch (method) {
    case "lmp":
      return "Last Menstrual Period (LMP)";
    case "conception":
      return "Conception Date";
    case "ivf_3d":
      return "IVF Day-3 Transfer";
    case "ivf_5d":
      return "IVF Day-5 Transfer";
    case "ultrasound":
      return "Ultrasound-Based Due Date";
    default:
      return "Pregnancy Method";
  }
}

export default function PregnancyClient() {
  const [method, setMethod] = useState<PregnancyMethod>("lmp");
  const [baseDate, setBaseDate] = useState(toIsoDate(addDays(new Date(), -84)));
  const [cycleLength, setCycleLength] = useState("28");
  const [showResults, setShowResults] = useState(false);

  const faqs = (PREGNANCY_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedDate = baseDate ? new Date(`${baseDate}T00:00:00`) : null;
  const parsedCycleLength = Number(cycleLength) || 28;

  const result = (() => {
    if (!showResults || !parsedDate || Number.isNaN(parsedDate.getTime())) return null;

    return calculatePregnancy({
      method,
      date: parsedDate,
      cycleLength: method === "lmp" ? parsedCycleLength : undefined,
    });
  })();

  const statusStyle = !result
    ? "text-amber-800 bg-amber-50 border-amber-200"
    : result.daysRemaining === 0
      ? "text-rose-800 bg-rose-50 border-rose-200"
      : "text-emerald-800 bg-emerald-50 border-emerald-200";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Baby className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Pregnancy Due Date Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by ACOG Due-Date Standards + CDC Prenatal Guidance
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
                    onChange={(e) => setMethod(e.target.value as PregnancyMethod)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    <option value="lmp">Last Menstrual Period (LMP)</option>
                    <option value="conception">Conception Date</option>
                    <option value="ivf_3d">IVF Day-3 Transfer</option>
                    <option value="ivf_5d">IVF Day-5 Transfer</option>
                    <option value="ultrasound">Ultrasound Due Date</option>
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

                {method === "lmp" && (
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Cycle Length (days)</label>
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="text"
                        inputMode="decimal"
                        value={cycleLength}
                        onChange={(e) => setCycleLength(e.target.value.replace(/[^0-9]/g, ""))}
                        className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                      />
                      <span className="text-xs text-slate-500">days</span>
                    </div>
                  </div>
                )}

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
                LMP uses Naegele's rule with cycle adjustment. Conception and IVF methods use known fertilization timing. Ultrasound mode back-calculates gestational age from an established due date.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              <div className={`p-3 rounded-md border font-bold ${statusStyle}`}>
                <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                <div className="text-base font-black">
                  {!result ? "Enter values and click Calculate Due Date." : `${getMethodLabel(method)} calculation complete.`}
                </div>
              </div>

              {result && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Estimated Due Date</div>
                    <div className="text-xl font-black">{formatDate(result.edd)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Current Gestation</div>
                    <div className="text-xl font-black">{result.currentWeek}w {result.currentDays}d</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Days Remaining</div>
                    <div className="text-xl font-black">{result.daysRemaining}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Pregnancy Snapshot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Trimester</div>
                  <div className="font-bold text-slate-800">{result ? result.trimester : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Progress</div>
                  <div className="font-bold text-slate-800">{result ? `${result.progressPercent.toFixed(1)}%` : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Conception Date</div>
                  <div className="font-bold text-slate-800">{result ? formatDate(result.conceptionDate) : "-"}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Zodiac (EDD)</div>
                  <div className="font-bold text-slate-800">{result ? result.zodiacSign : "-"}</div>
                </div>
              </div>
              <div className="mt-2 p-2 rounded border border-slate-200 bg-slate-50 text-sm text-slate-700">
                <span className="font-semibold text-slate-800">Current Milestone:</span> {result ? result.milestone : "-"}
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Method</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Formula Basis</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">LMP</td>
                      <td className="py-1.5 px-2 text-slate-700">280 days (+ cycle adjustment)</td>
                      <td className="py-1.5 px-2 text-slate-700">Standard prenatal planning</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Conception</td>
                      <td className="py-1.5 px-2 text-slate-700">Conception + 266 days</td>
                      <td className="py-1.5 px-2 text-slate-700">Known ovulation date</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">IVF Day-3 / Day-5</td>
                      <td className="py-1.5 px-2 text-slate-700">Transfer + 263 / 261 days</td>
                      <td className="py-1.5 px-2 text-slate-700">Assisted reproduction</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Ultrasound</td>
                      <td className="py-1.5 px-2 text-slate-700">Known EDD baseline</td>
                      <td className="py-1.5 px-2 text-slate-700">Provider-updated dating</td>
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
          <h2 className="text-base font-bold text-slate-900 mb-2">Pregnancy Due Date Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Estimated due date is a clinical planning anchor, not a guaranteed delivery day. Combine this estimate with prenatal visits, ultrasound dating, and provider guidance for safer decision-making throughout pregnancy.
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
                {PREGNANCY_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Pregnancy FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>

      <section className="bg-slate-100 border-t border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-xs text-slate-500 flex items-center gap-2">
          <CalendarDays className="w-4 h-4" />
          For medical decisions, confirm gestational dating with your licensed healthcare provider.
        </div>
      </section>
    </main>
  );
}
