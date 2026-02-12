import { Metadata } from "next";
import HubClient from "./HubClient";
import { BINARY_2026 } from "@/lib/calculators/binary";

export const metadata: Metadata = {
    title: BINARY_2026.metadata.title,
    description: BINARY_2026.metadata.description,
    keywords: BINARY_2026.metadata.keywords,
    alternates: {
        canonical: "https://mysmartcalculators.com/binary"
    }
};

export default function BinaryHubPage() {
    return <HubClient />;
}
