import { UrlInputBar } from "./UrlInputBar";
import type { VideoData } from "@/types/video";

interface HeroSectionProps {
  video: VideoData | null;
  onResolved: (video: VideoData) => void;
  onError: (message: string) => void;
}

export function HeroSection({ video, onResolved, onError }: HeroSectionProps) {
  return (
    <section className="relative z-10 shrink-0">
      <UrlInputBar
        video={video}
        onResolved={onResolved}
        onError={onError}
      />
    </section>
  );
}
