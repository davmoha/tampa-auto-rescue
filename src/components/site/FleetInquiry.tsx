import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const fieldClass =
  "w-full bg-background border border-border rounded-md p-3 text-sm focus:border-primary outline-none transition-colors";
const labelClass =
  "block text-[10px] font-mono text-muted-foreground mb-1.5 uppercase tracking-wider";

export function FleetInquiry() {
  const [open, setOpen] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) =>
      String(data.get(key) ?? "").trim().slice(0, 500);

    const lines = [
      "Fleet Partnership Inquiry",
      "-------------------------",
      `Company Name: ${get("company")}`,
      `Company Address: ${get("address")}`,
      `Contact First Name: ${get("firstName")}`,
      `Contact Last Name: ${get("lastName")}`,
      `Contact Phone: ${get("phone")}`,
      `Contact Email: ${get("email")}`,
      "",
      "Fleet Size & Vehicle Types:",
      get("vehicles"),
    ];

    const subject = encodeURIComponent(
      `Fleet Inquiry — ${get("company")}`.slice(0, 120),
    );
    trackEvent("form_submit", {
      form_name: "fleet_inquiry",
      lead_type: "quote_intent",
      company: get("company"),
    });
    trackEvent("quote_intent", {
      form_name: "fleet_inquiry",
      fleet_details: get("vehicles").slice(0, 100),
    });
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          trackEvent("quote_intent", {
            form_name: "fleet_inquiry",
            step: "open_form",
          });
          setOpen(true);
        }}
        className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-xs font-bold tracking-widest text-primary-foreground uppercase shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
      >
        Learn More
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Fleet partnership inquiry"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-surface p-6 shadow-2xl ring-1 ring-border sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    Fleet Partnership Inquiry
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Submitting opens your email app with the details pre-filled.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className={labelClass} htmlFor="fleet-company">
                    Company Name
                  </label>
                  <input
                    id="fleet-company"
                    name="company"
                    type="text"
                    required
                    maxLength={100}
                    className={fieldClass}
                    placeholder="Acme Delivery LLC"
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="fleet-address">
                    Company Address
                  </label>
                  <input
                    id="fleet-address"
                    name="address"
                    type="text"
                    required
                    maxLength={200}
                    className={fieldClass}
                    placeholder="123 Main St, Tampa, FL"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="fleet-first">
                      Contact First Name
                    </label>
                    <input
                      id="fleet-first"
                      name="firstName"
                      type="text"
                      required
                      maxLength={50}
                      className={fieldClass}
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="fleet-last">
                      Contact Last Name
                    </label>
                    <input
                      id="fleet-last"
                      name="lastName"
                      type="text"
                      required
                      maxLength={50}
                      className={fieldClass}
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="fleet-phone">
                      Contact Phone
                    </label>
                    <input
                      id="fleet-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={25}
                      className={fieldClass}
                      placeholder="(813) 555-0100"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="fleet-email">
                      Contact Email
                    </label>
                    <input
                      id="fleet-email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      className={fieldClass}
                      placeholder="jane@acme.com"
                    />
                  </div>
                </div>
                <div>
                  <label className={labelClass} htmlFor="fleet-vehicles">
                    How many vehicles, and what type?
                  </label>
                  <textarea
                    id="fleet-vehicles"
                    name="vehicles"
                    required
                    maxLength={1000}
                    className={`${fieldClass} h-24`}
                    placeholder="e.g. 12 cargo vans, 4 box trucks, 2 pickups"
                  />
                </div>
                <button
                  type="submit"
                  className="h-14 w-full rounded-md bg-foreground text-xs font-bold tracking-widest text-background uppercase transition-all hover:bg-primary"
                >
                  Compose Email
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
