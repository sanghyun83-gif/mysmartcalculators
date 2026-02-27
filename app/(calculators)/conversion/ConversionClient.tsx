"use client";

import { useMemo, useState } from "react";
import { Ruler, ShieldCheck } from "lucide-react";
import { CONVERSION_2026, convertUnit, formatPrecision } from "@/lib/calculators/conversion";

type FAQItem = Readonly<{ question: string; answer: string }>;
type Category = "length" | "mass" | "volume" | "temperature";

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

const temperatureUnits = [
  { id: "c", name: "Celsius" },
  { id: "f", name: "Fahrenheit" },
  { id: "k", name: "Kelvin" },
] as const;

function getUnits(category: Category) {
  if (category === "temperature") return temperatureUnits;
  return CONVERSION_2026.units[category];
}

export default function ConversionClient() {
  const [category, setCategory] = useState<Category>("length");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("ft");
  const [value, setValue] = useState("1");
  const [showResults, setShowResults] = useState(false);

  const faqs = (CONVERSION_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const units = useMemo(() => getUnits(category), [category]);

  const result = (() => {
    const parsedValue = Number(value);
    if (!showResults || Number.isNaN(parsedValue)) return null;
    const converted = convertUnit(parsedValue, fromUnit, toUnit, category);
    return { converted, parsedValue };
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Ruler className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Unit Conversion Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by NIST SP 811 + ISO 80000 Metrology Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Category</label>
                  <select
                    value={category}
                    onChange={(e) => {
                      const nextCategory = e.target.value as Category;
                      setCategory(nextCategory);
                      const nextUnits = getUnits(nextCategory);
                      setFromUnit(nextUnits[0].id);
                      setToUnit(nextUnits[1]?.id ?? nextUnits[0].id);
                    }}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    <option value="length">Length</option>
                    <option value="mass">Mass</option>
                    <option value="volume">Volume</option>
                    <option value="temperature">Temperature</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Value</label>
                  <input
                    type="text"
                    inputMode="decimal"
                    value={value}
                    onChange={(e) => setValue(e.target.value.replace(/[^0-9.-]/g, ""))}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">From Unit</label>
                    <select
                      value={fromUnit}
                      onChange={(e) => setFromUnit(e.target.value)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      {units.map((u) => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">To Unit</label>
                    <select
                      value={toUnit}
                      onChange={(e) => setToUnit(e.target.value)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      {units.map((u) => (
                        <option key={u.id} value={u.id}>{u.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Convert Units
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Conversion Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                  <div className="text-base font-black">Enter values and click Convert Units.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Input</div>
                    <div className="text-2xl font-black">{formatPrecision(result.parsedValue)} {fromUnit}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Converted</div>
                    <div className="text-2xl font-black">{formatPrecision(result.converted)} {toUnit}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Unit</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Symbol</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {units.map((u) => (
                      <tr key={u.id} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700">{u.name}</td>
                        <td className="py-1.5 px-2 text-slate-700">{u.id}</td>
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
          <h2 className="text-base font-bold text-slate-900 mb-2">Unit Conversion Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Use exact constants when converting engineering or compliance values. Preserve significant figures based on measurement precision requirements.
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
                {CONVERSION_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Conversion FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
