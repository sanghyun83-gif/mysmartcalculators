import { SITE } from "@/lib/calculators/construction-accident";
import ConstructionCalculatorClient from "./ConstructionCalculatorClientV2";

export const metadata = {
    title: `Forensic Construction Accident Auditor 2026 | ${SITE.name}`,
    description: "Calculate Section 240/241 liability and OSHA violation multipliers. Forensic settlement audit for construction site injuries."
};

export default function ConstructionCalculatorPage() {
    return <ConstructionCalculatorClient />;
}
