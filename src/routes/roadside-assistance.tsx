import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/lib/site";

const title = "24 Hour Roadside Assistance in Tampa | Jump Starts, Tires, Lockouts";
const description =
  "24/7 roadside assistance across Tampa Bay: jump starts, battery replacement, tire changes, fuel delivery, and lockout service. Live dispatch, firm quotes, fast arrival.";

const servicesList = [
  {
    h: "Jump starts & battery rescue",
    p: "Dead battery in a parking garage or your own driveway? We test, jump, or replace your battery on the spot — usually within 15–25 minutes.",
  },
  {
    h: "Flat tire changes",
    p: "Safe roadside tire exchanges using high-capacity hydraulic equipment, including hard-to-reach spots and busy highway shoulders.",
  },
  {
    h: "Fuel delivery",
    p: "Ran the tank dry? We deliver premium unleaded or diesel straight to your GPS coordinates, anywhere in Hillsborough or Pinellas.",
  },
  {
    h: "Lockout service",
    p: "Keys locked inside? Damage-free vehicle entry with professional locksmith tools — most lockouts resolved in 10–20 minutes.",
  },
];

const faqs = [
  {
    q: "How much does roadside assistance cost in Tampa?",
    a: "It depends on the service and your location. You get a firm, all-in quote over the phone before anyone is dispatched — no surprise fees.",
  },
  {
    q: "Are you really open 24/7?",
    a: "Yes. Dispatch is staffed by live operators 24 hours a day, 365 days a year — including holidays and during storm events.",
  },
  {
    q: "Do I need a membership?",
    a: "No membership required. Call when you need help and pay per service — all major cards, digital wallets, and cash accepted.",
  },
];

export const Route = createFileRoute("/roadside-assistance")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/roadside-assistance" },
    ],
    links: [{ rel: "canonical", href: "/roadside-assistance" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "24 Hour Roadside Assistance — Tampa Auto Rescue",
          description,
          provider: { "@type": "LocalBusiness", name: site.name, telephone: site.phoneDisplay },
          areaServed: ["Tampa", "Brandon", "Ybor City", "Riverview", "Clearwater", "St. Petersburg"],
          hoursAvailable: "Mo-Su 00:00-24:00",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
            { "@type": "ListItem", position: 3, name: "Roadside Assistance", item: "/roadside-assistance" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: RoadsideAssistancePage,
});

function RoadsideAssistancePage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-xs font-bold tracking-widest text-primary uppercase">
            Roadside Assistance
          </p>
          <h1 className="mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            24 hour roadside assistance in Tampa.
          </h1>
          <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
            Jump starts, tire changes, fuel delivery, and lockouts — no membership needed.
            One number, live dispatch, and a firm quote before a truck rolls, anywhere in{" "}
            {site.areas}.
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

        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {servicesList.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h2 className="mb-3 text-xl font-bold tracking-tight">{s.h}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Roadside assistance questions, answered.
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
            Get help now — {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
