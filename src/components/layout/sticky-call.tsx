import { MessageSquare, Phone } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function StickyCall() {
  const { t } = useLang();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 p-2 backdrop-blur-md sm:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-sage text-sm font-medium text-cream"
        >
          <Phone className="size-4" />
          {t.stickyCall}
        </a>
        <a
          href={site.smsHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink text-sm font-medium text-cream"
        >
          <MessageSquare className="size-4" />
          {t.stickyText}
        </a>
      </div>
    </div>
  );
}
