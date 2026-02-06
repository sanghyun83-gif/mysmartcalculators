import Link from "next/link";
import { SITE, SETTLEMENT_TIERS, EARPLUG_2026, formatCurrency } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Ear, ArrowLeft, ArrowRight, Clock } from "lucide-react";

export const metadata = { title: `3M Earplug Payment Timeline | ${SITE.name}`, description: "When to expect your 3M earplug settlement payment. Phases, processing, and payout schedule." };

export default function TimelinePage() {
    const timeline = [
        { phase: "2023", event: "$6B Settlement Announced", status: "Completed" },
        { phase: "2024", event: "Initial Payments Begin", status: "Completed" },
        { phase: "2024-2026", event: "Tier 1-2 Payments Processing", status: "In Progress" },
        { phase: "2026-2026", event: "Tier 3-4 Payments Processing", status: "Scheduled" },
        { phase: "2026+", event: "Final Distributions Complete", status: "Planned" },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/3m-earplug" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><Clock className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Timeline</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">3M Earplug Payment Timeline</h1>
                    <p className="text-slate-400">When to expect settlement payments.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-6">Settlement Timeline</h2>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-500/30" />
                        <div className="space-y-6">
                            {timeline.map((item, i) => (
                                <div key={i} className="flex items-start gap-4 relative">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${item.status === 'Completed' ? 'bg-emerald-500' : item.status === 'In Progress' ? 'bg-purple-500' : 'bg-slate-600'}`}>
                                        <span className="text-white text-xs font-bold">{i + 1}</span>
                                    </div>
                                    <div className="flex-1 bg-slate-700/50 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-purple-400 font-semibold">{item.phase}</span>
                                            <span className={`text-xs px-2 py-1 rounded ${item.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-300' : item.status === 'In Progress' ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-600/50 text-slate-400'}`}>{item.status}</span>
                                        </div>
                                        <p className="text-slate-300">{item.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4">Payment by Tier</h2>
                    <div className="space-y-3">
                        {SETTLEMENT_TIERS.map((tier, i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                                <div><h3 className="text-white font-medium">{tier.tier}</h3><p className="text-sm text-slate-400">{tier.description}</p></div>
                                <span className="text-purple-400 font-semibold">{tier.range}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">What to Do While Waiting</h3>
                    <ul className="space-y-2 text-sm text-slate-300">
                        <li> Keep contact information updated with your attorney</li>
                        <li> Respond promptly to any requests for additional documentation</li>
                        <li> Don&apos;t fall for scam calls asking for upfront fees</li>
                        <li> Check claim status through official channels only</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/3m-earplug/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Your Payout<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div></div></section>
        </>
    );
}
