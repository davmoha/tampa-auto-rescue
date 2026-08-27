import { useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { site } from "@/lib/site";

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
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-xs font-bold tracking-widest text-primary-foreground uppercase shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
        >
          Learn More
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto bg-surface sm:max-w-lg sm:rounded-xl">
        <DialogHeader className="pr-8">
          <DialogTitle className="text-lg font-bold tracking-tight">
            Fleet Partnership Inquiry
          </DialogTitle>
          <DialogDescription className="text-xs">
            Submitting opens your email app with the details pre-filled.
          </DialogDescription>
        </DialogHeader>

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
              autoComplete="organization"
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
              autoComplete="street-address"
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
                autoComplete="given-name"
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
                autoComplete="family-name"
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
                autoComplete="tel"
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
                autoComplete="email"
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
      </DialogContent>
    </Dialog>
  );
}
