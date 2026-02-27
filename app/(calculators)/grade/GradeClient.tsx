"use client";

import { useMemo, useState } from "react";
import { GraduationCap, ShieldCheck } from "lucide-react";
import {
  GRADE_2026,
  calculateFinalNeeded,
  calculateWeightedGrade,
  getGradeFromPercentage,
  type Assignment,
} from "@/lib/calculators/grade";

type FAQItem = Readonly<{ question: string; answer: string }>;

type AssignmentRow = {
  name: string;
  grade: string;
  weight: string;
};

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

function cleanNumericInput(value: string): string {
  return value.replace(/[^0-9.]/g, "");
}

export default function GradeClient() {
  const [rows, setRows] = useState<AssignmentRow[]>([
    { name: "Homework", grade: "92", weight: "25" },
    { name: "Midterm", grade: "85", weight: "35" },
    { name: "Projects", grade: "94", weight: "40" },
  ]);
  const [finalWeight, setFinalWeight] = useState("30");
  const [targetGrade, setTargetGrade] = useState("90");
  const [showResults, setShowResults] = useState(false);

  const faqs = (GRADE_2026.faqs as readonly FAQItem[] | undefined) ?? [];

  const parsedAssignments = useMemo<Assignment[]>(() => {
    return rows
      .map((row) => ({
        name: row.name.trim() || "Item",
        grade: Number(row.grade),
        weight: Number(row.weight),
      }))
      .filter((row) => Number.isFinite(row.grade) && Number.isFinite(row.weight) && row.weight > 0);
  }, [rows]);

  const totalWeight = parsedAssignments.reduce((sum, row) => sum + row.weight, 0);

  const result = (() => {
    if (!showResults || parsedAssignments.length === 0) return null;

    const weighted = calculateWeightedGrade(parsedAssignments);
    const gradeBand = getGradeFromPercentage(weighted);
    const neededOnFinal = calculateFinalNeeded(weighted, Number(targetGrade) || 0, Number(finalWeight) || 0);

    return {
      weighted,
      gradeBand,
      neededOnFinal,
    };
  })();

  const statusStyle = !result
    ? "text-amber-800 bg-amber-50 border-amber-200"
    : result.weighted >= 90
      ? "text-emerald-800 bg-emerald-50 border-emerald-200"
      : result.weighted >= 70
        ? "text-amber-800 bg-amber-50 border-amber-200"
        : "text-rose-800 bg-rose-50 border-rose-200";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">Grade Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by NCES Academic Reporting + College Board Grading Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Input Parameters</h2>

              <div className="space-y-2">
                {rows.map((row, index) => (
                  <div key={index} className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Item {index + 1}</label>
                    <div className="flex flex-row items-center gap-2">
                      <input
                        type="text"
                        value={row.name}
                        onChange={(e) => {
                          const next = [...rows];
                          next[index] = { ...next[index], name: e.target.value };
                          setRows(next);
                        }}
                        className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                        placeholder="Label"
                      />
                      <input
                        type="text"
                        inputMode="decimal"
                        value={row.grade}
                        onChange={(e) => {
                          const next = [...rows];
                          next[index] = { ...next[index], grade: cleanNumericInput(e.target.value) };
                          setRows(next);
                        }}
                        className="w-24 h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                        placeholder="Score"
                      />
                      <input
                        type="text"
                        inputMode="decimal"
                        value={row.weight}
                        onChange={(e) => {
                          const next = [...rows];
                          next[index] = { ...next[index], weight: cleanNumericInput(e.target.value) };
                          setRows(next);
                        }}
                        className="w-20 h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                        placeholder="Wt"
                      />
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Final Weight (%)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={finalWeight}
                      onChange={(e) => setFinalWeight(cleanNumericInput(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-700">Target Grade (%)</label>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={targetGrade}
                      onChange={(e) => setTargetGrade(cleanNumericInput(e.target.value))}
                      className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowResults(true)}
                  className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm"
                >
                  Calculate Grade
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3">
              <div className="text-xs text-slate-500 uppercase font-bold mb-1">Quick Notes</div>
              <p className="text-sm text-slate-700 leading-relaxed">
                Weighted grade uses item score and weight. Keep total weight near 100% for straightforward interpretation.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculation Result</h2>
              <div className={`p-3 rounded-md border font-bold ${statusStyle}`}>
                <div className="text-[10px] uppercase tracking-wide mb-1">Status</div>
                <div className="text-base font-black">
                  {!result ? "Enter values and click Calculate Grade." : `Current letter grade: ${result.gradeBand.label}`}
                </div>
              </div>

              {result && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
                  <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Weighted Average</div>
                    <div className="text-2xl font-black">{result.weighted.toFixed(2)}%</div>
                  </div>
                  <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Letter / GPA</div>
                    <div className="text-2xl font-black">{result.gradeBand.label} / {result.gradeBand.gpa.toFixed(1)}</div>
                  </div>
                  <div className="p-3 rounded-md border text-rose-800 bg-rose-50 border-rose-200 font-bold">
                    <div className="text-[10px] uppercase tracking-wide">Final Needed</div>
                    <div className="text-2xl font-black">{result.neededOnFinal.toFixed(2)}%</div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Grade Snapshot</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Items</div>
                  <div className="font-bold text-slate-800">{parsedAssignments.length}</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Total Weight</div>
                  <div className="font-bold text-slate-800">{totalWeight.toFixed(1)}%</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Final Weight</div>
                  <div className="font-bold text-slate-800">{(Number(finalWeight) || 0).toFixed(1)}%</div>
                </div>
                <div className="p-2 rounded border border-slate-200 bg-slate-50">
                  <div className="text-xs text-slate-500 uppercase">Target Grade</div>
                  <div className="font-bold text-slate-800">{(Number(targetGrade) || 0).toFixed(1)}%</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Reference Table</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Range</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Letter</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">GPA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">93-100</td><td className="py-1.5 px-2 text-slate-700">A</td><td className="py-1.5 px-2 text-slate-700">4.0</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">87-92</td><td className="py-1.5 px-2 text-slate-700">B+/A-</td><td className="py-1.5 px-2 text-slate-700">3.3-3.7</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">80-86</td><td className="py-1.5 px-2 text-slate-700">B</td><td className="py-1.5 px-2 text-slate-700">2.7-3.0</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">70-79</td><td className="py-1.5 px-2 text-slate-700">C</td><td className="py-1.5 px-2 text-slate-700">1.7-2.3</td></tr>
                    <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-700">0-69</td><td className="py-1.5 px-2 text-slate-700">D/F</td><td className="py-1.5 px-2 text-slate-700">0.0-1.3</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">Grade Planning Guide</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Track weighted performance weekly to avoid end-of-term surprises. Small gains on high-weight assessments often outperform large gains on low-weight tasks.
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
                {GRADE_2026.citations.map((cite) => (
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
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">Grade FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}
