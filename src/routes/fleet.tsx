import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { DispatchForm } from "@/components/site/DispatchForm";
import { FleetInquiry } from "@/components/site/FleetInquiry";
import { site } from "@/lib/site";

const title = "Fleet Roadside Contracts in Tampa | Tampa Auto Rescue";
const description =
  "Priority roadside contracts for Tampa delivery fleets, rental agencies, and logistics providers: dedicated dispatch, consolidated billing, and guaranteed response tiers.";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fleet" },
    ],
    links: [{ rel: "canonical", href: "/fleet" }],
  }),
  component: FleetPage,
});

const benefits = [
  {
    key: "A",
    title: "Dedicated Account Portals",
    body: "Track service history and billing in real-time.",
  },
  {
    key: "B",
    title: "Priority Response Tiers",
    body: "Your drivers are our first priority during peak hours.",
  },
  {
    key: "C",
    title: "Consolidated Monthly Billing",
    body: "One invoice, net terms, and per-vehicle cost reporting.",
  },
  {
    key: "D",
    title: "Named Account Contact",
    body: "A direct line to a manager who knows your fleet and routes.",
  },
];

function FleetPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="mt-6 mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            Downtime is the{" "}
            <span className="font-display font-normal text-primary italic">cost</span>.
          </h1>
        </Reveal>

        <div className="grid gap-24 md:grid-cols-2">
          <div>
            <Reveal delay={0.05}>
              <p className="mb-12 leading-relaxed text-muted-foreground">
                Protect your business assets with priority dispatching. We build custom
                roadside contracts for Tampa-based delivery fleets, rental agencies,
                property managers, and logistics providers — from three vans to three
                hundred.
              </p>
            </Reveal>
            <div className="space-y-6">
              {benefits.map((b, i) => (
                <Reveal key={b.key} delay={0.1 + i * 0.05}>
                  <div className="flex cursor-default gap-4 border border-border bg-surface/20 p-4 transition-colors hover:bg-surface">
                    <div className="grid size-12 shrink-0 place-items-center bg-primary/10 font-mono text-primary">
                      {b.key}
                    </div>
                    <div>
                      <h2 className="text-sm font-bold">{b.title}</h2>
                      <p className="text-xs text-muted-foreground">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <div className="pt-6">
                  <FleetInquiry />
                </div>
              </Reveal>
              <Reveal delay={0.35}>
                <p className="pt-6 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  Fleet desk:{" "}
                  <a href={site.phoneHref} className="text-primary hover:text-foreground">
                    {site.phoneDisplay}
                  </a>{" "}
                  &bull;{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-primary hover:text-foreground"
                  >
                    {site.email}
                  </a>
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <DispatchForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
