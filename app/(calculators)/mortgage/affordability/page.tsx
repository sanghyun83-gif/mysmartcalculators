import { Metadata } from "next";
import AffordabilityClient from "./AffordabilityClient";

export const metadata: Metadata = {
    title: "Mortgage Affordability Calculator | Purchase Capacity Auditor",
    description: "Determine how much home you can mathematically afford. Calculate maximum purchase price based on DTI rules and actuarial precision.",
};

export default function AffordabilityPage() {
    return <AffordabilityClient />;
}
