"use client";

import { useState } from "react";
import { ClipboardPaste, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { PreviewCard } from "@/components/cards/PreviewCard";
import { FeatureChips } from "./FeatureChips";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { resolveVideo } from "@/lib/api-client";
import type { VideoData } from "@/types/video";

interface UrlInputBarProps {
  video: VideoData | null;
  onResolved: (video: VideoData) => void;
  onError: (message: string) => void;
}

export function UrlInputBar({ video, onResolved, onError }: UrlInputBarProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch {
      onError("Could not access clipboard. Please paste manually.");
    }
  };

  const handleDownload = async () => {
    if (!url.trim()) {
      onError("Please paste a TikTok URL first.");
      return;
    }

    setLoading(true);
    onError("");

    try {
      const video = await resolveVideo(url.trim());
      onResolved(video);
    } catch (err) {
      onError(err instanceof Error ? err.message : "Failed to resolve video");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-xl sm:text-2xl lg:text-3xl text-foreground text-center font-semibold mb-2 tracking-tight px-1">
        Download TikToks without limits
      </h1>

      <p className="text-sm text-muted-foreground text-center max-w-md mx-auto mb-5 px-1">
        Save videos in HD. No watermark. No account needed.
      </p>

      <div className="max-w-2xl mx-auto w-full">
        <Card className="p-2">
          <div className="flex flex-col sm:flex-row items-stretch gap-2">
            <div className="flex-1 flex items-center gap-1 sm:gap-2 min-w-0">
              <Input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleDownload()}
                placeholder="Paste TikTok URL"
                className="border-0 shadow-none focus-visible:ring-0 font-mono text-sm min-w-0"
                autoComplete="off"
                autoCapitalize="off"
                enterKeyHint="go"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handlePaste}
                className="shrink-0 text-muted-foreground px-2 sm:px-3"
              >
                <ClipboardPaste />
                <span className="hidden xs:inline">Paste</span>
              </Button>
            </div>

            <Button
              onClick={handleDownload}
              disabled={loading}
              className="shrink-0 w-full sm:w-auto"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Download />
              )}
              {loading ? "Resolving…" : "Get Video"}
            </Button>
          </div>

          {loading && (
            <div className="pt-2 px-1">
              <ProgressBar indeterminate />
            </div>
          )}
        </Card>

        {video && (
          <div className="mt-3">
            <PreviewCard video={video} onError={onError} />
          </div>
        )}
      </div>

      <FeatureChips />
    </div>
  );
}
