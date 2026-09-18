import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-md bg-paper px-4 text-ink shadow-[var(--shadow-border)] placeholder:text-faint outline-none transition-[box-shadow] duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
