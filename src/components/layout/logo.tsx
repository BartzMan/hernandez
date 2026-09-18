import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8 shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" className="text-sage" />
      <path
        d="M8 21.5c3.2-1.2 5.1-4.4 5.1-7.8 0-2.6 1.4-4.7 2.9-4.7s2.9 2.1 2.9 4.7c0 3.4 1.9 6.6 5.1 7.8"
        fill="none"
        stroke="#F7F3EA"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="16" cy="22.2" r="1.35" fill="#F7F3EA" />
    </svg>
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn(
        "flex items-center gap-2.5 min-h-11",
        inverted ? "text-cream" : "text-ink",
      )}
      aria-label="Hernandez Irrigation Repairs home"
    >
      <Mark />
      <span className="leading-none">
        <span className="block font-display text-[1.05rem] tracking-tight">Hernandez</span>
        <span
          className={cn(
            "block text-[0.68rem] uppercase tracking-[0.16em] font-medium",
            inverted ? "text-cream/70" : "text-muted",
          )}
        >
          Irrigation Repairs
        </span>
      </span>
    </Link>
  );
}
