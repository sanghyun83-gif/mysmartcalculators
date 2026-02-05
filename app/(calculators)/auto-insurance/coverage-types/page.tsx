import Link from "next/link";
import { ArrowLeft, Shield, CheckCircle, AlertCircle } from "lucide-react";
import { SITE, AUTO_INSURANCE_CONSTANTS } from "@/lib/calculators/auto-insurance";

export default function CoverageTypesPage() {
    const { coverageTypes } = AUTO_INSURANCE_CONSTANTS;

    return (
        <div className="min-h-screen bg-slate-50">

            <main className="max-w-2xl mx-auto px-4 py-8">
                <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
                    <h1 className="text-xl font-bold text-slate-800 mb-2">
                        Types of Auto Insurance Coverage
                    </h1>
                    <p className="text-sm text-slate-500">
                        Understanding what each type covers and when you need it
                    </p>
                </div>

                {/* Coverage Types */}
                <div className="space-y-4 mb-8">
                    {/* Liability */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <div className="p-4 bg-orange-50 border-b border-orange-200">
                            <h3 className="font-bold text-orange-800">Liability Insurance</h3>
                            <p className="text-sm text-orange-600">Required in most states</p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-slate-600 mb-3">
                                Covers damage and injuries you cause to <strong>others</strong> in an accident. Does NOT cover your own car or injuries.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Other driver&apos;s medical bills</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Other driver&apos;s car repairs</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Property damage you cause</span>
                                </div>
                                <div className="flex items-center gap-2 text-red-500">
                                    <AlertCircle className="w-4 h-4" />
                                    <span>Your own car damage</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Collision */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <div className="p-4 bg-blue-50 border-b border-blue-200">
                            <h3 className="font-bold text-blue-800">Collision Coverage</h3>
                            <p className="text-sm text-blue-600">Optional but recommended</p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-slate-600 mb-3">
                                Covers damage to <strong>your own car</strong> from collisions with other vehicles or objects.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Accidents with other cars</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Hitting a pole, tree, or guardrail</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Single-car accidents</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comprehensive */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                        <div className="p-4 bg-purple-50 border-b border-purple-200">
                            <h3 className="font-bold text-purple-800">Comprehensive Coverage</h3>
                            <p className="text-sm text-purple-600">For non-collision damage</p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-slate-600 mb-3">
                                Covers damage from events <strong>other than collisions</strong>, like theft, weather, or vandalism.
                            </p>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Theft or break-in</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Hail, flood, or fire damage</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Vandalism</span>
                                </div>
                                <div className="flex items-center gap-2 text-green-600">
                                    <CheckCircle className="w-4 h-4" />
                                    <span>Animal collisions (deer)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full */}
                    <div className="bg-white rounded-xl border-2 border-green-500 overflow-hidden">
                        <div className="p-4 bg-green-50 border-b border-green-200">
                            <h3 className="font-bold text-green-800">Full Coverage</h3>
                            <p className="text-sm text-green-600">Complete protection</p>
                        </div>
                        <div className="p-4">
                            <p className="text-sm text-slate-600 mb-3">
                                Combines <strong>Liability + Collision + Comprehensive</strong> for the most complete protection.
                            </p>
                            <div className="bg-green-100 rounded-lg p-3 text-sm text-green-700">
                                <strong>Best for:</strong> Newer cars, financed/leased vehicles, or if you want peace of mind
                            </div>
                        </div>
                    </div>
                </div>

                {/* Which to Choose */}
                <div className="bg-slate-800 text-white rounded-xl p-5 mb-6">
                    <h3 className="font-bold mb-3">Which Coverage Do You Need?</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li><strong className="text-white">Older car (10+ years)?</strong> Liability only may be enough</li>
                        <li><strong className="text-white">Newer car or loan/lease?</strong> Full coverage recommended</li>
                        <li><strong className="text-white">High-risk area (theft/hail)?</strong> Add comprehensive</li>
                    </ul>
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
