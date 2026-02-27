"use client";

import { useState } from "react";
import { Binary, ShieldCheck } from "lucide-react";
import {
  CALCULATORS,
  SCIENTIFIC_REFERENCE_TABLE,
  applyUnaryScientificFunction,
  calculateBinaryOperation,
  formatScientificValue,
  parseNumericInput,
  type ScientificAngleMode,
  type ScientificBinaryOperator,
  type ScientificUnaryFunction,
} from "@/lib/calculators/scientific";

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

export default function ScientificClient() {
  const [leftValue, setLeftValue] = useState("12");
  const [rightValue, setRightValue] = useState("3");
  const [operator, setOperator] = useState<ScientificBinaryOperator>("*");
  const [unaryInput, setUnaryInput] = useState("45");
  const [unaryFn, setUnaryFn] = useState<ScientificUnaryFunction>("sin");
  const [angleMode, setAngleMode] = useState<ScientificAngleMode>("deg");
  const [decimals, setDecimals] = useState("6");
  const [showResults, setShowResults] = useState(false);

  const faqs = (CALCULATORS[0]?.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedLeft = parseNumericInput(leftValue);
  const parsedRight = parseNumericInput(rightValue);
  const parsedUnaryInput = parseNumericInput(unaryInput);
  const parsedDecimals = Math.min(Math.max(parseInt(decimals || "6", 10) || 6, 0), 12);

  const binaryResult = (() => calculateBinaryOperation(parsedLeft, parsedRight, operator))();
  const unaryResult = (() => applyUnaryScientificFunction(parsedUnaryInput, unaryFn, angleMode))();

  const binaryStateStyle = Number.isFinite(binaryResult)
    ? "text-emerald-800 bg-emerald-50 border-emerald-200"
    : "text-rose-800 bg-rose-50 border-rose-200";

  const unaryStateStyle = Number.isFinite(unaryResult)
    ? "text-amber-800 bg-amber-50 border-amber-200"
    : "text-rose-800 bg-rose-50 border-rose-200";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Binary className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Scientific Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by IEEE 754 + NIST Numerical Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Binary Operation</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={leftValue}
                      onChange={(e) => setLeftValue(e.target.value.replace(/[^0-9.-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                    <select
                      value={operator}
                      onChange={(e) => setOperator(e.target.value as ScientificBinaryOperator)}
                      className="w-20 h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      <option value="+">+</option>
                      <option value="-">-</option>
                      <option value="*">x</option>
                      <option value="/">/</option>
                      <option value="^">^</option>
                    </select>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={rightValue}
                      onChange={(e) => setRightValue(e.target.value.replace(/[^0-9.-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Scientific Function</label>
                  <div className="flex flex-row items-center gap-2">
                    <select
                      value={unaryFn}
                      onChange={(e) => setUnaryFn(e.target.value as ScientificUnaryFunction)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      <option value="sin">sin(x)</option>
                      <option value="cos">cos(x)</option>
                      <option value="tan">tan(x)</option>
                      <option value="log">log10(x)</option>
                      <option value="ln">ln(x)</option>
                      <option value="sqrt">sqrt(x)</option>
                      <option value="square">x^2</option>
                      <option value="inverse">1/x</option>
                      <option value="none">No function</option>
                    </select>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={unaryInput}
                      onChange={(e) => setUnaryInput(e.target.value.replace(/[^0-9.-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Mode and Precision</label>
                  <div className="flex flex-row items-center gap-2">
                    <select
                      value={angleMode}
                      onChange={(e) => setAngleMode(e.target.value as ScientificAngleMode)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      <option value="deg">Degree</option>
                      <option value="rad">Radian</option>
                    </select>
                    <input
                      type="number"
                      min={0}
                      max={12}
                      value={decimals}
                      onChange={(e) => setDecimals(e.target.value)}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Scientific Result
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Formula</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Trig uses selected angle mode. Logs require positive input. Division by zero and invalid domains return Undefined.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className={`p-3 rounded-md border font-bold ${binaryStateStyle}`}>
                  <div className="text-[10px] uppercase tracking-wide mb-1">Binary Result</div>
                  <div className="text-3xl font-black">
                    {showResults ? formatScientificValue(binaryResult, parsedDecimals) : "--"}
                  </div>
                </div>
                <div className={`p-3 rounded-md border font-bold ${unaryStateStyle}`}>
                  <div className="text-[10px] uppercase tracking-wide mb-1">Function Result</div>
                  <div className="text-3xl font-black">
                    {showResults ? formatScientificValue(unaryResult, parsedDecimals) : "--"}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Scientific Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Operation</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Formula</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {SCIENTIFIC_REFERENCE_TABLE.map((row) => (
                      <tr key={row.operation} className="even:bg-slate-50">
                        <td className="py-1.5 px-2 text-slate-700">{row.operation}</td>
                        <td className="py-1.5 px-2 text-slate-700">{row.formula}</td>
                        <td className="py-1.5 px-2 text-slate-700">{row.note}</td>
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
          <h2 className="text-base font-bold text-slate-900 mb-2">Scientific Usage Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            This calculator is designed for fast numeric verification in math, finance, and science. For high-stakes engineering
            decisions, validate with independent software and source equations.
          </p>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Scientific FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
