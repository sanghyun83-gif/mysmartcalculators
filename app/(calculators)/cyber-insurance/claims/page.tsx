import Link from "next/link";
import { SITE, CYBER_2026 } from "@/lib/calculators/cyber-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Shield, ArrowLeft, ArrowRight } from "lucide-react";

export const metadata = { title: `Common Cyber Claims | ${SITE.name}`, description: "Common cyber insurance claims." };

export default function ClaimsPage() {
    const claims = [
        { name: "Ransomware Attack", frequency: "35% of claims", example: "Attackers encrypted all servers. $250K ransom + $500K recovery costs + 2 weeks downtime.", avgCost: "$275,000" },
        { name: "Business Email Compromise", frequency: "25% of claims", example: "CFO received spoofed email from 'CEO' authorizing wire transfer to fraudulent account.", avgCost: "$125,000" },
        { name: "Data Breach", frequency: "20% of claims", example: "Customer PII exposed. Required notification, credit monitoring, forensics, and PR.", avgCost: "$200,000" },
        { name: "Funds Transfer Fraud", frequency: "10% of claims", example: "Social engineering attack convinced employee to change vendor payment instructions.", avgCost: "$175,000" },
        { name: "Business Interruption", frequency: "5% of claims", example: "Systems down for 10 days after attack. Lost revenue and extra expenses to recover.", avgCost: "$150,000" },
        { name: "Regulatory Investigation", frequency: "5% of claims", example: "State AG investigation after breach. Legal fees, response costs, potential fines.", avgCost: "$100,000" },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/50 rounded-full px-4 py-2 mb-4"><Shield className="w-4 h-4 text-blue-400" /><span className="text-sm text-blue-300">Common Claims</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Cyber Claims</h1>
                    <p className="text-slate-400">Real-world cyber insurance claims.</p>
                </div>

                <div className="space-y-4">
                    {claims.map((claim, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{claim.name}</h3>
                                <div className="text-right">
                                    <p className="text-sm text-blue-400">{claim.frequency}</p>
                                    <p className="text-xs text-emerald-400">{claim.avgCost} avg</p>
                                </div>
                            </div>
                            <p className="text-slate-400">{claim.example}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-amber-300 mb-2">Average Breach Cost: $4.45M</h3>
                    <p className="text-slate-300">For large enterprises. SMB average is $120,000. 60% of SMBs go out of business within 6 months of a major breach.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/cyber-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="cyber-insurance" count={5} /></div></div></section>

        </>
    );
}
