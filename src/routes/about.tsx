import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";
import badgeAsset from "@/assets/tampa-auto-rescue-badge-final.png.asset.json";

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
    <section className="relative px-6 py-24">
      <div className="relative mx-auto max-w-7xl">
        <img
          src={badgeAsset.url}
          alt="Tampa Auto Rescue badge featuring Chris"
          className="absolute top-0 right-0 z-10 w-[13.5rem] h-[13.5rem] object-contain md:w-[21rem] md:h-[21rem] lg:w-96 lg:h-96"
        />
        <Reveal>
          <h1 className="mt-6 mb-8 max-w-3xl pr-56 text-5xl leading-[0.95] font-bold tracking-tight text-balance md:pr-[22rem] md:text-7xl lg:pr-[26rem]">
            Local operators who{" "}
            <span className="font-display font-normal text-primary italic">show up</span>.
          </h1>
        </Reveal>

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
