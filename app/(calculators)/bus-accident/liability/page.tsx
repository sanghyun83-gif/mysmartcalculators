import Link from "next/link";
import { SITE, BUS_2026 } from "@/lib/calculators/bus-accident";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Bus, ArrowLeft, ArrowRight, AlertTriangle, Scale, CheckCircle } from "lucide-react";

export const metadata = { title: `Common Carrier Liability | ${SITE.name}`, description: "Understanding common carrier liability in bus accident cases." };

export default function LiabilityPage() {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/bus-accident" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Scale className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Liability Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Carrier Liability</h1>
                    <p className="text-slate-400">Understanding heightened duty of care for bus companies.</p>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">What is a Common Carrier?</h3>
                    <p className="text-slate-300">A common carrier is a business that transports passengers for hire and offers services to the general public. Buses, airlines, trains, and taxis are common carriers. They owe passengers the highest duty of care under the law.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Heightened Duty of Care</h3>
                    <p className="text-slate-400 mb-4">Unlike regular drivers who must use &quot;reasonable care,&quot; common carriers must use the &quot;highest degree of care&quot; for passenger safety. This higher standard makes it easier to prove negligence in bus accident cases.</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        {["Safe vehicle maintenance", "Qualified drivers", "Safe boarding/exiting", "Protection from other passengers", "Safe route selection", "Proper emergency procedures"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Government Immunity</h3>
                    <p className="text-slate-400 mb-4">City and public transit buses are operated by government agencies, which have special legal protections:</p>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300 text-sm"><strong>Tort Claim Notice:</strong> You may have only 30-180 days to file a notice of claim before suing.</p></div>
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300 text-sm"><strong>Damage Caps:</strong> Some states limit how much you can recover from government entities.</p></div>
                        <div className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" /><p className="text-slate-300 text-sm"><strong>Special Procedures:</strong> Claims against government may require specific forms and procedures.</p></div>
                    </div>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Why This Matters for Your Case</h3>
                    <p className="text-slate-400">The common carrier doctrine often works in plaintiffs' favor because:</p>
                    <ul className="list-disc list-inside text-slate-300 mt-4 space-y-2">
                        <li>Higher standard of care makes proving negligence easier</li>
                        <li>Bus companies carry substantial insurance ($5M+ for charter buses)</li>
                        <li>Juries are sympathetic to injured passengers</li>
                        <li>Multiple victims often lead to larger settlements</li>
                    </ul>
                </div>
                <div className="mt-12 text-center"><Link href="/bus-accident/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="bus-accident" count={5} /></div></div></section>
        </>
    );
}
