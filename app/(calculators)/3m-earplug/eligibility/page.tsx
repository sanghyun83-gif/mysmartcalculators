import Link from "next/link";
import { SITE, EARPLUG_2026 } from "@/lib/calculators/3m-earplug";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import {
    Ear,
    ArrowLeft,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
    BadgeCheck,
    Activity,
    Shield,
    Scale,
    Gavel
} from "lucide-react";

export const metadata = {
    title: `3M Earplug Eligibility Audit 2026 | ${SITE.name}`,
    description: "Check qualification status for MDL 2885 settlement. Analysis of service dates, clinical markers, and CAEv2 documentation requirements."
};

export default function EligibilityPage() {
    const requirements = [
        { text: "Served in U.S. Military 2003-2015", detail: "Active duty or reserve training window." },
        { text: "Used CAEv2 (Combat Arms Earplugs)", detail: "Issued during OEF/OIF or state-side training." },
        { text: "Diagnosed Hearing Loss or Tinnitus", detail: "Must be documented in VA or clinical records." },
        { text: "Registration Deadline Check", detail: "Registration period for MDL 2885 standard claims." },
    ];

    const helpfulFactors = [
        "Documented CAEv2 issuance in Service Treatment Records (STR)",
        "VA Disability Rating for Tinnitus (10%) or Hearing Loss",
        "Clinical diagnosis of acoustic trauma while in service",
        "Uses hearing aids or cochlear implants prescribed by VA",
    ];

    return (
        <div className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-indigo-500/30 pb-24">
            {/* Header / Nav */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                <Link href="/3m-earplug" className="inline-flex items-center gap-2 text-[10px] font-black text-slate-500 hover:text-indigo-400 uppercase tracking-widest transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" /> Back to Case Intelligence
                </Link>

                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6">
                        <Scale className="w-3.5 h-3.5" />
                        Qualification Audit Sync
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic uppercase mb-6">
                        Eligibility <span className="text-indigo-500">Criteria.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 font-medium leading-[1.6]">
                        Determination of eligibility within the **$6.01B Global Settlement** is based on clinical documentation and forensic verification of service-connected exposure.
                    </p>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Mandatory Pillars */}
                        <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-12 flex items-center gap-3">
                                <BadgeCheck className="w-6 h-6 text-indigo-500" />
                                Mandatory Settlement Pillars
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {requirements.map((req, i) => (
                                    <div key={i} className="p-8 bg-black/40 border border-white/5 rounded-3xl hover:border-indigo-500/30 transition-all group">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="p-2 bg-emerald-500/10 rounded-xl">
                                                <CheckCircle className="w-5 h-5 text-emerald-400" />
                                            </div>
                                            <h4 className="text-sm font-black text-white uppercase tracking-widest">{req.text}</h4>
                                        </div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">{req.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mitigation/Expert Factors */}
                        <div className="bg-slate-900 border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                            <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-12 flex items-center gap-3">
                                <Activity className="w-6 h-6 text-indigo-500" />
                                Expert Clinical Factors
                            </h2>
                            <div className="space-y-4">
                                {helpfulFactors.map((factor, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-black/40 border border-white/5 rounded-[2.5rem] group hover:bg-white/[0.02] transition-colors">
                                        <div className="p-1.5 bg-indigo-500/10 rounded-lg shrink-0 mt-0.5">
                                            <Gavel className="w-4 h-4 text-indigo-400" />
                                        </div>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed uppercase tracking-tight">{factor}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Critical Deadline Alert */}
                        <div className="bg-red-500/5 border border-red-500/20 rounded-[3rem] p-10 flex items-start gap-8">
                            <div className="p-4 bg-red-500/10 rounded-2xl shrink-0">
                                <AlertTriangle className="w-8 h-8 text-red-500" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Registration Status Notice.</h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                    The primary deadline for initial MDL 2885 claim registration has passed. Most active claims are currently in the **Disbursement & Audit phase**. If you have an existing claim, ensure your audiological documentation is synchronized with current S-Class benchmarks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Trust Pins */}
                    <div className="lg:col-span-4 space-y-8 sticky top-32">
                        <div className="p-10 bg-slate-900 border border-white/10 rounded-[3rem] space-y-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-indigo-500 to-red-500" />
                            <h4 className="text-xl font-black text-white italic tracking-tighter uppercase leading-none text-center">Filing <br />Intelligence.</h4>

                            <div className="space-y-6">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-loose italic text-center">
                                    "Clinical records from 2024-2025 that show deterioration of hearing thresholds are critical for EPP Tier 4/5 upgrades."
                                </p>
                            </div>

                            <Link href="/3m-earplug/calculator" className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-center py-6 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-[1.03] shadow-xl italic">
                                Run Forensic Audit Engine <ArrowRight className="inline w-4 h-4 ml-1" />
                            </Link>

                            <div className="pt-8 border-t border-white/5 space-y-4">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-4 h-4 text-indigo-500" />
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">MDL 2885 Secure Sync</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Activity className="w-4 h-4 text-emerald-500" />
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Disbursing Phase 2</span>
                                </div>
                            </div>
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
