import { Shield, Zap, User, Monitor } from "lucide-react";
import { FEATURE_CHIPS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

const ICONS = {
  shield: Shield,
  hd: Monitor,
  zap: Zap,
  user: User,
} as const;

const VARIANTS = ["primary", "secondary", "outline", "primary"] as const;

export function FeatureChips() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2">
      {FEATURE_CHIPS.map((chip, i) => {
        const Icon = ICONS[chip.icon];
        const variant = VARIANTS[i % VARIANTS.length];
        return (
          <Badge key={chip.label} variant={variant} className="gap-1 py-1 px-2 text-[10px]">
            <Icon className="w-3 h-3" />
            {chip.label}
          </Badge>
        );
      })}
    </div>
  );
}
