"use client";

import { Scale, Shield, Info, Gavel, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoundupLegalGuide() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6">
                <div className="text-[11px] font-black text-emerald-500 uppercase tracking-[0.3em]">Legal Doctrine Audit</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">Strict Liability & Roundup.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Understanding the "Duty to Warn" framework in organophosphate litigation 2026.</p>
            </section>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <div className="p-10 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl italic">
                    "Litigation against Monsanto (Bayer) is primarily centered on the 'Warning Defect'—the scientific assertion that the manufacturer knew of the carcinogenic risks but obscured them from the public."
                </div>

                <h2 className="text-white text-3xl font-black italic">The 'Failure to Warn' Standard</h2>
                <p>
                    In most U.S. jurisdictions, a manufacturer has a non-delegable duty to warn consumers of known or knowable risks associated with their products. In the Roundup MDL 2741, plaintiffs argue that by 1999, internal glyphosate studies showed a clear genotoxic signal. By failing to include a cancer warning on the label until court mandates, Bayer is held to a **Strict Liability** standard.
                </p>

                <h2 className="text-white text-3xl font-black italic">Statute of Limitations & Discovery Rule</h2>
                <p>
                    A critical hurdle in 2026 is the **Discovery Rule**. Most states allow 2 years from the date you *knew or should have known* your cancer was linked to Roundup. Our analysts track these windows meticulously, as missing a filing deadline by even 24 hours can result in a complete bar to recovery, regardless of the injury severity.
                </p>

                <div className="grid md:grid-cols-2 gap-8 py-10">
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl space-y-4">
                        <h4 className="text-white font-black text-xl">Design Defect</h4>
                        <p className="text-sm">The argument that the chemical composition of Roundup is inherently dangerous, even when used as intended.</p>
                    </div>
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl space-y-4">
                        <h4 className="text-white font-black text-xl">Punitive Damages</h4>
                        <p className="text-sm">Awards intended to punish the defendant for 'reckless indifference' to the safety of consumers.</p>
                    </div>
                </div>
            </div>

            <div className="p-12 bg-emerald-600 rounded-[3rem] text-center space-y-6 shadow-2xl shadow-emerald-600/20">
                <h2 className="text-3xl font-black text-white tracking-tight">Ready to Audit Your Liability?</h2>
                <Link href="/roundup/calculator" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl">
                    Run Precision Calculator <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
