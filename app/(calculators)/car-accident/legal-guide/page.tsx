import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Car Accident Legal Guide & Liability Doctrine | 2026 Audit",
    description: "Expert analysis of Negligence, Duty of Care, and Comparative Fault rules in motor vehicle tort. Understanding your legal rights after an accident.",
    alternates: { canonical: './' }
};

export default function LegalGuidePage() {
    return <HubClient />;
}
