"use client";

import Link from "next/link";
import { Calculator, Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { SITE, INSURANCE_OPTIONS, PLATFORMS } from "@/lib/calculators/delivery-insurance";

export default function DeliveryInsuranceGuidePage() {
    return (
        <>


            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-blue-300">Coverage Guide</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4">Delivery Driver Insurance Guide</h1>
                    <p className="text-slate-400">Understand your coverage options for food and package delivery</p>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Insurance Options</h2>
                    <div className="space-y-6">
                        {INSURANCE_OPTIONS.map((option, index) => (
                            <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">{option.name}</h3>
                                        <p className="text-slate-400 mt-1">{option.description}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-2xl font-bold text-blue-400">${option.avgCost}</div>
                                        <div className="text-sm text-slate-500">per month</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 px-4 bg-amber-900/20 border-y border-amber-500/30">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
                        <div>
                            <h2 className="text-xl font-bold text-amber-300 mb-2">Personal Insurance Won't Cover You</h2>
                            <p className="text-amber-200/80">
                                Most personal auto policies explicitly exclude commercial delivery activities. If you get in an accident while delivering, your claim could be denied and your policy cancelled. Always add a delivery endorsement or get commercial coverage.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-6">Platform Coverage Comparison</h2>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-slate-700">
                                <tr>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Platform</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">Their Coverage</th>
                                    <th className="text-left px-6 py-4 text-sm font-semibold text-white">You Still Need</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700">
                                <tr>
                                    <td className="px-6 py-4 text-white">DoorDash</td>
                                    <td className="px-6 py-4 text-slate-300">Excess liability during active delivery</td>
                                    <td className="px-6 py-4 text-amber-300">Your own collision/comprehensive</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-white">UberEats</td>
                                    <td className="px-6 py-4 text-slate-300">Limited liability coverage</td>
                                    <td className="px-6 py-4 text-amber-300">Delivery endorsement</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-white">Instacart</td>
                                    <td className="px-6 py-4 text-slate-300">None (shopper responsibility)</td>
                                    <td className="px-6 py-4 text-amber-300">Full delivery coverage</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-white">Amazon Flex</td>
                                    <td className="px-6 py-4 text-slate-300">Commercial auto during blocks</td>
                                    <td className="px-6 py-4 text-amber-300">Gap coverage when idle</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <Link href="/delivery-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors">
                        Calculate Your Premium
                    </Link>
                </div>
            </section>


        </>
    );
}
