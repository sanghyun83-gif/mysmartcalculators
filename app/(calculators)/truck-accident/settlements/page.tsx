import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Truck Accident Settlement Statistics 2026 | Payout Data | TruckMaster AI",
    description: "Explore 2026 truck accident settlement statistics and jury award benchmarks. Data-driven analysis for commercial vehicle litigation.",
    alternates: { canonical: './' }
};

export default function SettlementsPage() {
    return <HubClient />;
}
