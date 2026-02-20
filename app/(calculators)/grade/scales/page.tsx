import type { Metadata } from "next";
import { SITE } from "@/lib/calculators/grade";
import ScalesClient from "./ScalesClient";

export const metadata: Metadata = {
    title: `2026 Grading Scales & GPA Conversion Tables | ${SITE.name}`,
    description: "Official 2026 academic grading scales and GPA conversion tables. Comprehensive guide for US 4.0 scale, UK honour classes, and ECTS benchmarks.",
    alternates: {
        canonical: SITE.baseUrl + "/scales",
    },
};

export default function ScalesPage() {
    return <ScalesClient />;
}
