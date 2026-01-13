import { Metadata } from "next";
import { HubClient } from "./HubClient";

export const metadata: Metadata = {
  title: "Car Accident Settlement Calculator | S-Class Legal Audit 2026",
  description: "Professional-grade car accident settlement calculator. Analyze liability, medical bills, and pain & suffering damages across all 50 states.",
};

export default function Page() {
  return <HubClient />;
}
