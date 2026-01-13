"use client";

import { Scale, Shield, Info, Gavel, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CarAccidentLegalGuide() {
    return (
        <main className="py-24 max-w-4xl mx-auto px-6 space-y-20">
            <section className="space-y-6">
                <div className="text-[11px] font-black text-red-500 uppercase tracking-[0.3em]">Tort Law Compliance Audit</div>
                <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">The Law of Liability.</h1>
                <p className="text-slate-400 text-xl font-medium leading-relaxed">Analyzing Negligence, Duty of Care, and Proxy Liability in 2026 Motor Vehicle Tort.</p>
            </section>

            <div className="prose prose-invert prose-slate max-w-none text-slate-400 space-y-12 text-lg font-medium leading-relaxed">
                <div className="p-10 bg-red-600/5 border border-red-600/20 rounded-3xl italic">
                    "Liability is not an opinion; it is a mathematical outcome of documenting a breach in the standard duty of care required by state-level vehicle codes."
                </div>

                <h2 className="text-white text-3xl font-black italic">The Doctrine of Negligence</h2>
                <p>
                    Most car accident claims are based on **Negligence**. To prevail, you must prove that the other driver failed to act with the level of care that a reasonable person would have exercised under similar circumstances. In 2026, this increasingly includes the use of autonomous systems (L2/L3) and the failure to disengage autopilot in hazardous conditions.
                </p>

                <h2 className="text-white text-3xl font-black italic">Pure vs. Modified Comparative Fault</h2>
                <p>
                    Understanding your jurisdiction's fault threshold is critical. In "Pure Comparative" states (like California), you can recover damages even if you are 99% at fault. However, in "Modified" states, being 51% responsible results in a complete **Legal Bar** from all compensation. Our auditor integrates these rules into every calculation.
                </p>

                <div className="grid md:grid-cols-2 gap-8 py-10">
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl space-y-4">
                        <h4 className="text-white font-black text-xl">Vicarious Liability</h4>
                        <p className="text-sm">When an employer is legally responsible for an accident caused by an employee during work hours.</p>
                    </div>
                    <div className="p-8 bg-slate-900 border border-white/10 rounded-3xl space-y-4">
                        <h4 className="text-white font-black text-xl">Punitive Damages</h4>
                        <p className="text-sm">Extra compensation awarded in cases of extreme recklessness (e.g., DUI or extreme speeding).</p>
                    </div>
                </div>
            </div>

            <div className="p-12 bg-red-600 rounded-[3rem] text-center space-y-6 shadow-2xl shadow-red-600/20">
                <h2 className="text-3xl font-black text-white tracking-tight">Ready to Audit Your Claim?</h2>
                <Link href="/car-accident/calculator" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all shadow-xl">
                    Run Settlement Auditor <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </main>
    );
}
