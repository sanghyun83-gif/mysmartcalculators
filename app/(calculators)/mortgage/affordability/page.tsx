import { permanentRedirect } from "next/navigation";

export default function MortgageAffordabilityRedirectPage() {
  permanentRedirect("/mortgage#affordability");
}

