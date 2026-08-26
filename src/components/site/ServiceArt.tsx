import batteryArt from "@/assets/service-battery.jpg.asset.json";
import fuelArt from "@/assets/service-fuel.jpg.asset.json";
import lockoutArt from "@/assets/service-lockout.jpg.asset.json";
import towingArt from "@/assets/service-towing.png.asset.json";
import winchArt from "@/assets/service-winch.png.asset.json";

const artMap: Record<string, { url: string }> = {
  battery: batteryArt,
  fuel: fuelArt,
  lockout: lockoutArt,
  towing: towingArt,
  winch: winchArt,
};

/**
 * Faded gray background art for each service card.
 * Purely decorative — hidden from assistive tech.
 */
export function ServiceArt({ anchor }: { anchor: string }) {
  if (anchor === "tire") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 400 200"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-foreground/[0.09] transition-transform duration-700 group-hover:scale-105"
      >
        <g stroke="currentColor" strokeLinecap="round" fill="none">
          <path d="M-20 150 C 80 60, 240 190, 430 60" strokeWidth="34" opacity="0.45" />
          <path
            d="M-20 150 C 80 60, 240 190, 430 60"
            strokeWidth="30"
            strokeDasharray="6 16"
            opacity="0.9"
          />
          <path
            d="M-20 124 C 80 34, 240 164, 430 34"
            strokeWidth="4"
            strokeDasharray="14 12"
            opacity="0.7"
          />
        </g>
      </svg>
    );
  }

  const art = artMap[anchor] ?? winchArt;

  return (
    <img
      src={art.url}
      alt=""
      aria-hidden
      loading="lazy"
      className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 scale-[1.15] object-contain opacity-[0.12] mix-blend-multiply grayscale transition-transform duration-700 group-hover:scale-[1.25] md:h-52 md:w-52"
    />
  );
}
