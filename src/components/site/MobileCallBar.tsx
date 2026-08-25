import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 bg-gradient-to-t from-background via-background/90 to-transparent p-4 md:hidden">
      <a
        href={site.phoneHref}
        className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-primary font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition-transform active:scale-[0.98]"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Call for Rescue Now</span>
      </a>
    </div>
  );
}
