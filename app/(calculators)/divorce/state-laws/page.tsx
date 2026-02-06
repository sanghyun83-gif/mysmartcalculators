"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Scale, Search, ArrowRight, Calculator } from "lucide-react";
import { SITE, STATE_DATA, COMMUNITY_PROPERTY_STATES, isCommunityPropertyState } from "@/lib/calculators/divorce";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateLawsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState<'all' | 'community' | 'equitable'>('all');

    const states = Object.entries(STATE_DATA);

    const filteredStates = states.filter(([code, data]) => {
        const matchesSearch = data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            code.toLowerCase().includes(searchTerm.toLowerCase());

        if (filterType === 'all') return matchesSearch;
        if (filterType === 'community') return matchesSearch && data.propertyDivision === 'community';
        if (filterType === 'equitable') return matchesSearch && data.propertyDivision === 'equitable';
        return matchesSearch;
    });

    const communityCount = COMMUNITY_PROPERTY_STATES.length;
    const equitableCount = 51 - communityCount; // 50 states + DC

    return (
        <>
            {/* Header */}


            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {SITE.year} Divorce Laws by State
                    </h1>
                    <p className="text-slate-400">
                        Compare property division rules and alimony guidelines across all 50 states
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-3 mb-6 justify-center">
                    <button
                        onClick={() => setFilterType('all')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${filterType === 'all'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                    >
                        All States (51)
                    </button>
                    <button
                        onClick={() => setFilterType('community')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${filterType === 'community'
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                    >
                        Community Property ({communityCount})
                    </button>
                    <button
                        onClick={() => setFilterType('equitable')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${filterType === 'equitable'
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                            }`}
                    >
                        Equitable Distribution ({equitableCount})
                    </button>
                </div>

                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search states..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* State Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">State</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Property Division</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Alimony</th>
                                    <th className="px-4 py-3 text-center text-slate-300 font-medium">Formula?</th>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {filteredStates.map(([code, data]) => (
                                    <tr
                                        key={code}
                                        className="hover:bg-slate-700/30 transition-colors"
                                    >
                                        <td className="px-4 py-3">
                                            <span className="font-medium text-white">{data.name}</span>
                                            <span className="text-slate-500 ml-2">({code})</span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${data.propertyDivision === 'community'
                                                ? 'bg-indigo-500/20 text-indigo-400'
                                                : 'bg-blue-500/20 text-blue-400'
                                                }`}>
                                                {data.propertyDivision === 'community' ? '50/50' : 'Equitable'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-xs ${data.alimonyFactor === 'high'
                                                ? 'bg-green-500/20 text-green-400'
                                                : data.alimonyFactor === 'low'
                                                    ? 'bg-amber-500/20 text-amber-400'
                                                    : 'bg-slate-500/20 text-slate-400'
                                                }`}>
                                                {data.alimonyFactor.charAt(0).toUpperCase() + data.alimonyFactor.slice(1)}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            {data.hasAlimonyFormula ? (
                                                <span className="text-green-400">??/span>
                                            ) : (
                                                <span className="text-slate-500">??/span>
                                            )}
                                        </td>
                                        <td className="px-4 py-3 text-slate-400 text-xs">
                                            {data.notes}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Legend */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                        <h3 className="font-semibold text-white mb-3">Property Division Types</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded text-xs">50/50</span>
                                <span className="text-slate-400">Community Property - always equal split</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">Equitable</span>
                                <span className="text-slate-400">Fair but not necessarily equal (40-60%)</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-slate-800 rounded-xl border border-slate-700 p-5">
                        <h3 className="font-semibold text-white mb-3">Alimony Generosity</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">High</span>
                                <span className="text-slate-400">Generous alimony awards (CA, NY, NJ)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-slate-500/20 text-slate-400 rounded text-xs">Medium</span>
                                <span className="text-slate-400">Average alimony guidelines</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-2 py-1 bg-amber-500/20 text-amber-400 rounded text-xs">Low</span>
                                <span className="text-slate-400">Limited alimony (TX, GA)</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ad Placeholder */}
                <div className="my-8 p-6 bg-slate-800 border border-slate-700 rounded-xl text-center">
                    <p className="text-sm text-slate-500">Advertisement</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Link
                        href="/divorce/alimony-calculator"
                        className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        <Calculator className="w-5 h-5" />
                        Calculate Your Alimony
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Laws change frequently. This information is based on {SITE.year} guidelines.
                    Always consult with a local family law attorney for current laws.
                </p>
            </main>
        </>
    );
}
