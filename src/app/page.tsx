"use client";

import { useRef, useState } from "react";
import { AlertCircle } from "lucide-react";
import { BackgroundGlow } from "@/components/layout/BackgroundGlow";
import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/hero/HeroSection";
import { PreviewCard } from "@/components/cards/PreviewCard";
import { ShortcutHint } from "@/components/shortcut/ShortcutHint";
import { TrustBar } from "@/components/social/TrustBar";
import { StatsFooter } from "@/components/social/StatsFooter";
import type { VideoData } from "@/types/video";

export default function Home() {
  const [video, setVideo] = useState<VideoData | null>(null);
  const [error, setError] = useState("");
  const [homeKey, setHomeKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleHomeClick = () => {
    setVideo(null);
    setError("");
    setHomeKey((key) => key + 1);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-dvh lg:h-dvh flex flex-col lg:overflow-hidden relative">
      <BackgroundGlow />
      <Header onHomeClick={handleHomeClick} />

      <div
        ref={scrollRef}
        className="flex-1 min-h-0 flex flex-col gap-2 lg:gap-3 max-w-container mx-auto w-full px-gutter pb-3 overflow-y-auto"
      >
        <HeroSection
          key={homeKey}
          onResolved={(v) => {
            setVideo(v);
            setError("");
          }}
          onError={setError}
        />

        {error && (
          <div className="flex items-center justify-center gap-2 text-xs text-error shrink-0 px-3 py-2 rounded-lg bg-error/10 border border-error/20 max-w-md mx-auto">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {video && (
          <div className="flex justify-center shrink-0">
            <PreviewCard video={video} />
          </div>
        )}

        <div className="flex justify-center shrink-0">
          <ShortcutHint />
        </div>

        <TrustBar />
        <StatsFooter />
      </div>
    </main>
  );
}
