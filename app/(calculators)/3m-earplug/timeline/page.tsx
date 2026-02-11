import Link from "next/link";
import { SITE, EPP_TIERS, EARPLUG_2026, formatCurrency } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Ear, ArrowLeft, ArrowRight, Clock, Shield, Activity, BadgeCheck, CheckCircle, ChevronRight } from "lucide-react";

export const metadata = {
    title: `3M Earplug Payment Timeline 2026 | ${SITE.name}`,
    description: "Official disbursement schedule for MDL 2885. Analysis of EPP Tier processing windows and 2026 payment priority."
};

export default function TimelinePage() {
    const timeline = [
        { phase: "2023", event: "$6.01B Settlement Agreement", status: "Completed", detail: "MDL 2885 Global Resolution reached." },
        { phase: "2024", event: "Wave 1 Disbursements", status: "Completed", detail: "Initial EPP Level 1-2 funds released." },
        { phase: "2024-2025", event: "Tier 1-3 Processing", status: "In Progress", detail: "Verification of clinical documentation for lower tiers." },
        { phase: "2025-2026", event: "Tier 4-5 High Fidelity Audit", status: "Scheduled", detail: "Processing of profound hearing loss & EIF claims." },
        { phase: "2026+", event: "Final Pro-Rata Distribution", status: "Planned", detail: "Allocation of remaining excess settlement funds." },
    ];

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30 pb-24">
            {/* Header / Nav */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <Link href="/3m-earplug" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Case Intelligence
                </Link>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-6">
                        <Clock className="w-3.5 h-3.5" />
                        Disbursement Sync: ACTIVE
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase mb-6">
                        Payment <span className="text-indigo-500">Timeline.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 font-medium leading-[1.6]">
                        The MDL 2885 disbursement schedule is prioritized by **EPP Tier Classification**. 2026 marks the critical window for high-severity Tier 4 and 5 payouts.
                    </p>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Timeline Matrix */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-12 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-indigo-500" />
                                Settlement Deployment Roadmap
                            </h2>

                            <div className="relative space-y-12">
                                <div className="absolute left-6 top-0 bottom-0 w-px bg-indigo-500/20" />
                                {timeline.map((item, i) => (
                                    <div key={i} className="relative pl-16 group">
                                        <div className={`absolute left-0 top-1 w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${item.status === 'Completed' ? 'bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]' : item.status === 'In Progress' ? 'bg-indigo-600 animate-pulse' : 'bg-slate-800 border border-white/5'}`}>
                                            {item.status === 'Completed' ? <CheckCircle className="w-6 h-6 text-white" /> : <span className="text-white text-xs font-black">{i + 1}</span>}
                                        </div>
                                        <div className="bg-black/40 border border-white/5 rounded-3xl p-8 group-hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                                                <span className="text-2xl font-black text-white italic tracking-tighter">{item.phase}</span>
                                                <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : item.status === 'In Progress' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-slate-800 text-slate-500'}`}>{item.status}</span>
                                            </div>
                                            <h4 className="text-lg font-bold text-slate-200 mb-2 uppercase tracking-tight">{item.event}</h4>
                                            <p className="text-sm text-slate-500 font-medium leading-relaxed uppercase">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment by Tier Matrix */}
                        <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-12 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-indigo-500" />
                                Payout Thresholds by EPP Tier
                            </h2>
                            <div className="grid gap-4">
                                {EPP_TIERS.map((tier, i) => (
                                    <div key={i} className="flex flex-wrap items-center justify-between p-6 bg-black/40 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all group">
                                        <div className="space-y-1">
                                            <h3 className="text-white font-black uppercase text-sm tracking-widest italic">{tier.name}</h3>
                                            <p className="text-[10px] text-slate-500 font-bold uppercase">{tier.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-black text-indigo-400 italic tracking-tighter">{formatCurrency(tier.base)}</span>
                                            <p className="text-[9px] text-slate-600 font-black uppercase tracking-widest">Base Disbursement</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-8 p-6 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl">
                                    <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest leading-relaxed italic text-center">
                                        "Claimants in Tier 4 and 5 are prioritized for EIF (Extraordinary Injury Fund) review if clinical criteria exceed EPP thresholds."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Trust Pins */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] space-y-8 shadow-2xl">
                            <h4 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/5 pb-4">Disbursement Intelligence</h4>
                            <ul className="space-y-6">
                                {[
                                    { text: "Keep Contact Info Updated with Attorney", icon: BadgeCheck },
                                    { text: "Monitor MDL 2885 Court Ledger", icon: Activity },
                                    { text: "Avoid Unauthorized Upfront Fee Scams", icon: Shield },
                                    { text: "Verify VA Clinical Data Alignment", icon: Ear }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="p-2 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-[1.6]">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/3m-earplug/calculator" className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-center py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.03] shadow-xl italic">
                                Calculate My Payout Window <ArrowRight className="inline w-4 h-4 ml-1" />
                            </Link>
                        </div>

                        <div className="p-10 bg-black/40 border border-white/5 rounded-[3rem] space-y-4">
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-emerald-500" />
                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Status: Active</span>
                            </div>
                            <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-loose italic">
                                "90% of EPP Wave 1 payments have been completed. The remaining 10% are undergoing secondary clinical audit."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pt-24">
                <div className="flex justify-center border-t border-white/5 pt-12">
                    <div className="w-full max-w-sm"><RelatedCalculators currentCalc="3m-earplug" count={5} /></div>
                </div>
            </section>
        </div>
    );
}
