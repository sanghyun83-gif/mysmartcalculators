import { permanentRedirect } from "next/navigation";

export default function MortgageCalculatorRedirectPage() {
  permanentRedirect("/mortgage#calculator");
}

