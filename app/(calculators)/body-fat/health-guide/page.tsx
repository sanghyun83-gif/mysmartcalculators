import { Metadata } from "next";
import HubClient from "./HubClient";

export const metadata: Metadata = {
    title: "Body Fat Health Guide & Composition Science | 2026 Standards",
    description: "Deep dive into the science of body composition. Learn about adipose tissue anatomy, measurement protocols, and health implications for 2026.",
    alternates: { canonical: "https://mysmartcalculators.com/body-fat/health-guide" }
};

export default function BodyFatGuidePage() {
    return <HubClient />;
}
