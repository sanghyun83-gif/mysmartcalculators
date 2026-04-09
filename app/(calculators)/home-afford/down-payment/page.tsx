import type { Metadata } from "next";
import DownPaymentClient from "./DownPaymentClient";

export const metadata: Metadata = {
  title: "Down Payment Calculator 2026 | FHA, Conventional & PMI Scenarios",
  description: "Compare down payment options and see loan amount, PMI impact, and affordability shifts.",
  alternates: {
    canonical: "https://mysmartcalculators.com/home-afford/down-payment",
  },
};

export default function Page() {
  return <DownPaymentClient />;
}
