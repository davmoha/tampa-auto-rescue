import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/site/Reveal";
import { faqs, site } from "@/lib/site";

const title = "Roadside Assistance FAQ — Tampa Auto Rescue";
const description =
  "Answers about response times, coverage areas, pricing, EV towing, payment methods, and fleet accounts for 24/7 roadside assistance in Tampa Bay.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h1 className="mt-6 mb-8 text-5xl leading-[0.95] font-bold tracking-tight text-balance md:text-6xl">
            Questions, answered{" "}
            <span className="font-display font-normal text-primary italic">plainly</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left text-lg font-bold hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Still stuck?{" "}
            <a href={site.phoneHref} className="text-primary hover:text-foreground">
              Call {site.phoneDisplay}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
