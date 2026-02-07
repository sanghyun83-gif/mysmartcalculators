import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "EPA vs. IARC | Roundup Regulatory Landscape 2026",
    description: "Analyzing the 2026 global regulatory landscape for Glyphosate usage and conflicting mandates. Expert insight into EPA and IARC science.",
    alternates: { canonical: './' }
};

export default function RegulationsPage() {
    return <HubClient />;
}
