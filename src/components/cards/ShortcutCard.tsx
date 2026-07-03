import type { ReactNode } from "react";
import { ArrowRight, Download, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { SHORTCUT_STEPS, SHORTCUT_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FlowStep({
  icon,
  label,
  accent,
}: {
  icon: ReactNode;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={cn(
          "w-8 h-8 rounded-md flex items-center justify-center border",
          accent ? "bg-primary border-primary" : "bg-muted border-border"
        )}
      >
        {icon}
      </div>
      <span className="text-[9px] label-caps text-muted-foreground">{label}</span>
    </div>
  );
}

export function ShortcutCard({ className }: { className?: string }) {
  return (
    <GlassCard className={cn("flex flex-col h-full min-h-0 overflow-hidden", className)}>
      <div className="flex items-start gap-2 mb-2 shrink-0">
        <div className="w-8 h-8 rounded-md bg-muted border border-border flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 text-secondary" />
        </div>
        <div className="min-w-0">
          <p className="label-caps text-[9px] text-muted-foreground mb-0.5">iPhone Shortcut</p>
          <h2 className="text-sm font-semibold text-foreground leading-snug">
            Download faster with TTD Shortcut
          </h2>
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground mb-2 leading-relaxed shrink-0">
        Share → run shortcut → done. No browser needed.
      </p>

      <div className="flex items-center justify-center gap-3 py-2 px-2 rounded-lg bg-muted/50 border border-border mb-2 shrink-0">
        <FlowStep
          label="TikTok"
          icon={
            <span className="text-[10px] font-bold">
              <span className="text-foreground">T</span>
              <span className="text-primary">T</span>
            </span>
          }
        />
        <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
        <FlowStep
          label="TTD"
          accent
          icon={<span className="text-[9px] font-bold text-primary-foreground">TTD</span>}
        />
        <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
        <FlowStep
          label="Saved"
          icon={<Download className="w-4 h-4 text-secondary" />}
        />
      </div>

      <Link href={SHORTCUT_URL} className="shrink-0 mb-2">
        <Button className="w-full" size="sm">
          <Smartphone />
          Get TTD Shortcut
        </Button>
      </Link>

      <ol className="space-y-1 flex-1 min-h-0 overflow-y-auto">
        {SHORTCUT_STEPS.map((step, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[10px] text-muted-foreground p-1.5 rounded-md"
          >
            <span className="shrink-0 w-4 h-4 rounded-full bg-primary text-[9px] font-medium text-primary-foreground flex items-center justify-center mt-px">
              {i + 1}
            </span>
            <span className="leading-snug">{step}</span>
          </li>
        ))}
      </ol>
    </GlassCard>
  );
}
