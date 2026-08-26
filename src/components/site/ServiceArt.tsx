import batteryArt from "@/assets/service-battery.jpg.asset.json";
import fuelArt from "@/assets/service-fuel.jpg.asset.json";
import lockoutArt from "@/assets/service-lockout.jpg.asset.json";
import tireArt from "@/assets/service-tire.jpg.asset.json";
import towingArt from "@/assets/service-towing.png.asset.json";
import winchArt from "@/assets/service-winch.png.asset.json";

const artMap: Record<string, { url: string }> = {
  battery: batteryArt,
  fuel: fuelArt,
  lockout: lockoutArt,
  tire: tireArt,
  towing: towingArt,
  winch: winchArt,
};

/**
 * Faded gray background art for each service card.
 * Purely decorative — hidden from assistive tech.
 */
export function ServiceArt({ anchor }: { anchor: string }) {
  const art = artMap[anchor] ?? winchArt;

  // Towing graphic is smaller in the source, so scale it up to fill the card.
  const isTowing = anchor === "towing";

  return (
    <img
      src={art.url}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none absolute inset-0 m-auto object-contain opacity-[0.12] mix-blend-multiply grayscale transition-transform duration-700 group-hover:scale-110 ${
        isTowing
          ? "h-56 w-56 md:h-72 md:w-72"
          : "h-44 w-44 md:h-56 md:w-56"
      }`}
    />
  );
}
