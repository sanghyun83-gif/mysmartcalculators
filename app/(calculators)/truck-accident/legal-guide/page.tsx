import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, Gavel, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Truck Accident Multiplier Guide | Legal Framework | TruckMaster AI",
    description: "Learn how multipliers are applied to truck accident settlements. Analysis of comparative fault and pain and suffering calculations.",
    alternates: { canonical: './' }
};

export default function LegalGuide() {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                <div className="py-20 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black text-red-400 uppercase tracking-widest mb-8">
                        <Scale className="w-3 h-3" /> Multiplier Logic 2026
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9] text-white">
                        The Payout <span className="text-red-500">Multiplier</span>.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
                        Truck accident damages are divided into Economic (bills/wages) and Non-Economic (pain/suffering).
                        The multiplier is the most contested variable in litigation.
                    </p>

                    <div className="grid gap-8">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6">
                            <div className="flex items-center gap-4">
                                <Gavel className="w-8 h-8 text-red-500" />
                                <h3 className="text-2xl font-black tracking-tight text-white">Comparative vs. Contributory</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Most states use <span className="text-white font-bold underline decoration-red-500/50">Comparative Fault</span>,
                                meaning your settlement is reduced by your percentage of fault.
                                However, "Modified" states bar recovery if you are 51% or more at fault.
                            </p>
                        </div>

                        <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-6 shadow-xl text-white">
                            <h3 className="text-2xl font-black tracking-tight">Critical Legal FAQ</h3>
                            <div className="space-y-4">
                                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                    <div className="text-sm font-black text-white mb-2 uppercase tracking-wide">Q: Can I sue the trucking company directly?</div>
                                    <p className="text-sm text-slate-400">Yes, under "Respondeat Superior" the company is liable for their driver's actions during scope of employment.</p>
                                </div>
                                <div className="p-6 bg-black/40 rounded-2xl border border-white/5">
                                    <div className="text-sm font-black text-white mb-2 uppercase tracking-wide">Q: How do regulations impact my multiplier?</div>
                                    <p className="text-sm text-slate-400">FMCSA violations serve as "Negligence Per Se", significantly increasing the non-economic multiplier.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
