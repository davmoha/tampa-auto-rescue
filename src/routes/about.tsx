import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import chrisPatch from "@/assets/chris-patch.jpg.asset.json";

const title = "About Tampa Auto Rescue — Local, Insured, 24/7";
const description =
  "Tampa Auto Rescue (formerly Back On Track Roadside Service) is a locally owned, insured roadside assistance company serving Hillsborough and Pinellas Counties around the clock.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { value: "24 MIN", label: "Average response time in Tampa" },
  { value: "24/7/365", label: "Live dispatch, never an answering loop" },
  { value: "2 COUNTIES", label: "Hillsborough and Pinellas coverage" },
];

function AboutPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-start justify-between gap-8">
          <Reveal>
            <span className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase">
              02 / About
            </span>
            <h1 className="mt-6 mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
              Local operators who{" "}
              <span className="font-display font-normal text-primary italic">show up</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.1} className="hidden shrink-0 sm:block">
            <img
              src={chrisPatch.url}
              alt="Tampa Auto Rescue patch worn by owner Chris, featuring a tow truck"
              width={180}
              height={160}
              loading="lazy"
              className="w-36 rotate-2 rounded-xl shadow-lg ring-1 ring-border md:w-44"
            />
          </Reveal>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="space-y-6 leading-relaxed text-muted-foreground">
              <p>
                Tampa Auto Rescue was built on the same trucks, technicians, and phone line
                that Tampa Bay drivers knew as Back On Track Roadside Service. The name
                changed; the standard did not.
              </p>
              <p>
                We are a locally owned, fully insured roadside operation. Every call is
                answered by a person in Tampa who knows the difference between the Selmon
                shoulder at rush hour and a flooded driveway in Riverview — and dispatches
                the right equipment the first time.
              </p>
              <p>
                Our technicians are trained in damage-free entry, high-voltage EV handling,
                soft-strap flatbed loading for lowered and exotic vehicles, and precision
                winch rigging. You get a firm quote before a truck rolls, and no surprise
                fees when it arrives.
              </p>
              <p>
                Coverage runs across {site.areas} — {site.hours}.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px self-start bg-border">
            {stats.map((stat, i) => (
              <Reveal key={stat.value} delay={0.1 + i * 0.05}>
                <div className="bg-background p-8">
                  <p className="font-mono text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
