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
    <main className="min-h-dvh flex flex-col relative">
      <BackgroundGlow />
      <Header onHomeClick={handleHomeClick} />

      <div
        ref={scrollRef}
        className="flex-1 min-h-0 flex flex-col gap-3 sm:gap-4 max-w-container mx-auto w-full px-gutter pb-safe overflow-y-auto overscroll-y-contain lg:max-h-[calc(100dvh-4.5rem)] lg:overflow-y-auto"
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
          <div className="flex items-center justify-center gap-2 text-sm text-destructive shrink-0 px-3 py-2 rounded-md bg-destructive/10 border border-destructive/20 max-w-md mx-auto w-full">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <p className="text-center">{error}</p>
          </div>
        )}

        {video && (
          <div className="flex justify-center shrink-0 w-full px-1">
            <PreviewCard video={video} />
          </div>
        )}

        <div className="flex justify-center shrink-0 px-1">
          <ShortcutHint className="max-w-full whitespace-normal text-center h-auto py-2" />
        </div>

        <TrustBar />
        <StatsFooter />
      </div>
    </main>
  );
}
