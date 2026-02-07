import Link from "next/link";
import { SITE, ANKLE_2026, DEVICE_BRANDS } from "@/lib/calculators/ankle-implant";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Activity, ArrowLeft, ArrowRight, FileText, CheckCircle } from "lucide-react";

export const metadata = { title: `Ankle Implant Claims Guide | ${SITE.name}`, description: "How to file an ankle implant lawsuit." };

export default function GuidePage() {
    const steps = [
        { title: "Identify Your Implant", description: "Obtain surgical records identifying the exact manufacturer, model, and lot number of your ankle implant. Different devices have different known issues." },
        { title: "Document Device Failure", description: "Gather medical records showing implant failure, loosening, or complications. Include X-rays, CT scans, and diagnosis of issues like bone loss or component wear." },
        { title: "Record Revision or Fusion Surgery", description: "If you required revision surgery or ankle fusion, document all procedures. Ankle fusion cases often have higher values due to permanent loss of motion." },
        { title: "Calculate Total Damages", description: "Document all medical expenses, lost wages, pain and suffering, and future care needs. Include physical therapy, medications, and mobility aids." },
        { title: "Consult a Device Injury Attorney", description: "Contact an attorney experienced in medical device litigation. Ankle implant cases are complex. Many offer free consultations and work on contingency." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/ankle-implant" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-purple-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 rounded-full px-4 py-2 mb-4"><FileText className="w-4 h-4 text-purple-400" /><span className="text-sm text-purple-300">Claims Guide</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Ankle Implant Claims Guide</h1>
                    <p className="text-slate-400">How to file a device failure claim.</p>
                </div>

                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-8">
                    <h2 className="text-lg font-semibold text-white mb-4">Affected Device Brands</h2>
                    <div className="grid md:grid-cols-2 gap-3">
                        {DEVICE_BRANDS.map((brand) => (
                            <div key={brand.id} className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                                <p className="text-white font-medium">{brand.name}</p>
                                <p className="text-sm text-slate-400">{brand.info}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0"><div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center"><span className="text-purple-400 font-bold">{i + 1}</span></div></div>
                            <div><h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3><p className="text-slate-400">{step.description}</p></div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-300 mb-3">Key Evidence to Gather</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {["Surgical implant records", "Device lot/serial number", "X-rays showing failure", "Revision/fusion records", "Medical bills", "Lost wage documentation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-400" /><span className="text-slate-300 text-sm">{item}</span></div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 text-center"><Link href="/ankle-implant/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="ankle-implant" count={5} /></div></div></section>
        </>
    );
}
