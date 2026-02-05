"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MapPin, Search } from "lucide-react";
import { SITE, getStateRankings, formatCurrency, StateComparison } from "@/lib/calculators/auto-insurance";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function ByStatePage() {
    const allStates = getStateRankings();
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState<"rank" | "name">("rank");

    const filteredStates = allStates
        .filter(s => s.state.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sortBy === "rank" ? a.rank - b.rank : a.state.localeCompare(b.state));

    return (
        <div className="min-h-screen bg-slate-50">

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        {SITE.year} Auto Insurance Rates by State
                    </h1>
                    <p className="text-sm text-slate-500 mb-4">
                        Compare average annual premiums across all 50 states
                    </p>

                    {/* Search & Sort */}
                    <div className="flex gap-3">
                        <div className="flex-1 relative">
                            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search state..."
                                className="w-full pl-9 pr-4 py-2 border border-slate-300 rounded-lg text-sm"
                            />
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as "rank" | "name")}
                            className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white"
                        >
                            <option value="rank">Sort by Price</option>
                            <option value="name">Sort by Name</option>
                        </select>
                    </div>
                </div>

                {/* State List */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="grid grid-cols-4 gap-2 px-4 py-3 bg-slate-100 text-xs font-semibold text-slate-600 uppercase">
                        <span>Rank</span>
                        <span className="col-span-2">State</span>
                        <span className="text-right">Annual</span>
                    </div>

                    <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
                        {filteredStates.map((state) => (
                            <div key={state.state} className="grid grid-cols-4 gap-2 px-4 py-3 hover:bg-slate-50 items-center">
                                <span className={`font-bold ${state.rank <= 10 ? 'text-green-600' : state.rank >= 41 ? 'text-red-600' : 'text-slate-400'}`}>
                                    #{state.rank}
                                </span>
                                <span className="col-span-2 text-slate-800 font-medium">{state.state}</span>
                                <div className="text-right">
                                    <span className="font-bold text-slate-800">{formatCurrency(state.annualPremium)}</span>
                                    <span className={`block text-xs ${state.vsNational > 0 ? 'text-red-500' : 'text-green-500'}`}>
                                        {state.vsNational > 0 ? '+' : ''}{state.vsNational}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="my-8 p-6 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                <div className="text-center">
                    <Link href="/auto-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
                        Calculate Your Rate →
                    </Link>
                </div>
            </main>
        </div>
    );
}
