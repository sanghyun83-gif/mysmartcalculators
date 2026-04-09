import type { Metadata } from "next";
import MonthlyPaymentClient from "./MonthlyPaymentClient";

export const metadata: Metadata = {
  title: "Monthly Mortgage Payment Calculator 2026 | PITI Breakdown",
  description: "Estimate monthly housing payment with principal, interest, taxes, insurance, and PMI assumptions.",
  alternates: {
    canonical: "https://mysmartcalculators.com/home-afford/monthly-payment",
  },
};

export default function Page() {
  return <MonthlyPaymentClient />;
}
