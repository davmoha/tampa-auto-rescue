import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

const title = "24/7 Towing in Tampa, FL — Fast Flatbed Service | Tampa Auto Rescue";
const description =
  "Stranded in Tampa? 24/7 flatbed towing for cars, trucks, motorcycles, and EVs across Hillsborough & Pinellas. Average arrival in 20–35 minutes. Call now for a firm quote.";

const points = [
  {
    h: "Flatbed towing for every vehicle",
    p: "Cars, light trucks, motorcycles, EVs, lowered and exotic vehicles — we carry soft straps, motorcycle chocks, and low-clearance ramps so your vehicle arrives exactly as it left.",
  },
  {
    h: "Accident and breakdown response",
    p: "Post-collision scene clearing and breakdown transport across Tampa, Brandon, Ybor City, Riverview, Clearwater, and St. Petersburg — coordinated with your insurer when needed.",
  },
  {
    h: "Long-distance transport",
    p: "Need to get further than the nearest shop? We quote long-distance transport across Florida up front, before the truck rolls — no surprise fees on arrival.",
  },
];

const faqs = [
  {
    q: "How much does a tow cost in Tampa?",
    a: "Pricing depends on distance and vehicle type. You always receive a firm, all-in quote over the phone before a truck is dispatched.",
  },
  {
    q: "How fast can a tow truck reach me?",
    a: "Our average response inside Tampa city limits is about 24 minutes. Outlying areas typically run 30–45 minutes depending on traffic and weather.",
  },
  {
    q: "Do you tow electric vehicles?",
    a: "Yes. EVs are transported on flatbeds with wheel dollies where required, following manufacturer high-voltage handling guidance.",
  },
];

export const Route = createFileRoute("/towing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/towing" },
    ],
    links: [{ rel: "canonical", href: "/towing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Emergency Towing — Tampa Auto Rescue",
          description,
          provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneDisplay },
          areaServed: ["Tampa", "Brandon", "Ybor City", "Riverview", "Clearwater", "St. Petersburg"],
          hoursAvailable: "Mo-Su 00:00-24:00",
        }),
      },
    ],
  }),
  component: TowingPage,
});

function TowingPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold tracking-widest text-primary uppercase">
            Emergency Towing
          </p>
          <h1 className="mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            24/7 towing in Tampa, without the runaround.
          </h1>
          <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
            One call to {site.phoneDisplay} puts a flatbed in motion. Live dispatch around
            the clock, transparent quotes before we roll, and an average arrival of 20–35
            minutes across {site.county}.
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
            Towing questions, answered.
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
            Dispatch a tow truck — {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
