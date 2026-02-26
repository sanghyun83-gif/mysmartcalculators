import { permanentRedirect } from "next/navigation";

export default function MortgageRentVsBuyRedirectPage() {
  permanentRedirect("/mortgage#calculator");
}

