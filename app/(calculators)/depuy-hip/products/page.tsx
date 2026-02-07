import Link from "next/link";
import { SITE, IMPLANT_PRODUCTS, DEPUY_2026 } from "@/lib/calculators/depuy-hip";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Heart, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Recalled DePuy Products | ${SITE.name}`, description: "DePuy ASR and Pinnacle hip products." };

export default function ProductsPage() {
    const products = [
        { name: "ASR Hip System", status: "Recalled 2010", issue: "12-13% failure rate at 5 years. Metal-on-metal design caused severe metallosis and tissue damage." },
        { name: "ASR XL Acetabular System", status: "Recalled 2010", issue: "Same design flaws as ASR. Metal debris released into surrounding tissue." },
        { name: "Pinnacle Metal-on-Metal", status: "Not Recalled", issue: "Massive litigation over metallosis, pseudotumors. Jury verdicts exceeding $1 billion." },
        { name: "LFIT V40 Femoral Head", status: "Litigation", issue: "Corrosion at head-neck junction causing metal debris and early failure." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Recalled Products</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">DePuy Hip Products</h1>
                    <p className="text-slate-400">Recalled and litigated DePuy hip implants.</p>
                </div>
                <div className="space-y-6">
                    {products.map((product, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded ${product.status.includes('Recalled') ? 'bg-red-500/20 text-red-400' : 'bg-amber-500/20 text-amber-400'}`}>{product.status}</span>
                            </div>
                            <p className="text-slate-400">{product.issue}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-300 mb-3">Why the Recall?</h3>
                    <p className="text-slate-300">DePuy recalled the ASR hip systems in August 2010 after UK registry data showed the failure rates were 12-13% at 5 years - far exceeding the 5% benchmark for acceptable hip implant performance.</p>
                </div>
                <div className="mt-12 text-center"><Link href="/depuy-hip/calculator" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="depuy-hip" count={5} /></div></div></section>

        </>
    );
}
