import type { Metadata } from "next";
import { SITE } from "@/lib/calculators/grade";
import GradeHubClient from "./HubClient";

export const metadata: Metadata = {
    title: `${SITE.name} | 2026 Institutional Academic Audit`,
    description: SITE.description,
    alternates: {
        canonical: SITE.baseUrl,
    },
    openGraph: {
        title: `${SITE.name} | 2026 Precision Grade & Performance Auditor`,
        description: SITE.description,
        url: SITE.baseUrl,
        type: "website",
    },
};

export default function GradeHubPage() {
    return <GradeHubClient />;
}
