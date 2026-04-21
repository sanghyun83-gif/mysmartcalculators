"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGaEvent } from "@/lib/analytics/ga";
import {
  getFirstSegment,
  isCoreCalculatorId,
  isCoreCalculatorPath,
} from "@/lib/strategy/core-calculators";

const EVENT_THROTTLE_MS = 5000;

export default function FoundationEventTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname || "/";
    const firstSegment = getFirstSegment(currentPath);
    const coreCalculatorId =
      isCoreCalculatorPath(currentPath) && isCoreCalculatorId(firstSegment)
        ? firstSegment
        : null;

    function isHiddenContext() {
      return document.visibilityState !== "visible" || !document.hasFocus();
    }

    function canSendWithThrottle(key: string) {
      const now = Date.now();
      const previous = Number(sessionStorage.getItem(key) || "0");
      if (Number.isFinite(previous) && now - previous < EVENT_THROTTLE_MS) {
        return false;
      }
      sessionStorage.setItem(key, String(now));
      return true;
    }

    function onFocusIn(event: FocusEvent) {
      if (!coreCalculatorId || isHiddenContext()) return;      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isFormField =
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA";
      if (!isFormField) return;

      const sentKey = `ga_start_sent:${currentPath}`;
      if (sessionStorage.getItem(sentKey)) return;

      const throttleKey = `ga_throttle:calculator_start:${currentPath}`;
      if (!canSendWithThrottle(throttleKey)) return;

      sendGaEvent("calculator_start", {
        path: currentPath,
        route: currentPath,
        calculator_id: coreCalculatorId,
      });
      sessionStorage.setItem(sentKey, "1");
    }

    function onClick(event: MouseEvent) {
      if (isHiddenContext()) return;

      const element = event.target as HTMLElement | null;
      if (!element) return;

      const button = element.closest("button");
      const link = element.closest("a");

      if (button && coreCalculatorId) {
        const label = (button.textContent || "").trim().slice(0, 80);
        if (/calculate|estimate|result/i.test(label)) {
          const throttleKey = `ga_throttle:calculator_complete:${currentPath}`;
          if (!canSendWithThrottle(throttleKey)) return;

          sendGaEvent("calculator_complete", {
            path: currentPath,
            route: currentPath,
            calculator_id: coreCalculatorId,
            label: label || "unknown_button",
          });
        }
      }

      if (link) {
        const href = link.getAttribute("href") || "";
        const label = (link.textContent || "").trim().slice(0, 80);

        if (href.includes("/contact")) {
          const throttleKey = `ga_throttle:contact_click:${currentPath}:${href}`;
          if (!canSendWithThrottle(throttleKey)) return;

          sendGaEvent("contact_click", {
            path: currentPath,
            route: currentPath,
            calculator_id: coreCalculatorId ?? undefined,
            href,
            label: label || "contact_link",
          });
          return;
        }

        if (/apply|contact|consult|quote|get started|start/i.test(label)) {
          const throttleKey = `ga_throttle:cta_click:${currentPath}:${href}`;
          if (!canSendWithThrottle(throttleKey)) return;

          sendGaEvent("cta_click", {
            path: currentPath,
            route: currentPath,
            calculator_id: coreCalculatorId ?? undefined,
            href,
            label: label || "cta_link",
          });
        }
      }
    }

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}

