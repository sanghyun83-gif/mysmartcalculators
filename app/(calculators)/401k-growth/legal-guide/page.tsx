import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "401(k) Legal Framework & ERISA Protections | 2026 Audit",
    description: "Expert analysis of Fiduciary Duty, ERISA protections, and IRS Section 401(k) tax code compliance. Understanding your legal rights in retirement planning.",
    alternates: { canonical: './' }
};

export default function LegalGuidePage() {
    return <HubClient />;
}
