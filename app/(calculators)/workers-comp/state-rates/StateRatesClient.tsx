"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, ShieldCheck, Search, ArrowUpDown } from "lucide-react";
import { SITE, STATE_WC_DATA, formatCurrency } from "@/lib/calculators/workers-comp";

export default function StateRatesClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "max" | "min">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const statesArray = useMemo(
    () =>
      Object.entries(STATE_WC_DATA).map(([code, data]) => ({
        code,
        ...data,
      })),
    [],
  );

  const filteredStates = statesArray
    .filter(
      (state) =>
        state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        state.code.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "name") comparison = a.name.localeCompare(b.name);
      if (sortBy === "max") comparison = a.maxWeeklyBenefit - b.maxWeeklyBenefit;
      if (sortBy === "min") comparison = a.minWeeklyBenefit - b.minWeeklyBenefit;
      return sortOrder === "asc" ? comparison : -comparison;
    });

  const handleSort = (column: "name" | "max" | "min") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      return;
    }
    setSortBy(column);
    setSortOrder(column === "name" ? "asc" : "desc");
  };

  const maxState = statesArray.reduce((max, s) => (s.maxWeeklyBenefit > max.maxWeeklyBenefit ? s : max));
  const minState = statesArray.reduce((min, s) => (s.maxWeeklyBenefit < min.maxWeeklyBenefit ? s : min));
  const avgMax = Math.round(statesArray.reduce((sum, s) => sum + s.maxWeeklyBenefit, 0) / statesArray.length);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="pt-6 pb-2 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-1">
          <Calculator className="w-4 h-4 text-blue-600" />
          <h1 className="text-2xl font-bold">Workers Comp State Rates</h1>
        </div>
        <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono mb-4 uppercase tracking-wider">
          <ShieldCheck size={14} className="text-blue-600" />
          {SITE.year} maximum/minimum weekly benefits (50 states + DC)
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pb-2">
        <div className="rounded-md border border-slate-200 bg-white p-3">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Quick Access</p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            <Link href="/workers-comp" className="rounded-md border border-slate-200 bg-white px-3 py-2 font-semibold text-slate-700 hover:bg-slate-50">Back to Workers Comp Hub</Link>
            <Link href="/workers-comp/calculator" className="rounded-md border border-blue-200 bg-blue-50 px-3 py-2 font-semibold text-blue-700 hover:bg-blue-100">Open Calculator</Link>
          </div>
        </div>
      </section>

      <section className="py-2 max-w-7xl mx-auto px-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="p-3 rounded-md border border-emerald-200 bg-emerald-50">
            <p className="text-[10px] uppercase text-emerald-700">Highest Maximum</p>
            <p className="text-xl font-black text-emerald-900">{formatCurrency(maxState.maxWeeklyBenefit)}</p>
            <p className="text-xs text-emerald-700">{maxState.name}</p>
          </div>
          <div className="p-3 rounded-md border border-slate-200 bg-slate-100">
            <p className="text-[10px] uppercase text-slate-600">Average Maximum</p>
            <p className="text-xl font-black text-slate-900">{formatCurrency(avgMax)}</p>
            <p className="text-xs text-slate-600">All Jurisdictions</p>
          </div>
          <div className="p-3 rounded-md border border-rose-200 bg-rose-50">
            <p className="text-[10px] uppercase text-rose-700">Lowest Maximum</p>
            <p className="text-xl font-black text-rose-900">{formatCurrency(minState.maxWeeklyBenefit)}</p>
            <p className="text-xs text-rose-700">{minState.name}</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 h-9 bg-white border border-slate-300 rounded-md text-sm text-slate-900"
            />
          </div>

          <div className="overflow-x-auto rounded-md border border-slate-200">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-slate-100 border-b border-slate-300">
                <tr>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700 cursor-pointer" onClick={() => handleSort("name")}>
                    <span className="inline-flex items-center gap-1">State <ArrowUpDown className="w-3 h-3" /></span>
                  </th>
                  <th className="text-right py-1.5 px-2 text-xs text-slate-700 cursor-pointer" onClick={() => handleSort("max")}>
                    <span className="inline-flex items-center gap-1">Max Weekly <ArrowUpDown className="w-3 h-3" /></span>
                  </th>
                  <th className="text-right py-1.5 px-2 text-xs text-slate-700 cursor-pointer" onClick={() => handleSort("min")}>
                    <span className="inline-flex items-center gap-1">Min Weekly <ArrowUpDown className="w-3 h-3" /></span>
                  </th>
                  <th className="text-center py-1.5 px-2 text-xs text-slate-700">TTD</th>
                  <th className="text-center py-1.5 px-2 text-xs text-slate-700">Waiting</th>
                  <th className="text-left py-1.5 px-2 text-xs text-slate-700 hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredStates.map((state) => (
                  <tr key={state.code} className="even:bg-slate-50">
                    <td className="py-1.5 px-2"><span className="font-semibold text-slate-800">{state.name}</span> <span className="text-slate-400 text-xs">({state.code})</span></td>
                    <td className="py-1.5 px-2 text-right font-semibold text-slate-800">{formatCurrency(state.maxWeeklyBenefit)}</td>
                    <td className="py-1.5 px-2 text-right text-slate-700">{formatCurrency(state.minWeeklyBenefit)}</td>
                    <td className="py-1.5 px-2 text-center text-slate-700">{Math.round(state.ttdRate * 100)}%</td>
                    <td className="py-1.5 px-2 text-center text-slate-700">{state.waitingPeriod}d</td>
                    <td className="py-1.5 px-2 text-slate-600 hidden md:table-cell">{state.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <section className="bg-white border border-slate-200 shadow-sm rounded-md p-4">
          <h2 className="text-sm font-bold text-slate-900 mb-2">Rate Note</h2>
          <p className="text-sm text-slate-700">Rates shown are {SITE.year} estimates based on public sources. Final benefit depends on official state rules and claim facts.</p>
        </section>
      </section>
    </main>
  );
}
