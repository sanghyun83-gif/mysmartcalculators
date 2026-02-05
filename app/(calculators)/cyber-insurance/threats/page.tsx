import Link from "next/link";
import { SITE, CYBER_2026 } from "@/lib/calculators/cyber-insurance";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Shield, ArrowLeft, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata = { title: `Cyber Threats | ${SITE.name}`, description: "Types of cyber attacks covered by insurance." };

export default function ThreatsPage() {
    const threats = [
        { name: "Ransomware", frequency: "Most Common", description: "Attackers encrypt your data and demand payment. Average ransom: $170,000. Total costs often 10x ransom.", color: "red" },
        { name: "Business Email Compromise", frequency: "Very Common", description: "Attackers impersonate executives to authorize fraudulent transfers. Average loss: $125,000.", color: "amber" },
        { name: "Data Breach", frequency: "Common", description: "Unauthorized access to sensitive data. Triggers notification requirements and potential lawsuits.", color: "blue" },
        { name: "Phishing", frequency: "Very Common", description: "Fraudulent emails trick employees into revealing credentials. Entry point for most attacks.", color: "purple" },
        { name: "Social Engineering", frequency: "Common", description: "Manipulation tactics to gain access or transfer funds. Includes vishing (phone) and smishing (SMS).", color: "emerald" },
        { name: "DDoS", frequency: "Less Common", description: "Distributed denial of service overwhelms systems. Causes business interruption.", color: "slate" },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-red-400" /><span className="text-sm text-red-300">Cyber Threats</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Common Cyber Threats</h1>
                    <p className="text-slate-400">Types of attacks covered by cyber insurance.</p>
                </div>

                <div className="space-y-4">
                    {threats.map((threat, i) => (
                        <div key={i} className={`bg-${threat.color}-900/20 border border-${threat.color}-500/30 rounded-xl p-6`}>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{threat.name}</h3>
                                <span className={`text-sm text-${threat.color}-400`}>{threat.frequency}</span>
                            </div>
                            <p className="text-slate-400">{threat.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-emerald-300 mb-2">Prevention Reduces Premiums</h3>
                    <p className="text-slate-300">MFA, EDR, employee training, regular backups, and patch management can reduce premiums 10-25%.</p>
                </div>

                <div className="mt-12 text-center"><Link href="/cyber-insurance/calculator" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Premium<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="cyber-insurance" count={5} /></div></div></section>

        </>
    );
}
