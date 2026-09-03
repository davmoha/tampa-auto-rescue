import batteryArt from "@/assets/service-battery.jpg";
import fuelArt from "@/assets/service-fuel.jpg";
import lockoutArt from "@/assets/service-lockout.jpg";
import tireArt from "@/assets/service-tire.jpg";
import towingArt from "@/assets/service-towing.png";
import winchArt from "@/assets/service-winch.png";

const artMap: Record<string, string> = {
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
      src={art}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none absolute inset-0 m-auto object-contain opacity-[0.12] mix-blend-multiply grayscale transition-transform duration-700 group-hover:scale-110 ${
        isTowing
          ? "h-64 w-64 md:h-80 md:w-80"
          : "h-44 w-44 md:h-56 md:w-56"
      }`}
    />
  );
}
