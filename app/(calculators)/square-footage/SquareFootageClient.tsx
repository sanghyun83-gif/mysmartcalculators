"use client";

import { useState } from "react";
import { House, ShieldCheck } from "lucide-react";
import { SQUARE_FOOTAGE_2026, calculateArea, formatArea } from "@/lib/calculators/square-footage";

type FAQItem = Readonly<{ question: string; answer: string }>;
type ShapeId = "rectangle" | "circle" | "triangle" | "l-shape";

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

function clean(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

export default function SquareFootageClient() {
  const [shape, setShape] = useState<ShapeId>("rectangle");
  const [length, setLength] = useState("20");
  const [width, setWidth] = useState("15");
  const [radius, setRadius] = useState("10");
  const [base, setBase] = useState("12");
  const [height, setHeight] = useState("8");
  const [l1, setL1] = useState("10");
  const [w1, setW1] = useState("8");
  const [l2, setL2] = useState("6");
  const [w2, setW2] = useState("4");
  const [showResults, setShowResults] = useState(false);

  const faqs = (SQUARE_FOOTAGE_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const result = (() => {
    if (!showResults) return null;
    const area = calculateArea(shape, {
      length: Number(length) || 0,
      width: Number(width) || 0,
      radius: Number(radius) || 0,
      base: Number(base) || 0,
      height: Number(height) || 0,
      l1: Number(l1) || 0,
      w1: Number(w1) || 0,
      l2: Number(l2) || 0,
      w2: Number(w2) || 0,
    });
    const squareMeters = area * 0.09290304;
    return { area, squareMeters };
  })();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <House className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Square Footage Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by ANSI Z765 + BOMA Area Measurement Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Shape</label>
                  <select
                    value={shape}
                    onChange={(e) => setShape(e.target.value as ShapeId)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    <option value="rectangle">Rectangle</option>
                    <option value="circle">Circle</option>
                    <option value="triangle">Triangle</option>
                    <option value="l-shape">L-Shape</option>
                  </select>
                </div>

                {shape === "rectangle" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" inputMode="decimal" value={length} onChange={(e) => setLength(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Length (ft)" />
                    <input type="text" inputMode="decimal" value={width} onChange={(e) => setWidth(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Width (ft)" />
                  </div>
                )}

                {shape === "circle" && (
                  <input type="text" inputMode="decimal" value={radius} onChange={(e) => setRadius(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Radius (ft)" />
                )}

                {shape === "triangle" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" inputMode="decimal" value={base} onChange={(e) => setBase(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Base (ft)" />
                    <input type="text" inputMode="decimal" value={height} onChange={(e) => setHeight(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="Height (ft)" />
                  </div>
                )}

                {shape === "l-shape" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" inputMode="decimal" value={l1} onChange={(e) => setL1(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="L1 (ft)" />
                    <input type="text" inputMode="decimal" value={w1} onChange={(e) => setW1(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="W1 (ft)" />
                    <input type="text" inputMode="decimal" value={l2} onChange={(e) => setL2(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="L2 (ft)" />
                    <input type="text" inputMode="decimal" value={w2} onChange={(e) => setW2(clean(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm rounded-md" placeholder="W2 (ft)" />
                  </div>
                )}

                <button type="button" onClick={() => setShowResults(true)} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm">
                  Calculate Area
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
                  <div className="text-base font-black">Enter values and click Calculate Area.</div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Square Feet</div>
                    <div className="text-2xl font-black">{formatArea(result.area, false)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Square Meters</div>
                    <div className="text-2xl font-black">{formatArea(result.squareMeters, true)}</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Shape Formula Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Shape</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Formula</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Rectangle</td><td className="py-1.5 px-2 text-slate-700">Length x Width</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Circle</td><td className="py-1.5 px-2 text-slate-700">pi x r²</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">Triangle</td><td className="py-1.5 px-2 text-slate-700">0.5 x Base x Height</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">L-Shape</td><td className="py-1.5 px-2 text-slate-700">(L1 x W1) + (L2 x W2)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Square Footage Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Use consistent wall measurement rules and round only at reporting stage. For appraisals and contracts, align with the same standard across all compared properties.
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
                {SQUARE_FOOTAGE_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Square Footage FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
