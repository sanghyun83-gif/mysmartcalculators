import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "SECURE Act 2.0 Compliance | 2026 Retirement Regulations",
    description: "Analyzing the 2026 shifts in federal retirement mandates, RMD pivots, and Roth catch-up rules under the SECURE Act 2.0.",
    alternates: { canonical: './' }
};

export default function RegulationsPage() {
    return <HubClient />;
}
