import { isCoreCalculatorId } from "@/lib/strategy/core-calculators";

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

function sanitizeCoreCalculatorParam(params: GaEventParams): GaEventParams {
  const calculatorId = params.calculator_id;
  if (typeof calculatorId !== "string") return params;

  if (!isCoreCalculatorId(calculatorId)) {
    const rest = { ...params };
    delete rest.calculator_id;
    return {
      ...rest,
      calculator_scope: "non_core_filtered",
    };
  }

  return {
    ...params,
    calculator_scope: "core20",
  };
}

export function sendGaEvent(name: GaEventName, params: GaEventParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const merged: GaEventParams = {
    traffic_quality: detectTrafficQuality(),
    ...sanitizeCoreCalculatorParam(params),
  };

  window.gtag("event", name, merged);
}

