import { useLang } from "@/lib/i18n";

export function PreviewBanner() {
  const { lang } = useLang();
  return (
    <div className="bg-ink px-4 py-2 text-center text-[0.7rem] font-medium uppercase tracking-[0.12em] text-cream/90">
      {lang === "es"
        ? "Vista previa para Hernandez Irrigation — aún no está en línea"
        : "Preview for Hernandez Irrigation — not live yet"}
    </div>
  );
}
