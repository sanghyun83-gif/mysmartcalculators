"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef, useState } from "react";
import { Activity, ShieldCheck, Link2 } from "lucide-react";
import { sendGaEvent } from "@/lib/analytics/ga";
import { CALORIE_2026, calculateCalories, formatNumber } from "@/lib/calculators/calorie";
import { CALORIE_EVIDENCE_MATRIX } from "@/lib/calorie/evidence";

type FAQItem = {
  question: string;
  answer: string;
};

type CalorieClientProps = {
  focusTitle?: string;
  focusSummary?: string;
  initialValues?: {
    age?: number;
    gender?: "male" | "female";
    heightFeet?: number;
    heightInches?: number;
    weightLbs?: number;
    activityMultiplier?: number;
    goalAdjustment?: number;
  };
};

const readinessChecklist = [
  "Use morning body weight average (7-day) instead of single-day readings.",
  "Keep activity multiplier stable for at least 14 days before re-targeting.",
  "Pair calories with protein minimum to protect lean mass in deficit.",
  "Review sleep, stress, and medication factors if progress stalls.",
  "Re-audit targets every 8-12 weeks or every ~10 lbs body-weight change.",
];

const assumptions = [
  "BMR is estimated with Mifflin-St Jeor and not direct calorimetry.",
  "Activity multiplier is user-selected and can over/under-estimate real expenditure.",
  "Calorie target is a planning baseline, not a guaranteed physiological response.",
  "Weight trend is evaluated over weeks, not single-day fluctuations.",
  "Medical conditions and medications are outside model scope.",
];

const edgeTests = [
  {
    caseName: "Aggressive deficit",
    input: "TDEE -1000 kcal/day",
    risk: "Adherence drop and muscle-loss risk increase.",
    action: "Start with moderate deficit and track 2-week adherence before tightening.",
  },
  {
    caseName: "High activity variance",
    input: "Workout pattern changes week to week",
    risk: "TDEE mismatch causes false plateau interpretation.",
    action: "Lock activity class for 14 days, then recalibrate.",
  },
  {
    caseName: "Rapid early scale movement",
    input: "1st week large drop/gain",
    risk: "Water/glycogen noise can mislead strategy changes.",
    action: "Use 7-day average and reassess at week 3-4.",
  },
];

function FAQSection({ faqs }: { faqs: readonly FAQItem[] }) {
  return (
    <div className="max-w-3xl mx-auto px-4 space-y-2">
      {faqs.map((faq, i) => (
        <details key={i} className="group bg-white border border-slate-200 rounded-md hover:border-slate-300 transition-all cursor-pointer">
          <summary className="p-3 list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
            <h3 className="text-sm font-semibold text-slate-800 flex items-center gap-3">
              <span className="text-xs text-slate-400 font-mono">{(i + 1).toString().padStart(2, "0")}</span>
              {faq.question}
            </h3>
            <span className="text-slate-400 group-open:rotate-180 transition-transform duration-200">?</span>
          </summary>
          <div className="px-3 pb-3 text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-2">{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}

export default function CalorieClient({ focusTitle, focusSummary, initialValues }: CalorieClientProps) {
  const pathname = usePathname();
  const routePath = pathname || "/calorie";
  const startedRef = useRef(false);

  const [age, setAge] = useState(String(initialValues?.age ?? 30));
  const [gender, setGender] = useState<"male" | "female">(initialValues?.gender ?? "male");
  const [heightFeet, setHeightFeet] = useState(initialValues?.heightFeet ?? 5);
  const [heightInches, setHeightInches] = useState(initialValues?.heightInches ?? 10);
  const [weightLbs, setWeightLbs] = useState(String(initialValues?.weightLbs ?? 175));
  const [activityMultiplier, setActivityMultiplier] = useState(initialValues?.activityMultiplier ?? 1.2);
  const [goalAdjustment, setGoalAdjustment] = useState(initialValues?.goalAdjustment ?? 0);

  const result = (() => {
    const parsedAge = parseInt(age, 10) || 0;
    const parsedWeight = parseFloat(weightLbs) || 0;
    if (parsedAge <= 0 || parsedWeight <= 0) {
      return calculateCalories(30, "male", 5, 10, 175, 1.2, 0);
    }
    return calculateCalories(parsedAge, gender, heightFeet, heightInches, parsedWeight, activityMultiplier, goalAdjustment);
  })();

  const lifecycleRows = useMemo(() => {
    const isDeficit = result.goalCalories < result.tdee;
    return [
      {
        stage: "Baseline Intake Capture",
        window: "Week 0",
        action: "Record average intake, body weight trend, and routine activity profile.",
      },
      {
        stage: "Execution Window",
        window: "Week 1-2",
        action: isDeficit
          ? "Apply calorie deficit and protein floor. Hold multiplier fixed for signal clarity."
          : "Apply maintenance/surplus target with recovery and training consistency.",
      },
      {
        stage: "Adaptation Check",
        window: "Week 3-4",
        action: "Audit 7-day trend and only adjust target if trend misses objective.",
      },
      {
        stage: "Recalibration",
        window: "Week 8-12",
        action: "Recompute BMR/TDEE after body-weight change and reset next-cycle plan.",
      },
    ];
  }, [result.goalCalories, result.tdee]);

  const sensitivityRows = useMemo(() => {
    const parsedAge = parseInt(age, 10) || 30;
    const parsedWeight = parseFloat(weightLbs) || 175;
    const scenarios = [
      { label: "Conservative", activity: Math.max(1.2, activityMultiplier - 0.175), adjustment: goalAdjustment - 100 },
      { label: "Base", activity: activityMultiplier, adjustment: goalAdjustment },
      { label: "Optimized", activity: Math.min(1.9, activityMultiplier + 0.175), adjustment: goalAdjustment + 100 },
    ];

    return scenarios.map((scenario) => {
      const simulation = calculateCalories(
        parsedAge,
        gender,
        heightFeet,
        heightInches,
        parsedWeight,
        scenario.activity,
        scenario.adjustment,
      );
      return {
        label: scenario.label,
        tdee: simulation.tdee,
        target: simulation.goalCalories,
        outcome: simulation.goal,
      };
    });
  }, [age, weightLbs, gender, heightFeet, heightInches, activityMultiplier, goalAdjustment]);

  function trackStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    sendGaEvent("calculator_start", { calculator_id: "calorie", route: routePath });
  }

  function buildPermalink() {
    const params = new URLSearchParams({
      age,
      gender,
      ft: String(heightFeet),
      inch: String(heightInches),
      lbs: String(weightLbs),
      activity: String(activityMultiplier),
      goal: String(goalAdjustment),
      run: "1",
    });
    return `${window.location.origin}${routePath}?${params.toString()}`;
  }

  function handleCalculate() {
    trackStart();
    sendGaEvent("calculator_complete", {
      calculator_id: "calorie",
      route: routePath,
      tdee: result.tdee,
      goal_calories: result.goalCalories,
      activity_multiplier: activityMultiplier,
      goal_adjustment: goalAdjustment,
    });
  }

  function copyPermalink() {
    trackStart();
    void navigator.clipboard.writeText(buildPermalink());
    sendGaEvent("cta_click", { calculator_id: "calorie", route: routePath, cta: "copy_permalink" });
  }

  function exportCsv() {
    trackStart();
    const rows = [
      ["Metric", "Value"],
      ["Age", age],
      ["Gender", gender],
      ["Height (ft)", String(heightFeet)],
      ["Height (in)", String(heightInches)],
      ["Weight (lbs)", weightLbs],
      ["Activity Multiplier", String(activityMultiplier)],
      ["Goal Adjustment", String(goalAdjustment)],
      ["BMR", String(result.bmr)],
      ["TDEE", String(result.tdee)],
      ["Goal Calories", String(result.goalCalories)],
      ["Goal Label", result.goal],
    ];
    const csv = rows.map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "calorie-planning-audit.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    sendGaEvent("cta_click", { calculator_id: "calorie", route: routePath, cta: "export_csv" });
  }

  function exportPdf() {
    trackStart();
    const popup = window.open("", "_blank", "width=900,height=700");
    if (!popup) return;
    popup.document.write(
      `<html><head><title>Calorie Planning Audit</title></head><body><h1>Calorie Planning Audit</h1><p>Goal Calories: ${formatNumber(result.goalCalories)} kcal</p><p>BMR: ${formatNumber(result.bmr)} kcal</p><p>TDEE: ${formatNumber(result.tdee)} kcal</p><p>Goal Mode: ${result.goal}</p><p>Permalink: ${buildPermalink()}</p></body></html>`,
    );
    popup.document.close();
    popup.focus();
    popup.print();
    sendGaEvent("cta_click", { calculator_id: "calorie", route: routePath, cta: "export_pdf" });
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-emerald-600" />
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Calorie <span className="text-emerald-600">Calculator</span>
            </h1>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono uppercase tracking-wider">
            <ShieldCheck size={14} className="text-emerald-600" />
            Verified by USDA, CDC, NIH and WHO references
          </div>
          {focusTitle ? (
            <div className="mt-3 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
              <p className="font-semibold">{focusTitle}</p>
              {focusSummary ? <p className="text-emerald-800">{focusSummary}</p> : null}
            </div>
          ) : null}
        </div>
      </header>

      <section className="py-4 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-4">Input Parameters</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 ml-0.5">Height</label>
                  <div className="flex gap-2">
                    <input type="number" value={heightFeet} onFocus={trackStart} onChange={(e) => setHeightFeet(parseInt(e.target.value, 10) || 0)} className="w-20 h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold" />
                    <input type="number" value={heightInches} onFocus={trackStart} onChange={(e) => setHeightInches(parseInt(e.target.value, 10) || 0)} className="w-20 h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 ml-0.5">Weight (lbs)</label>
                  <input type="text" inputMode="decimal" value={weightLbs} onFocus={trackStart} onChange={(e) => setWeightLbs(e.target.value.replace(/[^0-9.]/g, ""))} className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 ml-0.5">Age</label>
                  <input type="text" inputMode="numeric" value={age} onFocus={trackStart} onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))} className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 ml-0.5">Gender</label>
                  <select value={gender} onFocus={trackStart} onChange={(e) => setGender(e.target.value as "male" | "female")} className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-sm font-bold">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 ml-0.5">Activity Level</label>
                <select value={activityMultiplier} onFocus={trackStart} onChange={(e) => setActivityMultiplier(parseFloat(e.target.value))} className="w-full h-9 px-2 bg-white border border-slate-300 rounded-md text-xs font-bold">
                  {CALORIE_2026.activityLevels.map((level) => (
                    <option key={level.multiplier} value={level.multiplier}>
                      {level.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 space-y-2">
                <label className="text-xs font-semibold text-slate-700 ml-0.5 uppercase tracking-tight">Goal Adjustment</label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(CALORIE_2026.goals).map(([key, val]) => (
                    <button key={key} onClick={() => { trackStart(); setGoalAdjustment(val); }} className={`py-2 px-1 rounded-md border text-[9px] font-bold uppercase ${goalAdjustment === val ? "bg-emerald-600 border-emerald-700 text-white" : "bg-slate-50 border-slate-200 text-slate-500"}`}>
                      {key.replace("_", " ")}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleCalculate} className="w-full h-10 mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm uppercase tracking-wide">
                Calculate Calories
              </button>

              <button onClick={copyPermalink} className="w-full h-10 mt-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-md text-sm uppercase tracking-wide flex items-center justify-center gap-2">
                <Link2 className="w-4 h-4" />
                Copy Link
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button onClick={exportCsv} className="h-10 mt-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-md text-sm uppercase tracking-wide">
                  Export CSV
                </button>
                <button onClick={exportPdf} className="h-10 mt-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold rounded-md text-sm uppercase tracking-wide">
                  Export PDF
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-slate-200 shadow-md rounded-md overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 p-4">
                <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Calorie Result</h2>
              </div>
              <div className="p-5 space-y-4">
                <div className="text-6xl font-black text-slate-900 tracking-tighter leading-none">{formatNumber(result.goalCalories)}</div>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-slate-50 border border-slate-200 rounded-md p-3"><p className="text-xs uppercase text-slate-500">BMR</p><p className="font-black">{formatNumber(result.bmr)} kcal</p></div>
                  <div className="bg-slate-50 border border-slate-200 rounded-md p-3"><p className="text-xs uppercase text-slate-500">TDEE</p><p className="font-black">{formatNumber(result.tdee)} kcal</p></div>
                  <div className="bg-slate-50 border border-slate-200 rounded-md p-3"><p className="text-xs uppercase text-slate-500">Goal</p><p className="font-black">{result.goal}</p></div>
                </div>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  {Object.values(result.macros).map((macro) => (
                    <div key={macro.label} className="bg-slate-50 border border-slate-200 rounded-md p-3">
                      <p className="text-xs uppercase text-slate-500 mb-1">{macro.label}</p>
                      <p>P {macro.protein}g / C {macro.carbs}g / F {macro.fat}g</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <section className="bg-white border border-slate-200 rounded-md p-4 space-y-3">
              <h2 className="text-base font-bold">Decision Guide</h2>
              <p className="text-sm text-slate-700">
                Start from maintenance ({formatNumber(result.tdee)} kcal), then adjust by goal delta. Hold the plan for 2 weeks,
                evaluate 7-day average weight trend, and only then recalibrate calories.
              </p>
            </section>

            <section className="bg-white border border-slate-200 rounded-md p-4">
              <h2 className="text-base font-bold mb-2">Scenario Pack</h2>
              <div className="grid md:grid-cols-3 gap-2 text-sm">
                <div className="rounded border border-slate-200 bg-slate-50 p-3"><p className="font-semibold">Fat-loss phase</p><p className="text-slate-600">Moderate deficit with high-protein compliance checks.</p></div>
                <div className="rounded border border-slate-200 bg-slate-50 p-3"><p className="font-semibold">Maintenance reset</p><p className="text-slate-600">Stabilize intake to diagnose adaptation vs adherence issues.</p></div>
                <div className="rounded border border-slate-200 bg-slate-50 p-3"><p className="font-semibold">Lean gain cycle</p><p className="text-slate-600">Controlled surplus with performance and waist monitoring.</p></div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <article className="py-12 max-w-5xl mx-auto px-6 space-y-6">
        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Assumptions & Limits</h2>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            {assumptions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Edge / Stress Tests</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left py-1.5 px-2 text-xs">Case</th>
                <th className="text-left py-1.5 px-2 text-xs">Input</th>
                <th className="text-left py-1.5 px-2 text-xs">Risk</th>
                <th className="text-left py-1.5 px-2 text-xs">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {edgeTests.map((row) => (
                <tr key={row.caseName} className="even:bg-slate-50">
                  <td className="py-1.5 px-2 font-semibold">{row.caseName}</td>
                  <td className="py-1.5 px-2">{row.input}</td>
                  <td className="py-1.5 px-2">{row.risk}</td>
                  <td className="py-1.5 px-2">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Official Sources & Review Log</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left py-1.5 px-2 text-xs">Authority</th>
                <th className="text-left py-1.5 px-2 text-xs">Topic</th>
                <th className="text-left py-1.5 px-2 text-xs">Last Verified</th>
                <th className="text-left py-1.5 px-2 text-xs">What Changed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {CALORIE_EVIDENCE_MATRIX.map((row) => (
                <tr key={row.topic} className="even:bg-slate-50">
                  <td className="py-1.5 px-2 font-semibold">{row.authority}</td>
                  <td className="py-1.5 px-2"><a href={row.officialUrl} target="_blank" rel="noopener noreferrer" className="underline">{row.topic}</a></td>
                  <td className="py-1.5 px-2">{row.lastVerified}</td>
                  <td className="py-1.5 px-2">{row.whatChanged}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Lifecycle Simulator (Calorie Planning Cycle)</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left py-1.5 px-2 text-xs">Stage</th>
                <th className="text-left py-1.5 px-2 text-xs">Window</th>
                <th className="text-left py-1.5 px-2 text-xs">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {lifecycleRows.map((row) => (
                <tr key={row.stage} className="even:bg-slate-50">
                  <td className="py-1.5 px-2 font-semibold">{row.stage}</td>
                  <td className="py-1.5 px-2">{row.window}</td>
                  <td className="py-1.5 px-2">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Sensitivity Lab (TDEE/Target Range)</h2>
          <table className="w-full text-sm border-collapse">
            <thead className="bg-slate-100 border-b border-slate-300">
              <tr>
                <th className="text-left py-1.5 px-2 text-xs">Profile</th>
                <th className="text-left py-1.5 px-2 text-xs">TDEE</th>
                <th className="text-left py-1.5 px-2 text-xs">Target Calories</th>
                <th className="text-left py-1.5 px-2 text-xs">Outcome</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {sensitivityRows.map((row) => (
                <tr key={row.label} className="even:bg-slate-50">
                  <td className="py-1.5 px-2 font-semibold">{row.label}</td>
                  <td className="py-1.5 px-2">{formatNumber(row.tdee)} kcal</td>
                  <td className="py-1.5 px-2">{formatNumber(row.target)} kcal</td>
                  <td className="py-1.5 px-2">{row.outcome}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4 space-y-2">
          <h2 className="text-base font-bold">Who / How / Why</h2>
          <p className="text-sm text-slate-700"><strong>Who:</strong> Users planning fat-loss, maintenance, or lean-gain calorie targets.</p>
          <p className="text-sm text-slate-700"><strong>How:</strong> Uses Mifflin-St Jeor BMR + activity multiplier + goal adjustment with macro blueprints.</p>
          <p className="text-sm text-slate-700"><strong>Why:</strong> Converts raw energy math into practical weekly decision actions.</p>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Health Readiness Pack</h2>
          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
            {readinessChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4">
          <h2 className="text-base font-bold mb-2">Related Core20 Tools</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
            <Link href="/bmi" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">BMI Calculator</Link>
            <Link href="/body-fat" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Body Fat Calculator</Link>
            <Link href="/age" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Age Calculator</Link>
            <Link href="/time-calculator" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Time Calculator</Link>
            <Link href="/conversion" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Unit Conversion</Link>
            <Link href="/ovulation" className="rounded border border-slate-200 px-3 py-2 hover:bg-slate-50">Ovulation Calculator</Link>
          </div>
        </section>

        <section className="bg-white border border-slate-200 rounded-md p-4 space-y-1">
          <h2 className="text-base font-bold">Sources & Review</h2>
          <p className="text-sm text-slate-700">Reviewer: Nutrition Methods Team (MySmartCalculators)</p>
          <p className="text-sm text-slate-700">Last reviewed: 2026-03-25</p>
        </section>

        <section className="bg-amber-50 border border-amber-200 rounded-md p-4">
          <h2 className="text-base font-bold text-amber-900 mb-1">Disclaimer</h2>
          <p className="text-sm text-amber-900">
            This calculator is for educational planning only and not medical advice. Individual metabolic response varies.
            Consult a licensed clinician for diagnosis or treatment decisions.
          </p>
        </section>
      </article>

      <section className="bg-slate-50 pb-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-lg font-bold text-slate-900 pt-12 mb-8 text-center uppercase tracking-tight">Calorie FAQ</h3>
          <FAQSection faqs={CALORIE_2026.faqs as readonly FAQItem[]} />
        </div>
      </section>
    </main>
  );
}
