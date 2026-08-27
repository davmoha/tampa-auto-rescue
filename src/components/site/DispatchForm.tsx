import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const fieldClass =
  "w-full bg-background border border-border p-4 text-sm focus:border-primary outline-none transition-colors";
const labelClass =
  "block text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-wider";

export function DispatchForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const serviceType = String(new FormData(form).get("service") ?? "");
    trackEvent("form_submit", {
      form_name: "dispatch_request",
      lead_type: "booking_intent",
      service_type: serviceType,
    });
    trackEvent("booking_intent", {
      form_name: "dispatch_request",
      service_type: serviceType,
    });
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Request received", {
        description: `For immediate help, call dispatch at ${site.phoneDisplay}.`,
      });
    }, 600);
  }

  return (
    <div className="bg-surface p-8 ring-1 ring-border sm:p-10">
      <h3 className="mb-8 text-[11px] font-bold tracking-widest text-primary uppercase">
        Direct Dispatch Request
      </h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className={fieldClass}
            placeholder="John Henderson"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="service">
              Service Type
            </label>
            <select id="service" name="service" required className={fieldClass}>
              <option value="">Select Service</option>
              <option>Emergency Towing</option>
              <option>Battery Rescue</option>
              <option>Fuel Delivery</option>
              <option>Tire Exchange</option>
              <option>Lockout Access</option>
              <option>Winch &amp; Recovery</option>
              <option>Fleet Contract</option>
            </select>
          </div>
          <div>
            <label className={labelClass} htmlFor="location">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              className={fieldClass}
              placeholder="Current Area/ZIP"
            />
          </div>
        </div>
        <div>
          <label className={labelClass} htmlFor="details">
            Details
          </label>
          <textarea
            id="details"
            name="details"
            className={`${fieldClass} h-32`}
            placeholder="Vehicle make/model and issue..."
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="h-16 w-full bg-foreground text-xs font-bold tracking-widest text-background uppercase transition-all hover:bg-primary disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send Dispatch Request"}
        </button>
      </form>
    </div>
  );
}
