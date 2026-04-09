import type { Metadata } from "next";
import RentVsBuyClient from "./RentVsBuyClient";

export const metadata: Metadata = {
  title: "Rent vs Buy Calculator 2026 | Compare Housing Cost Outcomes",
  description: "Compare renting vs buying outcomes using payment, equity, and total cost assumptions.",
  alternates: {
    canonical: "https://mysmartcalculators.com/home-afford/rent-vs-buy",
  },
};

export default function Page() {
  return <RentVsBuyClient />;
}
