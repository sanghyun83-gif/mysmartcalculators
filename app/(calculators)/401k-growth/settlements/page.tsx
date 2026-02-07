import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "401(k) Compounding Benchmarks & Market Intelligence | 2026 Audit",
    description: "Technical analysis of retirement wealth benchmarks, compounding duration logic, and S&P 500 performance expectations for 2026.",
    alternates: { canonical: './' }
};

export default function SettlementsPage() {
    return <HubClient />;
}
