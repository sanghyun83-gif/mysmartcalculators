export type GaEventName =
  | "calculator_start"
  | "calculator_complete"
  | "cta_click"
  | "contact_click";

export type TrafficQuality = "human_like" | "suspected_automation" | "unverified_client";

type GaEventParams = Record<string, string | number | boolean | undefined>;

export function detectTrafficQuality(): TrafficQuality {
  if (typeof window === "undefined") return "unverified_client";

  // Client-side heuristic only; final filtering should be done in GA4 + edge logs.
  const webdriver = typeof navigator !== "undefined" && !!navigator.webdriver;
  if (webdriver) return "suspected_automation";

  return "human_like";
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function sendGaEvent(name: GaEventName, params: GaEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const merged: GaEventParams = {
    traffic_quality: detectTrafficQuality(),
    ...params,
  };

  window.gtag("event", name, merged);
}

