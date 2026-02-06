import Link from "next/link";
import { SITE, DEFENDANTS, AFFF_2026 } from "@/lib/calculators/afff";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Droplets, ArrowLeft, ArrowRight, Building } from "lucide-react";

export const metadata = { title: `AFFF Lawsuit Defendants | ${SITE.name}`, description: "Companies being sued in AFFF PFAS litigation." };

export default function DefendantsPage() {
    const additionalInfo = [
        { name: "3M Company", details: "Largest AFFF manufacturer. Agreed to $12.5B+ water settlement. Personal injury claims ongoing. Announced exit from PFAS manufacturing." },
        { name: "DuPont/Chemours", details: "Major PFAS producer. Chemours spun off from DuPont. Both face significant litigation for PFAS contamination." },
        { name: "Tyco Fire Products", details: "AFFF manufacturer now owned by Johnson Controls. Named in thousands of AFFF lawsuits." },
        { name: "Kidde-Fenwal", details: "Fire suppression systems manufacturer. Named defendant in MDL 2873." },
    ];

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 py-3"><Link href="/afff" className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-amber-400"><ArrowLeft className="w-4 h-4" />Back</Link></div>
            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><Building className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Defendants</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AFFF Lawsuit Defendants</h1>
                    <p className="text-slate-400">Companies being sued in MDL 2873.</p>
                </div>

                <div className="space-y-6">
                    {additionalInfo.map((company, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">{company.name}</h3>
                            <p className="text-slate-400">{company.details}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-3">Key Settlement Developments</h3>
                    <ul className="space-y-2 text-slate-300 text-sm">
                        <li> <strong>3M Water Settlement (2024):</strong> $12.5B+ to settle water contamination claims</li>
                        <li> <strong>Personal Injury Claims:</strong> Being litigated separately in MDL 2873</li>
                        <li> <strong>Bellwether Trials:</strong> First cancer trials scheduled for 2026</li>
                        <li> <strong>3M PFAS Exit:</strong> Company announced plans to stop PFAS production</li>
                    </ul>
                </div>

                <div className="mt-12 text-center"><Link href="/afff/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="afff" count={5} /></div></div></section>
        </>
    );
}
