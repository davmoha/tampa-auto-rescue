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
          <span className="font-mono text-[11px] tracking-[0.3em] text-primary uppercase">
            01 / Services
          </span>
          <h1 className="mt-6 mb-8 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-7xl">
            Every roadside contingency,{" "}
            <span className="font-display font-normal text-primary italic">covered</span>.
          </h1>
          <p className="mb-16 max-w-xl leading-relaxed text-muted-foreground">
            One dispatch number for {site.county}. Live operators, transparent quotes
            before a truck rolls, and equipment matched to your vehicle.
          </p>
        </Reveal>

        <div className="grid gap-px bg-border md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <div
                id={service.slugAnchor}
                className="group relative h-full overflow-hidden bg-background p-10"
              >
                <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                <span className="mb-12 block font-mono text-[10px] text-muted-foreground">
                  TYPE: {service.type}
                </span>
                <h2 className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="font-mono text-[10px] text-muted-foreground">
                  EST. ARRIVAL: {service.eta}
                </div>
              </div>
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
