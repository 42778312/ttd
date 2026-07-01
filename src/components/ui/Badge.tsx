import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
}

export function Badge({
  className,
  variant = "outline",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium",
        variant === "primary" &&
          "bg-primary/15 text-primary-light border border-primary/25",
        variant === "secondary" &&
          "bg-secondary/10 text-secondary border border-secondary/25",
        variant === "outline" &&
          "border border-white/12 text-on-surface-variant bg-white/[0.02]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
