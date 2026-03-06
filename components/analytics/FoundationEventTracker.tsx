"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGaEvent } from "@/lib/analytics/ga";

const NON_CALCULATOR_PATHS = new Set([
  "",
  "about",
  "contact",
  "privacy",
  "terms",
  "accessibility",
  "calculators",
  "sandbox-seo",
  "v3-sandbox",
]);

function getFirstSegment(pathname: string) {
  return pathname.replace(/^\/+/, "").split("/")[0] ?? "";
}

function isCalculatorPath(pathname: string) {
  const segment = getFirstSegment(pathname);
  return segment.length > 0 && !NON_CALCULATOR_PATHS.has(segment);
}

export default function FoundationEventTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname || "/";
    const calculatorPath = isCalculatorPath(currentPath);

    function onFocusIn(event: FocusEvent) {
      if (!calculatorPath) return;
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const isFormField =
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.tagName === "TEXTAREA";
      if (!isFormField) return;

      const key = `ga_start_sent:${currentPath}`;
      if (sessionStorage.getItem(key)) return;

      sendGaEvent("calculator_start", {
        path: currentPath,
      });
      sessionStorage.setItem(key, "1");
    }

    function onClick(event: MouseEvent) {
      const element = event.target as HTMLElement | null;
      if (!element) return;

      const button = element.closest("button");
      const link = element.closest("a");

      if (button && calculatorPath) {
        const label = (button.textContent || "").trim().slice(0, 80);
        if (/calculate|estimate|result/i.test(label)) {
          sendGaEvent("calculator_complete", {
            path: currentPath,
            label: label || "unknown_button",
          });
        }
      }

      if (link) {
        const href = link.getAttribute("href") || "";
        const label = (link.textContent || "").trim().slice(0, 80);

        if (href.includes("/contact")) {
          sendGaEvent("contact_click", {
            path: currentPath,
            href,
            label: label || "contact_link",
          });
          return;
        }

        if (/apply|contact|consult|quote|get started|start/i.test(label)) {
          sendGaEvent("cta_click", {
            path: currentPath,
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

