import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Expert Guide to Digital Logic & Binary Architecture | 2026",
    description: "Deep dive into the architecture of digital intelligence. Learn about Two's complement, logic gates, and bitwise arithmetic.",
    alternates: {
        canonical: "https://mysmartcalculators.com/binary/health-guide"
    }
};

export default function BinaryGuidePage() {
    return <HubClient />;
}
