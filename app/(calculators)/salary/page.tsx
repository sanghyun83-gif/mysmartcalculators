import { getCalculatorMeta } from "@/lib/registry/calculators";
import { SALARY_2026 } from "@/lib/calculators/salary";
import dynamic from "next/dynamic";

const id = "salary";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: meta?.title || "Salary Calculator | Precision Compensation Auditor 2026",
    description: meta?.description || "Institutional-grade salary calculator for annual, monthly, and hourly audits. Analyze real earnings with 2026 financial standards.",
    alternates: {
        canonical: `https://mysmartcalculators.com/${id}`,
    }
};

const HubClient = dynamic(
    () => import("./HubClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function SalaryPage() {
    return <HubClient />;
}
