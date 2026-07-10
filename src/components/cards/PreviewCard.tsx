"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { DownloadActions } from "./DownloadActions";
import type { VideoData } from "@/types/video";

interface PreviewCardProps {
  video: VideoData;
  onError?: (message: string) => void;
}

export function PreviewCard({ video, onError }: PreviewCardProps) {
  return (
    <Card id="video-preview" className="w-full max-w-2xl mx-auto">
      <CardContent className="p-4 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative w-[140px] shrink-0 mx-auto sm:mx-0 aspect-[9/16] rounded-lg overflow-hidden bg-muted border border-border">
            <Image
              src={video.cover}
              alt={video.title}
              fill
              className="object-cover"
              unoptimized
              sizes="140px"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-background/90 border border-border flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-foreground fill-foreground ml-0.5" />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium">@{video.author}</p>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                {video.title}
              </p>
            </div>

            <DownloadActions video={video} onError={onError} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
