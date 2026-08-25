import { Link } from "@tanstack/react-router";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 pb-28 md:pb-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <Link to="/" className="flex items-baseline gap-2 opacity-50">
          <span className="text-sm font-bold tracking-tighter">TAMPA AUTO</span>
          <span className="font-display text-sm text-primary italic">Rescue</span>
        </Link>
        <div className="text-center font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
          &copy; {new Date().getFullYear()} {site.name} &bull; Serving {site.county}{" "}
          &bull; Insured &amp; Bonded
        </div>
        <a
          href={site.phoneHref}
          className="font-mono text-[10px] tracking-widest text-primary uppercase transition-colors hover:text-foreground"
        >
          {site.phoneDisplay}
        </a>
      </div>
    </footer>
  );
}
