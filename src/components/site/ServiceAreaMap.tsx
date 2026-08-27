import { useEffect, useRef } from "react";
import { cities } from "@/lib/site";

declare global {
  interface Window {
    google?: any;
    __tarInitMap?: () => void;
  }
}

const SCRIPT_ID = "tar-google-maps-js";

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !containerRef.current || !window.google?.maps) return;
      const g = window.google.maps;

      const map = new g.Map(containerRef.current, {
        center: { lat: 27.92, lng: -82.55 },
        zoom: 10,
        gestureHandling: "cooperative",
      });

      // Coverage radius around Tampa
      new g.Circle({
        map,
        center: { lat: 27.9506, lng: -82.4572 },
        radius: 32000,
        fillColor: "#dc2626",
        fillOpacity: 0.07,
        strokeColor: "#dc2626",
        strokeOpacity: 0.35,
        strokeWeight: 2,
      });

      const bounds = new g.LatLngBounds();
      const info = new g.InfoWindow();

      for (const city of cities) {
        const position = { lat: city.lat, lng: city.lng };
        bounds.extend(position);
        const marker = new g.Marker({
          map,
          position,
          title: city.name,
        });
        marker.addListener("click", () => {
          info.setContent(
            `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;">
               <strong>${city.name}</strong><br/>24/7 roadside coverage
             </div>`,
          );
          info.open({ map, anchor: marker });
        });
      }

      map.fitBounds(bounds, 48);
    };

    if (window.google?.maps) {
      init();
      return;
    }

    window.__tarInitMap = init;

    if (!document.getElementById(SCRIPT_ID)) {
      const key = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY"];
      const channel = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID"];
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=__tarInitMap&channel=${channel}`;
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
      delete window.__tarInitMap;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Map of the Tampa Auto Rescue service area covering Tampa, Brandon, Ybor City, Riverview, Clearwater and St. Petersburg"
      className="h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-surface/30"
    />
  );
}
