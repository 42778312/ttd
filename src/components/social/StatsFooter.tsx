import { STATS } from "@/lib/constants";

export function StatsFooter() {
  return (
    <footer className="shrink-0 pt-2 border-t border-border/60">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3">
        {STATS.map((stat) => (
          <div key={stat.label} className="py-1 text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </footer>
  );
}
