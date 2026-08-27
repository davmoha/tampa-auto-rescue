import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

const title = "Vehicle Recovery & Winch-Out Service in Tampa, FL | Tampa Auto Rescue";
const description =
  "Stuck in sand, mud, a ditch, or floodwater? 24/7 winch-out and off-road vehicle recovery across Tampa Bay with precision cable rigging. Call for a firm quote.";

const points = [
  {
    h: "Winch-out service",
    p: "Stuck in sand on the causeway, mud at a job site, or a rain-filled ditch? Precision cable rigging pulls your vehicle out without frame or body damage.",
  },
  {
    h: "Off-road & soft-ground recovery",
    p: "Beaches, construction sites, fields, and unpaved lots — we reach vehicles that ordinary tow trucks can't, with equipment matched to the terrain.",
  },
  {
    h: "Accident & storm recovery",
    p: "Post-collision and storm-related recovery across Tampa Bay, including flooded vehicles and cars off the roadway. Coordinated with law enforcement and insurers when required.",
  },
];

const faqs = [
  {
    q: "Can you recover a vehicle stuck in sand or mud?",
    a: "Yes. Winch-outs from sand, mud, ditches, and soft ground are one of our specialties, using precision cable rigging to avoid damage.",
  },
  {
    q: "How long does a recovery take?",
    a: "Most recoveries are completed within 45–60 minutes of arrival, depending on terrain and how the vehicle is positioned.",
  },
  {
    q: "Will recovery damage my car?",
    a: "No. We use soft straps, rated recovery points, and controlled winching so your vehicle is extracted without frame or body damage.",
  },
];

export const Route = createFileRoute("/recovery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/recovery" },
    ],
    links: [{ rel: "canonical", href: "/recovery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vehicle Recovery & Winch-Out — Tampa Auto Rescue",
          description,
          provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneDisplay },
          areaServed: ["Tampa", "Brandon", "Ybor City", "Riverview", "Clearwater", "St. Petersburg"],
          hoursAvailable: "Mo-Su 00:00-24:00",
        }),
      },
    ],
  }),
  component: RecoveryPage,
});

function RecoveryPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold tracking-widest text-primary uppercase">
            Winch &amp; Recovery
          </p>
          <h1 className="mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            Vehicle recovery when you're truly stuck.
          </h1>
          <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
            Sand, mud, ditches, floodwater — 24/7 winch-out and off-road recovery across{" "}
            {site.county}, with rigging that protects your vehicle and a firm quote before
            we roll.
          </p>
          <div className="mb-20 flex flex-col gap-4 sm:flex-row">
            <a
              href={site.phoneHref}
              className="flex h-16 items-center justify-center gap-3 bg-primary px-8 text-sm font-bold tracking-widest text-primary-foreground uppercase transition-all hover:brightness-110 active:scale-[0.99]"
            >
              <Phone className="h-5 w-5" />
              Call {site.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {points.map((pt, i) => (
            <Reveal key={pt.h} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="mb-3 text-xl font-bold tracking-tight">{pt.h}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{pt.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Recovery questions, answered.
          </h2>
        </Reveal>
        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="mb-3 font-bold tracking-tight">{f.q}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <a
            href={site.phoneHref}
            className="flex h-16 items-center justify-center bg-primary px-8 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-all hover:brightness-110 active:scale-[0.99]"
          >
            Request recovery — {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
