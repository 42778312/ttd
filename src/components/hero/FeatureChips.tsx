import { Shield, Zap, User, Monitor } from "lucide-react";
import { FEATURE_CHIPS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

const ICONS = {
  shield: Shield,
  hd: Monitor,
  zap: Zap,
  user: User,
} as const;

export function FeatureChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
      {FEATURE_CHIPS.map((chip) => {
        const Icon = ICONS[chip.icon];
        return (
          <Badge
            key={chip.label}
            variant="muted"
            className="gap-1.5 py-1 font-normal"
          >
            <Icon className="w-3 h-3" />
            {chip.label}
          </Badge>
        );
      })}
    </div>
  );
}
