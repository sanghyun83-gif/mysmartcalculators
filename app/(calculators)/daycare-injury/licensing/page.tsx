import Link from "next/link";
import { SITE, DAYCARE_2026 } from "@/lib/calculators/daycare-injury";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Baby, ArrowLeft, ArrowRight, FileText, XCircle, CheckCircle } from "lucide-react";

export const metadata = { title: `Daycare Licensing Violations | ${SITE.name}`, description: "How licensing violations affect daycare injury claims." };

export default function LicensingPage() {
    const violations = [
        { title: "Unlicensed Operation", description: "Operating a daycare without proper state licensing. Creates presumption of negligence.", impact: "Critical" },
        { title: "Staff Ratio Violations", description: "Exceeding maximum child-to-staff ratios. Common violation that leads to inadequate supervision.", impact: "High" },
        { title: "Background Check Failures", description: "Failure to conduct required employee background checks or employing disqualified individuals.", impact: "Critical" },
        { title: "Safety Inspection Failures", description: "Failed fire safety, health, or general safety inspections. Documented hazards strengthen claims.", impact: "High" },
        { title: "Training Requirements", description: "Staff lacking required CPR, first aid, or childcare training certifications.", impact: "Medium" },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Licensing Violations</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Daycare Licensing Violations</h1>
                    <p className="text-slate-400">How violations strengthen injury claims.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-bold text-white mb-4">Why Licensing Matters</h2>
                    <p className="text-slate-300 mb-4">Licensing violations are powerful evidence in daycare injury cases. They demonstrate the facility knew safety standards and failed to meet them.</p>
                    <p className="text-slate-300">Check your state&apos;s licensing database for inspection reports and prior complaints against the facility.</p>
                </div>

                <div className="space-y-4">
                    {violations.map((item, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-start gap-4">
                            <div className="flex-shrink-0"><XCircle className={`w-6 h-6 ${item.impact === 'Critical' ? 'text-red-400' : item.impact === 'High' ? 'text-amber-400' : 'text-blue-400'}`} /></div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                    <span className={`text-xs px-2 py-1 rounded ${item.impact === 'Critical' ? 'bg-red-500/20 text-red-400' : item.impact === 'High' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>{item.impact}</span>
                                </div>
                                <p className="text-slate-400 mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-300 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" />Where to Find Licensing Records</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["State licensing website", "HHS childcare database", "Local health department", "State attorney general", "Court records", "News archives"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/daycare-injury/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="daycare-injury" count={5} /></div></div></section>

        </>
    );
}
