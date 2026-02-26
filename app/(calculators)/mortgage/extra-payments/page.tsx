import { permanentRedirect } from "next/navigation";

export default function MortgageExtraPaymentsRedirectPage() {
  permanentRedirect("/mortgage#calculator");
}

