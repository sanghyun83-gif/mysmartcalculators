"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Gavel, Search, ArrowUpDown, Scale } from "lucide-react";
import { SITE, STATE_FAULT_LAWS } from "@/lib/calculators/truck-accident";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function StateLawsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState<'name' | 'system'>('name');

    const statesArray = Object.entries(STATE_FAULT_LAWS).map(([code, data]) => ({
        code,
        ...data
    }));

    const filteredStates = statesArray
        .filter(state =>
            state.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortBy === 'name') return a.name.localeCompare(b.name);
            return a.faultSystem.localeCompare(b.faultSystem);
        });

    const atFaultCount = statesArray.filter(s => s.faultSystem === 'at-fault').length;
    const noFaultCount = statesArray.filter(s => s.faultSystem === 'no-fault').length;
    const choiceCount = statesArray.filter(s => s.faultSystem === 'choice').length;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-4">
                    <Link href="/truck-accident" className="text-slate-400 hover:text-red-600">
                        <ArrowLeft className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2">
                        <Gavel className="w-5 h-5 text-red-600" />
                        <span className="text-lg font-bold text-slate-800">State Fault Laws</span>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">
                        Truck Accident Fault Laws by State
                    </h1>
                    <p className="text-slate-500">
                        At-Fault vs No-Fault, Comparative Negligence, and FMCSA Commercial Truck Rules
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-blue-600">{atFaultCount}</p>
                        <p className="text-xs text-slate-500">At-Fault States</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-green-600">{noFaultCount}</p>
                        <p className="text-xs text-slate-500">No-Fault States</p>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                        <p className="text-2xl font-bold text-purple-600">{choiceCount}</p>
                        <p className="text-xs text-slate-500">Choice States</p>
                    </div>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search state..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-lg"
                        />
                    </div>
                </div>

                {/* Ad */}
                <div className="mb-6 p-4 bg-white border border-slate-200 rounded-xl text-center">
                    <p className="text-sm text-slate-400">Advertisement</p>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-600 font-semibold">State</th>
                                    <th className="px-4 py-3 text-center text-slate-600 font-semibold">System</th>
                                    <th className="px-4 py-3 text-center text-slate-600 font-semibold">Comparative</th>
                                    <th className="px-4 py-3 text-center text-slate-600 font-semibold">Threshold</th>
                                    <th className="px-4 py-3 text-left text-slate-600 font-semibold hidden md:table-cell">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredStates.map((state, index) => (
                                    <tr key={state.code} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                        <td className="px-4 py-3">
                                            <span className="font-medium text-slate-800">{state.name}</span>
                                        </td>
                                        <td className="px-4 py-3 text-center">
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${state.faultSystem === 'at-fault' ? 'bg-blue-100 text-blue-700' :
                                                state.faultSystem === 'no-fault' ? 'bg-green-100 text-green-700' :
                                                    'bg-purple-100 text-purple-700'
                                                }`}>
                                                {state.faultSystem === 'at-fault' ? 'At-Fault' :
                                                    state.faultSystem === 'no-fault' ? 'No-Fault' : 'Choice'}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-600">
                                            {state.comparativeType === 'pure' ? 'Pure' :
                                                state.comparativeType === 'contributory' ? 'Contributory' :
                                                    state.comparativeType === 'modified-50' ? 'Modified 50%' : 'Modified 51%'}
                                        </td>
                                        <td className="px-4 py-3 text-center text-slate-600">
                                            {state.threshold}
                                        </td>
                                        <td className="px-4 py-3 text-slate-500 text-xs hidden md:table-cell">
                                            {state.notes}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Legend */}
                <div className="mt-6 bg-white rounded-xl border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-800 mb-3">Understanding Fault Systems</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="font-medium text-blue-700">At-Fault States</p>
                            <p className="text-slate-500">The at-fault driver pays all damages.</p>
                        </div>
                        <div>
                            <p className="font-medium text-green-700">No-Fault States</p>
                            <p className="text-slate-500">Your own insurance pays regardless of fault (with limits).</p>
                        </div>
                        <div>
                            <p className="font-medium text-amber-700">Contributory Negligence</p>
                            <p className="text-slate-500">Any fault = $0 recovery (AL, DC, MD, NC, VA only).</p>
                        </div>
                        <div>
                            <p className="font-medium text-slate-700">Modified Comparative</p>
                            <p className="text-slate-500">Recovery reduced by fault %, barred if 50-51%+.</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <Link
                        href="/truck-accident/settlement-calculator"
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        <Scale className="w-5 h-5" />
                        Calculate Your Settlement ??                    </Link>
                </div>
            </main>
        </div>
    );
}
