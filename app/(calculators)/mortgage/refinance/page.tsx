import { Metadata } from "next";
import RefinanceClient from "./RefinanceClient";

export const metadata: Metadata = {
    title: "Mortgage Refinance Calculator | Alpha Savings Audit",
    description: "Determine if refinancing your mortgage is mathematically sound. Calculate monthly savings and break-even trajectory with actuarial precision.",
};

export default function RefinancePage() {
    return <RefinanceClient />;
}
