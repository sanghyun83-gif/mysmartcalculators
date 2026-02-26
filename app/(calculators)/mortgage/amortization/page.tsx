import { permanentRedirect } from "next/navigation";

export default function MortgageAmortizationRedirectPage() {
  permanentRedirect("/mortgage#amortization");
}

