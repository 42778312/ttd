import type { ReactNode } from "react";
import { Share2, CheckCircle2, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IphoneFlowMockupProps {
  step: 1 | 2 | 3;
  label: string;
  caption: string;
}

function PhoneFrame({
  children,
  label,
  caption,
  className,
}: {
  children: ReactNode;
  label: string;
  caption: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-[140px] sm:w-[160px]">
        <div className="rounded-[28px] border-[3px] border-white/20 bg-[#0a0a0a] p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-3.5 rounded-full bg-black z-10" />
          <div className="rounded-[22px] overflow-hidden aspect-[9/19.5] bg-surface-container-low relative">
            {children}
          </div>
        </div>
        <div className="absolute -right-1 top-20 w-0.5 h-8 rounded-full bg-white/15" />
        <div className="absolute -left-1 top-16 w-0.5 h-5 rounded-full bg-white/15" />
        <div className="absolute -left-1 top-24 w-0.5 h-5 rounded-full bg-white/15" />
      </div>
      <p className="mt-3 text-[10px] label-caps text-secondary">{label}</p>
      <p className="mt-1 text-xs text-on-surface-variant text-center max-w-[160px] leading-snug">
        {caption}
      </p>
    </div>
  );
}

function TikTokScreen() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-violet-900/40 via-background to-background" />
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-16 h-16 rounded-full border-2 border-white/20" />
      </div>
      <div className="absolute bottom-0 inset-x-0 p-2 space-y-1.5">
        <div className="h-1.5 w-20 rounded bg-white/40" />
        <div className="h-1 w-28 rounded bg-white/20" />
      </div>
      <div className="absolute right-2 bottom-16 flex flex-col gap-2">
        <div className="w-6 h-6 rounded-full bg-white/10" />
        <div className="w-6 h-6 rounded-full bg-white/10" />
        <div
          className="w-7 h-7 rounded-full bg-primary flex items-center justify-center"
          aria-hidden
        >
          <Share2 className="w-3.5 h-3.5 text-white" />
        </div>
      </div>
      <div className="absolute top-8 left-2 right-2 flex justify-between items-center">
        <span className="text-[8px] font-bold text-white/60">Following</span>
        <span className="text-[8px] font-bold text-white">For You</span>
      </div>
    </>
  );
}

function ShareSheetScreen() {
  return (
    <>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute bottom-0 inset-x-0 rounded-t-2xl bg-[#1c1c1e] p-2 pt-3">
        <div className="w-8 h-1 rounded-full bg-white/20 mx-auto mb-2" />
        <p className="text-[7px] text-white/40 text-center mb-2">Share</p>
        <div className="grid grid-cols-4 gap-1.5 mb-2">
          {["Copy", "Save", "More", "···"].map((item) => (
            <div key={item} className="flex flex-col items-center gap-0.5">
              <div className="w-7 h-7 rounded-lg bg-white/10" />
              <span className="text-[6px] text-white/50">{item}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-1.5 space-y-1">
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5">
            <div className="w-6 h-6 rounded-md bg-white/10" />
            <span className="text-[8px] text-white/60">AirDrop</span>
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-lg bg-primary/20 border border-primary/40 ring-1 ring-primary/30">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <span className="text-[6px] font-bold text-white">TTD</span>
            </div>
            <span className="text-[8px] text-white font-medium">TTD</span>
            <Share2 className="w-3 h-3 text-primary ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

function PhotosScreen() {
  return (
    <>
      <div className="absolute inset-0 bg-[#000]" />
      <div className="absolute top-8 inset-x-2">
        <p className="text-[9px] font-semibold text-white mb-2">Photos</p>
        <div className="grid grid-cols-3 gap-0.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "aspect-square rounded-sm",
                i === 0
                  ? "bg-gradient-to-br from-secondary/30 to-primary/30 ring-1 ring-secondary"
                  : "bg-white/5"
              )}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 inset-x-2">
        <div className="rounded-lg px-2 py-1.5 flex items-center gap-1.5 border border-border bg-card">
          <CheckCircle2 className="w-3 h-3 text-secondary shrink-0" />
          <span className="text-[7px] text-white leading-tight">
            Downloaded by TTD — no watermark!
          </span>
        </div>
      </div>
      <div className="absolute bottom-14 right-2">
        <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
          <ImageIcon className="w-4 h-4 text-secondary" />
        </div>
      </div>
    </>
  );
}

const SCREENS = {
  1: TikTokScreen,
  2: ShareSheetScreen,
  3: PhotosScreen,
} as const;

export function IphoneFlowMockup({ step, label, caption }: IphoneFlowMockupProps) {
  const Screen = SCREENS[step];

  return (
    <PhoneFrame label={label} caption={caption}>
      <Screen />
    </PhoneFrame>
  );
}

export function IphoneFlowShowcase() {
  return (
    <div className="flex items-start justify-center gap-4 sm:gap-8 flex-wrap">
      <IphoneFlowMockup
        step={1}
        label="Step 1"
        caption="Open any TikTok video and tap Share"
      />
      <div className="hidden sm:flex items-center pt-16 text-on-surface-variant/30">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path
            d="M0 6h20M16 1l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <IphoneFlowMockup
        step={2}
        label="Step 2"
        caption="Select TTD from the Share Sheet"
      />
      <div className="hidden sm:flex items-center pt-16 text-on-surface-variant/30">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path
            d="M0 6h20M16 1l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <IphoneFlowMockup
        step={3}
        label="Step 3"
        caption="Video saves to Photos — watermark-free"
      />
    </div>
  );
}
