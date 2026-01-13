import { Metadata } from "next";
import { CalculatorClient } from "./CalculatorClient";

export const metadata: Metadata = {
    title: "Car Accident Settlement Auditor | Precision Tort Analysis",
    description: "Calculate your car accident settlement potential using 50-state comparative fault logic and actuarial damage staging.",
};

export default function Page() {
    return <CalculatorClient />;
}
