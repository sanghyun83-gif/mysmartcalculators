"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Calculator, Scale, Heart, DollarSign, Shield,
  ChevronRight, Search, Zap, TrendingUp, Cpu,
  Gavel, Stethoscope, Landmark
} from "lucide-react";
import { ALL_CALCULATORS } from "@/lib/all-calculators";
import { CATEGORY_MAP, CATEGORY_NAMES } from "@/lib/categories";

// Premium Trending Niches (High CPC)
const TRENDING_NICHES = [
  { id: "truck-accident", name: "Truck Accident", category: "legal", badge: "High Value", color: "amber" },
  { id: "ozempic", name: "Ozempic Settlement", category: "medical", badge: "Active MDL", color: "rose" },
  { id: "roundup", name: "Roundup Lawsuit", category: "medical", badge: "Mass Tort", color: "emerald" },
  { id: "401k-growth", name: "401k Growth", category: "finance", badge: "Pro 2026", color: "blue" },
  { id: "car-accident", name: "Car Accident", category: "legal", badge: "S-Class", color: "red" },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCalculators = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    return ALL_CALCULATORS
      .filter(calc => calc.name.toLowerCase().includes(query))
      .sort((a, b) => {
        // Priority to exact start matches
        const aStart = a.name.toLowerCase().startsWith(query);
        const bStart = b.name.toLowerCase().startsWith(query);
        if (aStart && !bStart) return -1;
        if (!aStart && bStart) return 1;
        return a.name.localeCompare(b.name);
      })
      .slice(0, 10);
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold mb-8 animate-fade-in">
            <Cpu className="w-3 h-3" />
            <span>V3.1 GOLDEN MIDDLE EDITION</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            World&apos;s Most Advanced <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Legal & Financial AI
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Neural-grade settlement estimation and financial forecasting.
            Powered by 300+ specialized calculation engines for the 2026 landscape.
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

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Trending Calculations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRENDING_NICHES.map((niche) => (
            <Link
              key={niche.id}
              href={`/${niche.id}`}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:translate-y-[-4px] overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full group-hover:bg-amber-500/10 transition-all`} />

              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-slate-800 border border-slate-700 text-amber-500 group-hover:scale-110 transition-transform`}>
                    <Zap className="w-6 h-6 fill-current" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase bg-slate-800 px-2 py-1 rounded">
                    {niche.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {niche.name}
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  Professional-grade estimator for {niche.name} cases and claims.
                </p>

                <div className="mt-auto flex items-center gap-2 text-amber-500 font-bold text-sm">
                  <span>Start AI Analysis</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Category Grid (Compact Density) */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries({
            legal: { icon: Scale, name: "Legal & Injury" },
            finance: { icon: DollarSign, name: "Finance & Tax" },
            medical: { icon: Stethoscope, name: "Medical Mass Tort" },
            insurance: { icon: Shield, name: "Risk & Insurance" },
            family: { icon: Heart, name: "Family & Property" },
            health: { icon: Landmark, name: "Public Benefits" },
          }).map(([id, cat]) => (
            <div key={id} className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <cat.icon className="w-5 h-5 text-amber-500" />
                <h3 className="text-xl font-bold text-white uppercase tracking-wider text-sm">{cat.name}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {ALL_CALCULATORS
                  .filter(calc => CATEGORY_MAP[calc.id] === id)
                  .slice(0, 15)
                  .map(calc => (
                    <Link
                      key={calc.id}
                      href={`/${calc.id}`}
                      className="text-xs px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all"
                    >
                      {calc.name}
                    </Link>
                  ))}
                <button className="text-[10px] font-bold text-amber-500/60 uppercase tracking-widest px-2 py-2">
                  + view all
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Authority Section */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { label: "AI Precision", value: "99.8%", detail: "Neural model accuracy" },
            { label: "Active Engines", value: "300+", detail: "Specialized calculators" },
            { label: "Verified Data", value: "2026", detail: "Compliant specifications" },
            { label: "User Signals", value: "Real-time", detail: "Instant reactive feedback" },
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
