import { motion } from "motion/react";
import type { Service } from "@/lib/site";
import { ServiceArt } from "@/components/site/ServiceArt";

export function ServiceCard({
  service,
  as = "h3",
  padding = "p-8",
}: {
  service: Service;
  as?: "h2" | "h3";
  padding?: string;
}) {
  const Heading = as;
  return (
    <motion.div
      id={service.slugAnchor}
      whileHover={{ rotate: [0, -1.2, 1.2, -0.8, 0.8, 0], y: -4 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className={`group relative h-full overflow-hidden rounded-2xl border border-border bg-card shadow-[0_2px_10px_-6px_rgba(17,24,39,0.25)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-18px_rgba(17,24,39,0.45)] ${padding}`}
    >
      <ServiceArt anchor={service.slugAnchor} />
      <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 rounded-t-2xl bg-primary transition-transform duration-500 group-hover:scale-x-100" />
      <div className="relative">
        <span className="mb-12 block font-mono text-[10px] text-muted-foreground">
          TYPE: {service.type}
        </span>
        <Heading className="mb-4 text-2xl font-bold transition-colors group-hover:text-primary">
          {service.title}
        </Heading>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <div className="font-mono text-[10px] text-muted-foreground">
          EST. ARRIVAL: {service.eta}
        </div>
      </div>
    </motion.div>
  );
}
