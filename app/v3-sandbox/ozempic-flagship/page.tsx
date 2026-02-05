import { Metadata } from "next";
import { HubClient } from "./HubClient";

export const metadata: Metadata = {
    title: "Ozempic Lawsuit Settlement Calculator | MDL 3094 Audit | OzempicMaster AI",
    description: "Estimate your Ozempic settlement using the 2026 MDL 3094 valuation model. Specialized focus on Gastroparesis, Ileus, and NAION claims.",
    alternates: { canonical: './' }
};

export default function OzempicHub() {
    return <HubClient />;
}
