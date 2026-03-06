export type GaEventName =
  | "calculator_start"
  | "calculator_complete"
  | "cta_click"
  | "contact_click";

type GaEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendGaEvent(name: GaEventName, params: GaEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", name, params);
}

