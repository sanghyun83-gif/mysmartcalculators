import { getCalculatorMeta } from "@/lib/registry/calculators";
import dynamic from "next/dynamic";

const id = "compound-interest";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: `Calculator | ${meta?.title}`,
    description: `Precision wealth accretion calculator. ${meta?.description}`,
    alternates: {
        canonical: `https://mysmartcalculators.com/${id}/calculator`,
    }
};

const CalculatorClient = dynamic(
    () => import("./CalculatorClient"),
    {
        ssr: true,
        loading: () => <div className="min-h-screen bg-slate-950" />
    }
);

export default function CalculatorPage() {
    return <CalculatorClient />;
}
