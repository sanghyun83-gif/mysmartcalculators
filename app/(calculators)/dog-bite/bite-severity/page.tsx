"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Stethoscope, ArrowRight, Dog, Info, AlertTriangle } from "lucide-react";
import { SITE, BITE_SEVERITY, formatCurrency } from "@/lib/calculators/dog-bite";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function BiteSeverityPage() {
    const severityList = Object.entries(BITE_SEVERITY);
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const selectedData = selectedLevel ? BITE_SEVERITY[selectedLevel as keyof typeof BITE_SEVERITY] : null;

    const getEstimate = () => {
        if (!selectedData) return null;
        const avg = Math.round((selectedData.avgSettlement.min + selectedData.avgSettlement.max) / 2);
        const withAttorney = Math.round(avg * 0.67);
        return { avg, withAttorney };
    };

    const estimate = getEstimate();

    const getLevelColor = (key: string) => {
        const colors: Record<string, string> = {
            level1: "bg-green-500",
            level2: "bg-lime-500",
            level3: "bg-yellow-500",
            level4: "bg-orange-500",
            level5: "bg-red-500",
            level6: "bg-red-900",
        };
        return colors[key] || "bg-slate-500";
    };

    return (
        <>
            {/* Header */}


            <main className="max-w-4xl mx-auto px-4 py-8">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Dog Bite Severity Levels & Settlement Values
                    </h1>
                    <p className="text-slate-400">
                        Based on the Ian Dunbar Bite Scale ({SITE.year})
                    </p>
                </div>

                {/* Interactive Calculator */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Dog className="w-5 h-5 text-amber-500" />
                        Select Bite Severity Level
                    </h2>

                    {/* Level Selection */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {severityList.map(([key, level]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedLevel(key)}
                                className={`p-4 rounded-lg border text-left transition-all ${selectedLevel === key
                                    ? "bg-amber-600 border-amber-500 text-white"
                                    : "bg-slate-700/50 border-slate-600 text-slate-300 hover:border-amber-500"
                                    }`}
                            >
                                <div className="flex items-center gap-2 mb-1">
                                    <div className={`w-3 h-3 rounded-full ${getLevelColor(key)}`} />
                                    <span className="text-sm font-semibold">{level.name.split(" - ")[0]}</span>
                                </div>
                                <div className="text-xs opacity-75">{level.name.split(" - ")[1]}</div>
                            </button>
                        ))}
                    </div>

                    {/* Result Display */}
                    {selectedData && estimate && (
                        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-6 text-white">
                            <p className="text-sm text-amber-100 mb-1">{selectedData.name}</p>
                            <p className="text-3xl font-bold mb-2">
                                {formatCurrency(selectedData.avgSettlement.min)} - {formatCurrency(selectedData.avgSettlement.max)}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-amber-400/30">
                                <div>
                                    <p className="text-xs text-amber-200">Average</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.avg)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-amber-200">After Attorney (33%)</p>
                                    <p className="text-lg font-semibold">{formatCurrency(estimate.withAttorney)}</p>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-amber-400/30 text-sm space-y-1">
                                <p><span className="text-amber-200">Description:</span> {selectedData.description}</p>
                                <p><span className="text-amber-200">Injuries:</span> {selectedData.injuries}</p>
                                <p><span className="text-amber-200">Treatment:</span> {selectedData.treatment}</p>
                            </div>
                        </div>
                    )}

                    {!selectedData && (
                        <div className="text-center py-8 text-slate-400">
                            <Dog className="w-12 h-12 mx-auto mb-3 opacity-50" />
                            <p>Select a severity level above to see settlement estimates</p>
                        </div>
                    )}
                </div>

                {/* Summary Table */}
                <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden mb-8">
                    <div className="p-4 border-b border-slate-700">
                        <h2 className="text-lg font-bold text-white">
                            Ian Dunbar Dog Bite Scale
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-700/50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Level</th>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Description</th>
                                    <th className="px-4 py-3 text-left text-slate-300 font-medium">Injuries</th>
                                    <th className="px-4 py-3 text-right text-slate-300 font-medium">Settlement Range</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                {severityList.map(([key, level]) => (
                                    <tr
                                        key={key}
                                        className={`hover:bg-slate-700/30 cursor-pointer ${selectedLevel === key ? "bg-amber-900/20" : ""
                                            }`}
                                        onClick={() => setSelectedLevel(key)}
                                    >
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-3 h-3 rounded-full ${getLevelColor(key)}`} />
                                                <span className="text-white font-medium">{level.name.split(" - ")[0]}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-slate-400">{level.description}</td>
                                        <td className="px-4 py-3 text-slate-400">{level.injuries}</td>
                                        <td className="px-4 py-3 text-right text-amber-400 font-medium">
                                            {formatCurrency(level.avgSettlement.min)} - {formatCurrency(level.avgSettlement.max)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="bg-amber-900/20 border border-amber-700/50 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <p className="font-medium text-white mb-1">Document Everything</p>
                            <p>
                                Take photos of injuries immediately and during healing. Get the dog owner&apos;s
                                information, homeowner&apos;s insurance details, and witness statements.
                                Report to animal control and seek medical attention within 24 hours.
                            </p>
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
                        href="/dog-bite/settlement"
                        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                        Get Personalized Settlement Estimate
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-xs text-slate-500 text-center">
                    Settlement values are estimates based on {SITE.year} national data.
                    Actual settlements vary based on case specifics, state laws, and insurance limits.
                </p>
            </main>
        </>
    );
}
