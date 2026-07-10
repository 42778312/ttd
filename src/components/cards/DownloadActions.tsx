"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { downloadVideo } from "@/lib/api-client";
import type { VideoData } from "@/types/video";

interface DownloadActionsProps {
  video: VideoData;
  onError?: (message: string) => void;
}

export function DownloadActions({ video, onError }: DownloadActionsProps) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    onError?.("");

    const filename = `ttd-${video.author}-${video.id}.mp4`.replace(
      /[^a-zA-Z0-9._-]/g,
      "_"
    );

    try {
      await downloadVideo(video.downloadUrl, filename);
    } catch (err) {
      onError?.(err instanceof Error ? err.message : "Download failed");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="w-full space-y-2">
      <Button
        onClick={handleDownload}
        disabled={downloading}
        className="w-full"
        size="lg"
      >
        {downloading ? (
          <>
            <Loader2 className="animate-spin" />
            Downloading…
          </>
        ) : (
          <>
            <Download />
            Download {video.isHd ? "HD" : ""} Video
          </>
        )}
      </Button>

      {downloading && <ProgressBar indeterminate />}

      {video.isHd && (
        <p className="text-center text-xs text-muted-foreground">
          No watermark · Highest available quality
        </p>
      )}
    </div>
  );
}
