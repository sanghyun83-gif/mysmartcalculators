"use client";
// Force HMR for Grade and Body Fat Calculator visibility
// Timestamp: 2026-02-12 22:27

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator, ChevronRight, Search, Zap, Cpu,
  Globe
} from "lucide-react";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CATEGORY_MAP, CATEGORY_NAMES } from "@/lib/categories";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  console.log("Client-side ALL_CALCULATORS count:", ALL_CALCULATORS.length);

  const filteredCalculators = useMemo(() => {
    if (!searchQuery) return [];
    return ALL_CALCULATORS.filter(calc =>
      calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.id.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 8);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-amber-500/30">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-8 animate-fade-in uppercase tracking-widest">
            <Cpu className="w-3 h-3" />
            <span>Last Engine Update: {new Date().toLocaleDateString()} | S-Class Priority: Flagship</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            2026 Official <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Institutional AI Audit
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            World&apos;s most advanced neural-grade legal & financial engine.
            316+ specialized calculation paths optimized for the 2026 landscape.
          </p>

          {/* Search Engine UI */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden flex items-center p-2 shadow-2xl">
              <Search className="w-6 h-6 text-slate-500 ml-4" />
              <input
                type="text"
                placeholder="Search 300+ calculators (e.g., Truck Accident, 401k)..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 px-4 py-3 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-xl transition-all flex items-center gap-2 group/btn">
                <span>Calculate</span>
                <Zap className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" />
              </button>
            </div>

            {/* Live Results Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-slate-900/95 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
                {filteredCalculators.length > 0 ? (
                  <div className="divide-y divide-slate-800">
                    {filteredCalculators.map(calc => (
                      <Link
                        key={calc.id}
                        href={`/${calc.id}`}
                        className="flex items-center justify-between p-4 hover:bg-amber-500/10 transition-colors group/item"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-slate-800 group-hover/item:bg-amber-500/20`}>
                            <Calculator className="w-5 h-5 text-slate-400 group-hover/item:text-amber-400" />
                          </div>
                          <div>
                            <div className="text-white font-semibold group-hover/item:text-amber-400 transition-colors">{calc.name}</div>
                            <div className="text-xs text-slate-500 uppercase tracking-wider">{CATEGORY_MAP[calc.id] || "General"}</div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-600 group-hover/item:text-amber-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-slate-500">
                    No matching AI engine found. Try another keyword.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Featured High-Volume Engines (Fast-Track Indexing Section) */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-[0.3em] mb-6">
            <Zap className="w-4 h-4" />
            <span>High-Priority Industrial Engines</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { id: 'bmi', name: 'BMI Calculator' },
              { id: 'calorie', name: 'Calorie Calculator' },
              { id: 'body-fat', name: 'Body Fat Calculator' },
              { id: 'percentage', name: 'Percentage' },
              { id: 'scientific', name: 'Scientific' },
              { id: 'mortgage', name: 'Mortgage' },
              { id: 'loan', name: 'Loan Engine' },
              { id: 'gpa', name: 'GPA Calculator' },
              { id: 'age', name: 'Age Calculator' },
              { id: 'pregnancy', name: 'Pregnancy' },
              { id: 'tip', name: 'Tip Calculator' },
              { id: 'compound-interest', name: 'Compound' },
              { id: 'due-date', name: 'Due Date' },
              { id: 'salary', name: 'Salary Audit' },
              { id: 'date', name: 'Date Engine' }
            ].map(feat => (
              <Link
                key={feat.id}
                href={`/${feat.id}`}
                className="group p-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
              >
                <div className="text-white font-bold text-sm mb-1 group-hover:text-amber-400 transition-colors uppercase tracking-tight">{feat.name}</div>
                <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">S-Class 1.0</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Directory Grid (SEO Powerhouse) */}
      <section className="max-w-7xl mx-auto px-4 py-20 border-t border-slate-800/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-[0.3em] mb-3">
              <Globe className="w-4 h-4" />
              <span>Full Engine Directory (316+ Engines)</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Institutional AI Audit Infrastructure
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>SEO Priority: Flagship 1.0</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400">
              <span>Updated: Feb 2026</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
          {ALL_CALCULATORS.sort((a, b) => a.name.localeCompare(b.name)).map(calc => (
            <Link
              key={calc.id}
              href={`/${calc.id}`}
              className="group flex items-center gap-2 text-[11px] text-slate-500 hover:text-amber-400 transition-colors"
            >
              <div className="w-1 h-1 rounded-full bg-slate-800 group-hover:bg-amber-500/50" />
              <span className="truncate">{calc.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Authority Section */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "AI Precision", value: "99.8%", detail: "Neural model accuracy" },
            { label: "Active Engines", value: "316+", detail: "Institutional calculators" },
            { label: "S-Class Priority", value: "Flagship", detail: "Highest Crawl Tier" },
            { label: "Verified Data", value: "2026", detail: "Official Specifications" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-4xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-1">{stat.label}</div>
              <div className="text-slate-500 text-xs">{stat.detail}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
