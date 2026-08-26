/**
 * Faded gray "painted" background art for each service card.
 * Purely decorative — hidden from assistive tech.
 */
export function ServiceArt({ anchor }: { anchor: string }) {
  const common = {
    className:
      "pointer-events-none absolute inset-0 h-full w-full text-foreground/[0.07] transition-transform duration-700 group-hover:scale-105",
    "aria-hidden": true as const,
    viewBox: "0 0 200 200",
    fill: "none" as const,
    preserveAspectRatio: "xMidYMid slice" as const,
  };

  switch (anchor) {
    case "battery":
      return (
        <svg {...common}>
          <g
            transform="rotate(-32 100 100) translate(28 62)"
            stroke="currentColor"
            strokeWidth="7"
          >
            <rect x="0" y="0" width="130" height="72" rx="14" />
            <rect x="130" y="24" width="16" height="24" rx="6" fill="currentColor" />
            <path d="M62 14 L44 40 h24 L52 62" strokeWidth="9" strokeLinejoin="round" />
            <path d="M92 36 h26 M105 23 v26" strokeWidth="8" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "tire":
      return (
        <svg {...common}>
          <g
            stroke="currentColor"
            strokeLinecap="round"
            fill="none"
            transform="rotate(-12 100 100)"
          >
            <path d="M-20 150 C 40 60, 120 190, 230 70" strokeWidth="34" opacity="0.5" />
            <path
              d="M-20 150 C 40 60, 120 190, 230 70"
              strokeWidth="30"
              strokeDasharray="6 16"
              opacity="0.9"
            />
            <path
              d="M-20 128 C 40 38, 120 168, 230 48"
              strokeWidth="4"
              strokeDasharray="14 12"
              opacity="0.7"
            />
          </g>
        </svg>
      );

    case "fuel":
      return (
        <svg {...common}>
          <g
            transform="rotate(-24 100 100) translate(40 46)"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
          >
            <path d="M6 16 h72 a6 6 0 0 1 6 6 v86 a6 6 0 0 1-6 6 H6 a6 6 0 0 1-6-6 V22 a6 6 0 0 1 6-6 Z" />
            <path d="M16 0 h52 v16 H16 Z" />
            <path d="M84 40 h22 a10 10 0 0 1 10 10 v40 a12 12 0 0 0 24 0 V44" strokeLinecap="round" />
            <path d="M16 40 h52 v28 H16 Z" />
          </g>
        </svg>
      );

    case "towing":
      return (
        <svg {...common}>
          <g
            transform="rotate(-14 100 100) translate(6 60)"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
          >
            <path d="M4 68 V26 h74 v42" />
            <path d="M78 40 h30 l26 28 v0 h-56 Z" />
            <circle cx="44" cy="82" r="14" />
            <circle cx="120" cy="82" r="14" />
            <path d="M108 24 l52 30" strokeLinecap="round" />
            <path d="M160 54 l14 8 -6 12 -14 -8 Z" />
          </g>
        </svg>
      );

    case "lockout":
      return (
        <svg {...common}>
          <g
            transform="rotate(-28 100 100) translate(52 40)"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
          >
            <circle cx="34" cy="34" r="30" />
            <circle cx="34" cy="34" r="10" />
            <path d="M52 56 L110 114" strokeLinecap="round" />
            <path d="M86 90 l16 -16 M100 104 l16 -16" strokeLinecap="round" />
          </g>
        </svg>
      );

    case "winch":
    default:
      return (
        <svg {...common}>
          <g
            transform="rotate(-18 100 100) translate(24 56)"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <circle cx="42" cy="46" r="30" />
            <path d="M42 16 v60 M12 46 h60" />
            <path d="M72 46 C 106 46, 108 96, 146 96" />
            <path d="M146 78 a18 18 0 1 0 0 36 a18 18 0 1 0 0 -36" />
          </g>
        </svg>
      );
  }
}
