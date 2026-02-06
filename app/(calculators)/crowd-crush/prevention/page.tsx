import Link from "next/link";
import { SITE, CRUSH_2026 } from "@/lib/calculators/crowd-crush";
import { RelatedCalculators } from "@/components/RelatedCalculators";
import { Users, ArrowLeft, ArrowRight, AlertTriangle, XCircle } from "lucide-react";

export const metadata = { title: `Safety Failures in Crowd Crush | ${SITE.name}`, description: "What goes wrong before crowd crush disasters." };

export default function PreventionPage() {
    const failures = [
        { title: "Failure to Monitor Density", description: "Organizers failed to use crowd density monitoring systems. Warning signs like wave motion and difficulty breathing were ignored." },
        { title: "Exceeded Capacity Limits", description: "Venues exceeded safe capacity to maximize ticket sales. Overcrowding is the primary cause of crush disasters." },
        { title: "Inadequate Security Staffing", description: "Not enough trained security personnel to monitor crowd conditions and respond to developing crush situations." },
        { title: "Blocked or Insufficient Exits", description: "Emergency exits blocked, locked, or too few for the crowd size. People couldn't escape when danger developed." },
        { title: "Poor Emergency Response", description: "Medical teams couldn't reach victims. Emergency stops weren't called. Delay in recognizing the severity of the situation." },
        { title: "Ignored Prior Warnings", description: "Many disasters occur after earlier near-misses or warning signs. Organizers failed to learn from previous incidents." },
    ];

    return (
        <>


            <section className="max-w-4xl mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/50 rounded-full px-4 py-2 mb-4"><AlertTriangle className="w-4 h-4 text-amber-400" /><span className="text-sm text-amber-300">Safety Failures</span></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">What Went Wrong</h1>
                    <p className="text-slate-400">Common safety failures in crowd crush disasters.</p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-8">
                    <h3 className="text-lg font-semibold text-red-300 mb-2">{CRUSH_2026.statistics.astroworld}  {CRUSH_2026.statistics.itaewon}</h3>
                    <p className="text-slate-300">These preventable tragedies share common patterns of organizational failures that create liability.</p>
                </div>

                <div className="space-y-4">
                    {failures.map((failure, i) => (
                        <div key={i} className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex items-start gap-4">
                            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">{failure.title}</h3>
                                <p className="text-slate-400 mt-1">{failure.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Liable Parties</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {["Venue operators", "Event promoters", "Security companies", "Crowd management firms", "Local government", "Performers (in some cases)"].map((party, i) => (
                            <div key={i} className="flex items-center gap-2 text-slate-300"><span className="w-2 h-2 rounded-full bg-amber-400"></span>{party}</div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center"><Link href="/crowd-crush/calculator" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-semibold">Estimate Settlement<ArrowRight className="w-5 h-5" /></Link></div>
            </section>
            <section className="max-w-6xl mx-auto px-4 py-8"><div className="flex justify-center"><div className="w-full max-w-xs"><RelatedCalculators currentCalc="crowd-crush" count={5} /></div></div></section>

        </>
    );
}
