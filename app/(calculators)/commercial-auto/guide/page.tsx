import Link from "next/link";
import { SITE, CA_2026 } from "@/lib/calculators/commercial-auto";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Truck, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Coverage Guide | ${SITE.name}`, description: "Commercial auto coverage options." };

export default function GuidePage() {
    const coverages = [
        { name: "Liability", desc: "Covers injuries and property damage you cause to others. Required in all states." },
        { name: "Collision", desc: "Pays to repair/replace your vehicle after an accident, regardless of fault." },
        { name: "Comprehensive", desc: "Covers theft, vandalism, weather, fire, and non-collision damage." },
        { name: "Uninsured/Underinsured", desc: "Protects you when the at-fault driver has no or insufficient coverage." },
        { name: "Medical Payments", desc: "Covers medical expenses for driver and passengers regardless of fault." },
        { name: "Hired/Non-Owned Auto", desc: "Covers rentals and employee personal vehicles used for business." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/commercial-auto" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-blue-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Coverage Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Commercial Auto Coverage</h1>
                    <p className="text-slate-400">Essential coverage types for business vehicles.</p>
                </div>

                <div className="space-y-4">
                    {coverages.map((cov, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div><h3 className="text-lg font-semibold text-white">{cov.name}</h3><p className="text-slate-400 mt-1">{cov.desc}</p></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">DOT / FMCSA Requirements</h3>
                    <p className="text-slate-300">Interstate trucking requires $750,000 minimum liability. Hazmat carriers need $1M-$5M. Get proper authority before operating.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/commercial-auto/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Calculate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="commercial-auto" count={5} /></div></div></section>
        </>
    );
}
