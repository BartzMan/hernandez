import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-[transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-sage text-cream hover:bg-sage-deep shadow-[var(--shadow-border)]",
        ink: "bg-ink text-cream hover:bg-ink-soft shadow-[var(--shadow-border)]",
        cream:
          "bg-cream text-ink hover:bg-paper-deep shadow-[var(--shadow-border)]",
        ghost:
          "bg-transparent text-cream hover:bg-cream/10",
        outline:
          "bg-transparent text-ink shadow-[var(--shadow-border)] hover:bg-paper-deep",
        phone:
          "bg-sage text-cream hover:bg-sage-deep",
      },
      size: {
        sm: "h-10 px-3.5 text-sm rounded-full",
        md: "h-12 px-5 text-[0.9375rem] rounded-full",
        lg: "h-14 px-6 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
));
Button.displayName = "Button";

export { buttonVariants };
