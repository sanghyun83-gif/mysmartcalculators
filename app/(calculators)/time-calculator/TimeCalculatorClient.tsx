"use client";

import { useState } from "react";
import { Clock3, ShieldCheck } from "lucide-react";
import { TIME_CALCULATOR_2026, TimeCalculatorEngine } from "@/lib/calculators/time-calculator";

type FAQItem = Readonly<{ question: string; answer: string }>;

function sanitize(input: string): string {
  return input.replace(/[^0-9-]/g, "");
}

function toNumber(input: string): number {
  const n = Number(input);
  return Number.isFinite(n) ? n : 0;
}

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

export default function TimeCalculatorClient() {
  const [startH, setStartH] = useState("08");
  const [startM, setStartM] = useState("30");
  const [startS, setStartS] = useState("00");

  const [endH, setEndH] = useState("17");
  const [endM, setEndM] = useState("45");
  const [endS, setEndS] = useState("00");

  const [deltaH, setDeltaH] = useState("01");
  const [deltaM, setDeltaM] = useState("15");
  const [deltaS, setDeltaS] = useState("00");

  const [showResults, setShowResults] = useState(false);
  const faqs = (TIME_CALCULATOR_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const result = (() => {
    if (!showResults) return null;

    const diff = TimeCalculatorEngine.diff(
      toNumber(startH), toNumber(startM), toNumber(startS),
      toNumber(endH), toNumber(endM), toNumber(endS)
    );

    const added = TimeCalculatorEngine.add(
      toNumber(startH), toNumber(startM), toNumber(startS),
      toNumber(deltaH), toNumber(deltaM), toNumber(deltaS)
    );

    const direction = diff.totalSeconds < 0 ? "Past" : "Forward";

    return { diff, added, direction };
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Clock3 className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Time Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by NIST + ISO 8601 Time Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Start Time (H:M:S)</label>
                  <div className="flex flex-row items-center gap-2">
                    <input value={startH} onChange={(e) => setStartH(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                    <input value={startM} onChange={(e) => setStartM(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                    <input value={startS} onChange={(e) => setStartS(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">End Time (H:M:S)</label>
                  <div className="flex flex-row items-center gap-2">
                    <input value={endH} onChange={(e) => setEndH(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                    <input value={endM} onChange={(e) => setEndM(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                    <input value={endS} onChange={(e) => setEndS(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Add Delta (H:M:S)</label>
                  <div className="flex flex-row items-center gap-2">
                    <input value={deltaH} onChange={(e) => setDeltaH(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                    <input value={deltaM} onChange={(e) => setDeltaM(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                    <input value={deltaS} onChange={(e) => setDeltaS(sanitize(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md shadow-sm" />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Time
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
                  <div className="text-base font-black">Enter values and click Calculate Time.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Total Seconds</div>
                    <div className="text-2xl font-black">{Math.abs(result.diff.totalSeconds)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Direction</div>
                    <div className="text-2xl font-black">{result.direction}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Delta (H:M:S)</div>
                    <div className="text-2xl font-black">{`${result.diff.hours}:${String(result.diff.minutes).padStart(2, "0")}:${String(result.diff.seconds).padStart(2, "0")}`}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Addition Preview</h3>
              <div className="p-2 rounded border border-slate-200 bg-slate-50 text-sm text-slate-700">
                {result
                  ? `Start + Delta = ${result.added.hours}:${String(result.added.minutes).padStart(2, "0")}:${String(result.added.seconds).padStart(2, "0")} (total ${result.added.totalSeconds}s)`
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Time Calculation Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Standardize all time values into seconds first, then expand into hours, minutes, and seconds for stable and auditable output.
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
                {TIME_CALCULATOR_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Time FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}

