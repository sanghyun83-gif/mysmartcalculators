import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Truck Accident Multiplier Guide | Legal Framework | TruckMaster AI",
    description: "Learn how multipliers are applied to truck accident settlements. Analysis of comparative fault and pain and suffering calculations.",
    alternates: { canonical: './' }
};

export default function LegalGuidePage() {
    return <HubClient />;
}
