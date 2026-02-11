import { SITE } from "@/lib/calculators/truck-accident";
import TruckCalculatorClient from "./TruckCalculatorClientV2";

export const metadata = {
    title: `Forensic Truck Accident Settlement Auditor 2026 | ${SITE.name}`,
    description: "Calculate FMCSA violation multipliers, Nuclear Venue impact, and Black Box data precision. Expert settlement audit for semi-truck and 18-wheeler accidents."
};

export default function SClassTruckCalculator() {
    return <TruckCalculatorClient />;
}
