import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "personal-loan";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Personal Loan Calculator - Free APR & Payment Auditor",
    description: meta?.description || "Calculate personal loan payments and total cost. Free 2026 auditor with state-specific usury limits and legal context.",
    alternates: {
        canonical: meta?.canonical || "https://mysmartcalculators.com/personal-loan",
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function PersonalLoanPage() {
    return <HubClient />;
}
