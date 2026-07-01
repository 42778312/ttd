import type { ReactNode } from "react";
import { ArrowRight, Download, Smartphone, Zap } from "lucide-react";
import Link from "next/link";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
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
        className={
          accent
            ? "w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center"
            : "w-8 h-8 rounded-lg glass flex items-center justify-center"
        }
      >
        {icon}
      </div>
      <span className="text-[9px] label-caps text-on-surface-variant">{label}</span>
    </div>
  );
}

export function ShortcutCard({ className }: { className?: string }) {
  return (
    <GlassCard className={cn("flex flex-col h-full min-h-0 overflow-hidden", className)}>
      <div className="flex items-start gap-2 mb-2 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/25 flex items-center justify-center shrink-0">
          <Zap className="w-4 h-4 text-secondary" />
        </div>
        <div className="min-w-0">
          <p className="label-caps text-[9px] text-secondary mb-0.5">iPhone Shortcut</p>
          <h2 className="text-sm font-semibold text-white leading-snug">
            Download faster with{" "}
            <span className="text-gradient-primary">TTD Shortcut</span>
          </h2>
        </div>
      </div>

      <p className="text-[11px] text-on-surface-variant mb-2 leading-relaxed shrink-0">
        Share → run shortcut → done. No browser needed.
      </p>

      <div className="flex items-center justify-center gap-3 py-2 px-2 rounded-xl bg-white/[0.02] border border-white/5 mb-2 shrink-0">
        <FlowStep
          label="TikTok"
          icon={
            <span className="text-[10px] font-bold">
              <span className="text-white">T</span>
              <span className="text-primary">T</span>
            </span>
          }
        />
        <ArrowRight className="w-3 h-3 text-on-surface-variant/50 shrink-0" />
        <FlowStep
          label="TTD"
          accent
          icon={<span className="text-[9px] font-bold text-white">TTD</span>}
        />
        <ArrowRight className="w-3 h-3 text-on-surface-variant/50 shrink-0" />
        <FlowStep
          label="Saved"
          icon={<Download className="w-4 h-4 text-secondary" />}
        />
      </div>

      <Link href={SHORTCUT_URL} className="shrink-0 mb-2">
        <Button className="w-full rounded-lg py-2 text-xs">
          <Smartphone className="w-3.5 h-3.5" />
          Get TTD Shortcut
        </Button>
      </Link>

      <ol className="space-y-1 flex-1 min-h-0 overflow-y-auto">
        {SHORTCUT_STEPS.map((step, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[10px] text-on-surface-variant p-1.5 rounded-lg hover:bg-white/[0.04] transition-colors"
          >
            <span className="shrink-0 w-4 h-4 rounded-full bg-gradient-velocity text-[9px] font-bold text-white flex items-center justify-center mt-px">
              {i + 1}
            </span>
            <span className="leading-snug">{step}</span>
          </li>
        ))}
      </ol>
    </GlassCard>
  );
}
