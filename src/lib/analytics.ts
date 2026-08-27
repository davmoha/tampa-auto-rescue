/**
 * Lightweight GA4 analytics layer.
 *
 * The measurement ID comes from the Google Analytics connector
 * (VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY). When it is missing the
 * helpers below become no-ops (dev/preview safe) so nothing breaks.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const measurementId = import.meta.env[
  "VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"
] as string | undefined;

export const analyticsEnabled = Boolean(measurementId);

let initialized = false;

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export function initAnalytics() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;

  if (!measurementId) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, { send_page_view: false });
}

export type LeadEvent =
  | "call_click"
  | "email_click"
  | "form_submit"
  | "quote_intent"
  | "booking_intent";

/** Track a lead event, always stamped with the page that produced it. */
export function trackEvent(
  name: LeadEvent | string,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  const payload = {
    page_path: window.location.pathname,
    page_title: document.title,
    ...params,
  };
  if (!measurementId) {
    if (import.meta.env.DEV) console.debug("[analytics]", name, payload);
    return;
  }
  gtag("event", name, payload);
}

export function trackPageView(path: string) {
  if (typeof window === "undefined" || !measurementId) return;
  gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/**
 * Global click delegation so every tel:/mailto: link on the site is measured
 * without touching each call-to-action individually.
 */
export function attachLinkTracking(): () => void {
  if (typeof window === "undefined") return () => {};

  const onClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
    if (!anchor) return;
    const href = anchor.getAttribute("href") ?? "";
    const label = (anchor.textContent ?? "").trim().slice(0, 80);

    if (href.startsWith("tel:")) {
      trackEvent("call_click", {
        link_url: href,
        link_text: label,
        location: anchor.dataset["analyticsLocation"] ?? "page",
      });
    } else if (href.startsWith("mailto:")) {
      trackEvent("email_click", { link_url: href, link_text: label });
    }
  };

  document.addEventListener("click", onClick, { capture: true });
  return () => document.removeEventListener("click", onClick, { capture: true });
}
