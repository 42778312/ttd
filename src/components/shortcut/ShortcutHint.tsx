import Link from "next/link";
import { ArrowRight, Smartphone } from "lucide-react";
import { SHORTCUT_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ShortcutHint({ className }: { className?: string }) {
  return (
    <Link
      href={SHORTCUT_URL}
      className={cn(
        "group inline-flex items-center gap-2 px-3 py-2 rounded-xl",
        "glass glass-hover text-xs text-on-surface-variant hover:text-white",
        "transition-colors shrink-0",
        className
      )}
    >
      <Smartphone className="w-3.5 h-3.5 text-secondary shrink-0" />
      <span>
        On iPhone?{" "}
        <span className="text-white/90 group-hover:text-white font-medium">
          Get the TTD Shortcut
        </span>
      </span>
      <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all shrink-0" />
    </Link>
  );
}
