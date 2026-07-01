import { Download, Users, Smartphone, Activity } from "lucide-react";
import { STATS } from "@/lib/constants";

const ICONS = [Download, Users, Smartphone, Activity];

export function StatsFooter() {
  return (
    <footer className="shrink-0">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-2" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {STATS.map((stat, i) => {
          const Icon = ICONS[i];
          return (
            <div key={stat.label} className="flex items-center gap-2 py-1">
              <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-secondary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{stat.value}</p>
                <p className="text-[9px] text-on-surface-variant truncate">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
