import { UrlInputBar } from "./UrlInputBar";
import type { VideoData } from "@/types/video";

interface HeroSectionProps {
  onResolved: (video: VideoData) => void;
  onError: (message: string) => void;
}

export function HeroSection({ onResolved, onError }: HeroSectionProps) {
  return (
    <section className="relative z-10 shrink-0">
      <UrlInputBar onResolved={onResolved} onError={onError} />
    </section>
  );
}
