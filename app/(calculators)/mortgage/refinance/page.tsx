import { permanentRedirect } from "next/navigation";

export default function MortgageRefinanceRedirectPage() {
  permanentRedirect("/mortgage#refinance");
}

