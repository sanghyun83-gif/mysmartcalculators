import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Trucking Safety Regulations | FMCSA Standards | TruckMaster AI",
    description: "Understand federal trucking safety regulations and how logbook violations impact commercial accident settlements. Audit your case for compliance.",
    alternates: { canonical: './' }
};

export default function RegulationsPage() {
    return <HubClient />;
}
