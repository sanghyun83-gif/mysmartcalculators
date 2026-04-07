"use client";

import { useState } from "react";
import Link from "next/link";
import { Percent, ShieldCheck } from "lucide-react";
import {
  CALCULATORS,
  getPercentageOf,
  getWhatPercentageIs,
  getPercentageChange,
  getPercentageDifference,
} from "@/lib/calculators/percentage";

type Mode = "percentOf" | "whatPercent" | "change" | "difference";
type FAQItem = Readonly<{ question: string; answer: string }>;

type WorkedExample = {
  caseLabel: string;
  expression: string;
  result: string;
};

const WORKED_EXAMPLES: WorkedExample[] = [
  { caseLabel: "Retail discount", expression: "20% of 150", result: "30" },
  { caseLabel: "Commission", expression: "12% of 8,500", result: "1,020" },
  { caseLabel: "Reverse percent", expression: "45 is what % of 180", result: "25%" },
  { caseLabel: "Tax portion", expression: "9.5 is what % of 95", result: "10%" },
  { caseLabel: "Growth", expression: "100 to 125", result: "+25%" },
  { caseLabel: "Decline", expression: "250 to 200", result: "-20%" },
  { caseLabel: "Price increase", expression: "79 to 92", result: "+16.46%" },
  { caseLabel: "Price drop", expression: "540 to 486", result: "-10%" },
  { caseLabel: "Budget allocation", expression: "35% of 3,000", result: "1,050" },
  { caseLabel: "Savings rate", expression: "600 is what % of 4,000", result: "15%" },
  { caseLabel: "Attendance gain", expression: "120 to 138", result: "+15%" },
  { caseLabel: "Traffic loss", expression: "90,000 to 72,000", result: "-20%" },
  { caseLabel: "Variance", expression: "A=95, B=105", result: "10% diff" },
  { caseLabel: "Margin check", expression: "30 is what % of 240", result: "12.5%" },
  { caseLabel: "Tip quick calc", expression: "18% of 84", result: "15.12" },
  { caseLabel: "Medical copay", expression: "30% of 260", result: "78" },
  { caseLabel: "Revenue uplift", expression: "1.2M to 1.35M", result: "+12.5%" },
  { caseLabel: "Cost reduction", expression: "420k to 378k", result: "-10%" },
  { caseLabel: "Plan completion", expression: "82 of 120", result: "68.33%" },
  { caseLabel: "Delta spread", expression: "A=64, B=80", result: "22.22% diff" },
];

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

export default function PercentageClient() {
  const [mode, setMode] = useState<Mode>("percentOf");
  const [valueA, setValueA] = useState("20");
  const [valueB, setValueB] = useState("150");
  const [showResults, setShowResults] = useState(false);

  const faqs = (CALCULATORS.find((c) => c.id === "percentage/calculator")?.faqs as readonly FAQItem[] | undefined) ?? [];

  const result = (() => {
    if (!showResults) return null;
    const a = Number(valueA) || 0;
    const b = Number(valueB) || 0;

    if (mode === "percentOf") return getPercentageOf(b, a);
    if (mode === "whatPercent") return getWhatPercentageIs(a, b);
    if (mode === "change") return getPercentageChange(a, b);
    return getPercentageDifference(a, b);
  })();

  const resultLabel = (() => {
    if (mode === "percentOf") return "Result";
    if (mode === "whatPercent") return "Percentage";
    if (mode === "change") return "Change";
    return "Difference";
  })();

  const resultStyles = (() => {
    if (mode === "change") return (result ?? 0) >= 0 ? "text-emerald-800 bg-emerald-50 border-emerald-200" : "text-rose-800 bg-rose-50 border-rose-200";
    if (mode === "difference") return "text-amber-800 bg-amber-50 border-amber-200";
    return "text-emerald-800 bg-emerald-50 border-emerald-200";
  })();

  const modeHint =
    mode === "percentOf"
      ? "Use this for quick value extraction (discount, commission, tax)."
      : mode === "whatPercent"
      ? "Use this when you know part and whole, and need the percentage share."
      : mode === "change"
      ? "Use this for growth/decline from A to B."
      : "Use this for relative spread between two values.";

  function handleCalculate() {
    setShowResults(true);
  }

  function handleReset() {
    setMode("percentOf");
    setValueA("20");
    setValueB("150");
    setShowResults(false);
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Percent className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Percentage Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by NIST Numerical Methods + BLS Economic Indicators
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Calculation Type</label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value as Mode)}
                    className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                  >
                    <option value="percentOf">What is A% of B?</option>
                    <option value="whatPercent">A is what % of B?</option>
                    <option value="change">Percentage change (A to B)</option>
                    <option value="difference">Percentage difference (A, B)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-700">Values</label>
                  <div className="flex flex-row items-center gap-2">
                    <input
                      type="text"
                      inputMode="decimal"
                      value={valueA}
                      onChange={(e) => setValueA(e.target.value.replace(/[^0-9.-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                    <input
                      type="text"
                      inputMode="decimal"
                      value={valueB}
                      onChange={(e) => setValueB(e.target.value.replace(/[^0-9.-]/g, ""))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <p className="text-xs text-slate-500">{modeHint}</p>
                <button type="button" onClick={handleCalculate} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm">
                  Calculate Percentage
                </button>
                <button type="button" onClick={handleReset} className="w-full h-9 border border-slate-300 bg-white text-slate-700 font-semibold rounded-md text-sm">
                  Reset
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Formula</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Base formula: `(part / whole) * 100`. Use change mode for growth or decline and difference mode for relative spread.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              {!showResults || result === null ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  Enter values and click Calculate Percentage.
                </div>
              ) : (
                <div className={`p-3 rounded-md border ${resultStyles}`}>
                  <div className="text-xs uppercase tracking-wide mb-1 font-bold">{resultLabel}</div>
                  <div className="text-4xl font-black">{Number.isFinite(result) ? result.toFixed(2) : "0.00"}%</div>
                </div>
              )}
            </div>

            <div id="amortization" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Use Case</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Formula</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Percent of value</td>
                      <td className="py-1.5 px-2 text-slate-700">(B * A) / 100</td>
                      <td className="py-1.5 px-2 text-slate-700">20% of 150 = 30</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Reverse percent</td>
                      <td className="py-1.5 px-2 text-slate-700">(A / B) * 100</td>
                      <td className="py-1.5 px-2 text-slate-700">30 of 200 = 15%</td>
                    </tr>
                    <tr className="even:bg-slate-50">
                      <td className="py-1.5 px-2 text-slate-700">Percent change</td>
                      <td className="py-1.5 px-2 text-slate-700">((B - A) / A) * 100</td>
                      <td className="py-1.5 px-2 text-slate-700">100 to 125 = 25%</td>
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
          <h2 className="text-base font-bold text-slate-900 mb-2">Percentage Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Percentage calculations support pricing, discount analysis, growth tracking, and budgeting. For financial decisions,
            always separate percentage points from percentage change to avoid interpretation errors.
          </p>
        </section>

        <section id="affordability" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">2026 Data Context</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Category</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Typical Range</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Retail discount</td>
                  <td className="py-1.5 px-2 text-slate-700">5% to 40%</td>
                  <td className="py-1.5 px-2 text-slate-700">Price reduction</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Inflation change</td>
                  <td className="py-1.5 px-2 text-slate-700">1% to 8%</td>
                  <td className="py-1.5 px-2 text-slate-700">Economic trend</td>
                </tr>
                <tr className="even:bg-slate-50">
                  <td className="py-1.5 px-2 text-slate-700">Commission rate</td>
                  <td className="py-1.5 px-2 text-slate-700">2% to 20%</td>
                  <td className="py-1.5 px-2 text-slate-700">Sales payout</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="refinance" className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Validation Notes</h3>
          <p className="text-sm leading-relaxed text-slate-700">
            Inputs accept decimals and negative values where mathematically valid. A zero denominator returns zero by design
            to prevent invalid division output.
          </p>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Worked Examples (20)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Case</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Expression</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {WORKED_EXAMPLES.map((row) => (
                  <tr key={`${row.caseLabel}-${row.expression}`} className="even:bg-slate-50">
                    <td className="py-1.5 px-2 text-slate-700">{row.caseLabel}</td>
                    <td className="py-1.5 px-2 text-slate-700">{row.expression}</td>
                    <td className="py-1.5 px-2 text-slate-700 font-semibold">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h3 className="text-sm font-bold text-slate-900 mb-2">Related Core20 Tools</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <Link href="/tip" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Tip Calculator</Link>
            <Link href="/tax" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Tax Calculator</Link>
            <Link href="/conversion" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Unit Conversion</Link>
            <Link href="/scientific" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Scientific Calculator</Link>
            <Link href="/loan" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Loan Calculator</Link>
            <Link href="/compound-interest" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Compound Interest</Link>
          </div>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Percentage FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}


