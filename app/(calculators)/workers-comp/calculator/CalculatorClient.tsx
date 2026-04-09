"use client";

import { useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, AlertCircle } from "lucide-react";
import {
  SITE,
  STATE_WC_DATA,
  calculateWorkersComp,
  formatCurrency,
  parseFormattedNumber,
  getStatesList,
  getBodyPartsList,
  WorkersCompResult,
} from "@/lib/calculators/workers-comp";

export default function CalculatorClient() {
  const [state, setState] = useState("CA");
  const [weeklyWage, setWeeklyWage] = useState("");
  const [bodyPart, setBodyPart] = useState("back");
  const [result, setResult] = useState<WorkersCompResult | null>(null);
  const [linkCopyState, setLinkCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const states = getStatesList();
  const bodyParts = getBodyPartsList();
  const selectedState = STATE_WC_DATA[state];

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, "");
      if (raw === "") {
        setter("");
        return;
      }
      setter(parseInt(raw, 10).toLocaleString("en-US"));
    };

  const handleCalculate = () => {
    const aww = parseFormattedNumber(weeklyWage) || 1000;
    setResult(calculateWorkersComp(state, aww, bodyPart));
  };

  const buildPermalink = () => {
    const params = new URLSearchParams({
      s: state,
      aww: String(parseFormattedNumber(weeklyWage) || 0),
      body: bodyPart,
    });
    return `${window.location.origin}/workers-comp/calculator?${params.toString()}`;
  };

  const copyPermalink = async () => {
    try {
      await navigator.clipboard.writeText(buildPermalink());
      setLinkCopyState("copied");
      setTimeout(() => setLinkCopyState("idle"), 1500);
    } catch {
      setLinkCopyState("failed");
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Calculator className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold">Workers Comp Weekly Benefit Calculator</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          Calculator route only: AWW × state rate × cap logic ({SITE.year})
        </div>
      </header>

      <section className="py-2 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Calculator Inputs</h2>
              <div className="space-y-3">
                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm">
                  {states.map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.name} (Max {formatCurrency(s.maxBenefit)}/wk)
                    </option>
                  ))}
                </select>
                <p className="text-xs text-slate-500">{selectedState.name}: {Math.round(selectedState.ttdRate * 100)}% replacement rate, {selectedState.waitingPeriod} day waiting period.</p>

                <input
                  type="text"
                  inputMode="decimal"
                  value={weeklyWage}
                  onChange={handleInputChange(setWeeklyWage)}
                  placeholder="Average weekly wage (e.g. 1,200)"
                  className="w-full h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm"
                />

                <select value={bodyPart} onChange={(e) => setBodyPart(e.target.value)} className="h-9 px-2 bg-white border border-slate-300 text-sm text-slate-900 rounded-md shadow-sm">
                  {bodyParts.map((part) => (
                    <option key={part.id} value={part.id}>{part.name}</option>
                  ))}
                </select>

                <button onClick={handleCalculate} className="w-full h-10 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-md text-sm">
                  Calculate Workers Comp
                </button>
                <button onClick={() => { void copyPermalink(); }} className="w-full h-9 rounded-md border border-slate-300 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50">
                  {linkCopyState === "copied" ? "Link Copied" : linkCopyState === "failed" ? "Link Failed" : "Copy Permalink"}
                </button>
              </div>
            </div>

            <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-2">How Calculated (3-Step)</h3>
              <ol className="text-sm text-slate-700 list-decimal pl-5 space-y-1">
                <li>Base weekly benefit = Average Weekly Wage × state TTD replacement rate.</li>
                <li>Apply state minimum/maximum weekly cap for selected jurisdiction.</li>
                <li>Estimate settlement range from weekly benefit × body-part schedule factors.</li>
              </ol>
            </section>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-tight mb-3">Result</h2>
              {!result ? (
                <div className="p-3 rounded-md border text-amber-800 bg-amber-50 border-amber-200 font-bold">Enter values and click Calculate Workers Comp.</div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50">
                      <div className="text-[10px] uppercase text-emerald-700">Weekly Benefit</div>
                      <div className="text-2xl font-black text-emerald-900">{formatCurrency(result.weeklyBenefit)}</div>
                    </div>
                    <div className="p-3 rounded-md border border-slate-200 bg-slate-100">
                      <div className="text-[10px] uppercase text-slate-600">Gross Settlement</div>
                      <div className="text-lg font-black text-slate-900">{formatCurrency(result.settlementLow)} - {formatCurrency(result.settlementHigh)}</div>
                    </div>
                    <div className="p-3 rounded-md border border-blue-200 bg-blue-50">
                      <div className="text-[10px] uppercase text-blue-700">Body Part</div>
                      <div className="text-lg font-black text-blue-900">{result.bodyPartName}</div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-md border border-slate-200 overflow-hidden">
                    <table className="w-full text-sm border-collapse">
                      <tbody className="divide-y divide-slate-200">
                        <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-600">State</td><td className="py-1.5 px-2 font-semibold text-slate-800">{result.stateName}</td></tr>
                        <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-600">Average Weekly Wage</td><td className="py-1.5 px-2 font-semibold text-slate-800">{formatCurrency(result.averageWeeklyWage)}</td></tr>
                        <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-600">TTD Rate</td><td className="py-1.5 px-2 font-semibold text-slate-800">{Math.round(STATE_WC_DATA[result.state].ttdRate * 100)}%</td></tr>
                        <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-600">State Maximum</td><td className="py-1.5 px-2 font-semibold text-slate-800">{formatCurrency(result.stateMax)}/wk</td></tr>
                        <tr className="even:bg-slate-50"><td className="py-1.5 px-2 text-slate-600">Waiting Period</td><td className="py-1.5 px-2 font-semibold text-slate-800">{result.waitingPeriod} days</td></tr>
                      </tbody>
                    </table>
                  </div>

                  {result.stateMaxApplied ? (
                    <p className="mt-3 text-xs text-amber-700 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />State cap applied at current maximum weekly benefit.</p>
                  ) : null}
                </>
              )}
            </div>

            <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
              <h3 className="text-sm font-bold text-slate-900 mb-2">Disclaimer</h3>
              <p className="text-sm text-slate-700">This is an educational estimate, not legal advice. Actual payouts depend on claim facts, medical records, state statute, and insurer decision.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-sm font-bold text-slate-900 mb-2">Related Paths</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            <Link href="/workers-comp" className="rounded-md border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700 hover:bg-slate-50">Workers Comp Hub</Link>
            <Link href="/workers-comp/state-rates" className="rounded-md border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700 hover:bg-slate-50">State Rates Table</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
