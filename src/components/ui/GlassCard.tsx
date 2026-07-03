import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Card } from "@/components/ui/card";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  elevated?: boolean;
}

export function GlassCard({
  className,
  hover = false,
  elevated = false,
  children,
  ...props
}: GlassCardProps) {
  return (
    <Card
      className={cn(
        "p-3 lg:p-4",
        elevated && "shadow-md",
        hover && "transition-colors hover:bg-accent/50",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}
