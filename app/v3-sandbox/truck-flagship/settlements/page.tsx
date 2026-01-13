import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, BarChart3, ArrowRight, DollarSign } from "lucide-react";

export const metadata: Metadata = {
    title: "Truck Accident Settlement Statistics 2026 | Payout Data | TruckMaster AI",
    description: "Explore 2026 truck accident settlement statistics and jury award benchmarks. Data-driven analysis for commercial vehicle litigation.",
    alternates: { canonical: './' }
};

export default function SettlementStats() {
    return (
        <div className="min-h-screen bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 py-24">
                {/* Header */}
                <div className="max-w-4xl space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black text-blue-400 uppercase tracking-widest">
                        Actuarial Data v5.0
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                        Payout <span className="text-blue-500">Benchmarks</span>.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">
                        Truck accident settlements are significantly higher than passenger car accidents due to
                        massive policy limits and the catastrophic nature of heavy-vehicle physics.
                        In 2026, the average semi-truck settlement exceeds <span className="text-white">$125,000</span> for even moderate injuries.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-12 gap-12 mt-24">
                    <div className="lg:col-span-8 space-y-24">

                        {/* 1. Policy Limit Stacking Strategy */}
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <DollarSign className="w-10 h-10 text-amber-500" />
                                <h2 className="text-3xl font-black text-white tracking-tight">Tiered Recovery: Stacking Commercial Policies</h2>
                            </div>
                            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-6 text-lg">
                                <p>
                                    A common mistake in truck accident claims is settling for the primary policy limit (often <strong>$750,000 or $1,000,000</strong>) without investigating secondary layers. In 2026, most mid-to-large trucking enterprises utilize "layered" insurance structures.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 not-prose">
                                    <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] space-y-4">
                                        <h4 className="text-xs font-black text-amber-500 uppercase tracking-widest leading-none">The Umbrella Layer</h4>
                                        <p className="text-sm font-bold text-white leading-relaxed">Most carriers carry $5M to $10M in excess coverage that is only triggered after the primary is exhausted.</p>
                                    </div>
                                    <div className="p-8 bg-amber-500/5 border border-amber-500/20 rounded-[2.5rem] space-y-4">
                                        <h4 className="text-xs font-black text-amber-500 uppercase tracking-widest leading-none">Broker Liability</h4>
                                        <p className="text-sm font-bold text-white leading-relaxed">In certain jurisdictions, the shipping broker's $25M+ policy can be reached if they hired an unsafe carrier.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 2. 2026 Case Intelligence: Actual Study Results */}
                        <section className="p-16 bg-slate-900 border border-white/10 rounded-[4rem] space-y-12 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-5 translate-x-4 -translate-y-4">
                                <BarChart3 className="w-32 h-32 text-amber-500" />
                            </div>
                            <h2 className="text-2xl font-black text-white tracking-tight">Case Study: Rear-End Collision on I-80</h2>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                                    <span className="px-3 py-1 bg-white/10 rounded-full">California Jurisdiction</span>
                                    <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full">Gross Negligence Found</span>
                                </div>
                                <div className="prose prose-invert prose-slate text-slate-400 font-medium leading-relaxed">
                                    <p>
                                        <strong>Scenario:</strong> A tractor-trailer failed to slow for traffic, striking a passenger vehicle at 45 mph. The driver was found to have been on duty for 16 consecutive hours (HOS violation).
                                    </p>
                                    <p>
                                        <strong>The Audit Result:</strong> While medical bills were only $350,000, the <strong>Punitive Factor</strong> of the HOS violation allowed the legal team to secure a <strong>$4.2 Million</strong> settlement. The audit leveraged the carrier's internal dispatch logs which showed they were pressuring the driver to "ignore the ELD."
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* 3. The "Nuclear Verdict" Matrix */}
                        <section className="space-y-12">
                            <h2 className="text-3xl font-black text-white tracking-tight">Regional Payout Variances</h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                Not all courtrooms are equal. Some jurisdictions are known for "Nuclear Verdicts" that punish corporate defendants, while others are "Conservative Bastions" where pain and suffering is capped.
                            </p>
                            <div className="grid md:grid-cols-3 gap-8 pt-8">
                                {[
                                    { s: "Texas/Georgia", r: "High Yield", d: "Juries are increasingly hostile toward trucking conglomerates and unsafe safety ratings." },
                                    { s: "Florida/NV", r: "SGE Preferred", d: "High frequency of Multi-Million dollar awards due to specialized tort statutes." },
                                    { s: "Midwest/MT", r: "Conservative", d: "Settlements often follow a strict 3x-5x multiplier of economic damages." }
                                ].map((reg, i) => (
                                    <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-3">
                                        <div className="text-[10px] font-black text-amber-500 uppercase">{reg.s}</div>
                                        <div className="text-sm font-black text-white">{reg.r}</div>
                                        <p className="text-[10px] text-slate-500 font-bold leading-relaxed">{reg.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* 4. Strategic Settlement Logic */}
                        <section className="p-12 bg-white/5 border border-white/10 rounded-[3rem] space-y-6">
                            <h2 className="text-2xl font-black text-white italic tracking-tighter">The "Net-Zero" Insurance Tactic</h2>
                            <p className="text-slate-400 leading-relaxed font-medium">
                                Insurance adjusters often use "Net-Zero" offer tactics, where they offer to pay exactly the medical bills and nothing for pain and suffering. They rely on the victim's fear of a long trial. Our 2026 Audit Engine creates a <strong>Counter-Matrix</strong> based on historical jury data, allowing you to reject low-ball offers with mathematical authority.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-8 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] space-y-6">
                                <h3 className="text-xl font-black text-white">Valuation Engine</h3>
                                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                    Compare your case variables against our 2026 payout dataset.
                                </p>
                                <Link href="/truck-accident/calculator" className="flex items-center justify-between p-4 bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all group">
                                    <span className="text-[10px] font-black uppercase text-white">Run Settlement Audit</span>
                                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
