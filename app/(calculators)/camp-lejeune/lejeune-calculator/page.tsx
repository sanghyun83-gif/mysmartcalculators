import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "camp-lejeune";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title + " | Expert 2026 Audit",
    description: meta?.description,
    alternates: {
        canonical: meta?.canonical + "/lejeune-calculator",
    }
};

const LejeuneAuditEngine = dynamic(
    () => import("./LejeuneAuditEngine").then(mod => mod.LejeuneAuditEngineComponent),
    {
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function LejeuneCalculatorPage() {
    return <LejeuneAuditEngine />;
}
