import { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalHeader from "@/components/v3/GlobalHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ozempic MDL 3094 Flagship | Audit Case Now | OzempicMaster AI",
    description: "Handcrafted expert portal for Ozempic settlement valuations. Specialized gastroparesis and vision loss litigation data.",
};

export default function OzempicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`min-h-screen bg-slate-950 text-slate-200 ${inter.className}`}>
            <GlobalHeader />
            <div className="pt-20">
                {children}
            </div>

            {/* S-Class Universal Footer */}
            <footer className="py-12 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="space-y-4 text-center md:text-left">
                            <div className="text-xl font-black tracking-tighter text-white uppercase italic">
                                Ozempic<span className="text-rose-500">Master</span> AI
                            </div>
                            <p className="text-[10px] text-slate-500 max-w-sm uppercase tracking-widest leading-loose">
                                Professional-grade MDL 3094 modeling engine. Not a law firm. Not medical advice.
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-2 text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                NODE-KOREA-WEST-D3 (Seoul Hub)
                            </div>
                            <div>Verified by Data Analyst Expert Team</div>
                            <div className="mt-4 p-2 bg-white/5 border border-white/10 rounded-lg text-rose-500 font-black">
                                Seoul Central District Court (ROK) Jurisdiction
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
