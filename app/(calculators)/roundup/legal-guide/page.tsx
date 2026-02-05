import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Roundup Lawsuit Legal Guide | Strict Liability Standards",
    description: "Expert analysis of the 'Duty to Warn' framework in Roundup litigation 2026. Understanding strict liability for glyphosate exposure.",
    alternates: { canonical: './' }
};

export default function LegalGuidePage() {
    return <HubClient />;
}
