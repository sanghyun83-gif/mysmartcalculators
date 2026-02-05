import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Car Accident Settlement Statistics 2026 | Payout Matrix",
    description: "Expert analysis of 2026 car accident settlement values, insurance multipliers, and geographic venue bias in motor vehicle tort.",
    alternates: { canonical: './' }
};

export default function SettlementsPage() {
    return <HubClient />;
}
