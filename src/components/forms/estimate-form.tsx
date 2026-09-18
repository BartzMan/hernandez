import { useState, type FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { services, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE = "hir-estimate";

export function EstimateForm() {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || form.phone.replace(/\D/g, "").length < 7) {
      setError(t.formError);
      return;
    }
    setError("");
    const payload = { ...form, at: new Date().toISOString(), lang };
    window.localStorage.setItem(STORAGE, JSON.stringify(payload));
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-xl bg-sage-mist p-6 sm:p-8">
        <CheckCircle2 className="size-8 text-sage" />
        <h3 className="mt-4 font-display text-2xl text-ink">{t.formSuccessTitle}</h3>
        <p className="mt-2 text-muted">{t.formSuccessBody}</p>
        <a
          href={site.phoneHref}
          className={cn(buttonVariants({ variant: "primary", size: "lg" }), "mt-6")}
        >
          <Phone className="size-4" />
          {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] sm:p-7">
      <h3 className="font-display text-2xl text-ink">{t.formTitle}</h3>
      <p className="mt-2 text-sm text-muted">{t.formLead}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{t.formName}</Label>
          <Input
            id="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">{t.formPhone}</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="city">{t.formCity}</Label>
          <Input
            id="city"
            autoComplete="address-level2"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="Chandler"
          />
        </div>
        <div>
          <Label htmlFor="service">{t.formService}</Label>
          <select
            id="service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="h-12 w-full rounded-md bg-paper px-4 text-ink shadow-[var(--shadow-border)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            <option value="">{t.serviceNeed}</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {lang === "es" ? s.titleEs : s.title}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">{t.formMessage}</Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder={t.formMessagePh}
          />
        </div>
      </div>

      {error ? <p className="mt-3 text-sm text-danger">{error}</p> : null}

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        {t.formSubmit}
      </Button>
    </form>
  );
}
