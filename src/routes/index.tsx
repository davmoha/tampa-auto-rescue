import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { DispatchForm } from "@/components/site/DispatchForm";
import { FleetInquiry } from "@/components/site/FleetInquiry";
import { ServiceAreaMap } from "@/components/site/ServiceAreaMap";
import { ServiceCard } from "@/components/site/ServiceCard";

import { cities, services, site } from "@/lib/site";
import heroAsset from "@/assets/chris-roadside.png.asset.json";
import { lovableAssetUrl } from "@/lib/lovable-asset";


const title = "24/7 Roadside Assistance & Towing in Tampa | Tampa Auto Rescue";
const description =
  "Tampa Auto Rescue provides 24/7 towing, jump starts, lockouts, tire changes, fuel delivery and winch recovery across Tampa Bay. Average response 24 minutes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: site.name,
          url: site.url,
          telephone: site.phoneDisplay,
          email: site.email,
          areaServed: site.areas,
          openingHours: "Mo-Su 00:00-23:59",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tampa",
            addressRegion: "FL",
            addressCountry: "US",
          },
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <header className="relative overflow-hidden px-6 pt-16 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1"
          >
            <img
              src={lovableAssetUrl(heroAsset)}
              alt="24 hour roadside assistance — jump starts, tire changes, fuel delivery and lockout service in Tampa"
              className="w-full rounded-xl"
              width={1404}
              height={1122}
            />
          </motion.div>

          <div className="order-2 max-w-2xl lg:ml-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 font-mono text-[10px] text-accent-foreground"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              AVERAGE RESPONSE: 24 MINS
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 font-display text-5xl leading-[0.95] font-bold tracking-tight text-balance text-foreground md:text-7xl"
            >
              24 Hour Roadside Assistance.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              Jump starts, tire changes, fuel delivery, lockouts and towing across Tampa Bay.
              Anytime. Anywhere. We've got you covered.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href={site.phoneHref}
                className="flex h-16 items-center justify-center gap-3 rounded-md bg-primary px-10 text-sm font-bold tracking-widest text-primary-foreground uppercase shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {site.phoneDisplay}
              </a>
              <Link
                to="/fleet"
                className="flex h-14 items-center justify-center rounded-md border border-border px-8 text-xs font-bold tracking-widest uppercase text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                Fleet Contracts
              </Link>
            </motion.div>
          </div>
        </div>
      </header>


      <section id="services" className="border-t border-border bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Services</h2>
            <span className="text-xs text-muted-foreground">Available 24/7/365</span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.05} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="service-area" className="border-t border-border px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Service <span className="text-primary">Area</span>
            </h2>
            <p className="mb-10 max-w-xl leading-relaxed text-muted-foreground">
              Based in Tampa and covering {site.county}. Tap a marker on the map, or find
              your city below — if you're nearby, call and we'll confirm coverage.
            </p>
          </Reveal>
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_2fr]">
            <Reveal delay={0.05}>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {cities.map((city) => (
                  <li
                    key={city.name}
                    className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-sm font-bold tracking-tight shadow-sm"
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {city.name}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <ServiceAreaMap />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-24 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="mb-8 text-4xl font-bold tracking-tight">
                Professional <span className="text-primary">Fleet</span> Partnerships
              </h2>
              <p className="mb-12 leading-relaxed text-muted-foreground">
                Protect your business assets with priority dispatching. We offer custom
                roadside solutions for Tampa-based delivery fleets, rental agencies, and
                logistics providers.
              </p>
            </Reveal>
            <div className="space-y-6">
              <Reveal delay={0.05}>
                <div className="flex cursor-default gap-4 border border-border bg-surface/20 p-4 transition-colors hover:bg-surface">
                  <div className="grid size-12 place-items-center bg-primary/10 font-mono text-primary">
                    A
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Dedicated Account Portals</h4>
                    <p className="text-xs text-muted-foreground">
                      Track service history and billing in real-time.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="flex cursor-default gap-4 border border-border bg-surface/20 p-4 transition-colors hover:bg-surface">
                  <div className="grid size-12 place-items-center bg-primary/10 font-mono text-primary">
                    B
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Priority Response Tiers</h4>
                    <p className="text-xs text-muted-foreground">
                      Your drivers are our first priority during peak hours.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <FleetInquiry />
              </Reveal>
              <Reveal delay={0.2}>
                <div className="space-y-2 pt-6 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  <p>
                    Dispatch:{" "}
                    <a href={site.phoneHref} className="text-primary hover:text-foreground">
                      {site.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${site.email}`}
                      className="text-primary hover:text-foreground"
                    >
                      {site.email}
                    </a>
                  </p>
                  <p>Coverage: {site.areas}</p>
                  <p>Hours: {site.hours}</p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <DispatchForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
