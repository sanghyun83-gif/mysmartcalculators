import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Roundup Settlement Statistics 2026 | MDL 2741 Fund Data",
    description: "Expert analysis of the $10.9B global settlement fund for Roundup claims. Technical breakdown of payout tiers and jury award benchmarks.",
    alternates: { canonical: './' }
};

export default function SettlementsPage() {
    return <HubClient />;
}
