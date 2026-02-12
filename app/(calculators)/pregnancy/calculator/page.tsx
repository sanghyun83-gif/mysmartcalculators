import { getCalculatorMeta } from "@/lib/registry/calculators";
import CalculatorClient from "./CalculatorClient";

const id = "pregnancy";
const meta = getCalculatorMeta(id);

export const metadata = {
    title: `Calculator: ${meta?.title || "Pregnancy Due Date Calculator"}`,
    description: "Calculate your pregnancy due date and milestones with our precision tool. Support for LMP, IVF, and conception dates.",
};

export default function PregnancyCalculatorPage() {
    return <CalculatorClient />;
}
