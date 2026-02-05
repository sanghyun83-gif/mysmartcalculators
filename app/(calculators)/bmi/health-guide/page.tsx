import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "BMI Health Guide & Metabolic Risk Analysis | WHO 2026",
    description: "Expert guide on Body Mass Index classifications, metabolic health risks, and clinical weight management strategies based on WHO/CDC standards.",
    alternates: { canonical: './' }
};

export default function HealthGuidePage() {
    return <HubClient />;
}
