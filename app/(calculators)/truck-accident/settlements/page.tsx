import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Truck Accident Settlement Statistics 2026 | Payout Data | TruckMaster AI",
    description: "Explore 2026 truck accident settlement statistics and jury award benchmarks. Data-driven analysis for commercial vehicle litigation.",
    alternates: { canonical: './' }
};

export default function SettlementStats() {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                <div className="py-20 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest mb-8">
                        <BarChart3 className="w-3 h-3" /> 2026 Actuarial Dataset
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                        Truck Payout <span className="text-blue-500">Benchmarks</span>.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
                        Understanding average awards for 18-wheeler accidents requires analyzing policy limits,
                        jurisdictional variance, and injury severity correlations.
                    </p>

                    <div className="grid gap-8">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6">
                            <h3 className="text-2xl font-black tracking-tight text-white">Policy Limit Realities</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Most commercial trucks carry at least $750,000 to $5,000,000 in liability coverage.
                                Unlike passenger vehicle accidents, truck settlements are often "policy limit cases"
                                due to the catastrophic nature of the damages.
                            </p>
                            <div className="pt-6 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-6">
                                <div>
                                    <div className="text-[10px] font-black text-slate-600 uppercase mb-1">Avg. Semi-Truck Award</div>
                                    <div className="text-xl font-black text-white">$150K - $850K</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-slate-600 uppercase mb-1">Catastrophic Cap</div>
                                    <div className="text-xl font-black text-white">$10M+</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6">
                            <h3 className="text-2xl font-black tracking-tight text-white">Jurisdictional Variance</h3>
                            <p className="text-slate-400 leading-relaxed">
                                A broken femur in a "high-payout" jurisdiction like California or New York can settle
                                for 40% more than the same injury in a more conservative jurisdiction.
                            </p>
                            <Link href="/truck-accident/calculator" className="inline-flex items-center gap-2 text-xs font-black text-blue-400 group uppercase tracking-widest">
                                Run Jurisdictional Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
