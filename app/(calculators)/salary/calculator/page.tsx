import { getCalculatorMeta } from "@/lib/registry/calculators";
import SalaryCalculatorWrapper from "./CalculatorWrapper";

const id = "salary";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: `Salary Calculator Engine | Compensation Auditor 2026`,
    description: `Precision salary engine for annual to hourly conversion. Calculate take-home pay with institutional accuracy.`,
    alternates: {
        canonical: `https://mysmartcalculators.com/${id}/calculator`,
    }
};

export default function SalaryCalculatorPage() {
    return <SalaryCalculatorWrapper />;
}
