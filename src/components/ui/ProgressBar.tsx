import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress?: number;
  indeterminate?: boolean;
  className?: string;
}

export function ProgressBar({
  progress = 0,
  indeterminate = false,
  className,
}: ProgressBarProps) {
  return (
    <div
      className={cn(
        "h-1 w-full rounded-full bg-white/[0.06] overflow-hidden",
        className
      )}
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          "h-full rounded-full bg-gradient-velocity",
          indeterminate
            ? "w-1/3 animate-[shimmer_1.2s_ease-in-out_infinite]"
            : "transition-all duration-300"
        )}
        style={indeterminate ? undefined : { width: `${Math.min(100, progress)}%` }}
      />
    </div>
  );
}
