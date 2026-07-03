"use client";

import { Play, Download, Loader2 } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <Card className="w-full max-w-[min(100%,20rem)] shrink-0 overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground">Preview</p>
            <p className="text-sm font-medium truncate">@{video.author}</p>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground border border-border rounded px-1.5 py-0.5 shrink-0">
            HD
          </span>
        </div>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="relative w-full max-h-[min(50dvh,380px)] aspect-[9/16] mx-auto rounded-lg overflow-hidden bg-muted border border-border">
          <Image
            src={video.cover}
            alt={video.title}
            fill
            className="object-cover"
            unoptimized
            sizes="(max-width: 640px) 80vw, 320px"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center">
              <Play className="w-4 h-4 text-foreground fill-foreground ml-0.5" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-sm text-foreground font-medium truncate">{video.title}</p>
          </div>
        </div>

        {downloading && <ProgressBar indeterminate className="mt-3" />}
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full"
          size="sm"
        >
          {downloading ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Download />
          )}
          Download video
        </Button>
      </CardFooter>
    </Card>
  );
}
