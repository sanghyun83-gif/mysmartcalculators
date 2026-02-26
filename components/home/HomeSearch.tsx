"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Calculator, ChevronRight, Search, Zap } from "lucide-react";
import { CATEGORY_MAP } from "@/lib/categories";

interface CalculatorItem {
  id: string;
  name: string;
}

export function HomeSearch({
  initialQuery,
  calculators,
}: {
  initialQuery: string;
  calculators: CalculatorItem[];
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeIndex, setActiveIndex] = useState(-1);

  const filteredCalculators = useMemo(() => {
    if (!searchQuery) return [];
    return calculators
      .filter(
        (calc) =>
          calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          calc.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 8);
  }, [searchQuery, calculators]);

  const hasResults = searchQuery.length > 0 && filteredCalculators.length > 0;
  const listboxId = "home-search-results";

  return (
    <div className="max-w-2xl mx-auto relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
      <form
        method="get"
        action="/"
        className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden flex items-center p-2 shadow-2xl"
      >
        <Search className="w-6 h-6 text-slate-500 ml-4" />
        <label htmlFor="home-search-input" className="sr-only">
          Search calculators
        </label>
        <input
          id="home-search-input"
          type="search"
          name="q"
          placeholder="Search 316+ calculators (e.g., Truck Accident, 401k)..."
          className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder:text-slate-600 px-4 py-3 text-lg"
          value={searchQuery}
          autoComplete="off"
          aria-label="Search calculators"
          aria-autocomplete="list"
          aria-controls={listboxId}
          aria-expanded={hasResults}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={(e) => {
            if (filteredCalculators.length === 0) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActiveIndex((prev) => Math.min(prev + 1, filteredCalculators.length - 1));
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActiveIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === "Escape") {
              setActiveIndex(-1);
            } else if (e.key === "Enter" && activeIndex >= 0 && filteredCalculators[activeIndex]) {
              e.preventDefault();
              router.push(`/${filteredCalculators[activeIndex].id}`);
            }
          }}
        />
        <button
          aria-label="Submit search"
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-xl transition-all flex items-center gap-2 group/btn"
        >
          <span>Calculate</span>
          <Zap className="w-4 h-4 fill-current group-hover/btn:scale-110 transition-transform" />
        </button>
      </form>

      {searchQuery && (
        <div
          id={listboxId}
          role="listbox"
          className="absolute top-full left-0 right-0 mt-4 bg-slate-900/95 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-[100]"
        >
          {filteredCalculators.length > 0 ? (
            <div className="divide-y divide-slate-800">
              {filteredCalculators.map((calc, index) => (
                <Link
                  key={calc.id}
                  href={`/${calc.id}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  className={`flex items-center justify-between p-4 transition-colors group/item ${
                    index === activeIndex ? "bg-amber-500/10" : "hover:bg-amber-500/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 group-hover/item:bg-amber-500/20">
                      <Calculator className="w-5 h-5 text-slate-400 group-hover/item:text-amber-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold group-hover/item:text-amber-400 transition-colors">
                        {calc.name}
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">
                        {CATEGORY_MAP[calc.id] || "general"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover/item:text-amber-400 transition-colors" />
                </Link>
              ))}
              <Link
                href={`/?q=${encodeURIComponent(searchQuery)}#search-results`}
                className="flex items-center justify-between p-4 text-xs uppercase tracking-wider text-slate-400 hover:text-amber-400 hover:bg-amber-500/5 transition-colors"
              >
                <span>View All Results</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500">No matching calculators found.</div>
          )}
        </div>
      )}
    </div>
  );
}

