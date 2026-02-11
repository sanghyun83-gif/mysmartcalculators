import { getCalculatorMeta } from "@/lib/registry/calculators";
import { ClientOnly } from "@/components/ClientOnly";
import { LejeuneAuditEngineComponent as LejeuneAuditEngine } from "./LejeuneAuditEngine";

const id = "camp-lejeune";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title + " | Expert 2026 Audit",
    description: meta?.description,
    alternates: {
        canonical: meta?.canonical + "/lejeune-calculator",
    }
};

export default function LejeuneCalculatorPage() {
    return (
        <ClientOnly fallback={<div className="min-h-screen bg-slate-950" />}>
            <LejeuneAuditEngine />
        </ClientOnly>
    );
}
