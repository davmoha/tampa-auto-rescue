import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tighter">TAMPA AUTO</span>
          <span className="font-display text-primary italic">Rescue</span>
        </Link>

        <div className="hidden gap-8 font-sans text-[11px] font-medium tracking-widest text-muted-foreground uppercase md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="hidden bg-foreground px-4 py-2 text-[11px] font-bold tracking-widest text-background uppercase transition-colors hover:bg-primary sm:inline-block"
          >
            Dispatch Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase transition-colors hover:text-primary md:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-[11px] font-medium tracking-[0.2em] text-muted-foreground uppercase transition-colors last:border-b-0 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
