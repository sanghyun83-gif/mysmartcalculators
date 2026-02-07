import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Vehicle Safety Regulations & EDR Data Rights | 2026 Audit",
    description: "Analyzing NHTSA safety standards, state insurance mandates, and Black Box (EDR) data ownership rules for 2026 accidents.",
    alternates: { canonical: './' }
};

export default function RegulationsPage() {
    return <HubClient />;
}
