"use client";

import { Play, Download, Loader2, Film } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { triggerDownload } from "@/lib/api-client";
import type { VideoData } from "@/types/video";
import { useState } from "react";

interface PreviewCardProps {
  video: VideoData;
}

export function PreviewCard({ video }: PreviewCardProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    const filename = `ttd-${video.author}-${video.id}.mp4`.replace(/[^a-zA-Z0-9._-]/g, "_");
    triggerDownload(video.downloadUrl, filename);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <GlassCard className="flex flex-col w-fit shrink-0 overflow-hidden">
      <div className="flex items-center justify-between mb-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center">
            <Film className="w-4 h-4 text-primary-light" />
          </div>
          <div>
            <p className="label-caps text-[9px] text-primary-light">Preview Video</p>
            <p className="text-xs font-semibold text-white">Ready to save</p>
          </div>
        </div>
        <span className="text-[9px] font-mono text-on-surface-variant bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/8">
          HD
        </span>
      </div>

      <div className="relative h-[min(40dvh,380px)] aspect-[9/16] rounded-xl overflow-hidden bg-surface-container-low border border-white/5 mb-2">
        <Image
          src={video.cover}
          alt={video.title}
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent">
          <p className="text-[10px] font-mono text-secondary truncate">@{video.author}</p>
          <p className="text-xs text-white font-medium truncate">{video.title}</p>
        </div>
      </div>

      {downloading && <ProgressBar indeterminate className="mb-2 shrink-0" />}

      <Button
        onClick={handleDownload}
        disabled={downloading}
        className="w-full rounded-lg py-2 text-xs shrink-0"
      >
        {downloading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
        ) : (
          <Download className="w-3.5 h-3.5" />
        )}
        Download Video
      </Button>
    </GlassCard>
  );
}
