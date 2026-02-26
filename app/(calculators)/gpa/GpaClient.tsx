"use client";

import { useState } from "react";
import { GraduationCap, ShieldCheck } from "lucide-react";
import {
  CALCULATORS,
  GRADE_SCALE_4_0,
  WEIGHT_BONUS,
  calculateGPA,
  CourseData,
} from "@/lib/calculators/gpa";

type FAQItem = { question: string; answer: string };

function FAQSection({ faqs }: { faqs: FAQItem[] }) {
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

const initialCourses: CourseData[] = [
  { grade: "A", credits: 3, type: "regular" },
  { grade: "B+", credits: 4, type: "honors" },
  { grade: "A-", credits: 3, type: "ap/ib" },
  { grade: "B", credits: 2, type: "regular" },
];

export default function GpaClient() {
  const [courses, setCourses] = useState<CourseData[]>(initialCourses);
  const faqs = (CALCULATORS[0]?.faqs as FAQItem[] | undefined) ?? [];

  const result = (() => calculateGPA(courses))();

  const updateCourse = (index: number, patch: Partial<CourseData>) => {
    setCourses((prev) => prev.map((course, i) => (i === index ? { ...course, ...patch } : course)));
  };

  const addCourse = () => {
    setCourses((prev) => [...prev, { grade: "A", credits: 3, type: "regular" }]);
  };

  const removeCourse = (index: number) => {
    setCourses((prev) => prev.filter((_, i) => i !== index));
  };

  const gpaDelta = result.weighted - result.unweighted;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold text-slate-900">GPA Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Verified by NCES + College Board Academic Standards
        </div>
      </header>

      <section id="calculator" className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Course Inputs</h2>
              <div className="space-y-2">
                {courses.map((course, index) => (
                  <div key={index} className="grid grid-cols-12 gap-2 items-center">
                    <select
                      value={course.grade}
                      onChange={(e) => updateCourse(index, { grade: e.target.value as CourseData["grade"] })}
                      className="col-span-4 h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      {Object.keys(GRADE_SCALE_4_0).map((grade) => (
                        <option key={grade} value={grade}>
                          {grade}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      inputMode="decimal"
                      min={0}
                      max={6}
                      step={0.5}
                      value={course.credits}
                      onChange={(e) => updateCourse(index, { credits: Math.max(0, Number(e.target.value) || 0) })}
                      className="col-span-3 h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    />
                    <select
                      value={course.type}
                      onChange={(e) => updateCourse(index, { type: e.target.value as CourseData["type"] })}
                      className="col-span-4 h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                    >
                      {Object.keys(WEIGHT_BONUS).map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => removeCourse(index)}
                      className="col-span-1 h-9 bg-slate-100 hover:bg-slate-200 text-slate-500 text-sm rounded-md border border-slate-200"
                      aria-label={`Remove course ${index + 1}`}
                    >
                      -
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex flex-row items-center gap-2 mt-3">
                <button type="button" onClick={addCourse} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm">
                  Add Course
                </button>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-3 text-sm text-slate-700">
              GPA formula: `sum(grade points * credits) / sum(credits)`
            </div>
          </div>

          <div className="lg:col-span-7 lg:sticky lg:top-8 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">GPA Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div className="p-3 rounded-md border text-emerald-800 bg-emerald-50 border-emerald-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide">Unweighted GPA</div>
                  <div className="text-3xl font-black">{result.unweighted.toFixed(2)}</div>
                </div>
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">
                  <div className="text-[10px] uppercase tracking-wide">Weighted GPA</div>
                  <div className="text-3xl font-black">{result.weighted.toFixed(2)}</div>
                </div>
                <div
                  className={`p-3 rounded-md border font-bold ${
                    gpaDelta >= 0
                      ? "text-emerald-800 bg-emerald-50 border-emerald-200"
                      : "text-rose-800 bg-rose-50 border-rose-200"
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wide">Weight Delta</div>
                  <div className="text-3xl font-black">{gpaDelta >= 0 ? "+" : ""}{gpaDelta.toFixed(2)}</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Grade Point Scale</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-100 border-b border-slate-300">
                    <tr>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Grade</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">4.0 Scale</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">Honors</th>
                      <th className="text-left py-1.5 px-2 text-xs text-slate-700">AP/IB</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {["A", "B+", "B", "C+", "C", "D", "F"].map((grade) => {
                      const base = GRADE_SCALE_4_0[grade as keyof typeof GRADE_SCALE_4_0];
                      return (
                        <tr key={grade} className="even:bg-slate-50">
                          <td className="py-1.5 px-2 text-slate-700">{grade}</td>
                          <td className="py-1.5 px-2 text-slate-700">{base.toFixed(1)}</td>
                          <td className="py-1.5 px-2 text-slate-700">{Math.min(5, base + 0.5).toFixed(1)}</td>
                          <td className="py-1.5 px-2 text-slate-700">{Math.min(5, base + 1).toFixed(1)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-10 max-w-5xl mx-auto px-6 space-y-8">
        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-base font-bold text-slate-900 mb-2">GPA Planning Notes</h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Colleges typically review both weighted and unweighted GPA. Weighted GPA reflects course rigor, while
            unweighted GPA is the baseline academic consistency metric.
          </p>
        </section>
      </article>

      <section className="bg-slate-50 pb-14 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-10 mb-6 text-center uppercase tracking-tight">GPA FAQ</h3>
          <FAQSection faqs={faqs} />
        </div>
      </section>
    </main>
  );
}

