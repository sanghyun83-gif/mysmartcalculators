import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, AlertTriangle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Trucking Safety Regulations | FMCSA Standards | TruckMaster AI",
    description: "Understand federal trucking safety regulations and how logbook violations impact commercial accident settlements. Audit your case for compliance.",
    alternates: { canonical: './' }
};

export default function RegulationGuide() {
    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto px-6">

                <div className="py-20 max-w-4xl text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-8">
                        <Shield className="w-3 h-3" /> FMCSA Compliance Unit
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.9]">
                        Trucking <span className="text-emerald-500">Safety Unit</span>.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
                        Federal Motor Carrier Safety Administration (FMCSA) regulations govern every aspect of
                        commercial trucking. Violations of these rules often yield multi-million dollar verdicts.
                    </p>

                    <div className="grid gap-8">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] space-y-6 group">
                            <div className="flex items-center gap-4">
                                <AlertTriangle className="w-8 h-8 text-amber-500 group-hover:animate-pulse" />
                                <h3 className="text-2xl font-black tracking-tight">Hours of Service (HOS)</h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed">
                                Drivers are strictly limited on how many hours they can drive without sleep.
                                "Cooking the books" or falsifying logbooks is a primary driver of
                                punitive damages in truck accident litigation.
                            </p>
                        </div>

                        <div className="p-10 bg-white/5 border border-white/10 rounded-[3rem] space-y-8 shadow-xl">
                            <h3 className="text-2xl font-black tracking-tight">Standard Logbook Violations</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    "Fatigued Driving (Over HOS)",
                                    "Improper Vehicle Maintenance",
                                    "Inadequate Driver Training",
                                    "Weight Limit Violations"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-white/5">
                                <Link href="/truck-accident/calculator" className="flex items-center justify-between p-6 bg-emerald-600 rounded-2xl hover:bg-emerald-500 transition-all group">
                                    <span className="text-xs font-black uppercase tracking-widest text-white">Analyze Case with Regulations</span>
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
