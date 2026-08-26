import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { services, site } from "@/lib/site";

const title = "Roadside Services in Tampa — Towing, Jump Starts, Lockouts";
const description =
  "Full list of Tampa Auto Rescue roadside services: emergency towing, battery rescue, fuel delivery, tire exchange, lockout access, and winch recovery, 24/7 in Tampa Bay.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h1 className="mt-6 mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            Every roadside contingency, covered.
          </h1>
          <p className="mb-16 max-w-xl leading-relaxed text-muted-foreground">
            One dispatch number for {site.county}. Live operators, transparent quotes
            before a truck rolls, and equipment matched to your vehicle.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05} className="h-full">
              <ServiceCard service={service} as="h2" padding="p-10" />
            </Reveal>
          ))}
        </div>


        <Reveal delay={0.1}>
          <a
            href={site.phoneHref}
            className="mt-16 flex h-16 items-center justify-center bg-primary px-8 text-xs font-bold tracking-widest text-primary-foreground uppercase transition-all hover:brightness-110 active:scale-[0.99]"
          >
            Call dispatch — {site.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
